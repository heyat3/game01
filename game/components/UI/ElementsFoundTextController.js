class ElementsFoundTextController extends Component {
    update() {
        this.gameObject.getComponent(Text).text = "Elements Found: " + GameGlobals.elementsFound.length
    }
}