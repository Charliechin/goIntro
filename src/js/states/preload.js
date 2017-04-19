export default class Preload extends Phaser.State {

    preload() {

        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
        this.loaderBg.anchor.setTo(0.5);
        this.loaderBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.loaderBar);
        //game 1
        this.load.atlasJSONArray('smallfighter', 'img/spritesheet/smallfighter.png', 'data/spritesheet/smallfighter.json');
        this.load.atlasJSONArray('alien', 'img/spritesheet/alien.png', 'data/spritesheet/alien.json');
        this.load.atlasJSONArray('button', 'img/spritesheet/button.png', 'data/spritesheet/button.json');
        this.load.image('farback', 'img/farback.jpg');
        this.load.image('bullet', 'img/bullet.png');
        this.load.image('particle', 'img/particle.gif');
        this.load.image('healthbar', 'img/healthbar.png');
        this.load.image('hudBg', 'img/hud-bg.png');

        this.load.audio('playMusic', ['audio/music/play.mp3']);
        this.load.audio('menuMusic', ['audio/music/menu.mp3']);

        this.load.audio('menuOver', ['audio/sound/menu-over.mp3']);
        this.load.audio('menuOut', ['audio/sound/menu-out.mp3']);
        this.load.audio('menuDown', ['audio/sound/menu-click.mp3']);

        this.load.audio('bulletHit', ['audio/sound/bullet-hit.mp3']);
        this.load.audio('enemyShot', ['audio/sound/enemy-shot.mp3']);
        this.load.audio('enemyExplosion', ['audio/sound/enemy-explosion.mp3']);
        this.load.audio('playerShot', ['audio/sound/player-shot.mp3']);
        this.load.audio('playerExplosion', ['audio/sound/player-explosion.mp3']);

        this.load.audio('gameOver', ['audio/sound/game-over.mp3']);
        //!game 1


        //game 2
            //pang
        this.load.image('pangBg', 'img/pangBg.png');

        //!game 2
        // matching
        //game 3 -- w:80, l:80
        this.load.spritesheet('tiles', 'img/spritesheet/tiles.png',80,80,11);
        //game 3
    }

    create() {
        this.state.start('Menu');
    }

}
