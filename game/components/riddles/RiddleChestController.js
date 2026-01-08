class RiddleChestController extends Component {
    start() {
        GameGlobals.riddleStarted = false
    }

    update() {
        if (GameGlobals.trial2clear) {
            // this.gameObject.destroy()
            GameGlobals.riddleStarted = false
            // SceneManager.loadScene(new EarthRoomScene(new Vector2(-670, 1930)))
        }
    }

    onCollisionEnter(other) {
        if (other.name == "Player Game Object") {
            // const textBlock = new GameObject("Riddle Text Block Game Object", {layer: "UI"})
            // textBlock.addComponent(new Polygon, {fillStyle: "#c0c0c0ff", points: GameAssets.square})
            // textBlock.transform.scale = new Vector2(400, 400)
            // instantiate(textBlock, new Vector2(300, 300))
            // if (GameGlobals.trial2clear) {
            //     textBlock.destroy()
            // }
            if (GameGlobals.riddleStarted) {return}

            GameGlobals.riddleStarted = true

            instantiate(new RiddleOutputGameObject(), new Vector2(-300, 200))
            instantiate(new InputGameObject(), new Vector2(0, 0))
        }


    }
}