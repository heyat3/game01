class ElementMenuController extends Component {
    start() {

    }

    update() {
        
    }
}

class FireMenuController extends Component {
    update() {
        // console.log("Start Button Controller Updated")
        
        if (Input.mousePosition) {
            if (Input.buttonsDownThisFrame.length > 0) {
                if (Collisions.raycast(Input.mousePosition) == this.gameObject) {
                    GameGlobals.currentElement = "fire"
                }
                // if (Collisions.raycast(Input.mousePosition) == this.gameObject && SceneManager.getActiveScene() == new GameOverScene()) {
                //     SceneManager.loadScene(new StartScene())
                // }
            }
        }
    }
}

class IceMenuController extends Component {
    update() {
        // console.log("Start Button Controller Updated")
        
        if (Input.mousePosition) {
            if (Input.buttonsDownThisFrame.length > 0) {
                if (Collisions.raycast(Input.mousePosition) == this.gameObject) {
                    GameGlobals.currentElement = "ice"
                }
                // if (Collisions.raycast(Input.mousePosition) == this.gameObject && SceneManager.getActiveScene() == new GameOverScene()) {
                //     SceneManager.loadScene(new StartScene())
                // }
            }
        }
    }
}

class WindMenuController extends Component {
    update() {
        // console.log("Start Button Controller Updated")
        
        if (Input.mousePosition) {
            if (Input.buttonsDownThisFrame.length > 0) {
                if (Collisions.raycast(Input.mousePosition) == this.gameObject) {
                    GameGlobals.currentElement = "wind"
                }
                // if (Collisions.raycast(Input.mousePosition) == this.gameObject && SceneManager.getActiveScene() == new GameOverScene()) {
                //     SceneManager.loadScene(new StartScene())
                // }
            }
        }
    }
}

class EarthMenuController extends Component {
    update() {
        // console.log("Start Button Controller Updated")
        
        if (Input.mousePosition) {
            if (Input.buttonsDownThisFrame.length > 0) {
                if (Collisions.raycast(Input.mousePosition) == this.gameObject) {
                    GameGlobals.currentElement = "earth"
                }
                // if (Collisions.raycast(Input.mousePosition) == this.gameObject && SceneManager.getActiveScene() == new GameOverScene()) {
                //     SceneManager.loadScene(new StartScene())
                // }
            }
        }
    }
}