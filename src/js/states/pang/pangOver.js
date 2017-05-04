import TextButton from '../../extensions/menu/textbutton';

export default class PangOver extends Phaser.State {

    create() {



        this.stage.backgroundColor = '#8ec1e8';
        this.bgCircles = this.add.image(0,0, 'go-overlay');


        this.gameOverTitle = this.add.image(this.game.world.centerX +  300,this.game.world.centerY - 200, 'go-Text');
        this.gameOverTitle.anchor.setTo(0.5);

        this.start = new TextButton({
            game: this.game,
            x: this.game.world.centerX + 300,
            y: this.game.world.centerY + 100,
            asset: 'buttons',
            overFrame: 1,
            outFrame: 0,
            downFrame: 1,
            upFrame: 0,
            label: 'Try again',
            style: {
                font: '20px Helvetica',
                fill: 'white',
                align: 'center'
            }
        });

        this.menu = new TextButton({
            game: this.game,
            x: this.game.world.centerX + 300,
            y: this.game.world.centerY +  220,
            asset: 'buttons',
            overFrame: 1,
            outFrame: 0,
            downFrame: 1,
            upFrame: 0,
            label: 'Menu',
            style: {
                font: '20px Helvetica',
                fill: 'white',
                align: 'center'
            }
        });

        this.btnOverSound = this.add.sound('menuOver');
        this.btnOutSound = this.add.sound('menuOut');
        this.btnDownSound = this.add.sound('menuDown');

        this.start.setOverSound(this.btnOverSound);
        this.start.setOutSound(this.btnOutSound);
        this.start.setDownSound(this.btnDownSound);
        this.menu.setOverSound(this.btnOverSound);
        this.menu.setOutSound(this.btnOutSound);
        this.menu.setDownSound(this.btnDownSound);

        this.start.onInputDown.add(()=>{
            this.state.start('PlayPang');
        });

        this.menu.onInputDown.add(()=>{
            this.state.start('Menu');
        });

        this.gameOverPanel = this.add.group();
        this.gameOverPanel.add(this.gameOverTitle);
        this.gameOverPanel.add(this.start);
        this.gameOverPanel.add(this.menu);
    }

    update() {
    }
}
