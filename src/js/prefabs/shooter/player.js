import Bullet from '../pang/bullet';

export default class Player extends Phaser.Sprite {

    constructor({ game, x, y, asset, frame, health }) {
        super(game, x, y, asset, frame);

        this.game = game;

        this.anchor.setTo(0.5);
        this.scale.setTo(0.8);

        this.health = health;
        this.maxHealth = health;



        this.game.physics.arcade.enable(this);
        //gravity
        this.body.gravity.y = 100;
        this.body.collideWorldBounds = true;
        //

        this.bullets = this.game.add.group();
        this.bullets.enableBody = true;
        this.bulletSpeed = -500;

        this.shotSound = this.game.add.sound('playerShot');
    }

    update() {

    }

    shoot() {

        let bullet = this.bullets.getFirstExists(false);

        if (!bullet) {
            bullet = new Bullet({
                game: this.game,
                x: this.x,
                y: this.top,
                //3
                health: 1,
                asset: 'bullet',
                tint: 0x04c112
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
            bullet.reset(this.x, this.top, 1);
            bullet.body.velocity.y = this.bulletSpeed;
        }


    }

    damage(amount) {
        super.damage(amount);
    }

}
