class EarthRoomController extends Component {
    start() {
        if (GameGlobals.trial1clear) {
            instantiate(new WallGameObject(new Vector2(30, 110)), new Vector2(-1000, 295))
        }
        if (GameGlobals.trial2clear) {
            instantiate(new WallGameObject(new Vector2(110, 30)), new Vector2(-705, 2000))
        }
        if (GameGlobals.trial3clear) {
            instantiate(new WallGameObject(new Vector2(30, 110)), new Vector2(1000, 1595))
        }
        if (GameGlobals.trial1clear && GameGlobals.trial2clear && GameGlobals.trial3clear) {
            SceneManager.loadScene(new WinScene())
        }
    }
}