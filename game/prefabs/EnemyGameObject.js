class EnemyMeleeGameObject extends GameObject {
    constructor() {
        super("Enemy Melee Game Object", {layer:"enemy", tag: "enemy"})

        this.addComponent(new EnemyController())

        const shouldMoveRightSequence = new BTSequence([new BTShouldMoveRightMelee(), new BTMoveRight()])
        const shouldMoveLeftSequence = new BTSequence([new BTShouldMoveLeftMelee(), new BTMoveLeft()])
        const shouldMoveDownSequence = new BTSequence([new BTShouldMoveDownMelee(), new BTMoveDown()])
        const shouldMoveUpSequence = new BTSequence([new BTShouldMoveUpMelee(), new BTMoveUp()])
        
        // const movementSelector = new BTSelector([shouldMoveRightSequence, shouldMoveLeftSequence, shouldMoveDownSequence, shouldMoveUpSequence])

        const movementSelectorLR = new BTSelector([shouldMoveRightSequence, shouldMoveLeftSequence])
        const movementSelectorUD = new BTSelector([shouldMoveDownSequence, shouldMoveUpSequence])

        const movementSelector = new BTSequence([movementSelectorLR, movementSelectorUD])

        this.addComponent(new BehaviorTree(), {node: new BTRepeater(movementSelector)})
        this.addComponent(new Polygon(), {fillStyle: "#3f080bff", points:[new Vector2(1, 0), new Vector2(2, 3), new Vector2(0, 3)]})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(10, 15)
    }
}

class EnemyMageGameObject extends GameObject {
    constructor() {
        super("Enemy Mage Game Object", {layer:"enemy", tag: "enemy"})

        this.addComponent(new EnemyController())

        const fireSequence = new BTSequence([new BTDuration(5), new BTFire()])

        const shouldMoveRightSequence = new BTSequence([new BTShouldMoveRight(), new BTMoveRight()])
        const shouldMoveLeftSequence = new BTSequence([new BTShouldMoveLeft(), new BTMoveLeft()])
        const shouldMoveDownSequence = new BTSequence([new BTShouldMoveDown(), new BTMoveDown()])
        const shouldMoveUpSequence = new BTSequence([new BTShouldMoveUp(), new BTMoveUp()])

        // const movementSelector = new BTSelector([shouldMoveRightSequence, shouldMoveLeftSequence, shouldMoveDownSequence, shouldMoveUpSequence])

        const movementSelectorLR = new BTSelector([shouldMoveRightSequence, shouldMoveLeftSequence])
        const movementSelectorUD = new BTSelector([shouldMoveDownSequence, shouldMoveUpSequence])

        const movementSelector = new BTSequence([movementSelectorLR, movementSelectorUD])

        const moveOrFire = new BTSelector([movementSelector, fireSequence])

        this.addComponent(new BehaviorTree(), {node: new BTRepeater(moveOrFire)})
        this.addComponent(new Polygon(), {fillStyle: "#46033bff", points:[new Vector2(1, 0), new Vector2(2, 3), new Vector2(0, 3)]})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(10, 20)
    }
}

class EnemyLaserGameObject extends GameObject {
    constructor() {
        super("Enemy Laser Game Object", {layer: "enemy-laser", tag: "enemy-laser"})

        this.addComponent(new EnemyLaserController())

        // this.addComponent(new BehaviorTree())
        this.addComponent(new Polygon(), {fillStyle: "#2d031fff", points: GameAssets.square})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(3, 6)
    }
}

class BTMoveRight {
    update(tree) {
        tree.gameObject.transform.position.x += Time.deltaTime * 100
        return BehaviorTree.SUCCEEDED
    }
}

class BTMoveLeft {
    update(tree) {
        tree.gameObject.transform.position.x -= Time.deltaTime * 100
        return BehaviorTree.SUCCEEDED
    }
}

class BTMoveUp {
    update(tree) {
        tree.gameObject.transform.position.y -= Time.deltaTime * 100
        return BehaviorTree.SUCCEEDED
    }
}

class BTMoveDown {
    update(tree) {
        tree.gameObject.transform.position.y += Time.deltaTime * 100
        return BehaviorTree.SUCCEEDED
    }
}

class BTShouldMoveRightMelee {
    update(tree) {
        if (tree.gameObject.transform.position.x < GameObject.find("Player Game Object").transform.position.x) {
            return BehaviorTree.SUCCEEDED
        }
        return BehaviorTree.FAILED
    }
}

class BTShouldMoveLeftMelee {
    update(tree) {
        if (tree.gameObject.transform.position.x > GameObject.find("Player Game Object").transform.position.x) {
            return BehaviorTree.SUCCEEDED
        }
        return BehaviorTree.FAILED
    }
}

class BTShouldMoveUpMelee {
    update(tree) {
        if (tree.gameObject.transform.position.y > GameObject.find("Player Game Object").transform.position.y) {
            return BehaviorTree.SUCCEEDED
        }
        return BehaviorTree.FAILED
    }
}

class BTShouldMoveDownMelee {
    update(tree) {
        if (tree.gameObject.transform.position.y < GameObject.find("Player Game Object").transform.position.y) {
            return BehaviorTree.SUCCEEDED
        }
        return BehaviorTree.FAILED
    }
}

class BTShouldMoveRight {
    update(tree) {
        if (tree.gameObject.transform.position.x < GameObject.find("Player Game Object").transform.position.x - 200 || (tree.gameObject.transform.position.x < GameObject.find("Player Game Object") && tree.gameObject.transform.position.x > GameObject.find("Player Game Object") + 200)) {
            return BehaviorTree.SUCCEEDED
        }
        return BehaviorTree.FAILED
    }
}

class BTShouldMoveLeft {
    update(tree) {
        if (tree.gameObject.transform.position.x > GameObject.find("Player Game Object").transform.position.x + 200 || (tree.gameObject.transform.position.x > GameObject.find("Player Game Object") && tree.gameObject.transform.position.x < GameObject.find("Player Game Object") - 200)) {
            return BehaviorTree.SUCCEEDED
        }
        return BehaviorTree.FAILED
    }
}

class BTShouldMoveUp {
    update(tree) {
        if (tree.gameObject.transform.position.y > GameObject.find("Player Game Object").transform.position.y + 200 || (tree.gameObject.transform.position.y > GameObject.find("Player Game Object") && tree.gameObject.transform.position.y < GameObject.find("Player Game Object") - 200)) {
            return BehaviorTree.SUCCEEDED
        }
        return BehaviorTree.FAILED
    }
}

class BTShouldMoveDown {
    update(tree) {
        if (tree.gameObject.transform.position.y < GameObject.find("Player Game Object").transform.position.y - 200 || (tree.gameObject.transform.position.y < GameObject.find("Player Game Object") && tree.gameObject.transform.position.y > GameObject.find("Player Game Object") + 200)) {
            return BehaviorTree.SUCCEEDED
        }
        return BehaviorTree.FAILED
    }
}

class BTFire {
    update(tree) {
        SceneManager.getActiveScene().instantiate(new EnemyLaserGameObject(), tree.gameObject.transform.position.clone().plus(Vector2.up.times(10))).getComponent(EnemyLaserController).aimDirection()
        return BehaviorTree.SUCCEEDED
    }
}