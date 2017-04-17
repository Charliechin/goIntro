import Enemy from '../prefabs/enemyPang';
import HUD from '../prefabs/hud';

export default class PlayPairs extends Phaser.State {

    create() {


        this.bg = this.add.tileSprite(0, 0,666,600, 'pangBg');
        console.log(this.bg);
    }

    update() {
        this.loadMenu();
    }
    loadMenu(){
        let escKey = this.game.input.keyboard.isDown(Phaser.Keyboard.ESC);
        if(escKey){
            this.game.state.start('Menu');

        }
    }

}
