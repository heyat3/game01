class StartButtonController extends Component {
    update() {
        // console.log("Start Button Controller Updated")
        
        if (Input.mousePosition) {
            if (Input.buttonsDownThisFrame.length > 0) {
                if (Collisions.raycast(Input.mousePosition) == this.gameObject) {
                    SceneManager.loadScene(new MainScene())
                }
                // if (Collisions.raycast(Input.mousePosition) == this.gameObject && SceneManager.getActiveScene() == new GameOverScene()) {
                //     SceneManager.loadScene(new StartScene())
                // }
            }
        }
    }
}
class EndButtonController extends Component {
    update() {
        // console.log("End Button Controller Updated")

        if (Input.mousePosition) {
            if (Input.buttonsDownThisFrame.length > 0) {
                if (Collisions.raycast(Input.mousePosition) == this.gameObject) {
                    SceneManager.loadScene(new StartScene())
                }
                // if (Collisions.raycast(Input.mousePosition) == this.gameObject && SceneManager.getActiveScene() == new GameOverScene()) {
                //     SceneManager.loadScene(new StartScene())
                // }
            }
        }
    }
}