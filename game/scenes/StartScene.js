class StartScene extends Scene {
    constructor() {
        super()

        const camera = new CameraGameObject()
        camera.getComponent(Camera).backgroundColor = "#6671a0ff"
        this.instantiate(camera)

        // title text
        const titleText = new GameObject("Title Text Game Object", {layer:"UI"})
        titleText.addComponent(new Text(), {fillStyle: "black", text: "Elemental Escape", textAlign: "center", font: "50px 'Comic Sans MS'"})
        this.instantiate(titleText, new Vector2((window.innerWidth / 2), (window.innerHeight / 2) - 100))

        // start button
        const buttonParent = new GameObject("Button Parent Game Object")
        this.instantiate(buttonParent, new Vector2((window.innerWidth / 2) - 100, window.innerHeight / 2))

        const button = new GameObject("Start Button Game Object", {layer:"UI"})
        button.addComponent(new Polygon, {fillStyle: "#3f2c43ff", points:GameAssets.square})
        button.addComponent(new StartButtonController())
        button.addComponent(new Collider())
        button.transform.scale = new Vector2(200, 40)
        this.instantiate(button, new Vector2(0, 0))
        button.transform.setParent(buttonParent.transform)

        const startText = new GameObject("Start Text Game Object", {layer:"UI"})
        startText.addComponent(new Text(), {text:"Start", fillStyle:"black", textAlign:"center", textBaseline:"middle"})
        this.instantiate(startText, new Vector2(100, 20))
        startText.transform.setParent(buttonParent.transform)


        // spinning elements
        const spinParent = new GameObject("Spin Parent Game Object", {layer: "UI"})
        spinParent.addComponent(new StartElementController())
        this.instantiate(spinParent, new Vector2(window.innerWidth / 2, window.innerHeight / 2))

        const fireSpin = new GameObject("Start Fire Game Object", {layer: "UI"})
        fireSpin.addComponent(new Polygon, {fillStyle: "#ee311cff", points: GameAssets.fire})
        fireSpin.addComponent(new StartElementController())
        fireSpin.transform.scale = new Vector2(15, 15)
        this.instantiate(fireSpin, new Vector2(-300, -300))
        fireSpin.transform.setParent(spinParent.transform)

        const iceSpin = new GameObject("Start Fire Game Object", {layer: "UI"})
        iceSpin.addComponent(new Polygon, {fillStyle: "#6bfaffff", points: GameAssets.ice})
        iceSpin.addComponent(new StartElementController())
        iceSpin.transform.scale = new Vector2(20, 20)
        this.instantiate(iceSpin, new Vector2(300, -300))
        iceSpin.transform.setParent(spinParent.transform)
        
        const earthSpin = new GameObject("Start Earth Game Object", {layer: "UI"})
        earthSpin.addComponent(new Polygon, {fillStyle: "#432a0dff", points: GameAssets.earth})
        earthSpin.addComponent(new StartElementController())
        earthSpin.transform.scale = new Vector2(20, 20)
        this.instantiate(earthSpin, new Vector2(-300, 300))
        earthSpin.transform.setParent(spinParent.transform)

        const windSpin = new GameObject("Start Wind Game Object", {layer: "UI"})
        windSpin.addComponent(new Polygon, {fillStyle: "#3b3e3fff", points: GameAssets.wind})
        windSpin.addComponent(new StartElementController())
        windSpin.transform.scale = new Vector2(20, 20)
        this.instantiate(windSpin, new Vector2(300, 300))
        windSpin.transform.setParent(spinParent.transform)


        // controller
        const startSceneControllerGameObject = new GameObject("Start Scene Controller Game Object")
        startSceneControllerGameObject.addComponent(new StartSceneController())
        this.instantiate(startSceneControllerGameObject)

        // resetting global values
        GameGlobals.health = 10
        GameGlobals.timer = 600
        GameGlobals.currentElement = undefined
        GameGlobals.elementsFound = []
    }
}