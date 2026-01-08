class IceRoomScene extends Scene {
    constructor() {
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        this.instantiate(new IceRoomControllerGameObject())
        this.instantiate(new MenuControllerGameObject())

        // Walls & Doors
        const iceDoor = new GameObject("Ice Door Game Object", {layer: "door", tag: "door"})
        iceDoor.addComponent(new Polygon(), {fillStyle: "#75f4f9f3", points:GameAssets.square})
        iceDoor.addComponent(new Collider())
        iceDoor.transform.scale = new Vector2(30, 75)
        this.instantiate(iceDoor, new Vector2(0, 45))

        this.instantiate(new WallGameObject(new Vector2(30, 710)), new Vector2(0, 0))
        this.instantiate(new WallGameObject(new Vector2(510, 30)), new Vector2(0, 700))
        this.instantiate(new WallGameObject(new Vector2(30, 510)), new Vector2(500, 700))
        this.instantiate(new WallGameObject(new Vector2(600, 30)), new Vector2(500, 1200))
        this.instantiate(new WallGameObject(new Vector2(30, -1700)), new Vector2(1070, 1210))
        this.instantiate(new WallGameObject(new Vector2(-2000, 30)), new Vector2(1100, -500))
        this.instantiate(new WallGameObject(new Vector2(30, 520)), new Vector2(-900, -500))
        this.instantiate(new WallGameObject(new Vector2(910, 30)), new Vector2(-900, 0))

        // Prefabs
        this.instantiate(new PlayerGameObject(), new Vector2(290, 400))
        // this.instantiate(new WindGameObject(), new Vector2(1000, 1150))
        this.instantiate(new HealthBuffGameObject(), new Vector2(-850, -450))


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