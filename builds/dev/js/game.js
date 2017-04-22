(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
            value = _ref.value,
            isClient = _ref.isClient;

        _classCallCheck(this, CardButton);

        var _this = _possibleConstructorReturn(this, (CardButton.__proto__ || Object.getPrototypeOf(CardButton)).call(this, game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));

        _this.anchor.setTo(0.5);
        // this.scale.setTo(0.9);
        _this.callback = callback;
        _this.value = value;
        _this.isClient = isClient;
        return _this;
    }

    return CardButton;
}(Phaser.Button);

exports.default = CardButton;

},{}],3:[function(require,module,exports){
'use strict';

var _states = require('./states');

var states = _interopRequireWildcard(_states);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var GAME = new Phaser.Game(1200, 680, Phaser.AUTO);

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

},{"./bullet":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../shooter/player');

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

},{"../shooter/player":8}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _bullet = require('../pang/bullet');

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

},{"../pang/bullet":4}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _bullet = require('../pang/bullet');

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

},{"../pang/bullet":4}],9:[function(require,module,exports){
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

var _play = require('./shooter/play');

Object.defineProperty(exports, 'Play', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_play).default;
  }
});

var _over = require('./shooter/over');

Object.defineProperty(exports, 'Over', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_over).default;
  }
});

var _playPang = require('./pang/playPang');

Object.defineProperty(exports, 'PlayPang', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_playPang).default;
  }
});

var _pangOver = require('./pang/pangOver');

Object.defineProperty(exports, 'PangOver', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pangOver).default;
  }
});

var _playPairs = require('./pairs/playPairs');

Object.defineProperty(exports, 'PlayPairs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_playPairs).default;
  }
});

var _pairsOver = require('./pairs/pairsOver');

Object.defineProperty(exports, 'PairsOver', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pairsOver).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./boot":9,"./menu":11,"./pairs/pairsOver":12,"./pairs/playPairs":13,"./pang/pangOver":14,"./pang/playPang":15,"./preload":16,"./shooter/over":17,"./shooter/play":18}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../extensions/menu/textbutton');

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

},{"../extensions/menu/textbutton":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../../extensions/menu/textbutton');

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

},{"../../extensions/menu/textbutton":1}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cardbutton = require('../../extensions/pairs/cardbutton');

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
            this.game.stage.backgroundColor = '#4ed0e1';
            this.bg = this.game.add.image(0, 0, 'bg');
            this.numRows = 4;
            this.numCols = 5;
            this.tileSize = 155;
            this.tileSpacing = 5;
            this.tilesLeft = this.numRows * this.numCols;

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

            var leftSpace = (this.game.width - this.numCols * this.tileSize - (this.numCols - 1) * this.tileSpacing) / 2;
            var topSpace = (this.game.height - this.numRows * this.tileSize - (this.numRows - 1) * this.tileSpacing) / 2;

            //-- Populate array with pairs of numbers [1,1,2,2,3,3,4,4,...]
            for (var i = 0; i < this.tilesLeft; i++) {
                this.cardsArray.push(Math.floor(i / 2));
            }

            //-- Randomize / mix the array
            for (var _i = 0; _i < this.tilesLeft; _i++) {
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
                        x: leftSpace + _i2 * (this.tileSize + this.tileSpacing) + 75,
                        y: topSpace + j * (this.tileSize + this.tileSpacing) + 100,
                        asset: 'tiles',
                        callback: this.showCard,
                        callbackContext: this,
                        downFrame: 12,
                        value: this.cardsArray[j * this.numCols + _i2],
                        isClient: false
                    });
                    // This part is where we take the last card in our spritesheet and replace it with a client
                    // In this case value 9 is the last value of the 'standard' cards
                    if (card.value == 9) {
                        card.value = this.chosenClient;
                        card.isClient = true;
                    }

                    card.frame = this.backOfTheCard;
                    this.cardGroup.add(card);
                }
            }
        }
    }, {
        key: 'showCard',
        value: function showCard(targetCard) {
            /*
            *   push the values from the cards to our selected array of cards
            *   if you have chosen 2, let's compare them using checkTiles
            */
            if (this.selectedCardsArray.length < 2 && this.selectedCardsArray.indexOf(targetCard) === -1) {
                //TODO sounds
                // if(playSound){
                //     this.soundArray[0].play();
                // }
                targetCard.frame = targetCard.value;
                this.selectedCardsArray.push(targetCard);

                if (this.selectedCardsArray.length === 2) {
                    this.game.time.events.add(Phaser.Timer.SECOND, this.checkTiles, this);
                }
            }
        }
    }, {
        key: 'checkTiles',
        value: function checkTiles() {
            /*
             *   Check the if the values from our selectedCardsArray are equal
             *   if so, add score and hide them from the user.
             */
            if (this.selectedCardsArray[0].value === this.selectedCardsArray[1].value) {
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
                if (this.selectedCardsArray[0].isClient) {
                    this.fireClientMessage("Client");
                }

                this.selectedCardsArray[0].destroy();
                this.selectedCardsArray[1].destroy();
                this.tilesLeft -= 2;

                // Win condition
                if (this.tilesLeft === 0) {
                    this.cardsArray.length = 0;
                    this.selectedCardsArray.length = 0;
                    //this.placeCards();
                    this.game.state.start('PlayPairs');
                }
            } else {
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
    }, {
        key: 'fireClientMessage',
        value: function fireClientMessage(client) {
            alert("This is a message from a default Client");
        }
    }]);

    return PlayPairs;
}(Phaser.State);

exports.default = PlayPairs;

},{"../../extensions/pairs/cardbutton":2}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../../extensions/menu/textbutton');

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

},{"../../extensions/menu/textbutton":1}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../../prefabs/shooter/player');

var _player2 = _interopRequireDefault(_player);

var _enemyPang = require('../../prefabs/pang/enemyPang');

var _enemyPang2 = _interopRequireDefault(_enemyPang);

