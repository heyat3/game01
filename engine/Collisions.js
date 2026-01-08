class Collisions {
    static inCollision(a, b) {
        const originalPointsA = a.getComponent(Polygon).points
        const originalPointsB = b.getComponent(Polygon).points

        const worldPointsA = originalPointsA.map(p => p.rotate(a.transform.rotation).scale(a.transform.scale).plus(a.transform.position))
        const worldPointsB = originalPointsB.map(p => p.rotate(a.transform.rotation).scale(b.transform.scale).plus(b.transform.position))


        const lines = []

        for (const polygonPoints of [worldPointsA, worldPointsB]) {
            for (let i = 0; i < polygonPoints.length; i++) {
                const a = polygonPoints[i]
                const b = polygonPoints[(i+1) % polygonPoints.length]

                lines.push(a.minus(b).orthongal().normalize())
            }
        }


        const diffs = []

        for (const line of lines) {
            const oneDots = worldPointsA.map(p => p.dot(line))
            const twoDots = worldPointsB.map(p => p.dot(line))

            const diffA = Math.max(...oneDots) - Math.min(...twoDots)
            const diffB = Math.max(...twoDots) - Math.min(...oneDots)

            if (diffA < 0 || diffB < 0) {
                return false
            }

            const minDiff = Math.min(diffA, diffB)
            diffs.push(minDiff)
        }

        const minDiff = Math.min(...diffs)
        const minDiffIndex = diffs.indexOf(minDiff)
        const mtvLine = lines[minDiffIndex]
        return mtvLine.times(minDiff)
    }

    static inCollisionPointGameObject(a, b) {
        const originalPointsB = b.getComponent(Polygon).points
        const worldPointsB = originalPointsB.map(p => Vector2.fromDOMPoint(b.transform.getWorldMatrix().transformPoint(p.toDOMPoint())))


        const lines = []

        for (const polygonPoints of [worldPointsB]) {
            for (let i = 0; i < polygonPoints.length; i++) {
                const a = polygonPoints[i]
                const b = polygonPoints[(i + 1) % polygonPoints.length]

                lines.push(a.minus(b).orthongal().normalize())
            }
        }


        const diff = []

        for (const line of lines) {
            const oneDots = [a].map(p => p.dot(line))
            const twoDots = worldPointsB.map(p => p.dot(line))

            const diffA = Math.max(...oneDots) - Math.min(...twoDots)
            const diffB = Math.max(...twoDots) - Math.min(...oneDots)

            if (diffA < 0 || diffB < 0) return false
        }

        return true
    }

    static raycast(point) {
        for (const gameObject of SceneManager.getActiveScene().gameObjects.filter(go => go.layer == "UI" && go.getComponent(Collider))) {
            if (Collisions.inCollisionPointGameObject(point, gameObject)) {
                return gameObject
            }
        }
    }
}