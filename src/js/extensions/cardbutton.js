export default class CardButton extends Phaser.Button {

    constructor({ game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame,value}) {
        super(game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);

        this.anchor.setTo(0.5);
        this.value = value;
    }
}








// let card = this.game.add.button(leftSpace + i), topSpace + i, "tiles", function(){console.log("as")}, this);
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
card.frame = 2;
this.menuPanel.add(card);
