class MainController extends Component {
    start() {
        let time = 0
    }
    update() {
        // console.log("Main Controller Updated")
        const randomNum = Math.floor(Math.random() * 5) + 3

        // spawning enemies
        if (GameGlobals.elementsFound.includes("fire")) {
            if ((!GameObject.find("Enemy Melee Game Object") && !GameObject.find("Enemy Mage Game Object") || this.time > 60)) {
                for (let i = 0; i < randomNum; i += 2) {
                    instantiate(new EnemyMageGameObject, new Vector2((Math.random() * 1000) - 3000, (Math.random() * 2200)))
                    instantiate(new EnemyMeleeGameObject, new Vector2((Math.random() * 1000) - 3000, (Math.random() * 2200)))

                    instantiate(new EnemyMageGameObject, new Vector2((Math.random() * 1000) - 2000, (Math.random() * 2200)))
                    instantiate(new EnemyMeleeGameObject, new Vector2((Math.random() * 1000) - 2000, (Math.random() * 2200)))

                    instantiate(new EnemyMageGameObject, new Vector2((Math.random() * 1000) - 1000, (Math.random() * 2200)))
                    instantiate(new EnemyMeleeGameObject, new Vector2((Math.random() * 1000) - 1000, (Math.random() * 2200)))

                    instantiate(new EnemyMageGameObject, new Vector2((Math.random() * 1000), (Math.random() * 2200)))
                    instantiate(new EnemyMeleeGameObject, new Vector2((Math.random() * 1000), (Math.random() * 2200)))
                }
                this.time = 0
            } else {
                this.time += Time.deltaTime
            }

            const goodLuckText = new GameObject("Good Luck Text Game Object")
            goodLuckText.addComponent(new Text(), {fillStyle: "black", text: "Find all the elements and escape the dungeon.\nYou only have 10 minutes and 10 lives.\nGood Luck.", textAlign: "center", font: "24px 'Calibri'"})
            instantiate(goodLuckText, new Vector2(-1500, 1100))
        }

        if (!GameGlobals.elementsFound.includes("fire")) {
            SceneManager.getActiveScene().instantiate(new FireGameObject(), new Vector2(-1500, 855))
        }

        // ending game
        if (GameGlobals.timer < 1 || GameGlobals.health <= 0) {
            SceneManager.loadScene(new GameOverScene())
        }
        if (Input.keysDown.includes("AltLeft")) {
            SceneManager.loadScene(new GameOverScene())
        }
    }
}