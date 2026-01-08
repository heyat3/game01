class FireGameObject extends GameObject {
    constructor() {
        super("Fire Game Object", {layer: "element", tag: "element"})

        this.addComponent(new FireController())
        this.addComponent(new Polygon(), {fillStyle: "#ee311cff", points:GameAssets.fire})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(5, 6)
    }
}

class IceGameObject extends GameObject {
    constructor() {
        super("Ice Game Object", {layer: "element", tag: "element"})

        this.addComponent(new IceController())
        this.addComponent(new Polygon(), {fillStyle: "#6bfaffff", points:GameAssets.ice})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(10, 10)
    }
}

class WindGameObject extends GameObject {
    constructor() {
        super("Wind Game Object", {layer: "element", tag: "element"})

        this.addComponent(new WindController())
        this.addComponent(new Polygon(), {fillStyle: "#3b3e3fff", points:GameAssets.wind})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(10, 10)
    }
}

class EarthGameObject extends GameObject {
    constructor() {
        super("Earth Game Object", {layer: "element", tag: "element"})

        this.addComponent(new EarthController())
        this.addComponent(new Polygon(), {fillStyle: "#432a0dff", points:GameAssets.earth})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(15, 7)
    }
}

class HealthBuffGameObject extends GameObject {
    constructor() {
        super("Health Buff Game Object", {layer: "chest", tag: "chest"})

        this.addComponent(new HealthBuffController())
        this.addComponent(new Polygon(), {fillStyle: "#eb0215ff", points:GameAssets.heart})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(7, 7)
    }
}

