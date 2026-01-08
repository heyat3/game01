class RiddleChestGameObject extends GameObject {
    constructor() {
        super("Riddle Chest Game Object", {layer: "chest", tag: "chest"})

        this.addComponent(new RiddleChestController())
        this.addComponent(new Polygon(), {fillStyle: "#472002ff", points: GameAssets.square})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(20, 20)

    }
}