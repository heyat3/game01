class Trial1ControllerGameObject extends GameObject {
    constructor() {
        super("Trial 1 Controller Game Object")

        this.addComponent(new Trial1Controller())
    }
}

class Trial2ControllerGameObject extends GameObject {
    constructor() {
        super("Trial 2 Controller Game Object")

        this.addComponent(new Trial2Controller())
    }
}

class Trial3ControllerGameObject extends GameObject {
    constructor() {
        super("Trial 3 Controller Game Object")

        this.addComponent(new Trial3Controller())
    }
}