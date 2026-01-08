class TimerGameObject extends GameObject {
    constructor() {
        super("Timer Game Object", {layer: "UI"})
        this.addComponent(new Text(), {text: "", fillStyle: "#585858ff"})
        this.addComponent(new TimerTextController())
    }
}