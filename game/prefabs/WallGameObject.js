class WallGameObject extends GameObject {
    constructor(scale) {
        super("Wall Game Object", {layer: "wall", tag: "wall"})

        this.addComponent(new Polygon(), {fillStyle: "#000000ff", points:[new Vector2(0, 0), new Vector2(0, 1), new Vector2(1, 1), new Vector2(1, 0)]})
        this.addComponent(new Collider())
        this.transform.scale = scale || new Vector2(30, 300)
    }
}