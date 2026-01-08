class MenuController extends Component {
    start() {
        this.menu = null

        this.menuFire = null
        this.menuIce = null
        this.menuWind = null
        this.menuEarth = null
    }

    update() {
        if (Input.keysDown.includes("KeyE") && this.menu == null) {
            const scene = SceneManager.getActiveScene()

            this.menu = instantiate(new ElementMenuGameObject(), new Vector2(200, 100))

            if (GameGlobals.elementsFound.includes("fire")) {this.menuFire = instantiate(new FireMenuGameObject(), new Vector2(210, 110))}
            if (GameGlobals.elementsFound.includes("ice")) {this.menuIce = instantiate(new IceMenuGameObject(), new Vector2(320, 110))}
            if (GameGlobals.elementsFound.includes("wind")) {this.menuWind = instantiate(new WindMenuGameObject(), new Vector2(210, 220))}
            if (GameGlobals.elementsFound.includes("earth")) {this.menuEarth = instantiate(new EarthMenuGameObject(), new Vector2(320, 220))}
        }

        if (!Input.keysDown.includes("KeyE") && this.menu != null) {
            this.menu.destroy()

            if (GameGlobals.elementsFound.includes("fire")) {this.menuFire.destroy()}
            if (GameGlobals.elementsFound.includes("ice")) {this.menuIce.destroy()}
            if (GameGlobals.elementsFound.includes("wind")) {this.menuWind.destroy()}
            if (GameGlobals.elementsFound.includes("earth")) {this.menuEarth.destroy()}

            
            this.menu = null

            this.menuFire = null
            this.menuIce = null
            this.menuWind = null
            this.menuEarth = null
        }
    }
}