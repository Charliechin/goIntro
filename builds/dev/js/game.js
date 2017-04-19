(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardButton = function (_Phaser$Button) {
    _inherits(CardButton, _Phaser$Button);

    function CardButton(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            asset = _ref.asset,
            callback = _ref.callback,
            callbackContext = _ref.callbackContext,
            overFrame = _ref.overFrame,
            outFrame = _ref.outFrame,
            downFrame = _ref.downFrame,
            upFrame = _ref.upFrame,
            value = _ref.value;

        _classCallCheck(this, CardButton);

        var _this = _possibleConstructorReturn(this, (CardButton.__proto__ || Object.getPrototypeOf(CardButton)).call(this, game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));

        _this.anchor.setTo(0.5);
        _this.value = value;
        return _this;
    }

    return CardButton;
}(Phaser.Button);

// let card = this.game.add.button(leftSpace + i), topSpace + i, "tiles", function(){console.log("as")}, this);


exports.default = CardButton;
var card = new CardButton({
    game: undefined.game,
    x: leftSpace + i * (undefined.tileSize + undefined.tileSpacing),
    y: topSpace + i * (undefined.tileSize + undefined.tileSpacing),
    asset: 'tiles',
    downFrame: 10,
    outFrame: 10,
    overFrame: 10,
    upFrame: 10,
    value: "ojete"
});
card.frame = 2;
undefined.menuPanel.add(card);

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextButton = function (_Phaser$Button) {
    _inherits(TextButton, _Phaser$Button);

    function TextButton(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            asset = _ref.asset,
            callback = _ref.callback,
            callbackContext = _ref.callbackContext,
            overFrame = _ref.overFrame,
            outFrame = _ref.outFrame,
            downFrame = _ref.downFrame,
            upFrame = _ref.upFrame,
            label = _ref.label,
            style = _ref.style;

        _classCallCheck(this, TextButton);

        var _this = _possibleConstructorReturn(this, (TextButton.__proto__ || Object.getPrototypeOf(TextButton)).call(this, game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));

        _this.anchor.setTo(0.5);

        _this.label = label;
        _this.style = style;
        _this.text = new Phaser.Text(_this.game, 0, 0, _this.label, _this.style);
        _this.text.anchor.setTo(0.5);

        _this.addChild(_this.text);

        return _this;
    }

    return TextButton;
}(Phaser.Button);

exports.default = TextButton;

},{}],3:[function(require,module,exports){
'use strict';

var _states = require('./states');

var states = _interopRequireWildcard(_states);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var GAME = new Phaser.Game(800, 1000, Phaser.AUTO);

Object.keys(states).forEach(function (state) {
  return GAME.state.add(state, states[state]);
});

GAME.state.start('Boot');

},{"./states":10}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = function (_Phaser$Sprite) {
    _inherits(Bullet, _Phaser$Sprite);

    function Bullet(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            asset = _ref.asset,
            health = _ref.health,
            _ref$tint = _ref.tint,
            tint = _ref$tint === undefined ? 0xff0000 : _ref$tint;

        _classCallCheck(this, Bullet);

        var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, game, x, y, asset));

        _this.anchor.setTo(0.5);
        _this.scale.setTo(0.8);
        _this.health = health;
        _this.tint = tint;
        _this.checkWorldBounds = true;
        _this.outOfBoundsKill = true;
        return _this;
    }

    return Bullet;
}(Phaser.Sprite);

exports.default = Bullet;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _bullet = require('./bullet');

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = function (_Phaser$Sprite) {
    _inherits(Enemy, _Phaser$Sprite);

    function Enemy(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            asset = _ref.asset,
            frame = _ref.frame,
            health = _ref.health,
            bulletSpeed = _ref.bulletSpeed;

        _classCallCheck(this, Enemy);

        var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, game, x, y, asset, frame));

        _this.game = game;

        _this.anchor.setTo(0.5);
        _this.scale.setTo(0.8);
        _this.health = health;
        _this.maxHealth = health;
        _this.game.physics.arcade.enable(_this);

        _this.animations.add('spinning', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 30, true);
        _this.play('spinning');

        _this.bullets = _this.game.add.group();
        _this.bullets.enableBody = true;
        _this.bulletSpeed = bulletSpeed;

        _this.shotSound = _this.game.add.sound('enemyShot');

        return _this;
    }

    _createClass(Enemy, [{
        key: 'update',
        value: function update() {

            if (this.position.x < 0.04 * this.game.world.width) {
                this.position.x = 0.04 * this.game.world.width + 2;
                this.body.velocity.x *= -1;
            } else if (this.position.x > 0.96 * this.game.world.width) {
                this.position.x = 0.96 * this.game.world.width - 2;
                this.body.velocity.x *= -1;
            }

            if (this.position.y - this.height / 2 > this.game.world.height) {
                this.kill();
            }
        }
    }, {
        key: 'shoot',
        value: function shoot() {

            this.shotSound.play("", 0, 0.5);

            var bullet = this.bullets.getFirstExists(false);

            if (!bullet) {
                bullet = new _bullet2.default({
                    game: this.game,
                    x: this.x,
                    y: this.bottom,
                    health: 2,
                    asset: 'bullet',
                    tint: 0xff0000
                });
                this.bullets.add(bullet);
            } else {
                bullet.reset(this.x, this.bottom, 2);
            }

            bullet.body.velocity.y = this.bulletSpeed;
        }
    }, {
        key: 'damage',
        value: function damage(amount) {
            _get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), 'damage', this).call(this, amount);
        }
    }, {
        key: 'reset',
        value: function reset(_ref2) {
            var x = _ref2.x,
                y = _ref2.y,
                health = _ref2.health,
                bulletSpeed = _ref2.bulletSpeed,
                speed = _ref2.speed;

            _get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), 'reset', this).call(this, x, y, health);
            this.bulletSpeed = bulletSpeed;
            this.body.velocity.x = speed.x;
            this.body.velocity.y = speed.y;
        }
    }]);

    return Enemy;
}(Phaser.Sprite);

exports.default = Enemy;

},{"./bullet":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _bullet = require('./bullet');

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = function (_Phaser$Sprite) {
    _inherits(Enemy, _Phaser$Sprite);

    function Enemy(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            asset = _ref.asset,
            frame = _ref.frame,
            health = _ref.health,
            bulletSpeed = _ref.bulletSpeed,
            size = _ref.size;

        _classCallCheck(this, Enemy);

        var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, game, x, y, asset, frame));

        _this.game = game;

        _this.anchor.setTo(0.5);

        //size = scale
        _this.size = size;
        _this.scale.setTo(size);
        _this.health = health;
        _this.maxHealth = health;

        //Gravity
        _this.game.physics.arcade.enable(_this);
        _this.body.collideWorldBounds = true;
        _this.body.gravity.y = 500;
        _this.body.bounce.set(1);

        _this.animations.add('spinning', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 30, true);
        _this.play('spinning');

        _this.bullets = _this.game.add.group();
        _this.bullets.enableBody = true;
        _this.bulletSpeed = bulletSpeed;

        _this.shotSound = _this.game.add.sound('enemyShot');

        return _this;
    }

    _createClass(Enemy, [{
        key: 'update',
        value: function update() {

            if (this.position.x < 0.04 * this.game.world.width) {
                this.position.x = 0.04 * this.game.world.width + 2;
                this.body.velocity.x *= -1;
            } else if (this.position.x > 0.96 * this.game.world.width) {
                this.position.x = 0.96 * this.game.world.width - 2;
                this.body.velocity.x *= -1;
            }

            if (this.position.y - this.height / 2 > this.game.world.height) {
                this.kill();
            }
        }
    }, {
        key: 'damage',
        value: function damage(amount) {
            _get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), 'damage', this).call(this, amount);
        }
    }, {
        key: 'reset',
        value: function reset(_ref2) {
            var x = _ref2.x,
                y = _ref2.y,
                health = _ref2.health,
                bulletSpeed = _ref2.bulletSpeed,
                speed = _ref2.speed;

            _get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), 'reset', this).call(this, x, y, health);
            this.bulletSpeed = bulletSpeed;
            this.body.velocity.x = speed.x;
            this.body.velocity.y = speed.y;
        }
    }]);

    return Enemy;
}(Phaser.Sprite);

exports.default = Enemy;

},{"./bullet":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../prefabs/player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hud = function (_Phaser$Group) {
    _inherits(Hud, _Phaser$Group);

    function Hud(_ref) {
        var game = _ref.game,
            player = _ref.player;

        _classCallCheck(this, Hud);

        var _this = _possibleConstructorReturn(this, (Hud.__proto__ || Object.getPrototypeOf(Hud)).call(this, game));

        _this.game = game;
        _this.player = player;
        _this.bg = new Phaser.Image(_this.game, 0, 0, 'hudBg');
        _this.width = 800;
        _this.healthbar = new Phaser.Sprite(_this.game, 2, 2, 'healthbar');
        _this.healthbar.scale.setTo(0.995, 11);

        _this.score = 0;
        _this.scoreLabel = 'Score: ';
        _this.scoreText = new Phaser.Text(_this.game, 20, 14, _this.scoreLabel + _this.score, {
            font: '13px Verdana',
            fill: 'white',
            align: 'center'

        });

        _this.add(_this.bg);
        _this.add(_this.healthbar);
        _this.add(_this.scoreText);
        return _this;
    }

    _createClass(Hud, [{
        key: 'updateHealth',
        value: function updateHealth(player) {
            this.healthbar.crop(new Phaser.Rectangle(0, 0, this.player.health / this.player.maxHealth * this.width, 10));
            this.healthbar.updateCrop();
        }
    }, {
        key: 'updateScore',
        value: function updateScore(amount) {
            this.score += amount;
            this.scoreText.text = this.scoreLabel + this.score * 10;
        }
    }]);

    return Hud;
}(Phaser.Group);

exports.default = Hud;
;

},{"../prefabs/player":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _bullet = require('./bullet');

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Phaser$Sprite) {
    _inherits(Player, _Phaser$Sprite);

    function Player(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            asset = _ref.asset,
            frame = _ref.frame,
            health = _ref.health;

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, x, y, asset, frame));

        _this.game = game;

        _this.anchor.setTo(0.5);
        _this.scale.setTo(0.8);

        _this.health = health;
        _this.maxHealth = health;

        _this.game.physics.arcade.enable(_this);
        //gravity
        _this.body.gravity.y = 100;
        _this.body.collideWorldBounds = true;
        //

        _this.bullets = _this.game.add.group();
        _this.bullets.enableBody = true;
        _this.bulletSpeed = -500;

        _this.shotSound = _this.game.add.sound('playerShot');
        return _this;
    }

    _createClass(Player, [{
        key: 'update',
        value: function update() {

            // this.game.debug.body(this);


            // if (this.game.input.activePointer.isDown) {

            var leftKey = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
            var rightKey = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
            if (leftKey) {
                this.x -= 6;
            } else if (rightKey) {
                this.x += 6;
            }
        }
    }, {
        key: 'shoot',
        value: function shoot() {

            var bullet = this.bullets.getFirstExists(false);

            if (!bullet) {
                bullet = new _bullet2.default({
                    game: this.game,
                    x: this.x,
                    y: this.top,
                    //3
                    health: 1,
                    asset: 'bullet',
                    tint: 0x04c112
                });
                // change this number to shoot less bullets at a time
                if (this.bullets.children.length <= 5) {
                    this.shotSound.play("", 0, 0.5);
                    this.bullets.add(bullet);

                    bullet.body.velocity.y = this.bulletSpeed;
                }
            } else {
                this.shotSound.play("", 0, 0.5);
                bullet.reset(this.x, this.top, 1);
                bullet.body.velocity.y = this.bulletSpeed;
            }
        }
    }, {
        key: 'damage',
        value: function damage(amount) {
            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'damage', this).call(this, amount);
        }
    }]);

    return Player;
}(Phaser.Sprite);

exports.default = Player;

},{"./bullet":4}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
    }

    _createClass(Boot, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#000';
            this.load.image('loaderBg', 'img/loader-bg.png');
            this.load.image('loaderBar', 'img/loader-bar.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;

            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.state.start('Preload');
        }
    }]);

    return Boot;
}(Phaser.State);

exports.default = Boot;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boot = require('./boot');

Object.defineProperty(exports, 'Boot', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_boot).default;
  }
});

var _preload = require('./preload');

Object.defineProperty(exports, 'Preload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_preload).default;
  }
});

var _menu = require('./menu');

Object.defineProperty(exports, 'Menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_menu).default;
  }
});

var _play = require('./play');

Object.defineProperty(exports, 'Play', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_play).default;
  }
});

var _over = require('./over');

Object.defineProperty(exports, 'Over', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_over).default;
  }
});

var _playPang = require('./playPang');

Object.defineProperty(exports, 'PlayPang', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_playPang).default;
  }
});

var _pangOver = require('./pangOver');

Object.defineProperty(exports, 'PangOver', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pangOver).default;
  }
});

var _playPairs = require('./playPairs');

Object.defineProperty(exports, 'PlayPairs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_playPairs).default;
  }
});

var _pairsOver = require('./pairsOver');

Object.defineProperty(exports, 'PairsOver', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pairsOver).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./boot":9,"./menu":11,"./over":12,"./pairsOver":13,"./pangOver":14,"./play":15,"./playPairs":16,"./playPang":17,"./preload":18}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../extensions/textbutton');

var _textbutton2 = _interopRequireDefault(_textbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Phaser$State) {
    _inherits(Menu, _Phaser$State);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Choose a game!', {
                font: '36px Tahoma',
                fill: 'white',
                align: 'center'
            });
            this.title.anchor.setTo(0.5);
            // this.music = this.game.add.audio('menuMusic');


            this.leftBtn = new _textbutton2.default({
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

            this.leftBtn.onInputUp.add(function () {
                //this.music.stop();
                _this2.state.start('PlayPairs');
            });

            // Second Btn
            this.start = new _textbutton2.default({
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

            this.start.onInputUp.add(function () {
                //this.music.stop();
                _this2.state.start('Play');
            });
            // third Btn
            this.pangBtn = new _textbutton2.default({
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

            this.pangBtn.onInputUp.add(function () {
                //this.music.stop();
                _this2.state.start('PlayPang');
            });

            this.menuPanel = this.add.group();
            this.menuPanel.add(this.title);
            this.menuPanel.add(this.leftBtn);
            this.menuPanel.add(this.start);
            this.menuPanel.add(this.pangBtn);

            //this.music.loopFull();
        }
    }]);

    return Menu;
}(Phaser.State);

exports.default = Menu;

},{"../extensions/textbutton":2}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../extensions/textbutton');

var _textbutton2 = _interopRequireDefault(_textbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Over = function (_Phaser$State) {
    _inherits(Over, _Phaser$State);

    function Over() {
        _classCallCheck(this, Over);

        return _possibleConstructorReturn(this, (Over.__proto__ || Object.getPrototypeOf(Over)).apply(this, arguments));
    }

    _createClass(Over, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.gameOverTitle = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Game over', {
                font: '36px Tahoma',
                fill: 'white',
                align: 'center'
            });
            this.gameOverTitle.anchor.setTo(0.5);

            this.start = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY - 30,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Try again',
                style: {
                    font: '16px Verdana',
                    fill: 'white',
                    align: 'center'
                }
            });

            this.menu = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY + 30,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Menu',
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
            this.menu.setOverSound(this.btnOverSound);
            this.menu.setOutSound(this.btnOutSound);
            this.menu.setDownSound(this.btnDownSound);

            this.start.onInputDown.add(function () {
                _this2.state.start('Play');
            });

            this.menu.onInputDown.add(function () {
                _this2.state.start('Menu');
            });

            this.gameOverPanel = this.add.group();
            this.gameOverPanel.add(this.gameOverTitle);
            this.gameOverPanel.add(this.start);
            this.gameOverPanel.add(this.menu);
        }
    }]);

    return Over;
}(Phaser.State);

exports.default = Over;

},{"../extensions/textbutton":2}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../extensions/textbutton');

var _textbutton2 = _interopRequireDefault(_textbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PangOver = function (_Phaser$State) {
    _inherits(PangOver, _Phaser$State);

    function PangOver() {
        _classCallCheck(this, PangOver);

        return _possibleConstructorReturn(this, (PangOver.__proto__ || Object.getPrototypeOf(PangOver)).apply(this, arguments));
    }

    _createClass(PangOver, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.gameOverTitle = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Pang Game over', {
                font: '36px Tahoma',
                fill: 'white',
                align: 'center'
            });
            this.gameOverTitle.anchor.setTo(0.5);

            this.start = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY - 30,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Try again',
                style: {
                    font: '16px Verdana',
                    fill: 'white',
                    align: 'center'
                }
            });

            this.menu = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY + 30,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Menu',
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
            this.menu.setOverSound(this.btnOverSound);
            this.menu.setOutSound(this.btnOutSound);
            this.menu.setDownSound(this.btnDownSound);

            this.start.onInputDown.add(function () {
                _this2.state.start('PlayPang');
            });

            this.menu.onInputDown.add(function () {
                _this2.state.start('Menu');
            });

            this.gameOverPanel = this.add.group();
            this.gameOverPanel.add(this.gameOverTitle);
            this.gameOverPanel.add(this.start);
            this.gameOverPanel.add(this.menu);
        }
    }]);

    return PangOver;
}(Phaser.State);

exports.default = PangOver;

},{"../extensions/textbutton":2}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../extensions/textbutton');

var _textbutton2 = _interopRequireDefault(_textbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PangOver = function (_Phaser$State) {
    _inherits(PangOver, _Phaser$State);

    function PangOver() {
        _classCallCheck(this, PangOver);

        return _possibleConstructorReturn(this, (PangOver.__proto__ || Object.getPrototypeOf(PangOver)).apply(this, arguments));
    }

    _createClass(PangOver, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.gameOverTitle = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Pang Game over', {
                font: '36px Tahoma',
                fill: 'white',
                align: 'center'
            });
            this.gameOverTitle.anchor.setTo(0.5);

            this.start = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY - 30,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Try again',
                style: {
                    font: '16px Verdana',
                    fill: 'white',
                    align: 'center'
                }
            });

            this.menu = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY + 30,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Menu',
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
            this.menu.setOverSound(this.btnOverSound);
            this.menu.setOutSound(this.btnOutSound);
            this.menu.setDownSound(this.btnDownSound);

            this.start.onInputDown.add(function () {
                _this2.state.start('PlayPang');
            });

            this.menu.onInputDown.add(function () {
                _this2.state.start('Menu');
            });

            this.gameOverPanel = this.add.group();
            this.gameOverPanel.add(this.gameOverTitle);
            this.gameOverPanel.add(this.start);
            this.gameOverPanel.add(this.menu);
        }
    }]);

    return PangOver;
}(Phaser.State);

exports.default = PangOver;

},{"../extensions/textbutton":2}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../prefabs/player');

var _player2 = _interopRequireDefault(_player);

var _enemy = require('../prefabs/enemy');

var _enemy2 = _interopRequireDefault(_enemy);

var _hud = require('../prefabs/hud');

var _hud2 = _interopRequireDefault(_hud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Play = function (_Phaser$State) {
    _inherits(Play, _Phaser$State);

    function Play() {
        _classCallCheck(this, Play);

        return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));
    }

    _createClass(Play, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            //farback = background
            this.farback = this.add.tileSprite(0, 0, 800, 2380, 'farback');
            this.game.time.slowMotion = 0;

            this.enemies = this.add.group();
            this.enemies.enableBody = true;

            this.player = new _player2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: 0.92 * this.game.world.height,
                health: 100,
                asset: 'smallfighter',
                frame: 1
            });
            this.game.stage.addChild(this.player);

            this.hud = new _hud2.default({
                game: this.game,
                player: this.player
            });

            this.game.input.onDown.add(function () {
                _this2.game.time.slowMotion = 0;
            });

            this.game.input.onUp.add(function () {
                _this2.game.time.slowMotion = 0;
            });

            this.enemyTime = 0;
            this.enemyInterval = 1.5;
            this.enemyShootTime = 0;
            this.enemyShootInterval = 1;
            this.playerShootTime = 0;
            this.playerShootInterval = 0.16;

            this.game.time.events.loop(Phaser.Timer.SECOND * 10, function () {
                if (_this2.enemyInterval > 0.9) {
                    _this2.enemyInterval -= 0.1;
                }
            });

            this.overlayBitmap = this.add.bitmapData(this.game.width, this.game.height);
            this.overlayBitmap.ctx.fillStyle = '#000';
            this.overlayBitmap.ctx.fillRect(0, 0, this.game.width, this.game.height);

            this.overlay = this.add.sprite(0, 0, this.overlayBitmap);
            this.overlay.visible = false;
            this.overlay.alpha = 0.75;

            // this.music = this.game.add.audio('playMusic');
            this.bulletHitSound = this.add.sound('bulletHit');
            this.enemyExplosionSound = this.add.sound('enemyExplosion');
            this.playerExplosionSound = this.add.sound('playerExplosion');
            this.gameOverSound = this.add.sound('gameOver');

            //this.music.loopFull();
        }
    }, {
        key: 'update',
        value: function update() {
            var _this3 = this;

            this.enemyTime += this.game.time.physicsElapsed;
            this.enemyShootTime += this.game.time.physicsElapsed;
            this.playerShootTime += this.game.time.physicsElapsed;

            if (this.enemyTime > this.enemyInterval) {
                this.enemyTime = 0;

                this.createEnemy({
                    game: this.game,
                    x: this.game.rnd.integerInRange(6, 76) * 10,
                    y: 0,
                    speed: {
                        x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                        y: this.game.rnd.integerInRange(5, 10) * 10
                    },
                    health: 9,
                    bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                    asset: 'alien'
                });
            }

            if (this.enemyShootTime > this.enemyShootInterval) {
                this.enemyShootTime = 0;
                this.enemies.forEachAlive(function (enemy) {
                    return enemy.shoot();
                });
                if (!this.player.alive) {
                    this.game.world.bringToTop(this.overlay);
                }
            }

            if (this.playerShootTime > this.playerShootInterval) {
                this.playerShootTime = 0;
                if (this.player.alive) {
                    this.player.shoot();
                }
            }

            this.game.physics.arcade.overlap(this.player.bullets, this.enemies, this.hitEnemy, null, this);

            this.game.physics.arcade.overlap(this.player, this.enemies, this.crashEnemy, null, this);

            this.enemies.forEach(function (enemy) {
                return _this3.game.physics.arcade.overlap(_this3.player, enemy.bullets, _this3.hitPlayer, null, _this3);
            });

            this.farback.tilePosition.y += 3;
        }
    }, {
        key: 'createEnemy',
        value: function createEnemy(data) {

            var enemy = this.enemies.getFirstExists(false);

            if (!enemy) {
                enemy = new _enemy2.default(data);
                this.enemies.add(enemy);
            }
            enemy.reset(data);
        }
    }, {
        key: 'hitEffect',
        value: function hitEffect(obj, color) {
            var _this4 = this;

            var tween = this.game.add.tween(obj);
            var emitter = this.game.add.emitter();
            var emitterPhysicsTime = 0;
            var particleSpeed = 100;
            var maxParticles = 10;

            tween.to({ tint: 0xff0000 }, 100);
            tween.onComplete.add(function () {
                obj.tint = 0xffffff;
            });
            tween.start();

            emitter.x = obj.x;
            emitter.y = obj.y;
            emitter.gravity = 0;
            emitter.makeParticles('particle');

            if (obj.health <= 0) {
                particleSpeed = 200;
                maxParticles = 40;
                color = 0xff0000;
            }

            emitter.minParticleSpeed.setTo(-particleSpeed, -particleSpeed);
            emitter.maxParticleSpeed.setTo(particleSpeed, particleSpeed);
            emitter.start(true, 500, null, maxParticles);
            emitter.update = function () {
                emitterPhysicsTime += _this4.game.time.physicsElapsed;
                if (emitterPhysicsTime >= 0.6) {
                    emitterPhysicsTime = 0;
                    emitter.destroy();
                }
            };
            emitter.forEach(function (particle) {
                return particle.tint = color;
            });
            if (!this.player.alive) {
                this.game.world.bringToTop(this.overlay);
            }
        }
    }, {
        key: 'hitEnemy',
        value: function hitEnemy(bullet, enemy) {
            this.bulletHitSound.play("", 0, 0.5);
            enemy.damage(bullet.health);
            this.hitEffect(enemy, bullet.tint);
            if (!enemy.alive) {
                this.enemyExplosionSound.play("", 0, 0.5);
                this.hud.updateScore(enemy.maxHealth);
            }
            bullet.kill();
        }
    }, {
        key: 'hitPlayer',
        value: function hitPlayer(player, bullet) {
            this.bulletHitSound.play("", 0, 0.5);
            player.damage(bullet.health);
            this.hud.updateHealth();
            this.hitEffect(player, bullet.tint);
            if (!player.alive) {
                this.playerExplosionSound.play();
                this.gameOver();
            }
            bullet.kill();
        }
    }, {
        key: 'crashEnemy',
        value: function crashEnemy(player, enemy) {
            enemy.damage(enemy.health);
            player.damage(enemy.health);
            this.hitEffect(player);
            this.hitEffect(enemy);
            if (!enemy.alive) {
                this.enemyExplosionSound.play("", 0, 0.5);
                this.hud.updateScore(enemy.maxHealth);
            }
            this.hud.updateHealth();
            if (!player.alive) {
                this.playerExplosionSound.play();
                this.gameOver();
            }
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
            var _this5 = this;

            this.game.time.slowMotion = 3;
            this.overlay.visible = true;
            this.game.world.bringToTop(this.overlay);
            var timer = this.game.time.create(this.game, true);
            timer.add(3000, function () {
                _this5.music.stop();
                _this5.gameOverSound.play();
                _this5.game.state.start('Over');
            });
            timer.start();
        }
    }]);

    return Play;
}(Phaser.State);

exports.default = Play;

},{"../prefabs/enemy":5,"../prefabs/hud":7,"../prefabs/player":8}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cardbutton = require('../extensions/cardbutton');

var _cardbutton2 = _interopRequireDefault(_cardbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayPairs = function (_Phaser$State) {
    _inherits(PlayPairs, _Phaser$State);

    function PlayPairs() {
        _classCallCheck(this, PlayPairs);

        return _possibleConstructorReturn(this, (PlayPairs.__proto__ || Object.getPrototypeOf(PlayPairs)).apply(this, arguments));
    }

    _createClass(PlayPairs, [{
        key: 'create',
        value: function create() {

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
            this.carta1 = new _cardbutton2.default({
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
            this.timeText.anchor.set(0, 1);

            this.game.time.events.loop(Phaser.Timer.SECOND, this.decreaseTime, this);

            this.placeCards();
        }
    }, {
        key: 'update',
        value: function update() {
            this.loadMenu();
        }

        // Custom functions

    }, {
        key: 'loadMenu',
        value: function loadMenu() {
            var escKey = this.game.input.keyboard.isDown(Phaser.Keyboard.ESC);
            if (escKey) {
                this.game.state.start('Menu');
            }
        }
    }, {
        key: 'decreaseTime',
        value: function decreaseTime() {
            this.timeLeft--;
            this.timeText.text = "Time left: " + this.timeLeft;
            if (this.timeLeft == 0) {
                //Change this to pairsOver
                this.game.state.start('PangOver');
            }
        }
    }, {
        key: 'placeCards',
        value: function placeCards() {

            var tilesLeft = this.numRows * this.numCols;
            var leftSpace = (this.game.width - this.numCols * this.tileSize - (this.numCols - 1) * this.tileSpacing) / 2;
            var topSpace = (this.game.height - this.numRows * this.tileSize - (this.numRows - 1) * this.tileSpacing) / 2;

            //-- Populate array with pairs of numbers [1,1,2,2,3,3,4,4,...]
            for (var i = 0; i < tilesLeft; i++) {
                this.cardsArray.push(Math.floor(i / 2));
            }

            //-- Randomize / mix the array
            for (var _i = 0; _i < tilesLeft; _i++) {
                var from = this.game.rnd.between(0, this.cardsArray.length - 1);
                var to = this.game.rnd.between(0, this.cardsArray.length - 1);
                var temp = this.cardsArray[from];

                this.cardsArray[from] = this.cardsArray[to];
                this.cardsArray[to] = temp;
            }
            //-- Deal the cards
            for (var _i2 = 0; _i2 < this.numCols; _i2++) {
                for (var j = 0; j < this.numRows; j++) {

                    var card = new _cardbutton2.default({
                        game: this.game,
                        x: leftSpace + _i2 * (this.tileSize + this.tileSpacing),
                        y: topSpace + _i2 * (this.tileSize + this.tileSpacing),
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
    }]);

    return PlayPairs;
}(Phaser.State);

exports.default = PlayPairs;

},{"../extensions/cardbutton":1}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../prefabs/player');

var _player2 = _interopRequireDefault(_player);

var _enemyPang = require('../prefabs/enemyPang');

var _enemyPang2 = _interopRequireDefault(_enemyPang);

var _hud = require('../prefabs/hud');

var _hud2 = _interopRequireDefault(_hud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayPang = function (_Phaser$State) {
    _inherits(PlayPang, _Phaser$State);

    function PlayPang() {
        _classCallCheck(this, PlayPang);

        return _possibleConstructorReturn(this, (PlayPang.__proto__ || Object.getPrototypeOf(PlayPang)).apply(this, arguments));
    }

    _createClass(PlayPang, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.bg = this.add.tileSprite(0, 0, 2000, 2380, 'pangBg');
            this.game.time.slowMotion = 0;

            // ------- PLAYER
            this.player = new _player2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: 0.92 * this.game.world.height,
                health: 10,
                asset: 'smallfighter',
                frame: 2
            });
            this.game.stage.addChild(this.player);
            this.playerShootTime = 0;
            this.playerShootInterval = 0.16;

            // ------- ENEMY: these ones are created every update tick
            this.enemies = this.add.group();
            this.enemies.enableBody = true;
            this.enemyTime = 0;
            //1.5
            this.enemyInterval = 2.5;
            this.enemyShootTime = 0;
            this.enemyShootInterval = 1;
            // ------- !ENEMY

            // ------- smallerENEMY: this ones are created every update tick
            this.smallerEnemies = this.add.group();
            this.smallerEnemies.enableBody = true;
            // ------- !smallerENEMY


            // ------- ENEMY CLIENT: randomly chosen
            this.enemiesClient = this.add.group();
            this.enemiesClient.enableBody = true;
            //1.5
            this.enemyClientInterval = 2.0;
            this.enemyClientShootTime = 0;
            this.enemyClientShootInterval = 1;
            //initialize first client
            this.createEnemyClient({
                game: this.game,
                x: this.game.rnd.integerInRange(6, 76) * 10,
                //0
                y: 0,
                speed: {
                    x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                    y: this.game.rnd.integerInRange(5, 10) * 10
                },
                //9
                health: 90,
                bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                asset: 'aliens',
                size: 0.8
            });
            // ------- !ENEMY CLIENT: randomly chosen

            this.game.time.events.loop(Phaser.Timer.SECOND * 10, function () {
                if (_this2.enemyInterval > 0.2) {
                    _this2.enemyInterval -= 0.1;
                }
            });

            this.overlayBitmap = this.add.bitmapData(this.game.width, this.game.height);
            this.overlayBitmap.ctx.fillStyle = '#000';
            this.overlayBitmap.ctx.fillRect(0, 0, this.game.width, this.game.height);

            this.overlay = this.add.sprite(0, 0, this.overlayBitmap);
            this.overlay.visible = false;
            this.overlay.alpha = 0.75;

            this.hud = new _hud2.default({
                game: this.game,
                player: this.player
            });

            // ------- SOUNDS
            // this.music = this.game.add.audio('playMusic');
            this.bulletHitSound = this.add.sound('bulletHit');
            this.enemyExplosionSound = this.add.sound('enemyExplosion');
            this.playerExplosionSound = this.add.sound('playerExplosion');
            this.gameOverSound = this.add.sound('gameOver');

            //this.music.loopFull();


            //Defaults
            //this.enemyTime = 0;
            //this.enemyInterval = 1.5;
            //this.enemyShootTime = 0;
            //this.enemyShootInterval = 1;
            //this.playerShootTime = 0;
            //this.playerShootInterval = 0.16;
        }
    }, {
        key: 'update',
        value: function update() {
            this.enemyTime += this.game.time.physicsElapsed;
            this.enemyShootTime += this.game.time.physicsElapsed;
            this.playerShootTime += this.game.time.physicsElapsed;

            if (this.enemyTime > this.enemyInterval) {
                this.enemyTime = 0;

                this.createEnemy({
                    game: this.game,
                    x: this.game.rnd.integerInRange(6, 76) * 10,
                    //0
                    y: 0,
                    speed: {
                        x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                        y: this.game.rnd.integerInRange(5, 10) * 10
                    },
                    //9
                    health: 9,
                    bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                    asset: 'alien',
                    size: 2.5

                });
            }

            if (this.enemyShootTime > this.enemyShootInterval) {
                this.enemyShootTime = 0;
                if (!this.player.alive) {
                    this.game.world.bringToTop(this.overlay);
                    console.log("Has muerto");
                }
            }

            if (this.playerShootTime > this.playerShootInterval) {
                this.playerShootTime = 0;
                if (this.player.alive) {
                    var shootKey = this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR);
                    if (shootKey) {
                        this.player.shoot();
                    }
                }
            }

            this.game.physics.arcade.overlap(this.player.bullets, this.enemies, this.hitEnemy, null, this);

            this.game.physics.arcade.overlap(this.player.bullets, this.smallerEnemies, this.hitEnemy, null, this);

            this.game.physics.arcade.overlap(this.player, [this.enemies, this.smallerEnemies], this.crashEnemy, null, this);

            this.loadMenu();
            // this.bg.tilePosition.x += 3;
        }
    }, {
        key: 'createEnemy',
        value: function createEnemy(data) {

            var enemy = this.enemies.getFirstExists(false);
            var totalEnemies = this.enemies.children.length;
            console.log(totalEnemies);

            if (!enemy) {
                enemy = new _enemyPang2.default(data);
                if (totalEnemies < 5) {
                    this.enemies.add(enemy);
                }
            }
            enemy.reset(data);
        }
    }, {
        key: 'createSmallerEnemy',
        value: function createSmallerEnemy(data) {

            var enemy = this.smallerEnemies.getFirstExists(false);
            var totalEnemies = this.smallerEnemies.children.length;

            if (!enemy) {
                enemy = new _enemyPang2.default(data);
                if (totalEnemies < 24) {
                    this.smallerEnemies.add(enemy);
                }
            }
            enemy.reset(data);
        }
    }, {
        key: 'createEnemyClient',
        value: function createEnemyClient(data) {

            var enemy = this.enemiesClient.getFirstExists(false);
            var totalEnemies = this.enemiesClient.children.length;
            console.log(totalEnemies);

            if (!enemy) {
                enemy = new _enemyPang2.default(data);
                if (totalEnemies <= 1) {
                    this.enemiesClient.add(enemy);
                }
            }
            enemy.reset(data);
        }
    }, {
        key: 'hitEffect',
        value: function hitEffect(obj, color) {
            var _this3 = this;

            var tween = this.game.add.tween(obj);
            var emitter = this.game.add.emitter();
            var emitterPhysicsTime = 0;
            var particleSpeed = 100;
            var maxParticles = 10;

            tween.to({ tint: 0xff0000 }, 100);
            tween.onComplete.add(function () {
                obj.tint = 0xffffff;
            });
            tween.start();

            emitter.x = obj.x;
            emitter.y = obj.y;
            emitter.gravity = 0;
            emitter.makeParticles('particle');

            if (obj.health <= 0) {
                particleSpeed = 200;
                maxParticles = 40;
                color = 0xff0000;
            }

            emitter.minParticleSpeed.setTo(-particleSpeed, -particleSpeed);
            emitter.maxParticleSpeed.setTo(particleSpeed, particleSpeed);
            emitter.start(true, 500, null, maxParticles);
            emitter.update = function () {
                emitterPhysicsTime += _this3.game.time.physicsElapsed;
                if (emitterPhysicsTime >= 0.6) {
                    emitterPhysicsTime = 0;
                    emitter.destroy();
                }
            };
            emitter.forEach(function (particle) {
                return particle.tint = color;
            });
            if (!this.player.alive) {
                this.game.world.bringToTop(this.overlay);
            }
        }
    }, {
        key: 'hitEnemy',
        value: function hitEnemy(bullet, enemy) {

            this.bulletHitSound.play("", 0, 0.5);
            enemy.damage(bullet.health);
            this.hitEffect(enemy, bullet.tint);

            if (!enemy.alive) {
                this.enemyExplosionSound.play("", 0, 0.5);
                this.hud.updateScore(enemy.maxHealth);
                switch (enemy.size) {
                    //Large -> Medium
                    case 2.5:
                        this.createSmallerEnemy({
                            game: this.game,
                            x: enemy.x,
                            y: enemy.y,
                            speed: {
                                x: 25 * 10,
                                y: -30 * 10
                            },
                            health: 10,
                            bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                            asset: 'alien',
                            size: 1.5
                        });
                        this.createSmallerEnemy({
                            game: this.game,
                            x: enemy.x,

                            y: enemy.y,
                            speed: {
                                x: -25 * 10,
                                y: -30 * 10
                            },

                            health: 10,
                            bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                            asset: 'alien',
                            size: 1.5
                        });
                        break;

                }
                bullet.kill();
            }
        }
    }, {
        key: 'crashEnemy',
        value: function crashEnemy(player, enemy) {
            //enemy.damage(enemy.health);
            enemy.damage(3);
            //player.damage(enemy.health);
            player.damage(1);
            this.hitEffect(player);
            this.hitEffect(enemy);
            if (!enemy.alive) {
                this.enemyExplosionSound.play("", 0, 0.5);
                this.hud.updateScore(enemy.maxHealth);
            }
            this.hud.updateHealth();
            if (!player.alive) {
                this.playerExplosionSound.play();
                this.gameOver();
            }
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
            var _this4 = this;

            this.game.time.slowMotion = 3;
            this.overlay.visible = true;
            this.game.world.bringToTop(this.overlay);
            var timer = this.game.time.create(this.game, true);
            timer.add(3000, function () {
                // this.music.stop();
                _this4.gameOverSound.play();
                _this4.game.state.start('PangOver');
            });
            timer.start();
        }
    }, {
        key: 'loadMenu',
        value: function loadMenu() {
            var escKey = this.game.input.keyboard.isDown(Phaser.Keyboard.ESC);
            if (escKey) {
                this.player.kill();
                this.game.state.start('Menu');
            }
        }
    }]);

    return PlayPang;
}(Phaser.State);

exports.default = PlayPang;

},{"../prefabs/enemyPang":6,"../prefabs/hud":7,"../prefabs/player":8}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
    }

    _createClass(Preload, [{
        key: 'preload',
        value: function preload() {

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
            this.load.spritesheet('tiles', 'img/spritesheet/tiles.png', 80, 80, 11);
            //game 3
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('Menu');
        }
    }]);

    return Preload;
}(Phaser.State);

