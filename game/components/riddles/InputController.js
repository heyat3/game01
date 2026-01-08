class InputController extends Component {
    constructor(index) {
        super()
        this.inputString = ""
        this.answers = ["one", "coffee", "eyes"]
        this.index = index
    }
    update() {
        for (const key of Input.keysDownThisFrame) {
            if (key == "Enter") {
                this.checkAnswer()
                return
            }

            if (key == "Backspace") {
                this.inputString = this.inputString.slice(0, -1)
                this.updateOutput()
                return
            }

            if (key.startsWith("Key")) {
                const letter = key.replace("Key", "").toLowerCase()
                this.inputString += letter
                this.updateOutput()
                return
            }

            if (GameGlobals.trial2clear) {
                this.gameObject.destroy()
                GameGlobals.riddleStarted = false
            }
        }
    }

    updateOutput() {
        if(GameGlobals.trial2clear) {return}
        GameObject.find("Riddle Output Game Object").getComponent(RiddleOutputController).setAnswer(this.inputString)
    }

    checkAnswer() {
        const outputController = GameObject.find("Riddle Output Game Object").getComponent(RiddleOutputController)

        const index = outputController.index
        const answer = this.answers[index]

        if (this.inputString.trim().toLowerCase() == answer) {
            this.inputString = ""
            outputController.nextQuestion()

            if (outputController.index >= this.answers.length) {
                // console.log("1")
                GameGlobals.trial2clear = true
                // console.log("2")
                GameGlobals.riddleStarted = false
                // console.log("3")
                const player = GameObject.find("Player Game Object")
                if (player) {
                    player.destroy()
                }
                // SceneManager.loadScene(new EarthRoomScene(new Vector2(-900, 700)))
                console.log(GameGlobals.riddleStarted)
                // console.log("4")
            }
            else {
                console.log("fail")
            }

        } else {
            this.inputString = ""
            outputController.setAnswer("")
        }
    }
}