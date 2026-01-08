class EarthRoomScene extends Scene {
    constructor(player) {
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        // this.instantiate(new MainControllerGameObject())
        this.instantiate(new EarthRoomControllerGameObject())
        this.instantiate(new MenuControllerGameObject())

        // Walls & Doors
        const earthDoor = new GameObject("Earth Door Game Object", { layer: "door", tag: "door" })
        earthDoor.addComponent(new Polygon(), { fillStyle: "#205610ff", points: GameAssets.square })
        earthDoor.addComponent(new Collider())
        earthDoor.transform.scale = new Vector2(75, 30)
        this.instantiate(earthDoor, new Vector2(0, 0))

        // MAIN
        const trialtext = new GameObject("Trial Text Game Object")
        trialtext.addComponent(new Text(), { fillStyle: "black", text: "Trial Chamber", font: "60px 'Comic Sans MS'", textAlign: "center" })
        this.instantiate(trialtext, new Vector2(0, 400))

        const trialInfoText = new GameObject("Trial Info Text Game Object")
        trialInfoText.addComponent(new Text(), { fillStyle: "black", text: "Once in a room,\nyou cannot leave until\nthe room has been cleared", font: "48px 'Comic Sans MS'", textAlign: "center" })
        this.instantiate(trialInfoText, new Vector2(0, 600))

        this.instantiate(new WallGameObject(new Vector2(2010, 30)), new Vector2(-1000, 0))

        this.instantiate(new WallGameObject(new Vector2(30, 300)), new Vector2(-1000, 0))
        //door (trial 1)
        this.instantiate(new WallGameObject(new Vector2(30, 1610)), new Vector2(-1000, 400))

        this.instantiate(new WallGameObject(new Vector2(300, 30)), new Vector2(-1000, 2000))
        //door (trial 2)
        this.instantiate(new WallGameObject(new Vector2(1630, 30)), new Vector2(-600, 2000))

        this.instantiate(new WallGameObject(new Vector2(30, 1600)), new Vector2(1000, 0))
        //door (trial 3)
        this.instantiate(new WallGameObject(new Vector2(30, 310)), new Vector2(1000, 1700))

        // Prefabs
        if (player == undefined) {
            player = new Vector2(30, 50)
        }
        this.instantiate(new PlayerGameObject(), player)

        if (GameGlobals.trial2clear) {
            const playerOld = GameObject.find("Player Game Object")
            if (playerOld) {
                playerOld.destroy()
                this.instantiate(new PlayerGameObject(), player)
            }
        }
        // this.instantiate(new EarthGameObject(), new Vector2(400, 350))


        // TRIAL 1 (LEFT) - strength fire
        this.instantiate(new WallGameObject(new Vector2(-1000, 30)), new Vector2(-990, 270))
        //door
        this.instantiate(new WallGameObject(new Vector2(-1000, 30)), new Vector2(-990, 400))

        const trial1 = new GameObject("Trial 1 Door Game Object", { layer: "door", tag: "door" })
        trial1.addComponent(new Polygon(), { fillStyle: "#ffffffff", points: GameAssets.square })
        trial1.addComponent(new Collider())
        trial1.transform.scale = new Vector2(30, 100)
        this.instantiate(trial1, new Vector2(-1990, 300))

        const trial1text = new GameObject("Trial 1 Text Game Object")
        trial1text.addComponent(new Text(), { fillStyle: "black", text: "Trial of Strength", font: "48px 'Comic Sans MS'" })
        this.instantiate(trial1text, new Vector2(-1800, 255))


        // TRIAL 2 (BOTTOM) - smarts water
        this.instantiate(new WallGameObject(new Vector2(30, 1000)), new Vector2(-730, 2000))
        //door
        this.instantiate(new WallGameObject(new Vector2(30, 1000)), new Vector2(-600, 2000))

        const trial2 = new GameObject("Trial 2 Door Game Object", { layer: "door", tag: "door" })
        trial2.addComponent(new Polygon(), { fillStyle: "#ffffffff", points: GameAssets.square })
        trial2.addComponent(new Collider())
        trial2.transform.scale = new Vector2(100, 30)
        this.instantiate(trial2, new Vector2(-700, 2970))

        const trial2text = new GameObject("Trial 2 Text Game Object")
        trial2text.addComponent(new Text(), { fillStyle: "black", text: "Trial of Wits", font: "48px 'Comic Sans MS'" })
        this.instantiate(trial2text, new Vector2(-565, 2700))


        // TRIAL 3 (RIGHT) - agility wind
        this.instantiate(new WallGameObject(new Vector2(1000, 30)), new Vector2(1000, 1570))
        //door
        this.instantiate(new WallGameObject(new Vector2(1000, 30)), new Vector2(1000, 1700))

        const trial3 = new GameObject("Trial 3 Door Game Object", { layer: "door", tag: "door" })
        trial3.addComponent(new Polygon(), { fillStyle: "#ffffffff", points: GameAssets.square })
        trial3.addComponent(new Collider())
        trial3.transform.scale = new Vector2(30, 100)
        this.instantiate(trial3, new Vector2(1970, 1600))

        const trial3text = new GameObject("Trial 3 Text Game Object")
        trial3text.addComponent(new Text(), { fillStyle: "black", text: "Trial of Agility", font: "48px 'Comic Sans MS'" })
        this.instantiate(trial3text, new Vector2(1400, 1550))


        // UI
        const uiParent = new GameObject("UI Parent Game Object", { layer: "UI" })
        this.instantiate(uiParent, new Vector2(0, 0))

        const health = this.instantiate(new HealthTextGameObject(), new Vector2(15, 25))
        health.transform.setParent(uiParent.transform)
        const healthIcon = new GameObject("Health Icon Game Object", { layer: "UI" })
        healthIcon.addComponent(new Polygon(), { fillStyle: "#eb0215ff", points: GameAssets.heart })
        healthIcon.transform.scale = new Vector2(5, 5)
        this.instantiate(healthIcon, new Vector2(53, 15))
        healthIcon.transform.setParent(uiParent.transform)

        const timer = this.instantiate(new TimerGameObject(), new Vector2((window.innerWidth / 2 - 30), 25))
        timer.transform.setParent(uiParent.transform)

        const elementsFoundText = this.instantiate(new ElementsFoundTextGameObject(), new Vector2(window.innerWidth - 180, 25))
        elementsFoundText.transform.setParent(uiParent.transform)

    }
}