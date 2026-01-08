class HealthTextGameObject extends GameObject {
    constructor() {
        super("Health Text Game Object", {layer: "UI"})

        this.addComponent(new HealthTextController())
        this.addComponent(new Text(), {text: "", fillStyle: "#585858ff"})
    }
}