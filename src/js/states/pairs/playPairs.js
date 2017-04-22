import CardButton from '../../extensions/pairs/cardbutton';

export default class PlayPairs extends Phaser.State {

    create() {

        //this.bg = this.add.tileSprite(0, 0,666,600, 'pangBg');
        this.game.stage.backgroundColor = '#4ed0e1';
        this.bg = this.game.add.image(0, 0, 'bg');
        this.numRows = 4;
        this.numCols = 5;
        this.tileSize = 155;
        this.tileSpacing = 5;
        this.tilesLeft = (this.numRows * this.numCols);

        this.backOfTheCard = 10;

            /*
            * Clients starts at position 10 (count spaces in spriteSheet)
            * 13 = Google
            * 14 = Amazon
            * 15 = CapitalOne
            * 16 = Goldman Sachs
            * 17 = Accenture
            * 18 = Capgemini
            * 19 = PWC
            * 17 = ...
            * 18 = ...
            * 19 = ...
            * 20 = ...
            */
        this.chosenClient = 13;


        this.cardGroup = this.add.group();
        //set it to one minute (60)
        this.timeLeft = 60;
        this.score = 0;
        this.highScore = 0;

        this.cardsArray = [];
        this.selectedCardsArray = [];


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

        let leftSpace = (this.game.width - (this.numCols * this.tileSize) - ((this.numCols - 1) * 	this.tileSpacing))/2;
        let topSpace  = (this.game.height - (this.numRows * this.tileSize) - ((this.numRows - 1) * 	this.tileSpacing))/2;

        //-- Populate array with pairs of numbers [1,1,2,2,3,3,4,4,...]
        for(let i = 0; i < this.tilesLeft; i++) {
            this.cardsArray.push(Math.floor(i / 2));
        }

        //-- Randomize / mix the array
        for(let i = 0; i < this.tilesLeft; i++) {
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
                    x: leftSpace + i * (this.tileSize +	this.tileSpacing) + 75,
                    y: topSpace + j * (this.tileSize + this.tileSpacing) + 100,
                    asset: 'tiles',
                    callback: this.showCard,
                    callbackContext: this,
                    downFrame: 12,
                    value: this.cardsArray[j * this.numCols + i],
                    isClient: false
                });
                // This part is where we take the last card in our spritesheet and replace it with a client
                // In this case value 9 is the last value of the 'standard' cards
                if(card.value == 9){
                    card.value = this.chosenClient;
                    card.isClient = true;
                }

                card.frame = this.backOfTheCard;
                this.cardGroup.add(card);

            }
        }
    }
    showCard(targetCard) {
        /*
        *   push the values from the cards to our selected array of cards
        *   if you have chosen 2, let's compare them using checkTiles
        */
        if(this.selectedCardsArray.length < 2 && this.selectedCardsArray.indexOf(targetCard) === -1) {
            //TODO sounds
            // if(playSound){
            //     this.soundArray[0].play();
            // }
            targetCard.frame = targetCard.value;
            this.selectedCardsArray.push(targetCard);

            if(this.selectedCardsArray.length === 2) {
                this.game.time.events.add(Phaser.Timer.SECOND, this.checkTiles, this);
            }
        }

    }

    checkTiles() {
        /*
         *   Check the if the values from our selectedCardsArray are equal
         *   if so, add score and hide them from the user.
         */
        if(this.selectedCardsArray[0].value === this.selectedCardsArray[1].value) {
            /*
            * TODO sounds
            * if(this.playsound){
            *   this.soundArray[1].play();
            * }
            * */

            this.score++;
            this.timeLeft += 2;
            this.timeText.text = "Time left: " + this.timeLeft;
            this.scoreText.text = "Score: " + this.score;

            // TODO: Fire up the event if its a client Card
            if(this.selectedCardsArray[0].isClient) {
                this.fireClientMessage("Client");
            }

            this.selectedCardsArray[0].destroy();
            this.selectedCardsArray[1].destroy();
            this.tilesLeft -= 2;

            // Win condition
            if(this.tilesLeft === 0 ) {
                this.cardsArray.length = 0;
                this.selectedCardsArray.length = 0;
                //this.placeCards();
                this.game.state.start('PlayPairs');
            }
        }
        else{
            //TODO: Sounds
            // if(playSound){
            //     this.soundArray[2].play();
            // }
            this.game.camera.shake(0.01, 100);
            // If they are not the same, face them off
            this.selectedCardsArray[0].frame = this.backOfTheCard;
            this.selectedCardsArray[1].frame = this.backOfTheCard;
        }
        this.selectedCardsArray.length = 0;
    }

    fireClientMessage(client) {
        alert("This is a message from a default Client");
    }
}
