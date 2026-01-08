class TimerTextController extends Component {
    update() {
        // console.log("Timer Text Controller Updated")
        const minutes = Math.floor(GameGlobals.timer / 60)
        const seconds = Math.floor(GameGlobals.timer % 60).toString().padStart(2, '0')

        this.gameObject.getComponent(Text).text = (minutes + ":" + seconds)
        GameGlobals.timer -= Time.deltaTime
    }
}