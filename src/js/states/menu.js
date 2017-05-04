import TextButton from '../extensions/menu/textbutton';

export default class Menu extends Phaser.State {
    init(currentClient,customVar2){

        console.log(currentClient);
        console.log(customVar2);
        //create list here
        if(currentClient === undefined){
            console.log("UNDEFINED!");
        }

    }
    create() {
        this.currentClient = 0;

        this.stage.backgroundColor = '#8ec1e8';
        this.backgroundClouds = this.add.tileSprite(this.game.world.centerX,this.game.world.height - 100,1530,256,'bgClouds');
        this.backgroundClouds.anchor.setTo(0.5);


        this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Connecting Students with Opportunity', {
            font: '36px Arial',
            fill: 'white',
            align: 'center'
        });
        this.title.anchor.setTo(0.5);
        // this.music = this.game.add.audio('menuMusic');

        this.goIntroLogo = this.add.image(this.game.world.centerX,this.game.world.centerY - 800,'goIntroLogo');
        this.goIntroLogo.anchor.setTo(0.5);
        this.game.add.tween(this.goIntroLogo).to( { y: this.game.world.centerY - 300 }, 2000, Phaser.Easing.Bounce.Out, true);


        this.pairsBtn = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            asset: 'buttons',
            overFrame: 1,
            outFrame: 0,
            downFrame: 1,
            upFrame: 0,
            label: 'Pairs',
            style: {
                font: '20px Helvetica',
                fill: 'white',
                align: 'center'
            }
        });

        this.btnOverSound = this.add.sound('menuOver');
        this.btnOutSound = this.add.sound('menuOut');
        this.btnDownSound = this.add.sound('menuDown');

        this.pairsBtn.setOverSound(this.btnOverSound);
        this.pairsBtn.setOutSound(this.btnOutSound);
        this.pairsBtn.setDownSound(this.btnDownSound);

        this.pairsBtn.onInputUp.add(()=>{
            //this.music.stop();
            this.state.start('PlayPairs');

        });



        // Second Btn
        this.start = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY + 100,
            asset: 'buttons',
            overFrame: 1,
            outFrame: 0,
            downFrame: 1,
            upFrame: 1,
            label: 'Bubble Burst!',
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

        this.start.onInputUp.add(()=>{
            //this.music.stop();
            this.currentClient = "CLIENT 0";
            this.state.start('PlayPang', true, false, this.currentClient);


        });
        // third Btn
        this.pangBtn = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY + 200,
            asset: 'buttons',
            overFrame: 1,
            outFrame: 0,
            downFrame: 1,
            upFrame: 1,
            label: 'Quiz!',
            style: {
                font: '20px Helvetica',
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
            this.state.start('Quiz');
        });

        // help Btn
        this.helpBtn = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY + 340,
            asset: 'buttons',
            overFrame: 3,
            outFrame: 2,
            downFrame: 3,
            upFrame: 3,
            label: 'About',
            style: {
                font: '20px Helvetica',
                fill: '#ababab',
                align: 'center'
            }
        });
        this.helpBtn.frame = 3;
        this.btnOverSound = this.add.sound('menuOver');
        this.btnOutSound = this.add.sound('menuOut');
        this.btnDownSound = this.add.sound('menuDown');

        this.helpBtn.setOverSound(this.btnOverSound);
        this.helpBtn.setOutSound(this.btnOutSound);
        this.helpBtn.setDownSound(this.btnDownSound);

        this.helpBtn.onInputUp.add(()=>{
            //this.music.stop();
            //TODO: HOW TO PLAY SCREEN
            alert('HOW TO PLAY')
        });

        this.menuPanel = this.add.group();
        this.menuPanel.add(this.title);
        this.menuPanel.add(this.pairsBtn);
        this.menuPanel.add(this.start);
        this.menuPanel.add(this.pangBtn);
        this.menuPanel.add(this.helpBtn);


        //this.music.loopFull();


    }
    update() {
        this.backgroundClouds.tilePosition.x += 0.2;
    }
}
