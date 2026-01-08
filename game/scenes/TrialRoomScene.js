class Trial1RoomScene extends Scene {
    constructor(){
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        this.instantiate(new Trial1ControllerGameObject())
        this.instantiate(new MenuControllerGameObject())

        this.instantiate(new WallGameObject(new Vector2(1030, 30)), new Vector2(-500, -500))
        this.instantiate(new WallGameObject(new Vector2(30, 1030)), new Vector2(-500, -500))
        this.instantiate(new WallGameObject(new Vector2(-1030, 30)), new Vector2(530, 500))
        this.instantiate(new WallGameObject(new Vector2(30, -1030)), new Vector2(500, 530))

        const infoText = new GameObject("Trial 1 Info Text Game Object")
        infoText.addComponent(new Text(), {fillStyle: "black", text: "Defeat all enemy waves", font: "60px 'Comic Sans MS'", textAlign: "center"})
        this.instantiate(infoText, new Vector2(0, -200))

        this.instantiate(new PlayerGameObject(), new Vector2(0, 0))


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

class Trial2RoomScene extends Scene {
    constructor(){
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        this.instantiate(new Trial2ControllerGameObject())

        this.instantiate(new WallGameObject(new Vector2(1030, 30)), new Vector2(-500, -500))
        this.instantiate(new WallGameObject(new Vector2(30, 1030)), new Vector2(-500, -500))
        this.instantiate(new WallGameObject(new Vector2(-460, 30)), new Vector2(530, 500))
        //door
        this.instantiate(new WallGameObject(new Vector2(-440, 30)), new Vector2(-50, 500))
        this.instantiate(new WallGameObject(new Vector2(30, -1030)), new Vector2(500, 530))

        this.instantiate(new WallGameObject(new Vector2(30, 180)), new Vector2(-80, 500))
        this.instantiate(new WallGameObject(new Vector2(150, 30)), new Vector2(-80, 650))
        this.instantiate(new WallGameObject(new Vector2(30, 180)), new Vector2(70, 500))

        const infoText = new GameObject("Trial 2 Info Text Game Object")
        infoText.addComponent(new Text(), {fillStyle: "black", text: "Answer all riddles\n\nGo down\n\n|\nV", font: "60px 'Comic Sans MS'", textAlign: "center"})
        this.instantiate(infoText, new Vector2(0, -300))

        this.instantiate(new PlayerGameObject(), new Vector2(0, 0))

        this.instantiate(new RiddleChestGameObject(), new Vector2(0, 600))


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

class Trial3RoomScene extends Scene {
    constructor(){
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        this.instantiate(new Trial3ControllerGameObject())
        this.instantiate(new MenuControllerGameObject())

        this.instantiate(new WallGameObject(new Vector2(1030, 30)), new Vector2(-500, -500))
        this.instantiate(new WallGameObject(new Vector2(30, 1030)), new Vector2(-500, -500))
        this.instantiate(new WallGameObject(new Vector2(-460, 30)), new Vector2(530, 500))
        //door
        this.instantiate(new WallGameObject(new Vector2(-440, 30)), new Vector2(-50, 500))
        this.instantiate(new WallGameObject(new Vector2(30, -1030)), new Vector2(500, 530))

        this.instantiate(new WallGameObject(new Vector2(30, 180)), new Vector2(-80, 500))
        this.instantiate(new WallGameObject(new Vector2(30, 180)), new Vector2(70, 500))



        const infoText = new GameObject("Trial 3 Info Text Game Object")
        infoText.addComponent(new Text(), {fillStyle: "black", text: "Complete obstacle course\n\nDon't touch the red blocks", font: "60px 'Comic Sans MS'", textAlign: "center"})
        this.instantiate(infoText, new Vector2(0, -200))

        this.instantiate(new PlayerGameObject(), new Vector2(0, 0))

        // Obstacles
        this.instantiate(new ObstacleGameObject(new Vector2(40, 300)), new Vector2(-80, 670))
        this.instantiate(new ObstacleGameObject(new Vector2(40, 300)), new Vector2(60, 670))

        this.instantiate(new ObstacleGameObject(new Vector2(50, 310)), new Vector2(-80, 960))
        this.instantiate(new ObstacleGameObject(new Vector2(50, 310)), new Vector2(50, 960))

        this.instantiate(new ObstacleGameObject(new Vector2(60, 530)), new Vector2(-80, 1250))
        this.instantiate(new ObstacleGameObject(new Vector2(60, 410)), new Vector2(40, 1250))
        
        this.instantiate(new ObstacleGameObject(new Vector2(410, 30)), new Vector2(-80, 1750))
        this.instantiate(new ObstacleGameObject(new Vector2(410, 30)), new Vector2(40, 1650))
        
        this.instantiate(new ObstacleGameObject(new Vector2(60, 330)), new Vector2(440, 1650))
        this.instantiate(new ObstacleGameObject(new Vector2(60, 130)), new Vector2(320, 1750))

        this.instantiate(new ObstacleGameObject(new Vector2(510, 30)), new Vector2(-180, 1850))
        this.instantiate(new ObstacleGameObject(new Vector2(410, 30)), new Vector2(40, 1950))

        this.instantiate(new ObstacleGameObject(new Vector2(30, 160)), new Vector2(-180, 1850))
        this.instantiate(new ObstacleGameObject(new Vector2(250, 30)), new Vector2(-180, 2000))
        this.instantiate(new ObstacleGameObject(new Vector2(30, 70)), new Vector2(40, 1950))

        //exit
        const obstacleExit = new GameObject("Obstacle Exit Game Object", {layer: "door", tag: "door"})
        obstacleExit.addComponent(new ObstacleExitController())
        obstacleExit.addComponent(new Collider())
        obstacleExit.addComponent(new Polygon(), {fillStyle: "#6cc920ff", points: GameAssets.square})
        obstacleExit.transform.scale = new Vector2(15, 15)
        this.instantiate(obstacleExit, new Vector2(-110, 1980))
        


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