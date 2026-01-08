class WinScene extends Scene {
    constructor() {
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "#8f929eff"
        this.instantiate(cameraGameObject)

        // win text
        const winText = new GameObject("Win Text Game Object", {layer:"UI"})
        winText.addComponent(new Text(), {fillStyle: "black", text: "Congratulations!", textAlign: "center", font: "50px 'Comic Sans MS'"})
        this.instantiate(winText, new Vector2((window.innerWidth / 2), (window.innerHeight / 2) - 100))
        
        // random text stuff
        const randomNum = Math.floor(Math.random() * 3)
        const randomTexts = ["I didn't think you could do it", "wow this is impressive.", "I didn't think you could do it", "wow this is impressive.", "I didn't think you could do it", "wow this is impressive.", "I didn't think you could do it", "wow this is impressive.", "I didn't think you could do it", "wow this is impressive.", "I didn't think you could do it", "wow this is impressive.", "I didn't think you could do it", "wow this is impressive.", "I didn't think you could do it", "wow this is impressive.", "I didn't think you could do it", "wow this is impressive.", "You should play again."]
        const randomText = new GameObject("Random Text Game Object", {layer:"UI"})
        randomText.addComponent(new Text(), {fillStyle: "black", text: randomTexts[randomNum], textAlign: "center", font: "30px 'Comic Sans MS'"})
        this.instantiate(randomText, new Vector2((window.innerWidth / 2), (window.innerHeight / 2) - 50))

        const moreText = new GameObject("Random Text Game Object", {layer:"UI"})
        moreText.addComponent(new Text(), {fillStyle: "black", text: "I bet you expected more for winning huh.\nThat's too bad!", textAlign: "center", font: "15px 'Arial'"})
        this.instantiate(moreText, new Vector2((window.innerWidth / 2), (window.innerHeight / 2) + 100))

        // start button
        const buttonParent = new GameObject("Win Button Parent Game Object")
        this.instantiate(buttonParent, new Vector2((window.innerWidth / 2) - 100, window.innerHeight / 2))

        const button = new GameObject("Play Again Button Game Object", {layer:"UI"})
        button.addComponent(new Polygon, {fillStyle: "#3f2c43ff", points:GameAssets.square})
        button.addComponent(new EndButtonController())
        button.addComponent(new Collider())
        button.transform.scale = new Vector2(200, 40)
        this.instantiate(button, new Vector2(0, 0))
        button.transform.setParent(buttonParent.transform)

        const endText = new GameObject("Play Again Button Text Game Object", {layer:"UI"})
        endText.addComponent(new Text(), {text:"Play Again?", fillStyle:"black", textAlign:"center", textBaseline:"middle"})
        this.instantiate(endText, new Vector2(100, 20))
        endText.transform.setParent(buttonParent.transform)
    }
}