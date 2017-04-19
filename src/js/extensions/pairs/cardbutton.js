export default class CardButton extends Phaser.Button {

    constructor({ game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame,value, isClient}) {
        super(game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);

        this.anchor.setTo(0.5);
        this.callback = callback;
        this.value = value;
        this.isClient = isClient;
    }
}
