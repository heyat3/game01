class StartSceneController extends Component {
    start() {
        this.time = 0
    }

    update() {
        // console.log("Start Scene Controller Updated")
        this.time += Time.deltaTime
        // if(Input.buttonsDownThisFrame.length > 0) {
        //     SceneManager.loadScene(new MainScene())
        // }
    }
}

class GameOverSceneController extends Component {
    start() {
        this.time = 0
    }

    update() {
        // console.log("Game Over Controller Updated")
        this.time += Time.deltaTime
        // if(Input.buttonsDownThisFrame.length > 0) {
        //     SceneManager.loadScene(new StartScene())
        // }
    }
}

class StartElementController extends Component {
    update() {
        // console.log("Start Element Controller Updated")
        this.transform.rotation += -Time.deltaTime
    }
}