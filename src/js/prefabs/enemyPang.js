import Bullet from './bullet';

export default class Enemy extends Phaser.Sprite {

    constructor({ game, x, y, asset, frame, health, bulletSpeed,size }) {
        super(game, x, y, asset, frame);

        this.game = game;

        this.anchor.setTo(0.5);

        //size = scale
        this.size = size;
        this.scale.setTo(size);
        this.health = health;
        this.maxHealth = health;


        //Gravity
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;
        this.body.gravity.y = 500;
        this.body.bounce.set(1);

        this.animations.add('spinning', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 30, true);
        this.play('spinning');

        this.bullets = this.game.add.group();
        this.bullets.enableBody = true;
        this.bulletSpeed = bulletSpeed;

        this.shotSound = this.game.add.sound('enemyShot');

    }

    update() {

        if (this.position.x < 0.04 * this.game.world.width) {
            this.position.x = 0.04 * this.game.world.width + 2;
            this.body.velocity.x *= -1;
        }
        else if (this.position.x > 0.96 * this.game.world.width) {
            this.position.x = 0.96 * this.game.world.width - 2;
            this.body.velocity.x *= -1;
        }

        if (this.position.y - this.height / 2 > this.game.world.height) {
            this.kill();
        }
    }



    damage(amount) {
        super.damage(amount);
    }

    reset({ x, y, health, bulletSpeed, speed }) {
        super.reset(x, y, health);
        this.bulletSpeed = bulletSpeed;
        this.body.velocity.x = speed.x;
        this.body.velocity.y = speed.y;
    }
}
