class PlayerGameObject extends GameObject {
    constructor() {
        super("Player Game Object", {layer:"player", tag: "player"})

        this.addComponent(new PlayerController())
        this.addComponent(new Polygon(), {fillStyle: "#150424", points:[new Vector2(-3, 12), new Vector2(-2, 3), new Vector2(-3, 3), new Vector2(-4, 3), new Vector2(0, 0), new Vector2(3, 3), new Vector2(1, 3), new Vector2(3, 7), new Vector2(5, 12)]})
        this.addComponent(new RigidBody())
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(5, 5)
    }
}

class PlayerRangeGameObject extends GameObject {
    constructor() {
        super("Player Range Game Object")

        this.addComponent(new Polygon(), {fillStyle: "#7a2525ff", points: GameAssets.octogon})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(5, 5)
    }
}