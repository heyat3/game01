class MenuControllerGameObject extends GameObject {
    constructor() {
        super("Menu Controller Game Object")

        this.addComponent(new MenuController())
    }
}