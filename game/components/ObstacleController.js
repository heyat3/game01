class ObstacleController extends Component {
    onCollisionEnter(other) {
        if (other.name == "Player Game Object") {
            GameObject.find("Player Game Object").transform.position.x = 0
            GameObject.find("Player Game Object").transform.position.y = 400

            GameGlobals.health--
        }
    }
}

class ObstacleExitController extends Component {
    start() {
        this.obstacleDone = false
    }
    onCollisionEnter(other) {
        if (other.name == "Player Game Object") {
            this.obstacleDone = true
        }
    }
}