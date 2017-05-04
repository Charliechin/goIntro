import Bullet from './bullet';

export default class Player extends Phaser.Sprite {

    constructor({ game, x, y, asset, frame, health }) {
        super(game, x, y, asset, frame);

        this.game = game;

        this.anchor.setTo(0.5);
        this.scale.setTo(0.5);

        this.health = health;
        this.maxHealth = health;
        this.game.physics.arcade.enable(this);

        //gravity
        this.body.gravity.y = 500;
        this.body.collideWorldBounds = true;
        //!gravity

        this.bullets = this.game.add.group();
        this.bullets.enableBody = true;
        this.bulletSpeed = -700;
        this.playerShootTime = 0;
        this.playerShootInterval = 0.16;



        this.shotSound = this.game.add.sound('playerShot');

        this.animations.add('walkRight',['alien-walk-01.png','alien-walk-02.png'],12,false);
        this.animations.add('walkLeft',['alien-walk-1b.png','alien-walk-2b.png'],12,false);
        this.animations.add('shoot',['alien-shoot-01.png','alien-shoot-02.png'],8,false);
    }
    update() {
        this.body.velocity.x = 0;
        this.playerShootTime += this.game.time.physicsElapsed;


        let leftKey = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
        let rightKey = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
        let shootKey = this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR);

        if(leftKey){

            if(shootKey && leftKey){
                this.animations.play('shoot');
                this.x -= 10;
            }else{
                this.animations.play('walkLeft');
                this.x -= 10;
            }


        }
        else if(rightKey){
            if(shootKey && rightKey) {
                this.animations.play('shoot');
                this.x += 10;
            }else{
                this.animations.play('walkRight');
                this.x += 10;
            }




        }
        if (this.playerShootTime > this.playerShootInterval) {
            this.playerShootTime = 0;
            if (this.alive) {

                if(shootKey) {
                    this.animations.play('shoot');
                    this.shoot();
                }
            }
        }
    }

    shoot() {

        let bullet = this.bullets.getFirstExists(false);

        if (!bullet) {
            bullet = new Bullet({
                game: this.game,
                x: this.x + 50,
                y: this.top,
                //3
                health: 1,
                asset: 'bullet',
                tint: 0xF7050D
            });
            // change this number to shoot less bullets at a time
            if(this.bullets.children.length <= 5){
                this.shotSound.play("",0,0.5);
                this.bullets.add(bullet);
                bullet.body.velocity.y = this.bulletSpeed;


            }
        }
        else {
            this.shotSound.play("",0,0.5);
            bullet.reset(this.x + 50, this.top, 1);
            bullet.body.velocity.y = this.bulletSpeed;
        }


    }

    damage(amount) {
        super.damage(amount);
    }

}
