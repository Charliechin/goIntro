import Player from '../../prefabs/pang/player';
import Enemy from '../../prefabs/pang/enemyPang';
import HUD from '../../prefabs/pang/hud';

export default class PlayPang extends Phaser.State {

    init(currentClient) {
        //comes from menu.js
        console.log(currentClient);
        this.currentClient = currentClient;
    }

    create() {



        //TODO: json Testing
        this.bg = this.add.image(0, 0,'pangBg');
        this.game.time.slowMotion = 0;


        // ------- PLAYER
        this.player = new Player({
            game: this.game,
            x: this.game.world.centerX,
            y: 0.92 * this.game.world.height,
            health: 10,
            asset: 'alien',
            frame: 'alien-stand.png'
        });

        this.game.stage.addChild(this.player);


        // ------- ENEMY:
        this.enemies = this.add.group();
        this.enemies.enableBody = true;
        this.enemyTime = 0;
                            //1.5
        this.enemyInterval = 2.5;
        this.enemyShootTime = 0;
        this.enemyShootInterval = 1;
        // ------- !ENEMY

        // ------- smallerENEMY: this ones are created every update tick
        this.smallerEnemies = this.add.group();
        this.smallerEnemies.enableBody = true;
        // ------- !smallerENEMY


        // ------- ENEMY CLIENT: randomly chosen
        this.enemiesClient = this.add.group();
        this.enemiesClient.enableBody = true;
            //initialize first client



        this.game.time.events.add(Phaser.Timer.SECOND * this.game.rnd.integerInRange(1,15), function(){
            this.createEnemyClient({
                game: this.game,
                x: this.game.rnd.integerInRange(6, 76) * 10,
                y: 0,
                speed: {
                    x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                    y: this.game.rnd.integerInRange(5, 10) * 10
                },
                health: 15,
                asset: 'logoBubbles',
                frame: this.game.rnd.integerInRange(0, 8)
            });
        }, this);


        // ------- !ENEMY CLIENT: randomly chosen

        this.game.time.events.loop(Phaser.Timer.SECOND * 10, () => {
            if(this.enemyInterval > 0.2 ){
                this.enemyInterval -= 0.1;
            }
        });

        this.overlayBitmap = this.add.bitmapData(this.game.width, this.game.height);
        this.overlayBitmap.ctx.fillStyle = '#000';
        this.overlayBitmap.ctx.fillRect(0, 0, this.game.width, this.game.height);

        this.overlay = this.add.sprite(0, 0, this.overlayBitmap);
        this.overlay.visible = false;
        this.overlay.alpha = 0.75;

        this.hud = new HUD({
            game: this.game,
            player: this.player
        });

        // ------- SOUNDS
       // this.music = this.game.add.audio('playMusic');
        this.bulletHitSound = this.add.sound('bulletHit');
        this.enemyExplosionSound = this.add.sound('enemyExplosion');
        this.playerExplosionSound = this.add.sound('playerExplosion');
        this.gameOverSound = this.add.sound('gameOver');

    }

    update() {

        this.enemyTime += this.game.time.physicsElapsed;
        this.enemyShootTime += this.game.time.physicsElapsed;


        if (this.enemyTime > this.enemyInterval) {
            this.enemyTime = 0;

            this.createEnemy({
                game: this.game,
                x: this.game.rnd.integerInRange(6, 76) * 10,
                //0
                y: -270,
                speed: {
                    x: this.game.rnd.integerInRange(-500, 500) * (Math.random() > 0.5 ? 1 : -1),
                    y: this.game.rnd.integerInRange(-550,100)

                },

                health: 9,
                bulletSpeed: 0,
                asset: 'bubbles',
                size: "medium",
                frame: this.game.rnd.integerInRange(0,2)

            });
        }

        if (this.enemyShootTime > this.enemyShootInterval) {
            this.enemyShootTime = 0;
            if (!this.player.alive) {
                this.game.world.bringToTop(this.overlay);
                console.log("Has muerto");
            }
        }


        this.game.physics.arcade.overlap(this.player.bullets, [this.enemies,this.smallerEnemies,this.enemiesClient], this.hitEnemy, null, this);
        this.game.physics.arcade.overlap(this.player, [this.enemies,this.smallerEnemies], this.crashEnemy, null, this);
        this.loadMenu();

    }

    createEnemy(data) {

        let enemy = this.enemies.getFirstExists(false);
        let totalEnemies = this.enemies.children.length;

        if (!enemy) {
            enemy = new Enemy(data);
            if(totalEnemies <= 5){
                this.enemies.add(enemy);
            }

        }
        enemy.reset(data);
    }

