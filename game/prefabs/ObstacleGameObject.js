class ObstacleGameObject extends GameObject {
    constructor(scale) {
        super("Obstacle Game Object", {layer: "obstacle", tag: "obstacle"})

        this.addComponent(new Polygon(), {fillStyle: "#b12c2cff", points:GameAssets.square})
        this.addComponent(new Collider())
        this.addComponent(new ObstacleController())
        this.transform.scale = scale
    }
}