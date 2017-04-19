import CardButton from '../extensions/cardbutton';

export default class PlayPairs extends Phaser.State {

    create() {

        //this.bg = this.add.tileSprite(0, 0,666,600, 'pangBg');

        this.numRows = 4;
        this.numCols = 5;
        this.tileSize = 80;
        this.tileSpacing = 10;

        //set it to one minute (60)
        this.timeLeft = 600;
        this.score = 0;
        this.highScore = 0;

        this.cardsArray = [];
        this.selectedArray = [];

        //------ CARD RELATED STUFF
        this.carta1 = new CardButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            asset: 'tiles',
            downFrame: 10,
            outFrame: 10,
            overFrame: 10,
            upFrame: 8,
            value: "ojete"
        });
        this.menuPanel = this.add.group();
        this.menuPanel.add(this.carta1);

        //------ HUD RELATED STUFF

        this.style = {
            font: "32px Helvetica",
            fill: "#00ff00",
            align: "center"
        };
        this.scoreText = this.add.text(5, 5, "Score: " + this.score, this.style);
        this.timeText = this.add.text(5, this.game.height - 5, "Time left: " + this.timeLeft, this.style);
        this.timeText.anchor.set(0,1);

        this.game.time.events.loop(Phaser.Timer.SECOND, this.decreaseTime,this);

        this.placeCards();
    }

    update() {
        this.loadMenu();

    }

    // Custom functions
    loadMenu(){
        let escKey = this.game.input.keyboard.isDown(Phaser.Keyboard.ESC);
        if(escKey){
            this.game.state.start('Menu');
        }
    }

    decreaseTime() {
        this.timeLeft--;
        this.timeText.text = "Time left: " + this.timeLeft;
        if(this.timeLeft == 0) {
            //Change this to pairsOver
            this.game.state.start('PangOver');
        }
    }
    placeCards() {

        let tilesLeft = (this.numRows * this.numCols);
        let leftSpace = (this.game.width - (this.numCols * this.tileSize) - ((this.numCols - 1) * 	this.tileSpacing))/2;
        let topSpace  = (this.game.height - (this.numRows * this.tileSize) - ((this.numRows - 1) * 	this.tileSpacing))/2;

        //-- Populate array with pairs of numbers [1,1,2,2,3,3,4,4,...]
        for(let i = 0; i < tilesLeft; i++) {
            this.cardsArray.push(Math.floor(i / 2));
        }

        //-- Randomize / mix the array
        for(let i = 0; i < tilesLeft; i++) {
            let from =  this.game.rnd.between(0, this.cardsArray.length-1);
            let to   =  this.game.rnd.between(0, this.cardsArray.length-1);
            let temp =  this.cardsArray[from];

            this.cardsArray[from] = this.cardsArray[to];
            this.cardsArray[to] = temp;
        }
        //-- Deal the cards
        for(let i = 0; i < this.numCols; i++) {
            for(let j = 0; j < this.numRows; j++) {

                let card = new CardButton({
                    game: this.game,
                    x: leftSpace + i * (this.tileSize + this.tileSpacing),
                    y: topSpace + i * (this.tileSize + this.tileSpacing),
                    asset: 'tiles',
                    downFrame: 10,
                    outFrame: 10,
                    overFrame: 10,
                    upFrame: 10,
                    value: "ojete"
                });

            }

        }
    }
}