    createSmallerEnemy(data) {

        let enemy = this.smallerEnemies.getFirstExists(false);
        let totalEnemies = this.smallerEnemies.children.length;

        if (!enemy) {
            enemy = new Enemy(data);
            if(totalEnemies <= 24){
                this.smallerEnemies.add(enemy);
            }

        }
        enemy.reset(data);
    }

    createEnemyClient(data) {

        let enemy = this.enemiesClient.getFirstExists(false);
        let totalEnemies = this.enemiesClient.children.length;
        console.log(totalEnemies);

        if (!enemy) {
            enemy = new Enemy(data);
            if(totalEnemies <= 1){
                this.enemiesClient.add(enemy);
            }

        }
        enemy.reset(data);
    }

    hitEffect(obj, color) {
        let tween = this.game.add.tween(obj);
        let emitter = this.game.add.emitter();
        let emitterPhysicsTime = 0;
        let particleSpeed = 100;
        let maxParticles = 10;

        tween.to({tint: 0xff0000}, 100);
        tween.onComplete.add(() => {
            obj.tint = 0xffffff;
        });
        tween.start();

        emitter.x = obj.x;
        emitter.y = obj.y;
        emitter.gravity = 0;
        emitter.makeParticles('particle');

        if (obj.health <= 0) {
            particleSpeed = 200;
            maxParticles = 40;
            color = 0xff0000;
        }

        emitter.minParticleSpeed.setTo(-particleSpeed, -particleSpeed);
        emitter.maxParticleSpeed.setTo(particleSpeed, particleSpeed);
        emitter.start(true, 500, null, maxParticles);
        emitter.update = () => {
            emitterPhysicsTime += this.game.time.physicsElapsed;
            if(emitterPhysicsTime >= 0.6){
                emitterPhysicsTime = 0;
                emitter.destroy();
            }

        };
        emitter.forEach(particle => particle.tint = color);
        if (!this.player.alive) {
            this.game.world.bringToTop(this.overlay);
        }
    }

    hitEnemy(bullet, enemy) {
        this.bulletHitSound.play("",0,0.5);
        enemy.damage(bullet.health);
        this.hitEffect(enemy, bullet.tint);
        if (!enemy.alive) {
            this.enemyExplosionSound.play("", 0, 0.5);
            this.hud.updateScore(enemy.maxHealth);
            if( enemy.size === 'medium') {

                this.createSmallerEnemy(
                    {
                        game: this.game,
                        x: enemy.x,
                        // x: this.game.rnd.integerInRange(0, this.game.width - 300),
                        //0
                        y: enemy.y,
                        speed: {
                            x: -300,
                            y: -300,
                            // x: 300,
                            // y: this.game.rnd.integerInRange(100, -550)
                        },
                        //9
                        health: 5,
                        asset: 'bubbles',
                        size: "small",
                        frame: this.game.rnd.integerInRange(3,5)

                    }
                );
                this.createSmallerEnemy(
                    {
                        game: this.game,
                        x: enemy.x,
                        y: enemy.y,
                        speed: {
                            x: 300,
                            y: -300,

                        },
                        health: 5,
                        asset: 'bubbles',
                        size: "small",
                        frame: this.game.rnd.integerInRange(3,5)

                    }
                );
            }

            bullet.kill();
        }
    }

    crashEnemy(player, enemy) {
        //enemy.damage(enemy.health);
        enemy.damage(3);
        //player.damage(enemy.health);
        player.damage(1);
        this.hitEffect(player);
        this.hitEffect(enemy);
        if (!enemy.alive) {
            this.enemyExplosionSound.play("",0,0.5);
            this.hud.updateScore(enemy.maxHealth);
        }
        this.hud.updateHealth();
        if (!player.alive) {
            this.playerExplosionSound.play();
            this.gameOver();
        }
    }

    gameOver(){
        this.game.time.slowMotion = 3;
        this.overlay.visible = true;
        this.game.world.bringToTop(this.overlay);
        let timer = this.game.time.create(this.game, true);
        timer.add(3000, () => {
            // this.music.stop();
            this.gameOverSound.play();
            this.game.state.start('PangOver');
        });
        timer.start();
    }

    loadMenu(){
        let escKey = this.game.input.keyboard.isDown(Phaser.Keyboard.ESC);
        if(escKey){
            this.currentClient++;
            this.customVar2 = "Ojete";
            this.player.kill();
            //starts the state with custom variables
            this.game.state.start('Menu', true, false, this.currentClient,this.customVar2);


        }
    }
}
