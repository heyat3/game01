class FireRoomController extends Component {
    update() {
        if (!GameGlobals.elementsFound.includes("ice")) {
            instantiate(new IceGameObject(), new Vector2(430, 80))
        }

        if (GameGlobals.elementsFound.includes("ice")) {
            const menuInfoText = new GameObject("Menu Info Text Game Object")
            menuInfoText.addComponent(new Text(), { fillStyle: "black", text: "Hold E to open element menu.\nClick on the corresponding color to swtich to the element", textAlign: "center", font: "20px 'Calibri'" })
            instantiate(menuInfoText, new Vector2(430, -60))
        }


        // ending game
        if (GameGlobals.timer < 1 || GameGlobals.health <= 0) {
            SceneManager.loadScene(new GameOverScene())
        }
        if (Input.keysDown.includes("AltLeft")) {
            SceneManager.loadScene(new GameOverScene())
        }
    }
}
class IceRoomController extends Component {
    update() {
        if (!GameGlobals.elementsFound.includes("wind")) {
            instantiate(new WindGameObject(), new Vector2(1000, 1150))
        }

        // ending game
        if (GameGlobals.timer < 1 || GameGlobals.health <= 0) {
            SceneManager.loadScene(new GameOverScene())
        }
        if (Input.keysDown.includes("AltLeft")) {
            SceneManager.loadScene(new GameOverScene())
        }
    }
}
class WindRoomController extends Component {
    update() {
        if (!GameGlobals.elementsFound.includes("earth")) {
            instantiate(new EarthGameObject(), new Vector2(20, -9900))
        }

        // ending game
        if (GameGlobals.timer < 1 || GameGlobals.health <= 0) {
            SceneManager.loadScene(new GameOverScene())
        }
        if (Input.keysDown.includes("AltLeft")) {
            SceneManager.loadScene(new GameOverScene())
        }
    }
}