exports.default = Preload;

},{}]},{},[3])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZXh0ZW5zaW9ucy9jYXJkYnV0dG9uLmpzIiwic3JjL2pzL2V4dGVuc2lvbnMvdGV4dGJ1dHRvbi5qcyIsInNyYy9qcy9nYW1lLmpzIiwic3JjL2pzL3ByZWZhYnMvYnVsbGV0LmpzIiwic3JjL2pzL3ByZWZhYnMvZW5lbXkuanMiLCJzcmMvanMvcHJlZmFicy9lbmVteVBhbmcuanMiLCJzcmMvanMvcHJlZmFicy9odWQuanMiLCJzcmMvanMvcHJlZmFicy9wbGF5ZXIuanMiLCJzcmMvanMvc3RhdGVzL2Jvb3QuanMiLCJzcmMvanMvc3RhdGVzL2luZGV4LmpzIiwic3JjL2pzL3N0YXRlcy9tZW51LmpzIiwic3JjL2pzL3N0YXRlcy9vdmVyLmpzIiwic3JjL2pzL3N0YXRlcy9wYWlyc092ZXIuanMiLCJzcmMvanMvc3RhdGVzL3BhbmdPdmVyLmpzIiwic3JjL2pzL3N0YXRlcy9wbGF5LmpzIiwic3JjL2pzL3N0YXRlcy9wbGF5UGFpcnMuanMiLCJzcmMvanMvc3RhdGVzL3BsYXlQYW5nLmpzIiwic3JjL2pzL3N0YXRlcy9wcmVsb2FkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0lDQXFCLFU7OztBQUVqQiw4QkFBNEc7QUFBQSxZQUE5RixJQUE4RixRQUE5RixJQUE4RjtBQUFBLFlBQXhGLENBQXdGLFFBQXhGLENBQXdGO0FBQUEsWUFBckYsQ0FBcUYsUUFBckYsQ0FBcUY7QUFBQSxZQUFsRixLQUFrRixRQUFsRixLQUFrRjtBQUFBLFlBQTNFLFFBQTJFLFFBQTNFLFFBQTJFO0FBQUEsWUFBakUsZUFBaUUsUUFBakUsZUFBaUU7QUFBQSxZQUFoRCxTQUFnRCxRQUFoRCxTQUFnRDtBQUFBLFlBQXJDLFFBQXFDLFFBQXJDLFFBQXFDO0FBQUEsWUFBM0IsU0FBMkIsUUFBM0IsU0FBMkI7QUFBQSxZQUFoQixPQUFnQixRQUFoQixPQUFnQjtB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Q0FBbkM7O0FBRUEsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsRUFBNEIsQ0FBQywyQkFBRCxDQUE1QjtBQUNBOzs7QUFHQTtBQUNJO0FBQ0osaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEIsZ0JBQTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFLLElBQUwsQ0FBVSxXQUFWLENBQXNCLE9BQXRCLEVBQStCLDJCQUEvQixFQUEyRCxFQUEzRCxFQUE4RCxFQUE5RCxFQUFpRSxFQUFqRTtBQUNBO0FBQ0g7OztpQ0FFUTtBQUNMLGlCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCO0FBQ0g7Ozs7RUFsRGdDLE9BQU8sSzs7a0JBQXZCLE8iLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZEJ1dHRvbiBleHRlbmRzIFBoYXNlci5CdXR0b24ge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgY2FsbGJhY2ssIGNhbGxiYWNrQ29udGV4dCwgb3ZlckZyYW1lLCBvdXRGcmFtZSwgZG93bkZyYW1lLCB1cEZyYW1lLHZhbHVlfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgY2FsbGJhY2ssIGNhbGxiYWNrQ29udGV4dCwgb3ZlckZyYW1lLCBvdXRGcmFtZSwgZG93bkZyYW1lLCB1cEZyYW1lKTtcblxuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cbi8vIGxldCBjYXJkID0gdGhpcy5nYW1lLmFkZC5idXR0b24obGVmdFNwYWNlICsgaSksIHRvcFNwYWNlICsgaSwgXCJ0aWxlc1wiLCBmdW5jdGlvbigpe2NvbnNvbGUubG9nKFwiYXNcIil9LCB0aGlzKTtcbmxldCBjYXJkID0gbmV3IENhcmRCdXR0b24oe1xuICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICB4OiBsZWZ0U3BhY2UgKyBpICogKHRoaXMudGlsZVNpemUgKyB0aGlzLnRpbGVTcGFjaW5nKSxcbiAgICB5OiB0b3BTcGFjZSArIGkgKiAodGhpcy50aWxlU2l6ZSArIHRoaXMudGlsZVNwYWNpbmcpLFxuICAgIGFzc2V0OiAndGlsZXMnLFxuICAgIGRvd25GcmFtZTogMTAsXG4gICAgb3V0RnJhbWU6IDEwLFxuICAgIG92ZXJGcmFtZTogMTAsXG4gICAgdXBGcmFtZTogMTAsXG4gICAgdmFsdWU6IFwib2pldGVcIlxufSk7XG5jYXJkLmZyYW1lID0gMjtcbnRoaXMubWVudVBhbmVsLmFkZChjYXJkKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRCdXR0b24gZXh0ZW5kcyBQaGFzZXIuQnV0dG9uIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSwgbGFiZWwsIHN0eWxlIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSk7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgMCwgMCwgdGhpcy5sYWJlbCwgdGhpcy5zdHlsZSk7XG4gICAgICAgIHRoaXMudGV4dC5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dCk7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBzdGF0ZXMgZnJvbSAnLi9zdGF0ZXMnO1xuY29uc3QgR0FNRSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDEwMDAsIFBoYXNlci5BVVRPKTtcblxuT2JqZWN0LmtleXMoc3RhdGVzKS5mb3JFYWNoKHN0YXRlID0+IEdBTUUuc3RhdGUuYWRkKHN0YXRlLCBzdGF0ZXNbc3RhdGVdKSk7XG5cbkdBTUUuc3RhdGUuc3RhcnQoJ0Jvb3QnKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgaGVhbHRoLCB0aW50ID0gMHhmZjAwMDAgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCk7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy50aW50ID0gdGludDtcbiAgICAgICAgdGhpcy5jaGVja1dvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vdXRPZkJvdW5kc0tpbGwgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9idWxsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUsIGhlYWx0aCwgYnVsbGV0U3BlZWQgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zLmFkZCgnc3Bpbm5pbmcnLCBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0XSwgMzAsIHRydWUpO1xuICAgICAgICB0aGlzLnBsYXkoJ3NwaW5uaW5nJyk7XG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmJ1bGxldHMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQoJ2VuZW15U2hvdCcpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwLjA0ICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwLjA0ICogdGhpcy5nYW1lLndvcmxkLndpZHRoICsgMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+IDAuOTYgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDAuOTYgKiB0aGlzLmdhbWUud29ybGQud2lkdGggLSAyO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggKj0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyID4gdGhpcy5nYW1lLndvcmxkLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5raWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuXG4gICAgICAgIGlmICghYnVsbGV0KSB7XG4gICAgICAgICAgICBidWxsZXQgPSBuZXcgQnVsbGV0KHtcbiAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuYm90dG9tLFxuICAgICAgICAgICAgICAgIGhlYWx0aDogMixcbiAgICAgICAgICAgICAgICBhc3NldDogJ2J1bGxldCcsXG4gICAgICAgICAgICAgICAgdGludDogMHhmZjAwMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5idWxsZXRzLmFkZChidWxsZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnVsbGV0LnJlc2V0KHRoaXMueCwgdGhpcy5ib3R0b20sIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IHRoaXMuYnVsbGV0U3BlZWQ7XG4gICAgfVxuXG4gICAgZGFtYWdlKGFtb3VudCkge1xuICAgICAgICBzdXBlci5kYW1hZ2UoYW1vdW50KTtcbiAgICB9XG5cbiAgICByZXNldCh7IHgsIHksIGhlYWx0aCwgYnVsbGV0U3BlZWQsIHNwZWVkIH0pIHtcbiAgICAgICAgc3VwZXIucmVzZXQoeCwgeSwgaGVhbHRoKTtcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IGJ1bGxldFNwZWVkO1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHNwZWVkLng7XG4gICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gc3BlZWQueTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQnVsbGV0IGZyb20gJy4vYnVsbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGgsIGJ1bGxldFNwZWVkLHNpemUgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICAvL3NpemUgPSBzY2FsZVxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKHNpemUpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG5cblxuICAgICAgICAvL0dyYXZpdHlcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5LnkgPSA1MDA7XG4gICAgICAgIHRoaXMuYm9keS5ib3VuY2Uuc2V0KDEpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3NwaW5uaW5nJywgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNF0sIDMwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5KCdzcGlubmluZycpO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gYnVsbGV0U3BlZWQ7XG5cbiAgICAgICAgdGhpcy5zaG90U291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKCdlbmVteVNob3QnKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDI7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCAqPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPiAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMiA+IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG4gICAgcmVzZXQoeyB4LCB5LCBoZWFsdGgsIGJ1bGxldFNwZWVkLCBzcGVlZCB9KSB7XG4gICAgICAgIHN1cGVyLnJlc2V0KHgsIHksIGhlYWx0aCk7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSBzcGVlZC54O1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHNwZWVkLnk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wcmVmYWJzL3BsYXllcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWQgZXh0ZW5kcyBQaGFzZXIuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgcGxheWVyIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmJnID0gbmV3IFBoYXNlci5JbWFnZSh0aGlzLmdhbWUsIDAsIDAsICdodWRCZycpO1xuICAgICAgICB0aGlzLndpZHRoID0gODAwO1xuICAgICAgICB0aGlzLmhlYWx0aGJhciA9IG5ldyBQaGFzZXIuU3ByaXRlKHRoaXMuZ2FtZSwgMiwgMiwgJ2hlYWx0aGJhcicpO1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5zY2FsZS5zZXRUbygwLjk5NSwgMTEpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwgPSAnU2NvcmU6ICc7XG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgMjAsIDE0LCB0aGlzLnNjb3JlTGFiZWwgKyB0aGlzLnNjb3JlLCB7XG4gICAgICAgICAgICBmb250OiAnMTNweCBWZXJkYW5hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJnKTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhiYXIpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnNjb3JlVGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhbHRoKHBsYXllcikge1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5jcm9wKG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIDAsICh0aGlzLnBsYXllci5oZWFsdGggLyB0aGlzLnBsYXllci5tYXhIZWFsdGgpICogdGhpcy53aWR0aCwgMTApKTtcbiAgICAgICAgdGhpcy5oZWFsdGhiYXIudXBkYXRlQ3JvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKGFtb3VudCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IGFtb3VudDtcbiAgICAgICAgdGhpcy5zY29yZVRleHQudGV4dCA9IHRoaXMuc2NvcmVMYWJlbCArICh0aGlzLnNjb3JlICogMTApO1xuICAgIH1cblxufTtcbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9idWxsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGggfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IGhlYWx0aDtcblxuXG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgLy9ncmF2aXR5XG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5LnkgPSAxMDA7XG4gICAgICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICAvL1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gLTUwMDtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQoJ3BsYXllclNob3QnKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgLy8gdGhpcy5nYW1lLmRlYnVnLmJvZHkodGhpcyk7XG5cblxuXG4gICAgICAgIC8vIGlmICh0aGlzLmdhbWUuaW5wdXQuYWN0aXZlUG9pbnRlci5pc0Rvd24pIHtcblxuICAgICAgICAgICAgbGV0IGxlZnRLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5MRUZUKTtcbiAgICAgICAgICAgIGxldCByaWdodEtleSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlJJR0hUKTtcbiAgICAgICAgICAgIGlmKGxlZnRLZXkpe1xuICAgICAgICAgICAgICAgIHRoaXMueCAtPSA2O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJpZ2h0S2V5KXtcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gNjtcblxuICAgICAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICAgICAgbGV0IGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFidWxsZXQpIHtcbiAgICAgICAgICAgIGJ1bGxldCA9IG5ldyBCdWxsZXQoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy50b3AsXG4gICAgICAgICAgICAgICAgLy8zXG4gICAgICAgICAgICAgICAgaGVhbHRoOiAxLFxuICAgICAgICAgICAgICAgIGFzc2V0OiAnYnVsbGV0JyxcbiAgICAgICAgICAgICAgICB0aW50OiAweDA0YzExMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjaGFuZ2UgdGhpcyBudW1iZXIgdG8gc2hvb3QgbGVzcyBidWxsZXRzIGF0IGEgdGltZVxuICAgICAgICAgICAgaWYodGhpcy5idWxsZXRzLmNoaWxkcmVuLmxlbmd0aCA8PSA1KXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3RTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5hZGQoYnVsbGV0KTtcblxuICAgICAgICAgICAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJ1bGxldFNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG90U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLngsIHRoaXMudG9wLCAxKTtcbiAgICAgICAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJ1bGxldFNwZWVkO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnbG9hZGVyQmcnLCAnaW1nL2xvYWRlci1iZy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdsb2FkZXJCYXInLCAnaW1nL2xvYWRlci1iYXIucG5nJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG5cbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBCb290fSBmcm9tICcuL2Jvb3QnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFByZWxvYWR9IGZyb20gJy4vcHJlbG9hZCc7XG5leHBvcnQge2RlZmF1bHQgYXMgTWVudX0gZnJvbSAnLi9tZW51Jztcbi8vZ2FtZTFcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQbGF5fSBmcm9tICcuL3BsYXknO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE92ZXJ9IGZyb20gJy4vb3Zlcic7XG5cbi8vcGFuZ0J0blxuZXhwb3J0IHtkZWZhdWx0IGFzIFBsYXlQYW5nfSBmcm9tICcuL3BsYXlQYW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYW5nT3Zlcn0gZnJvbSAnLi9wYW5nT3Zlcic7XG5cbi8vZ2FtZTNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQbGF5UGFpcnN9IGZyb20gJy4vcGxheVBhaXJzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYWlyc092ZXJ9IGZyb20gJy4vcGFpcnNPdmVyJztcbiIsImltcG9ydCBUZXh0QnV0dG9uIGZyb20gJy4uL2V4dGVuc2lvbnMvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTIwMCwgJ0Nob29zZSBhIGdhbWUhJywge1xuICAgICAgICAgICAgZm9udDogJzM2cHggVGFob21hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGl0bGUuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdtZW51TXVzaWMnKTtcblxuXG4gICAgICAgIHRoaXMubGVmdEJ0biA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYIC0gMjAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ0xlZnRCdG4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLmxlZnRCdG4uc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5sZWZ0QnRuLnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLmxlZnRCdG4uc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLmxlZnRCdG4ub25JbnB1dFVwLmFkZCgoKT0+e1xuICAgICAgICAgICAgLy90aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXlQYWlycycpO1xuXG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICAvLyBTZWNvbmQgQnRuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdTdGFydCcsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dFVwLmFkZCgoKT0+e1xuICAgICAgICAgICAgLy90aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXknKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcmQgQnRuXG4gICAgICAgIHRoaXMucGFuZ0J0biA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYICsgMjAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ1BhbmctbGlrZSEnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLnBhbmdCdG4uc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5wYW5nQnRuLnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnBhbmdCdG4uc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLnBhbmdCdG4ub25JbnB1dFVwLmFkZCgoKT0+e1xuICAgICAgICAgICAgLy90aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXlQYW5nJyk7XG5cblxuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgdGhpcy5tZW51UGFuZWwgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbC5hZGQodGhpcy50aXRsZSk7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLmxlZnRCdG4pO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbC5hZGQodGhpcy5zdGFydCk7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLnBhbmdCdG4pO1xuXG4gICAgICAgIC8vdGhpcy5tdXNpYy5sb29wRnVsbCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUZXh0QnV0dG9uIGZyb20gJy4uL2V4dGVuc2lvbnMvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdHYW1lIG92ZXInLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdUcnkgYWdhaW4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZKzMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vZXh0ZW5zaW9ucy90ZXh0YnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZ092ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdQYW5nIEdhbWUgb3ZlcicsIHtcbiAgICAgICAgICAgIGZvbnQ6ICczNnB4IFRhaG9tYScsXG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ1RyeSBhZ2FpbicsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkrMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ01lbnUnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLnN0YXJ0LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXlQYW5nJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vZXh0ZW5zaW9ucy90ZXh0YnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZ092ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdQYW5nIEdhbWUgb3ZlcicsIHtcbiAgICAgICAgICAgIGZvbnQ6ICczNnB4IFRhaG9tYScsXG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ1RyeSBhZ2FpbicsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkrMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ01lbnUnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLnN0YXJ0LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXlQYW5nJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wcmVmYWJzL3BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vcHJlZmFicy9lbmVteSc7XG5pbXBvcnQgSFVEIGZyb20gJy4uL3ByZWZhYnMvaHVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vZmFyYmFjayA9IGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5mYXJiYWNrID0gdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLCA4MDAsIDIzODAsICdmYXJiYWNrJyk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAwO1xuXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiAwLjkyICogdGhpcy5nYW1lLndvcmxkLmhlaWdodCxcbiAgICAgICAgICAgIGhlYWx0aDogMTAwLFxuICAgICAgICAgICAgYXNzZXQ6ICdzbWFsbGZpZ2h0ZXInLFxuICAgICAgICAgICAgZnJhbWU6IDFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBsYXllcik7XG5cbiAgICAgICAgdGhpcy5odWQgPSBuZXcgSFVEKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHBsYXllcjogdGhpcy5wbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vblVwLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbmVteVRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSAxLjU7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdEludGVydmFsID0gMC4xNjtcblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05EICogMTAsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlJbnRlcnZhbCA+IDAuOSApe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCAtPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcCA9IHRoaXMuYWRkLmJpdG1hcERhdGEodGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwLmN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgdGhpcy5vdmVybGF5Qml0bWFwKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFscGhhID0gMC43NTtcblxuICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdwbGF5TXVzaWMnKTtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdidWxsZXRIaXQnKTtcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2VuZW15RXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgncGxheWVyRXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdnYW1lT3ZlcicpO1xuXG4gICAgICAgIC8vdGhpcy5tdXNpYy5sb29wRnVsbCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLmVuZW15VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5lbmVteVNob290VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lID4gdGhpcy5lbmVteUludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15VGltZSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMCAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhbHRoOiA5LFxuICAgICAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgICAgICBhc3NldDogJ2FsaWVuJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmVteVNob290VGltZSA+IHRoaXMuZW5lbXlTaG9vdEludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoQWxpdmUoZW5lbXkgPT4gZW5lbXkuc2hvb3QoKSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllclNob290VGltZSA+IHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvb3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLmJ1bGxldHMsIHRoaXMuZW5lbWllcywgdGhpcy5oaXRFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIsIHRoaXMuZW5lbWllcywgdGhpcy5jcmFzaEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllciwgZW5lbXkuYnVsbGV0cywgdGhpcy5oaXRQbGF5ZXIsIG51bGwsIHRoaXMpKTtcblxuICAgICAgICB0aGlzLmZhcmJhY2sudGlsZVBvc2l0aW9uLnkgKz0gMztcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcblxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICBlbmVteSA9IG5ldyBFbmVteShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5hZGQoZW5lbXkpO1xuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGhpdEVmZmVjdChvYmosIGNvbG9yKSB7XG4gICAgICAgIGxldCB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4ob2JqKTtcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIoKTtcbiAgICAgICAgbGV0IGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgIGxldCBwYXJ0aWNsZVNwZWVkID0gMTAwO1xuICAgICAgICBsZXQgbWF4UGFydGljbGVzID0gMTA7XG5cbiAgICAgICAgdHdlZW4udG8oe3RpbnQ6IDB4ZmYwMDAwfSwgMTAwKTtcbiAgICAgICAgdHdlZW4ub25Db21wbGV0ZS5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgb2JqLnRpbnQgPSAweGZmZmZmZjtcbiAgICAgICAgfSk7XG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XG5cbiAgICAgICAgZW1pdHRlci54ID0gb2JqLng7XG4gICAgICAgIGVtaXR0ZXIueSA9IG9iai55O1xuICAgICAgICBlbWl0dGVyLmdyYXZpdHkgPSAwO1xuICAgICAgICBlbWl0dGVyLm1ha2VQYXJ0aWNsZXMoJ3BhcnRpY2xlJyk7XG5cbiAgICAgICAgaWYgKG9iai5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgcGFydGljbGVTcGVlZCA9IDIwMDtcbiAgICAgICAgICAgIG1heFBhcnRpY2xlcyA9IDQwO1xuICAgICAgICAgICAgY29sb3IgPSAweGZmMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIubWluUGFydGljbGVTcGVlZC5zZXRUbygtcGFydGljbGVTcGVlZCwgLXBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLm1heFBhcnRpY2xlU3BlZWQuc2V0VG8ocGFydGljbGVTcGVlZCwgcGFydGljbGVTcGVlZCk7XG4gICAgICAgIGVtaXR0ZXIuc3RhcnQodHJ1ZSwgNTAwLCBudWxsLCBtYXhQYXJ0aWNsZXMpO1xuICAgICAgICBlbWl0dGVyLnVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgICAgIGlmKGVtaXR0ZXJQaHlzaWNzVGltZSA+PSAwLjYpe1xuICAgICAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZW1pdHRlci5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnRpbnQgPSBjb2xvcik7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXRFbmVteShidWxsZXQsIGVuZW15KSB7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgZW5lbXkuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSwgYnVsbGV0LnRpbnQpO1xuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIHRoaXMuaHVkLnVwZGF0ZVNjb3JlKGVuZW15Lm1heEhlYWx0aCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVsbGV0LmtpbGwoKTtcbiAgICB9XG5cbiAgICBoaXRQbGF5ZXIocGxheWVyLCBidWxsZXQpIHtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICBwbGF5ZXIuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QocGxheWVyLCBidWxsZXQudGludCk7XG4gICAgICAgIGlmICghcGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBidWxsZXQua2lsbCgpO1xuICAgIH1cblxuICAgIGNyYXNoRW5lbXkocGxheWVyLCBlbmVteSkge1xuICAgICAgICBlbmVteS5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgcGxheWVyLmRhbWFnZShlbmVteS5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChwbGF5ZXIpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSk7XG4gICAgICAgIGlmICghZW5lbXkuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgdGhpcy5odWQudXBkYXRlU2NvcmUoZW5lbXkubWF4SGVhbHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDM7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgbGV0IHRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKHRoaXMuZ2FtZSwgdHJ1ZSk7XG4gICAgICAgIHRpbWVyLmFkZCgzMDAwLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ092ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgQ2FyZEJ1dHRvbiBmcm9tICcuLi9leHRlbnNpb25zL2NhcmRidXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5UGFpcnMgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIC8vdGhpcy5iZyA9IHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCw2NjYsNjAwLCAncGFuZ0JnJyk7XG5cbiAgICAgICAgdGhpcy5udW1Sb3dzID0gNDtcbiAgICAgICAgdGhpcy5udW1Db2xzID0gNTtcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDgwO1xuICAgICAgICB0aGlzLnRpbGVTcGFjaW5nID0gMTA7XG5cbiAgICAgICAgLy9zZXQgaXQgdG8gb25lIG1pbnV0ZSAoNjApXG4gICAgICAgIHRoaXMudGltZUxlZnQgPSA2MDA7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XG5cbiAgICAgICAgdGhpcy5jYXJkc0FycmF5ID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBcnJheSA9IFtdO1xuXG4gICAgICAgIC8vLS0tLS0tIENBUkQgUkVMQVRFRCBTVFVGRlxuICAgICAgICB0aGlzLmNhcnRhMSA9IG5ldyBDYXJkQnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICBhc3NldDogJ3RpbGVzJyxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMTAsXG4gICAgICAgICAgICBvdXRGcmFtZTogMTAsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDEwLFxuICAgICAgICAgICAgdXBGcmFtZTogOCxcbiAgICAgICAgICAgIHZhbHVlOiBcIm9qZXRlXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWVudVBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMuY2FydGExKTtcblxuICAgICAgICAvLy0tLS0tLSBIVUQgUkVMQVRFRCBTVFVGRlxuXG4gICAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgICAgICBmb250OiBcIjMycHggSGVsdmV0aWNhXCIsXG4gICAgICAgICAgICBmaWxsOiBcIiMwMGZmMDBcIixcbiAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dCg1LCA1LCBcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmUsIHRoaXMuc3R5bGUpO1xuICAgICAgICB0aGlzLnRpbWVUZXh0ID0gdGhpcy5hZGQudGV4dCg1LCB0aGlzLmdhbWUuaGVpZ2h0IC0gNSwgXCJUaW1lIGxlZnQ6IFwiICsgdGhpcy50aW1lTGVmdCwgdGhpcy5zdHlsZSk7XG4gICAgICAgIHRoaXMudGltZVRleHQuYW5jaG9yLnNldCgwLDEpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5sb29wKFBoYXNlci5UaW1lci5TRUNPTkQsIHRoaXMuZGVjcmVhc2VUaW1lLHRoaXMpO1xuXG4gICAgICAgIHRoaXMucGxhY2VDYXJkcygpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5sb2FkTWVudSgpO1xuXG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGZ1bmN0aW9uc1xuICAgIGxvYWRNZW51KCl7XG4gICAgICAgIGxldCBlc2NLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5FU0MpO1xuICAgICAgICBpZihlc2NLZXkpe1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNyZWFzZVRpbWUoKSB7XG4gICAgICAgIHRoaXMudGltZUxlZnQtLTtcbiAgICAgICAgdGhpcy50aW1lVGV4dC50ZXh0ID0gXCJUaW1lIGxlZnQ6IFwiICsgdGhpcy50aW1lTGVmdDtcbiAgICAgICAgaWYodGhpcy50aW1lTGVmdCA9PSAwKSB7XG4gICAgICAgICAgICAvL0NoYW5nZSB0aGlzIHRvIHBhaXJzT3ZlclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQYW5nT3ZlcicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlQ2FyZHMoKSB7XG5cbiAgICAgICAgbGV0IHRpbGVzTGVmdCA9ICh0aGlzLm51bVJvd3MgKiB0aGlzLm51bUNvbHMpO1xuICAgICAgICBsZXQgbGVmdFNwYWNlID0gKHRoaXMuZ2FtZS53aWR0aCAtICh0aGlzLm51bUNvbHMgKiB0aGlzLnRpbGVTaXplKSAtICgodGhpcy5udW1Db2xzIC0gMSkgKiBcdHRoaXMudGlsZVNwYWNpbmcpKS8yO1xuICAgICAgICBsZXQgdG9wU3BhY2UgID0gKHRoaXMuZ2FtZS5oZWlnaHQgLSAodGhpcy5udW1Sb3dzICogdGhpcy50aWxlU2l6ZSkgLSAoKHRoaXMubnVtUm93cyAtIDEpICogXHR0aGlzLnRpbGVTcGFjaW5nKSkvMjtcblxuICAgICAgICAvLy0tIFBvcHVsYXRlIGFycmF5IHdpdGggcGFpcnMgb2YgbnVtYmVycyBbMSwxLDIsMiwzLDMsNCw0LC4uLl1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRpbGVzTGVmdDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRzQXJyYXkucHVzaChNYXRoLmZsb29yKGkgLyAyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLy0tIFJhbmRvbWl6ZSAvIG1peCB0aGUgYXJyYXlcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRpbGVzTGVmdDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZnJvbSA9ICB0aGlzLmdhbWUucm5kLmJldHdlZW4oMCwgdGhpcy5jYXJkc0FycmF5Lmxlbmd0aC0xKTtcbiAgICAgICAgICAgIGxldCB0byAgID0gIHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigwLCB0aGlzLmNhcmRzQXJyYXkubGVuZ3RoLTEpO1xuICAgICAgICAgICAgbGV0IHRlbXAgPSAgdGhpcy5jYXJkc0FycmF5W2Zyb21dO1xuXG4gICAgICAgICAgICB0aGlzLmNhcmRzQXJyYXlbZnJvbV0gPSB0aGlzLmNhcmRzQXJyYXlbdG9dO1xuICAgICAgICAgICAgdGhpcy5jYXJkc0FycmF5W3RvXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLSBEZWFsIHRoZSBjYXJkc1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Db2xzOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLm51bVJvd3M7IGorKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBuZXcgQ2FyZEJ1dHRvbih7XG4gICAgICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICAgICAgeDogbGVmdFNwYWNlICsgaSAqICh0aGlzLnRpbGVTaXplICsgdGhpcy50aWxlU3BhY2luZyksXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvcFNwYWNlICsgaSAqICh0aGlzLnRpbGVTaXplICsgdGhpcy50aWxlU3BhY2luZyksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiAndGlsZXMnLFxuICAgICAgICAgICAgICAgICAgICBkb3duRnJhbWU6IDEwLFxuICAgICAgICAgICAgICAgICAgICBvdXRGcmFtZTogMTAsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJGcmFtZTogMTAsXG4gICAgICAgICAgICAgICAgICAgIHVwRnJhbWU6IDEwLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvamV0ZVwiXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wcmVmYWJzL3BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vcHJlZmFicy9lbmVteVBhbmcnO1xuaW1wb3J0IEhVRCBmcm9tICcuLi9wcmVmYWJzL2h1ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlQYW5nIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5iZyA9IHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCwgMjAwMCwgMjM4MCwgJ3BhbmdCZycpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcblxuXG4gICAgICAgIC8vIC0tLS0tLS0gUExBWUVSXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IDAuOTIgKiB0aGlzLmdhbWUud29ybGQuaGVpZ2h0LFxuICAgICAgICAgICAgaGVhbHRoOiAxMCxcbiAgICAgICAgICAgIGFzc2V0OiAnc21hbGxmaWdodGVyJyxcbiAgICAgICAgICAgIGZyYW1lOiAyXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wbGF5ZXIpO1xuICAgICAgICB0aGlzLnBsYXllclNob290VGltZSA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCA9IDAuMTY7XG5cbiAgICAgICAgLy8gLS0tLS0tLSBFTkVNWTogdGhlc2Ugb25lcyBhcmUgY3JlYXRlZCBldmVyeSB1cGRhdGUgdGlja1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmVuZW1pZXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5lbXlUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzEuNVxuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSAyLjU7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIC8vIC0tLS0tLS0gIUVORU1ZXG5cbiAgICAgICAgLy8gLS0tLS0tLSBzbWFsbGVyRU5FTVk6IHRoaXMgb25lcyBhcmUgY3JlYXRlZCBldmVyeSB1cGRhdGUgdGlja1xuICAgICAgICB0aGlzLnNtYWxsZXJFbmVtaWVzID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5zbWFsbGVyRW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgLy8gLS0tLS0tLSAhc21hbGxlckVORU1ZXG5cblxuICAgICAgICAvLyAtLS0tLS0tIEVORU1ZIENMSUVOVDogcmFuZG9tbHkgY2hvc2VuXG4gICAgICAgIHRoaXMuZW5lbWllc0NsaWVudCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllc0NsaWVudC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgLy8xLjVcbiAgICAgICAgdGhpcy5lbmVteUNsaWVudEludGVydmFsID0gMi4wO1xuICAgICAgICB0aGlzLmVuZW15Q2xpZW50U2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmVteUNsaWVudFNob290SW50ZXJ2YWwgPSAxO1xuICAgICAgICAgICAgLy9pbml0aWFsaXplIGZpcnN0IGNsaWVudFxuICAgICAgICB0aGlzLmNyZWF0ZUVuZW15Q2xpZW50KHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNiwgNzYpICogMTAsXG4gICAgICAgICAgICAvLzBcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTAgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vOVxuICAgICAgICAgICAgaGVhbHRoOiA5MCxcbiAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYWxpZW5zJyxcbiAgICAgICAgICAgIHNpemU6IDAuOFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gLS0tLS0tLSAhRU5FTVkgQ0xJRU5UOiByYW5kb21seSBjaG9zZW5cblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05EICogMTAsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlJbnRlcnZhbCA+IDAuMiApe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCAtPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcCA9IHRoaXMuYWRkLmJpdG1hcERhdGEodGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwLmN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgdGhpcy5vdmVybGF5Qml0bWFwKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFscGhhID0gMC43NTtcblxuICAgICAgICB0aGlzLmh1ZCA9IG5ldyBIVUQoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgcGxheWVyOiB0aGlzLnBsYXllclxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtLS0tLS0tIFNPVU5EU1xuICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdwbGF5TXVzaWMnKTtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdidWxsZXRIaXQnKTtcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2VuZW15RXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgncGxheWVyRXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdnYW1lT3ZlcicpO1xuXG4gICAgICAgIC8vdGhpcy5tdXNpYy5sb29wRnVsbCgpO1xuXG5cblxuICAgICAgICAvL0RlZmF1bHRzXG4gICAgICAgIC8vdGhpcy5lbmVteVRpbWUgPSAwO1xuICAgICAgICAvL3RoaXMuZW5lbXlJbnRlcnZhbCA9IDEuNTtcbiAgICAgICAgLy90aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgLy90aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIC8vdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAvL3RoaXMucGxheWVyU2hvb3RJbnRlcnZhbCA9IDAuMTY7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmVuZW15VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5lbmVteVNob290VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lID4gdGhpcy5lbmVteUludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15VGltZSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgICAgIC8vMFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMCAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy85XG4gICAgICAgICAgICAgICAgaGVhbHRoOiA5LFxuICAgICAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgICAgICBhc3NldDogJ2FsaWVuJyxcbiAgICAgICAgICAgICAgICBzaXplOiAyLjVcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmVteVNob290VGltZSA+IHRoaXMuZW5lbXlTaG9vdEludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGFzIG11ZXJ0b1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllclNob290VGltZSA+IHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNob290S2V5ID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIpO1xuICAgICAgICAgICAgICAgIGlmKHNob290S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNob290KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIuYnVsbGV0cywgdGhpcy5lbmVtaWVzLCB0aGlzLmhpdEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllci5idWxsZXRzLCB0aGlzLnNtYWxsZXJFbmVtaWVzLCB0aGlzLmhpdEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllciwgW3RoaXMuZW5lbWllcyx0aGlzLnNtYWxsZXJFbmVtaWVzXSwgdGhpcy5jcmFzaEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmxvYWRNZW51KCk7XG4gICAgICAgIC8vIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggKz0gMztcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgbGV0IHRvdGFsRW5lbWllcyA9IHRoaXMuZW5lbWllcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsRW5lbWllcyk7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICBpZih0b3RhbEVuZW1pZXMgPCA1KXtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuYWRkKGVuZW15KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNtYWxsZXJFbmVteShkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5zbWFsbGVyRW5lbWllcy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGxldCB0b3RhbEVuZW1pZXMgPSB0aGlzLnNtYWxsZXJFbmVtaWVzLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICBlbmVteSA9IG5ldyBFbmVteShkYXRhKTtcbiAgICAgICAgICAgIGlmKHRvdGFsRW5lbWllcyA8IDI0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnNtYWxsZXJFbmVtaWVzLmFkZChlbmVteSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteUNsaWVudChkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzQ2xpZW50LmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgbGV0IHRvdGFsRW5lbWllcyA9IHRoaXMuZW5lbWllc0NsaWVudC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsRW5lbWllcyk7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICBpZih0b3RhbEVuZW1pZXMgPD0gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzQ2xpZW50LmFkZChlbmVteSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBoaXRFZmZlY3Qob2JqLCBjb2xvcikge1xuICAgICAgICBsZXQgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKG9iaik7XG4gICAgICAgIGxldCBlbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKCk7XG4gICAgICAgIGxldCBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICBsZXQgcGFydGljbGVTcGVlZCA9IDEwMDtcbiAgICAgICAgbGV0IG1heFBhcnRpY2xlcyA9IDEwO1xuXG4gICAgICAgIHR3ZWVuLnRvKHt0aW50OiAweGZmMDAwMH0sIDEwMCk7XG4gICAgICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIG9iai50aW50ID0gMHhmZmZmZmY7XG4gICAgICAgIH0pO1xuICAgICAgICB0d2Vlbi5zdGFydCgpO1xuXG4gICAgICAgIGVtaXR0ZXIueCA9IG9iai54O1xuICAgICAgICBlbWl0dGVyLnkgPSBvYmoueTtcbiAgICAgICAgZW1pdHRlci5ncmF2aXR5ID0gMDtcbiAgICAgICAgZW1pdHRlci5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZScpO1xuXG4gICAgICAgIGlmIChvYmouaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHBhcnRpY2xlU3BlZWQgPSAyMDA7XG4gICAgICAgICAgICBtYXhQYXJ0aWNsZXMgPSA0MDtcbiAgICAgICAgICAgIGNvbG9yID0gMHhmZjAwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBlbWl0dGVyLm1pblBhcnRpY2xlU3BlZWQuc2V0VG8oLXBhcnRpY2xlU3BlZWQsIC1wYXJ0aWNsZVNwZWVkKTtcbiAgICAgICAgZW1pdHRlci5tYXhQYXJ0aWNsZVNwZWVkLnNldFRvKHBhcnRpY2xlU3BlZWQsIHBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLnN0YXJ0KHRydWUsIDUwMCwgbnVsbCwgbWF4UGFydGljbGVzKTtcbiAgICAgICAgZW1pdHRlci51cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgICAgICBpZihlbWl0dGVyUGh5c2ljc1RpbWUgPj0gMC42KXtcbiAgICAgICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIGVtaXR0ZXIuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS50aW50ID0gY29sb3IpO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGl0RW5lbXkoYnVsbGV0LCBlbmVteSkge1xuXG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgZW5lbXkuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSwgYnVsbGV0LnRpbnQpO1xuXG4gICAgICAgIGlmICghZW5lbXkuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZC5wbGF5KFwiXCIsIDAsIDAuNSk7XG4gICAgICAgICAgICB0aGlzLmh1ZC51cGRhdGVTY29yZShlbmVteS5tYXhIZWFsdGgpO1xuICAgICAgICAgICAgc3dpdGNoKGVuZW15LnNpemUpe1xuICAgICAgICAgICAgICAgIC8vTGFyZ2UgLT4gTWVkaXVtXG4gICAgICAgICAgICAgICAgY2FzZSAyLjU6XG4gICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNtYWxsZXJFbmVteSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlbmVteS54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZW5lbXkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMjUgKiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtMzAgKiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWx0aDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRTcGVlZDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgxMCwgMjApICogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogJ2FsaWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEuNVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU21hbGxlckVuZW15KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGVuZW15LngsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IC0yNSAqIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0zMCAqIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGg6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6ICdhbGllbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxLjVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVsbGV0LmtpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyYXNoRW5lbXkocGxheWVyLCBlbmVteSkge1xuICAgICAgICAvL2VuZW15LmRhbWFnZShlbmVteS5oZWFsdGgpO1xuICAgICAgICBlbmVteS5kYW1hZ2UoMyk7XG4gICAgICAgIC8vcGxheWVyLmRhbWFnZShlbmVteS5oZWFsdGgpO1xuICAgICAgICBwbGF5ZXIuZGFtYWdlKDEpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChwbGF5ZXIpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSk7XG4gICAgICAgIGlmICghZW5lbXkuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgdGhpcy5odWQudXBkYXRlU2NvcmUoZW5lbXkubWF4SGVhbHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDM7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgbGV0IHRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKHRoaXMuZ2FtZSwgdHJ1ZSk7XG4gICAgICAgIHRpbWVyLmFkZCgzMDAwLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BhbmdPdmVyJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgIH1cblxuICAgIGxvYWRNZW51KCl7XG4gICAgICAgIGxldCBlc2NLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5FU0MpO1xuICAgICAgICBpZihlc2NLZXkpe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2lsbCgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcblxuICAgICAgICB0aGlzLmxvYWRlckJnID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ2xvYWRlckJnJyk7XG4gICAgICAgIHRoaXMubG9hZGVyQmFyID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ2xvYWRlckJhcicpO1xuICAgICAgICB0aGlzLmxvYWRlckJnLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLmxvYWRlckJhci5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmxvYWRlckJhcik7XG4gICAgICAgIC8vZ2FtZSAxXG4gICAgICAgIHRoaXMubG9hZC5hdGxhc0pTT05BcnJheSgnc21hbGxmaWdodGVyJywgJ2ltZy9zcHJpdGVzaGVldC9zbWFsbGZpZ2h0ZXIucG5nJywgJ2RhdGEvc3ByaXRlc2hlZXQvc21hbGxmaWdodGVyLmpzb24nKTtcbiAgICAgICAgdGhpcy5sb2FkLmF0bGFzSlNPTkFycmF5KCdhbGllbicsICdpbWcvc3ByaXRlc2hlZXQvYWxpZW4ucG5nJywgJ2RhdGEvc3ByaXRlc2hlZXQvYWxpZW4uanNvbicpO1xuICAgICAgICB0aGlzLmxvYWQuYXRsYXNKU09OQXJyYXkoJ2J1dHRvbicsICdpbWcvc3ByaXRlc2hlZXQvYnV0dG9uLnBuZycsICdkYXRhL3Nwcml0ZXNoZWV0L2J1dHRvbi5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmFyYmFjaycsICdpbWcvZmFyYmFjay5qcGcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnaW1nL2J1bGxldC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwYXJ0aWNsZScsICdpbWcvcGFydGljbGUuZ2lmJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaGVhbHRoYmFyJywgJ2ltZy9oZWFsdGhiYXIucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaHVkQmcnLCAnaW1nL2h1ZC1iZy5wbmcnKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXlNdXNpYycsIFsnYXVkaW8vbXVzaWMvcGxheS5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudU11c2ljJywgWydhdWRpby9tdXNpYy9tZW51Lm1wMyddKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVPdmVyJywgWydhdWRpby9zb3VuZC9tZW51LW92ZXIubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVPdXQnLCBbJ2F1ZGlvL3NvdW5kL21lbnUtb3V0Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtZW51RG93bicsIFsnYXVkaW8vc291bmQvbWVudS1jbGljay5tcDMnXSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdidWxsZXRIaXQnLCBbJ2F1ZGlvL3NvdW5kL2J1bGxldC1oaXQubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2VuZW15U2hvdCcsIFsnYXVkaW8vc291bmQvZW5lbXktc2hvdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZW5lbXlFeHBsb3Npb24nLCBbJ2F1ZGlvL3NvdW5kL2VuZW15LWV4cGxvc2lvbi5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyU2hvdCcsIFsnYXVkaW8vc291bmQvcGxheWVyLXNob3QubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXllckV4cGxvc2lvbicsIFsnYXVkaW8vc291bmQvcGxheWVyLWV4cGxvc2lvbi5tcDMnXSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdnYW1lT3ZlcicsIFsnYXVkaW8vc291bmQvZ2FtZS1vdmVyLm1wMyddKTtcbiAgICAgICAgLy8hZ2FtZSAxXG5cblxuICAgICAgICAvL2dhbWUgMlxuICAgICAgICAgICAgLy9wYW5nXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFuZ0JnJywgJ2ltZy9wYW5nQmcucG5nJyk7XG5cbiAgICAgICAgLy8hZ2FtZSAyXG4gICAgICAgIC8vIG1hdGNoaW5nXG4gICAgICAgIC8vZ2FtZSAzIC0tIHc6ODAsIGw6ODBcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0aWxlcycsICdpbWcvc3ByaXRlc2hlZXQvdGlsZXMucG5nJyw4MCw4MCwxMSk7XG4gICAgICAgIC8vZ2FtZSAzXG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgfVxuXG59XG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSnpjbU12YW5NdlpYaDBaVzV6YVc5dWN5OWpZWEprWW5WMGRHOXVMbXB6SWl3aWMzSmpMMnB6TDJWNGRHVnVjMmx2Ym5NdmRHVjRkR0oxZEhSdmJpNXFjeUlzSW5OeVl5OXFjeTluWVcxbExtcHpJaXdpYzNKakwycHpMM0J5WldaaFluTXZZblZzYkdWMExtcHpJaXdpYzNKakwycHpMM0J5WldaaFluTXZaVzVsYlhrdWFuTWlMQ0p6Y21NdmFuTXZjSEpsWm1GaWN5OWxibVZ0ZVZCaGJtY3Vhbk1pTENKemNtTXZhbk12Y0hKbFptRmljeTlvZFdRdWFuTWlMQ0p6Y21NdmFuTXZjSEpsWm1GaWN5OXdiR0Y1WlhJdWFuTWlMQ0p6Y21NdmFuTXZjM1JoZEdWekwySnZiM1F1YW5NaUxDSnpjbU12YW5NdmMzUmhkR1Z6TDJsdVpHVjRMbXB6SWl3aWMzSmpMMnB6TDNOMFlYUmxjeTl0Wlc1MUxtcHpJaXdpYzNKakwycHpMM04wWVhSbGN5OXZkbVZ5TG1weklpd2ljM0pqTDJwekwzTjBZWFJsY3k5d1lXbHljMDkyWlhJdWFuTWlMQ0p6Y21NdmFuTXZjM1JoZEdWekwzQmhibWRQZG1WeUxtcHpJaXdpYzNKakwycHpMM04wWVhSbGN5OXdiR0Y1TG1weklpd2ljM0pqTDJwekwzTjBZWFJsY3k5d2JHRjVVR0ZwY25NdWFuTWlMQ0p6Y21NdmFuTXZjM1JoZEdWekwzQnNZWGxRWVc1bkxtcHpJaXdpYzNKakwycHpMM04wWVhSbGN5OXdjbVZzYjJGa0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenM3T3pzN08wbERRWEZDTEZVN096dEJRVVZxUWl3NFFrRkJORWM3UVVGQlFTeFpRVUU1Uml4SlFVRTRSaXhSUVVFNVJpeEpRVUU0Ump0QlFVRkJMRmxCUVhoR0xFTkJRWGRHTEZGQlFYaEdMRU5CUVhkR08wRkJRVUVzV1VGQmNrWXNRMEZCY1VZc1VVRkJja1lzUTBGQmNVWTdRVUZCUVN4WlFVRnNSaXhMUVVGclJpeFJRVUZzUml4TFFVRnJSanRCUVVGQkxGbEJRVE5GTEZGQlFUSkZMRkZCUVRORkxGRkJRVEpGTzBGQlFVRXNXVUZCYWtVc1pVRkJhVVVzVVVGQmFrVXNaVUZCYVVVN1FVRkJRU3haUVVGb1JDeFRRVUZuUkN4UlFVRm9SQ3hUUVVGblJEdEJRVUZCTEZsQlFYSkRMRkZCUVhGRExGRkJRWEpETEZGQlFYRkRPMEZCUVVFc1dVRkJNMElzVTBGQk1rSXNVVUZCTTBJc1UwRkJNa0k3UVVGQlFTeFpRVUZvUWl4UFFVRm5RaXhSUVVGb1FpeFBRVUZuUWp0QlFVRkJMRmxCUVZJc1MwRkJVU3hSUVVGU0xFdEJRVkU3TzBGQlFVRTdPMEZCUVVFc05FaEJRMnhITEVsQlJHdEhMRVZCUXpWR0xFTkJSRFJHTEVWQlEzcEdMRU5CUkhsR0xFVkJRM1JHTEV0QlJITkdMRVZCUXk5RkxGRkJSQ3RGTEVWQlEzSkZMR1ZCUkhGRkxFVkJRM0JFTEZOQlJHOUVMRVZCUTNwRExGRkJSSGxETEVWQlF5OUNMRk5CUkN0Q0xFVkJRM0JDTEU5QlJHOUNPenRCUVVkNFJ5eGpRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRmFMRU5CUVd0Q0xFZEJRV3hDTzBGQlEwRXNZMEZCU3l4TFFVRk1MRWRCUVdFc1MwRkJZanRCUVVwM1J6dEJRVXN6UnpzN08wVkJVRzFETEU5QlFVOHNUVHM3UVVGcFFpOURPenM3YTBKQmFrSnhRaXhWTzBGQmEwSnlRaXhKUVVGSkxFOUJRVThzU1VGQlNTeFZRVUZLTEVOQlFXVTdRVUZEZEVJc1ZVRkJUU3hWUVVGTExFbEJSRmM3UVVGRmRFSXNUMEZCUnl4WlFVRlpMRXRCUVVzc1ZVRkJTeXhSUVVGTUxFZEJRV2RDTEZWQlFVc3NWMEZCTVVJc1EwRkdUenRCUVVkMFFpeFBRVUZITEZkQlFWY3NTMEZCU3l4VlFVRkxMRkZCUVV3c1IwRkJaMElzVlVGQlN5eFhRVUV4UWl4RFFVaFJPMEZCU1hSQ0xGZEJRVThzVDBGS1pUdEJRVXQwUWl4bFFVRlhMRVZCVEZjN1FVRk5kRUlzWTBGQlZTeEZRVTVaTzBGQlQzUkNMR1ZCUVZjc1JVRlFWenRCUVZGMFFpeGhRVUZUTEVWQlVtRTdRVUZUZEVJc1YwRkJUenRCUVZSbExFTkJRV1lzUTBGQldEdEJRVmRCTEV0QlFVc3NTMEZCVEN4SFFVRmhMRU5CUVdJN1FVRkRRU3hWUVVGTExGTkJRVXdzUTBGQlpTeEhRVUZtTEVOQlFXMUNMRWxCUVc1Q096czdPenM3T3pzN096czdPenM3U1VNNVFuRkNMRlU3T3p0QlFVVnFRaXc0UWtGQmNVZzdRVUZCUVN4WlFVRjJSeXhKUVVGMVJ5eFJRVUYyUnl4SlFVRjFSenRCUVVGQkxGbEJRV3BITEVOQlFXbEhMRkZCUVdwSExFTkJRV2xITzBGQlFVRXNXVUZCT1VZc1EwRkJPRVlzVVVGQk9VWXNRMEZCT0VZN1FVRkJRU3haUVVFelJpeExRVUV5Uml4UlFVRXpSaXhMUVVFeVJqdEJRVUZCTEZsQlFYQkdMRkZCUVc5R0xGRkJRWEJHTEZGQlFXOUdPMEZCUVVFc1dVRkJNVVVzWlVGQk1FVXNVVUZCTVVVc1pVRkJNRVU3UVVGQlFTeFpRVUY2UkN4VFFVRjVSQ3hSUVVGNlJDeFRRVUY1UkR0QlFVRkJMRmxCUVRsRExGRkJRVGhETEZGQlFUbERMRkZCUVRoRE8wRkJRVUVzV1VGQmNFTXNVMEZCYjBNc1VVRkJjRU1zVTBGQmIwTTdRVUZCUVN4WlFVRjZRaXhQUVVGNVFpeFJRVUY2UWl4UFFVRjVRanRCUVVGQkxGbEJRV2hDTEV0QlFXZENMRkZCUVdoQ0xFdEJRV2RDTzBGQlFVRXNXVUZCVkN4TFFVRlRMRkZCUVZRc1MwRkJVenM3UVVGQlFUczdRVUZCUVN3MFNFRkRNMGNzU1VGRU1rY3NSVUZEY2tjc1EwRkVjVWNzUlVGRGJFY3NRMEZFYTBjc1JVRkRMMFlzUzBGRUswWXNSVUZEZUVZc1VVRkVkMFlzUlVGRE9VVXNaVUZFT0VVc1JVRkROMFFzVTBGRU5rUXNSVUZEYkVRc1VVRkVhMFFzUlVGRGVFTXNVMEZFZDBNc1JVRkROMElzVDBGRU5rSTdPMEZCUjJwSUxHTkJRVXNzVFVGQlRDeERRVUZaTEV0QlFWb3NRMEZCYTBJc1IwRkJiRUk3TzBGQlJVRXNZMEZCU3l4TFFVRk1MRWRCUVdFc1MwRkJZanRCUVVOQkxHTkJRVXNzUzBGQlRDeEhRVUZoTEV0QlFXSTdRVUZEUVN4alFVRkxMRWxCUVV3c1IwRkJXU3hKUVVGSkxFOUJRVThzU1VGQldDeERRVUZuUWl4TlFVRkxMRWxCUVhKQ0xFVkJRVEpDTEVOQlFUTkNMRVZCUVRoQ0xFTkJRVGxDTEVWQlFXbERMRTFCUVVzc1MwRkJkRU1zUlVGQk5rTXNUVUZCU3l4TFFVRnNSQ3hEUVVGYU8wRkJRMEVzWTBGQlN5eEpRVUZNTEVOQlFWVXNUVUZCVml4RFFVRnBRaXhMUVVGcVFpeERRVUYxUWl4SFFVRjJRanM3UVVGRlFTeGpRVUZMTEZGQlFVd3NRMEZCWXl4TlFVRkxMRWxCUVc1Q096dEJRVlpwU0R0QlFWbHdTRHM3TzBWQlpHMURMRTlCUVU4c1RUczdhMEpCUVRGQ0xGVTdPenM3TzBGRFFYSkNPenRKUVVGWkxFMDdPenM3UVVGRFdpeEpRVUZOTEU5QlFVOHNTVUZCU1N4UFFVRlBMRWxCUVZnc1EwRkJaMElzUjBGQmFFSXNSVUZCY1VJc1NVRkJja0lzUlVGQk1rSXNUMEZCVHl4SlFVRnNReXhEUVVGaU96dEJRVVZCTEU5QlFVOHNTVUZCVUN4RFFVRlpMRTFCUVZvc1JVRkJiMElzVDBGQmNFSXNRMEZCTkVJN1FVRkJRU3hUUVVGVExFdEJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFOUJRVThzUzBGQlVDeERRVUYwUWl4RFFVRlVPMEZCUVVFc1EwRkJOVUk3TzBGQlJVRXNTMEZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeE5RVUZxUWpzN096czdPenM3T3pzN096czdPMGxEVEhGQ0xFMDdPenRCUVVWcVFpd3dRa0ZCTkVRN1FVRkJRU3haUVVFNVF5eEpRVUU0UXl4UlFVRTVReXhKUVVFNFF6dEJRVUZCTEZsQlFYaERMRU5CUVhkRExGRkJRWGhETEVOQlFYZERPMEZCUVVFc1dVRkJja01zUTBGQmNVTXNVVUZCY2tNc1EwRkJjVU03UVVGQlFTeFpRVUZzUXl4TFFVRnJReXhSUVVGc1F5eExRVUZyUXp0QlFVRkJMRmxCUVROQ0xFMUJRVEpDTEZGQlFUTkNMRTFCUVRKQ08wRkJRVUVzTmtKQlFXNUNMRWxCUVcxQ08wRkJRVUVzV1VGQmJrSXNTVUZCYlVJc05rSkJRVm9zVVVGQldUczdRVUZCUVRzN1FVRkJRU3h2U0VGRGJFUXNTVUZFYTBRc1JVRkROVU1zUTBGRU5FTXNSVUZEZWtNc1EwRkVlVU1zUlVGRGRFTXNTMEZFYzBNN08wRkJSM2hFTEdOQlFVc3NUVUZCVEN4RFFVRlpMRXRCUVZvc1EwRkJhMElzUjBGQmJFSTdRVUZEUVN4alFVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEVkQlFXcENPMEZCUTBFc1kwRkJTeXhOUVVGTUxFZEJRV01zVFVGQlpEdEJRVU5CTEdOQlFVc3NTVUZCVEN4SFFVRlpMRWxCUVZvN1FVRkRRU3hqUVVGTExHZENRVUZNTEVkQlFYZENMRWxCUVhoQ08wRkJRMEVzWTBGQlN5eGxRVUZNTEVkQlFYVkNMRWxCUVhaQ08wRkJVbmRFTzBGQlV6TkVPenM3UlVGWUswSXNUMEZCVHl4Tk96dHJRa0ZCZEVJc1RUczdPenM3T3pzN096czdPenRCUTBGeVFqczdPenM3T3pzN096czdPMGxCUlhGQ0xFczdPenRCUVVWcVFpeDVRa0ZCSzBRN1FVRkJRU3haUVVGcVJDeEpRVUZwUkN4UlFVRnFSQ3hKUVVGcFJEdEJRVUZCTEZsQlFUTkRMRU5CUVRKRExGRkJRVE5ETEVOQlFUSkRPMEZCUVVFc1dVRkJlRU1zUTBGQmQwTXNVVUZCZUVNc1EwRkJkME03UVVGQlFTeFpRVUZ5UXl4TFFVRnhReXhSUVVGeVF5eExRVUZ4UXp0QlFVRkJMRmxCUVRsQ0xFdEJRVGhDTEZGQlFUbENMRXRCUVRoQ08wRkJRVUVzV1VGQmRrSXNUVUZCZFVJc1VVRkJka0lzVFVGQmRVSTdRVUZCUVN4WlFVRm1MRmRCUVdVc1VVRkJaaXhYUVVGbE96dEJRVUZCT3p0QlFVRkJMR3RJUVVOeVJDeEpRVVJ4UkN4RlFVTXZReXhEUVVRclF5eEZRVU0xUXl4RFFVUTBReXhGUVVONlF5eExRVVI1UXl4RlFVTnNReXhMUVVSclF6czdRVUZITTBRc1kwRkJTeXhKUVVGTUxFZEJRVmtzU1VGQldqczdRVUZGUVN4alFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGYUxFTkJRV3RDTEVkQlFXeENPMEZCUTBFc1kwRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4SFFVRnFRanRCUVVOQkxHTkJRVXNzVFVGQlRDeEhRVUZqTEUxQlFXUTdRVUZEUVN4alFVRkxMRk5CUVV3c1IwRkJhVUlzVFVGQmFrSTdRVUZEUVN4alFVRkxMRWxCUVV3c1EwRkJWU3hQUVVGV0xFTkJRV3RDTEUxQlFXeENMRU5CUVhsQ0xFMUJRWHBDT3p0QlFVVkJMR05CUVVzc1ZVRkJUQ3hEUVVGblFpeEhRVUZvUWl4RFFVRnZRaXhWUVVGd1FpeEZRVUZuUXl4RFFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS0xFVkJRVThzUTBGQlVDeEZRVUZWTEVOQlFWWXNSVUZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVWQlFXMUNMRU5CUVc1Q0xFVkJRWE5DTEVOQlFYUkNMRVZCUVhsQ0xFTkJRWHBDTEVWQlFUUkNMRU5CUVRWQ0xFVkJRU3RDTEVWQlFTOUNMRVZCUVcxRExFVkJRVzVETEVWQlFYVkRMRVZCUVhaRExFVkJRVEpETEVWQlFUTkRMRVZCUVN0RExFVkJRUzlETEVOQlFXaERMRVZCUVc5R0xFVkJRWEJHTEVWQlFYZEdMRWxCUVhoR08wRkJRMEVzWTBGQlN5eEpRVUZNTEVOQlFWVXNWVUZCVmpzN1FVRkZRU3hqUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1MwRkJaQ3hGUVVGbU8wRkJRMEVzWTBGQlN5eFBRVUZNTEVOQlFXRXNWVUZCWWl4SFFVRXdRaXhKUVVFeFFqdEJRVU5CTEdOQlFVc3NWMEZCVEN4SFFVRnRRaXhYUVVGdVFqczdRVUZGUVN4alFVRkxMRk5CUVV3c1IwRkJhVUlzVFVGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1EwRkJiMElzVjBGQmNFSXNRMEZCYWtJN08wRkJiRUl5UkR0QlFXOUNPVVE3T3pzN2FVTkJSVkU3TzBGQlJVd3NaMEpCUVVrc1MwRkJTeXhSUVVGTUxFTkJRV01zUTBGQlpDeEhRVUZyUWl4UFFVRlBMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCTjBNc1JVRkJiMFE3UVVGRGFFUXNjVUpCUVVzc1VVRkJUQ3hEUVVGakxFTkJRV1FzUjBGQmEwSXNUMEZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFYWkNMRWRCUVN0Q0xFTkJRV3BFTzBGQlEwRXNjVUpCUVVzc1NVRkJUQ3hEUVVGVkxGRkJRVllzUTBGQmJVSXNRMEZCYmtJc1NVRkJkMElzUTBGQlF5eERRVUY2UWp0QlFVTklMR0ZCU0VRc1RVRkpTeXhKUVVGSkxFdEJRVXNzVVVGQlRDeERRVUZqTEVOQlFXUXNSMEZCYTBJc1QwRkJUeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRXRCUVRkRExFVkJRVzlFTzBGQlEzSkVMSEZDUVVGTExGRkJRVXdzUTBGQll5eERRVUZrTEVkQlFXdENMRTlCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TFFVRjJRaXhIUVVFclFpeERRVUZxUkR0QlFVTkJMSEZDUVVGTExFbEJRVXdzUTBGQlZTeFJRVUZXTEVOQlFXMUNMRU5CUVc1Q0xFbEJRWGRDTEVOQlFVTXNRMEZCZWtJN1FVRkRTRHM3UVVGRlJDeG5Ra0ZCU1N4TFFVRkxMRkZCUVV3c1EwRkJZeXhEUVVGa0xFZEJRV3RDTEV0QlFVc3NUVUZCVEN4SFFVRmpMRU5CUVdoRExFZEJRVzlETEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVFVGQmVFUXNSVUZCWjBVN1FVRkROVVFzY1VKQlFVc3NTVUZCVER0QlFVTklPMEZCUTBvN096dG5RMEZGVHpzN1FVRkZTaXhwUWtGQlN5eFRRVUZNTEVOQlFXVXNTVUZCWml4RFFVRnZRaXhGUVVGd1FpeEZRVUYxUWl4RFFVRjJRaXhGUVVGNVFpeEhRVUY2UWpzN1FVRkZRU3huUWtGQlNTeFRRVUZUTEV0QlFVc3NUMEZCVEN4RFFVRmhMR05CUVdJc1EwRkJORUlzUzBGQk5VSXNRMEZCWWpzN1FVRkZRU3huUWtGQlNTeERRVUZETEUxQlFVd3NSVUZCWVR0QlFVTlVMSGxDUVVGVExIRkNRVUZYTzBGQlEyaENMREJDUVVGTkxFdEJRVXNzU1VGRVN6dEJRVVZvUWl4MVFrRkJSeXhMUVVGTExFTkJSbEU3UVVGSGFFSXNkVUpCUVVjc1MwRkJTeXhOUVVoUk8wRkJTV2hDTERSQ1FVRlJMRU5CU2xFN1FVRkxhRUlzTWtKQlFVOHNVVUZNVXp0QlFVMW9RaXd3UWtGQlRUdEJRVTVWTEdsQ1FVRllMRU5CUVZRN1FVRlJRU3h4UWtGQlN5eFBRVUZNTEVOQlFXRXNSMEZCWWl4RFFVRnBRaXhOUVVGcVFqdEJRVU5JTEdGQlZrUXNUVUZYU3p0QlFVTkVMSFZDUVVGUExFdEJRVkFzUTBGQllTeExRVUZMTEVOQlFXeENMRVZCUVhGQ0xFdEJRVXNzVFVGQk1VSXNSVUZCYTBNc1EwRkJiRU03UVVGRFNEczdRVUZGUkN4dFFrRkJUeXhKUVVGUUxFTkJRVmtzVVVGQldpeERRVUZ4UWl4RFFVRnlRaXhIUVVGNVFpeExRVUZMTEZkQlFUbENPMEZCUTBnN096c3JRa0ZGVFN4TkxFVkJRVkU3UVVGRFdDeHBTRUZCWVN4TlFVRmlPMEZCUTBnN096dHhRMEZGTWtNN1FVRkJRU3huUWtGQmNFTXNRMEZCYjBNc1UwRkJjRU1zUTBGQmIwTTdRVUZCUVN4blFrRkJha01zUTBGQmFVTXNVMEZCYWtNc1EwRkJhVU03UVVGQlFTeG5Ra0ZCT1VJc1RVRkJPRUlzVTBGQk9VSXNUVUZCT0VJN1FVRkJRU3huUWtGQmRFSXNWMEZCYzBJc1UwRkJkRUlzVjBGQmMwSTdRVUZCUVN4blFrRkJWQ3hMUVVGVExGTkJRVlFzUzBGQlV6czdRVUZEZUVNc1owaEJRVmtzUTBGQldpeEZRVUZsTEVOQlFXWXNSVUZCYTBJc1RVRkJiRUk3UVVGRFFTeHBRa0ZCU3l4WFFVRk1MRWRCUVcxQ0xGZEJRVzVDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxGRkJRVllzUTBGQmJVSXNRMEZCYmtJc1IwRkJkVUlzVFVGQlRTeERRVUUzUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFJRVUZXTEVOQlFXMUNMRU5CUVc1Q0xFZEJRWFZDTEUxQlFVMHNRMEZCTjBJN1FVRkRTRHM3T3p0RlFYcEZPRUlzVDBGQlR5eE5PenRyUWtGQmNrSXNTenM3T3pzN096czdPenM3T3p0QlEwWnlRanM3T3pzN096czdPenM3TzBsQlJYRkNMRXM3T3p0QlFVVnFRaXg1UWtGQmIwVTdRVUZCUVN4WlFVRjBSQ3hKUVVGelJDeFJRVUYwUkN4SlFVRnpSRHRCUVVGQkxGbEJRV2hFTEVOQlFXZEVMRkZCUVdoRUxFTkJRV2RFTzBGQlFVRXNXVUZCTjBNc1EwRkJOa01zVVVGQk4wTXNRMEZCTmtNN1FVRkJRU3haUVVFeFF5eExRVUV3UXl4UlFVRXhReXhMUVVFd1F6dEJRVUZCTEZsQlFXNURMRXRCUVcxRExGRkJRVzVETEV0QlFXMURPMEZCUVVFc1dVRkJOVUlzVFVGQk5FSXNVVUZCTlVJc1RVRkJORUk3UVVGQlFTeFpRVUZ3UWl4WFFVRnZRaXhSUVVGd1FpeFhRVUZ2UWp0QlFVRkJMRmxCUVZJc1NVRkJVU3hSUVVGU0xFbEJRVkU3TzBGQlFVRTdPMEZCUVVFc2EwaEJRekZFTEVsQlJEQkVMRVZCUTNCRUxFTkJSRzlFTEVWQlEycEVMRU5CUkdsRUxFVkJRemxETEV0QlJEaERMRVZCUTNaRExFdEJSSFZET3p0QlFVZG9SU3hqUVVGTExFbEJRVXdzUjBGQldTeEpRVUZhT3p0QlFVVkJMR05CUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUTBGQmEwSXNSMEZCYkVJN08wRkJSVUU3UVVGRFFTeGpRVUZMTEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1kwRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4SlFVRnFRanRCUVVOQkxHTkJRVXNzVFVGQlRDeEhRVUZqTEUxQlFXUTdRVUZEUVN4alFVRkxMRk5CUVV3c1IwRkJhVUlzVFVGQmFrSTdPMEZCUjBFN1FVRkRRU3hqUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRTFCUVd4Q0xFTkJRWGxDTEUxQlFYcENPMEZCUTBFc1kwRkJTeXhKUVVGTUxFTkJRVlVzYTBKQlFWWXNSMEZCSzBJc1NVRkJMMEk3UVVGRFFTeGpRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFTkJRV3hDTEVkQlFYTkNMRWRCUVhSQ08wRkJRMEVzWTBGQlN5eEpRVUZNTEVOQlFWVXNUVUZCVml4RFFVRnBRaXhIUVVGcVFpeERRVUZ4UWl4RFFVRnlRanM3UVVGRlFTeGpRVUZMTEZWQlFVd3NRMEZCWjBJc1IwRkJhRUlzUTBGQmIwSXNWVUZCY0VJc1JVRkJaME1zUTBGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2l4RlFVRlBMRU5CUVZBc1JVRkJWU3hEUVVGV0xFVkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhGUVVGdFFpeERRVUZ1UWl4RlFVRnpRaXhEUVVGMFFpeEZRVUY1UWl4RFFVRjZRaXhGUVVFMFFpeERRVUUxUWl4RlFVRXJRaXhGUVVFdlFpeEZRVUZ0UXl4RlFVRnVReXhGUVVGMVF5eEZRVUYyUXl4RlFVRXlReXhGUVVFelF5eEZRVUVyUXl4RlFVRXZReXhEUVVGb1F5eEZRVUZ2Uml4RlFVRndSaXhGUVVGM1JpeEpRVUY0Ump0QlFVTkJMR05CUVVzc1NVRkJUQ3hEUVVGVkxGVkJRVlk3TzBGQlJVRXNZMEZCU3l4UFFVRk1MRWRCUVdVc1RVRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEV0QlFXUXNSVUZCWmp0QlFVTkJMR05CUVVzc1QwRkJUQ3hEUVVGaExGVkJRV0lzUjBGQk1FSXNTVUZCTVVJN1FVRkRRU3hqUVVGTExGZEJRVXdzUjBGQmJVSXNWMEZCYmtJN08wRkJSVUVzWTBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eExRVUZrTEVOQlFXOUNMRmRCUVhCQ0xFTkJRV3BDT3p0QlFUTkNaMFU3UVVFMlFtNUZPenM3TzJsRFFVVlJPenRCUVVWTUxHZENRVUZKTEV0QlFVc3NVVUZCVEN4RFFVRmpMRU5CUVdRc1IwRkJhMElzVDBGQlR5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRVGRETEVWQlFXOUVPMEZCUTJoRUxIRkNRVUZMTEZGQlFVd3NRMEZCWXl4RFFVRmtMRWRCUVd0Q0xFOUJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhMUVVGMlFpeEhRVUVyUWl4RFFVRnFSRHRCUVVOQkxIRkNRVUZMTEVsQlFVd3NRMEZCVlN4UlFVRldMRU5CUVcxQ0xFTkJRVzVDTEVsQlFYZENMRU5CUVVNc1EwRkJla0k3UVVGRFNDeGhRVWhFTEUxQlNVc3NTVUZCU1N4TFFVRkxMRkZCUVV3c1EwRkJZeXhEUVVGa0xFZEJRV3RDTEU5QlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUUzUXl4RlFVRnZSRHRCUVVOeVJDeHhRa0ZCU3l4UlFVRk1MRU5CUVdNc1EwRkJaQ3hIUVVGclFpeFBRVUZQTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQmRrSXNSMEZCSzBJc1EwRkJha1E3UVVGRFFTeHhRa0ZCU3l4SlFVRk1MRU5CUVZVc1VVRkJWaXhEUVVGdFFpeERRVUZ1UWl4SlFVRjNRaXhEUVVGRExFTkJRWHBDTzBGQlEwZzdPMEZCUlVRc1owSkJRVWtzUzBGQlN5eFJRVUZNTEVOQlFXTXNRMEZCWkN4SFFVRnJRaXhMUVVGTExFMUJRVXdzUjBGQll5eERRVUZvUXl4SFFVRnZReXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTFCUVhoRUxFVkJRV2RGTzBGQlF6VkVMSEZDUVVGTExFbEJRVXc3UVVGRFNEdEJRVU5LT3pzN0swSkJTVTBzVFN4RlFVRlJPMEZCUTFnc2FVaEJRV0VzVFVGQllqdEJRVU5JT3pzN2NVTkJSVEpETzBGQlFVRXNaMEpCUVhCRExFTkJRVzlETEZOQlFYQkRMRU5CUVc5RE8wRkJRVUVzWjBKQlFXcERMRU5CUVdsRExGTkJRV3BETEVOQlFXbERPMEZCUVVFc1owSkJRVGxDTEUxQlFUaENMRk5CUVRsQ0xFMUJRVGhDTzBGQlFVRXNaMEpCUVhSQ0xGZEJRWE5DTEZOQlFYUkNMRmRCUVhOQ08wRkJRVUVzWjBKQlFWUXNTMEZCVXl4VFFVRlVMRXRCUVZNN08wRkJRM2hETEdkSVFVRlpMRU5CUVZvc1JVRkJaU3hEUVVGbUxFVkJRV3RDTEUxQlFXeENPMEZCUTBFc2FVSkJRVXNzVjBGQlRDeEhRVUZ0UWl4WFFVRnVRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UlFVRldMRU5CUVcxQ0xFTkJRVzVDTEVkQlFYVkNMRTFCUVUwc1EwRkJOMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1VVRkJWaXhEUVVGdFFpeERRVUZ1UWl4SFFVRjFRaXhOUVVGTkxFTkJRVGRDTzBGQlEwZzdPenM3UlVFMVJEaENMRTlCUVU4c1RUczdhMEpCUVhKQ0xFczdPenM3T3pzN096czdPMEZEUm5KQ096czdPenM3T3pzN096czdTVUZEY1VJc1J6czdPMEZCUTJwQ0xIVkNRVUU0UWp0QlFVRkJMRmxCUVdoQ0xFbEJRV2RDTEZGQlFXaENMRWxCUVdkQ08wRkJRVUVzV1VGQlZpeE5RVUZWTEZGQlFWWXNUVUZCVlRzN1FVRkJRVHM3UVVGQlFTdzRSMEZEY0VJc1NVRkViMEk3TzBGQlJURkNMR05CUVVzc1NVRkJUQ3hIUVVGWkxFbEJRVm83UVVGRFFTeGpRVUZMTEUxQlFVd3NSMEZCWXl4TlFVRmtPMEZCUTBFc1kwRkJTeXhGUVVGTUxFZEJRVlVzU1VGQlNTeFBRVUZQTEV0QlFWZ3NRMEZCYVVJc1RVRkJTeXhKUVVGMFFpeEZRVUUwUWl4RFFVRTFRaXhGUVVFclFpeERRVUV2UWl4RlFVRnJReXhQUVVGc1F5eERRVUZXTzBGQlEwRXNZMEZCU3l4TFFVRk1MRWRCUVdFc1IwRkJZanRCUVVOQkxHTkJRVXNzVTBGQlRDeEhRVUZwUWl4SlFVRkpMRTlCUVU4c1RVRkJXQ3hEUVVGclFpeE5RVUZMTEVsQlFYWkNMRVZCUVRaQ0xFTkJRVGRDTEVWQlFXZERMRU5CUVdoRExFVkJRVzFETEZkQlFXNURMRU5CUVdwQ08wRkJRMEVzWTBGQlN5eFRRVUZNTEVOQlFXVXNTMEZCWml4RFFVRnhRaXhMUVVGeVFpeERRVUV5UWl4TFFVRXpRaXhGUVVGclF5eEZRVUZzUXpzN1FVRkZRU3hqUVVGTExFdEJRVXdzUjBGQllTeERRVUZpTzBGQlEwRXNZMEZCU3l4VlFVRk1MRWRCUVd0Q0xGTkJRV3hDTzBGQlEwRXNZMEZCU3l4VFFVRk1MRWRCUVdsQ0xFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRTFCUVVzc1NVRkJja0lzUlVGQk1rSXNSVUZCTTBJc1JVRkJLMElzUlVGQkwwSXNSVUZCYlVNc1RVRkJTeXhWUVVGTUxFZEJRV3RDTEUxQlFVc3NTMEZCTVVRc1JVRkJhVVU3UVVGRE9VVXNhMEpCUVUwc1kwRkVkMFU3UVVGRk9VVXNhMEpCUVUwc1QwRkdkMFU3UVVGSE9VVXNiVUpCUVU4N08wRkJTSFZGTEZOQlFXcEZMRU5CUVdwQ096dEJRVTlCTEdOQlFVc3NSMEZCVEN4RFFVRlRMRTFCUVVzc1JVRkJaRHRCUVVOQkxHTkJRVXNzUjBGQlRDeERRVUZUTEUxQlFVc3NVMEZCWkR0QlFVTkJMR05CUVVzc1IwRkJUQ3hEUVVGVExFMUJRVXNzVTBGQlpEdEJRWEJDTUVJN1FVRnhRamRDT3pzN08zRkRRVVZaTEUwc1JVRkJVVHRCUVVOcVFpeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1NVRkJaaXhEUVVGdlFpeEpRVUZKTEU5QlFVOHNVMEZCV0N4RFFVRnhRaXhEUVVGeVFpeEZRVUYzUWl4RFFVRjRRaXhGUVVFMFFpeExRVUZMTEUxQlFVd3NRMEZCV1N4TlFVRmFMRWRCUVhGQ0xFdEJRVXNzVFVGQlRDeERRVUZaTEZOQlFXeERMRWRCUVN0RExFdEJRVXNzUzBGQkwwVXNSVUZCYzBZc1JVRkJkRVlzUTBGQmNFSTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzVlVGQlpqdEJRVU5JT3pzN2IwTkJSVmNzVFN4RlFVRlJPMEZCUTJoQ0xHbENRVUZMTEV0QlFVd3NTVUZCWXl4TlFVRmtPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEVsQlFXWXNSMEZCYzBJc1MwRkJTeXhWUVVGTUxFZEJRVzFDTEV0QlFVc3NTMEZCVEN4SFFVRmhMRVZCUVhSRU8wRkJRMGc3T3pzN1JVRm9RelJDTEU5QlFVOHNTenM3YTBKQlFXNUNMRWM3UVVGclEzQkNPenM3T3pzN096czdPenM3TzBGRGJrTkVPenM3T3pzN096czdPenM3U1VGRmNVSXNUVHM3TzBGQlJXcENMREJDUVVGclJEdEJRVUZCTEZsQlFYQkRMRWxCUVc5RExGRkJRWEJETEVsQlFXOURPMEZCUVVFc1dVRkJPVUlzUTBGQk9FSXNVVUZCT1VJc1EwRkJPRUk3UVVGQlFTeFpRVUV6UWl4RFFVRXlRaXhSUVVFelFpeERRVUV5UWp0QlFVRkJMRmxCUVhoQ0xFdEJRWGRDTEZGQlFYaENMRXRCUVhkQ08wRkJRVUVzV1VGQmFrSXNTMEZCYVVJc1VVRkJha0lzUzBGQmFVSTdRVUZCUVN4WlFVRldMRTFCUVZVc1VVRkJWaXhOUVVGVk96dEJRVUZCT3p0QlFVRkJMRzlJUVVONFF5eEpRVVIzUXl4RlFVTnNReXhEUVVSclF5eEZRVU12UWl4RFFVUXJRaXhGUVVNMVFpeExRVVEwUWl4RlFVTnlRaXhMUVVSeFFqczdRVUZIT1VNc1kwRkJTeXhKUVVGTUxFZEJRVmtzU1VGQldqczdRVUZGUVN4alFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGYUxFTkJRV3RDTEVkQlFXeENPMEZCUTBFc1kwRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4SFFVRnFRanM3UVVGRlFTeGpRVUZMTEUxQlFVd3NSMEZCWXl4TlFVRmtPMEZCUTBFc1kwRkJTeXhUUVVGTUxFZEJRV2xDTEUxQlFXcENPenRCUVVsQkxHTkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1RVRkJiRUlzUTBGQmVVSXNUVUZCZWtJN1FVRkRRVHRCUVVOQkxHTkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNSMEZCZEVJN1FVRkRRU3hqUVVGTExFbEJRVXdzUTBGQlZTeHJRa0ZCVml4SFFVRXJRaXhKUVVFdlFqdEJRVU5CT3p0QlFVVkJMR05CUVVzc1QwRkJUQ3hIUVVGbExFMUJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4TFFVRmtMRVZCUVdZN1FVRkRRU3hqUVVGTExFOUJRVXdzUTBGQllTeFZRVUZpTEVkQlFUQkNMRWxCUVRGQ08wRkJRMEVzWTBGQlN5eFhRVUZNTEVkQlFXMUNMRU5CUVVNc1IwRkJjRUk3TzBGQlJVRXNZMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4TFFVRmtMRU5CUVc5Q0xGbEJRWEJDTEVOQlFXcENPMEZCZGtJNFF6dEJRWGRDYWtRN096czdhVU5CUlZFN08wRkJSVXc3T3p0QlFVbEJPenRCUVVWSkxHZENRVUZKTEZWQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RFFVRjVRaXhOUVVGNlFpeERRVUZuUXl4UFFVRlBMRkZCUVZBc1EwRkJaMElzU1VGQmFFUXNRMEZCWkR0QlFVTkJMR2RDUVVGSkxGZEJRVmNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhSUVVGb1FpeERRVUY1UWl4TlFVRjZRaXhEUVVGblF5eFBRVUZQTEZGQlFWQXNRMEZCWjBJc1MwRkJhRVFzUTBGQlpqdEJRVU5CTEdkQ1FVRkhMRTlCUVVnc1JVRkJWenRCUVVOUUxIRkNRVUZMTEVOQlFVd3NTVUZCVlN4RFFVRldPMEZCUlVnc1lVRklSQ3hOUVVsTExFbEJRVWNzVVVGQlNDeEZRVUZaTzBGQlEySXNjVUpCUVVzc1EwRkJUQ3hKUVVGVkxFTkJRVlk3UVVGRlNEdEJRVVZTT3pzN1owTkJSVTg3TzBGQlJVb3NaMEpCUVVrc1UwRkJVeXhMUVVGTExFOUJRVXdzUTBGQllTeGpRVUZpTEVOQlFUUkNMRXRCUVRWQ0xFTkJRV0k3TzBGQlJVRXNaMEpCUVVrc1EwRkJReXhOUVVGTUxFVkJRV0U3UVVGRFZDeDVRa0ZCVXl4eFFrRkJWenRCUVVOb1Fpd3dRa0ZCVFN4TFFVRkxMRWxCUkVzN1FVRkZhRUlzZFVKQlFVY3NTMEZCU3l4RFFVWlJPMEZCUjJoQ0xIVkNRVUZITEV0QlFVc3NSMEZJVVR0QlFVbG9RanRCUVVOQkxEUkNRVUZSTEVOQlRGRTdRVUZOYUVJc01rSkJRVThzVVVGT1V6dEJRVTlvUWl3d1FrRkJUVHRCUVZCVkxHbENRVUZZTEVOQlFWUTdRVUZUUVR0QlFVTkJMRzlDUVVGSExFdEJRVXNzVDBGQlRDeERRVUZoTEZGQlFXSXNRMEZCYzBJc1RVRkJkRUlzU1VGQlowTXNRMEZCYmtNc1JVRkJjVU03UVVGRGFrTXNlVUpCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUTBGQmIwSXNSVUZCY0VJc1JVRkJkVUlzUTBGQmRrSXNSVUZCZVVJc1IwRkJla0k3UVVGRFFTeDVRa0ZCU3l4UFFVRk1MRU5CUVdFc1IwRkJZaXhEUVVGcFFpeE5RVUZxUWpzN1FVRkZRU3d5UWtGQlR5eEpRVUZRTEVOQlFWa3NVVUZCV2l4RFFVRnhRaXhEUVVGeVFpeEhRVUY1UWl4TFFVRkxMRmRCUVRsQ08wRkJRMGc3UVVGRFNpeGhRV3BDUkN4TlFXdENTenRCUVVORUxIRkNRVUZMTEZOQlFVd3NRMEZCWlN4SlFVRm1MRU5CUVc5Q0xFVkJRWEJDTEVWQlFYVkNMRU5CUVhaQ0xFVkJRWGxDTEVkQlFYcENPMEZCUTBFc2RVSkJRVThzUzBGQlVDeERRVUZoTEV0QlFVc3NRMEZCYkVJc1JVRkJjVUlzUzBGQlN5eEhRVUV4UWl4RlFVRXJRaXhEUVVFdlFqdEJRVU5CTEhWQ1FVRlBMRWxCUVZBc1EwRkJXU3hSUVVGYUxFTkJRWEZDTEVOQlFYSkNMRWRCUVhsQ0xFdEJRVXNzVjBGQk9VSTdRVUZEU0R0QlFVZEtPenM3SzBKQlJVMHNUU3hGUVVGUk8wRkJRMWdzYlVoQlFXRXNUVUZCWWp0QlFVTklPenM3TzBWQmJFWXJRaXhQUVVGUExFMDdPMnRDUVVGMFFpeE5PenM3T3pzN096czdPenM3T3pzN096dEpRMFpCTEVrN096czdPenM3T3pzN08ydERRVVZRTzBGQlEwNHNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNaVUZCYUVJc1IwRkJhME1zVFVGQmJFTTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhGUVVFMFFpeHRRa0ZCTlVJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhYUVVGb1FpeEZRVUUyUWl4dlFrRkJOMEk3UVVGRFNEczdPMmxEUVVWUk8wRkJRMHdzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRk5CUVZnc1IwRkJkVUlzVDBGQlR5eFpRVUZRTEVOQlFXOUNMRkZCUVRORE96dEJRVVZCTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXh4UWtGQldDeEhRVUZ0UXl4SlFVRnVRenRCUVVOQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4dFFrRkJXQ3hIUVVGcFF5eEpRVUZxUXpzN1FVRkZRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhYUVVGc1FpeERRVUU0UWl4UFFVRlBMRTlCUVZBc1EwRkJaU3hOUVVFM1F6dEJRVU5CTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEZOQlFXcENPMEZCUTBnN096czdSVUZvUWpaQ0xFOUJRVThzU3pzN2EwSkJRWEJDTEVrN096czdPenM3T3pzN096czdPM2xEUTBGaUxFODdPenM3T3pzN096czBRMEZEUVN4UE96czdPenM3T3pzN2VVTkJRMEVzVHpzN096czdPenM3TzNsRFFVVkJMRTg3T3pzN096czdPenQ1UTBGRFFTeFBPenM3T3pzN096czdOa05CUjBFc1R6czdPenM3T3pzN096WkRRVU5CTEU4N096czdPenM3T3pzNFEwRkhRU3hQT3pzN096czdPenM3T0VOQlEwRXNUenM3T3pzN096czdPenM3T3pzN08wRkRZbEk3T3pzN096czdPenM3T3p0SlFVVnhRaXhKT3pzN096czdPenM3T3p0cFEwRkZVanRCUVVGQk96dEJRVU5NTEdsQ1FVRkxMRXRCUVV3c1IwRkJZU3hKUVVGSkxFOUJRVThzU1VGQldDeERRVUZuUWl4TFFVRkxMRWxCUVhKQ0xFVkJRVEpDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQk0wTXNSVUZCYjBRc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhIUVVGM1FpeEhRVUUxUlN4RlFVRnBSaXhuUWtGQmFrWXNSVUZCYlVjN1FVRkROVWNzYzBKQlFVMHNZVUZFYzBjN1FVRkZOVWNzYzBKQlFVMHNUMEZHYzBjN1FVRkhOVWNzZFVKQlFVODdRVUZJY1Vjc1lVRkJia2NzUTBGQllqdEJRVXRCTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhOUVVGWUxFTkJRV3RDTEV0QlFXeENMRU5CUVhkQ0xFZEJRWGhDTzBGQlEwRTdPenRCUVVkQkxHbENRVUZMTEU5QlFVd3NSMEZCWlN4NVFrRkJaVHRCUVVNeFFpeHpRa0ZCVFN4TFFVRkxMRWxCUkdVN1FVRkZNVUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4SFFVRXdRaXhIUVVaSU8wRkJSekZDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZJVHp0QlFVa3hRaXgxUWtGQlR5eFJRVXB0UWp0QlFVc3hRaXd5UWtGQlZ5eERRVXhsTzBGQlRURkNMREJDUVVGVkxFTkJUbWRDTzBGQlR6RkNMREpDUVVGWExFTkJVR1U3UVVGUk1VSXNlVUpCUVZNc1EwRlNhVUk3UVVGVE1VSXNkVUpCUVU4c1UwRlViVUk3UVVGVk1VSXNkVUpCUVU4N1FVRkRTQ3d3UWtGQlRTeGpRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXYlVJc1lVRkJaaXhEUVVGbU96dEJRV2xDUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDTzBGQlEwRXNhVUpCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1UwRkJaaXhEUVVGdVFqdEJRVU5CTEdsQ1FVRkxMRmxCUVV3c1IwRkJiMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRlZCUVdZc1EwRkJjRUk3TzBGQlJVRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGbEJRV0lzUTBGQk1FSXNTMEZCU3l4WlFVRXZRanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4WFFVRmlMRU5CUVhsQ0xFdEJRVXNzVjBGQk9VSTdRVUZEUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWl4TFFVRkxMRmxCUVM5Q096dEJRVVZCTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3hUUVVGaUxFTkJRWFZDTEVkQlFYWkNMRU5CUVRKQ0xGbEJRVWs3UVVGRE0wSTdRVUZEUVN4MVFrRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4WFFVRnFRanRCUVVWSUxHRkJTa1E3TzBGQlVVRTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFZEJRV0VzZVVKQlFXVTdRVUZEZUVJc2MwSkJRVTBzUzBGQlN5eEpRVVJoTzBGQlJYaENMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdTenRCUVVkNFFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlNFczdRVUZKZUVJc2RVSkJRVThzVVVGS2FVSTdRVUZMZUVJc01rSkJRVmNzUTBGTVlUdEJRVTE0UWl3d1FrRkJWU3hEUVU1ak8wRkJUM2hDTERKQ1FVRlhMRU5CVUdFN1FVRlJlRUlzZVVKQlFWTXNRMEZTWlR0QlFWTjRRaXgxUWtGQlR5eFBRVlJwUWp0QlFWVjRRaXgxUWtGQlR6dEJRVU5JTERCQ1FVRk5MR05CUkVnN1FVRkZTQ3d3UWtGQlRTeFBRVVpJTzBGQlIwZ3NNa0pCUVU4N1FVRklTanRCUVZacFFpeGhRVUZtTEVOQlFXSTdPMEZCYVVKQkxHbENRVUZMTEZsQlFVd3NSMEZCYjBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZWQlFXWXNRMEZCY0VJN1FVRkRRU3hwUWtGQlN5eFhRVUZNTEVkQlFXMUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFRRVUZtTEVOQlFXNUNPMEZCUTBFc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeERRVUZ3UWpzN1FVRkZRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NXVUZCV0N4RFFVRjNRaXhMUVVGTExGbEJRVGRDTzBGQlEwRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExGZEJRVmdzUTBGQmRVSXNTMEZCU3l4WFFVRTFRanRCUVVOQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WlFVRllMRU5CUVhkQ0xFdEJRVXNzV1VGQk4wSTdPMEZCUlVFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZOQlFWZ3NRMEZCY1VJc1IwRkJja0lzUTBGQmVVSXNXVUZCU1R0QlFVTjZRanRCUVVOQkxIVkNRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFMUJRV3BDTzBGQlJVZ3NZVUZLUkR0QlFVdEJPMEZCUTBFc2FVSkJRVXNzVDBGQlRDeEhRVUZsTEhsQ1FVRmxPMEZCUXpGQ0xITkNRVUZOTEV0QlFVc3NTVUZFWlR0QlFVVXhRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFUQkNMRWRCUmtnN1FVRkhNVUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVWhQTzBGQlNURkNMSFZDUVVGUExGRkJTbTFDTzBGQlN6RkNMREpDUVVGWExFTkJUR1U3UVVGTk1VSXNNRUpCUVZVc1EwRk9aMEk3UVVGUE1VSXNNa0pCUVZjc1EwRlFaVHRCUVZFeFFpeDVRa0ZCVXl4RFFWSnBRanRCUVZNeFFpeDFRa0ZCVHl4WlFWUnRRanRCUVZVeFFpeDFRa0ZCVHp0QlFVTklMREJDUVVGTkxHTkJSRWc3UVVGRlNDd3dRa0ZCVFN4UFFVWklPMEZCUjBnc01rSkJRVTg3UVVGSVNqdEJRVlp0UWl4aFFVRm1MRU5CUVdZN08wRkJhVUpCTEdsQ1FVRkxMRmxCUVV3c1IwRkJiMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRlZCUVdZc1EwRkJjRUk3UVVGRFFTeHBRa0ZCU3l4WFFVRk1MRWRCUVcxQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4VFFVRm1MRU5CUVc1Q08wRkJRMEVzYVVKQlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNWVUZCWml4RFFVRndRanM3UVVGRlFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1dVRkJZaXhEUVVFd1FpeExRVUZMTEZsQlFTOUNPMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEZkQlFXSXNRMEZCZVVJc1MwRkJTeXhYUVVFNVFqdEJRVU5CTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3haUVVGaUxFTkJRVEJDTEV0QlFVc3NXVUZCTDBJN08wRkJSVUVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRk5CUVdJc1EwRkJkVUlzUjBGQmRrSXNRMEZCTWtJc1dVRkJTVHRCUVVNelFqdEJRVU5CTEhWQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEZWQlFXcENPMEZCUjBnc1lVRk1SRHM3UVVGVFFTeHBRa0ZCU3l4VFFVRk1MRWRCUVdsQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZCYWtJN1FVRkRRU3hwUWtGQlN5eFRRVUZNTEVOQlFXVXNSMEZCWml4RFFVRnRRaXhMUVVGTExFdEJRWGhDTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFZEJRV1lzUTBGQmJVSXNTMEZCU3l4UFFVRjRRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4SFFVRm1MRU5CUVcxQ0xFdEJRVXNzUzBGQmVFSTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzUjBGQlppeERRVUZ0UWl4TFFVRkxMRTlCUVhoQ096dEJRVVZCTzBGQlEwZzdPenM3UlVGMFNEWkNMRTlCUVU4c1N6czdhMEpCUVhCQ0xFazdPenM3T3pzN096czdPMEZEUm5KQ096czdPenM3T3pzN096czdTVUZGY1VJc1NUczdPenM3T3pzN096czdhVU5CUlZJN1FVRkJRVHM3UVVGRlRDeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRXRCUVVzc1NVRkJja0lzUlVGQk1rSXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUV6UXl4RlFVRnZSQ3hMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoQ0xFZEJRWGRDTEVkQlFUVkZMRVZCUVdsR0xGZEJRV3BHTEVWQlFUaEdPMEZCUXk5SExITkNRVUZOTEdGQlJIbEhPMEZCUlM5SExITkNRVUZOTEU5QlJubEhPMEZCUnk5SExIVkNRVUZQTzBGQlNIZEhMR0ZCUVRsR0xFTkJRWEpDTzBGQlMwRXNhVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeE5RVUZ1UWl4RFFVRXdRaXhMUVVFeFFpeERRVUZuUXl4SFFVRm9RenM3UVVGRlFTeHBRa0ZCU3l4TFFVRk1MRWRCUVdFc2VVSkJRV1U3UVVGRGVFSXNjMEpCUVUwc1MwRkJTeXhKUVVSaE8wRkJSWGhDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZHU3p0QlFVZDRRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFYZENMRVZCU0VnN1FVRkplRUlzZFVKQlFVOHNVVUZLYVVJN1FVRkxlRUlzTWtKQlFWY3NRMEZNWVR0QlFVMTRRaXd3UWtGQlZTeERRVTVqTzBGQlQzaENMREpDUVVGWExFTkJVR0U3UVVGUmVFSXNlVUpCUVZNc1EwRlNaVHRCUVZONFFpeDFRa0ZCVHl4WFFWUnBRanRCUVZWNFFpeDFRa0ZCVHp0QlFVTklMREJDUVVGTkxHTkJSRWc3UVVGRlNDd3dRa0ZCVFN4UFFVWklPMEZCUjBnc01rSkJRVTg3UVVGSVNqdEJRVlpwUWl4aFFVRm1MRU5CUVdJN08wRkJhVUpCTEdsQ1FVRkxMRWxCUVV3c1IwRkJXU3g1UWtGQlpUdEJRVU4yUWl4elFrRkJUU3hMUVVGTExFbEJSRms3UVVGRmRrSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVWkpPMEZCUjNaQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFSXNSMEZCZDBJc1JVRklTanRCUVVsMlFpeDFRa0ZCVHl4UlFVcG5RanRCUVV0MlFpd3lRa0ZCVnl4RFFVeFpPMEZCVFhaQ0xEQkNRVUZWTEVOQlRtRTdRVUZQZGtJc01rSkJRVmNzUTBGUVdUdEJRVkYyUWl4NVFrRkJVeXhEUVZKak8wRkJVM1pDTEhWQ1FVRlBMRTFCVkdkQ08wRkJWWFpDTEhWQ1FVRlBPMEZCUTBnc01FSkJRVTBzWTBGRVNEdEJRVVZJTERCQ1FVRk5MRTlCUmtnN1FVRkhTQ3d5UWtGQlR6dEJRVWhLTzBGQlZtZENMR0ZCUVdZc1EwRkJXanM3UVVGcFFrRXNhVUpCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGd1FqdEJRVU5CTEdsQ1FVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRk5CUVdZc1EwRkJia0k3UVVGRFFTeHBRa0ZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4VlFVRm1MRU5CUVhCQ096dEJRVVZCTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhaUVVGWUxFTkJRWGRDTEV0QlFVc3NXVUZCTjBJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NWMEZCV0N4RFFVRjFRaXhMUVVGTExGZEJRVFZDTzBGQlEwRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExGbEJRVmdzUTBGQmQwSXNTMEZCU3l4WlFVRTNRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4WlFVRldMRU5CUVhWQ0xFdEJRVXNzV1VGQk5VSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzVjBGQlZpeERRVUZ6UWl4TFFVRkxMRmRCUVROQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRmxCUVZZc1EwRkJkVUlzUzBGQlN5eFpRVUUxUWpzN1FVRkZRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NWMEZCV0N4RFFVRjFRaXhIUVVGMlFpeERRVUV5UWl4WlFVRkpPMEZCUXpOQ0xIVkNRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFMUJRV3BDTzBGQlEwZ3NZVUZHUkRzN1FVRkpRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNWMEZCVml4RFFVRnpRaXhIUVVGMFFpeERRVUV3UWl4WlFVRkpPMEZCUXpGQ0xIVkNRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFMUJRV3BDTzBGQlEwZ3NZVUZHUkRzN1FVRkpRU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUlVGQmNrSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVhWQ0xFdEJRVXNzWVVGQk5VSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVhWQ0xFdEJRVXNzUzBGQk5VSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVhWQ0xFdEJRVXNzU1VGQk5VSTdRVUZEU0RzN096dEZRWEJGTmtJc1QwRkJUeXhMT3p0clFrRkJjRUlzU1RzN096czdPenM3T3pzN1FVTkdja0k3T3pzN096czdPenM3T3p0SlFVVnhRaXhST3pzN096czdPenM3T3p0cFEwRkZVanRCUVVGQk96dEJRVVZNTEdsQ1FVRkxMR0ZCUVV3c1IwRkJjVUlzU1VGQlNTeFBRVUZQTEVsQlFWZ3NRMEZCWjBJc1MwRkJTeXhKUVVGeVFpeEZRVUV5UWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFUTkRMRVZCUVc5RUxFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQmQwSXNSMEZCTlVVc1JVRkJhVVlzWjBKQlFXcEdMRVZCUVcxSE8wRkJRM0JJTEhOQ1FVRk5MR0ZCUkRoSE8wRkJSWEJJTEhOQ1FVRk5MRTlCUmpoSE8wRkJSM0JJTEhWQ1FVRlBPMEZCU0RaSExHRkJRVzVITEVOQlFYSkNPMEZCUzBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4TlFVRnVRaXhEUVVFd1FpeExRVUV4UWl4RFFVRm5ReXhIUVVGb1F6czdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFZEJRV0VzZVVKQlFXVTdRVUZEZUVJc2MwSkJRVTBzUzBGQlN5eEpRVVJoTzBGQlJYaENMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdTenRCUVVkNFFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFXaENMRWRCUVhkQ0xFVkJTRWc3UVVGSmVFSXNkVUpCUVU4c1VVRkthVUk3UVVGTGVFSXNNa0pCUVZjc1EwRk1ZVHRCUVUxNFFpd3dRa0ZCVlN4RFFVNWpPMEZCVDNoQ0xESkNRVUZYTEVOQlVHRTdRVUZSZUVJc2VVSkJRVk1zUTBGU1pUdEJRVk40UWl4MVFrRkJUeXhYUVZScFFqdEJRVlY0UWl4MVFrRkJUenRCUVVOSUxEQkNRVUZOTEdOQlJFZzdRVUZGU0N3d1FrRkJUU3hQUVVaSU8wRkJSMGdzTWtKQlFVODdRVUZJU2p0QlFWWnBRaXhoUVVGbUxFTkJRV0k3TzBGQmFVSkJMR2xDUVVGTExFbEJRVXdzUjBGQldTeDVRa0ZCWlR0QlFVTjJRaXh6UWtGQlRTeExRVUZMTEVsQlJGazdRVUZGZGtJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaSk8wRkJSM1pDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCYUVJc1IwRkJkMElzUlVGSVNqdEJRVWwyUWl4MVFrRkJUeXhSUVVwblFqdEJRVXQyUWl3eVFrRkJWeXhEUVV4Wk8wRkJUWFpDTERCQ1FVRlZMRU5CVG1FN1FVRlBka0lzTWtKQlFWY3NRMEZRV1R0QlFWRjJRaXg1UWtGQlV5eERRVkpqTzBGQlUzWkNMSFZDUVVGUExFMUJWR2RDTzBGQlZYWkNMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNZMEZFU0R0QlFVVklMREJDUVVGTkxFOUJSa2c3UVVGSFNDd3lRa0ZCVHp0QlFVaEtPMEZCVm1kQ0xHRkJRV1lzUTBGQldqczdRVUZwUWtFc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeERRVUZ3UWp0QlFVTkJMR2xDUVVGTExGZEJRVXdzUjBGQmJVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGTkJRV1lzUTBGQmJrSTdRVUZEUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDT3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFpRVUZZTEVOQlFYZENMRXRCUVVzc1dVRkJOMEk3UVVGRFFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1YwRkJXQ3hEUVVGMVFpeExRVUZMTEZkQlFUVkNPMEZCUTBFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZsQlFWZ3NRMEZCZDBJc1MwRkJTeXhaUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3haUVVGV0xFTkJRWFZDTEV0QlFVc3NXVUZCTlVJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNWMEZCVml4RFFVRnpRaXhMUVVGTExGZEJRVE5DTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxGbEJRVllzUTBGQmRVSXNTMEZCU3l4WlFVRTFRanM3UVVGRlFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1YwRkJXQ3hEUVVGMVFpeEhRVUYyUWl4RFFVRXlRaXhaUVVGSk8wRkJRek5DTEhWQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEZWQlFXcENPMEZCUTBnc1lVRkdSRHM3UVVGSlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1YwRkJWaXhEUVVGelFpeEhRVUYwUWl4RFFVRXdRaXhaUVVGSk8wRkJRekZDTEhWQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEUxQlFXcENPMEZCUTBnc1lVRkdSRHM3UVVGSlFTeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZCY2tJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEV0QlFVc3NZVUZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEV0QlFVc3NTMEZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEV0QlFVc3NTVUZCTlVJN1FVRkRTRHM3T3p0RlFYQkZhVU1zVDBGQlR5eExPenRyUWtGQmVFSXNVVHM3T3pzN096czdPenM3UVVOR2NrSTdPenM3T3pzN096czdPenRKUVVWeFFpeFJPenM3T3pzN096czdPenRwUTBGRlVqdEJRVUZCT3p0QlFVVk1MR2xDUVVGTExHRkJRVXdzUjBGQmNVSXNTVUZCU1N4UFFVRlBMRWxCUVZnc1EwRkJaMElzUzBGQlN5eEpRVUZ5UWl4RlFVRXlRaXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVRORExFVkJRVzlFTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFSXNSMEZCZDBJc1IwRkJOVVVzUlVGQmFVWXNaMEpCUVdwR0xFVkJRVzFITzBGQlEzQklMSE5DUVVGTkxHRkJSRGhITzBGQlJYQklMSE5DUVVGTkxFOUJSamhITzBGQlIzQklMSFZDUVVGUE8wRkJTRFpITEdGQlFXNUhMRU5CUVhKQ08wRkJTMEVzYVVKQlFVc3NZVUZCVEN4RFFVRnRRaXhOUVVGdVFpeERRVUV3UWl4TFFVRXhRaXhEUVVGblF5eEhRVUZvUXpzN1FVRkZRU3hwUWtGQlN5eExRVUZNTEVkQlFXRXNlVUpCUVdVN1FVRkRlRUlzYzBKQlFVMHNTMEZCU3l4SlFVUmhPMEZCUlhoQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGR1N6dEJRVWQ0UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoQ0xFZEJRWGRDTEVWQlNFZzdRVUZKZUVJc2RVSkJRVThzVVVGS2FVSTdRVUZMZUVJc01rSkJRVmNzUTBGTVlUdEJRVTE0UWl3d1FrRkJWU3hEUVU1ak8wRkJUM2hDTERKQ1FVRlhMRU5CVUdFN1FVRlJlRUlzZVVKQlFWTXNRMEZTWlR0QlFWTjRRaXgxUWtGQlR5eFhRVlJwUWp0QlFWVjRRaXgxUWtGQlR6dEJRVU5JTERCQ1FVRk5MR05CUkVnN1FVRkZTQ3d3UWtGQlRTeFBRVVpJTzBGQlIwZ3NNa0pCUVU4N1FVRklTanRCUVZacFFpeGhRVUZtTEVOQlFXSTdPMEZCYVVKQkxHbENRVUZMTEVsQlFVd3NSMEZCV1N4NVFrRkJaVHRCUVVOMlFpeHpRa0ZCVFN4TFFVRkxMRWxCUkZrN1FVRkZka0lzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVVpKTzBGQlIzWkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQmQwSXNSVUZJU2p0QlFVbDJRaXgxUWtGQlR5eFJRVXBuUWp0QlFVdDJRaXd5UWtGQlZ5eERRVXhaTzBGQlRYWkNMREJDUVVGVkxFTkJUbUU3UVVGUGRrSXNNa0pCUVZjc1EwRlFXVHRCUVZGMlFpeDVRa0ZCVXl4RFFWSmpPMEZCVTNaQ0xIVkNRVUZQTEUxQlZHZENPMEZCVlhaQ0xIVkNRVUZQTzBGQlEwZ3NNRUpCUVUwc1kwRkVTRHRCUVVWSUxEQkNRVUZOTEU5QlJrZzdRVUZIU0N3eVFrRkJUenRCUVVoS08wRkJWbWRDTEdGQlFXWXNRMEZCV2pzN1FVRnBRa0VzYVVKQlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNWVUZCWml4RFFVRndRanRCUVVOQkxHbENRVUZMTEZkQlFVd3NSMEZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZOQlFXWXNRMEZCYmtJN1FVRkRRU3hwUWtGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYQkNPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WlFVRllMRU5CUVhkQ0xFdEJRVXNzV1VGQk4wSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzVjBGQldDeERRVUYxUWl4TFFVRkxMRmRCUVRWQ08wRkJRMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmxCUVZnc1EwRkJkMElzUzBGQlN5eFpRVUUzUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFpRVUZXTEVOQlFYVkNMRXRCUVVzc1dVRkJOVUk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1YwRkJWaXhEUVVGelFpeExRVUZMTEZkQlFUTkNPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEZsQlFWWXNRMEZCZFVJc1MwRkJTeXhaUVVFMVFqczdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzVjBGQldDeERRVUYxUWl4SFFVRjJRaXhEUVVFeVFpeFpRVUZKTzBGQlF6TkNMSFZDUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRlZCUVdwQ08wRkJRMGdzWVVGR1JEczdRVUZKUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzVjBGQlZpeERRVUZ6UWl4SFFVRjBRaXhEUVVFd1FpeFpRVUZKTzBGQlF6RkNMSFZDUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRTFCUVdwQ08wRkJRMGdzWVVGR1JEczdRVUZKUVN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJja0k3UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFYVkNMRXRCUVVzc1lVRkJOVUk3UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFYVkNMRXRCUVVzc1MwRkJOVUk3UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFYVkNMRXRCUVVzc1NVRkJOVUk3UVVGRFNEczdPenRGUVhCRmFVTXNUMEZCVHl4TE96dHJRa0ZCZUVJc1VUczdPenM3T3pzN096czdRVU5HY2tJN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3T3pzN1NVRkZjVUlzU1RzN096czdPenM3T3pzN2FVTkJSVkk3UVVGQlFUczdRVUZEVER0QlFVTkJMR2xDUVVGTExFOUJRVXdzUjBGQlpTeExRVUZMTEVkQlFVd3NRMEZCVXl4VlFVRlVMRU5CUVc5Q0xFTkJRWEJDTEVWQlFYVkNMRU5CUVhaQ0xFVkJRVEJDTEVkQlFURkNMRVZCUVN0Q0xFbEJRUzlDTEVWQlFYRkRMRk5CUVhKRExFTkJRV1k3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExGVkJRV1lzUjBGQk5FSXNRMEZCTlVJN08wRkJSVUVzYVVKQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUlVGQlpqdEJRVU5CTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3hWUVVGaUxFZEJRVEJDTEVsQlFURkNPenRCUVVWQkxHbENRVUZMTEUxQlFVd3NSMEZCWXl4eFFrRkJWenRCUVVOeVFpeHpRa0ZCVFN4TFFVRkxMRWxCUkZVN1FVRkZja0lzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVVpGTzBGQlIzSkNMRzFDUVVGSExFOUJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhOUVVoTU8wRkJTWEpDTEhkQ1FVRlJMRWRCU21FN1FVRkxja0lzZFVKQlFVOHNZMEZNWXp0QlFVMXlRaXgxUWtGQlR6dEJRVTVqTEdGQlFWZ3NRMEZCWkR0QlFWRkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRkZCUVdoQ0xFTkJRWGxDTEV0QlFVc3NUVUZCT1VJN08wRkJSVUVzYVVKQlFVc3NSMEZCVEN4SFFVRlhMR3RDUVVGUk8wRkJRMllzYzBKQlFVMHNTMEZCU3l4SlFVUkpPMEZCUldZc2QwSkJRVkVzUzBGQlN6dEJRVVpGTEdGQlFWSXNRMEZCV0RzN1FVRkxRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhOUVVGb1FpeERRVUYxUWl4SFFVRjJRaXhEUVVFeVFpeFpRVUZOTzBGQlF6ZENMSFZDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNWVUZCWml4SFFVRTBRaXhEUVVFMVFqdEJRVU5JTEdGQlJrUTdPMEZCU1VFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1NVRkJhRUlzUTBGQmNVSXNSMEZCY2tJc1EwRkJlVUlzV1VGQlRUdEJRVU16UWl4MVFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEZWQlFXWXNSMEZCTkVJc1EwRkJOVUk3UVVGRFNDeGhRVVpFT3p0QlFVbEJMR2xDUVVGTExGTkJRVXdzUjBGQmFVSXNRMEZCYWtJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRWRCUVhKQ08wRkJRMEVzYVVKQlFVc3NZMEZCVEN4SFFVRnpRaXhEUVVGMFFqdEJRVU5CTEdsQ1FVRkxMR3RDUVVGTUxFZEJRVEJDTEVOQlFURkNPMEZCUTBFc2FVSkJRVXNzWlVGQlRDeEhRVUYxUWl4RFFVRjJRanRCUVVOQkxHbENRVUZMTEcxQ1FVRk1MRWRCUVRKQ0xFbEJRVE5DT3p0QlFVVkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNUVUZCWml4RFFVRnpRaXhKUVVGMFFpeERRVUV5UWl4UFFVRlBMRXRCUVZBc1EwRkJZU3hOUVVGaUxFZEJRWE5DTEVWQlFXcEVMRVZCUVhGRUxGbEJRVTA3UVVGRGRrUXNiMEpCUVVjc1QwRkJTeXhoUVVGTUxFZEJRWEZDTEVkQlFYaENMRVZCUVRaQ08wRkJRM3BDTERKQ1FVRkxMR0ZCUVV3c1NVRkJjMElzUjBGQmRFSTdRVUZEU0R0QlFVTktMR0ZCU2tRN08wRkJUVUVzYVVKQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eFZRVUZVTEVOQlFXOUNMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVGxDTEVWQlFYRkRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFMUJRUzlETEVOQlFYSkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeFRRVUYyUWl4SFFVRnRReXhOUVVGdVF6dEJRVU5CTEdsQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNRMEZCZFVJc1VVRkJka0lzUTBGQlowTXNRMEZCYUVNc1JVRkJiVU1zUTBGQmJrTXNSVUZCYzBNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQmFFUXNSVUZCZFVRc1MwRkJTeXhKUVVGTUxFTkJRVlVzVFVGQmFrVTdPMEZCUlVFc2FVSkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NSMEZCVEN4RFFVRlRMRTFCUVZRc1EwRkJaMElzUTBGQmFFSXNSVUZCYlVJc1EwRkJia0lzUlVGQmMwSXNTMEZCU3l4aFFVRXpRaXhEUVVGbU8wRkJRMEVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRTlCUVdJc1IwRkJkVUlzUzBGQmRrSTdRVUZEUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzUzBGQllpeEhRVUZ4UWl4SlFVRnlRanM3UVVGRlJEdEJRVU5ETEdsQ1FVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRmRCUVdZc1EwRkJkRUk3UVVGRFFTeHBRa0ZCU3l4dFFrRkJUQ3hIUVVFeVFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1owSkJRV1lzUTBGQk0wSTdRVUZEUVN4cFFrRkJTeXh2UWtGQlRDeEhRVUUwUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzYVVKQlFXWXNRMEZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYSkNPenRCUVVWQk8wRkJRMGc3T3p0cFEwRkZVVHRCUVVGQk96dEJRVVZNTEdsQ1FVRkxMRk5CUVV3c1NVRkJhMElzUzBGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMR05CUVdwRE8wRkJRMEVzYVVKQlFVc3NZMEZCVEN4SlFVRjFRaXhMUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNZMEZCZEVNN1FVRkRRU3hwUWtGQlN5eGxRVUZNTEVsQlFYZENMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeGpRVUYyUXpzN1FVRkZRU3huUWtGQlNTeExRVUZMTEZOQlFVd3NSMEZCYVVJc1MwRkJTeXhoUVVFeFFpeEZRVUY1UXp0QlFVTnlReXh4UWtGQlN5eFRRVUZNTEVkQlFXbENMRU5CUVdwQ096dEJRVVZCTEhGQ1FVRkxMRmRCUVV3c1EwRkJhVUk3UVVGRFlpd3dRa0ZCVFN4TFFVRkxMRWxCUkVVN1FVRkZZaXgxUWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXl4RlFVWTFRanRCUVVkaUxIVkNRVUZITEVOQlNGVTdRVUZKWWl3eVFrRkJUenRCUVVOSUxESkNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVOQlFUZENMRVZCUVdkRExFVkJRV2hETEVsQlFYTkRMRVZCUVhSRExFbEJRVFJETEV0QlFVc3NUVUZCVEN4TFFVRm5RaXhIUVVGb1FpeEhRVUZ6UWl4RFFVRjBRaXhIUVVFd1FpeERRVUZETEVOQlFYWkZMRU5CUkVFN1FVRkZTQ3d5UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXp0QlFVWjBReXh4UWtGS1RUdEJRVkZpTERSQ1FVRlJMRU5CVWtzN1FVRlRZaXhwUTBGQllTeExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeEZRVUUzUWl4RlFVRnBReXhGUVVGcVF5eEpRVUYxUXl4RlFWUjJRenRCUVZWaUxESkNRVUZQTzBGQlZrMHNhVUpCUVdwQ08wRkJXVWc3TzBGQlJVUXNaMEpCUVVrc1MwRkJTeXhqUVVGTUxFZEJRWE5DTEV0QlFVc3NhMEpCUVM5Q0xFVkJRVzFFTzBGQlF5OURMSEZDUVVGTExHTkJRVXdzUjBGQmMwSXNRMEZCZEVJN1FVRkRRU3h4UWtGQlN5eFBRVUZNTEVOQlFXRXNXVUZCWWl4RFFVRXdRanRCUVVGQkxESkNRVUZUTEUxQlFVMHNTMEZCVGl4RlFVRlVPMEZCUVVFc2FVSkJRVEZDTzBGQlEwRXNiMEpCUVVrc1EwRkJReXhMUVVGTExFMUJRVXdzUTBGQldTeExRVUZxUWl4RlFVRjNRanRCUVVOd1FpeDVRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RFFVRXlRaXhMUVVGTExFOUJRV2hETzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3huUWtGQlNTeExRVUZMTEdWQlFVd3NSMEZCZFVJc1MwRkJTeXh0UWtGQmFFTXNSVUZCY1VRN1FVRkRha1FzY1VKQlFVc3NaVUZCVEN4SFFVRjFRaXhEUVVGMlFqdEJRVU5CTEc5Q1FVRkpMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xIbENRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRmFPMEZCUTBnN1FVRkRTanM3UVVGRlJDeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVGclFpeE5RVUZzUWl4RFFVRjVRaXhQUVVGNlFpeERRVUZwUXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hQUVVFM1F5eEZRVUZ6UkN4TFFVRkxMRTlCUVRORUxFVkJRVzlGTEV0QlFVc3NVVUZCZWtVc1JVRkJiVVlzU1VGQmJrWXNSVUZCZVVZc1NVRkJla1k3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFOUJRVllzUTBGQmEwSXNUVUZCYkVJc1EwRkJlVUlzVDBGQmVrSXNRMEZCYVVNc1MwRkJTeXhOUVVGMFF5eEZRVUU0UXl4TFFVRkxMRTlCUVc1RUxFVkJRVFJFTEV0QlFVc3NWVUZCYWtVc1JVRkJOa1VzU1VGQk4wVXNSVUZCYlVZc1NVRkJia1k3TzBGQlJVRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExFOUJRV0lzUTBGQmNVSTdRVUZCUVN4MVFrRkJVeXhQUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRTFCUVd4Q0xFTkJRWGxDTEU5QlFYcENMRU5CUVdsRExFOUJRVXNzVFVGQmRFTXNSVUZCT0VNc1RVRkJUU3hQUVVGd1JDeEZRVUUyUkN4UFFVRkxMRk5CUVd4RkxFVkJRVFpGTEVsQlFUZEZMRk5CUVZRN1FVRkJRU3hoUVVGeVFqczdRVUZGUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWl4RFFVRXhRaXhKUVVFclFpeERRVUV2UWp0QlFVTklPenM3YjBOQlJWY3NTU3hGUVVGTk96dEJRVVZrTEdkQ1FVRkpMRkZCUVZFc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQllpeERRVUUwUWl4TFFVRTFRaXhEUVVGYU96dEJRVVZCTEdkQ1FVRkpMRU5CUVVNc1MwRkJUQ3hGUVVGWk8wRkJRMUlzZDBKQlFWRXNiMEpCUVZVc1NVRkJWaXhEUVVGU08wRkJRMEVzY1VKQlFVc3NUMEZCVEN4RFFVRmhMRWRCUVdJc1EwRkJhVUlzUzBGQmFrSTdRVUZEU0R0QlFVTkVMR3RDUVVGTkxFdEJRVTRzUTBGQldTeEpRVUZhTzBGQlEwZzdPenRyUTBGRlV5eEhMRVZCUVVzc1N5eEZRVUZQTzBGQlFVRTdPMEZCUTJ4Q0xHZENRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFdEJRV1FzUTBGQmIwSXNSMEZCY0VJc1EwRkJXanRCUVVOQkxHZENRVUZKTEZWQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFOUJRV1FzUlVGQlpEdEJRVU5CTEdkQ1FVRkpMSEZDUVVGeFFpeERRVUY2UWp0QlFVTkJMR2RDUVVGSkxHZENRVUZuUWl4SFFVRndRanRCUVVOQkxHZENRVUZKTEdWQlFXVXNSVUZCYmtJN08wRkJSVUVzYTBKQlFVMHNSVUZCVGl4RFFVRlRMRVZCUVVNc1RVRkJUU3hSUVVGUUxFVkJRVlFzUlVGQk1rSXNSMEZCTTBJN1FVRkRRU3hyUWtGQlRTeFZRVUZPTEVOQlFXbENMRWRCUVdwQ0xFTkJRWEZDTEZsQlFVMDdRVUZEZGtJc2IwSkJRVWtzU1VGQlNpeEhRVUZYTEZGQlFWZzdRVUZEU0N4aFFVWkVPMEZCUjBFc2EwSkJRVTBzUzBGQlRqczdRVUZGUVN4dlFrRkJVU3hEUVVGU0xFZEJRVmtzU1VGQlNTeERRVUZvUWp0QlFVTkJMRzlDUVVGUkxFTkJRVklzUjBGQldTeEpRVUZKTEVOQlFXaENPMEZCUTBFc2IwSkJRVkVzVDBGQlVpeEhRVUZyUWl4RFFVRnNRanRCUVVOQkxHOUNRVUZSTEdGQlFWSXNRMEZCYzBJc1ZVRkJkRUk3TzBGQlJVRXNaMEpCUVVrc1NVRkJTU3hOUVVGS0xFbEJRV01zUTBGQmJFSXNSVUZCY1VJN1FVRkRha0lzWjBOQlFXZENMRWRCUVdoQ08wRkJRMEVzSzBKQlFXVXNSVUZCWmp0QlFVTkJMSGRDUVVGUkxGRkJRVkk3UVVGRFNEczdRVUZGUkN4dlFrRkJVU3huUWtGQlVpeERRVUY1UWl4TFFVRjZRaXhEUVVFclFpeERRVUZETEdGQlFXaERMRVZCUVN0RExFTkJRVU1zWVVGQmFFUTdRVUZEUVN4dlFrRkJVU3huUWtGQlVpeERRVUY1UWl4TFFVRjZRaXhEUVVFclFpeGhRVUV2UWl4RlFVRTRReXhoUVVFNVF6dEJRVU5CTEc5Q1FVRlJMRXRCUVZJc1EwRkJZeXhKUVVGa0xFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFbEJRWHBDTEVWQlFTdENMRmxCUVM5Q08wRkJRMEVzYjBKQlFWRXNUVUZCVWl4SFFVRnBRaXhaUVVGTk8wRkJRMjVDTEhORFFVRnpRaXhQUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNZMEZCY2tNN1FVRkRRU3h2UWtGQlJ5eHpRa0ZCYzBJc1IwRkJla0lzUlVGQk5rSTdRVUZEZWtJc2VVTkJRWEZDTEVOQlFYSkNPMEZCUTBFc05FSkJRVkVzVDBGQlVqdEJRVU5JTzBGQlJVb3NZVUZRUkR0QlFWRkJMRzlDUVVGUkxFOUJRVklzUTBGQlowSTdRVUZCUVN4MVFrRkJXU3hUUVVGVExFbEJRVlFzUjBGQlowSXNTMEZCTlVJN1FVRkJRU3hoUVVGb1FqdEJRVU5CTEdkQ1FVRkpMRU5CUVVNc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQmFrSXNSVUZCZDBJN1FVRkRjRUlzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVlVGQmFFSXNRMEZCTWtJc1MwRkJTeXhQUVVGb1F6dEJRVU5JTzBGQlEwbzdPenRwUTBGRlVTeE5MRVZCUVZFc1N5eEZRVUZQTzBGQlEzQkNMR2xDUVVGTExHTkJRVXdzUTBGQmIwSXNTVUZCY0VJc1EwRkJlVUlzUlVGQmVrSXNSVUZCTkVJc1EwRkJOVUlzUlVGQk9FSXNSMEZCT1VJN1FVRkRRU3hyUWtGQlRTeE5RVUZPTEVOQlFXRXNUMEZCVHl4TlFVRndRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFOUJRVThzU1VGQk4wSTdRVUZEUVN4blFrRkJTU3hEUVVGRExFMUJRVTBzUzBGQldDeEZRVUZyUWp0QlFVTmtMSEZDUVVGTExHMUNRVUZNTEVOQlFYbENMRWxCUVhwQ0xFTkJRVGhDTEVWQlFUbENMRVZCUVdsRExFTkJRV3BETEVWQlFXMURMRWRCUVc1RE8wRkJRMEVzY1VKQlFVc3NSMEZCVEN4RFFVRlRMRmRCUVZRc1EwRkJjVUlzVFVGQlRTeFRRVUV6UWp0QlFVTklPMEZCUTBRc2JVSkJRVThzU1VGQlVEdEJRVU5JT3pzN2EwTkJSVk1zVFN4RlFVRlJMRTBzUlVGQlVUdEJRVU4wUWl4cFFrRkJTeXhqUVVGTUxFTkJRVzlDTEVsQlFYQkNMRU5CUVhsQ0xFVkJRWHBDTEVWQlFUUkNMRU5CUVRWQ0xFVkJRVGhDTEVkQlFUbENPMEZCUTBFc2JVSkJRVThzVFVGQlVDeERRVUZqTEU5QlFVOHNUVUZCY2tJN1FVRkRRU3hwUWtGQlN5eEhRVUZNTEVOQlFWTXNXVUZCVkR0QlFVTkJMR2xDUVVGTExGTkJRVXdzUTBGQlpTeE5RVUZtTEVWQlFYVkNMRTlCUVU4c1NVRkJPVUk3UVVGRFFTeG5Ra0ZCU1N4RFFVRkRMRTlCUVU4c1MwRkJXaXhGUVVGdFFqdEJRVU5tTEhGQ1FVRkxMRzlDUVVGTUxFTkJRVEJDTEVsQlFURkNPMEZCUTBFc2NVSkJRVXNzVVVGQlREdEJRVU5JTzBGQlEwUXNiVUpCUVU4c1NVRkJVRHRCUVVOSU96czdiVU5CUlZVc1RTeEZRVUZSTEVzc1JVRkJUenRCUVVOMFFpeHJRa0ZCVFN4TlFVRk9MRU5CUVdFc1RVRkJUU3hOUVVGdVFqdEJRVU5CTEcxQ1FVRlBMRTFCUVZBc1EwRkJZeXhOUVVGTkxFMUJRWEJDTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFMUJRV1k3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1MwRkJaanRCUVVOQkxHZENRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRllMRVZCUVd0Q08wRkJRMlFzY1VKQlFVc3NiVUpCUVV3c1EwRkJlVUlzU1VGQmVrSXNRMEZCT0VJc1JVRkJPVUlzUlVGQmFVTXNRMEZCYWtNc1JVRkJiVU1zUjBGQmJrTTdRVUZEUVN4eFFrRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZDeERRVUZ4UWl4TlFVRk5MRk5CUVROQ08wRkJRMGc3UVVGRFJDeHBRa0ZCU3l4SFFVRk1MRU5CUVZNc1dVRkJWRHRCUVVOQkxHZENRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRmFMRVZCUVcxQ08wRkJRMllzY1VKQlFVc3NiMEpCUVV3c1EwRkJNRUlzU1VGQk1VSTdRVUZEUVN4eFFrRkJTeXhSUVVGTU8wRkJRMGc3UVVGRFNqczdPMjFEUVVWVE8wRkJRVUU3TzBGQlEwNHNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeFZRVUZtTEVkQlFUUkNMRU5CUVRWQ08wRkJRMEVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRTlCUVdJc1IwRkJkVUlzU1VGQmRrSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhEUVVFeVFpeExRVUZMTEU5QlFXaERPMEZCUTBFc1owSkJRVWtzVVVGQlVTeExRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1RVRkJaaXhEUVVGelFpeExRVUZMTEVsQlFUTkNMRVZCUVdsRExFbEJRV3BETEVOQlFWbzdRVUZEUVN4clFrRkJUU3hIUVVGT0xFTkJRVlVzU1VGQlZpeEZRVUZuUWl4WlFVRk5PMEZCUTJ4Q0xIVkNRVUZMTEV0QlFVd3NRMEZCVnl4SlFVRllPMEZCUTBFc2RVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SlFVRnVRanRCUVVOQkxIVkNRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRTFCUVhSQ08wRkJRMGdzWVVGS1JEdEJRVXRCTEd0Q1FVRk5MRXRCUVU0N1FVRkRTRHM3T3p0RlFYQk9Oa0lzVDBGQlR5eExPenRyUWtGQmNFSXNTVHM3T3pzN096czdPenM3UVVOS2NrSTdPenM3T3pzN096czdPenRKUVVWeFFpeFRPenM3T3pzN096czdPenRwUTBGRlVqczdRVUZGVERzN1FVRkZRU3hwUWtGQlN5eFBRVUZNTEVkQlFXVXNRMEZCWmp0QlFVTkJMR2xDUVVGTExFOUJRVXdzUjBGQlpTeERRVUZtTzBGQlEwRXNhVUpCUVVzc1VVRkJUQ3hIUVVGblFpeEZRVUZvUWp0QlFVTkJMR2xDUVVGTExGZEJRVXdzUjBGQmJVSXNSVUZCYmtJN08wRkJSVUU3UVVGRFFTeHBRa0ZCU3l4UlFVRk1MRWRCUVdkQ0xFZEJRV2hDTzBGQlEwRXNhVUpCUVVzc1MwRkJUQ3hIUVVGaExFTkJRV0k3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRWRCUVdsQ0xFTkJRV3BDT3p0QlFVVkJMR2xDUVVGTExGVkJRVXdzUjBGQmEwSXNSVUZCYkVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRVZCUVhKQ096dEJRVVZCTzBGQlEwRXNhVUpCUVVzc1RVRkJUQ3hIUVVGakxIbENRVUZsTzBGQlEzcENMSE5DUVVGTkxFdEJRVXNzU1VGRVl6dEJRVVY2UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUmswN1FVRkhla0lzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVWhOTzBGQlNYcENMSFZDUVVGUExFOUJTbXRDTzBGQlMzcENMREpDUVVGWExFVkJUR003UVVGTmVrSXNNRUpCUVZVc1JVRk9aVHRCUVU5NlFpd3lRa0ZCVnl4RlFWQmpPMEZCVVhwQ0xIbENRVUZUTEVOQlVtZENPMEZCVTNwQ0xIVkNRVUZQTzBGQlZHdENMR0ZCUVdZc1EwRkJaRHRCUVZkQkxHbENRVUZMTEZOQlFVd3NSMEZCYVVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVUZxUWp0QlFVTkJMR2xDUVVGTExGTkJRVXdzUTBGQlpTeEhRVUZtTEVOQlFXMUNMRXRCUVVzc1RVRkJlRUk3TzBGQlJVRTdPMEZCUlVFc2FVSkJRVXNzUzBGQlRDeEhRVUZoTzBGQlExUXNjMEpCUVUwc1owSkJSRWM3UVVGRlZDeHpRa0ZCVFN4VFFVWkhPMEZCUjFRc2RVSkJRVTg3UVVGSVJTeGhRVUZpTzBGQlMwRXNhVUpCUVVzc1UwRkJUQ3hIUVVGcFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4SlFVRlVMRU5CUVdNc1EwRkJaQ3hGUVVGcFFpeERRVUZxUWl4RlFVRnZRaXhaUVVGWkxFdEJRVXNzUzBGQmNrTXNSVUZCTkVNc1MwRkJTeXhMUVVGcVJDeERRVUZxUWp0QlFVTkJMR2xDUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1NVRkJWQ3hEUVVGakxFTkJRV1FzUlVGQmFVSXNTMEZCU3l4SlFVRk1MRU5CUVZVc1RVRkJWaXhIUVVGdFFpeERRVUZ3UXl4RlFVRjFReXhuUWtGQlowSXNTMEZCU3l4UlFVRTFSQ3hGUVVGelJTeExRVUZMTEV0QlFUTkZMRU5CUVdoQ08wRkJRMEVzYVVKQlFVc3NVVUZCVEN4RFFVRmpMRTFCUVdRc1EwRkJjVUlzUjBGQmNrSXNRMEZCZVVJc1EwRkJla0lzUlVGQk1rSXNRMEZCTTBJN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hOUVVGbUxFTkJRWE5DTEVsQlFYUkNMRU5CUVRKQ0xFOUJRVThzUzBGQlVDeERRVUZoTEUxQlFYaERMRVZCUVdkRUxFdEJRVXNzV1VGQmNrUXNSVUZCYTBVc1NVRkJiRVU3TzBGQlJVRXNhVUpCUVVzc1ZVRkJURHRCUVVOSU96czdhVU5CUlZFN1FVRkRUQ3hwUWtGQlN5eFJRVUZNTzBGQlJVZzdPMEZCUlVRN096czdiVU5CUTFVN1FVRkRUaXhuUWtGQlNTeFRRVUZUTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVVVGQmFFSXNRMEZCZVVJc1RVRkJla0lzUTBGQlowTXNUMEZCVHl4UlFVRlFMRU5CUVdkQ0xFZEJRV2hFTEVOQlFXSTdRVUZEUVN4blFrRkJSeXhOUVVGSUxFVkJRVlU3UVVGRFRpeHhRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUZvUWl4RFFVRnpRaXhOUVVGMFFqdEJRVU5JTzBGQlEwbzdPenQxUTBGRll6dEJRVU5ZTEdsQ1FVRkxMRkZCUVV3N1FVRkRRU3hwUWtGQlN5eFJRVUZNTEVOQlFXTXNTVUZCWkN4SFFVRnhRaXhuUWtGQlowSXNTMEZCU3l4UlFVRXhRenRCUVVOQkxHZENRVUZITEV0QlFVc3NVVUZCVEN4SlFVRnBRaXhEUVVGd1FpeEZRVUYxUWp0QlFVTnVRanRCUVVOQkxIRkNRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRlZCUVhSQ08wRkJRMGc3UVVGRFNqczdPM0ZEUVVOWk96dEJRVVZVTEdkQ1FVRkpMRmxCUVdFc1MwRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFBRVUZ5UXp0QlFVTkJMR2RDUVVGSkxGbEJRVmtzUTBGQlF5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRWRCUVcxQ0xFdEJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NVVUZCZGtNc1IwRkJiMFFzUTBGQlF5eExRVUZMTEU5QlFVd3NSMEZCWlN4RFFVRm9RaXhKUVVGelFpeExRVUZMTEZkQlFXaEdMRWxCUVRoR0xFTkJRVGxITzBGQlEwRXNaMEpCUVVrc1YwRkJXU3hEUVVGRExFdEJRVXNzU1VGQlRDeERRVUZWTEUxQlFWWXNSMEZCYjBJc1MwRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFJRVUY0UXl4SFFVRnhSQ3hEUVVGRExFdEJRVXNzVDBGQlRDeEhRVUZsTEVOQlFXaENMRWxCUVhOQ0xFdEJRVXNzVjBGQmFrWXNTVUZCSzBZc1EwRkJMMGM3TzBGQlJVRTdRVUZEUVN4cFFrRkJTU3hKUVVGSkxFbEJRVWtzUTBGQldpeEZRVUZsTEVsQlFVa3NVMEZCYmtJc1JVRkJPRUlzUjBGQk9VSXNSVUZCYlVNN1FVRkRMMElzY1VKQlFVc3NWVUZCVEN4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhKUVVGSkxFTkJRV1lzUTBGQmNrSTdRVUZEU0RzN1FVRkZSRHRCUVVOQkxHbENRVUZKTEVsQlFVa3NTMEZCU1N4RFFVRmFMRVZCUVdVc1MwRkJTU3hUUVVGdVFpeEZRVUU0UWl4SlFVRTVRaXhGUVVGdFF6dEJRVU12UWl4dlFrRkJTU3hQUVVGUkxFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4UFFVRmtMRU5CUVhOQ0xFTkJRWFJDTEVWQlFYbENMRXRCUVVzc1ZVRkJUQ3hEUVVGblFpeE5RVUZvUWl4SFFVRjFRaXhEUVVGb1JDeERRVUZhTzBGQlEwRXNiMEpCUVVrc1MwRkJVU3hMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNUMEZCWkN4RFFVRnpRaXhEUVVGMFFpeEZRVUY1UWl4TFFVRkxMRlZCUVV3c1EwRkJaMElzVFVGQmFFSXNSMEZCZFVJc1EwRkJhRVFzUTBGQldqdEJRVU5CTEc5Q1FVRkpMRTlCUVZFc1MwRkJTeXhWUVVGTUxFTkJRV2RDTEVsQlFXaENMRU5CUVZvN08wRkJSVUVzY1VKQlFVc3NWVUZCVEN4RFFVRm5RaXhKUVVGb1FpeEpRVUYzUWl4TFFVRkxMRlZCUVV3c1EwRkJaMElzUlVGQmFFSXNRMEZCZUVJN1FVRkRRU3h4UWtGQlN5eFZRVUZNTEVOQlFXZENMRVZCUVdoQ0xFbEJRWE5DTEVsQlFYUkNPMEZCUTBnN1FVRkRSRHRCUVVOQkxHbENRVUZKTEVsQlFVa3NUVUZCU1N4RFFVRmFMRVZCUVdVc1RVRkJTU3hMUVVGTExFOUJRWGhDTEVWQlFXbERMRXRCUVdwRExFVkJRWE5ETzBGQlEyeERMSEZDUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZhTEVWQlFXVXNTVUZCU1N4TFFVRkxMRTlCUVhoQ0xFVkJRV2xETEVkQlFXcERMRVZCUVhORE96dEJRVVZzUXl4M1FrRkJTU3hQUVVGUExIbENRVUZsTzBGQlEzUkNMRGhDUVVGTkxFdEJRVXNzU1VGRVZ6dEJRVVYwUWl3eVFrRkJSeXhaUVVGWkxFOUJRVXNzUzBGQlN5eFJRVUZNTEVkQlFXZENMRXRCUVVzc1YwRkJNVUlzUTBGR1R6dEJRVWQwUWl3eVFrRkJSeXhYUVVGWExFOUJRVXNzUzBGQlN5eFJRVUZNTEVkQlFXZENMRXRCUVVzc1YwRkJNVUlzUTBGSVVUdEJRVWwwUWl3clFrRkJUeXhQUVVwbE8wRkJTM1JDTEcxRFFVRlhMRVZCVEZjN1FVRk5kRUlzYTBOQlFWVXNSVUZPV1R0QlFVOTBRaXh0UTBGQlZ5eEZRVkJYTzBGQlVYUkNMR2xEUVVGVExFVkJVbUU3UVVGVGRFSXNLMEpCUVU4N1FVRlVaU3h4UWtGQlppeERRVUZZTzBGQldVZzdRVUZGU2p0QlFVTktPenM3TzBWQk9VZHJReXhQUVVGUExFczdPMnRDUVVGNlFpeFRPenM3T3pzN096czdPenRCUTBaeVFqczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN096dEpRVVZ4UWl4Uk96czdPenM3T3pzN096dHBRMEZGVWp0QlFVRkJPenRCUVVOTUxHbENRVUZMTEVWQlFVd3NSMEZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhWUVVGVUxFTkJRVzlDTEVOQlFYQkNMRVZCUVhWQ0xFTkJRWFpDTEVWQlFUQkNMRWxCUVRGQ0xFVkJRV2RETEVsQlFXaERMRVZCUVhORExGRkJRWFJETEVOQlFWWTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEZWQlFXWXNSMEZCTkVJc1EwRkJOVUk3TzBGQlIwRTdRVUZEUVN4cFFrRkJTeXhOUVVGTUxFZEJRV01zY1VKQlFWYzdRVUZEY2tJc2MwSkJRVTBzUzBGQlN5eEpRVVJWTzBGQlJYSkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdSVHRCUVVkeVFpeHRRa0ZCUnl4UFFVRlBMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUVUZJVER0QlFVbHlRaXgzUWtGQlVTeEZRVXBoTzBGQlMzSkNMSFZDUVVGUExHTkJUR003UVVGTmNrSXNkVUpCUVU4N1FVRk9ZeXhoUVVGWUxFTkJRV1E3UVVGUlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RFFVRjVRaXhMUVVGTExFMUJRVGxDTzBGQlEwRXNhVUpCUVVzc1pVRkJUQ3hIUVVGMVFpeERRVUYyUWp0QlFVTkJMR2xDUVVGTExHMUNRVUZNTEVkQlFUSkNMRWxCUVROQ096dEJRVVZCTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZCWmp0QlFVTkJMR2xDUVVGTExFOUJRVXdzUTBGQllTeFZRVUZpTEVkQlFUQkNMRWxCUVRGQ08wRkJRMEVzYVVKQlFVc3NVMEZCVEN4SFFVRnBRaXhEUVVGcVFqdEJRVU52UWp0QlFVTndRaXhwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRWRCUVhKQ08wRkJRMEVzYVVKQlFVc3NZMEZCVEN4SFFVRnpRaXhEUVVGMFFqdEJRVU5CTEdsQ1FVRkxMR3RDUVVGTUxFZEJRVEJDTEVOQlFURkNPMEZCUTBFN08wRkJSVUU3UVVGRFFTeHBRa0ZCU3l4alFVRk1MRWRCUVhOQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZCZEVJN1FVRkRRU3hwUWtGQlN5eGpRVUZNTEVOQlFXOUNMRlZCUVhCQ0xFZEJRV2xETEVsQlFXcERPMEZCUTBFN096dEJRVWRCTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRVZCUVhKQ08wRkJRMEVzYVVKQlFVc3NZVUZCVEN4RFFVRnRRaXhWUVVGdVFpeEhRVUZuUXl4SlFVRm9RenRCUVVOQk8wRkJRMEVzYVVKQlFVc3NiVUpCUVV3c1IwRkJNa0lzUjBGQk0wSTdRVUZEUVN4cFFrRkJTeXh2UWtGQlRDeEhRVUUwUWl4RFFVRTFRanRCUVVOQkxHbENRVUZMTEhkQ1FVRk1MRWRCUVdkRExFTkJRV2hETzBGQlEwazdRVUZEU2l4cFFrRkJTeXhwUWtGQlRDeERRVUYxUWp0QlFVTnVRaXh6UWtGQlRTeExRVUZMTEVsQlJGRTdRVUZGYmtJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1JVRkJhRU1zU1VGQmMwTXNSVUZHZEVJN1FVRkhia0k3UVVGRFFTeHRRa0ZCUnl4RFFVcG5RanRCUVV0dVFpeDFRa0ZCVHp0QlFVTklMSFZDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFTkJRVGRDTEVWQlFXZERMRVZCUVdoRExFbEJRWE5ETEVWQlFYUkRMRWxCUVRSRExFdEJRVXNzVFVGQlRDeExRVUZuUWl4SFFVRm9RaXhIUVVGelFpeERRVUYwUWl4SFFVRXdRaXhEUVVGRExFTkJRWFpGTEVOQlJFRTdRVUZGU0N4MVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF6dEJRVVowUXl4cFFrRk1XVHRCUVZOdVFqdEJRVU5CTEhkQ1FVRlJMRVZCVmxjN1FVRlhia0lzTmtKQlFXRXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxHTkJRV1FzUTBGQk5rSXNSVUZCTjBJc1JVRkJhVU1zUlVGQmFrTXNTVUZCZFVNc1JVRllha003UVVGWmJrSXNkVUpCUVU4c1VVRmFXVHRCUVdGdVFpeHpRa0ZCVFR0QlFXSmhMR0ZCUVhaQ08wRkJaVUU3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeE5RVUZtTEVOQlFYTkNMRWxCUVhSQ0xFTkJRVEpDTEU5QlFVOHNTMEZCVUN4RFFVRmhMRTFCUVdJc1IwRkJjMElzUlVGQmFrUXNSVUZCY1VRc1dVRkJUVHRCUVVOMlJDeHZRa0ZCUnl4UFFVRkxMR0ZCUVV3c1IwRkJjVUlzUjBGQmVFSXNSVUZCTmtJN1FVRkRla0lzTWtKQlFVc3NZVUZCVEN4SlFVRnpRaXhIUVVGMFFqdEJRVU5JTzBGQlEwb3NZVUZLUkRzN1FVRk5RU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExGVkJRVlFzUTBGQmIwSXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJPVUlzUlVGQmNVTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1RVRkJMME1zUTBGQmNrSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVhWQ0xGTkJRWFpDTEVkQlFXMURMRTFCUVc1RE8wRkJRMEVzYVVKQlFVc3NZVUZCVEN4RFFVRnRRaXhIUVVGdVFpeERRVUYxUWl4UlFVRjJRaXhEUVVGblF5eERRVUZvUXl4RlFVRnRReXhEUVVGdVF5eEZRVUZ6UXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGb1JDeEZRVUYxUkN4TFFVRkxMRWxCUVV3c1EwRkJWU3hOUVVGcVJUczdRVUZGUVN4cFFrRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eEhRVUZNTEVOQlFWTXNUVUZCVkN4RFFVRm5RaXhEUVVGb1FpeEZRVUZ0UWl4RFFVRnVRaXhGUVVGelFpeExRVUZMTEdGQlFUTkNMRU5CUVdZN1FVRkRRU3hwUWtGQlN5eFBRVUZNTEVOQlFXRXNUMEZCWWl4SFFVRjFRaXhMUVVGMlFqdEJRVU5CTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3hMUVVGaUxFZEJRWEZDTEVsQlFYSkNPenRCUVVWQkxHbENRVUZMTEVkQlFVd3NSMEZCVnl4clFrRkJVVHRCUVVObUxITkNRVUZOTEV0QlFVc3NTVUZFU1R0QlFVVm1MSGRDUVVGUkxFdEJRVXM3UVVGR1JTeGhRVUZTTEVOQlFWZzdPMEZCUzBFN1FVRkRSRHRCUVVORExHbENRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZkQlFXWXNRMEZCZEVJN1FVRkRRU3hwUWtGQlN5eHRRa0ZCVEN4SFFVRXlRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNaMEpCUVdZc1EwRkJNMEk3UVVGRFFTeHBRa0ZCU3l4dlFrRkJUQ3hIUVVFMFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc2FVSkJRV1lzUTBGQk5VSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEpDT3p0QlFVVkJPenM3UVVGSlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOSU96czdhVU5CUlZFN1FVRkRUQ3hwUWtGQlN5eFRRVUZNTEVsQlFXdENMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeGpRVUZxUXp0QlFVTkJMR2xDUVVGTExHTkJRVXdzU1VGQmRVSXNTMEZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExHTkJRWFJETzBGQlEwRXNhVUpCUVVzc1pVRkJUQ3hKUVVGM1FpeExRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1kwRkJka003TzBGQlJVRXNaMEpCUVVrc1MwRkJTeXhUUVVGTUxFZEJRV2xDTEV0QlFVc3NZVUZCTVVJc1JVRkJlVU03UVVGRGNrTXNjVUpCUVVzc1UwRkJUQ3hIUVVGcFFpeERRVUZxUWpzN1FVRkZRU3h4UWtGQlN5eFhRVUZNTEVOQlFXbENPMEZCUTJJc01FSkJRVTBzUzBGQlN5eEpRVVJGTzBGQlJXSXNkVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEdOQlFXUXNRMEZCTmtJc1EwRkJOMElzUlVGQlowTXNSVUZCYUVNc1NVRkJjME1zUlVGR05VSTdRVUZIWWp0QlFVTkJMSFZDUVVGSExFTkJTbFU3UVVGTFlpd3lRa0ZCVHp0QlFVTklMREpDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFTkJRVGRDTEVWQlFXZERMRVZCUVdoRExFbEJRWE5ETEVWQlFYUkRMRWxCUVRSRExFdEJRVXNzVFVGQlRDeExRVUZuUWl4SFFVRm9RaXhIUVVGelFpeERRVUYwUWl4SFFVRXdRaXhEUVVGRExFTkJRWFpGTEVOQlJFRTdRVUZGU0N3eVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF6dEJRVVowUXl4eFFrRk1UVHRCUVZOaU8wRkJRMEVzTkVKQlFWRXNRMEZXU3p0QlFWZGlMR2xEUVVGaExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFVkJRVGRDTEVWQlFXbERMRVZCUVdwRExFbEJRWFZETEVWQldIWkRPMEZCV1dJc01rSkJRVThzVDBGYVRUdEJRV0ZpTERCQ1FVRk5PenRCUVdKUExHbENRVUZxUWp0QlFXZENTRHM3UVVGRlJDeG5Ra0ZCU1N4TFFVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eHJRa0ZCTDBJc1JVRkJiVVE3UVVGREwwTXNjVUpCUVVzc1kwRkJUQ3hIUVVGelFpeERRVUYwUWp0QlFVTkJMRzlDUVVGSkxFTkJRVU1zUzBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCYWtJc1JVRkJkMEk3UVVGRGNFSXNlVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWVUZCYUVJc1EwRkJNa0lzUzBGQlN5eFBRVUZvUXp0QlFVTkJMRFJDUVVGUkxFZEJRVklzUTBGQldTeFpRVUZhTzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3huUWtGQlNTeExRVUZMTEdWQlFVd3NSMEZCZFVJc1MwRkJTeXh0UWtGQmFFTXNSVUZCY1VRN1FVRkRha1FzY1VKQlFVc3NaVUZCVEN4SFFVRjFRaXhEUVVGMlFqdEJRVU5CTEc5Q1FVRkpMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xIZENRVUZKTEZkQlFWY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RFFVRjVRaXhOUVVGNlFpeERRVUZuUXl4UFFVRlBMRkZCUVZBc1EwRkJaMElzVVVGQmFFUXNRMEZCWmp0QlFVTkJMSGRDUVVGSExGRkJRVWdzUlVGQllUdEJRVU5VTERaQ1FVRkxMRTFCUVV3c1EwRkJXU3hMUVVGYU8wRkJRMGc3UVVGRFNqdEJRVU5LT3p0QlFVVkVMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRTFCUVd4Q0xFTkJRWGxDTEU5QlFYcENMRU5CUVdsRExFdEJRVXNzVFVGQlRDeERRVUZaTEU5QlFUZERMRVZCUVhORUxFdEJRVXNzVDBGQk0wUXNSVUZCYjBVc1MwRkJTeXhSUVVGNlJTeEZRVUZ0Uml4SlFVRnVSaXhGUVVGNVJpeEpRVUY2UmpzN1FVRkZRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhOUVVGc1FpeERRVUY1UWl4UFFVRjZRaXhEUVVGcFF5eExRVUZMTEUxQlFVd3NRMEZCV1N4UFFVRTNReXhGUVVGelJDeExRVUZMTEdOQlFUTkVMRVZCUVRKRkxFdEJRVXNzVVVGQmFFWXNSVUZCTUVZc1NVRkJNVVlzUlVGQlowY3NTVUZCYUVjN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkJhMElzVFVGQmJFSXNRMEZCZVVJc1QwRkJla0lzUTBGQmFVTXNTMEZCU3l4TlFVRjBReXhGUVVFNFF5eERRVUZETEV0QlFVc3NUMEZCVGl4RlFVRmpMRXRCUVVzc1kwRkJia0lzUTBGQk9VTXNSVUZCYTBZc1MwRkJTeXhWUVVGMlJpeEZRVUZ0Unl4SlFVRnVSeXhGUVVGNVJ5eEpRVUY2UnpzN1FVRkZRU3hwUWtGQlN5eFJRVUZNTzBGQlEwRTdRVUZEU0RzN08yOURRVVZYTEVrc1JVRkJUVHM3UVVGRlpDeG5Ra0ZCU1N4UlFVRlJMRXRCUVVzc1QwRkJUQ3hEUVVGaExHTkJRV0lzUTBGQk5FSXNTMEZCTlVJc1EwRkJXanRCUVVOQkxHZENRVUZKTEdWQlFXVXNTMEZCU3l4UFFVRk1MRU5CUVdFc1VVRkJZaXhEUVVGelFpeE5RVUY2UXp0QlFVTkJMRzlDUVVGUkxFZEJRVklzUTBGQldTeFpRVUZhT3p0QlFVVkJMR2RDUVVGSkxFTkJRVU1zUzBGQlRDeEZRVUZaTzBGQlExSXNkMEpCUVZFc2QwSkJRVlVzU1VGQlZpeERRVUZTTzBGQlEwRXNiMEpCUVVjc1pVRkJaU3hEUVVGc1FpeEZRVUZ2UWp0QlFVTm9RaXg1UWtGQlN5eFBRVUZNTEVOQlFXRXNSMEZCWWl4RFFVRnBRaXhMUVVGcVFqdEJRVU5JTzBGQlJVbzdRVUZEUkN4clFrRkJUU3hMUVVGT0xFTkJRVmtzU1VGQldqdEJRVU5JT3pzN01rTkJSV3RDTEVrc1JVRkJUVHM3UVVGRmNrSXNaMEpCUVVrc1VVRkJVU3hMUVVGTExHTkJRVXdzUTBGQmIwSXNZMEZCY0VJc1EwRkJiVU1zUzBGQmJrTXNRMEZCV2p0QlFVTkJMR2RDUVVGSkxHVkJRV1VzUzBGQlN5eGpRVUZNTEVOQlFXOUNMRkZCUVhCQ0xFTkJRVFpDTEUxQlFXaEVPenRCUVVWQkxHZENRVUZKTEVOQlFVTXNTMEZCVEN4RlFVRlpPMEZCUTFJc2QwSkJRVkVzZDBKQlFWVXNTVUZCVml4RFFVRlNPMEZCUTBFc2IwSkJRVWNzWlVGQlpTeEZRVUZzUWl4RlFVRnhRanRCUVVOcVFpeDVRa0ZCU3l4alFVRk1MRU5CUVc5Q0xFZEJRWEJDTEVOQlFYZENMRXRCUVhoQ08wRkJRMGc3UVVGRlNqdEJRVU5FTEd0Q1FVRk5MRXRCUVU0c1EwRkJXU3hKUVVGYU8wRkJRMGc3T3pzd1EwRkZhVUlzU1N4RlFVRk5PenRCUVVWd1FpeG5Ra0ZCU1N4UlFVRlJMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeGpRVUZ1UWl4RFFVRnJReXhMUVVGc1F5eERRVUZhTzBGQlEwRXNaMEpCUVVrc1pVRkJaU3hMUVVGTExHRkJRVXdzUTBGQmJVSXNVVUZCYmtJc1EwRkJORUlzVFVGQkwwTTdRVUZEUVN4dlFrRkJVU3hIUVVGU0xFTkJRVmtzV1VGQldqczdRVUZGUVN4blFrRkJTU3hEUVVGRExFdEJRVXdzUlVGQldUdEJRVU5TTEhkQ1FVRlJMSGRDUVVGVkxFbEJRVllzUTBGQlVqdEJRVU5CTEc5Q1FVRkhMR2RDUVVGblFpeERRVUZ1UWl4RlFVRnhRanRCUVVOcVFpeDVRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFYVkNMRXRCUVhaQ08wRkJRMGc3UVVGRlNqdEJRVU5FTEd0Q1FVRk5MRXRCUVU0c1EwRkJXU3hKUVVGYU8wRkJRMGc3T3p0clEwRkZVeXhITEVWQlFVc3NTeXhGUVVGUE8wRkJRVUU3TzBGQlEyeENMR2RDUVVGSkxGRkJRVkVzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1EwRkJiMElzUjBGQmNFSXNRMEZCV2p0QlFVTkJMR2RDUVVGSkxGVkJRVlVzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRTlCUVdRc1JVRkJaRHRCUVVOQkxHZENRVUZKTEhGQ1FVRnhRaXhEUVVGNlFqdEJRVU5CTEdkQ1FVRkpMR2RDUVVGblFpeEhRVUZ3UWp0QlFVTkJMR2RDUVVGSkxHVkJRV1VzUlVGQmJrSTdPMEZCUlVFc2EwSkJRVTBzUlVGQlRpeERRVUZUTEVWQlFVTXNUVUZCVFN4UlFVRlFMRVZCUVZRc1JVRkJNa0lzUjBGQk0wSTdRVUZEUVN4clFrRkJUU3hWUVVGT0xFTkJRV2xDTEVkQlFXcENMRU5CUVhGQ0xGbEJRVTA3UVVGRGRrSXNiMEpCUVVrc1NVRkJTaXhIUVVGWExGRkJRVmc3UVVGRFNDeGhRVVpFTzBGQlIwRXNhMEpCUVUwc1MwRkJUanM3UVVGRlFTeHZRa0ZCVVN4RFFVRlNMRWRCUVZrc1NVRkJTU3hEUVVGb1FqdEJRVU5CTEc5Q1FVRlJMRU5CUVZJc1IwRkJXU3hKUVVGSkxFTkJRV2hDTzBGQlEwRXNiMEpCUVZFc1QwRkJVaXhIUVVGclFpeERRVUZzUWp0QlFVTkJMRzlDUVVGUkxHRkJRVklzUTBGQmMwSXNWVUZCZEVJN08wRkJSVUVzWjBKQlFVa3NTVUZCU1N4TlFVRktMRWxCUVdNc1EwRkJiRUlzUlVGQmNVSTdRVUZEYWtJc1owTkJRV2RDTEVkQlFXaENPMEZCUTBFc0swSkJRV1VzUlVGQlpqdEJRVU5CTEhkQ1FVRlJMRkZCUVZJN1FVRkRTRHM3UVVGRlJDeHZRa0ZCVVN4blFrRkJVaXhEUVVGNVFpeExRVUY2UWl4RFFVRXJRaXhEUVVGRExHRkJRV2hETEVWQlFTdERMRU5CUVVNc1lVRkJhRVE3UVVGRFFTeHZRa0ZCVVN4blFrRkJVaXhEUVVGNVFpeExRVUY2UWl4RFFVRXJRaXhoUVVFdlFpeEZRVUU0UXl4aFFVRTVRenRCUVVOQkxHOUNRVUZSTEV0QlFWSXNRMEZCWXl4SlFVRmtMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWxCUVhwQ0xFVkJRU3RDTEZsQlFTOUNPMEZCUTBFc2IwSkJRVkVzVFVGQlVpeEhRVUZwUWl4WlFVRk5PMEZCUTI1Q0xITkRRVUZ6UWl4UFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzWTBGQmNrTTdRVUZEUVN4dlFrRkJSeXh6UWtGQmMwSXNSMEZCZWtJc1JVRkJOa0k3UVVGRGVrSXNlVU5CUVhGQ0xFTkJRWEpDTzBGQlEwRXNORUpCUVZFc1QwRkJVanRCUVVOSU8wRkJSVW9zWVVGUVJEdEJRVkZCTEc5Q1FVRlJMRTlCUVZJc1EwRkJaMEk3UVVGQlFTeDFRa0ZCV1N4VFFVRlRMRWxCUVZRc1IwRkJaMElzUzBGQk5VSTdRVUZCUVN4aFFVRm9RanRCUVVOQkxHZENRVUZKTEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJha0lzUlVGQmQwSTdRVUZEY0VJc2NVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1ZVRkJhRUlzUTBGQk1rSXNTMEZCU3l4UFFVRm9RenRCUVVOSU8wRkJRMG83T3p0cFEwRkZVU3hOTEVWQlFWRXNTeXhGUVVGUE96dEJRVVZ3UWl4cFFrRkJTeXhqUVVGTUxFTkJRVzlDTEVsQlFYQkNMRU5CUVhsQ0xFVkJRWHBDTEVWQlFUUkNMRU5CUVRWQ0xFVkJRVGhDTEVkQlFUbENPMEZCUTBFc2EwSkJRVTBzVFVGQlRpeERRVUZoTEU5QlFVOHNUVUZCY0VJN1FVRkRRU3hwUWtGQlN5eFRRVUZNTEVOQlFXVXNTMEZCWml4RlFVRnpRaXhQUVVGUExFbEJRVGRDT3p0QlFVVkJMR2RDUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZZTEVWQlFXdENPMEZCUTJRc2NVSkJRVXNzYlVKQlFVd3NRMEZCZVVJc1NVRkJla0lzUTBGQk9FSXNSVUZCT1VJc1JVRkJhME1zUTBGQmJFTXNSVUZCY1VNc1IwRkJja003UVVGRFFTeHhRa0ZCU3l4SFFVRk1MRU5CUVZNc1YwRkJWQ3hEUVVGeFFpeE5RVUZOTEZOQlFUTkNPMEZCUTBFc2QwSkJRVThzVFVGQlRTeEpRVUZpTzBGQlEwazdRVUZEUVN4NVFrRkJTeXhIUVVGTU8wRkJRMFVzTmtKQlFVc3NhMEpCUVV3c1EwRkJkMEk3UVVGRGJFSXNhME5CUVUwc1MwRkJTeXhKUVVSUE8wRkJSV3hDTEN0Q1FVRkhMRTFCUVUwc1EwRkdVenRCUVVkc1Fpd3JRa0ZCUnl4TlFVRk5MRU5CU0ZNN1FVRkpiRUlzYlVOQlFVODdRVUZEU0N4dFEwRkJSeXhMUVVGTExFVkJSRXc3UVVGRlNDeHRRMEZCUnl4RFFVRkRMRVZCUVVRc1IwRkJUVHRCUVVaT0xEWkNRVXBYTzBGQlVXeENMRzlEUVVGUkxFVkJVbFU3UVVGVGJFSXNlVU5CUVdFc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEdOQlFXUXNRMEZCTmtJc1JVRkJOMElzUlVGQmFVTXNSVUZCYWtNc1NVRkJkVU1zUlVGVWJFTTdRVUZWYkVJc2JVTkJRVThzVDBGV1Z6dEJRVmRzUWl4clEwRkJUVHRCUVZoWkxIbENRVUY0UWp0QlFXRkJMRFpDUVVGTExHdENRVUZNTEVOQlFYZENPMEZCUTJ4Q0xHdERRVUZOTEV0QlFVc3NTVUZFVHp0QlFVVnNRaXdyUWtGQlJ5eE5RVUZOTEVOQlJsTTdPMEZCU1d4Q0xDdENRVUZITEUxQlFVMHNRMEZLVXp0QlFVdHNRaXh0UTBGQlR6dEJRVU5JTEcxRFFVRkhMRU5CUVVNc1JVRkJSQ3hIUVVGTkxFVkJSRTQ3UVVGRlNDeHRRMEZCUnl4RFFVRkRMRVZCUVVRc1IwRkJUVHRCUVVaT0xEWkNRVXhYT3p0QlFWVnNRaXh2UTBGQlVTeEZRVlpWTzBGQlYyeENMSGxEUVVGaExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFVkJRVGRDTEVWQlFXbERMRVZCUVdwRExFbEJRWFZETEVWQldHeERPMEZCV1d4Q0xHMURRVUZQTEU5QldsYzdRVUZoYkVJc2EwTkJRVTA3UVVGaVdTeDVRa0ZCZUVJN1FVRmxRVHM3UVVFdlFrNDdRVUZyUTBFc2RVSkJRVThzU1VGQlVEdEJRVU5JTzBGQlEwbzdPenR0UTBGRlZTeE5MRVZCUVZFc1N5eEZRVUZQTzBGQlEzUkNPMEZCUTBFc2EwSkJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSTdRVUZEUVR0QlFVTkJMRzFDUVVGUExFMUJRVkFzUTBGQll5eERRVUZrTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFMUJRV1k3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1MwRkJaanRCUVVOQkxHZENRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRllMRVZCUVd0Q08wRkJRMlFzY1VKQlFVc3NiVUpCUVV3c1EwRkJlVUlzU1VGQmVrSXNRMEZCT0VJc1JVRkJPVUlzUlVGQmFVTXNRMEZCYWtNc1JVRkJiVU1zUjBGQmJrTTdRVUZEUVN4eFFrRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZDeERRVUZ4UWl4TlFVRk5MRk5CUVROQ08wRkJRMGc3UVVGRFJDeHBRa0ZCU3l4SFFVRk1MRU5CUVZNc1dVRkJWRHRCUVVOQkxHZENRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRmFMRVZCUVcxQ08wRkJRMllzY1VKQlFVc3NiMEpCUVV3c1EwRkJNRUlzU1VGQk1VSTdRVUZEUVN4eFFrRkJTeXhSUVVGTU8wRkJRMGc3UVVGRFNqczdPMjFEUVVWVE8wRkJRVUU3TzBGQlEwNHNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeFZRVUZtTEVkQlFUUkNMRU5CUVRWQ08wRkJRMEVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRTlCUVdJc1IwRkJkVUlzU1VGQmRrSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhEUVVFeVFpeExRVUZMTEU5QlFXaERPMEZCUTBFc1owSkJRVWtzVVVGQlVTeExRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1RVRkJaaXhEUVVGelFpeExRVUZMTEVsQlFUTkNMRVZCUVdsRExFbEJRV3BETEVOQlFWbzdRVUZEUVN4clFrRkJUU3hIUVVGT0xFTkJRVlVzU1VGQlZpeEZRVUZuUWl4WlFVRk5PMEZCUTJ4Q08wRkJRMEVzZFVKQlFVc3NZVUZCVEN4RFFVRnRRaXhKUVVGdVFqdEJRVU5CTEhWQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFXaENMRU5CUVhOQ0xGVkJRWFJDTzBGQlEwZ3NZVUZLUkR0QlFVdEJMR3RDUVVGTkxFdEJRVTQ3UVVGRFNEczdPMjFEUVVWVE8wRkJRMDRzWjBKQlFVa3NVMEZCVXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFMUJRWHBDTEVOQlFXZERMRTlCUVU4c1VVRkJVQ3hEUVVGblFpeEhRVUZvUkN4RFFVRmlPMEZCUTBFc1owSkJRVWNzVFVGQlNDeEZRVUZWTzBGQlEwNHNjVUpCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm83UVVGRFFTeHhRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUZvUWl4RFFVRnpRaXhOUVVGMFFqdEJRVVZJTzBGQlEwbzdPenM3UlVGMlZXbERMRTlCUVU4c1N6czdhMEpCUVhoQ0xGRTdPenM3T3pzN096czdPenM3T3pzN08wbERTa0VzVHpzN096czdPenM3T3pzN2EwTkJSVkE3TzBGQlJVNHNhVUpCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRlVMRU5CUVdkQ0xFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRU1zUlVGQmVVTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUY2UkN4RlFVRnJSU3hWUVVGc1JTeERRVUZvUWp0QlFVTkJMR2xDUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1RVRkJWQ3hEUVVGblFpeExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hETEVWQlFYbERMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCZWtRc1JVRkJhMFVzVjBGQmJFVXNRMEZCYWtJN1FVRkRRU3hwUWtGQlN5eFJRVUZNTEVOQlFXTXNUVUZCWkN4RFFVRnhRaXhMUVVGeVFpeERRVUV5UWl4SFFVRXpRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4TlFVRm1MRU5CUVhOQ0xFdEJRWFJDTEVOQlFUUkNMRWRCUVRWQ096dEJRVVZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3huUWtGQlZpeERRVUV5UWl4TFFVRkxMRk5CUVdoRE8wRkJRMEU3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1kwRkJWaXhEUVVGNVFpeGpRVUY2UWl4RlFVRjVReXhyUTBGQmVrTXNSVUZCTmtVc2IwTkJRVGRGTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxHTkJRVllzUTBGQmVVSXNUMEZCZWtJc1JVRkJhME1zTWtKQlFXeERMRVZCUVN0RUxEWkNRVUV2UkR0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeGpRVUZXTEVOQlFYbENMRkZCUVhwQ0xFVkJRVzFETERSQ1FVRnVReXhGUVVGcFJTdzRRa0ZCYWtVN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhUUVVGb1FpeEZRVUV5UWl4cFFrRkJNMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RlFVRXdRaXhuUWtGQk1VSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhGUVVFMFFpeHJRa0ZCTlVJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhYUVVGb1FpeEZRVUUyUWl4dFFrRkJOMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4RlFVRjVRaXhuUWtGQmVrSTdPMEZCUlVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1YwRkJhRUlzUlVGQk5rSXNRMEZCUXl4elFrRkJSQ3hEUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZkQlFXaENMRVZCUVRaQ0xFTkJRVU1zYzBKQlFVUXNRMEZCTjBJN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVlVGQmFFSXNSVUZCTkVJc1EwRkJReXd5UWtGQlJDeERRVUUxUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRk5CUVdoQ0xFVkJRVEpDTEVOQlFVTXNNRUpCUVVRc1EwRkJNMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RlFVRTBRaXhEUVVGRExEUkNRVUZFTEVOQlFUVkNPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGZEJRV2hDTEVWQlFUWkNMRU5CUVVNc05FSkJRVVFzUTBGQk4wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4WFFVRm9RaXhGUVVFMlFpeERRVUZETERSQ1FVRkVMRU5CUVRkQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzWjBKQlFXaENMRVZCUVd0RExFTkJRVU1zYVVOQlFVUXNRMEZCYkVNN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhaUVVGb1FpeEZRVUU0UWl4RFFVRkRMRFpDUVVGRUxFTkJRVGxDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNhVUpCUVdoQ0xFVkJRVzFETEVOQlFVTXNhME5CUVVRc1EwRkJia003TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWVUZCYUVJc1JVRkJORUlzUTBGQlF5d3lRa0ZCUkN4RFFVRTFRanRCUVVOQk96czdRVUZIUVR0QlFVTkpPMEZCUTBvc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1VVRkJhRUlzUlVGQk1FSXNaMEpCUVRGQ096dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFhRVUZXTEVOQlFYTkNMRTlCUVhSQ0xFVkJRU3RDTERKQ1FVRXZRaXhGUVVFeVJDeEZRVUV6UkN4RlFVRTRSQ3hGUVVFNVJDeEZRVUZwUlN4RlFVRnFSVHRCUVVOQk8wRkJRMGc3T3p0cFEwRkZVVHRCUVVOTUxHbENRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFMUJRV3BDTzBGQlEwZzdPenM3UlVGc1JHZERMRTlCUVU4c1N6czdhMEpCUVhaQ0xFOGlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCbEtIUXNiaXh5S1h0bWRXNWpkR2x2YmlCektHOHNkU2w3YVdZb0lXNWJiMTBwZTJsbUtDRjBXMjlkS1h0MllYSWdZVDEwZVhCbGIyWWdjbVZ4ZFdseVpUMDlYQ0ptZFc1amRHbHZibHdpSmlaeVpYRjFhWEpsTzJsbUtDRjFKaVpoS1hKbGRIVnliaUJoS0c4c0lUQXBPMmxtS0drcGNtVjBkWEp1SUdrb2J5d2hNQ2s3ZG1GeUlHWTlibVYzSUVWeWNtOXlLRndpUTJGdWJtOTBJR1pwYm1RZ2JXOWtkV3hsSUNkY0lpdHZLMXdpSjF3aUtUdDBhSEp2ZHlCbUxtTnZaR1U5WENKTlQwUlZURVZmVGs5VVgwWlBWVTVFWENJc1puMTJZWElnYkQxdVcyOWRQWHRsZUhCdmNuUnpPbnQ5ZlR0MFcyOWRXekJkTG1OaGJHd29iQzVsZUhCdmNuUnpMR1oxYm1OMGFXOXVLR1VwZTNaaGNpQnVQWFJiYjExYk1WMWJaVjA3Y21WMGRYSnVJSE1vYmo5dU9tVXBmU3hzTEd3dVpYaHdiM0owY3l4bExIUXNiaXh5S1gxeVpYUjFjbTRnYmx0dlhTNWxlSEJ2Y25SemZYWmhjaUJwUFhSNWNHVnZaaUJ5WlhGMWFYSmxQVDFjSW1aMWJtTjBhVzl1WENJbUpuSmxjWFZwY21VN1ptOXlLSFpoY2lCdlBUQTdienh5TG14bGJtZDBhRHR2S3lzcGN5aHlXMjlkS1R0eVpYUjFjbTRnYzMwcElpd2laWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUTJGeVpFSjFkSFJ2YmlCbGVIUmxibVJ6SUZCb1lYTmxjaTVDZFhSMGIyNGdlMXh1WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvZXlCbllXMWxMQ0I0TENCNUxDQmhjM05sZEN3Z1kyRnNiR0poWTJzc0lHTmhiR3hpWVdOclEyOXVkR1Y0ZEN3Z2IzWmxja1p5WVcxbExDQnZkWFJHY21GdFpTd2daRzkzYmtaeVlXMWxMQ0IxY0VaeVlXMWxMSFpoYkhWbGZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaG5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dZMkZzYkdKaFkyc3NJR05oYkd4aVlXTnJRMjl1ZEdWNGRDd2diM1psY2taeVlXMWxMQ0J2ZFhSR2NtRnRaU3dnWkc5M2JrWnlZVzFsTENCMWNFWnlZVzFsS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbElEMGdkbUZzZFdVN1hHNGdJQ0FnZlZ4dWZWeHVYRzVjYmx4dVhHNWNibHh1WEc1Y2JpOHZJR3hsZENCallYSmtJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNWlkWFIwYjI0b2JHVm1kRk53WVdObElDc2dhU2tzSUhSdmNGTndZV05sSUNzZ2FTd2dYQ0owYVd4bGMxd2lMQ0JtZFc1amRHbHZiaWdwZTJOdmJuTnZiR1V1Ykc5bktGd2lZWE5jSWlsOUxDQjBhR2x6S1R0Y2JteGxkQ0JqWVhKa0lEMGdibVYzSUVOaGNtUkNkWFIwYjI0b2UxeHVJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQjRPaUJzWldaMFUzQmhZMlVnS3lCcElDb2dLSFJvYVhNdWRHbHNaVk5wZW1VZ0t5QjBhR2x6TG5ScGJHVlRjR0ZqYVc1bktTeGNiaUFnSUNCNU9pQjBiM0JUY0dGalpTQXJJR2tnS2lBb2RHaHBjeTUwYVd4bFUybDZaU0FySUhSb2FYTXVkR2xzWlZOd1lXTnBibWNwTEZ4dUlDQWdJR0Z6YzJWME9pQW5kR2xzWlhNbkxGeHVJQ0FnSUdSdmQyNUdjbUZ0WlRvZ01UQXNYRzRnSUNBZ2IzVjBSbkpoYldVNklERXdMRnh1SUNBZ0lHOTJaWEpHY21GdFpUb2dNVEFzWEc0Z0lDQWdkWEJHY21GdFpUb2dNVEFzWEc0Z0lDQWdkbUZzZFdVNklGd2liMnBsZEdWY0lseHVmU2s3WEc1allYSmtMbVp5WVcxbElEMGdNanRjYm5Sb2FYTXViV1Z1ZFZCaGJtVnNMbUZrWkNoallYSmtLVHRjYmlJc0ltVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRlJsZUhSQ2RYUjBiMjRnWlhoMFpXNWtjeUJRYUdGelpYSXVRblYwZEc5dUlIdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLSHNnWjJGdFpTd2dlQ3dnZVN3Z1lYTnpaWFFzSUdOaGJHeGlZV05yTENCallXeHNZbUZqYTBOdmJuUmxlSFFzSUc5MlpYSkdjbUZ0WlN3Z2IzVjBSbkpoYldVc0lHUnZkMjVHY21GdFpTd2dkWEJHY21GdFpTd2diR0ZpWld3c0lITjBlV3hsSUgwcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHTmhiR3hpWVdOckxDQmpZV3hzWW1GamEwTnZiblJsZUhRc0lHOTJaWEpHY21GdFpTd2diM1YwUm5KaGJXVXNJR1J2ZDI1R2NtRnRaU3dnZFhCR2NtRnRaU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbXhoWW1Wc0lEMGdiR0ZpWld3N1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSNWJHVWdQU0J6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MFpYaDBJRDBnYm1WM0lGQm9ZWE5sY2k1VVpYaDBLSFJvYVhNdVoyRnRaU3dnTUN3Z01Dd2dkR2hwY3k1c1lXSmxiQ3dnZEdocGN5NXpkSGxzWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEdWNGRDNWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtRmtaRU5vYVd4a0tIUm9hWE11ZEdWNGRDazdYRzVjYmlBZ0lDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ0tpQmhjeUJ6ZEdGMFpYTWdabkp2YlNBbkxpOXpkR0YwWlhNbk8xeHVZMjl1YzNRZ1IwRk5SU0E5SUc1bGR5QlFhR0Z6WlhJdVIyRnRaU2c0TURBc0lERXdNREFzSUZCb1lYTmxjaTVCVlZSUEtUdGNibHh1VDJKcVpXTjBMbXRsZVhNb2MzUmhkR1Z6S1M1bWIzSkZZV05vS0hOMFlYUmxJRDArSUVkQlRVVXVjM1JoZEdVdVlXUmtLSE4wWVhSbExDQnpkR0YwWlhOYmMzUmhkR1ZkS1NrN1hHNWNia2RCVFVVdWMzUmhkR1V1YzNSaGNuUW9KMEp2YjNRbktUdGNiaUlzSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFSjFiR3hsZENCbGVIUmxibVJ6SUZCb1lYTmxjaTVUY0hKcGRHVWdlMXh1WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvZXlCbllXMWxMQ0I0TENCNUxDQmhjM05sZEN3Z2FHVmhiSFJvTENCMGFXNTBJRDBnTUhobVpqQXdNREFnZlNrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lobllXMWxMQ0I0TENCNUxDQmhjM05sZENrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WTJGc1pTNXpaWFJVYnlnd0xqZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUNBOUlHaGxZV3gwYUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVc1MElEMGdkR2x1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqYUdWamExZHZjbXhrUW05MWJtUnpJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRYUlBaa0p2ZFc1a2MwdHBiR3dnUFNCMGNuVmxPMXh1SUNBZ0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCQ2RXeHNaWFFnWm5KdmJTQW5MaTlpZFd4c1pYUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkZibVZ0ZVNCbGVIUmxibVJ6SUZCb1lYTmxjaTVUY0hKcGRHVWdlMXh1WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvZXlCbllXMWxMQ0I0TENCNUxDQmhjM05sZEN3Z1puSmhiV1VzSUdobFlXeDBhQ3dnWW5Wc2JHVjBVM0JsWldRZ2ZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaG5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dabkpoYldVcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaU0E5SUdkaGJXVTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elkyRnNaUzV6WlhSVWJ5Z3dMamdwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFDQTlJR2hsWVd4MGFEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFlYaElaV0ZzZEdnZ1BTQm9aV0ZzZEdnN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXdhSGx6YVdOekxtRnlZMkZrWlM1bGJtRmliR1VvZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWhibWx0WVhScGIyNXpMbUZrWkNnbmMzQnBibTVwYm1jbkxDQmJNQ3dnTVN3Z01pd2dNeXdnTkN3Z05Td2dOaXdnTnl3Z09Dd2dPU3dnTVRBc0lERXhMQ0F4TWl3Z01UTXNJREUwWFN3Z016QXNJSFJ5ZFdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYa29KM053YVc1dWFXNW5KeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUnpJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNW5jbTkxY0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMWJHeGxkSE11Wlc1aFlteGxRbTlrZVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMFUzQmxaV1FnUFNCaWRXeHNaWFJUY0dWbFpEdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTm9iM1JUYjNWdVpDQTlJSFJvYVhNdVoyRnRaUzVoWkdRdWMyOTFibVFvSjJWdVpXMTVVMmh2ZENjcE8xeHVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RYQmtZWFJsS0NrZ2UxeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkJ2YzJsMGFXOXVMbmdnUENBd0xqQTBJQ29nZEdocGN5NW5ZVzFsTG5kdmNteGtMbmRwWkhSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJ2YzJsMGFXOXVMbmdnUFNBd0xqQTBJQ29nZEdocGN5NW5ZVzFsTG5kdmNteGtMbmRwWkhSb0lDc2dNanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNTJaV3h2WTJsMGVTNTRJQ285SUMweE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSFJvYVhNdWNHOXphWFJwYjI0dWVDQStJREF1T1RZZ0tpQjBhR2x6TG1kaGJXVXVkMjl5YkdRdWQybGtkR2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNHOXphWFJwYjI0dWVDQTlJREF1T1RZZ0tpQjBhR2x6TG1kaGJXVXVkMjl5YkdRdWQybGtkR2dnTFNBeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG5abGJHOWphWFI1TG5nZ0tqMGdMVEU3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXdiM05wZEdsdmJpNTVJQzBnZEdocGN5NW9aV2xuYUhRZ0x5QXlJRDRnZEdocGN5NW5ZVzFsTG5kdmNteGtMbWhsYVdkb2RDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVyYVd4c0tDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnphRzl2ZENncElIdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTm9iM1JUYjNWdVpDNXdiR0Y1S0Z3aVhDSXNNQ3d3TGpVcE8xeHVYRzRnSUNBZ0lDQWdJR3hsZENCaWRXeHNaWFFnUFNCMGFHbHpMbUoxYkd4bGRITXVaMlYwUm1seWMzUkZlR2x6ZEhNb1ptRnNjMlVwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2doWW5Wc2JHVjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlkV3hzWlhRZ1BTQnVaWGNnUW5Wc2JHVjBLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NTRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSb2FYTXVZbTkwZEc5dExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGxZV3gwYURvZ01peGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oySjFiR3hsZENjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHbHVkRG9nTUhobVpqQXdNREJjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUnpMbUZrWkNoaWRXeHNaWFFwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZblZzYkdWMExuSmxjMlYwS0hSb2FYTXVlQ3dnZEdocGN5NWliM1IwYjIwc0lESXBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1luVnNiR1YwTG1KdlpIa3VkbVZzYjJOcGRIa3VlU0E5SUhSb2FYTXVZblZzYkdWMFUzQmxaV1E3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaR0Z0WVdkbEtHRnRiM1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1a1lXMWhaMlVvWVcxdmRXNTBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWE5sZENoN0lIZ3NJSGtzSUdobFlXeDBhQ3dnWW5Wc2JHVjBVM0JsWldRc0lITndaV1ZrSUgwcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWNtVnpaWFFvZUN3Z2VTd2dhR1ZoYkhSb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJUY0dWbFpDQTlJR0oxYkd4bGRGTndaV1ZrTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUp2WkhrdWRtVnNiMk5wZEhrdWVDQTlJSE53WldWa0xuZzdYRzRnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzUyWld4dlkybDBlUzU1SUQwZ2MzQmxaV1F1ZVR0Y2JpQWdJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdRblZzYkdWMElHWnliMjBnSnk0dlluVnNiR1YwSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUlc1bGJYa2daWGgwWlc1a2N5QlFhR0Z6WlhJdVUzQnlhWFJsSUh0Y2JseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIc2daMkZ0WlN3Z2VDd2dlU3dnWVhOelpYUXNJR1p5WVcxbExDQm9aV0ZzZEdnc0lHSjFiR3hsZEZOd1pXVmtMSE5wZW1VZ2ZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaG5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dabkpoYldVcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaU0E5SUdkaGJXVTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNibHh1SUNBZ0lDQWdJQ0F2TDNOcGVtVWdQU0J6WTJGc1pWeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OcGVtVWdQU0J6YVhwbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OallXeGxMbk5sZEZSdktITnBlbVVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFDQTlJR2hsWVd4MGFEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFlYaElaV0ZzZEdnZ1BTQm9aV0ZzZEdnN1hHNWNibHh1SUNBZ0lDQWdJQ0F2TDBkeVlYWnBkSGxjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5Cb2VYTnBZM011WVhKallXUmxMbVZ1WVdKc1pTaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxtTnZiR3hwWkdWWGIzSnNaRUp2ZFc1a2N5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNW5jbUYyYVhSNUxua2dQU0ExTURBN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNWliM1Z1WTJVdWMyVjBLREVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WVc1cGJXRjBhVzl1Y3k1aFpHUW9KM053YVc1dWFXNW5KeXdnV3pBc0lERXNJRElzSURNc0lEUXNJRFVzSURZc0lEY3NJRGdzSURrc0lERXdMQ0F4TVN3Z01USXNJREV6TENBeE5GMHNJRE13TENCMGNuVmxLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1S0NkemNHbHVibWx1WnljcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwY3lBOUlIUm9hWE11WjJGdFpTNWhaR1F1WjNKdmRYQW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSekxtVnVZV0pzWlVKdlpIa2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMWJHeGxkRk53WldWa0lEMGdZblZzYkdWMFUzQmxaV1E3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YUc5MFUyOTFibVFnUFNCMGFHbHpMbWRoYldVdVlXUmtMbk52ZFc1a0tDZGxibVZ0ZVZOb2IzUW5LVHRjYmx4dUlDQWdJSDFjYmx4dUlDQWdJSFZ3WkdGMFpTZ3BJSHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d2IzTnBkR2x2Ymk1NElEd2dNQzR3TkNBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1M2FXUjBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2IzTnBkR2x2Ymk1NElEMGdNQzR3TkNBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1M2FXUjBhQ0FySURJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1ZG1Wc2IyTnBkSGt1ZUNBcVBTQXRNVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJR2xtSUNoMGFHbHpMbkJ2YzJsMGFXOXVMbmdnUGlBd0xqazJJQ29nZEdocGN5NW5ZVzFsTG5kdmNteGtMbmRwWkhSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJ2YzJsMGFXOXVMbmdnUFNBd0xqazJJQ29nZEdocGN5NW5ZVzFsTG5kdmNteGtMbmRwWkhSb0lDMGdNanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNTJaV3h2WTJsMGVTNTRJQ285SUMweE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0c5emFYUnBiMjR1ZVNBdElIUm9hWE11YUdWcFoyaDBJQzhnTWlBK0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1b1pXbG5hSFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWEybHNiQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNWNibHh1SUNBZ0lHUmhiV0ZuWlNoaGJXOTFiblFwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1WkdGdFlXZGxLR0Z0YjNWdWRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnpaWFFvZXlCNExDQjVMQ0JvWldGc2RHZ3NJR0oxYkd4bGRGTndaV1ZrTENCemNHVmxaQ0I5S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5KbGMyVjBLSGdzSUhrc0lHaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBVM0JsWldRZ1BTQmlkV3hzWlhSVGNHVmxaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG5abGJHOWphWFI1TG5nZ1BTQnpjR1ZsWkM1NE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KdlpIa3VkbVZzYjJOcGRIa3VlU0E5SUhOd1pXVmtMbms3WEc0Z0lDQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElGQnNZWGxsY2lCbWNtOXRJQ2N1TGk5d2NtVm1ZV0p6TDNCc1lYbGxjaWM3WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QklkV1FnWlhoMFpXNWtjeUJRYUdGelpYSXVSM0p2ZFhBZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIc2daMkZ0WlN3Z2NHeGhlV1Z5SUgwcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb1oyRnRaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlNBOUlHZGhiV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeUlEMGdjR3hoZVdWeU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KbklEMGdibVYzSUZCb1lYTmxjaTVKYldGblpTaDBhR2x6TG1kaGJXVXNJREFzSURBc0lDZG9kV1JDWnljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5kcFpIUm9JRDBnT0RBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1obFlXeDBhR0poY2lBOUlHNWxkeUJRYUdGelpYSXVVM0J5YVhSbEtIUm9hWE11WjJGdFpTd2dNaXdnTWl3Z0oyaGxZV3gwYUdKaGNpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUdKaGNpNXpZMkZzWlM1elpYUlVieWd3TGprNU5Td2dNVEVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOdmNtVWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qYjNKbFRHRmlaV3dnUFNBblUyTnZjbVU2SUNjN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOdmNtVlVaWGgwSUQwZ2JtVjNJRkJvWVhObGNpNVVaWGgwS0hSb2FYTXVaMkZ0WlN3Z01qQXNJREUwTENCMGFHbHpMbk5qYjNKbFRHRmlaV3dnS3lCMGFHbHpMbk5qYjNKbExDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTVROd2VDQldaWEprWVc1aEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2QzYUdsMFpTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmx4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtRmtaQ2gwYUdsekxtSm5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhaR1FvZEdocGN5NW9aV0ZzZEdoaVlYSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtRmtaQ2gwYUdsekxuTmpiM0psVkdWNGRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RYQmtZWFJsU0dWaGJIUm9LSEJzWVhsbGNpa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUdKaGNpNWpjbTl3S0c1bGR5QlFhR0Z6WlhJdVVtVmpkR0Z1WjJ4bEtEQXNJREFzSUNoMGFHbHpMbkJzWVhsbGNpNW9aV0ZzZEdnZ0x5QjBhR2x6TG5Cc1lYbGxjaTV0WVhoSVpXRnNkR2dwSUNvZ2RHaHBjeTUzYVdSMGFDd2dNVEFwS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWldGc2RHaGlZWEl1ZFhCa1lYUmxRM0p2Y0NncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaVk5qYjNKbEtHRnRiM1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OamIzSmxJQ3M5SUdGdGIzVnVkRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpZMjl5WlZSbGVIUXVkR1Y0ZENBOUlIUm9hWE11YzJOdmNtVk1ZV0psYkNBcklDaDBhR2x6TG5OamIzSmxJQ29nTVRBcE8xeHVJQ0FnSUgxY2JseHVmVHRjYmlJc0ltbHRjRzl5ZENCQ2RXeHNaWFFnWm5KdmJTQW5MaTlpZFd4c1pYUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiR0Y1WlhJZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNCeWFYUmxJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hzZ1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHWnlZVzFsTENCb1pXRnNkR2dnZlNrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lobllXMWxMQ0I0TENCNUxDQmhjM05sZEN3Z1puSmhiV1VwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTQTlJR2RoYldVN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WTJGc1pTNXpaWFJVYnlnd0xqZ3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhR1ZoYkhSb0lEMGdhR1ZoYkhSb08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xaGVFaGxZV3gwYUNBOUlHaGxZV3gwYUR0Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5Cb2VYTnBZM011WVhKallXUmxMbVZ1WVdKc1pTaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ0x5OW5jbUYyYVhSNVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNW5jbUYyYVhSNUxua2dQU0F4TURBN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNWpiMnhzYVdSbFYyOXliR1JDYjNWdVpITWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQXZMMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMGN5QTlJSFJvYVhNdVoyRnRaUzVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUnpMbVZ1WVdKc1pVSnZaSGtnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEZOd1pXVmtJRDBnTFRVd01EdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTm9iM1JUYjNWdVpDQTlJSFJvYVhNdVoyRnRaUzVoWkdRdWMyOTFibVFvSjNCc1lYbGxjbE5vYjNRbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1VvS1NCN1hHNWNiaUFnSUNBZ0lDQWdMeThnZEdocGN5NW5ZVzFsTG1SbFluVm5MbUp2Wkhrb2RHaHBjeWs3WEc1Y2JseHVYRzRnSUNBZ0lDQWdJQzh2SUdsbUlDaDBhR2x6TG1kaGJXVXVhVzV3ZFhRdVlXTjBhWFpsVUc5cGJuUmxjaTVwYzBSdmQyNHBJSHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUd4bFpuUkxaWGtnUFNCMGFHbHpMbWRoYldVdWFXNXdkWFF1YTJWNVltOWhjbVF1YVhORWIzZHVLRkJvWVhObGNpNUxaWGxpYjJGeVpDNU1SVVpVS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCeWFXZG9kRXRsZVNBOUlIUm9hWE11WjJGdFpTNXBibkIxZEM1clpYbGliMkZ5WkM1cGMwUnZkMjRvVUdoaGMyVnlMa3RsZVdKdllYSmtMbEpKUjBoVUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtHeGxablJMWlhrcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZUNBdFBTQTJPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJR2xtS0hKcFoyaDBTMlY1S1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbmdnS3owZ05qdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyaHZiM1FvS1NCN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUdKMWJHeGxkQ0E5SUhSb2FYTXVZblZzYkdWMGN5NW5aWFJHYVhKemRFVjRhWE4wY3lobVlXeHpaU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZpZFd4c1pYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZENBOUlHNWxkeUJDZFd4c1pYUW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxuZ3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NTBiM0FzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4elhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBblluVnNiR1YwSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFXNTBPaUF3ZURBMFl6RXhNbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QmphR0Z1WjJVZ2RHaHBjeUJ1ZFcxaVpYSWdkRzhnYzJodmIzUWdiR1Z6Y3lCaWRXeHNaWFJ6SUdGMElHRWdkR2x0WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvZEdocGN5NWlkV3hzWlhSekxtTm9hV3hrY21WdUxteGxibWQwYUNBOFBTQTFLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTm9iM1JUYjNWdVpDNXdiR0Y1S0Z3aVhDSXNNQ3d3TGpVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBjeTVoWkdRb1luVnNiR1YwS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZEM1aWIyUjVMblpsYkc5amFYUjVMbmtnUFNCMGFHbHpMbUoxYkd4bGRGTndaV1ZrTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6YUc5MFUyOTFibVF1Y0d4aGVTaGNJbHdpTERBc01DNDFLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZEM1eVpYTmxkQ2gwYUdsekxuZ3NJSFJvYVhNdWRHOXdMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRDNWliMlI1TG5abGJHOWphWFI1TG5rZ1BTQjBhR2x6TG1KMWJHeGxkRk53WldWa08xeHVJQ0FnSUNBZ0lDQjlYRzVjYmx4dUlDQWdJSDFjYmx4dUlDQWdJR1JoYldGblpTaGhiVzkxYm5RcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdVpHRnRZV2RsS0dGdGIzVnVkQ2s3WEc0Z0lDQWdmVnh1WEc1OVhHNGlMQ0psZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCQ2IyOTBJR1Y0ZEdWdVpITWdVR2hoYzJWeUxsTjBZWFJsSUh0Y2JseHVJQ0FnSUhCeVpXeHZZV1FvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpkR0ZuWlM1aVlXTnJaM0p2ZFc1a1EyOXNiM0lnUFNBbkl6QXdNQ2M3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1cGJXRm5aU2duYkc5aFpHVnlRbWNuTENBbmFXMW5MMnh2WVdSbGNpMWlaeTV3Ym1jbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbWx0WVdkbEtDZHNiMkZrWlhKQ1lYSW5MQ0FuYVcxbkwyeHZZV1JsY2kxaVlYSXVjRzVuSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qWVd4bExuTmpZV3hsVFc5a1pTQTlJRkJvWVhObGNpNVRZMkZzWlUxaGJtRm5aWEl1VTBoUFYxOUJURXc3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WTJGc1pTNXdZV2RsUVd4cFoyNUliM0pwZW05dWRHRnNiSGtnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpZV3hsTG5CaFoyVkJiR2xuYmxabGNuUnBZMkZzYkhrZ1BTQjBjblZsTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXdhSGx6YVdOekxuTjBZWEowVTNsemRHVnRLRkJvWVhObGNpNVFhSGx6YVdOekxrRlNRMEZFUlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0oxQnlaV3h2WVdRbktUdGNiaUFnSUNCOVhHNWNibjFjYmlJc0ltVjRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QkNiMjkwZlNCbWNtOXRJQ2N1TDJKdmIzUW5PMXh1Wlhod2IzSjBJSHRrWldaaGRXeDBJR0Z6SUZCeVpXeHZZV1I5SUdaeWIyMGdKeTR2Y0hKbGJHOWhaQ2M3WEc1bGVIQnZjblFnZTJSbFptRjFiSFFnWVhNZ1RXVnVkWDBnWm5KdmJTQW5MaTl0Wlc1MUp6dGNiaTh2WjJGdFpURmNibVY0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJRYkdGNWZTQm1jbTl0SUNjdUwzQnNZWGtuTzF4dVpYaHdiM0owSUh0a1pXWmhkV3gwSUdGeklFOTJaWEo5SUdaeWIyMGdKeTR2YjNabGNpYzdYRzVjYmk4dmNHRnVaMEowYmx4dVpYaHdiM0owSUh0a1pXWmhkV3gwSUdGeklGQnNZWGxRWVc1bmZTQm1jbTl0SUNjdUwzQnNZWGxRWVc1bkp6dGNibVY0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJRWVc1blQzWmxjbjBnWm5KdmJTQW5MaTl3WVc1blQzWmxjaWM3WEc1Y2JpOHZaMkZ0WlROY2JtVjRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QlFiR0Y1VUdGcGNuTjlJR1p5YjIwZ0p5NHZjR3hoZVZCaGFYSnpKenRjYm1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCUVlXbHljMDkyWlhKOUlHWnliMjBnSnk0dmNHRnBjbk5QZG1WeUp6dGNiaUlzSW1sdGNHOXlkQ0JVWlhoMFFuVjBkRzl1SUdaeWIyMGdKeTR1TDJWNGRHVnVjMmx2Ym5NdmRHVjRkR0oxZEhSdmJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFMWxiblVnWlhoMFpXNWtjeUJRYUdGelpYSXVVM1JoZEdVZ2UxeHVYRzRnSUNBZ1kzSmxZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGRHeGxJRDBnYm1WM0lGQm9ZWE5sY2k1VVpYaDBLSFJvYVhNdVoyRnRaU3dnZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsZ3NJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWkxUSXdNQ3dnSjBOb2IyOXpaU0JoSUdkaGJXVWhKeXdnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ0p6TTJjSGdnVkdGb2IyMWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ0oyTmxiblJsY2lkY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRHbDBiR1V1WVc1amFHOXlMbk5sZEZSdktEQXVOU2s3WEc0Z0lDQWdJQ0FnSUM4dklIUm9hWE11YlhWemFXTWdQU0IwYUdsekxtZGhiV1V1WVdSa0xtRjFaR2x2S0NkdFpXNTFUWFZ6YVdNbktUdGNibHh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViR1ZtZEVKMGJpQTlJRzVsZHlCVVpYaDBRblYwZEc5dUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUlDMGdNakF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWRIUnZiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkbVZ5Um5KaGJXVTZJRElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkWFJHY21GdFpUb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnZkMjVHY21GdFpUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVndSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCc1lXSmxiRG9nSjB4bFpuUkNkRzRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1UWndlQ0JXWlhKa1lXNWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrOTJaWEpUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxVDNabGNpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBiazkxZEZOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WUGRYUW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVFYjNkdVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVUnZkMjRuS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG14bFpuUkNkRzR1YzJWMFQzWmxjbE52ZFc1a0tIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c1pXWjBRblJ1TG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14bFpuUkNkRzR1YzJWMFJHOTNibE52ZFc1a0tIUm9hWE11WW5SdVJHOTNibE52ZFc1a0tUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteGxablJDZEc0dWIyNUpibkIxZEZWd0xtRmtaQ2dvS1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk5MGFHbHpMbTExYzJsakxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1V1YzNSaGNuUW9KMUJzWVhsUVlXbHljeWNwTzF4dVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMeUJUWldOdmJtUWdRblJ1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RZ1BTQnVaWGNnVkdWNGRFSjFkSFJ2YmloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSlpMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaWRYUjBiMjRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1psY2taeVlXMWxPaUF5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1YwUm5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiM2R1Um5KaGJXVTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjFjRVp5WVcxbE9pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHRmlaV3c2SUNkVGRHRnlkQ2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkSGxzWlRvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZiblE2SUNjeE5uQjRJRlpsY21SaGJtRW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1pwYkd3NklDZDNhR2wwWlNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXeHBaMjQ2SUNkalpXNTBaWEluWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZQZG1WeUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVUM1YwVTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFU5MWRDY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBia1J2ZDI1VGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R0Wlc1MVJHOTNiaWNwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXVjMlYwVDNabGNsTnZkVzVrS0hSb2FYTXVZblJ1VDNabGNsTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDNXpaWFJQZFhSVGIzVnVaQ2gwYUdsekxtSjBiazkxZEZOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1elpYUkViM2R1VTI5MWJtUW9kR2hwY3k1aWRHNUViM2R1VTI5MWJtUXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RdWIyNUpibkIxZEZWd0xtRmtaQ2dvS1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk5MGFHbHpMbTExYzJsakxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1V1YzNSaGNuUW9KMUJzWVhrbktUdGNibHh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ0x5OGdkR2hwY21RZ1FuUnVYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHRnVaMEowYmlBOUlHNWxkeUJVWlhoMFFuVjBkRzl1S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZSUNzZ01qQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkoxZEhSdmJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRtVnlSbkpoYldVNklESXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRYUkdjbUZ0WlRvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSdmQyNUdjbUZ0WlRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWd1JuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWVdKbGJEb2dKMUJoYm1jdGJHbHJaU0VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1UWndlQ0JXWlhKa1lXNWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrOTJaWEpUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxVDNabGNpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBiazkxZEZOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WUGRYUW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVFYjNkdVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVUnZkMjRuS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CaGJtZENkRzR1YzJWMFQzWmxjbE52ZFc1a0tIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d1lXNW5RblJ1TG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CaGJtZENkRzR1YzJWMFJHOTNibE52ZFc1a0tIUm9hWE11WW5SdVJHOTNibE52ZFc1a0tUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuQmhibWRDZEc0dWIyNUpibkIxZEZWd0xtRmtaQ2dvS1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk5MGFHbHpMbTExYzJsakxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1V1YzNSaGNuUW9KMUJzWVhsUVlXNW5KeWs3WEc1Y2JseHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1dFpXNTFVR0Z1Wld3Z1BTQjBhR2x6TG1Ga1pDNW5jbTkxY0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVlFZVzVsYkM1aFpHUW9kR2hwY3k1MGFYUnNaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFZCaGJtVnNMbUZrWkNoMGFHbHpMbXhsWm5SQ2RHNHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblZRWVc1bGJDNWhaR1FvZEdocGN5NXpkR0Z5ZENrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRWQmhibVZzTG1Ga1pDaDBhR2x6TG5CaGJtZENkRzRwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZkR2hwY3k1dGRYTnBZeTVzYjI5d1JuVnNiQ2dwTzF4dUlDQWdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQlVaWGgwUW5WMGRHOXVJR1p5YjIwZ0p5NHVMMlY0ZEdWdWMybHZibk12ZEdWNGRHSjFkSFJ2YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUU5MlpYSWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVUzUmhkR1VnZTF4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpVYVhSc1pTQTlJRzVsZHlCUWFHRnpaWEl1VkdWNGRDaDBhR2x6TG1kaGJXVXNJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V1MweU1EQXNJQ2RIWVcxbElHOTJaWEluTENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5Nelp3ZUNCVVlXaHZiV0VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzYVdkdU9pQW5ZMlZ1ZEdWeUoxeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsUnBkR3hsTG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUWdQU0J1WlhjZ1ZHVjRkRUoxZEhSdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaTFRNd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RpZFhSMGIyNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzWmxja1p5WVcxbE9pQXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzVjBSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IzZHVSbkpoYldVNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2RVY25rZ1lXZGhhVzRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1UWndlQ0JXWlhKa1lXNWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVWdQU0J1WlhjZ1ZHVjRkRUoxZEhSdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaS3pNd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RpZFhSMGIyNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzWmxja1p5WVcxbE9pQXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzVjBSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IzZHVSbkpoYldVNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2ROWlc1MUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05dWREb2dKekUyY0hnZ1ZtVnlaR0Z1WVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVQZG1WeVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTJaWEluS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1YwSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVJHOTNibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZFYjNkdUp5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1elpYUlBkbVZ5VTI5MWJtUW9kR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowTG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEVSdmQyNVRiM1Z1WkNoMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXpaWFJQZG1WeVUyOTFibVFvZEdocGN5NWlkRzVQZG1WeVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWMyVjBUM1YwVTI5MWJtUW9kR2hwY3k1aWRHNVBkWFJUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkUzV6WlhSRWIzZHVVMjkxYm1Rb2RHaHBjeTVpZEc1RWIzZHVVMjkxYm1RcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YjI1SmJuQjFkRVJ2ZDI0dVlXUmtLQ2dwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsTG5OMFlYSjBLQ2RRYkdGNUp5azdYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXZia2x1Y0hWMFJHOTNiaTVoWkdRb0tDazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0owMWxiblVuS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzSUQwZ2RHaHBjeTVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxtZGhiV1ZQZG1WeVZHbDBiR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWMzUmhjblFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWJXVnVkU2s3WEc0Z0lDQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElGUmxlSFJDZFhSMGIyNGdabkp2YlNBbkxpNHZaWGgwWlc1emFXOXVjeTkwWlhoMFluVjBkRzl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUdGdVowOTJaWElnWlhoMFpXNWtjeUJRYUdGelpYSXVVM1JoZEdVZ2UxeHVYRzRnSUNBZ1kzSmxZWFJsS0NrZ2UxeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVWFYUnNaU0E5SUc1bGR5QlFhR0Z6WlhJdVZHVjRkQ2gwYUdsekxtZGhiV1VzSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdTMHlNREFzSUNkUVlXNW5JRWRoYldVZ2IzWmxjaWNzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RNklDY3pObkI0SUZSaGFHOXRZU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1hV3hzT2lBbmQyaHBkR1VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZV3hwWjI0NklDZGpaVzUwWlhJblhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1ZQZG1WeVZHbDBiR1V1WVc1amFHOXlMbk5sZEZSdktEQXVOU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDQTlJRzVsZHlCVVpYaDBRblYwZEc5dUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGt0TXpBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkoxZEhSdmJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRtVnlSbkpoYldVNklESXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRYUkdjbUZ0WlRvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSdmQyNUdjbUZ0WlRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWd1JuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWVdKbGJEb2dKMVJ5ZVNCaFoyRnBiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkSGxzWlRvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZiblE2SUNjeE5uQjRJRlpsY21SaGJtRW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1pwYkd3NklDZDNhR2wwWlNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXeHBaMjQ2SUNkalpXNTBaWEluWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTQTlJRzVsZHlCVVpYaDBRblYwZEc5dUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGtyTXpBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkoxZEhSdmJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRtVnlSbkpoYldVNklESXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRYUkdjbUZ0WlRvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSdmQyNUdjbUZ0WlRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWd1JuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWVdKbGJEb2dKMDFsYm5VbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5NVFp3ZUNCV1pYSmtZVzVoSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUFuZDJocGRHVW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZzYVdkdU9pQW5ZMlZ1ZEdWeUoxeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBiazkyWlhKVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R0Wlc1MVQzWmxjaWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYms5MWRGTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjIxbGJuVlBkWFFuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1RWIzZHVVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVVJ2ZDI0bktUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowTG5ObGRFOTJaWEpUYjNWdVpDaDBhR2x6TG1KMGJrOTJaWEpUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YzJWMFQzVjBVMjkxYm1Rb2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXVjMlYwUkc5M2JsTnZkVzVrS0hSb2FYTXVZblJ1Ukc5M2JsTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MUxuTmxkRTkyWlhKVGIzVnVaQ2gwYUdsekxtSjBiazkyWlhKVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFM1elpYUlBkWFJUYjNWdVpDaDBhR2x6TG1KMGJrOTFkRk52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFpXNTFMbk5sZEVSdmQyNVRiM1Z1WkNoMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV2YmtsdWNIVjBSRzkzYmk1aFpHUW9LQ2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1V1YzNSaGNuUW9KMUJzWVhsUVlXNW5KeWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkUzV2YmtsdWNIVjBSRzkzYmk1aFpHUW9LQ2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1V1YzNSaGNuUW9KMDFsYm5VbktUdGNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0lEMGdkR2hwY3k1aFpHUXVaM0p2ZFhBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xCaGJtVnNMbUZrWkNoMGFHbHpMbWRoYldWUGRtVnlWR2wwYkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VUdGdVpXd3VZV1JrS0hSb2FYTXVjM1JoY25RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VUdGdVpXd3VZV1JrS0hSb2FYTXViV1Z1ZFNrN1hHNGdJQ0FnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJRlJsZUhSQ2RYUjBiMjRnWm5KdmJTQW5MaTR2WlhoMFpXNXphVzl1Y3k5MFpYaDBZblYwZEc5dUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHRnVaMDkyWlhJZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNSaGRHVWdlMXh1WEc0Z0lDQWdZM0psWVhSbEtDa2dlMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlVhWFJzWlNBOUlHNWxkeUJRYUdGelpYSXVWR1Y0ZENoMGFHbHpMbWRoYldVc0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZTENCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXUzB5TURBc0lDZFFZVzVuSUVkaGJXVWdiM1psY2ljc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdadmJuUTZJQ2N6Tm5CNElGUmhhRzl0WVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVd4cFoyNDZJQ2RqWlc1MFpYSW5YRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlWR2wwYkdVdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQ0E5SUc1bGR5QlVaWGgwUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrdE16QXNYRzRnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWRIUnZiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkbVZ5Um5KaGJXVTZJRElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkWFJHY21GdFpUb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnZkMjVHY21GdFpUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVndSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCc1lXSmxiRG9nSjFSeWVTQmhaMkZwYmljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pUb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RNklDY3hObkI0SUZabGNtUmhibUVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2QzYUdsMFpTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV3hwWjI0NklDZGpaVzUwWlhJblhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkU0E5SUc1bGR5QlVaWGgwUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrck16QXNYRzRnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWRIUnZiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkbVZ5Um5KaGJXVTZJRElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkWFJHY21GdFpUb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnZkMjVHY21GdFpUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVndSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCc1lXSmxiRG9nSjAxbGJuVW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTVRad2VDQldaWEprWVc1aEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hzT2lBbmQyaHBkR1VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGc2FXZHVPaUFuWTJWdWRHVnlKMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1psY2ljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrOTFkRk52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZQZFhRbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNUViM2R1VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFVSdmQyNG5LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMExuTmxkRTkyWlhKVGIzVnVaQ2gwYUdsekxtSjBiazkyWlhKVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RdWMyVjBUM1YwVTI5MWJtUW9kR2hwY3k1aWRHNVBkWFJUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YzJWMFJHOTNibE52ZFc1a0tIUm9hWE11WW5SdVJHOTNibE52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFpXNTFMbk5sZEU5MlpYSlRiM1Z1WkNoMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXpaWFJQZFhSVGIzVnVaQ2gwYUdsekxtSjBiazkxZEZOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxTG5ObGRFUnZkMjVUYjNWdVpDaDBhR2x6TG1KMGJrUnZkMjVUYjNWdVpDazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1dmJrbHVjSFYwUkc5M2JpNWhaR1FvS0NrOVBudGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjFCc1lYbFFZVzVuSnlrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFM1dmJrbHVjSFYwUkc5M2JpNWhaR1FvS0NrOVBudGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjAxbGJuVW5LVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xCaGJtVnNJRDBnZEdocGN5NWhaR1F1WjNKdmRYQW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzTG1Ga1pDaDBhR2x6TG1kaGJXVlBkbVZ5VkdsMGJHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1ZQZG1WeVVHRnVaV3d1WVdSa0tIUm9hWE11YzNSaGNuUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1ZQZG1WeVVHRnVaV3d1WVdSa0tIUm9hWE11YldWdWRTazdYRzRnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUZCc1lYbGxjaUJtY205dElDY3VMaTl3Y21WbVlXSnpMM0JzWVhsbGNpYzdYRzVwYlhCdmNuUWdSVzVsYlhrZ1puSnZiU0FuTGk0dmNISmxabUZpY3k5bGJtVnRlU2M3WEc1cGJYQnZjblFnU0ZWRUlHWnliMjBnSnk0dUwzQnlaV1poWW5NdmFIVmtKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVR3hoZVNCbGVIUmxibVJ6SUZCb1lYTmxjaTVUZEdGMFpTQjdYRzVjYmlBZ0lDQmpjbVZoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJQzh2Wm1GeVltRmpheUE5SUdKaFkydG5jbTkxYm1SY2JpQWdJQ0FnSUNBZ2RHaHBjeTVtWVhKaVlXTnJJRDBnZEdocGN5NWhaR1F1ZEdsc1pWTndjbWwwWlNnd0xDQXdMQ0E0TURBc0lESXpPREFzSUNkbVlYSmlZV05ySnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTBhVzFsTG5Oc2IzZE5iM1JwYjI0Z1BTQXdPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYldsbGN5QTlJSFJvYVhNdVlXUmtMbWR5YjNWd0tDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsY3k1bGJtRmliR1ZDYjJSNUlEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxjaUE5SUc1bGR5QlFiR0Y1WlhJb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lBd0xqa3lJQ29nZEdocGN5NW5ZVzFsTG5kdmNteGtMbWhsYVdkb2RDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdobFlXeDBhRG9nTVRBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2R6YldGc2JHWnBaMmgwWlhJbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm5KaGJXVTZJREZjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpkR0ZuWlM1aFpHUkRhR2xzWkNoMGFHbHpMbkJzWVhsbGNpazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW9kV1FnUFNCdVpYY2dTRlZFS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhCc1lYbGxjam9nZEdocGN5NXdiR0Y1WlhKY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG1sdWNIVjBMbTl1Ukc5M2JpNWhaR1FvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuUnBiV1V1YzJ4dmQwMXZkR2x2YmlBOUlEQTdYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXBibkIxZEM1dmJsVndMbUZrWkNnb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVkR2x0WlM1emJHOTNUVzkwYVc5dUlEMGdNRHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1U1c1MFpYSjJZV3dnUFNBeExqVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVVMmh2YjNSSmJuUmxjblpoYkNBOUlERTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5VTJodmIzUlVhVzFsSUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpUYUc5dmRFbHVkR1Z5ZG1Gc0lEMGdNQzR4Tmp0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVkR2x0WlM1bGRtVnVkSE11Ykc5dmNDaFFhR0Z6WlhJdVZHbHRaWEl1VTBWRFQwNUVJQ29nTVRBc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXVaVzVsYlhsSmJuUmxjblpoYkNBK0lEQXVPU0FwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsSmJuUmxjblpoYkNBdFBTQXdMakU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlVUpwZEcxaGNDQTlJSFJvYVhNdVlXUmtMbUpwZEcxaGNFUmhkR0VvZEdocGN5NW5ZVzFsTG5kcFpIUm9MQ0IwYUdsekxtZGhiV1V1YUdWcFoyaDBLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkbVZ5YkdGNVFtbDBiV0Z3TG1OMGVDNW1hV3hzVTNSNWJHVWdQU0FuSXpBd01DYzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzWmxjbXhoZVVKcGRHMWhjQzVqZEhndVptbHNiRkpsWTNRb01Dd2dNQ3dnZEdocGN5NW5ZVzFsTG5kcFpIUm9MQ0IwYUdsekxtZGhiV1V1YUdWcFoyaDBLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTkyWlhKc1lYa2dQU0IwYUdsekxtRmtaQzV6Y0hKcGRHVW9NQ3dnTUN3Z2RHaHBjeTV2ZG1WeWJHRjVRbWwwYldGd0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1TG5acGMybGliR1VnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkbVZ5YkdGNUxtRnNjR2hoSUQwZ01DNDNOVHRjYmx4dUlDQWdJQ0FnSUM4dklIUm9hWE11YlhWemFXTWdQU0IwYUdsekxtZGhiV1V1WVdSa0xtRjFaR2x2S0Nkd2JHRjVUWFZ6YVdNbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJJYVhSVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2RpZFd4c1pYUklhWFFuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVVVjRjR3h2YzJsdmJsTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjJWdVpXMTVSWGh3Ykc5emFXOXVKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeVJYaHdiRzl6YVc5dVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duY0d4aGVXVnlSWGh3Ykc5emFXOXVKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkbllXMWxUM1psY2ljcE8xeHVYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NXRkWE5wWXk1c2IyOXdSblZzYkNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaU2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVWR2x0WlNBclBTQjBhR2x6TG1kaGJXVXVkR2x0WlM1d2FIbHphV056Uld4aGNITmxaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZOb2IyOTBWR2x0WlNBclBTQjBhR2x6TG1kaGJXVXVkR2x0WlM1d2FIbHphV056Uld4aGNITmxaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKVGFHOXZkRlJwYldVZ0t6MGdkR2hwY3k1bllXMWxMblJwYldVdWNHaDVjMmxqYzBWc1lYQnpaV1E3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVpXNWxiWGxVYVcxbElENGdkR2hwY3k1bGJtVnRlVWx1ZEdWeWRtRnNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVWR2x0WlNBOUlEQTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTNKbFlYUmxSVzVsYlhrb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVjbTVrTG1sdWRHVm5aWEpKYmxKaGJtZGxLRFlzSURjMktTQXFJREV3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM0JsWldRNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZzFMQ0F4TUNrZ0tpQXhNQ0FxSUNoTllYUm9MbkpoYm1SdmJTZ3BJRDRnTUM0MUlEOGdNU0E2SUMweEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZzFMQ0F4TUNrZ0tpQXhNRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdWaGJIUm9PaUE1TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKMWJHeGxkRk53WldWa09pQjBhR2x6TG1kaGJXVXVjbTVrTG1sdWRHVm5aWEpKYmxKaGJtZGxLREV3TENBeU1Da2dLaUF4TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJGc2FXVnVKMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1bGJtVnRlVk5vYjI5MFZHbHRaU0ErSUhSb2FYTXVaVzVsYlhsVGFHOXZkRWx1ZEdWeWRtRnNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsY3k1bWIzSkZZV05vUVd4cGRtVW9aVzVsYlhrZ1BUNGdaVzVsYlhrdWMyaHZiM1FvS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11Y0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbmR2Y214a0xtSnlhVzVuVkc5VWIzQW9kR2hwY3k1dmRtVnliR0Y1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQnNZWGxsY2xOb2IyOTBWR2x0WlNBK0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSSmJuUmxjblpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKVGFHOXZkRlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNHeGhlV1Z5TG1Gc2FYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhJdWMyaHZiM1FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXdhSGx6YVdOekxtRnlZMkZrWlM1dmRtVnliR0Z3S0hSb2FYTXVjR3hoZVdWeUxtSjFiR3hsZEhNc0lIUm9hWE11Wlc1bGJXbGxjeXdnZEdocGN5NW9hWFJGYm1WdGVTd2diblZzYkN3Z2RHaHBjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuQm9lWE5wWTNNdVlYSmpZV1JsTG05MlpYSnNZWEFvZEdocGN5NXdiR0Y1WlhJc0lIUm9hWE11Wlc1bGJXbGxjeXdnZEdocGN5NWpjbUZ6YUVWdVpXMTVMQ0J1ZFd4c0xDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMXBaWE11Wm05eVJXRmphQ2hsYm1WdGVTQTlQaUIwYUdsekxtZGhiV1V1Y0doNWMybGpjeTVoY21OaFpHVXViM1psY214aGNDaDBhR2x6TG5Cc1lYbGxjaXdnWlc1bGJYa3VZblZzYkdWMGN5d2dkR2hwY3k1b2FYUlFiR0Y1WlhJc0lHNTFiR3dzSUhSb2FYTXBLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbVpoY21KaFkyc3VkR2xzWlZCdmMybDBhVzl1TG5rZ0t6MGdNenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpjbVZoZEdWRmJtVnRlU2hrWVhSaEtTQjdYRzVjYmlBZ0lDQWdJQ0FnYkdWMElHVnVaVzE1SUQwZ2RHaHBjeTVsYm1WdGFXVnpMbWRsZEVacGNuTjBSWGhwYzNSektHWmhiSE5sS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvSVdWdVpXMTVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxibVZ0ZVNBOUlHNWxkeUJGYm1WdGVTaGtZWFJoS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsY3k1aFpHUW9aVzVsYlhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1Z1WlcxNUxuSmxjMlYwS0dSaGRHRXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHaHBkRVZtWm1WamRDaHZZbW9zSUdOdmJHOXlLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQjBkMlZsYmlBOUlIUm9hWE11WjJGdFpTNWhaR1F1ZEhkbFpXNG9iMkpxS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR1Z0YVhSMFpYSWdQU0IwYUdsekxtZGhiV1V1WVdSa0xtVnRhWFIwWlhJb0tUdGNiaUFnSUNBZ0lDQWdiR1YwSUdWdGFYUjBaWEpRYUhsemFXTnpWR2x0WlNBOUlEQTdYRzRnSUNBZ0lDQWdJR3hsZENCd1lYSjBhV05zWlZOd1pXVmtJRDBnTVRBd08xeHVJQ0FnSUNBZ0lDQnNaWFFnYldGNFVHRnlkR2xqYkdWeklEMGdNVEE3WEc1Y2JpQWdJQ0FnSUNBZ2RIZGxaVzR1ZEc4b2UzUnBiblE2SURCNFptWXdNREF3ZlN3Z01UQXdLVHRjYmlBZ0lDQWdJQ0FnZEhkbFpXNHViMjVEYjIxd2JHVjBaUzVoWkdRb0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiMkpxTG5ScGJuUWdQU0F3ZUdabVptWm1aanRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIUjNaV1Z1TG5OMFlYSjBLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1NElEMGdiMkpxTG5nN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWVTQTlJRzlpYWk1NU8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtZHlZWFpwZEhrZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMbTFoYTJWUVlYSjBhV05zWlhNb0ozQmhjblJwWTJ4bEp5azdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHOWlhaTVvWldGc2RHZ2dQRDBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0dGeWRHbGpiR1ZUY0dWbFpDQTlJREl3TUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoZUZCaGNuUnBZMnhsY3lBOUlEUXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0lnUFNBd2VHWm1NREF3TUR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR1Z0YVhSMFpYSXViV2x1VUdGeWRHbGpiR1ZUY0dWbFpDNXpaWFJVYnlndGNHRnlkR2xqYkdWVGNHVmxaQ3dnTFhCaGNuUnBZMnhsVTNCbFpXUXBPMXh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMbTFoZUZCaGNuUnBZMnhsVTNCbFpXUXVjMlYwVkc4b2NHRnlkR2xqYkdWVGNHVmxaQ3dnY0dGeWRHbGpiR1ZUY0dWbFpDazdYRzRnSUNBZ0lDQWdJR1Z0YVhSMFpYSXVjM1JoY25Rb2RISjFaU3dnTlRBd0xDQnVkV3hzTENCdFlYaFFZWEowYVdOc1pYTXBPMXh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMblZ3WkdGMFpTQTlJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdGFYUjBaWEpRYUhsemFXTnpWR2x0WlNBclBTQjBhR2x6TG1kaGJXVXVkR2x0WlM1d2FIbHphV056Uld4aGNITmxaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0ErUFNBd0xqWXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0E5SURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1a1pYTjBjbTk1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lDQWdaVzFwZEhSbGNpNW1iM0pGWVdOb0tIQmhjblJwWTJ4bElEMCtJSEJoY25ScFkyeGxMblJwYm5RZ1BTQmpiMnh2Y2lrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doZEdocGN5NXdiR0Y1WlhJdVlXeHBkbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWljbWx1WjFSdlZHOXdLSFJvYVhNdWIzWmxjbXhoZVNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCb2FYUkZibVZ0ZVNoaWRXeHNaWFFzSUdWdVpXMTVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMFNHbDBVMjkxYm1RdWNHeGhlU2hjSWx3aUxEQXNNQzQxS1R0Y2JpQWdJQ0FnSUNBZ1pXNWxiWGt1WkdGdFlXZGxLR0oxYkd4bGRDNW9aV0ZzZEdncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ocGRFVm1abVZqZENobGJtVnRlU3dnWW5Wc2JHVjBMblJwYm5RcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVdWdVpXMTVMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVJYaHdiRzl6YVc5dVUyOTFibVF1Y0d4aGVTaGNJbHdpTERBc01DNDFLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUhWa0xuVndaR0YwWlZOamIzSmxLR1Z1WlcxNUxtMWhlRWhsWVd4MGFDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWW5Wc2JHVjBMbXRwYkd3b0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCb2FYUlFiR0Y1WlhJb2NHeGhlV1Z5TENCaWRXeHNaWFFwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUklhWFJUYjNWdVpDNXdiR0Y1S0Z3aVhDSXNNQ3d3TGpVcE8xeHVJQ0FnSUNBZ0lDQndiR0Y1WlhJdVpHRnRZV2RsS0dKMWJHeGxkQzVvWldGc2RHZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaDFaQzUxY0dSaGRHVklaV0ZzZEdnb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b2FYUkZabVpsWTNRb2NHeGhlV1Z5TENCaWRXeHNaWFF1ZEdsdWRDazdYRzRnSUNBZ0lDQWdJR2xtSUNnaGNHeGhlV1Z5TG1Gc2FYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxja1Y0Y0d4dmMybHZibE52ZFc1a0xuQnNZWGtvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhJb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JpZFd4c1pYUXVhMmxzYkNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdOeVlYTm9SVzVsYlhrb2NHeGhlV1Z5TENCbGJtVnRlU2tnZTF4dUlDQWdJQ0FnSUNCbGJtVnRlUzVrWVcxaFoyVW9aVzVsYlhrdWFHVmhiSFJvS1R0Y2JpQWdJQ0FnSUNBZ2NHeGhlV1Z5TG1SaGJXRm5aU2hsYm1WdGVTNW9aV0ZzZEdncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ocGRFVm1abVZqZENod2JHRjVaWElwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhwZEVWbVptVmpkQ2hsYm1WdGVTazdYRzRnSUNBZ0lDQWdJR2xtSUNnaFpXNWxiWGt1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbEZlSEJzYjNOcGIyNVRiM1Z1WkM1d2JHRjVLRndpWENJc01Dd3dMalVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1b2RXUXVkWEJrWVhSbFUyTnZjbVVvWlc1bGJYa3ViV0Y0U0dWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGFHbHpMbWgxWkM1MWNHUmhkR1ZJWldGc2RHZ29LVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRndiR0Y1WlhJdVlXeHBkbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5Ulhod2JHOXphVzl1VTI5MWJtUXVjR3hoZVNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNpZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMkZ0WlU5MlpYSW9LWHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5ScGJXVXVjMnh2ZDAxdmRHbHZiaUE5SURNN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlUzUyYVhOcFlteGxJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbmR2Y214a0xtSnlhVzVuVkc5VWIzQW9kR2hwY3k1dmRtVnliR0Y1S1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJSFJwYldWeUlEMGdkR2hwY3k1bllXMWxMblJwYldVdVkzSmxZWFJsS0hSb2FYTXVaMkZ0WlN3Z2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUhScGJXVnlMbUZrWkNnek1EQXdMQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTExYzJsakxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVGIzVnVaQzV3YkdGNUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWMzUmhkR1V1YzNSaGNuUW9KMDkyWlhJbktUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhScGJXVnlMbk4wWVhKMEtDazdYRzRnSUNBZ2ZWeHVYRzU5WEc0aUxDSnBiWEJ2Y25RZ1EyRnlaRUoxZEhSdmJpQm1jbTl0SUNjdUxpOWxlSFJsYm5OcGIyNXpMMk5oY21SaWRYUjBiMjRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYkdGNVVHRnBjbk1nWlhoMFpXNWtjeUJRYUdGelpYSXVVM1JoZEdVZ2UxeHVYRzRnSUNBZ1kzSmxZWFJsS0NrZ2UxeHVYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NWlaeUE5SUhSb2FYTXVZV1JrTG5ScGJHVlRjSEpwZEdVb01Dd2dNQ3cyTmpZc05qQXdMQ0FuY0dGdVowSm5KeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxU2IzZHpJRDBnTkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxRGIyeHpJRDBnTlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVd4bFUybDZaU0E5SURnd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGJHVlRjR0ZqYVc1bklEMGdNVEE3WEc1Y2JpQWdJQ0FnSUNBZ0x5OXpaWFFnYVhRZ2RHOGdiMjVsSUcxcGJuVjBaU0FvTmpBcFhHNGdJQ0FnSUNBZ0lIUm9hWE11ZEdsdFpVeGxablFnUFNBMk1EQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnZjbVVnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ocFoyaFRZMjl5WlNBOUlEQTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZWEprYzBGeWNtRjVJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWc1pXTjBaV1JCY25KaGVTQTlJRnRkTzF4dVhHNGdJQ0FnSUNBZ0lDOHZMUzB0TFMwdElFTkJVa1FnVWtWTVFWUkZSQ0JUVkZWR1JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1OaGNuUmhNU0E5SUc1bGR5QkRZWEprUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKM1JwYkdWekp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdSdmQyNUdjbUZ0WlRvZ01UQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRYUkdjbUZ0WlRvZ01UQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRtVnlSbkpoYldVNklERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RYQkdjbUZ0WlRvZ09DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxPaUJjSW05cVpYUmxYQ0pjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRWQmhibVZzSUQwZ2RHaHBjeTVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MVVHRnVaV3d1WVdSa0tIUm9hWE11WTJGeWRHRXhLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5MHRMUzB0TFNCSVZVUWdVa1ZNUVZSRlJDQlRWRlZHUmx4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSNWJHVWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lCY0lqTXljSGdnU0dWc2RtVjBhV05oWENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQmNJaU13TUdabU1EQmNJaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lCY0ltTmxiblJsY2x3aVhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnZjbVZVWlhoMElEMGdkR2hwY3k1aFpHUXVkR1Y0ZENnMUxDQTFMQ0JjSWxOamIzSmxPaUJjSWlBcklIUm9hWE11YzJOdmNtVXNJSFJvYVhNdWMzUjViR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblJwYldWVVpYaDBJRDBnZEdocGN5NWhaR1F1ZEdWNGRDZzFMQ0IwYUdsekxtZGhiV1V1YUdWcFoyaDBJQzBnTlN3Z1hDSlVhVzFsSUd4bFpuUTZJRndpSUNzZ2RHaHBjeTUwYVcxbFRHVm1kQ3dnZEdocGN5NXpkSGxzWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEdsdFpWUmxlSFF1WVc1amFHOXlMbk5sZENnd0xERXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1MGFXMWxMbVYyWlc1MGN5NXNiMjl3S0ZCb1lYTmxjaTVVYVcxbGNpNVRSVU5QVGtRc0lIUm9hWE11WkdWamNtVmhjMlZVYVcxbExIUm9hWE1wTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aFkyVkRZWEprY3lncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa1RXVnVkU2dwTzF4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1EzVnpkRzl0SUdaMWJtTjBhVzl1YzF4dUlDQWdJR3h2WVdSTlpXNTFLQ2w3WEc0Z0lDQWdJQ0FnSUd4bGRDQmxjMk5MWlhrZ1BTQjBhR2x6TG1kaGJXVXVhVzV3ZFhRdWEyVjVZbTloY21RdWFYTkViM2R1S0ZCb1lYTmxjaTVMWlhsaWIyRnlaQzVGVTBNcE8xeHVJQ0FnSUNBZ0lDQnBaaWhsYzJOTFpYa3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZWFJsTG5OMFlYSjBLQ2ROWlc1MUp5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQmtaV055WldGelpWUnBiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEdsdFpVeGxablF0TFR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVcxbFZHVjRkQzUwWlhoMElEMGdYQ0pVYVcxbElHeGxablE2SUZ3aUlDc2dkR2hwY3k1MGFXMWxUR1ZtZER0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1MGFXMWxUR1ZtZENBOVBTQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMME5vWVc1blpTQjBhR2x6SUhSdklIQmhhWEp6VDNabGNseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5OMFlYUmxMbk4wWVhKMEtDZFFZVzVuVDNabGNpY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lIQnNZV05sUTJGeVpITW9LU0I3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJSFJwYkdWelRHVm1kQ0E5SUNoMGFHbHpMbTUxYlZKdmQzTWdLaUIwYUdsekxtNTFiVU52YkhNcE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYkdWbWRGTndZV05sSUQwZ0tIUm9hWE11WjJGdFpTNTNhV1IwYUNBdElDaDBhR2x6TG01MWJVTnZiSE1nS2lCMGFHbHpMblJwYkdWVGFYcGxLU0F0SUNnb2RHaHBjeTV1ZFcxRGIyeHpJQzBnTVNrZ0tpQmNkSFJvYVhNdWRHbHNaVk53WVdOcGJtY3BLUzh5TzF4dUlDQWdJQ0FnSUNCc1pYUWdkRzl3VTNCaFkyVWdJRDBnS0hSb2FYTXVaMkZ0WlM1b1pXbG5hSFFnTFNBb2RHaHBjeTV1ZFcxU2IzZHpJQ29nZEdocGN5NTBhV3hsVTJsNlpTa2dMU0FvS0hSb2FYTXViblZ0VW05M2N5QXRJREVwSUNvZ1hIUjBhR2x6TG5ScGJHVlRjR0ZqYVc1bktTa3ZNanRjYmx4dUlDQWdJQ0FnSUNBdkx5MHRJRkJ2Y0hWc1lYUmxJR0Z5Y21GNUlIZHBkR2dnY0dGcGNuTWdiMllnYm5WdFltVnljeUJiTVN3eExESXNNaXd6TERNc05DdzBMQzR1TGwxY2JpQWdJQ0FnSUNBZ1ptOXlLR3hsZENCcElEMGdNRHNnYVNBOElIUnBiR1Z6VEdWbWREc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTmhjbVJ6UVhKeVlYa3VjSFZ6YUNoTllYUm9MbVpzYjI5eUtHa2dMeUF5S1NrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THkwdElGSmhibVJ2YldsNlpTQXZJRzFwZUNCMGFHVWdZWEp5WVhsY2JpQWdJQ0FnSUNBZ1ptOXlLR3hsZENCcElEMGdNRHNnYVNBOElIUnBiR1Z6VEdWbWREc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1puSnZiU0E5SUNCMGFHbHpMbWRoYldVdWNtNWtMbUpsZEhkbFpXNG9NQ3dnZEdocGN5NWpZWEprYzBGeWNtRjVMbXhsYm1kMGFDMHhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0IwYnlBZ0lEMGdJSFJvYVhNdVoyRnRaUzV5Ym1RdVltVjBkMlZsYmlnd0xDQjBhR2x6TG1OaGNtUnpRWEp5WVhrdWJHVnVaM1JvTFRFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIUmxiWEFnUFNBZ2RHaHBjeTVqWVhKa2MwRnljbUY1VzJaeWIyMWRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OaGNtUnpRWEp5WVhsYlpuSnZiVjBnUFNCMGFHbHpMbU5oY21SelFYSnlZWGxiZEc5ZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpZWEprYzBGeWNtRjVXM1J2WFNBOUlIUmxiWEE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0x5OHRMU0JFWldGc0lIUm9aU0JqWVhKa2MxeHVJQ0FnSUNBZ0lDQm1iM0lvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMURiMnh6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaWhzWlhRZ2FpQTlJREE3SUdvZ1BDQjBhR2x6TG01MWJWSnZkM003SUdvckt5a2dlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHTmhjbVFnUFNCdVpYY2dRMkZ5WkVKMWRIUnZiaWg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nYkdWbWRGTndZV05sSUNzZ2FTQXFJQ2gwYUdsekxuUnBiR1ZUYVhwbElDc2dkR2hwY3k1MGFXeGxVM0JoWTJsdVp5a3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklIUnZjRk53WVdObElDc2dhU0FxSUNoMGFHbHpMblJwYkdWVGFYcGxJQ3NnZEdocGN5NTBhV3hsVTNCaFkybHVaeWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBbmRHbHNaWE1uTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiM2R1Um5KaGJXVTZJREV3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnZkWFJHY21GdFpUb2dNVEFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOTJaWEpHY21GdFpUb2dNVEFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIVndSbkpoYldVNklERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVG9nWENKdmFtVjBaVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUZCc1lYbGxjaUJtY205dElDY3VMaTl3Y21WbVlXSnpMM0JzWVhsbGNpYzdYRzVwYlhCdmNuUWdSVzVsYlhrZ1puSnZiU0FuTGk0dmNISmxabUZpY3k5bGJtVnRlVkJoYm1jbk8xeHVhVzF3YjNKMElFaFZSQ0JtY205dElDY3VMaTl3Y21WbVlXSnpMMmgxWkNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCc1lYbFFZVzVuSUdWNGRHVnVaSE1nVUdoaGMyVnlMbE4wWVhSbElIdGNibHh1SUNBZ0lHTnlaV0YwWlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aVp5QTlJSFJvYVhNdVlXUmtMblJwYkdWVGNISnBkR1VvTUN3Z01Dd2dNakF3TUN3Z01qTTRNQ3dnSjNCaGJtZENaeWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWRHbHRaUzV6Ykc5M1RXOTBhVzl1SUQwZ01EdGNibHh1WEc0Z0lDQWdJQ0FnSUM4dklDMHRMUzB0TFMwZ1VFeEJXVVZTWEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeUlEMGdibVYzSUZCc1lYbGxjaWg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm5ZVzFsT2lCMGFHbHpMbWRoYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJREF1T1RJZ0tpQjBhR2x6TG1kaGJXVXVkMjl5YkdRdWFHVnBaMmgwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdhR1ZoYkhSb09pQXhNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBbmMyMWhiR3htYVdkb2RHVnlKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnlZVzFsT2lBeVhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1YzNSaFoyVXVZV1JrUTJocGJHUW9kR2hwY3k1d2JHRjVaWElwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNsTm9iMjkwVkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeVUyaHZiM1JKYm5SbGNuWmhiQ0E5SURBdU1UWTdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z0xTMHRMUzB0TFNCRlRrVk5XVG9nZEdobGMyVWdiMjVsY3lCaGNtVWdZM0psWVhSbFpDQmxkbVZ5ZVNCMWNHUmhkR1VnZEdsamExeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMXBaWE1nUFNCMGFHbHpMbUZrWkM1bmNtOTFjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVaVzVoWW14bFFtOWtlU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx6RXVOVnh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1U1c1MFpYSjJZV3dnUFNBeUxqVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVVMmh2YjNSSmJuUmxjblpoYkNBOUlERTdYRzRnSUNBZ0lDQWdJQzh2SUMwdExTMHRMUzBnSVVWT1JVMVpYRzVjYmlBZ0lDQWdJQ0FnTHk4Z0xTMHRMUzB0TFNCemJXRnNiR1Z5UlU1RlRWazZJSFJvYVhNZ2IyNWxjeUJoY21VZ1kzSmxZWFJsWkNCbGRtVnllU0IxY0dSaGRHVWdkR2xqYTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk50WVd4c1pYSkZibVZ0YVdWeklEMGdkR2hwY3k1aFpHUXVaM0p2ZFhBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emJXRnNiR1Z5Ulc1bGJXbGxjeTVsYm1GaWJHVkNiMlI1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnTHk4Z0xTMHRMUzB0TFNBaGMyMWhiR3hsY2tWT1JVMVpYRzVjYmx4dUlDQWdJQ0FnSUNBdkx5QXRMUzB0TFMwdElFVk9SVTFaSUVOTVNVVk9WRG9nY21GdVpHOXRiSGtnWTJodmMyVnVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsYzBOc2FXVnVkQ0E5SUhSb2FYTXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYldsbGMwTnNhV1Z1ZEM1bGJtRmliR1ZDYjJSNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0x5OHhMalZjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVVOc2FXVnVkRWx1ZEdWeWRtRnNJRDBnTWk0d08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVRMnhwWlc1MFUyaHZiM1JVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVVOc2FXVnVkRk5vYjI5MFNXNTBaWEoyWVd3Z1BTQXhPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OXBibWwwYVdGc2FYcGxJR1pwY25OMElHTnNhV1Z1ZEZ4dUlDQWdJQ0FnSUNCMGFHbHpMbU55WldGMFpVVnVaVzE1UTJ4cFpXNTBLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb05pd2dOellwSUNvZ01UQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx6QmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCemNHVmxaRG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11WjJGdFpTNXlibVF1YVc1MFpXZGxja2x1VW1GdVoyVW9OU3dnTVRBcElDb2dNVEFnS2lBb1RXRjBhQzV5WVc1a2IyMG9LU0ErSURBdU5TQS9JREVnT2lBdE1Ta3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMUxDQXhNQ2tnS2lBeE1GeHVJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2T1Z4dUlDQWdJQ0FnSUNBZ0lDQWdhR1ZoYkhSb09pQTVNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZEZOd1pXVmtPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0RFd0xDQXlNQ2tnS2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdGemMyVjBPaUFuWVd4cFpXNXpKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITnBlbVU2SURBdU9GeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnTHk4Z0xTMHRMUzB0TFNBaFJVNUZUVmtnUTB4SlJVNVVPaUJ5WVc1a2IyMXNlU0JqYUc5elpXNWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZEdsdFpTNWxkbVZ1ZEhNdWJHOXZjQ2hRYUdGelpYSXVWR2x0WlhJdVUwVkRUMDVFSUNvZ01UQXNJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIUm9hWE11Wlc1bGJYbEpiblJsY25aaGJDQStJREF1TWlBcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbEpiblJsY25aaGJDQXRQU0F3TGpFN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzWmxjbXhoZVVKcGRHMWhjQ0E5SUhSb2FYTXVZV1JrTG1KcGRHMWhjRVJoZEdFb2RHaHBjeTVuWVcxbExuZHBaSFJvTENCMGFHbHpMbWRoYldVdWFHVnBaMmgwS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVRbWwwYldGd0xtTjBlQzVtYVd4c1UzUjViR1VnUFNBbkl6QXdNQ2M3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVVSnBkRzFoY0M1amRIZ3VabWxzYkZKbFkzUW9NQ3dnTUN3Z2RHaHBjeTVuWVcxbExuZHBaSFJvTENCMGFHbHpMbWRoYldVdWFHVnBaMmgwS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG05MlpYSnNZWGtnUFNCMGFHbHpMbUZrWkM1emNISnBkR1VvTUN3Z01Dd2dkR2hwY3k1dmRtVnliR0Y1UW1sMGJXRndLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkbVZ5YkdGNUxuWnBjMmxpYkdVZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVMbUZzY0doaElEMGdNQzQzTlR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1oMVpDQTlJRzVsZHlCSVZVUW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ1oyRnRaVG9nZEdocGN5NW5ZVzFsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjR3hoZVdWeU9pQjBhR2x6TG5Cc1lYbGxjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJRk5QVlU1RVUxeHVJQ0FnSUNBZ0lDOHZJSFJvYVhNdWJYVnphV01nUFNCMGFHbHpMbWRoYldVdVlXUmtMbUYxWkdsdktDZHdiR0Y1VFhWemFXTW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSSWFYUlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkaWRXeHNaWFJJYVhRbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVVY0Y0d4dmMybHZibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyVnVaVzE1Ulhod2JHOXphVzl1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlSWGh3Ykc5emFXOXVVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmNHeGhlV1Z5Ulhod2JHOXphVzl1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZG5ZVzFsVDNabGNpY3BPMXh1WEc0Z0lDQWdJQ0FnSUM4dmRHaHBjeTV0ZFhOcFl5NXNiMjl3Um5Wc2JDZ3BPMXh1WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMMFJsWm1GMWJIUnpYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NWxibVZ0ZVZScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNBdkwzUm9hWE11Wlc1bGJYbEpiblJsY25aaGJDQTlJREV1TlR0Y2JpQWdJQ0FnSUNBZ0x5OTBhR2x6TG1WdVpXMTVVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0x5OTBhR2x6TG1WdVpXMTVVMmh2YjNSSmJuUmxjblpoYkNBOUlERTdYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NXdiR0Y1WlhKVGFHOXZkRlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0F2TDNSb2FYTXVjR3hoZVdWeVUyaHZiM1JKYm5SbGNuWmhiQ0E5SURBdU1UWTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVWR2x0WlNBclBTQjBhR2x6TG1kaGJXVXVkR2x0WlM1d2FIbHphV056Uld4aGNITmxaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZOb2IyOTBWR2x0WlNBclBTQjBhR2x6TG1kaGJXVXVkR2x0WlM1d2FIbHphV056Uld4aGNITmxaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKVGFHOXZkRlJwYldVZ0t6MGdkR2hwY3k1bllXMWxMblJwYldVdWNHaDVjMmxqYzBWc1lYQnpaV1E3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVpXNWxiWGxVYVcxbElENGdkR2hwY3k1bGJtVnRlVWx1ZEdWeWRtRnNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVWR2x0WlNBOUlEQTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTNKbFlYUmxSVzVsYlhrb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVjbTVrTG1sdWRHVm5aWEpKYmxKaGJtZGxLRFlzSURjMktTQXFJREV3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dk1GeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNCbFpXUTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbkp1WkM1cGJuUmxaMlZ5U1c1U1lXNW5aU2cxTENBeE1Da2dLaUF4TUNBcUlDaE5ZWFJvTG5KaGJtUnZiU2dwSUQ0Z01DNDFJRDhnTVNBNklDMHhLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbkp1WkM1cGJuUmxaMlZ5U1c1U1lXNW5aU2cxTENBeE1Da2dLaUF4TUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5ODVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR1ZoYkhSb09pQTVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRGTndaV1ZrT2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtERXdMQ0F5TUNrZ0tpQXhNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkZzYVdWdUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnphWHBsT2lBeUxqVmNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1bGJtVnRlVk5vYjI5MFZHbHRaU0ErSUhSb2FYTXVaVzVsYlhsVGFHOXZkRWx1ZEdWeWRtRnNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGRHaHBjeTV3YkdGNVpYSXVZV3hwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVluSnBibWRVYjFSdmNDaDBhR2x6TG05MlpYSnNZWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktGd2lTR0Z6SUcxMVpYSjBiMXdpS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQnNZWGxsY2xOb2IyOTBWR2x0WlNBK0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSSmJuUmxjblpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKVGFHOXZkRlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNHeGhlV1Z5TG1Gc2FYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElITm9iMjkwUzJWNUlEMGdkR2hwY3k1bllXMWxMbWx1Y0hWMExtdGxlV0p2WVhKa0xtbHpSRzkzYmloUWFHRnpaWEl1UzJWNVltOWhjbVF1VTFCQlEwVkNRVklwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtITm9iMjkwUzJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeUxuTm9iMjkwS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExtOTJaWEpzWVhBb2RHaHBjeTV3YkdGNVpYSXVZblZzYkdWMGN5d2dkR2hwY3k1bGJtVnRhV1Z6TENCMGFHbHpMbWhwZEVWdVpXMTVMQ0J1ZFd4c0xDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjR2g1YzJsamN5NWhjbU5oWkdVdWIzWmxjbXhoY0NoMGFHbHpMbkJzWVhsbGNpNWlkV3hzWlhSekxDQjBhR2x6TG5OdFlXeHNaWEpGYm1WdGFXVnpMQ0IwYUdsekxtaHBkRVZ1WlcxNUxDQnVkV3hzTENCMGFHbHpLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWNHaDVjMmxqY3k1aGNtTmhaR1V1YjNabGNteGhjQ2gwYUdsekxuQnNZWGxsY2l3Z1czUm9hWE11Wlc1bGJXbGxjeXgwYUdsekxuTnRZV3hzWlhKRmJtVnRhV1Z6WFN3Z2RHaHBjeTVqY21GemFFVnVaVzE1TENCdWRXeHNMQ0IwYUdsektUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1JOWlc1MUtDazdYRzRnSUNBZ0lDQWdJQzh2SUhSb2FYTXVZbWN1ZEdsc1pWQnZjMmwwYVc5dUxuZ2dLejBnTXp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqY21WaGRHVkZibVZ0ZVNoa1lYUmhLU0I3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1Z1WlcxNUlEMGdkR2hwY3k1bGJtVnRhV1Z6TG1kbGRFWnBjbk4wUlhocGMzUnpLR1poYkhObEtUdGNiaUFnSUNBZ0lDQWdiR1YwSUhSdmRHRnNSVzVsYldsbGN5QTlJSFJvYVhNdVpXNWxiV2xsY3k1amFHbHNaSEpsYmk1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktIUnZkR0ZzUlc1bGJXbGxjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZsYm1WdGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXNWxiWGtnUFNCdVpYY2dSVzVsYlhrb1pHRjBZU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWgwYjNSaGJFVnVaVzFwWlhNZ1BDQTFLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzFwWlhNdVlXUmtLR1Z1WlcxNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1Z1WlcxNUxuSmxjMlYwS0dSaGRHRXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnlaV0YwWlZOdFlXeHNaWEpGYm1WdGVTaGtZWFJoS1NCN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUdWdVpXMTVJRDBnZEdocGN5NXpiV0ZzYkdWeVJXNWxiV2xsY3k1blpYUkdhWEp6ZEVWNGFYTjBjeWhtWVd4elpTazdYRzRnSUNBZ0lDQWdJR3hsZENCMGIzUmhiRVZ1WlcxcFpYTWdQU0IwYUdsekxuTnRZV3hzWlhKRmJtVnRhV1Z6TG1Ob2FXeGtjbVZ1TG14bGJtZDBhRHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJtVnRlU0E5SUc1bGR5QkZibVZ0ZVNoa1lYUmhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJ2ZEdGc1JXNWxiV2xsY3lBOElESTBLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTnRZV3hzWlhKRmJtVnRhV1Z6TG1Ga1pDaGxibVZ0ZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxibVZ0ZVM1eVpYTmxkQ2hrWVhSaEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCamNtVmhkR1ZGYm1WdGVVTnNhV1Z1ZENoa1lYUmhLU0I3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1Z1WlcxNUlEMGdkR2hwY3k1bGJtVnRhV1Z6UTJ4cFpXNTBMbWRsZEVacGNuTjBSWGhwYzNSektHWmhiSE5sS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJSFJ2ZEdGc1JXNWxiV2xsY3lBOUlIUm9hWE11Wlc1bGJXbGxjME5zYVdWdWRDNWphR2xzWkhKbGJpNXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LSFJ2ZEdGc1JXNWxiV2xsY3lrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGbGJtVnRlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaVzVsYlhrZ1BTQnVaWGNnUlc1bGJYa29aR0YwWVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGIzUmhiRVZ1WlcxcFpYTWdQRDBnTVNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGFXVnpRMnhwWlc1MExtRmtaQ2hsYm1WdGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYm1WdGVTNXlaWE5sZENoa1lYUmhLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm9hWFJGWm1abFkzUW9iMkpxTENCamIyeHZjaWtnZTF4dUlDQWdJQ0FnSUNCc1pYUWdkSGRsWlc0Z1BTQjBhR2x6TG1kaGJXVXVZV1JrTG5SM1pXVnVLRzlpYWlrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JsYldsMGRHVnlJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNWxiV2wwZEdWeUtDazdYRzRnSUNBZ0lDQWdJR3hsZENCbGJXbDBkR1Z5VUdoNWMybGpjMVJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NHRnlkR2xqYkdWVGNHVmxaQ0E5SURFd01EdGNiaUFnSUNBZ0lDQWdiR1YwSUcxaGVGQmhjblJwWTJ4bGN5QTlJREV3TzF4dVhHNGdJQ0FnSUNBZ0lIUjNaV1Z1TG5SdktIdDBhVzUwT2lBd2VHWm1NREF3TUgwc0lERXdNQ2s3WEc0Z0lDQWdJQ0FnSUhSM1pXVnVMbTl1UTI5dGNHeGxkR1V1WVdSa0tDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzlpYWk1MGFXNTBJRDBnTUhobVptWm1abVk3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjBkMlZsYmk1emRHRnlkQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWVDQTlJRzlpYWk1NE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxua2dQU0J2WW1vdWVUdGNiaUFnSUNBZ0lDQWdaVzFwZEhSbGNpNW5jbUYyYVhSNUlEMGdNRHRjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTV0WVd0bFVHRnlkR2xqYkdWektDZHdZWEowYVdOc1pTY3BPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHZZbW91YUdWaGJIUm9JRHc5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGNuUnBZMnhsVTNCbFpXUWdQU0F5TURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhoUVlYSjBhV05zWlhNZ1BTQTBNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5SUQwZ01IaG1aakF3TURBN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMbTFwYmxCaGNuUnBZMnhsVTNCbFpXUXVjMlYwVkc4b0xYQmhjblJwWTJ4bFUzQmxaV1FzSUMxd1lYSjBhV05zWlZOd1pXVmtLVHRjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTV0WVhoUVlYSjBhV05zWlZOd1pXVmtMbk5sZEZSdktIQmhjblJwWTJ4bFUzQmxaV1FzSUhCaGNuUnBZMnhsVTNCbFpXUXBPMXh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMbk4wWVhKMEtIUnlkV1VzSURVd01Dd2diblZzYkN3Z2JXRjRVR0Z5ZEdsamJHVnpLVHRjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTUxY0dSaGRHVWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJXbDBkR1Z5VUdoNWMybGpjMVJwYldVZ0t6MGdkR2hwY3k1bllXMWxMblJwYldVdWNHaDVjMmxqYzBWc1lYQnpaV1E3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhsYldsMGRHVnlVR2g1YzJsamMxUnBiV1VnUGowZ01DNDJLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYldsMGRHVnlVR2g1YzJsamMxUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnRhWFIwWlhJdVpHVnpkSEp2ZVNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJR1Z0YVhSMFpYSXVabTl5UldGamFDaHdZWEowYVdOc1pTQTlQaUJ3WVhKMGFXTnNaUzUwYVc1MElEMGdZMjlzYjNJcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXVjR3hoZVdWeUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVZbkpwYm1kVWIxUnZjQ2gwYUdsekxtOTJaWEpzWVhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FHbDBSVzVsYlhrb1luVnNiR1YwTENCbGJtVnRlU2tnZTF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBTR2wwVTI5MWJtUXVjR3hoZVNoY0lsd2lMREFzTUM0MUtUdGNiaUFnSUNBZ0lDQWdaVzVsYlhrdVpHRnRZV2RsS0dKMWJHeGxkQzVvWldGc2RHZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaHBkRVZtWm1WamRDaGxibVZ0ZVN3Z1luVnNiR1YwTG5ScGJuUXBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDZ2haVzVsYlhrdVlXeHBkbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxGZUhCc2IzTnBiMjVUYjNWdVpDNXdiR0Y1S0Z3aVhDSXNJREFzSURBdU5TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWgxWkM1MWNHUmhkR1ZUWTI5eVpTaGxibVZ0ZVM1dFlYaElaV0ZzZEdncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNkcGRHTm9LR1Z1WlcxNUxuTnBlbVVwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dlRHRnlaMlVnTFQ0Z1RXVmthWFZ0WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQXlMalU2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU55WldGMFpWTnRZV3hzWlhKRmJtVnRlU2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUJsYm1WdGVTNTRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nWlc1bGJYa3VlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE53WldWa09pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ01qVWdLaUF4TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUF0TXpBZ0tpQXhNRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hsWVd4MGFEb2dNVEFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpZFd4c1pYUlRjR1ZsWkRvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZ3hNQ3dnTWpBcElDb2dNVEFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkZzYVdWdUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITnBlbVU2SURFdU5WeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTNKbFlYUmxVMjFoYkd4bGNrVnVaVzE1S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUdWdVpXMTVMbmdzWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklHVnVaVzE1TG5rc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemNHVmxaRG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJQzB5TlNBcUlERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklDMHpNQ0FxSURFd1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUxGeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9aV0ZzZEdnNklERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZblZzYkdWMFUzQmxaV1E2SUhSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb01UQXNJREl3S1NBcUlERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGhiR2xsYmljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemFYcGxPaUF4TGpWY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwTG10cGJHd29LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR055WVhOb1JXNWxiWGtvY0d4aGVXVnlMQ0JsYm1WdGVTa2dlMXh1SUNBZ0lDQWdJQ0F2TDJWdVpXMTVMbVJoYldGblpTaGxibVZ0ZVM1b1pXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCbGJtVnRlUzVrWVcxaFoyVW9NeWs3WEc0Z0lDQWdJQ0FnSUM4dmNHeGhlV1Z5TG1SaGJXRm5aU2hsYm1WdGVTNW9aV0ZzZEdncE8xeHVJQ0FnSUNBZ0lDQndiR0Y1WlhJdVpHRnRZV2RsS0RFcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ocGRFVm1abVZqZENod2JHRjVaWElwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhwZEVWbVptVmpkQ2hsYm1WdGVTazdYRzRnSUNBZ0lDQWdJR2xtSUNnaFpXNWxiWGt1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbEZlSEJzYjNOcGIyNVRiM1Z1WkM1d2JHRjVLRndpWENJc01Dd3dMalVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1b2RXUXVkWEJrWVhSbFUyTnZjbVVvWlc1bGJYa3ViV0Y0U0dWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGFHbHpMbWgxWkM1MWNHUmhkR1ZJWldGc2RHZ29LVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRndiR0Y1WlhJdVlXeHBkbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5Ulhod2JHOXphVzl1VTI5MWJtUXVjR3hoZVNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNpZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMkZ0WlU5MlpYSW9LWHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5ScGJXVXVjMnh2ZDAxdmRHbHZiaUE5SURNN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlUzUyYVhOcFlteGxJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbmR2Y214a0xtSnlhVzVuVkc5VWIzQW9kR2hwY3k1dmRtVnliR0Y1S1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJSFJwYldWeUlEMGdkR2hwY3k1bllXMWxMblJwYldVdVkzSmxZWFJsS0hSb2FYTXVaMkZ0WlN3Z2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUhScGJXVnlMbUZrWkNnek1EQXdMQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QjBhR2x6TG0xMWMybGpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlRiM1Z1WkM1d2JHRjVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjM1JoZEdVdWMzUmhjblFvSjFCaGJtZFBkbVZ5SnlrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0IwYVcxbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4dllXUk5aVzUxS0NsN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JsYzJOTFpYa2dQU0IwYUdsekxtZGhiV1V1YVc1d2RYUXVhMlY1WW05aGNtUXVhWE5FYjNkdUtGQm9ZWE5sY2k1TFpYbGliMkZ5WkM1RlUwTXBPMXh1SUNBZ0lDQWdJQ0JwWmlobGMyTkxaWGtwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEl1YTJsc2JDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZWFJsTG5OMFlYSjBLQ2ROWlc1MUp5azdYRzVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4xY2JpSXNJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCeVpXeHZZV1FnWlhoMFpXNWtjeUJRYUdGelpYSXVVM1JoZEdVZ2UxeHVYRzRnSUNBZ2NISmxiRzloWkNncElIdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1JsY2tKbklEMGdkR2hwY3k1aFpHUXVjM0J5YVhSbEtIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZTENCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXU3dnSjJ4dllXUmxja0puSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpHVnlRbUZ5SUQwZ2RHaHBjeTVoWkdRdWMzQnlhWFJsS0hSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdTd2dKMnh2WVdSbGNrSmhjaWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdSbGNrSm5MbUZ1WTJodmNpNXpaWFJVYnlnd0xqVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1JsY2tKaGNpNWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YzJWMFVISmxiRzloWkZOd2NtbDBaU2gwYUdsekxteHZZV1JsY2tKaGNpazdYRzRnSUNBZ0lDQWdJQzh2WjJGdFpTQXhYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZEd4aGMwcFRUMDVCY25KaGVTZ25jMjFoYkd4bWFXZG9kR1Z5Snl3Z0oybHRaeTl6Y0hKcGRHVnphR1ZsZEM5emJXRnNiR1pwWjJoMFpYSXVjRzVuSnl3Z0oyUmhkR0V2YzNCeWFYUmxjMmhsWlhRdmMyMWhiR3htYVdkb2RHVnlMbXB6YjI0bktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYwYkdGelNsTlBUa0Z5Y21GNUtDZGhiR2xsYmljc0lDZHBiV2N2YzNCeWFYUmxjMmhsWlhRdllXeHBaVzR1Y0c1bkp5d2dKMlJoZEdFdmMzQnlhWFJsYzJobFpYUXZZV3hwWlc0dWFuTnZiaWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdVlYUnNZWE5LVTA5T1FYSnlZWGtvSjJKMWRIUnZiaWNzSUNkcGJXY3ZjM0J5YVhSbGMyaGxaWFF2WW5WMGRHOXVMbkJ1Wnljc0lDZGtZWFJoTDNOd2NtbDBaWE5vWldWMEwySjFkSFJ2Ymk1cWMyOXVKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1cGJXRm5aU2duWm1GeVltRmpheWNzSUNkcGJXY3ZabUZ5WW1GamF5NXFjR2NuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtbHRZV2RsS0NkaWRXeHNaWFFuTENBbmFXMW5MMkoxYkd4bGRDNXdibWNuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtbHRZV2RsS0Nkd1lYSjBhV05zWlNjc0lDZHBiV2N2Y0dGeWRHbGpiR1V1WjJsbUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25hR1ZoYkhSb1ltRnlKeXdnSjJsdFp5OW9aV0ZzZEdoaVlYSXVjRzVuSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnbmFIVmtRbWNuTENBbmFXMW5MMmgxWkMxaVp5NXdibWNuS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVZWFZrYVc4b0ozQnNZWGxOZFhOcFl5Y3NJRnNuWVhWa2FXOHZiWFZ6YVdNdmNHeGhlUzV0Y0RNblhTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZFdScGJ5Z25iV1Z1ZFUxMWMybGpKeXdnV3lkaGRXUnBieTl0ZFhOcFl5OXRaVzUxTG0xd015ZGRLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdVlYVmthVzhvSjIxbGJuVlBkbVZ5Snl3Z1d5ZGhkV1JwYnk5emIzVnVaQzl0Wlc1MUxXOTJaWEl1YlhBekoxMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KMjFsYm5WUGRYUW5MQ0JiSjJGMVpHbHZMM052ZFc1a0wyMWxiblV0YjNWMExtMXdNeWRkS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtRjFaR2x2S0NkdFpXNTFSRzkzYmljc0lGc25ZWFZrYVc4dmMyOTFibVF2YldWdWRTMWpiR2xqYXk1dGNETW5YU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtRjFaR2x2S0NkaWRXeHNaWFJJYVhRbkxDQmJKMkYxWkdsdkwzTnZkVzVrTDJKMWJHeGxkQzFvYVhRdWJYQXpKMTBwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdVlYVmthVzhvSjJWdVpXMTVVMmh2ZENjc0lGc25ZWFZrYVc4dmMyOTFibVF2Wlc1bGJYa3RjMmh2ZEM1dGNETW5YU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRXUnBieWduWlc1bGJYbEZlSEJzYjNOcGIyNG5MQ0JiSjJGMVpHbHZMM052ZFc1a0wyVnVaVzE1TFdWNGNHeHZjMmx2Ymk1dGNETW5YU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRXUnBieWduY0d4aGVXVnlVMmh2ZENjc0lGc25ZWFZrYVc4dmMyOTFibVF2Y0d4aGVXVnlMWE5vYjNRdWJYQXpKMTBwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdVlYVmthVzhvSjNCc1lYbGxja1Y0Y0d4dmMybHZiaWNzSUZzbllYVmthVzh2YzI5MWJtUXZjR3hoZVdWeUxXVjRjR3h2YzJsdmJpNXRjRE1uWFNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYxWkdsdktDZG5ZVzFsVDNabGNpY3NJRnNuWVhWa2FXOHZjMjkxYm1RdloyRnRaUzF2ZG1WeUxtMXdNeWRkS1R0Y2JpQWdJQ0FnSUNBZ0x5OGhaMkZ0WlNBeFhHNWNibHh1SUNBZ0lDQWdJQ0F2TDJkaGJXVWdNbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OXdZVzVuWEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1cGJXRm5aU2duY0dGdVowSm5KeXdnSjJsdFp5OXdZVzVuUW1jdWNHNW5KeWs3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGhaMkZ0WlNBeVhHNGdJQ0FnSUNBZ0lDOHZJRzFoZEdOb2FXNW5YRzRnSUNBZ0lDQWdJQzh2WjJGdFpTQXpJQzB0SUhjNk9EQXNJR3c2T0RCY2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xuTndjbWwwWlhOb1pXVjBLQ2QwYVd4bGN5Y3NJQ2RwYldjdmMzQnlhWFJsYzJobFpYUXZkR2xzWlhNdWNHNW5KeXc0TUN3NE1Dd3hNU2s3WEc0Z0lDQWdJQ0FnSUM4dloyRnRaU0F6WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZM0psWVhSbEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsTG5OMFlYSjBLQ2ROWlc1MUp5azdYRzRnSUNBZ2ZWeHVYRzU5WEc0aVhYMD0ifQ==
