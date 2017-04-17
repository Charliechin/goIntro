import Player from '../prefabs/player';
import Enemy from '../prefabs/enemyPang';
import HUD from '../prefabs/hud';

export default class PlayPang extends Phaser.State {

    create() {
        this.bg = this.add.tileSprite(0, 0, 2000, 2380, 'pangBg');
        this.game.time.slowMotion = 0;


        // ------- PLAYER
        this.player = new Player({
            game: this.game,
            x: this.game.world.centerX,
            y: 0.92 * this.game.world.height,
            health: 10,
            asset: 'smallfighter',
            frame: 2
        });
        this.game.stage.addChild(this.player);
        this.playerShootTime = 0;
        this.playerShootInterval = 0.16;

        // ------- ENEMY: this ones are created every update tick
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
        //1.5
        this.enemyClientInterval = 2.5;
        this.enemyClientShootTime = 0;
        this.enemyClientShootInterval = 1;
            //initialize first client
        this.createEnemyClient({
            game: this.game,
            x: this.game.rnd.integerInRange(6, 76) * 10,
            //0
            y: 0,
            speed: {
                x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                y: this.game.rnd.integerInRange(5, 10) * 10
            },
            //9
            health: 90,
            bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
            asset: 'aliens',
        });
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

        //this.music.loopFull();



        //Defaults
        //this.enemyTime = 0;
        //this.enemyInterval = 1.5;
        //this.enemyShootTime = 0;
        //this.enemyShootInterval = 1;
        //this.playerShootTime = 0;
        //this.playerShootInterval = 0.16;
    }

    update() {

        this.enemyTime += this.game.time.physicsElapsed;
        this.enemyShootTime += this.game.time.physicsElapsed;
        this.playerShootTime += this.game.time.physicsElapsed;

        if (this.enemyTime > this.enemyInterval) {
            this.enemyTime = 0;

            this.createEnemy({
                game: this.game,
                x: this.game.rnd.integerInRange(6, 76) * 10,
                //0
                y: 0,
                speed: {
                    x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                    y: this.game.rnd.integerInRange(5, 10) * 10
                },
                //9
                health: 9,
                bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                asset: 'alien',
                size: 2.5

            });
        }

        if (this.enemyShootTime > this.enemyShootInterval) {
            this.enemyShootTime = 0;
            if (!this.player.alive) {
                this.game.world.bringToTop(this.overlay);
                console.log("Has muerto");
            }
        }

        if (this.playerShootTime > this.playerShootInterval) {
            this.playerShootTime = 0;
            if (this.player.alive) {
                let shootKey = this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR);
                if(shootKey) {
                    this.player.shoot();
                }
            }
        }

        this.game.physics.arcade.overlap(this.player.bullets, this.enemies, this.hitEnemy, null, this);

        this.game.physics.arcade.overlap(this.player, this.enemies, this.crashEnemy, null, this);


        // this.bg.tilePosition.x += 3;
    }

    createEnemy(data) {

        let enemy = this.enemies.getFirstExists(false);
        let totalEnemies = this.enemies.children.length;
        console.log(totalEnemies);

        if (!enemy) {
            enemy = new Enemy(data);
            if(totalEnemies < 3){
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
            if(totalEnemies < 10){
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
        //enemy.x = enemy.x+20;
        this.hitEffect(enemy, bullet.tint);
        if (!enemy.alive) {
            this.enemyExplosionSound.play("",0,0.5);
            this.hud.updateScore(enemy.maxHealth);
            console.log(enemy);
            console.log('CREA UNO!');

            switch(enemy.size){
                //Large -> Medium
                case 2.5:
                  this.createSmallerEnemy({
                        game: this.game,
                        x: enemy.x,
                        //0
                        y: enemy.y,
                        speed: {
                            x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                            y: this.game.rnd.integerInRange(5, 10) * 10
                        },
                        //9
                        health: 9,
                        bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                        asset: 'alien',
                        size: 1.5
                    });
                  this.createSmallerEnemy({
                        game: this.game,
                        x: enemy.x,
                        //0
                        y: enemy.y,
                        speed: {
                            x: this.game.rnd.integerInRange(-45, 45) * 10 * (Math.random() > 0.5 ? 1 : -1),
                            y: (this.game.rnd.integerInRange(-20, -50) * 10 )
                        },
                        //9
                        health: 9,
                        bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                        asset: 'alien',
                        size: 1.5
                    });
                    break;
                //Medium -> Small
                // case 1.5:
                //     this.createSmallerEnemy({
                //         game: this.game,
                //         x: enemy.x,
                //         //0
                //         y: enemy.y,
                //         speed: {
                //             x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                //             y: this.game.rnd.integerInRange(5, 10) * 10
                //         },
                //         //9
                //         health: 9,
                //         bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                //         asset: 'alien',
                //         size: 0.5
                //     });
                //     break;

            }


        }
        bullet.kill();
    }

    // hitPlayer(player, bullet) {
    //     this.bulletHitSound.play("",0,0.5);
    //     player.damage(bullet.health);
    //     this.hud.updateHealth();
    //     this.hitEffect(player, bullet.tint);
    //     if (!player.alive) {
    //         this.playerExplosionSound.play();
    //         this.gameOver();
    //     }
    //     bullet.kill();
    // }

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

}
