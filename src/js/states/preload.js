export default class Preload extends Phaser.State {

    preload() {

        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
        this.loaderBg.anchor.setTo(0.5);
        this.loaderBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.loaderBar);
        // Shooter

        this.load.atlasJSONArray('smallfighter', 'img/shooter/spritesheet/smallfighter.png', 'data/shooter/spritesheet/smallfighter.json');
        this.load.atlasJSONArray('alien', 'img/shooter/spritesheet/alien.png', 'data/shooter/spritesheet/alien.json');
        this.load.atlasJSONArray('button', 'img/button.png', 'data/generic/button.json');
        this.load.image('farback', 'img/shooter/farback.jpg');
        this.load.image('bullet', 'img/shooter/bullet.png');
        this.load.image('particle', 'img/shooter/particle.gif');
        this.load.image('healthbar', 'img/shooter/healthbar.png');
        this.load.image('hudBg', 'img/shooter/hud-bg.png');

        this.load.audio('playMusic', ['audio/shooter/music/play.mp3']);
        this.load.audio('menuMusic', ['audio/shooter/music/menu.mp3']);

        this.load.audio('menuOver', ['audio/shooter/sound/menu-over.mp3']);
        this.load.audio('menuOut', ['audio/shooter/sound/menu-out.mp3']);
        this.load.audio('menuDown', ['audio/shooter/sound/menu-click.mp3']);

        this.load.audio('bulletHit', ['audio/shooter/sound/bullet-hit.mp3']);
        this.load.audio('enemyShot', ['audio/shooter/sound/enemy-shot.mp3']);
        this.load.audio('enemyExplosion', ['audio/shooter/sound/enemy-explosion.mp3']);
        this.load.audio('playerShot', ['audio/shooter/sound/player-shot.mp3']);
        this.load.audio('playerExplosion', ['audio/shooter/sound/player-explosion.mp3']);

        this.load.audio('gameOver', ['audio/shooter/sound/game-over.mp3']);
        //!game 1


        //Pang

        this.load.image('pangBg', 'img/pang/pangBg.png');

        //!Pang


        // matching pairs

        this.load.spritesheet('tiles','img/pairs/tilesClient2.png', 150, 170, 15);
        this.load.image('bg', 'img/pairs/bg.jpg');
        // matching pairs
    }

    create() {
        this.state.start('Menu');
    }

}
