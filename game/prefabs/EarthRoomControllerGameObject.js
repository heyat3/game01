class EarthRoomControllerGameObject extends GameObject {
    constructor() {
        super("Earth Room Controller Game Object")

        this.addComponent(new EarthRoomController())
    }
}