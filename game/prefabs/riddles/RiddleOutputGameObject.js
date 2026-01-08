class RiddleOutputGameObject extends GameObject {
    constructor() {
        super("Riddle Output Game Object")

        this.addComponent(new Text(), {text: "", fillStyle: "black", font: "20px Verdana"})
        this.addComponent(new RiddleOutputController())
    }
}