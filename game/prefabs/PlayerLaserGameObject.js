class FireElemGameObject extends GameObject {
    constructor() {
        super("Fire Element Game Object", {layer: "player-laser", tag: "player-laser"})
        this.addComponent(new Polygon(), {fillStyle: "#ee311cff", points: GameAssets.fire})
        this.addComponent(new FireElemController())
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(1, 1)
    }
}

class IceElemGameObject extends GameObject {
    constructor() {
        super("Ice Element Game Object", {layer: "player-laser", tag: "player-laser"})
        this.addComponent(new Polygon(), {fillStyle: "#1489beff", points: GameAssets.ice})
        this.addComponent(new IceElemController())
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(2, 2)
    }
}

class WindElemGameObject extends GameObject {
    constructor() {
        super("Wind Element Game Object", {layer: "player-laser", tag: "player-laser"})
        this.addComponent(new Polygon(), {fillStyle: "#3b3e3fff", points: GameAssets.wind})
        this.addComponent(new WindElemController())
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(2, 2)
    }
}

class EarthElemGameObject extends GameObject {
    constructor() {
        super("Earth Element Game Object", {layer: "player-laser", tag: "player-laser"})
        this.addComponent(new Polygon(), {fillStyle: "#432a0dff", points: GameAssets.earth})
        this.addComponent(new EarthElemController())
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(2, 2)
    }
}

