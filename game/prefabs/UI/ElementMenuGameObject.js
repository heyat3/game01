class ElementMenuGameObject extends GameObject {
    constructor() {
        super("Element Menu Game Object", {layer: "UI"})

        this.addComponent(new Polygon(), {fillStyle: "#6e7f86ff", points: GameAssets.square})
        this.addComponent(new ElementMenuController())
        this.transform.scale = new Vector2(230, 230)
    }
}

class FireMenuGameObject extends GameObject {
    constructor() {
        super("Fire Menu Game Object", {layer: "UI"})
        
        this.addComponent(new Polygon(), {fillStyle: "#ee311cff", points: GameAssets.square})
        this.addComponent(new FireMenuController())
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(100, 100)
    }
}

class IceMenuGameObject extends GameObject {
    constructor() {
        super("Ice Menu Game Object", {layer: "UI"})
        
        this.addComponent(new Polygon(), {fillStyle: "#6bfaffff", points: GameAssets.square})
        this.addComponent(new IceMenuController())
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(100, 100)
    }
}

class WindMenuGameObject extends GameObject {
    constructor() {
        super("Wind Menu Game Object", {layer: "UI"})
        
        this.addComponent(new Polygon(), {fillStyle: "#3b3e3fff", points: GameAssets.square})
        this.addComponent(new WindMenuController())
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(100, 100)
    }
}

class EarthMenuGameObject extends GameObject {
    constructor() {
        super("Earth Menu Game Object", {layer: "UI"})
        
        this.addComponent(new Polygon(), {fillStyle: "#432a0dff", points: GameAssets.square})
        this.addComponent(new EarthMenuController())
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(100, 100)
    }
}