class FireRoomControllerGameObject extends GameObject {
    constructor() {
        super("Fire Room Controller Game Object")

        this.addComponent(new FireRoomController())
    }
}
class IceRoomControllerGameObject extends GameObject {
    constructor() {
        super("Ice Room Controller Game Object")

        this.addComponent(new IceRoomController())
    }
}
class WindRoomControllerGameObject extends GameObject {
    constructor() {
        super("Wind Room Controller Game Object")

        this.addComponent(new WindRoomController())
    }
}