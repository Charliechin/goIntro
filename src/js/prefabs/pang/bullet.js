export default class Bullet extends Phaser.Sprite {

    constructor({ game, x, y, asset, health, tint = 0xFFFF00 }) {
        super(game, x, y, asset);

        this.anchor.setTo(0.5);
        this.scale.setTo(1.2);
        this.health = health;
        this.tint = tint;
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;
    }
}
