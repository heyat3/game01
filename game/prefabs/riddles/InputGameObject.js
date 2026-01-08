class InputGameObject extends GameObject {
    constructor() {
        super("Input Game Object")

        this.addComponent(new InputController())
    }
}