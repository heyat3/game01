class RiddleOutputController extends Component {
    start() {
        this.questions = [
            "As I was going to St. Ives I met a man with seven wives,\neach wife had 7 sacks, each sack had 7 cats, each cat had 7 kits:\nkits, cats, sacks, and wives, how many were going to St. Ives?\nPress enter after typing answer. (Type out the number)",
            "George, Helen, and Steve are drinking coffee.\nBert, Karen, and Dave are drinking soda.\nUsing logic, is Elizabeth drinking coffee or soda?\nPress enter after typing answer.",
            "Open me, and you can't see me without a mirror.\nClose me and you can't see me at all.\nWhat am I?\nPress enter after typing answer. (plural)"]
        
        this.index = 0
        this.currentAnswer = ""
        this.text = this.gameObject.getComponent(Text)
    }
    update() {
        if (GameGlobals.trial2clear) {
            this.gameObject.destroy()
            GameGlobals.riddleStarted = false
        }
        this.text.text = this.questions[this.index] + "\n\nAnswer: " + this.currentAnswer
    }
    setAnswer(text) {
        this.currentAnswer = text
    }
    nextQuestion() {
        this.index++
        this.currentAnswer = ""
    }
}