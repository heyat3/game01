class HealthTextController extends Component {
    update() {
        // console.log("Health Controller Updated")
        this.gameObject.getComponent(Text).text = GameGlobals.health
    }
}