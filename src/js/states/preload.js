export default class Preload extends Phaser.State {

    preload() {

        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
        this.loaderBg.anchor.setTo(0.5);
        this.loaderBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.loaderBar);

        this.load.image('goIntroLogo', 'img/generic/goIntro-logo.png');
        this.load.image('bgClouds','img/generic/bgClouds.png');
        this.load.spritesheet('buttons','img/generic/yellowButton.png',360,93,4);

        // Shooter

        this.load.audio('playMusic', ['audio/shooter/music/play.mp3']);
        //!Shooter

        // Misc sounds
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
        // Misc sounds


        //Pang

        this.load.image('pangBg', 'img/pang/pangBg.png');
        this.load.image('go-overlay', 'img/pang/gameOver-bg.png');
        this.load.image('go-Text', 'img/pang/gameOver-text.png');

        this.load.image('bullet', 'img/pang/bullet.png');
        this.load.image('particle', 'img/pang/particle.gif');
        this.load.image('healthbar', 'img/pang/healthbar.png');
        this.load.image('hudBg', 'img/pang/hud-bg.png');

        this.load.atlasJSONHash('bubbles','img/pang/spritesheet/bubbles.png','data/pang/spritesheet/bubbles.json');
        this.load.atlasJSONHash('logoBubbles','img/pang/spritesheet/logoBubbles.png','data/pang/spritesheet/logoBubbles.json');
        this.load.atlasJSONHash('alien','img/pang/spritesheet/alien.png','data/pang/spritesheet/alien.json');

        //!Pang


        // matching pairs

        this.load.spritesheet('tiles','img/pairs/tilesClient3.png', 150, 170, 15);
        this.load.image('bg', 'img/pairs/bg.jpg');
        // matching pairs
    }
    create() {
        this.state.start('Menu');
    }

}
