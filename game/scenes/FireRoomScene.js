class FireRoomScene extends Scene {
    constructor() {
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        this.instantiate(new FireRoomControllerGameObject())
        this.instantiate(new MenuControllerGameObject())

        // Walls & Doors
        const fireDoor = new GameObject("Fire Door Game Object", {layer: "door", tag: "door"})
        fireDoor.addComponent(new Polygon(), {fillStyle: "#c62614ff", points:[new Vector2(0, 0), new Vector2(0, 1), new Vector2(1, 1), new Vector2(1, 0)]})
        fireDoor.addComponent(new Collider())
        fireDoor.transform.scale = new Vector2(30, 75)
        this.instantiate(fireDoor, new Vector2(200, 800))
        
        this.instantiate(new WallGameObject(new Vector2(30, 910)), new Vector2(-500, 0))
        this.instantiate(new WallGameObject(new Vector2(1010, 30)), new Vector2(-500, 0))
        this.instantiate(new WallGameObject(new Vector2(30, 610)), new Vector2(500, 0))
        this.instantiate(new WallGameObject(new Vector2(330, 30)), new Vector2(200, 600))
        this.instantiate(new WallGameObject(new Vector2(30, 310)), new Vector2(200, 600))
        this.instantiate(new WallGameObject(new Vector2(730, 30)), new Vector2(-500, 900))

        // Prefabs
        this.instantiate(new PlayerGameObject(), new Vector2(160, 810))
        // this.instantiate(new IceGameObject(), new Vector2(430, 80))


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