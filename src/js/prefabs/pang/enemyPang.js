import Bullet from './bullet';
// Create a Bubble
export default class Enemy extends Phaser.Sprite {

    constructor({ game, x, y, asset, frame, health,size, companyName, logoSrc, modalContent, isCompleted }) {
        super(game, x, y, asset, frame);

        this.game = game;
        this.anchor.setTo(0.5);

        this.health = health;
        this.maxHealth = health;
        this.size = size;

        //Physics
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;
        this.body.gravity.set(0.5, 1300);
        this.body.bounce.set(1);

        // Necesary attributes in case the bubble is a Client Bubble
        this.companyName = companyName;
        this.logoSrc = logoSrc;
        this.isCompleted = false;


    }

    update() {}



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
