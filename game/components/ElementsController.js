class FireController extends Component {
    update() {
        console.log(GameGlobals.elementsFound)
    }

    onCollisionEnter(other) {
        if (other.name == "Player Game Object") {
            this.gameObject.destroy()
            GameGlobals.currentElement = "fire"
            if (!GameGlobals.elementsFound.includes("fire")){GameGlobals.elementsFound.push("fire")}
        }
    }
}

class IceController extends Component {
    onCollisionEnter(other) {
        if (other.name == "Player Game Object") {
            this.gameObject.destroy()
            GameGlobals.currentElement = "ice"
            if (!GameGlobals.elementsFound.includes("ice")){GameGlobals.elementsFound.push("ice")}
        }
    }
}

class WindController extends Component {
    onCollisionEnter(other) {
        if (other.name == "Player Game Object") {
            this.gameObject.destroy()
            GameGlobals.currentElement = "wind"
            if (!GameGlobals.elementsFound.includes("wind")){GameGlobals.elementsFound.push("wind")}
        }
    }
}

class EarthController extends Component {
    onCollisionEnter(other) {
        if (other.name == "Player Game Object") {
            this.gameObject.destroy()
            GameGlobals.currentElement = "earth"
            if (!GameGlobals.elementsFound.includes("earth")){GameGlobals.elementsFound.push("earth")}

        }
    }
}

class HealthBuffController extends Component {
    onCollisionEnter(other) {
        if (other.name == "Player Game Object") {
            this.gameObject.destroy()
        }
    }
}