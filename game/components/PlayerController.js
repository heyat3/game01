class PlayerController extends Component {
    start() {
        this.velocity = new Vector2(2, 2)
        this.nextFireFrame = 10
        this.frame = 0
        this.speed = 500
    }

    update() {
        if (GameGlobals.riddleStarted) {return}

        // console.log("Player Controller Updated")
        this.frame++

        console.log(Input.keysDown)
        console.log(GameGlobals.currentElement)

        let proposedChange = Vector2.zero

        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA")) {
            proposedChange.plusEquals(Vector2.left)
        }
        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD")) {
            proposedChange.plusEquals(Vector2.right)
        }
        if (Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW")) {
            proposedChange.plusEquals(Vector2.up)
        }
        if (Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS")) {
            proposedChange.plusEquals(Vector2.down)
        }

        this.transform.position.plusEquals(proposedChange.times(Time.deltaTime * this.speed))

        Camera.main.transform.position = this.transform.position.clone()

        // Shooting elements
        if (this.frame >= this.nextFireFrame){
            if (Input.keysDown.includes("Space") && GameGlobals.currentElement == "fire") {
                // SceneManager.getActiveScene().instantiate(new FireElemGameObject(), this.transform.position.plus(Vector2.right.times(20)))
                const spawnPos = this.transform.position.plus(Vector2.right.times(20))

                SceneManager.getActiveScene().instantiate(new FireElemGameObject(), spawnPos).getComponent(FireElemController).aimDirection()
            }
            if (Input.keysDown.includes("Space") && GameGlobals.currentElement == "ice") {
                const spawnPos = this.transform.position.plus(Vector2.right.times(20))

                SceneManager.getActiveScene().instantiate(new IceElemGameObject(), spawnPos).getComponent(IceElemController).aimDirection()
            }
            if (Input.keysDown.includes("Space") && GameGlobals.currentElement == "wind") {
                const spawnPos = this.transform.position.plus(Vector2.right.times(20))

                SceneManager.getActiveScene().instantiate(new WindElemGameObject(), spawnPos).getComponent(WindElemController).aimDirection()
            }
            if (Input.keysDown.includes("Space") && GameGlobals.currentElement == "earth") {
                const spawnPos = this.transform.position.plus(Vector2.right.times(20))

                SceneManager.getActiveScene().instantiate(new EarthElemGameObject(), spawnPos).getComponent(EarthElemController).aimDirection()
            }

            this.nextFireFrame = this.frame + 50
        }
    }

    onCollisionEnter(other) {
        // if (other.name == "Wall Game Object") {
        //     this.velocity = Vector2.zero
        // } else {
        //     this.velocity = new Vector2(1, 1)
        // }

        // Changing elements on element collisions
        if (other.name == "Fire Game Object") {
            console.log("Collided with fire element")
            GameGlobals.currentElement = "fire"
        }
        
        if (other.name == "Ice Game Object") {
            console.log("Collided with ice element")
            GameGlobals.currentElement = "ice"
        }
        
        if (other.name == "Wind Game Object") {
            console.log("Collided with wind element")
            GameGlobals.currentElement = "wind"
        }
        
        if (other.name == "Earth Game Object") {
            console.log("Collided with earth element")
            GameGlobals.currentElement = "earth"
        }

        if (other.name == "Health Buff Game Object") {
            console.log("Collided with health buff")
            GameGlobals.health += 5
        }

        // Changing scenes on door collisions
        if (other.name == "Main Fire Door Game Object" && GameGlobals.elementsFound.includes("fire")) {
            console.log("Collided with fire door")
            SceneManager.loadScene(new FireRoomScene())
        }
        if (other.name == "Main Ice Door Game Object" && GameGlobals.elementsFound.includes("ice")) {
            console.log("Collided with ice door")
            SceneManager.loadScene(new IceRoomScene())
        } 
        if (other.name == "Main Wind Door Game Object" && GameGlobals.elementsFound.includes("wind")) {
            console.log("Collided with wind door")
            SceneManager.loadScene(new WindRoomScene())
        } 
        if (other.name == "Main Earth Door Game Object" && GameGlobals.elementsFound.includes("earth")) {
            console.log("Collided with earth door")
            SceneManager.loadScene(new EarthRoomScene())
        } 

        // from rooms to main
        if (other.name == "Fire Door Game Object") {
            console.log("Collided with fire door")
            SceneManager.loadScene(new MainScene(new Vector2(-950, 50)))
        }
        if (other.name == "Ice Door Game Object") {
            console.log("Collided with ice door")
            SceneManager.loadScene(new MainScene(new Vector2(920, 60)))
        } 
        if (other.name == "Wind Door Game Object") {
            console.log("Collided with wind door")
            SceneManager.loadScene(new MainScene(new Vector2(-10, 65)))
        } 
        if (other.name == "Earth Door Game Object") {
            console.log("Collided with earth door")
            SceneManager.loadScene(new MainScene(new Vector2(-100, 850)))
        } 

        // trials
        if (other.name == "Trial 1 Door Game Object") {
            console.log("Collided with trial 1 door")
            SceneManager.loadScene(new Trial1RoomScene())
        }
        if (other.name == "Trial 2 Door Game Object") {
            console.log("Collided with trial 2 door")
            SceneManager.loadScene(new Trial2RoomScene())
        }
        if (other.name == "Trial 3 Door Game Object") {
            console.log("Collided with trial 3 door")
            SceneManager.loadScene(new Trial3RoomScene())
        }
    }
}