class Trial1Controller extends Component {
    //strength - fighting waves of enemies
    wave = 0


    update() {
        // spawning enemies

        if (!GameObject.find("Enemy Melee Game Object") && !GameObject.find("Enemy Mage Game Object")) {
            if (this.wave < 11) {

                for (let i = 0; i < this.wave; i++) {
                    instantiate(new EnemyMageGameObject, new Vector2((Math.random() * 800) - 400, (Math.random() * 800) - 400))
                    instantiate(new EnemyMeleeGameObject, new Vector2((Math.random() * 800) - 400, (Math.random() * 800) - 400))
                }
            }
            this.wave++

            if (this.wave >= 11) {
                GameGlobals.trial1clear = true
                SceneManager.loadScene(new EarthRoomScene(new Vector2(-930, 330)))

            }
        }



        // ending game
        if (GameGlobals.timer < 1 || GameGlobals.health <= 0) {
            SceneManager.loadScene(new GameOverScene())
        }
        if (Input.keysDown.includes("KeyM")) {
            SceneManager.loadScene(new GameOverScene())
        }
    }
}

class Trial2Controller extends Component {
    //wits - answering riddles

    update() {

        // if (GameGlobals.trial2clear) {
        //     SceneManager.loadScene(new EarthRoomScene(new Vector2(-670, 1930)))
        // }

        // if (GameObject.find("Riddle Output Game Object").getComponent(RiddleOutputController).index >= 3) {
        //     SceneManager.loadScene(new EarthRoomScene(new Vector2(-670, 1930)))
        // }
        if (GameGlobals.trial2clear) {
            const playerOld = GameObject.find("Player Game Object")
            if (playerOld) {
                playerOld.destroy()
            }

            SceneManager.loadScene(new EarthRoomScene(new Vector2(-650, 1920)))
        }


        // ending game
        if (GameGlobals.timer < 1 || GameGlobals.health <= 0) {
            SceneManager.loadScene(new GameOverScene())
        }
        if (Input.keysDown.includes("KeyM")) {
            SceneManager.loadScene(new GameOverScene())
        }
    }
}

class Trial3Controller extends Component {
    //agility - obstacle course

    update() {
        if (GameObject.find("Obstacle Exit Game Object").getComponent(ObstacleExitController).obstacleDone) {
            GameGlobals.trial3clear = true

            SceneManager.loadScene(new EarthRoomScene(new Vector2(960, 1620)))
        }


        // ending game
        if (GameGlobals.timer < 1 || GameGlobals.health <= 0) {
            SceneManager.loadScene(new GameOverScene())
        }
        if (Input.keysDown.includes("KeyM")) {
            SceneManager.loadScene(new GameOverScene())
        }
    }
}