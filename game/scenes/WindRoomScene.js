class WindRoomScene extends Scene {
    constructor() {
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        this.instantiate(new WindRoomControllerGameObject())
        this.instantiate(new MenuControllerGameObject())

        // Walls & Doors
        const windDoor = new GameObject("Wind Door Game Object", {layer: "door", tag: "door"})
        windDoor.addComponent(new Polygon(), {fillStyle: "#505353ff", points:GameAssets.square})
        windDoor.addComponent(new Collider())
        windDoor.transform.scale = new Vector2(75, 30)
        this.instantiate(windDoor, new Vector2(-30, 0))

        this.instantiate(new WallGameObject(new Vector2(30, 10010)), new Vector2(-200, -10000))
        this.instantiate(new WallGameObject(new Vector2(430, 30)), new Vector2(-200, 0))
        this.instantiate(new WallGameObject(new Vector2(30, 10010)), new Vector2(200, -10000))
        this.instantiate(new WallGameObject(new Vector2(430, 30)), new Vector2(-200, -10000))


        // Prefabs
        this.instantiate(new PlayerGameObject(), new Vector2(0,-75))
        // this.instantiate(new EarthGameObject(), new Vector2(20, -9900))


        // UI
        const uiParent = new GameObject("UI Parent Game Object", {layer: "UI"})
        this.instantiate(uiParent, new Vector2(0, 0))

        const health = this.instantiate(new HealthTextGameObject(), new Vector2(15, 25))
        health.transform.setParent(uiParent.transform)
        const healthIcon = new GameObject("Health Icon Game Object", {layer: "UI"})
        healthIcon.addComponent(new Polygon(), {fillStyle: "#eb0215ff", points: GameAssets.heart})
        healthIcon.transform.scale = new Vector2(5, 5)
        this.instantiate(healthIcon, new Vector2(53, 15))
        healthIcon.transform.setParent(uiParent.transform)

        const timer = this.instantiate(new TimerGameObject(), new Vector2((window.innerWidth/2 - 30), 25))
        timer.transform.setParent(uiParent.transform)

        const elementsFoundText = this.instantiate(new ElementsFoundTextGameObject(), new Vector2(window.innerWidth - 180, 25))
        elementsFoundText.transform.setParent(uiParent.transform)
    }
}