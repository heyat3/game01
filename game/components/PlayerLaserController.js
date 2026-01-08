class FireElemController extends Component {
    constructor(direction){
        super()
        this.direction = direction
    }
    
    start() {
        this.speed = 700
        this.direction = this.aimDirection()
    }
    update() {
        // this.transform.position.y += this.speed * Time.deltaTime

        // const direc = this.direction
        this.transform.position.x += this.direction.x * this.speed * Time.deltaTime
        this.transform.position.y += this.direction.y * this.speed * Time.deltaTime

        if (this.transform.position.y < -2000 || this.transform.position.y > 2000 ||
            this.transform.position.x < -2000 || this.transform.position.x > 2000) {
            this.gameObject.destroy()
        }
    }
    onCollisionEnter(other) {
        if (other.name == "Wall Game Object") {
            this.gameObject.destroy()
        }
    }

    aimDirection() {
        const mousePos = Input.mousePosition
        const worldMouse = Camera.screenToWorldSpace(mousePos)
        const playerPos = GameObject.find("Player Game Object").transform.position

        const offset = worldMouse.minus(playerPos)

        const offsetRadians = Math.atan2(offset.y, offset.x)

        const direcX = Math.cos(offsetRadians)
        const direcY = Math.sin(offsetRadians)

        return new Vector2(direcX, direcY)
    }
}

class IceElemController extends Component {
    constructor(direction){
        super()
        this.direction = direction
    }

    start() {
        this.speed = 300
        this.direction = this.aimDirection()
    }
    update() {
        // this.transform.position.y += this.speed * Time.deltaTime

        // const direc = this.direction
        this.transform.position.x += this.direction.x * this.speed * Time.deltaTime
        this.transform.position.y += this.direction.y * this.speed * Time.deltaTime

        if (this.transform.position.y < -2000 || this.transform.position.y > 2000 ||
            this.transform.position.x < -2000 || this.transform.position.x > 2000) {
            this.gameObject.destroy()
        }
    }
    onCollisionEnter(other) {
        if (other.name == "Wall Game Object") {
            this.gameObject.destroy()
        }
    }

    aimDirection() {
        const mousePos = Input.mousePosition
        const worldMouse = Camera.screenToWorldSpace(mousePos)
        const playerPos = GameObject.find("Player Game Object").transform.position

        const offset = worldMouse.minus(playerPos)

        const offsetRadians = Math.atan2(offset.y, offset.x)

        const direcX = Math.cos(offsetRadians)
        const direcY = Math.sin(offsetRadians)

        return new Vector2(direcX, direcY)
    }
}

class WindElemController extends Component {
    constructor(direction){
        super()
        this.direction = direction
        this.direction = this.aimDirection()
    }

    start() {
        this.speed = 300
    }
    update() {
        // this.transform.position.y += this.speed * Time.deltaTime

        // const direc = this.direction
        this.transform.position.x += this.direction.x * this.speed * Time.deltaTime
        this.transform.position.y += this.direction.y * this.speed * Time.deltaTime

        if (this.transform.position.y < -2000 || this.transform.position.y > 2000 ||
            this.transform.position.x < -2000 || this.transform.position.x > 2000) {
            this.gameObject.destroy()
        }
    }
    onCollisionEnter(other) {
        if (other.name == "Wall Game Object") {
            this.gameObject.destroy()
        }
    }

    aimDirection() {
        const mousePos = Input.mousePosition
        const worldMouse = Camera.screenToWorldSpace(mousePos)
        const playerPos = GameObject.find("Player Game Object").transform.position

        const offset = worldMouse.minus(playerPos)

        const offsetRadians = Math.atan2(offset.y, offset.x)

        const direcX = Math.cos(offsetRadians)
        const direcY = Math.sin(offsetRadians)

        return new Vector2(direcX, direcY)
    }
}

class EarthElemController extends Component {
    constructor(direction){
        super()
        this.direction = direction
    }

    start() {
        this.speed = 300
        this.direction = this.aimDirection()
    }
    update() {
        // this.transform.position.y += this.speed * Time.deltaTime

        // const direc = this.direction
        this.transform.position.x += this.direction.x * this.speed * Time.deltaTime
        this.transform.position.y += this.direction.y * this.speed * Time.deltaTime

        if (this.transform.position.y < -2000 || this.transform.position.y > 2000 ||
            this.transform.position.x < -2000 || this.transform.position.x > 2000) {
            this.gameObject.destroy()
        }
    }
    onCollisionEnter(other) {
        if (other.name == "Wall Game Object") {
            this.gameObject.destroy()
        }
    }

    aimDirection() {
        const mousePos = Input.mousePosition
        const worldMouse = Camera.screenToWorldSpace(mousePos)
        const playerPos = GameObject.find("Player Game Object").transform.position

        const offset = worldMouse.minus(playerPos)

        const offsetRadians = Math.atan2(offset.y, offset.x)

        const direcX = Math.cos(offsetRadians)
        const direcY = Math.sin(offsetRadians)

        return new Vector2(direcX, direcY)
    }
}