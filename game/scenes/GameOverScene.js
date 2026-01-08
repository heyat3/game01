class GameOverScene extends Scene {
    constructor() {
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        // game over text
        const gameOverText = new GameObject("Game Over Text Game Object", {layer:"UI"})
        gameOverText.addComponent(new Text(), {fillStyle: "black", text: "Game Over!", textAlign: "center", font: "50px 'Comic Sans MS'"})
        this.instantiate(gameOverText, new Vector2((window.innerWidth / 2), (window.innerHeight / 2) - 100))
        
        // random text stuff
        const randomNum = Math.floor(Math.random() * 3)
        const randomTexts = ["Were you even trying?", "Just give up now.", "womp womp"]
        const randomText = new GameObject("Random Text Game Object", {layer:"UI"})
        randomText.addComponent(new Text(), {fillStyle: "black", text: randomTexts[randomNum], textAlign: "center", font: "30px 'Comic Sans MS'"})
        this.instantiate(randomText, new Vector2((window.innerWidth / 2), (window.innerHeight / 2) - 50))

        // start button
        const buttonParent = new GameObject("Button Parent Game Object")
        this.instantiate(buttonParent, new Vector2((window.innerWidth / 2) - 100, window.innerHeight / 2))

        const button = new GameObject("Title Button Game Object", {layer:"UI"})
        button.addComponent(new Polygon, {fillStyle: "#3f2c43ff", points:GameAssets.square})
        button.addComponent(new EndButtonController())
        button.addComponent(new Collider())
        button.transform.scale = new Vector2(200, 40)
        this.instantiate(button, new Vector2(0, 0))
        button.transform.setParent(buttonParent.transform)

        const endText = new GameObject("Title Button Text Game Object", {layer:"UI"})
        endText.addComponent(new Text(), {text:"Try Again?", fillStyle:"black", textAlign:"center", textBaseline:"middle"})
        this.instantiate(endText, new Vector2(100, 20))
        endText.transform.setParent(buttonParent.transform)

        // controller
        const gameOverSceneControllerGameObject = new GameObject("Game Over Scene Controller Game Object")
        gameOverSceneControllerGameObject.addComponent(new GameOverSceneController())
        this.instantiate(gameOverSceneControllerGameObject)
    }
}