var _hud = require('../../prefabs/pang/hud');

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

},{"../../prefabs/pang/enemyPang":5,"../../prefabs/pang/hud":6,"../../prefabs/shooter/player":8}],16:[function(require,module,exports){
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
            // Shooter

            this.load.atlasJSONArray('smallfighter', 'img/shooter/spritesheet/smallfighter.png', 'data/shooter/spritesheet/smallfighter.json');
            this.load.atlasJSONArray('alien', 'img/shooter/spritesheet/alien.png', 'data/shooter/spritesheet/alien.json');
            this.load.atlasJSONArray('button', 'img/button.png', 'data/generic/button.json');
            this.load.image('farback', 'img/shooter/farback.jpg');
            this.load.image('bullet', 'img/shooter/bullet.png');
            this.load.image('particle', 'img/shooter/particle.gif');
            this.load.image('healthbar', 'img/shooter/healthbar.png');
            this.load.image('hudBg', 'img/shooter/hud-bg.png');

            this.load.audio('playMusic', ['audio/shooter/music/play.mp3']);
            this.load.audio('menuMusic', ['audio/shooter/music/menu.mp3']);

            this.load.audio('menuOver', ['audio/shooter/sound/menu-over.mp3']);
            this.load.audio('menuOut', ['audio/shooter/sound/menu-out.mp3']);
            this.load.audio('menuDown', ['audio/shooter/sound/menu-click.mp3']);

            this.load.audio('bulletHit', ['audio/shooter/sound/bullet-hit.mp3']);
            this.load.audio('enemyShot', ['audio/shooter/sound/enemy-shot.mp3']);
            this.load.audio('enemyExplosion', ['audio/shooter/sound/enemy-explosion.mp3']);
            this.load.audio('playerShot', ['audio/shooter/sound/player-shot.mp3']);
            this.load.audio('playerExplosion', ['audio/shooter/sound/player-explosion.mp3']);

            this.load.audio('gameOver', ['audio/shooter/sound/game-over.mp3']);
            //!game 1


            //Pang

            this.load.image('pangBg', 'img/pang/pangBg.png');

            //!Pang


            // matching pairs

            this.load.spritesheet('tiles', 'img/pairs/tilesClient2.png', 150, 170, 15);
            this.load.image('bg', 'img/pairs/bg.jpg');
            // matching pairs
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

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../../extensions/menu/textbutton');

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

},{"../../extensions/menu/textbutton":1}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../../prefabs/shooter/player');

var _player2 = _interopRequireDefault(_player);

var _enemy = require('../../prefabs/shooter/enemy');

var _enemy2 = _interopRequireDefault(_enemy);

var _hud = require('../../prefabs/pang/hud');

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

},{"../../prefabs/pang/hud":6,"../../prefabs/shooter/enemy":7,"../../prefabs/shooter/player":8}]},{},[3])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZXh0ZW5zaW9ucy9tZW51L3RleHRidXR0b24uanMiLCJzcmMvanMvZXh0ZW5zaW9ucy9wYWlycy9jYXJkYnV0dG9uLmpzIiwic3JjL2pzL2dhbWUuanMiLCJzcmMvanMvcHJlZmFicy9wYW5nL2J1bGxldC5qcyIsInNyYy9qcy9wcmVmYWJzL3BhbmcvZW5lbXlQYW5nLmpzIiwic3JjL2pzL3ByZWZhYnMvcGFuZy9odWQuanMiLCJzcmMvanMvcHJlZmFicy9zaG9vdGVyL2VuZW15LmpzIiwic3JjL2pzL3ByZWZhYnMvc2hvb3Rlci9wbGF5ZXIuanMiLCJzcmMvanMvc3RhdGVzL2Jvb3QuanMiLCJzcmMvanMvc3RhdGVzL2luZGV4LmpzIiwic3JjL2pzL3N0YXRlcy9tZW51LmpzIiwic3JjL2pzL3N0YXRlcy9wYWlycy9wYWlyc092ZXIuanMiLCJzcmMvanMvc3RhdGVzL3BhaXJzL3BsYXlQYWlycy5qcyIsInNyYy9qcy9zdGF0ZXMvcGFuZy9wYW5nT3Zlci5qcyIsInNyYy9qcy9zdGF0ZXMvcGFuZy9wbGF5UGFuZy5qcyIsInNyYy9qcy9zdGF0ZXMvcHJlbG9hZC5qcyIsInNyYy9qcy9zdGF0ZXMvc2hvb3Rlci9vdmVyLmpzIiwic3JjL2pzL3N0YXRlcy9zaG9vdGVyL3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUNBcUIsVTs7O0FBRWpCLDhCQUFxSDtBQUFBLFlBQXZHLElBQXVHLFFBQXZHLElBQXVHO0FBQUEsWUFBakcsQ0FBaUcsUUFBakcsQ0FBaUc7QUFBQSxZQUE5RixDQUE4RixRQUE5RixDQUE4RjtBQUFBLFlBQTNGLEtBQTJGLFFBQTNGLEtBQTJGO0FBQUEsWUFBcEYsUUFBb0YsUUFBcEYsUUFBb0Y7QUFBQSxZQUExRSxlQUEwRSxRQUExRSxlQUEwRTtBQUFBLFlBQXpELFNBQXlELFFBQXpELFNBQXlEO0FBQUEsWUFB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bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkJ1dHRvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUsIGxhYmVsLCBzdHlsZSB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUpO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIDAsIDAsIHRoaXMubGFiZWwsIHRoaXMuc3R5bGUpO1xuICAgICAgICB0aGlzLnRleHQuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQpO1xuXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZEJ1dHRvbiBleHRlbmRzIFBoYXNlci5CdXR0b24ge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgY2FsbGJhY2ssIGNhbGxiYWNrQ29udGV4dCwgb3ZlckZyYW1lLCBvdXRGcmFtZSwgZG93bkZyYW1lLCB1cEZyYW1lLHZhbHVlLCBpc0NsaWVudH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSk7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgLy8gdGhpcy5zY2FsZS5zZXRUbygwLjkpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pc0NsaWVudCA9IGlzQ2xpZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIHN0YXRlcyBmcm9tICcuL3N0YXRlcyc7XG5jb25zdCBHQU1FID0gbmV3IFBoYXNlci5HYW1lKDEyMDAsIDY4MCwgUGhhc2VyLkFVVE8pO1xuXG5PYmplY3Qua2V5cyhzdGF0ZXMpLmZvckVhY2goc3RhdGUgPT4gR0FNRS5zdGF0ZS5hZGQoc3RhdGUsIHN0YXRlc1tzdGF0ZV0pKTtcblxuR0FNRS5zdGF0ZS5zdGFydCgnQm9vdCcpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBoZWFsdGgsIHRpbnQgPSAweGZmMDAwMCB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0KTtcblxuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKDAuOCk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLnRpbnQgPSB0aW50O1xuICAgICAgICB0aGlzLmNoZWNrV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICB0aGlzLm91dE9mQm91bmRzS2lsbCA9IHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJ1bGxldCBmcm9tICcuL2J1bGxldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBmcmFtZSwgaGVhbHRoLCBidWxsZXRTcGVlZCxzaXplIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lKTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgLy9zaXplID0gc2NhbGVcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbyhzaXplKTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gaGVhbHRoO1xuXG5cbiAgICAgICAgLy9HcmF2aXR5XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICB0aGlzLmJvZHkuZ3Jhdml0eS55ID0gNTAwO1xuICAgICAgICB0aGlzLmJvZHkuYm91bmNlLnNldCgxKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdzcGlubmluZycsIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTRdLCAzMCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGxheSgnc3Bpbm5pbmcnKTtcblxuICAgICAgICB0aGlzLmJ1bGxldHMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuYnVsbGV0cy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IGJ1bGxldFNwZWVkO1xuXG4gICAgICAgIHRoaXMuc2hvdFNvdW5kID0gdGhpcy5nYW1lLmFkZC5zb3VuZCgnZW5lbXlTaG90Jyk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IDAuMDQgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDAuMDQgKiB0aGlzLmdhbWUud29ybGQud2lkdGggKyAyO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggKj0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID4gMC45NiAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMC45NiAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDI7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCAqPSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDIgPiB0aGlzLmdhbWUud29ybGQuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmtpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBkYW1hZ2UoYW1vdW50KSB7XG4gICAgICAgIHN1cGVyLmRhbWFnZShhbW91bnQpO1xuICAgIH1cblxuICAgIHJlc2V0KHsgeCwgeSwgaGVhbHRoLCBidWxsZXRTcGVlZCwgc3BlZWQgfSkge1xuICAgICAgICBzdXBlci5yZXNldCh4LCB5LCBoZWFsdGgpO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gYnVsbGV0U3BlZWQ7XG4gICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gc3BlZWQueDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSBzcGVlZC55O1xuICAgIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vc2hvb3Rlci9wbGF5ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVkIGV4dGVuZHMgUGhhc2VyLkdyb3VwIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHBsYXllciB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUpO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5iZyA9IG5ldyBQaGFzZXIuSW1hZ2UodGhpcy5nYW1lLCAwLCAwLCAnaHVkQmcnKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDgwMDtcbiAgICAgICAgdGhpcy5oZWFsdGhiYXIgPSBuZXcgUGhhc2VyLlNwcml0ZSh0aGlzLmdhbWUsIDIsIDIsICdoZWFsdGhiYXInKTtcbiAgICAgICAgdGhpcy5oZWFsdGhiYXIuc2NhbGUuc2V0VG8oMC45OTUsIDExKTtcblxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsID0gJ1Njb3JlOiAnO1xuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIDIwLCAxNCwgdGhpcy5zY29yZUxhYmVsICsgdGhpcy5zY29yZSwge1xuICAgICAgICAgICAgZm9udDogJzEzcHggVmVyZGFuYScsXG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGQodGhpcy5iZyk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuaGVhbHRoYmFyKTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5zY29yZVRleHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZUhlYWx0aChwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5oZWFsdGhiYXIuY3JvcChuZXcgUGhhc2VyLlJlY3RhbmdsZSgwLCAwLCAodGhpcy5wbGF5ZXIuaGVhbHRoIC8gdGhpcy5wbGF5ZXIubWF4SGVhbHRoKSAqIHRoaXMud2lkdGgsIDEwKSk7XG4gICAgICAgIHRoaXMuaGVhbHRoYmFyLnVwZGF0ZUNyb3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY29yZShhbW91bnQpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSBhbW91bnQ7XG4gICAgICAgIHRoaXMuc2NvcmVUZXh0LnRleHQgPSB0aGlzLnNjb3JlTGFiZWwgKyAodGhpcy5zY29yZSAqIDEwKTtcbiAgICB9XG5cbn07XG4iLCJpbXBvcnQgQnVsbGV0IGZyb20gJy4uL3BhbmcvYnVsbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGgsIGJ1bGxldFNwZWVkIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lKTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIHRoaXMuc2NhbGUuc2V0VG8oMC44KTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3NwaW5uaW5nJywgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNF0sIDMwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5KCdzcGlubmluZycpO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gYnVsbGV0U3BlZWQ7XG5cbiAgICAgICAgdGhpcy5zaG90U291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKCdlbmVteVNob3QnKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDI7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCAqPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPiAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMiA+IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICAgICAgdGhpcy5zaG90U291bmQucGxheShcIlwiLDAsMC41KTtcblxuICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcblxuICAgICAgICBpZiAoIWJ1bGxldCkge1xuICAgICAgICAgICAgYnVsbGV0ID0gbmV3IEJ1bGxldCh7XG4gICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmJvdHRvbSxcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDIsXG4gICAgICAgICAgICAgICAgYXNzZXQ6ICdidWxsZXQnLFxuICAgICAgICAgICAgICAgIHRpbnQ6IDB4ZmYwMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5hZGQoYnVsbGV0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLngsIHRoaXMuYm90dG9tLCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJ1bGxldFNwZWVkO1xuICAgIH1cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG4gICAgcmVzZXQoeyB4LCB5LCBoZWFsdGgsIGJ1bGxldFNwZWVkLCBzcGVlZCB9KSB7XG4gICAgICAgIHN1cGVyLnJlc2V0KHgsIHksIGhlYWx0aCk7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSBzcGVlZC54O1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHNwZWVkLnk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJ1bGxldCBmcm9tICcuLi9wYW5nL2J1bGxldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUsIGhlYWx0aCB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBmcmFtZSk7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKDAuOCk7XG5cbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gaGVhbHRoO1xuXG5cblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMpO1xuICAgICAgICAvL2dyYXZpdHlcbiAgICAgICAgdGhpcy5ib2R5LmdyYXZpdHkueSA9IDEwMDtcbiAgICAgICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIC8vXG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmJ1bGxldHMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSAtNTAwO1xuXG4gICAgICAgIHRoaXMuc2hvdFNvdW5kID0gdGhpcy5nYW1lLmFkZC5zb3VuZCgncGxheWVyU2hvdCcpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICAvLyB0aGlzLmdhbWUuZGVidWcuYm9keSh0aGlzKTtcblxuXG5cbiAgICAgICAgLy8gaWYgKHRoaXMuZ2FtZS5pbnB1dC5hY3RpdmVQb2ludGVyLmlzRG93bikge1xuXG4gICAgICAgICAgICBsZXQgbGVmdEtleSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLkxFRlQpO1xuICAgICAgICAgICAgbGV0IHJpZ2h0S2V5ID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuUklHSFQpO1xuICAgICAgICAgICAgaWYobGVmdEtleSl7XG4gICAgICAgICAgICAgICAgdGhpcy54IC09IDY7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocmlnaHRLZXkpe1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSA2O1xuXG4gICAgICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcblxuICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcblxuICAgICAgICBpZiAoIWJ1bGxldCkge1xuICAgICAgICAgICAgYnVsbGV0ID0gbmV3IEJ1bGxldCh7XG4gICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnRvcCxcbiAgICAgICAgICAgICAgICAvLzNcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDEsXG4gICAgICAgICAgICAgICAgYXNzZXQ6ICdidWxsZXQnLFxuICAgICAgICAgICAgICAgIHRpbnQ6IDB4MDRjMTEyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aGlzIG51bWJlciB0byBzaG9vdCBsZXNzIGJ1bGxldHMgYXQgYSB0aW1lXG4gICAgICAgICAgICBpZih0aGlzLmJ1bGxldHMuY2hpbGRyZW4ubGVuZ3RoIDw9IDUpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLmFkZChidWxsZXQpO1xuXG4gICAgICAgICAgICAgICAgYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IHRoaXMuYnVsbGV0U3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3RTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgYnVsbGV0LnJlc2V0KHRoaXMueCwgdGhpcy50b3AsIDEpO1xuICAgICAgICAgICAgYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IHRoaXMuYnVsbGV0U3BlZWQ7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgZGFtYWdlKGFtb3VudCkge1xuICAgICAgICBzdXBlci5kYW1hZ2UoYW1vdW50KTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdsb2FkZXJCZycsICdpbWcvbG9hZGVyLWJnLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvYWRlckJhcicsICdpbWcvbG9hZGVyLWJhci5wbmcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcblxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBCb290fSBmcm9tICcuL2Jvb3QnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFByZWxvYWR9IGZyb20gJy4vcHJlbG9hZCc7XG5leHBvcnQge2RlZmF1bHQgYXMgTWVudX0gZnJvbSAnLi9tZW51Jztcbi8vZ2FtZTFcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQbGF5fSBmcm9tICcuL3Nob290ZXIvcGxheSc7XG5leHBvcnQge2RlZmF1bHQgYXMgT3Zlcn0gZnJvbSAnLi9zaG9vdGVyL292ZXInO1xuXG4vL3BhbmdCdG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBQbGF5UGFuZ30gZnJvbSAnLi9wYW5nL3BsYXlQYW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYW5nT3Zlcn0gZnJvbSAnLi9wYW5nL3BhbmdPdmVyJztcblxuLy9nYW1lM1xuZXhwb3J0IHtkZWZhdWx0IGFzIFBsYXlQYWlyc30gZnJvbSAnLi9wYWlycy9wbGF5UGFpcnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFBhaXJzT3Zlcn0gZnJvbSAnLi9wYWlycy9wYWlyc092ZXInO1xuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vZXh0ZW5zaW9ucy9tZW51L3RleHRidXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdDaG9vc2UgYSBnYW1lIScsIHtcbiAgICAgICAgICAgIGZvbnQ6ICczNnB4IFRhaG9tYScsXG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRpdGxlLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICAvLyB0aGlzLm11c2ljID0gdGhpcy5nYW1lLmFkZC5hdWRpbygnbWVudU11c2ljJyk7XG5cblxuICAgICAgICB0aGlzLmxlZnRCdG4gPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIDIwMCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdMZWZ0QnRuJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0QnRuLnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMubGVmdEJ0bi5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5sZWZ0QnRuLnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5sZWZ0QnRuLm9uSW5wdXRVcC5hZGQoKCk9PntcbiAgICAgICAgICAgIC8vdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5UGFpcnMnKTtcblxuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgLy8gU2Vjb25kIEJ0blxuICAgICAgICB0aGlzLnN0YXJ0ID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnU3RhcnQnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLnN0YXJ0LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLnN0YXJ0Lm9uSW5wdXRVcC5hZGQoKCk9PntcbiAgICAgICAgICAgIC8vdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5Jyk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXJkIEJ0blxuICAgICAgICB0aGlzLnBhbmdCdG4gPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCArIDIwMCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdQYW5nLWxpa2UhJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5wYW5nQnRuLnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMucGFuZ0J0bi5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5wYW5nQnRuLnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5wYW5nQnRuLm9uSW5wdXRVcC5hZGQoKCk9PntcbiAgICAgICAgICAgIC8vdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5UGFuZycpO1xuXG5cbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIHRoaXMubWVudVBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMudGl0bGUpO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbC5hZGQodGhpcy5sZWZ0QnRuKTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbC5hZGQodGhpcy5wYW5nQnRuKTtcblxuICAgICAgICAvL3RoaXMubXVzaWMubG9vcEZ1bGwoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVGV4dEJ1dHRvbiBmcm9tICcuLi8uLi9leHRlbnNpb25zL21lbnUvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmdPdmVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUgPSBuZXcgUGhhc2VyLlRleHQodGhpcy5nYW1lLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMjAwLCAnUGFuZyBHYW1lIG92ZXInLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdUcnkgYWdhaW4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZKzMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5UGFuZycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5nYW1lT3ZlclRpdGxlKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLm1lbnUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDYXJkQnV0dG9uIGZyb20gJy4uLy4uL2V4dGVuc2lvbnMvcGFpcnMvY2FyZGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlQYWlycyBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG5cbiAgICAgICAgLy90aGlzLmJnID0gdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLDY2Niw2MDAsICdwYW5nQmcnKTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjNGVkMGUxJztcbiAgICAgICAgdGhpcy5iZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgJ2JnJyk7XG4gICAgICAgIHRoaXMubnVtUm93cyA9IDQ7XG4gICAgICAgIHRoaXMubnVtQ29scyA9IDU7XG4gICAgICAgIHRoaXMudGlsZVNpemUgPSAxNTU7XG4gICAgICAgIHRoaXMudGlsZVNwYWNpbmcgPSA1O1xuICAgICAgICB0aGlzLnRpbGVzTGVmdCA9ICh0aGlzLm51bVJvd3MgKiB0aGlzLm51bUNvbHMpO1xuXG4gICAgICAgIHRoaXMuYmFja09mVGhlQ2FyZCA9IDEwO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiBDbGllbnRzIHN0YXJ0cyBhdCBwb3NpdGlvbiAxMCAoY291bnQgc3BhY2VzIGluIHNwcml0ZVNoZWV0KVxuICAgICAgICAgICAgKiAxMyA9IEdvb2dsZVxuICAgICAgICAgICAgKiAxNCA9IEFtYXpvblxuICAgICAgICAgICAgKiAxNSA9IENhcGl0YWxPbmVcbiAgICAgICAgICAgICogMTYgPSBHb2xkbWFuIFNhY2hzXG4gICAgICAgICAgICAqIDE3ID0gQWNjZW50dXJlXG4gICAgICAgICAgICAqIDE4ID0gQ2FwZ2VtaW5pXG4gICAgICAgICAgICAqIDE5ID0gUFdDXG4gICAgICAgICAgICAqIDE3ID0gLi4uXG4gICAgICAgICAgICAqIDE4ID0gLi4uXG4gICAgICAgICAgICAqIDE5ID0gLi4uXG4gICAgICAgICAgICAqIDIwID0gLi4uXG4gICAgICAgICAgICAqL1xuICAgICAgICB0aGlzLmNob3NlbkNsaWVudCA9IDEzO1xuXG5cbiAgICAgICAgdGhpcy5jYXJkR3JvdXAgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICAvL3NldCBpdCB0byBvbmUgbWludXRlICg2MClcbiAgICAgICAgdGhpcy50aW1lTGVmdCA9IDYwO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSAwO1xuXG4gICAgICAgIHRoaXMuY2FyZHNBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheSA9IFtdO1xuXG5cbiAgICAgICAgLy8tLS0tLS0gSFVEIFJFTEFURUQgU1RVRkZcblxuICAgICAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgICAgICAgZm9udDogXCIzMnB4IEhlbHZldGljYVwiLFxuICAgICAgICAgICAgZmlsbDogXCIjMDBmZjAwXCIsXG4gICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgNSwgXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCB0aGlzLnN0eWxlKTtcbiAgICAgICAgdGhpcy50aW1lVGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgdGhpcy5nYW1lLmhlaWdodCAtIDUsIFwiVGltZSBsZWZ0OiBcIiArIHRoaXMudGltZUxlZnQsIHRoaXMuc3R5bGUpO1xuICAgICAgICB0aGlzLnRpbWVUZXh0LmFuY2hvci5zZXQoMCwxKTtcblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05ELCB0aGlzLmRlY3JlYXNlVGltZSx0aGlzKTtcblxuICAgICAgICB0aGlzLnBsYWNlQ2FyZHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMubG9hZE1lbnUoKTtcblxuICAgIH1cblxuICAgIC8vIEN1c3RvbSBmdW5jdGlvbnNcbiAgICBsb2FkTWVudSgpe1xuICAgICAgICBsZXQgZXNjS2V5ID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuRVNDKTtcbiAgICAgICAgaWYoZXNjS2V5KXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnTWVudScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjcmVhc2VUaW1lKCkge1xuICAgICAgICB0aGlzLnRpbWVMZWZ0LS07XG4gICAgICAgIHRoaXMudGltZVRleHQudGV4dCA9IFwiVGltZSBsZWZ0OiBcIiArIHRoaXMudGltZUxlZnQ7XG4gICAgICAgIGlmKHRoaXMudGltZUxlZnQgPT0gMCkge1xuICAgICAgICAgICAgLy9DaGFuZ2UgdGhpcyB0byBwYWlyc092ZXJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnUGFuZ092ZXInKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGFjZUNhcmRzKCkge1xuXG4gICAgICAgIGxldCBsZWZ0U3BhY2UgPSAodGhpcy5nYW1lLndpZHRoIC0gKHRoaXMubnVtQ29scyAqIHRoaXMudGlsZVNpemUpIC0gKCh0aGlzLm51bUNvbHMgLSAxKSAqIFx0dGhpcy50aWxlU3BhY2luZykpLzI7XG4gICAgICAgIGxldCB0b3BTcGFjZSAgPSAodGhpcy5nYW1lLmhlaWdodCAtICh0aGlzLm51bVJvd3MgKiB0aGlzLnRpbGVTaXplKSAtICgodGhpcy5udW1Sb3dzIC0gMSkgKiBcdHRoaXMudGlsZVNwYWNpbmcpKS8yO1xuXG4gICAgICAgIC8vLS0gUG9wdWxhdGUgYXJyYXkgd2l0aCBwYWlycyBvZiBudW1iZXJzIFsxLDEsMiwyLDMsMyw0LDQsLi4uXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50aWxlc0xlZnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYXJkc0FycmF5LnB1c2goTWF0aC5mbG9vcihpIC8gMikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8tLSBSYW5kb21pemUgLyBtaXggdGhlIGFycmF5XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVzTGVmdDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZnJvbSA9ICB0aGlzLmdhbWUucm5kLmJldHdlZW4oMCwgdGhpcy5jYXJkc0FycmF5Lmxlbmd0aC0xKTtcbiAgICAgICAgICAgIGxldCB0byAgID0gIHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigwLCB0aGlzLmNhcmRzQXJyYXkubGVuZ3RoLTEpO1xuICAgICAgICAgICAgbGV0IHRlbXAgPSAgdGhpcy5jYXJkc0FycmF5W2Zyb21dO1xuXG4gICAgICAgICAgICB0aGlzLmNhcmRzQXJyYXlbZnJvbV0gPSB0aGlzLmNhcmRzQXJyYXlbdG9dO1xuICAgICAgICAgICAgdGhpcy5jYXJkc0FycmF5W3RvXSA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICAvLy0tIERlYWwgdGhlIGNhcmRzXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUNvbHM7IGkrKykge1xuXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5udW1Sb3dzOyBqKyspIHtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBuZXcgQ2FyZEJ1dHRvbih7XG4gICAgICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICAgICAgeDogbGVmdFNwYWNlICsgaSAqICh0aGlzLnRpbGVTaXplICtcdHRoaXMudGlsZVNwYWNpbmcpICsgNzUsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvcFNwYWNlICsgaiAqICh0aGlzLnRpbGVTaXplICsgdGhpcy50aWxlU3BhY2luZykgKyAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiAndGlsZXMnLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5zaG93Q2FyZCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tDb250ZXh0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBkb3duRnJhbWU6IDEyLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5jYXJkc0FycmF5W2ogKiB0aGlzLm51bUNvbHMgKyBpXSxcbiAgICAgICAgICAgICAgICAgICAgaXNDbGllbnQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBwYXJ0IGlzIHdoZXJlIHdlIHRha2UgdGhlIGxhc3QgY2FyZCBpbiBvdXIgc3ByaXRlc2hlZXQgYW5kIHJlcGxhY2UgaXQgd2l0aCBhIGNsaWVudFxuICAgICAgICAgICAgICAgIC8vIEluIHRoaXMgY2FzZSB2YWx1ZSA5IGlzIHRoZSBsYXN0IHZhbHVlIG9mIHRoZSAnc3RhbmRhcmQnIGNhcmRzXG4gICAgICAgICAgICAgICAgaWYoY2FyZC52YWx1ZSA9PSA5KXtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC52YWx1ZSA9IHRoaXMuY2hvc2VuQ2xpZW50O1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmlzQ2xpZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXJkLmZyYW1lID0gdGhpcy5iYWNrT2ZUaGVDYXJkO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZEdyb3VwLmFkZChjYXJkKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dDYXJkKHRhcmdldENhcmQpIHtcbiAgICAgICAgLypcbiAgICAgICAgKiAgIHB1c2ggdGhlIHZhbHVlcyBmcm9tIHRoZSBjYXJkcyB0byBvdXIgc2VsZWN0ZWQgYXJyYXkgb2YgY2FyZHNcbiAgICAgICAgKiAgIGlmIHlvdSBoYXZlIGNob3NlbiAyLCBsZXQncyBjb21wYXJlIHRoZW0gdXNpbmcgY2hlY2tUaWxlc1xuICAgICAgICAqL1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheS5sZW5ndGggPCAyICYmIHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5LmluZGV4T2YodGFyZ2V0Q2FyZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAvL1RPRE8gc291bmRzXG4gICAgICAgICAgICAvLyBpZihwbGF5U291bmQpe1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuc291bmRBcnJheVswXS5wbGF5KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB0YXJnZXRDYXJkLmZyYW1lID0gdGFyZ2V0Q2FyZC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5LnB1c2godGFyZ2V0Q2FyZCk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCwgdGhpcy5jaGVja1RpbGVzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY2hlY2tUaWxlcygpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogICBDaGVjayB0aGUgaWYgdGhlIHZhbHVlcyBmcm9tIG91ciBzZWxlY3RlZENhcmRzQXJyYXkgYXJlIGVxdWFsXG4gICAgICAgICAqICAgaWYgc28sIGFkZCBzY29yZSBhbmQgaGlkZSB0aGVtIGZyb20gdGhlIHVzZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVswXS52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZENhcmRzQXJyYXlbMV0udmFsdWUpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIFRPRE8gc291bmRzXG4gICAgICAgICAgICAqIGlmKHRoaXMucGxheXNvdW5kKXtcbiAgICAgICAgICAgICogICB0aGlzLnNvdW5kQXJyYXlbMV0ucGxheSgpO1xuICAgICAgICAgICAgKiB9XG4gICAgICAgICAgICAqICovXG5cbiAgICAgICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQgKz0gMjtcbiAgICAgICAgICAgIHRoaXMudGltZVRleHQudGV4dCA9IFwiVGltZSBsZWZ0OiBcIiArIHRoaXMudGltZUxlZnQ7XG4gICAgICAgICAgICB0aGlzLnNjb3JlVGV4dC50ZXh0ID0gXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBGaXJlIHVwIHRoZSBldmVudCBpZiBpdHMgYSBjbGllbnQgQ2FyZFxuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENhcmRzQXJyYXlbMF0uaXNDbGllbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVDbGllbnRNZXNzYWdlKFwiQ2xpZW50XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVswXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVsxXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnRpbGVzTGVmdCAtPSAyO1xuXG4gICAgICAgICAgICAvLyBXaW4gY29uZGl0aW9uXG4gICAgICAgICAgICBpZih0aGlzLnRpbGVzTGVmdCA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzQXJyYXkubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5wbGFjZUNhcmRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQbGF5UGFpcnMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9UT0RPOiBTb3VuZHNcbiAgICAgICAgICAgIC8vIGlmKHBsYXlTb3VuZCl7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zb3VuZEFycmF5WzJdLnBsYXkoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRoaXMuZ2FtZS5jYW1lcmEuc2hha2UoMC4wMSwgMTAwKTtcbiAgICAgICAgICAgIC8vIElmIHRoZXkgYXJlIG5vdCB0aGUgc2FtZSwgZmFjZSB0aGVtIG9mZlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzQXJyYXlbMF0uZnJhbWUgPSB0aGlzLmJhY2tPZlRoZUNhcmQ7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVsxXS5mcmFtZSA9IHRoaXMuYmFja09mVGhlQ2FyZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheS5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGZpcmVDbGllbnRNZXNzYWdlKGNsaWVudCkge1xuICAgICAgICBhbGVydChcIlRoaXMgaXMgYSBtZXNzYWdlIGZyb20gYSBkZWZhdWx0IENsaWVudFwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVGV4dEJ1dHRvbiBmcm9tICcuLi8uLi9leHRlbnNpb25zL21lbnUvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmdPdmVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUgPSBuZXcgUGhhc2VyLlRleHQodGhpcy5nYW1lLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMjAwLCAnUGFuZyBHYW1lIG92ZXInLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdUcnkgYWdhaW4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZKzMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5UGFuZycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5nYW1lT3ZlclRpdGxlKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLm1lbnUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vLi4vcHJlZmFicy9zaG9vdGVyL3BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vLi4vcHJlZmFicy9wYW5nL2VuZW15UGFuZyc7XG5pbXBvcnQgSFVEIGZyb20gJy4uLy4uL3ByZWZhYnMvcGFuZy9odWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5UGFuZyBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuYmcgPSB0aGlzLmFkZC50aWxlU3ByaXRlKDAsIDAsIDIwMDAsIDIzODAsICdwYW5nQmcnKTtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDA7XG5cblxuICAgICAgICAvLyAtLS0tLS0tIFBMQVlFUlxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiAwLjkyICogdGhpcy5nYW1lLndvcmxkLmhlaWdodCxcbiAgICAgICAgICAgIGhlYWx0aDogMTAsXG4gICAgICAgICAgICBhc3NldDogJ3NtYWxsZmlnaHRlcicsXG4gICAgICAgICAgICBmcmFtZTogMlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmFkZENoaWxkKHRoaXMucGxheWVyKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnBsYXllclNob290SW50ZXJ2YWwgPSAwLjE2O1xuXG4gICAgICAgIC8vIC0tLS0tLS0gRU5FTVk6IHRoZXNlIG9uZXMgYXJlIGNyZWF0ZWQgZXZlcnkgdXBkYXRlIHRpY2tcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5lbmVtaWVzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmVuZW15VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8xLjVcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gMi41O1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmVteVNob290SW50ZXJ2YWwgPSAxO1xuICAgICAgICAvLyAtLS0tLS0tICFFTkVNWVxuXG4gICAgICAgIC8vIC0tLS0tLS0gc21hbGxlckVORU1ZOiB0aGlzIG9uZXMgYXJlIGNyZWF0ZWQgZXZlcnkgdXBkYXRlIHRpY2tcbiAgICAgICAgdGhpcy5zbWFsbGVyRW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuc21hbGxlckVuZW1pZXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIC8vIC0tLS0tLS0gIXNtYWxsZXJFTkVNWVxuXG5cbiAgICAgICAgLy8gLS0tLS0tLSBFTkVNWSBDTElFTlQ6IHJhbmRvbWx5IGNob3NlblxuICAgICAgICB0aGlzLmVuZW1pZXNDbGllbnQgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmVuZW1pZXNDbGllbnQuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIC8vMS41XG4gICAgICAgIHRoaXMuZW5lbXlDbGllbnRJbnRlcnZhbCA9IDIuMDtcbiAgICAgICAgdGhpcy5lbmVteUNsaWVudFNob290VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5lbXlDbGllbnRTaG9vdEludGVydmFsID0gMTtcbiAgICAgICAgICAgIC8vaW5pdGlhbGl6ZSBmaXJzdCBjbGllbnRcbiAgICAgICAgdGhpcy5jcmVhdGVFbmVteUNsaWVudCh7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgLy8wXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDUsIDEwKSAqIDEwICogKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLzlcbiAgICAgICAgICAgIGhlYWx0aDogOTAsXG4gICAgICAgICAgICBidWxsZXRTcGVlZDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgxMCwgMjApICogMTAsXG4gICAgICAgICAgICBhc3NldDogJ2FsaWVucycsXG4gICAgICAgICAgICBzaXplOiAwLjhcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIC0tLS0tLS0gIUVORU1ZIENMSUVOVDogcmFuZG9tbHkgY2hvc2VuXG5cbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmxvb3AoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDEwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmVuZW15SW50ZXJ2YWwgPiAwLjIgKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgLT0gMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAgPSB0aGlzLmFkZC5iaXRtYXBEYXRhKHRoaXMuZ2FtZS53aWR0aCwgdGhpcy5nYW1lLmhlaWdodCk7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZ2FtZS53aWR0aCwgdGhpcy5nYW1lLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5ID0gdGhpcy5hZGQuc3ByaXRlKDAsIDAsIHRoaXMub3ZlcmxheUJpdG1hcCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hbHBoYSA9IDAuNzU7XG5cbiAgICAgICAgdGhpcy5odWQgPSBuZXcgSFVEKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHBsYXllcjogdGhpcy5wbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLSBTT1VORFNcbiAgICAgICAvLyB0aGlzLm11c2ljID0gdGhpcy5nYW1lLmFkZC5hdWRpbygncGxheU11c2ljJyk7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnYnVsbGV0SGl0Jyk7XG4gICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdlbmVteUV4cGxvc2lvbicpO1xuICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ3BsYXllckV4cGxvc2lvbicpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnZ2FtZU92ZXInKTtcblxuICAgICAgICAvL3RoaXMubXVzaWMubG9vcEZ1bGwoKTtcblxuXG5cbiAgICAgICAgLy9EZWZhdWx0c1xuICAgICAgICAvL3RoaXMuZW5lbXlUaW1lID0gMDtcbiAgICAgICAgLy90aGlzLmVuZW15SW50ZXJ2YWwgPSAxLjU7XG4gICAgICAgIC8vdGhpcy5lbmVteVNob290VGltZSA9IDA7XG4gICAgICAgIC8vdGhpcy5lbmVteVNob290SW50ZXJ2YWwgPSAxO1xuICAgICAgICAvL3RoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgLy90aGlzLnBsYXllclNob290SW50ZXJ2YWwgPSAwLjE2O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbmVteVRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuXG4gICAgICAgIGlmICh0aGlzLmVuZW15VGltZSA+IHRoaXMuZW5lbXlJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5lbmVteVRpbWUgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVuZW15KHtcbiAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg2LCA3NikgKiAxMCxcbiAgICAgICAgICAgICAgICAvLzBcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTAgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vOVxuICAgICAgICAgICAgICAgIGhlYWx0aDogOSxcbiAgICAgICAgICAgICAgICBidWxsZXRTcGVlZDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgxMCwgMjApICogMTAsXG4gICAgICAgICAgICAgICAgYXNzZXQ6ICdhbGllbicsXG4gICAgICAgICAgICAgICAgc2l6ZTogMi41XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlTaG9vdFRpbWUgPiB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5lbmVteVNob290VGltZSA9IDA7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhhcyBtdWVydG9cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJTaG9vdFRpbWUgPiB0aGlzLnBsYXllclNob290SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzaG9vdEtleSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSKTtcbiAgICAgICAgICAgICAgICBpZihzaG9vdEtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zaG9vdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLmJ1bGxldHMsIHRoaXMuZW5lbWllcywgdGhpcy5oaXRFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIuYnVsbGV0cywgdGhpcy5zbWFsbGVyRW5lbWllcywgdGhpcy5oaXRFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIsIFt0aGlzLmVuZW1pZXMsdGhpcy5zbWFsbGVyRW5lbWllc10sIHRoaXMuY3Jhc2hFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5sb2FkTWVudSgpO1xuICAgICAgICAvLyB0aGlzLmJnLnRpbGVQb3NpdGlvbi54ICs9IDM7XG4gICAgfVxuXG4gICAgY3JlYXRlRW5lbXkoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllcy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGxldCB0b3RhbEVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbEVuZW1pZXMpO1xuXG4gICAgICAgIGlmICghZW5lbXkpIHtcbiAgICAgICAgICAgIGVuZW15ID0gbmV3IEVuZW15KGRhdGEpO1xuICAgICAgICAgICAgaWYodG90YWxFbmVtaWVzIDwgNSl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLmFkZChlbmVteSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTbWFsbGVyRW5lbXkoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuc21hbGxlckVuZW1pZXMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBsZXQgdG90YWxFbmVtaWVzID0gdGhpcy5zbWFsbGVyRW5lbWllcy5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICBpZih0b3RhbEVuZW1pZXMgPCAyNCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zbWFsbGVyRW5lbWllcy5hZGQoZW5lbXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZW5lbXkucmVzZXQoZGF0YSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRW5lbXlDbGllbnQoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllc0NsaWVudC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGxldCB0b3RhbEVuZW1pZXMgPSB0aGlzLmVuZW1pZXNDbGllbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbEVuZW1pZXMpO1xuXG4gICAgICAgIGlmICghZW5lbXkpIHtcbiAgICAgICAgICAgIGVuZW15ID0gbmV3IEVuZW15KGRhdGEpO1xuICAgICAgICAgICAgaWYodG90YWxFbmVtaWVzIDw9IDEpe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllc0NsaWVudC5hZGQoZW5lbXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZW5lbXkucmVzZXQoZGF0YSk7XG4gICAgfVxuXG4gICAgaGl0RWZmZWN0KG9iaiwgY29sb3IpIHtcbiAgICAgICAgbGV0IHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2VlbihvYmopO1xuICAgICAgICBsZXQgZW1pdHRlciA9IHRoaXMuZ2FtZS5hZGQuZW1pdHRlcigpO1xuICAgICAgICBsZXQgZW1pdHRlclBoeXNpY3NUaW1lID0gMDtcbiAgICAgICAgbGV0IHBhcnRpY2xlU3BlZWQgPSAxMDA7XG4gICAgICAgIGxldCBtYXhQYXJ0aWNsZXMgPSAxMDtcblxuICAgICAgICB0d2Vlbi50byh7dGludDogMHhmZjAwMDB9LCAxMDApO1xuICAgICAgICB0d2Vlbi5vbkNvbXBsZXRlLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICBvYmoudGludCA9IDB4ZmZmZmZmO1xuICAgICAgICB9KTtcbiAgICAgICAgdHdlZW4uc3RhcnQoKTtcblxuICAgICAgICBlbWl0dGVyLnggPSBvYmoueDtcbiAgICAgICAgZW1pdHRlci55ID0gb2JqLnk7XG4gICAgICAgIGVtaXR0ZXIuZ3Jhdml0eSA9IDA7XG4gICAgICAgIGVtaXR0ZXIubWFrZVBhcnRpY2xlcygncGFydGljbGUnKTtcblxuICAgICAgICBpZiAob2JqLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICBwYXJ0aWNsZVNwZWVkID0gMjAwO1xuICAgICAgICAgICAgbWF4UGFydGljbGVzID0gNDA7XG4gICAgICAgICAgICBjb2xvciA9IDB4ZmYwMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZW1pdHRlci5taW5QYXJ0aWNsZVNwZWVkLnNldFRvKC1wYXJ0aWNsZVNwZWVkLCAtcGFydGljbGVTcGVlZCk7XG4gICAgICAgIGVtaXR0ZXIubWF4UGFydGljbGVTcGVlZC5zZXRUbyhwYXJ0aWNsZVNwZWVkLCBwYXJ0aWNsZVNwZWVkKTtcbiAgICAgICAgZW1pdHRlci5zdGFydCh0cnVlLCA1MDAsIG51bGwsIG1heFBhcnRpY2xlcyk7XG4gICAgICAgIGVtaXR0ZXIudXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgZW1pdHRlclBoeXNpY3NUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuICAgICAgICAgICAgaWYoZW1pdHRlclBoeXNpY3NUaW1lID49IDAuNil7XG4gICAgICAgICAgICAgICAgZW1pdHRlclBoeXNpY3NUaW1lID0gMDtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuICAgICAgICBlbWl0dGVyLmZvckVhY2gocGFydGljbGUgPT4gcGFydGljbGUudGludCA9IGNvbG9yKTtcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpdEVuZW15KGJ1bGxldCwgZW5lbXkpIHtcblxuICAgICAgICB0aGlzLmJ1bGxldEhpdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgIGVuZW15LmRhbWFnZShidWxsZXQuaGVhbHRoKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QoZW5lbXksIGJ1bGxldC50aW50KTtcblxuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLCAwLCAwLjUpO1xuICAgICAgICAgICAgdGhpcy5odWQudXBkYXRlU2NvcmUoZW5lbXkubWF4SGVhbHRoKTtcbiAgICAgICAgICAgIHN3aXRjaChlbmVteS5zaXplKXtcbiAgICAgICAgICAgICAgICAvL0xhcmdlIC0+IE1lZGl1bVxuICAgICAgICAgICAgICAgIGNhc2UgMi41OlxuICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTbWFsbGVyRW5lbXkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZW5lbXkueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDI1ICogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLTMwICogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGg6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6ICdhbGllbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxLjVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNtYWxsZXJFbmVteSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlbmVteS54LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlbmVteS55LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAtMjUgKiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtMzAgKiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhbHRoOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0OiAnYWxpZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMS41XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1bGxldC5raWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmFzaEVuZW15KHBsYXllciwgZW5lbXkpIHtcbiAgICAgICAgLy9lbmVteS5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgZW5lbXkuZGFtYWdlKDMpO1xuICAgICAgICAvL3BsYXllci5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgcGxheWVyLmRhbWFnZSgxKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QocGxheWVyKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QoZW5lbXkpO1xuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIHRoaXMuaHVkLnVwZGF0ZVNjb3JlKGVuZW15Lm1heEhlYWx0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5odWQudXBkYXRlSGVhbHRoKCk7XG4gICAgICAgIGlmICghcGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAzO1xuICAgICAgICB0aGlzLm92ZXJsYXkudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIGxldCB0aW1lciA9IHRoaXMuZ2FtZS50aW1lLmNyZWF0ZSh0aGlzLmdhbWUsIHRydWUpO1xuICAgICAgICB0aW1lci5hZGQoMzAwMCwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQYW5nT3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBsb2FkTWVudSgpe1xuICAgICAgICBsZXQgZXNjS2V5ID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuRVNDKTtcbiAgICAgICAgaWYoZXNjS2V5KXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmtpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnTWVudScpO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIHByZWxvYWQoKSB7XG5cbiAgICAgICAgdGhpcy5sb2FkZXJCZyA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclksICdsb2FkZXJCZycpO1xuICAgICAgICB0aGlzLmxvYWRlckJhciA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclksICdsb2FkZXJCYXInKTtcbiAgICAgICAgdGhpcy5sb2FkZXJCZy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5sb2FkZXJCYXIuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5sb2FkZXJCYXIpO1xuICAgICAgICAvLyBTaG9vdGVyXG5cbiAgICAgICAgdGhpcy5sb2FkLmF0bGFzSlNPTkFycmF5KCdzbWFsbGZpZ2h0ZXInLCAnaW1nL3Nob290ZXIvc3ByaXRlc2hlZXQvc21hbGxmaWdodGVyLnBuZycsICdkYXRhL3Nob290ZXIvc3ByaXRlc2hlZXQvc21hbGxmaWdodGVyLmpzb24nKTtcbiAgICAgICAgdGhpcy5sb2FkLmF0bGFzSlNPTkFycmF5KCdhbGllbicsICdpbWcvc2hvb3Rlci9zcHJpdGVzaGVldC9hbGllbi5wbmcnLCAnZGF0YS9zaG9vdGVyL3Nwcml0ZXNoZWV0L2FsaWVuLmpzb24nKTtcbiAgICAgICAgdGhpcy5sb2FkLmF0bGFzSlNPTkFycmF5KCdidXR0b24nLCAnaW1nL2J1dHRvbi5wbmcnLCAnZGF0YS9nZW5lcmljL2J1dHRvbi5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmFyYmFjaycsICdpbWcvc2hvb3Rlci9mYXJiYWNrLmpwZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdpbWcvc2hvb3Rlci9idWxsZXQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFydGljbGUnLCAnaW1nL3Nob290ZXIvcGFydGljbGUuZ2lmJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaGVhbHRoYmFyJywgJ2ltZy9zaG9vdGVyL2hlYWx0aGJhci5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdodWRCZycsICdpbWcvc2hvb3Rlci9odWQtYmcucG5nJyk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5TXVzaWMnLCBbJ2F1ZGlvL3Nob290ZXIvbXVzaWMvcGxheS5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudU11c2ljJywgWydhdWRpby9zaG9vdGVyL211c2ljL21lbnUubXAzJ10pO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudU92ZXInLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvbWVudS1vdmVyLm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtZW51T3V0JywgWydhdWRpby9zaG9vdGVyL3NvdW5kL21lbnUtb3V0Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtZW51RG93bicsIFsnYXVkaW8vc2hvb3Rlci9zb3VuZC9tZW51LWNsaWNrLm1wMyddKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2J1bGxldEhpdCcsIFsnYXVkaW8vc2hvb3Rlci9zb3VuZC9idWxsZXQtaGl0Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdlbmVteVNob3QnLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvZW5lbXktc2hvdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZW5lbXlFeHBsb3Npb24nLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvZW5lbXktZXhwbG9zaW9uLm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5ZXJTaG90JywgWydhdWRpby9zaG9vdGVyL3NvdW5kL3BsYXllci1zaG90Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5ZXJFeHBsb3Npb24nLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvcGxheWVyLWV4cGxvc2lvbi5tcDMnXSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdnYW1lT3ZlcicsIFsnYXVkaW8vc2hvb3Rlci9zb3VuZC9nYW1lLW92ZXIubXAzJ10pO1xuICAgICAgICAvLyFnYW1lIDFcblxuXG4gICAgICAgIC8vUGFuZ1xuXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFuZ0JnJywgJ2ltZy9wYW5nL3BhbmdCZy5wbmcnKTtcblxuICAgICAgICAvLyFQYW5nXG5cblxuICAgICAgICAvLyBtYXRjaGluZyBwYWlyc1xuXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndGlsZXMnLCdpbWcvcGFpcnMvdGlsZXNDbGllbnQyLnBuZycsIDE1MCwgMTcwLCAxNSk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmcnLCAnaW1nL3BhaXJzL2JnLmpwZycpO1xuICAgICAgICAvLyBtYXRjaGluZyBwYWlyc1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnTWVudScpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy9tZW51L3RleHRidXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUgPSBuZXcgUGhhc2VyLlRleHQodGhpcy5nYW1lLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMjAwLCAnR2FtZSBvdmVyJywge1xuICAgICAgICAgICAgZm9udDogJzM2cHggVGFob21hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZS5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0zMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnVHJ5IGFnYWluJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSszMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnTWVudScsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLnN0YXJ0Lm9uSW5wdXREb3duLmFkZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5nYW1lT3ZlclRpdGxlKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLm1lbnUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vLi4vcHJlZmFicy9zaG9vdGVyL3BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vLi4vcHJlZmFicy9zaG9vdGVyL2VuZW15JztcbmltcG9ydCBIVUQgZnJvbSAnLi4vLi4vcHJlZmFicy9wYW5nL2h1ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXkgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICAvL2ZhcmJhY2sgPSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuZmFyYmFjayA9IHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCwgODAwLCAyMzgwLCAnZmFyYmFjaycpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcblxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmVuZW1pZXMuZW5hYmxlQm9keSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogMC45MiAqIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQsXG4gICAgICAgICAgICBoZWFsdGg6IDEwMCxcbiAgICAgICAgICAgIGFzc2V0OiAnc21hbGxmaWdodGVyJyxcbiAgICAgICAgICAgIGZyYW1lOiAxXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wbGF5ZXIpO1xuXG4gICAgICAgIHRoaXMuaHVkID0gbmV3IEhVRCh7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICBwbGF5ZXI6IHRoaXMucGxheWVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAwO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25VcC5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZW5lbXlUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gMS41O1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmVteVNob290SW50ZXJ2YWwgPSAxO1xuICAgICAgICB0aGlzLnBsYXllclNob290VGltZSA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCA9IDAuMTY7XG5cbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmxvb3AoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDEwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmVuZW15SW50ZXJ2YWwgPiAwLjkgKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgLT0gMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAgPSB0aGlzLmFkZC5iaXRtYXBEYXRhKHRoaXMuZ2FtZS53aWR0aCwgdGhpcy5nYW1lLmhlaWdodCk7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZ2FtZS53aWR0aCwgdGhpcy5nYW1lLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5ID0gdGhpcy5hZGQuc3ByaXRlKDAsIDAsIHRoaXMub3ZlcmxheUJpdG1hcCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hbHBoYSA9IDAuNzU7XG5cbiAgICAgICAvLyB0aGlzLm11c2ljID0gdGhpcy5nYW1lLmFkZC5hdWRpbygncGxheU11c2ljJyk7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnYnVsbGV0SGl0Jyk7XG4gICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdlbmVteUV4cGxvc2lvbicpO1xuICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ3BsYXllckV4cGxvc2lvbicpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnZ2FtZU92ZXInKTtcblxuICAgICAgICAvL3RoaXMubXVzaWMubG9vcEZ1bGwoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5lbmVteVRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuXG4gICAgICAgIGlmICh0aGlzLmVuZW15VGltZSA+IHRoaXMuZW5lbXlJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5lbmVteVRpbWUgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVuZW15KHtcbiAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg2LCA3NikgKiAxMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTAgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWx0aDogOSxcbiAgICAgICAgICAgICAgICBidWxsZXRTcGVlZDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgxMCwgMjApICogMTAsXG4gICAgICAgICAgICAgICAgYXNzZXQ6ICdhbGllbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlTaG9vdFRpbWUgPiB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5lbmVteVNob290VGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaEFsaXZlKGVuZW15ID0+IGVuZW15LnNob290KCkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJTaG9vdFRpbWUgPiB0aGlzLnBsYXllclNob290SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNob290KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllci5idWxsZXRzLCB0aGlzLmVuZW1pZXMsIHRoaXMuaGl0RW5lbXksIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLCB0aGlzLmVuZW1pZXMsIHRoaXMuY3Jhc2hFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goZW5lbXkgPT4gdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIsIGVuZW15LmJ1bGxldHMsIHRoaXMuaGl0UGxheWVyLCBudWxsLCB0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5mYXJiYWNrLnRpbGVQb3NpdGlvbi55ICs9IDM7XG4gICAgfVxuXG4gICAgY3JlYXRlRW5lbXkoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllcy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMuYWRkKGVuZW15KTtcbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBoaXRFZmZlY3Qob2JqLCBjb2xvcikge1xuICAgICAgICBsZXQgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKG9iaik7XG4gICAgICAgIGxldCBlbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKCk7XG4gICAgICAgIGxldCBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICBsZXQgcGFydGljbGVTcGVlZCA9IDEwMDtcbiAgICAgICAgbGV0IG1heFBhcnRpY2xlcyA9IDEwO1xuXG4gICAgICAgIHR3ZWVuLnRvKHt0aW50OiAweGZmMDAwMH0sIDEwMCk7XG4gICAgICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIG9iai50aW50ID0gMHhmZmZmZmY7XG4gICAgICAgIH0pO1xuICAgICAgICB0d2Vlbi5zdGFydCgpO1xuXG4gICAgICAgIGVtaXR0ZXIueCA9IG9iai54O1xuICAgICAgICBlbWl0dGVyLnkgPSBvYmoueTtcbiAgICAgICAgZW1pdHRlci5ncmF2aXR5ID0gMDtcbiAgICAgICAgZW1pdHRlci5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZScpO1xuXG4gICAgICAgIGlmIChvYmouaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHBhcnRpY2xlU3BlZWQgPSAyMDA7XG4gICAgICAgICAgICBtYXhQYXJ0aWNsZXMgPSA0MDtcbiAgICAgICAgICAgIGNvbG9yID0gMHhmZjAwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBlbWl0dGVyLm1pblBhcnRpY2xlU3BlZWQuc2V0VG8oLXBhcnRpY2xlU3BlZWQsIC1wYXJ0aWNsZVNwZWVkKTtcbiAgICAgICAgZW1pdHRlci5tYXhQYXJ0aWNsZVNwZWVkLnNldFRvKHBhcnRpY2xlU3BlZWQsIHBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLnN0YXJ0KHRydWUsIDUwMCwgbnVsbCwgbWF4UGFydGljbGVzKTtcbiAgICAgICAgZW1pdHRlci51cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgICAgICBpZihlbWl0dGVyUGh5c2ljc1RpbWUgPj0gMC42KXtcbiAgICAgICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIGVtaXR0ZXIuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS50aW50ID0gY29sb3IpO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGl0RW5lbXkoYnVsbGV0LCBlbmVteSkge1xuICAgICAgICB0aGlzLmJ1bGxldEhpdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgIGVuZW15LmRhbWFnZShidWxsZXQuaGVhbHRoKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QoZW5lbXksIGJ1bGxldC50aW50KTtcbiAgICAgICAgaWYgKCFlbmVteS5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICB0aGlzLmh1ZC51cGRhdGVTY29yZShlbmVteS5tYXhIZWFsdGgpO1xuICAgICAgICB9XG4gICAgICAgIGJ1bGxldC5raWxsKCk7XG4gICAgfVxuXG4gICAgaGl0UGxheWVyKHBsYXllciwgYnVsbGV0KSB7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgcGxheWVyLmRhbWFnZShidWxsZXQuaGVhbHRoKTtcbiAgICAgICAgdGhpcy5odWQudXBkYXRlSGVhbHRoKCk7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KHBsYXllciwgYnVsbGV0LnRpbnQpO1xuICAgICAgICBpZiAoIXBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVsbGV0LmtpbGwoKTtcbiAgICB9XG5cbiAgICBjcmFzaEVuZW15KHBsYXllciwgZW5lbXkpIHtcbiAgICAgICAgZW5lbXkuZGFtYWdlKGVuZW15LmhlYWx0aCk7XG4gICAgICAgIHBsYXllci5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QocGxheWVyKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QoZW5lbXkpO1xuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIHRoaXMuaHVkLnVwZGF0ZVNjb3JlKGVuZW15Lm1heEhlYWx0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5odWQudXBkYXRlSGVhbHRoKCk7XG4gICAgICAgIGlmICghcGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAzO1xuICAgICAgICB0aGlzLm92ZXJsYXkudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIGxldCB0aW1lciA9IHRoaXMuZ2FtZS50aW1lLmNyZWF0ZSh0aGlzLmdhbWUsIHRydWUpO1xuICAgICAgICB0aW1lci5hZGQoMzAwMCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdPdmVyJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgIH1cblxufVxuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p6Y21NdmFuTXZaWGgwWlc1emFXOXVjeTl0Wlc1MUwzUmxlSFJpZFhSMGIyNHVhbk1pTENKemNtTXZhbk12WlhoMFpXNXphVzl1Y3k5d1lXbHljeTlqWVhKa1luVjBkRzl1TG1weklpd2ljM0pqTDJwekwyZGhiV1V1YW5NaUxDSnpjbU12YW5NdmNISmxabUZpY3k5d1lXNW5MMkoxYkd4bGRDNXFjeUlzSW5OeVl5OXFjeTl3Y21WbVlXSnpMM0JoYm1jdlpXNWxiWGxRWVc1bkxtcHpJaXdpYzNKakwycHpMM0J5WldaaFluTXZjR0Z1Wnk5b2RXUXVhbk1pTENKemNtTXZhbk12Y0hKbFptRmljeTl6YUc5dmRHVnlMMlZ1WlcxNUxtcHpJaXdpYzNKakwycHpMM0J5WldaaFluTXZjMmh2YjNSbGNpOXdiR0Y1WlhJdWFuTWlMQ0p6Y21NdmFuTXZjM1JoZEdWekwySnZiM1F1YW5NaUxDSnpjbU12YW5NdmMzUmhkR1Z6TDJsdVpHVjRMbXB6SWl3aWMzSmpMMnB6TDNOMFlYUmxjeTl0Wlc1MUxtcHpJaXdpYzNKakwycHpMM04wWVhSbGN5OXdZV2x5Y3k5d1lXbHljMDkyWlhJdWFuTWlMQ0p6Y21NdmFuTXZjM1JoZEdWekwzQmhhWEp6TDNCc1lYbFFZV2x5Y3k1cWN5SXNJbk55WXk5cWN5OXpkR0YwWlhNdmNHRnVaeTl3WVc1blQzWmxjaTVxY3lJc0luTnlZeTlxY3k5emRHRjBaWE12Y0dGdVp5OXdiR0Y1VUdGdVp5NXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZjSEpsYkc5aFpDNXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZjMmh2YjNSbGNpOXZkbVZ5TG1weklpd2ljM0pqTDJwekwzTjBZWFJsY3k5emFHOXZkR1Z5TDNCc1lYa3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdTVU5CY1VJc1ZUczdPMEZCUldwQ0xEaENRVUZ4U0R0QlFVRkJMRmxCUVhaSExFbEJRWFZITEZGQlFYWkhMRWxCUVhWSE8wRkJRVUVzV1VGQmFrY3NRMEZCYVVjc1VVRkJha2NzUTBGQmFVYzdRVUZCUVN4WlFVRTVSaXhEUVVFNFJpeFJRVUU1Uml4RFFVRTRSanRCUVVGQkxGbEJRVE5HTEV0QlFUSkdMRkZCUVROR0xFdEJRVEpHTzBGQlFVRXNXVUZCY0VZc1VVRkJiMFlzVVVGQmNFWXNVVUZCYjBZN1FVRkJRU3haUVVFeFJTeGxRVUV3UlN4UlFVRXhSU3hsUVVFd1JUdEJRVUZCTEZsQlFYcEVMRk5CUVhsRUxGRkJRWHBFTEZOQlFYbEVPMEZCUVVFc1dVRkJPVU1zVVVGQk9FTXNVVUZCT1VNc1VVRkJPRU03UVVGQlFTeFpRVUZ3UXl4VFFVRnZReXhSUVVGd1F5eFRRVUZ2UXp0QlFVRkJMRmxCUVhwQ0xFOUJRWGxDTEZGQlFYcENMRTlCUVhsQ08wRkJRVUVzV1VGQmFFSXNTMEZCWjBJc1VVRkJhRUlzUzBGQlowSTdRVUZCUVN4WlFVRlVMRXRCUVZNc1VVRkJWQ3hMUVVGVE96dEJRVUZCT3p0QlFVRkJMRFJJUVVNelJ5eEpRVVF5Unl4RlFVTnlSeXhEUVVSeFJ5eEZRVU5zUnl4RFFVUnJSeXhGUVVNdlJpeExRVVFyUml4RlFVTjRSaXhSUVVSM1JpeEZRVU01UlN4bFFVUTRSU3hGUVVNM1JDeFRRVVEyUkN4RlFVTnNSQ3hSUVVSclJDeEZRVU40UXl4VFFVUjNReXhGUVVNM1FpeFBRVVEyUWpzN1FVRkhha2dzWTBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRnJRaXhIUVVGc1FqczdRVUZGUVN4alFVRkxMRXRCUVV3c1IwRkJZU3hMUVVGaU8wRkJRMEVzWTBGQlN5eExRVUZNTEVkQlFXRXNTMEZCWWp0QlFVTkJMR05CUVVzc1NVRkJUQ3hIUVVGWkxFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRTFCUVVzc1NVRkJja0lzUlVGQk1rSXNRMEZCTTBJc1JVRkJPRUlzUTBGQk9VSXNSVUZCYVVNc1RVRkJTeXhMUVVGMFF5eEZRVUUyUXl4TlFVRkxMRXRCUVd4RUxFTkJRVm83UVVGRFFTeGpRVUZMTEVsQlFVd3NRMEZCVlN4TlFVRldMRU5CUVdsQ0xFdEJRV3BDTEVOQlFYVkNMRWRCUVhaQ096dEJRVVZCTEdOQlFVc3NVVUZCVEN4RFFVRmpMRTFCUVVzc1NVRkJia0k3TzBGQlZtbElPMEZCV1hCSU96czdSVUZrYlVNc1QwRkJUeXhOT3p0clFrRkJNVUlzVlRzN096czdPenM3T3pzN096czdPMGxEUVVFc1ZUczdPMEZCUldwQ0xEaENRVUZ6U0R0QlFVRkJMRmxCUVhoSExFbEJRWGRITEZGQlFYaEhMRWxCUVhkSE8wRkJRVUVzV1VGQmJFY3NRMEZCYTBjc1VVRkJiRWNzUTBGQmEwYzdRVUZCUVN4WlFVRXZSaXhEUVVFclJpeFJRVUV2Uml4RFFVRXJSanRCUVVGQkxGbEJRVFZHTEV0QlFUUkdMRkZCUVRWR0xFdEJRVFJHTzBGQlFVRXNXVUZCY2tZc1VVRkJjVVlzVVVGQmNrWXNVVUZCY1VZN1FVRkJRU3haUVVFelJTeGxRVUV5UlN4UlFVRXpSU3hsUVVFeVJUdEJRVUZCTEZsQlFURkVMRk5CUVRCRUxGRkJRVEZFTEZOQlFUQkVPMEZCUVVFc1dVRkJMME1zVVVGQkswTXNVVUZCTDBNc1VVRkJLME03UVVGQlFTeFpRVUZ5UXl4VFFVRnhReXhSUVVGeVF5eFRRVUZ4UXp0QlFVRkJMRmxCUVRGQ0xFOUJRVEJDTEZGQlFURkNMRTlCUVRCQ08wRkJRVUVzV1VGQmJFSXNTMEZCYTBJc1VVRkJiRUlzUzBGQmEwSTdRVUZCUVN4WlFVRllMRkZCUVZjc1VVRkJXQ3hSUVVGWE96dEJRVUZCT3p0QlFVRkJMRFJJUVVNMVJ5eEpRVVEwUnl4RlFVTjBSeXhEUVVSelJ5eEZRVU51Unl4RFFVUnRSeXhGUVVOb1J5eExRVVJuUnl4RlFVTjZSaXhSUVVSNVJpeEZRVU12UlN4bFFVUXJSU3hGUVVNNVJDeFRRVVE0UkN4RlFVTnVSQ3hSUVVSdFJDeEZRVU42UXl4VFFVUjVReXhGUVVNNVFpeFBRVVE0UWpzN1FVRkhiRWdzWTBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRnJRaXhIUVVGc1FqdEJRVU5CTzBGQlEwRXNZMEZCU3l4UlFVRk1MRWRCUVdkQ0xGRkJRV2hDTzBGQlEwRXNZMEZCU3l4TFFVRk1MRWRCUVdFc1MwRkJZanRCUVVOQkxHTkJRVXNzVVVGQlRDeEhRVUZuUWl4UlFVRm9RanRCUVZCclNEdEJRVkZ5U0RzN08wVkJWbTFETEU5QlFVOHNUVHM3YTBKQlFURkNMRlU3T3pzN08wRkRRWEpDT3p0SlFVRlpMRTA3T3pzN1FVRkRXaXhKUVVGTkxFOUJRVThzU1VGQlNTeFBRVUZQTEVsQlFWZ3NRMEZCWjBJc1NVRkJhRUlzUlVGQmMwSXNSMEZCZEVJc1JVRkJNa0lzVDBGQlR5eEpRVUZzUXl4RFFVRmlPenRCUVVWQkxFOUJRVThzU1VGQlVDeERRVUZaTEUxQlFWb3NSVUZCYjBJc1QwRkJjRUlzUTBGQk5FSTdRVUZCUVN4VFFVRlRMRXRCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzUTBGQlpTeExRVUZtTEVWQlFYTkNMRTlCUVU4c1MwRkJVQ3hEUVVGMFFpeERRVUZVTzBGQlFVRXNRMEZCTlVJN08wRkJSVUVzUzBGQlN5eExRVUZNTEVOQlFWY3NTMEZCV0N4RFFVRnBRaXhOUVVGcVFqczdPenM3T3pzN096czdPenM3TzBsRFRIRkNMRTA3T3p0QlFVVnFRaXd3UWtGQk5FUTdRVUZCUVN4WlFVRTVReXhKUVVFNFF5eFJRVUU1UXl4SlFVRTRRenRCUVVGQkxGbEJRWGhETEVOQlFYZERMRkZCUVhoRExFTkJRWGRETzBGQlFVRXNXVUZCY2tNc1EwRkJjVU1zVVVGQmNrTXNRMEZCY1VNN1FVRkJRU3haUVVGc1F5eExRVUZyUXl4UlFVRnNReXhMUVVGclF6dEJRVUZCTEZsQlFUTkNMRTFCUVRKQ0xGRkJRVE5DTEUxQlFUSkNPMEZCUVVFc05rSkJRVzVDTEVsQlFXMUNPMEZCUVVFc1dVRkJia0lzU1VGQmJVSXNOa0pCUVZvc1VVRkJXVHM3UVVGQlFUczdRVUZCUVN4dlNFRkRiRVFzU1VGRWEwUXNSVUZETlVNc1EwRkVORU1zUlVGRGVrTXNRMEZFZVVNc1JVRkRkRU1zUzBGRWMwTTdPMEZCUjNoRUxHTkJRVXNzVFVGQlRDeERRVUZaTEV0QlFWb3NRMEZCYTBJc1IwRkJiRUk3UVVGRFFTeGpRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFZEJRV3BDTzBGQlEwRXNZMEZCU3l4TlFVRk1MRWRCUVdNc1RVRkJaRHRCUVVOQkxHTkJRVXNzU1VGQlRDeEhRVUZaTEVsQlFWbzdRVUZEUVN4alFVRkxMR2RDUVVGTUxFZEJRWGRDTEVsQlFYaENPMEZCUTBFc1kwRkJTeXhsUVVGTUxFZEJRWFZDTEVsQlFYWkNPMEZCVW5kRU8wRkJVek5FT3pzN1JVRllLMElzVDBGQlR5eE5PenRyUWtGQmRFSXNUVHM3T3pzN096czdPenM3T3p0QlEwRnlRanM3T3pzN096czdPenM3TzBsQlJYRkNMRXM3T3p0QlFVVnFRaXg1UWtGQmIwVTdRVUZCUVN4WlFVRjBSQ3hKUVVGelJDeFJRVUYwUkN4SlFVRnpSRHRCUVVGQkxGbEJRV2hFTEVOQlFXZEVMRkZCUVdoRUxFTkJRV2RFTzBGQlFVRXNXVUZCTjBNc1EwRkJOa01zVVVGQk4wTXNRMEZCTmtNN1FVRkJRU3haUVVFeFF5eExRVUV3UXl4UlFVRXhReXhMUVVFd1F6dEJRVUZCTEZsQlFXNURMRXRCUVcxRExGRkJRVzVETEV0QlFXMURPMEZCUVVFc1dVRkJOVUlzVFVGQk5FSXNVVUZCTlVJc1RVRkJORUk3UVVGQlFTeFpRVUZ3UWl4WFFVRnZRaXhSUVVGd1FpeFhRVUZ2UWp0QlFVRkJMRmxCUVZJc1NVRkJVU3hSUVVGU0xFbEJRVkU3TzBGQlFVRTdPMEZCUVVFc2EwaEJRekZFTEVsQlJEQkVMRVZCUTNCRUxFTkJSRzlFTEVWQlEycEVMRU5CUkdsRUxFVkJRemxETEV0QlJEaERMRVZCUTNaRExFdEJSSFZET3p0QlFVZG9SU3hqUVVGTExFbEJRVXdzUjBGQldTeEpRVUZhT3p0QlFVVkJMR05CUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUTBGQmEwSXNSMEZCYkVJN08wRkJSVUU3UVVGRFFTeGpRVUZMTEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1kwRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4SlFVRnFRanRCUVVOQkxHTkJRVXNzVFVGQlRDeEhRVUZqTEUxQlFXUTdRVUZEUVN4alFVRkxMRk5CUVV3c1IwRkJhVUlzVFVGQmFrSTdPMEZCUjBFN1FVRkRRU3hqUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRTFCUVd4Q0xFTkJRWGxDTEUxQlFYcENPMEZCUTBFc1kwRkJTeXhKUVVGTUxFTkJRVlVzYTBKQlFWWXNSMEZCSzBJc1NVRkJMMEk3UVVGRFFTeGpRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFTkJRV3hDTEVkQlFYTkNMRWRCUVhSQ08wRkJRMEVzWTBGQlN5eEpRVUZNTEVOQlFWVXNUVUZCVml4RFFVRnBRaXhIUVVGcVFpeERRVUZ4UWl4RFFVRnlRanM3UVVGRlFTeGpRVUZMTEZWQlFVd3NRMEZCWjBJc1IwRkJhRUlzUTBGQmIwSXNWVUZCY0VJc1JVRkJaME1zUTBGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2l4RlFVRlBMRU5CUVZBc1JVRkJWU3hEUVVGV0xFVkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhGUVVGdFFpeERRVUZ1UWl4RlFVRnpRaXhEUVVGMFFpeEZRVUY1UWl4RFFVRjZRaXhGUVVFMFFpeERRVUUxUWl4RlFVRXJRaXhGUVVFdlFpeEZRVUZ0UXl4RlFVRnVReXhGUVVGMVF5eEZRVUYyUXl4RlFVRXlReXhGUVVFelF5eEZRVUVyUXl4RlFVRXZReXhEUVVGb1F5eEZRVUZ2Uml4RlFVRndSaXhGUVVGM1JpeEpRVUY0Ump0QlFVTkJMR05CUVVzc1NVRkJUQ3hEUVVGVkxGVkJRVlk3TzBGQlJVRXNZMEZCU3l4UFFVRk1MRWRCUVdVc1RVRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEV0QlFXUXNSVUZCWmp0QlFVTkJMR05CUVVzc1QwRkJUQ3hEUVVGaExGVkJRV0lzUjBGQk1FSXNTVUZCTVVJN1FVRkRRU3hqUVVGTExGZEJRVXdzUjBGQmJVSXNWMEZCYmtJN08wRkJSVUVzWTBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eExRVUZrTEVOQlFXOUNMRmRCUVhCQ0xFTkJRV3BDT3p0QlFUTkNaMFU3UVVFMlFtNUZPenM3TzJsRFFVVlJPenRCUVVWTUxHZENRVUZKTEV0QlFVc3NVVUZCVEN4RFFVRmpMRU5CUVdRc1IwRkJhMElzVDBGQlR5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRVGRETEVWQlFXOUVPMEZCUTJoRUxIRkNRVUZMTEZGQlFVd3NRMEZCWXl4RFFVRmtMRWRCUVd0Q0xFOUJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhMUVVGMlFpeEhRVUVyUWl4RFFVRnFSRHRCUVVOQkxIRkNRVUZMTEVsQlFVd3NRMEZCVlN4UlFVRldMRU5CUVcxQ0xFTkJRVzVDTEVsQlFYZENMRU5CUVVNc1EwRkJla0k3UVVGRFNDeGhRVWhFTEUxQlNVc3NTVUZCU1N4TFFVRkxMRkZCUVV3c1EwRkJZeXhEUVVGa0xFZEJRV3RDTEU5QlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUUzUXl4RlFVRnZSRHRCUVVOeVJDeHhRa0ZCU3l4UlFVRk1MRU5CUVdNc1EwRkJaQ3hIUVVGclFpeFBRVUZQTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQmRrSXNSMEZCSzBJc1EwRkJha1E3UVVGRFFTeHhRa0ZCU3l4SlFVRk1MRU5CUVZVc1VVRkJWaXhEUVVGdFFpeERRVUZ1UWl4SlFVRjNRaXhEUVVGRExFTkJRWHBDTzBGQlEwZzdPMEZCUlVRc1owSkJRVWtzUzBGQlN5eFJRVUZNTEVOQlFXTXNRMEZCWkN4SFFVRnJRaXhMUVVGTExFMUJRVXdzUjBGQll5eERRVUZvUXl4SFFVRnZReXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTFCUVhoRUxFVkJRV2RGTzBGQlF6VkVMSEZDUVVGTExFbEJRVXc3UVVGRFNEdEJRVU5LT3pzN0swSkJTVTBzVFN4RlFVRlJPMEZCUTFnc2FVaEJRV0VzVFVGQllqdEJRVU5JT3pzN2NVTkJSVEpETzBGQlFVRXNaMEpCUVhCRExFTkJRVzlETEZOQlFYQkRMRU5CUVc5RE8wRkJRVUVzWjBKQlFXcERMRU5CUVdsRExGTkJRV3BETEVOQlFXbERPMEZCUVVFc1owSkJRVGxDTEUxQlFUaENMRk5CUVRsQ0xFMUJRVGhDTzBGQlFVRXNaMEpCUVhSQ0xGZEJRWE5DTEZOQlFYUkNMRmRCUVhOQ08wRkJRVUVzWjBKQlFWUXNTMEZCVXl4VFFVRlVMRXRCUVZNN08wRkJRM2hETEdkSVFVRlpMRU5CUVZvc1JVRkJaU3hEUVVGbUxFVkJRV3RDTEUxQlFXeENPMEZCUTBFc2FVSkJRVXNzVjBGQlRDeEhRVUZ0UWl4WFFVRnVRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UlFVRldMRU5CUVcxQ0xFTkJRVzVDTEVkQlFYVkNMRTFCUVUwc1EwRkJOMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1VVRkJWaXhEUVVGdFFpeERRVUZ1UWl4SFFVRjFRaXhOUVVGTkxFTkJRVGRDTzBGQlEwZzdPenM3UlVFMVJEaENMRTlCUVU4c1RUczdhMEpCUVhKQ0xFczdPenM3T3pzN096czdPMEZEUm5KQ096czdPenM3T3pzN096czdTVUZEY1VJc1J6czdPMEZCUTJwQ0xIVkNRVUU0UWp0QlFVRkJMRmxCUVdoQ0xFbEJRV2RDTEZGQlFXaENMRWxCUVdkQ08wRkJRVUVzV1VGQlZpeE5RVUZWTEZGQlFWWXNUVUZCVlRzN1FVRkJRVHM3UVVGQlFTdzRSMEZEY0VJc1NVRkViMEk3TzBGQlJURkNMR05CUVVzc1NVRkJUQ3hIUVVGWkxFbEJRVm83UVVGRFFTeGpRVUZMTEUxQlFVd3NSMEZCWXl4TlFVRmtPMEZCUTBFc1kwRkJTeXhGUVVGTUxFZEJRVlVzU1VGQlNTeFBRVUZQTEV0QlFWZ3NRMEZCYVVJc1RVRkJTeXhKUVVGMFFpeEZRVUUwUWl4RFFVRTFRaXhGUVVFclFpeERRVUV2UWl4RlFVRnJReXhQUVVGc1F5eERRVUZXTzBGQlEwRXNZMEZCU3l4TFFVRk1MRWRCUVdFc1IwRkJZanRCUVVOQkxHTkJRVXNzVTBGQlRDeEhRVUZwUWl4SlFVRkpMRTlCUVU4c1RVRkJXQ3hEUVVGclFpeE5RVUZMTEVsQlFYWkNMRVZCUVRaQ0xFTkJRVGRDTEVWQlFXZERMRU5CUVdoRExFVkJRVzFETEZkQlFXNURMRU5CUVdwQ08wRkJRMEVzWTBGQlN5eFRRVUZNTEVOQlFXVXNTMEZCWml4RFFVRnhRaXhMUVVGeVFpeERRVUV5UWl4TFFVRXpRaXhGUVVGclF5eEZRVUZzUXpzN1FVRkZRU3hqUVVGTExFdEJRVXdzUjBGQllTeERRVUZpTzBGQlEwRXNZMEZCU3l4VlFVRk1MRWRCUVd0Q0xGTkJRV3hDTzBGQlEwRXNZMEZCU3l4VFFVRk1MRWRCUVdsQ0xFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRTFCUVVzc1NVRkJja0lzUlVGQk1rSXNSVUZCTTBJc1JVRkJLMElzUlVGQkwwSXNSVUZCYlVNc1RVRkJTeXhWUVVGTUxFZEJRV3RDTEUxQlFVc3NTMEZCTVVRc1JVRkJhVVU3UVVGRE9VVXNhMEpCUVUwc1kwRkVkMFU3UVVGRk9VVXNhMEpCUVUwc1QwRkdkMFU3UVVGSE9VVXNiVUpCUVU4N08wRkJTSFZGTEZOQlFXcEZMRU5CUVdwQ096dEJRVTlCTEdOQlFVc3NSMEZCVEN4RFFVRlRMRTFCUVVzc1JVRkJaRHRCUVVOQkxHTkJRVXNzUjBGQlRDeERRVUZUTEUxQlFVc3NVMEZCWkR0QlFVTkJMR05CUVVzc1IwRkJUQ3hEUVVGVExFMUJRVXNzVTBGQlpEdEJRWEJDTUVJN1FVRnhRamRDT3pzN08zRkRRVVZaTEUwc1JVRkJVVHRCUVVOcVFpeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1NVRkJaaXhEUVVGdlFpeEpRVUZKTEU5QlFVOHNVMEZCV0N4RFFVRnhRaXhEUVVGeVFpeEZRVUYzUWl4RFFVRjRRaXhGUVVFMFFpeExRVUZMTEUxQlFVd3NRMEZCV1N4TlFVRmFMRWRCUVhGQ0xFdEJRVXNzVFVGQlRDeERRVUZaTEZOQlFXeERMRWRCUVN0RExFdEJRVXNzUzBGQkwwVXNSVUZCYzBZc1JVRkJkRVlzUTBGQmNFSTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzVlVGQlpqdEJRVU5JT3pzN2IwTkJSVmNzVFN4RlFVRlJPMEZCUTJoQ0xHbENRVUZMTEV0QlFVd3NTVUZCWXl4TlFVRmtPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEVsQlFXWXNSMEZCYzBJc1MwRkJTeXhWUVVGTUxFZEJRVzFDTEV0QlFVc3NTMEZCVEN4SFFVRmhMRVZCUVhSRU8wRkJRMGc3T3pzN1JVRm9RelJDTEU5QlFVOHNTenM3YTBKQlFXNUNMRWM3UVVGclEzQkNPenM3T3pzN096czdPenM3TzBGRGJrTkVPenM3T3pzN096czdPenM3U1VGRmNVSXNTenM3TzBGQlJXcENMSGxDUVVFclJEdEJRVUZCTEZsQlFXcEVMRWxCUVdsRUxGRkJRV3BFTEVsQlFXbEVPMEZCUVVFc1dVRkJNME1zUTBGQk1rTXNVVUZCTTBNc1EwRkJNa003UVVGQlFTeFpRVUY0UXl4RFFVRjNReXhSUVVGNFF5eERRVUYzUXp0QlFVRkJMRmxCUVhKRExFdEJRWEZETEZGQlFYSkRMRXRCUVhGRE8wRkJRVUVzV1VGQk9VSXNTMEZCT0VJc1VVRkJPVUlzUzBGQk9FSTdRVUZCUVN4WlFVRjJRaXhOUVVGMVFpeFJRVUYyUWl4TlFVRjFRanRCUVVGQkxGbEJRV1lzVjBGQlpTeFJRVUZtTEZkQlFXVTdPMEZCUVVFN08wRkJRVUVzYTBoQlEzSkVMRWxCUkhGRUxFVkJReTlETEVOQlJDdERMRVZCUXpWRExFTkJSRFJETEVWQlEzcERMRXRCUkhsRExFVkJRMnhETEV0QlJHdERPenRCUVVjelJDeGpRVUZMTEVsQlFVd3NSMEZCV1N4SlFVRmFPenRCUVVWQkxHTkJRVXNzVFVGQlRDeERRVUZaTEV0QlFWb3NRMEZCYTBJc1IwRkJiRUk3UVVGRFFTeGpRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFZEJRV3BDTzBGQlEwRXNZMEZCU3l4TlFVRk1MRWRCUVdNc1RVRkJaRHRCUVVOQkxHTkJRVXNzVTBGQlRDeEhRVUZwUWl4TlFVRnFRanRCUVVOQkxHTkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1RVRkJiRUlzUTBGQmVVSXNUVUZCZWtJN08wRkJSVUVzWTBGQlN5eFZRVUZNTEVOQlFXZENMRWRCUVdoQ0xFTkJRVzlDTEZWQlFYQkNMRVZCUVdkRExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4RFFVRlFMRVZCUVZVc1EwRkJWaXhGUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1JVRkJiVUlzUTBGQmJrSXNSVUZCYzBJc1EwRkJkRUlzUlVGQmVVSXNRMEZCZWtJc1JVRkJORUlzUTBGQk5VSXNSVUZCSzBJc1JVRkJMMElzUlVGQmJVTXNSVUZCYmtNc1JVRkJkVU1zUlVGQmRrTXNSVUZCTWtNc1JVRkJNME1zUlVGQkswTXNSVUZCTDBNc1EwRkJhRU1zUlVGQmIwWXNSVUZCY0VZc1JVRkJkMFlzU1VGQmVFWTdRVUZEUVN4alFVRkxMRWxCUVV3c1EwRkJWU3hWUVVGV096dEJRVVZCTEdOQlFVc3NUMEZCVEN4SFFVRmxMRTFCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eExRVUZrTEVWQlFXWTdRVUZEUVN4alFVRkxMRTlCUVV3c1EwRkJZU3hWUVVGaUxFZEJRVEJDTEVsQlFURkNPMEZCUTBFc1kwRkJTeXhYUVVGTUxFZEJRVzFDTEZkQlFXNUNPenRCUVVWQkxHTkJRVXNzVTBGQlRDeEhRVUZwUWl4TlFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zUzBGQlpDeERRVUZ2UWl4WFFVRndRaXhEUVVGcVFqczdRVUZzUWpKRU8wRkJiMEk1UkRzN096dHBRMEZGVVRzN1FVRkZUQ3huUWtGQlNTeExRVUZMTEZGQlFVd3NRMEZCWXl4RFFVRmtMRWRCUVd0Q0xFOUJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhMUVVFM1F5eEZRVUZ2UkR0QlFVTm9SQ3h4UWtGQlN5eFJRVUZNTEVOQlFXTXNRMEZCWkN4SFFVRnJRaXhQUVVGUExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1MwRkJka0lzUjBGQkswSXNRMEZCYWtRN1FVRkRRU3h4UWtGQlN5eEpRVUZNTEVOQlFWVXNVVUZCVml4RFFVRnRRaXhEUVVGdVFpeEpRVUYzUWl4RFFVRkRMRU5CUVhwQ08wRkJRMGdzWVVGSVJDeE5RVWxMTEVsQlFVa3NTMEZCU3l4UlFVRk1MRU5CUVdNc1EwRkJaQ3hIUVVGclFpeFBRVUZQTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQk4wTXNSVUZCYjBRN1FVRkRja1FzY1VKQlFVc3NVVUZCVEN4RFFVRmpMRU5CUVdRc1IwRkJhMElzVDBGQlR5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRWFpDTEVkQlFTdENMRU5CUVdwRU8wRkJRMEVzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRkZCUVZZc1EwRkJiVUlzUTBGQmJrSXNTVUZCZDBJc1EwRkJReXhEUVVGNlFqdEJRVU5JT3p0QlFVVkVMR2RDUVVGSkxFdEJRVXNzVVVGQlRDeERRVUZqTEVOQlFXUXNSMEZCYTBJc1MwRkJTeXhOUVVGTUxFZEJRV01zUTBGQmFFTXNSMEZCYjBNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVRjRSQ3hGUVVGblJUdEJRVU0xUkN4eFFrRkJTeXhKUVVGTU8wRkJRMGc3UVVGRFNqczdPMmREUVVWUE96dEJRVVZLTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hKUVVGbUxFTkJRVzlDTEVWQlFYQkNMRVZCUVhWQ0xFTkJRWFpDTEVWQlFYbENMRWRCUVhwQ096dEJRVVZCTEdkQ1FVRkpMRk5CUVZNc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQllpeERRVUUwUWl4TFFVRTFRaXhEUVVGaU96dEJRVVZCTEdkQ1FVRkpMRU5CUVVNc1RVRkJUQ3hGUVVGaE8wRkJRMVFzZVVKQlFWTXNjVUpCUVZjN1FVRkRhRUlzTUVKQlFVMHNTMEZCU3l4SlFVUkxPMEZCUldoQ0xIVkNRVUZITEV0QlFVc3NRMEZHVVR0QlFVZG9RaXgxUWtGQlJ5eExRVUZMTEUxQlNGRTdRVUZKYUVJc05FSkJRVkVzUTBGS1VUdEJRVXRvUWl3eVFrRkJUeXhSUVV4VE8wRkJUV2hDTERCQ1FVRk5PMEZCVGxVc2FVSkJRVmdzUTBGQlZEdEJRVkZCTEhGQ1FVRkxMRTlCUVV3c1EwRkJZU3hIUVVGaUxFTkJRV2xDTEUxQlFXcENPMEZCUTBnc1lVRldSQ3hOUVZkTE8wRkJRMFFzZFVKQlFVOHNTMEZCVUN4RFFVRmhMRXRCUVVzc1EwRkJiRUlzUlVGQmNVSXNTMEZCU3l4TlFVRXhRaXhGUVVGclF5eERRVUZzUXp0QlFVTklPenRCUVVWRUxHMUNRVUZQTEVsQlFWQXNRMEZCV1N4UlFVRmFMRU5CUVhGQ0xFTkJRWEpDTEVkQlFYbENMRXRCUVVzc1YwRkJPVUk3UVVGRFNEczdPeXRDUVVWTkxFMHNSVUZCVVR0QlFVTllMR2xJUVVGaExFMUJRV0k3UVVGRFNEczdPM0ZEUVVVeVF6dEJRVUZCTEdkQ1FVRndReXhEUVVGdlF5eFRRVUZ3UXl4RFFVRnZRenRCUVVGQkxHZENRVUZxUXl4RFFVRnBReXhUUVVGcVF5eERRVUZwUXp0QlFVRkJMR2RDUVVFNVFpeE5RVUU0UWl4VFFVRTVRaXhOUVVFNFFqdEJRVUZCTEdkQ1FVRjBRaXhYUVVGelFpeFRRVUYwUWl4WFFVRnpRanRCUVVGQkxHZENRVUZVTEV0QlFWTXNVMEZCVkN4TFFVRlRPenRCUVVONFF5eG5TRUZCV1N4RFFVRmFMRVZCUVdVc1EwRkJaaXhGUVVGclFpeE5RVUZzUWp0QlFVTkJMR2xDUVVGTExGZEJRVXdzUjBGQmJVSXNWMEZCYmtJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNVVUZCVml4RFFVRnRRaXhEUVVGdVFpeEhRVUYxUWl4TlFVRk5MRU5CUVRkQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRkZCUVZZc1EwRkJiVUlzUTBGQmJrSXNSMEZCZFVJc1RVRkJUU3hEUVVFM1FqdEJRVU5JT3pzN08wVkJla1U0UWl4UFFVRlBMRTA3TzJ0Q1FVRnlRaXhMT3pzN096czdPenM3T3pzN08wRkRSbkpDT3pzN096czdPenM3T3pzN1NVRkZjVUlzVFRzN08wRkJSV3BDTERCQ1FVRnJSRHRCUVVGQkxGbEJRWEJETEVsQlFXOURMRkZCUVhCRExFbEJRVzlETzBGQlFVRXNXVUZCT1VJc1EwRkJPRUlzVVVGQk9VSXNRMEZCT0VJN1FVRkJRU3haUVVFelFpeERRVUV5UWl4UlFVRXpRaXhEUVVFeVFqdEJRVUZCTEZsQlFYaENMRXRCUVhkQ0xGRkJRWGhDTEV0QlFYZENPMEZCUVVFc1dVRkJha0lzUzBGQmFVSXNVVUZCYWtJc1MwRkJhVUk3UVVGQlFTeFpRVUZXTEUxQlFWVXNVVUZCVml4TlFVRlZPenRCUVVGQk96dEJRVUZCTEc5SVFVTjRReXhKUVVSM1F5eEZRVU5zUXl4RFFVUnJReXhGUVVNdlFpeERRVVFyUWl4RlFVTTFRaXhMUVVRMFFpeEZRVU55UWl4TFFVUnhRanM3UVVGSE9VTXNZMEZCU3l4SlFVRk1MRWRCUVZrc1NVRkJXanM3UVVGRlFTeGpRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRmFMRU5CUVd0Q0xFZEJRV3hDTzBGQlEwRXNZMEZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeEhRVUZxUWpzN1FVRkZRU3hqUVVGTExFMUJRVXdzUjBGQll5eE5RVUZrTzBGQlEwRXNZMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRV3BDT3p0QlFVbEJMR05CUVVzc1NVRkJUQ3hEUVVGVkxFOUJRVllzUTBGQmEwSXNUVUZCYkVJc1EwRkJlVUlzVFVGQmVrSTdRVUZEUVR0QlFVTkJMR05CUVVzc1NVRkJUQ3hEUVVGVkxFOUJRVllzUTBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUjBGQmRFSTdRVUZEUVN4alFVRkxMRWxCUVV3c1EwRkJWU3hyUWtGQlZpeEhRVUVyUWl4SlFVRXZRanRCUVVOQk96dEJRVVZCTEdOQlFVc3NUMEZCVEN4SFFVRmxMRTFCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eExRVUZrTEVWQlFXWTdRVUZEUVN4alFVRkxMRTlCUVV3c1EwRkJZU3hWUVVGaUxFZEJRVEJDTEVsQlFURkNPMEZCUTBFc1kwRkJTeXhYUVVGTUxFZEJRVzFDTEVOQlFVTXNSMEZCY0VJN08wRkJSVUVzWTBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eExRVUZrTEVOQlFXOUNMRmxCUVhCQ0xFTkJRV3BDTzBGQmRrSTRRenRCUVhkQ2FrUTdPenM3YVVOQlJWRTdPMEZCUlV3N096dEJRVWxCT3p0QlFVVkpMR2RDUVVGSkxGVkJRVlVzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhSUVVGb1FpeERRVUY1UWl4TlFVRjZRaXhEUVVGblF5eFBRVUZQTEZGQlFWQXNRMEZCWjBJc1NVRkJhRVFzUTBGQlpEdEJRVU5CTEdkQ1FVRkpMRmRCUVZjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UlFVRm9RaXhEUVVGNVFpeE5RVUY2UWl4RFFVRm5ReXhQUVVGUExGRkJRVkFzUTBGQlowSXNTMEZCYUVRc1EwRkJaanRCUVVOQkxHZENRVUZITEU5QlFVZ3NSVUZCVnp0QlFVTlFMSEZDUVVGTExFTkJRVXdzU1VGQlZTeERRVUZXTzBGQlJVZ3NZVUZJUkN4TlFVbExMRWxCUVVjc1VVRkJTQ3hGUVVGWk8wRkJRMklzY1VKQlFVc3NRMEZCVEN4SlFVRlZMRU5CUVZZN1FVRkZTRHRCUVVWU096czdaME5CUlU4N08wRkJSVW9zWjBKQlFVa3NVMEZCVXl4TFFVRkxMRTlCUVV3c1EwRkJZU3hqUVVGaUxFTkJRVFJDTEV0QlFUVkNMRU5CUVdJN08wRkJSVUVzWjBKQlFVa3NRMEZCUXl4TlFVRk1MRVZCUVdFN1FVRkRWQ3g1UWtGQlV5eHhRa0ZCVnp0QlFVTm9RaXd3UWtGQlRTeExRVUZMTEVsQlJFczdRVUZGYUVJc2RVSkJRVWNzUzBGQlN5eERRVVpSTzBGQlIyaENMSFZDUVVGSExFdEJRVXNzUjBGSVVUdEJRVWxvUWp0QlFVTkJMRFJDUVVGUkxFTkJURkU3UVVGTmFFSXNNa0pCUVU4c1VVRk9VenRCUVU5b1Fpd3dRa0ZCVFR0QlFWQlZMR2xDUVVGWUxFTkJRVlE3UVVGVFFUdEJRVU5CTEc5Q1FVRkhMRXRCUVVzc1QwRkJUQ3hEUVVGaExGRkJRV0lzUTBGQmMwSXNUVUZCZEVJc1NVRkJaME1zUTBGQmJrTXNSVUZCY1VNN1FVRkRha01zZVVKQlFVc3NVMEZCVEN4RFFVRmxMRWxCUVdZc1EwRkJiMElzUlVGQmNFSXNSVUZCZFVJc1EwRkJka0lzUlVGQmVVSXNSMEZCZWtJN1FVRkRRU3g1UWtGQlN5eFBRVUZNTEVOQlFXRXNSMEZCWWl4RFFVRnBRaXhOUVVGcVFqczdRVUZGUVN3eVFrRkJUeXhKUVVGUUxFTkJRVmtzVVVGQldpeERRVUZ4UWl4RFFVRnlRaXhIUVVGNVFpeExRVUZMTEZkQlFUbENPMEZCUTBnN1FVRkRTaXhoUVdwQ1JDeE5RV3RDU3p0QlFVTkVMSEZDUVVGTExGTkJRVXdzUTBGQlpTeEpRVUZtTEVOQlFXOUNMRVZCUVhCQ0xFVkJRWFZDTEVOQlFYWkNMRVZCUVhsQ0xFZEJRWHBDTzBGQlEwRXNkVUpCUVU4c1MwRkJVQ3hEUVVGaExFdEJRVXNzUTBGQmJFSXNSVUZCY1VJc1MwRkJTeXhIUVVFeFFpeEZRVUVyUWl4RFFVRXZRanRCUVVOQkxIVkNRVUZQTEVsQlFWQXNRMEZCV1N4UlFVRmFMRU5CUVhGQ0xFTkJRWEpDTEVkQlFYbENMRXRCUVVzc1YwRkJPVUk3UVVGRFNEdEJRVWRLT3pzN0swSkJSVTBzVFN4RlFVRlJPMEZCUTFnc2JVaEJRV0VzVFVGQllqdEJRVU5JT3pzN08wVkJiRVlyUWl4UFFVRlBMRTA3TzJ0Q1FVRjBRaXhOT3pzN096czdPenM3T3pzN096czdPenRKUTBaQkxFazdPenM3T3pzN096czdPMnREUVVWUU8wRkJRMDRzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzWlVGQmFFSXNSMEZCYTBNc1RVRkJiRU03UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RlFVRTBRaXh0UWtGQk5VSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4WFFVRm9RaXhGUVVFMlFpeHZRa0ZCTjBJN1FVRkRTRHM3TzJsRFFVVlJPMEZCUTB3c2FVSkJRVXNzUzBGQlRDeERRVUZYTEZOQlFWZ3NSMEZCZFVJc1QwRkJUeXhaUVVGUUxFTkJRVzlDTEZGQlFUTkRPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4eFFrRkJXQ3hIUVVGdFF5eEpRVUZ1UXp0QlFVTkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eHRRa0ZCV0N4SFFVRnBReXhKUVVGcVF6dEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hQUVVGV0xFTkJRV3RDTEZkQlFXeENMRU5CUVRoQ0xFOUJRVThzVDBGQlVDeERRVUZsTEUxQlFUZERPMEZCUTBFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCYVVJc1UwRkJha0k3UVVGRFNEczdPenRGUVdZMlFpeFBRVUZQTEVzN08ydENRVUZ3UWl4Sk96czdPenM3T3pzN096czdPenQ1UTBOQllpeFBPenM3T3pzN096czdORU5CUTBFc1R6czdPenM3T3pzN08zbERRVU5CTEU4N096czdPenM3T3p0NVEwRkZRU3hQT3pzN096czdPenM3ZVVOQlEwRXNUenM3T3pzN096czdPelpEUVVkQkxFODdPenM3T3pzN096czJRMEZEUVN4UE96czdPenM3T3pzN09FTkJSMEVzVHpzN096czdPenM3T3poRFFVTkJMRTg3T3pzN096czdPenM3T3pzN096dEJRMkpTT3pzN096czdPenM3T3pzN1NVRkZjVUlzU1RzN096czdPenM3T3pzN2FVTkJSVkk3UVVGQlFUczdRVUZEVEN4cFFrRkJTeXhMUVVGTUxFZEJRV0VzU1VGQlNTeFBRVUZQTEVsQlFWZ3NRMEZCWjBJc1MwRkJTeXhKUVVGeVFpeEZRVUV5UWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFUTkRMRVZCUVc5RUxFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQmQwSXNSMEZCTlVVc1JVRkJhVVlzWjBKQlFXcEdMRVZCUVcxSE8wRkJRelZITEhOQ1FVRk5MR0ZCUkhOSE8wRkJSVFZITEhOQ1FVRk5MRTlCUm5OSE8wRkJSelZITEhWQ1FVRlBPMEZCU0hGSExHRkJRVzVITEVOQlFXSTdRVUZMUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzVFVGQldDeERRVUZyUWl4TFFVRnNRaXhEUVVGM1FpeEhRVUY0UWp0QlFVTkJPenM3UVVGSFFTeHBRa0ZCU3l4UFFVRk1MRWRCUVdVc2VVSkJRV1U3UVVGRE1VSXNjMEpCUVUwc1MwRkJTeXhKUVVSbE8wRkJSVEZDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCYUVJc1IwRkJNRUlzUjBGR1NEdEJRVWN4UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCU0U4N1FVRkpNVUlzZFVKQlFVOHNVVUZLYlVJN1FVRkxNVUlzTWtKQlFWY3NRMEZNWlR0QlFVMHhRaXd3UWtGQlZTeERRVTVuUWp0QlFVOHhRaXd5UWtGQlZ5eERRVkJsTzBGQlVURkNMSGxDUVVGVExFTkJVbWxDTzBGQlV6RkNMSFZDUVVGUExGTkJWRzFDTzBGQlZURkNMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNZMEZFU0R0QlFVVklMREJDUVVGTkxFOUJSa2c3UVVGSFNDd3lRa0ZCVHp0QlFVaEtPMEZCVm0xQ0xHRkJRV1lzUTBGQlpqczdRVUZwUWtFc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeERRVUZ3UWp0QlFVTkJMR2xDUVVGTExGZEJRVXdzUjBGQmJVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGTkJRV1lzUTBGQmJrSTdRVUZEUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDT3p0QlFVVkJMR2xDUVVGTExFOUJRVXdzUTBGQllTeFpRVUZpTEVOQlFUQkNMRXRCUVVzc1dVRkJMMEk3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1YwRkJZaXhEUVVGNVFpeExRVUZMTEZkQlFUbENPMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEZsQlFXSXNRMEZCTUVJc1MwRkJTeXhaUVVFdlFqczdRVUZGUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzVTBGQllpeERRVUYxUWl4SFFVRjJRaXhEUVVFeVFpeFpRVUZKTzBGQlF6TkNPMEZCUTBFc2RVSkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCYVVJc1YwRkJha0k3UVVGRlNDeGhRVXBFT3p0QlFWRkJPMEZCUTBFc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEhsQ1FVRmxPMEZCUTNoQ0xITkNRVUZOTEV0QlFVc3NTVUZFWVR0QlFVVjRRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJSa3M3UVVGSGVFSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVaExPMEZCU1hoQ0xIVkNRVUZQTEZGQlNtbENPMEZCUzNoQ0xESkNRVUZYTEVOQlRHRTdRVUZOZUVJc01FSkJRVlVzUTBGT1l6dEJRVTk0UWl3eVFrRkJWeXhEUVZCaE8wRkJVWGhDTEhsQ1FVRlRMRU5CVW1VN1FVRlRlRUlzZFVKQlFVOHNUMEZVYVVJN1FVRlZlRUlzZFVKQlFVODdRVUZEU0N3d1FrRkJUU3hqUVVSSU8wRkJSVWdzTUVKQlFVMHNUMEZHU0R0QlFVZElMREpDUVVGUE8wRkJTRW83UVVGV2FVSXNZVUZCWml4RFFVRmlPenRCUVdsQ1FTeHBRa0ZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4VlFVRm1MRU5CUVhCQ08wRkJRMEVzYVVKQlFVc3NWMEZCVEN4SFFVRnRRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNVMEZCWml4RFFVRnVRanRCUVVOQkxHbENRVUZMTEZsQlFVd3NSMEZCYjBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZWQlFXWXNRMEZCY0VJN08wRkJSVUVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmxCUVZnc1EwRkJkMElzUzBGQlN5eFpRVUUzUWp0QlFVTkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFhRVUZZTEVOQlFYVkNMRXRCUVVzc1YwRkJOVUk3UVVGRFFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1dVRkJXQ3hEUVVGM1FpeExRVUZMTEZsQlFUZENPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4VFFVRllMRU5CUVhGQ0xFZEJRWEpDTEVOQlFYbENMRmxCUVVrN1FVRkRla0k3UVVGRFFTeDFRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeE5RVUZxUWp0QlFVVklMR0ZCU2tRN1FVRkxRVHRCUVVOQkxHbENRVUZMTEU5QlFVd3NSMEZCWlN4NVFrRkJaVHRCUVVNeFFpeHpRa0ZCVFN4TFFVRkxMRWxCUkdVN1FVRkZNVUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4SFFVRXdRaXhIUVVaSU8wRkJSekZDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZJVHp0QlFVa3hRaXgxUWtGQlR5eFJRVXB0UWp0QlFVc3hRaXd5UWtGQlZ5eERRVXhsTzBGQlRURkNMREJDUVVGVkxFTkJUbWRDTzBGQlR6RkNMREpDUVVGWExFTkJVR1U3UVVGUk1VSXNlVUpCUVZNc1EwRlNhVUk3UVVGVE1VSXNkVUpCUVU4c1dVRlViVUk3UVVGVk1VSXNkVUpCUVU4N1FVRkRTQ3d3UWtGQlRTeGpRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXYlVJc1lVRkJaaXhEUVVGbU96dEJRV2xDUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDTzBGQlEwRXNhVUpCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1UwRkJaaXhEUVVGdVFqdEJRVU5CTEdsQ1FVRkxMRmxCUVV3c1IwRkJiMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRlZCUVdZc1EwRkJjRUk3TzBGQlJVRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGbEJRV0lzUTBGQk1FSXNTMEZCU3l4WlFVRXZRanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4WFFVRmlMRU5CUVhsQ0xFdEJRVXNzVjBGQk9VSTdRVUZEUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWl4TFFVRkxMRmxCUVM5Q096dEJRVVZCTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3hUUVVGaUxFTkJRWFZDTEVkQlFYWkNMRU5CUVRKQ0xGbEJRVWs3UVVGRE0wSTdRVUZEUVN4MVFrRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4VlFVRnFRanRCUVVkSUxHRkJURVE3TzBGQlUwRXNhVUpCUVVzc1UwRkJUQ3hIUVVGcFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRVZCUVdwQ08wRkJRMEVzYVVKQlFVc3NVMEZCVEN4RFFVRmxMRWRCUVdZc1EwRkJiVUlzUzBGQlN5eExRVUY0UWp0QlFVTkJMR2xDUVVGTExGTkJRVXdzUTBGQlpTeEhRVUZtTEVOQlFXMUNMRXRCUVVzc1QwRkJlRUk3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1IwRkJaaXhEUVVGdFFpeExRVUZMTEV0QlFYaENPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEVkQlFXWXNRMEZCYlVJc1MwRkJTeXhQUVVGNFFqczdRVUZGUVR0QlFVTklPenM3TzBWQmRFZzJRaXhQUVVGUExFczdPMnRDUVVGd1FpeEpPenM3T3pzN096czdPenRCUTBaeVFqczdPenM3T3pzN096czdPMGxCUlhGQ0xGRTdPenM3T3pzN096czdPMmxEUVVWU08wRkJRVUU3TzBGQlJVd3NhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZKTEU5QlFVOHNTVUZCV0N4RFFVRm5RaXhMUVVGTExFbEJRWEpDTEVWQlFUSkNMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCTTBNc1JVRkJiMFFzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGb1FpeEhRVUYzUWl4SFFVRTFSU3hGUVVGcFJpeG5Ra0ZCYWtZc1JVRkJiVWM3UVVGRGNFZ3NjMEpCUVUwc1lVRkVPRWM3UVVGRmNFZ3NjMEpCUVUwc1QwRkdPRWM3UVVGSGNFZ3NkVUpCUVU4N1FVRklOa2NzWVVGQmJrY3NRMEZCY2tJN1FVRkxRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRTFCUVc1Q0xFTkJRVEJDTEV0QlFURkNMRU5CUVdkRExFZEJRV2hET3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUjBGQllTeDVRa0ZCWlR0QlFVTjRRaXh6UWtGQlRTeExRVUZMTEVsQlJHRTdRVUZGZUVJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaTE8wRkJSM2hDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCYUVJc1IwRkJkMElzUlVGSVNEdEJRVWw0UWl4MVFrRkJUeXhSUVVwcFFqdEJRVXQ0UWl3eVFrRkJWeXhEUVV4aE8wRkJUWGhDTERCQ1FVRlZMRU5CVG1NN1FVRlBlRUlzTWtKQlFWY3NRMEZRWVR0QlFWRjRRaXg1UWtGQlV5eERRVkpsTzBGQlUzaENMSFZDUVVGUExGZEJWR2xDTzBGQlZYaENMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNZMEZFU0R0QlFVVklMREJDUVVGTkxFOUJSa2c3UVVGSFNDd3lRa0ZCVHp0QlFVaEtPMEZCVm1sQ0xHRkJRV1lzUTBGQllqczdRVUZwUWtFc2FVSkJRVXNzU1VGQlRDeEhRVUZaTEhsQ1FVRmxPMEZCUTNaQ0xITkNRVUZOTEV0QlFVc3NTVUZFV1R0QlFVVjJRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJSa2s3UVVGSGRrSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhIUVVGM1FpeEZRVWhLTzBGQlNYWkNMSFZDUVVGUExGRkJTbWRDTzBGQlMzWkNMREpDUVVGWExFTkJURms3UVVGTmRrSXNNRUpCUVZVc1EwRk9ZVHRCUVU5MlFpd3lRa0ZCVnl4RFFWQlpPMEZCVVhaQ0xIbENRVUZUTEVOQlVtTTdRVUZUZGtJc2RVSkJRVThzVFVGVVowSTdRVUZWZGtJc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4alFVUklPMEZCUlVnc01FSkJRVTBzVDBGR1NEdEJRVWRJTERKQ1FVRlBPMEZCU0VvN1FVRldaMElzWVVGQlppeERRVUZhT3p0QlFXbENRU3hwUWtGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYQkNPMEZCUTBFc2FVSkJRVXNzVjBGQlRDeEhRVUZ0UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVTBGQlppeERRVUZ1UWp0QlFVTkJMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNFSTdPMEZCUlVFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZsQlFWZ3NRMEZCZDBJc1MwRkJTeXhaUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhYUVVGWUxFTkJRWFZDTEV0QlFVc3NWMEZCTlVJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NXVUZCV0N4RFFVRjNRaXhMUVVGTExGbEJRVGRDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxGbEJRVllzUTBGQmRVSXNTMEZCU3l4WlFVRTFRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4WFFVRldMRU5CUVhOQ0xFdEJRVXNzVjBGQk0wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzV1VGQlZpeERRVUYxUWl4TFFVRkxMRmxCUVRWQ096dEJRVVZCTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhYUVVGWUxFTkJRWFZDTEVkQlFYWkNMRU5CUVRKQ0xGbEJRVWs3UVVGRE0wSXNkVUpCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNWVUZCYWtJN1FVRkRTQ3hoUVVaRU96dEJRVWxCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hYUVVGV0xFTkJRWE5DTEVkQlFYUkNMRU5CUVRCQ0xGbEJRVWs3UVVGRE1VSXNkVUpCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNUVUZCYWtJN1FVRkRTQ3hoUVVaRU96dEJRVWxCTEdsQ1FVRkxMR0ZCUVV3c1IwRkJjVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRnlRanRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNTMEZCU3l4aFFVRTFRanRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNTMEZCU3l4TFFVRTFRanRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNTMEZCU3l4SlFVRTFRanRCUVVOSU96czdPMFZCY0VWcFF5eFBRVUZQTEVzN08ydENRVUY0UWl4Uk96czdPenM3T3pzN096dEJRMFp5UWpzN096czdPenM3T3pzN08wbEJSWEZDTEZNN096czdPenM3T3pzN08ybERRVVZTT3p0QlFVVk1PMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1pVRkJhRUlzUjBGQmEwTXNVMEZCYkVNN1FVRkRRU3hwUWtGQlN5eEZRVUZNTEVkQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFdEJRV1FzUTBGQmIwSXNRMEZCY0VJc1JVRkJkVUlzUTBGQmRrSXNSVUZCTUVJc1NVRkJNVUlzUTBGQlZqdEJRVU5CTEdsQ1FVRkxMRTlCUVV3c1IwRkJaU3hEUVVGbU8wRkJRMEVzYVVKQlFVc3NUMEZCVEN4SFFVRmxMRU5CUVdZN1FVRkRRU3hwUWtGQlN5eFJRVUZNTEVkQlFXZENMRWRCUVdoQ08wRkJRMEVzYVVKQlFVc3NWMEZCVEN4SFFVRnRRaXhEUVVGdVFqdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1IwRkJhMElzUzBGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4UFFVRjBRenM3UVVGRlFTeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFVkJRWEpDT3p0QlFVVkpPenM3T3pzN096czdPenM3T3p0QlFXTktMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNSVUZCY0VJN08wRkJSMEVzYVVKQlFVc3NVMEZCVEN4SFFVRnBRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFXcENPMEZCUTBFN1FVRkRRU3hwUWtGQlN5eFJRVUZNTEVkQlFXZENMRVZCUVdoQ08wRkJRMEVzYVVKQlFVc3NTMEZCVEN4SFFVRmhMRU5CUVdJN1FVRkRRU3hwUWtGQlN5eFRRVUZNTEVkQlFXbENMRU5CUVdwQ096dEJRVVZCTEdsQ1FVRkxMRlZCUVV3c1IwRkJhMElzUlVGQmJFSTdRVUZEUVN4cFFrRkJTeXhyUWtGQlRDeEhRVUV3UWl4RlFVRXhRanM3UVVGSFFUczdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFZEJRV0U3UVVGRFZDeHpRa0ZCVFN4blFrRkVSenRCUVVWVUxITkNRVUZOTEZOQlJrYzdRVUZIVkN4MVFrRkJUenRCUVVoRkxHRkJRV0k3UVVGTFFTeHBRa0ZCU3l4VFFVRk1MRWRCUVdsQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEVsQlFWUXNRMEZCWXl4RFFVRmtMRVZCUVdsQ0xFTkJRV3BDTEVWQlFXOUNMRmxCUVZrc1MwRkJTeXhMUVVGeVF5eEZRVUUwUXl4TFFVRkxMRXRCUVdwRUxFTkJRV3BDTzBGQlEwRXNhVUpCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZMTEVkQlFVd3NRMEZCVXl4SlFVRlVMRU5CUVdNc1EwRkJaQ3hGUVVGcFFpeExRVUZMTEVsQlFVd3NRMEZCVlN4TlFVRldMRWRCUVcxQ0xFTkJRWEJETEVWQlFYVkRMR2RDUVVGblFpeExRVUZMTEZGQlFUVkVMRVZCUVhORkxFdEJRVXNzUzBGQk0wVXNRMEZCYUVJN1FVRkRRU3hwUWtGQlN5eFJRVUZNTEVOQlFXTXNUVUZCWkN4RFFVRnhRaXhIUVVGeVFpeERRVUY1UWl4RFFVRjZRaXhGUVVFeVFpeERRVUV6UWpzN1FVRkZRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMRTFCUVdZc1EwRkJjMElzU1VGQmRFSXNRMEZCTWtJc1QwRkJUeXhMUVVGUUxFTkJRV0VzVFVGQmVFTXNSVUZCWjBRc1MwRkJTeXhaUVVGeVJDeEZRVUZyUlN4SlFVRnNSVHM3UVVGRlFTeHBRa0ZCU3l4VlFVRk1PMEZCUTBnN096dHBRMEZGVVR0QlFVTk1MR2xDUVVGTExGRkJRVXc3UVVGRlNEczdRVUZGUkRzN096dHRRMEZEVlR0QlFVTk9MR2RDUVVGSkxGTkJRVk1zUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhSUVVGb1FpeERRVUY1UWl4TlFVRjZRaXhEUVVGblF5eFBRVUZQTEZGQlFWQXNRMEZCWjBJc1IwRkJhRVFzUTBGQllqdEJRVU5CTEdkQ1FVRkhMRTFCUVVnc1JVRkJWVHRCUVVOT0xIRkNRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRTFCUVhSQ08wRkJRMGc3UVVGRFNqczdPM1ZEUVVWak8wRkJRMWdzYVVKQlFVc3NVVUZCVER0QlFVTkJMR2xDUVVGTExGRkJRVXdzUTBGQll5eEpRVUZrTEVkQlFYRkNMR2RDUVVGblFpeExRVUZMTEZGQlFURkRPMEZCUTBFc1owSkJRVWNzUzBGQlN5eFJRVUZNTEVsQlFXbENMRU5CUVhCQ0xFVkJRWFZDTzBGQlEyNUNPMEZCUTBFc2NVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1MwRkJhRUlzUTBGQmMwSXNWVUZCZEVJN1FVRkRTRHRCUVVOS096czdjVU5CUTFrN08wRkJSVlFzWjBKQlFVa3NXVUZCV1N4RFFVRkRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUjBGQmJVSXNTMEZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhSUVVGMlF5eEhRVUZ2UkN4RFFVRkRMRXRCUVVzc1QwRkJUQ3hIUVVGbExFTkJRV2hDTEVsQlFYTkNMRXRCUVVzc1YwRkJhRVlzU1VGQk9FWXNRMEZCT1VjN1FVRkRRU3huUWtGQlNTeFhRVUZaTEVOQlFVTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1RVRkJWaXhIUVVGdlFpeExRVUZMTEU5QlFVd3NSMEZCWlN4TFFVRkxMRkZCUVhoRExFZEJRWEZFTEVOQlFVTXNTMEZCU3l4UFFVRk1MRWRCUVdVc1EwRkJhRUlzU1VGQmMwSXNTMEZCU3l4WFFVRnFSaXhKUVVFclJpeERRVUV2UnpzN1FVRkZRVHRCUVVOQkxHbENRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRmFMRVZCUVdVc1NVRkJTU3hMUVVGTExGTkJRWGhDTEVWQlFXMURMRWRCUVc1RExFVkJRWGRETzBGQlEzQkRMSEZDUVVGTExGVkJRVXdzUTBGQlowSXNTVUZCYUVJc1EwRkJjVUlzUzBGQlN5eExRVUZNTEVOQlFWY3NTVUZCU1N4RFFVRm1MRU5CUVhKQ08wRkJRMGc3TzBGQlJVUTdRVUZEUVN4cFFrRkJTU3hKUVVGSkxFdEJRVWtzUTBGQldpeEZRVUZsTEV0QlFVa3NTMEZCU3l4VFFVRjRRaXhGUVVGdFF5eEpRVUZ1UXl4RlFVRjNRenRCUVVOd1F5eHZRa0ZCU1N4UFFVRlJMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eFBRVUZrTEVOQlFYTkNMRU5CUVhSQ0xFVkJRWGxDTEV0QlFVc3NWVUZCVEN4RFFVRm5RaXhOUVVGb1FpeEhRVUYxUWl4RFFVRm9SQ3hEUVVGYU8wRkJRMEVzYjBKQlFVa3NTMEZCVVN4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zVDBGQlpDeERRVUZ6UWl4RFFVRjBRaXhGUVVGNVFpeExRVUZMTEZWQlFVd3NRMEZCWjBJc1RVRkJhRUlzUjBGQmRVSXNRMEZCYUVRc1EwRkJXanRCUVVOQkxHOUNRVUZKTEU5QlFWRXNTMEZCU3l4VlFVRk1MRU5CUVdkQ0xFbEJRV2hDTEVOQlFWbzdPMEZCUlVFc2NVSkJRVXNzVlVGQlRDeERRVUZuUWl4SlFVRm9RaXhKUVVGM1FpeExRVUZMTEZWQlFVd3NRMEZCWjBJc1JVRkJhRUlzUTBGQmVFSTdRVUZEUVN4eFFrRkJTeXhWUVVGTUxFTkJRV2RDTEVWQlFXaENMRWxCUVhOQ0xFbEJRWFJDTzBGQlEwZzdPMEZCUlVRN1FVRkRRU3hwUWtGQlNTeEpRVUZKTEUxQlFVa3NRMEZCV2l4RlFVRmxMRTFCUVVrc1MwRkJTeXhQUVVGNFFpeEZRVUZwUXl4TFFVRnFReXhGUVVGelF6czdRVUZGYkVNc2NVSkJRVWtzU1VGQlNTeEpRVUZKTEVOQlFWb3NSVUZCWlN4SlFVRkpMRXRCUVVzc1QwRkJlRUlzUlVGQmFVTXNSMEZCYWtNc1JVRkJjME03TzBGQlIyeERMSGRDUVVGSkxFOUJRVThzZVVKQlFXVTdRVUZEZEVJc09FSkJRVTBzUzBGQlN5eEpRVVJYTzBGQlJYUkNMREpDUVVGSExGbEJRVmtzVDBGQlN5eExRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJTeXhYUVVFeFFpeERRVUZhTEVkQlFYRkVMRVZCUm14RE8wRkJSM1JDTERKQ1FVRkhMRmRCUVZjc1MwRkJTeXhMUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCU3l4WFFVRXhRaXhEUVVGWUxFZEJRVzlFTEVkQlNHcERPMEZCU1hSQ0xDdENRVUZQTEU5QlNtVTdRVUZMZEVJc2EwTkJRVlVzUzBGQlN5eFJRVXhQTzBGQlRYUkNMSGxEUVVGcFFpeEpRVTVMTzBGQlQzUkNMRzFEUVVGWExFVkJVRmM3UVVGUmRFSXNLMEpCUVU4c1MwRkJTeXhWUVVGTUxFTkJRV2RDTEVsQlFVa3NTMEZCU3l4UFFVRlVMRWRCUVcxQ0xFZEJRVzVETEVOQlVtVTdRVUZUZEVJc2EwTkJRVlU3UVVGVVdTeHhRa0ZCWml4RFFVRllPMEZCVjBFN1FVRkRRVHRCUVVOQkxIZENRVUZITEV0QlFVc3NTMEZCVEN4SlFVRmpMRU5CUVdwQ0xFVkJRVzFDTzBGQlEyWXNOa0pCUVVzc1MwRkJUQ3hIUVVGaExFdEJRVXNzV1VGQmJFSTdRVUZEUVN3MlFrRkJTeXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBnN08wRkJSVVFzZVVKQlFVc3NTMEZCVEN4SFFVRmhMRXRCUVVzc1lVRkJiRUk3UVVGRFFTeDVRa0ZCU3l4VFFVRk1MRU5CUVdVc1IwRkJaaXhEUVVGdFFpeEpRVUZ1UWp0QlFVVklPMEZCUTBvN1FVRkRTanM3TzJsRFFVTlJMRlVzUlVGQldUdEJRVU5xUWpzN096dEJRVWxCTEdkQ1FVRkhMRXRCUVVzc2EwSkJRVXdzUTBGQmQwSXNUVUZCZUVJc1IwRkJhVU1zUTBGQmFrTXNTVUZCYzBNc1MwRkJTeXhyUWtGQlRDeERRVUYzUWl4UFFVRjRRaXhEUVVGblF5eFZRVUZvUXl4TlFVRm5SQ3hEUVVGRExFTkJRVEZHTEVWQlFUWkdPMEZCUTNwR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNNa0pCUVZjc1MwRkJXQ3hIUVVGdFFpeFhRVUZYTEV0QlFUbENPMEZCUTBFc2NVSkJRVXNzYTBKQlFVd3NRMEZCZDBJc1NVRkJlRUlzUTBGQk5rSXNWVUZCTjBJN08wRkJSVUVzYjBKQlFVY3NTMEZCU3l4clFrRkJUQ3hEUVVGM1FpeE5RVUY0UWl4TFFVRnRReXhEUVVGMFF5eEZRVUY1UXp0QlFVTnlReXg1UWtGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMRTFCUVdZc1EwRkJjMElzUjBGQmRFSXNRMEZCTUVJc1QwRkJUeXhMUVVGUUxFTkJRV0VzVFVGQmRrTXNSVUZCSzBNc1MwRkJTeXhWUVVGd1JDeEZRVUZuUlN4SlFVRm9SVHRCUVVOSU8wRkJRMG83UVVGRlNqczdPM0ZEUVVWWk8wRkJRMVE3T3pzN1FVRkpRU3huUWtGQlJ5eExRVUZMTEd0Q1FVRk1MRU5CUVhkQ0xFTkJRWGhDTEVWQlFUSkNMRXRCUVROQ0xFdEJRWEZETEV0QlFVc3NhMEpCUVV3c1EwRkJkMElzUTBGQmVFSXNSVUZCTWtJc1MwRkJia1VzUlVGQk1FVTdRVUZEZEVVN096czdPenM3UVVGUFFTeHhRa0ZCU3l4TFFVRk1PMEZCUTBFc2NVSkJRVXNzVVVGQlRDeEpRVUZwUWl4RFFVRnFRanRCUVVOQkxIRkNRVUZMTEZGQlFVd3NRMEZCWXl4SlFVRmtMRWRCUVhGQ0xHZENRVUZuUWl4TFFVRkxMRkZCUVRGRE8wRkJRMEVzY1VKQlFVc3NVMEZCVEN4RFFVRmxMRWxCUVdZc1IwRkJjMElzV1VGQldTeExRVUZMTEV0QlFYWkRPenRCUVVWQk8wRkJRMEVzYjBKQlFVY3NTMEZCU3l4clFrRkJUQ3hEUVVGM1FpeERRVUY0UWl4RlFVRXlRaXhSUVVFNVFpeEZRVUYzUXp0QlFVTndReXg1UWtGQlN5eHBRa0ZCVEN4RFFVRjFRaXhSUVVGMlFqdEJRVU5JT3p0QlFVVkVMSEZDUVVGTExHdENRVUZNTEVOQlFYZENMRU5CUVhoQ0xFVkJRVEpDTEU5QlFUTkNPMEZCUTBFc2NVSkJRVXNzYTBKQlFVd3NRMEZCZDBJc1EwRkJlRUlzUlVGQk1rSXNUMEZCTTBJN1FVRkRRU3h4UWtGQlN5eFRRVUZNTEVsQlFXdENMRU5CUVd4Q096dEJRVVZCTzBGQlEwRXNiMEpCUVVjc1MwRkJTeXhUUVVGTUxFdEJRVzFDTEVOQlFYUkNMRVZCUVRCQ08wRkJRM1JDTEhsQ1FVRkxMRlZCUVV3c1EwRkJaMElzVFVGQmFFSXNSMEZCZVVJc1EwRkJla0k3UVVGRFFTeDVRa0ZCU3l4clFrRkJUQ3hEUVVGM1FpeE5RVUY0UWl4SFFVRnBReXhEUVVGcVF6dEJRVU5CTzBGQlEwRXNlVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCYUVJc1EwRkJjMElzVjBGQmRFSTdRVUZEU0R0QlFVTktMR0ZCTjBKRUxFMUJPRUpKTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h4UWtGQlN5eEpRVUZNTEVOQlFWVXNUVUZCVml4RFFVRnBRaXhMUVVGcVFpeERRVUYxUWl4SlFVRjJRaXhGUVVFMlFpeEhRVUUzUWp0QlFVTkJPMEZCUTBFc2NVSkJRVXNzYTBKQlFVd3NRMEZCZDBJc1EwRkJlRUlzUlVGQk1rSXNTMEZCTTBJc1IwRkJiVU1zUzBGQlN5eGhRVUY0UXp0QlFVTkJMSEZDUVVGTExHdENRVUZNTEVOQlFYZENMRU5CUVhoQ0xFVkJRVEpDTEV0QlFUTkNMRWRCUVcxRExFdEJRVXNzWVVGQmVFTTdRVUZEU0R0QlFVTkVMR2xDUVVGTExHdENRVUZNTEVOQlFYZENMRTFCUVhoQ0xFZEJRV2xETEVOQlFXcERPMEZCUTBnN096c3dRMEZGYVVJc1RTeEZRVUZSTzBGQlEzUkNMR3RDUVVGTkxIbERRVUZPTzBGQlEwZzdPenM3UlVGMlRXdERMRTlCUVU4c1N6czdhMEpCUVhwQ0xGTTdPenM3T3pzN096czdPMEZEUm5KQ096czdPenM3T3pzN096czdTVUZGY1VJc1VUczdPenM3T3pzN096czdhVU5CUlZJN1FVRkJRVHM3UVVGRlRDeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRXRCUVVzc1NVRkJja0lzUlVGQk1rSXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUV6UXl4RlFVRnZSQ3hMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoQ0xFZEJRWGRDTEVkQlFUVkZMRVZCUVdsR0xHZENRVUZxUml4RlFVRnRSenRCUVVOd1NDeHpRa0ZCVFN4aFFVUTRSenRCUVVWd1NDeHpRa0ZCVFN4UFFVWTRSenRCUVVkd1NDeDFRa0ZCVHp0QlFVZzJSeXhoUVVGdVJ5eERRVUZ5UWp0QlFVdEJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNUVUZCYmtJc1EwRkJNRUlzUzBGQk1VSXNRMEZCWjBNc1IwRkJhRU03TzBGQlJVRXNhVUpCUVVzc1MwRkJUQ3hIUVVGaExIbENRVUZsTzBGQlEzaENMSE5DUVVGTkxFdEJRVXNzU1VGRVlUdEJRVVY0UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUmtzN1FVRkhlRUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4SFFVRjNRaXhGUVVoSU8wRkJTWGhDTEhWQ1FVRlBMRkZCU21sQ08wRkJTM2hDTERKQ1FVRlhMRU5CVEdFN1FVRk5lRUlzTUVKQlFWVXNRMEZPWXp0QlFVOTRRaXd5UWtGQlZ5eERRVkJoTzBGQlVYaENMSGxDUVVGVExFTkJVbVU3UVVGVGVFSXNkVUpCUVU4c1YwRlVhVUk3UVVGVmVFSXNkVUpCUVU4N1FVRkRTQ3d3UWtGQlRTeGpRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXYVVJc1lVRkJaaXhEUVVGaU96dEJRV2xDUVN4cFFrRkJTeXhKUVVGTUxFZEJRVmtzZVVKQlFXVTdRVUZEZGtJc2MwSkJRVTBzUzBGQlN5eEpRVVJaTzBGQlJYWkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdTVHRCUVVkMlFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFXaENMRWRCUVhkQ0xFVkJTRW83UVVGSmRrSXNkVUpCUVU4c1VVRktaMEk3UVVGTGRrSXNNa0pCUVZjc1EwRk1XVHRCUVUxMlFpd3dRa0ZCVlN4RFFVNWhPMEZCVDNaQ0xESkNRVUZYTEVOQlVGazdRVUZSZGtJc2VVSkJRVk1zUTBGU1l6dEJRVk4yUWl4MVFrRkJUeXhOUVZSblFqdEJRVlYyUWl4MVFrRkJUenRCUVVOSUxEQkNRVUZOTEdOQlJFZzdRVUZGU0N3d1FrRkJUU3hQUVVaSU8wRkJSMGdzTWtKQlFVODdRVUZJU2p0QlFWWm5RaXhoUVVGbUxFTkJRVm83TzBGQmFVSkJMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNFSTdRVUZEUVN4cFFrRkJTeXhYUVVGTUxFZEJRVzFDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hUUVVGbUxFTkJRVzVDTzBGQlEwRXNhVUpCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGd1FqczdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzV1VGQldDeERRVUYzUWl4TFFVRkxMRmxCUVRkQ08wRkJRMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmRCUVZnc1EwRkJkVUlzUzBGQlN5eFhRVUUxUWp0QlFVTkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFpRVUZZTEVOQlFYZENMRXRCUVVzc1dVRkJOMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1dVRkJWaXhEUVVGMVFpeExRVUZMTEZsQlFUVkNPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEZkQlFWWXNRMEZCYzBJc1MwRkJTeXhYUVVFelFqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3haUVVGV0xFTkJRWFZDTEV0QlFVc3NXVUZCTlVJN08wRkJSVUVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmRCUVZnc1EwRkJkVUlzUjBGQmRrSXNRMEZCTWtJc1dVRkJTVHRCUVVNelFpeDFRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeFZRVUZxUWp0QlFVTklMR0ZCUmtRN08wRkJTVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRmRCUVZZc1EwRkJjMElzUjBGQmRFSXNRMEZCTUVJc1dVRkJTVHRCUVVNeFFpeDFRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeE5RVUZxUWp0QlFVTklMR0ZCUmtRN08wRkJTVUVzYVVKQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFYSkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUZMTEdGQlFUVkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUZMTEV0QlFUVkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUZMTEVsQlFUVkNPMEZCUTBnN096czdSVUZ3UldsRExFOUJRVThzU3pzN2EwSkJRWGhDTEZFN096czdPenM3T3pzN08wRkRSbkpDT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3TzBsQlJYRkNMRkU3T3pzN096czdPenM3TzJsRFFVVlNPMEZCUVVFN08wRkJRMHdzYVVKQlFVc3NSVUZCVEN4SFFVRlZMRXRCUVVzc1IwRkJUQ3hEUVVGVExGVkJRVlFzUTBGQmIwSXNRMEZCY0VJc1JVRkJkVUlzUTBGQmRrSXNSVUZCTUVJc1NVRkJNVUlzUlVGQlowTXNTVUZCYUVNc1JVRkJjME1zVVVGQmRFTXNRMEZCVmp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNWVUZCWml4SFFVRTBRaXhEUVVFMVFqczdRVUZIUVR0QlFVTkJMR2xDUVVGTExFMUJRVXdzUjBGQll5eHhRa0ZCVnp0QlFVTnlRaXh6UWtGQlRTeExRVUZMTEVsQlJGVTdRVUZGY2tJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaRk8wRkJSM0pDTEcxQ1FVRkhMRTlCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVaE1PMEZCU1hKQ0xIZENRVUZSTEVWQlNtRTdRVUZMY2tJc2RVSkJRVThzWTBGTVl6dEJRVTF5UWl4MVFrRkJUenRCUVU1akxHRkJRVmdzUTBGQlpEdEJRVkZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFdEJRVXNzVFVGQk9VSTdRVUZEUVN4cFFrRkJTeXhsUVVGTUxFZEJRWFZDTEVOQlFYWkNPMEZCUTBFc2FVSkJRVXNzYlVKQlFVd3NSMEZCTWtJc1NVRkJNMEk3TzBGQlJVRTdRVUZEUVN4cFFrRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRm1PMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEZWQlFXSXNSMEZCTUVJc1NVRkJNVUk3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRWRCUVdsQ0xFTkJRV3BDTzBGQlEyOUNPMEZCUTNCQ0xHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1IwRkJja0k3UVVGRFFTeHBRa0ZCU3l4alFVRk1MRWRCUVhOQ0xFTkJRWFJDTzBGQlEwRXNhVUpCUVVzc2EwSkJRVXdzUjBGQk1FSXNRMEZCTVVJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEdsQ1FVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRjBRanRCUVVOQkxHbENRVUZMTEdOQlFVd3NRMEZCYjBJc1ZVRkJjRUlzUjBGQmFVTXNTVUZCYWtNN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJja0k3UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xGVkJRVzVDTEVkQlFXZERMRWxCUVdoRE8wRkJRMEU3UVVGRFFTeHBRa0ZCU3l4dFFrRkJUQ3hIUVVFeVFpeEhRVUV6UWp0QlFVTkJMR2xDUVVGTExHOUNRVUZNTEVkQlFUUkNMRU5CUVRWQ08wRkJRMEVzYVVKQlFVc3NkMEpCUVV3c1IwRkJaME1zUTBGQmFFTTdRVUZEU1R0QlFVTktMR2xDUVVGTExHbENRVUZNTEVOQlFYVkNPMEZCUTI1Q0xITkNRVUZOTEV0QlFVc3NTVUZFVVR0QlFVVnVRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXl4RlFVWjBRanRCUVVkdVFqdEJRVU5CTEcxQ1FVRkhMRU5CU21kQ08wRkJTMjVDTEhWQ1FVRlBPMEZCUTBnc2RVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1JVRkJhRU1zU1VGQmMwTXNSVUZCZEVNc1NVRkJORU1zUzBGQlN5eE5RVUZNTEV0QlFXZENMRWRCUVdoQ0xFZEJRWE5DTEVOQlFYUkNMRWRCUVRCQ0xFTkJRVU1zUTBGQmRrVXNRMEZFUVR0QlFVVklMSFZDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFTkJRVGRDTEVWQlFXZERMRVZCUVdoRExFbEJRWE5ETzBGQlJuUkRMR2xDUVV4Wk8wRkJVMjVDTzBGQlEwRXNkMEpCUVZFc1JVRldWenRCUVZkdVFpdzJRa0ZCWVN4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zWTBGQlpDeERRVUUyUWl4RlFVRTNRaXhGUVVGcFF5eEZRVUZxUXl4SlFVRjFReXhGUVZocVF6dEJRVmx1UWl4MVFrRkJUeXhSUVZwWk8wRkJZVzVDTEhOQ1FVRk5PMEZCWW1Fc1lVRkJka0k3UVVGbFFUczdRVUZGUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEUxQlFXWXNRMEZCYzBJc1NVRkJkRUlzUTBGQk1rSXNUMEZCVHl4TFFVRlFMRU5CUVdFc1RVRkJZaXhIUVVGelFpeEZRVUZxUkN4RlFVRnhSQ3haUVVGTk8wRkJRM1pFTEc5Q1FVRkhMRTlCUVVzc1lVRkJUQ3hIUVVGeFFpeEhRVUY0UWl4RlFVRTJRanRCUVVONlFpd3lRa0ZCU3l4aFFVRk1MRWxCUVhOQ0xFZEJRWFJDTzBGQlEwZzdRVUZEU2l4aFFVcEVPenRCUVUxQkxHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVlVGQlZDeERRVUZ2UWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVFNVFpeEZRVUZ4UXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hOUVVFdlF5eERRVUZ5UWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzVTBGQmRrSXNSMEZCYlVNc1RVRkJia003UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFYVkNMRkZCUVhaQ0xFTkJRV2RETEVOQlFXaERMRVZCUVcxRExFTkJRVzVETEVWQlFYTkRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRV2hFTEVWQlFYVkVMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFMUJRV3BGT3p0QlFVVkJMR2xDUVVGTExFOUJRVXdzUjBGQlpTeExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRlVMRU5CUVdkQ0xFTkJRV2hDTEVWQlFXMUNMRU5CUVc1Q0xFVkJRWE5DTEV0QlFVc3NZVUZCTTBJc1EwRkJaanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4UFFVRmlMRWRCUVhWQ0xFdEJRWFpDTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExFdEJRV0lzUjBGQmNVSXNTVUZCY2tJN08wRkJSVUVzYVVKQlFVc3NSMEZCVEN4SFFVRlhMR3RDUVVGUk8wRkJRMllzYzBKQlFVMHNTMEZCU3l4SlFVUkpPMEZCUldZc2QwSkJRVkVzUzBGQlN6dEJRVVpGTEdGQlFWSXNRMEZCV0RzN1FVRkxRVHRCUVVORU8wRkJRME1zYVVKQlFVc3NZMEZCVEN4SFFVRnpRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNWMEZCWml4RFFVRjBRanRCUVVOQkxHbENRVUZMTEcxQ1FVRk1MRWRCUVRKQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4blFrRkJaaXhEUVVFelFqdEJRVU5CTEdsQ1FVRkxMRzlDUVVGTUxFZEJRVFJDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hwUWtGQlppeERRVUUxUWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNrSTdPMEZCUlVFN096dEJRVWxCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMGc3T3p0cFEwRkZVVHRCUVVOTUxHbENRVUZMTEZOQlFVd3NTVUZCYTBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEdOQlFXcERPMEZCUTBFc2FVSkJRVXNzWTBGQlRDeEpRVUYxUWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzWTBGQmRFTTdRVUZEUVN4cFFrRkJTeXhsUVVGTUxFbEJRWGRDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hqUVVGMlF6czdRVUZGUVN4blFrRkJTU3hMUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4aFFVRXhRaXhGUVVGNVF6dEJRVU55UXl4eFFrRkJTeXhUUVVGTUxFZEJRV2xDTEVOQlFXcENPenRCUVVWQkxIRkNRVUZMTEZkQlFVd3NRMEZCYVVJN1FVRkRZaXd3UWtGQlRTeExRVUZMTEVsQlJFVTdRVUZGWWl4MVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF5eEZRVVkxUWp0QlFVZGlPMEZCUTBFc2RVSkJRVWNzUTBGS1ZUdEJRVXRpTERKQ1FVRlBPMEZCUTBnc01rSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1JVRkJhRU1zU1VGQmMwTXNSVUZCZEVNc1NVRkJORU1zUzBGQlN5eE5RVUZNTEV0QlFXZENMRWRCUVdoQ0xFZEJRWE5DTEVOQlFYUkNMRWRCUVRCQ0xFTkJRVU1zUTBGQmRrVXNRMEZFUVR0QlFVVklMREpDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFTkJRVGRDTEVWQlFXZERMRVZCUVdoRExFbEJRWE5ETzBGQlJuUkRMSEZDUVV4Tk8wRkJVMkk3UVVGRFFTdzBRa0ZCVVN4RFFWWkxPMEZCVjJJc2FVTkJRV0VzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUlVGQk4wSXNSVUZCYVVNc1JVRkJha01zU1VGQmRVTXNSVUZZZGtNN1FVRlpZaXd5UWtGQlR5eFBRVnBOTzBGQllXSXNNRUpCUVUwN08wRkJZazhzYVVKQlFXcENPMEZCWjBKSU96dEJRVVZFTEdkQ1FVRkpMRXRCUVVzc1kwRkJUQ3hIUVVGelFpeExRVUZMTEd0Q1FVRXZRaXhGUVVGdFJEdEJRVU12UXl4eFFrRkJTeXhqUVVGTUxFZEJRWE5DTEVOQlFYUkNPMEZCUTBFc2IwSkJRVWtzUTBGQlF5eExRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRnFRaXhGUVVGM1FqdEJRVU53UWl4NVFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhEUVVFeVFpeExRVUZMTEU5QlFXaERPMEZCUTBFc05FSkJRVkVzUjBGQlVpeERRVUZaTEZsQlFWbzdRVUZEU0R0QlFVTktPenRCUVVWRUxHZENRVUZKTEV0QlFVc3NaVUZCVEN4SFFVRjFRaXhMUVVGTExHMUNRVUZvUXl4RlFVRnhSRHRCUVVOcVJDeHhRa0ZCU3l4bFFVRk1MRWRCUVhWQ0xFTkJRWFpDTzBGQlEwRXNiMEpCUVVrc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzZDBKQlFVa3NWMEZCVnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFMUJRWHBDTEVOQlFXZERMRTlCUVU4c1VVRkJVQ3hEUVVGblFpeFJRVUZvUkN4RFFVRm1PMEZCUTBFc2QwSkJRVWNzVVVGQlNDeEZRVUZoTzBGQlExUXNOa0pCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm83UVVGRFNEdEJRVU5LTzBGQlEwbzdPMEZCUlVRc2FVSkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1RVRkJiRUlzUTBGQmVVSXNUMEZCZWtJc1EwRkJhVU1zUzBGQlN5eE5RVUZNTEVOQlFWa3NUMEZCTjBNc1JVRkJjMFFzUzBGQlN5eFBRVUV6UkN4RlFVRnZSU3hMUVVGTExGRkJRWHBGTEVWQlFXMUdMRWxCUVc1R0xFVkJRWGxHTEVsQlFYcEdPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFMUJRV3hDTEVOQlFYbENMRTlCUVhwQ0xFTkJRV2xETEV0QlFVc3NUVUZCVEN4RFFVRlpMRTlCUVRkRExFVkJRWE5FTEV0QlFVc3NZMEZCTTBRc1JVRkJNa1VzUzBGQlN5eFJRVUZvUml4RlFVRXdSaXhKUVVFeFJpeEZRVUZuUnl4SlFVRm9SenM3UVVGRlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVGclFpeE5RVUZzUWl4RFFVRjVRaXhQUVVGNlFpeERRVUZwUXl4TFFVRkxMRTFCUVhSRExFVkJRVGhETEVOQlFVTXNTMEZCU3l4UFFVRk9MRVZCUVdNc1MwRkJTeXhqUVVGdVFpeERRVUU1UXl4RlFVRnJSaXhMUVVGTExGVkJRWFpHTEVWQlFXMUhMRWxCUVc1SExFVkJRWGxITEVsQlFYcEhPenRCUVVWQkxHbENRVUZMTEZGQlFVdzdRVUZEUVR0QlFVTklPenM3YjBOQlJWY3NTU3hGUVVGTk96dEJRVVZrTEdkQ1FVRkpMRkZCUVZFc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQllpeERRVUUwUWl4TFFVRTFRaXhEUVVGYU8wRkJRMEVzWjBKQlFVa3NaVUZCWlN4TFFVRkxMRTlCUVV3c1EwRkJZU3hSUVVGaUxFTkJRWE5DTEUxQlFYcERPMEZCUTBFc2IwSkJRVkVzUjBGQlVpeERRVUZaTEZsQlFWbzdPMEZCUlVFc1owSkJRVWtzUTBGQlF5eExRVUZNTEVWQlFWazdRVUZEVWl4M1FrRkJVU3gzUWtGQlZTeEpRVUZXTEVOQlFWSTdRVUZEUVN4dlFrRkJSeXhsUVVGbExFTkJRV3hDTEVWQlFXOUNPMEZCUTJoQ0xIbENRVUZMTEU5QlFVd3NRMEZCWVN4SFFVRmlMRU5CUVdsQ0xFdEJRV3BDTzBGQlEwZzdRVUZGU2p0QlFVTkVMR3RDUVVGTkxFdEJRVTRzUTBGQldTeEpRVUZhTzBGQlEwZzdPenN5UTBGRmEwSXNTU3hGUVVGTk96dEJRVVZ5UWl4blFrRkJTU3hSUVVGUkxFdEJRVXNzWTBGQlRDeERRVUZ2UWl4alFVRndRaXhEUVVGdFF5eExRVUZ1UXl4RFFVRmFPMEZCUTBFc1owSkJRVWtzWlVGQlpTeExRVUZMTEdOQlFVd3NRMEZCYjBJc1VVRkJjRUlzUTBGQk5rSXNUVUZCYUVRN08wRkJSVUVzWjBKQlFVa3NRMEZCUXl4TFFVRk1MRVZCUVZrN1FVRkRVaXgzUWtGQlVTeDNRa0ZCVlN4SlFVRldMRU5CUVZJN1FVRkRRU3h2UWtGQlJ5eGxRVUZsTEVWQlFXeENMRVZCUVhGQ08wRkJRMnBDTEhsQ1FVRkxMR05CUVV3c1EwRkJiMElzUjBGQmNFSXNRMEZCZDBJc1MwRkJlRUk3UVVGRFNEdEJRVVZLTzBGQlEwUXNhMEpCUVUwc1MwRkJUaXhEUVVGWkxFbEJRVm83UVVGRFNEczdPekJEUVVWcFFpeEpMRVZCUVUwN08wRkJSWEJDTEdkQ1FVRkpMRkZCUVZFc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEdOQlFXNUNMRU5CUVd0RExFdEJRV3hETEVOQlFWbzdRVUZEUVN4blFrRkJTU3hsUVVGbExFdEJRVXNzWVVGQlRDeERRVUZ0UWl4UlFVRnVRaXhEUVVFMFFpeE5RVUV2UXp0QlFVTkJMRzlDUVVGUkxFZEJRVklzUTBGQldTeFpRVUZhT3p0QlFVVkJMR2RDUVVGSkxFTkJRVU1zUzBGQlRDeEZRVUZaTzBGQlExSXNkMEpCUVZFc2QwSkJRVlVzU1VGQlZpeERRVUZTTzBGQlEwRXNiMEpCUVVjc1owSkJRV2RDTEVOQlFXNUNMRVZCUVhGQ08wRkJRMnBDTEhsQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNRMEZCZFVJc1MwRkJka0k3UVVGRFNEdEJRVVZLTzBGQlEwUXNhMEpCUVUwc1MwRkJUaXhEUVVGWkxFbEJRVm83UVVGRFNEczdPMnREUVVWVExFY3NSVUZCU3l4TExFVkJRVTg3UVVGQlFUczdRVUZEYkVJc1owSkJRVWtzVVVGQlVTeExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1MwRkJaQ3hEUVVGdlFpeEhRVUZ3UWl4RFFVRmFPMEZCUTBFc1owSkJRVWtzVlVGQlZTeExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1QwRkJaQ3hGUVVGa08wRkJRMEVzWjBKQlFVa3NjVUpCUVhGQ0xFTkJRWHBDTzBGQlEwRXNaMEpCUVVrc1owSkJRV2RDTEVkQlFYQkNPMEZCUTBFc1owSkJRVWtzWlVGQlpTeEZRVUZ1UWpzN1FVRkZRU3hyUWtGQlRTeEZRVUZPTEVOQlFWTXNSVUZCUXl4TlFVRk5MRkZCUVZBc1JVRkJWQ3hGUVVFeVFpeEhRVUV6UWp0QlFVTkJMR3RDUVVGTkxGVkJRVTRzUTBGQmFVSXNSMEZCYWtJc1EwRkJjVUlzV1VGQlRUdEJRVU4yUWl4dlFrRkJTU3hKUVVGS0xFZEJRVmNzVVVGQldEdEJRVU5JTEdGQlJrUTdRVUZIUVN4clFrRkJUU3hMUVVGT096dEJRVVZCTEc5Q1FVRlJMRU5CUVZJc1IwRkJXU3hKUVVGSkxFTkJRV2hDTzBGQlEwRXNiMEpCUVZFc1EwRkJVaXhIUVVGWkxFbEJRVWtzUTBGQmFFSTdRVUZEUVN4dlFrRkJVU3hQUVVGU0xFZEJRV3RDTEVOQlFXeENPMEZCUTBFc2IwSkJRVkVzWVVGQlVpeERRVUZ6UWl4VlFVRjBRanM3UVVGRlFTeG5Ra0ZCU1N4SlFVRkpMRTFCUVVvc1NVRkJZeXhEUVVGc1FpeEZRVUZ4UWp0QlFVTnFRaXhuUTBGQlowSXNSMEZCYUVJN1FVRkRRU3dyUWtGQlpTeEZRVUZtTzBGQlEwRXNkMEpCUVZFc1VVRkJVanRCUVVOSU96dEJRVVZFTEc5Q1FVRlJMR2RDUVVGU0xFTkJRWGxDTEV0QlFYcENMRU5CUVN0Q0xFTkJRVU1zWVVGQmFFTXNSVUZCSzBNc1EwRkJReXhoUVVGb1JEdEJRVU5CTEc5Q1FVRlJMR2RDUVVGU0xFTkJRWGxDTEV0QlFYcENMRU5CUVN0Q0xHRkJRUzlDTEVWQlFUaERMR0ZCUVRsRE8wRkJRMEVzYjBKQlFWRXNTMEZCVWl4RFFVRmpMRWxCUVdRc1JVRkJiMElzUjBGQmNFSXNSVUZCZVVJc1NVRkJla0lzUlVGQkswSXNXVUZCTDBJN1FVRkRRU3h2UWtGQlVTeE5RVUZTTEVkQlFXbENMRmxCUVUwN1FVRkRia0lzYzBOQlFYTkNMRTlCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeGpRVUZ5UXp0QlFVTkJMRzlDUVVGSExITkNRVUZ6UWl4SFFVRjZRaXhGUVVFMlFqdEJRVU42UWl4NVEwRkJjVUlzUTBGQmNrSTdRVUZEUVN3MFFrRkJVU3hQUVVGU08wRkJRMGc3UVVGRlNpeGhRVkJFTzBGQlVVRXNiMEpCUVZFc1QwRkJVaXhEUVVGblFqdEJRVUZCTEhWQ1FVRlpMRk5CUVZNc1NVRkJWQ3hIUVVGblFpeExRVUUxUWp0QlFVRkJMR0ZCUVdoQ08wRkJRMEVzWjBKQlFVa3NRMEZCUXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGcVFpeEZRVUYzUWp0QlFVTndRaXh4UWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhWUVVGb1FpeERRVUV5UWl4TFFVRkxMRTlCUVdoRE8wRkJRMGc3UVVGRFNqczdPMmxEUVVWUkxFMHNSVUZCVVN4TExFVkJRVTg3TzBGQlJYQkNMR2xDUVVGTExHTkJRVXdzUTBGQmIwSXNTVUZCY0VJc1EwRkJlVUlzUlVGQmVrSXNSVUZCTkVJc1EwRkJOVUlzUlVGQk9FSXNSMEZCT1VJN1FVRkRRU3hyUWtGQlRTeE5RVUZPTEVOQlFXRXNUMEZCVHl4TlFVRndRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFOUJRVThzU1VGQk4wSTdPMEZCUlVFc1owSkJRVWtzUTBGQlF5eE5RVUZOTEV0QlFWZ3NSVUZCYTBJN1FVRkRaQ3h4UWtGQlN5eHRRa0ZCVEN4RFFVRjVRaXhKUVVGNlFpeERRVUU0UWl4RlFVRTVRaXhGUVVGclF5eERRVUZzUXl4RlFVRnhReXhIUVVGeVF6dEJRVU5CTEhGQ1FVRkxMRWRCUVV3c1EwRkJVeXhYUVVGVUxFTkJRWEZDTEUxQlFVMHNVMEZCTTBJN1FVRkRRU3gzUWtGQlR5eE5RVUZOTEVsQlFXSTdRVUZEU1R0QlFVTkJMSGxDUVVGTExFZEJRVXc3UVVGRFJTdzJRa0ZCU3l4clFrRkJUQ3hEUVVGM1FqdEJRVU5zUWl4clEwRkJUU3hMUVVGTExFbEJSRTg3UVVGRmJFSXNLMEpCUVVjc1RVRkJUU3hEUVVaVE8wRkJSMnhDTEN0Q1FVRkhMRTFCUVUwc1EwRklVenRCUVVsc1FpeHRRMEZCVHp0QlFVTklMRzFEUVVGSExFdEJRVXNzUlVGRVREdEJRVVZJTEcxRFFVRkhMRU5CUVVNc1JVRkJSQ3hIUVVGTk8wRkJSazRzTmtKQlNsYzdRVUZSYkVJc2IwTkJRVkVzUlVGU1ZUdEJRVk5zUWl4NVEwRkJZU3hMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhGUVVFM1FpeEZRVUZwUXl4RlFVRnFReXhKUVVGMVF5eEZRVlJzUXp0QlFWVnNRaXh0UTBGQlR5eFBRVlpYTzBGQlYyeENMR3REUVVGTk8wRkJXRmtzZVVKQlFYaENPMEZCWVVFc05rSkJRVXNzYTBKQlFVd3NRMEZCZDBJN1FVRkRiRUlzYTBOQlFVMHNTMEZCU3l4SlFVUlBPMEZCUld4Q0xDdENRVUZITEUxQlFVMHNRMEZHVXpzN1FVRkpiRUlzSzBKQlFVY3NUVUZCVFN4RFFVcFRPMEZCUzJ4Q0xHMURRVUZQTzBGQlEwZ3NiVU5CUVVjc1EwRkJReXhGUVVGRUxFZEJRVTBzUlVGRVRqdEJRVVZJTEcxRFFVRkhMRU5CUVVNc1JVRkJSQ3hIUVVGTk8wRkJSazRzTmtKQlRGYzdPMEZCVld4Q0xHOURRVUZSTEVWQlZsVTdRVUZYYkVJc2VVTkJRV0VzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUlVGQk4wSXNSVUZCYVVNc1JVRkJha01zU1VGQmRVTXNSVUZZYkVNN1FVRlpiRUlzYlVOQlFVOHNUMEZhVnp0QlFXRnNRaXhyUTBGQlRUdEJRV0paTEhsQ1FVRjRRanRCUVdWQk96dEJRUzlDVGp0QlFXdERRU3gxUWtGQlR5eEpRVUZRTzBGQlEwZzdRVUZEU2pzN08yMURRVVZWTEUwc1JVRkJVU3hMTEVWQlFVODdRVUZEZEVJN1FVRkRRU3hyUWtGQlRTeE5RVUZPTEVOQlFXRXNRMEZCWWp0QlFVTkJPMEZCUTBFc2JVSkJRVThzVFVGQlVDeERRVUZqTEVOQlFXUTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzVFVGQlpqdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hMUVVGbU8wRkJRMEVzWjBKQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVZnc1JVRkJhMEk3UVVGRFpDeHhRa0ZCU3l4dFFrRkJUQ3hEUVVGNVFpeEpRVUY2UWl4RFFVRTRRaXhGUVVFNVFpeEZRVUZwUXl4RFFVRnFReXhGUVVGdFF5eEhRVUZ1UXp0QlFVTkJMSEZDUVVGTExFZEJRVXdzUTBGQlV5eFhRVUZVTEVOQlFYRkNMRTFCUVUwc1UwRkJNMEk3UVVGRFNEdEJRVU5FTEdsQ1FVRkxMRWRCUVV3c1EwRkJVeXhaUVVGVU8wRkJRMEVzWjBKQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVZvc1JVRkJiVUk3UVVGRFppeHhRa0ZCU3l4dlFrRkJUQ3hEUVVFd1FpeEpRVUV4UWp0QlFVTkJMSEZDUVVGTExGRkJRVXc3UVVGRFNEdEJRVU5LT3pzN2JVTkJSVk03UVVGQlFUczdRVUZEVGl4cFFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEZWQlFXWXNSMEZCTkVJc1EwRkJOVUk3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1QwRkJZaXhIUVVGMVFpeEpRVUYyUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRlZCUVdoQ0xFTkJRVEpDTEV0QlFVc3NUMEZCYUVNN1FVRkRRU3huUWtGQlNTeFJRVUZSTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hOUVVGbUxFTkJRWE5DTEV0QlFVc3NTVUZCTTBJc1JVRkJhVU1zU1VGQmFrTXNRMEZCV2p0QlFVTkJMR3RDUVVGTkxFZEJRVTRzUTBGQlZTeEpRVUZXTEVWQlFXZENMRmxCUVUwN1FVRkRiRUk3UVVGRFFTeDFRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFbEJRVzVDTzBGQlEwRXNkVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCYUVJc1EwRkJjMElzVlVGQmRFSTdRVUZEU0N4aFFVcEVPMEZCUzBFc2EwSkJRVTBzUzBGQlRqdEJRVU5JT3pzN2JVTkJSVk03UVVGRFRpeG5Ra0ZCU1N4VFFVRlRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNVVUZCYUVJc1EwRkJlVUlzVFVGQmVrSXNRMEZCWjBNc1QwRkJUeXhSUVVGUUxFTkJRV2RDTEVkQlFXaEVMRU5CUVdJN1FVRkRRU3huUWtGQlJ5eE5RVUZJTEVWQlFWVTdRVUZEVGl4eFFrRkJTeXhOUVVGTUxFTkJRVmtzU1VGQldqdEJRVU5CTEhGQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFXaENMRU5CUVhOQ0xFMUJRWFJDTzBGQlJVZzdRVUZEU2pzN096dEZRWFpWYVVNc1QwRkJUeXhMT3p0clFrRkJlRUlzVVRzN096czdPenM3T3pzN096czdPenM3U1VOS1FTeFBPenM3T3pzN096czdPenRyUTBGRlVEczdRVUZGVGl4cFFrRkJTeXhSUVVGTUxFZEJRV2RDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRTFCUVZRc1EwRkJaMElzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGb1F5eEZRVUY1UXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFYcEVMRVZCUVd0RkxGVkJRV3hGTEVOQlFXaENPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeEhRVUZwUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGVUxFTkJRV2RDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFTXNSVUZCZVVNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRjZSQ3hGUVVGclJTeFhRVUZzUlN4RFFVRnFRanRCUVVOQkxHbENRVUZMTEZGQlFVd3NRMEZCWXl4TlFVRmtMRU5CUVhGQ0xFdEJRWEpDTEVOQlFUSkNMRWRCUVROQ08wRkJRMEVzYVVKQlFVc3NVMEZCVEN4RFFVRmxMRTFCUVdZc1EwRkJjMElzUzBGQmRFSXNRMEZCTkVJc1IwRkJOVUk3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxHZENRVUZXTEVOQlFUSkNMRXRCUVVzc1UwRkJhRU03UVVGRFFUczdRVUZGUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzWTBGQlZpeERRVUY1UWl4alFVRjZRaXhGUVVGNVF5d3dRMEZCZWtNc1JVRkJjVVlzTkVOQlFYSkdPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEdOQlFWWXNRMEZCZVVJc1QwRkJla0lzUlVGQmEwTXNiVU5CUVd4RExFVkJRWFZGTEhGRFFVRjJSVHRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4alFVRldMRU5CUVhsQ0xGRkJRWHBDTEVWQlFXMURMR2RDUVVGdVF5eEZRVUZ4UkN3d1FrRkJja1E3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFRRVUZvUWl4RlFVRXlRaXg1UWtGQk0wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UlFVRm9RaXhGUVVFd1FpeDNRa0ZCTVVJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhWUVVGb1FpeEZRVUUwUWl3d1FrRkJOVUk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFhRVUZvUWl4RlFVRTJRaXd5UWtGQk4wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhGUVVGNVFpeDNRa0ZCZWtJN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVjBGQmFFSXNSVUZCTmtJc1EwRkJReXc0UWtGQlJDeERRVUUzUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRmRCUVdoQ0xFVkJRVFpDTEVOQlFVTXNPRUpCUVVRc1EwRkJOMEk3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWVUZCYUVJc1JVRkJORUlzUTBGQlF5eHRRMEZCUkN4RFFVRTFRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGTkJRV2hDTEVWQlFUSkNMRU5CUVVNc2EwTkJRVVFzUTBGQk0wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhGUVVFMFFpeERRVUZETEc5RFFVRkVMRU5CUVRWQ096dEJRVVZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZkQlFXaENMRVZCUVRaQ0xFTkJRVU1zYjBOQlFVUXNRMEZCTjBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhYUVVGb1FpeEZRVUUyUWl4RFFVRkRMRzlEUVVGRUxFTkJRVGRDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNaMEpCUVdoQ0xFVkJRV3RETEVOQlFVTXNlVU5CUVVRc1EwRkJiRU03UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFpRVUZvUWl4RlFVRTRRaXhEUVVGRExIRkRRVUZFTEVOQlFUbENPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc2FVSkJRV2hDTEVWQlFXMURMRU5CUVVNc01FTkJRVVFzUTBGQmJrTTdPMEZCUlVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1ZVRkJhRUlzUlVGQk5FSXNRMEZCUXl4dFEwRkJSQ3hEUVVFMVFqdEJRVU5CT3pzN1FVRkhRVHM3UVVGRlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RlFVRXdRaXh4UWtGQk1VSTdPMEZCUlVFN096dEJRVWRCT3p0QlFVVkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFhRVUZXTEVOQlFYTkNMRTlCUVhSQ0xFVkJRVGhDTERSQ1FVRTVRaXhGUVVFMFJDeEhRVUUxUkN4RlFVRnBSU3hIUVVGcVJTeEZRVUZ6UlN4RlFVRjBSVHRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFbEJRV2hDTEVWQlFYTkNMR3RDUVVGMFFqdEJRVU5CTzBGQlEwZzdPenRwUTBGRlVUdEJRVU5NTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEUxQlFXcENPMEZCUTBnN096czdSVUYwUkdkRExFOUJRVThzU3pzN2EwSkJRWFpDTEU4N096czdPenM3T3pzN08wRkRRWEpDT3pzN096czdPenM3T3pzN1NVRkZjVUlzU1RzN096czdPenM3T3pzN2FVTkJSVkk3UVVGQlFUczdRVUZGVEN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEVsQlFVa3NUMEZCVHl4SlFVRllMRU5CUVdkQ0xFdEJRVXNzU1VGQmNrSXNSVUZCTWtJc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRXpReXhGUVVGdlJDeExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFYZENMRWRCUVRWRkxFVkJRV2xHTEZkQlFXcEdMRVZCUVRoR08wRkJReTlITEhOQ1FVRk5MR0ZCUkhsSE8wRkJSUzlITEhOQ1FVRk5MRTlCUm5sSE8wRkJSeTlITEhWQ1FVRlBPMEZCU0hkSExHRkJRVGxHTEVOQlFYSkNPMEZCUzBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4TlFVRnVRaXhEUVVFd1FpeExRVUV4UWl4RFFVRm5ReXhIUVVGb1F6czdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFZEJRV0VzZVVKQlFXVTdRVUZEZUVJc2MwSkJRVTBzUzBGQlN5eEpRVVJoTzBGQlJYaENMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdTenRCUVVkNFFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFXaENMRWRCUVhkQ0xFVkJTRWc3UVVGSmVFSXNkVUpCUVU4c1VVRkthVUk3UVVGTGVFSXNNa0pCUVZjc1EwRk1ZVHRCUVUxNFFpd3dRa0ZCVlN4RFFVNWpPMEZCVDNoQ0xESkNRVUZYTEVOQlVHRTdRVUZSZUVJc2VVSkJRVk1zUTBGU1pUdEJRVk40UWl4MVFrRkJUeXhYUVZScFFqdEJRVlY0UWl4MVFrRkJUenRCUVVOSUxEQkNRVUZOTEdOQlJFZzdRVUZGU0N3d1FrRkJUU3hQUVVaSU8wRkJSMGdzTWtKQlFVODdRVUZJU2p0QlFWWnBRaXhoUVVGbUxFTkJRV0k3TzBGQmFVSkJMR2xDUVVGTExFbEJRVXdzUjBGQldTeDVRa0ZCWlR0QlFVTjJRaXh6UWtGQlRTeExRVUZMTEVsQlJGazdRVUZGZGtJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaSk8wRkJSM1pDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCYUVJc1IwRkJkMElzUlVGSVNqdEJRVWwyUWl4MVFrRkJUeXhSUVVwblFqdEJRVXQyUWl3eVFrRkJWeXhEUVV4Wk8wRkJUWFpDTERCQ1FVRlZMRU5CVG1FN1FVRlBka0lzTWtKQlFWY3NRMEZRV1R0QlFWRjJRaXg1UWtGQlV5eERRVkpqTzBGQlUzWkNMSFZDUVVGUExFMUJWR2RDTzBGQlZYWkNMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNZMEZFU0R0QlFVVklMREJDUVVGTkxFOUJSa2c3UVVGSFNDd3lRa0ZCVHp0QlFVaEtPMEZCVm1kQ0xHRkJRV1lzUTBGQldqczdRVUZwUWtFc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeERRVUZ3UWp0QlFVTkJMR2xDUVVGTExGZEJRVXdzUjBGQmJVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGTkJRV1lzUTBGQmJrSTdRVUZEUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDT3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFpRVUZZTEVOQlFYZENMRXRCUVVzc1dVRkJOMEk3UVVGRFFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1YwRkJXQ3hEUVVGMVFpeExRVUZMTEZkQlFUVkNPMEZCUTBFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZsQlFWZ3NRMEZCZDBJc1MwRkJTeXhaUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3haUVVGV0xFTkJRWFZDTEV0QlFVc3NXVUZCTlVJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNWMEZCVml4RFFVRnpRaXhMUVVGTExGZEJRVE5DTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxGbEJRVllzUTBGQmRVSXNTMEZCU3l4WlFVRTFRanM3UVVGRlFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1YwRkJXQ3hEUVVGMVFpeEhRVUYyUWl4RFFVRXlRaXhaUVVGSk8wRkJRek5DTEhWQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEUxQlFXcENPMEZCUTBnc1lVRkdSRHM3UVVGSlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1YwRkJWaXhEUVVGelFpeEhRVUYwUWl4RFFVRXdRaXhaUVVGSk8wRkJRekZDTEhWQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEUxQlFXcENPMEZCUTBnc1lVRkdSRHM3UVVGSlFTeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZCY2tJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEV0QlFVc3NZVUZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEV0QlFVc3NTMEZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEV0QlFVc3NTVUZCTlVJN1FVRkRTRHM3T3p0RlFYQkZOa0lzVDBGQlR5eExPenRyUWtGQmNFSXNTVHM3T3pzN096czdPenM3UVVOR2NrSTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN096czdTVUZGY1VJc1NUczdPenM3T3pzN096czdhVU5CUlZJN1FVRkJRVHM3UVVGRFREdEJRVU5CTEdsQ1FVRkxMRTlCUVV3c1IwRkJaU3hMUVVGTExFZEJRVXdzUTBGQlV5eFZRVUZVTEVOQlFXOUNMRU5CUVhCQ0xFVkJRWFZDTEVOQlFYWkNMRVZCUVRCQ0xFZEJRVEZDTEVWQlFTdENMRWxCUVM5Q0xFVkJRWEZETEZOQlFYSkRMRU5CUVdZN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMRlZCUVdZc1IwRkJORUlzUTBGQk5VSTdPMEZCUlVFc2FVSkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJaanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4VlFVRmlMRWRCUVRCQ0xFbEJRVEZDT3p0QlFVVkJMR2xDUVVGTExFMUJRVXdzUjBGQll5eHhRa0ZCVnp0QlFVTnlRaXh6UWtGQlRTeExRVUZMTEVsQlJGVTdRVUZGY2tJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaRk8wRkJSM0pDTEcxQ1FVRkhMRTlCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVaE1PMEZCU1hKQ0xIZENRVUZSTEVkQlNtRTdRVUZMY2tJc2RVSkJRVThzWTBGTVl6dEJRVTF5UWl4MVFrRkJUenRCUVU1akxHRkJRVmdzUTBGQlpEdEJRVkZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFdEJRVXNzVFVGQk9VSTdPMEZCUlVFc2FVSkJRVXNzUjBGQlRDeEhRVUZYTEd0Q1FVRlJPMEZCUTJZc2MwSkJRVTBzUzBGQlN5eEpRVVJKTzBGQlJXWXNkMEpCUVZFc1MwRkJTenRCUVVaRkxHRkJRVklzUTBGQldEczdRVUZMUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVRm9RaXhEUVVGMVFpeEhRVUYyUWl4RFFVRXlRaXhaUVVGTk8wRkJRemRDTEhWQ1FVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVlVGQlppeEhRVUUwUWl4RFFVRTFRanRCUVVOSUxHRkJSa1E3TzBGQlNVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTVUZCYUVJc1EwRkJjVUlzUjBGQmNrSXNRMEZCZVVJc1dVRkJUVHRCUVVNelFpeDFRa0ZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExGVkJRV1lzUjBGQk5FSXNRMEZCTlVJN1FVRkRTQ3hoUVVaRU96dEJRVWxCTEdsQ1FVRkxMRk5CUVV3c1IwRkJhVUlzUTBGQmFrSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEVkQlFYSkNPMEZCUTBFc2FVSkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxHbENRVUZMTEd0Q1FVRk1MRWRCUVRCQ0xFTkJRVEZDTzBGQlEwRXNhVUpCUVVzc1pVRkJUQ3hIUVVGMVFpeERRVUYyUWp0QlFVTkJMR2xDUVVGTExHMUNRVUZNTEVkQlFUSkNMRWxCUVROQ096dEJRVVZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVFVGQlppeERRVUZ6UWl4SlFVRjBRaXhEUVVFeVFpeFBRVUZQTEV0QlFWQXNRMEZCWVN4TlFVRmlMRWRCUVhOQ0xFVkJRV3BFTEVWQlFYRkVMRmxCUVUwN1FVRkRka1FzYjBKQlFVY3NUMEZCU3l4aFFVRk1MRWRCUVhGQ0xFZEJRWGhDTEVWQlFUWkNPMEZCUTNwQ0xESkNRVUZMTEdGQlFVd3NTVUZCYzBJc1IwRkJkRUk3UVVGRFNEdEJRVU5LTEdGQlNrUTdPMEZCVFVFc2FVSkJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhWUVVGVUxFTkJRVzlDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVRsQ0xFVkJRWEZETEV0QlFVc3NTVUZCVEN4RFFVRlZMRTFCUVM5RExFTkJRWEpDTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRjFRaXhUUVVGMlFpeEhRVUZ0UXl4TlFVRnVRenRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNVVUZCZGtJc1EwRkJaME1zUTBGQmFFTXNSVUZCYlVNc1EwRkJia01zUlVGQmMwTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJhRVFzUlVGQmRVUXNTMEZCU3l4SlFVRk1MRU5CUVZVc1RVRkJha1U3TzBGQlJVRXNhVUpCUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzUjBGQlRDeERRVUZUTEUxQlFWUXNRMEZCWjBJc1EwRkJhRUlzUlVGQmJVSXNRMEZCYmtJc1JVRkJjMElzUzBGQlN5eGhRVUV6UWl4RFFVRm1PMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEU5QlFXSXNSMEZCZFVJc1MwRkJka0k3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1MwRkJZaXhIUVVGeFFpeEpRVUZ5UWpzN1FVRkZSRHRCUVVORExHbENRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZkQlFXWXNRMEZCZEVJN1FVRkRRU3hwUWtGQlN5eHRRa0ZCVEN4SFFVRXlRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNaMEpCUVdZc1EwRkJNMEk3UVVGRFFTeHBRa0ZCU3l4dlFrRkJUQ3hIUVVFMFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc2FVSkJRV1lzUTBGQk5VSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEpDT3p0QlFVVkJPMEZCUTBnN096dHBRMEZGVVR0QlFVRkJPenRCUVVWTUxHbENRVUZMTEZOQlFVd3NTVUZCYTBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEdOQlFXcERPMEZCUTBFc2FVSkJRVXNzWTBGQlRDeEpRVUYxUWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzWTBGQmRFTTdRVUZEUVN4cFFrRkJTeXhsUVVGTUxFbEJRWGRDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hqUVVGMlF6czdRVUZGUVN4blFrRkJTU3hMUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4aFFVRXhRaXhGUVVGNVF6dEJRVU55UXl4eFFrRkJTeXhUUVVGTUxFZEJRV2xDTEVOQlFXcENPenRCUVVWQkxIRkNRVUZMTEZkQlFVd3NRMEZCYVVJN1FVRkRZaXd3UWtGQlRTeExRVUZMTEVsQlJFVTdRVUZGWWl4MVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF5eEZRVVkxUWp0QlFVZGlMSFZDUVVGSExFTkJTRlU3UVVGSllpd3lRa0ZCVHp0QlFVTklMREpDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFTkJRVGRDTEVWQlFXZERMRVZCUVdoRExFbEJRWE5ETEVWQlFYUkRMRWxCUVRSRExFdEJRVXNzVFVGQlRDeExRVUZuUWl4SFFVRm9RaXhIUVVGelFpeERRVUYwUWl4SFFVRXdRaXhEUVVGRExFTkJRWFpGTEVOQlJFRTdRVUZGU0N3eVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF6dEJRVVowUXl4eFFrRktUVHRCUVZGaUxEUkNRVUZSTEVOQlVrczdRVUZUWWl4cFEwRkJZU3hMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhGUVVFM1FpeEZRVUZwUXl4RlFVRnFReXhKUVVGMVF5eEZRVlIyUXp0QlFWVmlMREpDUVVGUE8wRkJWazBzYVVKQlFXcENPMEZCV1VnN08wRkJSVVFzWjBKQlFVa3NTMEZCU3l4alFVRk1MRWRCUVhOQ0xFdEJRVXNzYTBKQlFTOUNMRVZCUVcxRU8wRkJReTlETEhGQ1FVRkxMR05CUVV3c1IwRkJjMElzUTBGQmRFSTdRVUZEUVN4eFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWp0QlFVRkJMREpDUVVGVExFMUJRVTBzUzBGQlRpeEZRVUZVTzBGQlFVRXNhVUpCUVRGQ08wRkJRMEVzYjBKQlFVa3NRMEZCUXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGcVFpeEZRVUYzUWp0QlFVTndRaXg1UWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhWUVVGb1FpeERRVUV5UWl4TFFVRkxMRTlCUVdoRE8wRkJRMGc3UVVGRFNqczdRVUZGUkN4blFrRkJTU3hMUVVGTExHVkJRVXdzUjBGQmRVSXNTMEZCU3l4dFFrRkJhRU1zUlVGQmNVUTdRVUZEYWtRc2NVSkJRVXNzWlVGQlRDeEhRVUYxUWl4RFFVRjJRanRCUVVOQkxHOUNRVUZKTEV0QlFVc3NUVUZCVEN4RFFVRlpMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMSGxDUVVGTExFMUJRVXdzUTBGQldTeExRVUZhTzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhOUVVGc1FpeERRVUY1UWl4UFFVRjZRaXhEUVVGcFF5eExRVUZMTEUxQlFVd3NRMEZCV1N4UFFVRTNReXhGUVVGelJDeExRVUZMTEU5QlFUTkVMRVZCUVc5RkxFdEJRVXNzVVVGQmVrVXNSVUZCYlVZc1NVRkJia1lzUlVGQmVVWXNTVUZCZWtZN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkJhMElzVFVGQmJFSXNRMEZCZVVJc1QwRkJla0lzUTBGQmFVTXNTMEZCU3l4TlFVRjBReXhGUVVFNFF5eExRVUZMTEU5QlFXNUVMRVZCUVRSRUxFdEJRVXNzVlVGQmFrVXNSVUZCTmtVc1NVRkJOMFVzUlVGQmJVWXNTVUZCYmtZN08wRkJSVUVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRTlCUVdJc1EwRkJjVUk3UVVGQlFTeDFRa0ZCVXl4UFFVRkxMRWxCUVV3c1EwRkJWU3hQUVVGV0xFTkJRV3RDTEUxQlFXeENMRU5CUVhsQ0xFOUJRWHBDTEVOQlFXbERMRTlCUVVzc1RVRkJkRU1zUlVGQk9FTXNUVUZCVFN4UFFVRndSQ3hGUVVFMlJDeFBRVUZMTEZOQlFXeEZMRVZCUVRaRkxFbEJRVGRGTEZOQlFWUTdRVUZCUVN4aFFVRnlRanM3UVVGRlFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1dVRkJZaXhEUVVFd1FpeERRVUV4UWl4SlFVRXJRaXhEUVVFdlFqdEJRVU5JT3pzN2IwTkJSVmNzU1N4RlFVRk5PenRCUVVWa0xHZENRVUZKTEZGQlFWRXNTMEZCU3l4UFFVRk1MRU5CUVdFc1kwRkJZaXhEUVVFMFFpeExRVUUxUWl4RFFVRmFPenRCUVVWQkxHZENRVUZKTEVOQlFVTXNTMEZCVEN4RlFVRlpPMEZCUTFJc2QwSkJRVkVzYjBKQlFWVXNTVUZCVml4RFFVRlNPMEZCUTBFc2NVSkJRVXNzVDBGQlRDeERRVUZoTEVkQlFXSXNRMEZCYVVJc1MwRkJha0k3UVVGRFNEdEJRVU5FTEd0Q1FVRk5MRXRCUVU0c1EwRkJXU3hKUVVGYU8wRkJRMGc3T3p0clEwRkZVeXhITEVWQlFVc3NTeXhGUVVGUE8wRkJRVUU3TzBGQlEyeENMR2RDUVVGSkxGRkJRVkVzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1EwRkJiMElzUjBGQmNFSXNRMEZCV2p0QlFVTkJMR2RDUVVGSkxGVkJRVlVzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRTlCUVdRc1JVRkJaRHRCUVVOQkxHZENRVUZKTEhGQ1FVRnhRaXhEUVVGNlFqdEJRVU5CTEdkQ1FVRkpMR2RDUVVGblFpeEhRVUZ3UWp0QlFVTkJMR2RDUVVGSkxHVkJRV1VzUlVGQmJrSTdPMEZCUlVFc2EwSkJRVTBzUlVGQlRpeERRVUZUTEVWQlFVTXNUVUZCVFN4UlFVRlFMRVZCUVZRc1JVRkJNa0lzUjBGQk0wSTdRVUZEUVN4clFrRkJUU3hWUVVGT0xFTkJRV2xDTEVkQlFXcENMRU5CUVhGQ0xGbEJRVTA3UVVGRGRrSXNiMEpCUVVrc1NVRkJTaXhIUVVGWExGRkJRVmc3UVVGRFNDeGhRVVpFTzBGQlIwRXNhMEpCUVUwc1MwRkJUanM3UVVGRlFTeHZRa0ZCVVN4RFFVRlNMRWRCUVZrc1NVRkJTU3hEUVVGb1FqdEJRVU5CTEc5Q1FVRlJMRU5CUVZJc1IwRkJXU3hKUVVGSkxFTkJRV2hDTzBGQlEwRXNiMEpCUVZFc1QwRkJVaXhIUVVGclFpeERRVUZzUWp0QlFVTkJMRzlDUVVGUkxHRkJRVklzUTBGQmMwSXNWVUZCZEVJN08wRkJSVUVzWjBKQlFVa3NTVUZCU1N4TlFVRktMRWxCUVdNc1EwRkJiRUlzUlVGQmNVSTdRVUZEYWtJc1owTkJRV2RDTEVkQlFXaENPMEZCUTBFc0swSkJRV1VzUlVGQlpqdEJRVU5CTEhkQ1FVRlJMRkZCUVZJN1FVRkRTRHM3UVVGRlJDeHZRa0ZCVVN4blFrRkJVaXhEUVVGNVFpeExRVUY2UWl4RFFVRXJRaXhEUVVGRExHRkJRV2hETEVWQlFTdERMRU5CUVVNc1lVRkJhRVE3UVVGRFFTeHZRa0ZCVVN4blFrRkJVaXhEUVVGNVFpeExRVUY2UWl4RFFVRXJRaXhoUVVFdlFpeEZRVUU0UXl4aFFVRTVRenRCUVVOQkxHOUNRVUZSTEV0QlFWSXNRMEZCWXl4SlFVRmtMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWxCUVhwQ0xFVkJRU3RDTEZsQlFTOUNPMEZCUTBFc2IwSkJRVkVzVFVGQlVpeEhRVUZwUWl4WlFVRk5PMEZCUTI1Q0xITkRRVUZ6UWl4UFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzWTBGQmNrTTdRVUZEUVN4dlFrRkJSeXh6UWtGQmMwSXNSMEZCZWtJc1JVRkJOa0k3UVVGRGVrSXNlVU5CUVhGQ0xFTkJRWEpDTzBGQlEwRXNORUpCUVZFc1QwRkJVanRCUVVOSU8wRkJSVW9zWVVGUVJEdEJRVkZCTEc5Q1FVRlJMRTlCUVZJc1EwRkJaMEk3UVVGQlFTeDFRa0ZCV1N4VFFVRlRMRWxCUVZRc1IwRkJaMElzUzBGQk5VSTdRVUZCUVN4aFFVRm9RanRCUVVOQkxHZENRVUZKTEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJha0lzUlVGQmQwSTdRVUZEY0VJc2NVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1ZVRkJhRUlzUTBGQk1rSXNTMEZCU3l4UFFVRm9RenRCUVVOSU8wRkJRMG83T3p0cFEwRkZVU3hOTEVWQlFWRXNTeXhGUVVGUE8wRkJRM0JDTEdsQ1FVRkxMR05CUVV3c1EwRkJiMElzU1VGQmNFSXNRMEZCZVVJc1JVRkJla0lzUlVGQk5FSXNRMEZCTlVJc1JVRkJPRUlzUjBGQk9VSTdRVUZEUVN4clFrRkJUU3hOUVVGT0xFTkJRV0VzVDBGQlR5eE5RVUZ3UWp0QlFVTkJMR2xDUVVGTExGTkJRVXdzUTBGQlpTeExRVUZtTEVWQlFYTkNMRTlCUVU4c1NVRkJOMEk3UVVGRFFTeG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1MwRkJXQ3hGUVVGclFqdEJRVU5rTEhGQ1FVRkxMRzFDUVVGTUxFTkJRWGxDTEVsQlFYcENMRU5CUVRoQ0xFVkJRVGxDTEVWQlFXbERMRU5CUVdwRExFVkJRVzFETEVkQlFXNURPMEZCUTBFc2NVSkJRVXNzUjBGQlRDeERRVUZUTEZkQlFWUXNRMEZCY1VJc1RVRkJUU3hUUVVFelFqdEJRVU5JTzBGQlEwUXNiVUpCUVU4c1NVRkJVRHRCUVVOSU96czdhME5CUlZNc1RTeEZRVUZSTEUwc1JVRkJVVHRCUVVOMFFpeHBRa0ZCU3l4alFVRk1MRU5CUVc5Q0xFbEJRWEJDTEVOQlFYbENMRVZCUVhwQ0xFVkJRVFJDTEVOQlFUVkNMRVZCUVRoQ0xFZEJRVGxDTzBGQlEwRXNiVUpCUVU4c1RVRkJVQ3hEUVVGakxFOUJRVThzVFVGQmNrSTdRVUZEUVN4cFFrRkJTeXhIUVVGTUxFTkJRVk1zV1VGQlZEdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hOUVVGbUxFVkJRWFZDTEU5QlFVOHNTVUZCT1VJN1FVRkRRU3huUWtGQlNTeERRVUZETEU5QlFVOHNTMEZCV2l4RlFVRnRRanRCUVVObUxIRkNRVUZMTEc5Q1FVRk1MRU5CUVRCQ0xFbEJRVEZDTzBGQlEwRXNjVUpCUVVzc1VVRkJURHRCUVVOSU8wRkJRMFFzYlVKQlFVOHNTVUZCVUR0QlFVTklPenM3YlVOQlJWVXNUU3hGUVVGUkxFc3NSVUZCVHp0QlFVTjBRaXhyUWtGQlRTeE5RVUZPTEVOQlFXRXNUVUZCVFN4TlFVRnVRanRCUVVOQkxHMUNRVUZQTEUxQlFWQXNRMEZCWXl4TlFVRk5MRTFCUVhCQ08wRkJRMEVzYVVKQlFVc3NVMEZCVEN4RFFVRmxMRTFCUVdZN1FVRkRRU3hwUWtGQlN5eFRRVUZNTEVOQlFXVXNTMEZCWmp0QlFVTkJMR2RDUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZZTEVWQlFXdENPMEZCUTJRc2NVSkJRVXNzYlVKQlFVd3NRMEZCZVVJc1NVRkJla0lzUTBGQk9FSXNSVUZCT1VJc1JVRkJhVU1zUTBGQmFrTXNSVUZCYlVNc1IwRkJia003UVVGRFFTeHhRa0ZCU3l4SFFVRk1MRU5CUVZNc1YwRkJWQ3hEUVVGeFFpeE5RVUZOTEZOQlFUTkNPMEZCUTBnN1FVRkRSQ3hwUWtGQlN5eEhRVUZNTEVOQlFWTXNXVUZCVkR0QlFVTkJMR2RDUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZhTEVWQlFXMUNPMEZCUTJZc2NVSkJRVXNzYjBKQlFVd3NRMEZCTUVJc1NVRkJNVUk3UVVGRFFTeHhRa0ZCU3l4UlFVRk1PMEZCUTBnN1FVRkRTanM3TzIxRFFVVlRPMEZCUVVFN08wRkJRMDRzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hWUVVGbUxFZEJRVFJDTEVOQlFUVkNPMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEU5QlFXSXNSMEZCZFVJc1NVRkJka0k3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RFFVRXlRaXhMUVVGTExFOUJRV2hETzBGQlEwRXNaMEpCUVVrc1VVRkJVU3hMUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNUVUZCWml4RFFVRnpRaXhMUVVGTExFbEJRVE5DTEVWQlFXbERMRWxCUVdwRExFTkJRVm83UVVGRFFTeHJRa0ZCVFN4SFFVRk9MRU5CUVZVc1NVRkJWaXhGUVVGblFpeFpRVUZOTzBGQlEyeENMSFZDUVVGTExFdEJRVXdzUTBGQlZ5eEpRVUZZTzBGQlEwRXNkVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEpRVUZ1UWp0QlFVTkJMSFZDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRXRCUVdoQ0xFTkJRWE5DTEUxQlFYUkNPMEZCUTBnc1lVRktSRHRCUVV0QkxHdENRVUZOTEV0QlFVNDdRVUZEU0RzN096dEZRWEJPTmtJc1QwRkJUeXhMT3p0clFrRkJjRUlzU1NJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJR1VvZEN4dUxISXBlMloxYm1OMGFXOXVJSE1vYnl4MUtYdHBaaWdoYmx0dlhTbDdhV1lvSVhSYmIxMHBlM1poY2lCaFBYUjVjR1Z2WmlCeVpYRjFhWEpsUFQxY0ltWjFibU4wYVc5dVhDSW1KbkpsY1hWcGNtVTdhV1lvSVhVbUptRXBjbVYwZFhKdUlHRW9ieXdoTUNrN2FXWW9hU2x5WlhSMWNtNGdhU2h2TENFd0tUdDJZWElnWmoxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzI4clhDSW5YQ0lwTzNSb2NtOTNJR1l1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhtZlhaaGNpQnNQVzViYjEwOWUyVjRjRzl5ZEhNNmUzMTlPM1JiYjExYk1GMHVZMkZzYkNoc0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b1pTbDdkbUZ5SUc0OWRGdHZYVnN4WFZ0bFhUdHlaWFIxY200Z2N5aHVQMjQ2WlNsOUxHd3NiQzVsZUhCdmNuUnpMR1VzZEN4dUxISXBmWEpsZEhWeWJpQnVXMjlkTG1WNGNHOXlkSE45ZG1GeUlHazlkSGx3Wlc5bUlISmxjWFZwY21VOVBWd2lablZ1WTNScGIyNWNJaVltY21WeGRXbHlaVHRtYjNJb2RtRnlJRzg5TUR0dlBISXViR1Z1WjNSb08yOHJLeWx6S0hKYmIxMHBPM0psZEhWeWJpQnpmU2tpTENKbGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlVaWGgwUW5WMGRHOXVJR1Y0ZEdWdVpITWdVR2hoYzJWeUxrSjFkSFJ2YmlCN1hHNWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaDdJR2RoYldVc0lIZ3NJSGtzSUdGemMyVjBMQ0JqWVd4c1ltRmpheXdnWTJGc2JHSmhZMnREYjI1MFpYaDBMQ0J2ZG1WeVJuSmhiV1VzSUc5MWRFWnlZVzFsTENCa2IzZHVSbkpoYldVc0lIVndSbkpoYldVc0lHeGhZbVZzTENCemRIbHNaU0I5S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0dkaGJXVXNJSGdzSUhrc0lHRnpjMlYwTENCallXeHNZbUZqYXl3Z1kyRnNiR0poWTJ0RGIyNTBaWGgwTENCdmRtVnlSbkpoYldVc0lHOTFkRVp5WVcxbExDQmtiM2R1Um5KaGJXVXNJSFZ3Um5KaGJXVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZVzVqYUc5eUxuTmxkRlJ2S0RBdU5TazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXNZV0psYkNBOUlHeGhZbVZzTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wZVd4bElEMGdjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEdWNGRDQTlJRzVsZHlCUWFHRnpaWEl1VkdWNGRDaDBhR2x6TG1kaGJXVXNJREFzSURBc0lIUm9hWE11YkdGaVpXd3NJSFJvYVhNdWMzUjViR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblJsZUhRdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aFpHUkRhR2xzWkNoMGFHbHpMblJsZUhRcE8xeHVYRzRnSUNBZ2ZWeHVmVnh1SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdRMkZ5WkVKMWRIUnZiaUJsZUhSbGJtUnpJRkJvWVhObGNpNUNkWFIwYjI0Z2UxeHVYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9leUJuWVcxbExDQjRMQ0I1TENCaGMzTmxkQ3dnWTJGc2JHSmhZMnNzSUdOaGJHeGlZV05yUTI5dWRHVjRkQ3dnYjNabGNrWnlZVzFsTENCdmRYUkdjbUZ0WlN3Z1pHOTNia1p5WVcxbExDQjFjRVp5WVcxbExIWmhiSFZsTENCcGMwTnNhV1Z1ZEgwcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHTmhiR3hpWVdOckxDQmpZV3hzWW1GamEwTnZiblJsZUhRc0lHOTJaWEpHY21GdFpTd2diM1YwUm5KaGJXVXNJR1J2ZDI1R2NtRnRaU3dnZFhCR2NtRnRaU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmlBZ0lDQWdJQ0FnTHk4Z2RHaHBjeTV6WTJGc1pTNXpaWFJVYnlnd0xqa3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTmhiR3hpWVdOcklEMGdZMkZzYkdKaFkyczdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRtRnNkV1VnUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBjME5zYVdWdWRDQTlJR2x6UTJ4cFpXNTBPMXh1SUNBZ0lIMWNibjFjYmlJc0ltbHRjRzl5ZENBcUlHRnpJSE4wWVhSbGN5Qm1jbTl0SUNjdUwzTjBZWFJsY3ljN1hHNWpiMjV6ZENCSFFVMUZJRDBnYm1WM0lGQm9ZWE5sY2k1SFlXMWxLREV5TURBc0lEWTRNQ3dnVUdoaGMyVnlMa0ZWVkU4cE8xeHVYRzVQWW1wbFkzUXVhMlY1Y3loemRHRjBaWE1wTG1admNrVmhZMmdvYzNSaGRHVWdQVDRnUjBGTlJTNXpkR0YwWlM1aFpHUW9jM1JoZEdVc0lITjBZWFJsYzF0emRHRjBaVjBwS1R0Y2JseHVSMEZOUlM1emRHRjBaUzV6ZEdGeWRDZ25RbTl2ZENjcE8xeHVJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FuVnNiR1YwSUdWNGRHVnVaSE1nVUdoaGMyVnlMbE53Y21sMFpTQjdYRzVjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWg3SUdkaGJXVXNJSGdzSUhrc0lHRnpjMlYwTENCb1pXRnNkR2dzSUhScGJuUWdQU0F3ZUdabU1EQXdNQ0I5S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0dkaGJXVXNJSGdzSUhrc0lHRnpjMlYwS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qWVd4bExuTmxkRlJ2S0RBdU9DazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHVmhiSFJvSUQwZ2FHVmhiSFJvTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblJwYm5RZ1BTQjBhVzUwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU5vWldOclYyOXliR1JDYjNWdVpITWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG05MWRFOW1RbTkxYm1SelMybHNiQ0E5SUhSeWRXVTdYRzRnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUVKMWJHeGxkQ0JtY205dElDY3VMMkoxYkd4bGRDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFVnVaVzE1SUdWNGRHVnVaSE1nVUdoaGMyVnlMbE53Y21sMFpTQjdYRzVjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWg3SUdkaGJXVXNJSGdzSUhrc0lHRnpjMlYwTENCbWNtRnRaU3dnYUdWaGJIUm9MQ0JpZFd4c1pYUlRjR1ZsWkN4emFYcGxJSDBwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvWjJGdFpTd2dlQ3dnZVN3Z1lYTnpaWFFzSUdaeVlXMWxLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVZ1BTQm5ZVzFsTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WVc1amFHOXlMbk5sZEZSdktEQXVOU2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5OXphWHBsSUQwZ2MyTmhiR1ZjYmlBZ0lDQWdJQ0FnZEdocGN5NXphWHBsSUQwZ2MybDZaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpZMkZzWlM1elpYUlVieWh6YVhwbEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1pXRnNkR2dnUFNCb1pXRnNkR2c3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV0Y0U0dWaGJIUm9JRDBnYUdWaGJIUm9PMXh1WEc1Y2JpQWdJQ0FnSUNBZ0x5OUhjbUYyYVhSNVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXdhSGx6YVdOekxtRnlZMkZrWlM1bGJtRmliR1VvZEdocGN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzVqYjJ4c2FXUmxWMjl5YkdSQ2IzVnVaSE1nUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1WjNKaGRtbDBlUzU1SUQwZ05UQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1WW05MWJtTmxMbk5sZENneEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtRnVhVzFoZEdsdmJuTXVZV1JrS0NkemNHbHVibWx1Wnljc0lGc3dMQ0F4TENBeUxDQXpMQ0EwTENBMUxDQTJMQ0EzTENBNExDQTVMQ0F4TUN3Z01URXNJREV5TENBeE15d2dNVFJkTENBek1Dd2dkSEoxWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVTZ25jM0JwYm01cGJtY25LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUoxYkd4bGRITWdQU0IwYUdsekxtZGhiV1V1WVdSa0xtZHliM1Z3S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBjeTVsYm1GaWJHVkNiMlI1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSVGNHVmxaQ0E5SUdKMWJHeGxkRk53WldWa08xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyaHZkRk52ZFc1a0lEMGdkR2hwY3k1bllXMWxMbUZrWkM1emIzVnVaQ2duWlc1bGJYbFRhRzkwSnlrN1hHNWNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1VvS1NCN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjRzl6YVhScGIyNHVlQ0E4SURBdU1EUWdLaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVkMmxrZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjRzl6YVhScGIyNHVlQ0E5SURBdU1EUWdLaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVkMmxrZEdnZ0t5QXlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxuWmxiRzlqYVhSNUxuZ2dLajBnTFRFN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCcFppQW9kR2hwY3k1d2IzTnBkR2x2Ymk1NElENGdNQzQ1TmlBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1M2FXUjBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2IzTnBkR2x2Ymk1NElEMGdNQzQ1TmlBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1M2FXUjBhQ0F0SURJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1ZG1Wc2IyTnBkSGt1ZUNBcVBTQXRNVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQnZjMmwwYVc5dUxua2dMU0IwYUdsekxtaGxhV2RvZENBdklESWdQaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVhR1ZwWjJoMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbXRwYkd3b0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1Y2JpQWdJQ0JrWVcxaFoyVW9ZVzF2ZFc1MEtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxtUmhiV0ZuWlNoaGJXOTFiblFwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsYzJWMEtIc2dlQ3dnZVN3Z2FHVmhiSFJvTENCaWRXeHNaWFJUY0dWbFpDd2djM0JsWldRZ2ZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXlaWE5sZENoNExDQjVMQ0JvWldGc2RHZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEZOd1pXVmtJRDBnWW5Wc2JHVjBVM0JsWldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNTJaV3h2WTJsMGVTNTRJRDBnYzNCbFpXUXVlRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG5abGJHOWphWFI1TG5rZ1BTQnpjR1ZsWkM1NU8xeHVJQ0FnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0JRYkdGNVpYSWdabkp2YlNBbkxpNHZjMmh2YjNSbGNpOXdiR0Y1WlhJbk8xeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nU0hWa0lHVjRkR1Z1WkhNZ1VHaGhjMlZ5TGtkeWIzVndJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWg3SUdkaGJXVXNJSEJzWVhsbGNpQjlLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLR2RoYldVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVWdQU0JuWVcxbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxjaUE5SUhCc1lYbGxjanRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlaeUE5SUc1bGR5QlFhR0Z6WlhJdVNXMWhaMlVvZEdocGN5NW5ZVzFsTENBd0xDQXdMQ0FuYUhWa1FtY25LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTNhV1IwYUNBOUlEZ3dNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9aV0ZzZEdoaVlYSWdQU0J1WlhjZ1VHaGhjMlZ5TGxOd2NtbDBaU2gwYUdsekxtZGhiV1VzSURJc0lESXNJQ2RvWldGc2RHaGlZWEluS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWldGc2RHaGlZWEl1YzJOaGJHVXVjMlYwVkc4b01DNDVPVFVzSURFeEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psSUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elkyOXlaVXhoWW1Wc0lEMGdKMU5qYjNKbE9pQW5PMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psVkdWNGRDQTlJRzVsZHlCUWFHRnpaWEl1VkdWNGRDaDBhR2x6TG1kaGJXVXNJREl3TENBeE5Dd2dkR2hwY3k1elkyOXlaVXhoWW1Wc0lDc2dkR2hwY3k1elkyOXlaU3dnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ0p6RXpjSGdnVm1WeVpHRnVZU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1hV3hzT2lBbmQyaHBkR1VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZV3hwWjI0NklDZGpaVzUwWlhJblhHNWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWkdRb2RHaHBjeTVpWnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVdSa0tIUm9hWE11YUdWaGJIUm9ZbUZ5S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWkdRb2RHaHBjeTV6WTI5eVpWUmxlSFFwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFZ3WkdGMFpVaGxZV3gwYUNod2JHRjVaWElwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWldGc2RHaGlZWEl1WTNKdmNDaHVaWGNnVUdoaGMyVnlMbEpsWTNSaGJtZHNaU2d3TENBd0xDQW9kR2hwY3k1d2JHRjVaWEl1YUdWaGJIUm9JQzhnZEdocGN5NXdiR0Y1WlhJdWJXRjRTR1ZoYkhSb0tTQXFJSFJvYVhNdWQybGtkR2dzSURFd0tTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHVmhiSFJvWW1GeUxuVndaR0YwWlVOeWIzQW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjFjR1JoZEdWVFkyOXlaU2hoYlc5MWJuUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpZMjl5WlNBclBTQmhiVzkxYm5RN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOdmNtVlVaWGgwTG5SbGVIUWdQU0IwYUdsekxuTmpiM0psVEdGaVpXd2dLeUFvZEdocGN5NXpZMjl5WlNBcUlERXdLVHRjYmlBZ0lDQjlYRzVjYm4wN1hHNGlMQ0pwYlhCdmNuUWdRblZzYkdWMElHWnliMjBnSnk0dUwzQmhibWN2WW5Wc2JHVjBKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdSVzVsYlhrZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNCeWFYUmxJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hzZ1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHWnlZVzFsTENCb1pXRnNkR2dzSUdKMWJHeGxkRk53WldWa0lIMHBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9aMkZ0WlN3Z2VDd2dlU3dnWVhOelpYUXNJR1p5WVcxbEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1VnUFNCbllXMWxPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZVzVqYUc5eUxuTmxkRlJ2S0RBdU5TazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTmhiR1V1YzJWMFZHOG9NQzQ0S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWldGc2RHZ2dQU0JvWldGc2RHZzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXRjRTR1ZoYkhSb0lEMGdhR1ZoYkhSb08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjR2g1YzJsamN5NWhjbU5oWkdVdVpXNWhZbXhsS0hSb2FYTXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZVzVwYldGMGFXOXVjeTVoWkdRb0ozTndhVzV1YVc1bkp5d2dXekFzSURFc0lESXNJRE1zSURRc0lEVXNJRFlzSURjc0lEZ3NJRGtzSURFd0xDQXhNU3dnTVRJc0lERXpMQ0F4TkYwc0lETXdMQ0IwY25WbEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVLQ2R6Y0dsdWJtbHVaeWNwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBjeUE5SUhSb2FYTXVaMkZ0WlM1aFpHUXVaM0p2ZFhBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJ6TG1WdVlXSnNaVUp2WkhrZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUoxYkd4bGRGTndaV1ZrSUQwZ1luVnNiR1YwVTNCbFpXUTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXphRzkwVTI5MWJtUWdQU0IwYUdsekxtZGhiV1V1WVdSa0xuTnZkVzVrS0NkbGJtVnRlVk5vYjNRbktUdGNibHh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlNncElIdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV3YjNOcGRHbHZiaTU0SUR3Z01DNHdOQ0FxSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzUzYVdSMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3YjNOcGRHbHZiaTU0SUQwZ01DNHdOQ0FxSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzUzYVdSMGFDQXJJREk3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1KdlpIa3VkbVZzYjJOcGRIa3VlQ0FxUFNBdE1UdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElHbG1JQ2gwYUdsekxuQnZjMmwwYVc5dUxuZ2dQaUF3TGprMklDb2dkR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQnZjMmwwYVc5dUxuZ2dQU0F3TGprMklDb2dkR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvSUMwZ01qdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1MlpXeHZZMmwwZVM1NElDbzlJQzB4TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjRzl6YVhScGIyNHVlU0F0SUhSb2FYTXVhR1ZwWjJoMElDOGdNaUErSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVvWldsbmFIUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YTJsc2JDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMmh2YjNRb0tTQjdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXphRzkwVTI5MWJtUXVjR3hoZVNoY0lsd2lMREFzTUM0MUtUdGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ1luVnNiR1YwSUQwZ2RHaHBjeTVpZFd4c1pYUnpMbWRsZEVacGNuTjBSWGhwYzNSektHWmhiSE5sS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvSVdKMWJHeGxkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZblZzYkdWMElEMGdibVYzSUVKMWJHeGxkQ2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVlQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMbUp2ZEhSdmJTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9aV0ZzZEdnNklESXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkV3hzWlhRbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnBiblE2SURCNFptWXdNREF3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBjeTVoWkdRb1luVnNiR1YwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRDNXlaWE5sZENoMGFHbHpMbmdzSUhSb2FYTXVZbTkwZEc5dExDQXlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHSjFiR3hsZEM1aWIyUjVMblpsYkc5amFYUjVMbmtnUFNCMGFHbHpMbUoxYkd4bGRGTndaV1ZrTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1JoYldGblpTaGhiVzkxYm5RcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdVpHRnRZV2RsS0dGdGIzVnVkQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6WlhRb2V5QjRMQ0I1TENCb1pXRnNkR2dzSUdKMWJHeGxkRk53WldWa0xDQnpjR1ZsWkNCOUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuSmxjMlYwS0hnc0lIa3NJR2hsWVd4MGFDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwVTNCbFpXUWdQU0JpZFd4c1pYUlRjR1ZsWkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxuWmxiRzlqYVhSNUxuZ2dQU0J6Y0dWbFpDNTRPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1ZG1Wc2IyTnBkSGt1ZVNBOUlITndaV1ZrTG5rN1hHNGdJQ0FnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJRUoxYkd4bGRDQm1jbTl0SUNjdUxpOXdZVzVuTDJKMWJHeGxkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJzWVhsbGNpQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGNISnBkR1VnZTF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2V5Qm5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dabkpoYldVc0lHaGxZV3gwYUNCOUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtHZGhiV1VzSUhnc0lIa3NJR0Z6YzJWMExDQm1jbUZ0WlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxJRDBnWjJGdFpUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtRnVZMmh2Y2k1elpYUlVieWd3TGpVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OallXeGxMbk5sZEZSdktEQXVPQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWldGc2RHZ2dQU0JvWldGc2RHZzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXRjRTR1ZoYkhSb0lEMGdhR1ZoYkhSb08xeHVYRzVjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWNHaDVjMmxqY3k1aGNtTmhaR1V1Wlc1aFlteGxLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQXZMMmR5WVhacGRIbGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWIyUjVMbWR5WVhacGRIa3VlU0E5SURFd01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWIyUjVMbU52Ykd4cFpHVlhiM0pzWkVKdmRXNWtjeUE5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQzh2WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUnpJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNW5jbTkxY0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMWJHeGxkSE11Wlc1aFlteGxRbTlrZVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMFUzQmxaV1FnUFNBdE5UQXdPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMmh2ZEZOdmRXNWtJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNXpiM1Z1WkNnbmNHeGhlV1Z5VTJodmRDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlNncElIdGNibHh1SUNBZ0lDQWdJQ0F2THlCMGFHbHpMbWRoYldVdVpHVmlkV2N1WW05a2VTaDBhR2x6S1R0Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnTHk4Z2FXWWdLSFJvYVhNdVoyRnRaUzVwYm5CMWRDNWhZM1JwZG1WUWIybHVkR1Z5TG1selJHOTNiaWtnZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JHVm1kRXRsZVNBOUlIUm9hWE11WjJGdFpTNXBibkIxZEM1clpYbGliMkZ5WkM1cGMwUnZkMjRvVUdoaGMyVnlMa3RsZVdKdllYSmtMa3hGUmxRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElISnBaMmgwUzJWNUlEMGdkR2hwY3k1bllXMWxMbWx1Y0hWMExtdGxlV0p2WVhKa0xtbHpSRzkzYmloUWFHRnpaWEl1UzJWNVltOWhjbVF1VWtsSFNGUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9iR1ZtZEV0bGVTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1NElDMDlJRFk3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNjMlVnYVdZb2NtbG5hSFJMWlhrcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZUNBclBTQTJPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQjlYRzVjYmlBZ0lDQnphRzl2ZENncElIdGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ1luVnNiR1YwSUQwZ2RHaHBjeTVpZFd4c1pYUnpMbWRsZEVacGNuTjBSWGhwYzNSektHWmhiSE5sS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvSVdKMWJHeGxkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZblZzYkdWMElEMGdibVYzSUVKMWJHeGxkQ2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVlQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMblJ2Y0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx6TmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9aV0ZzZEdnNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkV3hzWlhRbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnBiblE2SURCNE1EUmpNVEV5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJR05vWVc1blpTQjBhR2x6SUc1MWJXSmxjaUIwYnlCemFHOXZkQ0JzWlhOeklHSjFiR3hsZEhNZ1lYUWdZU0IwYVcxbFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGFHbHpMbUoxYkd4bGRITXVZMmhwYkdSeVpXNHViR1Z1WjNSb0lEdzlJRFVwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMmh2ZEZOdmRXNWtMbkJzWVhrb1hDSmNJaXd3TERBdU5TazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJ6TG1Ga1pDaGlkV3hzWlhRcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZblZzYkdWMExtSnZaSGt1ZG1Wc2IyTnBkSGt1ZVNBOUlIUm9hWE11WW5Wc2JHVjBVM0JsWldRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5Ob2IzUlRiM1Z1WkM1d2JHRjVLRndpWENJc01Dd3dMalVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZblZzYkdWMExuSmxjMlYwS0hSb2FYTXVlQ3dnZEdocGN5NTBiM0FzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5Wc2JHVjBMbUp2WkhrdWRtVnNiMk5wZEhrdWVTQTlJSFJvYVhNdVluVnNiR1YwVTNCbFpXUTdYRzRnSUNBZ0lDQWdJSDFjYmx4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWkdGdFlXZGxLR0Z0YjNWdWRDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNWtZVzFoWjJVb1lXMXZkVzUwS1R0Y2JpQWdJQ0I5WEc1Y2JuMWNiaUlzSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFSnZiM1FnWlhoMFpXNWtjeUJRYUdGelpYSXVVM1JoZEdVZ2UxeHVYRzRnSUNBZ2NISmxiRzloWkNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbk4wWVdkbExtSmhZMnRuY205MWJtUkRiMnh2Y2lBOUlDY2pNREF3Snp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtbHRZV2RsS0Nkc2IyRmtaWEpDWnljc0lDZHBiV2N2Ykc5aFpHVnlMV0puTG5CdVp5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YVcxaFoyVW9KMnh2WVdSbGNrSmhjaWNzSUNkcGJXY3ZiRzloWkdWeUxXSmhjaTV3Ym1jbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCamNtVmhkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOaGJHVXVjMk5oYkdWTmIyUmxJRDBnVUdoaGMyVnlMbE5qWVd4bFRXRnVZV2RsY2k1VFNFOVhYMEZNVER0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OallXeGxMbkJoWjJWQmJHbG5ia2h2Y21sNmIyNTBZV3hzZVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk5oYkdVdWNHRm5aVUZzYVdkdVZtVnlkR2xqWVd4c2VTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXdhSGx6YVdOekxuTjBZWEowVTNsemRHVnRLRkJvWVhObGNpNVFhSGx6YVdOekxrRlNRMEZFUlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0oxQnlaV3h2WVdRbktUdGNiaUFnSUNCOVhHNWNibjFjYmlJc0ltVjRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QkNiMjkwZlNCbWNtOXRJQ2N1TDJKdmIzUW5PMXh1Wlhod2IzSjBJSHRrWldaaGRXeDBJR0Z6SUZCeVpXeHZZV1I5SUdaeWIyMGdKeTR2Y0hKbGJHOWhaQ2M3WEc1bGVIQnZjblFnZTJSbFptRjFiSFFnWVhNZ1RXVnVkWDBnWm5KdmJTQW5MaTl0Wlc1MUp6dGNiaTh2WjJGdFpURmNibVY0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJRYkdGNWZTQm1jbTl0SUNjdUwzTm9iMjkwWlhJdmNHeGhlU2M3WEc1bGVIQnZjblFnZTJSbFptRjFiSFFnWVhNZ1QzWmxjbjBnWm5KdmJTQW5MaTl6YUc5dmRHVnlMMjkyWlhJbk8xeHVYRzR2TDNCaGJtZENkRzVjYm1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCUWJHRjVVR0Z1WjMwZ1puSnZiU0FuTGk5d1lXNW5MM0JzWVhsUVlXNW5KenRjYm1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCUVlXNW5UM1psY24wZ1puSnZiU0FuTGk5d1lXNW5MM0JoYm1kUGRtVnlKenRjYmx4dUx5OW5ZVzFsTTF4dVpYaHdiM0owSUh0a1pXWmhkV3gwSUdGeklGQnNZWGxRWVdseWMzMGdabkp2YlNBbkxpOXdZV2x5Y3k5d2JHRjVVR0ZwY25Nbk8xeHVaWGh3YjNKMElIdGtaV1poZFd4MElHRnpJRkJoYVhKelQzWmxjbjBnWm5KdmJTQW5MaTl3WVdseWN5OXdZV2x5YzA5MlpYSW5PMXh1SWl3aWFXMXdiM0owSUZSbGVIUkNkWFIwYjI0Z1puSnZiU0FuTGk0dlpYaDBaVzV6YVc5dWN5OXRaVzUxTDNSbGVIUmlkWFIwYjI0bk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCTlpXNTFJR1Y0ZEdWdVpITWdVR2hoYzJWeUxsTjBZWFJsSUh0Y2JseHVJQ0FnSUdOeVpXRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVhSc1pTQTlJRzVsZHlCUWFHRnpaWEl1VkdWNGRDaDBhR2x6TG1kaGJXVXNJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V1MweU1EQXNJQ2REYUc5dmMyVWdZU0JuWVcxbElTY3NJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZiblE2SUNjek5uQjRJRlJoYUc5dFlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUFuZDJocGRHVW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lXeHBaMjQ2SUNkalpXNTBaWEluWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGRHeGxMbUZ1WTJodmNpNXpaWFJVYnlnd0xqVXBPMXh1SUNBZ0lDQWdJQ0F2THlCMGFHbHpMbTExYzJsaklEMGdkR2hwY3k1bllXMWxMbUZrWkM1aGRXUnBieWduYldWdWRVMTFjMmxqSnlrN1hHNWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteGxablJDZEc0Z1BTQnVaWGNnVkdWNGRFSjFkSFJ2YmloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0NBdElESXdNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RpZFhSMGIyNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzWmxja1p5WVcxbE9pQXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzVjBSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IzZHVSbkpoYldVNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2RNWldaMFFuUnVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkRG9nSnpFMmNIZ2dWbVZ5WkdGdVlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVTkyWlhJbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNVBkWFJUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxVDNWMEp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WRWIzZHVKeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzWldaMFFuUnVMbk5sZEU5MlpYSlRiM1Z1WkNoMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YkdWbWRFSjBiaTV6WlhSUGRYUlRiM1Z1WkNoMGFHbHpMbUowYms5MWRGTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzWldaMFFuUnVMbk5sZEVSdmQyNVRiM1Z1WkNoMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c1pXWjBRblJ1TG05dVNXNXdkWFJWY0M1aFpHUW9LQ2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2ZEdocGN5NXRkWE5wWXk1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZFFiR0Y1VUdGcGNuTW5LVHRjYmx4dUlDQWdJQ0FnSUNCOUtUdGNibHh1WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdVMlZqYjI1a0lFSjBibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowSUQwZ2JtVjNJRlJsZUhSQ2RYUjBiMjRvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGdzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdGemMyVjBPaUFuWW5WMGRHOXVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHOTJaWEpHY21GdFpUb2dNaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHOTFkRVp5WVcxbE9pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOTNia1p5WVcxbE9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RYQkdjbUZ0WlRvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUd4aFltVnNPaUFuVTNSaGNuUW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTVRad2VDQldaWEprWVc1aEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hzT2lBbmQyaHBkR1VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGc2FXZHVPaUFuWTJWdWRHVnlKMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1psY2ljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrOTFkRk52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZQZFhRbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNUViM2R1VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFVSdmQyNG5LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMExuTmxkRTkyWlhKVGIzVnVaQ2gwYUdsekxtSjBiazkyWlhKVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RdWMyVjBUM1YwVTI5MWJtUW9kR2hwY3k1aWRHNVBkWFJUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YzJWMFJHOTNibE52ZFc1a0tIUm9hWE11WW5SdVJHOTNibE52ZFc1a0tUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowTG05dVNXNXdkWFJWY0M1aFpHUW9LQ2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2ZEdocGN5NXRkWE5wWXk1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZFFiR0Y1SnlrN1hHNWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUM4dklIUm9hWEprSUVKMGJseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CaGJtZENkRzRnUFNCdVpYY2dWR1Y0ZEVKMWRIUnZiaWg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm5ZVzFsT2lCMGFHbHpMbWRoYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXQ0FySURJd01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNabGNrWnlZVzFsT2lBeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMFJuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjNkdVJuSmhiV1U2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0VaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR0ZpWld3NklDZFFZVzVuTFd4cGEyVWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkRG9nSnpFMmNIZ2dWbVZ5WkdGdVlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVTkyWlhJbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNVBkWFJUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxVDNWMEp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WRWIzZHVKeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3WVc1blFuUnVMbk5sZEU5MlpYSlRiM1Z1WkNoMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0dGdVowSjBiaTV6WlhSUGRYUlRiM1Z1WkNoMGFHbHpMbUowYms5MWRGTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3WVc1blFuUnVMbk5sZEVSdmQyNVRiM1Z1WkNoMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1d1lXNW5RblJ1TG05dVNXNXdkWFJWY0M1aFpHUW9LQ2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2ZEdocGN5NXRkWE5wWXk1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZFFiR0Y1VUdGdVp5Y3BPMXh1WEc1Y2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmx4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRWQmhibVZzSUQwZ2RHaHBjeTVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MVVHRnVaV3d1WVdSa0tIUm9hWE11ZEdsMGJHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblZRWVc1bGJDNWhaR1FvZEdocGN5NXNaV1owUW5SdUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFpXNTFVR0Z1Wld3dVlXUmtLSFJvYVhNdWMzUmhjblFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5WUVlXNWxiQzVoWkdRb2RHaHBjeTV3WVc1blFuUnVLVHRjYmx4dUlDQWdJQ0FnSUNBdkwzUm9hWE11YlhWemFXTXViRzl2Y0VaMWJHd29LVHRjYmlBZ0lDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ1ZHVjRkRUoxZEhSdmJpQm1jbTl0SUNjdUxpOHVMaTlsZUhSbGJuTnBiMjV6TDIxbGJuVXZkR1Y0ZEdKMWRIUnZiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJoYm1kUGRtVnlJR1Y0ZEdWdVpITWdVR2hoYzJWeUxsTjBZWFJsSUh0Y2JseHVJQ0FnSUdOeVpXRjBaU2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VkdsMGJHVWdQU0J1WlhjZ1VHaGhjMlZ5TGxSbGVIUW9kR2hwY3k1bllXMWxMQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDd2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrdE1qQXdMQ0FuVUdGdVp5QkhZVzFsSUc5MlpYSW5MQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk16WndlQ0JVWVdodmJXRW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xScGRHeGxMbUZ1WTJodmNpNXpaWFJVYnlnd0xqVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RZ1BTQnVaWGNnVkdWNGRFSjFkSFJ2YmloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSlpMVE13TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNabGNrWnlZVzFsT2lBeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMFJuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjNkdVJuSmhiV1U2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0VaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR0ZpWld3NklDZFVjbmtnWVdkaGFXNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTVRad2VDQldaWEprWVc1aEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hzT2lBbmQyaHBkR1VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGc2FXZHVPaUFuWTJWdWRHVnlKMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VZ1BTQnVaWGNnVkdWNGRFSjFkSFJ2YmloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSlpLek13TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNabGNrWnlZVzFsT2lBeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMFJuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjNkdVJuSmhiV1U2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0VaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR0ZpWld3NklDZE5aVzUxSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ0p6RTJjSGdnVm1WeVpHRnVZU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1sc2JEb2dKM2RvYVhSbEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ0oyTmxiblJsY2lkY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFU5MlpYSW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVQZFhSVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R0Wlc1MVQzVjBKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1Ukc5M2JsTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjIxbGJuVkViM2R1SnlrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV6WlhSUGRtVnlVMjkxYm1Rb2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEU5MWRGTnZkVzVrS0hSb2FYTXVZblJ1VDNWMFUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMExuTmxkRVJ2ZDI1VGIzVnVaQ2gwYUdsekxtSjBia1J2ZDI1VGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFM1elpYUlBkbVZ5VTI5MWJtUW9kR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblV1YzJWMFQzVjBVMjkxYm1Rb2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXViMjVKYm5CMWRFUnZkMjR1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZFFiR0Y1VUdGdVp5Y3BPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVXViMjVKYm5CMWRFUnZkMjR1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZE5aVzUxSnlrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlFZVzVsYkNBOUlIUm9hWE11WVdSa0xtZHliM1Z3S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpRWVc1bGJDNWhaR1FvZEdocGN5NW5ZVzFsVDNabGNsUnBkR3hsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxuTjBZWEowS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxtMWxiblVwTzF4dUlDQWdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQkRZWEprUW5WMGRHOXVJR1p5YjIwZ0p5NHVMeTR1TDJWNGRHVnVjMmx2Ym5NdmNHRnBjbk12WTJGeVpHSjFkSFJ2YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCc1lYbFFZV2x5Y3lCbGVIUmxibVJ6SUZCb1lYTmxjaTVUZEdGMFpTQjdYRzVjYmlBZ0lDQmpjbVZoZEdVb0tTQjdYRzVjYmlBZ0lDQWdJQ0FnTHk5MGFHbHpMbUpuSUQwZ2RHaHBjeTVoWkdRdWRHbHNaVk53Y21sMFpTZ3dMQ0F3TERZMk5pdzJNREFzSUNkd1lXNW5RbWNuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZV2RsTG1KaFkydG5jbTkxYm1SRGIyeHZjaUE5SUNjak5HVmtNR1V4Snp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpWnlBOUlIUm9hWE11WjJGdFpTNWhaR1F1YVcxaFoyVW9NQ3dnTUN3Z0oySm5KeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViblZ0VW05M2N5QTlJRFE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViblZ0UTI5c2N5QTlJRFU3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkR2xzWlZOcGVtVWdQU0F4TlRVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEdsc1pWTndZV05wYm1jZ1BTQTFPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUnBiR1Z6VEdWbWRDQTlJQ2gwYUdsekxtNTFiVkp2ZDNNZ0tpQjBhR2x6TG01MWJVTnZiSE1wTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW1GamEwOW1WR2hsUTJGeVpDQTlJREV3TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdLaUJEYkdsbGJuUnpJSE4wWVhKMGN5QmhkQ0J3YjNOcGRHbHZiaUF4TUNBb1kyOTFiblFnYzNCaFkyVnpJR2x1SUhOd2NtbDBaVk5vWldWMEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnS2lBeE15QTlJRWR2YjJkc1pWeHVJQ0FnSUNBZ0lDQWdJQ0FnS2lBeE5DQTlJRUZ0WVhwdmJseHVJQ0FnSUNBZ0lDQWdJQ0FnS2lBeE5TQTlJRU5oY0dsMFlXeFBibVZjYmlBZ0lDQWdJQ0FnSUNBZ0lDb2dNVFlnUFNCSGIyeGtiV0Z1SUZOaFkyaHpYRzRnSUNBZ0lDQWdJQ0FnSUNBcUlERTNJRDBnUVdOalpXNTBkWEpsWEc0Z0lDQWdJQ0FnSUNBZ0lDQXFJREU0SUQwZ1EyRndaMlZ0YVc1cFhHNGdJQ0FnSUNBZ0lDQWdJQ0FxSURFNUlEMGdVRmREWEc0Z0lDQWdJQ0FnSUNBZ0lDQXFJREUzSUQwZ0xpNHVYRzRnSUNBZ0lDQWdJQ0FnSUNBcUlERTRJRDBnTGk0dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FxSURFNUlEMGdMaTR1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXFJREl3SUQwZ0xpNHVYRzRnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Ob2IzTmxia05zYVdWdWRDQTlJREV6TzF4dVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1allYSmtSM0p2ZFhBZ1BTQjBhR2x6TG1Ga1pDNW5jbTkxY0NncE8xeHVJQ0FnSUNBZ0lDQXZMM05sZENCcGRDQjBieUJ2Ym1VZ2JXbHVkWFJsSUNnMk1DbGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGFXMWxUR1ZtZENBOUlEWXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psSUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b2FXZG9VMk52Y21VZ1BTQXdPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMkZ5WkhOQmNuSmhlU0E5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVNBOUlGdGRPMXh1WEc1Y2JpQWdJQ0FnSUNBZ0x5OHRMUzB0TFMwZ1NGVkVJRkpGVEVGVVJVUWdVMVJWUmtaY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMGVXeGxJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ1hDSXpNbkI0SUVobGJIWmxkR2xqWVZ3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm1sc2JEb2dYQ0lqTURCbVpqQXdYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ1hDSmpaVzUwWlhKY0lseHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psVkdWNGRDQTlJSFJvYVhNdVlXUmtMblJsZUhRb05Td2dOU3dnWENKVFkyOXlaVG9nWENJZ0t5QjBhR2x6TG5OamIzSmxMQ0IwYUdsekxuTjBlV3hsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVcxbFZHVjRkQ0E5SUhSb2FYTXVZV1JrTG5SbGVIUW9OU3dnZEdocGN5NW5ZVzFsTG1obGFXZG9kQ0F0SURVc0lGd2lWR2x0WlNCc1pXWjBPaUJjSWlBcklIUm9hWE11ZEdsdFpVeGxablFzSUhSb2FYTXVjM1I1YkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGJXVlVaWGgwTG1GdVkyaHZjaTV6WlhRb01Dd3hLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWRHbHRaUzVsZG1WdWRITXViRzl2Y0NoUWFHRnpaWEl1VkdsdFpYSXVVMFZEVDA1RUxDQjBhR2x6TG1SbFkzSmxZWE5sVkdsdFpTeDBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lXTmxRMkZ5WkhNb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpFMWxiblVvS1R0Y2JseHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFTjFjM1J2YlNCbWRXNWpkR2x2Ym5OY2JpQWdJQ0JzYjJGa1RXVnVkU2dwZTF4dUlDQWdJQ0FnSUNCc1pYUWdaWE5qUzJWNUlEMGdkR2hwY3k1bllXMWxMbWx1Y0hWMExtdGxlV0p2WVhKa0xtbHpSRzkzYmloUWFHRnpaWEl1UzJWNVltOWhjbVF1UlZOREtUdGNiaUFnSUNBZ0lDQWdhV1lvWlhOalMyVjVLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpkR0YwWlM1emRHRnlkQ2duVFdWdWRTY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaR1ZqY21WaGMyVlVhVzFsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGJXVk1aV1owTFMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEdsdFpWUmxlSFF1ZEdWNGRDQTlJRndpVkdsdFpTQnNaV1owT2lCY0lpQXJJSFJvYVhNdWRHbHRaVXhsWm5RN1hHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWRHbHRaVXhsWm5RZ1BUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeTlEYUdGdVoyVWdkR2hwY3lCMGJ5QndZV2x5YzA5MlpYSmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1emRHRjBaUzV6ZEdGeWRDZ25VR0Z1WjA5MlpYSW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQndiR0ZqWlVOaGNtUnpLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0JzWldaMFUzQmhZMlVnUFNBb2RHaHBjeTVuWVcxbExuZHBaSFJvSUMwZ0tIUm9hWE11Ym5WdFEyOXNjeUFxSUhSb2FYTXVkR2xzWlZOcGVtVXBJQzBnS0NoMGFHbHpMbTUxYlVOdmJITWdMU0F4S1NBcUlGeDBkR2hwY3k1MGFXeGxVM0JoWTJsdVp5a3BMekk3WEc0Z0lDQWdJQ0FnSUd4bGRDQjBiM0JUY0dGalpTQWdQU0FvZEdocGN5NW5ZVzFsTG1obGFXZG9kQ0F0SUNoMGFHbHpMbTUxYlZKdmQzTWdLaUIwYUdsekxuUnBiR1ZUYVhwbEtTQXRJQ2dvZEdocGN5NXVkVzFTYjNkeklDMGdNU2tnS2lCY2RIUm9hWE11ZEdsc1pWTndZV05wYm1jcEtTOHlPMXh1WEc0Z0lDQWdJQ0FnSUM4dkxTMGdVRzl3ZFd4aGRHVWdZWEp5WVhrZ2QybDBhQ0J3WVdseWN5QnZaaUJ1ZFcxaVpYSnpJRnN4TERFc01pd3lMRE1zTXl3MExEUXNMaTR1WFZ4dUlDQWdJQ0FnSUNCbWIzSW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTUwYVd4bGMweGxablE3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqWVhKa2MwRnljbUY1TG5CMWMyZ29UV0YwYUM1bWJHOXZjaWhwSUM4Z01pa3BPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OHRMU0JTWVc1a2IyMXBlbVVnTHlCdGFYZ2dkR2hsSUdGeWNtRjVYRzRnSUNBZ0lDQWdJR1p2Y2loc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxuUnBiR1Z6VEdWbWREc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1puSnZiU0E5SUNCMGFHbHpMbWRoYldVdWNtNWtMbUpsZEhkbFpXNG9NQ3dnZEdocGN5NWpZWEprYzBGeWNtRjVMbXhsYm1kMGFDMHhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0IwYnlBZ0lEMGdJSFJvYVhNdVoyRnRaUzV5Ym1RdVltVjBkMlZsYmlnd0xDQjBhR2x6TG1OaGNtUnpRWEp5WVhrdWJHVnVaM1JvTFRFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIUmxiWEFnUFNBZ2RHaHBjeTVqWVhKa2MwRnljbUY1VzJaeWIyMWRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OaGNtUnpRWEp5WVhsYlpuSnZiVjBnUFNCMGFHbHpMbU5oY21SelFYSnlZWGxiZEc5ZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpZWEprYzBGeWNtRjVXM1J2WFNBOUlIUmxiWEE3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeTB0SUVSbFlXd2dkR2hsSUdOaGNtUnpYRzRnSUNBZ0lDQWdJR1p2Y2loc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtNTFiVU52YkhNN0lHa3JLeWtnZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJb2JHVjBJR29nUFNBd095QnFJRHdnZEdocGN5NXVkVzFTYjNkek95QnFLeXNwSUh0Y2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdOaGNtUWdQU0J1WlhjZ1EyRnlaRUoxZEhSdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2diR1ZtZEZOd1lXTmxJQ3NnYVNBcUlDaDBhR2x6TG5ScGJHVlRhWHBsSUN0Y2RIUm9hWE11ZEdsc1pWTndZV05wYm1jcElDc2dOelVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJ2Y0ZOd1lXTmxJQ3NnYWlBcUlDaDBhR2x6TG5ScGJHVlRhWHBsSUNzZ2RHaHBjeTUwYVd4bFUzQmhZMmx1WnlrZ0t5QXhNREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBbmRHbHNaWE1uTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZV3hzWW1GamF6b2dkR2hwY3k1emFHOTNRMkZ5WkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZzYkdKaFkydERiMjUwWlhoME9pQjBhR2x6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiM2R1Um5KaGJXVTZJREV5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlRvZ2RHaHBjeTVqWVhKa2MwRnljbUY1VzJvZ0tpQjBhR2x6TG01MWJVTnZiSE1nS3lCcFhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhORGJHbGxiblE2SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1ZHaHBjeUJ3WVhKMElHbHpJSGRvWlhKbElIZGxJSFJoYTJVZ2RHaGxJR3hoYzNRZ1kyRnlaQ0JwYmlCdmRYSWdjM0J5YVhSbGMyaGxaWFFnWVc1a0lISmxjR3hoWTJVZ2FYUWdkMmwwYUNCaElHTnNhV1Z1ZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbHVJSFJvYVhNZ1kyRnpaU0IyWVd4MVpTQTVJR2x6SUhSb1pTQnNZWE4wSUhaaGJIVmxJRzltSUhSb1pTQW5jM1JoYm1SaGNtUW5JR05oY21SelhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9ZMkZ5WkM1MllXeDFaU0E5UFNBNUtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGeVpDNTJZV3gxWlNBOUlIUm9hWE11WTJodmMyVnVRMnhwWlc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVhKa0xtbHpRMnhwWlc1MElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZWEprTG1aeVlXMWxJRDBnZEdocGN5NWlZV05yVDJaVWFHVkRZWEprTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMkZ5WkVkeWIzVndMbUZrWkNoallYSmtLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lITm9iM2REWVhKa0tIUmhjbWRsZEVOaGNtUXBJSHRjYmlBZ0lDQWdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0tpQWdJSEIxYzJnZ2RHaGxJSFpoYkhWbGN5Qm1jbTl0SUhSb1pTQmpZWEprY3lCMGJ5QnZkWElnYzJWc1pXTjBaV1FnWVhKeVlYa2diMllnWTJGeVpITmNiaUFnSUNBZ0lDQWdLaUFnSUdsbUlIbHZkU0JvWVhabElHTm9iM05sYmlBeUxDQnNaWFFuY3lCamIyMXdZWEpsSUhSb1pXMGdkWE5wYm1jZ1kyaGxZMnRVYVd4bGMxeHVJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbk5sYkdWamRHVmtRMkZ5WkhOQmNuSmhlUzVzWlc1bmRHZ2dQQ0F5SUNZbUlIUm9hWE11YzJWc1pXTjBaV1JEWVhKa2MwRnljbUY1TG1sdVpHVjRUMllvZEdGeVoyVjBRMkZ5WkNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDFSUFJFOGdjMjkxYm1SelhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCcFppaHdiR0Y1VTI5MWJtUXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdJQ0FnSUhSb2FYTXVjMjkxYm1SQmNuSmhlVnN3WFM1d2JHRjVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZWEpuWlhSRFlYSmtMbVp5WVcxbElEMGdkR0Z5WjJWMFEyRnlaQzUyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMlZzWldOMFpXUkRZWEprYzBGeWNtRjVMbkIxYzJnb2RHRnlaMlYwUTJGeVpDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWMyVnNaV04wWldSRFlYSmtjMEZ5Y21GNUxteGxibWQwYUNBOVBUMGdNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1MGFXMWxMbVYyWlc1MGN5NWhaR1FvVUdoaGMyVnlMbFJwYldWeUxsTkZRMDlPUkN3Z2RHaHBjeTVqYUdWamExUnBiR1Z6TENCMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMmhsWTJ0VWFXeGxjeWdwSUh0Y2JpQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ29nSUNCRGFHVmpheUIwYUdVZ2FXWWdkR2hsSUhaaGJIVmxjeUJtY205dElHOTFjaUJ6Wld4bFkzUmxaRU5oY21SelFYSnlZWGtnWVhKbElHVnhkV0ZzWEc0Z0lDQWdJQ0FnSUNBcUlDQWdhV1lnYzI4c0lHRmtaQ0J6WTI5eVpTQmhibVFnYUdsa1pTQjBhR1Z0SUdaeWIyMGdkR2hsSUhWelpYSXVYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG5ObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVZzd1hTNTJZV3gxWlNBOVBUMGdkR2hwY3k1elpXeGxZM1JsWkVOaGNtUnpRWEp5WVhsYk1WMHVkbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDQWdJQ0FxSUZSUFJFOGdjMjkxYm1SelhHNGdJQ0FnSUNBZ0lDQWdJQ0FxSUdsbUtIUm9hWE11Y0d4aGVYTnZkVzVrS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ29nSUNCMGFHbHpMbk52ZFc1a1FYSnlZWGxiTVYwdWNHeGhlU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdLaUI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXFJQ292WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyTnZjbVVyS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRHbHRaVXhsWm5RZ0t6MGdNanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZEdsdFpWUmxlSFF1ZEdWNGRDQTlJRndpVkdsdFpTQnNaV1owT2lCY0lpQXJJSFJvYVhNdWRHbHRaVXhsWm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psVkdWNGRDNTBaWGgwSUQwZ1hDSlRZMjl5WlRvZ1hDSWdLeUIwYUdsekxuTmpiM0psTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVVQwUlBPaUJHYVhKbElIVndJSFJvWlNCbGRtVnVkQ0JwWmlCcGRITWdZU0JqYkdsbGJuUWdRMkZ5WkZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvZEdocGN5NXpaV3hsWTNSbFpFTmhjbVJ6UVhKeVlYbGJNRjB1YVhORGJHbGxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVpwY21WRGJHbGxiblJOWlhOellXZGxLRndpUTJ4cFpXNTBYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5ObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVZzd1hTNWtaWE4wY205NUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sYkdWamRHVmtRMkZ5WkhOQmNuSmhlVnN4WFM1a1pYTjBjbTk1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuUnBiR1Z6VEdWbWRDQXRQU0F5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCWGFXNGdZMjl1WkdsMGFXOXVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaDBhR2x6TG5ScGJHVnpUR1ZtZENBOVBUMGdNQ0FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU5oY21SelFYSnlZWGt1YkdWdVozUm9JRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sYkdWamRHVmtRMkZ5WkhOQmNuSmhlUzVzWlc1bmRHZ2dQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dmRHaHBjeTV3YkdGalpVTmhjbVJ6S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZWFJsTG5OMFlYSjBLQ2RRYkdGNVVHRnBjbk1uS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OVVUMFJQT2lCVGIzVnVaSE5jYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJR2xtS0hCc1lYbFRiM1Z1WkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlBZ0lDQWdkR2hwY3k1emIzVnVaRUZ5Y21GNVd6SmRMbkJzWVhrb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1allXMWxjbUV1YzJoaGEyVW9NQzR3TVN3Z01UQXdLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb1pYa2dZWEpsSUc1dmRDQjBhR1VnYzJGdFpTd2dabUZqWlNCMGFHVnRJRzltWmx4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1elpXeGxZM1JsWkVOaGNtUnpRWEp5WVhsYk1GMHVabkpoYldVZ1BTQjBhR2x6TG1KaFkydFBabFJvWlVOaGNtUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sYkdWamRHVmtRMkZ5WkhOQmNuSmhlVnN4WFM1bWNtRnRaU0E5SUhSb2FYTXVZbUZqYTA5bVZHaGxRMkZ5WkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVM1c1pXNW5kR2dnUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUdacGNtVkRiR2xsYm5STlpYTnpZV2RsS0dOc2FXVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCaGJHVnlkQ2hjSWxSb2FYTWdhWE1nWVNCdFpYTnpZV2RsSUdaeWIyMGdZU0JrWldaaGRXeDBJRU5zYVdWdWRGd2lLVHRjYmlBZ0lDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ1ZHVjRkRUoxZEhSdmJpQm1jbTl0SUNjdUxpOHVMaTlsZUhSbGJuTnBiMjV6TDIxbGJuVXZkR1Y0ZEdKMWRIUnZiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJoYm1kUGRtVnlJR1Y0ZEdWdVpITWdVR2hoYzJWeUxsTjBZWFJsSUh0Y2JseHVJQ0FnSUdOeVpXRjBaU2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VkdsMGJHVWdQU0J1WlhjZ1VHaGhjMlZ5TGxSbGVIUW9kR2hwY3k1bllXMWxMQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDd2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrdE1qQXdMQ0FuVUdGdVp5QkhZVzFsSUc5MlpYSW5MQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk16WndlQ0JVWVdodmJXRW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xScGRHeGxMbUZ1WTJodmNpNXpaWFJVYnlnd0xqVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RZ1BTQnVaWGNnVkdWNGRFSjFkSFJ2YmloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSlpMVE13TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNabGNrWnlZVzFsT2lBeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMFJuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjNkdVJuSmhiV1U2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0VaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR0ZpWld3NklDZFVjbmtnWVdkaGFXNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTVRad2VDQldaWEprWVc1aEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hzT2lBbmQyaHBkR1VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGc2FXZHVPaUFuWTJWdWRHVnlKMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VZ1BTQnVaWGNnVkdWNGRFSjFkSFJ2YmloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSlpLek13TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNabGNrWnlZVzFsT2lBeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMFJuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjNkdVJuSmhiV1U2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0VaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR0ZpWld3NklDZE5aVzUxSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ0p6RTJjSGdnVm1WeVpHRnVZU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1sc2JEb2dKM2RvYVhSbEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ0oyTmxiblJsY2lkY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFU5MlpYSW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVQZFhSVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R0Wlc1MVQzVjBKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1Ukc5M2JsTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjIxbGJuVkViM2R1SnlrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV6WlhSUGRtVnlVMjkxYm1Rb2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEU5MWRGTnZkVzVrS0hSb2FYTXVZblJ1VDNWMFUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMExuTmxkRVJ2ZDI1VGIzVnVaQ2gwYUdsekxtSjBia1J2ZDI1VGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFM1elpYUlBkbVZ5VTI5MWJtUW9kR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblV1YzJWMFQzVjBVMjkxYm1Rb2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXViMjVKYm5CMWRFUnZkMjR1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZFFiR0Y1VUdGdVp5Y3BPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVXViMjVKYm5CMWRFUnZkMjR1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZE5aVzUxSnlrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlFZVzVsYkNBOUlIUm9hWE11WVdSa0xtZHliM1Z3S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpRWVc1bGJDNWhaR1FvZEdocGN5NW5ZVzFsVDNabGNsUnBkR3hsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxuTjBZWEowS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxtMWxiblVwTzF4dUlDQWdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQlFiR0Y1WlhJZ1puSnZiU0FuTGk0dkxpNHZjSEpsWm1GaWN5OXphRzl2ZEdWeUwzQnNZWGxsY2ljN1hHNXBiWEJ2Y25RZ1JXNWxiWGtnWm5KdmJTQW5MaTR2TGk0dmNISmxabUZpY3k5d1lXNW5MMlZ1WlcxNVVHRnVaeWM3WEc1cGJYQnZjblFnU0ZWRUlHWnliMjBnSnk0dUx5NHVMM0J5WldaaFluTXZjR0Z1Wnk5b2RXUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiR0Y1VUdGdVp5QmxlSFJsYm1SeklGQm9ZWE5sY2k1VGRHRjBaU0I3WEc1Y2JpQWdJQ0JqY21WaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbWNnUFNCMGFHbHpMbUZrWkM1MGFXeGxVM0J5YVhSbEtEQXNJREFzSURJd01EQXNJREl6T0RBc0lDZHdZVzVuUW1jbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMblJwYldVdWMyeHZkMDF2ZEdsdmJpQTlJREE3WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJRkJNUVZsRlVseHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxjaUE5SUc1bGR5QlFiR0Y1WlhJb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lBd0xqa3lJQ29nZEdocGN5NW5ZVzFsTG5kdmNteGtMbWhsYVdkb2RDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdobFlXeDBhRG9nTVRBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKM050WVd4c1ptbG5hSFJsY2ljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtY21GdFpUb2dNbHh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZV2RsTG1Ga1pFTm9hV3hrS0hSb2FYTXVjR3hoZVdWeUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxjbE5vYjI5MFNXNTBaWEoyWVd3Z1BTQXdMakUyTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJQzB0TFMwdExTMGdSVTVGVFZrNklIUm9aWE5sSUc5dVpYTWdZWEpsSUdOeVpXRjBaV1FnWlhabGNua2dkWEJrWVhSbElIUnBZMnRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0YVdWeklEMGdkR2hwY3k1aFpHUXVaM0p2ZFhBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRhV1Z6TG1WdVlXSnNaVUp2WkhrZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVZHbHRaU0E5SURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeTh4TGpWY2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVVbHVkR1Z5ZG1Gc0lEMGdNaTQxTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZOb2IyOTBTVzUwWlhKMllXd2dQU0F4TzF4dUlDQWdJQ0FnSUNBdkx5QXRMUzB0TFMwdElDRkZUa1ZOV1Z4dVhHNGdJQ0FnSUNBZ0lDOHZJQzB0TFMwdExTMGdjMjFoYkd4bGNrVk9SVTFaT2lCMGFHbHpJRzl1WlhNZ1lYSmxJR055WldGMFpXUWdaWFpsY25rZ2RYQmtZWFJsSUhScFkydGNiaUFnSUNBZ0lDQWdkR2hwY3k1emJXRnNiR1Z5Ulc1bGJXbGxjeUE5SUhSb2FYTXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMjFoYkd4bGNrVnVaVzFwWlhNdVpXNWhZbXhsUW05a2VTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDOHZJQzB0TFMwdExTMGdJWE50WVd4c1pYSkZUa1ZOV1Z4dVhHNWNiaUFnSUNBZ0lDQWdMeThnTFMwdExTMHRMU0JGVGtWTldTQkRURWxGVGxRNklISmhibVJ2Yld4NUlHTm9iM05sYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTkRiR2xsYm5RZ1BTQjBhR2x6TG1Ga1pDNW5jbTkxY0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMXBaWE5EYkdsbGJuUXVaVzVoWW14bFFtOWtlU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQzh2TVM0MVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbERiR2xsYm5SSmJuUmxjblpoYkNBOUlESXVNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVVOc2FXVnVkRk5vYjI5MFZHbHRaU0E5SURBN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbERiR2xsYm5SVGFHOXZkRWx1ZEdWeWRtRnNJRDBnTVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2YVc1cGRHbGhiR2w2WlNCbWFYSnpkQ0JqYkdsbGJuUmNiaUFnSUNBZ0lDQWdkR2hwY3k1amNtVmhkR1ZGYm1WdGVVTnNhV1Z1ZENoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVjbTVrTG1sdWRHVm5aWEpKYmxKaGJtZGxLRFlzSURjMktTQXFJREV3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdMeTh3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM0JsWldRNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0RVc0lERXdLU0FxSURFd0lDb2dLRTFoZEdndWNtRnVaRzl0S0NrZ1BpQXdMalVnUHlBeElEb2dMVEVwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNXlibVF1YVc1MFpXZGxja2x1VW1GdVoyVW9OU3dnTVRBcElDb2dNVEJjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx6bGNiaUFnSUNBZ0lDQWdJQ0FnSUdobFlXeDBhRG9nT1RBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpZFd4c1pYUlRjR1ZsWkRvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZ3hNQ3dnTWpBcElDb2dNVEFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oyRnNhV1Z1Y3ljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6YVhwbE9pQXdMamhjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDOHZJQzB0TFMwdExTMGdJVVZPUlUxWklFTk1TVVZPVkRvZ2NtRnVaRzl0YkhrZ1kyaHZjMlZ1WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuUnBiV1V1WlhabGJuUnpMbXh2YjNBb1VHaGhjMlZ5TGxScGJXVnlMbE5GUTA5T1JDQXFJREV3TENBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWgwYUdsekxtVnVaVzE1U1c1MFpYSjJZV3dnUGlBd0xqSWdLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1U1c1MFpYSjJZV3dnTFQwZ01DNHhPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTkyWlhKc1lYbENhWFJ0WVhBZ1BTQjBhR2x6TG1Ga1pDNWlhWFJ0WVhCRVlYUmhLSFJvYVhNdVoyRnRaUzUzYVdSMGFDd2dkR2hwY3k1bllXMWxMbWhsYVdkb2RDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzWmxjbXhoZVVKcGRHMWhjQzVqZEhndVptbHNiRk4wZVd4bElEMGdKeU13TURBbk8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG05MlpYSnNZWGxDYVhSdFlYQXVZM1I0TG1acGJHeFNaV04wS0RBc0lEQXNJSFJvYVhNdVoyRnRaUzUzYVdSMGFDd2dkR2hwY3k1bllXMWxMbWhsYVdkb2RDazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkbVZ5YkdGNUlEMGdkR2hwY3k1aFpHUXVjM0J5YVhSbEtEQXNJREFzSUhSb2FYTXViM1psY214aGVVSnBkRzFoY0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlUzUyYVhOcFlteGxJRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzWmxjbXhoZVM1aGJIQm9ZU0E5SURBdU56VTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW9kV1FnUFNCdVpYY2dTRlZFS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhCc1lYbGxjam9nZEdocGN5NXdiR0Y1WlhKY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z0xTMHRMUzB0TFNCVFQxVk9SRk5jYmlBZ0lDQWdJQ0F2THlCMGFHbHpMbTExYzJsaklEMGdkR2hwY3k1bllXMWxMbUZrWkM1aGRXUnBieWduY0d4aGVVMTFjMmxqSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBTR2wwVTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25ZblZzYkdWMFNHbDBKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsRmVIQnNiM05wYjI1VGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2RsYm1WdGVVVjRjR3h2YzJsdmJpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnNZWGxsY2tWNGNHeHZjMmx2YmxOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KM0JzWVhsbGNrVjRjR3h2YzJsdmJpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1ZQZG1WeVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duWjJGdFpVOTJaWEluS1R0Y2JseHVJQ0FnSUNBZ0lDQXZMM1JvYVhNdWJYVnphV011Ykc5dmNFWjFiR3dvS1R0Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnTHk5RVpXWmhkV3gwYzF4dUlDQWdJQ0FnSUNBdkwzUm9hWE11Wlc1bGJYbFVhVzFsSUQwZ01EdGNiaUFnSUNBZ0lDQWdMeTkwYUdsekxtVnVaVzE1U1c1MFpYSjJZV3dnUFNBeExqVTdYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NWxibVZ0ZVZOb2IyOTBWR2x0WlNBOUlEQTdYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NWxibVZ0ZVZOb2IyOTBTVzUwWlhKMllXd2dQU0F4TzF4dUlDQWdJQ0FnSUNBdkwzUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0x5OTBhR2x6TG5Cc1lYbGxjbE5vYjI5MFNXNTBaWEoyWVd3Z1BTQXdMakUyTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZScGJXVWdLejBnZEdocGN5NW5ZVzFsTG5ScGJXVXVjR2g1YzJsamMwVnNZWEJ6WldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbFRhRzl2ZEZScGJXVWdLejBnZEdocGN5NW5ZVzFsTG5ScGJXVXVjR2g1YzJsamMwVnNZWEJ6WldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJQ3M5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbkJvZVhOcFkzTkZiR0Z3YzJWa08xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVZ1WlcxNVZHbHRaU0ErSUhSb2FYTXVaVzVsYlhsSmJuUmxjblpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZScGJXVWdQU0F3TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTnlaV0YwWlVWdVpXMTVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMkxDQTNOaWtnS2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMekJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITndaV1ZrT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb05Td2dNVEFwSUNvZ01UQWdLaUFvVFdGMGFDNXlZVzVrYjIwb0tTQStJREF1TlNBL0lERWdPaUF0TVNrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb05Td2dNVEFwSUNvZ01UQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2T1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdobFlXeDBhRG9nT1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWRXeHNaWFJUY0dWbFpEb2dkR2hwY3k1bllXMWxMbkp1WkM1cGJuUmxaMlZ5U1c1U1lXNW5aU2d4TUN3Z01qQXBJQ29nTVRBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaGJHbGxiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJsNlpUb2dNaTQxWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaVzVsYlhsVGFHOXZkRlJwYldVZ1BpQjBhR2x6TG1WdVpXMTVVMmh2YjNSSmJuUmxjblpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZOb2IyOTBWR2x0WlNBOUlEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdWNHeGhlV1Z5TG1Gc2FYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5kdmNteGtMbUp5YVc1blZHOVViM0FvZEdocGN5NXZkbVZ5YkdGNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWhjSWtoaGN5QnRkV1Z5ZEc5Y0lpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV3YkdGNVpYSlRhRzl2ZEZScGJXVWdQaUIwYUdsekxuQnNZWGxsY2xOb2IyOTBTVzUwWlhKMllXd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkJzWVhsbGNpNWhiR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J6YUc5dmRFdGxlU0E5SUhSb2FYTXVaMkZ0WlM1cGJuQjFkQzVyWlhsaWIyRnlaQzVwYzBSdmQyNG9VR2hoYzJWeUxrdGxlV0p2WVhKa0xsTlFRVU5GUWtGU0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWh6YUc5dmRFdGxlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxjaTV6YUc5dmRDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1d2FIbHphV056TG1GeVkyRmtaUzV2ZG1WeWJHRndLSFJvYVhNdWNHeGhlV1Z5TG1KMWJHeGxkSE1zSUhSb2FYTXVaVzVsYldsbGN5d2dkR2hwY3k1b2FYUkZibVZ0ZVN3Z2JuVnNiQ3dnZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5Cb2VYTnBZM011WVhKallXUmxMbTkyWlhKc1lYQW9kR2hwY3k1d2JHRjVaWEl1WW5Wc2JHVjBjeXdnZEdocGN5NXpiV0ZzYkdWeVJXNWxiV2xsY3l3Z2RHaHBjeTVvYVhSRmJtVnRlU3dnYm5Wc2JDd2dkR2hwY3lrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExtOTJaWEpzWVhBb2RHaHBjeTV3YkdGNVpYSXNJRnQwYUdsekxtVnVaVzFwWlhNc2RHaHBjeTV6YldGc2JHVnlSVzVsYldsbGMxMHNJSFJvYVhNdVkzSmhjMmhGYm1WdGVTd2diblZzYkN3Z2RHaHBjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa1RXVnVkU2dwTzF4dUlDQWdJQ0FnSUNBdkx5QjBhR2x6TG1KbkxuUnBiR1ZRYjNOcGRHbHZiaTU0SUNzOUlETTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kzSmxZWFJsUlc1bGJYa29aR0YwWVNrZ2UxeHVYRzRnSUNBZ0lDQWdJR3hsZENCbGJtVnRlU0E5SUhSb2FYTXVaVzVsYldsbGN5NW5aWFJHYVhKemRFVjRhWE4wY3lobVlXeHpaU2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQjBiM1JoYkVWdVpXMXBaWE1nUFNCMGFHbHpMbVZ1WlcxcFpYTXVZMmhwYkdSeVpXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWgwYjNSaGJFVnVaVzFwWlhNcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaFpXNWxiWGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z1WlcxNUlEMGdibVYzSUVWdVpXMTVLR1JoZEdFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RHOTBZV3hGYm1WdGFXVnpJRHdnTlNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGFXVnpMbUZrWkNobGJtVnRlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJtVnRlUzV5WlhObGRDaGtZWFJoS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqY21WaGRHVlRiV0ZzYkdWeVJXNWxiWGtvWkdGMFlTa2dlMXh1WEc0Z0lDQWdJQ0FnSUd4bGRDQmxibVZ0ZVNBOUlIUm9hWE11YzIxaGJHeGxja1Z1WlcxcFpYTXVaMlYwUm1seWMzUkZlR2x6ZEhNb1ptRnNjMlVwTzF4dUlDQWdJQ0FnSUNCc1pYUWdkRzkwWVd4RmJtVnRhV1Z6SUQwZ2RHaHBjeTV6YldGc2JHVnlSVzVsYldsbGN5NWphR2xzWkhKbGJpNXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGbGJtVnRlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaVzVsYlhrZ1BTQnVaWGNnUlc1bGJYa29aR0YwWVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGIzUmhiRVZ1WlcxcFpYTWdQQ0F5TkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6YldGc2JHVnlSVzVsYldsbGN5NWhaR1FvWlc1bGJYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWlc1bGJYa3VjbVZ6WlhRb1pHRjBZU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZM0psWVhSbFJXNWxiWGxEYkdsbGJuUW9aR0YwWVNrZ2UxeHVYRzRnSUNBZ0lDQWdJR3hsZENCbGJtVnRlU0E5SUhSb2FYTXVaVzVsYldsbGMwTnNhV1Z1ZEM1blpYUkdhWEp6ZEVWNGFYTjBjeWhtWVd4elpTazdYRzRnSUNBZ0lDQWdJR3hsZENCMGIzUmhiRVZ1WlcxcFpYTWdQU0IwYUdsekxtVnVaVzFwWlhORGJHbGxiblF1WTJocGJHUnlaVzR1YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnloMGIzUmhiRVZ1WlcxcFpYTXBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDZ2haVzVsYlhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdVpXMTVJRDBnYm1WM0lFVnVaVzE1S0dSaGRHRXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9kRzkwWVd4RmJtVnRhV1Z6SUR3OUlERXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsYzBOc2FXVnVkQzVoWkdRb1pXNWxiWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXNWxiWGt1Y21WelpYUW9aR0YwWVNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYUdsMFJXWm1aV04wS0c5aWFpd2dZMjlzYjNJcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhSM1pXVnVJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNTBkMlZsYmlodlltb3BPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1pXMXBkSFJsY2lBOUlIUm9hWE11WjJGdFpTNWhaR1F1WlcxcGRIUmxjaWdwTzF4dUlDQWdJQ0FnSUNCc1pYUWdaVzFwZEhSbGNsQm9lWE5wWTNOVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEJoY25ScFkyeGxVM0JsWldRZ1BTQXhNREE3WEc0Z0lDQWdJQ0FnSUd4bGRDQnRZWGhRWVhKMGFXTnNaWE1nUFNBeE1EdGNibHh1SUNBZ0lDQWdJQ0IwZDJWbGJpNTBieWg3ZEdsdWREb2dNSGhtWmpBd01EQjlMQ0F4TURBcE8xeHVJQ0FnSUNBZ0lDQjBkMlZsYmk1dmJrTnZiWEJzWlhSbExtRmtaQ2dvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdlltb3VkR2x1ZENBOUlEQjRabVptWm1abU8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZEhkbFpXNHVjM1JoY25Rb0tUdGNibHh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMbmdnUFNCdlltb3VlRHRjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTU1SUQwZ2IySnFMbms3WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1WjNKaGRtbDBlU0E5SURBN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWJXRnJaVkJoY25ScFkyeGxjeWduY0dGeWRHbGpiR1VuS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYjJKcUxtaGxZV3gwYUNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndZWEowYVdOc1pWTndaV1ZrSUQwZ01qQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRjRVR0Z5ZEdsamJHVnpJRDBnTkRBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjJ4dmNpQTlJREI0Wm1Zd01EQXdPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1dGFXNVFZWEowYVdOc1pWTndaV1ZrTG5ObGRGUnZLQzF3WVhKMGFXTnNaVk53WldWa0xDQXRjR0Z5ZEdsamJHVlRjR1ZsWkNrN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWJXRjRVR0Z5ZEdsamJHVlRjR1ZsWkM1elpYUlVieWh3WVhKMGFXTnNaVk53WldWa0xDQndZWEowYVdOc1pWTndaV1ZrS1R0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1emRHRnlkQ2gwY25WbExDQTFNREFzSUc1MWJHd3NJRzFoZUZCaGNuUnBZMnhsY3lrN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWRYQmtZWFJsSUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaVzFwZEhSbGNsQm9lWE5wWTNOVWFXMWxJQ3M5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbkJvZVhOcFkzTkZiR0Z3YzJWa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb1pXMXBkSFJsY2xCb2VYTnBZM05VYVcxbElENDlJREF1TmlsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXMXBkSFJsY2xCb2VYTnBZM05VYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYldsMGRHVnlMbVJsYzNSeWIza29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG1admNrVmhZMmdvY0dGeWRHbGpiR1VnUFQ0Z2NHRnlkR2xqYkdVdWRHbHVkQ0E5SUdOdmJHOXlLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG5Cc1lYbGxjaTVoYkdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1KeWFXNW5WRzlVYjNBb2RHaHBjeTV2ZG1WeWJHRjVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2hwZEVWdVpXMTVLR0oxYkd4bGRDd2daVzVsYlhrcElIdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEVocGRGTnZkVzVrTG5Cc1lYa29YQ0pjSWl3d0xEQXVOU2s3WEc0Z0lDQWdJQ0FnSUdWdVpXMTVMbVJoYldGblpTaGlkV3hzWlhRdWFHVmhiSFJvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvYVhSRlptWmxZM1FvWlc1bGJYa3NJR0oxYkd4bGRDNTBhVzUwS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvSVdWdVpXMTVMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVJYaHdiRzl6YVc5dVUyOTFibVF1Y0d4aGVTaGNJbHdpTENBd0xDQXdMalVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1b2RXUXVkWEJrWVhSbFUyTnZjbVVvWlc1bGJYa3ViV0Y0U0dWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjNhWFJqYUNobGJtVnRlUzV6YVhwbEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMMHhoY21kbElDMCtJRTFsWkdsMWJWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnTWk0MU9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amNtVmhkR1ZUYldGc2JHVnlSVzVsYlhrb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1oyRnRaVG9nZEdocGN5NW5ZVzFsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ1pXNWxiWGt1ZUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklHVnVaVzE1TG5rc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemNHVmxaRG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJREkxSUNvZ01UQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ0xUTXdJQ29nTVRCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1pXRnNkR2c2SURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwVTNCbFpXUTZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTVRBc0lESXdLU0FxSURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaGJHbGxiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6YVhwbE9pQXhMalZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTnlaV0YwWlZOdFlXeHNaWEpGYm1WdGVTaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5ZVzFsT2lCMGFHbHpMbWRoYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQmxibVZ0ZVM1NExGeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUJsYm1WdGVTNTVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM0JsWldRNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I0T2lBdE1qVWdLaUF4TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUF0TXpBZ0tpQXhNRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdWaGJIUm9PaUF4TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKMWJHeGxkRk53WldWa09pQjBhR2x6TG1kaGJXVXVjbTVrTG1sdWRHVm5aWEpKYmxKaGJtZGxLREV3TENBeU1Da2dLaUF4TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGemMyVjBPaUFuWVd4cFpXNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMmw2WlRvZ01TNDFYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRDNXJhV3hzS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCamNtRnphRVZ1WlcxNUtIQnNZWGxsY2l3Z1pXNWxiWGtwSUh0Y2JpQWdJQ0FnSUNBZ0x5OWxibVZ0ZVM1a1lXMWhaMlVvWlc1bGJYa3VhR1ZoYkhSb0tUdGNiaUFnSUNBZ0lDQWdaVzVsYlhrdVpHRnRZV2RsS0RNcE8xeHVJQ0FnSUNBZ0lDQXZMM0JzWVhsbGNpNWtZVzFoWjJVb1pXNWxiWGt1YUdWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnY0d4aGVXVnlMbVJoYldGblpTZ3hLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9hWFJGWm1abFkzUW9jR3hoZVdWeUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b2FYUkZabVpsWTNRb1pXNWxiWGtwTzF4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1Ulhod2JHOXphVzl1VTI5MWJtUXVjR3hoZVNoY0lsd2lMREFzTUM0MUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhSFZrTG5Wd1pHRjBaVk5qYjNKbEtHVnVaVzE1TG0xaGVFaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1b2RXUXVkWEJrWVhSbFNHVmhiSFJvS0NrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doY0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNrVjRjR3h2YzJsdmJsTnZkVzVrTG5Cc1lYa29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWElvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdkaGJXVlBkbVZ5S0NsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTBhVzFsTG5Oc2IzZE5iM1JwYjI0Z1BTQXpPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhrdWRtbHphV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVpY21sdVoxUnZWRzl3S0hSb2FYTXViM1psY214aGVTazdYRzRnSUNBZ0lDQWdJR3hsZENCMGFXMWxjaUE5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbU55WldGMFpTaDBhR2x6TG1kaGJXVXNJSFJ5ZFdVcE8xeHVJQ0FnSUNBZ0lDQjBhVzFsY2k1aFpHUW9NekF3TUN3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnZEdocGN5NXRkWE5wWXk1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VTI5MWJtUXVjR3hoZVNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5OMFlYUmxMbk4wWVhKMEtDZFFZVzVuVDNabGNpY3BPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2RHbHRaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnNiMkZrVFdWdWRTZ3BlMXh1SUNBZ0lDQWdJQ0JzWlhRZ1pYTmpTMlY1SUQwZ2RHaHBjeTVuWVcxbExtbHVjSFYwTG10bGVXSnZZWEprTG1selJHOTNiaWhRYUdGelpYSXVTMlY1WW05aGNtUXVSVk5ES1R0Y2JpQWdJQ0FnSUNBZ2FXWW9aWE5qUzJWNUtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeUxtdHBiR3dvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV6ZEdGMFpTNXpkR0Z5ZENnblRXVnVkU2NwTzF4dVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNTlYRzRpTENKbGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFjbVZzYjJGa0lHVjRkR1Z1WkhNZ1VHaGhjMlZ5TGxOMFlYUmxJSHRjYmx4dUlDQWdJSEJ5Wld4dllXUW9LU0I3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa1pYSkNaeUE5SUhSb2FYTXVZV1JrTG5Od2NtbDBaU2gwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDd2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrc0lDZHNiMkZrWlhKQ1p5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1JsY2tKaGNpQTlJSFJvYVhNdVlXUmtMbk53Y21sMFpTaDBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N3Z2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGtzSUNkc2IyRmtaWEpDWVhJbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtaWEpDWnk1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa1pYSkNZWEl1WVc1amFHOXlMbk5sZEZSdktEQXVOU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xuTmxkRkJ5Wld4dllXUlRjSEpwZEdVb2RHaHBjeTVzYjJGa1pYSkNZWElwTzF4dUlDQWdJQ0FnSUNBdkx5QlRhRzl2ZEdWeVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYwYkdGelNsTlBUa0Z5Y21GNUtDZHpiV0ZzYkdacFoyaDBaWEluTENBbmFXMW5MM05vYjI5MFpYSXZjM0J5YVhSbGMyaGxaWFF2YzIxaGJHeG1hV2RvZEdWeUxuQnVaeWNzSUNka1lYUmhMM05vYjI5MFpYSXZjM0J5YVhSbGMyaGxaWFF2YzIxaGJHeG1hV2RvZEdWeUxtcHpiMjRuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtRjBiR0Z6U2xOUFRrRnljbUY1S0NkaGJHbGxiaWNzSUNkcGJXY3ZjMmh2YjNSbGNpOXpjSEpwZEdWemFHVmxkQzloYkdsbGJpNXdibWNuTENBblpHRjBZUzl6YUc5dmRHVnlMM053Y21sMFpYTm9aV1YwTDJGc2FXVnVMbXB6YjI0bktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYwYkdGelNsTlBUa0Z5Y21GNUtDZGlkWFIwYjI0bkxDQW5hVzFuTDJKMWRIUnZiaTV3Ym1jbkxDQW5aR0YwWVM5blpXNWxjbWxqTDJKMWRIUnZiaTVxYzI5dUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25abUZ5WW1GamF5Y3NJQ2RwYldjdmMyaHZiM1JsY2k5bVlYSmlZV05yTG1wd1p5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YVcxaFoyVW9KMkoxYkd4bGRDY3NJQ2RwYldjdmMyaHZiM1JsY2k5aWRXeHNaWFF1Y0c1bkp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25jR0Z5ZEdsamJHVW5MQ0FuYVcxbkwzTm9iMjkwWlhJdmNHRnlkR2xqYkdVdVoybG1KeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1cGJXRm5aU2duYUdWaGJIUm9ZbUZ5Snl3Z0oybHRaeTl6YUc5dmRHVnlMMmhsWVd4MGFHSmhjaTV3Ym1jbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbWx0WVdkbEtDZG9kV1JDWnljc0lDZHBiV2N2YzJodmIzUmxjaTlvZFdRdFltY3VjRzVuSnlrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYxWkdsdktDZHdiR0Y1VFhWemFXTW5MQ0JiSjJGMVpHbHZMM05vYjI5MFpYSXZiWFZ6YVdNdmNHeGhlUzV0Y0RNblhTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZFdScGJ5Z25iV1Z1ZFUxMWMybGpKeXdnV3lkaGRXUnBieTl6YUc5dmRHVnlMMjExYzJsakwyMWxiblV1YlhBekoxMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRXUnBieWduYldWdWRVOTJaWEluTENCYkoyRjFaR2x2TDNOb2IyOTBaWEl2YzI5MWJtUXZiV1Z1ZFMxdmRtVnlMbTF3TXlkZEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYxWkdsdktDZHRaVzUxVDNWMEp5d2dXeWRoZFdScGJ5OXphRzl2ZEdWeUwzTnZkVzVrTDIxbGJuVXRiM1YwTG0xd015ZGRLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1GMVpHbHZLQ2R0Wlc1MVJHOTNiaWNzSUZzbllYVmthVzh2YzJodmIzUmxjaTl6YjNWdVpDOXRaVzUxTFdOc2FXTnJMbTF3TXlkZEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KMkoxYkd4bGRFaHBkQ2NzSUZzbllYVmthVzh2YzJodmIzUmxjaTl6YjNWdVpDOWlkV3hzWlhRdGFHbDBMbTF3TXlkZEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYxWkdsdktDZGxibVZ0ZVZOb2IzUW5MQ0JiSjJGMVpHbHZMM05vYjI5MFpYSXZjMjkxYm1RdlpXNWxiWGt0YzJodmRDNXRjRE1uWFNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkV1JwYnlnblpXNWxiWGxGZUhCc2IzTnBiMjRuTENCYkoyRjFaR2x2TDNOb2IyOTBaWEl2YzI5MWJtUXZaVzVsYlhrdFpYaHdiRzl6YVc5dUxtMXdNeWRkS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtRjFaR2x2S0Nkd2JHRjVaWEpUYUc5MEp5d2dXeWRoZFdScGJ5OXphRzl2ZEdWeUwzTnZkVzVrTDNCc1lYbGxjaTF6YUc5MExtMXdNeWRkS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtRjFaR2x2S0Nkd2JHRjVaWEpGZUhCc2IzTnBiMjRuTENCYkoyRjFaR2x2TDNOb2IyOTBaWEl2YzI5MWJtUXZjR3hoZVdWeUxXVjRjR3h2YzJsdmJpNXRjRE1uWFNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYxWkdsdktDZG5ZVzFsVDNabGNpY3NJRnNuWVhWa2FXOHZjMmh2YjNSbGNpOXpiM1Z1WkM5bllXMWxMVzkyWlhJdWJYQXpKMTBwTzF4dUlDQWdJQ0FnSUNBdkx5Rm5ZVzFsSURGY2JseHVYRzRnSUNBZ0lDQWdJQzh2VUdGdVoxeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25jR0Z1WjBKbkp5d2dKMmx0Wnk5d1lXNW5MM0JoYm1kQ1p5NXdibWNuS1R0Y2JseHVJQ0FnSUNBZ0lDQXZMeUZRWVc1blhHNWNibHh1SUNBZ0lDQWdJQ0F2THlCdFlYUmphR2x1WnlCd1lXbHljMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1emNISnBkR1Z6YUdWbGRDZ25kR2xzWlhNbkxDZHBiV2N2Y0dGcGNuTXZkR2xzWlhORGJHbGxiblF5TG5CdVp5Y3NJREUxTUN3Z01UY3dMQ0F4TlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnblltY25MQ0FuYVcxbkwzQmhhWEp6TDJKbkxtcHdaeWNwTzF4dUlDQWdJQ0FnSUNBdkx5QnRZWFJqYUdsdVp5QndZV2x5YzF4dUlDQWdJSDFjYmx4dUlDQWdJR055WldGMFpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlM1emRHRnlkQ2duVFdWdWRTY3BPMXh1SUNBZ0lIMWNibHh1ZlZ4dUlpd2lhVzF3YjNKMElGUmxlSFJDZFhSMGIyNGdabkp2YlNBbkxpNHZMaTR2WlhoMFpXNXphVzl1Y3k5dFpXNTFMM1JsZUhSaWRYUjBiMjRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJQZG1WeUlHVjRkR1Z1WkhNZ1VHaGhjMlZ5TGxOMFlYUmxJSHRjYmx4dUlDQWdJR055WldGMFpTZ3BJSHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlWR2wwYkdVZ1BTQnVaWGNnVUdoaGMyVnlMbFJsZUhRb2RHaHBjeTVuWVcxbExDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N3Z2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGt0TWpBd0xDQW5SMkZ0WlNCdmRtVnlKeXdnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ0p6TTJjSGdnVkdGb2IyMWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ0oyTmxiblJsY2lkY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVWFYUnNaUzVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMElEMGdibVYzSUZSbGVIUkNkWFIwYjI0b2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXUzB6TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZblYwZEc5dUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MlpYSkdjbUZ0WlRvZ01peGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5M2JrWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc09pQW5WSEo1SUdGbllXbHVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkRG9nSnpFMmNIZ2dWbVZ5WkdGdVlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MUlEMGdibVYzSUZSbGVIUkNkWFIwYjI0b2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXU3N6TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZblYwZEc5dUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MlpYSkdjbUZ0WlRvZ01peGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5M2JrWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc09pQW5UV1Z1ZFNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pUb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RNklDY3hObkI0SUZabGNtUmhibUVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2QzYUdsMFpTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV3hwWjI0NklDZGpaVzUwWlhJblhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVUM1psY2xOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WUGRtVnlKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1VDNWMFUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTFkQ2NwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFSRzkzYmljcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YzJWMFQzWmxjbE52ZFc1a0tIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV6WlhSUGRYUlRiM1Z1WkNoMGFHbHpMbUowYms5MWRGTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWMyVjBUM1psY2xOdmRXNWtLSFJvYVhNdVluUnVUM1psY2xOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxTG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVXVjMlYwUkc5M2JsTnZkVzVrS0hSb2FYTXVZblJ1Ukc5M2JsTnZkVzVrS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbTl1U1c1d2RYUkViM2R1TG1Ga1pDZ29LVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaUzV6ZEdGeWRDZ25VR3hoZVNjcE8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWIyNUpibkIxZEVSdmQyNHVZV1JrS0NncFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbExuTjBZWEowS0NkTlpXNTFKeWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKUVlXNWxiQ0E5SUhSb2FYTXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlFZVzVsYkM1aFpHUW9kR2hwY3k1bllXMWxUM1psY2xScGRHeGxLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzTG1Ga1pDaDBhR2x6TG5OMFlYSjBLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzTG1Ga1pDaDBhR2x6TG0xbGJuVXBPMXh1SUNBZ0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCUWJHRjVaWElnWm5KdmJTQW5MaTR2TGk0dmNISmxabUZpY3k5emFHOXZkR1Z5TDNCc1lYbGxjaWM3WEc1cGJYQnZjblFnUlc1bGJYa2dabkp2YlNBbkxpNHZMaTR2Y0hKbFptRmljeTl6YUc5dmRHVnlMMlZ1WlcxNUp6dGNibWx0Y0c5eWRDQklWVVFnWm5KdmJTQW5MaTR2TGk0dmNISmxabUZpY3k5d1lXNW5MMmgxWkNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCc1lYa2daWGgwWlc1a2N5QlFhR0Z6WlhJdVUzUmhkR1VnZTF4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNBdkwyWmhjbUpoWTJzZ1BTQmlZV05yWjNKdmRXNWtYRzRnSUNBZ0lDQWdJSFJvYVhNdVptRnlZbUZqYXlBOUlIUm9hWE11WVdSa0xuUnBiR1ZUY0hKcGRHVW9NQ3dnTUN3Z09EQXdMQ0F5TXpnd0xDQW5abUZ5WW1GamF5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZEdsdFpTNXpiRzkzVFc5MGFXOXVJRDBnTUR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMXBaWE1nUFNCMGFHbHpMbUZrWkM1bmNtOTFjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVaVzVoWW14bFFtOWtlU0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhJZ1BTQnVaWGNnVUd4aGVXVnlLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dNQzQ1TWlBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1b1pXbG5hSFFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9aV0ZzZEdnNklERXdNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBbmMyMWhiR3htYVdkb2RHVnlKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnlZVzFsT2lBeFhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1YzNSaFoyVXVZV1JrUTJocGJHUW9kR2hwY3k1d2JHRjVaWElwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YUhWa0lEMGdibVYzSUVoVlJDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQndiR0Y1WlhJNklIUm9hWE11Y0d4aGVXVnlYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXBibkIxZEM1dmJrUnZkMjR1WVdSa0tDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzUwYVcxbExuTnNiM2ROYjNScGIyNGdQU0F3TzF4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1YVc1d2RYUXViMjVWY0M1aFpHUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5ScGJXVXVjMnh2ZDAxdmRHbHZiaUE5SURBN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVVbHVkR1Z5ZG1Gc0lEMGdNUzQxTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZOb2IyOTBTVzUwWlhKMllXd2dQU0F4TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNsTm9iMjkwVkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeVUyaHZiM1JKYm5SbGNuWmhiQ0E5SURBdU1UWTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5ScGJXVXVaWFpsYm5SekxteHZiM0FvVUdoaGMyVnlMbFJwYldWeUxsTkZRMDlPUkNBcUlERXdMQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaDBhR2x6TG1WdVpXMTVTVzUwWlhKMllXd2dQaUF3TGprZ0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVTVzUwWlhKMllXd2dMVDBnTUM0eE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhsQ2FYUnRZWEFnUFNCMGFHbHpMbUZrWkM1aWFYUnRZWEJFWVhSaEtIUm9hWE11WjJGdFpTNTNhV1IwYUN3Z2RHaHBjeTVuWVcxbExtaGxhV2RvZENrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlVUpwZEcxaGNDNWpkSGd1Wm1sc2JGTjBlV3hsSUQwZ0p5TXdNREFuTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTkyWlhKc1lYbENhWFJ0WVhBdVkzUjRMbVpwYkd4U1pXTjBLREFzSURBc0lIUm9hWE11WjJGdFpTNTNhV1IwYUN3Z2RHaHBjeTVuWVcxbExtaGxhV2RvZENrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1SUQwZ2RHaHBjeTVoWkdRdWMzQnlhWFJsS0RBc0lEQXNJSFJvYVhNdWIzWmxjbXhoZVVKcGRHMWhjQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVTNTJhWE5wWW14bElEMGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlUzVoYkhCb1lTQTlJREF1TnpVN1hHNWNiaUFnSUNBZ0lDQXZMeUIwYUdsekxtMTFjMmxqSUQwZ2RHaHBjeTVuWVcxbExtRmtaQzVoZFdScGJ5Z25jR3hoZVUxMWMybGpKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMFNHbDBVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnblluVnNiR1YwU0dsMEp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxGZUhCc2IzTnBiMjVUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZGxibVZ0ZVVWNGNHeHZjMmx2YmljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxja1Y0Y0d4dmMybHZibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0ozQnNZWGxsY2tWNGNHeHZjMmx2YmljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25aMkZ0WlU5MlpYSW5LVHRjYmx4dUlDQWdJQ0FnSUNBdkwzUm9hWE11YlhWemFXTXViRzl2Y0VaMWJHd29LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjFjR1JoZEdVb0tTQjdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZScGJXVWdLejBnZEdocGN5NW5ZVzFsTG5ScGJXVXVjR2g1YzJsamMwVnNZWEJ6WldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbFRhRzl2ZEZScGJXVWdLejBnZEdocGN5NW5ZVzFsTG5ScGJXVXVjR2g1YzJsamMwVnNZWEJ6WldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJQ3M5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbkJvZVhOcFkzTkZiR0Z3YzJWa08xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVZ1WlcxNVZHbHRaU0ErSUhSb2FYTXVaVzVsYlhsSmJuUmxjblpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZScGJXVWdQU0F3TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTnlaV0YwWlVWdVpXMTVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMkxDQTNOaWtnS2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOd1pXVmtPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTlN3Z01UQXBJQ29nTVRBZ0tpQW9UV0YwYUM1eVlXNWtiMjBvS1NBK0lEQXVOU0EvSURFZ09pQXRNU2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTlN3Z01UQXBJQ29nTVRCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGxZV3gwYURvZ09TeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlkV3hzWlhSVGNHVmxaRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNneE1Dd2dNakFwSUNvZ01UQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGhiR2xsYmlkY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaVzVsYlhsVGFHOXZkRlJwYldVZ1BpQjBhR2x6TG1WdVpXMTVVMmh2YjNSSmJuUmxjblpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZOb2IyOTBWR2x0WlNBOUlEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVabTl5UldGamFFRnNhWFpsS0dWdVpXMTVJRDArSUdWdVpXMTVMbk5vYjI5MEtDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxuQnNZWGxsY2k1aGJHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVpY21sdVoxUnZWRzl3S0hSb2FYTXViM1psY214aGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV3YkdGNVpYSlRhRzl2ZEZScGJXVWdQaUIwYUdsekxuQnNZWGxsY2xOb2IyOTBTVzUwWlhKMllXd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkJzWVhsbGNpNWhiR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlMbk5vYjI5MEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Y0doNWMybGpjeTVoY21OaFpHVXViM1psY214aGNDaDBhR2x6TG5Cc1lYbGxjaTVpZFd4c1pYUnpMQ0IwYUdsekxtVnVaVzFwWlhNc0lIUm9hWE11YUdsMFJXNWxiWGtzSUc1MWJHd3NJSFJvYVhNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbUZ5WTJGa1pTNXZkbVZ5YkdGd0tIUm9hWE11Y0d4aGVXVnlMQ0IwYUdsekxtVnVaVzFwWlhNc0lIUm9hWE11WTNKaGMyaEZibVZ0ZVN3Z2JuVnNiQ3dnZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0YVdWekxtWnZja1ZoWTJnb1pXNWxiWGtnUFQ0Z2RHaHBjeTVuWVcxbExuQm9lWE5wWTNNdVlYSmpZV1JsTG05MlpYSnNZWEFvZEdocGN5NXdiR0Y1WlhJc0lHVnVaVzE1TG1KMWJHeGxkSE1zSUhSb2FYTXVhR2wwVUd4aGVXVnlMQ0J1ZFd4c0xDQjBhR2x6S1NrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bVlYSmlZV05yTG5ScGJHVlFiM05wZEdsdmJpNTVJQ3M5SURNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTNKbFlYUmxSVzVsYlhrb1pHRjBZU2tnZTF4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0JsYm1WdGVTQTlJSFJvYVhNdVpXNWxiV2xsY3k1blpYUkdhWEp6ZEVWNGFYTjBjeWhtWVd4elpTazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmxibVZ0ZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlc1bGJYa2dQU0J1WlhjZ1JXNWxiWGtvWkdGMFlTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVZV1JrS0dWdVpXMTVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJtVnRlUzV5WlhObGRDaGtZWFJoS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JvYVhSRlptWmxZM1FvYjJKcUxDQmpiMnh2Y2lrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnZEhkbFpXNGdQU0IwYUdsekxtZGhiV1V1WVdSa0xuUjNaV1Z1S0c5aWFpazdYRzRnSUNBZ0lDQWdJR3hsZENCbGJXbDBkR1Z5SUQwZ2RHaHBjeTVuWVcxbExtRmtaQzVsYldsMGRHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQmxiV2wwZEdWeVVHaDVjMmxqYzFScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNCc1pYUWdjR0Z5ZEdsamJHVlRjR1ZsWkNBOUlERXdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHMWhlRkJoY25ScFkyeGxjeUE5SURFd08xeHVYRzRnSUNBZ0lDQWdJSFIzWldWdUxuUnZLSHQwYVc1ME9pQXdlR1ptTURBd01IMHNJREV3TUNrN1hHNGdJQ0FnSUNBZ0lIUjNaV1Z1TG05dVEyOXRjR3hsZEdVdVlXUmtLQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5aWFpNTBhVzUwSUQwZ01IaG1abVptWm1ZN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0IwZDJWbGJpNXpkR0Z5ZENncE8xeHVYRzRnSUNBZ0lDQWdJR1Z0YVhSMFpYSXVlQ0E5SUc5aWFpNTRPMXh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMbmtnUFNCdlltb3VlVHRjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTVuY21GMmFYUjVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1dFlXdGxVR0Z5ZEdsamJHVnpLQ2R3WVhKMGFXTnNaU2NwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h2WW1vdWFHVmhiSFJvSUR3OUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmhjblJwWTJ4bFUzQmxaV1FnUFNBeU1EQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYaFFZWEowYVdOc1pYTWdQU0EwTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eUlEMGdNSGhtWmpBd01EQTdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG0xcGJsQmhjblJwWTJ4bFUzQmxaV1F1YzJWMFZHOG9MWEJoY25ScFkyeGxVM0JsWldRc0lDMXdZWEowYVdOc1pWTndaV1ZrS1R0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1dFlYaFFZWEowYVdOc1pWTndaV1ZrTG5ObGRGUnZLSEJoY25ScFkyeGxVM0JsWldRc0lIQmhjblJwWTJ4bFUzQmxaV1FwTzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG5OMFlYSjBLSFJ5ZFdVc0lEVXdNQ3dnYm5Wc2JDd2diV0Y0VUdGeWRHbGpiR1Z6S1R0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1MWNHUmhkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiV2wwZEdWeVVHaDVjMmxqYzFScGJXVWdLejBnZEdocGN5NW5ZVzFsTG5ScGJXVXVjR2g1YzJsamMwVnNZWEJ6WldRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlobGJXbDBkR1Z5VUdoNWMybGpjMVJwYldVZ1BqMGdNQzQyS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJXbDBkR1Z5VUdoNWMybGpjMVJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1Z0YVhSMFpYSXVaR1Z6ZEhKdmVTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1Wm05eVJXRmphQ2h3WVhKMGFXTnNaU0E5UGlCd1lYSjBhV05zWlM1MGFXNTBJRDBnWTI5c2IzSXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11Y0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWQyOXliR1F1WW5KcGJtZFViMVJ2Y0NoMGFHbHpMbTkyWlhKc1lYa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhR2wwUlc1bGJYa29ZblZzYkdWMExDQmxibVZ0ZVNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMWJHeGxkRWhwZEZOdmRXNWtMbkJzWVhrb1hDSmNJaXd3TERBdU5TazdYRzRnSUNBZ0lDQWdJR1Z1WlcxNUxtUmhiV0ZuWlNoaWRXeHNaWFF1YUdWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9hWFJGWm1abFkzUW9aVzVsYlhrc0lHSjFiR3hsZEM1MGFXNTBLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmxibVZ0ZVM1aGJHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVVY0Y0d4dmMybHZibE52ZFc1a0xuQnNZWGtvWENKY0lpd3dMREF1TlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtaDFaQzUxY0dSaGRHVlRZMjl5WlNobGJtVnRlUzV0WVhoSVpXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHSjFiR3hsZEM1cmFXeHNLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhR2wwVUd4aGVXVnlLSEJzWVhsbGNpd2dZblZzYkdWMEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwU0dsMFUyOTFibVF1Y0d4aGVTaGNJbHdpTERBc01DNDFLVHRjYmlBZ0lDQWdJQ0FnY0d4aGVXVnlMbVJoYldGblpTaGlkV3hzWlhRdWFHVmhiSFJvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvZFdRdWRYQmtZWFJsU0dWaGJIUm9LQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhR2wwUldabVpXTjBLSEJzWVhsbGNpd2dZblZzYkdWMExuUnBiblFwTzF4dUlDQWdJQ0FnSUNCcFppQW9JWEJzWVhsbGNpNWhiR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKRmVIQnNiM05wYjI1VGIzVnVaQzV3YkdGNUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1luVnNiR1YwTG10cGJHd29LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpjbUZ6YUVWdVpXMTVLSEJzWVhsbGNpd2daVzVsYlhrcElIdGNiaUFnSUNBZ0lDQWdaVzVsYlhrdVpHRnRZV2RsS0dWdVpXMTVMbWhsWVd4MGFDazdYRzRnSUNBZ0lDQWdJSEJzWVhsbGNpNWtZVzFoWjJVb1pXNWxiWGt1YUdWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9hWFJGWm1abFkzUW9jR3hoZVdWeUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b2FYUkZabVpsWTNRb1pXNWxiWGtwTzF4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1Ulhod2JHOXphVzl1VTI5MWJtUXVjR3hoZVNoY0lsd2lMREFzTUM0MUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhSFZrTG5Wd1pHRjBaVk5qYjNKbEtHVnVaVzE1TG0xaGVFaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1b2RXUXVkWEJrWVhSbFNHVmhiSFJvS0NrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doY0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNrVjRjR3h2YzJsdmJsTnZkVzVrTG5Cc1lYa29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWElvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdkaGJXVlBkbVZ5S0NsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTBhVzFsTG5Oc2IzZE5iM1JwYjI0Z1BTQXpPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhrdWRtbHphV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVpY21sdVoxUnZWRzl3S0hSb2FYTXViM1psY214aGVTazdYRzRnSUNBZ0lDQWdJR3hsZENCMGFXMWxjaUE5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbU55WldGMFpTaDBhR2x6TG1kaGJXVXNJSFJ5ZFdVcE8xeHVJQ0FnSUNBZ0lDQjBhVzFsY2k1aFpHUW9NekF3TUN3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dGRYTnBZeTV6ZEc5d0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVMjkxYm1RdWNHeGhlU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbk4wWVhSbExuTjBZWEowS0NkUGRtVnlKeWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjBhVzFsY2k1emRHRnlkQ2dwTzF4dUlDQWdJSDFjYmx4dWZWeHVJbDE5In0=
