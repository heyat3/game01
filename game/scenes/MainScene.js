class MainScene extends Scene {
    constructor(player) {
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        this.instantiate(new MainControllerGameObject())
        this.instantiate(new MenuControllerGameObject())

        // MAIN ROOM
        // Walls & Doors
        //   left side
        const fireDoor = new GameObject("Main Fire Door Game Object", {layer: "door", tag: "door"})
        fireDoor.addComponent(new Polygon(), {fillStyle: "#c62614ff", points:GameAssets.square})
        fireDoor.addComponent(new Collider())
        fireDoor.transform.scale = new Vector2(30, 75)
        this.instantiate(fireDoor, new Vector2(-1000, 45))
        
        // this.instantiate(new FireDoorGameObject(), new Vector2(-1000, 45))
        this.instantiate(new WallGameObject(new Vector2(30, 500)), new Vector2(-1000, 120))
        this.instantiate(new WallGameObject(new Vector2(30, 300)), new Vector2(-1000, 720))

        //   top side
        this.instantiate(new WallGameObject(new Vector2(2030, 30)), new Vector2(-1000, 15))

        const windDoor = new GameObject("Main Wind Door Game Object", {layer: "door", tag: "door"})
        windDoor.addComponent(new Polygon(), {fillStyle: "#505353ff", points:GameAssets.square})
        windDoor.addComponent(new Collider())
        windDoor.transform.scale = new Vector2(75, 30)
        this.instantiate(windDoor, new Vector2(-35, 15))

        //   right side
        const iceDoor = new GameObject("Main Ice Door Game Object", {layer: "door", tag: "door"})
        iceDoor.addComponent(new Polygon(), {fillStyle: "#75f4f9f3", points:GameAssets.square})
        iceDoor.addComponent(new Collider())
        iceDoor.transform.scale = new Vector2(30, 75)
        this.instantiate(iceDoor, new Vector2(1000, 45))

        
        this.instantiate(new WallGameObject(new Vector2(30, 900)), new Vector2(1000, 120))

        //   bottom side
        this.instantiate(new WallGameObject(new Vector2(2010, 30)), new Vector2(-1000, 990))

        const earthDoor = new GameObject("Main Earth Door Game Object", {layer: "door", tag: "door"})
        earthDoor.addComponent(new Polygon(), {fillStyle: "#205610ff", points:GameAssets.square})
        earthDoor.addComponent(new Collider())
        earthDoor.transform.scale = new Vector2(75, 30)
        this.instantiate(earthDoor, new Vector2(-105, 990))

        // LEFT ROOM
        this.instantiate(new WallGameObject(new Vector2(1760, 30)), new Vector2(-2750, 200))
        this.instantiate(new WallGameObject(new Vector2(30, 2010)), new Vector2(-2750, 200))
        this.instantiate(new WallGameObject(new Vector2(2160, 30)), new Vector2(-2750, 2200))
        this.instantiate(new WallGameObject(new Vector2(30, 1230)), new Vector2(-600, 1000))

        // OUTSIDE
        this.instantiate(new WallGameObject(new Vector2(5000, 5000)), new Vector2(-600, 1000))
        this.instantiate(new WallGameObject(new Vector2(-5000, 5000)), new Vector2(-590, 2190))
        this.instantiate(new WallGameObject(new Vector2(-5000, -5000)), new Vector2(-2740, 2200))
        this.instantiate(new WallGameObject(new Vector2(-5000, -5000)), new Vector2(-990, 210))
        this.instantiate(new WallGameObject(new Vector2(5000, -5000)), new Vector2(-1000, 30))
        this.instantiate(new WallGameObject(new Vector2(5000, 5000)), new Vector2(1020, 20))


        // PREFABS
        if (player == undefined) {player = new Vector2(0, 500)}

        // const playerGO = new PlayerGameObject()
        this.instantiate(new PlayerGameObject(), player)
        
        // const playerRange = new PlayerRangeGameObject()
        // const playerRange = this.instantiate(new PlayerRangeGameObject, new Vector2(0, 7))
        // playerRange.transform.setParent(playerGO.transform)

        // this.instantiate(new EnemyMeleeGameObject(), new Vector2(205, 375))
        // this.instantiate(new EnemyMageGameObject(), new Vector2(155, 375))

        // this.instantiate(new FireGameObject(), new Vector2(-1500, 855))

        // INFO + HOW TO PLAY
        const introText = new GameObject("Intro Text Game Object")
        introText.addComponent(new Text(), {fillStyle: "black", text: "Use WASD or the arrow keys\n\n\nto move around", textAlign: "center", font: "50px 'Comic Sans MS'"})
        this.instantiate(introText, new Vector2(0, 470))

        const doorInfoText = new GameObject("Door Info Text Game Object")
        doorInfoText.addComponent(new Text(), {fillStyle: "black", text: "You must collect the element\ncorresponding to the door to enter", textAlign: "center", font: "30px 'Comic Sans MS'"})
        this.instantiate(doorInfoText, new Vector2(-500, 80))
        
        const fireElemInfoText = new GameObject("Fire Elem Info Text Game Object")
        fireElemInfoText.addComponent(new Text(), {fillStyle: "black", text: "Look around for the fire element!", textAlign: "center", font: "30px 'Comic Sans MS'"})
        this.instantiate(fireElemInfoText, new Vector2(-500, 280))

        const shootingInfoText = new GameObject("Shooting Info Text Game Object")
        shootingInfoText.addComponent(new Text(), {fillStyle: "black", text: "Hold space to shoot the element\nAim using the mouse", textAlign: "center", font: "20px 'Comic Sans MS'"})
        this.instantiate(shootingInfoText, new Vector2(-1700, 900))
        


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

        // // menu
        // const menu = this.instantiate(new ElementMenuGameObject(), new Vector2(200, 100))

        // const menuFire = new FireElemGameObject()
        // this.instantiate(menuFire, new Vector2(10, 10))
        // menuFire.transform.setParent(menu.transform)

        // const menuIce = this.instantiate(new IceMenuGameObject(), new Vector2(320, 110))
        // // menuIce.transform.setParent(menu.transform)

        // const menuWind = this.instantiate(new WindMenuGameObject(), new Vector2(210, 220))
        // // menuWind.transform.setParent(menu.transform)

        // const menuEarth = this.instantiate(new EarthMenuGameObject(), new Vector2(320, 220))
        // // menuEarth.transform.setParent(menu.transform)
    }
}