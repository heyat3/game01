class ElementsFoundTextGameObject extends GameObject {
    constructor() {
        super("Elements Found Text Game Object", {layer: "UI"})

        this.addComponent(new ElementsFoundTextController())
        this.addComponent(new Text(), {text: "", fillStyle: "#585858ff"})
    }
}