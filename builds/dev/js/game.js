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

            this.numRows = 4;
            this.numCols = 5;
            this.tileSize = 80;
            this.tileSpacing = 20;
            this.tilesLeft = this.numRows * this.numCols;

            this.backOfTheCard = 22;

            /*
            * Clients starts at position 10 (count spaces in spriteSheet)
            * 10 = Google
            * 11 = Amazon
            * 12 = CapitalOne
            * 13 = Goldman Sachs
            * 14 = Accenture
            * 15 = Capgemini
            * 16 = PWC
            * 17 = ...
            * 18 = ...
            * 19 = ...
            * 20 = ...
            */
            this.chosenClient = 10;

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
                        x: leftSpace + _i2 * (this.tileSize + this.tileSpacing),
                        y: topSpace + j * (this.tileSize + this.tileSpacing),
                        asset: 'tiles',
                        callback: this.showCard,
                        callbackContext: this,
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

            this.load.spritesheet('tiles', 'img/pairs/tilesClient.png', 80, 80, 24);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZXh0ZW5zaW9ucy9tZW51L3RleHRidXR0b24uanMiLCJzcmMvanMvZXh0ZW5zaW9ucy9wYWlycy9jYXJkYnV0dG9uLmpzIiwic3JjL2pzL2dhbWUuanMiLCJzcmMvanMvcHJlZmFicy9wYW5nL2J1bGxldC5qcyIsInNyYy9qcy9wcmVmYWJzL3BhbmcvZW5lbXlQYW5nLmpzIiwic3JjL2pzL3ByZWZhYnMvcGFuZy9odWQuanMiLCJzcmMvanMvcHJlZmFicy9zaG9vdGVyL2VuZW15LmpzIiwic3JjL2pzL3ByZWZhYnMvc2hvb3Rlci9wbGF5ZXIuanMiLCJzcmMvanMvc3RhdGVzL2Jvb3QuanMiLCJzcmMvanMvc3RhdGVzL2luZGV4LmpzIiwic3JjL2pzL3N0YXRlcy9tZW51LmpzIiwic3JjL2pzL3N0YXRlcy9wYWlycy9wYWlyc092ZXIuanMiLCJzcmMvanMvc3RhdGVzL3BhaXJzL3BsYXlQYWlycy5qcyIsInNyYy9qcy9zdGF0ZXMvcGFuZy9wYW5nT3Zlci5qcyIsInNyYy9qcy9zdGF0ZXMvcGFuZy9wbGF5UGFuZy5qcyIsInNyYy9qcy9zdGF0ZXMvcHJlbG9hZC5qcyIsInNyYy9qcy9zdGF0ZXMvc2hvb3Rlci9vdmVyLmpzIiwic3JjL2pzL3N0YXRlcy9zaG9vdGVyL3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUNBcUIsVTs7O0FBRWpCLDhCQUFxSDtBQUFBLFlBQXZHLElBQXVHLFFBQXZHLElBQXVHO0FBQUEsWUFBakcsQ0FBaUcsUUFBakcsQ0FBaUc7QUFBQSxZQUE5RixDQUE4RixRQUE5RixDQUE4RjtBQUFBLFlBQTNGLEtBQTJGLFFBQTNGLEtBQTJGO0FBQUEsWUFBcEYsUUFBb0YsUUFBcEYsUUFBb0Y7QUFBQSxZQUExRSxlQUEwRSxRQUExRSxlQUEwRTtBQUFBLFlBQXpELFNBQXlELFFBQXpELFNBQXlEO0FBQUEsWUFB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LENBQWpDLEVBQW1DLEdBQW5DO0FBQ0EscUJBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsTUFBTSxTQUEzQjtBQUNIO0FBQ0QsaUJBQUssR0FBTCxDQUFTLFlBQVQ7QUFDQSxnQkFBSSxDQUFDLE9BQU8sS0FBWixFQUFtQjtBQUNmLHFCQUFLLG9CQUFMLENBQTBCLElBQTFCO0FBQ0EscUJBQUssUUFBTDtBQUNIO0FBQ0o7OzttQ0FFUztBQUFBOztBQUNOLGlCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsVUFBZixHQUE0QixDQUE1QjtBQUNBLGlCQUFLLE9BQUwsQ0FBYSxPQUFiLEdBQXVCLElBQXZCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FBMkIsS0FBSyxPQUFoQztBQUNBLGdCQUFJLFFBQVEsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLE1BQWYsQ0FBc0IsS0FBSyxJQUEzQixFQUFpQyxJQUFqQyxDQUFaO0FBQ0Esa0JBQU0sR0FBTixDQUFVLElBQVYsRUFBZ0IsWUFBTTtBQUNsQix1QkFBSyxLQUFMLENBQVcsSUFBWDtBQUNBLHVCQUFLLGFBQUwsQ0FBbUIsSUFBbkI7QUFDQSx1QkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUFoQixDQUFzQixNQUF0QjtBQUNILGFBSkQ7QUFLQSxrQkFBTSxLQUFOO0FBQ0g7Ozs7RUFwTjZCLE9BQU8sSzs7a0JBQXBCLEkiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEJ1dHRvbiBleHRlbmRzIFBoYXNlci5CdXR0b24ge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgY2FsbGJhY2ssIGNhbGxiYWNrQ29udGV4dCwgb3ZlckZyYW1lLCBvdXRGcmFtZSwgZG93bkZyYW1lLCB1cEZyYW1lLCBsYWJlbCwgc3R5bGUgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgY2FsbGJhY2ssIGNhbGxiYWNrQ29udGV4dCwgb3ZlckZyYW1lLCBvdXRGcmFtZSwgZG93bkZyYW1lLCB1cEZyYW1lKTtcblxuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLnRleHQgPSBuZXcgUGhhc2VyLlRleHQodGhpcy5nYW1lLCAwLCAwLCB0aGlzLmxhYmVsLCB0aGlzLnN0eWxlKTtcbiAgICAgICAgdGhpcy50ZXh0LmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50ZXh0KTtcblxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRCdXR0b24gZXh0ZW5kcyBQaGFzZXIuQnV0dG9uIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSx2YWx1ZSwgaXNDbGllbnR9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUpO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmlzQ2xpZW50ID0gaXNDbGllbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgc3RhdGVzIGZyb20gJy4vc3RhdGVzJztcbmNvbnN0IEdBTUUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLCAxMDAwLCBQaGFzZXIuQVVUTyk7XG5cbk9iamVjdC5rZXlzKHN0YXRlcykuZm9yRWFjaChzdGF0ZSA9PiBHQU1FLnN0YXRlLmFkZChzdGF0ZSwgc3RhdGVzW3N0YXRlXSkpO1xuXG5HQU1FLnN0YXRlLnN0YXJ0KCdCb290Jyk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGhlYWx0aCwgdGludCA9IDB4ZmYwMDAwIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQpO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIHRoaXMuc2NhbGUuc2V0VG8oMC44KTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMudGludCA9IHRpbnQ7XG4gICAgICAgIHRoaXMuY2hlY2tXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMub3V0T2ZCb3VuZHNLaWxsID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQnVsbGV0IGZyb20gJy4vYnVsbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGgsIGJ1bGxldFNwZWVkLHNpemUgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICAvL3NpemUgPSBzY2FsZVxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKHNpemUpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG5cblxuICAgICAgICAvL0dyYXZpdHlcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5LnkgPSA1MDA7XG4gICAgICAgIHRoaXMuYm9keS5ib3VuY2Uuc2V0KDEpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3NwaW5uaW5nJywgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNF0sIDMwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5KCdzcGlubmluZycpO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gYnVsbGV0U3BlZWQ7XG5cbiAgICAgICAgdGhpcy5zaG90U291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKCdlbmVteVNob3QnKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDI7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCAqPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPiAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMiA+IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG4gICAgcmVzZXQoeyB4LCB5LCBoZWFsdGgsIGJ1bGxldFNwZWVkLCBzcGVlZCB9KSB7XG4gICAgICAgIHN1cGVyLnJlc2V0KHgsIHksIGhlYWx0aCk7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSBzcGVlZC54O1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHNwZWVkLnk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9zaG9vdGVyL3BsYXllcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWQgZXh0ZW5kcyBQaGFzZXIuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgcGxheWVyIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmJnID0gbmV3IFBoYXNlci5JbWFnZSh0aGlzLmdhbWUsIDAsIDAsICdodWRCZycpO1xuICAgICAgICB0aGlzLndpZHRoID0gODAwO1xuICAgICAgICB0aGlzLmhlYWx0aGJhciA9IG5ldyBQaGFzZXIuU3ByaXRlKHRoaXMuZ2FtZSwgMiwgMiwgJ2hlYWx0aGJhcicpO1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5zY2FsZS5zZXRUbygwLjk5NSwgMTEpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwgPSAnU2NvcmU6ICc7XG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgMjAsIDE0LCB0aGlzLnNjb3JlTGFiZWwgKyB0aGlzLnNjb3JlLCB7XG4gICAgICAgICAgICBmb250OiAnMTNweCBWZXJkYW5hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJnKTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhiYXIpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnNjb3JlVGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhbHRoKHBsYXllcikge1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5jcm9wKG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIDAsICh0aGlzLnBsYXllci5oZWFsdGggLyB0aGlzLnBsYXllci5tYXhIZWFsdGgpICogdGhpcy53aWR0aCwgMTApKTtcbiAgICAgICAgdGhpcy5oZWFsdGhiYXIudXBkYXRlQ3JvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKGFtb3VudCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IGFtb3VudDtcbiAgICAgICAgdGhpcy5zY29yZVRleHQudGV4dCA9IHRoaXMuc2NvcmVMYWJlbCArICh0aGlzLnNjb3JlICogMTApO1xuICAgIH1cblxufTtcbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi4vcGFuZy9idWxsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUsIGhlYWx0aCwgYnVsbGV0U3BlZWQgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zLmFkZCgnc3Bpbm5pbmcnLCBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0XSwgMzAsIHRydWUpO1xuICAgICAgICB0aGlzLnBsYXkoJ3NwaW5uaW5nJyk7XG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmJ1bGxldHMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQoJ2VuZW15U2hvdCcpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwLjA0ICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwLjA0ICogdGhpcy5nYW1lLndvcmxkLndpZHRoICsgMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+IDAuOTYgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDAuOTYgKiB0aGlzLmdhbWUud29ybGQud2lkdGggLSAyO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggKj0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyID4gdGhpcy5nYW1lLndvcmxkLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5raWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuXG4gICAgICAgIGlmICghYnVsbGV0KSB7XG4gICAgICAgICAgICBidWxsZXQgPSBuZXcgQnVsbGV0KHtcbiAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuYm90dG9tLFxuICAgICAgICAgICAgICAgIGhlYWx0aDogMixcbiAgICAgICAgICAgICAgICBhc3NldDogJ2J1bGxldCcsXG4gICAgICAgICAgICAgICAgdGludDogMHhmZjAwMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5idWxsZXRzLmFkZChidWxsZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnVsbGV0LnJlc2V0KHRoaXMueCwgdGhpcy5ib3R0b20sIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IHRoaXMuYnVsbGV0U3BlZWQ7XG4gICAgfVxuXG4gICAgZGFtYWdlKGFtb3VudCkge1xuICAgICAgICBzdXBlci5kYW1hZ2UoYW1vdW50KTtcbiAgICB9XG5cbiAgICByZXNldCh7IHgsIHksIGhlYWx0aCwgYnVsbGV0U3BlZWQsIHNwZWVkIH0pIHtcbiAgICAgICAgc3VwZXIucmVzZXQoeCwgeSwgaGVhbHRoKTtcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IGJ1bGxldFNwZWVkO1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHNwZWVkLng7XG4gICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gc3BlZWQueTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQnVsbGV0IGZyb20gJy4uL3BhbmcvYnVsbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBmcmFtZSwgaGVhbHRoIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lKTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIHRoaXMuc2NhbGUuc2V0VG8oMC44KTtcblxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG5cblxuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XG4gICAgICAgIC8vZ3Jhdml0eVxuICAgICAgICB0aGlzLmJvZHkuZ3Jhdml0eS55ID0gMTAwO1xuICAgICAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgLy9cblxuICAgICAgICB0aGlzLmJ1bGxldHMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuYnVsbGV0cy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IC01MDA7XG5cbiAgICAgICAgdGhpcy5zaG90U291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKCdwbGF5ZXJTaG90Jyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy5ib2R5KHRoaXMpO1xuXG5cblxuICAgICAgICAvLyBpZiAodGhpcy5nYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XG5cbiAgICAgICAgICAgIGxldCBsZWZ0S2V5ID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuTEVGVCk7XG4gICAgICAgICAgICBsZXQgcmlnaHRLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5SSUdIVCk7XG4gICAgICAgICAgICBpZihsZWZ0S2V5KXtcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gNjtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihyaWdodEtleSl7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IDY7XG5cbiAgICAgICAgICAgIH1cblxuICAgIH1cblxuICAgIHNob290KCkge1xuXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuXG4gICAgICAgIGlmICghYnVsbGV0KSB7XG4gICAgICAgICAgICBidWxsZXQgPSBuZXcgQnVsbGV0KHtcbiAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMudG9wLFxuICAgICAgICAgICAgICAgIC8vM1xuICAgICAgICAgICAgICAgIGhlYWx0aDogMSxcbiAgICAgICAgICAgICAgICBhc3NldDogJ2J1bGxldCcsXG4gICAgICAgICAgICAgICAgdGludDogMHgwNGMxMTJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY2hhbmdlIHRoaXMgbnVtYmVyIHRvIHNob290IGxlc3MgYnVsbGV0cyBhdCBhIHRpbWVcbiAgICAgICAgICAgIGlmKHRoaXMuYnVsbGV0cy5jaGlsZHJlbi5sZW5ndGggPD0gNSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG90U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuYWRkKGJ1bGxldCk7XG5cbiAgICAgICAgICAgICAgICBidWxsZXQuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5idWxsZXRTcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICBidWxsZXQucmVzZXQodGhpcy54LCB0aGlzLnRvcCwgMSk7XG4gICAgICAgICAgICBidWxsZXQuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5idWxsZXRTcGVlZDtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBkYW1hZ2UoYW1vdW50KSB7XG4gICAgICAgIHN1cGVyLmRhbWFnZShhbW91bnQpO1xuICAgIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvYWRlckJnJywgJ2ltZy9sb2FkZXItYmcucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnbG9hZGVyQmFyJywgJ2ltZy9sb2FkZXItYmFyLnBuZycpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xuXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQcmVsb2FkJyk7XG4gICAgfVxuXG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgQm9vdH0gZnJvbSAnLi9ib290JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQcmVsb2FkfSBmcm9tICcuL3ByZWxvYWQnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1lbnV9IGZyb20gJy4vbWVudSc7XG4vL2dhbWUxXG5leHBvcnQge2RlZmF1bHQgYXMgUGxheX0gZnJvbSAnLi9zaG9vdGVyL3BsYXknO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE92ZXJ9IGZyb20gJy4vc2hvb3Rlci9vdmVyJztcblxuLy9wYW5nQnRuXG5leHBvcnQge2RlZmF1bHQgYXMgUGxheVBhbmd9IGZyb20gJy4vcGFuZy9wbGF5UGFuZyc7XG5leHBvcnQge2RlZmF1bHQgYXMgUGFuZ092ZXJ9IGZyb20gJy4vcGFuZy9wYW5nT3Zlcic7XG5cbi8vZ2FtZTNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQbGF5UGFpcnN9IGZyb20gJy4vcGFpcnMvcGxheVBhaXJzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYWlyc092ZXJ9IGZyb20gJy4vcGFpcnMvcGFpcnNPdmVyJztcbiIsImltcG9ydCBUZXh0QnV0dG9uIGZyb20gJy4uL2V4dGVuc2lvbnMvbWVudS90ZXh0YnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXcgUGhhc2VyLlRleHQodGhpcy5nYW1lLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMjAwLCAnQ2hvb3NlIGEgZ2FtZSEnLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aXRsZS5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgLy8gdGhpcy5tdXNpYyA9IHRoaXMuZ2FtZS5hZGQuYXVkaW8oJ21lbnVNdXNpYycpO1xuXG5cbiAgICAgICAgdGhpcy5sZWZ0QnRuID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclggLSAyMDAsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnTGVmdEJ0bicsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMubGVmdEJ0bi5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLmxlZnRCdG4uc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMubGVmdEJ0bi5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMubGVmdEJ0bi5vbklucHV0VXAuYWRkKCgpPT57XG4gICAgICAgICAgICAvL3RoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheVBhaXJzJyk7XG5cbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIC8vIFNlY29uZCBCdG5cbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ1N0YXJ0JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5vbklucHV0VXAuYWRkKCgpPT57XG4gICAgICAgICAgICAvL3RoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheScpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlyZCBCdG5cbiAgICAgICAgdGhpcy5wYW5nQnRuID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclggKyAyMDAsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnUGFuZy1saWtlIScsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMucGFuZ0J0bi5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnBhbmdCdG4uc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMucGFuZ0J0bi5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMucGFuZ0J0bi5vbklucHV0VXAuYWRkKCgpPT57XG4gICAgICAgICAgICAvL3RoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheVBhbmcnKTtcblxuXG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICB0aGlzLm1lbnVQYW5lbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLnRpdGxlKTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMubGVmdEJ0bik7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMucGFuZ0J0bik7XG5cbiAgICAgICAgLy90aGlzLm11c2ljLmxvb3BGdWxsKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy9tZW51L3RleHRidXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5nT3ZlciBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTIwMCwgJ1BhbmcgR2FtZSBvdmVyJywge1xuICAgICAgICAgICAgZm9udDogJzM2cHggVGFob21hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZS5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0zMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnVHJ5IGFnYWluJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSszMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnTWVudScsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLnN0YXJ0Lm9uSW5wdXREb3duLmFkZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheVBhbmcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZW51Lm9uSW5wdXREb3duLmFkZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnTWVudScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuZ2FtZU92ZXJUaXRsZSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5zdGFydCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5tZW51KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2FyZEJ1dHRvbiBmcm9tICcuLi8uLi9leHRlbnNpb25zL3BhaXJzL2NhcmRidXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5UGFpcnMgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIC8vdGhpcy5iZyA9IHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCw2NjYsNjAwLCAncGFuZ0JnJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRlZDBlMSc7XG5cbiAgICAgICAgdGhpcy5udW1Sb3dzID0gNDtcbiAgICAgICAgdGhpcy5udW1Db2xzID0gNTtcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDgwO1xuICAgICAgICB0aGlzLnRpbGVTcGFjaW5nID0gMjA7XG4gICAgICAgIHRoaXMudGlsZXNMZWZ0ID0gKHRoaXMubnVtUm93cyAqIHRoaXMubnVtQ29scyk7XG5cbiAgICAgICAgdGhpcy5iYWNrT2ZUaGVDYXJkID0gMjI7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIENsaWVudHMgc3RhcnRzIGF0IHBvc2l0aW9uIDEwIChjb3VudCBzcGFjZXMgaW4gc3ByaXRlU2hlZXQpXG4gICAgICAgICAgICAqIDEwID0gR29vZ2xlXG4gICAgICAgICAgICAqIDExID0gQW1hem9uXG4gICAgICAgICAgICAqIDEyID0gQ2FwaXRhbE9uZVxuICAgICAgICAgICAgKiAxMyA9IEdvbGRtYW4gU2FjaHNcbiAgICAgICAgICAgICogMTQgPSBBY2NlbnR1cmVcbiAgICAgICAgICAgICogMTUgPSBDYXBnZW1pbmlcbiAgICAgICAgICAgICogMTYgPSBQV0NcbiAgICAgICAgICAgICogMTcgPSAuLi5cbiAgICAgICAgICAgICogMTggPSAuLi5cbiAgICAgICAgICAgICogMTkgPSAuLi5cbiAgICAgICAgICAgICogMjAgPSAuLi5cbiAgICAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2hvc2VuQ2xpZW50ID0gMTA7XG5cblxuICAgICAgICB0aGlzLmNhcmRHcm91cCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIC8vc2V0IGl0IHRvIG9uZSBtaW51dGUgKDYwKVxuICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gNjA7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XG5cbiAgICAgICAgdGhpcy5jYXJkc0FycmF5ID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5ID0gW107XG5cblxuICAgICAgICAvLy0tLS0tLSBIVUQgUkVMQVRFRCBTVFVGRlxuXG4gICAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgICAgICBmb250OiBcIjMycHggSGVsdmV0aWNhXCIsXG4gICAgICAgICAgICBmaWxsOiBcIiMwMGZmMDBcIixcbiAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dCg1LCA1LCBcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmUsIHRoaXMuc3R5bGUpO1xuICAgICAgICB0aGlzLnRpbWVUZXh0ID0gdGhpcy5hZGQudGV4dCg1LCB0aGlzLmdhbWUuaGVpZ2h0IC0gNSwgXCJUaW1lIGxlZnQ6IFwiICsgdGhpcy50aW1lTGVmdCwgdGhpcy5zdHlsZSk7XG4gICAgICAgIHRoaXMudGltZVRleHQuYW5jaG9yLnNldCgwLDEpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5sb29wKFBoYXNlci5UaW1lci5TRUNPTkQsIHRoaXMuZGVjcmVhc2VUaW1lLHRoaXMpO1xuXG4gICAgICAgIHRoaXMucGxhY2VDYXJkcygpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5sb2FkTWVudSgpO1xuXG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGZ1bmN0aW9uc1xuICAgIGxvYWRNZW51KCl7XG4gICAgICAgIGxldCBlc2NLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5FU0MpO1xuICAgICAgICBpZihlc2NLZXkpe1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNyZWFzZVRpbWUoKSB7XG4gICAgICAgIHRoaXMudGltZUxlZnQtLTtcbiAgICAgICAgdGhpcy50aW1lVGV4dC50ZXh0ID0gXCJUaW1lIGxlZnQ6IFwiICsgdGhpcy50aW1lTGVmdDtcbiAgICAgICAgaWYodGhpcy50aW1lTGVmdCA9PSAwKSB7XG4gICAgICAgICAgICAvL0NoYW5nZSB0aGlzIHRvIHBhaXJzT3ZlclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQYW5nT3ZlcicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlQ2FyZHMoKSB7XG5cbiAgICAgICAgbGV0IGxlZnRTcGFjZSA9ICh0aGlzLmdhbWUud2lkdGggLSAodGhpcy5udW1Db2xzICogdGhpcy50aWxlU2l6ZSkgLSAoKHRoaXMubnVtQ29scyAtIDEpICogXHR0aGlzLnRpbGVTcGFjaW5nKSkvMjtcbiAgICAgICAgbGV0IHRvcFNwYWNlICA9ICh0aGlzLmdhbWUuaGVpZ2h0IC0gKHRoaXMubnVtUm93cyAqIHRoaXMudGlsZVNpemUpIC0gKCh0aGlzLm51bVJvd3MgLSAxKSAqIFx0dGhpcy50aWxlU3BhY2luZykpLzI7XG5cbiAgICAgICAgLy8tLSBQb3B1bGF0ZSBhcnJheSB3aXRoIHBhaXJzIG9mIG51bWJlcnMgWzEsMSwyLDIsMywzLDQsNCwuLi5dXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVzTGVmdDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRzQXJyYXkucHVzaChNYXRoLmZsb29yKGkgLyAyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLy0tIFJhbmRvbWl6ZSAvIG1peCB0aGUgYXJyYXlcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGlsZXNMZWZ0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmcm9tID0gIHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigwLCB0aGlzLmNhcmRzQXJyYXkubGVuZ3RoLTEpO1xuICAgICAgICAgICAgbGV0IHRvICAgPSAgdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDAsIHRoaXMuY2FyZHNBcnJheS5sZW5ndGgtMSk7XG4gICAgICAgICAgICBsZXQgdGVtcCA9ICB0aGlzLmNhcmRzQXJyYXlbZnJvbV07XG5cbiAgICAgICAgICAgIHRoaXMuY2FyZHNBcnJheVtmcm9tXSA9IHRoaXMuY2FyZHNBcnJheVt0b107XG4gICAgICAgICAgICB0aGlzLmNhcmRzQXJyYXlbdG9dID0gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vLS0gRGVhbCB0aGUgY2FyZHNcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubnVtQ29sczsgaSsrKSB7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLm51bVJvd3M7IGorKykge1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgY2FyZCA9IG5ldyBDYXJkQnV0dG9uKHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0U3BhY2UgKyBpICogKHRoaXMudGlsZVNpemUgK1x0dGhpcy50aWxlU3BhY2luZyksXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvcFNwYWNlICsgaiAqICh0aGlzLnRpbGVTaXplICsgdGhpcy50aWxlU3BhY2luZyksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiAndGlsZXMnLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5zaG93Q2FyZCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tDb250ZXh0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5jYXJkc0FycmF5W2ogKiB0aGlzLm51bUNvbHMgKyBpXSxcbiAgICAgICAgICAgICAgICAgICAgaXNDbGllbnQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIHBhcnQgaXMgd2hlcmUgd2UgdGFrZSB0aGUgbGFzdCBjYXJkIGluIG91ciBzcHJpdGVzaGVldCBhbmQgcmVwbGFjZSBpdCB3aXRoIGEgY2xpZW50XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhpcyBjYXNlIHZhbHVlIDkgaXMgdGhlIGxhc3QgdmFsdWUgb2YgdGhlICdzdGFuZGFyZCcgY2FyZHNcbiAgICAgICAgICAgICAgICBpZihjYXJkLnZhbHVlID09IDkpe1xuICAgICAgICAgICAgICAgICAgICBjYXJkLnZhbHVlID0gdGhpcy5jaG9zZW5DbGllbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuaXNDbGllbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhcmQuZnJhbWUgPSB0aGlzLmJhY2tPZlRoZUNhcmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkR3JvdXAuYWRkKGNhcmQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd0NhcmQodGFyZ2V0Q2FyZCkge1xuICAgICAgICAvKlxuICAgICAgICAqICAgcHVzaCB0aGUgdmFsdWVzIGZyb20gdGhlIGNhcmRzIHRvIG91ciBzZWxlY3RlZCBhcnJheSBvZiBjYXJkc1xuICAgICAgICAqICAgaWYgeW91IGhhdmUgY2hvc2VuIDIsIGxldCdzIGNvbXBhcmUgdGhlbSB1c2luZyBjaGVja1RpbGVzXG4gICAgICAgICovXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5Lmxlbmd0aCA8IDIgJiYgdGhpcy5zZWxlY3RlZENhcmRzQXJyYXkuaW5kZXhPZih0YXJnZXRDYXJkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vVE9ETyBzb3VuZHNcbiAgICAgICAgICAgIC8vIGlmKHBsYXlTb3VuZCl7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zb3VuZEFycmF5WzBdLnBsYXkoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRhcmdldENhcmQuZnJhbWUgPSB0YXJnZXRDYXJkLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzQXJyYXkucHVzaCh0YXJnZXRDYXJkKTtcblxuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENhcmRzQXJyYXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05ELCB0aGlzLmNoZWNrVGlsZXMsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjaGVja1RpbGVzKCkge1xuICAgICAgICAvKlxuICAgICAgICAgKiAgIENoZWNrIHRoZSBpZiB0aGUgdmFsdWVzIGZyb20gb3VyIHNlbGVjdGVkQ2FyZHNBcnJheSBhcmUgZXF1YWxcbiAgICAgICAgICogICBpZiBzbywgYWRkIHNjb3JlIGFuZCBoaWRlIHRoZW0gZnJvbSB0aGUgdXNlci5cbiAgICAgICAgICovXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5WzBdLnZhbHVlID09PSB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVsxXS52YWx1ZSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogVE9ETyBzb3VuZHNcbiAgICAgICAgICAgICogaWYodGhpcy5wbGF5c291bmQpe1xuICAgICAgICAgICAgKiAgIHRoaXMuc291bmRBcnJheVsxXS5wbGF5KCk7XG4gICAgICAgICAgICAqIH1cbiAgICAgICAgICAgICogKi9cblxuICAgICAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgICAgICAgdGhpcy50aW1lTGVmdCArPSAyO1xuICAgICAgICAgICAgdGhpcy50aW1lVGV4dC50ZXh0ID0gXCJUaW1lIGxlZnQ6IFwiICsgdGhpcy50aW1lTGVmdDtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVUZXh0LnRleHQgPSBcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmU7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IEZpcmUgdXAgdGhlIGV2ZW50IGlmIGl0cyBhIGNsaWVudCBDYXJkXG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVswXS5pc0NsaWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZUNsaWVudE1lc3NhZ2UoXCJDbGllbnRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5WzBdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5WzFdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudGlsZXNMZWZ0IC09IDI7XG5cbiAgICAgICAgICAgIC8vIFdpbiBjb25kaXRpb25cbiAgICAgICAgICAgIGlmKHRoaXMudGlsZXNMZWZ0ID09PSAwICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgLy90aGlzLnBsYWNlQ2FyZHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BsYXlQYWlycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL1RPRE86IFNvdW5kc1xuICAgICAgICAgICAgLy8gaWYocGxheVNvdW5kKXtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNvdW5kQXJyYXlbMl0ucGxheSgpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGV5IGFyZSBub3QgdGhlIHNhbWUsIGZhY2UgdGhlbSBvZmZcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5WzBdLmZyYW1lID0gdGhpcy5iYWNrT2ZUaGVDYXJkO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzQXJyYXlbMV0uZnJhbWUgPSB0aGlzLmJhY2tPZlRoZUNhcmQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzQXJyYXkubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBmaXJlQ2xpZW50TWVzc2FnZShjbGllbnQpIHtcbiAgICAgICAgYWxlcnQoXCJUaGlzIGlzIGEgbWVzc2FnZSBmcm9tIGEgZGVmYXVsdCBDbGllbnRcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy9tZW51L3RleHRidXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5nT3ZlciBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTIwMCwgJ1BhbmcgR2FtZSBvdmVyJywge1xuICAgICAgICAgICAgZm9udDogJzM2cHggVGFob21hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZS5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0zMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnVHJ5IGFnYWluJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSszMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnTWVudScsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLnN0YXJ0Lm9uSW5wdXREb3duLmFkZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheVBhbmcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZW51Lm9uSW5wdXREb3duLmFkZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnTWVudScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuZ2FtZU92ZXJUaXRsZSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5zdGFydCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5tZW51KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uLy4uL3ByZWZhYnMvc2hvb3Rlci9wbGF5ZXInO1xuaW1wb3J0IEVuZW15IGZyb20gJy4uLy4uL3ByZWZhYnMvcGFuZy9lbmVteVBhbmcnO1xuaW1wb3J0IEhVRCBmcm9tICcuLi8uLi9wcmVmYWJzL3BhbmcvaHVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheVBhbmcgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmJnID0gdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLCAyMDAwLCAyMzgwLCAncGFuZ0JnJyk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAwO1xuXG5cbiAgICAgICAgLy8gLS0tLS0tLSBQTEFZRVJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogMC45MiAqIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQsXG4gICAgICAgICAgICBoZWFsdGg6IDEwLFxuICAgICAgICAgICAgYXNzZXQ6ICdzbWFsbGZpZ2h0ZXInLFxuICAgICAgICAgICAgZnJhbWU6IDJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBsYXllcik7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdEludGVydmFsID0gMC4xNjtcblxuICAgICAgICAvLyAtLS0tLS0tIEVORU1ZOiB0aGVzZSBvbmVzIGFyZSBjcmVhdGVkIGV2ZXJ5IHVwZGF0ZSB0aWNrXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbmVteVRpbWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vMS41XG4gICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCA9IDIuNTtcbiAgICAgICAgdGhpcy5lbmVteVNob290VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdEludGVydmFsID0gMTtcbiAgICAgICAgLy8gLS0tLS0tLSAhRU5FTVlcblxuICAgICAgICAvLyAtLS0tLS0tIHNtYWxsZXJFTkVNWTogdGhpcyBvbmVzIGFyZSBjcmVhdGVkIGV2ZXJ5IHVwZGF0ZSB0aWNrXG4gICAgICAgIHRoaXMuc21hbGxlckVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLnNtYWxsZXJFbmVtaWVzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICAvLyAtLS0tLS0tICFzbWFsbGVyRU5FTVlcblxuXG4gICAgICAgIC8vIC0tLS0tLS0gRU5FTVkgQ0xJRU5UOiByYW5kb21seSBjaG9zZW5cbiAgICAgICAgdGhpcy5lbmVtaWVzQ2xpZW50ID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5lbmVtaWVzQ2xpZW50LmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICAvLzEuNVxuICAgICAgICB0aGlzLmVuZW15Q2xpZW50SW50ZXJ2YWwgPSAyLjA7XG4gICAgICAgIHRoaXMuZW5lbXlDbGllbnRTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15Q2xpZW50U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgICAgICAvL2luaXRpYWxpemUgZmlyc3QgY2xpZW50XG4gICAgICAgIHRoaXMuY3JlYXRlRW5lbXlDbGllbnQoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg2LCA3NikgKiAxMCxcbiAgICAgICAgICAgIC8vMFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMCAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDUsIDEwKSAqIDEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy85XG4gICAgICAgICAgICBoZWFsdGg6IDkwLFxuICAgICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgYXNzZXQ6ICdhbGllbnMnLFxuICAgICAgICAgICAgc2l6ZTogMC44XG4gICAgICAgIH0pO1xuICAgICAgICAvLyAtLS0tLS0tICFFTkVNWSBDTElFTlQ6IHJhbmRvbWx5IGNob3NlblxuXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5sb29wKFBoYXNlci5UaW1lci5TRUNPTkQgKiAxMCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5lbmVteUludGVydmFsID4gMC4yICl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUludGVydmFsIC09IDAuMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwID0gdGhpcy5hZGQuYml0bWFwRGF0YSh0aGlzLmdhbWUud2lkdGgsIHRoaXMuZ2FtZS5oZWlnaHQpO1xuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAuY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmdhbWUud2lkdGgsIHRoaXMuZ2FtZS5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuYWRkLnNwcml0ZSgwLCAwLCB0aGlzLm92ZXJsYXlCaXRtYXApO1xuICAgICAgICB0aGlzLm92ZXJsYXkudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYWxwaGEgPSAwLjc1O1xuXG4gICAgICAgIHRoaXMuaHVkID0gbmV3IEhVRCh7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICBwbGF5ZXI6IHRoaXMucGxheWVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0gU09VTkRTXG4gICAgICAgLy8gdGhpcy5tdXNpYyA9IHRoaXMuZ2FtZS5hZGQuYXVkaW8oJ3BsYXlNdXNpYycpO1xuICAgICAgICB0aGlzLmJ1bGxldEhpdFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2J1bGxldEhpdCcpO1xuICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnZW5lbXlFeHBsb3Npb24nKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdwbGF5ZXJFeHBsb3Npb24nKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2dhbWVPdmVyJyk7XG5cbiAgICAgICAgLy90aGlzLm11c2ljLmxvb3BGdWxsKCk7XG5cblxuXG4gICAgICAgIC8vRGVmYXVsdHNcbiAgICAgICAgLy90aGlzLmVuZW15VGltZSA9IDA7XG4gICAgICAgIC8vdGhpcy5lbmVteUludGVydmFsID0gMS41O1xuICAgICAgICAvL3RoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICAvL3RoaXMuZW5lbXlTaG9vdEludGVydmFsID0gMTtcbiAgICAgICAgLy90aGlzLnBsYXllclNob290VGltZSA9IDA7XG4gICAgICAgIC8vdGhpcy5wbGF5ZXJTaG9vdEludGVydmFsID0gMC4xNjtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZW5lbXlUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuICAgICAgICB0aGlzLnBsYXllclNob290VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy5lbmVteVRpbWUgPiB0aGlzLmVuZW15SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUaW1lID0gMDtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteSh7XG4gICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNiwgNzYpICogMTAsXG4gICAgICAgICAgICAgICAgLy8wXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDUsIDEwKSAqIDEwICogKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDUsIDEwKSAqIDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLzlcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDksXG4gICAgICAgICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgICAgIGFzc2V0OiAnYWxpZW4nLFxuICAgICAgICAgICAgICAgIHNpemU6IDIuNVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuZW15U2hvb3RUaW1lID4gdGhpcy5lbmVteVNob290SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIYXMgbXVlcnRvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyU2hvb3RUaW1lID4gdGhpcy5wbGF5ZXJTaG9vdEludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNob290VGltZSA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvb3RLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5TUEFDRUJBUik7XG4gICAgICAgICAgICAgICAgaWYoc2hvb3RLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvb3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllci5idWxsZXRzLCB0aGlzLmVuZW1pZXMsIHRoaXMuaGl0RW5lbXksIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLmJ1bGxldHMsIHRoaXMuc21hbGxlckVuZW1pZXMsIHRoaXMuaGl0RW5lbXksIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLCBbdGhpcy5lbmVtaWVzLHRoaXMuc21hbGxlckVuZW1pZXNdLCB0aGlzLmNyYXNoRW5lbXksIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMubG9hZE1lbnUoKTtcbiAgICAgICAgLy8gdGhpcy5iZy50aWxlUG9zaXRpb24ueCArPSAzO1xuICAgIH1cblxuICAgIGNyZWF0ZUVuZW15KGRhdGEpIHtcblxuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBsZXQgdG90YWxFbmVtaWVzID0gdGhpcy5lbmVtaWVzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgY29uc29sZS5sb2codG90YWxFbmVtaWVzKTtcblxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICBlbmVteSA9IG5ldyBFbmVteShkYXRhKTtcbiAgICAgICAgICAgIGlmKHRvdGFsRW5lbWllcyA8IDUpe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5hZGQoZW5lbXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZW5lbXkucmVzZXQoZGF0YSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU21hbGxlckVuZW15KGRhdGEpIHtcblxuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLnNtYWxsZXJFbmVtaWVzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgbGV0IHRvdGFsRW5lbWllcyA9IHRoaXMuc21hbGxlckVuZW1pZXMuY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgICAgIGlmICghZW5lbXkpIHtcbiAgICAgICAgICAgIGVuZW15ID0gbmV3IEVuZW15KGRhdGEpO1xuICAgICAgICAgICAgaWYodG90YWxFbmVtaWVzIDwgMjQpe1xuICAgICAgICAgICAgICAgIHRoaXMuc21hbGxlckVuZW1pZXMuYWRkKGVuZW15KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVuZW15Q2xpZW50KGRhdGEpIHtcblxuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXNDbGllbnQuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBsZXQgdG90YWxFbmVtaWVzID0gdGhpcy5lbmVtaWVzQ2xpZW50LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgY29uc29sZS5sb2codG90YWxFbmVtaWVzKTtcblxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICBlbmVteSA9IG5ldyBFbmVteShkYXRhKTtcbiAgICAgICAgICAgIGlmKHRvdGFsRW5lbWllcyA8PSAxKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXNDbGllbnQuYWRkKGVuZW15KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGhpdEVmZmVjdChvYmosIGNvbG9yKSB7XG4gICAgICAgIGxldCB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4ob2JqKTtcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIoKTtcbiAgICAgICAgbGV0IGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgIGxldCBwYXJ0aWNsZVNwZWVkID0gMTAwO1xuICAgICAgICBsZXQgbWF4UGFydGljbGVzID0gMTA7XG5cbiAgICAgICAgdHdlZW4udG8oe3RpbnQ6IDB4ZmYwMDAwfSwgMTAwKTtcbiAgICAgICAgdHdlZW4ub25Db21wbGV0ZS5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgb2JqLnRpbnQgPSAweGZmZmZmZjtcbiAgICAgICAgfSk7XG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XG5cbiAgICAgICAgZW1pdHRlci54ID0gb2JqLng7XG4gICAgICAgIGVtaXR0ZXIueSA9IG9iai55O1xuICAgICAgICBlbWl0dGVyLmdyYXZpdHkgPSAwO1xuICAgICAgICBlbWl0dGVyLm1ha2VQYXJ0aWNsZXMoJ3BhcnRpY2xlJyk7XG5cbiAgICAgICAgaWYgKG9iai5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgcGFydGljbGVTcGVlZCA9IDIwMDtcbiAgICAgICAgICAgIG1heFBhcnRpY2xlcyA9IDQwO1xuICAgICAgICAgICAgY29sb3IgPSAweGZmMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIubWluUGFydGljbGVTcGVlZC5zZXRUbygtcGFydGljbGVTcGVlZCwgLXBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLm1heFBhcnRpY2xlU3BlZWQuc2V0VG8ocGFydGljbGVTcGVlZCwgcGFydGljbGVTcGVlZCk7XG4gICAgICAgIGVtaXR0ZXIuc3RhcnQodHJ1ZSwgNTAwLCBudWxsLCBtYXhQYXJ0aWNsZXMpO1xuICAgICAgICBlbWl0dGVyLnVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgICAgIGlmKGVtaXR0ZXJQaHlzaWNzVGltZSA+PSAwLjYpe1xuICAgICAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZW1pdHRlci5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnRpbnQgPSBjb2xvcik7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXRFbmVteShidWxsZXQsIGVuZW15KSB7XG5cbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICBlbmVteS5kYW1hZ2UoYnVsbGV0LmhlYWx0aCk7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KGVuZW15LCBidWxsZXQudGludCk7XG5cbiAgICAgICAgaWYgKCFlbmVteS5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kLnBsYXkoXCJcIiwgMCwgMC41KTtcbiAgICAgICAgICAgIHRoaXMuaHVkLnVwZGF0ZVNjb3JlKGVuZW15Lm1heEhlYWx0aCk7XG4gICAgICAgICAgICBzd2l0Y2goZW5lbXkuc2l6ZSl7XG4gICAgICAgICAgICAgICAgLy9MYXJnZSAtPiBNZWRpdW1cbiAgICAgICAgICAgICAgICBjYXNlIDIuNTpcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU21hbGxlckVuZW15KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGVuZW15LngsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlbmVteS55LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAyNSAqIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0zMCAqIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhbHRoOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0OiAnYWxpZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMS41XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTbWFsbGVyRW5lbXkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZW5lbXkueCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZW5lbXkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogLTI1ICogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLTMwICogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWx0aDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRTcGVlZDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgxMCwgMjApICogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogJ2FsaWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEuNVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWxsZXQua2lsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3Jhc2hFbmVteShwbGF5ZXIsIGVuZW15KSB7XG4gICAgICAgIC8vZW5lbXkuZGFtYWdlKGVuZW15LmhlYWx0aCk7XG4gICAgICAgIGVuZW15LmRhbWFnZSgzKTtcbiAgICAgICAgLy9wbGF5ZXIuZGFtYWdlKGVuZW15LmhlYWx0aCk7XG4gICAgICAgIHBsYXllci5kYW1hZ2UoMSk7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KHBsYXllcik7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KGVuZW15KTtcbiAgICAgICAgaWYgKCFlbmVteS5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICB0aGlzLmh1ZC51cGRhdGVTY29yZShlbmVteS5tYXhIZWFsdGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaHVkLnVwZGF0ZUhlYWx0aCgpO1xuICAgICAgICBpZiAoIXBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMztcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICBsZXQgdGltZXIgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUodGhpcy5nYW1lLCB0cnVlKTtcbiAgICAgICAgdGltZXIuYWRkKDMwMDAsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlclNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnUGFuZ092ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgbG9hZE1lbnUoKXtcbiAgICAgICAgbGV0IGVzY0tleSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLkVTQyk7XG4gICAgICAgIGlmKGVzY0tleSl7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5raWxsKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ01lbnUnKTtcblxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBwcmVsb2FkKCkge1xuXG4gICAgICAgIHRoaXMubG9hZGVyQmcgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCAnbG9hZGVyQmcnKTtcbiAgICAgICAgdGhpcy5sb2FkZXJCYXIgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCAnbG9hZGVyQmFyJyk7XG4gICAgICAgIHRoaXMubG9hZGVyQmcuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIHRoaXMubG9hZGVyQmFyLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMubG9hZGVyQmFyKTtcbiAgICAgICAgLy8gU2hvb3RlclxuXG4gICAgICAgIHRoaXMubG9hZC5hdGxhc0pTT05BcnJheSgnc21hbGxmaWdodGVyJywgJ2ltZy9zaG9vdGVyL3Nwcml0ZXNoZWV0L3NtYWxsZmlnaHRlci5wbmcnLCAnZGF0YS9zaG9vdGVyL3Nwcml0ZXNoZWV0L3NtYWxsZmlnaHRlci5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdGxhc0pTT05BcnJheSgnYWxpZW4nLCAnaW1nL3Nob290ZXIvc3ByaXRlc2hlZXQvYWxpZW4ucG5nJywgJ2RhdGEvc2hvb3Rlci9zcHJpdGVzaGVldC9hbGllbi5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdGxhc0pTT05BcnJheSgnYnV0dG9uJywgJ2ltZy9idXR0b24ucG5nJywgJ2RhdGEvZ2VuZXJpYy9idXR0b24uanNvbicpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ZhcmJhY2snLCAnaW1nL3Nob290ZXIvZmFyYmFjay5qcGcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnaW1nL3Nob290ZXIvYnVsbGV0LnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BhcnRpY2xlJywgJ2ltZy9zaG9vdGVyL3BhcnRpY2xlLmdpZicpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2hlYWx0aGJhcicsICdpbWcvc2hvb3Rlci9oZWFsdGhiYXIucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaHVkQmcnLCAnaW1nL3Nob290ZXIvaHVkLWJnLnBuZycpO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheU11c2ljJywgWydhdWRpby9zaG9vdGVyL211c2ljL3BsYXkubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVNdXNpYycsIFsnYXVkaW8vc2hvb3Rlci9tdXNpYy9tZW51Lm1wMyddKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVPdmVyJywgWydhdWRpby9zaG9vdGVyL3NvdW5kL21lbnUtb3Zlci5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudU91dCcsIFsnYXVkaW8vc2hvb3Rlci9zb3VuZC9tZW51LW91dC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudURvd24nLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvbWVudS1jbGljay5tcDMnXSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdidWxsZXRIaXQnLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvYnVsbGV0LWhpdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZW5lbXlTaG90JywgWydhdWRpby9zaG9vdGVyL3NvdW5kL2VuZW15LXNob3QubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2VuZW15RXhwbG9zaW9uJywgWydhdWRpby9zaG9vdGVyL3NvdW5kL2VuZW15LWV4cGxvc2lvbi5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyU2hvdCcsIFsnYXVkaW8vc2hvb3Rlci9zb3VuZC9wbGF5ZXItc2hvdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyRXhwbG9zaW9uJywgWydhdWRpby9zaG9vdGVyL3NvdW5kL3BsYXllci1leHBsb3Npb24ubXAzJ10pO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZ2FtZU92ZXInLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvZ2FtZS1vdmVyLm1wMyddKTtcbiAgICAgICAgLy8hZ2FtZSAxXG5cblxuICAgICAgICAvL1BhbmdcblxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BhbmdCZycsICdpbWcvcGFuZy9wYW5nQmcucG5nJyk7XG5cbiAgICAgICAgLy8hUGFuZ1xuXG5cbiAgICAgICAgLy8gbWF0Y2hpbmcgcGFpcnNcblxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3RpbGVzJywnaW1nL3BhaXJzL3RpbGVzQ2xpZW50LnBuZycsIDgwLCA4MCwgMjQpO1xuXG4gICAgICAgIC8vIG1hdGNoaW5nIHBhaXJzXG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVGV4dEJ1dHRvbiBmcm9tICcuLi8uLi9leHRlbnNpb25zL21lbnUvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdHYW1lIG92ZXInLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdUcnkgYWdhaW4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZKzMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi8uLi9wcmVmYWJzL3Nob290ZXIvcGxheWVyJztcbmltcG9ydCBFbmVteSBmcm9tICcuLi8uLi9wcmVmYWJzL3Nob290ZXIvZW5lbXknO1xuaW1wb3J0IEhVRCBmcm9tICcuLi8uLi9wcmVmYWJzL3BhbmcvaHVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vZmFyYmFjayA9IGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5mYXJiYWNrID0gdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLCA4MDAsIDIzODAsICdmYXJiYWNrJyk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAwO1xuXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiAwLjkyICogdGhpcy5nYW1lLndvcmxkLmhlaWdodCxcbiAgICAgICAgICAgIGhlYWx0aDogMTAwLFxuICAgICAgICAgICAgYXNzZXQ6ICdzbWFsbGZpZ2h0ZXInLFxuICAgICAgICAgICAgZnJhbWU6IDFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBsYXllcik7XG5cbiAgICAgICAgdGhpcy5odWQgPSBuZXcgSFVEKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHBsYXllcjogdGhpcy5wbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vblVwLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbmVteVRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSAxLjU7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdEludGVydmFsID0gMC4xNjtcblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05EICogMTAsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlJbnRlcnZhbCA+IDAuOSApe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCAtPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcCA9IHRoaXMuYWRkLmJpdG1hcERhdGEodGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwLmN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgdGhpcy5vdmVybGF5Qml0bWFwKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFscGhhID0gMC43NTtcblxuICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdwbGF5TXVzaWMnKTtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdidWxsZXRIaXQnKTtcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2VuZW15RXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgncGxheWVyRXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdnYW1lT3ZlcicpO1xuXG4gICAgICAgIC8vdGhpcy5tdXNpYy5sb29wRnVsbCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLmVuZW15VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5lbmVteVNob290VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lID4gdGhpcy5lbmVteUludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15VGltZSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMCAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhbHRoOiA5LFxuICAgICAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgICAgICBhc3NldDogJ2FsaWVuJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmVteVNob290VGltZSA+IHRoaXMuZW5lbXlTaG9vdEludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoQWxpdmUoZW5lbXkgPT4gZW5lbXkuc2hvb3QoKSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllclNob290VGltZSA+IHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvb3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLmJ1bGxldHMsIHRoaXMuZW5lbWllcywgdGhpcy5oaXRFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIsIHRoaXMuZW5lbWllcywgdGhpcy5jcmFzaEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllciwgZW5lbXkuYnVsbGV0cywgdGhpcy5oaXRQbGF5ZXIsIG51bGwsIHRoaXMpKTtcblxuICAgICAgICB0aGlzLmZhcmJhY2sudGlsZVBvc2l0aW9uLnkgKz0gMztcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcblxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICBlbmVteSA9IG5ldyBFbmVteShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5hZGQoZW5lbXkpO1xuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGhpdEVmZmVjdChvYmosIGNvbG9yKSB7XG4gICAgICAgIGxldCB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4ob2JqKTtcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIoKTtcbiAgICAgICAgbGV0IGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgIGxldCBwYXJ0aWNsZVNwZWVkID0gMTAwO1xuICAgICAgICBsZXQgbWF4UGFydGljbGVzID0gMTA7XG5cbiAgICAgICAgdHdlZW4udG8oe3RpbnQ6IDB4ZmYwMDAwfSwgMTAwKTtcbiAgICAgICAgdHdlZW4ub25Db21wbGV0ZS5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgb2JqLnRpbnQgPSAweGZmZmZmZjtcbiAgICAgICAgfSk7XG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XG5cbiAgICAgICAgZW1pdHRlci54ID0gb2JqLng7XG4gICAgICAgIGVtaXR0ZXIueSA9IG9iai55O1xuICAgICAgICBlbWl0dGVyLmdyYXZpdHkgPSAwO1xuICAgICAgICBlbWl0dGVyLm1ha2VQYXJ0aWNsZXMoJ3BhcnRpY2xlJyk7XG5cbiAgICAgICAgaWYgKG9iai5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgcGFydGljbGVTcGVlZCA9IDIwMDtcbiAgICAgICAgICAgIG1heFBhcnRpY2xlcyA9IDQwO1xuICAgICAgICAgICAgY29sb3IgPSAweGZmMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIubWluUGFydGljbGVTcGVlZC5zZXRUbygtcGFydGljbGVTcGVlZCwgLXBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLm1heFBhcnRpY2xlU3BlZWQuc2V0VG8ocGFydGljbGVTcGVlZCwgcGFydGljbGVTcGVlZCk7XG4gICAgICAgIGVtaXR0ZXIuc3RhcnQodHJ1ZSwgNTAwLCBudWxsLCBtYXhQYXJ0aWNsZXMpO1xuICAgICAgICBlbWl0dGVyLnVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgICAgIGlmKGVtaXR0ZXJQaHlzaWNzVGltZSA+PSAwLjYpe1xuICAgICAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZW1pdHRlci5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnRpbnQgPSBjb2xvcik7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXRFbmVteShidWxsZXQsIGVuZW15KSB7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgZW5lbXkuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSwgYnVsbGV0LnRpbnQpO1xuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIHRoaXMuaHVkLnVwZGF0ZVNjb3JlKGVuZW15Lm1heEhlYWx0aCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVsbGV0LmtpbGwoKTtcbiAgICB9XG5cbiAgICBoaXRQbGF5ZXIocGxheWVyLCBidWxsZXQpIHtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICBwbGF5ZXIuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QocGxheWVyLCBidWxsZXQudGludCk7XG4gICAgICAgIGlmICghcGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBidWxsZXQua2lsbCgpO1xuICAgIH1cblxuICAgIGNyYXNoRW5lbXkocGxheWVyLCBlbmVteSkge1xuICAgICAgICBlbmVteS5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgcGxheWVyLmRhbWFnZShlbmVteS5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChwbGF5ZXIpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSk7XG4gICAgICAgIGlmICghZW5lbXkuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgdGhpcy5odWQudXBkYXRlU2NvcmUoZW5lbXkubWF4SGVhbHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDM7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgbGV0IHRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKHRoaXMuZ2FtZSwgdHJ1ZSk7XG4gICAgICAgIHRpbWVyLmFkZCgzMDAwLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ092ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgfVxuXG59XG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSnpjbU12YW5NdlpYaDBaVzV6YVc5dWN5OXRaVzUxTDNSbGVIUmlkWFIwYjI0dWFuTWlMQ0p6Y21NdmFuTXZaWGgwWlc1emFXOXVjeTl3WVdseWN5OWpZWEprWW5WMGRHOXVMbXB6SWl3aWMzSmpMMnB6TDJkaGJXVXVhbk1pTENKemNtTXZhbk12Y0hKbFptRmljeTl3WVc1bkwySjFiR3hsZEM1cWN5SXNJbk55WXk5cWN5OXdjbVZtWVdKekwzQmhibWN2Wlc1bGJYbFFZVzVuTG1weklpd2ljM0pqTDJwekwzQnlaV1poWW5NdmNHRnVaeTlvZFdRdWFuTWlMQ0p6Y21NdmFuTXZjSEpsWm1GaWN5OXphRzl2ZEdWeUwyVnVaVzE1TG1weklpd2ljM0pqTDJwekwzQnlaV1poWW5NdmMyaHZiM1JsY2k5d2JHRjVaWEl1YW5NaUxDSnpjbU12YW5NdmMzUmhkR1Z6TDJKdmIzUXVhbk1pTENKemNtTXZhbk12YzNSaGRHVnpMMmx1WkdWNExtcHpJaXdpYzNKakwycHpMM04wWVhSbGN5OXRaVzUxTG1weklpd2ljM0pqTDJwekwzTjBZWFJsY3k5d1lXbHljeTl3WVdseWMwOTJaWEl1YW5NaUxDSnpjbU12YW5NdmMzUmhkR1Z6TDNCaGFYSnpMM0JzWVhsUVlXbHljeTVxY3lJc0luTnlZeTlxY3k5emRHRjBaWE12Y0dGdVp5OXdZVzVuVDNabGNpNXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZjR0Z1Wnk5d2JHRjVVR0Z1Wnk1cWN5SXNJbk55WXk5cWN5OXpkR0YwWlhNdmNISmxiRzloWkM1cWN5SXNJbk55WXk5cWN5OXpkR0YwWlhNdmMyaHZiM1JsY2k5dmRtVnlMbXB6SWl3aWMzSmpMMnB6TDNOMFlYUmxjeTl6YUc5dmRHVnlMM0JzWVhrdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3T3pzN1NVTkJjVUlzVlRzN08wRkJSV3BDTERoQ1FVRnhTRHRCUVVGQkxGbEJRWFpITEVsQlFYVkhMRkZCUVhaSExFbEJRWFZITzBGQlFVRXNXVUZCYWtjc1EwRkJhVWNzVVVGQmFrY3NRMEZCYVVjN1FVRkJRU3haUVVFNVJpeERRVUU0Uml4UlFVRTVSaXhEUVVFNFJqdEJRVUZCTEZsQlFUTkdMRXRCUVRKR0xGRkJRVE5HTEV0QlFUSkdPMEZCUVVFc1dVRkJjRVlzVVVGQmIwWXNVVUZCY0VZc1VVRkJiMFk3UVVGQlFTeFpRVUV4UlN4bFFVRXdSU3hSUVVFeFJTeGxRVUV3UlR0QlFVRkJMRmxCUVhwRUxGTkJRWGxFTEZGQlFYcEVMRk5CUVhsRU8wRkJRVUVzV1VGQk9VTXNVVUZCT0VNc1VVRkJPVU1zVVVGQk9FTTdRVUZCUVN4WlFVRndReXhUUVVGdlF5eFJRVUZ3UXl4VFFVRnZRenRCUVVGQkxGbEJRWHBDTEU5QlFYbENMRkZCUVhwQ0xFOUJRWGxDTzBGQlFVRXNXVUZCYUVJc1MwRkJaMElzVVVGQmFFSXNTMEZCWjBJN1FVRkJRU3haUVVGVUxFdEJRVk1zVVVGQlZDeExRVUZUT3p0QlFVRkJPenRCUVVGQkxEUklRVU16Unl4SlFVUXlSeXhGUVVOeVJ5eERRVVJ4Unl4RlFVTnNSeXhEUVVSclJ5eEZRVU12Uml4TFFVUXJSaXhGUVVONFJpeFJRVVIzUml4RlFVTTVSU3hsUVVRNFJTeEZRVU0zUkN4VFFVUTJSQ3hGUVVOc1JDeFJRVVJyUkN4RlFVTjRReXhUUVVSM1F5eEZRVU0zUWl4UFFVUTJRanM3UVVGSGFrZ3NZMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJXaXhEUVVGclFpeEhRVUZzUWpzN1FVRkZRU3hqUVVGTExFdEJRVXdzUjBGQllTeExRVUZpTzBGQlEwRXNZMEZCU3l4TFFVRk1MRWRCUVdFc1MwRkJZanRCUVVOQkxHTkJRVXNzU1VGQlRDeEhRVUZaTEVsQlFVa3NUMEZCVHl4SlFVRllMRU5CUVdkQ0xFMUJRVXNzU1VGQmNrSXNSVUZCTWtJc1EwRkJNMElzUlVGQk9FSXNRMEZCT1VJc1JVRkJhVU1zVFVGQlN5eExRVUYwUXl4RlFVRTJReXhOUVVGTExFdEJRV3hFTEVOQlFWbzdRVUZEUVN4alFVRkxMRWxCUVV3c1EwRkJWU3hOUVVGV0xFTkJRV2xDTEV0QlFXcENMRU5CUVhWQ0xFZEJRWFpDT3p0QlFVVkJMR05CUVVzc1VVRkJUQ3hEUVVGakxFMUJRVXNzU1VGQmJrSTdPMEZCVm1sSU8wRkJXWEJJT3pzN1JVRmtiVU1zVDBGQlR5eE5PenRyUWtGQk1VSXNWVHM3T3pzN096czdPenM3T3pzN08wbERRVUVzVlRzN08wRkJSV3BDTERoQ1FVRnpTRHRCUVVGQkxGbEJRWGhITEVsQlFYZEhMRkZCUVhoSExFbEJRWGRITzBGQlFVRXNXVUZCYkVjc1EwRkJhMGNzVVVGQmJFY3NRMEZCYTBjN1FVRkJRU3haUVVFdlJpeERRVUVyUml4UlFVRXZSaXhEUVVFclJqdEJRVUZCTEZsQlFUVkdMRXRCUVRSR0xGRkJRVFZHTEV0QlFUUkdPMEZCUVVFc1dVRkJja1lzVVVGQmNVWXNVVUZCY2tZc1VVRkJjVVk3UVVGQlFTeFpRVUV6UlN4bFFVRXlSU3hSUVVFelJTeGxRVUV5UlR0QlFVRkJMRmxCUVRGRUxGTkJRVEJFTEZGQlFURkVMRk5CUVRCRU8wRkJRVUVzV1VGQkwwTXNVVUZCSzBNc1VVRkJMME1zVVVGQkswTTdRVUZCUVN4WlFVRnlReXhUUVVGeFF5eFJRVUZ5UXl4VFFVRnhRenRCUVVGQkxGbEJRVEZDTEU5QlFUQkNMRkZCUVRGQ0xFOUJRVEJDTzBGQlFVRXNXVUZCYkVJc1MwRkJhMElzVVVGQmJFSXNTMEZCYTBJN1FVRkJRU3haUVVGWUxGRkJRVmNzVVVGQldDeFJRVUZYT3p0QlFVRkJPenRCUVVGQkxEUklRVU0xUnl4SlFVUTBSeXhGUVVOMFJ5eERRVVJ6Unl4RlFVTnVSeXhEUVVSdFJ5eEZRVU5vUnl4TFFVUm5SeXhGUVVONlJpeFJRVVI1Uml4RlFVTXZSU3hsUVVRclJTeEZRVU01UkN4VFFVUTRSQ3hGUVVOdVJDeFJRVVJ0UkN4RlFVTjZReXhUUVVSNVF5eEZRVU01UWl4UFFVUTRRanM3UVVGSGJFZ3NZMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJXaXhEUVVGclFpeEhRVUZzUWp0QlFVTkJMR05CUVVzc1VVRkJUQ3hIUVVGblFpeFJRVUZvUWp0QlFVTkJMR05CUVVzc1MwRkJUQ3hIUVVGaExFdEJRV0k3UVVGRFFTeGpRVUZMTEZGQlFVd3NSMEZCWjBJc1VVRkJhRUk3UVVGT2EwZzdRVUZQY2tnN096dEZRVlJ0UXl4UFFVRlBMRTA3TzJ0Q1FVRXhRaXhWT3pzN096dEJRMEZ5UWpzN1NVRkJXU3hOT3pzN08wRkJRMW9zU1VGQlRTeFBRVUZQTEVsQlFVa3NUMEZCVHl4SlFVRllMRU5CUVdkQ0xFZEJRV2hDTEVWQlFYRkNMRWxCUVhKQ0xFVkJRVEpDTEU5QlFVOHNTVUZCYkVNc1EwRkJZanM3UVVGRlFTeFBRVUZQTEVsQlFWQXNRMEZCV1N4TlFVRmFMRVZCUVc5Q0xFOUJRWEJDTEVOQlFUUkNPMEZCUVVFc1UwRkJVeXhMUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVOQlFXVXNTMEZCWml4RlFVRnpRaXhQUVVGUExFdEJRVkFzUTBGQmRFSXNRMEZCVkR0QlFVRkJMRU5CUVRWQ096dEJRVVZCTEV0QlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVFVGQmFrSTdPenM3T3pzN096czdPenM3T3p0SlEweHhRaXhOT3pzN1FVRkZha0lzTUVKQlFUUkVPMEZCUVVFc1dVRkJPVU1zU1VGQk9FTXNVVUZCT1VNc1NVRkJPRU03UVVGQlFTeFpRVUY0UXl4RFFVRjNReXhSUVVGNFF5eERRVUYzUXp0QlFVRkJMRmxCUVhKRExFTkJRWEZETEZGQlFYSkRMRU5CUVhGRE8wRkJRVUVzV1VGQmJFTXNTMEZCYTBNc1VVRkJiRU1zUzBGQmEwTTdRVUZCUVN4WlFVRXpRaXhOUVVFeVFpeFJRVUV6UWl4TlFVRXlRanRCUVVGQkxEWkNRVUZ1UWl4SlFVRnRRanRCUVVGQkxGbEJRVzVDTEVsQlFXMUNMRFpDUVVGYUxGRkJRVms3TzBGQlFVRTdPMEZCUVVFc2IwaEJRMnhFTEVsQlJHdEVMRVZCUXpWRExFTkJSRFJETEVWQlEzcERMRU5CUkhsRExFVkJRM1JETEV0QlJITkRPenRCUVVkNFJDeGpRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRmFMRU5CUVd0Q0xFZEJRV3hDTzBGQlEwRXNZMEZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeEhRVUZxUWp0QlFVTkJMR05CUVVzc1RVRkJUQ3hIUVVGakxFMUJRV1E3UVVGRFFTeGpRVUZMTEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1kwRkJTeXhuUWtGQlRDeEhRVUYzUWl4SlFVRjRRanRCUVVOQkxHTkJRVXNzWlVGQlRDeEhRVUYxUWl4SlFVRjJRanRCUVZKM1JEdEJRVk16UkRzN08wVkJXQ3RDTEU5QlFVOHNUVHM3YTBKQlFYUkNMRTA3T3pzN096czdPenM3T3pzN1FVTkJja0k3T3pzN096czdPenM3T3p0SlFVVnhRaXhMT3pzN1FVRkZha0lzZVVKQlFXOUZPMEZCUVVFc1dVRkJkRVFzU1VGQmMwUXNVVUZCZEVRc1NVRkJjMFE3UVVGQlFTeFpRVUZvUkN4RFFVRm5SQ3hSUVVGb1JDeERRVUZuUkR0QlFVRkJMRmxCUVRkRExFTkJRVFpETEZGQlFUZERMRU5CUVRaRE8wRkJRVUVzV1VGQk1VTXNTMEZCTUVNc1VVRkJNVU1zUzBGQk1FTTdRVUZCUVN4WlFVRnVReXhMUVVGdFF5eFJRVUZ1UXl4TFFVRnRRenRCUVVGQkxGbEJRVFZDTEUxQlFUUkNMRkZCUVRWQ0xFMUJRVFJDTzBGQlFVRXNXVUZCY0VJc1YwRkJiMElzVVVGQmNFSXNWMEZCYjBJN1FVRkJRU3haUVVGU0xFbEJRVkVzVVVGQlVpeEpRVUZST3p0QlFVRkJPenRCUVVGQkxHdElRVU14UkN4SlFVUXdSQ3hGUVVOd1JDeERRVVJ2UkN4RlFVTnFSQ3hEUVVScFJDeEZRVU01UXl4TFFVUTRReXhGUVVOMlF5eExRVVIxUXpzN1FVRkhhRVVzWTBGQlN5eEpRVUZNTEVkQlFWa3NTVUZCV2pzN1FVRkZRU3hqUVVGTExFMUJRVXdzUTBGQldTeExRVUZhTEVOQlFXdENMRWRCUVd4Q096dEJRVVZCTzBGQlEwRXNZMEZCU3l4SlFVRk1MRWRCUVZrc1NVRkJXanRCUVVOQkxHTkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCYVVJc1NVRkJha0k3UVVGRFFTeGpRVUZMTEUxQlFVd3NSMEZCWXl4TlFVRmtPMEZCUTBFc1kwRkJTeXhUUVVGTUxFZEJRV2xDTEUxQlFXcENPenRCUVVkQk8wRkJRMEVzWTBGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhOUVVGc1FpeERRVUY1UWl4TlFVRjZRanRCUVVOQkxHTkJRVXNzU1VGQlRDeERRVUZWTEd0Q1FVRldMRWRCUVN0Q0xFbEJRUzlDTzBGQlEwRXNZMEZCU3l4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVGclFpeERRVUZzUWl4SFFVRnpRaXhIUVVGMFFqdEJRVU5CTEdOQlFVc3NTVUZCVEN4RFFVRlZMRTFCUVZZc1EwRkJhVUlzUjBGQmFrSXNRMEZCY1VJc1EwRkJja0k3TzBGQlJVRXNZMEZCU3l4VlFVRk1MRU5CUVdkQ0xFZEJRV2hDTEVOQlFXOUNMRlZCUVhCQ0xFVkJRV2RETEVOQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvc1JVRkJUeXhEUVVGUUxFVkJRVlVzUTBGQlZpeEZRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUlVGQmJVSXNRMEZCYmtJc1JVRkJjMElzUTBGQmRFSXNSVUZCZVVJc1EwRkJla0lzUlVGQk5FSXNRMEZCTlVJc1JVRkJLMElzUlVGQkwwSXNSVUZCYlVNc1JVRkJia01zUlVGQmRVTXNSVUZCZGtNc1JVRkJNa01zUlVGQk0wTXNSVUZCSzBNc1JVRkJMME1zUTBGQmFFTXNSVUZCYjBZc1JVRkJjRVlzUlVGQmQwWXNTVUZCZUVZN1FVRkRRU3hqUVVGTExFbEJRVXdzUTBGQlZTeFZRVUZXT3p0QlFVVkJMR05CUVVzc1QwRkJUQ3hIUVVGbExFMUJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4TFFVRmtMRVZCUVdZN1FVRkRRU3hqUVVGTExFOUJRVXdzUTBGQllTeFZRVUZpTEVkQlFUQkNMRWxCUVRGQ08wRkJRMEVzWTBGQlN5eFhRVUZNTEVkQlFXMUNMRmRCUVc1Q096dEJRVVZCTEdOQlFVc3NVMEZCVEN4SFFVRnBRaXhOUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNTMEZCWkN4RFFVRnZRaXhYUVVGd1FpeERRVUZxUWpzN1FVRXpRbWRGTzBGQk5rSnVSVHM3T3p0cFEwRkZVVHM3UVVGRlRDeG5Ra0ZCU1N4TFFVRkxMRkZCUVV3c1EwRkJZeXhEUVVGa0xFZEJRV3RDTEU5QlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUUzUXl4RlFVRnZSRHRCUVVOb1JDeHhRa0ZCU3l4UlFVRk1MRU5CUVdNc1EwRkJaQ3hIUVVGclFpeFBRVUZQTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQmRrSXNSMEZCSzBJc1EwRkJha1E3UVVGRFFTeHhRa0ZCU3l4SlFVRk1MRU5CUVZVc1VVRkJWaXhEUVVGdFFpeERRVUZ1UWl4SlFVRjNRaXhEUVVGRExFTkJRWHBDTzBGQlEwZ3NZVUZJUkN4TlFVbExMRWxCUVVrc1MwRkJTeXhSUVVGTUxFTkJRV01zUTBGQlpDeEhRVUZyUWl4UFFVRlBMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCTjBNc1JVRkJiMFE3UVVGRGNrUXNjVUpCUVVzc1VVRkJUQ3hEUVVGakxFTkJRV1FzUjBGQmEwSXNUMEZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFYWkNMRWRCUVN0Q0xFTkJRV3BFTzBGQlEwRXNjVUpCUVVzc1NVRkJUQ3hEUVVGVkxGRkJRVllzUTBGQmJVSXNRMEZCYmtJc1NVRkJkMElzUTBGQlF5eERRVUY2UWp0QlFVTklPenRCUVVWRUxHZENRVUZKTEV0QlFVc3NVVUZCVEN4RFFVRmpMRU5CUVdRc1IwRkJhMElzUzBGQlN5eE5RVUZNTEVkQlFXTXNRMEZCYUVNc1IwRkJiME1zUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhOUVVGNFJDeEZRVUZuUlR0QlFVTTFSQ3h4UWtGQlN5eEpRVUZNTzBGQlEwZzdRVUZEU2pzN095dENRVWxOTEUwc1JVRkJVVHRCUVVOWUxHbElRVUZoTEUxQlFXSTdRVUZEU0RzN08zRkRRVVV5UXp0QlFVRkJMR2RDUVVGd1F5eERRVUZ2UXl4VFFVRndReXhEUVVGdlF6dEJRVUZCTEdkQ1FVRnFReXhEUVVGcFF5eFRRVUZxUXl4RFFVRnBRenRCUVVGQkxHZENRVUU1UWl4TlFVRTRRaXhUUVVFNVFpeE5RVUU0UWp0QlFVRkJMR2RDUVVGMFFpeFhRVUZ6UWl4VFFVRjBRaXhYUVVGelFqdEJRVUZCTEdkQ1FVRlVMRXRCUVZNc1UwRkJWQ3hMUVVGVE96dEJRVU40UXl4blNFRkJXU3hEUVVGYUxFVkJRV1VzUTBGQlppeEZRVUZyUWl4TlFVRnNRanRCUVVOQkxHbENRVUZMTEZkQlFVd3NSMEZCYlVJc1YwRkJia0k3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1VVRkJWaXhEUVVGdFFpeERRVUZ1UWl4SFFVRjFRaXhOUVVGTkxFTkJRVGRDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxGRkJRVllzUTBGQmJVSXNRMEZCYmtJc1IwRkJkVUlzVFVGQlRTeERRVUUzUWp0QlFVTklPenM3TzBWQk5VUTRRaXhQUVVGUExFMDdPMnRDUVVGeVFpeExPenM3T3pzN096czdPenRCUTBaeVFqczdPenM3T3pzN096czdPMGxCUTNGQ0xFYzdPenRCUVVOcVFpeDFRa0ZCT0VJN1FVRkJRU3haUVVGb1FpeEpRVUZuUWl4UlFVRm9RaXhKUVVGblFqdEJRVUZCTEZsQlFWWXNUVUZCVlN4UlFVRldMRTFCUVZVN08wRkJRVUU3TzBGQlFVRXNPRWRCUTNCQ0xFbEJSRzlDT3p0QlFVVXhRaXhqUVVGTExFbEJRVXdzUjBGQldTeEpRVUZhTzBGQlEwRXNZMEZCU3l4TlFVRk1MRWRCUVdNc1RVRkJaRHRCUVVOQkxHTkJRVXNzUlVGQlRDeEhRVUZWTEVsQlFVa3NUMEZCVHl4TFFVRllMRU5CUVdsQ0xFMUJRVXNzU1VGQmRFSXNSVUZCTkVJc1EwRkJOVUlzUlVGQkswSXNRMEZCTDBJc1JVRkJhME1zVDBGQmJFTXNRMEZCVmp0QlFVTkJMR05CUVVzc1MwRkJUQ3hIUVVGaExFZEJRV0k3UVVGRFFTeGpRVUZMTEZOQlFVd3NSMEZCYVVJc1NVRkJTU3hQUVVGUExFMUJRVmdzUTBGQmEwSXNUVUZCU3l4SlFVRjJRaXhGUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhEUVVGb1F5eEZRVUZ0UXl4WFFVRnVReXhEUVVGcVFqdEJRVU5CTEdOQlFVc3NVMEZCVEN4RFFVRmxMRXRCUVdZc1EwRkJjVUlzUzBGQmNrSXNRMEZCTWtJc1MwRkJNMElzUlVGQmEwTXNSVUZCYkVNN08wRkJSVUVzWTBGQlN5eExRVUZNTEVkQlFXRXNRMEZCWWp0QlFVTkJMR05CUVVzc1ZVRkJUQ3hIUVVGclFpeFRRVUZzUWp0QlFVTkJMR05CUVVzc1UwRkJUQ3hIUVVGcFFpeEpRVUZKTEU5QlFVOHNTVUZCV0N4RFFVRm5RaXhOUVVGTExFbEJRWEpDTEVWQlFUSkNMRVZCUVROQ0xFVkJRU3RDTEVWQlFTOUNMRVZCUVcxRExFMUJRVXNzVlVGQlRDeEhRVUZyUWl4TlFVRkxMRXRCUVRGRUxFVkJRV2xGTzBGQlF6bEZMR3RDUVVGTkxHTkJSSGRGTzBGQlJUbEZMR3RDUVVGTkxFOUJSbmRGTzBGQlJ6bEZMRzFDUVVGUE96dEJRVWgxUlN4VFFVRnFSU3hEUVVGcVFqczdRVUZQUVN4alFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGTExFVkJRV1E3UVVGRFFTeGpRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRkxMRk5CUVdRN1FVRkRRU3hqUVVGTExFZEJRVXdzUTBGQlV5eE5RVUZMTEZOQlFXUTdRVUZ3UWpCQ08wRkJjVUkzUWpzN096dHhRMEZGV1N4TkxFVkJRVkU3UVVGRGFrSXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUTBGQmIwSXNTVUZCU1N4UFFVRlBMRk5CUVZnc1EwRkJjVUlzUTBGQmNrSXNSVUZCZDBJc1EwRkJlRUlzUlVGQk5FSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1RVRkJXaXhIUVVGeFFpeExRVUZMTEUxQlFVd3NRMEZCV1N4VFFVRnNReXhIUVVFclF5eExRVUZMTEV0QlFTOUZMRVZCUVhOR0xFVkJRWFJHTEVOQlFYQkNPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEZWQlFXWTdRVUZEU0RzN08yOURRVVZYTEUwc1JVRkJVVHRCUVVOb1FpeHBRa0ZCU3l4TFFVRk1MRWxCUVdNc1RVRkJaRHRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4SlFVRm1MRWRCUVhOQ0xFdEJRVXNzVlVGQlRDeEhRVUZ0UWl4TFFVRkxMRXRCUVV3c1IwRkJZU3hGUVVGMFJEdEJRVU5JT3pzN08wVkJhRU0wUWl4UFFVRlBMRXM3TzJ0Q1FVRnVRaXhITzBGQmEwTndRanM3T3pzN096czdPenM3T3p0QlEyNURSRHM3T3pzN096czdPenM3TzBsQlJYRkNMRXM3T3p0QlFVVnFRaXg1UWtGQkswUTdRVUZCUVN4WlFVRnFSQ3hKUVVGcFJDeFJRVUZxUkN4SlFVRnBSRHRCUVVGQkxGbEJRVE5ETEVOQlFUSkRMRkZCUVRORExFTkJRVEpETzBGQlFVRXNXVUZCZUVNc1EwRkJkME1zVVVGQmVFTXNRMEZCZDBNN1FVRkJRU3haUVVGeVF5eExRVUZ4UXl4UlFVRnlReXhMUVVGeFF6dEJRVUZCTEZsQlFUbENMRXRCUVRoQ0xGRkJRVGxDTEV0QlFUaENPMEZCUVVFc1dVRkJka0lzVFVGQmRVSXNVVUZCZGtJc1RVRkJkVUk3UVVGQlFTeFpRVUZtTEZkQlFXVXNVVUZCWml4WFFVRmxPenRCUVVGQk96dEJRVUZCTEd0SVFVTnlSQ3hKUVVSeFJDeEZRVU12UXl4RFFVUXJReXhGUVVNMVF5eERRVVEwUXl4RlFVTjZReXhMUVVSNVF5eEZRVU5zUXl4TFFVUnJRenM3UVVGSE0wUXNZMEZCU3l4SlFVRk1MRWRCUVZrc1NVRkJXanM3UVVGRlFTeGpRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRmFMRU5CUVd0Q0xFZEJRV3hDTzBGQlEwRXNZMEZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeEhRVUZxUWp0QlFVTkJMR05CUVVzc1RVRkJUQ3hIUVVGakxFMUJRV1E3UVVGRFFTeGpRVUZMTEZOQlFVd3NSMEZCYVVJc1RVRkJha0k3UVVGRFFTeGpRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFMUJRV3hDTEVOQlFYbENMRTFCUVhwQ096dEJRVVZCTEdOQlFVc3NWVUZCVEN4RFFVRm5RaXhIUVVGb1FpeERRVUZ2UWl4VlFVRndRaXhGUVVGblF5eERRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVU4c1EwRkJVQ3hGUVVGVkxFTkJRVllzUlVGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFVkJRVzFDTEVOQlFXNUNMRVZCUVhOQ0xFTkJRWFJDTEVWQlFYbENMRU5CUVhwQ0xFVkJRVFJDTEVOQlFUVkNMRVZCUVN0Q0xFVkJRUzlDTEVWQlFXMURMRVZCUVc1RExFVkJRWFZETEVWQlFYWkRMRVZCUVRKRExFVkJRVE5ETEVWQlFTdERMRVZCUVM5RExFTkJRV2hETEVWQlFXOUdMRVZCUVhCR0xFVkJRWGRHTEVsQlFYaEdPMEZCUTBFc1kwRkJTeXhKUVVGTUxFTkJRVlVzVlVGQlZqczdRVUZGUVN4alFVRkxMRTlCUVV3c1IwRkJaU3hOUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNTMEZCWkN4RlFVRm1PMEZCUTBFc1kwRkJTeXhQUVVGTUxFTkJRV0VzVlVGQllpeEhRVUV3UWl4SlFVRXhRanRCUVVOQkxHTkJRVXNzVjBGQlRDeEhRVUZ0UWl4WFFVRnVRanM3UVVGRlFTeGpRVUZMTEZOQlFVd3NSMEZCYVVJc1RVRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEV0QlFXUXNRMEZCYjBJc1YwRkJjRUlzUTBGQmFrSTdPMEZCYkVJeVJEdEJRVzlDT1VRN096czdhVU5CUlZFN08wRkJSVXdzWjBKQlFVa3NTMEZCU3l4UlFVRk1MRU5CUVdNc1EwRkJaQ3hIUVVGclFpeFBRVUZQTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQk4wTXNSVUZCYjBRN1FVRkRhRVFzY1VKQlFVc3NVVUZCVEN4RFFVRmpMRU5CUVdRc1IwRkJhMElzVDBGQlR5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRWFpDTEVkQlFTdENMRU5CUVdwRU8wRkJRMEVzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRkZCUVZZc1EwRkJiVUlzUTBGQmJrSXNTVUZCZDBJc1EwRkJReXhEUVVGNlFqdEJRVU5JTEdGQlNFUXNUVUZKU3l4SlFVRkpMRXRCUVVzc1VVRkJUQ3hEUVVGakxFTkJRV1FzUjBGQmEwSXNUMEZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFUZERMRVZCUVc5RU8wRkJRM0pFTEhGQ1FVRkxMRkZCUVV3c1EwRkJZeXhEUVVGa0xFZEJRV3RDTEU5QlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUYyUWl4SFFVRXJRaXhEUVVGcVJEdEJRVU5CTEhGQ1FVRkxMRWxCUVV3c1EwRkJWU3hSUVVGV0xFTkJRVzFDTEVOQlFXNUNMRWxCUVhkQ0xFTkJRVU1zUTBGQmVrSTdRVUZEU0RzN1FVRkZSQ3huUWtGQlNTeExRVUZMTEZGQlFVd3NRMEZCWXl4RFFVRmtMRWRCUVd0Q0xFdEJRVXNzVFVGQlRDeEhRVUZqTEVOQlFXaERMRWRCUVc5RExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1RVRkJlRVFzUlVGQlowVTdRVUZETlVRc2NVSkJRVXNzU1VGQlREdEJRVU5JTzBGQlEwbzdPenRuUTBGRlR6czdRVUZGU2l4cFFrRkJTeXhUUVVGTUxFTkJRV1VzU1VGQlppeERRVUZ2UWl4RlFVRndRaXhGUVVGMVFpeERRVUYyUWl4RlFVRjVRaXhIUVVGNlFqczdRVUZGUVN4blFrRkJTU3hUUVVGVExFdEJRVXNzVDBGQlRDeERRVUZoTEdOQlFXSXNRMEZCTkVJc1MwRkJOVUlzUTBGQllqczdRVUZGUVN4blFrRkJTU3hEUVVGRExFMUJRVXdzUlVGQllUdEJRVU5VTEhsQ1FVRlRMSEZDUVVGWE8wRkJRMmhDTERCQ1FVRk5MRXRCUVVzc1NVRkVTenRCUVVWb1FpeDFRa0ZCUnl4TFFVRkxMRU5CUmxFN1FVRkhhRUlzZFVKQlFVY3NTMEZCU3l4TlFVaFJPMEZCU1doQ0xEUkNRVUZSTEVOQlNsRTdRVUZMYUVJc01rSkJRVThzVVVGTVV6dEJRVTFvUWl3d1FrRkJUVHRCUVU1VkxHbENRVUZZTEVOQlFWUTdRVUZSUVN4eFFrRkJTeXhQUVVGTUxFTkJRV0VzUjBGQllpeERRVUZwUWl4TlFVRnFRanRCUVVOSUxHRkJWa1FzVFVGWFN6dEJRVU5FTEhWQ1FVRlBMRXRCUVZBc1EwRkJZU3hMUVVGTExFTkJRV3hDTEVWQlFYRkNMRXRCUVVzc1RVRkJNVUlzUlVGQmEwTXNRMEZCYkVNN1FVRkRTRHM3UVVGRlJDeHRRa0ZCVHl4SlFVRlFMRU5CUVZrc1VVRkJXaXhEUVVGeFFpeERRVUZ5UWl4SFFVRjVRaXhMUVVGTExGZEJRVGxDTzBGQlEwZzdPenNyUWtGRlRTeE5MRVZCUVZFN1FVRkRXQ3hwU0VGQllTeE5RVUZpTzBGQlEwZzdPenR4UTBGRk1rTTdRVUZCUVN4blFrRkJjRU1zUTBGQmIwTXNVMEZCY0VNc1EwRkJiME03UVVGQlFTeG5Ra0ZCYWtNc1EwRkJhVU1zVTBGQmFrTXNRMEZCYVVNN1FVRkJRU3huUWtGQk9VSXNUVUZCT0VJc1UwRkJPVUlzVFVGQk9FSTdRVUZCUVN4blFrRkJkRUlzVjBGQmMwSXNVMEZCZEVJc1YwRkJjMEk3UVVGQlFTeG5Ra0ZCVkN4TFFVRlRMRk5CUVZRc1MwRkJVenM3UVVGRGVFTXNaMGhCUVZrc1EwRkJXaXhGUVVGbExFTkJRV1lzUlVGQmEwSXNUVUZCYkVJN1FVRkRRU3hwUWtGQlN5eFhRVUZNTEVkQlFXMUNMRmRCUVc1Q08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRkZCUVZZc1EwRkJiVUlzUTBGQmJrSXNSMEZCZFVJc1RVRkJUU3hEUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hSUVVGV0xFTkJRVzFDTEVOQlFXNUNMRWRCUVhWQ0xFMUJRVTBzUTBGQk4wSTdRVUZEU0RzN096dEZRWHBGT0VJc1QwRkJUeXhOT3p0clFrRkJja0lzU3pzN096czdPenM3T3pzN096dEJRMFp5UWpzN096czdPenM3T3pzN08wbEJSWEZDTEUwN096dEJRVVZxUWl3d1FrRkJhMFE3UVVGQlFTeFpRVUZ3UXl4SlFVRnZReXhSUVVGd1F5eEpRVUZ2UXp0QlFVRkJMRmxCUVRsQ0xFTkJRVGhDTEZGQlFUbENMRU5CUVRoQ08wRkJRVUVzV1VGQk0wSXNRMEZCTWtJc1VVRkJNMElzUTBGQk1rSTdRVUZCUVN4WlFVRjRRaXhMUVVGM1FpeFJRVUY0UWl4TFFVRjNRanRCUVVGQkxGbEJRV3BDTEV0QlFXbENMRkZCUVdwQ0xFdEJRV2xDTzBGQlFVRXNXVUZCVml4TlFVRlZMRkZCUVZZc1RVRkJWVHM3UVVGQlFUczdRVUZCUVN4dlNFRkRlRU1zU1VGRWQwTXNSVUZEYkVNc1EwRkVhME1zUlVGREwwSXNRMEZFSzBJc1JVRkROVUlzUzBGRU5FSXNSVUZEY2tJc1MwRkVjVUk3TzBGQlJ6bERMR05CUVVzc1NVRkJUQ3hIUVVGWkxFbEJRVm83TzBGQlJVRXNZMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJXaXhEUVVGclFpeEhRVUZzUWp0QlFVTkJMR05CUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNSMEZCYWtJN08wRkJSVUVzWTBGQlN5eE5RVUZNTEVkQlFXTXNUVUZCWkR0QlFVTkJMR05CUVVzc1UwRkJUQ3hIUVVGcFFpeE5RVUZxUWpzN1FVRkpRU3hqUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRTFCUVd4Q0xFTkJRWGxDTEUxQlFYcENPMEZCUTBFN1FVRkRRU3hqUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRU5CUVd4Q0xFZEJRWE5DTEVkQlFYUkNPMEZCUTBFc1kwRkJTeXhKUVVGTUxFTkJRVlVzYTBKQlFWWXNSMEZCSzBJc1NVRkJMMEk3UVVGRFFUczdRVUZGUVN4alFVRkxMRTlCUVV3c1IwRkJaU3hOUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNTMEZCWkN4RlFVRm1PMEZCUTBFc1kwRkJTeXhQUVVGTUxFTkJRV0VzVlVGQllpeEhRVUV3UWl4SlFVRXhRanRCUVVOQkxHTkJRVXNzVjBGQlRDeEhRVUZ0UWl4RFFVRkRMRWRCUVhCQ096dEJRVVZCTEdOQlFVc3NVMEZCVEN4SFFVRnBRaXhOUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNTMEZCWkN4RFFVRnZRaXhaUVVGd1FpeERRVUZxUWp0QlFYWkNPRU03UVVGM1FtcEVPenM3TzJsRFFVVlJPenRCUVVWTU96czdRVUZKUVRzN1FVRkZTU3huUWtGQlNTeFZRVUZWTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVVVGQmFFSXNRMEZCZVVJc1RVRkJla0lzUTBGQlowTXNUMEZCVHl4UlFVRlFMRU5CUVdkQ0xFbEJRV2hFTEVOQlFXUTdRVUZEUVN4blFrRkJTU3hYUVVGWExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1VVRkJhRUlzUTBGQmVVSXNUVUZCZWtJc1EwRkJaME1zVDBGQlR5eFJRVUZRTEVOQlFXZENMRXRCUVdoRUxFTkJRV1k3UVVGRFFTeG5Ra0ZCUnl4UFFVRklMRVZCUVZjN1FVRkRVQ3h4UWtGQlN5eERRVUZNTEVsQlFWVXNRMEZCVmp0QlFVVklMR0ZCU0VRc1RVRkpTeXhKUVVGSExGRkJRVWdzUlVGQldUdEJRVU5pTEhGQ1FVRkxMRU5CUVV3c1NVRkJWU3hEUVVGV08wRkJSVWc3UVVGRlVqczdPMmREUVVWUE96dEJRVVZLTEdkQ1FVRkpMRk5CUVZNc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQllpeERRVUUwUWl4TFFVRTFRaXhEUVVGaU96dEJRVVZCTEdkQ1FVRkpMRU5CUVVNc1RVRkJUQ3hGUVVGaE8wRkJRMVFzZVVKQlFWTXNjVUpCUVZjN1FVRkRhRUlzTUVKQlFVMHNTMEZCU3l4SlFVUkxPMEZCUldoQ0xIVkNRVUZITEV0QlFVc3NRMEZHVVR0QlFVZG9RaXgxUWtGQlJ5eExRVUZMTEVkQlNGRTdRVUZKYUVJN1FVRkRRU3cwUWtGQlVTeERRVXhSTzBGQlRXaENMREpDUVVGUExGRkJUbE03UVVGUGFFSXNNRUpCUVUwN1FVRlFWU3hwUWtGQldDeERRVUZVTzBGQlUwRTdRVUZEUVN4dlFrRkJSeXhMUVVGTExFOUJRVXdzUTBGQllTeFJRVUZpTEVOQlFYTkNMRTFCUVhSQ0xFbEJRV2RETEVOQlFXNURMRVZCUVhGRE8wRkJRMnBETEhsQ1FVRkxMRk5CUVV3c1EwRkJaU3hKUVVGbUxFTkJRVzlDTEVWQlFYQkNMRVZCUVhWQ0xFTkJRWFpDTEVWQlFYbENMRWRCUVhwQ08wRkJRMEVzZVVKQlFVc3NUMEZCVEN4RFFVRmhMRWRCUVdJc1EwRkJhVUlzVFVGQmFrSTdPMEZCUlVFc01rSkJRVThzU1VGQlVDeERRVUZaTEZGQlFWb3NRMEZCY1VJc1EwRkJja0lzUjBGQmVVSXNTMEZCU3l4WFFVRTVRanRCUVVOSU8wRkJRMG9zWVVGcVFrUXNUVUZyUWtzN1FVRkRSQ3h4UWtGQlN5eFRRVUZNTEVOQlFXVXNTVUZCWml4RFFVRnZRaXhGUVVGd1FpeEZRVUYxUWl4RFFVRjJRaXhGUVVGNVFpeEhRVUY2UWp0QlFVTkJMSFZDUVVGUExFdEJRVkFzUTBGQllTeExRVUZMTEVOQlFXeENMRVZCUVhGQ0xFdEJRVXNzUjBGQk1VSXNSVUZCSzBJc1EwRkJMMEk3UVVGRFFTeDFRa0ZCVHl4SlFVRlFMRU5CUVZrc1VVRkJXaXhEUVVGeFFpeERRVUZ5UWl4SFFVRjVRaXhMUVVGTExGZEJRVGxDTzBGQlEwZzdRVUZIU2pzN095dENRVVZOTEUwc1JVRkJVVHRCUVVOWUxHMUlRVUZoTEUxQlFXSTdRVUZEU0RzN096dEZRV3hHSzBJc1QwRkJUeXhOT3p0clFrRkJkRUlzVFRzN096czdPenM3T3pzN096czdPenM3U1VOR1FTeEpPenM3T3pzN096czdPenRyUTBGRlVEdEJRVU5PTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEdWQlFXaENMRWRCUVd0RExFMUJRV3hETzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWVUZCYUVJc1JVRkJORUlzYlVKQlFUVkNPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1YwRkJhRUlzUlVGQk5rSXNiMEpCUVRkQ08wRkJRMGc3T3p0cFEwRkZVVHRCUVVOTUxHbENRVUZMTEV0QlFVd3NRMEZCVnl4VFFVRllMRWRCUVhWQ0xFOUJRVThzV1VGQlVDeERRVUZ2UWl4UlFVRXpRenM3UVVGRlFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc2NVSkJRVmdzUjBGQmJVTXNTVUZCYmtNN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NiVUpCUVZnc1IwRkJhVU1zU1VGQmFrTTdPMEZCUlVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1YwRkJiRUlzUTBGQk9FSXNUMEZCVHl4UFFVRlFMRU5CUVdVc1RVRkJOME03UVVGRFFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeFRRVUZxUWp0QlFVTklPenM3TzBWQmFFSTJRaXhQUVVGUExFczdPMnRDUVVGd1FpeEpPenM3T3pzN096czdPenM3T3p0NVEwTkJZaXhQT3pzN096czdPenM3TkVOQlEwRXNUenM3T3pzN096czdPM2xEUVVOQkxFODdPenM3T3pzN096dDVRMEZGUVN4UE96czdPenM3T3pzN2VVTkJRMEVzVHpzN096czdPenM3T3paRFFVZEJMRTg3T3pzN096czdPenMyUTBGRFFTeFBPenM3T3pzN096czdPRU5CUjBFc1R6czdPenM3T3pzN096aERRVU5CTEU4N096czdPenM3T3pzN096czdPenRCUTJKU096czdPenM3T3pzN096czdTVUZGY1VJc1NUczdPenM3T3pzN096czdhVU5CUlZJN1FVRkJRVHM3UVVGRFRDeHBRa0ZCU3l4TFFVRk1MRWRCUVdFc1NVRkJTU3hQUVVGUExFbEJRVmdzUTBGQlowSXNTMEZCU3l4SlFVRnlRaXhGUVVFeVFpeExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRVE5ETEVWQlFXOUVMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCYUVJc1IwRkJkMElzUjBGQk5VVXNSVUZCYVVZc1owSkJRV3BHTEVWQlFXMUhPMEZCUXpWSExITkNRVUZOTEdGQlJITkhPMEZCUlRWSExITkNRVUZOTEU5QlJuTkhPMEZCUnpWSExIVkNRVUZQTzBGQlNIRkhMR0ZCUVc1SExFTkJRV0k3UVVGTFFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1RVRkJXQ3hEUVVGclFpeExRVUZzUWl4RFFVRjNRaXhIUVVGNFFqdEJRVU5CT3pzN1FVRkhRU3hwUWtGQlN5eFBRVUZNTEVkQlFXVXNlVUpCUVdVN1FVRkRNVUlzYzBKQlFVMHNTMEZCU3l4SlFVUmxPMEZCUlRGQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFSXNSMEZCTUVJc1IwRkdTRHRCUVVjeFFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlNFODdRVUZKTVVJc2RVSkJRVThzVVVGS2JVSTdRVUZMTVVJc01rSkJRVmNzUTBGTVpUdEJRVTB4UWl3d1FrRkJWU3hEUVU1blFqdEJRVTh4UWl3eVFrRkJWeXhEUVZCbE8wRkJVVEZDTEhsQ1FVRlRMRU5CVW1sQ08wRkJVekZDTEhWQ1FVRlBMRk5CVkcxQ08wRkJWVEZDTEhWQ1FVRlBPMEZCUTBnc01FSkJRVTBzWTBGRVNEdEJRVVZJTERCQ1FVRk5MRTlCUmtnN1FVRkhTQ3d5UWtGQlR6dEJRVWhLTzBGQlZtMUNMR0ZCUVdZc1EwRkJaanM3UVVGcFFrRXNhVUpCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGd1FqdEJRVU5CTEdsQ1FVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRk5CUVdZc1EwRkJia0k3UVVGRFFTeHBRa0ZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4VlFVRm1MRU5CUVhCQ096dEJRVVZCTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3haUVVGaUxFTkJRVEJDTEV0QlFVc3NXVUZCTDBJN1FVRkRRU3hwUWtGQlN5eFBRVUZNTEVOQlFXRXNWMEZCWWl4RFFVRjVRaXhMUVVGTExGZEJRVGxDTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGbEJRV0lzUTBGQk1FSXNTMEZCU3l4WlFVRXZRanM3UVVGRlFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1UwRkJZaXhEUVVGMVFpeEhRVUYyUWl4RFFVRXlRaXhaUVVGSk8wRkJRek5DTzBGQlEwRXNkVUpCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNWMEZCYWtJN1FVRkZTQ3hoUVVwRU96dEJRVkZCTzBGQlEwRXNhVUpCUVVzc1MwRkJUQ3hIUVVGaExIbENRVUZsTzBGQlEzaENMSE5DUVVGTkxFdEJRVXNzU1VGRVlUdEJRVVY0UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUmtzN1FVRkhlRUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVWhMTzBGQlNYaENMSFZDUVVGUExGRkJTbWxDTzBGQlMzaENMREpDUVVGWExFTkJUR0U3UVVGTmVFSXNNRUpCUVZVc1EwRk9ZenRCUVU5NFFpd3lRa0ZCVnl4RFFWQmhPMEZCVVhoQ0xIbENRVUZUTEVOQlVtVTdRVUZUZUVJc2RVSkJRVThzVDBGVWFVSTdRVUZWZUVJc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4alFVUklPMEZCUlVnc01FSkJRVTBzVDBGR1NEdEJRVWRJTERKQ1FVRlBPMEZCU0VvN1FVRldhVUlzWVVGQlppeERRVUZpT3p0QlFXbENRU3hwUWtGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYQkNPMEZCUTBFc2FVSkJRVXNzVjBGQlRDeEhRVUZ0UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVTBGQlppeERRVUZ1UWp0QlFVTkJMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNFSTdPMEZCUlVFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZsQlFWZ3NRMEZCZDBJc1MwRkJTeXhaUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhYUVVGWUxFTkJRWFZDTEV0QlFVc3NWMEZCTlVJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NXVUZCV0N4RFFVRjNRaXhMUVVGTExGbEJRVGRDT3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFRRVUZZTEVOQlFYRkNMRWRCUVhKQ0xFTkJRWGxDTEZsQlFVazdRVUZEZWtJN1FVRkRRU3gxUWtGQlN5eExRVUZNTEVOQlFWY3NTMEZCV0N4RFFVRnBRaXhOUVVGcVFqdEJRVVZJTEdGQlNrUTdRVUZMUVR0QlFVTkJMR2xDUVVGTExFOUJRVXdzUjBGQlpTeDVRa0ZCWlR0QlFVTXhRaXh6UWtGQlRTeExRVUZMTEVsQlJHVTdRVUZGTVVJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGb1FpeEhRVUV3UWl4SFFVWklPMEZCUnpGQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGSVR6dEJRVWt4UWl4MVFrRkJUeXhSUVVwdFFqdEJRVXN4UWl3eVFrRkJWeXhEUVV4bE8wRkJUVEZDTERCQ1FVRlZMRU5CVG1kQ08wRkJUekZDTERKQ1FVRlhMRU5CVUdVN1FVRlJNVUlzZVVKQlFWTXNRMEZTYVVJN1FVRlRNVUlzZFVKQlFVOHNXVUZVYlVJN1FVRlZNVUlzZFVKQlFVODdRVUZEU0N3d1FrRkJUU3hqUVVSSU8wRkJSVWdzTUVKQlFVMHNUMEZHU0R0QlFVZElMREpDUVVGUE8wRkJTRW83UVVGV2JVSXNZVUZCWml4RFFVRm1PenRCUVdsQ1FTeHBRa0ZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4VlFVRm1MRU5CUVhCQ08wRkJRMEVzYVVKQlFVc3NWMEZCVEN4SFFVRnRRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNVMEZCWml4RFFVRnVRanRCUVVOQkxHbENRVUZMTEZsQlFVd3NSMEZCYjBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZWQlFXWXNRMEZCY0VJN08wRkJSVUVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRmxCUVdJc1EwRkJNRUlzUzBGQlN5eFpRVUV2UWp0QlFVTkJMR2xDUVVGTExFOUJRVXdzUTBGQllTeFhRVUZpTEVOQlFYbENMRXRCUVVzc1YwRkJPVUk3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1dVRkJZaXhEUVVFd1FpeExRVUZMTEZsQlFTOUNPenRCUVVWQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4VFFVRmlMRU5CUVhWQ0xFZEJRWFpDTEVOQlFUSkNMRmxCUVVrN1FVRkRNMEk3UVVGRFFTeDFRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeFZRVUZxUWp0QlFVZElMR0ZCVEVRN08wRkJVMEVzYVVKQlFVc3NVMEZCVEN4SFFVRnBRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFXcENPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEVkQlFXWXNRMEZCYlVJc1MwRkJTeXhMUVVGNFFqdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hIUVVGbUxFTkJRVzFDTEV0QlFVc3NUMEZCZUVJN1FVRkRRU3hwUWtGQlN5eFRRVUZNTEVOQlFXVXNSMEZCWml4RFFVRnRRaXhMUVVGTExFdEJRWGhDTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFZEJRV1lzUTBGQmJVSXNTMEZCU3l4UFFVRjRRanM3UVVGRlFUdEJRVU5JT3pzN08wVkJkRWcyUWl4UFFVRlBMRXM3TzJ0Q1FVRndRaXhKT3pzN096czdPenM3T3p0QlEwWnlRanM3T3pzN096czdPenM3TzBsQlJYRkNMRkU3T3pzN096czdPenM3TzJsRFFVVlNPMEZCUVVFN08wRkJSVXdzYVVKQlFVc3NZVUZCVEN4SFFVRnhRaXhKUVVGSkxFOUJRVThzU1VGQldDeERRVUZuUWl4TFFVRkxMRWxCUVhKQ0xFVkJRVEpDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQk0wTXNSVUZCYjBRc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhIUVVGM1FpeEhRVUUxUlN4RlFVRnBSaXhuUWtGQmFrWXNSVUZCYlVjN1FVRkRjRWdzYzBKQlFVMHNZVUZFT0VjN1FVRkZjRWdzYzBKQlFVMHNUMEZHT0VjN1FVRkhjRWdzZFVKQlFVODdRVUZJTmtjc1lVRkJia2NzUTBGQmNrSTdRVUZMUVN4cFFrRkJTeXhoUVVGTUxFTkJRVzFDTEUxQlFXNUNMRU5CUVRCQ0xFdEJRVEZDTEVOQlFXZERMRWRCUVdoRE96dEJRVVZCTEdsQ1FVRkxMRXRCUVV3c1IwRkJZU3g1UWtGQlpUdEJRVU40UWl4elFrRkJUU3hMUVVGTExFbEJSR0U3UVVGRmVFSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVWkxPMEZCUjNoQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFSXNSMEZCZDBJc1JVRklTRHRCUVVsNFFpeDFRa0ZCVHl4UlFVcHBRanRCUVV0NFFpd3lRa0ZCVnl4RFFVeGhPMEZCVFhoQ0xEQkNRVUZWTEVOQlRtTTdRVUZQZUVJc01rSkJRVmNzUTBGUVlUdEJRVkY0UWl4NVFrRkJVeXhEUVZKbE8wRkJVM2hDTEhWQ1FVRlBMRmRCVkdsQ08wRkJWWGhDTEhWQ1FVRlBPMEZCUTBnc01FSkJRVTBzWTBGRVNEdEJRVVZJTERCQ1FVRk5MRTlCUmtnN1FVRkhTQ3d5UWtGQlR6dEJRVWhLTzBGQlZtbENMR0ZCUVdZc1EwRkJZanM3UVVGcFFrRXNhVUpCUVVzc1NVRkJUQ3hIUVVGWkxIbENRVUZsTzBGQlEzWkNMSE5DUVVGTkxFdEJRVXNzU1VGRVdUdEJRVVYyUWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUmtrN1FVRkhka0lzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4SFFVRjNRaXhGUVVoS08wRkJTWFpDTEhWQ1FVRlBMRkZCU21kQ08wRkJTM1pDTERKQ1FVRlhMRU5CVEZrN1FVRk5ka0lzTUVKQlFWVXNRMEZPWVR0QlFVOTJRaXd5UWtGQlZ5eERRVkJaTzBGQlVYWkNMSGxDUVVGVExFTkJVbU03UVVGVGRrSXNkVUpCUVU4c1RVRlVaMEk3UVVGVmRrSXNkVUpCUVU4N1FVRkRTQ3d3UWtGQlRTeGpRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXWjBJc1lVRkJaaXhEUVVGYU96dEJRV2xDUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDTzBGQlEwRXNhVUpCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1UwRkJaaXhEUVVGdVFqdEJRVU5CTEdsQ1FVRkxMRmxCUVV3c1IwRkJiMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRlZCUVdZc1EwRkJjRUk3TzBGQlJVRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExGbEJRVmdzUTBGQmQwSXNTMEZCU3l4WlFVRTNRanRCUVVOQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WFFVRllMRU5CUVhWQ0xFdEJRVXNzVjBGQk5VSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzV1VGQldDeERRVUYzUWl4TFFVRkxMRmxCUVRkQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRmxCUVZZc1EwRkJkVUlzUzBGQlN5eFpRVUUxUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFhRVUZXTEVOQlFYTkNMRXRCUVVzc1YwRkJNMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1dVRkJWaXhEUVVGMVFpeExRVUZMTEZsQlFUVkNPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WFFVRllMRU5CUVhWQ0xFZEJRWFpDTEVOQlFUSkNMRmxCUVVrN1FVRkRNMElzZFVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVlVGQmFrSTdRVUZEU0N4aFFVWkVPenRCUVVsQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4WFFVRldMRU5CUVhOQ0xFZEJRWFJDTEVOQlFUQkNMRmxCUVVrN1FVRkRNVUlzZFVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVFVGQmFrSTdRVUZEU0N4aFFVWkVPenRCUVVsQkxHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVUZ5UWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzUzBGQlN5eGhRVUUxUWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzUzBGQlN5eExRVUUxUWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzUzBGQlN5eEpRVUUxUWp0QlFVTklPenM3TzBWQmNFVnBReXhQUVVGUExFczdPMnRDUVVGNFFpeFJPenM3T3pzN096czdPenRCUTBaeVFqczdPenM3T3pzN096czdPMGxCUlhGQ0xGTTdPenM3T3pzN096czdPMmxEUVVWU096dEJRVVZNTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNaVUZCYUVJc1IwRkJhME1zVTBGQmJFTTdPMEZCUlVFc2FVSkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFXWTdRVUZEUVN4cFFrRkJTeXhQUVVGTUxFZEJRV1VzUTBGQlpqdEJRVU5CTEdsQ1FVRkxMRkZCUVV3c1IwRkJaMElzUlVGQmFFSTdRVUZEUVN4cFFrRkJTeXhYUVVGTUxFZEJRVzFDTEVWQlFXNUNPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeEhRVUZyUWl4TFFVRkxMRTlCUVV3c1IwRkJaU3hMUVVGTExFOUJRWFJET3p0QlFVVkJMR2xDUVVGTExHRkJRVXdzUjBGQmNVSXNSVUZCY2tJN08wRkJSVWs3T3pzN096czdPenM3T3pzN08wRkJZMG9zYVVKQlFVc3NXVUZCVEN4SFFVRnZRaXhGUVVGd1FqczdRVUZIUVN4cFFrRkJTeXhUUVVGTUxFZEJRV2xDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJha0k3UVVGRFFUdEJRVU5CTEdsQ1FVRkxMRkZCUVV3c1IwRkJaMElzUlVGQmFFSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFZEJRV0VzUTBGQllqdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1IwRkJhVUlzUTBGQmFrSTdPMEZCUlVFc2FVSkJRVXNzVlVGQlRDeEhRVUZyUWl4RlFVRnNRanRCUVVOQkxHbENRVUZMTEd0Q1FVRk1MRWRCUVRCQ0xFVkJRVEZDT3p0QlFVZEJPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NSMEZCWVR0QlFVTlVMSE5DUVVGTkxHZENRVVJITzBGQlJWUXNjMEpCUVUwc1UwRkdSenRCUVVkVUxIVkNRVUZQTzBGQlNFVXNZVUZCWWp0QlFVdEJMR2xDUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1NVRkJWQ3hEUVVGakxFTkJRV1FzUlVGQmFVSXNRMEZCYWtJc1JVRkJiMElzV1VGQldTeExRVUZMTEV0QlFYSkRMRVZCUVRSRExFdEJRVXNzUzBGQmFrUXNRMEZCYWtJN1FVRkRRU3hwUWtGQlN5eFJRVUZNTEVkQlFXZENMRXRCUVVzc1IwRkJUQ3hEUVVGVExFbEJRVlFzUTBGQll5eERRVUZrTEVWQlFXbENMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFMUJRVllzUjBGQmJVSXNRMEZCY0VNc1JVRkJkVU1zWjBKQlFXZENMRXRCUVVzc1VVRkJOVVFzUlVGQmMwVXNTMEZCU3l4TFFVRXpSU3hEUVVGb1FqdEJRVU5CTEdsQ1FVRkxMRkZCUVV3c1EwRkJZeXhOUVVGa0xFTkJRWEZDTEVkQlFYSkNMRU5CUVhsQ0xFTkJRWHBDTEVWQlFUSkNMRU5CUVROQ096dEJRVVZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVFVGQlppeERRVUZ6UWl4SlFVRjBRaXhEUVVFeVFpeFBRVUZQTEV0QlFWQXNRMEZCWVN4TlFVRjRReXhGUVVGblJDeExRVUZMTEZsQlFYSkVMRVZCUVd0RkxFbEJRV3hGT3p0QlFVVkJMR2xDUVVGTExGVkJRVXc3UVVGRFNEczdPMmxEUVVWUk8wRkJRMHdzYVVKQlFVc3NVVUZCVER0QlFVVklPenRCUVVWRU96czdPMjFEUVVOVk8wRkJRMDRzWjBKQlFVa3NVMEZCVXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFMUJRWHBDTEVOQlFXZERMRTlCUVU4c1VVRkJVQ3hEUVVGblFpeEhRVUZvUkN4RFFVRmlPMEZCUTBFc1owSkJRVWNzVFVGQlNDeEZRVUZWTzBGQlEwNHNjVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCYUVJc1EwRkJjMElzVFVGQmRFSTdRVUZEU0R0QlFVTktPenM3ZFVOQlJXTTdRVUZEV0N4cFFrRkJTeXhSUVVGTU8wRkJRMEVzYVVKQlFVc3NVVUZCVEN4RFFVRmpMRWxCUVdRc1IwRkJjVUlzWjBKQlFXZENMRXRCUVVzc1VVRkJNVU03UVVGRFFTeG5Ra0ZCUnl4TFFVRkxMRkZCUVV3c1NVRkJhVUlzUTBGQmNFSXNSVUZCZFVJN1FVRkRia0k3UVVGRFFTeHhRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUZvUWl4RFFVRnpRaXhWUVVGMFFqdEJRVU5JTzBGQlEwbzdPenR4UTBGRFdUczdRVUZGVkN4blFrRkJTU3haUVVGWkxFTkJRVU1zUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4SFFVRnRRaXhMUVVGTExFOUJRVXdzUjBGQlpTeExRVUZMTEZGQlFYWkRMRWRCUVc5RUxFTkJRVU1zUzBGQlN5eFBRVUZNTEVkQlFXVXNRMEZCYUVJc1NVRkJjMElzUzBGQlN5eFhRVUZvUml4SlFVRTRSaXhEUVVFNVJ6dEJRVU5CTEdkQ1FVRkpMRmRCUVZrc1EwRkJReXhMUVVGTExFbEJRVXdzUTBGQlZTeE5RVUZXTEVkQlFXOUNMRXRCUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzVVVGQmVFTXNSMEZCY1VRc1EwRkJReXhMUVVGTExFOUJRVXdzUjBGQlpTeERRVUZvUWl4SlFVRnpRaXhMUVVGTExGZEJRV3BHTEVsQlFTdEdMRU5CUVM5SE96dEJRVVZCTzBGQlEwRXNhVUpCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVm9zUlVGQlpTeEpRVUZKTEV0QlFVc3NVMEZCZUVJc1JVRkJiVU1zUjBGQmJrTXNSVUZCZDBNN1FVRkRjRU1zY1VKQlFVc3NWVUZCVEN4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhKUVVGSkxFTkJRV1lzUTBGQmNrSTdRVUZEU0RzN1FVRkZSRHRCUVVOQkxHbENRVUZKTEVsQlFVa3NTMEZCU1N4RFFVRmFMRVZCUVdVc1MwRkJTU3hMUVVGTExGTkJRWGhDTEVWQlFXMURMRWxCUVc1RExFVkJRWGRETzBGQlEzQkRMRzlDUVVGSkxFOUJRVkVzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRTlCUVdRc1EwRkJjMElzUTBGQmRFSXNSVUZCZVVJc1MwRkJTeXhWUVVGTUxFTkJRV2RDTEUxQlFXaENMRWRCUVhWQ0xFTkJRV2hFTEVOQlFWbzdRVUZEUVN4dlFrRkJTU3hMUVVGUkxFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4UFFVRmtMRU5CUVhOQ0xFTkJRWFJDTEVWQlFYbENMRXRCUVVzc1ZVRkJUQ3hEUVVGblFpeE5RVUZvUWl4SFFVRjFRaXhEUVVGb1JDeERRVUZhTzBGQlEwRXNiMEpCUVVrc1QwRkJVU3hMUVVGTExGVkJRVXdzUTBGQlowSXNTVUZCYUVJc1EwRkJXanM3UVVGRlFTeHhRa0ZCU3l4VlFVRk1MRU5CUVdkQ0xFbEJRV2hDTEVsQlFYZENMRXRCUVVzc1ZVRkJUQ3hEUVVGblFpeEZRVUZvUWl4RFFVRjRRanRCUVVOQkxIRkNRVUZMTEZWQlFVd3NRMEZCWjBJc1JVRkJhRUlzU1VGQmMwSXNTVUZCZEVJN1FVRkRTRHM3UVVGRlJEdEJRVU5CTEdsQ1FVRkpMRWxCUVVrc1RVRkJTU3hEUVVGYUxFVkJRV1VzVFVGQlNTeExRVUZMTEU5QlFYaENMRVZCUVdsRExFdEJRV3BETEVWQlFYTkRPenRCUVVWc1F5eHhRa0ZCU1N4SlFVRkpMRWxCUVVrc1EwRkJXaXhGUVVGbExFbEJRVWtzUzBGQlN5eFBRVUY0UWl4RlFVRnBReXhIUVVGcVF5eEZRVUZ6UXpzN1FVRkhiRU1zZDBKQlFVa3NUMEZCVHl4NVFrRkJaVHRCUVVOMFFpdzRRa0ZCVFN4TFFVRkxMRWxCUkZjN1FVRkZkRUlzTWtKQlFVY3NXVUZCV1N4UFFVRkxMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZMTEZkQlFURkNMRU5CUms4N1FVRkhkRUlzTWtKQlFVY3NWMEZCVnl4TFFVRkxMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZMTEZkQlFURkNMRU5CU0ZFN1FVRkpkRUlzSzBKQlFVOHNUMEZLWlR0QlFVdDBRaXhyUTBGQlZTeExRVUZMTEZGQlRFODdRVUZOZEVJc2VVTkJRV2xDTEVsQlRrczdRVUZQZEVJc0swSkJRVThzUzBGQlN5eFZRVUZNTEVOQlFXZENMRWxCUVVrc1MwRkJTeXhQUVVGVUxFZEJRVzFDTEVkQlFXNURMRU5CVUdVN1FVRlJkRUlzYTBOQlFWVTdRVUZTV1N4eFFrRkJaaXhEUVVGWU96dEJRVmRCTzBGQlEwRTdRVUZEUVN4M1FrRkJSeXhMUVVGTExFdEJRVXdzU1VGQll5eERRVUZxUWl4RlFVRnRRanRCUVVObUxEWkNRVUZMTEV0QlFVd3NSMEZCWVN4TFFVRkxMRmxCUVd4Q08wRkJRMEVzTmtKQlFVc3NVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5JT3p0QlFVVkVMSGxDUVVGTExFdEJRVXdzUjBGQllTeExRVUZMTEdGQlFXeENPMEZCUTBFc2VVSkJRVXNzVTBGQlRDeERRVUZsTEVkQlFXWXNRMEZCYlVJc1NVRkJia0k3UVVGRlNEdEJRVU5LTzBGQlEwbzdPenRwUTBGRFVTeFZMRVZCUVZrN1FVRkRha0k3T3pzN1FVRkpRU3huUWtGQlJ5eExRVUZMTEd0Q1FVRk1MRU5CUVhkQ0xFMUJRWGhDTEVkQlFXbERMRU5CUVdwRExFbEJRWE5ETEV0QlFVc3NhMEpCUVV3c1EwRkJkMElzVDBGQmVFSXNRMEZCWjBNc1ZVRkJhRU1zVFVGQlowUXNRMEZCUXl4RFFVRXhSaXhGUVVFMlJqdEJRVU42Ump0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxESkNRVUZYTEV0QlFWZ3NSMEZCYlVJc1YwRkJWeXhMUVVFNVFqdEJRVU5CTEhGQ1FVRkxMR3RDUVVGTUxFTkJRWGRDTEVsQlFYaENMRU5CUVRaQ0xGVkJRVGRDT3p0QlFVVkJMRzlDUVVGSExFdEJRVXNzYTBKQlFVd3NRMEZCZDBJc1RVRkJlRUlzUzBGQmJVTXNRMEZCZEVNc1JVRkJlVU03UVVGRGNrTXNlVUpCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeE5RVUZtTEVOQlFYTkNMRWRCUVhSQ0xFTkJRVEJDTEU5QlFVOHNTMEZCVUN4RFFVRmhMRTFCUVhaRExFVkJRU3RETEV0QlFVc3NWVUZCY0VRc1JVRkJaMFVzU1VGQmFFVTdRVUZEU0R0QlFVTktPMEZCUlVvN096dHhRMEZGV1R0QlFVTlVPenM3TzBGQlNVRXNaMEpCUVVjc1MwRkJTeXhyUWtGQlRDeERRVUYzUWl4RFFVRjRRaXhGUVVFeVFpeExRVUV6UWl4TFFVRnhReXhMUVVGTExHdENRVUZNTEVOQlFYZENMRU5CUVhoQ0xFVkJRVEpDTEV0QlFXNUZMRVZCUVRCRk8wRkJRM1JGT3pzN096czdPMEZCVDBFc2NVSkJRVXNzUzBGQlREdEJRVU5CTEhGQ1FVRkxMRkZCUVV3c1NVRkJhVUlzUTBGQmFrSTdRVUZEUVN4eFFrRkJTeXhSUVVGTUxFTkJRV01zU1VGQlpDeEhRVUZ4UWl4blFrRkJaMElzUzBGQlN5eFJRVUV4UXp0QlFVTkJMSEZDUVVGTExGTkJRVXdzUTBGQlpTeEpRVUZtTEVkQlFYTkNMRmxCUVZrc1MwRkJTeXhMUVVGMlF6czdRVUZGUVR0QlFVTkJMRzlDUVVGSExFdEJRVXNzYTBKQlFVd3NRMEZCZDBJc1EwRkJlRUlzUlVGQk1rSXNVVUZCT1VJc1JVRkJkME03UVVGRGNFTXNlVUpCUVVzc2FVSkJRVXdzUTBGQmRVSXNVVUZCZGtJN1FVRkRTRHM3UVVGRlJDeHhRa0ZCU3l4clFrRkJUQ3hEUVVGM1FpeERRVUY0UWl4RlFVRXlRaXhQUVVFelFqdEJRVU5CTEhGQ1FVRkxMR3RDUVVGTUxFTkJRWGRDTEVOQlFYaENMRVZCUVRKQ0xFOUJRVE5DTzBGQlEwRXNjVUpCUVVzc1UwRkJUQ3hKUVVGclFpeERRVUZzUWpzN1FVRkZRVHRCUVVOQkxHOUNRVUZITEV0QlFVc3NVMEZCVEN4TFFVRnRRaXhEUVVGMFFpeEZRVUV3UWp0QlFVTjBRaXg1UWtGQlN5eFZRVUZNTEVOQlFXZENMRTFCUVdoQ0xFZEJRWGxDTEVOQlFYcENPMEZCUTBFc2VVSkJRVXNzYTBKQlFVd3NRMEZCZDBJc1RVRkJlRUlzUjBGQmFVTXNRMEZCYWtNN1FVRkRRVHRCUVVOQkxIbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRmRCUVhSQ08wRkJRMGc3UVVGRFNpeGhRVGRDUkN4TlFUaENTVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc2NVSkJRVXNzYTBKQlFVd3NRMEZCZDBJc1EwRkJlRUlzUlVGQk1rSXNTMEZCTTBJc1IwRkJiVU1zUzBGQlN5eGhRVUY0UXp0QlFVTkJMSEZDUVVGTExHdENRVUZNTEVOQlFYZENMRU5CUVhoQ0xFVkJRVEpDTEV0QlFUTkNMRWRCUVcxRExFdEJRVXNzWVVGQmVFTTdRVUZEU0R0QlFVTkVMR2xDUVVGTExHdENRVUZNTEVOQlFYZENMRTFCUVhoQ0xFZEJRV2xETEVOQlFXcERPMEZCUTBnN096c3dRMEZGYVVJc1RTeEZRVUZSTzBGQlEzUkNMR3RDUVVGTkxIbERRVUZPTzBGQlEwZzdPenM3UlVGMlRXdERMRTlCUVU4c1N6czdhMEpCUVhwQ0xGTTdPenM3T3pzN096czdPMEZEUm5KQ096czdPenM3T3pzN096czdTVUZGY1VJc1VUczdPenM3T3pzN096czdhVU5CUlZJN1FVRkJRVHM3UVVGRlRDeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRXRCUVVzc1NVRkJja0lzUlVGQk1rSXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUV6UXl4RlFVRnZSQ3hMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoQ0xFZEJRWGRDTEVkQlFUVkZMRVZCUVdsR0xHZENRVUZxUml4RlFVRnRSenRCUVVOd1NDeHpRa0ZCVFN4aFFVUTRSenRCUVVWd1NDeHpRa0ZCVFN4UFFVWTRSenRCUVVkd1NDeDFRa0ZCVHp0QlFVZzJSeXhoUVVGdVJ5eERRVUZ5UWp0QlFVdEJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNUVUZCYmtJc1EwRkJNRUlzUzBGQk1VSXNRMEZCWjBNc1IwRkJhRU03TzBGQlJVRXNhVUpCUVVzc1MwRkJUQ3hIUVVGaExIbENRVUZsTzBGQlEzaENMSE5DUVVGTkxFdEJRVXNzU1VGRVlUdEJRVVY0UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUmtzN1FVRkhlRUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4SFFVRjNRaXhGUVVoSU8wRkJTWGhDTEhWQ1FVRlBMRkZCU21sQ08wRkJTM2hDTERKQ1FVRlhMRU5CVEdFN1FVRk5lRUlzTUVKQlFWVXNRMEZPWXp0QlFVOTRRaXd5UWtGQlZ5eERRVkJoTzBGQlVYaENMSGxDUVVGVExFTkJVbVU3UVVGVGVFSXNkVUpCUVU4c1YwRlVhVUk3UVVGVmVFSXNkVUpCUVU4N1FVRkRTQ3d3UWtGQlRTeGpRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXYVVJc1lVRkJaaXhEUVVGaU96dEJRV2xDUVN4cFFrRkJTeXhKUVVGTUxFZEJRVmtzZVVKQlFXVTdRVUZEZGtJc2MwSkJRVTBzUzBGQlN5eEpRVVJaTzBGQlJYWkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdTVHRCUVVkMlFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFXaENMRWRCUVhkQ0xFVkJTRW83UVVGSmRrSXNkVUpCUVU4c1VVRktaMEk3UVVGTGRrSXNNa0pCUVZjc1EwRk1XVHRCUVUxMlFpd3dRa0ZCVlN4RFFVNWhPMEZCVDNaQ0xESkNRVUZYTEVOQlVGazdRVUZSZGtJc2VVSkJRVk1zUTBGU1l6dEJRVk4yUWl4MVFrRkJUeXhOUVZSblFqdEJRVlYyUWl4MVFrRkJUenRCUVVOSUxEQkNRVUZOTEdOQlJFZzdRVUZGU0N3d1FrRkJUU3hQUVVaSU8wRkJSMGdzTWtKQlFVODdRVUZJU2p0QlFWWm5RaXhoUVVGbUxFTkJRVm83TzBGQmFVSkJMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNFSTdRVUZEUVN4cFFrRkJTeXhYUVVGTUxFZEJRVzFDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hUUVVGbUxFTkJRVzVDTzBGQlEwRXNhVUpCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGd1FqczdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzV1VGQldDeERRVUYzUWl4TFFVRkxMRmxCUVRkQ08wRkJRMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmRCUVZnc1EwRkJkVUlzUzBGQlN5eFhRVUUxUWp0QlFVTkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFpRVUZZTEVOQlFYZENMRXRCUVVzc1dVRkJOMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1dVRkJWaXhEUVVGMVFpeExRVUZMTEZsQlFUVkNPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEZkQlFWWXNRMEZCYzBJc1MwRkJTeXhYUVVFelFqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3haUVVGV0xFTkJRWFZDTEV0QlFVc3NXVUZCTlVJN08wRkJSVUVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmRCUVZnc1EwRkJkVUlzUjBGQmRrSXNRMEZCTWtJc1dVRkJTVHRCUVVNelFpeDFRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeFZRVUZxUWp0QlFVTklMR0ZCUmtRN08wRkJTVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRmRCUVZZc1EwRkJjMElzUjBGQmRFSXNRMEZCTUVJc1dVRkJTVHRCUVVNeFFpeDFRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeE5RVUZxUWp0QlFVTklMR0ZCUmtRN08wRkJTVUVzYVVKQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFYSkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUZMTEdGQlFUVkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUZMTEV0QlFUVkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUZMTEVsQlFUVkNPMEZCUTBnN096czdSVUZ3UldsRExFOUJRVThzU3pzN2EwSkJRWGhDTEZFN096czdPenM3T3pzN08wRkRSbkpDT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3TzBsQlJYRkNMRkU3T3pzN096czdPenM3TzJsRFFVVlNPMEZCUVVFN08wRkJRMHdzYVVKQlFVc3NSVUZCVEN4SFFVRlZMRXRCUVVzc1IwRkJUQ3hEUVVGVExGVkJRVlFzUTBGQmIwSXNRMEZCY0VJc1JVRkJkVUlzUTBGQmRrSXNSVUZCTUVJc1NVRkJNVUlzUlVGQlowTXNTVUZCYUVNc1JVRkJjME1zVVVGQmRFTXNRMEZCVmp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNWVUZCWml4SFFVRTBRaXhEUVVFMVFqczdRVUZIUVR0QlFVTkJMR2xDUVVGTExFMUJRVXdzUjBGQll5eHhRa0ZCVnp0QlFVTnlRaXh6UWtGQlRTeExRVUZMTEVsQlJGVTdRVUZGY2tJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaRk8wRkJSM0pDTEcxQ1FVRkhMRTlCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVaE1PMEZCU1hKQ0xIZENRVUZSTEVWQlNtRTdRVUZMY2tJc2RVSkJRVThzWTBGTVl6dEJRVTF5UWl4MVFrRkJUenRCUVU1akxHRkJRVmdzUTBGQlpEdEJRVkZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFdEJRVXNzVFVGQk9VSTdRVUZEUVN4cFFrRkJTeXhsUVVGTUxFZEJRWFZDTEVOQlFYWkNPMEZCUTBFc2FVSkJRVXNzYlVKQlFVd3NSMEZCTWtJc1NVRkJNMEk3TzBGQlJVRTdRVUZEUVN4cFFrRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRm1PMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEZWQlFXSXNSMEZCTUVJc1NVRkJNVUk3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRWRCUVdsQ0xFTkJRV3BDTzBGQlEyOUNPMEZCUTNCQ0xHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1IwRkJja0k3UVVGRFFTeHBRa0ZCU3l4alFVRk1MRWRCUVhOQ0xFTkJRWFJDTzBGQlEwRXNhVUpCUVVzc2EwSkJRVXdzUjBGQk1FSXNRMEZCTVVJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEdsQ1FVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRjBRanRCUVVOQkxHbENRVUZMTEdOQlFVd3NRMEZCYjBJc1ZVRkJjRUlzUjBGQmFVTXNTVUZCYWtNN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJja0k3UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xGVkJRVzVDTEVkQlFXZERMRWxCUVdoRE8wRkJRMEU3UVVGRFFTeHBRa0ZCU3l4dFFrRkJUQ3hIUVVFeVFpeEhRVUV6UWp0QlFVTkJMR2xDUVVGTExHOUNRVUZNTEVkQlFUUkNMRU5CUVRWQ08wRkJRMEVzYVVKQlFVc3NkMEpCUVV3c1IwRkJaME1zUTBGQmFFTTdRVUZEU1R0QlFVTktMR2xDUVVGTExHbENRVUZNTEVOQlFYVkNPMEZCUTI1Q0xITkNRVUZOTEV0QlFVc3NTVUZFVVR0QlFVVnVRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXl4RlFVWjBRanRCUVVkdVFqdEJRVU5CTEcxQ1FVRkhMRU5CU21kQ08wRkJTMjVDTEhWQ1FVRlBPMEZCUTBnc2RVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1JVRkJhRU1zU1VGQmMwTXNSVUZCZEVNc1NVRkJORU1zUzBGQlN5eE5RVUZNTEV0QlFXZENMRWRCUVdoQ0xFZEJRWE5DTEVOQlFYUkNMRWRCUVRCQ0xFTkJRVU1zUTBGQmRrVXNRMEZFUVR0QlFVVklMSFZDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFTkJRVGRDTEVWQlFXZERMRVZCUVdoRExFbEJRWE5ETzBGQlJuUkRMR2xDUVV4Wk8wRkJVMjVDTzBGQlEwRXNkMEpCUVZFc1JVRldWenRCUVZkdVFpdzJRa0ZCWVN4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zWTBGQlpDeERRVUUyUWl4RlFVRTNRaXhGUVVGcFF5eEZRVUZxUXl4SlFVRjFReXhGUVZocVF6dEJRVmx1UWl4MVFrRkJUeXhSUVZwWk8wRkJZVzVDTEhOQ1FVRk5PMEZCWW1Fc1lVRkJka0k3UVVGbFFUczdRVUZGUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEUxQlFXWXNRMEZCYzBJc1NVRkJkRUlzUTBGQk1rSXNUMEZCVHl4TFFVRlFMRU5CUVdFc1RVRkJZaXhIUVVGelFpeEZRVUZxUkN4RlFVRnhSQ3haUVVGTk8wRkJRM1pFTEc5Q1FVRkhMRTlCUVVzc1lVRkJUQ3hIUVVGeFFpeEhRVUY0UWl4RlFVRTJRanRCUVVONlFpd3lRa0ZCU3l4aFFVRk1MRWxCUVhOQ0xFZEJRWFJDTzBGQlEwZzdRVUZEU2l4aFFVcEVPenRCUVUxQkxHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVlVGQlZDeERRVUZ2UWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVFNVFpeEZRVUZ4UXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hOUVVFdlF5eERRVUZ5UWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzVTBGQmRrSXNSMEZCYlVNc1RVRkJia003UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFYVkNMRkZCUVhaQ0xFTkJRV2RETEVOQlFXaERMRVZCUVcxRExFTkJRVzVETEVWQlFYTkRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRV2hFTEVWQlFYVkVMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFMUJRV3BGT3p0QlFVVkJMR2xDUVVGTExFOUJRVXdzUjBGQlpTeExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRlVMRU5CUVdkQ0xFTkJRV2hDTEVWQlFXMUNMRU5CUVc1Q0xFVkJRWE5DTEV0QlFVc3NZVUZCTTBJc1EwRkJaanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4UFFVRmlMRWRCUVhWQ0xFdEJRWFpDTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExFdEJRV0lzUjBGQmNVSXNTVUZCY2tJN08wRkJSVUVzYVVKQlFVc3NSMEZCVEN4SFFVRlhMR3RDUVVGUk8wRkJRMllzYzBKQlFVMHNTMEZCU3l4SlFVUkpPMEZCUldZc2QwSkJRVkVzUzBGQlN6dEJRVVpGTEdGQlFWSXNRMEZCV0RzN1FVRkxRVHRCUVVORU8wRkJRME1zYVVKQlFVc3NZMEZCVEN4SFFVRnpRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNWMEZCWml4RFFVRjBRanRCUVVOQkxHbENRVUZMTEcxQ1FVRk1MRWRCUVRKQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4blFrRkJaaXhEUVVFelFqdEJRVU5CTEdsQ1FVRkxMRzlDUVVGTUxFZEJRVFJDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hwUWtGQlppeERRVUUxUWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNrSTdPMEZCUlVFN096dEJRVWxCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMGc3T3p0cFEwRkZVVHRCUVVOTUxHbENRVUZMTEZOQlFVd3NTVUZCYTBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEdOQlFXcERPMEZCUTBFc2FVSkJRVXNzWTBGQlRDeEpRVUYxUWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzWTBGQmRFTTdRVUZEUVN4cFFrRkJTeXhsUVVGTUxFbEJRWGRDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hqUVVGMlF6czdRVUZGUVN4blFrRkJTU3hMUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4aFFVRXhRaXhGUVVGNVF6dEJRVU55UXl4eFFrRkJTeXhUUVVGTUxFZEJRV2xDTEVOQlFXcENPenRCUVVWQkxIRkNRVUZMTEZkQlFVd3NRMEZCYVVJN1FVRkRZaXd3UWtGQlRTeExRVUZMTEVsQlJFVTdRVUZGWWl4MVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF5eEZRVVkxUWp0QlFVZGlPMEZCUTBFc2RVSkJRVWNzUTBGS1ZUdEJRVXRpTERKQ1FVRlBPMEZCUTBnc01rSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1JVRkJhRU1zU1VGQmMwTXNSVUZCZEVNc1NVRkJORU1zUzBGQlN5eE5RVUZNTEV0QlFXZENMRWRCUVdoQ0xFZEJRWE5DTEVOQlFYUkNMRWRCUVRCQ0xFTkJRVU1zUTBGQmRrVXNRMEZFUVR0QlFVVklMREpDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFTkJRVGRDTEVWQlFXZERMRVZCUVdoRExFbEJRWE5ETzBGQlJuUkRMSEZDUVV4Tk8wRkJVMkk3UVVGRFFTdzBRa0ZCVVN4RFFWWkxPMEZCVjJJc2FVTkJRV0VzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUlVGQk4wSXNSVUZCYVVNc1JVRkJha01zU1VGQmRVTXNSVUZZZGtNN1FVRlpZaXd5UWtGQlR5eFBRVnBOTzBGQllXSXNNRUpCUVUwN08wRkJZazhzYVVKQlFXcENPMEZCWjBKSU96dEJRVVZFTEdkQ1FVRkpMRXRCUVVzc1kwRkJUQ3hIUVVGelFpeExRVUZMTEd0Q1FVRXZRaXhGUVVGdFJEdEJRVU12UXl4eFFrRkJTeXhqUVVGTUxFZEJRWE5DTEVOQlFYUkNPMEZCUTBFc2IwSkJRVWtzUTBGQlF5eExRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRnFRaXhGUVVGM1FqdEJRVU53UWl4NVFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhEUVVFeVFpeExRVUZMTEU5QlFXaERPMEZCUTBFc05FSkJRVkVzUjBGQlVpeERRVUZaTEZsQlFWbzdRVUZEU0R0QlFVTktPenRCUVVWRUxHZENRVUZKTEV0QlFVc3NaVUZCVEN4SFFVRjFRaXhMUVVGTExHMUNRVUZvUXl4RlFVRnhSRHRCUVVOcVJDeHhRa0ZCU3l4bFFVRk1MRWRCUVhWQ0xFTkJRWFpDTzBGQlEwRXNiMEpCUVVrc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzZDBKQlFVa3NWMEZCVnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFMUJRWHBDTEVOQlFXZERMRTlCUVU4c1VVRkJVQ3hEUVVGblFpeFJRVUZvUkN4RFFVRm1PMEZCUTBFc2QwSkJRVWNzVVVGQlNDeEZRVUZoTzBGQlExUXNOa0pCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm83UVVGRFNEdEJRVU5LTzBGQlEwbzdPMEZCUlVRc2FVSkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1RVRkJiRUlzUTBGQmVVSXNUMEZCZWtJc1EwRkJhVU1zUzBGQlN5eE5RVUZNTEVOQlFWa3NUMEZCTjBNc1JVRkJjMFFzUzBGQlN5eFBRVUV6UkN4RlFVRnZSU3hMUVVGTExGRkJRWHBGTEVWQlFXMUdMRWxCUVc1R0xFVkJRWGxHTEVsQlFYcEdPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFMUJRV3hDTEVOQlFYbENMRTlCUVhwQ0xFTkJRV2xETEV0QlFVc3NUVUZCVEN4RFFVRlpMRTlCUVRkRExFVkJRWE5FTEV0QlFVc3NZMEZCTTBRc1JVRkJNa1VzUzBGQlN5eFJRVUZvUml4RlFVRXdSaXhKUVVFeFJpeEZRVUZuUnl4SlFVRm9SenM3UVVGRlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVGclFpeE5RVUZzUWl4RFFVRjVRaXhQUVVGNlFpeERRVUZwUXl4TFFVRkxMRTFCUVhSRExFVkJRVGhETEVOQlFVTXNTMEZCU3l4UFFVRk9MRVZCUVdNc1MwRkJTeXhqUVVGdVFpeERRVUU1UXl4RlFVRnJSaXhMUVVGTExGVkJRWFpHTEVWQlFXMUhMRWxCUVc1SExFVkJRWGxITEVsQlFYcEhPenRCUVVWQkxHbENRVUZMTEZGQlFVdzdRVUZEUVR0QlFVTklPenM3YjBOQlJWY3NTU3hGUVVGTk96dEJRVVZrTEdkQ1FVRkpMRkZCUVZFc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQllpeERRVUUwUWl4TFFVRTFRaXhEUVVGYU8wRkJRMEVzWjBKQlFVa3NaVUZCWlN4TFFVRkxMRTlCUVV3c1EwRkJZU3hSUVVGaUxFTkJRWE5DTEUxQlFYcERPMEZCUTBFc2IwSkJRVkVzUjBGQlVpeERRVUZaTEZsQlFWbzdPMEZCUlVFc1owSkJRVWtzUTBGQlF5eExRVUZNTEVWQlFWazdRVUZEVWl4M1FrRkJVU3gzUWtGQlZTeEpRVUZXTEVOQlFWSTdRVUZEUVN4dlFrRkJSeXhsUVVGbExFTkJRV3hDTEVWQlFXOUNPMEZCUTJoQ0xIbENRVUZMTEU5QlFVd3NRMEZCWVN4SFFVRmlMRU5CUVdsQ0xFdEJRV3BDTzBGQlEwZzdRVUZGU2p0QlFVTkVMR3RDUVVGTkxFdEJRVTRzUTBGQldTeEpRVUZhTzBGQlEwZzdPenN5UTBGRmEwSXNTU3hGUVVGTk96dEJRVVZ5UWl4blFrRkJTU3hSUVVGUkxFdEJRVXNzWTBGQlRDeERRVUZ2UWl4alFVRndRaXhEUVVGdFF5eExRVUZ1UXl4RFFVRmFPMEZCUTBFc1owSkJRVWtzWlVGQlpTeExRVUZMTEdOQlFVd3NRMEZCYjBJc1VVRkJjRUlzUTBGQk5rSXNUVUZCYUVRN08wRkJSVUVzWjBKQlFVa3NRMEZCUXl4TFFVRk1MRVZCUVZrN1FVRkRVaXgzUWtGQlVTeDNRa0ZCVlN4SlFVRldMRU5CUVZJN1FVRkRRU3h2UWtGQlJ5eGxRVUZsTEVWQlFXeENMRVZCUVhGQ08wRkJRMnBDTEhsQ1FVRkxMR05CUVV3c1EwRkJiMElzUjBGQmNFSXNRMEZCZDBJc1MwRkJlRUk3UVVGRFNEdEJRVVZLTzBGQlEwUXNhMEpCUVUwc1MwRkJUaXhEUVVGWkxFbEJRVm83UVVGRFNEczdPekJEUVVWcFFpeEpMRVZCUVUwN08wRkJSWEJDTEdkQ1FVRkpMRkZCUVZFc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEdOQlFXNUNMRU5CUVd0RExFdEJRV3hETEVOQlFWbzdRVUZEUVN4blFrRkJTU3hsUVVGbExFdEJRVXNzWVVGQlRDeERRVUZ0UWl4UlFVRnVRaXhEUVVFMFFpeE5RVUV2UXp0QlFVTkJMRzlDUVVGUkxFZEJRVklzUTBGQldTeFpRVUZhT3p0QlFVVkJMR2RDUVVGSkxFTkJRVU1zUzBGQlRDeEZRVUZaTzBGQlExSXNkMEpCUVZFc2QwSkJRVlVzU1VGQlZpeERRVUZTTzBGQlEwRXNiMEpCUVVjc1owSkJRV2RDTEVOQlFXNUNMRVZCUVhGQ08wRkJRMnBDTEhsQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNRMEZCZFVJc1MwRkJka0k3UVVGRFNEdEJRVVZLTzBGQlEwUXNhMEpCUVUwc1MwRkJUaXhEUVVGWkxFbEJRVm83UVVGRFNEczdPMnREUVVWVExFY3NSVUZCU3l4TExFVkJRVTg3UVVGQlFUczdRVUZEYkVJc1owSkJRVWtzVVVGQlVTeExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1MwRkJaQ3hEUVVGdlFpeEhRVUZ3UWl4RFFVRmFPMEZCUTBFc1owSkJRVWtzVlVGQlZTeExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1QwRkJaQ3hGUVVGa08wRkJRMEVzWjBKQlFVa3NjVUpCUVhGQ0xFTkJRWHBDTzBGQlEwRXNaMEpCUVVrc1owSkJRV2RDTEVkQlFYQkNPMEZCUTBFc1owSkJRVWtzWlVGQlpTeEZRVUZ1UWpzN1FVRkZRU3hyUWtGQlRTeEZRVUZPTEVOQlFWTXNSVUZCUXl4TlFVRk5MRkZCUVZBc1JVRkJWQ3hGUVVFeVFpeEhRVUV6UWp0QlFVTkJMR3RDUVVGTkxGVkJRVTRzUTBGQmFVSXNSMEZCYWtJc1EwRkJjVUlzV1VGQlRUdEJRVU4yUWl4dlFrRkJTU3hKUVVGS0xFZEJRVmNzVVVGQldEdEJRVU5JTEdGQlJrUTdRVUZIUVN4clFrRkJUU3hMUVVGT096dEJRVVZCTEc5Q1FVRlJMRU5CUVZJc1IwRkJXU3hKUVVGSkxFTkJRV2hDTzBGQlEwRXNiMEpCUVZFc1EwRkJVaXhIUVVGWkxFbEJRVWtzUTBGQmFFSTdRVUZEUVN4dlFrRkJVU3hQUVVGU0xFZEJRV3RDTEVOQlFXeENPMEZCUTBFc2IwSkJRVkVzWVVGQlVpeERRVUZ6UWl4VlFVRjBRanM3UVVGRlFTeG5Ra0ZCU1N4SlFVRkpMRTFCUVVvc1NVRkJZeXhEUVVGc1FpeEZRVUZ4UWp0QlFVTnFRaXhuUTBGQlowSXNSMEZCYUVJN1FVRkRRU3dyUWtGQlpTeEZRVUZtTzBGQlEwRXNkMEpCUVZFc1VVRkJVanRCUVVOSU96dEJRVVZFTEc5Q1FVRlJMR2RDUVVGU0xFTkJRWGxDTEV0QlFYcENMRU5CUVN0Q0xFTkJRVU1zWVVGQmFFTXNSVUZCSzBNc1EwRkJReXhoUVVGb1JEdEJRVU5CTEc5Q1FVRlJMR2RDUVVGU0xFTkJRWGxDTEV0QlFYcENMRU5CUVN0Q0xHRkJRUzlDTEVWQlFUaERMR0ZCUVRsRE8wRkJRMEVzYjBKQlFWRXNTMEZCVWl4RFFVRmpMRWxCUVdRc1JVRkJiMElzUjBGQmNFSXNSVUZCZVVJc1NVRkJla0lzUlVGQkswSXNXVUZCTDBJN1FVRkRRU3h2UWtGQlVTeE5RVUZTTEVkQlFXbENMRmxCUVUwN1FVRkRia0lzYzBOQlFYTkNMRTlCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeGpRVUZ5UXp0QlFVTkJMRzlDUVVGSExITkNRVUZ6UWl4SFFVRjZRaXhGUVVFMlFqdEJRVU42UWl4NVEwRkJjVUlzUTBGQmNrSTdRVUZEUVN3MFFrRkJVU3hQUVVGU08wRkJRMGc3UVVGRlNpeGhRVkJFTzBGQlVVRXNiMEpCUVZFc1QwRkJVaXhEUVVGblFqdEJRVUZCTEhWQ1FVRlpMRk5CUVZNc1NVRkJWQ3hIUVVGblFpeExRVUUxUWp0QlFVRkJMR0ZCUVdoQ08wRkJRMEVzWjBKQlFVa3NRMEZCUXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGcVFpeEZRVUYzUWp0QlFVTndRaXh4UWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhWUVVGb1FpeERRVUV5UWl4TFFVRkxMRTlCUVdoRE8wRkJRMGc3UVVGRFNqczdPMmxEUVVWUkxFMHNSVUZCVVN4TExFVkJRVTg3TzBGQlJYQkNMR2xDUVVGTExHTkJRVXdzUTBGQmIwSXNTVUZCY0VJc1EwRkJlVUlzUlVGQmVrSXNSVUZCTkVJc1EwRkJOVUlzUlVGQk9FSXNSMEZCT1VJN1FVRkRRU3hyUWtGQlRTeE5RVUZPTEVOQlFXRXNUMEZCVHl4TlFVRndRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFOUJRVThzU1VGQk4wSTdPMEZCUlVFc1owSkJRVWtzUTBGQlF5eE5RVUZOTEV0QlFWZ3NSVUZCYTBJN1FVRkRaQ3h4UWtGQlN5eHRRa0ZCVEN4RFFVRjVRaXhKUVVGNlFpeERRVUU0UWl4RlFVRTVRaXhGUVVGclF5eERRVUZzUXl4RlFVRnhReXhIUVVGeVF6dEJRVU5CTEhGQ1FVRkxMRWRCUVV3c1EwRkJVeXhYUVVGVUxFTkJRWEZDTEUxQlFVMHNVMEZCTTBJN1FVRkRRU3gzUWtGQlR5eE5RVUZOTEVsQlFXSTdRVUZEU1R0QlFVTkJMSGxDUVVGTExFZEJRVXc3UVVGRFJTdzJRa0ZCU3l4clFrRkJUQ3hEUVVGM1FqdEJRVU5zUWl4clEwRkJUU3hMUVVGTExFbEJSRTg3UVVGRmJFSXNLMEpCUVVjc1RVRkJUU3hEUVVaVE8wRkJSMnhDTEN0Q1FVRkhMRTFCUVUwc1EwRklVenRCUVVsc1FpeHRRMEZCVHp0QlFVTklMRzFEUVVGSExFdEJRVXNzUlVGRVREdEJRVVZJTEcxRFFVRkhMRU5CUVVNc1JVRkJSQ3hIUVVGTk8wRkJSazRzTmtKQlNsYzdRVUZSYkVJc2IwTkJRVkVzUlVGU1ZUdEJRVk5zUWl4NVEwRkJZU3hMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhGUVVFM1FpeEZRVUZwUXl4RlFVRnFReXhKUVVGMVF5eEZRVlJzUXp0QlFWVnNRaXh0UTBGQlR5eFBRVlpYTzBGQlYyeENMR3REUVVGTk8wRkJXRmtzZVVKQlFYaENPMEZCWVVFc05rSkJRVXNzYTBKQlFVd3NRMEZCZDBJN1FVRkRiRUlzYTBOQlFVMHNTMEZCU3l4SlFVUlBPMEZCUld4Q0xDdENRVUZITEUxQlFVMHNRMEZHVXpzN1FVRkpiRUlzSzBKQlFVY3NUVUZCVFN4RFFVcFRPMEZCUzJ4Q0xHMURRVUZQTzBGQlEwZ3NiVU5CUVVjc1EwRkJReXhGUVVGRUxFZEJRVTBzUlVGRVRqdEJRVVZJTEcxRFFVRkhMRU5CUVVNc1JVRkJSQ3hIUVVGTk8wRkJSazRzTmtKQlRGYzdPMEZCVld4Q0xHOURRVUZSTEVWQlZsVTdRVUZYYkVJc2VVTkJRV0VzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUlVGQk4wSXNSVUZCYVVNc1JVRkJha01zU1VGQmRVTXNSVUZZYkVNN1FVRlpiRUlzYlVOQlFVOHNUMEZhVnp0QlFXRnNRaXhyUTBGQlRUdEJRV0paTEhsQ1FVRjRRanRCUVdWQk96dEJRUzlDVGp0QlFXdERRU3gxUWtGQlR5eEpRVUZRTzBGQlEwZzdRVUZEU2pzN08yMURRVVZWTEUwc1JVRkJVU3hMTEVWQlFVODdRVUZEZEVJN1FVRkRRU3hyUWtGQlRTeE5RVUZPTEVOQlFXRXNRMEZCWWp0QlFVTkJPMEZCUTBFc2JVSkJRVThzVFVGQlVDeERRVUZqTEVOQlFXUTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzVFVGQlpqdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hMUVVGbU8wRkJRMEVzWjBKQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVZnc1JVRkJhMEk3UVVGRFpDeHhRa0ZCU3l4dFFrRkJUQ3hEUVVGNVFpeEpRVUY2UWl4RFFVRTRRaXhGUVVFNVFpeEZRVUZwUXl4RFFVRnFReXhGUVVGdFF5eEhRVUZ1UXp0QlFVTkJMSEZDUVVGTExFZEJRVXdzUTBGQlV5eFhRVUZVTEVOQlFYRkNMRTFCUVUwc1UwRkJNMEk3UVVGRFNEdEJRVU5FTEdsQ1FVRkxMRWRCUVV3c1EwRkJVeXhaUVVGVU8wRkJRMEVzWjBKQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVZvc1JVRkJiVUk3UVVGRFppeHhRa0ZCU3l4dlFrRkJUQ3hEUVVFd1FpeEpRVUV4UWp0QlFVTkJMSEZDUVVGTExGRkJRVXc3UVVGRFNEdEJRVU5LT3pzN2JVTkJSVk03UVVGQlFUczdRVUZEVGl4cFFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEZWQlFXWXNSMEZCTkVJc1EwRkJOVUk3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1QwRkJZaXhIUVVGMVFpeEpRVUYyUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRlZCUVdoQ0xFTkJRVEpDTEV0QlFVc3NUMEZCYUVNN1FVRkRRU3huUWtGQlNTeFJRVUZSTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hOUVVGbUxFTkJRWE5DTEV0QlFVc3NTVUZCTTBJc1JVRkJhVU1zU1VGQmFrTXNRMEZCV2p0QlFVTkJMR3RDUVVGTkxFZEJRVTRzUTBGQlZTeEpRVUZXTEVWQlFXZENMRmxCUVUwN1FVRkRiRUk3UVVGRFFTeDFRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFbEJRVzVDTzBGQlEwRXNkVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCYUVJc1EwRkJjMElzVlVGQmRFSTdRVUZEU0N4aFFVcEVPMEZCUzBFc2EwSkJRVTBzUzBGQlRqdEJRVU5JT3pzN2JVTkJSVk03UVVGRFRpeG5Ra0ZCU1N4VFFVRlRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNVVUZCYUVJc1EwRkJlVUlzVFVGQmVrSXNRMEZCWjBNc1QwRkJUeXhSUVVGUUxFTkJRV2RDTEVkQlFXaEVMRU5CUVdJN1FVRkRRU3huUWtGQlJ5eE5RVUZJTEVWQlFWVTdRVUZEVGl4eFFrRkJTeXhOUVVGTUxFTkJRVmtzU1VGQldqdEJRVU5CTEhGQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFXaENMRU5CUVhOQ0xFMUJRWFJDTzBGQlJVZzdRVUZEU2pzN096dEZRWFpWYVVNc1QwRkJUeXhMT3p0clFrRkJlRUlzVVRzN096czdPenM3T3pzN096czdPenM3U1VOS1FTeFBPenM3T3pzN096czdPenRyUTBGRlVEczdRVUZGVGl4cFFrRkJTeXhSUVVGTUxFZEJRV2RDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRTFCUVZRc1EwRkJaMElzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGb1F5eEZRVUY1UXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFYcEVMRVZCUVd0RkxGVkJRV3hGTEVOQlFXaENPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeEhRVUZwUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGVUxFTkJRV2RDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFTXNSVUZCZVVNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRjZSQ3hGUVVGclJTeFhRVUZzUlN4RFFVRnFRanRCUVVOQkxHbENRVUZMTEZGQlFVd3NRMEZCWXl4TlFVRmtMRU5CUVhGQ0xFdEJRWEpDTEVOQlFUSkNMRWRCUVROQ08wRkJRMEVzYVVKQlFVc3NVMEZCVEN4RFFVRmxMRTFCUVdZc1EwRkJjMElzUzBGQmRFSXNRMEZCTkVJc1IwRkJOVUk3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxHZENRVUZXTEVOQlFUSkNMRXRCUVVzc1UwRkJhRU03UVVGRFFUczdRVUZGUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzWTBGQlZpeERRVUY1UWl4alFVRjZRaXhGUVVGNVF5d3dRMEZCZWtNc1JVRkJjVVlzTkVOQlFYSkdPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEdOQlFWWXNRMEZCZVVJc1QwRkJla0lzUlVGQmEwTXNiVU5CUVd4RExFVkJRWFZGTEhGRFFVRjJSVHRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4alFVRldMRU5CUVhsQ0xGRkJRWHBDTEVWQlFXMURMR2RDUVVGdVF5eEZRVUZ4UkN3d1FrRkJja1E3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFRRVUZvUWl4RlFVRXlRaXg1UWtGQk0wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UlFVRm9RaXhGUVVFd1FpeDNRa0ZCTVVJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhWUVVGb1FpeEZRVUUwUWl3d1FrRkJOVUk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFhRVUZvUWl4RlFVRTJRaXd5UWtGQk4wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhGUVVGNVFpeDNRa0ZCZWtJN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVjBGQmFFSXNSVUZCTmtJc1EwRkJReXc0UWtGQlJDeERRVUUzUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRmRCUVdoQ0xFVkJRVFpDTEVOQlFVTXNPRUpCUVVRc1EwRkJOMEk3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWVUZCYUVJc1JVRkJORUlzUTBGQlF5eHRRMEZCUkN4RFFVRTFRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGTkJRV2hDTEVWQlFUSkNMRU5CUVVNc2EwTkJRVVFzUTBGQk0wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhGUVVFMFFpeERRVUZETEc5RFFVRkVMRU5CUVRWQ096dEJRVVZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZkQlFXaENMRVZCUVRaQ0xFTkJRVU1zYjBOQlFVUXNRMEZCTjBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhYUVVGb1FpeEZRVUUyUWl4RFFVRkRMRzlEUVVGRUxFTkJRVGRDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNaMEpCUVdoQ0xFVkJRV3RETEVOQlFVTXNlVU5CUVVRc1EwRkJiRU03UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFpRVUZvUWl4RlFVRTRRaXhEUVVGRExIRkRRVUZFTEVOQlFUbENPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc2FVSkJRV2hDTEVWQlFXMURMRU5CUVVNc01FTkJRVVFzUTBGQmJrTTdPMEZCUlVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1ZVRkJhRUlzUlVGQk5FSXNRMEZCUXl4dFEwRkJSQ3hEUVVFMVFqdEJRVU5CT3pzN1FVRkhRVHM3UVVGRlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RlFVRXdRaXh4UWtGQk1VSTdPMEZCUlVFN096dEJRVWRCT3p0QlFVVkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFhRVUZXTEVOQlFYTkNMRTlCUVhSQ0xFVkJRVGhDTERKQ1FVRTVRaXhGUVVFeVJDeEZRVUV6UkN4RlFVRXJSQ3hGUVVFdlJDeEZRVUZ0UlN4RlFVRnVSVHM3UVVGRlFUdEJRVU5JT3pzN2FVTkJSVkU3UVVGRFRDeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeE5RVUZxUWp0QlFVTklPenM3TzBWQmRFUm5ReXhQUVVGUExFczdPMnRDUVVGMlFpeFBPenM3T3pzN096czdPenRCUTBGeVFqczdPenM3T3pzN096czdPMGxCUlhGQ0xFazdPenM3T3pzN096czdPMmxEUVVWU08wRkJRVUU3TzBGQlJVd3NhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZKTEU5QlFVOHNTVUZCV0N4RFFVRm5RaXhMUVVGTExFbEJRWEpDTEVWQlFUSkNMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCTTBNc1JVRkJiMFFzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGb1FpeEhRVUYzUWl4SFFVRTFSU3hGUVVGcFJpeFhRVUZxUml4RlFVRTRSanRCUVVNdlJ5eHpRa0ZCVFN4aFFVUjVSenRCUVVVdlJ5eHpRa0ZCVFN4UFFVWjVSenRCUVVjdlJ5eDFRa0ZCVHp0QlFVaDNSeXhoUVVFNVJpeERRVUZ5UWp0QlFVdEJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNUVUZCYmtJc1EwRkJNRUlzUzBGQk1VSXNRMEZCWjBNc1IwRkJhRU03TzBGQlJVRXNhVUpCUVVzc1MwRkJUQ3hIUVVGaExIbENRVUZsTzBGQlEzaENMSE5DUVVGTkxFdEJRVXNzU1VGRVlUdEJRVVY0UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUmtzN1FVRkhlRUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4SFFVRjNRaXhGUVVoSU8wRkJTWGhDTEhWQ1FVRlBMRkZCU21sQ08wRkJTM2hDTERKQ1FVRlhMRU5CVEdFN1FVRk5lRUlzTUVKQlFWVXNRMEZPWXp0QlFVOTRRaXd5UWtGQlZ5eERRVkJoTzBGQlVYaENMSGxDUVVGVExFTkJVbVU3UVVGVGVFSXNkVUpCUVU4c1YwRlVhVUk3UVVGVmVFSXNkVUpCUVU4N1FVRkRTQ3d3UWtGQlRTeGpRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXYVVJc1lVRkJaaXhEUVVGaU96dEJRV2xDUVN4cFFrRkJTeXhKUVVGTUxFZEJRVmtzZVVKQlFXVTdRVUZEZGtJc2MwSkJRVTBzUzBGQlN5eEpRVVJaTzBGQlJYWkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdTVHRCUVVkMlFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFXaENMRWRCUVhkQ0xFVkJTRW83UVVGSmRrSXNkVUpCUVU4c1VVRktaMEk3UVVGTGRrSXNNa0pCUVZjc1EwRk1XVHRCUVUxMlFpd3dRa0ZCVlN4RFFVNWhPMEZCVDNaQ0xESkNRVUZYTEVOQlVGazdRVUZSZGtJc2VVSkJRVk1zUTBGU1l6dEJRVk4yUWl4MVFrRkJUeXhOUVZSblFqdEJRVlYyUWl4MVFrRkJUenRCUVVOSUxEQkNRVUZOTEdOQlJFZzdRVUZGU0N3d1FrRkJUU3hQUVVaSU8wRkJSMGdzTWtKQlFVODdRVUZJU2p0QlFWWm5RaXhoUVVGbUxFTkJRVm83TzBGQmFVSkJMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNFSTdRVUZEUVN4cFFrRkJTeXhYUVVGTUxFZEJRVzFDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hUUVVGbUxFTkJRVzVDTzBGQlEwRXNhVUpCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGd1FqczdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzV1VGQldDeERRVUYzUWl4TFFVRkxMRmxCUVRkQ08wRkJRMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmRCUVZnc1EwRkJkVUlzUzBGQlN5eFhRVUUxUWp0QlFVTkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFpRVUZZTEVOQlFYZENMRXRCUVVzc1dVRkJOMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1dVRkJWaXhEUVVGMVFpeExRVUZMTEZsQlFUVkNPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEZkQlFWWXNRMEZCYzBJc1MwRkJTeXhYUVVFelFqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3haUVVGV0xFTkJRWFZDTEV0QlFVc3NXVUZCTlVJN08wRkJSVUVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmRCUVZnc1EwRkJkVUlzUjBGQmRrSXNRMEZCTWtJc1dVRkJTVHRCUVVNelFpeDFRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeE5RVUZxUWp0QlFVTklMR0ZCUmtRN08wRkJTVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRmRCUVZZc1EwRkJjMElzUjBGQmRFSXNRMEZCTUVJc1dVRkJTVHRCUVVNeFFpeDFRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeE5RVUZxUWp0QlFVTklMR0ZCUmtRN08wRkJTVUVzYVVKQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFYSkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUZMTEdGQlFUVkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUZMTEV0QlFUVkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUZMTEVsQlFUVkNPMEZCUTBnN096czdSVUZ3UlRaQ0xFOUJRVThzU3pzN2EwSkJRWEJDTEVrN096czdPenM3T3pzN08wRkRSbkpDT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3TzBsQlJYRkNMRWs3T3pzN096czdPenM3TzJsRFFVVlNPMEZCUVVFN08wRkJRMHc3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhIUVVGTUxFTkJRVk1zVlVGQlZDeERRVUZ2UWl4RFFVRndRaXhGUVVGMVFpeERRVUYyUWl4RlFVRXdRaXhIUVVFeFFpeEZRVUVyUWl4SlFVRXZRaXhGUVVGeFF5eFRRVUZ5UXl4RFFVRm1PMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4VlFVRm1MRWRCUVRSQ0xFTkJRVFZDT3p0QlFVVkJMR2xDUVVGTExFOUJRVXdzUjBGQlpTeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRVZCUVdZN1FVRkRRU3hwUWtGQlN5eFBRVUZNTEVOQlFXRXNWVUZCWWl4SFFVRXdRaXhKUVVFeFFqczdRVUZGUVN4cFFrRkJTeXhOUVVGTUxFZEJRV01zY1VKQlFWYzdRVUZEY2tJc2MwSkJRVTBzUzBGQlN5eEpRVVJWTzBGQlJYSkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdSVHRCUVVkeVFpeHRRa0ZCUnl4UFFVRlBMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUVUZJVER0QlFVbHlRaXgzUWtGQlVTeEhRVXBoTzBGQlMzSkNMSFZDUVVGUExHTkJUR003UVVGTmNrSXNkVUpCUVU4N1FVRk9ZeXhoUVVGWUxFTkJRV1E3UVVGUlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RFFVRjVRaXhMUVVGTExFMUJRVGxDT3p0QlFVVkJMR2xDUVVGTExFZEJRVXdzUjBGQlZ5eHJRa0ZCVVR0QlFVTm1MSE5DUVVGTkxFdEJRVXNzU1VGRVNUdEJRVVZtTEhkQ1FVRlJMRXRCUVVzN1FVRkdSU3hoUVVGU0xFTkJRVmc3TzBGQlMwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUVUZCYUVJc1EwRkJkVUlzUjBGQmRrSXNRMEZCTWtJc1dVRkJUVHRCUVVNM1FpeDFRa0ZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExGVkJRV1lzUjBGQk5FSXNRMEZCTlVJN1FVRkRTQ3hoUVVaRU96dEJRVWxCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEVsQlFXaENMRU5CUVhGQ0xFZEJRWEpDTEVOQlFYbENMRmxCUVUwN1FVRkRNMElzZFVKQlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hWUVVGbUxFZEJRVFJDTEVOQlFUVkNPMEZCUTBnc1lVRkdSRHM3UVVGSlFTeHBRa0ZCU3l4VFFVRk1MRWRCUVdsQ0xFTkJRV3BDTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeEhRVUZ5UWp0QlFVTkJMR2xDUVVGTExHTkJRVXdzUjBGQmMwSXNRMEZCZEVJN1FVRkRRU3hwUWtGQlN5eHJRa0ZCVEN4SFFVRXdRaXhEUVVFeFFqdEJRVU5CTEdsQ1FVRkxMR1ZCUVV3c1IwRkJkVUlzUTBGQmRrSTdRVUZEUVN4cFFrRkJTeXh0UWtGQlRDeEhRVUV5UWl4SlFVRXpRanM3UVVGRlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExFMUJRV1lzUTBGQmMwSXNTVUZCZEVJc1EwRkJNa0lzVDBGQlR5eExRVUZRTEVOQlFXRXNUVUZCWWl4SFFVRnpRaXhGUVVGcVJDeEZRVUZ4UkN4WlFVRk5PMEZCUTNaRUxHOUNRVUZITEU5QlFVc3NZVUZCVEN4SFFVRnhRaXhIUVVGNFFpeEZRVUUyUWp0QlFVTjZRaXd5UWtGQlN5eGhRVUZNTEVsQlFYTkNMRWRCUVhSQ08wRkJRMGc3UVVGRFNpeGhRVXBFT3p0QlFVMUJMR2xDUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1ZVRkJWQ3hEUVVGdlFpeExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRTVRaXhGUVVGeFF5eExRVUZMTEVsQlFVd3NRMEZCVlN4TlFVRXZReXhEUVVGeVFqdEJRVU5CTEdsQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNRMEZCZFVJc1UwRkJka0lzUjBGQmJVTXNUVUZCYmtNN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEZGQlFYWkNMRU5CUVdkRExFTkJRV2hETEVWQlFXMURMRU5CUVc1RExFVkJRWE5ETEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVdoRUxFVkJRWFZFTEV0QlFVc3NTVUZCVEN4RFFVRlZMRTFCUVdwRk96dEJRVVZCTEdsQ1FVRkxMRTlCUVV3c1IwRkJaU3hMUVVGTExFZEJRVXdzUTBGQlV5eE5RVUZVTEVOQlFXZENMRU5CUVdoQ0xFVkJRVzFDTEVOQlFXNUNMRVZCUVhOQ0xFdEJRVXNzWVVGQk0wSXNRMEZCWmp0QlFVTkJMR2xDUVVGTExFOUJRVXdzUTBGQllTeFBRVUZpTEVkQlFYVkNMRXRCUVhaQ08wRkJRMEVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRXRCUVdJc1IwRkJjVUlzU1VGQmNrSTdPMEZCUlVRN1FVRkRReXhwUWtGQlN5eGpRVUZNTEVkQlFYTkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFhRVUZtTEVOQlFYUkNPMEZCUTBFc2FVSkJRVXNzYlVKQlFVd3NSMEZCTWtJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEdkQ1FVRm1MRU5CUVROQ08wRkJRMEVzYVVKQlFVc3NiMEpCUVV3c1IwRkJORUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMR2xDUVVGbUxFTkJRVFZDTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGeVFqczdRVUZGUVR0QlFVTklPenM3YVVOQlJWRTdRVUZCUVRzN1FVRkZUQ3hwUWtGQlN5eFRRVUZNTEVsQlFXdENMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeGpRVUZxUXp0QlFVTkJMR2xDUVVGTExHTkJRVXdzU1VGQmRVSXNTMEZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExHTkJRWFJETzBGQlEwRXNhVUpCUVVzc1pVRkJUQ3hKUVVGM1FpeExRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1kwRkJka003TzBGQlJVRXNaMEpCUVVrc1MwRkJTeXhUUVVGTUxFZEJRV2xDTEV0QlFVc3NZVUZCTVVJc1JVRkJlVU03UVVGRGNrTXNjVUpCUVVzc1UwRkJUQ3hIUVVGcFFpeERRVUZxUWpzN1FVRkZRU3h4UWtGQlN5eFhRVUZNTEVOQlFXbENPMEZCUTJJc01FSkJRVTBzUzBGQlN5eEpRVVJGTzBGQlJXSXNkVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEdOQlFXUXNRMEZCTmtJc1EwRkJOMElzUlVGQlowTXNSVUZCYUVNc1NVRkJjME1zUlVGR05VSTdRVUZIWWl4MVFrRkJSeXhEUVVoVk8wRkJTV0lzTWtKQlFVODdRVUZEU0N3eVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF5eEZRVUYwUXl4SlFVRTBReXhMUVVGTExFMUJRVXdzUzBGQlowSXNSMEZCYUVJc1IwRkJjMElzUTBGQmRFSXNSMEZCTUVJc1EwRkJReXhEUVVGMlJTeERRVVJCTzBGQlJVZ3NNa0pCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEdOQlFXUXNRMEZCTmtJc1EwRkJOMElzUlVGQlowTXNSVUZCYUVNc1NVRkJjME03UVVGR2RFTXNjVUpCU2swN1FVRlJZaXcwUWtGQlVTeERRVkpMTzBGQlUySXNhVU5CUVdFc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEdOQlFXUXNRMEZCTmtJc1JVRkJOMElzUlVGQmFVTXNSVUZCYWtNc1NVRkJkVU1zUlVGVWRrTTdRVUZWWWl3eVFrRkJUenRCUVZaTkxHbENRVUZxUWp0QlFWbElPenRCUVVWRUxHZENRVUZKTEV0QlFVc3NZMEZCVEN4SFFVRnpRaXhMUVVGTExHdENRVUV2UWl4RlFVRnRSRHRCUVVNdlF5eHhRa0ZCU3l4alFVRk1MRWRCUVhOQ0xFTkJRWFJDTzBGQlEwRXNjVUpCUVVzc1QwRkJUQ3hEUVVGaExGbEJRV0lzUTBGQk1FSTdRVUZCUVN3eVFrRkJVeXhOUVVGTkxFdEJRVTRzUlVGQlZEdEJRVUZCTEdsQ1FVRXhRanRCUVVOQkxHOUNRVUZKTEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJha0lzUlVGQmQwSTdRVUZEY0VJc2VVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1ZVRkJhRUlzUTBGQk1rSXNTMEZCU3l4UFFVRm9RenRCUVVOSU8wRkJRMG83TzBGQlJVUXNaMEpCUVVrc1MwRkJTeXhsUVVGTUxFZEJRWFZDTEV0QlFVc3NiVUpCUVdoRExFVkJRWEZFTzBGQlEycEVMSEZDUVVGTExHVkJRVXdzUjBGQmRVSXNRMEZCZGtJN1FVRkRRU3h2UWtGQlNTeExRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRm9RaXhGUVVGMVFqdEJRVU51UWl4NVFrRkJTeXhOUVVGTUxFTkJRVmtzUzBGQldqdEJRVU5JTzBGQlEwbzdPMEZCUlVRc2FVSkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1RVRkJiRUlzUTBGQmVVSXNUMEZCZWtJc1EwRkJhVU1zUzBGQlN5eE5RVUZNTEVOQlFWa3NUMEZCTjBNc1JVRkJjMFFzUzBGQlN5eFBRVUV6UkN4RlFVRnZSU3hMUVVGTExGRkJRWHBGTEVWQlFXMUdMRWxCUVc1R0xFVkJRWGxHTEVsQlFYcEdPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFMUJRV3hDTEVOQlFYbENMRTlCUVhwQ0xFTkJRV2xETEV0QlFVc3NUVUZCZEVNc1JVRkJPRU1zUzBGQlN5eFBRVUZ1UkN4RlFVRTBSQ3hMUVVGTExGVkJRV3BGTEVWQlFUWkZMRWxCUVRkRkxFVkJRVzFHTEVsQlFXNUdPenRCUVVWQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4UFFVRmlMRU5CUVhGQ08wRkJRVUVzZFVKQlFWTXNUMEZCU3l4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVGclFpeE5RVUZzUWl4RFFVRjVRaXhQUVVGNlFpeERRVUZwUXl4UFFVRkxMRTFCUVhSRExFVkJRVGhETEUxQlFVMHNUMEZCY0VRc1JVRkJOa1FzVDBGQlN5eFRRVUZzUlN4RlFVRTJSU3hKUVVFM1JTeFRRVUZVTzBGQlFVRXNZVUZCY2tJN08wRkJSVUVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRmxCUVdJc1EwRkJNRUlzUTBGQk1VSXNTVUZCSzBJc1EwRkJMMEk3UVVGRFNEczdPMjlEUVVWWExFa3NSVUZCVFRzN1FVRkZaQ3huUWtGQlNTeFJRVUZSTEV0QlFVc3NUMEZCVEN4RFFVRmhMR05CUVdJc1EwRkJORUlzUzBGQk5VSXNRMEZCV2pzN1FVRkZRU3huUWtGQlNTeERRVUZETEV0QlFVd3NSVUZCV1R0QlFVTlNMSGRDUVVGUkxHOUNRVUZWTEVsQlFWWXNRMEZCVWp0QlFVTkJMSEZDUVVGTExFOUJRVXdzUTBGQllTeEhRVUZpTEVOQlFXbENMRXRCUVdwQ08wRkJRMGc3UVVGRFJDeHJRa0ZCVFN4TFFVRk9MRU5CUVZrc1NVRkJXanRCUVVOSU96czdhME5CUlZNc1J5eEZRVUZMTEVzc1JVRkJUenRCUVVGQk96dEJRVU5zUWl4blFrRkJTU3hSUVVGUkxFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4TFFVRmtMRU5CUVc5Q0xFZEJRWEJDTEVOQlFWbzdRVUZEUVN4blFrRkJTU3hWUVVGVkxFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4UFFVRmtMRVZCUVdRN1FVRkRRU3huUWtGQlNTeHhRa0ZCY1VJc1EwRkJla0k3UVVGRFFTeG5Ra0ZCU1N4blFrRkJaMElzUjBGQmNFSTdRVUZEUVN4blFrRkJTU3hsUVVGbExFVkJRVzVDT3p0QlFVVkJMR3RDUVVGTkxFVkJRVTRzUTBGQlV5eEZRVUZETEUxQlFVMHNVVUZCVUN4RlFVRlVMRVZCUVRKQ0xFZEJRVE5DTzBGQlEwRXNhMEpCUVUwc1ZVRkJUaXhEUVVGcFFpeEhRVUZxUWl4RFFVRnhRaXhaUVVGTk8wRkJRM1pDTEc5Q1FVRkpMRWxCUVVvc1IwRkJWeXhSUVVGWU8wRkJRMGdzWVVGR1JEdEJRVWRCTEd0Q1FVRk5MRXRCUVU0N08wRkJSVUVzYjBKQlFWRXNRMEZCVWl4SFFVRlpMRWxCUVVrc1EwRkJhRUk3UVVGRFFTeHZRa0ZCVVN4RFFVRlNMRWRCUVZrc1NVRkJTU3hEUVVGb1FqdEJRVU5CTEc5Q1FVRlJMRTlCUVZJc1IwRkJhMElzUTBGQmJFSTdRVUZEUVN4dlFrRkJVU3hoUVVGU0xFTkJRWE5DTEZWQlFYUkNPenRCUVVWQkxHZENRVUZKTEVsQlFVa3NUVUZCU2l4SlFVRmpMRU5CUVd4Q0xFVkJRWEZDTzBGQlEycENMR2REUVVGblFpeEhRVUZvUWp0QlFVTkJMQ3RDUVVGbExFVkJRV1k3UVVGRFFTeDNRa0ZCVVN4UlFVRlNPMEZCUTBnN08wRkJSVVFzYjBKQlFWRXNaMEpCUVZJc1EwRkJlVUlzUzBGQmVrSXNRMEZCSzBJc1EwRkJReXhoUVVGb1F5eEZRVUVyUXl4RFFVRkRMR0ZCUVdoRU8wRkJRMEVzYjBKQlFWRXNaMEpCUVZJc1EwRkJlVUlzUzBGQmVrSXNRMEZCSzBJc1lVRkJMMElzUlVGQk9FTXNZVUZCT1VNN1FVRkRRU3h2UWtGQlVTeExRVUZTTEVOQlFXTXNTVUZCWkN4RlFVRnZRaXhIUVVGd1FpeEZRVUY1UWl4SlFVRjZRaXhGUVVFclFpeFpRVUV2UWp0QlFVTkJMRzlDUVVGUkxFMUJRVklzUjBGQmFVSXNXVUZCVFR0QlFVTnVRaXh6UTBGQmMwSXNUMEZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExHTkJRWEpETzBGQlEwRXNiMEpCUVVjc2MwSkJRWE5DTEVkQlFYcENMRVZCUVRaQ08wRkJRM3BDTEhsRFFVRnhRaXhEUVVGeVFqdEJRVU5CTERSQ1FVRlJMRTlCUVZJN1FVRkRTRHRCUVVWS0xHRkJVRVE3UVVGUlFTeHZRa0ZCVVN4UFFVRlNMRU5CUVdkQ08wRkJRVUVzZFVKQlFWa3NVMEZCVXl4SlFVRlVMRWRCUVdkQ0xFdEJRVFZDTzBGQlFVRXNZVUZCYUVJN1FVRkRRU3huUWtGQlNTeERRVUZETEV0QlFVc3NUVUZCVEN4RFFVRlpMRXRCUVdwQ0xFVkJRWGRDTzBGQlEzQkNMSEZDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRlZCUVdoQ0xFTkJRVEpDTEV0QlFVc3NUMEZCYUVNN1FVRkRTRHRCUVVOS096czdhVU5CUlZFc1RTeEZRVUZSTEVzc1JVRkJUenRCUVVOd1FpeHBRa0ZCU3l4alFVRk1MRU5CUVc5Q0xFbEJRWEJDTEVOQlFYbENMRVZCUVhwQ0xFVkJRVFJDTEVOQlFUVkNMRVZCUVRoQ0xFZEJRVGxDTzBGQlEwRXNhMEpCUVUwc1RVRkJUaXhEUVVGaExFOUJRVThzVFVGQmNFSTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzUzBGQlppeEZRVUZ6UWl4UFFVRlBMRWxCUVRkQ08wRkJRMEVzWjBKQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVZnc1JVRkJhMEk3UVVGRFpDeHhRa0ZCU3l4dFFrRkJUQ3hEUVVGNVFpeEpRVUY2UWl4RFFVRTRRaXhGUVVFNVFpeEZRVUZwUXl4RFFVRnFReXhGUVVGdFF5eEhRVUZ1UXp0QlFVTkJMSEZDUVVGTExFZEJRVXdzUTBGQlV5eFhRVUZVTEVOQlFYRkNMRTFCUVUwc1UwRkJNMEk3UVVGRFNEdEJRVU5FTEcxQ1FVRlBMRWxCUVZBN1FVRkRTRHM3TzJ0RFFVVlRMRTBzUlVGQlVTeE5MRVZCUVZFN1FVRkRkRUlzYVVKQlFVc3NZMEZCVEN4RFFVRnZRaXhKUVVGd1FpeERRVUY1UWl4RlFVRjZRaXhGUVVFMFFpeERRVUUxUWl4RlFVRTRRaXhIUVVFNVFqdEJRVU5CTEcxQ1FVRlBMRTFCUVZBc1EwRkJZeXhQUVVGUExFMUJRWEpDTzBGQlEwRXNhVUpCUVVzc1IwRkJUQ3hEUVVGVExGbEJRVlE3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1RVRkJaaXhGUVVGMVFpeFBRVUZQTEVsQlFUbENPMEZCUTBFc1owSkJRVWtzUTBGQlF5eFBRVUZQTEV0QlFWb3NSVUZCYlVJN1FVRkRaaXh4UWtGQlN5eHZRa0ZCVEN4RFFVRXdRaXhKUVVFeFFqdEJRVU5CTEhGQ1FVRkxMRkZCUVV3N1FVRkRTRHRCUVVORUxHMUNRVUZQTEVsQlFWQTdRVUZEU0RzN08yMURRVVZWTEUwc1JVRkJVU3hMTEVWQlFVODdRVUZEZEVJc2EwSkJRVTBzVFVGQlRpeERRVUZoTEUxQlFVMHNUVUZCYmtJN1FVRkRRU3h0UWtGQlR5eE5RVUZRTEVOQlFXTXNUVUZCVFN4TlFVRndRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4TlFVRm1PMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEV0QlFXWTdRVUZEUVN4blFrRkJTU3hEUVVGRExFMUJRVTBzUzBGQldDeEZRVUZyUWp0QlFVTmtMSEZDUVVGTExHMUNRVUZNTEVOQlFYbENMRWxCUVhwQ0xFTkJRVGhDTEVWQlFUbENMRVZCUVdsRExFTkJRV3BETEVWQlFXMURMRWRCUVc1RE8wRkJRMEVzY1VKQlFVc3NSMEZCVEN4RFFVRlRMRmRCUVZRc1EwRkJjVUlzVFVGQlRTeFRRVUV6UWp0QlFVTklPMEZCUTBRc2FVSkJRVXNzUjBGQlRDeERRVUZUTEZsQlFWUTdRVUZEUVN4blFrRkJTU3hEUVVGRExFOUJRVThzUzBGQldpeEZRVUZ0UWp0QlFVTm1MSEZDUVVGTExHOUNRVUZNTEVOQlFUQkNMRWxCUVRGQ08wRkJRMEVzY1VKQlFVc3NVVUZCVER0QlFVTklPMEZCUTBvN096dHRRMEZGVXp0QlFVRkJPenRCUVVOT0xHbENRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1ZVRkJaaXhIUVVFMFFpeERRVUUxUWp0QlFVTkJMR2xDUVVGTExFOUJRVXdzUTBGQllTeFBRVUZpTEVkQlFYVkNMRWxCUVhaQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVlVGQmFFSXNRMEZCTWtJc1MwRkJTeXhQUVVGb1F6dEJRVU5CTEdkQ1FVRkpMRkZCUVZFc1MwRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEUxQlFXWXNRMEZCYzBJc1MwRkJTeXhKUVVFelFpeEZRVUZwUXl4SlFVRnFReXhEUVVGYU8wRkJRMEVzYTBKQlFVMHNSMEZCVGl4RFFVRlZMRWxCUVZZc1JVRkJaMElzV1VGQlRUdEJRVU5zUWl4MVFrRkJTeXhMUVVGTUxFTkJRVmNzU1VGQldEdEJRVU5CTEhWQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzU1VGQmJrSTdRVUZEUVN4MVFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TFFVRm9RaXhEUVVGelFpeE5RVUYwUWp0QlFVTklMR0ZCU2tRN1FVRkxRU3hyUWtGQlRTeExRVUZPTzBGQlEwZzdPenM3UlVGd1RqWkNMRTlCUVU4c1N6czdhMEpCUVhCQ0xFa2lMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCbEtIUXNiaXh5S1h0bWRXNWpkR2x2YmlCektHOHNkU2w3YVdZb0lXNWJiMTBwZTJsbUtDRjBXMjlkS1h0MllYSWdZVDEwZVhCbGIyWWdjbVZ4ZFdseVpUMDlYQ0ptZFc1amRHbHZibHdpSmlaeVpYRjFhWEpsTzJsbUtDRjFKaVpoS1hKbGRIVnliaUJoS0c4c0lUQXBPMmxtS0drcGNtVjBkWEp1SUdrb2J5d2hNQ2s3ZG1GeUlHWTlibVYzSUVWeWNtOXlLRndpUTJGdWJtOTBJR1pwYm1RZ2JXOWtkV3hsSUNkY0lpdHZLMXdpSjF3aUtUdDBhSEp2ZHlCbUxtTnZaR1U5WENKTlQwUlZURVZmVGs5VVgwWlBWVTVFWENJc1puMTJZWElnYkQxdVcyOWRQWHRsZUhCdmNuUnpPbnQ5ZlR0MFcyOWRXekJkTG1OaGJHd29iQzVsZUhCdmNuUnpMR1oxYm1OMGFXOXVLR1VwZTNaaGNpQnVQWFJiYjExYk1WMWJaVjA3Y21WMGRYSnVJSE1vYmo5dU9tVXBmU3hzTEd3dVpYaHdiM0owY3l4bExIUXNiaXh5S1gxeVpYUjFjbTRnYmx0dlhTNWxlSEJ2Y25SemZYWmhjaUJwUFhSNWNHVnZaaUJ5WlhGMWFYSmxQVDFjSW1aMWJtTjBhVzl1WENJbUpuSmxjWFZwY21VN1ptOXlLSFpoY2lCdlBUQTdienh5TG14bGJtZDBhRHR2S3lzcGN5aHlXMjlkS1R0eVpYUjFjbTRnYzMwcElpd2laWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVkdWNGRFSjFkSFJ2YmlCbGVIUmxibVJ6SUZCb1lYTmxjaTVDZFhSMGIyNGdlMXh1WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvZXlCbllXMWxMQ0I0TENCNUxDQmhjM05sZEN3Z1kyRnNiR0poWTJzc0lHTmhiR3hpWVdOclEyOXVkR1Y0ZEN3Z2IzWmxja1p5WVcxbExDQnZkWFJHY21GdFpTd2daRzkzYmtaeVlXMWxMQ0IxY0VaeVlXMWxMQ0JzWVdKbGJDd2djM1I1YkdVZ2ZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaG5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dZMkZzYkdKaFkyc3NJR05oYkd4aVlXTnJRMjl1ZEdWNGRDd2diM1psY2taeVlXMWxMQ0J2ZFhSR2NtRnRaU3dnWkc5M2JrWnlZVzFsTENCMWNFWnlZVzFsS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YkdGaVpXd2dQU0JzWVdKbGJEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRIbHNaU0E5SUhOMGVXeGxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUmxlSFFnUFNCdVpYY2dVR2hoYzJWeUxsUmxlSFFvZEdocGN5NW5ZVzFsTENBd0xDQXdMQ0IwYUdsekxteGhZbVZzTENCMGFHbHpMbk4wZVd4bEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MFpYaDBMbUZ1WTJodmNpNXpaWFJVYnlnd0xqVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV1JrUTJocGJHUW9kR2hwY3k1MFpYaDBLVHRjYmx4dUlDQWdJSDFjYm4xY2JpSXNJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVOaGNtUkNkWFIwYjI0Z1pYaDBaVzVrY3lCUWFHRnpaWEl1UW5WMGRHOXVJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hzZ1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHTmhiR3hpWVdOckxDQmpZV3hzWW1GamEwTnZiblJsZUhRc0lHOTJaWEpHY21GdFpTd2diM1YwUm5KaGJXVXNJR1J2ZDI1R2NtRnRaU3dnZFhCR2NtRnRaU3gyWVd4MVpTd2dhWE5EYkdsbGJuUjlLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLR2RoYldVc0lIZ3NJSGtzSUdGemMyVjBMQ0JqWVd4c1ltRmpheXdnWTJGc2JHSmhZMnREYjI1MFpYaDBMQ0J2ZG1WeVJuSmhiV1VzSUc5MWRFWnlZVzFsTENCa2IzZHVSbkpoYldVc0lIVndSbkpoYldVcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTJGc2JHSmhZMnNnUFNCallXeHNZbUZqYXp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUyWVd4MVpTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1selEyeHBaVzUwSUQwZ2FYTkRiR2xsYm5RN1hHNGdJQ0FnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJQ29nWVhNZ2MzUmhkR1Z6SUdaeWIyMGdKeTR2YzNSaGRHVnpKenRjYm1OdmJuTjBJRWRCVFVVZ1BTQnVaWGNnVUdoaGMyVnlMa2RoYldVb09EQXdMQ0F4TURBd0xDQlFhR0Z6WlhJdVFWVlVUeWs3WEc1Y2JrOWlhbVZqZEM1clpYbHpLSE4wWVhSbGN5a3VabTl5UldGamFDaHpkR0YwWlNBOVBpQkhRVTFGTG5OMFlYUmxMbUZrWkNoemRHRjBaU3dnYzNSaGRHVnpXM04wWVhSbFhTa3BPMXh1WEc1SFFVMUZMbk4wWVhSbExuTjBZWEowS0NkQ2IyOTBKeWs3WEc0aUxDSmxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJDZFd4c1pYUWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVUzQnlhWFJsSUh0Y2JseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIc2daMkZ0WlN3Z2VDd2dlU3dnWVhOelpYUXNJR2hsWVd4MGFDd2dkR2x1ZENBOUlEQjRabVl3TURBd0lIMHBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9aMkZ0WlN3Z2VDd2dlU3dnWVhOelpYUXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZVzVqYUc5eUxuTmxkRlJ2S0RBdU5TazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTmhiR1V1YzJWMFZHOG9NQzQ0S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWldGc2RHZ2dQU0JvWldGc2RHZzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRHbHVkQ0E5SUhScGJuUTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyaGxZMnRYYjNKc1pFSnZkVzVrY3lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1YwVDJaQ2IzVnVaSE5MYVd4c0lEMGdkSEoxWlR0Y2JpQWdJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdRblZzYkdWMElHWnliMjBnSnk0dlluVnNiR1YwSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUlc1bGJYa2daWGgwWlc1a2N5QlFhR0Z6WlhJdVUzQnlhWFJsSUh0Y2JseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIc2daMkZ0WlN3Z2VDd2dlU3dnWVhOelpYUXNJR1p5WVcxbExDQm9aV0ZzZEdnc0lHSjFiR3hsZEZOd1pXVmtMSE5wZW1VZ2ZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaG5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dabkpoYldVcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaU0E5SUdkaGJXVTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNibHh1SUNBZ0lDQWdJQ0F2TDNOcGVtVWdQU0J6WTJGc1pWeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OcGVtVWdQU0J6YVhwbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OallXeGxMbk5sZEZSdktITnBlbVVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFDQTlJR2hsWVd4MGFEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFlYaElaV0ZzZEdnZ1BTQm9aV0ZzZEdnN1hHNWNibHh1SUNBZ0lDQWdJQ0F2TDBkeVlYWnBkSGxjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5Cb2VYTnBZM011WVhKallXUmxMbVZ1WVdKc1pTaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxtTnZiR3hwWkdWWGIzSnNaRUp2ZFc1a2N5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNW5jbUYyYVhSNUxua2dQU0ExTURBN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNWliM1Z1WTJVdWMyVjBLREVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WVc1cGJXRjBhVzl1Y3k1aFpHUW9KM053YVc1dWFXNW5KeXdnV3pBc0lERXNJRElzSURNc0lEUXNJRFVzSURZc0lEY3NJRGdzSURrc0lERXdMQ0F4TVN3Z01USXNJREV6TENBeE5GMHNJRE13TENCMGNuVmxLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1S0NkemNHbHVibWx1WnljcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwY3lBOUlIUm9hWE11WjJGdFpTNWhaR1F1WjNKdmRYQW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSekxtVnVZV0pzWlVKdlpIa2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMWJHeGxkRk53WldWa0lEMGdZblZzYkdWMFUzQmxaV1E3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YUc5MFUyOTFibVFnUFNCMGFHbHpMbWRoYldVdVlXUmtMbk52ZFc1a0tDZGxibVZ0ZVZOb2IzUW5LVHRjYmx4dUlDQWdJSDFjYmx4dUlDQWdJSFZ3WkdGMFpTZ3BJSHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d2IzTnBkR2x2Ymk1NElEd2dNQzR3TkNBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1M2FXUjBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2IzTnBkR2x2Ymk1NElEMGdNQzR3TkNBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1M2FXUjBhQ0FySURJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1ZG1Wc2IyTnBkSGt1ZUNBcVBTQXRNVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJR2xtSUNoMGFHbHpMbkJ2YzJsMGFXOXVMbmdnUGlBd0xqazJJQ29nZEdocGN5NW5ZVzFsTG5kdmNteGtMbmRwWkhSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJ2YzJsMGFXOXVMbmdnUFNBd0xqazJJQ29nZEdocGN5NW5ZVzFsTG5kdmNteGtMbmRwWkhSb0lDMGdNanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNTJaV3h2WTJsMGVTNTRJQ285SUMweE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0c5emFYUnBiMjR1ZVNBdElIUm9hWE11YUdWcFoyaDBJQzhnTWlBK0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1b1pXbG5hSFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWEybHNiQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNWNibHh1SUNBZ0lHUmhiV0ZuWlNoaGJXOTFiblFwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1WkdGdFlXZGxLR0Z0YjNWdWRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnpaWFFvZXlCNExDQjVMQ0JvWldGc2RHZ3NJR0oxYkd4bGRGTndaV1ZrTENCemNHVmxaQ0I5S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5KbGMyVjBLSGdzSUhrc0lHaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBVM0JsWldRZ1BTQmlkV3hzWlhSVGNHVmxaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG5abGJHOWphWFI1TG5nZ1BTQnpjR1ZsWkM1NE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KdlpIa3VkbVZzYjJOcGRIa3VlU0E5SUhOd1pXVmtMbms3WEc0Z0lDQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElGQnNZWGxsY2lCbWNtOXRJQ2N1TGk5emFHOXZkR1Z5TDNCc1lYbGxjaWM3WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QklkV1FnWlhoMFpXNWtjeUJRYUdGelpYSXVSM0p2ZFhBZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIc2daMkZ0WlN3Z2NHeGhlV1Z5SUgwcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb1oyRnRaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlNBOUlHZGhiV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeUlEMGdjR3hoZVdWeU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KbklEMGdibVYzSUZCb1lYTmxjaTVKYldGblpTaDBhR2x6TG1kaGJXVXNJREFzSURBc0lDZG9kV1JDWnljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5kcFpIUm9JRDBnT0RBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1obFlXeDBhR0poY2lBOUlHNWxkeUJRYUdGelpYSXVVM0J5YVhSbEtIUm9hWE11WjJGdFpTd2dNaXdnTWl3Z0oyaGxZV3gwYUdKaGNpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUdKaGNpNXpZMkZzWlM1elpYUlVieWd3TGprNU5Td2dNVEVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOdmNtVWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qYjNKbFRHRmlaV3dnUFNBblUyTnZjbVU2SUNjN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOdmNtVlVaWGgwSUQwZ2JtVjNJRkJvWVhObGNpNVVaWGgwS0hSb2FYTXVaMkZ0WlN3Z01qQXNJREUwTENCMGFHbHpMbk5qYjNKbFRHRmlaV3dnS3lCMGFHbHpMbk5qYjNKbExDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTVROd2VDQldaWEprWVc1aEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2QzYUdsMFpTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmx4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtRmtaQ2gwYUdsekxtSm5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhaR1FvZEdocGN5NW9aV0ZzZEdoaVlYSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtRmtaQ2gwYUdsekxuTmpiM0psVkdWNGRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RYQmtZWFJsU0dWaGJIUm9LSEJzWVhsbGNpa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUdKaGNpNWpjbTl3S0c1bGR5QlFhR0Z6WlhJdVVtVmpkR0Z1WjJ4bEtEQXNJREFzSUNoMGFHbHpMbkJzWVhsbGNpNW9aV0ZzZEdnZ0x5QjBhR2x6TG5Cc1lYbGxjaTV0WVhoSVpXRnNkR2dwSUNvZ2RHaHBjeTUzYVdSMGFDd2dNVEFwS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWldGc2RHaGlZWEl1ZFhCa1lYUmxRM0p2Y0NncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaVk5qYjNKbEtHRnRiM1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OamIzSmxJQ3M5SUdGdGIzVnVkRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpZMjl5WlZSbGVIUXVkR1Y0ZENBOUlIUm9hWE11YzJOdmNtVk1ZV0psYkNBcklDaDBhR2x6TG5OamIzSmxJQ29nTVRBcE8xeHVJQ0FnSUgxY2JseHVmVHRjYmlJc0ltbHRjRzl5ZENCQ2RXeHNaWFFnWm5KdmJTQW5MaTR2Y0dGdVp5OWlkV3hzWlhRbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCRmJtVnRlU0JsZUhSbGJtUnpJRkJvWVhObGNpNVRjSEpwZEdVZ2UxeHVYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9leUJuWVcxbExDQjRMQ0I1TENCaGMzTmxkQ3dnWm5KaGJXVXNJR2hsWVd4MGFDd2dZblZzYkdWMFUzQmxaV1FnZlNrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lobllXMWxMQ0I0TENCNUxDQmhjM05sZEN3Z1puSmhiV1VwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTQTlJR2RoYldVN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WTJGc1pTNXpaWFJVYnlnd0xqZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUNBOUlHaGxZV3gwYUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0WVhoSVpXRnNkR2dnUFNCb1pXRnNkR2c3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1d2FIbHphV056TG1GeVkyRmtaUzVsYm1GaWJHVW9kR2hwY3lrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtbHRZWFJwYjI1ekxtRmtaQ2duYzNCcGJtNXBibWNuTENCYk1Dd2dNU3dnTWl3Z015d2dOQ3dnTlN3Z05pd2dOeXdnT0N3Z09Td2dNVEFzSURFeExDQXhNaXdnTVRNc0lERTBYU3dnTXpBc0lIUnlkV1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhrb0ozTndhVzV1YVc1bkp5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSeklEMGdkR2hwY3k1bllXMWxMbUZrWkM1bmNtOTFjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUoxYkd4bGRITXVaVzVoWW14bFFtOWtlU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwVTNCbFpXUWdQU0JpZFd4c1pYUlRjR1ZsWkR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5Ob2IzUlRiM1Z1WkNBOUlIUm9hWE11WjJGdFpTNWhaR1F1YzI5MWJtUW9KMlZ1WlcxNVUyaHZkQ2NwTzF4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZFhCa1lYUmxLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQnZjMmwwYVc5dUxuZ2dQQ0F3TGpBMElDb2dkR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQnZjMmwwYVc5dUxuZ2dQU0F3TGpBMElDb2dkR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvSUNzZ01qdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1MlpXeHZZMmwwZVM1NElDbzlJQzB4TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlVnYVdZZ0tIUm9hWE11Y0c5emFYUnBiMjR1ZUNBK0lEQXVPVFlnS2lCMGFHbHpMbWRoYldVdWQyOXliR1F1ZDJsa2RHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0c5emFYUnBiMjR1ZUNBOUlEQXVPVFlnS2lCMGFHbHpMbWRoYldVdWQyOXliR1F1ZDJsa2RHZ2dMU0F5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aWIyUjVMblpsYkc5amFYUjVMbmdnS2owZ0xURTdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d2IzTnBkR2x2Ymk1NUlDMGdkR2hwY3k1b1pXbG5hSFFnTHlBeUlENGdkR2hwY3k1bllXMWxMbmR2Y214a0xtaGxhV2RvZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXJhV3hzS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCemFHOXZkQ2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5Ob2IzUlRiM1Z1WkM1d2JHRjVLRndpWENJc01Dd3dMalVwTzF4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0JpZFd4c1pYUWdQU0IwYUdsekxtSjFiR3hsZEhNdVoyVjBSbWx5YzNSRmVHbHpkSE1vWm1Gc2MyVXBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hZblZzYkdWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWRXeHNaWFFnUFNCdVpYY2dRblZzYkdWMEtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5ZVzFsT2lCMGFHbHpMbWRoYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1NExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJvYVhNdVltOTBkRzl0TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdobFlXeDBhRG9nTWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWJHeGxkQ2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdsdWREb2dNSGhtWmpBd01EQmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSekxtRmtaQ2hpZFd4c1pYUXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwTG5KbGMyVjBLSFJvYVhNdWVDd2dkR2hwY3k1aWIzUjBiMjBzSURJcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWW5Wc2JHVjBMbUp2WkhrdWRtVnNiMk5wZEhrdWVTQTlJSFJvYVhNdVluVnNiR1YwVTNCbFpXUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1pHRnRZV2RsS0dGdGIzVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTVrWVcxaFoyVW9ZVzF2ZFc1MEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYTmxkQ2g3SUhnc0lIa3NJR2hsWVd4MGFDd2dZblZzYkdWMFUzQmxaV1FzSUhOd1pXVmtJSDBwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1Y21WelpYUW9lQ3dnZVN3Z2FHVmhiSFJvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUlRjR1ZsWkNBOUlHSjFiR3hsZEZOd1pXVmtPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1ZG1Wc2IyTnBkSGt1ZUNBOUlITndaV1ZrTG5nN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNTJaV3h2WTJsMGVTNTVJRDBnYzNCbFpXUXVlVHRjYmlBZ0lDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ1FuVnNiR1YwSUdaeWIyMGdKeTR1TDNCaGJtY3ZZblZzYkdWMEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHeGhlV1Z5SUdWNGRHVnVaSE1nVUdoaGMyVnlMbE53Y21sMFpTQjdYRzVjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWg3SUdkaGJXVXNJSGdzSUhrc0lHRnpjMlYwTENCbWNtRnRaU3dnYUdWaGJIUm9JSDBwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvWjJGdFpTd2dlQ3dnZVN3Z1lYTnpaWFFzSUdaeVlXMWxLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVZ1BTQm5ZVzFsTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WVc1amFHOXlMbk5sZEZSdktEQXVOU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk5oYkdVdWMyVjBWRzhvTUM0NEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUNBOUlHaGxZV3gwYUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0WVhoSVpXRnNkR2dnUFNCb1pXRnNkR2c3WEc1Y2JseHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbUZ5WTJGa1pTNWxibUZpYkdVb2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUM4dlozSmhkbWwwZVZ4dUlDQWdJQ0FnSUNCMGFHbHpMbUp2WkhrdVozSmhkbWwwZVM1NUlEMGdNVEF3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUp2WkhrdVkyOXNiR2xrWlZkdmNteGtRbTkxYm1SeklEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0x5OWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEhNZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMGN5NWxibUZpYkdWQ2IyUjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJUY0dWbFpDQTlJQzAxTURBN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emFHOTBVMjkxYm1RZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG5OdmRXNWtLQ2R3YkdGNVpYSlRhRzkwSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZFhCa1lYUmxLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lDOHZJSFJvYVhNdVoyRnRaUzVrWldKMVp5NWliMlI1S0hSb2FYTXBPMXh1WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMeUJwWmlBb2RHaHBjeTVuWVcxbExtbHVjSFYwTG1GamRHbDJaVkJ2YVc1MFpYSXVhWE5FYjNkdUtTQjdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JzWldaMFMyVjVJRDBnZEdocGN5NW5ZVzFsTG1sdWNIVjBMbXRsZVdKdllYSmtMbWx6Ukc5M2JpaFFhR0Z6WlhJdVMyVjVZbTloY21RdVRFVkdWQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY21sbmFIUkxaWGtnUFNCMGFHbHpMbWRoYldVdWFXNXdkWFF1YTJWNVltOWhjbVF1YVhORWIzZHVLRkJvWVhObGNpNUxaWGxpYjJGeVpDNVNTVWRJVkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloc1pXWjBTMlY1S1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbmdnTFQwZ05qdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQnBaaWh5YVdkb2RFdGxlU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTRJQ3M5SURZN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUgxY2JseHVJQ0FnSUhOb2IyOTBLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0JpZFd4c1pYUWdQU0IwYUdsekxtSjFiR3hsZEhNdVoyVjBSbWx5YzNSRmVHbHpkSE1vWm1Gc2MyVXBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hZblZzYkdWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWRXeHNaWFFnUFNCdVpYY2dRblZzYkdWMEtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5ZVzFsT2lCMGFHbHpMbWRoYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1NExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJvYVhNdWRHOXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2TTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdobFlXeDBhRG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWJHeGxkQ2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdsdWREb2dNSGd3TkdNeE1USmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1kyaGhibWRsSUhSb2FYTWdiblZ0WW1WeUlIUnZJSE5vYjI5MElHeGxjM01nWW5Wc2JHVjBjeUJoZENCaElIUnBiV1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJvYVhNdVluVnNiR1YwY3k1amFHbHNaSEpsYmk1c1pXNW5kR2dnUEQwZ05TbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emFHOTBVMjkxYm1RdWNHeGhlU2hjSWx3aUxEQXNNQzQxS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbUoxYkd4bGRITXVZV1JrS0dKMWJHeGxkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWRXeHNaWFF1WW05a2VTNTJaV3h2WTJsMGVTNTVJRDBnZEdocGN5NWlkV3hzWlhSVGNHVmxaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMmh2ZEZOdmRXNWtMbkJzWVhrb1hDSmNJaXd3TERBdU5TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWRXeHNaWFF1Y21WelpYUW9kR2hwY3k1NExDQjBhR2x6TG5SdmNDd2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlkV3hzWlhRdVltOWtlUzUyWld4dlkybDBlUzU1SUQwZ2RHaHBjeTVpZFd4c1pYUlRjR1ZsWkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzVjYmlBZ0lDQjlYRzVjYmlBZ0lDQmtZVzFoWjJVb1lXMXZkVzUwS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG1SaGJXRm5aU2hoYlc5MWJuUXBPMXh1SUNBZ0lIMWNibHh1ZlZ4dUlpd2laWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUW05dmRDQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGRHRjBaU0I3WEc1Y2JpQWdJQ0J3Y21Wc2IyRmtLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWMzUmhaMlV1WW1GamEyZHliM1Z1WkVOdmJHOXlJRDBnSnlNd01EQW5PMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YVcxaFoyVW9KMnh2WVdSbGNrSm5KeXdnSjJsdFp5OXNiMkZrWlhJdFltY3VjRzVuSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnbmJHOWhaR1Z5UW1GeUp5d2dKMmx0Wnk5c2IyRmtaWEl0WW1GeUxuQnVaeWNwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR055WldGMFpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpZMkZzWlM1elkyRnNaVTF2WkdVZ1BTQlFhR0Z6WlhJdVUyTmhiR1ZOWVc1aFoyVnlMbE5JVDFkZlFVeE1PMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk5oYkdVdWNHRm5aVUZzYVdkdVNHOXlhWHB2Ym5SaGJHeDVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elkyRnNaUzV3WVdkbFFXeHBaMjVXWlhKMGFXTmhiR3g1SUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWNHaDVjMmxqY3k1emRHRnlkRk41YzNSbGJTaFFhR0Z6WlhJdVVHaDVjMmxqY3k1QlVrTkJSRVVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbExuTjBZWEowS0NkUWNtVnNiMkZrSnlrN1hHNGdJQ0FnZlZ4dVhHNTlYRzRpTENKbGVIQnZjblFnZTJSbFptRjFiSFFnWVhNZ1FtOXZkSDBnWm5KdmJTQW5MaTlpYjI5MEp6dGNibVY0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJRY21Wc2IyRmtmU0JtY205dElDY3VMM0J5Wld4dllXUW5PMXh1Wlhod2IzSjBJSHRrWldaaGRXeDBJR0Z6SUUxbGJuVjlJR1p5YjIwZ0p5NHZiV1Z1ZFNjN1hHNHZMMmRoYldVeFhHNWxlSEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdVR3hoZVgwZ1puSnZiU0FuTGk5emFHOXZkR1Z5TDNCc1lYa25PMXh1Wlhod2IzSjBJSHRrWldaaGRXeDBJR0Z6SUU5MlpYSjlJR1p5YjIwZ0p5NHZjMmh2YjNSbGNpOXZkbVZ5Snp0Y2JseHVMeTl3WVc1blFuUnVYRzVsZUhCdmNuUWdlMlJsWm1GMWJIUWdZWE1nVUd4aGVWQmhibWQ5SUdaeWIyMGdKeTR2Y0dGdVp5OXdiR0Y1VUdGdVp5YzdYRzVsZUhCdmNuUWdlMlJsWm1GMWJIUWdZWE1nVUdGdVowOTJaWEo5SUdaeWIyMGdKeTR2Y0dGdVp5OXdZVzVuVDNabGNpYzdYRzVjYmk4dloyRnRaVE5jYm1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCUWJHRjVVR0ZwY25OOUlHWnliMjBnSnk0dmNHRnBjbk12Y0d4aGVWQmhhWEp6Snp0Y2JtVjRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QlFZV2x5YzA5MlpYSjlJR1p5YjIwZ0p5NHZjR0ZwY25NdmNHRnBjbk5QZG1WeUp6dGNiaUlzSW1sdGNHOXlkQ0JVWlhoMFFuVjBkRzl1SUdaeWIyMGdKeTR1TDJWNGRHVnVjMmx2Ym5NdmJXVnVkUzkwWlhoMFluVjBkRzl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVFdWdWRTQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGRHRjBaU0I3WEc1Y2JpQWdJQ0JqY21WaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkR2wwYkdVZ1BTQnVaWGNnVUdoaGMyVnlMbFJsZUhRb2RHaHBjeTVuWVcxbExDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N3Z2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGt0TWpBd0xDQW5RMmh2YjNObElHRWdaMkZ0WlNFbkxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTXpad2VDQlVZV2h2YldFbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm1sc2JEb2dKM2RvYVhSbEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdGc2FXZHVPaUFuWTJWdWRHVnlKMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVhSc1pTNWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNiaUFnSUNBZ0lDQWdMeThnZEdocGN5NXRkWE5wWXlBOUlIUm9hWE11WjJGdFpTNWhaR1F1WVhWa2FXOG9KMjFsYm5WTmRYTnBZeWNwTzF4dVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c1pXWjBRblJ1SUQwZ2JtVjNJRlJsZUhSQ2RYUjBiMjRvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGdnTFNBeU1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNU9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZblYwZEc5dUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MlpYSkdjbUZ0WlRvZ01peGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5M2JrWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc09pQW5UR1ZtZEVKMGJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmJuUTZJQ2N4Tm5CNElGWmxjbVJoYm1FbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVd4cFoyNDZJQ2RqWlc1MFpYSW5YRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1VDNabGNsTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjIxbGJuVlBkbVZ5SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVQzVjBVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVTkxZENjcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrUnZkMjVUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxUkc5M2JpY3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViR1ZtZEVKMGJpNXpaWFJQZG1WeVUyOTFibVFvZEdocGN5NWlkRzVQZG1WeVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXhsWm5SQ2RHNHVjMlYwVDNWMFUyOTFibVFvZEdocGN5NWlkRzVQZFhSVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViR1ZtZEVKMGJpNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YkdWbWRFSjBiaTV2YmtsdWNIVjBWWEF1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMM1JvYVhNdWJYVnphV011YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTNXpkR0Z5ZENnblVHeGhlVkJoYVhKekp5azdYRzVjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNibHh1WEc0Z0lDQWdJQ0FnSUM4dklGTmxZMjl1WkNCQ2RHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQ0E5SUc1bGR5QlVaWGgwUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkoxZEhSdmJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRtVnlSbkpoYldVNklESXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRYUkdjbUZ0WlRvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSdmQyNUdjbUZ0WlRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWd1JuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWVdKbGJEb2dKMU4wWVhKMEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05dWREb2dKekUyY0hnZ1ZtVnlaR0Z1WVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVQZG1WeVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTJaWEluS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1YwSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVJHOTNibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZFYjNkdUp5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1elpYUlBkbVZ5VTI5MWJtUW9kR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowTG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEVSdmQyNVRiM1Z1WkNoMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV2YmtsdWNIVjBWWEF1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMM1JvYVhNdWJYVnphV011YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTNXpkR0Z5ZENnblVHeGhlU2NwTzF4dVhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0F2THlCMGFHbHlaQ0JDZEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3WVc1blFuUnVJRDBnYm1WM0lGUmxlSFJDZFhSMGIyNG9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ1oyRnRaVG9nZEdocGN5NW5ZVzFsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsZ2dLeUF5TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBblluVjBkRzl1Snl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzkyWlhKR2NtRnRaVG9nTWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzkxZEVaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaRzkzYmtaeVlXMWxPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkWEJHY21GdFpUb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGhZbVZzT2lBblVHRnVaeTFzYVd0bElTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmJuUTZJQ2N4Tm5CNElGWmxjbVJoYm1FbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVd4cFoyNDZJQ2RqWlc1MFpYSW5YRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1VDNabGNsTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjIxbGJuVlBkbVZ5SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVQzVjBVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVTkxZENjcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrUnZkMjVUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxUkc5M2JpY3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR0Z1WjBKMGJpNXpaWFJQZG1WeVUyOTFibVFvZEdocGN5NWlkRzVQZG1WeVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJoYm1kQ2RHNHVjMlYwVDNWMFUyOTFibVFvZEdocGN5NWlkRzVQZFhSVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR0Z1WjBKMGJpNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0dGdVowSjBiaTV2YmtsdWNIVjBWWEF1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMM1JvYVhNdWJYVnphV011YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTNXpkR0Z5ZENnblVHeGhlVkJoYm1jbktUdGNibHh1WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzVjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5WUVlXNWxiQ0E5SUhSb2FYTXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFZCaGJtVnNMbUZrWkNoMGFHbHpMblJwZEd4bEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFpXNTFVR0Z1Wld3dVlXUmtLSFJvYVhNdWJHVm1kRUowYmlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRWQmhibVZzTG1Ga1pDaDBhR2x6TG5OMFlYSjBLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxVUdGdVpXd3VZV1JrS0hSb2FYTXVjR0Z1WjBKMGJpazdYRzVjYmlBZ0lDQWdJQ0FnTHk5MGFHbHpMbTExYzJsakxteHZiM0JHZFd4c0tDazdYRzRnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUZSbGVIUkNkWFIwYjI0Z1puSnZiU0FuTGk0dkxpNHZaWGgwWlc1emFXOXVjeTl0Wlc1MUwzUmxlSFJpZFhSMGIyNG5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFZVzVuVDNabGNpQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGRHRjBaU0I3WEc1Y2JpQWdJQ0JqY21WaGRHVW9LU0I3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbFJwZEd4bElEMGdibVYzSUZCb1lYTmxjaTVVWlhoMEtIUm9hWE11WjJGdFpTd2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaTFRJd01Dd2dKMUJoYm1jZ1IyRnRaU0J2ZG1WeUp5d2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkRG9nSnpNMmNIZ2dWR0ZvYjIxaEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2QzYUdsMFpTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpVYVhSc1pTNWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowSUQwZ2JtVjNJRlJsZUhSQ2RYUjBiMjRvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGdzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdTMHpNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBblluVjBkRzl1Snl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzkyWlhKR2NtRnRaVG9nTWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzkxZEVaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaRzkzYmtaeVlXMWxPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkWEJHY21GdFpUb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGhZbVZzT2lBblZISjVJR0ZuWVdsdUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05dWREb2dKekUyY0hnZ1ZtVnlaR0Z1WVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxSUQwZ2JtVjNJRlJsZUhSQ2RYUjBiMjRvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGdzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdTc3pNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBblluVjBkRzl1Snl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzkyWlhKR2NtRnRaVG9nTWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzkxZEVaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaRzkzYmtaeVlXMWxPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkWEJHY21GdFpUb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGhZbVZzT2lBblRXVnVkU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkSGxzWlRvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZiblE2SUNjeE5uQjRJRlpsY21SaGJtRW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1pwYkd3NklDZDNhR2wwWlNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXeHBaMjQ2SUNkalpXNTBaWEluWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZQZG1WeUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVUM1YwVTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFU5MWRDY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBia1J2ZDI1VGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R0Wlc1MVJHOTNiaWNwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXVjMlYwVDNabGNsTnZkVzVrS0hSb2FYTXVZblJ1VDNabGNsTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDNXpaWFJQZFhSVGIzVnVaQ2gwYUdsekxtSjBiazkxZEZOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1elpYUkViM2R1VTI5MWJtUW9kR2hwY3k1aWRHNUViM2R1VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblV1YzJWMFQzWmxjbE52ZFc1a0tIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFpXNTFMbk5sZEU5MWRGTnZkVzVrS0hSb2FYTXVZblJ1VDNWMFUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWMyVjBSRzkzYmxOdmRXNWtLSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMExtOXVTVzV3ZFhSRWIzZHVMbUZrWkNnb0tUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTNXpkR0Z5ZENnblVHeGhlVkJoYm1jbktUdGNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MUxtOXVTVzV3ZFhSRWIzZHVMbUZrWkNnb0tUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTNXpkR0Z5ZENnblRXVnVkU2NwTzF4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1ZQZG1WeVVHRnVaV3dnUFNCMGFHbHpMbUZrWkM1bmNtOTFjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdVoyRnRaVTkyWlhKVWFYUnNaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlFZVzVsYkM1aFpHUW9kR2hwY3k1emRHRnlkQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlFZVzVsYkM1aFpHUW9kR2hwY3k1dFpXNTFLVHRjYmlBZ0lDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ1EyRnlaRUoxZEhSdmJpQm1jbTl0SUNjdUxpOHVMaTlsZUhSbGJuTnBiMjV6TDNCaGFYSnpMMk5oY21SaWRYUjBiMjRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYkdGNVVHRnBjbk1nWlhoMFpXNWtjeUJRYUdGelpYSXVVM1JoZEdVZ2UxeHVYRzRnSUNBZ1kzSmxZWFJsS0NrZ2UxeHVYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NWlaeUE5SUhSb2FYTXVZV1JrTG5ScGJHVlRjSEpwZEdVb01Dd2dNQ3cyTmpZc05qQXdMQ0FuY0dGdVowSm5KeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1emRHRm5aUzVpWVdOclozSnZkVzVrUTI5c2IzSWdQU0FuSXpSbFpEQmxNU2M3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxU2IzZHpJRDBnTkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxRGIyeHpJRDBnTlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVd4bFUybDZaU0E5SURnd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGJHVlRjR0ZqYVc1bklEMGdNakE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkR2xzWlhOTVpXWjBJRDBnS0hSb2FYTXViblZ0VW05M2N5QXFJSFJvYVhNdWJuVnRRMjlzY3lrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aVlXTnJUMlpVYUdWRFlYSmtJRDBnTWpJN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDQWdJQ0FxSUVOc2FXVnVkSE1nYzNSaGNuUnpJR0YwSUhCdmMybDBhVzl1SURFd0lDaGpiM1Z1ZENCemNHRmpaWE1nYVc0Z2MzQnlhWFJsVTJobFpYUXBYRzRnSUNBZ0lDQWdJQ0FnSUNBcUlERXdJRDBnUjI5dloyeGxYRzRnSUNBZ0lDQWdJQ0FnSUNBcUlERXhJRDBnUVcxaGVtOXVYRzRnSUNBZ0lDQWdJQ0FnSUNBcUlERXlJRDBnUTJGd2FYUmhiRTl1WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdLaUF4TXlBOUlFZHZiR1J0WVc0Z1UyRmphSE5jYmlBZ0lDQWdJQ0FnSUNBZ0lDb2dNVFFnUFNCQlkyTmxiblIxY21WY2JpQWdJQ0FnSUNBZ0lDQWdJQ29nTVRVZ1BTQkRZWEJuWlcxcGJtbGNiaUFnSUNBZ0lDQWdJQ0FnSUNvZ01UWWdQU0JRVjBOY2JpQWdJQ0FnSUNBZ0lDQWdJQ29nTVRjZ1BTQXVMaTVjYmlBZ0lDQWdJQ0FnSUNBZ0lDb2dNVGdnUFNBdUxpNWNiaUFnSUNBZ0lDQWdJQ0FnSUNvZ01Ua2dQU0F1TGk1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ29nTWpBZ1BTQXVMaTVjYmlBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyaHZjMlZ1UTJ4cFpXNTBJRDBnTVRBN1hHNWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtTmhjbVJIY205MWNDQTlJSFJvYVhNdVlXUmtMbWR5YjNWd0tDazdYRzRnSUNBZ0lDQWdJQzh2YzJWMElHbDBJSFJ2SUc5dVpTQnRhVzUxZEdVZ0tEWXdLVnh1SUNBZ0lDQWdJQ0IwYUdsekxuUnBiV1ZNWldaMElEMGdOakE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk52Y21VZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaHBaMmhUWTI5eVpTQTlJREE3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVhKa2MwRnljbUY1SUQwZ1cxMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyVnNaV04wWldSRFlYSmtjMEZ5Y21GNUlEMGdXMTA3WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMeTB0TFMwdExTQklWVVFnVWtWTVFWUkZSQ0JUVkZWR1JseHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUjViR1VnUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQmNJak15Y0hnZ1NHVnNkbVYwYVdOaFhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUJjSWlNd01HWm1NREJjSWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzYVdkdU9pQmNJbU5sYm5SbGNsd2lYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk52Y21WVVpYaDBJRDBnZEdocGN5NWhaR1F1ZEdWNGRDZzFMQ0ExTENCY0lsTmpiM0psT2lCY0lpQXJJSFJvYVhNdWMyTnZjbVVzSUhSb2FYTXVjM1I1YkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGJXVlVaWGgwSUQwZ2RHaHBjeTVoWkdRdWRHVjRkQ2cxTENCMGFHbHpMbWRoYldVdWFHVnBaMmgwSUMwZ05Td2dYQ0pVYVcxbElHeGxablE2SUZ3aUlDc2dkR2hwY3k1MGFXMWxUR1ZtZEN3Z2RHaHBjeTV6ZEhsc1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRHbHRaVlJsZUhRdVlXNWphRzl5TG5ObGRDZ3dMREVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTBhVzFsTG1WMlpXNTBjeTVzYjI5d0tGQm9ZWE5sY2k1VWFXMWxjaTVUUlVOUFRrUXNJSFJvYVhNdVpHVmpjbVZoYzJWVWFXMWxMSFJvYVhNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhZMlZEWVhKa2N5Z3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtUV1Z1ZFNncE8xeHVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRM1Z6ZEc5dElHWjFibU4wYVc5dWMxeHVJQ0FnSUd4dllXUk5aVzUxS0NsN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JsYzJOTFpYa2dQU0IwYUdsekxtZGhiV1V1YVc1d2RYUXVhMlY1WW05aGNtUXVhWE5FYjNkdUtGQm9ZWE5sY2k1TFpYbGliMkZ5WkM1RlUwTXBPMXh1SUNBZ0lDQWdJQ0JwWmlobGMyTkxaWGtwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbk4wWVhSbExuTjBZWEowS0NkTlpXNTFKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JrWldOeVpXRnpaVlJwYldVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRHbHRaVXhsWm5RdExUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGFXMWxWR1Y0ZEM1MFpYaDBJRDBnWENKVWFXMWxJR3hsWm5RNklGd2lJQ3NnZEdocGN5NTBhVzFsVEdWbWREdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NTBhVzFsVEdWbWRDQTlQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDBOb1lXNW5aU0IwYUdseklIUnZJSEJoYVhKelQzWmxjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZWFJsTG5OMFlYSjBLQ2RRWVc1blQzWmxjaWNwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSEJzWVdObFEyRnlaSE1vS1NCN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUd4bFpuUlRjR0ZqWlNBOUlDaDBhR2x6TG1kaGJXVXVkMmxrZEdnZ0xTQW9kR2hwY3k1dWRXMURiMnh6SUNvZ2RHaHBjeTUwYVd4bFUybDZaU2tnTFNBb0tIUm9hWE11Ym5WdFEyOXNjeUF0SURFcElDb2dYSFIwYUdsekxuUnBiR1ZUY0dGamFXNW5LU2t2TWp0Y2JpQWdJQ0FnSUNBZ2JHVjBJSFJ2Y0ZOd1lXTmxJQ0E5SUNoMGFHbHpMbWRoYldVdWFHVnBaMmgwSUMwZ0tIUm9hWE11Ym5WdFVtOTNjeUFxSUhSb2FYTXVkR2xzWlZOcGVtVXBJQzBnS0NoMGFHbHpMbTUxYlZKdmQzTWdMU0F4S1NBcUlGeDBkR2hwY3k1MGFXeGxVM0JoWTJsdVp5a3BMekk3WEc1Y2JpQWdJQ0FnSUNBZ0x5OHRMU0JRYjNCMWJHRjBaU0JoY25KaGVTQjNhWFJvSUhCaGFYSnpJRzltSUc1MWJXSmxjbk1nV3pFc01Td3lMRElzTXl3ekxEUXNOQ3d1TGk1ZFhHNGdJQ0FnSUNBZ0lHWnZjaWhzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG5ScGJHVnpUR1ZtZERzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OaGNtUnpRWEp5WVhrdWNIVnphQ2hOWVhSb0xtWnNiMjl5S0drZ0x5QXlLU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeTB0SUZKaGJtUnZiV2w2WlNBdklHMXBlQ0IwYUdVZ1lYSnlZWGxjYmlBZ0lDQWdJQ0FnWm05eUtHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXVkR2xzWlhOTVpXWjBPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQm1jbTl0SUQwZ0lIUm9hWE11WjJGdFpTNXlibVF1WW1WMGQyVmxiaWd3TENCMGFHbHpMbU5oY21SelFYSnlZWGt1YkdWdVozUm9MVEVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhSdklDQWdQU0FnZEdocGN5NW5ZVzFsTG5KdVpDNWlaWFIzWldWdUtEQXNJSFJvYVhNdVkyRnlaSE5CY25KaGVTNXNaVzVuZEdndE1TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdkR1Z0Y0NBOUlDQjBhR2x6TG1OaGNtUnpRWEp5WVhsYlpuSnZiVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyRnlaSE5CY25KaGVWdG1jbTl0WFNBOUlIUm9hWE11WTJGeVpITkJjbkpoZVZ0MGIxMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU5oY21SelFYSnlZWGxiZEc5ZElEMGdkR1Z0Y0R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2TFMwZ1JHVmhiQ0IwYUdVZ1kyRnlaSE5jYmlBZ0lDQWdJQ0FnWm05eUtHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0UTI5c2N6c2dhU3NyS1NCN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpaHNaWFFnYWlBOUlEQTdJR29nUENCMGFHbHpMbTUxYlZKdmQzTTdJR29yS3lrZ2UxeHVYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1kyRnlaQ0E5SUc1bGR5QkRZWEprUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1oyRnRaVG9nZEdocGN5NW5ZVzFsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUJzWldaMFUzQmhZMlVnS3lCcElDb2dLSFJvYVhNdWRHbHNaVk5wZW1VZ0sxeDBkR2hwY3k1MGFXeGxVM0JoWTJsdVp5a3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklIUnZjRk53WVdObElDc2dhaUFxSUNoMGFHbHpMblJwYkdWVGFYcGxJQ3NnZEdocGN5NTBhV3hsVTNCaFkybHVaeWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBbmRHbHNaWE1uTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZV3hzWW1GamF6b2dkR2hwY3k1emFHOTNRMkZ5WkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZzYkdKaFkydERiMjUwWlhoME9pQjBhR2x6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlRvZ2RHaHBjeTVqWVhKa2MwRnljbUY1VzJvZ0tpQjBhR2x6TG01MWJVTnZiSE1nS3lCcFhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhORGJHbGxiblE2SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlVhR2x6SUhCaGNuUWdhWE1nZDJobGNtVWdkMlVnZEdGclpTQjBhR1VnYkdGemRDQmpZWEprSUdsdUlHOTFjaUJ6Y0hKcGRHVnphR1ZsZENCaGJtUWdjbVZ3YkdGalpTQnBkQ0IzYVhSb0lHRWdZMnhwWlc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTVzRnZEdocGN5QmpZWE5sSUhaaGJIVmxJRGtnYVhNZ2RHaGxJR3hoYzNRZ2RtRnNkV1VnYjJZZ2RHaGxJQ2R6ZEdGdVpHRnlaQ2NnWTJGeVpITmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWhqWVhKa0xuWmhiSFZsSUQwOUlEa3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallYSmtMblpoYkhWbElEMGdkR2hwY3k1amFHOXpaVzVEYkdsbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOaGNtUXVhWE5EYkdsbGJuUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05oY21RdVpuSmhiV1VnUFNCMGFHbHpMbUpoWTJ0UFpsUm9aVU5oY21RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqWVhKa1IzSnZkWEF1WVdSa0tHTmhjbVFwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjMmh2ZDBOaGNtUW9kR0Z5WjJWMFEyRnlaQ2tnZTF4dUlDQWdJQ0FnSUNBdktseHVJQ0FnSUNBZ0lDQXFJQ0FnY0hWemFDQjBhR1VnZG1Gc2RXVnpJR1p5YjIwZ2RHaGxJR05oY21SeklIUnZJRzkxY2lCelpXeGxZM1JsWkNCaGNuSmhlU0J2WmlCallYSmtjMXh1SUNBZ0lDQWdJQ0FxSUNBZ2FXWWdlVzkxSUdoaGRtVWdZMmh2YzJWdUlESXNJR3hsZENkeklHTnZiWEJoY21VZ2RHaGxiU0IxYzJsdVp5QmphR1ZqYTFScGJHVnpYRzRnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11YzJWc1pXTjBaV1JEWVhKa2MwRnljbUY1TG14bGJtZDBhQ0E4SURJZ0ppWWdkR2hwY3k1elpXeGxZM1JsWkVOaGNtUnpRWEp5WVhrdWFXNWtaWGhQWmloMFlYSm5aWFJEWVhKa0tTQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dlZFOUVUeUJ6YjNWdVpITmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklHbG1LSEJzWVhsVGIzVnVaQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUFnSUNBZ2RHaHBjeTV6YjNWdVpFRnljbUY1V3pCZExuQnNZWGtvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSFJoY21kbGRFTmhjbVF1Wm5KaGJXVWdQU0IwWVhKblpYUkRZWEprTG5aaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6Wld4bFkzUmxaRU5oY21SelFYSnlZWGt1Y0hWemFDaDBZWEpuWlhSRFlYSmtLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvZEdocGN5NXpaV3hsWTNSbFpFTmhjbVJ6UVhKeVlYa3ViR1Z1WjNSb0lEMDlQU0F5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuUnBiV1V1WlhabGJuUnpMbUZrWkNoUWFHRnpaWEl1VkdsdFpYSXVVMFZEVDA1RUxDQjBhR2x6TG1Ob1pXTnJWR2xzWlhNc0lIUm9hWE1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqYUdWamExUnBiR1Z6S0NrZ2UxeHVJQ0FnSUNBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FnS2lBZ0lFTm9aV05ySUhSb1pTQnBaaUIwYUdVZ2RtRnNkV1Z6SUdaeWIyMGdiM1Z5SUhObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVNCaGNtVWdaWEYxWVd4Y2JpQWdJQ0FnSUNBZ0lDb2dJQ0JwWmlCemJ5d2dZV1JrSUhOamIzSmxJR0Z1WkNCb2FXUmxJSFJvWlcwZ1puSnZiU0IwYUdVZ2RYTmxjaTVjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWMyVnNaV04wWldSRFlYSmtjMEZ5Y21GNVd6QmRMblpoYkhWbElEMDlQU0IwYUdsekxuTmxiR1ZqZEdWa1EyRnlaSE5CY25KaGVWc3hYUzUyWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ0FnSUNvZ1ZFOUVUeUJ6YjNWdVpITmNiaUFnSUNBZ0lDQWdJQ0FnSUNvZ2FXWW9kR2hwY3k1d2JHRjVjMjkxYm1RcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnS2lBZ0lIUm9hWE11YzI5MWJtUkJjbkpoZVZzeFhTNXdiR0Y1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FxSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ29nS2k5Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpZMjl5WlNzck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTBhVzFsVEdWbWRDQXJQU0F5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1MGFXMWxWR1Y0ZEM1MFpYaDBJRDBnWENKVWFXMWxJR3hsWm5RNklGd2lJQ3NnZEdocGN5NTBhVzFsVEdWbWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMk52Y21WVVpYaDBMblJsZUhRZ1BTQmNJbE5qYjNKbE9pQmNJaUFySUhSb2FYTXVjMk52Y21VN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGUlBSRTg2SUVacGNtVWdkWEFnZEdobElHVjJaVzUwSUdsbUlHbDBjeUJoSUdOc2FXVnVkQ0JEWVhKa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGFHbHpMbk5sYkdWamRHVmtRMkZ5WkhOQmNuSmhlVnN3WFM1cGMwTnNhV1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wm1seVpVTnNhV1Z1ZEUxbGMzTmhaMlVvWENKRGJHbGxiblJjSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVnNaV04wWldSRFlYSmtjMEZ5Y21GNVd6QmRMbVJsYzNSeWIza29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJWc1pXTjBaV1JEWVhKa2MwRnljbUY1V3pGZExtUmxjM1J5YjNrb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkR2xzWlhOTVpXWjBJQzA5SURJN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZHBiaUJqYjI1a2FYUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWRHbHNaWE5NWldaMElEMDlQU0F3SUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTJGeVpITkJjbkpoZVM1c1pXNW5kR2dnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJWc1pXTjBaV1JEWVhKa2MwRnljbUY1TG14bGJtZDBhQ0E5SURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OTBhR2x6TG5Cc1lXTmxRMkZ5WkhNb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjM1JoZEdVdWMzUmhjblFvSjFCc1lYbFFZV2x5Y3ljcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlY3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMVJQUkU4NklGTnZkVzVrYzF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnYVdZb2NHeGhlVk52ZFc1a0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklDQWdJQ0IwYUdsekxuTnZkVzVrUVhKeVlYbGJNbDB1Y0d4aGVTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHVjVJR0Z5WlNCdWIzUWdkR2hsSUhOaGJXVXNJR1poWTJVZ2RHaGxiU0J2Wm1aY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVnNaV04wWldSRFlYSmtjMEZ5Y21GNVd6QmRMbVp5WVcxbElEMGdkR2hwY3k1aVlXTnJUMlpVYUdWRFlYSmtPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6Wld4bFkzUmxaRU5oY21SelFYSnlZWGxiTVYwdVpuSmhiV1VnUFNCMGFHbHpMbUpoWTJ0UFpsUm9aVU5oY21RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1elpXeGxZM1JsWkVOaGNtUnpRWEp5WVhrdWJHVnVaM1JvSUQwZ01EdGNiaUFnSUNCOVhHNWNiaUFnSUNCbWFYSmxRMnhwWlc1MFRXVnpjMkZuWlNoamJHbGxiblFwSUh0Y2JpQWdJQ0FnSUNBZ1lXeGxjblFvWENKVWFHbHpJR2x6SUdFZ2JXVnpjMkZuWlNCbWNtOXRJR0VnWkdWbVlYVnNkQ0JEYkdsbGJuUmNJaWs3WEc0Z0lDQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElGUmxlSFJDZFhSMGIyNGdabkp2YlNBbkxpNHZMaTR2WlhoMFpXNXphVzl1Y3k5dFpXNTFMM1JsZUhSaWRYUjBiMjRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRWVc1blQzWmxjaUJsZUhSbGJtUnpJRkJvWVhObGNpNVRkR0YwWlNCN1hHNWNiaUFnSUNCamNtVmhkR1VvS1NCN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xScGRHeGxJRDBnYm1WM0lGQm9ZWE5sY2k1VVpYaDBLSFJvYVhNdVoyRnRaU3dnZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsZ3NJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWkxUSXdNQ3dnSjFCaGJtY2dSMkZ0WlNCdmRtVnlKeXdnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ0p6TTJjSGdnVkdGb2IyMWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ0oyTmxiblJsY2lkY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVWFYUnNaUzVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMElEMGdibVYzSUZSbGVIUkNkWFIwYjI0b2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXUzB6TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZblYwZEc5dUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MlpYSkdjbUZ0WlRvZ01peGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5M2JrWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc09pQW5WSEo1SUdGbllXbHVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkRG9nSnpFMmNIZ2dWbVZ5WkdGdVlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MUlEMGdibVYzSUZSbGVIUkNkWFIwYjI0b2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXU3N6TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZblYwZEc5dUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MlpYSkdjbUZ0WlRvZ01peGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5M2JrWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc09pQW5UV1Z1ZFNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pUb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RNklDY3hObkI0SUZabGNtUmhibUVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2QzYUdsMFpTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV3hwWjI0NklDZGpaVzUwWlhJblhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVUM1psY2xOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WUGRtVnlKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1VDNWMFUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTFkQ2NwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFSRzkzYmljcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YzJWMFQzWmxjbE52ZFc1a0tIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV6WlhSUGRYUlRiM1Z1WkNoMGFHbHpMbUowYms5MWRGTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWMyVjBUM1psY2xOdmRXNWtLSFJvYVhNdVluUnVUM1psY2xOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxTG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVXVjMlYwUkc5M2JsTnZkVzVrS0hSb2FYTXVZblJ1Ukc5M2JsTnZkVzVrS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbTl1U1c1d2RYUkViM2R1TG1Ga1pDZ29LVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaUzV6ZEdGeWRDZ25VR3hoZVZCaGJtY25LVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1dFpXNTFMbTl1U1c1d2RYUkViM2R1TG1Ga1pDZ29LVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaUzV6ZEdGeWRDZ25UV1Z1ZFNjcE8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3Z1BTQjBhR2x6TG1Ga1pDNW5jbTkxY0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VUdGdVpXd3VZV1JrS0hSb2FYTXVaMkZ0WlU5MlpYSlVhWFJzWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpRWVc1bGJDNWhaR1FvZEdocGN5NXpkR0Z5ZENrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpRWVc1bGJDNWhaR1FvZEdocGN5NXRaVzUxS1R0Y2JpQWdJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdVR3hoZVdWeUlHWnliMjBnSnk0dUx5NHVMM0J5WldaaFluTXZjMmh2YjNSbGNpOXdiR0Y1WlhJbk8xeHVhVzF3YjNKMElFVnVaVzE1SUdaeWIyMGdKeTR1THk0dUwzQnlaV1poWW5NdmNHRnVaeTlsYm1WdGVWQmhibWNuTzF4dWFXMXdiM0owSUVoVlJDQm1jbTl0SUNjdUxpOHVMaTl3Y21WbVlXSnpMM0JoYm1jdmFIVmtKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVR3hoZVZCaGJtY2daWGgwWlc1a2N5QlFhR0Z6WlhJdVUzUmhkR1VnZTF4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpuSUQwZ2RHaHBjeTVoWkdRdWRHbHNaVk53Y21sMFpTZ3dMQ0F3TENBeU1EQXdMQ0F5TXpnd0xDQW5jR0Z1WjBKbkp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzUwYVcxbExuTnNiM2ROYjNScGIyNGdQU0F3TzF4dVhHNWNiaUFnSUNBZ0lDQWdMeThnTFMwdExTMHRMU0JRVEVGWlJWSmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWElnUFNCdVpYY2dVR3hoZVdWeUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ01DNDVNaUFxSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVvWldsbmFIUXNYRzRnSUNBZ0lDQWdJQ0FnSUNCb1pXRnNkR2c2SURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2R6YldGc2JHWnBaMmgwWlhJbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm5KaGJXVTZJREpjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpkR0ZuWlM1aFpHUkRhR2xzWkNoMGFHbHpMbkJzWVhsbGNpazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5VTJodmIzUlVhVzFsSUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpUYUc5dmRFbHVkR1Z5ZG1Gc0lEMGdNQzR4Tmp0Y2JseHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJRVZPUlUxWk9pQjBhR1Z6WlNCdmJtVnpJR0Z5WlNCamNtVmhkR1ZrSUdWMlpYSjVJSFZ3WkdGMFpTQjBhV05yWEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYldsbGN5QTlJSFJvYVhNdVlXUmtMbWR5YjNWd0tDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsY3k1bGJtRmliR1ZDYjJSNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVWUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2TVM0MVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbEpiblJsY25aaGJDQTlJREl1TlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVWTm9iMjkwVkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsVGFHOXZkRWx1ZEdWeWRtRnNJRDBnTVR0Y2JpQWdJQ0FnSUNBZ0x5OGdMUzB0TFMwdExTQWhSVTVGVFZsY2JseHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJSE50WVd4c1pYSkZUa1ZOV1RvZ2RHaHBjeUJ2Ym1WeklHRnlaU0JqY21WaGRHVmtJR1YyWlhKNUlIVndaR0YwWlNCMGFXTnJYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyMWhiR3hsY2tWdVpXMXBaWE1nUFNCMGFHbHpMbUZrWkM1bmNtOTFjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk50WVd4c1pYSkZibVZ0YVdWekxtVnVZV0pzWlVKdlpIa2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJQ0Z6YldGc2JHVnlSVTVGVFZsY2JseHVYRzRnSUNBZ0lDQWdJQzh2SUMwdExTMHRMUzBnUlU1RlRWa2dRMHhKUlU1VU9pQnlZVzVrYjIxc2VTQmphRzl6Wlc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGFXVnpRMnhwWlc1MElEMGdkR2hwY3k1aFpHUXVaM0p2ZFhBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRhV1Z6UTJ4cFpXNTBMbVZ1WVdKc1pVSnZaSGtnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0F2THpFdU5WeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVRMnhwWlc1MFNXNTBaWEoyWVd3Z1BTQXlMakE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsRGJHbGxiblJUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVRMnhwWlc1MFUyaHZiM1JKYm5SbGNuWmhiQ0E5SURFN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDJsdWFYUnBZV3hwZW1VZ1ptbHljM1FnWTJ4cFpXNTBYRzRnSUNBZ0lDQWdJSFJvYVhNdVkzSmxZWFJsUlc1bGJYbERiR2xsYm5Rb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbkp1WkM1cGJuUmxaMlZ5U1c1U1lXNW5aU2cyTENBM05pa2dLaUF4TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2TUZ4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE53WldWa09pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMUxDQXhNQ2tnS2lBeE1DQXFJQ2hOWVhSb0xuSmhibVJ2YlNncElENGdNQzQxSUQ4Z01TQTZJQzB4S1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQjBhR2x6TG1kaGJXVXVjbTVrTG1sdWRHVm5aWEpKYmxKaGJtZGxLRFVzSURFd0tTQXFJREV3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5ODVYRzRnSUNBZ0lDQWdJQ0FnSUNCb1pXRnNkR2c2SURrd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5Wc2JHVjBVM0JsWldRNklIUm9hWE11WjJGdFpTNXlibVF1YVc1MFpXZGxja2x1VW1GdVoyVW9NVEFzSURJd0tTQXFJREV3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGhiR2xsYm5NbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJsNlpUb2dNQzQ0WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJQ0ZGVGtWTldTQkRURWxGVGxRNklISmhibVJ2Yld4NUlHTm9iM05sYmx4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTBhVzFsTG1WMlpXNTBjeTVzYjI5d0tGQm9ZWE5sY2k1VWFXMWxjaTVUUlVOUFRrUWdLaUF4TUN3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvZEdocGN5NWxibVZ0ZVVsdWRHVnlkbUZzSUQ0Z01DNHlJQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVVsdWRHVnlkbUZzSUMwOUlEQXVNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVRbWwwYldGd0lEMGdkR2hwY3k1aFpHUXVZbWwwYldGd1JHRjBZU2gwYUdsekxtZGhiV1V1ZDJsa2RHZ3NJSFJvYVhNdVoyRnRaUzVvWldsbmFIUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhsQ2FYUnRZWEF1WTNSNExtWnBiR3hUZEhsc1pTQTlJQ2NqTURBd0p6dGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1UW1sMGJXRndMbU4wZUM1bWFXeHNVbVZqZENnd0xDQXdMQ0IwYUdsekxtZGhiV1V1ZDJsa2RHZ3NJSFJvYVhNdVoyRnRaUzVvWldsbmFIUXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVTQTlJSFJvYVhNdVlXUmtMbk53Y21sMFpTZ3dMQ0F3TENCMGFHbHpMbTkyWlhKc1lYbENhWFJ0WVhBcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG05MlpYSnNZWGt1ZG1semFXSnNaU0E5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhrdVlXeHdhR0VnUFNBd0xqYzFPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhSFZrSUQwZ2JtVjNJRWhWUkNoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCd2JHRjVaWEk2SUhSb2FYTXVjR3hoZVdWeVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUM4dklDMHRMUzB0TFMwZ1UwOVZUa1JUWEc0Z0lDQWdJQ0FnTHk4Z2RHaHBjeTV0ZFhOcFl5QTlJSFJvYVhNdVoyRnRaUzVoWkdRdVlYVmthVzhvSjNCc1lYbE5kWE5wWXljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMWJHeGxkRWhwZEZOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMkoxYkd4bGRFaHBkQ2NwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVJYaHdiRzl6YVc5dVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duWlc1bGJYbEZlSEJzYjNOcGIyNG5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKRmVIQnNiM05wYjI1VGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R3YkdGNVpYSkZlSEJzYjNOcGIyNG5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjJkaGJXVlBkbVZ5SnlrN1hHNWNiaUFnSUNBZ0lDQWdMeTkwYUdsekxtMTFjMmxqTG14dmIzQkdkV3hzS0NrN1hHNWNibHh1WEc0Z0lDQWdJQ0FnSUM4dlJHVm1ZWFZzZEhOY2JpQWdJQ0FnSUNBZ0x5OTBhR2x6TG1WdVpXMTVWR2x0WlNBOUlEQTdYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NWxibVZ0ZVVsdWRHVnlkbUZzSUQwZ01TNDFPMXh1SUNBZ0lDQWdJQ0F2TDNSb2FYTXVaVzVsYlhsVGFHOXZkRlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0F2TDNSb2FYTXVaVzVsYlhsVGFHOXZkRWx1ZEdWeWRtRnNJRDBnTVR0Y2JpQWdJQ0FnSUNBZ0x5OTBhR2x6TG5Cc1lYbGxjbE5vYjI5MFZHbHRaU0E5SURBN1hHNGdJQ0FnSUNBZ0lDOHZkR2hwY3k1d2JHRjVaWEpUYUc5dmRFbHVkR1Z5ZG1Gc0lEMGdNQzR4Tmp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsVWFXMWxJQ3M5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbkJvZVhOcFkzTkZiR0Z3YzJWa08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVVMmh2YjNSVWFXMWxJQ3M5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbkJvZVhOcFkzTkZiR0Z3YzJWa08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxjbE5vYjI5MFZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVsYm1WdGVWUnBiV1VnUGlCMGFHbHpMbVZ1WlcxNVNXNTBaWEoyWVd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsVWFXMWxJRDBnTUR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpjbVZoZEdWRmJtVnRlU2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb05pd2dOellwSUNvZ01UQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeTh3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpjR1ZsWkRvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtEVXNJREV3S1NBcUlERXdJQ29nS0UxaGRHZ3VjbUZ1Wkc5dEtDa2dQaUF3TGpVZ1B5QXhJRG9nTFRFcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtEVXNJREV3S1NBcUlERXdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THpsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1pXRnNkR2c2SURrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwVTNCbFpXUTZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTVRBc0lESXdLU0FxSURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBbllXeHBaVzRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOcGVtVTZJREl1TlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVZ1WlcxNVUyaHZiM1JVYVcxbElENGdkR2hwY3k1bGJtVnRlVk5vYjI5MFNXNTBaWEoyWVd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsVGFHOXZkRlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxuQnNZWGxsY2k1aGJHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVpY21sdVoxUnZWRzl3S0hSb2FYTXViM1psY214aGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvWENKSVlYTWdiWFZsY25SdlhDSXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJRDRnZEdocGN5NXdiR0Y1WlhKVGFHOXZkRWx1ZEdWeWRtRnNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxjbE5vYjI5MFZHbHRaU0E5SURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV3YkdGNVpYSXVZV3hwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYzJodmIzUkxaWGtnUFNCMGFHbHpMbWRoYldVdWFXNXdkWFF1YTJWNVltOWhjbVF1YVhORWIzZHVLRkJvWVhObGNpNUxaWGxpYjJGeVpDNVRVRUZEUlVKQlVpazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lvYzJodmIzUkxaWGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEl1YzJodmIzUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWNHaDVjMmxqY3k1aGNtTmhaR1V1YjNabGNteGhjQ2gwYUdsekxuQnNZWGxsY2k1aWRXeHNaWFJ6TENCMGFHbHpMbVZ1WlcxcFpYTXNJSFJvYVhNdWFHbDBSVzVsYlhrc0lHNTFiR3dzSUhSb2FYTXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1d2FIbHphV056TG1GeVkyRmtaUzV2ZG1WeWJHRndLSFJvYVhNdWNHeGhlV1Z5TG1KMWJHeGxkSE1zSUhSb2FYTXVjMjFoYkd4bGNrVnVaVzFwWlhNc0lIUm9hWE11YUdsMFJXNWxiWGtzSUc1MWJHd3NJSFJvYVhNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbUZ5WTJGa1pTNXZkbVZ5YkdGd0tIUm9hWE11Y0d4aGVXVnlMQ0JiZEdocGN5NWxibVZ0YVdWekxIUm9hWE11YzIxaGJHeGxja1Z1WlcxcFpYTmRMQ0IwYUdsekxtTnlZWE5vUlc1bGJYa3NJRzUxYkd3c0lIUm9hWE1wTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpFMWxiblVvS1R0Y2JpQWdJQ0FnSUNBZ0x5OGdkR2hwY3k1aVp5NTBhV3hsVUc5emFYUnBiMjR1ZUNBclBTQXpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnlaV0YwWlVWdVpXMTVLR1JoZEdFcElIdGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ1pXNWxiWGtnUFNCMGFHbHpMbVZ1WlcxcFpYTXVaMlYwUm1seWMzUkZlR2x6ZEhNb1ptRnNjMlVwTzF4dUlDQWdJQ0FnSUNCc1pYUWdkRzkwWVd4RmJtVnRhV1Z6SUQwZ2RHaHBjeTVsYm1WdGFXVnpMbU5vYVd4a2NtVnVMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvZEc5MFlXeEZibVZ0YVdWektUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lXVnVaVzE1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYm1WdGVTQTlJRzVsZHlCRmJtVnRlU2hrWVhSaEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIUnZkR0ZzUlc1bGJXbGxjeUE4SURVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjeTVoWkdRb1pXNWxiWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXNWxiWGt1Y21WelpYUW9aR0YwWVNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTNKbFlYUmxVMjFoYkd4bGNrVnVaVzE1S0dSaGRHRXBJSHRjYmx4dUlDQWdJQ0FnSUNCc1pYUWdaVzVsYlhrZ1BTQjBhR2x6TG5OdFlXeHNaWEpGYm1WdGFXVnpMbWRsZEVacGNuTjBSWGhwYzNSektHWmhiSE5sS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJSFJ2ZEdGc1JXNWxiV2xsY3lBOUlIUm9hWE11YzIxaGJHeGxja1Z1WlcxcFpYTXVZMmhwYkdSeVpXNHViR1Z1WjNSb08xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaFpXNWxiWGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z1WlcxNUlEMGdibVYzSUVWdVpXMTVLR1JoZEdFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RHOTBZV3hGYm1WdGFXVnpJRHdnTWpRcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzIxaGJHeGxja1Z1WlcxcFpYTXVZV1JrS0dWdVpXMTVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWdVpXMTVMbkpsYzJWMEtHUmhkR0VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR055WldGMFpVVnVaVzE1UTJ4cFpXNTBLR1JoZEdFcElIdGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ1pXNWxiWGtnUFNCMGFHbHpMbVZ1WlcxcFpYTkRiR2xsYm5RdVoyVjBSbWx5YzNSRmVHbHpkSE1vWm1Gc2MyVXBPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2RHOTBZV3hGYm1WdGFXVnpJRDBnZEdocGN5NWxibVZ0YVdWelEyeHBaVzUwTG1Ob2FXeGtjbVZ1TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVzYjJjb2RHOTBZV3hGYm1WdGFXVnpLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJtVnRlU0E5SUc1bGR5QkZibVZ0ZVNoa1lYUmhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJ2ZEdGc1JXNWxiV2xsY3lBOFBTQXhLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzFwWlhORGJHbGxiblF1WVdSa0tHVnVaVzE1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnVaVzE1TG5KbGMyVjBLR1JoZEdFcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdocGRFVm1abVZqZENodlltb3NJR052Ykc5eUtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCMGQyVmxiaUE5SUhSb2FYTXVaMkZ0WlM1aFpHUXVkSGRsWlc0b2IySnFLVHRjYmlBZ0lDQWdJQ0FnYkdWMElHVnRhWFIwWlhJZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1WdGFYUjBaWElvS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J3WVhKMGFXTnNaVk53WldWa0lEMGdNVEF3TzF4dUlDQWdJQ0FnSUNCc1pYUWdiV0Y0VUdGeWRHbGpiR1Z6SUQwZ01UQTdYRzVjYmlBZ0lDQWdJQ0FnZEhkbFpXNHVkRzhvZTNScGJuUTZJREI0Wm1Zd01EQXdmU3dnTVRBd0tUdGNiaUFnSUNBZ0lDQWdkSGRsWlc0dWIyNURiMjF3YkdWMFpTNWhaR1FvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2IySnFMblJwYm5RZ1BTQXdlR1ptWm1abVpqdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhSM1pXVnVMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTU0SUQwZ2IySnFMbmc3WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1ZVNBOUlHOWlhaTU1TzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG1keVlYWnBkSGtnUFNBd08xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtMWhhMlZRWVhKMGFXTnNaWE1vSjNCaGNuUnBZMnhsSnlrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0c5aWFpNW9aV0ZzZEdnZ1BEMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5ZEdsamJHVlRjR1ZsWkNBOUlESXdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhlRkJoY25ScFkyeGxjeUE5SURRd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSWdQU0F3ZUdabU1EQXdNRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWJXbHVVR0Z5ZEdsamJHVlRjR1ZsWkM1elpYUlVieWd0Y0dGeWRHbGpiR1ZUY0dWbFpDd2dMWEJoY25ScFkyeGxVM0JsWldRcE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtMWhlRkJoY25ScFkyeGxVM0JsWldRdWMyVjBWRzhvY0dGeWRHbGpiR1ZUY0dWbFpDd2djR0Z5ZEdsamJHVlRjR1ZsWkNrN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWMzUmhjblFvZEhKMVpTd2dOVEF3TENCdWRXeHNMQ0J0WVhoUVlYSjBhV05zWlhNcE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxuVndaR0YwWlNBOUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQStQU0F3TGpZcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlcxcGRIUmxjaTVrWlhOMGNtOTVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1bWIzSkZZV05vS0hCaGNuUnBZMnhsSUQwK0lIQmhjblJwWTJ4bExuUnBiblFnUFNCamIyeHZjaWs3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1d2JHRjVaWEl1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1aWNtbHVaMVJ2Vkc5d0tIUm9hWE11YjNabGNteGhlU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JvYVhSRmJtVnRlU2hpZFd4c1pYUXNJR1Z1WlcxNUtTQjdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSSWFYUlRiM1Z1WkM1d2JHRjVLRndpWENJc01Dd3dMalVwTzF4dUlDQWdJQ0FnSUNCbGJtVnRlUzVrWVcxaFoyVW9ZblZzYkdWMExtaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YUdsMFJXWm1aV04wS0dWdVpXMTVMQ0JpZFd4c1pYUXVkR2x1ZENrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGbGJtVnRlUzVoYkdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVVVjRjR3h2YzJsdmJsTnZkVzVrTG5Cc1lYa29YQ0pjSWl3Z01Dd2dNQzQxS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFIVmtMblZ3WkdGMFpWTmpiM0psS0dWdVpXMTVMbTFoZUVobFlXeDBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnb1pXNWxiWGt1YzJsNlpTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeTlNWVhKblpTQXRQaUJOWldScGRXMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURJdU5UcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkzSmxZWFJsVTIxaGJHeGxja1Z1WlcxNUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhnNklHVnVaVzE1TG5nc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQmxibVZ0ZVM1NUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzQmxaV1E2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUF5TlNBcUlERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklDMHpNQ0FxSURFd1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZEZOd1pXVmtPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0RFd0xDQXlNQ2tnS2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBbllXeHBaVzRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJsNlpUb2dNUzQxWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpjbVZoZEdWVGJXRnNiR1Z5Ulc1bGJYa29lMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2daVzVsYlhrdWVDeGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nWlc1bGJYa3VlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE53WldWa09pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ0xUSTFJQ29nTVRBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nTFRNd0lDb2dNVEJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdobFlXeDBhRG9nTVRBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWRXeHNaWFJUY0dWbFpEb2dkR2hwY3k1bllXMWxMbkp1WkM1cGJuUmxaMlZ5U1c1U1lXNW5aU2d4TUN3Z01qQXBJQ29nTVRBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJGc2FXVnVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5wZW1VNklERXVOVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JpZFd4c1pYUXVhMmxzYkNncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kzSmhjMmhGYm1WdGVTaHdiR0Y1WlhJc0lHVnVaVzE1S1NCN1hHNGdJQ0FnSUNBZ0lDOHZaVzVsYlhrdVpHRnRZV2RsS0dWdVpXMTVMbWhsWVd4MGFDazdYRzRnSUNBZ0lDQWdJR1Z1WlcxNUxtUmhiV0ZuWlNnektUdGNiaUFnSUNBZ0lDQWdMeTl3YkdGNVpYSXVaR0Z0WVdkbEtHVnVaVzE1TG1obFlXeDBhQ2s3WEc0Z0lDQWdJQ0FnSUhCc1lYbGxjaTVrWVcxaFoyVW9NU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhR2wwUldabVpXTjBLSEJzWVhsbGNpazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHbDBSV1ptWldOMEtHVnVaVzE1S1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZsYm1WdGVTNWhiR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVVWNGNHeHZjMmx2YmxOdmRXNWtMbkJzWVhrb1hDSmNJaXd3TERBdU5TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWgxWkM1MWNHUmhkR1ZUWTI5eVpTaGxibVZ0ZVM1dFlYaElaV0ZzZEdncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFJvYVhNdWFIVmtMblZ3WkdGMFpVaGxZV3gwYUNncE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVhCc1lYbGxjaTVoYkdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSkZlSEJzYjNOcGIyNVRiM1Z1WkM1d2JHRjVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5S0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCbllXMWxUM1psY2lncGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVkR2x0WlM1emJHOTNUVzkwYVc5dUlEMGdNenRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkbVZ5YkdGNUxuWnBjMmxpYkdVZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWQyOXliR1F1WW5KcGJtZFViMVJ2Y0NoMGFHbHpMbTkyWlhKc1lYa3BPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2RHbHRaWElnUFNCMGFHbHpMbWRoYldVdWRHbHRaUzVqY21WaGRHVW9kR2hwY3k1bllXMWxMQ0IwY25WbEtUdGNiaUFnSUNBZ0lDQWdkR2x0WlhJdVlXUmtLRE13TURBc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUhSb2FYTXViWFZ6YVdNdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xOdmRXNWtMbkJzWVhrb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1emRHRjBaUzV6ZEdGeWRDZ25VR0Z1WjA5MlpYSW5LVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIUnBiV1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiRzloWkUxbGJuVW9LWHRjYmlBZ0lDQWdJQ0FnYkdWMElHVnpZMHRsZVNBOUlIUm9hWE11WjJGdFpTNXBibkIxZEM1clpYbGliMkZ5WkM1cGMwUnZkMjRvVUdoaGMyVnlMa3RsZVdKdllYSmtMa1ZUUXlrN1hHNGdJQ0FnSUNBZ0lHbG1LR1Z6WTB0bGVTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNpNXJhV3hzS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1YzNSaGRHVXVjM1JoY25Rb0owMWxiblVuS1R0Y2JseHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVnh1SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVSEpsYkc5aFpDQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGRHRjBaU0I3WEc1Y2JpQWdJQ0J3Y21Wc2IyRmtLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpHVnlRbWNnUFNCMGFHbHpMbUZrWkM1emNISnBkR1VvZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsZ3NJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWkxDQW5iRzloWkdWeVFtY25LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrWlhKQ1lYSWdQU0IwYUdsekxtRmtaQzV6Y0hKcGRHVW9kR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaTENBbmJHOWhaR1Z5UW1GeUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaR1Z5UW1jdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpHVnlRbUZ5TG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXpaWFJRY21Wc2IyRmtVM0J5YVhSbEtIUm9hWE11Ykc5aFpHVnlRbUZ5S1R0Y2JpQWdJQ0FnSUNBZ0x5OGdVMmh2YjNSbGNseHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZEd4aGMwcFRUMDVCY25KaGVTZ25jMjFoYkd4bWFXZG9kR1Z5Snl3Z0oybHRaeTl6YUc5dmRHVnlMM053Y21sMFpYTm9aV1YwTDNOdFlXeHNabWxuYUhSbGNpNXdibWNuTENBblpHRjBZUzl6YUc5dmRHVnlMM053Y21sMFpYTm9aV1YwTDNOdFlXeHNabWxuYUhSbGNpNXFjMjl1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkR3hoYzBwVFQwNUJjbkpoZVNnbllXeHBaVzRuTENBbmFXMW5MM05vYjI5MFpYSXZjM0J5YVhSbGMyaGxaWFF2WVd4cFpXNHVjRzVuSnl3Z0oyUmhkR0V2YzJodmIzUmxjaTl6Y0hKcGRHVnphR1ZsZEM5aGJHbGxiaTVxYzI5dUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZEd4aGMwcFRUMDVCY25KaGVTZ25ZblYwZEc5dUp5d2dKMmx0Wnk5aWRYUjBiMjR1Y0c1bkp5d2dKMlJoZEdFdloyVnVaWEpwWXk5aWRYUjBiMjR1YW5OdmJpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YVcxaFoyVW9KMlpoY21KaFkyc25MQ0FuYVcxbkwzTm9iMjkwWlhJdlptRnlZbUZqYXk1cWNHY25LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1sdFlXZGxLQ2RpZFd4c1pYUW5MQ0FuYVcxbkwzTm9iMjkwWlhJdlluVnNiR1YwTG5CdVp5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YVcxaFoyVW9KM0JoY25ScFkyeGxKeXdnSjJsdFp5OXphRzl2ZEdWeUwzQmhjblJwWTJ4bExtZHBaaWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdWFXMWhaMlVvSjJobFlXeDBhR0poY2ljc0lDZHBiV2N2YzJodmIzUmxjaTlvWldGc2RHaGlZWEl1Y0c1bkp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25hSFZrUW1jbkxDQW5hVzFuTDNOb2IyOTBaWEl2YUhWa0xXSm5MbkJ1WnljcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZFdScGJ5Z25jR3hoZVUxMWMybGpKeXdnV3lkaGRXUnBieTl6YUc5dmRHVnlMMjExYzJsakwzQnNZWGt1YlhBekoxMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KMjFsYm5WTmRYTnBZeWNzSUZzbllYVmthVzh2YzJodmIzUmxjaTl0ZFhOcFl5OXRaVzUxTG0xd015ZGRLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdVlYVmthVzhvSjIxbGJuVlBkbVZ5Snl3Z1d5ZGhkV1JwYnk5emFHOXZkR1Z5TDNOdmRXNWtMMjFsYm5VdGIzWmxjaTV0Y0RNblhTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZFdScGJ5Z25iV1Z1ZFU5MWRDY3NJRnNuWVhWa2FXOHZjMmh2YjNSbGNpOXpiM1Z1WkM5dFpXNTFMVzkxZEM1dGNETW5YU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRXUnBieWduYldWdWRVUnZkMjRuTENCYkoyRjFaR2x2TDNOb2IyOTBaWEl2YzI5MWJtUXZiV1Z1ZFMxamJHbGpheTV0Y0RNblhTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1GMVpHbHZLQ2RpZFd4c1pYUklhWFFuTENCYkoyRjFaR2x2TDNOb2IyOTBaWEl2YzI5MWJtUXZZblZzYkdWMExXaHBkQzV0Y0RNblhTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZFdScGJ5Z25aVzVsYlhsVGFHOTBKeXdnV3lkaGRXUnBieTl6YUc5dmRHVnlMM052ZFc1a0wyVnVaVzE1TFhOb2IzUXViWEF6SjEwcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVZWFZrYVc4b0oyVnVaVzE1Ulhod2JHOXphVzl1Snl3Z1d5ZGhkV1JwYnk5emFHOXZkR1Z5TDNOdmRXNWtMMlZ1WlcxNUxXVjRjR3h2YzJsdmJpNXRjRE1uWFNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkV1JwYnlnbmNHeGhlV1Z5VTJodmRDY3NJRnNuWVhWa2FXOHZjMmh2YjNSbGNpOXpiM1Z1WkM5d2JHRjVaWEl0YzJodmRDNXRjRE1uWFNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkV1JwYnlnbmNHeGhlV1Z5Ulhod2JHOXphVzl1Snl3Z1d5ZGhkV1JwYnk5emFHOXZkR1Z5TDNOdmRXNWtMM0JzWVhsbGNpMWxlSEJzYjNOcGIyNHViWEF6SjEwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZFdScGJ5Z25aMkZ0WlU5MlpYSW5MQ0JiSjJGMVpHbHZMM05vYjI5MFpYSXZjMjkxYm1RdloyRnRaUzF2ZG1WeUxtMXdNeWRkS1R0Y2JpQWdJQ0FnSUNBZ0x5OGhaMkZ0WlNBeFhHNWNibHh1SUNBZ0lDQWdJQ0F2TDFCaGJtZGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YVcxaFoyVW9KM0JoYm1kQ1p5Y3NJQ2RwYldjdmNHRnVaeTl3WVc1blFtY3VjRzVuSnlrN1hHNWNiaUFnSUNBZ0lDQWdMeThoVUdGdVoxeHVYRzVjYmlBZ0lDQWdJQ0FnTHk4Z2JXRjBZMmhwYm1jZ2NHRnBjbk5jYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdWMzQnlhWFJsYzJobFpYUW9KM1JwYkdWekp5d25hVzFuTDNCaGFYSnpMM1JwYkdWelEyeHBaVzUwTG5CdVp5Y3NJRGd3TENBNE1Dd2dNalFwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRzFoZEdOb2FXNW5JSEJoYVhKelhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbExuTjBZWEowS0NkTlpXNTFKeWs3WEc0Z0lDQWdmVnh1WEc1OVhHNGlMQ0pwYlhCdmNuUWdWR1Y0ZEVKMWRIUnZiaUJtY205dElDY3VMaTh1TGk5bGVIUmxibk5wYjI1ekwyMWxiblV2ZEdWNGRHSjFkSFJ2YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUU5MlpYSWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVUzUmhkR1VnZTF4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpVYVhSc1pTQTlJRzVsZHlCUWFHRnpaWEl1VkdWNGRDaDBhR2x6TG1kaGJXVXNJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V1MweU1EQXNJQ2RIWVcxbElHOTJaWEluTENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5Nelp3ZUNCVVlXaHZiV0VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzYVdkdU9pQW5ZMlZ1ZEdWeUoxeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsUnBkR3hsTG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUWdQU0J1WlhjZ1ZHVjRkRUoxZEhSdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaTFRNd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RpZFhSMGIyNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzWmxja1p5WVcxbE9pQXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzVjBSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IzZHVSbkpoYldVNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2RVY25rZ1lXZGhhVzRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1UWndlQ0JXWlhKa1lXNWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVWdQU0J1WlhjZ1ZHVjRkRUoxZEhSdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaS3pNd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RpZFhSMGIyNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzWmxja1p5WVcxbE9pQXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzVjBSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IzZHVSbkpoYldVNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2ROWlc1MUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05dWREb2dKekUyY0hnZ1ZtVnlaR0Z1WVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVQZG1WeVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTJaWEluS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1YwSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVJHOTNibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZFYjNkdUp5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1elpYUlBkbVZ5VTI5MWJtUW9kR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowTG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEVSdmQyNVRiM1Z1WkNoMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXpaWFJQZG1WeVUyOTFibVFvZEdocGN5NWlkRzVQZG1WeVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWMyVjBUM1YwVTI5MWJtUW9kR2hwY3k1aWRHNVBkWFJUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkUzV6WlhSRWIzZHVVMjkxYm1Rb2RHaHBjeTVpZEc1RWIzZHVVMjkxYm1RcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YjI1SmJuQjFkRVJ2ZDI0dVlXUmtLQ2dwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsTG5OMFlYSjBLQ2RRYkdGNUp5azdYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXZia2x1Y0hWMFJHOTNiaTVoWkdRb0tDazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0owMWxiblVuS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzSUQwZ2RHaHBjeTVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxtZGhiV1ZQZG1WeVZHbDBiR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWMzUmhjblFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWJXVnVkU2s3WEc0Z0lDQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElGQnNZWGxsY2lCbWNtOXRJQ2N1TGk4dUxpOXdjbVZtWVdKekwzTm9iMjkwWlhJdmNHeGhlV1Z5Snp0Y2JtbHRjRzl5ZENCRmJtVnRlU0JtY205dElDY3VMaTh1TGk5d2NtVm1ZV0p6TDNOb2IyOTBaWEl2Wlc1bGJYa25PMXh1YVcxd2IzSjBJRWhWUkNCbWNtOXRJQ2N1TGk4dUxpOXdjbVZtWVdKekwzQmhibWN2YUhWa0p6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHeGhlU0JsZUhSbGJtUnpJRkJvWVhObGNpNVRkR0YwWlNCN1hHNWNiaUFnSUNCamNtVmhkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lDOHZabUZ5WW1GamF5QTlJR0poWTJ0bmNtOTFibVJjYmlBZ0lDQWdJQ0FnZEdocGN5NW1ZWEppWVdOcklEMGdkR2hwY3k1aFpHUXVkR2xzWlZOd2NtbDBaU2d3TENBd0xDQTRNREFzSURJek9EQXNJQ2RtWVhKaVlXTnJKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1MGFXMWxMbk5zYjNkTmIzUnBiMjRnUFNBd08xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsY3lBOUlIUm9hWE11WVdSa0xtZHliM1Z3S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjeTVsYm1GaWJHVkNiMlI1SUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNpQTlJRzVsZHlCUWJHRjVaWElvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGdzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUF3TGpreUlDb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtaGxhV2RvZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR2hsWVd4MGFEb2dNVEF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZHpiV0ZzYkdacFoyaDBaWEluTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabkpoYldVNklERmNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1emRHRm5aUzVoWkdSRGFHbHNaQ2gwYUdsekxuQnNZWGxsY2lrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1b2RXUWdQU0J1WlhjZ1NGVkVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJzWVhsbGNqb2dkR2hwY3k1d2JHRjVaWEpjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbWx1Y0hWMExtOXVSRzkzYmk1aFpHUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5ScGJXVXVjMnh2ZDAxdmRHbHZiaUE5SURBN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1cGJuQjFkQzV2YmxWd0xtRmtaQ2dvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWRHbHRaUzV6Ykc5M1RXOTBhVzl1SUQwZ01EdGNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVWUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVTVzUwWlhKMllXd2dQU0F4TGpVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbFRhRzl2ZEZScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JKYm5SbGNuWmhiQ0E5SURFN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSlRhRzl2ZEVsdWRHVnlkbUZzSUQwZ01DNHhOanRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWRHbHRaUzVsZG1WdWRITXViRzl2Y0NoUWFHRnpaWEl1VkdsdFpYSXVVMFZEVDA1RUlDb2dNVEFzSUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJvYVhNdVpXNWxiWGxKYm5SbGNuWmhiQ0ErSURBdU9TQXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxKYm5SbGNuWmhiQ0F0UFNBd0xqRTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVVSnBkRzFoY0NBOUlIUm9hWE11WVdSa0xtSnBkRzFoY0VSaGRHRW9kR2hwY3k1bllXMWxMbmRwWkhSb0xDQjBhR2x6TG1kaGJXVXVhR1ZwWjJoMEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1UW1sMGJXRndMbU4wZUM1bWFXeHNVM1I1YkdVZ1BTQW5JekF3TUNjN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlVUpwZEcxaGNDNWpkSGd1Wm1sc2JGSmxZM1FvTUN3Z01Dd2dkR2hwY3k1bllXMWxMbmRwWkhSb0xDQjBhR2x6TG1kaGJXVXVhR1ZwWjJoMEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhrZ1BTQjBhR2x6TG1Ga1pDNXpjSEpwZEdVb01Dd2dNQ3dnZEdocGN5NXZkbVZ5YkdGNVFtbDBiV0Z3S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVMblpwYzJsaWJHVWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1TG1Gc2NHaGhJRDBnTUM0M05UdGNibHh1SUNBZ0lDQWdJQzh2SUhSb2FYTXViWFZ6YVdNZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1GMVpHbHZLQ2R3YkdGNVRYVnphV01uS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUklhWFJUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZGlkV3hzWlhSSWFYUW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVVWNGNHeHZjMmx2YmxOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMlZ1WlcxNVJYaHdiRzl6YVc5dUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5Ulhod2JHOXphVzl1VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25jR3hoZVdWeVJYaHdiRzl6YVc5dUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2RuWVcxbFQzWmxjaWNwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZkR2hwY3k1dGRYTnBZeTVzYjI5d1JuVnNiQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFZ3WkdGMFpTZ3BJSHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVk5vYjI5MFZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpUYUc5dmRGUnBiV1VnS3owZ2RHaHBjeTVuWVcxbExuUnBiV1V1Y0doNWMybGpjMFZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Wlc1bGJYbFVhVzFsSUQ0Z2RHaHBjeTVsYm1WdGVVbHVkR1Z5ZG1Gc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVZHbHRaU0E5SURBN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZM0psWVhSbFJXNWxiWGtvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtEWXNJRGMyS1NBcUlERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzQmxaV1E2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMUxDQXhNQ2tnS2lBeE1DQXFJQ2hOWVhSb0xuSmhibVJ2YlNncElENGdNQzQxSUQ4Z01TQTZJQzB4S1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMUxDQXhNQ2tnS2lBeE1GeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR1ZoYkhSb09pQTVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRGTndaV1ZrT2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtERXdMQ0F5TUNrZ0tpQXhNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkZzYVdWdUoxeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVsYm1WdGVWTm9iMjkwVkdsdFpTQStJSFJvYVhNdVpXNWxiWGxUYUc5dmRFbHVkR1Z5ZG1Gc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjeTVtYjNKRllXTm9RV3hwZG1Vb1pXNWxiWGtnUFQ0Z1pXNWxiWGt1YzJodmIzUW9LU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXVjR3hoZVdWeUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1KeWFXNW5WRzlVYjNBb2RHaHBjeTV2ZG1WeWJHRjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5Cc1lYbGxjbE5vYjI5MFZHbHRaU0ErSUhSb2FYTXVjR3hoZVdWeVUyaHZiM1JKYm5SbGNuWmhiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEl1YzJodmIzUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1d2FIbHphV056TG1GeVkyRmtaUzV2ZG1WeWJHRndLSFJvYVhNdWNHeGhlV1Z5TG1KMWJHeGxkSE1zSUhSb2FYTXVaVzVsYldsbGN5d2dkR2hwY3k1b2FYUkZibVZ0ZVN3Z2JuVnNiQ3dnZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5Cb2VYTnBZM011WVhKallXUmxMbTkyWlhKc1lYQW9kR2hwY3k1d2JHRjVaWElzSUhSb2FYTXVaVzVsYldsbGN5d2dkR2hwY3k1amNtRnphRVZ1WlcxNUxDQnVkV3hzTENCMGFHbHpLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVabTl5UldGamFDaGxibVZ0ZVNBOVBpQjBhR2x6TG1kaGJXVXVjR2g1YzJsamN5NWhjbU5oWkdVdWIzWmxjbXhoY0NoMGFHbHpMbkJzWVhsbGNpd2daVzVsYlhrdVluVnNiR1YwY3l3Z2RHaHBjeTVvYVhSUWJHRjVaWElzSUc1MWJHd3NJSFJvYVhNcEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtWmhjbUpoWTJzdWRHbHNaVkJ2YzJsMGFXOXVMbmtnS3owZ016dGNiaUFnSUNCOVhHNWNiaUFnSUNCamNtVmhkR1ZGYm1WdGVTaGtZWFJoS1NCN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUdWdVpXMTVJRDBnZEdocGN5NWxibVZ0YVdWekxtZGxkRVpwY25OMFJYaHBjM1J6S0daaGJITmxLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJtVnRlU0E5SUc1bGR5QkZibVZ0ZVNoa1lYUmhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjeTVoWkdRb1pXNWxiWGtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnVaVzE1TG5KbGMyVjBLR1JoZEdFcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdocGRFVm1abVZqZENodlltb3NJR052Ykc5eUtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCMGQyVmxiaUE5SUhSb2FYTXVaMkZ0WlM1aFpHUXVkSGRsWlc0b2IySnFLVHRjYmlBZ0lDQWdJQ0FnYkdWMElHVnRhWFIwWlhJZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1WdGFYUjBaWElvS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J3WVhKMGFXTnNaVk53WldWa0lEMGdNVEF3TzF4dUlDQWdJQ0FnSUNCc1pYUWdiV0Y0VUdGeWRHbGpiR1Z6SUQwZ01UQTdYRzVjYmlBZ0lDQWdJQ0FnZEhkbFpXNHVkRzhvZTNScGJuUTZJREI0Wm1Zd01EQXdmU3dnTVRBd0tUdGNiaUFnSUNBZ0lDQWdkSGRsWlc0dWIyNURiMjF3YkdWMFpTNWhaR1FvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2IySnFMblJwYm5RZ1BTQXdlR1ptWm1abVpqdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhSM1pXVnVMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTU0SUQwZ2IySnFMbmc3WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1ZVNBOUlHOWlhaTU1TzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG1keVlYWnBkSGtnUFNBd08xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtMWhhMlZRWVhKMGFXTnNaWE1vSjNCaGNuUnBZMnhsSnlrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0c5aWFpNW9aV0ZzZEdnZ1BEMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5ZEdsamJHVlRjR1ZsWkNBOUlESXdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhlRkJoY25ScFkyeGxjeUE5SURRd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSWdQU0F3ZUdabU1EQXdNRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWJXbHVVR0Z5ZEdsamJHVlRjR1ZsWkM1elpYUlVieWd0Y0dGeWRHbGpiR1ZUY0dWbFpDd2dMWEJoY25ScFkyeGxVM0JsWldRcE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtMWhlRkJoY25ScFkyeGxVM0JsWldRdWMyVjBWRzhvY0dGeWRHbGpiR1ZUY0dWbFpDd2djR0Z5ZEdsamJHVlRjR1ZsWkNrN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWMzUmhjblFvZEhKMVpTd2dOVEF3TENCdWRXeHNMQ0J0WVhoUVlYSjBhV05zWlhNcE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxuVndaR0YwWlNBOUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQStQU0F3TGpZcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlcxcGRIUmxjaTVrWlhOMGNtOTVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1bWIzSkZZV05vS0hCaGNuUnBZMnhsSUQwK0lIQmhjblJwWTJ4bExuUnBiblFnUFNCamIyeHZjaWs3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1d2JHRjVaWEl1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1aWNtbHVaMVJ2Vkc5d0tIUm9hWE11YjNabGNteGhlU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JvYVhSRmJtVnRlU2hpZFd4c1pYUXNJR1Z1WlcxNUtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwU0dsMFUyOTFibVF1Y0d4aGVTaGNJbHdpTERBc01DNDFLVHRjYmlBZ0lDQWdJQ0FnWlc1bGJYa3VaR0Z0WVdkbEtHSjFiR3hsZEM1b1pXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhwZEVWbVptVmpkQ2hsYm1WdGVTd2dZblZzYkdWMExuUnBiblFwTzF4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1Ulhod2JHOXphVzl1VTI5MWJtUXVjR3hoZVNoY0lsd2lMREFzTUM0MUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhSFZrTG5Wd1pHRjBaVk5qYjNKbEtHVnVaVzE1TG0xaGVFaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZblZzYkdWMExtdHBiR3dvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JvYVhSUWJHRjVaWElvY0d4aGVXVnlMQ0JpZFd4c1pYUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSSWFYUlRiM1Z1WkM1d2JHRjVLRndpWENJc01Dd3dMalVwTzF4dUlDQWdJQ0FnSUNCd2JHRjVaWEl1WkdGdFlXZGxLR0oxYkd4bGRDNW9aV0ZzZEdncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oMVpDNTFjR1JoZEdWSVpXRnNkR2dvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvYVhSRlptWmxZM1FvY0d4aGVXVnlMQ0JpZFd4c1pYUXVkR2x1ZENrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doY0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNrVjRjR3h2YzJsdmJsTnZkVzVrTG5Cc1lYa29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWElvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmlkV3hzWlhRdWEybHNiQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR055WVhOb1JXNWxiWGtvY0d4aGVXVnlMQ0JsYm1WdGVTa2dlMXh1SUNBZ0lDQWdJQ0JsYm1WdGVTNWtZVzFoWjJVb1pXNWxiWGt1YUdWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnY0d4aGVXVnlMbVJoYldGblpTaGxibVZ0ZVM1b1pXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhwZEVWbVptVmpkQ2h3YkdGNVpYSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaHBkRVZtWm1WamRDaGxibVZ0ZVNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doWlc1bGJYa3VZV3hwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsRmVIQnNiM05wYjI1VGIzVnVaQzV3YkdGNUtGd2lYQ0lzTUN3d0xqVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVvZFdRdWRYQmtZWFJsVTJOdmNtVW9aVzVsYlhrdWJXRjRTR1ZoYkhSb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxtaDFaQzUxY0dSaGRHVklaV0ZzZEdnb0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0NGd2JHRjVaWEl1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlSWGh3Ykc5emFXOXVVMjkxYm1RdWNHeGhlU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2lncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyRnRaVTkyWlhJb0tYdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMblJwYldVdWMyeHZkMDF2ZEdsdmJpQTlJRE03WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVTNTJhWE5wWW14bElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1KeWFXNW5WRzlVYjNBb2RHaHBjeTV2ZG1WeWJHRjVLVHRjYmlBZ0lDQWdJQ0FnYkdWMElIUnBiV1Z5SUQwZ2RHaHBjeTVuWVcxbExuUnBiV1V1WTNKbFlYUmxLSFJvYVhNdVoyRnRaU3dnZEhKMVpTazdYRzRnSUNBZ0lDQWdJSFJwYldWeUxtRmtaQ2d6TURBd0xDQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtMTFjMmxqTG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpUYjNWdVpDNXdiR0Y1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1YzNSaGRHVXVjM1JoY25Rb0owOTJaWEluS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFJwYldWeUxuTjBZWEowS0NrN1hHNGdJQ0FnZlZ4dVhHNTlYRzRpWFgwPSJ9
