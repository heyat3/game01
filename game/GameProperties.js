class GameProperties {
    layers = ["foreground", "wall", "player", "enemy", "enemy-laser", "player-laser", "element", "door", "chest", "obstacle"]
    collisionLayers = [["player", "enemy"], ["enemy-laser", "player"], ["player-laser", "enemy"], ["player", "element"], ["player", "door"], ["player", "wall"], ["enemy", "wall"], ["enemy", "door"], ["player-laser", "wall"], ["enemy-laser", "wall"],["enemy", "enemy"], ["player", "chest"], ["player", "obstacle"]]
}