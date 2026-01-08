class EnemyController extends Component {
    start() {
        this.velocity = new Vector2(2, 2)
        this.time = 0
    }

    update() {
        if (this.transform.position.x < GameObject.find("Player Game Object").transform.position.x - 5000 || this.transform.position.x > GameObject.find("Player Game Object").transform.position.x + 5000 || this.transform.position.y < GameObject.find("Player Game Object").transform.position.y - 5000 || this.transform.position.y > GameObject.find("Player Game Object").transform.position.y + 5000) {
            this.gameObject.destroy()
        }
    }

    onCollisionEnter(other) {
        if (other.name == "Fire Element Game Object") {
            this.gameObject.destroy()
        }
        if (other.name == "Ice Element Game Object") {
            this.gameObject.destroy()
        }
        if (other.name == "Wind Element Game Object") {
            this.gameObject.destroy()
        }
        if (other.name == "Earth Element Game Object") {
            this.gameObject.destroy()
        }
        
        if (other.name == "Player Game Object") {
            this.gameObject.destroy()
            GameGlobals.health--
        }
    }
}

class EnemyLaserController extends Component {
    constructor(direction) {
        super()
        this.direction = direction
    }
    start() {
        this.speed = 500
        this.direction = this.aimDirection()
    }

    update() {
        this.transform.position.x += this.direction.x * this.speed * Time.deltaTime
        this.transform.position.y += this.direction.y * this.speed * Time.deltaTime
    }

    aimDirection() {
        const playerPos = GameObject.find("Player Game Object").transform.position

        const offset = playerPos.minus(this.transform.position)

        const offsetRadians = Math.atan2(offset.y, offset.x)

        const direcX = Math.cos(offsetRadians)
        const direcY = Math.sin(offsetRadians)

        return new Vector2(direcX, direcY)
    }

    onCollisionEnter(other) {
        if (other.name == "Wall Game Object") {
            this.gameObject.destroy()
        }
        if (other.name == "Player Game Object") {
            GameGlobals.health--
            this.gameObject.destroy()
        }
    }
}