import TextButton from '../extensions/menu/textbutton';

export default class Menu extends Phaser.State {

    create() {
        this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY-200, 'Choose a game!', {
            font: '36px Tahoma',
            fill: 'white',
            align: 'center'
        });
        this.title.anchor.setTo(0.5);
        // this.music = this.game.add.audio('menuMusic');


        this.leftBtn = new TextButton({
            game: this.game,
            x: this.game.world.centerX - 200,
            y: this.game.world.centerY,
            asset: 'button',
            overFrame: 2,
            outFrame: 1,
            downFrame: 0,
            upFrame: 1,
            label: 'LeftBtn',
            style: {
                font: '16px Verdana',
                fill: 'white',
                align: 'center'
            }
        });

        this.btnOverSound = this.add.sound('menuOver');
        this.btnOutSound = this.add.sound('menuOut');
        this.btnDownSound = this.add.sound('menuDown');

        this.leftBtn.setOverSound(this.btnOverSound);
        this.leftBtn.setOutSound(this.btnOutSound);
        this.leftBtn.setDownSound(this.btnDownSound);

        this.leftBtn.onInputUp.add(()=>{
            //this.music.stop();
            this.state.start('PlayPairs');

        });



        // Second Btn
        this.start = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            asset: 'button',
            overFrame: 2,
            outFrame: 1,
            downFrame: 0,
            upFrame: 1,
            label: 'Start',
            style: {
                font: '16px Verdana',
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

        this.start.onInputUp.add(()=>{
            //this.music.stop();
            this.state.start('Play');

        });
        // third Btn
        this.pangBtn = new TextButton({
            game: this.game,
            x: this.game.world.centerX + 200,
            y: this.game.world.centerY,
            asset: 'button',
            overFrame: 2,
            outFrame: 1,
            downFrame: 0,
            upFrame: 1,
            label: 'Pang-like!',
            style: {
                font: '16px Verdana',
                fill: 'white',
                align: 'center'
            }
        });

        this.btnOverSound = this.add.sound('menuOver');
        this.btnOutSound = this.add.sound('menuOut');
        this.btnDownSound = this.add.sound('menuDown');

        this.pangBtn.setOverSound(this.btnOverSound);
        this.pangBtn.setOutSound(this.btnOutSound);
        this.pangBtn.setDownSound(this.btnDownSound);

        this.pangBtn.onInputUp.add(()=>{
            //this.music.stop();
            this.state.start('PlayPang');


        });



        this.menuPanel = this.add.group();
        this.menuPanel.add(this.title);
        this.menuPanel.add(this.leftBtn);
        this.menuPanel.add(this.start);
        this.menuPanel.add(this.pangBtn);

        //this.music.loopFull();
    }
}
