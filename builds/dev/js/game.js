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

var GAME = new Phaser.Game(1440, 900, Phaser.AUTO);

Object.keys(states).forEach(function (state) {
  return GAME.state.add(state, states[state]);
});

GAME.state.start('Boot');

},{"./states":11}],4:[function(require,module,exports){
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
            tint = _ref$tint === undefined ? 0xFFFF00 : _ref$tint;

        _classCallCheck(this, Bullet);

        var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, game, x, y, asset));

        _this.anchor.setTo(0.5);
        _this.scale.setTo(1.2);
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

// Create a Bubble
var Enemy = function (_Phaser$Sprite) {
    _inherits(Enemy, _Phaser$Sprite);

    function Enemy(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            asset = _ref.asset,
            frame = _ref.frame,
            health = _ref.health,
            size = _ref.size,
            companyName = _ref.companyName,
            logoSrc = _ref.logoSrc,
            modalContent = _ref.modalContent,
            isCompleted = _ref.isCompleted;

        _classCallCheck(this, Enemy);

        var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, game, x, y, asset, frame));

        _this.game = game;
        _this.anchor.setTo(0.5);

        _this.health = health;
        _this.maxHealth = health;
        _this.size = size;

        //Physics
        _this.game.physics.arcade.enable(_this);
        _this.body.collideWorldBounds = true;
        _this.body.gravity.set(0.5, 1300);
        _this.body.bounce.set(1);

        // Necesary attributes in case the bubble is a Client Bubble
        _this.companyName = companyName;
        _this.logoSrc = logoSrc;
        _this.isCompleted = false;

        return _this;
    }

    _createClass(Enemy, [{
        key: 'update',
        value: function update() {}
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

},{"../shooter/player":9}],7:[function(require,module,exports){
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
        _this.scale.setTo(0.5);

        _this.health = health;
        _this.maxHealth = health;
        _this.game.physics.arcade.enable(_this);

        //gravity
        _this.body.gravity.y = 500;
        _this.body.collideWorldBounds = true;
        //!gravity

        _this.bullets = _this.game.add.group();
        _this.bullets.enableBody = true;
        _this.bulletSpeed = -700;
        _this.playerShootTime = 0;
        _this.playerShootInterval = 0.16;

        _this.shotSound = _this.game.add.sound('playerShot');

        _this.animations.add('walkRight', ['alien-walk-01.png', 'alien-walk-02.png'], 12, false);
        _this.animations.add('walkLeft', ['alien-walk-1b.png', 'alien-walk-2b.png'], 12, false);
        _this.animations.add('shoot', ['alien-shoot-01.png', 'alien-shoot-02.png'], 8, false);
        return _this;
    }

    _createClass(Player, [{
        key: 'update',
        value: function update() {
            this.body.velocity.x = 0;
            this.playerShootTime += this.game.time.physicsElapsed;

            var leftKey = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
            var rightKey = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
            var shootKey = this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR);

            if (leftKey) {

                if (shootKey && leftKey) {
                    this.animations.play('shoot');
                    this.x -= 10;
                } else {
                    this.animations.play('walkLeft');
                    this.x -= 10;
                }
            } else if (rightKey) {
                if (shootKey && rightKey) {
                    this.animations.play('shoot');
                    this.x += 10;
                } else {
                    this.animations.play('walkRight');
                    this.x += 10;
                }
            }
            if (this.playerShootTime > this.playerShootInterval) {
                this.playerShootTime = 0;
                if (this.alive) {

                    if (shootKey) {
                        this.animations.play('shoot');
                        this.shoot();
                    }
                }
            }
        }
    }, {
        key: 'shoot',
        value: function shoot() {

            var bullet = this.bullets.getFirstExists(false);

            if (!bullet) {
                bullet = new _bullet2.default({
                    game: this.game,
                    x: this.x + 50,
                    y: this.top,
                    //3
                    health: 1,
                    asset: 'bullet',
                    tint: 0xF7050D
                });
                // change this number to shoot less bullets at a time
                if (this.bullets.children.length <= 5) {
                    this.shotSound.play("", 0, 0.5);
                    this.bullets.add(bullet);
                    bullet.body.velocity.y = this.bulletSpeed;
                }
            } else {
                this.shotSound.play("", 0, 0.5);
                bullet.reset(this.x + 50, this.top, 1);
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

},{"./bullet":4}],8:[function(require,module,exports){
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

},{"../pang/bullet":4}],9:[function(require,module,exports){
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
        value: function update() {}
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

},{"../pang/bullet":4}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{"./boot":10,"./menu":12,"./pairs/pairsOver":13,"./pairs/playPairs":14,"./pang/pangOver":15,"./pang/playPang":16,"./preload":17,"./shooter/over":18,"./shooter/play":19}],12:[function(require,module,exports){
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
        key: 'init',
        value: function init(currentClient, customVar2) {

            console.log(currentClient);
            console.log(customVar2);
            //create list here
            if (currentClient === undefined) {
                console.log("UNDEFINED!");
            }
        }
    }, {
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.currentClient = 0;

            this.stage.backgroundColor = '#8ec1e8';
            this.backgroundClouds = this.add.tileSprite(this.game.world.centerX, this.game.world.height - 100, 1530, 256, 'bgClouds');
            this.backgroundClouds.anchor.setTo(0.5);

            this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Connecting Students with Opportunity', {
                font: '36px Arial',
                fill: 'white',
                align: 'center'
            });
            this.title.anchor.setTo(0.5);
            // this.music = this.game.add.audio('menuMusic');

            this.goIntroLogo = this.add.image(this.game.world.centerX, this.game.world.centerY - 800, 'goIntroLogo');
            this.goIntroLogo.anchor.setTo(0.5);
            this.game.add.tween(this.goIntroLogo).to({ y: this.game.world.centerY - 300 }, 2000, Phaser.Easing.Bounce.Out, true);

            this.pairsBtn = new _textbutton2.default({
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

            this.pairsBtn.onInputUp.add(function () {
                //this.music.stop();
                _this2.state.start('PlayPairs');
            });

            // Second Btn
            this.start = new _textbutton2.default({
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

            this.start.onInputUp.add(function () {
                //this.music.stop();
                _this2.currentClient = "CLIENT 0";
                _this2.state.start('PlayPang', true, false, _this2.currentClient);
            });
            // third Btn
            this.pangBtn = new _textbutton2.default({
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

            this.pangBtn.onInputUp.add(function () {
                //this.music.stop();
                _this2.state.start('Quiz');
            });

            // help Btn
            this.helpBtn = new _textbutton2.default({
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

            this.helpBtn.onInputUp.add(function () {
                //this.music.stop();
                //TODO: HOW TO PLAY SCREEN
                alert('HOW TO PLAY');
            });

            this.menuPanel = this.add.group();
            this.menuPanel.add(this.title);
            this.menuPanel.add(this.pairsBtn);
            this.menuPanel.add(this.start);
            this.menuPanel.add(this.pangBtn);
            this.menuPanel.add(this.helpBtn);

            //this.music.loopFull();

        }
    }, {
        key: 'update',
        value: function update() {
            this.backgroundClouds.tilePosition.x += 0.2;
        }
    }]);

    return Menu;
}(Phaser.State);

exports.default = Menu;

},{"../extensions/menu/textbutton":1}],13:[function(require,module,exports){
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

            this.gameOverTitle = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Pairs Game over', {
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

},{"../../extensions/menu/textbutton":1}],14:[function(require,module,exports){
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
            this.tileSpacing = 35;
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
            this.chosenClient = 15;

            this.cardGroup = this.add.group();
            //set it to one minute (60)
            this.timeLeft = 10;
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
                this.game.state.start('PairsOver');
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

},{"../../extensions/pairs/cardbutton":2}],15:[function(require,module,exports){
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

            this.stage.backgroundColor = '#8ec1e8';
            this.bgCircles = this.add.image(0, 0, 'go-overlay');

            this.gameOverTitle = this.add.image(this.game.world.centerX + 300, this.game.world.centerY - 200, 'go-Text');
            this.gameOverTitle.anchor.setTo(0.5);

            this.start = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX + 300,
                y: this.game.world.centerY + 100,
                asset: 'buttons',
                overFrame: 1,
                outFrame: 0,
                downFrame: 1,
                upFrame: 0,
                label: 'Try again',
                style: {
                    font: '20px Helvetica',
                    fill: 'white',
                    align: 'center'
                }
            });

            this.menu = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX + 300,
                y: this.game.world.centerY + 220,
                asset: 'buttons',
                overFrame: 1,
                outFrame: 0,
                downFrame: 1,
                upFrame: 0,
                label: 'Menu',
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
    }, {
        key: 'update',
        value: function update() {}
    }]);

    return PangOver;
}(Phaser.State);

exports.default = PangOver;

},{"../../extensions/menu/textbutton":1}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../../prefabs/pang/player');

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
        key: 'init',
        value: function init(currentClient) {
            //comes from menu.js
            console.log(currentClient);
            this.currentClient = currentClient;
        }
    }, {
        key: 'create',
        value: function create() {
            var _this2 = this;

            //TODO: json Testing
            this.bg = this.add.image(0, 0, 'pangBg');
            this.game.time.slowMotion = 0;

            // ------- PLAYER
            this.player = new _player2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: 0.92 * this.game.world.height,
                health: 10,
                asset: 'alien',
                frame: 'alien-stand.png'
            });

            this.game.stage.addChild(this.player);

            // ------- ENEMY:
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
            //initialize first client


            this.game.time.events.add(Phaser.Timer.SECOND * this.game.rnd.integerInRange(1, 15), function () {
                this.createEnemyClient({
                    game: this.game,
                    x: this.game.rnd.integerInRange(6, 76) * 10,
                    y: 0,
                    speed: {
                        x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                        y: this.game.rnd.integerInRange(5, 10) * 10
                    },
                    health: 15,
                    asset: 'logoBubbles',
                    frame: this.game.rnd.integerInRange(0, 8)
                });
            }, this);

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
        }
    }, {
        key: 'update',
        value: function update() {

            this.enemyTime += this.game.time.physicsElapsed;
            this.enemyShootTime += this.game.time.physicsElapsed;

            if (this.enemyTime > this.enemyInterval) {
                this.enemyTime = 0;

                this.createEnemy({
                    game: this.game,
                    x: this.game.rnd.integerInRange(6, 76) * 10,
                    //0
                    y: -270,
                    speed: {
                        x: this.game.rnd.integerInRange(-500, 500) * (Math.random() > 0.5 ? 1 : -1),
                        y: this.game.rnd.integerInRange(-550, 100)

                    },

                    health: 9,
                    bulletSpeed: 0,
                    asset: 'bubbles',
                    size: "medium",
                    frame: this.game.rnd.integerInRange(0, 2)

                });
            }

            if (this.enemyShootTime > this.enemyShootInterval) {
                this.enemyShootTime = 0;
                if (!this.player.alive) {
                    this.game.world.bringToTop(this.overlay);
                    console.log("Has muerto");
                }
            }

            this.game.physics.arcade.overlap(this.player.bullets, [this.enemies, this.smallerEnemies, this.enemiesClient], this.hitEnemy, null, this);
            this.game.physics.arcade.overlap(this.player, [this.enemies, this.smallerEnemies], this.crashEnemy, null, this);
            this.loadMenu();
        }
    }, {
        key: 'createEnemy',
        value: function createEnemy(data) {

            var enemy = this.enemies.getFirstExists(false);
            var totalEnemies = this.enemies.children.length;

            if (!enemy) {
                enemy = new _enemyPang2.default(data);
                if (totalEnemies <= 5) {
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
                if (totalEnemies <= 24) {
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
                if (enemy.size === 'medium') {

                    this.createSmallerEnemy({
                        game: this.game,
                        x: enemy.x,
                        // x: this.game.rnd.integerInRange(0, this.game.width - 300),
                        //0
                        y: enemy.y,
                        speed: {
                            x: -300,
                            y: -300
                        },
                        //9
                        health: 5,
                        asset: 'bubbles',
                        size: "small",
                        frame: this.game.rnd.integerInRange(3, 5)

                    });
                    this.createSmallerEnemy({
                        game: this.game,
                        x: enemy.x,
                        y: enemy.y,
                        speed: {
                            x: 300,
                            y: -300

                        },
                        health: 5,
                        asset: 'bubbles',
                        size: "small",
                        frame: this.game.rnd.integerInRange(3, 5)

                    });
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
                this.currentClient++;
                this.customVar2 = "Ojete";
                this.player.kill();
                //starts the state with custom variables
                this.game.state.start('Menu', true, false, this.currentClient, this.customVar2);
            }
        }
    }]);

    return PlayPang;
}(Phaser.State);

exports.default = PlayPang;

},{"../../prefabs/pang/enemyPang":5,"../../prefabs/pang/hud":6,"../../prefabs/pang/player":7}],17:[function(require,module,exports){
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

            this.load.image('goIntroLogo', 'img/generic/goIntro-logo.png');
            this.load.image('bgClouds', 'img/generic/bgClouds.png');
            this.load.spritesheet('buttons', 'img/generic/yellowButton.png', 360, 93, 4);

            // Shooter


            this.load.image('bullet', 'img/pang/bullet.png');
            this.load.image('particle', 'img/pang/particle.gif');
            this.load.image('healthbar', 'img/pang/healthbar.png');
            this.load.image('hudBg', 'img/pang/hud-bg.png');

            this.load.audio('playMusic', ['audio/shooter/music/play.mp3']);
            //!Shooter

            // Misc sounds
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
            // Misc sounds


            //Pang

            this.load.image('pangBg', 'img/pang/pangBg.png');
            this.load.image('go-overlay', 'img/pang/gameOver-bg.png');
            this.load.image('go-Text', 'img/pang/gameOver-text.png');

            this.load.atlasJSONHash('bubbles', 'img/pang/spritesheet/bubbles.png', 'data/pang/spritesheet/bubbles.json');
            this.load.atlasJSONHash('logoBubbles', 'img/pang/spritesheet/logoBubbles.png', 'data/pang/spritesheet/logoBubbles.json');
            this.load.atlasJSONHash('alien', 'img/pang/spritesheet/alien.png', 'data/pang/spritesheet/alien.json');

            //!Pang


            // matching pairs

            this.load.spritesheet('tiles', 'img/pairs/tilesClient3.png', 150, 170, 15);
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

},{}],18:[function(require,module,exports){
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

},{"../../extensions/menu/textbutton":1}],19:[function(require,module,exports){
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

},{"../../prefabs/pang/hud":6,"../../prefabs/shooter/enemy":8,"../../prefabs/shooter/player":9}]},{},[3])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZXh0ZW5zaW9ucy9tZW51L3RleHRidXR0b24uanMiLCJzcmMvanMvZXh0ZW5zaW9ucy9wYWlycy9jYXJkYnV0dG9uLmpzIiwic3JjL2pzL2dhbWUuanMiLCJzcmMvanMvcHJlZmFicy9wYW5nL2J1bGxldC5qcyIsInNyYy9qcy9wcmVmYWJzL3BhbmcvZW5lbXlQYW5nLmpzIiwic3JjL2pzL3ByZWZhYnMvcGFuZy9odWQuanMiLCJzcmMvanMvcHJlZmFicy9wYW5nL3BsYXllci5qcyIsInNyYy9qcy9wcmVmYWJzL3Nob290ZXIvZW5lbXkuanMiLCJzcmMvanMvcHJlZmFicy9zaG9vdGVyL3BsYXllci5qcyIsInNyYy9qcy9zdGF0ZXMvYm9vdC5qcyIsInNyYy9qcy9zdGF0ZXMvaW5kZXguanMiLCJzcmMvanMvc3RhdGVzL21lbnUuanMiLCJzcmMvanMvc3RhdGVzL3BhaXJzL3BhaXJzT3Zlci5qcyIsInNyYy9qcy9zdGF0ZXMvcGFpcnMvcGxheVBhaXJzLmpzIiwic3JjL2pzL3N0YXRlcy9wYW5nL3BhbmdPdmVyLmpzIiwic3JjL2pzL3N0YXRlcy9wYW5nL3BsYXlQYW5nLmpzIiwic3JjL2pzL3N0YXRlcy9wcmVsb2FkLmpzIiwic3JjL2pzL3N0YXRlcy9zaG9vdGVyL292ZXIuanMiLCJzcmMvanMvc3RhdGVzL3Nob290ZXIvcGxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQ0FxQixVOzs7QUFFakIsOEJBQXFIO0FBQUEsWUFBdkcsSUFBdUcsUUFBdkcsSUFBdUc7QUFBQSxZQUFqRyxDQUFpRyxRQUFqRyxDQUFpRztBQUFBLFlBQTlGLENBQThGLFFBQTlGLENBQThGO0FBQUEsWUFBM0YsS0FBMkYsUUFBM0YsS0FBMkY7QUFBQSxZQUFwRixRQUFvRixRQUFwRixRQUFvRjtBQUFBLFlBQTFFLGVBQTBFLFFBQTFFLGVBQTBFO0FBQUEs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QUFPLE1BQVAsQ0FBYyxNQUFNLE1BQXBCO0FBQ0EsaUJBQUssU0FBTCxDQUFlLE1BQWY7QUFDQSxpQkFBSyxTQUFMLENBQWUsS0FBZjtBQUNBLGdCQUFJLENBQUMsTUFBTSxLQUFYLEVBQWtCO0FBQ2QscUJBQUssbUJBQUwsQ0FBeUIsSUFBekIsQ0FBOEIsRUFBOUIsRUFBaUMsQ0FBakMsRUFBbUMsR0FBbkM7QUFDQSxxQkFBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixNQUFNLFNBQTNCO0FBQ0g7QUFDRCxpQkFBSyxHQUFMLENBQVMsWUFBVDtBQUNBLGdCQUFJLENBQUMsT0FBTyxLQUFaLEVBQW1CO0FBQ2YscUJBQUssb0JBQUwsQ0FBMEIsSUFBMUI7QUFDQSxxQkFBSyxRQUFMO0FBQ0g7QUFDSjs7O21DQUVTO0FBQUE7O0FBQ04saUJBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxVQUFmLEdBQTRCLENBQTVCO0FBQ0EsaUJBQUssT0FBTCxDQUFhLE9BQWIsR0FBdUIsSUFBdkI7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixVQUFoQixDQUEyQixLQUFLLE9BQWhDO0FBQ0EsZ0JBQUksUUFBUSxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZixDQUFzQixLQUFLLElBQTNCLEVBQWlDLElBQWpDLENBQVo7QUFDQSxrQkFBTSxHQUFOLENBQVUsSUFBVixFQUFnQixZQUFNO0FBQ2xCLHVCQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ0EsdUJBQUssYUFBTCxDQUFtQixJQUFuQjtBQUNBLHVCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0gsYUFKRDtBQUtBLGtCQUFNLEtBQU47QUFDSDs7OztFQXBONkIsT0FBTyxLOztrQkFBcEIsSSIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkJ1dHRvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUsIGxhYmVsLCBzdHlsZSB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUpO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIDAsIDAsIHRoaXMubGFiZWwsIHRoaXMuc3R5bGUpO1xuICAgICAgICB0aGlzLnRleHQuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRCdXR0b24gZXh0ZW5kcyBQaGFzZXIuQnV0dG9uIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSx2YWx1ZSwgaXNDbGllbnR9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUpO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIC8vIHRoaXMuc2NhbGUuc2V0VG8oMC45KTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaXNDbGllbnQgPSBpc0NsaWVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBzdGF0ZXMgZnJvbSAnLi9zdGF0ZXMnO1xuY29uc3QgR0FNRSA9IG5ldyBQaGFzZXIuR2FtZSgxNDQwLCA5MDAsIFBoYXNlci5BVVRPKTtcblxuT2JqZWN0LmtleXMoc3RhdGVzKS5mb3JFYWNoKHN0YXRlID0+IEdBTUUuc3RhdGUuYWRkKHN0YXRlLCBzdGF0ZXNbc3RhdGVdKSk7XG5cbkdBTUUuc3RhdGUuc3RhcnQoJ0Jvb3QnKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgaGVhbHRoLCB0aW50ID0gMHhGRkZGMDAgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCk7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygxLjIpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy50aW50ID0gdGludDtcbiAgICAgICAgdGhpcy5jaGVja1dvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vdXRPZkJvdW5kc0tpbGwgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9idWxsZXQnO1xuLy8gQ3JlYXRlIGEgQnViYmxlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUsIGhlYWx0aCxzaXplLCBjb21wYW55TmFtZSwgbG9nb1NyYywgbW9kYWxDb250ZW50LCBpc0NvbXBsZXRlZCB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBmcmFtZSk7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG5cbiAgICAgICAgLy9QaHlzaWNzXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICB0aGlzLmJvZHkuZ3Jhdml0eS5zZXQoMC41LCAxMzAwKTtcbiAgICAgICAgdGhpcy5ib2R5LmJvdW5jZS5zZXQoMSk7XG5cbiAgICAgICAgLy8gTmVjZXNhcnkgYXR0cmlidXRlcyBpbiBjYXNlIHRoZSBidWJibGUgaXMgYSBDbGllbnQgQnViYmxlXG4gICAgICAgIHRoaXMuY29tcGFueU5hbWUgPSBjb21wYW55TmFtZTtcbiAgICAgICAgdGhpcy5sb2dvU3JjID0gbG9nb1NyYztcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7fVxuXG5cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG4gICAgcmVzZXQoeyB4LCB5LCBoZWFsdGgsIGJ1bGxldFNwZWVkLCBzcGVlZCB9KSB7XG4gICAgICAgIHN1cGVyLnJlc2V0KHgsIHksIGhlYWx0aCk7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSBzcGVlZC54O1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHNwZWVkLnk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9zaG9vdGVyL3BsYXllcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWQgZXh0ZW5kcyBQaGFzZXIuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgcGxheWVyIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmJnID0gbmV3IFBoYXNlci5JbWFnZSh0aGlzLmdhbWUsIDAsIDAsICdodWRCZycpO1xuICAgICAgICB0aGlzLndpZHRoID0gODAwO1xuICAgICAgICB0aGlzLmhlYWx0aGJhciA9IG5ldyBQaGFzZXIuU3ByaXRlKHRoaXMuZ2FtZSwgMiwgMiwgJ2hlYWx0aGJhcicpO1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5zY2FsZS5zZXRUbygwLjk5NSwgMTEpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwgPSAnU2NvcmU6ICc7XG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgMjAsIDE0LCB0aGlzLnNjb3JlTGFiZWwgKyB0aGlzLnNjb3JlLCB7XG4gICAgICAgICAgICBmb250OiAnMTNweCBWZXJkYW5hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJnKTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhiYXIpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnNjb3JlVGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhbHRoKHBsYXllcikge1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5jcm9wKG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIDAsICh0aGlzLnBsYXllci5oZWFsdGggLyB0aGlzLnBsYXllci5tYXhIZWFsdGgpICogdGhpcy53aWR0aCwgMTApKTtcbiAgICAgICAgdGhpcy5oZWFsdGhiYXIudXBkYXRlQ3JvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKGFtb3VudCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IGFtb3VudDtcbiAgICAgICAgdGhpcy5zY29yZVRleHQudGV4dCA9IHRoaXMuc2NvcmVMYWJlbCArICh0aGlzLnNjb3JlICogMTApO1xuICAgIH1cblxufTtcbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9idWxsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGggfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcblxuICAgICAgICAvL2dyYXZpdHlcbiAgICAgICAgdGhpcy5ib2R5LmdyYXZpdHkueSA9IDUwMDtcbiAgICAgICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIC8vIWdyYXZpdHlcblxuICAgICAgICB0aGlzLmJ1bGxldHMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuYnVsbGV0cy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IC03MDA7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdEludGVydmFsID0gMC4xNjtcblxuXG5cbiAgICAgICAgdGhpcy5zaG90U291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKCdwbGF5ZXJTaG90Jyk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zLmFkZCgnd2Fsa1JpZ2h0JyxbJ2FsaWVuLXdhbGstMDEucG5nJywnYWxpZW4td2Fsay0wMi5wbmcnXSwxMixmYWxzZSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3dhbGtMZWZ0JyxbJ2FsaWVuLXdhbGstMWIucG5nJywnYWxpZW4td2Fsay0yYi5wbmcnXSwxMixmYWxzZSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3Nob290JyxbJ2FsaWVuLXNob290LTAxLnBuZycsJ2FsaWVuLXNob290LTAyLnBuZyddLDgsZmFsc2UpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG5cblxuICAgICAgICBsZXQgbGVmdEtleSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLkxFRlQpO1xuICAgICAgICBsZXQgcmlnaHRLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5SSUdIVCk7XG4gICAgICAgIGxldCBzaG9vdEtleSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSKTtcblxuICAgICAgICBpZihsZWZ0S2V5KXtcblxuICAgICAgICAgICAgaWYoc2hvb3RLZXkgJiYgbGVmdEtleSl7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3Nob290Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy54IC09IDEwO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3dhbGtMZWZ0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy54IC09IDEwO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHJpZ2h0S2V5KXtcbiAgICAgICAgICAgIGlmKHNob290S2V5ICYmIHJpZ2h0S2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3Nob290Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IDEwO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ3dhbGtSaWdodCcpO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSAxMDtcbiAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBsYXllclNob290VGltZSA+IHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxpdmUpIHtcblxuICAgICAgICAgICAgICAgIGlmKHNob290S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCdzaG9vdCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICAgICAgbGV0IGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFidWxsZXQpIHtcbiAgICAgICAgICAgIGJ1bGxldCA9IG5ldyBCdWxsZXQoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnggKyA1MCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnRvcCxcbiAgICAgICAgICAgICAgICAvLzNcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDEsXG4gICAgICAgICAgICAgICAgYXNzZXQ6ICdidWxsZXQnLFxuICAgICAgICAgICAgICAgIHRpbnQ6IDB4RjcwNTBEXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aGlzIG51bWJlciB0byBzaG9vdCBsZXNzIGJ1bGxldHMgYXQgYSB0aW1lXG4gICAgICAgICAgICBpZih0aGlzLmJ1bGxldHMuY2hpbGRyZW4ubGVuZ3RoIDw9IDUpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLmFkZChidWxsZXQpO1xuICAgICAgICAgICAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJ1bGxldFNwZWVkO1xuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICBidWxsZXQucmVzZXQodGhpcy54ICsgNTAsIHRoaXMudG9wLCAxKTtcbiAgICAgICAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJ1bGxldFNwZWVkO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG59XG4iLCIgICAgaW1wb3J0IEJ1bGxldCBmcm9tICcuLi9wYW5nL2J1bGxldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBmcmFtZSwgaGVhbHRoLCBidWxsZXRTcGVlZCB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBmcmFtZSk7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKDAuOCk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdzcGlubmluZycsIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTRdLCAzMCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGxheSgnc3Bpbm5pbmcnKTtcblxuICAgICAgICB0aGlzLmJ1bGxldHMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuYnVsbGV0cy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IGJ1bGxldFNwZWVkO1xuXG4gICAgICAgIHRoaXMuc2hvdFNvdW5kID0gdGhpcy5nYW1lLmFkZC5zb3VuZCgnZW5lbXlTaG90Jyk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IDAuMDQgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDAuMDQgKiB0aGlzLmdhbWUud29ybGQud2lkdGggKyAyO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggKj0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID4gMC45NiAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMC45NiAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDI7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCAqPSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDIgPiB0aGlzLmdhbWUud29ybGQuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmtpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob290KCkge1xuXG4gICAgICAgIHRoaXMuc2hvdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG5cbiAgICAgICAgbGV0IGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFidWxsZXQpIHtcbiAgICAgICAgICAgIGJ1bGxldCA9IG5ldyBCdWxsZXQoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5ib3R0b20sXG4gICAgICAgICAgICAgICAgaGVhbHRoOiAyLFxuICAgICAgICAgICAgICAgIGFzc2V0OiAnYnVsbGV0JyxcbiAgICAgICAgICAgICAgICB0aW50OiAweGZmMDAwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmJ1bGxldHMuYWRkKGJ1bGxldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBidWxsZXQucmVzZXQodGhpcy54LCB0aGlzLmJvdHRvbSwgMik7XG4gICAgICAgIH1cblxuICAgICAgICBidWxsZXQuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5idWxsZXRTcGVlZDtcbiAgICB9XG5cbiAgICBkYW1hZ2UoYW1vdW50KSB7XG4gICAgICAgIHN1cGVyLmRhbWFnZShhbW91bnQpO1xuICAgIH1cblxuICAgIHJlc2V0KHsgeCwgeSwgaGVhbHRoLCBidWxsZXRTcGVlZCwgc3BlZWQgfSkge1xuICAgICAgICBzdXBlci5yZXNldCh4LCB5LCBoZWFsdGgpO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gYnVsbGV0U3BlZWQ7XG4gICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gc3BlZWQueDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSBzcGVlZC55O1xuICAgIH1cbn1cbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi4vcGFuZy9idWxsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGggfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IGhlYWx0aDtcblxuXG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgLy9ncmF2aXR5XG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5LnkgPSAxMDA7XG4gICAgICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICAvL1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gLTUwMDtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQoJ3BsYXllclNob3QnKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcblxuICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcblxuICAgICAgICBpZiAoIWJ1bGxldCkge1xuICAgICAgICAgICAgYnVsbGV0ID0gbmV3IEJ1bGxldCh7XG4gICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnRvcCxcbiAgICAgICAgICAgICAgICAvLzNcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDEsXG4gICAgICAgICAgICAgICAgYXNzZXQ6ICdidWxsZXQnLFxuICAgICAgICAgICAgICAgIHRpbnQ6IDB4MDRjMTEyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aGlzIG51bWJlciB0byBzaG9vdCBsZXNzIGJ1bGxldHMgYXQgYSB0aW1lXG4gICAgICAgICAgICBpZih0aGlzLmJ1bGxldHMuY2hpbGRyZW4ubGVuZ3RoIDw9IDUpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLmFkZChidWxsZXQpO1xuXG4gICAgICAgICAgICAgICAgYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IHRoaXMuYnVsbGV0U3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3RTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgYnVsbGV0LnJlc2V0KHRoaXMueCwgdGhpcy50b3AsIDEpO1xuICAgICAgICAgICAgYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IHRoaXMuYnVsbGV0U3BlZWQ7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgZGFtYWdlKGFtb3VudCkge1xuICAgICAgICBzdXBlci5kYW1hZ2UoYW1vdW50KTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdsb2FkZXJCZycsICdpbWcvbG9hZGVyLWJnLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvYWRlckJhcicsICdpbWcvbG9hZGVyLWJhci5wbmcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcblxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBCb290fSBmcm9tICcuL2Jvb3QnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFByZWxvYWR9IGZyb20gJy4vcHJlbG9hZCc7XG5leHBvcnQge2RlZmF1bHQgYXMgTWVudX0gZnJvbSAnLi9tZW51Jztcbi8vZ2FtZTFcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQbGF5fSBmcm9tICcuL3Nob290ZXIvcGxheSc7XG5leHBvcnQge2RlZmF1bHQgYXMgT3Zlcn0gZnJvbSAnLi9zaG9vdGVyL292ZXInO1xuXG4vL3BhbmdCdG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyBQbGF5UGFuZ30gZnJvbSAnLi9wYW5nL3BsYXlQYW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYW5nT3Zlcn0gZnJvbSAnLi9wYW5nL3BhbmdPdmVyJztcblxuLy9nYW1lM1xuZXhwb3J0IHtkZWZhdWx0IGFzIFBsYXlQYWlyc30gZnJvbSAnLi9wYWlycy9wbGF5UGFpcnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFBhaXJzT3Zlcn0gZnJvbSAnLi9wYWlycy9wYWlyc092ZXInO1xuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vZXh0ZW5zaW9ucy9tZW51L3RleHRidXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgICBpbml0KGN1cnJlbnRDbGllbnQsY3VzdG9tVmFyMil7XG5cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudENsaWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1c3RvbVZhcjIpO1xuICAgICAgICAvL2NyZWF0ZSBsaXN0IGhlcmVcbiAgICAgICAgaWYoY3VycmVudENsaWVudCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVU5ERUZJTkVEIVwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2xpZW50ID0gMDtcblxuICAgICAgICB0aGlzLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjOGVjMWU4JztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xvdWRzID0gdGhpcy5hZGQudGlsZVNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gMTAwLDE1MzAsMjU2LCdiZ0Nsb3VkcycpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDbG91ZHMuYW5jaG9yLnNldFRvKDAuNSk7XG5cblxuICAgICAgICB0aGlzLnRpdGxlID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gMjAwLCAnQ29ubmVjdGluZyBTdHVkZW50cyB3aXRoIE9wcG9ydHVuaXR5Jywge1xuICAgICAgICAgICAgZm9udDogJzM2cHggQXJpYWwnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aXRsZS5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgLy8gdGhpcy5tdXNpYyA9IHRoaXMuZ2FtZS5hZGQuYXVkaW8oJ21lbnVNdXNpYycpO1xuXG4gICAgICAgIHRoaXMuZ29JbnRyb0xvZ28gPSB0aGlzLmFkZC5pbWFnZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtIDgwMCwnZ29JbnRyb0xvZ28nKTtcbiAgICAgICAgdGhpcy5nb0ludHJvTG9nby5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmdvSW50cm9Mb2dvKS50byggeyB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtIDMwMCB9LCAyMDAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5PdXQsIHRydWUpO1xuXG5cbiAgICAgICAgdGhpcy5wYWlyc0J0biA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAxLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDAsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDEsXG4gICAgICAgICAgICB1cEZyYW1lOiAwLFxuICAgICAgICAgICAgbGFiZWw6ICdQYWlycycsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcyMHB4IEhlbHZldGljYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5wYWlyc0J0bi5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnBhaXJzQnRuLnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnBhaXJzQnRuLnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5wYWlyc0J0bi5vbklucHV0VXAuYWRkKCgpPT57XG4gICAgICAgICAgICAvL3RoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheVBhaXJzJyk7XG5cbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIC8vIFNlY29uZCBCdG5cbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAxMDAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAxLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDAsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDEsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdCdWJibGUgQnVyc3QhJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzIwcHggSGVsdmV0aWNhJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLnN0YXJ0LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLnN0YXJ0Lm9uSW5wdXRVcC5hZGQoKCk9PntcbiAgICAgICAgICAgIC8vdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDbGllbnQgPSBcIkNMSUVOVCAwXCI7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5UGFuZycsIHRydWUsIGZhbHNlLCB0aGlzLmN1cnJlbnRDbGllbnQpO1xuXG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXJkIEJ0blxuICAgICAgICB0aGlzLnBhbmdCdG4gPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgMjAwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b25zJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMSxcbiAgICAgICAgICAgIG91dEZyYW1lOiAwLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAxLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnUXVpeiEnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMjBweCBIZWx2ZXRpY2EnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMucGFuZ0J0bi5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnBhbmdCdG4uc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMucGFuZ0J0bi5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMucGFuZ0J0bi5vbklucHV0VXAuYWRkKCgpPT57XG4gICAgICAgICAgICAvL3RoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUXVpeicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBoZWxwIEJ0blxuICAgICAgICB0aGlzLmhlbHBCdG4gPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgMzQwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b25zJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMyxcbiAgICAgICAgICAgIG91dEZyYW1lOiAyLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAzLFxuICAgICAgICAgICAgdXBGcmFtZTogMyxcbiAgICAgICAgICAgIGxhYmVsOiAnQWJvdXQnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMjBweCBIZWx2ZXRpY2EnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICcjYWJhYmFiJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGVscEJ0bi5mcmFtZSA9IDM7XG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMuaGVscEJ0bi5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLmhlbHBCdG4uc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMuaGVscEJ0bi5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuaGVscEJ0bi5vbklucHV0VXAuYWRkKCgpPT57XG4gICAgICAgICAgICAvL3RoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgLy9UT0RPOiBIT1cgVE8gUExBWSBTQ1JFRU5cbiAgICAgICAgICAgIGFsZXJ0KCdIT1cgVE8gUExBWScpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudVBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMudGl0bGUpO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbC5hZGQodGhpcy5wYWlyc0J0bik7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMucGFuZ0J0bik7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLmhlbHBCdG4pO1xuXG5cbiAgICAgICAgLy90aGlzLm11c2ljLmxvb3BGdWxsKCk7XG5cblxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENsb3Vkcy50aWxlUG9zaXRpb24ueCArPSAwLjI7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy9tZW51L3RleHRidXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5nT3ZlciBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTIwMCwgJ1BhaXJzIEdhbWUgb3ZlcicsIHtcbiAgICAgICAgICAgIGZvbnQ6ICczNnB4IFRhaG9tYScsXG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ1RyeSBhZ2FpbicsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkrMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ01lbnUnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLnN0YXJ0LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXlQYW5nJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENhcmRCdXR0b24gZnJvbSAnLi4vLi4vZXh0ZW5zaW9ucy9wYWlycy9jYXJkYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheVBhaXJzIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcblxuICAgICAgICAvL3RoaXMuYmcgPSB0aGlzLmFkZC50aWxlU3ByaXRlKDAsIDAsNjY2LDYwMCwgJ3BhbmdCZycpO1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyM0ZWQwZTEnO1xuICAgICAgICB0aGlzLmJnID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCAnYmcnKTtcbiAgICAgICAgdGhpcy5udW1Sb3dzID0gNDtcbiAgICAgICAgdGhpcy5udW1Db2xzID0gNTtcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDE1NTtcbiAgICAgICAgdGhpcy50aWxlU3BhY2luZyA9IDM1O1xuICAgICAgICB0aGlzLnRpbGVzTGVmdCA9ICh0aGlzLm51bVJvd3MgKiB0aGlzLm51bUNvbHMpO1xuXG4gICAgICAgIHRoaXMuYmFja09mVGhlQ2FyZCA9IDEwO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiBDbGllbnRzIHN0YXJ0cyBhdCBwb3NpdGlvbiAxMCAoY291bnQgc3BhY2VzIGluIHNwcml0ZVNoZWV0KVxuICAgICAgICAgICAgKiAxMyA9IEdvb2dsZVxuICAgICAgICAgICAgKiAxNCA9IEFtYXpvblxuICAgICAgICAgICAgKiAxNSA9IENhcGl0YWxPbmVcbiAgICAgICAgICAgICogMTYgPSBHb2xkbWFuIFNhY2hzXG4gICAgICAgICAgICAqIDE3ID0gQWNjZW50dXJlXG4gICAgICAgICAgICAqIDE4ID0gQ2FwZ2VtaW5pXG4gICAgICAgICAgICAqIDE5ID0gUFdDXG4gICAgICAgICAgICAqIDE3ID0gLi4uXG4gICAgICAgICAgICAqIDE4ID0gLi4uXG4gICAgICAgICAgICAqIDE5ID0gLi4uXG4gICAgICAgICAgICAqIDIwID0gLi4uXG4gICAgICAgICAgICAqL1xuICAgICAgICB0aGlzLmNob3NlbkNsaWVudCA9IDE1O1xuXG5cbiAgICAgICAgdGhpcy5jYXJkR3JvdXAgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICAvL3NldCBpdCB0byBvbmUgbWludXRlICg2MClcbiAgICAgICAgdGhpcy50aW1lTGVmdCA9IDEwO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSAwO1xuXG4gICAgICAgIHRoaXMuY2FyZHNBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheSA9IFtdO1xuXG5cbiAgICAgICAgLy8tLS0tLS0gSFVEIFJFTEFURUQgU1RVRkZcblxuICAgICAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgICAgICAgZm9udDogXCIzMnB4IEhlbHZldGljYVwiLFxuICAgICAgICAgICAgZmlsbDogXCIjMDBmZjAwXCIsXG4gICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgNSwgXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCB0aGlzLnN0eWxlKTtcbiAgICAgICAgdGhpcy50aW1lVGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgdGhpcy5nYW1lLmhlaWdodCAtIDUsIFwiVGltZSBsZWZ0OiBcIiArIHRoaXMudGltZUxlZnQsIHRoaXMuc3R5bGUpO1xuICAgICAgICB0aGlzLnRpbWVUZXh0LmFuY2hvci5zZXQoMCwxKTtcblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05ELCB0aGlzLmRlY3JlYXNlVGltZSx0aGlzKTtcblxuICAgICAgICB0aGlzLnBsYWNlQ2FyZHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMubG9hZE1lbnUoKTtcblxuICAgIH1cblxuICAgIC8vIEN1c3RvbSBmdW5jdGlvbnNcbiAgICBsb2FkTWVudSgpe1xuICAgICAgICBsZXQgZXNjS2V5ID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuRVNDKTtcbiAgICAgICAgaWYoZXNjS2V5KXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnTWVudScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjcmVhc2VUaW1lKCkge1xuICAgICAgICB0aGlzLnRpbWVMZWZ0LS07XG5cbiAgICAgICAgdGhpcy50aW1lVGV4dC50ZXh0ID0gXCJUaW1lIGxlZnQ6IFwiICsgdGhpcy50aW1lTGVmdDtcbiAgICAgICAgaWYodGhpcy50aW1lTGVmdCA9PSAwKSB7XG4gICAgICAgICAgICAvL0NoYW5nZSB0aGlzIHRvIHBhaXJzT3ZlclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQYWlyc092ZXInKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGFjZUNhcmRzKCkge1xuXG4gICAgICAgIGxldCBsZWZ0U3BhY2UgPSAodGhpcy5nYW1lLndpZHRoIC0gKHRoaXMubnVtQ29scyAqIHRoaXMudGlsZVNpemUpIC0gKCh0aGlzLm51bUNvbHMgLSAxKSAqIFx0dGhpcy50aWxlU3BhY2luZykpLzI7XG4gICAgICAgIGxldCB0b3BTcGFjZSAgPSAodGhpcy5nYW1lLmhlaWdodCAtICh0aGlzLm51bVJvd3MgKiB0aGlzLnRpbGVTaXplKSAtICgodGhpcy5udW1Sb3dzIC0gMSkgKiBcdHRoaXMudGlsZVNwYWNpbmcpKS8yO1xuXG4gICAgICAgIC8vLS0gUG9wdWxhdGUgYXJyYXkgd2l0aCBwYWlycyBvZiBudW1iZXJzIFsxLDEsMiwyLDMsMyw0LDQsLi4uXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50aWxlc0xlZnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYXJkc0FycmF5LnB1c2goTWF0aC5mbG9vcihpIC8gMikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8tLSBSYW5kb21pemUgLyBtaXggdGhlIGFycmF5XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVzTGVmdDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZnJvbSA9ICB0aGlzLmdhbWUucm5kLmJldHdlZW4oMCwgdGhpcy5jYXJkc0FycmF5Lmxlbmd0aC0xKTtcbiAgICAgICAgICAgIGxldCB0byAgID0gIHRoaXMuZ2FtZS5ybmQuYmV0d2VlbigwLCB0aGlzLmNhcmRzQXJyYXkubGVuZ3RoLTEpO1xuICAgICAgICAgICAgbGV0IHRlbXAgPSAgdGhpcy5jYXJkc0FycmF5W2Zyb21dO1xuXG4gICAgICAgICAgICB0aGlzLmNhcmRzQXJyYXlbZnJvbV0gPSB0aGlzLmNhcmRzQXJyYXlbdG9dO1xuICAgICAgICAgICAgdGhpcy5jYXJkc0FycmF5W3RvXSA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICAvLy0tIERlYWwgdGhlIGNhcmRzXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUNvbHM7IGkrKykge1xuXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5udW1Sb3dzOyBqKyspIHtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBuZXcgQ2FyZEJ1dHRvbih7XG4gICAgICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICAgICAgeDogbGVmdFNwYWNlICsgaSAqICh0aGlzLnRpbGVTaXplICtcdHRoaXMudGlsZVNwYWNpbmcpICsgNzUsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvcFNwYWNlICsgaiAqICh0aGlzLnRpbGVTaXplICsgdGhpcy50aWxlU3BhY2luZykgKyAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiAndGlsZXMnLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5zaG93Q2FyZCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tDb250ZXh0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBkb3duRnJhbWU6IDEyLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5jYXJkc0FycmF5W2ogKiB0aGlzLm51bUNvbHMgKyBpXSxcbiAgICAgICAgICAgICAgICAgICAgaXNDbGllbnQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBwYXJ0IGlzIHdoZXJlIHdlIHRha2UgdGhlIGxhc3QgY2FyZCBpbiBvdXIgc3ByaXRlc2hlZXQgYW5kIHJlcGxhY2UgaXQgd2l0aCBhIGNsaWVudFxuICAgICAgICAgICAgICAgIC8vIEluIHRoaXMgY2FzZSB2YWx1ZSA5IGlzIHRoZSBsYXN0IHZhbHVlIG9mIHRoZSAnc3RhbmRhcmQnIGNhcmRzXG4gICAgICAgICAgICAgICAgaWYoY2FyZC52YWx1ZSA9PSA5KXtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC52YWx1ZSA9IHRoaXMuY2hvc2VuQ2xpZW50O1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmlzQ2xpZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXJkLmZyYW1lID0gdGhpcy5iYWNrT2ZUaGVDYXJkO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZEdyb3VwLmFkZChjYXJkKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dDYXJkKHRhcmdldENhcmQpIHtcbiAgICAgICAgLypcbiAgICAgICAgKiAgIHB1c2ggdGhlIHZhbHVlcyBmcm9tIHRoZSBjYXJkcyB0byBvdXIgc2VsZWN0ZWQgYXJyYXkgb2YgY2FyZHNcbiAgICAgICAgKiAgIGlmIHlvdSBoYXZlIGNob3NlbiAyLCBsZXQncyBjb21wYXJlIHRoZW0gdXNpbmcgY2hlY2tUaWxlc1xuICAgICAgICAqL1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheS5sZW5ndGggPCAyICYmIHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5LmluZGV4T2YodGFyZ2V0Q2FyZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAvL1RPRE8gc291bmRzXG4gICAgICAgICAgICAvLyBpZihwbGF5U291bmQpe1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuc291bmRBcnJheVswXS5wbGF5KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB0YXJnZXRDYXJkLmZyYW1lID0gdGFyZ2V0Q2FyZC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5LnB1c2godGFyZ2V0Q2FyZCk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDYXJkc0FycmF5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCwgdGhpcy5jaGVja1RpbGVzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY2hlY2tUaWxlcygpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogICBDaGVjayB0aGUgaWYgdGhlIHZhbHVlcyBmcm9tIG91ciBzZWxlY3RlZENhcmRzQXJyYXkgYXJlIGVxdWFsXG4gICAgICAgICAqICAgaWYgc28sIGFkZCBzY29yZSBhbmQgaGlkZSB0aGVtIGZyb20gdGhlIHVzZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVswXS52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZENhcmRzQXJyYXlbMV0udmFsdWUpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIFRPRE8gc291bmRzXG4gICAgICAgICAgICAqIGlmKHRoaXMucGxheXNvdW5kKXtcbiAgICAgICAgICAgICogICB0aGlzLnNvdW5kQXJyYXlbMV0ucGxheSgpO1xuICAgICAgICAgICAgKiB9XG4gICAgICAgICAgICAqICovXG5cbiAgICAgICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQgKz0gMjtcbiAgICAgICAgICAgIHRoaXMudGltZVRleHQudGV4dCA9IFwiVGltZSBsZWZ0OiBcIiArIHRoaXMudGltZUxlZnQ7XG4gICAgICAgICAgICB0aGlzLnNjb3JlVGV4dC50ZXh0ID0gXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBGaXJlIHVwIHRoZSBldmVudCBpZiBpdHMgYSBjbGllbnQgQ2FyZFxuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENhcmRzQXJyYXlbMF0uaXNDbGllbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVDbGllbnRNZXNzYWdlKFwiQ2xpZW50XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVswXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVsxXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnRpbGVzTGVmdCAtPSAyO1xuXG4gICAgICAgICAgICAvLyBXaW4gY29uZGl0aW9uXG4gICAgICAgICAgICBpZih0aGlzLnRpbGVzTGVmdCA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzQXJyYXkubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5wbGFjZUNhcmRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQbGF5UGFpcnMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9UT0RPOiBTb3VuZHNcbiAgICAgICAgICAgIC8vIGlmKHBsYXlTb3VuZCl7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zb3VuZEFycmF5WzJdLnBsYXkoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRoaXMuZ2FtZS5jYW1lcmEuc2hha2UoMC4wMSwgMTAwKTtcbiAgICAgICAgICAgIC8vIElmIHRoZXkgYXJlIG5vdCB0aGUgc2FtZSwgZmFjZSB0aGVtIG9mZlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzQXJyYXlbMF0uZnJhbWUgPSB0aGlzLmJhY2tPZlRoZUNhcmQ7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheVsxXS5mcmFtZSA9IHRoaXMuYmFja09mVGhlQ2FyZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHNBcnJheS5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGZpcmVDbGllbnRNZXNzYWdlKGNsaWVudCkge1xuICAgICAgICBhbGVydChcIlRoaXMgaXMgYSBtZXNzYWdlIGZyb20gYSBkZWZhdWx0IENsaWVudFwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVGV4dEJ1dHRvbiBmcm9tICcuLi8uLi9leHRlbnNpb25zL21lbnUvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmdPdmVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcblxuXG5cbiAgICAgICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzhlYzFlOCc7XG4gICAgICAgIHRoaXMuYmdDaXJjbGVzID0gdGhpcy5hZGQuaW1hZ2UoMCwwLCAnZ28tb3ZlcmxheScpO1xuXG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlID0gdGhpcy5hZGQuaW1hZ2UodGhpcy5nYW1lLndvcmxkLmNlbnRlclggKyAgMzAwLHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gMjAwLCAnZ28tVGV4dCcpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYICsgMzAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAxMDAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAxLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDAsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDEsXG4gICAgICAgICAgICB1cEZyYW1lOiAwLFxuICAgICAgICAgICAgbGFiZWw6ICdUcnkgYWdhaW4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMjBweCBIZWx2ZXRpY2EnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYICsgMzAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAgMjIwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b25zJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMSxcbiAgICAgICAgICAgIG91dEZyYW1lOiAwLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAxLFxuICAgICAgICAgICAgdXBGcmFtZTogMCxcbiAgICAgICAgICAgIGxhYmVsOiAnTWVudScsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcyMHB4IEhlbHZldGljYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5UGFuZycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5nYW1lT3ZlclRpdGxlKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLm1lbnUpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uLy4uL3ByZWZhYnMvcGFuZy9wbGF5ZXInO1xuaW1wb3J0IEVuZW15IGZyb20gJy4uLy4uL3ByZWZhYnMvcGFuZy9lbmVteVBhbmcnO1xuaW1wb3J0IEhVRCBmcm9tICcuLi8uLi9wcmVmYWJzL3BhbmcvaHVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheVBhbmcgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgaW5pdChjdXJyZW50Q2xpZW50KSB7XG4gICAgICAgIC8vY29tZXMgZnJvbSBtZW51LmpzXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRDbGllbnQpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDbGllbnQgPSBjdXJyZW50Q2xpZW50O1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcblxuXG5cbiAgICAgICAgLy9UT0RPOiBqc29uIFRlc3RpbmdcbiAgICAgICAgdGhpcy5iZyA9IHRoaXMuYWRkLmltYWdlKDAsIDAsJ3BhbmdCZycpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcblxuXG4gICAgICAgIC8vIC0tLS0tLS0gUExBWUVSXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IDAuOTIgKiB0aGlzLmdhbWUud29ybGQuaGVpZ2h0LFxuICAgICAgICAgICAgaGVhbHRoOiAxMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYWxpZW4nLFxuICAgICAgICAgICAgZnJhbWU6ICdhbGllbi1zdGFuZC5wbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBsYXllcik7XG5cblxuICAgICAgICAvLyAtLS0tLS0tIEVORU1ZOlxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmVuZW1pZXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5lbXlUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzEuNVxuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSAyLjU7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIC8vIC0tLS0tLS0gIUVORU1ZXG5cbiAgICAgICAgLy8gLS0tLS0tLSBzbWFsbGVyRU5FTVk6IHRoaXMgb25lcyBhcmUgY3JlYXRlZCBldmVyeSB1cGRhdGUgdGlja1xuICAgICAgICB0aGlzLnNtYWxsZXJFbmVtaWVzID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5zbWFsbGVyRW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgLy8gLS0tLS0tLSAhc21hbGxlckVORU1ZXG5cblxuICAgICAgICAvLyAtLS0tLS0tIEVORU1ZIENMSUVOVDogcmFuZG9tbHkgY2hvc2VuXG4gICAgICAgIHRoaXMuZW5lbWllc0NsaWVudCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllc0NsaWVudC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vaW5pdGlhbGl6ZSBmaXJzdCBjbGllbnRcblxuXG5cbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgxLDE1KSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXlDbGllbnQoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMCAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhbHRoOiAxNSxcbiAgICAgICAgICAgICAgICBhc3NldDogJ2xvZ29CdWJibGVzJyxcbiAgICAgICAgICAgICAgICBmcmFtZTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgwLCA4KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG5cbiAgICAgICAgLy8gLS0tLS0tLSAhRU5FTVkgQ0xJRU5UOiByYW5kb21seSBjaG9zZW5cblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05EICogMTAsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlJbnRlcnZhbCA+IDAuMiApe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCAtPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcCA9IHRoaXMuYWRkLmJpdG1hcERhdGEodGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwLmN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgdGhpcy5vdmVybGF5Qml0bWFwKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFscGhhID0gMC43NTtcblxuICAgICAgICB0aGlzLmh1ZCA9IG5ldyBIVUQoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgcGxheWVyOiB0aGlzLnBsYXllclxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtLS0tLS0tIFNPVU5EU1xuICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdwbGF5TXVzaWMnKTtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdidWxsZXRIaXQnKTtcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2VuZW15RXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgncGxheWVyRXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdnYW1lT3ZlcicpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZW5lbXlUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuXG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lID4gdGhpcy5lbmVteUludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15VGltZSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgICAgIC8vMFxuICAgICAgICAgICAgICAgIHk6IC0yNzAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgtNTAwLCA1MDApICogKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKC01NTAsMTAwKVxuXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGhlYWx0aDogOSxcbiAgICAgICAgICAgICAgICBidWxsZXRTcGVlZDogMCxcbiAgICAgICAgICAgICAgICBhc3NldDogJ2J1YmJsZXMnLFxuICAgICAgICAgICAgICAgIHNpemU6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgZnJhbWU6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMCwyKVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuZW15U2hvb3RUaW1lID4gdGhpcy5lbmVteVNob290SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIYXMgbXVlcnRvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllci5idWxsZXRzLCBbdGhpcy5lbmVtaWVzLHRoaXMuc21hbGxlckVuZW1pZXMsdGhpcy5lbmVtaWVzQ2xpZW50XSwgdGhpcy5oaXRFbmVteSwgbnVsbCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLCBbdGhpcy5lbmVtaWVzLHRoaXMuc21hbGxlckVuZW1pZXNdLCB0aGlzLmNyYXNoRW5lbXksIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLmxvYWRNZW51KCk7XG5cbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgbGV0IHRvdGFsRW5lbWllcyA9IHRoaXMuZW5lbWllcy5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICBpZih0b3RhbEVuZW1pZXMgPD0gNSl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLmFkZChlbmVteSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTbWFsbGVyRW5lbXkoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuc21hbGxlckVuZW1pZXMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBsZXQgdG90YWxFbmVtaWVzID0gdGhpcy5zbWFsbGVyRW5lbWllcy5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICBpZih0b3RhbEVuZW1pZXMgPD0gMjQpe1xuICAgICAgICAgICAgICAgIHRoaXMuc21hbGxlckVuZW1pZXMuYWRkKGVuZW15KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVuZW15Q2xpZW50KGRhdGEpIHtcblxuICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXNDbGllbnQuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBsZXQgdG90YWxFbmVtaWVzID0gdGhpcy5lbmVtaWVzQ2xpZW50LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgY29uc29sZS5sb2codG90YWxFbmVtaWVzKTtcblxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICBlbmVteSA9IG5ldyBFbmVteShkYXRhKTtcbiAgICAgICAgICAgIGlmKHRvdGFsRW5lbWllcyA8PSAxKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXNDbGllbnQuYWRkKGVuZW15KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGhpdEVmZmVjdChvYmosIGNvbG9yKSB7XG4gICAgICAgIGxldCB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4ob2JqKTtcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIoKTtcbiAgICAgICAgbGV0IGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgIGxldCBwYXJ0aWNsZVNwZWVkID0gMTAwO1xuICAgICAgICBsZXQgbWF4UGFydGljbGVzID0gMTA7XG5cbiAgICAgICAgdHdlZW4udG8oe3RpbnQ6IDB4ZmYwMDAwfSwgMTAwKTtcbiAgICAgICAgdHdlZW4ub25Db21wbGV0ZS5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgb2JqLnRpbnQgPSAweGZmZmZmZjtcbiAgICAgICAgfSk7XG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XG5cbiAgICAgICAgZW1pdHRlci54ID0gb2JqLng7XG4gICAgICAgIGVtaXR0ZXIueSA9IG9iai55O1xuICAgICAgICBlbWl0dGVyLmdyYXZpdHkgPSAwO1xuICAgICAgICBlbWl0dGVyLm1ha2VQYXJ0aWNsZXMoJ3BhcnRpY2xlJyk7XG5cbiAgICAgICAgaWYgKG9iai5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgcGFydGljbGVTcGVlZCA9IDIwMDtcbiAgICAgICAgICAgIG1heFBhcnRpY2xlcyA9IDQwO1xuICAgICAgICAgICAgY29sb3IgPSAweGZmMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIubWluUGFydGljbGVTcGVlZC5zZXRUbygtcGFydGljbGVTcGVlZCwgLXBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLm1heFBhcnRpY2xlU3BlZWQuc2V0VG8ocGFydGljbGVTcGVlZCwgcGFydGljbGVTcGVlZCk7XG4gICAgICAgIGVtaXR0ZXIuc3RhcnQodHJ1ZSwgNTAwLCBudWxsLCBtYXhQYXJ0aWNsZXMpO1xuICAgICAgICBlbWl0dGVyLnVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgICAgIGlmKGVtaXR0ZXJQaHlzaWNzVGltZSA+PSAwLjYpe1xuICAgICAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZW1pdHRlci5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnRpbnQgPSBjb2xvcik7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXRFbmVteShidWxsZXQsIGVuZW15KSB7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgZW5lbXkuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSwgYnVsbGV0LnRpbnQpO1xuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLCAwLCAwLjUpO1xuICAgICAgICAgICAgdGhpcy5odWQudXBkYXRlU2NvcmUoZW5lbXkubWF4SGVhbHRoKTtcbiAgICAgICAgICAgIGlmKCBlbmVteS5zaXplID09PSAnbWVkaXVtJykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTbWFsbGVyRW5lbXkoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGVuZW15LngsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDAsIHRoaXMuZ2FtZS53aWR0aCAtIDMwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzBcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IC0zMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLTMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8geTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgxMDAsIC01NTApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy85XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogJ2J1YmJsZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMyw1KVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU21hbGxlckVuZW15KFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlbmVteS54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZW5lbXkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0zMDAsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogJ2J1YmJsZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMyw1KVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidWxsZXQua2lsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3Jhc2hFbmVteShwbGF5ZXIsIGVuZW15KSB7XG4gICAgICAgIC8vZW5lbXkuZGFtYWdlKGVuZW15LmhlYWx0aCk7XG4gICAgICAgIGVuZW15LmRhbWFnZSgzKTtcbiAgICAgICAgLy9wbGF5ZXIuZGFtYWdlKGVuZW15LmhlYWx0aCk7XG4gICAgICAgIHBsYXllci5kYW1hZ2UoMSk7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KHBsYXllcik7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KGVuZW15KTtcbiAgICAgICAgaWYgKCFlbmVteS5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICB0aGlzLmh1ZC51cGRhdGVTY29yZShlbmVteS5tYXhIZWFsdGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaHVkLnVwZGF0ZUhlYWx0aCgpO1xuICAgICAgICBpZiAoIXBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMztcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICBsZXQgdGltZXIgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUodGhpcy5nYW1lLCB0cnVlKTtcbiAgICAgICAgdGltZXIuYWRkKDMwMDAsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlclNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnUGFuZ092ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgbG9hZE1lbnUoKXtcbiAgICAgICAgbGV0IGVzY0tleSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLkVTQyk7XG4gICAgICAgIGlmKGVzY0tleSl7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDbGllbnQrKztcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVmFyMiA9IFwiT2pldGVcIjtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmtpbGwoKTtcbiAgICAgICAgICAgIC8vc3RhcnRzIHRoZSBzdGF0ZSB3aXRoIGN1c3RvbSB2YXJpYWJsZXNcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnTWVudScsIHRydWUsIGZhbHNlLCB0aGlzLmN1cnJlbnRDbGllbnQsdGhpcy5jdXN0b21WYXIyKTtcblxuXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIHByZWxvYWQoKSB7XG5cbiAgICAgICAgdGhpcy5sb2FkZXJCZyA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclksICdsb2FkZXJCZycpO1xuICAgICAgICB0aGlzLmxvYWRlckJhciA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclksICdsb2FkZXJCYXInKTtcbiAgICAgICAgdGhpcy5sb2FkZXJCZy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5sb2FkZXJCYXIuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5sb2FkZXJCYXIpO1xuXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZ29JbnRyb0xvZ28nLCAnaW1nL2dlbmVyaWMvZ29JbnRyby1sb2dvLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JnQ2xvdWRzJywnaW1nL2dlbmVyaWMvYmdDbG91ZHMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYnV0dG9ucycsJ2ltZy9nZW5lcmljL3llbGxvd0J1dHRvbi5wbmcnLDM2MCw5Myw0KTtcblxuICAgICAgICAvLyBTaG9vdGVyXG5cblxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdpbWcvcGFuZy9idWxsZXQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFydGljbGUnLCAnaW1nL3BhbmcvcGFydGljbGUuZ2lmJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaGVhbHRoYmFyJywgJ2ltZy9wYW5nL2hlYWx0aGJhci5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdodWRCZycsICdpbWcvcGFuZy9odWQtYmcucG5nJyk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5TXVzaWMnLCBbJ2F1ZGlvL3Nob290ZXIvbXVzaWMvcGxheS5tcDMnXSk7XG4gICAgICAgIC8vIVNob290ZXJcblxuICAgICAgICAvLyBNaXNjIHNvdW5kc1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVNdXNpYycsIFsnYXVkaW8vc2hvb3Rlci9tdXNpYy9tZW51Lm1wMyddKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVPdmVyJywgWydhdWRpby9zaG9vdGVyL3NvdW5kL21lbnUtb3Zlci5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudU91dCcsIFsnYXVkaW8vc2hvb3Rlci9zb3VuZC9tZW51LW91dC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudURvd24nLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvbWVudS1jbGljay5tcDMnXSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdidWxsZXRIaXQnLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvYnVsbGV0LWhpdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZW5lbXlTaG90JywgWydhdWRpby9zaG9vdGVyL3NvdW5kL2VuZW15LXNob3QubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2VuZW15RXhwbG9zaW9uJywgWydhdWRpby9zaG9vdGVyL3NvdW5kL2VuZW15LWV4cGxvc2lvbi5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyU2hvdCcsIFsnYXVkaW8vc2hvb3Rlci9zb3VuZC9wbGF5ZXItc2hvdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyRXhwbG9zaW9uJywgWydhdWRpby9zaG9vdGVyL3NvdW5kL3BsYXllci1leHBsb3Npb24ubXAzJ10pO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZ2FtZU92ZXInLCBbJ2F1ZGlvL3Nob290ZXIvc291bmQvZ2FtZS1vdmVyLm1wMyddKTtcbiAgICAgICAgLy8gTWlzYyBzb3VuZHNcblxuXG4gICAgICAgIC8vUGFuZ1xuXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFuZ0JnJywgJ2ltZy9wYW5nL3BhbmdCZy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdnby1vdmVybGF5JywgJ2ltZy9wYW5nL2dhbWVPdmVyLWJnLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dvLVRleHQnLCAnaW1nL3BhbmcvZ2FtZU92ZXItdGV4dC5wbmcnKTtcblxuXG4gICAgICAgIHRoaXMubG9hZC5hdGxhc0pTT05IYXNoKCdidWJibGVzJywnaW1nL3Bhbmcvc3ByaXRlc2hlZXQvYnViYmxlcy5wbmcnLCdkYXRhL3Bhbmcvc3ByaXRlc2hlZXQvYnViYmxlcy5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdGxhc0pTT05IYXNoKCdsb2dvQnViYmxlcycsJ2ltZy9wYW5nL3Nwcml0ZXNoZWV0L2xvZ29CdWJibGVzLnBuZycsJ2RhdGEvcGFuZy9zcHJpdGVzaGVldC9sb2dvQnViYmxlcy5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdGxhc0pTT05IYXNoKCdhbGllbicsJ2ltZy9wYW5nL3Nwcml0ZXNoZWV0L2FsaWVuLnBuZycsJ2RhdGEvcGFuZy9zcHJpdGVzaGVldC9hbGllbi5qc29uJyk7XG5cbiAgICAgICAgLy8hUGFuZ1xuXG5cbiAgICAgICAgLy8gbWF0Y2hpbmcgcGFpcnNcblxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3RpbGVzJywnaW1nL3BhaXJzL3RpbGVzQ2xpZW50My5wbmcnLCAxNTAsIDE3MCwgMTUpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JnJywgJ2ltZy9wYWlycy9iZy5qcGcnKTtcbiAgICAgICAgLy8gbWF0Y2hpbmcgcGFpcnNcbiAgICB9XG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVGV4dEJ1dHRvbiBmcm9tICcuLi8uLi9leHRlbnNpb25zL21lbnUvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdHYW1lIG92ZXInLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdUcnkgYWdhaW4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZKzMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi8uLi9wcmVmYWJzL3Nob290ZXIvcGxheWVyJztcbmltcG9ydCBFbmVteSBmcm9tICcuLi8uLi9wcmVmYWJzL3Nob290ZXIvZW5lbXknO1xuaW1wb3J0IEhVRCBmcm9tICcuLi8uLi9wcmVmYWJzL3BhbmcvaHVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vZmFyYmFjayA9IGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5mYXJiYWNrID0gdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLCA4MDAsIDIzODAsICdmYXJiYWNrJyk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAwO1xuXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiAwLjkyICogdGhpcy5nYW1lLndvcmxkLmhlaWdodCxcbiAgICAgICAgICAgIGhlYWx0aDogMTAwLFxuICAgICAgICAgICAgYXNzZXQ6ICdzbWFsbGZpZ2h0ZXInLFxuICAgICAgICAgICAgZnJhbWU6IDFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBsYXllcik7XG5cbiAgICAgICAgdGhpcy5odWQgPSBuZXcgSFVEKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHBsYXllcjogdGhpcy5wbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vblVwLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbmVteVRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSAxLjU7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdEludGVydmFsID0gMC4xNjtcblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05EICogMTAsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlJbnRlcnZhbCA+IDAuOSApe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCAtPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcCA9IHRoaXMuYWRkLmJpdG1hcERhdGEodGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwLmN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgdGhpcy5vdmVybGF5Qml0bWFwKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFscGhhID0gMC43NTtcblxuICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdwbGF5TXVzaWMnKTtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdidWxsZXRIaXQnKTtcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2VuZW15RXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgncGxheWVyRXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdnYW1lT3ZlcicpO1xuXG4gICAgICAgIC8vdGhpcy5tdXNpYy5sb29wRnVsbCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLmVuZW15VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5lbmVteVNob290VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lID4gdGhpcy5lbmVteUludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15VGltZSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMCAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhbHRoOiA5LFxuICAgICAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgICAgICBhc3NldDogJ2FsaWVuJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmVteVNob290VGltZSA+IHRoaXMuZW5lbXlTaG9vdEludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoQWxpdmUoZW5lbXkgPT4gZW5lbXkuc2hvb3QoKSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllclNob290VGltZSA+IHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvb3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLmJ1bGxldHMsIHRoaXMuZW5lbWllcywgdGhpcy5oaXRFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIsIHRoaXMuZW5lbWllcywgdGhpcy5jcmFzaEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllciwgZW5lbXkuYnVsbGV0cywgdGhpcy5oaXRQbGF5ZXIsIG51bGwsIHRoaXMpKTtcblxuICAgICAgICB0aGlzLmZhcmJhY2sudGlsZVBvc2l0aW9uLnkgKz0gMztcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcblxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICBlbmVteSA9IG5ldyBFbmVteShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5hZGQoZW5lbXkpO1xuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGhpdEVmZmVjdChvYmosIGNvbG9yKSB7XG4gICAgICAgIGxldCB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4ob2JqKTtcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIoKTtcbiAgICAgICAgbGV0IGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgIGxldCBwYXJ0aWNsZVNwZWVkID0gMTAwO1xuICAgICAgICBsZXQgbWF4UGFydGljbGVzID0gMTA7XG5cbiAgICAgICAgdHdlZW4udG8oe3RpbnQ6IDB4ZmYwMDAwfSwgMTAwKTtcbiAgICAgICAgdHdlZW4ub25Db21wbGV0ZS5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgb2JqLnRpbnQgPSAweGZmZmZmZjtcbiAgICAgICAgfSk7XG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XG5cbiAgICAgICAgZW1pdHRlci54ID0gb2JqLng7XG4gICAgICAgIGVtaXR0ZXIueSA9IG9iai55O1xuICAgICAgICBlbWl0dGVyLmdyYXZpdHkgPSAwO1xuICAgICAgICBlbWl0dGVyLm1ha2VQYXJ0aWNsZXMoJ3BhcnRpY2xlJyk7XG5cbiAgICAgICAgaWYgKG9iai5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgcGFydGljbGVTcGVlZCA9IDIwMDtcbiAgICAgICAgICAgIG1heFBhcnRpY2xlcyA9IDQwO1xuICAgICAgICAgICAgY29sb3IgPSAweGZmMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIubWluUGFydGljbGVTcGVlZC5zZXRUbygtcGFydGljbGVTcGVlZCwgLXBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLm1heFBhcnRpY2xlU3BlZWQuc2V0VG8ocGFydGljbGVTcGVlZCwgcGFydGljbGVTcGVlZCk7XG4gICAgICAgIGVtaXR0ZXIuc3RhcnQodHJ1ZSwgNTAwLCBudWxsLCBtYXhQYXJ0aWNsZXMpO1xuICAgICAgICBlbWl0dGVyLnVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgICAgIGlmKGVtaXR0ZXJQaHlzaWNzVGltZSA+PSAwLjYpe1xuICAgICAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZW1pdHRlci5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnRpbnQgPSBjb2xvcik7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXRFbmVteShidWxsZXQsIGVuZW15KSB7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgZW5lbXkuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSwgYnVsbGV0LnRpbnQpO1xuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIHRoaXMuaHVkLnVwZGF0ZVNjb3JlKGVuZW15Lm1heEhlYWx0aCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVsbGV0LmtpbGwoKTtcbiAgICB9XG5cbiAgICBoaXRQbGF5ZXIocGxheWVyLCBidWxsZXQpIHtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICBwbGF5ZXIuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QocGxheWVyLCBidWxsZXQudGludCk7XG4gICAgICAgIGlmICghcGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBidWxsZXQua2lsbCgpO1xuICAgIH1cblxuICAgIGNyYXNoRW5lbXkocGxheWVyLCBlbmVteSkge1xuICAgICAgICBlbmVteS5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgcGxheWVyLmRhbWFnZShlbmVteS5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChwbGF5ZXIpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSk7XG4gICAgICAgIGlmICghZW5lbXkuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgdGhpcy5odWQudXBkYXRlU2NvcmUoZW5lbXkubWF4SGVhbHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDM7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgbGV0IHRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKHRoaXMuZ2FtZSwgdHJ1ZSk7XG4gICAgICAgIHRpbWVyLmFkZCgzMDAwLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ092ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgfVxuXG59XG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSnpjbU12YW5NdlpYaDBaVzV6YVc5dWN5OXRaVzUxTDNSbGVIUmlkWFIwYjI0dWFuTWlMQ0p6Y21NdmFuTXZaWGgwWlc1emFXOXVjeTl3WVdseWN5OWpZWEprWW5WMGRHOXVMbXB6SWl3aWMzSmpMMnB6TDJkaGJXVXVhbk1pTENKemNtTXZhbk12Y0hKbFptRmljeTl3WVc1bkwySjFiR3hsZEM1cWN5SXNJbk55WXk5cWN5OXdjbVZtWVdKekwzQmhibWN2Wlc1bGJYbFFZVzVuTG1weklpd2ljM0pqTDJwekwzQnlaV1poWW5NdmNHRnVaeTlvZFdRdWFuTWlMQ0p6Y21NdmFuTXZjSEpsWm1GaWN5OXdZVzVuTDNCc1lYbGxjaTVxY3lJc0luTnlZeTlxY3k5d2NtVm1ZV0p6TDNOb2IyOTBaWEl2Wlc1bGJYa3Vhbk1pTENKemNtTXZhbk12Y0hKbFptRmljeTl6YUc5dmRHVnlMM0JzWVhsbGNpNXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZZbTl2ZEM1cWN5SXNJbk55WXk5cWN5OXpkR0YwWlhNdmFXNWtaWGd1YW5NaUxDSnpjbU12YW5NdmMzUmhkR1Z6TDIxbGJuVXVhbk1pTENKemNtTXZhbk12YzNSaGRHVnpMM0JoYVhKekwzQmhhWEp6VDNabGNpNXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZjR0ZwY25NdmNHeGhlVkJoYVhKekxtcHpJaXdpYzNKakwycHpMM04wWVhSbGN5OXdZVzVuTDNCaGJtZFBkbVZ5TG1weklpd2ljM0pqTDJwekwzTjBZWFJsY3k5d1lXNW5MM0JzWVhsUVlXNW5MbXB6SWl3aWMzSmpMMnB6TDNOMFlYUmxjeTl3Y21Wc2IyRmtMbXB6SWl3aWMzSmpMMnB6TDNOMFlYUmxjeTl6YUc5dmRHVnlMMjkyWlhJdWFuTWlMQ0p6Y21NdmFuTXZjM1JoZEdWekwzTm9iMjkwWlhJdmNHeGhlUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096czdPenRKUTBGeFFpeFZPenM3UVVGRmFrSXNPRUpCUVhGSU8wRkJRVUVzV1VGQmRrY3NTVUZCZFVjc1VVRkJka2NzU1VGQmRVYzdRVUZCUVN4WlFVRnFSeXhEUVVGcFJ5eFJRVUZxUnl4RFFVRnBSenRCUVVGQkxGbEJRVGxHTEVOQlFUaEdMRkZCUVRsR0xFTkJRVGhHTzBGQlFVRXNXVUZCTTBZc1MwRkJNa1lzVVVGQk0wWXNTMEZCTWtZN1FVRkJRU3haUVVGd1JpeFJRVUZ2Uml4UlFVRndSaXhSUVVGdlJqdEJRVUZCTEZsQlFURkZMR1ZCUVRCRkxGRkJRVEZGTEdWQlFUQkZPMEZCUVVFc1dVRkJla1FzVTBGQmVVUXNVVUZCZWtRc1UwRkJlVVE3UVVGQlFTeFpRVUU1UXl4UlFVRTRReXhSUVVFNVF5eFJRVUU0UXp0QlFVRkJMRmxCUVhCRExGTkJRVzlETEZGQlFYQkRMRk5CUVc5RE8wRkJRVUVzV1VGQmVrSXNUMEZCZVVJc1VVRkJla0lzVDBGQmVVSTdRVUZCUVN4WlFVRm9RaXhMUVVGblFpeFJRVUZvUWl4TFFVRm5RanRCUVVGQkxGbEJRVlFzUzBGQlV5eFJRVUZVTEV0QlFWTTdPMEZCUVVFN08wRkJRVUVzTkVoQlF6TkhMRWxCUkRKSExFVkJRM0pITEVOQlJIRkhMRVZCUTJ4SExFTkJSR3RITEVWQlF5OUdMRXRCUkN0R0xFVkJRM2hHTEZGQlJIZEdMRVZCUXpsRkxHVkJSRGhGTEVWQlF6ZEVMRk5CUkRaRUxFVkJRMnhFTEZGQlJHdEVMRVZCUTNoRExGTkJSSGRETEVWQlF6ZENMRTlCUkRaQ096dEJRVWRxU0N4alFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGYUxFTkJRV3RDTEVkQlFXeENPenRCUVVWQkxHTkJRVXNzUzBGQlRDeEhRVUZoTEV0QlFXSTdRVUZEUVN4alFVRkxMRXRCUVV3c1IwRkJZU3hMUVVGaU8wRkJRMEVzWTBGQlN5eEpRVUZNTEVkQlFWa3NTVUZCU1N4UFFVRlBMRWxCUVZnc1EwRkJaMElzVFVGQlN5eEpRVUZ5UWl4RlFVRXlRaXhEUVVFelFpeEZRVUU0UWl4RFFVRTVRaXhGUVVGcFF5eE5RVUZMTEV0QlFYUkRMRVZCUVRaRExFMUJRVXNzUzBGQmJFUXNRMEZCV2p0QlFVTkJMR05CUVVzc1NVRkJUQ3hEUVVGVkxFMUJRVllzUTBGQmFVSXNTMEZCYWtJc1EwRkJkVUlzUjBGQmRrSTdPMEZCUlVFc1kwRkJTeXhSUVVGTUxFTkJRV01zVFVGQlN5eEpRVUZ1UWp0QlFWWnBTRHRCUVZkd1NEczdPMFZCWW0xRExFOUJRVThzVFRzN2EwSkJRVEZDTEZVN096czdPenM3T3pzN096czdPenRKUTBGQkxGVTdPenRCUVVWcVFpdzRRa0ZCYzBnN1FVRkJRU3haUVVGNFJ5eEpRVUYzUnl4UlFVRjRSeXhKUVVGM1J6dEJRVUZCTEZsQlFXeEhMRU5CUVd0SExGRkJRV3hITEVOQlFXdEhPMEZCUVVFc1dVRkJMMFlzUTBGQkswWXNVVUZCTDBZc1EwRkJLMFk3UVVGQlFTeFpRVUUxUml4TFFVRTBSaXhSUVVFMVJpeExRVUUwUmp0QlFVRkJMRmxCUVhKR0xGRkJRWEZHTEZGQlFYSkdMRkZCUVhGR08wRkJRVUVzV1VGQk0wVXNaVUZCTWtVc1VVRkJNMFVzWlVGQk1rVTdRVUZCUVN4WlFVRXhSQ3hUUVVFd1JDeFJRVUV4UkN4VFFVRXdSRHRCUVVGQkxGbEJRUzlETEZGQlFTdERMRkZCUVM5RExGRkJRU3RETzBGQlFVRXNXVUZCY2tNc1UwRkJjVU1zVVVGQmNrTXNVMEZCY1VNN1FVRkJRU3haUVVFeFFpeFBRVUV3UWl4UlFVRXhRaXhQUVVFd1FqdEJRVUZCTEZsQlFXeENMRXRCUVd0Q0xGRkJRV3hDTEV0QlFXdENPMEZCUVVFc1dVRkJXQ3hSUVVGWExGRkJRVmdzVVVGQlZ6czdRVUZCUVRzN1FVRkJRU3cwU0VGRE5VY3NTVUZFTkVjc1JVRkRkRWNzUTBGRWMwY3NSVUZEYmtjc1EwRkViVWNzUlVGRGFFY3NTMEZFWjBjc1JVRkRla1lzVVVGRWVVWXNSVUZETDBVc1pVRkVLMFVzUlVGRE9VUXNVMEZFT0VRc1JVRkRia1FzVVVGRWJVUXNSVUZEZWtNc1UwRkVlVU1zUlVGRE9VSXNUMEZFT0VJN08wRkJSMnhJTEdOQlFVc3NUVUZCVEN4RFFVRlpMRXRCUVZvc1EwRkJhMElzUjBGQmJFSTdRVUZEUVR0QlFVTkJMR05CUVVzc1VVRkJUQ3hIUVVGblFpeFJRVUZvUWp0QlFVTkJMR05CUVVzc1MwRkJUQ3hIUVVGaExFdEJRV0k3UVVGRFFTeGpRVUZMTEZGQlFVd3NSMEZCWjBJc1VVRkJhRUk3UVVGUWEwZzdRVUZSY2tnN096dEZRVlp0UXl4UFFVRlBMRTA3TzJ0Q1FVRXhRaXhWT3pzN096dEJRMEZ5UWpzN1NVRkJXU3hOT3pzN08wRkJRMW9zU1VGQlRTeFBRVUZQTEVsQlFVa3NUMEZCVHl4SlFVRllMRU5CUVdkQ0xFbEJRV2hDTEVWQlFYTkNMRWRCUVhSQ0xFVkJRVEpDTEU5QlFVOHNTVUZCYkVNc1EwRkJZanM3UVVGRlFTeFBRVUZQTEVsQlFWQXNRMEZCV1N4TlFVRmFMRVZCUVc5Q0xFOUJRWEJDTEVOQlFUUkNPMEZCUVVFc1UwRkJVeXhMUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVOQlFXVXNTMEZCWml4RlFVRnpRaXhQUVVGUExFdEJRVkFzUTBGQmRFSXNRMEZCVkR0QlFVRkJMRU5CUVRWQ096dEJRVVZCTEV0QlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVFVGQmFrSTdPenM3T3pzN096czdPenM3T3p0SlEweHhRaXhOT3pzN1FVRkZha0lzTUVKQlFUUkVPMEZCUVVFc1dVRkJPVU1zU1VGQk9FTXNVVUZCT1VNc1NVRkJPRU03UVVGQlFTeFpRVUY0UXl4RFFVRjNReXhSUVVGNFF5eERRVUYzUXp0QlFVRkJMRmxCUVhKRExFTkJRWEZETEZGQlFYSkRMRU5CUVhGRE8wRkJRVUVzV1VGQmJFTXNTMEZCYTBNc1VVRkJiRU1zUzBGQmEwTTdRVUZCUVN4WlFVRXpRaXhOUVVFeVFpeFJRVUV6UWl4TlFVRXlRanRCUVVGQkxEWkNRVUZ1UWl4SlFVRnRRanRCUVVGQkxGbEJRVzVDTEVsQlFXMUNMRFpDUVVGYUxGRkJRVms3TzBGQlFVRTdPMEZCUVVFc2IwaEJRMnhFTEVsQlJHdEVMRVZCUXpWRExFTkJSRFJETEVWQlEzcERMRU5CUkhsRExFVkJRM1JETEV0QlJITkRPenRCUVVkNFJDeGpRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRmFMRU5CUVd0Q0xFZEJRV3hDTzBGQlEwRXNZMEZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeEhRVUZxUWp0QlFVTkJMR05CUVVzc1RVRkJUQ3hIUVVGakxFMUJRV1E3UVVGRFFTeGpRVUZMTEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1kwRkJTeXhuUWtGQlRDeEhRVUYzUWl4SlFVRjRRanRCUVVOQkxHTkJRVXNzWlVGQlRDeEhRVUYxUWl4SlFVRjJRanRCUVZKM1JEdEJRVk16UkRzN08wVkJXQ3RDTEU5QlFVOHNUVHM3YTBKQlFYUkNMRTA3T3pzN096czdPenM3T3pzN1FVTkJja0k3T3pzN096czdPenM3T3p0QlFVTkJPMGxCUTNGQ0xFczdPenRCUVVWcVFpeDVRa0ZCZDBjN1FVRkJRU3haUVVFeFJpeEpRVUV3Uml4UlFVRXhSaXhKUVVFd1JqdEJRVUZCTEZsQlFYQkdMRU5CUVc5R0xGRkJRWEJHTEVOQlFXOUdPMEZCUVVFc1dVRkJha1lzUTBGQmFVWXNVVUZCYWtZc1EwRkJhVVk3UVVGQlFTeFpRVUU1UlN4TFFVRTRSU3hSUVVFNVJTeExRVUU0UlR0QlFVRkJMRmxCUVhaRkxFdEJRWFZGTEZGQlFYWkZMRXRCUVhWRk8wRkJRVUVzV1VGQmFFVXNUVUZCWjBVc1VVRkJhRVVzVFVGQlowVTdRVUZCUVN4WlFVRjZSQ3hKUVVGNVJDeFJRVUY2UkN4SlFVRjVSRHRCUVVGQkxGbEJRVzVFTEZkQlFXMUVMRkZCUVc1RUxGZEJRVzFFTzBGQlFVRXNXVUZCZEVNc1QwRkJjME1zVVVGQmRFTXNUMEZCYzBNN1FVRkJRU3haUVVFM1FpeFpRVUUyUWl4UlFVRTNRaXhaUVVFMlFqdEJRVUZCTEZsQlFXWXNWMEZCWlN4UlFVRm1MRmRCUVdVN08wRkJRVUU3TzBGQlFVRXNhMGhCUXpsR0xFbEJSRGhHTEVWQlEzaEdMRU5CUkhkR0xFVkJRM0pHTEVOQlJIRkdMRVZCUTJ4R0xFdEJSR3RHTEVWQlF6TkZMRXRCUkRKRk96dEJRVWR3Unl4alFVRkxMRWxCUVV3c1IwRkJXU3hKUVVGYU8wRkJRMEVzWTBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRnJRaXhIUVVGc1FqczdRVUZGUVN4alFVRkxMRTFCUVV3c1IwRkJZeXhOUVVGa08wRkJRMEVzWTBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVdwQ08wRkJRMEVzWTBGQlN5eEpRVUZNTEVkQlFWa3NTVUZCV2pzN1FVRkZRVHRCUVVOQkxHTkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1RVRkJiRUlzUTBGQmVVSXNUVUZCZWtJN1FVRkRRU3hqUVVGTExFbEJRVXdzUTBGQlZTeHJRa0ZCVml4SFFVRXJRaXhKUVVFdlFqdEJRVU5CTEdOQlFVc3NTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkJhMElzUjBGQmJFSXNRMEZCYzBJc1IwRkJkRUlzUlVGQk1rSXNTVUZCTTBJN1FVRkRRU3hqUVVGTExFbEJRVXdzUTBGQlZTeE5RVUZXTEVOQlFXbENMRWRCUVdwQ0xFTkJRWEZDTEVOQlFYSkNPenRCUVVWQk8wRkJRMEVzWTBGQlN5eFhRVUZNTEVkQlFXMUNMRmRCUVc1Q08wRkJRMEVzWTBGQlN5eFBRVUZNTEVkQlFXVXNUMEZCWmp0QlFVTkJMR05CUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZ1UWpzN1FVRnVRbTlITzBGQmMwSjJSenM3T3p0cFEwRkZVU3hEUVVGRk96czdLMEpCU1Vvc1RTeEZRVUZSTzBGQlExZ3NhVWhCUVdFc1RVRkJZanRCUVVOSU96czdjVU5CUlRKRE8wRkJRVUVzWjBKQlFYQkRMRU5CUVc5RExGTkJRWEJETEVOQlFXOURPMEZCUVVFc1owSkJRV3BETEVOQlFXbERMRk5CUVdwRExFTkJRV2xETzBGQlFVRXNaMEpCUVRsQ0xFMUJRVGhDTEZOQlFUbENMRTFCUVRoQ08wRkJRVUVzWjBKQlFYUkNMRmRCUVhOQ0xGTkJRWFJDTEZkQlFYTkNPMEZCUVVFc1owSkJRVlFzUzBGQlV5eFRRVUZVTEV0QlFWTTdPMEZCUTNoRExHZElRVUZaTEVOQlFWb3NSVUZCWlN4RFFVRm1MRVZCUVd0Q0xFMUJRV3hDTzBGQlEwRXNhVUpCUVVzc1YwRkJUQ3hIUVVGdFFpeFhRVUZ1UWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFJRVUZXTEVOQlFXMUNMRU5CUVc1Q0xFZEJRWFZDTEUxQlFVMHNRMEZCTjBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNVVUZCVml4RFFVRnRRaXhEUVVGdVFpeEhRVUYxUWl4TlFVRk5MRU5CUVRkQ08wRkJRMGc3T3pzN1JVRjJRemhDTEU5QlFVOHNUVHM3YTBKQlFYSkNMRXM3T3pzN096czdPenM3TzBGRFJuSkNPenM3T3pzN096czdPenM3U1VGRGNVSXNSenM3TzBGQlEycENMSFZDUVVFNFFqdEJRVUZCTEZsQlFXaENMRWxCUVdkQ0xGRkJRV2hDTEVsQlFXZENPMEZCUVVFc1dVRkJWaXhOUVVGVkxGRkJRVllzVFVGQlZUczdRVUZCUVRzN1FVRkJRU3c0UjBGRGNFSXNTVUZFYjBJN08wRkJSVEZDTEdOQlFVc3NTVUZCVEN4SFFVRlpMRWxCUVZvN1FVRkRRU3hqUVVGTExFMUJRVXdzUjBGQll5eE5RVUZrTzBGQlEwRXNZMEZCU3l4RlFVRk1MRWRCUVZVc1NVRkJTU3hQUVVGUExFdEJRVmdzUTBGQmFVSXNUVUZCU3l4SlFVRjBRaXhGUVVFMFFpeERRVUUxUWl4RlFVRXJRaXhEUVVFdlFpeEZRVUZyUXl4UFFVRnNReXhEUVVGV08wRkJRMEVzWTBGQlN5eExRVUZNTEVkQlFXRXNSMEZCWWp0QlFVTkJMR05CUVVzc1UwRkJUQ3hIUVVGcFFpeEpRVUZKTEU5QlFVOHNUVUZCV0N4RFFVRnJRaXhOUVVGTExFbEJRWFpDTEVWQlFUWkNMRU5CUVRkQ0xFVkJRV2RETEVOQlFXaERMRVZCUVcxRExGZEJRVzVETEVOQlFXcENPMEZCUTBFc1kwRkJTeXhUUVVGTUxFTkJRV1VzUzBGQlppeERRVUZ4UWl4TFFVRnlRaXhEUVVFeVFpeExRVUV6UWl4RlFVRnJReXhGUVVGc1F6czdRVUZGUVN4alFVRkxMRXRCUVV3c1IwRkJZU3hEUVVGaU8wRkJRMEVzWTBGQlN5eFZRVUZNTEVkQlFXdENMRk5CUVd4Q08wRkJRMEVzWTBGQlN5eFRRVUZNTEVkQlFXbENMRWxCUVVrc1QwRkJUeXhKUVVGWUxFTkJRV2RDTEUxQlFVc3NTVUZCY2tJc1JVRkJNa0lzUlVGQk0wSXNSVUZCSzBJc1JVRkJMMElzUlVGQmJVTXNUVUZCU3l4VlFVRk1MRWRCUVd0Q0xFMUJRVXNzUzBGQk1VUXNSVUZCYVVVN1FVRkRPVVVzYTBKQlFVMHNZMEZFZDBVN1FVRkZPVVVzYTBKQlFVMHNUMEZHZDBVN1FVRkhPVVVzYlVKQlFVODdPMEZCU0hWRkxGTkJRV3BGTEVOQlFXcENPenRCUVU5QkxHTkJRVXNzUjBGQlRDeERRVUZUTEUxQlFVc3NSVUZCWkR0QlFVTkJMR05CUVVzc1IwRkJUQ3hEUVVGVExFMUJRVXNzVTBGQlpEdEJRVU5CTEdOQlFVc3NSMEZCVEN4RFFVRlRMRTFCUVVzc1UwRkJaRHRCUVhCQ01FSTdRVUZ4UWpkQ096czdPM0ZEUVVWWkxFMHNSVUZCVVR0QlFVTnFRaXhwUWtGQlN5eFRRVUZNTEVOQlFXVXNTVUZCWml4RFFVRnZRaXhKUVVGSkxFOUJRVThzVTBGQldDeERRVUZ4UWl4RFFVRnlRaXhGUVVGM1FpeERRVUY0UWl4RlFVRTBRaXhMUVVGTExFMUJRVXdzUTBGQldTeE5RVUZhTEVkQlFYRkNMRXRCUVVzc1RVRkJUQ3hEUVVGWkxGTkJRV3hETEVkQlFTdERMRXRCUVVzc1MwRkJMMFVzUlVGQmMwWXNSVUZCZEVZc1EwRkJjRUk3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1ZVRkJaanRCUVVOSU96czdiME5CUlZjc1RTeEZRVUZSTzBGQlEyaENMR2xDUVVGTExFdEJRVXdzU1VGQll5eE5RVUZrTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUjBGQmMwSXNTMEZCU3l4VlFVRk1MRWRCUVcxQ0xFdEJRVXNzUzBGQlRDeEhRVUZoTEVWQlFYUkVPMEZCUTBnN096czdSVUZvUXpSQ0xFOUJRVThzU3pzN2EwSkJRVzVDTEVjN1FVRnJRM0JDT3pzN096czdPenM3T3pzN08wRkRia05FT3pzN096czdPenM3T3pzN1NVRkZjVUlzVFRzN08wRkJSV3BDTERCQ1FVRnJSRHRCUVVGQkxGbEJRWEJETEVsQlFXOURMRkZCUVhCRExFbEJRVzlETzBGQlFVRXNXVUZCT1VJc1EwRkJPRUlzVVVGQk9VSXNRMEZCT0VJN1FVRkJRU3haUVVFelFpeERRVUV5UWl4UlFVRXpRaXhEUVVFeVFqdEJRVUZCTEZsQlFYaENMRXRCUVhkQ0xGRkJRWGhDTEV0QlFYZENPMEZCUVVFc1dVRkJha0lzUzBGQmFVSXNVVUZCYWtJc1MwRkJhVUk3UVVGQlFTeFpRVUZXTEUxQlFWVXNVVUZCVml4TlFVRlZPenRCUVVGQk96dEJRVUZCTEc5SVFVTjRReXhKUVVSM1F5eEZRVU5zUXl4RFFVUnJReXhGUVVNdlFpeERRVVFyUWl4RlFVTTFRaXhMUVVRMFFpeEZRVU55UWl4TFFVUnhRanM3UVVGSE9VTXNZMEZCU3l4SlFVRk1MRWRCUVZrc1NVRkJXanM3UVVGRlFTeGpRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRmFMRU5CUVd0Q0xFZEJRV3hDTzBGQlEwRXNZMEZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeEhRVUZxUWpzN1FVRkZRU3hqUVVGTExFMUJRVXdzUjBGQll5eE5RVUZrTzBGQlEwRXNZMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRV3BDTzBGQlEwRXNZMEZCU3l4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVGclFpeE5RVUZzUWl4RFFVRjVRaXhOUVVGNlFqczdRVUZGUVR0QlFVTkJMR05CUVVzc1NVRkJUQ3hEUVVGVkxFOUJRVllzUTBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUjBGQmRFSTdRVUZEUVN4alFVRkxMRWxCUVV3c1EwRkJWU3hyUWtGQlZpeEhRVUVyUWl4SlFVRXZRanRCUVVOQk96dEJRVVZCTEdOQlFVc3NUMEZCVEN4SFFVRmxMRTFCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eExRVUZrTEVWQlFXWTdRVUZEUVN4alFVRkxMRTlCUVV3c1EwRkJZU3hWUVVGaUxFZEJRVEJDTEVsQlFURkNPMEZCUTBFc1kwRkJTeXhYUVVGTUxFZEJRVzFDTEVOQlFVTXNSMEZCY0VJN1FVRkRRU3hqUVVGTExHVkJRVXdzUjBGQmRVSXNRMEZCZGtJN1FVRkRRU3hqUVVGTExHMUNRVUZNTEVkQlFUSkNMRWxCUVROQ096dEJRVWxCTEdOQlFVc3NVMEZCVEN4SFFVRnBRaXhOUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNTMEZCWkN4RFFVRnZRaXhaUVVGd1FpeERRVUZxUWpzN1FVRkZRU3hqUVVGTExGVkJRVXdzUTBGQlowSXNSMEZCYUVJc1EwRkJiMElzVjBGQmNFSXNSVUZCWjBNc1EwRkJReXh0UWtGQlJDeEZRVUZ4UWl4dFFrRkJja0lzUTBGQmFFTXNSVUZCTUVVc1JVRkJNVVVzUlVGQk5rVXNTMEZCTjBVN1FVRkRRU3hqUVVGTExGVkJRVXdzUTBGQlowSXNSMEZCYUVJc1EwRkJiMElzVlVGQmNFSXNSVUZCSzBJc1EwRkJReXh0UWtGQlJDeEZRVUZ4UWl4dFFrRkJja0lzUTBGQkwwSXNSVUZCZVVVc1JVRkJla1VzUlVGQk5FVXNTMEZCTlVVN1FVRkRRU3hqUVVGTExGVkJRVXdzUTBGQlowSXNSMEZCYUVJc1EwRkJiMElzVDBGQmNFSXNSVUZCTkVJc1EwRkJReXh2UWtGQlJDeEZRVUZ6UWl4dlFrRkJkRUlzUTBGQk5VSXNSVUZCZDBVc1EwRkJlRVVzUlVGQk1FVXNTMEZCTVVVN1FVRTNRamhETzBGQk9FSnFSRHM3T3p0cFEwRkRVVHRCUVVOTUxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UlFVRldMRU5CUVcxQ0xFTkJRVzVDTEVkQlFYVkNMRU5CUVhaQ08wRkJRMEVzYVVKQlFVc3NaVUZCVEN4SlFVRjNRaXhMUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNZMEZCZGtNN08wRkJSMEVzWjBKQlFVa3NWVUZCVlN4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFMUJRWHBDTEVOQlFXZERMRTlCUVU4c1VVRkJVQ3hEUVVGblFpeEpRVUZvUkN4RFFVRmtPMEZCUTBFc1owSkJRVWtzVjBGQlZ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGRkJRV2hDTEVOQlFYbENMRTFCUVhwQ0xFTkJRV2RETEU5QlFVOHNVVUZCVUN4RFFVRm5RaXhMUVVGb1JDeERRVUZtTzBGQlEwRXNaMEpCUVVrc1YwRkJWeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRkZCUVdoQ0xFTkJRWGxDTEUxQlFYcENMRU5CUVdkRExFOUJRVThzVVVGQlVDeERRVUZuUWl4UlFVRm9SQ3hEUVVGbU96dEJRVVZCTEdkQ1FVRkhMRTlCUVVnc1JVRkJWenM3UVVGRlVDeHZRa0ZCUnl4WlFVRlpMRTlCUVdZc1JVRkJkVUk3UVVGRGJrSXNlVUpCUVVzc1ZVRkJUQ3hEUVVGblFpeEpRVUZvUWl4RFFVRnhRaXhQUVVGeVFqdEJRVU5CTEhsQ1FVRkxMRU5CUVV3c1NVRkJWU3hGUVVGV08wRkJRMGdzYVVKQlNFUXNUVUZIU3p0QlFVTkVMSGxDUVVGTExGVkJRVXdzUTBGQlowSXNTVUZCYUVJc1EwRkJjVUlzVlVGQmNrSTdRVUZEUVN4NVFrRkJTeXhEUVVGTUxFbEJRVlVzUlVGQlZqdEJRVU5JTzBGQlIwb3NZVUZZUkN4TlFWbExMRWxCUVVjc1VVRkJTQ3hGUVVGWk8wRkJRMklzYjBKQlFVY3NXVUZCV1N4UlFVRm1MRVZCUVhsQ08wRkJRM0pDTEhsQ1FVRkxMRlZCUVV3c1EwRkJaMElzU1VGQmFFSXNRMEZCY1VJc1QwRkJja0k3UVVGRFFTeDVRa0ZCU3l4RFFVRk1MRWxCUVZVc1JVRkJWanRCUVVOSUxHbENRVWhFTEUxQlIwczdRVUZEUkN4NVFrRkJTeXhWUVVGTUxFTkJRV2RDTEVsQlFXaENMRU5CUVhGQ0xGZEJRWEpDTzBGQlEwRXNlVUpCUVVzc1EwRkJUQ3hKUVVGVkxFVkJRVlk3UVVGRFNEdEJRVXRLTzBGQlEwUXNaMEpCUVVrc1MwRkJTeXhsUVVGTUxFZEJRWFZDTEV0QlFVc3NiVUpCUVdoRExFVkJRWEZFTzBGQlEycEVMSEZDUVVGTExHVkJRVXdzUjBGQmRVSXNRMEZCZGtJN1FVRkRRU3h2UWtGQlNTeExRVUZMTEV0QlFWUXNSVUZCWjBJN08wRkJSVm9zZDBKQlFVY3NVVUZCU0N4RlFVRmhPMEZCUTFRc05rSkJRVXNzVlVGQlRDeERRVUZuUWl4SlFVRm9RaXhEUVVGeFFpeFBRVUZ5UWp0QlFVTkJMRFpDUVVGTExFdEJRVXc3UVVGRFNEdEJRVU5LTzBGQlEwbzdRVUZEU2pzN08yZERRVVZQT3p0QlFVVktMR2RDUVVGSkxGTkJRVk1zUzBGQlN5eFBRVUZNTEVOQlFXRXNZMEZCWWl4RFFVRTBRaXhMUVVFMVFpeERRVUZpT3p0QlFVVkJMR2RDUVVGSkxFTkJRVU1zVFVGQlRDeEZRVUZoTzBGQlExUXNlVUpCUVZNc2NVSkJRVmM3UVVGRGFFSXNNRUpCUVUwc1MwRkJTeXhKUVVSTE8wRkJSV2hDTEhWQ1FVRkhMRXRCUVVzc1EwRkJUQ3hIUVVGVExFVkJSa2s3UVVGSGFFSXNkVUpCUVVjc1MwRkJTeXhIUVVoUk8wRkJTV2hDTzBGQlEwRXNORUpCUVZFc1EwRk1VVHRCUVUxb1Fpd3lRa0ZCVHl4UlFVNVRPMEZCVDJoQ0xEQkNRVUZOTzBGQlVGVXNhVUpCUVZnc1EwRkJWRHRCUVZOQk8wRkJRMEVzYjBKQlFVY3NTMEZCU3l4UFFVRk1MRU5CUVdFc1VVRkJZaXhEUVVGelFpeE5RVUYwUWl4SlFVRm5ReXhEUVVGdVF5eEZRVUZ4UXp0QlFVTnFReXg1UWtGQlN5eFRRVUZNTEVOQlFXVXNTVUZCWml4RFFVRnZRaXhGUVVGd1FpeEZRVUYxUWl4RFFVRjJRaXhGUVVGNVFpeEhRVUY2UWp0QlFVTkJMSGxDUVVGTExFOUJRVXdzUTBGQllTeEhRVUZpTEVOQlFXbENMRTFCUVdwQ08wRkJRMEVzTWtKQlFVOHNTVUZCVUN4RFFVRlpMRkZCUVZvc1EwRkJjVUlzUTBGQmNrSXNSMEZCZVVJc1MwRkJTeXhYUVVFNVFqdEJRVWRJTzBGQlEwb3NZVUZzUWtRc1RVRnRRa3M3UVVGRFJDeHhRa0ZCU3l4VFFVRk1MRU5CUVdVc1NVRkJaaXhEUVVGdlFpeEZRVUZ3UWl4RlFVRjFRaXhEUVVGMlFpeEZRVUY1UWl4SFFVRjZRanRCUVVOQkxIVkNRVUZQTEV0QlFWQXNRMEZCWVN4TFFVRkxMRU5CUVV3c1IwRkJVeXhGUVVGMFFpeEZRVUV3UWl4TFFVRkxMRWRCUVM5Q0xFVkJRVzlETEVOQlFYQkRPMEZCUTBFc2RVSkJRVThzU1VGQlVDeERRVUZaTEZGQlFWb3NRMEZCY1VJc1EwRkJja0lzUjBGQmVVSXNTMEZCU3l4WFFVRTVRanRCUVVOSU8wRkJSMG83T3pzclFrRkZUU3hOTEVWQlFWRTdRVUZEV0N4dFNFRkJZU3hOUVVGaU8wRkJRMGc3T3pzN1JVRnFTQ3RDTEU5QlFVOHNUVHM3YTBKQlFYUkNMRTA3T3pzN096czdPenM3T3pzN1FVTkdha0k3T3pzN096czdPenM3T3p0SlFVVnBRaXhMT3pzN1FVRkZha0lzZVVKQlFTdEVPMEZCUVVFc1dVRkJha1FzU1VGQmFVUXNVVUZCYWtRc1NVRkJhVVE3UVVGQlFTeFpRVUV6UXl4RFFVRXlReXhSUVVFelF5eERRVUV5UXp0QlFVRkJMRmxCUVhoRExFTkJRWGRETEZGQlFYaERMRU5CUVhkRE8wRkJRVUVzV1VGQmNrTXNTMEZCY1VNc1VVRkJja01zUzBGQmNVTTdRVUZCUVN4WlFVRTVRaXhMUVVFNFFpeFJRVUU1UWl4TFFVRTRRanRCUVVGQkxGbEJRWFpDTEUxQlFYVkNMRkZCUVhaQ0xFMUJRWFZDTzBGQlFVRXNXVUZCWml4WFFVRmxMRkZCUVdZc1YwRkJaVHM3UVVGQlFUczdRVUZCUVN4clNFRkRja1FzU1VGRWNVUXNSVUZETDBNc1EwRkVLME1zUlVGRE5VTXNRMEZFTkVNc1JVRkRla01zUzBGRWVVTXNSVUZEYkVNc1MwRkVhME03TzBGQlJ6TkVMR05CUVVzc1NVRkJUQ3hIUVVGWkxFbEJRVm83TzBGQlJVRXNZMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJXaXhEUVVGclFpeEhRVUZzUWp0QlFVTkJMR05CUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNSMEZCYWtJN1FVRkRRU3hqUVVGTExFMUJRVXdzUjBGQll5eE5RVUZrTzBGQlEwRXNZMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRV3BDTzBGQlEwRXNZMEZCU3l4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVGclFpeE5RVUZzUWl4RFFVRjVRaXhOUVVGNlFqczdRVUZGUVN4alFVRkxMRlZCUVV3c1EwRkJaMElzUjBGQmFFSXNRMEZCYjBJc1ZVRkJjRUlzUlVGQlowTXNRMEZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTaXhGUVVGUExFTkJRVkFzUlVGQlZTeERRVUZXTEVWQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeEZRVUZ0UWl4RFFVRnVRaXhGUVVGelFpeERRVUYwUWl4RlFVRjVRaXhEUVVGNlFpeEZRVUUwUWl4RFFVRTFRaXhGUVVFclFpeEZRVUV2UWl4RlFVRnRReXhGUVVGdVF5eEZRVUYxUXl4RlFVRjJReXhGUVVFeVF5eEZRVUV6UXl4RlFVRXJReXhGUVVFdlF5eERRVUZvUXl4RlFVRnZSaXhGUVVGd1JpeEZRVUYzUml4SlFVRjRSanRCUVVOQkxHTkJRVXNzU1VGQlRDeERRVUZWTEZWQlFWWTdPMEZCUlVFc1kwRkJTeXhQUVVGTUxFZEJRV1VzVFVGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1JVRkJaanRCUVVOQkxHTkJRVXNzVDBGQlRDeERRVUZoTEZWQlFXSXNSMEZCTUVJc1NVRkJNVUk3UVVGRFFTeGpRVUZMTEZkQlFVd3NSMEZCYlVJc1YwRkJia0k3TzBGQlJVRXNZMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4TFFVRmtMRU5CUVc5Q0xGZEJRWEJDTEVOQlFXcENPenRCUVd4Q01rUTdRVUZ2UWpsRU96czdPMmxEUVVWUk96dEJRVVZNTEdkQ1FVRkpMRXRCUVVzc1VVRkJUQ3hEUVVGakxFTkJRV1FzUjBGQmEwSXNUMEZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFUZERMRVZCUVc5RU8wRkJRMmhFTEhGQ1FVRkxMRkZCUVV3c1EwRkJZeXhEUVVGa0xFZEJRV3RDTEU5QlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUYyUWl4SFFVRXJRaXhEUVVGcVJEdEJRVU5CTEhGQ1FVRkxMRWxCUVV3c1EwRkJWU3hSUVVGV0xFTkJRVzFDTEVOQlFXNUNMRWxCUVhkQ0xFTkJRVU1zUTBGQmVrSTdRVUZEU0N4aFFVaEVMRTFCU1Vzc1NVRkJTU3hMUVVGTExGRkJRVXdzUTBGQll5eERRVUZrTEVkQlFXdENMRTlCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TFFVRTNReXhGUVVGdlJEdEJRVU55UkN4eFFrRkJTeXhSUVVGTUxFTkJRV01zUTBGQlpDeEhRVUZyUWl4UFFVRlBMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCZGtJc1IwRkJLMElzUTBGQmFrUTdRVUZEUVN4eFFrRkJTeXhKUVVGTUxFTkJRVlVzVVVGQlZpeERRVUZ0UWl4RFFVRnVRaXhKUVVGM1FpeERRVUZETEVOQlFYcENPMEZCUTBnN08wRkJSVVFzWjBKQlFVa3NTMEZCU3l4UlFVRk1MRU5CUVdNc1EwRkJaQ3hIUVVGclFpeExRVUZMTEUxQlFVd3NSMEZCWXl4RFFVRm9ReXhIUVVGdlF5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFMUJRWGhFTEVWQlFXZEZPMEZCUXpWRUxIRkNRVUZMTEVsQlFVdzdRVUZEU0R0QlFVTktPenM3WjBOQlJVODdPMEZCUlVvc2FVSkJRVXNzVTBGQlRDeERRVUZsTEVsQlFXWXNRMEZCYjBJc1JVRkJjRUlzUlVGQmRVSXNRMEZCZGtJc1JVRkJlVUlzUjBGQmVrSTdPMEZCUlVFc1owSkJRVWtzVTBGQlV5eExRVUZMTEU5QlFVd3NRMEZCWVN4alFVRmlMRU5CUVRSQ0xFdEJRVFZDTEVOQlFXSTdPMEZCUlVFc1owSkJRVWtzUTBGQlF5eE5RVUZNTEVWQlFXRTdRVUZEVkN4NVFrRkJVeXh4UWtGQlZ6dEJRVU5vUWl3d1FrRkJUU3hMUVVGTExFbEJSRXM3UVVGRmFFSXNkVUpCUVVjc1MwRkJTeXhEUVVaUk8wRkJSMmhDTEhWQ1FVRkhMRXRCUVVzc1RVRklVVHRCUVVsb1FpdzBRa0ZCVVN4RFFVcFJPMEZCUzJoQ0xESkNRVUZQTEZGQlRGTTdRVUZOYUVJc01FSkJRVTA3UVVGT1ZTeHBRa0ZCV0N4RFFVRlVPMEZCVVVFc2NVSkJRVXNzVDBGQlRDeERRVUZoTEVkQlFXSXNRMEZCYVVJc1RVRkJha0k3UVVGRFNDeGhRVlpFTEUxQlYwczdRVUZEUkN4MVFrRkJUeXhMUVVGUUxFTkJRV0VzUzBGQlN5eERRVUZzUWl4RlFVRnhRaXhMUVVGTExFMUJRVEZDTEVWQlFXdERMRU5CUVd4RE8wRkJRMGc3TzBGQlJVUXNiVUpCUVU4c1NVRkJVQ3hEUVVGWkxGRkJRVm9zUTBGQmNVSXNRMEZCY2tJc1IwRkJlVUlzUzBGQlN5eFhRVUU1UWp0QlFVTklPenM3SzBKQlJVMHNUU3hGUVVGUk8wRkJRMWdzYVVoQlFXRXNUVUZCWWp0QlFVTklPenM3Y1VOQlJUSkRPMEZCUVVFc1owSkJRWEJETEVOQlFXOURMRk5CUVhCRExFTkJRVzlETzBGQlFVRXNaMEpCUVdwRExFTkJRV2xETEZOQlFXcERMRU5CUVdsRE8wRkJRVUVzWjBKQlFUbENMRTFCUVRoQ0xGTkJRVGxDTEUxQlFUaENPMEZCUVVFc1owSkJRWFJDTEZkQlFYTkNMRk5CUVhSQ0xGZEJRWE5DTzBGQlFVRXNaMEpCUVZRc1MwRkJVeXhUUVVGVUxFdEJRVk03TzBGQlEzaERMR2RJUVVGWkxFTkJRVm9zUlVGQlpTeERRVUZtTEVWQlFXdENMRTFCUVd4Q08wRkJRMEVzYVVKQlFVc3NWMEZCVEN4SFFVRnRRaXhYUVVGdVFqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hSUVVGV0xFTkJRVzFDTEVOQlFXNUNMRWRCUVhWQ0xFMUJRVTBzUTBGQk4wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzVVVGQlZpeERRVUZ0UWl4RFFVRnVRaXhIUVVGMVFpeE5RVUZOTEVOQlFUZENPMEZCUTBnN096czdSVUY2UlRoQ0xFOUJRVThzVFRzN2EwSkJRWEpDTEVzN096czdPenM3T3pzN096czdRVU5HY2tJN096czdPenM3T3pzN096dEpRVVZ4UWl4Tk96czdRVUZGYWtJc01FSkJRV3RFTzBGQlFVRXNXVUZCY0VNc1NVRkJiME1zVVVGQmNFTXNTVUZCYjBNN1FVRkJRU3haUVVFNVFpeERRVUU0UWl4UlFVRTVRaXhEUVVFNFFqdEJRVUZCTEZsQlFUTkNMRU5CUVRKQ0xGRkJRVE5DTEVOQlFUSkNPMEZCUVVFc1dVRkJlRUlzUzBGQmQwSXNVVUZCZUVJc1MwRkJkMEk3UVVGQlFTeFpRVUZxUWl4TFFVRnBRaXhSUVVGcVFpeExRVUZwUWp0QlFVRkJMRmxCUVZZc1RVRkJWU3hSUVVGV0xFMUJRVlU3TzBGQlFVRTdPMEZCUVVFc2IwaEJRM2hETEVsQlJIZERMRVZCUTJ4RExFTkJSR3RETEVWQlF5OUNMRU5CUkN0Q0xFVkJRelZDTEV0QlJEUkNMRVZCUTNKQ0xFdEJSSEZDT3p0QlFVYzVReXhqUVVGTExFbEJRVXdzUjBGQldTeEpRVUZhT3p0QlFVVkJMR05CUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUTBGQmEwSXNSMEZCYkVJN1FVRkRRU3hqUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRWRCUVdwQ096dEJRVVZCTEdOQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVdRN1FVRkRRU3hqUVVGTExGTkJRVXdzUjBGQmFVSXNUVUZCYWtJN08wRkJTVUVzWTBGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhOUVVGc1FpeERRVUY1UWl4TlFVRjZRanRCUVVOQk8wRkJRMEVzWTBGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhEUVVGc1FpeEhRVUZ6UWl4SFFVRjBRanRCUVVOQkxHTkJRVXNzU1VGQlRDeERRVUZWTEd0Q1FVRldMRWRCUVN0Q0xFbEJRUzlDTzBGQlEwRTdPMEZCUlVFc1kwRkJTeXhQUVVGTUxFZEJRV1VzVFVGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1JVRkJaanRCUVVOQkxHTkJRVXNzVDBGQlRDeERRVUZoTEZWQlFXSXNSMEZCTUVJc1NVRkJNVUk3UVVGRFFTeGpRVUZMTEZkQlFVd3NSMEZCYlVJc1EwRkJReXhIUVVGd1FqczdRVUZGUVN4alFVRkxMRk5CUVV3c1IwRkJhVUlzVFVGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1EwRkJiMElzV1VGQmNFSXNRMEZCYWtJN1FVRjJRamhETzBGQmQwSnFSRHM3T3p0cFEwRkZVU3hEUVVWU096czdaME5CUlU4N08wRkJSVW9zWjBKQlFVa3NVMEZCVXl4TFFVRkxMRTlCUVV3c1EwRkJZU3hqUVVGaUxFTkJRVFJDTEV0QlFUVkNMRU5CUVdJN08wRkJSVUVzWjBKQlFVa3NRMEZCUXl4TlFVRk1MRVZCUVdFN1FVRkRWQ3g1UWtGQlV5eHhRa0ZCVnp0QlFVTm9RaXd3UWtGQlRTeExRVUZMTEVsQlJFczdRVUZGYUVJc2RVSkJRVWNzUzBGQlN5eERRVVpSTzBGQlIyaENMSFZDUVVGSExFdEJRVXNzUjBGSVVUdEJRVWxvUWp0QlFVTkJMRFJDUVVGUkxFTkJURkU3UVVGTmFFSXNNa0pCUVU4c1VVRk9VenRCUVU5b1Fpd3dRa0ZCVFR0QlFWQlZMR2xDUVVGWUxFTkJRVlE3UVVGVFFUdEJRVU5CTEc5Q1FVRkhMRXRCUVVzc1QwRkJUQ3hEUVVGaExGRkJRV0lzUTBGQmMwSXNUVUZCZEVJc1NVRkJaME1zUTBGQmJrTXNSVUZCY1VNN1FVRkRha01zZVVKQlFVc3NVMEZCVEN4RFFVRmxMRWxCUVdZc1EwRkJiMElzUlVGQmNFSXNSVUZCZFVJc1EwRkJka0lzUlVGQmVVSXNSMEZCZWtJN1FVRkRRU3g1UWtGQlN5eFBRVUZNTEVOQlFXRXNSMEZCWWl4RFFVRnBRaXhOUVVGcVFqczdRVUZGUVN3eVFrRkJUeXhKUVVGUUxFTkJRVmtzVVVGQldpeERRVUZ4UWl4RFFVRnlRaXhIUVVGNVFpeExRVUZMTEZkQlFUbENPMEZCUTBnN1FVRkRTaXhoUVdwQ1JDeE5RV3RDU3p0QlFVTkVMSEZDUVVGTExGTkJRVXdzUTBGQlpTeEpRVUZtTEVOQlFXOUNMRVZCUVhCQ0xFVkJRWFZDTEVOQlFYWkNMRVZCUVhsQ0xFZEJRWHBDTzBGQlEwRXNkVUpCUVU4c1MwRkJVQ3hEUVVGaExFdEJRVXNzUTBGQmJFSXNSVUZCY1VJc1MwRkJTeXhIUVVFeFFpeEZRVUVyUWl4RFFVRXZRanRCUVVOQkxIVkNRVUZQTEVsQlFWQXNRMEZCV1N4UlFVRmFMRU5CUVhGQ0xFTkJRWEpDTEVkQlFYbENMRXRCUVVzc1YwRkJPVUk3UVVGRFNEdEJRVWRLT3pzN0swSkJSVTBzVFN4RlFVRlJPMEZCUTFnc2JVaEJRV0VzVFVGQllqdEJRVU5JT3pzN08wVkJha1VyUWl4UFFVRlBMRTA3TzJ0Q1FVRjBRaXhOT3pzN096czdPenM3T3pzN096czdPenRKUTBaQkxFazdPenM3T3pzN096czdPMnREUVVWUU8wRkJRMDRzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzWlVGQmFFSXNSMEZCYTBNc1RVRkJiRU03UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RlFVRTBRaXh0UWtGQk5VSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4WFFVRm9RaXhGUVVFMlFpeHZRa0ZCTjBJN1FVRkRTRHM3TzJsRFFVVlJPMEZCUTB3c2FVSkJRVXNzUzBGQlRDeERRVUZYTEZOQlFWZ3NSMEZCZFVJc1QwRkJUeXhaUVVGUUxFTkJRVzlDTEZGQlFUTkRPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4eFFrRkJXQ3hIUVVGdFF5eEpRVUZ1UXp0QlFVTkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eHRRa0ZCV0N4SFFVRnBReXhKUVVGcVF6dEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hQUVVGV0xFTkJRV3RDTEZkQlFXeENMRU5CUVRoQ0xFOUJRVThzVDBGQlVDeERRVUZsTEUxQlFUZERPMEZCUTBFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCYVVJc1UwRkJha0k3UVVGRFNEczdPenRGUVdZMlFpeFBRVUZQTEVzN08ydENRVUZ3UWl4Sk96czdPenM3T3pzN096czdPenQ1UTBOQllpeFBPenM3T3pzN096czdORU5CUTBFc1R6czdPenM3T3pzN08zbERRVU5CTEU4N096czdPenM3T3p0NVEwRkZRU3hQT3pzN096czdPenM3ZVVOQlEwRXNUenM3T3pzN096czdPelpEUVVkQkxFODdPenM3T3pzN096czJRMEZEUVN4UE96czdPenM3T3pzN09FTkJSMEVzVHpzN096czdPenM3T3poRFFVTkJMRTg3T3pzN096czdPenM3T3pzN096dEJRMkpTT3pzN096czdPenM3T3pzN1NVRkZjVUlzU1RzN096czdPenM3T3pzN05rSkJRMW9zWVN4RlFVRmpMRlVzUlVGQlZ6czdRVUZGTVVJc2IwSkJRVkVzUjBGQlVpeERRVUZaTEdGQlFWbzdRVUZEUVN4dlFrRkJVU3hIUVVGU0xFTkJRVmtzVlVGQldqdEJRVU5CTzBGQlEwRXNaMEpCUVVjc2EwSkJRV3RDTEZOQlFYSkNMRVZCUVN0Q08wRkJRek5DTEhkQ1FVRlJMRWRCUVZJc1EwRkJXU3haUVVGYU8wRkJRMGc3UVVGRlNqczdPMmxEUVVOUk8wRkJRVUU3TzBGQlEwd3NhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeERRVUZ5UWpzN1FVRkZRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NaVUZCV0N4SFFVRTJRaXhUUVVFM1FqdEJRVU5CTEdsQ1FVRkxMR2RDUVVGTUxFZEJRWGRDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRlZCUVZRc1EwRkJiMElzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGd1F5eEZRVUUwUXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEUxQlFXaENMRWRCUVhsQ0xFZEJRWEpGTEVWQlFYbEZMRWxCUVhwRkxFVkJRVGhGTEVkQlFUbEZMRVZCUVd0R0xGVkJRV3hHTEVOQlFYaENPMEZCUTBFc2FVSkJRVXNzWjBKQlFVd3NRMEZCYzBJc1RVRkJkRUlzUTBGQk5rSXNTMEZCTjBJc1EwRkJiVU1zUjBGQmJrTTdPMEZCUjBFc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEVsQlFVa3NUMEZCVHl4SlFVRllMRU5CUVdkQ0xFdEJRVXNzU1VGQmNrSXNSVUZCTWtJc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRXpReXhGUVVGdlJDeExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFUQkNMRWRCUVRsRkxFVkJRVzFHTEhORFFVRnVSaXhGUVVFeVNEdEJRVU53U1N4elFrRkJUU3haUVVRNFNEdEJRVVZ3U1N4elFrRkJUU3hQUVVZNFNEdEJRVWR3U1N4MVFrRkJUenRCUVVnMlNDeGhRVUV6U0N4RFFVRmlPMEZCUzBFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEUxQlFWZ3NRMEZCYTBJc1MwRkJiRUlzUTBGQmQwSXNSMEZCZUVJN1FVRkRRVHM3UVVGRlFTeHBRa0ZCU3l4WFFVRk1MRWRCUVcxQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFTOUNMRVZCUVhWRExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQk1FSXNSMEZCYWtVc1JVRkJjVVVzWVVGQmNrVXNRMEZCYmtJN1FVRkRRU3hwUWtGQlN5eFhRVUZNTEVOQlFXbENMRTFCUVdwQ0xFTkJRWGRDTEV0QlFYaENMRU5CUVRoQ0xFZEJRVGxDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eExRVUZrTEVOQlFXOUNMRXRCUVVzc1YwRkJla0lzUlVGQmMwTXNSVUZCZEVNc1EwRkJNRU1zUlVGQlJTeEhRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFSXNSMEZCTUVJc1IwRkJMMElzUlVGQk1VTXNSVUZCWjBZc1NVRkJhRVlzUlVGQmMwWXNUMEZCVHl4TlFVRlFMRU5CUVdNc1RVRkJaQ3hEUVVGeFFpeEhRVUV6Unl4RlFVRm5TQ3hKUVVGb1NEczdRVUZIUVN4cFFrRkJTeXhSUVVGTUxFZEJRV2RDTEhsQ1FVRmxPMEZCUXpOQ0xITkNRVUZOTEV0QlFVc3NTVUZFWjBJN1FVRkZNMElzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVVpSTzBGQlJ6TkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRklVVHRCUVVrelFpeDFRa0ZCVHl4VFFVcHZRanRCUVVzelFpd3lRa0ZCVnl4RFFVeG5RanRCUVUwelFpd3dRa0ZCVlN4RFFVNXBRanRCUVU4elFpd3lRa0ZCVnl4RFFWQm5RanRCUVZFelFpeDVRa0ZCVXl4RFFWSnJRanRCUVZNelFpeDFRa0ZCVHl4UFFWUnZRanRCUVZVelFpeDFRa0ZCVHp0QlFVTklMREJDUVVGTkxHZENRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXYjBJc1lVRkJaaXhEUVVGb1FqczdRVUZwUWtFc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeERRVUZ3UWp0QlFVTkJMR2xDUVVGTExGZEJRVXdzUjBGQmJVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGTkJRV1lzUTBGQmJrSTdRVUZEUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDT3p0QlFVVkJMR2xDUVVGTExGRkJRVXdzUTBGQll5eFpRVUZrTEVOQlFUSkNMRXRCUVVzc1dVRkJhRU03UVVGRFFTeHBRa0ZCU3l4UlFVRk1MRU5CUVdNc1YwRkJaQ3hEUVVFd1FpeExRVUZMTEZkQlFTOUNPMEZCUTBFc2FVSkJRVXNzVVVGQlRDeERRVUZqTEZsQlFXUXNRMEZCTWtJc1MwRkJTeXhaUVVGb1F6czdRVUZGUVN4cFFrRkJTeXhSUVVGTUxFTkJRV01zVTBGQlpDeERRVUYzUWl4SFFVRjRRaXhEUVVFMFFpeFpRVUZKTzBGQlF6VkNPMEZCUTBFc2RVSkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCYVVJc1YwRkJha0k3UVVGRlNDeGhRVXBFT3p0QlFWRkJPMEZCUTBFc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEhsQ1FVRmxPMEZCUTNoQ0xITkNRVUZOTEV0QlFVc3NTVUZFWVR0QlFVVjRRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJSa3M3UVVGSGVFSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhIUVVFd1FpeEhRVWhNTzBGQlNYaENMSFZDUVVGUExGTkJTbWxDTzBGQlMzaENMREpDUVVGWExFTkJUR0U3UVVGTmVFSXNNRUpCUVZVc1EwRk9ZenRCUVU5NFFpd3lRa0ZCVnl4RFFWQmhPMEZCVVhoQ0xIbENRVUZUTEVOQlVtVTdRVUZUZUVJc2RVSkJRVThzWlVGVWFVSTdRVUZWZUVJc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4blFrRkVTRHRCUVVWSUxEQkNRVUZOTEU5QlJrZzdRVUZIU0N3eVFrRkJUenRCUVVoS08wRkJWbWxDTEdGQlFXWXNRMEZCWWpzN1FVRnBRa0VzYVVKQlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNWVUZCWml4RFFVRndRanRCUVVOQkxHbENRVUZMTEZkQlFVd3NSMEZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZOQlFXWXNRMEZCYmtJN1FVRkRRU3hwUWtGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYQkNPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WlFVRllMRU5CUVhkQ0xFdEJRVXNzV1VGQk4wSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzVjBGQldDeERRVUYxUWl4TFFVRkxMRmRCUVRWQ08wRkJRMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmxCUVZnc1EwRkJkMElzUzBGQlN5eFpRVUUzUWpzN1FVRkZRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NVMEZCV0N4RFFVRnhRaXhIUVVGeVFpeERRVUY1UWl4WlFVRkpPMEZCUTNwQ08wRkJRMEVzZFVKQlFVc3NZVUZCVEN4SFFVRnhRaXhWUVVGeVFqdEJRVU5CTEhWQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEZWQlFXcENMRVZCUVRaQ0xFbEJRVGRDTEVWQlFXMURMRXRCUVc1RExFVkJRVEJETEU5QlFVc3NZVUZCTDBNN1FVRkhTQ3hoUVU1RU8wRkJUMEU3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRWRCUVdVc2VVSkJRV1U3UVVGRE1VSXNjMEpCUVUwc1MwRkJTeXhKUVVSbE8wRkJSVEZDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZHVHp0QlFVY3hRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFUQkNMRWRCU0VnN1FVRkpNVUlzZFVKQlFVOHNVMEZLYlVJN1FVRkxNVUlzTWtKQlFWY3NRMEZNWlR0QlFVMHhRaXd3UWtGQlZTeERRVTVuUWp0QlFVOHhRaXd5UWtGQlZ5eERRVkJsTzBGQlVURkNMSGxDUVVGVExFTkJVbWxDTzBGQlV6RkNMSFZDUVVGUExFOUJWRzFDTzBGQlZURkNMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNaMEpCUkVnN1FVRkZTQ3d3UWtGQlRTeFBRVVpJTzBGQlIwZ3NNa0pCUVU4N1FVRklTanRCUVZadFFpeGhRVUZtTEVOQlFXWTdPMEZCYVVKQkxHbENRVUZMTEZsQlFVd3NSMEZCYjBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZWQlFXWXNRMEZCY0VJN1FVRkRRU3hwUWtGQlN5eFhRVUZNTEVkQlFXMUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFRRVUZtTEVOQlFXNUNPMEZCUTBFc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeERRVUZ3UWpzN1FVRkZRU3hwUWtGQlN5eFBRVUZNTEVOQlFXRXNXVUZCWWl4RFFVRXdRaXhMUVVGTExGbEJRUzlDTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGZEJRV0lzUTBGQmVVSXNTMEZCU3l4WFFVRTVRanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4WlFVRmlMRU5CUVRCQ0xFdEJRVXNzV1VGQkwwSTdPMEZCUlVFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEZOQlFXSXNRMEZCZFVJc1IwRkJka0lzUTBGQk1rSXNXVUZCU1R0QlFVTXpRanRCUVVOQkxIVkNRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFMUJRV3BDTzBGQlEwZ3NZVUZJUkRzN1FVRkxRVHRCUVVOQkxHbENRVUZMTEU5QlFVd3NSMEZCWlN4NVFrRkJaVHRCUVVNeFFpeHpRa0ZCVFN4TFFVRkxMRWxCUkdVN1FVRkZNVUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVVpQTzBGQlJ6RkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQk1FSXNSMEZJU0R0QlFVa3hRaXgxUWtGQlR5eFRRVXB0UWp0QlFVc3hRaXd5UWtGQlZ5eERRVXhsTzBGQlRURkNMREJDUVVGVkxFTkJUbWRDTzBGQlR6RkNMREpDUVVGWExFTkJVR1U3UVVGUk1VSXNlVUpCUVZNc1EwRlNhVUk3UVVGVE1VSXNkVUpCUVU4c1QwRlViVUk3UVVGVk1VSXNkVUpCUVU4N1FVRkRTQ3d3UWtGQlRTeG5Ra0ZFU0R0QlFVVklMREJDUVVGTkxGTkJSa2c3UVVGSFNDd3lRa0ZCVHp0QlFVaEtPMEZCVm0xQ0xHRkJRV1lzUTBGQlpqdEJRV2RDUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzUzBGQllpeEhRVUZ4UWl4RFFVRnlRanRCUVVOQkxHbENRVUZMTEZsQlFVd3NSMEZCYjBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZWQlFXWXNRMEZCY0VJN1FVRkRRU3hwUWtGQlN5eFhRVUZNTEVkQlFXMUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFRRVUZtTEVOQlFXNUNPMEZCUTBFc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeERRVUZ3UWpzN1FVRkZRU3hwUWtGQlN5eFBRVUZNTEVOQlFXRXNXVUZCWWl4RFFVRXdRaXhMUVVGTExGbEJRUzlDTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGZEJRV0lzUTBGQmVVSXNTMEZCU3l4WFFVRTVRanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4WlFVRmlMRU5CUVRCQ0xFdEJRVXNzV1VGQkwwSTdPMEZCUlVFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEZOQlFXSXNRMEZCZFVJc1IwRkJka0lzUTBGQk1rSXNXVUZCU1R0QlFVTXpRanRCUVVOQk8wRkJRMEVzYzBKQlFVMHNZVUZCVGp0QlFVTklMR0ZCU2tRN08wRkJUVUVzYVVKQlFVc3NVMEZCVEN4SFFVRnBRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFXcENPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEVkQlFXWXNRMEZCYlVJc1MwRkJTeXhMUVVGNFFqdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hIUVVGbUxFTkJRVzFDTEV0QlFVc3NVVUZCZUVJN1FVRkRRU3hwUWtGQlN5eFRRVUZNTEVOQlFXVXNSMEZCWml4RFFVRnRRaXhMUVVGTExFdEJRWGhDTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFZEJRV1lzUTBGQmJVSXNTMEZCU3l4UFFVRjRRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4SFFVRm1MRU5CUVcxQ0xFdEJRVXNzVDBGQmVFSTdPMEZCUjBFN08wRkJSMGc3T3p0cFEwRkRVVHRCUVVOTUxHbENRVUZMTEdkQ1FVRk1MRU5CUVhOQ0xGbEJRWFJDTEVOQlFXMURMRU5CUVc1RExFbEJRWGRETEVkQlFYaERPMEZCUTBnN096czdSVUV2U3paQ0xFOUJRVThzU3pzN2EwSkJRWEJDTEVrN096czdPenM3T3pzN08wRkRSbkpDT3pzN096czdPenM3T3pzN1NVRkZjVUlzVVRzN096czdPenM3T3pzN2FVTkJSVkk3UVVGQlFUczdRVUZGVEN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEVsQlFVa3NUMEZCVHl4SlFVRllMRU5CUVdkQ0xFdEJRVXNzU1VGQmNrSXNSVUZCTWtJc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRXpReXhGUVVGdlJDeExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFYZENMRWRCUVRWRkxFVkJRV2xHTEdsQ1FVRnFSaXhGUVVGdlJ6dEJRVU55U0N4elFrRkJUU3hoUVVRclJ6dEJRVVZ5U0N4elFrRkJUU3hQUVVZclJ6dEJRVWR5U0N4MVFrRkJUenRCUVVnNFJ5eGhRVUZ3Unl4RFFVRnlRanRCUVV0QkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1RVRkJia0lzUTBGQk1FSXNTMEZCTVVJc1EwRkJaME1zUjBGQmFFTTdPMEZCUlVFc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEhsQ1FVRmxPMEZCUTNoQ0xITkNRVUZOTEV0QlFVc3NTVUZFWVR0QlFVVjRRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJSa3M3UVVGSGVFSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhIUVVGM1FpeEZRVWhJTzBGQlNYaENMSFZDUVVGUExGRkJTbWxDTzBGQlMzaENMREpDUVVGWExFTkJUR0U3UVVGTmVFSXNNRUpCUVZVc1EwRk9ZenRCUVU5NFFpd3lRa0ZCVnl4RFFWQmhPMEZCVVhoQ0xIbENRVUZUTEVOQlVtVTdRVUZUZUVJc2RVSkJRVThzVjBGVWFVSTdRVUZWZUVJc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4alFVUklPMEZCUlVnc01FSkJRVTBzVDBGR1NEdEJRVWRJTERKQ1FVRlBPMEZCU0VvN1FVRldhVUlzWVVGQlppeERRVUZpT3p0QlFXbENRU3hwUWtGQlN5eEpRVUZNTEVkQlFWa3NlVUpCUVdVN1FVRkRka0lzYzBKQlFVMHNTMEZCU3l4SlFVUlpPMEZCUlhaQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGR1NUdEJRVWQyUWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoQ0xFZEJRWGRDTEVWQlNFbzdRVUZKZGtJc2RVSkJRVThzVVVGS1owSTdRVUZMZGtJc01rSkJRVmNzUTBGTVdUdEJRVTEyUWl3d1FrRkJWU3hEUVU1aE8wRkJUM1pDTERKQ1FVRlhMRU5CVUZrN1FVRlJka0lzZVVKQlFWTXNRMEZTWXp0QlFWTjJRaXgxUWtGQlR5eE5RVlJuUWp0QlFWVjJRaXgxUWtGQlR6dEJRVU5JTERCQ1FVRk5MR05CUkVnN1FVRkZTQ3d3UWtGQlRTeFBRVVpJTzBGQlIwZ3NNa0pCUVU4N1FVRklTanRCUVZablFpeGhRVUZtTEVOQlFWbzdPMEZCYVVKQkxHbENRVUZMTEZsQlFVd3NSMEZCYjBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZWQlFXWXNRMEZCY0VJN1FVRkRRU3hwUWtGQlN5eFhRVUZNTEVkQlFXMUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFRRVUZtTEVOQlFXNUNPMEZCUTBFc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeERRVUZ3UWpzN1FVRkZRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NXVUZCV0N4RFFVRjNRaXhMUVVGTExGbEJRVGRDTzBGQlEwRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExGZEJRVmdzUTBGQmRVSXNTMEZCU3l4WFFVRTFRanRCUVVOQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WlFVRllMRU5CUVhkQ0xFdEJRVXNzV1VGQk4wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzV1VGQlZpeERRVUYxUWl4TFFVRkxMRmxCUVRWQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRmRCUVZZc1EwRkJjMElzUzBGQlN5eFhRVUV6UWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFpRVUZXTEVOQlFYVkNMRXRCUVVzc1dVRkJOVUk3TzBGQlJVRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExGZEJRVmdzUTBGQmRVSXNSMEZCZGtJc1EwRkJNa0lzV1VGQlNUdEJRVU16UWl4MVFrRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4VlFVRnFRanRCUVVOSUxHRkJSa1E3TzBGQlNVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxGZEJRVllzUTBGQmMwSXNSMEZCZEVJc1EwRkJNRUlzV1VGQlNUdEJRVU14UWl4MVFrRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4TlFVRnFRanRCUVVOSUxHRkJSa1E3TzBGQlNVRXNhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRVZCUVhKQ08wRkJRMEVzYVVKQlFVc3NZVUZCVEN4RFFVRnRRaXhIUVVGdVFpeERRVUYxUWl4TFFVRkxMR0ZCUVRWQ08wRkJRMEVzYVVKQlFVc3NZVUZCVEN4RFFVRnRRaXhIUVVGdVFpeERRVUYxUWl4TFFVRkxMRXRCUVRWQ08wRkJRMEVzYVVKQlFVc3NZVUZCVEN4RFFVRnRRaXhIUVVGdVFpeERRVUYxUWl4TFFVRkxMRWxCUVRWQ08wRkJRMGc3T3pzN1JVRndSV2xETEU5QlFVOHNTenM3YTBKQlFYaENMRkU3T3pzN096czdPenM3TzBGRFJuSkNPenM3T3pzN096czdPenM3U1VGRmNVSXNVenM3T3pzN096czdPenM3YVVOQlJWSTdPMEZCUlV3N1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhsUVVGb1FpeEhRVUZyUXl4VFFVRnNRenRCUVVOQkxHbENRVUZMTEVWQlFVd3NSMEZCVlN4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zUzBGQlpDeERRVUZ2UWl4RFFVRndRaXhGUVVGMVFpeERRVUYyUWl4RlFVRXdRaXhKUVVFeFFpeERRVUZXTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hIUVVGbExFTkJRV1k3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRWRCUVdVc1EwRkJaanRCUVVOQkxHbENRVUZMTEZGQlFVd3NSMEZCWjBJc1IwRkJhRUk3UVVGRFFTeHBRa0ZCU3l4WFFVRk1MRWRCUVcxQ0xFVkJRVzVDTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hIUVVGclFpeExRVUZMTEU5QlFVd3NSMEZCWlN4TFFVRkxMRTlCUVhSRE96dEJRVVZCTEdsQ1FVRkxMR0ZCUVV3c1IwRkJjVUlzUlVGQmNrSTdPMEZCUlVrN096czdPenM3T3pzN096czdPMEZCWTBvc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4RlFVRndRanM3UVVGSFFTeHBRa0ZCU3l4VFFVRk1MRWRCUVdsQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZCYWtJN1FVRkRRVHRCUVVOQkxHbENRVUZMTEZGQlFVd3NSMEZCWjBJc1JVRkJhRUk3UVVGRFFTeHBRa0ZCU3l4TFFVRk1MRWRCUVdFc1EwRkJZanRCUVVOQkxHbENRVUZMTEZOQlFVd3NSMEZCYVVJc1EwRkJha0k3TzBGQlJVRXNhVUpCUVVzc1ZVRkJUQ3hIUVVGclFpeEZRVUZzUWp0QlFVTkJMR2xDUVVGTExHdENRVUZNTEVkQlFUQkNMRVZCUVRGQ096dEJRVWRCT3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUjBGQllUdEJRVU5VTEhOQ1FVRk5MR2RDUVVSSE8wRkJSVlFzYzBKQlFVMHNVMEZHUnp0QlFVZFVMSFZDUVVGUE8wRkJTRVVzWVVGQllqdEJRVXRCTEdsQ1FVRkxMRk5CUVV3c1IwRkJhVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTVUZCVkN4RFFVRmpMRU5CUVdRc1JVRkJhVUlzUTBGQmFrSXNSVUZCYjBJc1dVRkJXU3hMUVVGTExFdEJRWEpETEVWQlFUUkRMRXRCUVVzc1MwRkJha1FzUTBGQmFrSTdRVUZEUVN4cFFrRkJTeXhSUVVGTUxFZEJRV2RDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRWxCUVZRc1EwRkJZeXhEUVVGa0xFVkJRV2xDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRTFCUVZZc1IwRkJiVUlzUTBGQmNFTXNSVUZCZFVNc1owSkJRV2RDTEV0QlFVc3NVVUZCTlVRc1JVRkJjMFVzUzBGQlN5eExRVUV6UlN4RFFVRm9RanRCUVVOQkxHbENRVUZMTEZGQlFVd3NRMEZCWXl4TlFVRmtMRU5CUVhGQ0xFZEJRWEpDTEVOQlFYbENMRU5CUVhwQ0xFVkJRVEpDTEVOQlFUTkNPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1RVRkJaaXhEUVVGelFpeEpRVUYwUWl4RFFVRXlRaXhQUVVGUExFdEJRVkFzUTBGQllTeE5RVUY0UXl4RlFVRm5SQ3hMUVVGTExGbEJRWEpFTEVWQlFXdEZMRWxCUVd4Rk96dEJRVVZCTEdsQ1FVRkxMRlZCUVV3N1FVRkRTRHM3TzJsRFFVVlJPMEZCUTB3c2FVSkJRVXNzVVVGQlREdEJRVVZJT3p0QlFVVkVPenM3TzIxRFFVTlZPMEZCUTA0c1owSkJRVWtzVTBGQlV5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGRkJRV2hDTEVOQlFYbENMRTFCUVhwQ0xFTkJRV2RETEU5QlFVOHNVVUZCVUN4RFFVRm5RaXhIUVVGb1JDeERRVUZpTzBGQlEwRXNaMEpCUVVjc1RVRkJTQ3hGUVVGVk8wRkJRMDRzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQmFFSXNRMEZCYzBJc1RVRkJkRUk3UVVGRFNEdEJRVU5LT3pzN2RVTkJSV003UVVGRFdDeHBRa0ZCU3l4UlFVRk1PenRCUVVWQkxHbENRVUZMTEZGQlFVd3NRMEZCWXl4SlFVRmtMRWRCUVhGQ0xHZENRVUZuUWl4TFFVRkxMRkZCUVRGRE8wRkJRMEVzWjBKQlFVY3NTMEZCU3l4UlFVRk1MRWxCUVdsQ0xFTkJRWEJDTEVWQlFYVkNPMEZCUTI1Q08wRkJRMEVzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQmFFSXNRMEZCYzBJc1YwRkJkRUk3UVVGRFNEdEJRVU5LT3pzN2NVTkJRMWs3TzBGQlJWUXNaMEpCUVVrc1dVRkJXU3hEUVVGRExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNSMEZCYlVJc1MwRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFJRVUYyUXl4SFFVRnZSQ3hEUVVGRExFdEJRVXNzVDBGQlRDeEhRVUZsTEVOQlFXaENMRWxCUVhOQ0xFdEJRVXNzVjBGQmFFWXNTVUZCT0VZc1EwRkJPVWM3UVVGRFFTeG5Ra0ZCU1N4WFFVRlpMRU5CUVVNc1MwRkJTeXhKUVVGTUxFTkJRVlVzVFVGQlZpeEhRVUZ2UWl4TFFVRkxMRTlCUVV3c1IwRkJaU3hMUVVGTExGRkJRWGhETEVkQlFYRkVMRU5CUVVNc1MwRkJTeXhQUVVGTUxFZEJRV1VzUTBGQmFFSXNTVUZCYzBJc1MwRkJTeXhYUVVGcVJpeEpRVUVyUml4RFFVRXZSenM3UVVGRlFUdEJRVU5CTEdsQ1FVRkpMRWxCUVVrc1NVRkJTU3hEUVVGYUxFVkJRV1VzU1VGQlNTeExRVUZMTEZOQlFYaENMRVZCUVcxRExFZEJRVzVETEVWQlFYZERPMEZCUTNCRExIRkNRVUZMTEZWQlFVd3NRMEZCWjBJc1NVRkJhRUlzUTBGQmNVSXNTMEZCU3l4TFFVRk1MRU5CUVZjc1NVRkJTU3hEUVVGbUxFTkJRWEpDTzBGQlEwZzdPMEZCUlVRN1FVRkRRU3hwUWtGQlNTeEpRVUZKTEV0QlFVa3NRMEZCV2l4RlFVRmxMRXRCUVVrc1MwRkJTeXhUUVVGNFFpeEZRVUZ0UXl4SlFVRnVReXhGUVVGM1F6dEJRVU53UXl4dlFrRkJTU3hQUVVGUkxFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4UFFVRmtMRU5CUVhOQ0xFTkJRWFJDTEVWQlFYbENMRXRCUVVzc1ZVRkJUQ3hEUVVGblFpeE5RVUZvUWl4SFFVRjFRaXhEUVVGb1JDeERRVUZhTzBGQlEwRXNiMEpCUVVrc1MwRkJVU3hMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNUMEZCWkN4RFFVRnpRaXhEUVVGMFFpeEZRVUY1UWl4TFFVRkxMRlZCUVV3c1EwRkJaMElzVFVGQmFFSXNSMEZCZFVJc1EwRkJhRVFzUTBGQldqdEJRVU5CTEc5Q1FVRkpMRTlCUVZFc1MwRkJTeXhWUVVGTUxFTkJRV2RDTEVsQlFXaENMRU5CUVZvN08wRkJSVUVzY1VKQlFVc3NWVUZCVEN4RFFVRm5RaXhKUVVGb1FpeEpRVUYzUWl4TFFVRkxMRlZCUVV3c1EwRkJaMElzUlVGQmFFSXNRMEZCZUVJN1FVRkRRU3h4UWtGQlN5eFZRVUZNTEVOQlFXZENMRVZCUVdoQ0xFbEJRWE5DTEVsQlFYUkNPMEZCUTBnN08wRkJSVVE3UVVGRFFTeHBRa0ZCU1N4SlFVRkpMRTFCUVVrc1EwRkJXaXhGUVVGbExFMUJRVWtzUzBGQlN5eFBRVUY0UWl4RlFVRnBReXhMUVVGcVF5eEZRVUZ6UXpzN1FVRkZiRU1zY1VKQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVZvc1JVRkJaU3hKUVVGSkxFdEJRVXNzVDBGQmVFSXNSVUZCYVVNc1IwRkJha01zUlVGQmMwTTdPMEZCUjJ4RExIZENRVUZKTEU5QlFVOHNlVUpCUVdVN1FVRkRkRUlzT0VKQlFVMHNTMEZCU3l4SlFVUlhPMEZCUlhSQ0xESkNRVUZITEZsQlFWa3NUMEZCU3l4TFFVRkxMRkZCUVV3c1IwRkJaMElzUzBGQlN5eFhRVUV4UWl4RFFVRmFMRWRCUVhGRUxFVkJSbXhETzBGQlIzUkNMREpDUVVGSExGZEJRVmNzUzBGQlN5eExRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJTeXhYUVVFeFFpeERRVUZZTEVkQlFXOUVMRWRCU0dwRE8wRkJTWFJDTEN0Q1FVRlBMRTlCU21VN1FVRkxkRUlzYTBOQlFWVXNTMEZCU3l4UlFVeFBPMEZCVFhSQ0xIbERRVUZwUWl4SlFVNUxPMEZCVDNSQ0xHMURRVUZYTEVWQlVGYzdRVUZSZEVJc0swSkJRVThzUzBGQlN5eFZRVUZNTEVOQlFXZENMRWxCUVVrc1MwRkJTeXhQUVVGVUxFZEJRVzFDTEVkQlFXNURMRU5CVW1VN1FVRlRkRUlzYTBOQlFWVTdRVUZVV1N4eFFrRkJaaXhEUVVGWU8wRkJWMEU3UVVGRFFUdEJRVU5CTEhkQ1FVRkhMRXRCUVVzc1MwRkJUQ3hKUVVGakxFTkJRV3BDTEVWQlFXMUNPMEZCUTJZc05rSkJRVXNzUzBGQlRDeEhRVUZoTEV0QlFVc3NXVUZCYkVJN1FVRkRRU3cyUWtGQlN5eFJRVUZNTEVkQlFXZENMRWxCUVdoQ08wRkJRMGc3TzBGQlJVUXNlVUpCUVVzc1MwRkJUQ3hIUVVGaExFdEJRVXNzWVVGQmJFSTdRVUZEUVN4NVFrRkJTeXhUUVVGTUxFTkJRV1VzUjBGQlppeERRVUZ0UWl4SlFVRnVRanRCUVVWSU8wRkJRMG83UVVGRFNqczdPMmxEUVVOUkxGVXNSVUZCV1R0QlFVTnFRanM3T3p0QlFVbEJMR2RDUVVGSExFdEJRVXNzYTBKQlFVd3NRMEZCZDBJc1RVRkJlRUlzUjBGQmFVTXNRMEZCYWtNc1NVRkJjME1zUzBGQlN5eHJRa0ZCVEN4RFFVRjNRaXhQUVVGNFFpeERRVUZuUXl4VlFVRm9ReXhOUVVGblJDeERRVUZETEVOQlFURkdMRVZCUVRaR08wRkJRM3BHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc01rSkJRVmNzUzBGQldDeEhRVUZ0UWl4WFFVRlhMRXRCUVRsQ08wRkJRMEVzY1VKQlFVc3NhMEpCUVV3c1EwRkJkMElzU1VGQmVFSXNRMEZCTmtJc1ZVRkJOMEk3TzBGQlJVRXNiMEpCUVVjc1MwRkJTeXhyUWtGQlRDeERRVUYzUWl4TlFVRjRRaXhMUVVGdFF5eERRVUYwUXl4RlFVRjVRenRCUVVOeVF5eDVRa0ZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExFMUJRV1lzUTBGQmMwSXNSMEZCZEVJc1EwRkJNRUlzVDBGQlR5eExRVUZRTEVOQlFXRXNUVUZCZGtNc1JVRkJLME1zUzBGQlN5eFZRVUZ3UkN4RlFVRm5SU3hKUVVGb1JUdEJRVU5JTzBGQlEwbzdRVUZGU2pzN08zRkRRVVZaTzBGQlExUTdPenM3UVVGSlFTeG5Ra0ZCUnl4TFFVRkxMR3RDUVVGTUxFTkJRWGRDTEVOQlFYaENMRVZCUVRKQ0xFdEJRVE5DTEV0QlFYRkRMRXRCUVVzc2EwSkJRVXdzUTBGQmQwSXNRMEZCZUVJc1JVRkJNa0lzUzBGQmJrVXNSVUZCTUVVN1FVRkRkRVU3T3pzN096czdRVUZQUVN4eFFrRkJTeXhMUVVGTU8wRkJRMEVzY1VKQlFVc3NVVUZCVEN4SlFVRnBRaXhEUVVGcVFqdEJRVU5CTEhGQ1FVRkxMRkZCUVV3c1EwRkJZeXhKUVVGa0xFZEJRWEZDTEdkQ1FVRm5RaXhMUVVGTExGRkJRVEZETzBGQlEwRXNjVUpCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUjBGQmMwSXNXVUZCV1N4TFFVRkxMRXRCUVhaRE96dEJRVVZCTzBGQlEwRXNiMEpCUVVjc1MwRkJTeXhyUWtGQlRDeERRVUYzUWl4RFFVRjRRaXhGUVVFeVFpeFJRVUU1UWl4RlFVRjNRenRCUVVOd1F5eDVRa0ZCU3l4cFFrRkJUQ3hEUVVGMVFpeFJRVUYyUWp0QlFVTklPenRCUVVWRUxIRkNRVUZMTEd0Q1FVRk1MRU5CUVhkQ0xFTkJRWGhDTEVWQlFUSkNMRTlCUVROQ08wRkJRMEVzY1VKQlFVc3NhMEpCUVV3c1EwRkJkMElzUTBGQmVFSXNSVUZCTWtJc1QwRkJNMEk3UVVGRFFTeHhRa0ZCU3l4VFFVRk1MRWxCUVd0Q0xFTkJRV3hDT3p0QlFVVkJPMEZCUTBFc2IwSkJRVWNzUzBGQlN5eFRRVUZNTEV0QlFXMUNMRU5CUVhSQ0xFVkJRVEJDTzBGQlEzUkNMSGxDUVVGTExGVkJRVXdzUTBGQlowSXNUVUZCYUVJc1IwRkJlVUlzUTBGQmVrSTdRVUZEUVN4NVFrRkJTeXhyUWtGQlRDeERRVUYzUWl4TlFVRjRRaXhIUVVGcFF5eERRVUZxUXp0QlFVTkJPMEZCUTBFc2VVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1MwRkJhRUlzUTBGQmMwSXNWMEZCZEVJN1FVRkRTRHRCUVVOS0xHRkJOMEpFTEUxQk9FSkpPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHhRa0ZCU3l4SlFVRk1MRU5CUVZVc1RVRkJWaXhEUVVGcFFpeExRVUZxUWl4RFFVRjFRaXhKUVVGMlFpeEZRVUUyUWl4SFFVRTNRanRCUVVOQk8wRkJRMEVzY1VKQlFVc3NhMEpCUVV3c1EwRkJkMElzUTBGQmVFSXNSVUZCTWtJc1MwRkJNMElzUjBGQmJVTXNTMEZCU3l4aFFVRjRRenRCUVVOQkxIRkNRVUZMTEd0Q1FVRk1MRU5CUVhkQ0xFTkJRWGhDTEVWQlFUSkNMRXRCUVROQ0xFZEJRVzFETEV0QlFVc3NZVUZCZUVNN1FVRkRTRHRCUVVORUxHbENRVUZMTEd0Q1FVRk1MRU5CUVhkQ0xFMUJRWGhDTEVkQlFXbERMRU5CUVdwRE8wRkJRMGc3T3pzd1EwRkZhVUlzVFN4RlFVRlJPMEZCUTNSQ0xHdENRVUZOTEhsRFFVRk9PMEZCUTBnN096czdSVUY0VFd0RExFOUJRVThzU3pzN2EwSkJRWHBDTEZNN096czdPenM3T3pzN08wRkRSbkpDT3pzN096czdPenM3T3pzN1NVRkZjVUlzVVRzN096czdPenM3T3pzN2FVTkJSVkk3UVVGQlFUczdRVUZKVEN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzWlVGQldDeEhRVUUyUWl4VFFVRTNRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NSMEZCYVVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEVOQlFXWXNSVUZCYVVJc1EwRkJha0lzUlVGQmIwSXNXVUZCY0VJc1EwRkJha0k3TzBGQlIwRXNhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhIUVVFeVFpeEhRVUV4UXl4RlFVRTRReXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoQ0xFZEJRVEJDTEVkQlFYaEZMRVZCUVRaRkxGTkJRVGRGTEVOQlFYSkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4TlFVRnVRaXhEUVVFd1FpeExRVUV4UWl4RFFVRm5ReXhIUVVGb1F6czdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFZEJRV0VzZVVKQlFXVTdRVUZEZUVJc2MwSkJRVTBzUzBGQlN5eEpRVVJoTzBGQlJYaENMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQk1FSXNSMEZHVER0QlFVZDRRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFUQkNMRWRCU0V3N1FVRkplRUlzZFVKQlFVOHNVMEZLYVVJN1FVRkxlRUlzTWtKQlFWY3NRMEZNWVR0QlFVMTRRaXd3UWtGQlZTeERRVTVqTzBGQlQzaENMREpDUVVGWExFTkJVR0U3UVVGUmVFSXNlVUpCUVZNc1EwRlNaVHRCUVZONFFpeDFRa0ZCVHl4WFFWUnBRanRCUVZWNFFpeDFRa0ZCVHp0QlFVTklMREJDUVVGTkxHZENRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXYVVJc1lVRkJaaXhEUVVGaU96dEJRV2xDUVN4cFFrRkJTeXhKUVVGTUxFZEJRVmtzZVVKQlFXVTdRVUZEZGtJc2MwSkJRVTBzUzBGQlN5eEpRVVJaTzBGQlJYWkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQk1FSXNSMEZHVGp0QlFVZDJRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFUSkNMRWRCU0ZBN1FVRkpka0lzZFVKQlFVOHNVMEZLWjBJN1FVRkxka0lzTWtKQlFWY3NRMEZNV1R0QlFVMTJRaXd3UWtGQlZTeERRVTVoTzBGQlQzWkNMREpDUVVGWExFTkJVRms3UVVGUmRrSXNlVUpCUVZNc1EwRlNZenRCUVZOMlFpeDFRa0ZCVHl4TlFWUm5RanRCUVZWMlFpeDFRa0ZCVHp0QlFVTklMREJDUVVGTkxHZENRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXWjBJc1lVRkJaaXhEUVVGYU96dEJRV2xDUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDTzBGQlEwRXNhVUpCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1UwRkJaaXhEUVVGdVFqdEJRVU5CTEdsQ1FVRkxMRmxCUVV3c1IwRkJiMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRlZCUVdZc1EwRkJjRUk3TzBGQlJVRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExGbEJRVmdzUTBGQmQwSXNTMEZCU3l4WlFVRTNRanRCUVVOQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WFFVRllMRU5CUVhWQ0xFdEJRVXNzVjBGQk5VSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzV1VGQldDeERRVUYzUWl4TFFVRkxMRmxCUVRkQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRmxCUVZZc1EwRkJkVUlzUzBGQlN5eFpRVUUxUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFhRVUZXTEVOQlFYTkNMRXRCUVVzc1YwRkJNMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1dVRkJWaXhEUVVGMVFpeExRVUZMTEZsQlFUVkNPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WFFVRllMRU5CUVhWQ0xFZEJRWFpDTEVOQlFUSkNMRmxCUVVrN1FVRkRNMElzZFVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVlVGQmFrSTdRVUZEU0N4aFFVWkVPenRCUVVsQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4WFFVRldMRU5CUVhOQ0xFZEJRWFJDTEVOQlFUQkNMRmxCUVVrN1FVRkRNVUlzZFVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVFVGQmFrSTdRVUZEU0N4aFFVWkVPenRCUVVsQkxHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVUZ5UWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzUzBGQlN5eGhRVUUxUWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzUzBGQlN5eExRVUUxUWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzUzBGQlN5eEpRVUUxUWp0QlFVTklPenM3YVVOQlJWRXNRMEZEVWpzN096dEZRWHBGYVVNc1QwRkJUeXhMT3p0clFrRkJlRUlzVVRzN096czdPenM3T3pzN1FVTkdja0k3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRmNVSXNVVHM3T3pzN096czdPenM3TmtKQlJWb3NZU3hGUVVGbE8wRkJRMmhDTzBGQlEwRXNiMEpCUVZFc1IwRkJVaXhEUVVGWkxHRkJRVm83UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xHRkJRWEpDTzBGQlEwZzdPenRwUTBGRlVUdEJRVUZCT3p0QlFVbE1PMEZCUTBFc2FVSkJRVXNzUlVGQlRDeEhRVUZWTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hEUVVGbUxFVkJRV3RDTEVOQlFXeENMRVZCUVc5Q0xGRkJRWEJDTEVOQlFWWTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEZWQlFXWXNSMEZCTkVJc1EwRkJOVUk3TzBGQlIwRTdRVUZEUVN4cFFrRkJTeXhOUVVGTUxFZEJRV01zY1VKQlFWYzdRVUZEY2tJc2MwSkJRVTBzUzBGQlN5eEpRVVJWTzBGQlJYSkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdSVHRCUVVkeVFpeHRRa0ZCUnl4UFFVRlBMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUVUZJVER0QlFVbHlRaXgzUWtGQlVTeEZRVXBoTzBGQlMzSkNMSFZDUVVGUExFOUJUR003UVVGTmNrSXNkVUpCUVU4N1FVRk9ZeXhoUVVGWUxFTkJRV1E3TzBGQlUwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNVVUZCYUVJc1EwRkJlVUlzUzBGQlN5eE5RVUU1UWpzN1FVRkhRVHRCUVVOQkxHbENRVUZMTEU5QlFVd3NSMEZCWlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJRV1k3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1ZVRkJZaXhIUVVFd1FpeEpRVUV4UWp0QlFVTkJMR2xDUVVGTExGTkJRVXdzUjBGQmFVSXNRMEZCYWtJN1FVRkRiMEk3UVVGRGNFSXNhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeEhRVUZ5UWp0QlFVTkJMR2xDUVVGTExHTkJRVXdzUjBGQmMwSXNRMEZCZEVJN1FVRkRRU3hwUWtGQlN5eHJRa0ZCVEN4SFFVRXdRaXhEUVVFeFFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFc2FVSkJRVXNzWTBGQlRDeEhRVUZ6UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJRWFJDTzBGQlEwRXNhVUpCUVVzc1kwRkJUQ3hEUVVGdlFpeFZRVUZ3UWl4SFFVRnBReXhKUVVGcVF6dEJRVU5CT3pzN1FVRkhRVHRCUVVOQkxHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVUZ5UWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNWVUZCYmtJc1IwRkJaME1zU1VGQmFFTTdRVUZEU1RzN08wRkJTVW9zYVVKQlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hOUVVGbUxFTkJRWE5DTEVkQlFYUkNMRU5CUVRCQ0xFOUJRVThzUzBGQlVDeERRVUZoTEUxQlFXSXNSMEZCYzBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEdOQlFXUXNRMEZCTmtJc1EwRkJOMElzUlVGQkswSXNSVUZCTDBJc1EwRkJhRVFzUlVGQmIwWXNXVUZCVlR0QlFVTXhSaXh4UWtGQlN5eHBRa0ZCVEN4RFFVRjFRanRCUVVOdVFpd3dRa0ZCVFN4TFFVRkxMRWxCUkZFN1FVRkZia0lzZFVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxHTkJRV1FzUTBGQk5rSXNRMEZCTjBJc1JVRkJaME1zUlVGQmFFTXNTVUZCYzBNc1JVRkdkRUk3UVVGSGJrSXNkVUpCUVVjc1EwRklaMEk3UVVGSmJrSXNNa0pCUVU4N1FVRkRTQ3d5UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXl4RlFVRjBReXhKUVVFMFF5eExRVUZMTEUxQlFVd3NTMEZCWjBJc1IwRkJhRUlzUjBGQmMwSXNRMEZCZEVJc1IwRkJNRUlzUTBGQlF5eERRVUYyUlN4RFFVUkJPMEZCUlVnc01rSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1JVRkJhRU1zU1VGQmMwTTdRVUZHZEVNc2NVSkJTbGs3UVVGUmJrSXNORUpCUVZFc1JVRlNWenRCUVZOdVFpd3lRa0ZCVHl4aFFWUlpPMEZCVlc1Q0xESkNRVUZQTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVOQlFUZENMRVZCUVdkRExFTkJRV2hETzBGQlZsa3NhVUpCUVhaQ08wRkJXVWdzWVVGaVJDeEZRV0ZITEVsQllrZzdPMEZCWjBKQk96dEJRVVZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVFVGQlppeERRVUZ6UWl4SlFVRjBRaXhEUVVFeVFpeFBRVUZQTEV0QlFWQXNRMEZCWVN4TlFVRmlMRWRCUVhOQ0xFVkJRV3BFTEVWQlFYRkVMRmxCUVUwN1FVRkRka1FzYjBKQlFVY3NUMEZCU3l4aFFVRk1MRWRCUVhGQ0xFZEJRWGhDTEVWQlFUWkNPMEZCUTNwQ0xESkNRVUZMTEdGQlFVd3NTVUZCYzBJc1IwRkJkRUk3UVVGRFNEdEJRVU5LTEdGQlNrUTdPMEZCVFVFc2FVSkJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhWUVVGVUxFTkJRVzlDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVRsQ0xFVkJRWEZETEV0QlFVc3NTVUZCVEN4RFFVRlZMRTFCUVM5RExFTkJRWEpDTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRjFRaXhUUVVGMlFpeEhRVUZ0UXl4TlFVRnVRenRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNVVUZCZGtJc1EwRkJaME1zUTBGQmFFTXNSVUZCYlVNc1EwRkJia01zUlVGQmMwTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJhRVFzUlVGQmRVUXNTMEZCU3l4SlFVRk1MRU5CUVZVc1RVRkJha1U3TzBGQlJVRXNhVUpCUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzUjBGQlRDeERRVUZUTEUxQlFWUXNRMEZCWjBJc1EwRkJhRUlzUlVGQmJVSXNRMEZCYmtJc1JVRkJjMElzUzBGQlN5eGhRVUV6UWl4RFFVRm1PMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEU5QlFXSXNSMEZCZFVJc1MwRkJka0k3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1MwRkJZaXhIUVVGeFFpeEpRVUZ5UWpzN1FVRkZRU3hwUWtGQlN5eEhRVUZNTEVkQlFWY3NhMEpCUVZFN1FVRkRaaXh6UWtGQlRTeExRVUZMTEVsQlJFazdRVUZGWml4M1FrRkJVU3hMUVVGTE8wRkJSa1VzWVVGQlVpeERRVUZZT3p0QlFVdEJPMEZCUTBRN1FVRkRReXhwUWtGQlN5eGpRVUZNTEVkQlFYTkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFhRVUZtTEVOQlFYUkNPMEZCUTBFc2FVSkJRVXNzYlVKQlFVd3NSMEZCTWtJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEdkQ1FVRm1MRU5CUVROQ08wRkJRMEVzYVVKQlFVc3NiMEpCUVV3c1IwRkJORUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMR2xDUVVGbUxFTkJRVFZDTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGeVFqdEJRVVZJT3pzN2FVTkJSVkU3TzBGQlJVd3NhVUpCUVVzc1UwRkJUQ3hKUVVGclFpeExRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1kwRkJha003UVVGRFFTeHBRa0ZCU3l4alFVRk1MRWxCUVhWQ0xFdEJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4alFVRjBRenM3UVVGSFFTeG5Ra0ZCU1N4TFFVRkxMRk5CUVV3c1IwRkJhVUlzUzBGQlN5eGhRVUV4UWl4RlFVRjVRenRCUVVOeVF5eHhRa0ZCU3l4VFFVRk1MRWRCUVdsQ0xFTkJRV3BDT3p0QlFVVkJMSEZDUVVGTExGZEJRVXdzUTBGQmFVSTdRVUZEWWl3d1FrRkJUU3hMUVVGTExFbEJSRVU3UVVGRllpeDFRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zWTBGQlpDeERRVUUyUWl4RFFVRTNRaXhGUVVGblF5eEZRVUZvUXl4SlFVRnpReXhGUVVZMVFqdEJRVWRpTzBGQlEwRXNkVUpCUVVjc1EwRkJReXhIUVVwVE8wRkJTMklzTWtKQlFVODdRVUZEU0N3eVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVGRExFZEJRVGxDTEVWQlFXMURMRWRCUVc1RExFdEJRVEpETEV0QlFVc3NUVUZCVEN4TFFVRm5RaXhIUVVGb1FpeEhRVUZ6UWl4RFFVRjBRaXhIUVVFd1FpeERRVUZETEVOQlFYUkZMRU5CUkVFN1FVRkZTQ3d5UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUZETEVkQlFUbENMRVZCUVd0RExFZEJRV3hET3p0QlFVWkJMSEZDUVV4Tk96dEJRVmRpTERSQ1FVRlJMRU5CV0VzN1FVRlpZaXhwUTBGQllTeERRVnBCTzBGQllXSXNNa0pCUVU4c1UwRmlUVHRCUVdOaUxEQkNRVUZOTEZGQlpFODdRVUZsWWl3eVFrRkJUeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUVyUWl4RFFVRXZRanM3UVVGbVRTeHBRa0ZCYWtJN1FVRnJRa2c3TzBGQlJVUXNaMEpCUVVrc1MwRkJTeXhqUVVGTUxFZEJRWE5DTEV0QlFVc3NhMEpCUVM5Q0xFVkJRVzFFTzBGQlF5OURMSEZDUVVGTExHTkJRVXdzUjBGQmMwSXNRMEZCZEVJN1FVRkRRU3h2UWtGQlNTeERRVUZETEV0QlFVc3NUVUZCVEN4RFFVRlpMRXRCUVdwQ0xFVkJRWGRDTzBGQlEzQkNMSGxDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRlZCUVdoQ0xFTkJRVEpDTEV0QlFVc3NUMEZCYUVNN1FVRkRRU3cwUWtGQlVTeEhRVUZTTEVOQlFWa3NXVUZCV2p0QlFVTklPMEZCUTBvN08wRkJSMFFzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkJhMElzVFVGQmJFSXNRMEZCZVVJc1QwRkJla0lzUTBGQmFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1QwRkJOME1zUlVGQmMwUXNRMEZCUXl4TFFVRkxMRTlCUVU0c1JVRkJZeXhMUVVGTExHTkJRVzVDTEVWQlFXdERMRXRCUVVzc1lVRkJka01zUTBGQmRFUXNSVUZCTmtjc1MwRkJTeXhSUVVGc1NDeEZRVUUwU0N4SlFVRTFTQ3hGUVVGclNTeEpRVUZzU1R0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRTFCUVd4Q0xFTkJRWGxDTEU5QlFYcENMRU5CUVdsRExFdEJRVXNzVFVGQmRFTXNSVUZCT0VNc1EwRkJReXhMUVVGTExFOUJRVTRzUlVGQll5eExRVUZMTEdOQlFXNUNMRU5CUVRsRExFVkJRV3RHTEV0QlFVc3NWVUZCZGtZc1JVRkJiVWNzU1VGQmJrY3NSVUZCZVVjc1NVRkJla2M3UVVGRFFTeHBRa0ZCU3l4UlFVRk1PMEZCUlVnN096dHZRMEZGVnl4SkxFVkJRVTA3TzBGQlJXUXNaMEpCUVVrc1VVRkJVU3hMUVVGTExFOUJRVXdzUTBGQllTeGpRVUZpTEVOQlFUUkNMRXRCUVRWQ0xFTkJRVm83UVVGRFFTeG5Ra0ZCU1N4bFFVRmxMRXRCUVVzc1QwRkJUQ3hEUVVGaExGRkJRV0lzUTBGQmMwSXNUVUZCZWtNN08wRkJSVUVzWjBKQlFVa3NRMEZCUXl4TFFVRk1MRVZCUVZrN1FVRkRVaXgzUWtGQlVTeDNRa0ZCVlN4SlFVRldMRU5CUVZJN1FVRkRRU3h2UWtGQlJ5eG5Ra0ZCWjBJc1EwRkJia0lzUlVGQmNVSTdRVUZEYWtJc2VVSkJRVXNzVDBGQlRDeERRVUZoTEVkQlFXSXNRMEZCYVVJc1MwRkJha0k3UVVGRFNEdEJRVVZLTzBGQlEwUXNhMEpCUVUwc1MwRkJUaXhEUVVGWkxFbEJRVm83UVVGRFNEczdPekpEUVVWclFpeEpMRVZCUVUwN08wRkJSWEpDTEdkQ1FVRkpMRkZCUVZFc1MwRkJTeXhqUVVGTUxFTkJRVzlDTEdOQlFYQkNMRU5CUVcxRExFdEJRVzVETEVOQlFWbzdRVUZEUVN4blFrRkJTU3hsUVVGbExFdEJRVXNzWTBGQlRDeERRVUZ2UWl4UlFVRndRaXhEUVVFMlFpeE5RVUZvUkRzN1FVRkZRU3huUWtGQlNTeERRVUZETEV0QlFVd3NSVUZCV1R0QlFVTlNMSGRDUVVGUkxIZENRVUZWTEVsQlFWWXNRMEZCVWp0QlFVTkJMRzlDUVVGSExHZENRVUZuUWl4RlFVRnVRaXhGUVVGelFqdEJRVU5zUWl4NVFrRkJTeXhqUVVGTUxFTkJRVzlDTEVkQlFYQkNMRU5CUVhkQ0xFdEJRWGhDTzBGQlEwZzdRVUZGU2p0QlFVTkVMR3RDUVVGTkxFdEJRVTRzUTBGQldTeEpRVUZhTzBGQlEwZzdPenN3UTBGRmFVSXNTU3hGUVVGTk96dEJRVVZ3UWl4blFrRkJTU3hSUVVGUkxFdEJRVXNzWVVGQlRDeERRVUZ0UWl4alFVRnVRaXhEUVVGclF5eExRVUZzUXl4RFFVRmFPMEZCUTBFc1owSkJRVWtzWlVGQlpTeExRVUZMTEdGQlFVd3NRMEZCYlVJc1VVRkJia0lzUTBGQk5FSXNUVUZCTDBNN1FVRkRRU3h2UWtGQlVTeEhRVUZTTEVOQlFWa3NXVUZCV2pzN1FVRkZRU3huUWtGQlNTeERRVUZETEV0QlFVd3NSVUZCV1R0QlFVTlNMSGRDUVVGUkxIZENRVUZWTEVsQlFWWXNRMEZCVWp0QlFVTkJMRzlDUVVGSExHZENRVUZuUWl4RFFVRnVRaXhGUVVGeFFqdEJRVU5xUWl4NVFrRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVhWQ0xFdEJRWFpDTzBGQlEwZzdRVUZGU2p0QlFVTkVMR3RDUVVGTkxFdEJRVTRzUTBGQldTeEpRVUZhTzBGQlEwZzdPenRyUTBGRlV5eEhMRVZCUVVzc1N5eEZRVUZQTzBGQlFVRTdPMEZCUTJ4Q0xHZENRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFdEJRV1FzUTBGQmIwSXNSMEZCY0VJc1EwRkJXanRCUVVOQkxHZENRVUZKTEZWQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFOUJRV1FzUlVGQlpEdEJRVU5CTEdkQ1FVRkpMSEZDUVVGeFFpeERRVUY2UWp0QlFVTkJMR2RDUVVGSkxHZENRVUZuUWl4SFFVRndRanRCUVVOQkxHZENRVUZKTEdWQlFXVXNSVUZCYmtJN08wRkJSVUVzYTBKQlFVMHNSVUZCVGl4RFFVRlRMRVZCUVVNc1RVRkJUU3hSUVVGUUxFVkJRVlFzUlVGQk1rSXNSMEZCTTBJN1FVRkRRU3hyUWtGQlRTeFZRVUZPTEVOQlFXbENMRWRCUVdwQ0xFTkJRWEZDTEZsQlFVMDdRVUZEZGtJc2IwSkJRVWtzU1VGQlNpeEhRVUZYTEZGQlFWZzdRVUZEU0N4aFFVWkVPMEZCUjBFc2EwSkJRVTBzUzBGQlRqczdRVUZGUVN4dlFrRkJVU3hEUVVGU0xFZEJRVmtzU1VGQlNTeERRVUZvUWp0QlFVTkJMRzlDUVVGUkxFTkJRVklzUjBGQldTeEpRVUZKTEVOQlFXaENPMEZCUTBFc2IwSkJRVkVzVDBGQlVpeEhRVUZyUWl4RFFVRnNRanRCUVVOQkxHOUNRVUZSTEdGQlFWSXNRMEZCYzBJc1ZVRkJkRUk3TzBGQlJVRXNaMEpCUVVrc1NVRkJTU3hOUVVGS0xFbEJRV01zUTBGQmJFSXNSVUZCY1VJN1FVRkRha0lzWjBOQlFXZENMRWRCUVdoQ08wRkJRMEVzSzBKQlFXVXNSVUZCWmp0QlFVTkJMSGRDUVVGUkxGRkJRVkk3UVVGRFNEczdRVUZGUkN4dlFrRkJVU3huUWtGQlVpeERRVUY1UWl4TFFVRjZRaXhEUVVFclFpeERRVUZETEdGQlFXaERMRVZCUVN0RExFTkJRVU1zWVVGQmFFUTdRVUZEUVN4dlFrRkJVU3huUWtGQlVpeERRVUY1UWl4TFFVRjZRaXhEUVVFclFpeGhRVUV2UWl4RlFVRTRReXhoUVVFNVF6dEJRVU5CTEc5Q1FVRlJMRXRCUVZJc1EwRkJZeXhKUVVGa0xFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFbEJRWHBDTEVWQlFTdENMRmxCUVM5Q08wRkJRMEVzYjBKQlFWRXNUVUZCVWl4SFFVRnBRaXhaUVVGTk8wRkJRMjVDTEhORFFVRnpRaXhQUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNZMEZCY2tNN1FVRkRRU3h2UWtGQlJ5eHpRa0ZCYzBJc1IwRkJla0lzUlVGQk5rSTdRVUZEZWtJc2VVTkJRWEZDTEVOQlFYSkNPMEZCUTBFc05FSkJRVkVzVDBGQlVqdEJRVU5JTzBGQlJVb3NZVUZRUkR0QlFWRkJMRzlDUVVGUkxFOUJRVklzUTBGQlowSTdRVUZCUVN4MVFrRkJXU3hUUVVGVExFbEJRVlFzUjBGQlowSXNTMEZCTlVJN1FVRkJRU3hoUVVGb1FqdEJRVU5CTEdkQ1FVRkpMRU5CUVVNc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQmFrSXNSVUZCZDBJN1FVRkRjRUlzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVlVGQmFFSXNRMEZCTWtJc1MwRkJTeXhQUVVGb1F6dEJRVU5JTzBGQlEwbzdPenRwUTBGRlVTeE5MRVZCUVZFc1N5eEZRVUZQTzBGQlEzQkNMR2xDUVVGTExHTkJRVXdzUTBGQmIwSXNTVUZCY0VJc1EwRkJlVUlzUlVGQmVrSXNSVUZCTkVJc1EwRkJOVUlzUlVGQk9FSXNSMEZCT1VJN1FVRkRRU3hyUWtGQlRTeE5RVUZPTEVOQlFXRXNUMEZCVHl4TlFVRndRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFOUJRVThzU1VGQk4wSTdRVUZEUVN4blFrRkJTU3hEUVVGRExFMUJRVTBzUzBGQldDeEZRVUZyUWp0QlFVTmtMSEZDUVVGTExHMUNRVUZNTEVOQlFYbENMRWxCUVhwQ0xFTkJRVGhDTEVWQlFUbENMRVZCUVd0RExFTkJRV3hETEVWQlFYRkRMRWRCUVhKRE8wRkJRMEVzY1VKQlFVc3NSMEZCVEN4RFFVRlRMRmRCUVZRc1EwRkJjVUlzVFVGQlRTeFRRVUV6UWp0QlFVTkJMRzlDUVVGSkxFMUJRVTBzU1VGQlRpeExRVUZsTEZGQlFXNUNMRVZCUVRaQ096dEJRVVY2UWl4NVFrRkJTeXhyUWtGQlRDeERRVU5KTzBGQlEwa3NPRUpCUVUwc1MwRkJTeXhKUVVSbU8wRkJSVWtzTWtKQlFVY3NUVUZCVFN4RFFVWmlPMEZCUjBrN1FVRkRRVHRCUVVOQkxESkNRVUZITEUxQlFVMHNRMEZNWWp0QlFVMUpMQ3RDUVVGUE8wRkJRMGdzSzBKQlFVY3NRMEZCUXl4SFFVUkVPMEZCUlVnc0swSkJRVWNzUTBGQlF6dEJRVVpFTEhsQ1FVNVlPMEZCV1VrN1FVRkRRU3huUTBGQlVTeERRV0phTzBGQlkwa3NLMEpCUVU4c1UwRmtXRHRCUVdWSkxEaENRVUZOTEU5QlpsWTdRVUZuUWtrc0swSkJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCSzBJc1EwRkJMMEk3TzBGQmFFSllMSEZDUVVSS08wRkJjVUpCTEhsQ1FVRkxMR3RDUVVGTUxFTkJRMGs3UVVGRFNTdzRRa0ZCVFN4TFFVRkxMRWxCUkdZN1FVRkZTU3d5UWtGQlJ5eE5RVUZOTEVOQlJtSTdRVUZIU1N3eVFrRkJSeXhOUVVGTkxFTkJTR0k3UVVGSlNTd3JRa0ZCVHp0QlFVTklMQ3RDUVVGSExFZEJSRUU3UVVGRlNDd3JRa0ZCUnl4RFFVRkRPenRCUVVaRUxIbENRVXBZTzBGQlUwa3NaME5CUVZFc1EwRlVXanRCUVZWSkxDdENRVUZQTEZOQlZsZzdRVUZYU1N3NFFrRkJUU3hQUVZoV08wRkJXVWtzSzBKQlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxHTkJRV1FzUTBGQk5rSXNRMEZCTjBJc1JVRkJLMElzUTBGQkwwSTdPMEZCV2xnc2NVSkJSRW83UVVGcFFrZzdPMEZCUlVRc2RVSkJRVThzU1VGQlVEdEJRVU5JTzBGQlEwbzdPenR0UTBGRlZTeE5MRVZCUVZFc1N5eEZRVUZQTzBGQlEzUkNPMEZCUTBFc2EwSkJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSTdRVUZEUVR0QlFVTkJMRzFDUVVGUExFMUJRVkFzUTBGQll5eERRVUZrTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFMUJRV1k3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1MwRkJaanRCUVVOQkxHZENRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRllMRVZCUVd0Q08wRkJRMlFzY1VKQlFVc3NiVUpCUVV3c1EwRkJlVUlzU1VGQmVrSXNRMEZCT0VJc1JVRkJPVUlzUlVGQmFVTXNRMEZCYWtNc1JVRkJiVU1zUjBGQmJrTTdRVUZEUVN4eFFrRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZDeERRVUZ4UWl4TlFVRk5MRk5CUVROQ08wRkJRMGc3UVVGRFJDeHBRa0ZCU3l4SFFVRk1MRU5CUVZNc1dVRkJWRHRCUVVOQkxHZENRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRmFMRVZCUVcxQ08wRkJRMllzY1VKQlFVc3NiMEpCUVV3c1EwRkJNRUlzU1VGQk1VSTdRVUZEUVN4eFFrRkJTeXhSUVVGTU8wRkJRMGc3UVVGRFNqczdPMjFEUVVWVE8wRkJRVUU3TzBGQlEwNHNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeFZRVUZtTEVkQlFUUkNMRU5CUVRWQ08wRkJRMEVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRTlCUVdJc1IwRkJkVUlzU1VGQmRrSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhEUVVFeVFpeExRVUZMTEU5QlFXaERPMEZCUTBFc1owSkJRVWtzVVVGQlVTeExRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1RVRkJaaXhEUVVGelFpeExRVUZMTEVsQlFUTkNMRVZCUVdsRExFbEJRV3BETEVOQlFWbzdRVUZEUVN4clFrRkJUU3hIUVVGT0xFTkJRVlVzU1VGQlZpeEZRVUZuUWl4WlFVRk5PMEZCUTJ4Q08wRkJRMEVzZFVKQlFVc3NZVUZCVEN4RFFVRnRRaXhKUVVGdVFqdEJRVU5CTEhWQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFXaENMRU5CUVhOQ0xGVkJRWFJDTzBGQlEwZ3NZVUZLUkR0QlFVdEJMR3RDUVVGTkxFdEJRVTQ3UVVGRFNEczdPMjFEUVVWVE8wRkJRMDRzWjBKQlFVa3NVMEZCVXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFMUJRWHBDTEVOQlFXZERMRTlCUVU4c1VVRkJVQ3hEUVVGblFpeEhRVUZvUkN4RFFVRmlPMEZCUTBFc1owSkJRVWNzVFVGQlNDeEZRVUZWTzBGQlEwNHNjVUpCUVVzc1lVRkJURHRCUVVOQkxIRkNRVUZMTEZWQlFVd3NSMEZCYTBJc1QwRkJiRUk3UVVGRFFTeHhRa0ZCU3l4TlFVRk1MRU5CUVZrc1NVRkJXanRCUVVOQk8wRkJRMEVzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQmFFSXNRMEZCYzBJc1RVRkJkRUlzUlVGQk9FSXNTVUZCT1VJc1JVRkJiME1zUzBGQmNFTXNSVUZCTWtNc1MwRkJTeXhoUVVGb1JDeEZRVUU0UkN4TFFVRkxMRlZCUVc1Rk8wRkJSMGc3UVVGRFNqczdPenRGUVhKVmFVTXNUMEZCVHl4TE96dHJRa0ZCZUVJc1VUczdPenM3T3pzN096czdPenM3T3pzN1NVTktRU3hQT3pzN096czdPenM3T3p0clEwRkZVRHM3UVVGRlRpeHBRa0ZCU3l4UlFVRk1MRWRCUVdkQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEUxQlFWUXNRMEZCWjBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9ReXhGUVVGNVF5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRWHBFTEVWQlFXdEZMRlZCUVd4RkxFTkJRV2hDTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hIUVVGcFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TlFVRlVMRU5CUVdkQ0xFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRU1zUlVGQmVVTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUY2UkN4RlFVRnJSU3hYUVVGc1JTeERRVUZxUWp0QlFVTkJMR2xDUVVGTExGRkJRVXdzUTBGQll5eE5RVUZrTEVOQlFYRkNMRXRCUVhKQ0xFTkJRVEpDTEVkQlFUTkNPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEUxQlFXWXNRMEZCYzBJc1MwRkJkRUlzUTBGQk5FSXNSMEZCTlVJN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMR2RDUVVGV0xFTkJRVEpDTEV0QlFVc3NVMEZCYUVNN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzWVVGQmFFSXNSVUZCSzBJc09FSkJRUzlDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWVUZCYUVJc1JVRkJNa0lzTUVKQlFUTkNPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEZkQlFWWXNRMEZCYzBJc1UwRkJkRUlzUlVGQlowTXNPRUpCUVdoRExFVkJRU3RFTEVkQlFTOUVMRVZCUVcxRkxFVkJRVzVGTEVWQlFYTkZMRU5CUVhSRk96dEJRVVZCT3pzN1FVRkhRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhSUVVGb1FpeEZRVUV3UWl4eFFrRkJNVUk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RlFVRTBRaXgxUWtGQk5VSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4WFFVRm9RaXhGUVVFMlFpeDNRa0ZCTjBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGb1FpeEZRVUY1UWl4eFFrRkJla0k3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWMEZCYUVJc1JVRkJOa0lzUTBGQlF5dzRRa0ZCUkN4RFFVRTNRanRCUVVOQk96dEJRVVZCTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWMEZCYUVJc1JVRkJOa0lzUTBGQlF5dzRRa0ZCUkN4RFFVRTNRanM3UVVGRlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RlFVRTBRaXhEUVVGRExHMURRVUZFTEVOQlFUVkNPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1UwRkJhRUlzUlVGQk1rSXNRMEZCUXl4clEwRkJSQ3hEUVVFelFqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZWQlFXaENMRVZCUVRSQ0xFTkJRVU1zYjBOQlFVUXNRMEZCTlVJN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVjBGQmFFSXNSVUZCTmtJc1EwRkJReXh2UTBGQlJDeERRVUUzUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRmRCUVdoQ0xFVkJRVFpDTEVOQlFVTXNiME5CUVVRc1EwRkJOMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeG5Ra0ZCYUVJc1JVRkJhME1zUTBGQlF5eDVRMEZCUkN4RFFVRnNRenRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGbEJRV2hDTEVWQlFUaENMRU5CUVVNc2NVTkJRVVFzUTBGQk9VSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4cFFrRkJhRUlzUlVGQmJVTXNRMEZCUXl3d1EwRkJSQ3hEUVVGdVF6czdRVUZGUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhGUVVFMFFpeERRVUZETEcxRFFVRkVMRU5CUVRWQ08wRkJRMEU3T3p0QlFVZEJPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGRkJRV2hDTEVWQlFUQkNMSEZDUVVFeFFqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZsQlFXaENMRVZCUVRoQ0xEQkNRVUU1UWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRk5CUVdoQ0xFVkJRVEpDTERSQ1FVRXpRanM3UVVGSFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1lVRkJWaXhEUVVGM1FpeFRRVUY0UWl4RlFVRnJReXhyUTBGQmJFTXNSVUZCY1VVc2IwTkJRWEpGTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxHRkJRVllzUTBGQmQwSXNZVUZCZUVJc1JVRkJjME1zYzBOQlFYUkRMRVZCUVRaRkxIZERRVUUzUlR0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeGhRVUZXTEVOQlFYZENMRTlCUVhoQ0xFVkJRV2RETEdkRFFVRm9ReXhGUVVGcFJTeHJRMEZCYWtVN08wRkJSVUU3T3p0QlFVZEJPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4WFFVRldMRU5CUVhOQ0xFOUJRWFJDTEVWQlFUaENMRFJDUVVFNVFpeEZRVUUwUkN4SFFVRTFSQ3hGUVVGcFJTeEhRVUZxUlN4RlFVRnpSU3hGUVVGMFJUdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEVsQlFXaENMRVZCUVhOQ0xHdENRVUYwUWp0QlFVTkJPMEZCUTBnN096dHBRMEZEVVR0QlFVTk1MR2xDUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRTFCUVdwQ08wRkJRMGc3T3pzN1JVRnFSV2RETEU5QlFVOHNTenM3YTBKQlFYWkNMRTg3T3pzN096czdPenM3TzBGRFFYSkNPenM3T3pzN096czdPenM3U1VGRmNVSXNTVHM3T3pzN096czdPenM3YVVOQlJWSTdRVUZCUVRzN1FVRkZUQ3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRWxCUVVrc1QwRkJUeXhKUVVGWUxFTkJRV2RDTEV0QlFVc3NTVUZCY2tJc1JVRkJNa0lzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVFelF5eEZRVUZ2UkN4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFXaENMRWRCUVhkQ0xFZEJRVFZGTEVWQlFXbEdMRmRCUVdwR0xFVkJRVGhHTzBGQlF5OUhMSE5DUVVGTkxHRkJSSGxITzBGQlJTOUhMSE5DUVVGTkxFOUJSbmxITzBGQlJ5OUhMSFZDUVVGUE8wRkJTSGRITEdGQlFUbEdMRU5CUVhKQ08wRkJTMEVzYVVKQlFVc3NZVUZCVEN4RFFVRnRRaXhOUVVGdVFpeERRVUV3UWl4TFFVRXhRaXhEUVVGblF5eEhRVUZvUXpzN1FVRkZRU3hwUWtGQlN5eExRVUZNTEVkQlFXRXNlVUpCUVdVN1FVRkRlRUlzYzBKQlFVMHNTMEZCU3l4SlFVUmhPMEZCUlhoQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGR1N6dEJRVWQ0UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoQ0xFZEJRWGRDTEVWQlNFZzdRVUZKZUVJc2RVSkJRVThzVVVGS2FVSTdRVUZMZUVJc01rSkJRVmNzUTBGTVlUdEJRVTE0UWl3d1FrRkJWU3hEUVU1ak8wRkJUM2hDTERKQ1FVRlhMRU5CVUdFN1FVRlJlRUlzZVVKQlFWTXNRMEZTWlR0QlFWTjRRaXgxUWtGQlR5eFhRVlJwUWp0QlFWVjRRaXgxUWtGQlR6dEJRVU5JTERCQ1FVRk5MR05CUkVnN1FVRkZTQ3d3UWtGQlRTeFBRVVpJTzBGQlIwZ3NNa0pCUVU4N1FVRklTanRCUVZacFFpeGhRVUZtTEVOQlFXSTdPMEZCYVVKQkxHbENRVUZMTEVsQlFVd3NSMEZCV1N4NVFrRkJaVHRCUVVOMlFpeHpRa0ZCVFN4TFFVRkxMRWxCUkZrN1FVRkZka0lzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVVpKTzBGQlIzWkNMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQmQwSXNSVUZJU2p0QlFVbDJRaXgxUWtGQlR5eFJRVXBuUWp0QlFVdDJRaXd5UWtGQlZ5eERRVXhaTzBGQlRYWkNMREJDUVVGVkxFTkJUbUU3UVVGUGRrSXNNa0pCUVZjc1EwRlFXVHRCUVZGMlFpeDVRa0ZCVXl4RFFWSmpPMEZCVTNaQ0xIVkNRVUZQTEUxQlZHZENPMEZCVlhaQ0xIVkNRVUZQTzBGQlEwZ3NNRUpCUVUwc1kwRkVTRHRCUVVWSUxEQkNRVUZOTEU5QlJrZzdRVUZIU0N3eVFrRkJUenRCUVVoS08wRkJWbWRDTEdGQlFXWXNRMEZCV2pzN1FVRnBRa0VzYVVKQlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNWVUZCWml4RFFVRndRanRCUVVOQkxHbENRVUZMTEZkQlFVd3NSMEZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZOQlFXWXNRMEZCYmtJN1FVRkRRU3hwUWtGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYQkNPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WlFVRllMRU5CUVhkQ0xFdEJRVXNzV1VGQk4wSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzVjBGQldDeERRVUYxUWl4TFFVRkxMRmRCUVRWQ08wRkJRMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmxCUVZnc1EwRkJkMElzUzBGQlN5eFpRVUUzUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFpRVUZXTEVOQlFYVkNMRXRCUVVzc1dVRkJOVUk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1YwRkJWaXhEUVVGelFpeExRVUZMTEZkQlFUTkNPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEZsQlFWWXNRMEZCZFVJc1MwRkJTeXhaUVVFMVFqczdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzVjBGQldDeERRVUYxUWl4SFFVRjJRaXhEUVVFeVFpeFpRVUZKTzBGQlF6TkNMSFZDUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRTFCUVdwQ08wRkJRMGdzWVVGR1JEczdRVUZKUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzVjBGQlZpeERRVUZ6UWl4SFFVRjBRaXhEUVVFd1FpeFpRVUZKTzBGQlF6RkNMSFZDUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRTFCUVdwQ08wRkJRMGdzWVVGR1JEczdRVUZKUVN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJja0k3UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFYVkNMRXRCUVVzc1lVRkJOVUk3UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFYVkNMRXRCUVVzc1MwRkJOVUk3UVVGRFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFZEJRVzVDTEVOQlFYVkNMRXRCUVVzc1NVRkJOVUk3UVVGRFNEczdPenRGUVhCRk5rSXNUMEZCVHl4TE96dHJRa0ZCY0VJc1NUczdPenM3T3pzN096czdRVU5HY2tJN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3T3pzN1NVRkZjVUlzU1RzN096czdPenM3T3pzN2FVTkJSVkk3UVVGQlFUczdRVUZEVER0QlFVTkJMR2xDUVVGTExFOUJRVXdzUjBGQlpTeExRVUZMTEVkQlFVd3NRMEZCVXl4VlFVRlVMRU5CUVc5Q0xFTkJRWEJDTEVWQlFYVkNMRU5CUVhaQ0xFVkJRVEJDTEVkQlFURkNMRVZCUVN0Q0xFbEJRUzlDTEVWQlFYRkRMRk5CUVhKRExFTkJRV1k3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExGVkJRV1lzUjBGQk5FSXNRMEZCTlVJN08wRkJSVUVzYVVKQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUlVGQlpqdEJRVU5CTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3hWUVVGaUxFZEJRVEJDTEVsQlFURkNPenRCUVVWQkxHbENRVUZMTEUxQlFVd3NSMEZCWXl4eFFrRkJWenRCUVVOeVFpeHpRa0ZCVFN4TFFVRkxMRWxCUkZVN1FVRkZja0lzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVVpGTzBGQlIzSkNMRzFDUVVGSExFOUJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhOUVVoTU8wRkJTWEpDTEhkQ1FVRlJMRWRCU21FN1FVRkxja0lzZFVKQlFVOHNZMEZNWXp0QlFVMXlRaXgxUWtGQlR6dEJRVTVqTEdGQlFWZ3NRMEZCWkR0QlFWRkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRkZCUVdoQ0xFTkJRWGxDTEV0QlFVc3NUVUZCT1VJN08wRkJSVUVzYVVKQlFVc3NSMEZCVEN4SFFVRlhMR3RDUVVGUk8wRkJRMllzYzBKQlFVMHNTMEZCU3l4SlFVUkpPMEZCUldZc2QwSkJRVkVzUzBGQlN6dEJRVVpGTEdGQlFWSXNRMEZCV0RzN1FVRkxRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhOUVVGb1FpeERRVUYxUWl4SFFVRjJRaXhEUVVFeVFpeFpRVUZOTzBGQlF6ZENMSFZDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNWVUZCWml4SFFVRTBRaXhEUVVFMVFqdEJRVU5JTEdGQlJrUTdPMEZCU1VFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1NVRkJhRUlzUTBGQmNVSXNSMEZCY2tJc1EwRkJlVUlzV1VGQlRUdEJRVU16UWl4MVFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEZWQlFXWXNSMEZCTkVJc1EwRkJOVUk3UVVGRFNDeGhRVVpFT3p0QlFVbEJMR2xDUVVGTExGTkJRVXdzUjBGQmFVSXNRMEZCYWtJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRWRCUVhKQ08wRkJRMEVzYVVKQlFVc3NZMEZCVEN4SFFVRnpRaXhEUVVGMFFqdEJRVU5CTEdsQ1FVRkxMR3RDUVVGTUxFZEJRVEJDTEVOQlFURkNPMEZCUTBFc2FVSkJRVXNzWlVGQlRDeEhRVUYxUWl4RFFVRjJRanRCUVVOQkxHbENRVUZMTEcxQ1FVRk1MRWRCUVRKQ0xFbEJRVE5DT3p0QlFVVkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNUVUZCWml4RFFVRnpRaXhKUVVGMFFpeERRVUV5UWl4UFFVRlBMRXRCUVZBc1EwRkJZU3hOUVVGaUxFZEJRWE5DTEVWQlFXcEVMRVZCUVhGRUxGbEJRVTA3UVVGRGRrUXNiMEpCUVVjc1QwRkJTeXhoUVVGTUxFZEJRWEZDTEVkQlFYaENMRVZCUVRaQ08wRkJRM3BDTERKQ1FVRkxMR0ZCUVV3c1NVRkJjMElzUjBGQmRFSTdRVUZEU0R0QlFVTktMR0ZCU2tRN08wRkJUVUVzYVVKQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eFZRVUZVTEVOQlFXOUNMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVGxDTEVWQlFYRkRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFMUJRUzlETEVOQlFYSkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeFRRVUYyUWl4SFFVRnRReXhOUVVGdVF6dEJRVU5CTEdsQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNRMEZCZFVJc1VVRkJka0lzUTBGQlowTXNRMEZCYUVNc1JVRkJiVU1zUTBGQmJrTXNSVUZCYzBNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQmFFUXNSVUZCZFVRc1MwRkJTeXhKUVVGTUxFTkJRVlVzVFVGQmFrVTdPMEZCUlVFc2FVSkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NSMEZCVEN4RFFVRlRMRTFCUVZRc1EwRkJaMElzUTBGQmFFSXNSVUZCYlVJc1EwRkJia0lzUlVGQmMwSXNTMEZCU3l4aFFVRXpRaXhEUVVGbU8wRkJRMEVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRTlCUVdJc1IwRkJkVUlzUzBGQmRrSTdRVUZEUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzUzBGQllpeEhRVUZ4UWl4SlFVRnlRanM3UVVGRlJEdEJRVU5ETEdsQ1FVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRmRCUVdZc1EwRkJkRUk3UVVGRFFTeHBRa0ZCU3l4dFFrRkJUQ3hIUVVFeVFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1owSkJRV1lzUTBGQk0wSTdRVUZEUVN4cFFrRkJTeXh2UWtGQlRDeEhRVUUwUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzYVVKQlFXWXNRMEZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYSkNPenRCUVVWQk8wRkJRMGc3T3p0cFEwRkZVVHRCUVVGQk96dEJRVVZNTEdsQ1FVRkxMRk5CUVV3c1NVRkJhMElzUzBGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMR05CUVdwRE8wRkJRMEVzYVVKQlFVc3NZMEZCVEN4SlFVRjFRaXhMUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNZMEZCZEVNN1FVRkRRU3hwUWtGQlN5eGxRVUZNTEVsQlFYZENMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeGpRVUYyUXpzN1FVRkZRU3huUWtGQlNTeExRVUZMTEZOQlFVd3NSMEZCYVVJc1MwRkJTeXhoUVVFeFFpeEZRVUY1UXp0QlFVTnlReXh4UWtGQlN5eFRRVUZNTEVkQlFXbENMRU5CUVdwQ096dEJRVVZCTEhGQ1FVRkxMRmRCUVV3c1EwRkJhVUk3UVVGRFlpd3dRa0ZCVFN4TFFVRkxMRWxCUkVVN1FVRkZZaXgxUWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXl4RlFVWTFRanRCUVVkaUxIVkNRVUZITEVOQlNGVTdRVUZKWWl3eVFrRkJUenRCUVVOSUxESkNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVOQlFUZENMRVZCUVdkRExFVkJRV2hETEVsQlFYTkRMRVZCUVhSRExFbEJRVFJETEV0QlFVc3NUVUZCVEN4TFFVRm5RaXhIUVVGb1FpeEhRVUZ6UWl4RFFVRjBRaXhIUVVFd1FpeERRVUZETEVOQlFYWkZMRU5CUkVFN1FVRkZTQ3d5UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXp0QlFVWjBReXh4UWtGS1RUdEJRVkZpTERSQ1FVRlJMRU5CVWtzN1FVRlRZaXhwUTBGQllTeExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeEZRVUUzUWl4RlFVRnBReXhGUVVGcVF5eEpRVUYxUXl4RlFWUjJRenRCUVZWaUxESkNRVUZQTzBGQlZrMHNhVUpCUVdwQ08wRkJXVWc3TzBGQlJVUXNaMEpCUVVrc1MwRkJTeXhqUVVGTUxFZEJRWE5DTEV0QlFVc3NhMEpCUVM5Q0xFVkJRVzFFTzBGQlF5OURMSEZDUVVGTExHTkJRVXdzUjBGQmMwSXNRMEZCZEVJN1FVRkRRU3h4UWtGQlN5eFBRVUZNTEVOQlFXRXNXVUZCWWl4RFFVRXdRanRCUVVGQkxESkNRVUZUTEUxQlFVMHNTMEZCVGl4RlFVRlVPMEZCUVVFc2FVSkJRVEZDTzBGQlEwRXNiMEpCUVVrc1EwRkJReXhMUVVGTExFMUJRVXdzUTBGQldTeExRVUZxUWl4RlFVRjNRanRCUVVOd1FpeDVRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RFFVRXlRaXhMUVVGTExFOUJRV2hETzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3huUWtGQlNTeExRVUZMTEdWQlFVd3NSMEZCZFVJc1MwRkJTeXh0UWtGQmFFTXNSVUZCY1VRN1FVRkRha1FzY1VKQlFVc3NaVUZCVEN4SFFVRjFRaXhEUVVGMlFqdEJRVU5CTEc5Q1FVRkpMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xIbENRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRmFPMEZCUTBnN1FVRkRTanM3UVVGRlJDeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVGclFpeE5RVUZzUWl4RFFVRjVRaXhQUVVGNlFpeERRVUZwUXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hQUVVFM1F5eEZRVUZ6UkN4TFFVRkxMRTlCUVRORUxFVkJRVzlGTEV0QlFVc3NVVUZCZWtVc1JVRkJiVVlzU1VGQmJrWXNSVUZCZVVZc1NVRkJla1k3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFOUJRVllzUTBGQmEwSXNUVUZCYkVJc1EwRkJlVUlzVDBGQmVrSXNRMEZCYVVNc1MwRkJTeXhOUVVGMFF5eEZRVUU0UXl4TFFVRkxMRTlCUVc1RUxFVkJRVFJFTEV0QlFVc3NWVUZCYWtVc1JVRkJOa1VzU1VGQk4wVXNSVUZCYlVZc1NVRkJia1k3TzBGQlJVRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExFOUJRV0lzUTBGQmNVSTdRVUZCUVN4MVFrRkJVeXhQUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRTFCUVd4Q0xFTkJRWGxDTEU5QlFYcENMRU5CUVdsRExFOUJRVXNzVFVGQmRFTXNSVUZCT0VNc1RVRkJUU3hQUVVGd1JDeEZRVUUyUkN4UFFVRkxMRk5CUVd4RkxFVkJRVFpGTEVsQlFUZEZMRk5CUVZRN1FVRkJRU3hoUVVGeVFqczdRVUZGUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWl4RFFVRXhRaXhKUVVFclFpeERRVUV2UWp0QlFVTklPenM3YjBOQlJWY3NTU3hGUVVGTk96dEJRVVZrTEdkQ1FVRkpMRkZCUVZFc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQllpeERRVUUwUWl4TFFVRTFRaXhEUVVGYU96dEJRVVZCTEdkQ1FVRkpMRU5CUVVNc1MwRkJUQ3hGUVVGWk8wRkJRMUlzZDBKQlFWRXNiMEpCUVZVc1NVRkJWaXhEUVVGU08wRkJRMEVzY1VKQlFVc3NUMEZCVEN4RFFVRmhMRWRCUVdJc1EwRkJhVUlzUzBGQmFrSTdRVUZEU0R0QlFVTkVMR3RDUVVGTkxFdEJRVTRzUTBGQldTeEpRVUZhTzBGQlEwZzdPenRyUTBGRlV5eEhMRVZCUVVzc1N5eEZRVUZQTzBGQlFVRTdPMEZCUTJ4Q0xHZENRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFdEJRV1FzUTBGQmIwSXNSMEZCY0VJc1EwRkJXanRCUVVOQkxHZENRVUZKTEZWQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFOUJRV1FzUlVGQlpEdEJRVU5CTEdkQ1FVRkpMSEZDUVVGeFFpeERRVUY2UWp0QlFVTkJMR2RDUVVGSkxHZENRVUZuUWl4SFFVRndRanRCUVVOQkxHZENRVUZKTEdWQlFXVXNSVUZCYmtJN08wRkJSVUVzYTBKQlFVMHNSVUZCVGl4RFFVRlRMRVZCUVVNc1RVRkJUU3hSUVVGUUxFVkJRVlFzUlVGQk1rSXNSMEZCTTBJN1FVRkRRU3hyUWtGQlRTeFZRVUZPTEVOQlFXbENMRWRCUVdwQ0xFTkJRWEZDTEZsQlFVMDdRVUZEZGtJc2IwSkJRVWtzU1VGQlNpeEhRVUZYTEZGQlFWZzdRVUZEU0N4aFFVWkVPMEZCUjBFc2EwSkJRVTBzUzBGQlRqczdRVUZGUVN4dlFrRkJVU3hEUVVGU0xFZEJRVmtzU1VGQlNTeERRVUZvUWp0QlFVTkJMRzlDUVVGUkxFTkJRVklzUjBGQldTeEpRVUZKTEVOQlFXaENPMEZCUTBFc2IwSkJRVkVzVDBGQlVpeEhRVUZyUWl4RFFVRnNRanRCUVVOQkxHOUNRVUZSTEdGQlFWSXNRMEZCYzBJc1ZVRkJkRUk3TzBGQlJVRXNaMEpCUVVrc1NVRkJTU3hOUVVGS0xFbEJRV01zUTBGQmJFSXNSVUZCY1VJN1FVRkRha0lzWjBOQlFXZENMRWRCUVdoQ08wRkJRMEVzSzBKQlFXVXNSVUZCWmp0QlFVTkJMSGRDUVVGUkxGRkJRVkk3UVVGRFNEczdRVUZGUkN4dlFrRkJVU3huUWtGQlVpeERRVUY1UWl4TFFVRjZRaXhEUVVFclFpeERRVUZETEdGQlFXaERMRVZCUVN0RExFTkJRVU1zWVVGQmFFUTdRVUZEUVN4dlFrRkJVU3huUWtGQlVpeERRVUY1UWl4TFFVRjZRaXhEUVVFclFpeGhRVUV2UWl4RlFVRTRReXhoUVVFNVF6dEJRVU5CTEc5Q1FVRlJMRXRCUVZJc1EwRkJZeXhKUVVGa0xFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFbEJRWHBDTEVWQlFTdENMRmxCUVM5Q08wRkJRMEVzYjBKQlFWRXNUVUZCVWl4SFFVRnBRaXhaUVVGTk8wRkJRMjVDTEhORFFVRnpRaXhQUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNZMEZCY2tNN1FVRkRRU3h2UWtGQlJ5eHpRa0ZCYzBJc1IwRkJla0lzUlVGQk5rSTdRVUZEZWtJc2VVTkJRWEZDTEVOQlFYSkNPMEZCUTBFc05FSkJRVkVzVDBGQlVqdEJRVU5JTzBGQlJVb3NZVUZRUkR0QlFWRkJMRzlDUVVGUkxFOUJRVklzUTBGQlowSTdRVUZCUVN4MVFrRkJXU3hUUVVGVExFbEJRVlFzUjBGQlowSXNTMEZCTlVJN1FVRkJRU3hoUVVGb1FqdEJRVU5CTEdkQ1FVRkpMRU5CUVVNc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQmFrSXNSVUZCZDBJN1FVRkRjRUlzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVlVGQmFFSXNRMEZCTWtJc1MwRkJTeXhQUVVGb1F6dEJRVU5JTzBGQlEwbzdPenRwUTBGRlVTeE5MRVZCUVZFc1N5eEZRVUZQTzBGQlEzQkNMR2xDUVVGTExHTkJRVXdzUTBGQmIwSXNTVUZCY0VJc1EwRkJlVUlzUlVGQmVrSXNSVUZCTkVJc1EwRkJOVUlzUlVGQk9FSXNSMEZCT1VJN1FVRkRRU3hyUWtGQlRTeE5RVUZPTEVOQlFXRXNUMEZCVHl4TlFVRndRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFOUJRVThzU1VGQk4wSTdRVUZEUVN4blFrRkJTU3hEUVVGRExFMUJRVTBzUzBGQldDeEZRVUZyUWp0QlFVTmtMSEZDUVVGTExHMUNRVUZNTEVOQlFYbENMRWxCUVhwQ0xFTkJRVGhDTEVWQlFUbENMRVZCUVdsRExFTkJRV3BETEVWQlFXMURMRWRCUVc1RE8wRkJRMEVzY1VKQlFVc3NSMEZCVEN4RFFVRlRMRmRCUVZRc1EwRkJjVUlzVFVGQlRTeFRRVUV6UWp0QlFVTklPMEZCUTBRc2JVSkJRVThzU1VGQlVEdEJRVU5JT3pzN2EwTkJSVk1zVFN4RlFVRlJMRTBzUlVGQlVUdEJRVU4wUWl4cFFrRkJTeXhqUVVGTUxFTkJRVzlDTEVsQlFYQkNMRU5CUVhsQ0xFVkJRWHBDTEVWQlFUUkNMRU5CUVRWQ0xFVkJRVGhDTEVkQlFUbENPMEZCUTBFc2JVSkJRVThzVFVGQlVDeERRVUZqTEU5QlFVOHNUVUZCY2tJN1FVRkRRU3hwUWtGQlN5eEhRVUZNTEVOQlFWTXNXVUZCVkR0QlFVTkJMR2xDUVVGTExGTkJRVXdzUTBGQlpTeE5RVUZtTEVWQlFYVkNMRTlCUVU4c1NVRkJPVUk3UVVGRFFTeG5Ra0ZCU1N4RFFVRkRMRTlCUVU4c1MwRkJXaXhGUVVGdFFqdEJRVU5tTEhGQ1FVRkxMRzlDUVVGTUxFTkJRVEJDTEVsQlFURkNPMEZCUTBFc2NVSkJRVXNzVVVGQlREdEJRVU5JTzBGQlEwUXNiVUpCUVU4c1NVRkJVRHRCUVVOSU96czdiVU5CUlZVc1RTeEZRVUZSTEVzc1JVRkJUenRCUVVOMFFpeHJRa0ZCVFN4TlFVRk9MRU5CUVdFc1RVRkJUU3hOUVVGdVFqdEJRVU5CTEcxQ1FVRlBMRTFCUVZBc1EwRkJZeXhOUVVGTkxFMUJRWEJDTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFMUJRV1k3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1MwRkJaanRCUVVOQkxHZENRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRllMRVZCUVd0Q08wRkJRMlFzY1VKQlFVc3NiVUpCUVV3c1EwRkJlVUlzU1VGQmVrSXNRMEZCT0VJc1JVRkJPVUlzUlVGQmFVTXNRMEZCYWtNc1JVRkJiVU1zUjBGQmJrTTdRVUZEUVN4eFFrRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZDeERRVUZ4UWl4TlFVRk5MRk5CUVROQ08wRkJRMGc3UVVGRFJDeHBRa0ZCU3l4SFFVRk1MRU5CUVZNc1dVRkJWRHRCUVVOQkxHZENRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRmFMRVZCUVcxQ08wRkJRMllzY1VKQlFVc3NiMEpCUVV3c1EwRkJNRUlzU1VGQk1VSTdRVUZEUVN4eFFrRkJTeXhSUVVGTU8wRkJRMGc3UVVGRFNqczdPMjFEUVVWVE8wRkJRVUU3TzBGQlEwNHNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeFZRVUZtTEVkQlFUUkNMRU5CUVRWQ08wRkJRMEVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRTlCUVdJc1IwRkJkVUlzU1VGQmRrSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhEUVVFeVFpeExRVUZMTEU5QlFXaERPMEZCUTBFc1owSkJRVWtzVVVGQlVTeExRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1RVRkJaaXhEUVVGelFpeExRVUZMTEVsQlFUTkNMRVZCUVdsRExFbEJRV3BETEVOQlFWbzdRVUZEUVN4clFrRkJUU3hIUVVGT0xFTkJRVlVzU1VGQlZpeEZRVUZuUWl4WlFVRk5PMEZCUTJ4Q0xIVkNRVUZMTEV0QlFVd3NRMEZCVnl4SlFVRllPMEZCUTBFc2RVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SlFVRnVRanRCUVVOQkxIVkNRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRTFCUVhSQ08wRkJRMGdzWVVGS1JEdEJRVXRCTEd0Q1FVRk5MRXRCUVU0N1FVRkRTRHM3T3p0RlFYQk9Oa0lzVDBGQlR5eExPenRyUWtGQmNFSXNTU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlHVW9kQ3h1TEhJcGUyWjFibU4wYVc5dUlITW9ieXgxS1h0cFppZ2hibHR2WFNsN2FXWW9JWFJiYjEwcGUzWmhjaUJoUFhSNWNHVnZaaUJ5WlhGMWFYSmxQVDFjSW1aMWJtTjBhVzl1WENJbUpuSmxjWFZwY21VN2FXWW9JWFVtSm1FcGNtVjBkWEp1SUdFb2J5d2hNQ2s3YVdZb2FTbHlaWFIxY200Z2FTaHZMQ0V3S1R0MllYSWdaajF1WlhjZ1JYSnliM0lvWENKRFlXNXViM1FnWm1sdVpDQnRiMlIxYkdVZ0oxd2lLMjhyWENJblhDSXBPM1JvY205M0lHWXVZMjlrWlQxY0lrMVBSRlZNUlY5T1QxUmZSazlWVGtSY0lpeG1mWFpoY2lCc1BXNWJiMTA5ZTJWNGNHOXlkSE02ZTMxOU8zUmJiMTFiTUYwdVkyRnNiQ2hzTG1WNGNHOXlkSE1zWm5WdVkzUnBiMjRvWlNsN2RtRnlJRzQ5ZEZ0dlhWc3hYVnRsWFR0eVpYUjFjbTRnY3lodVAyNDZaU2w5TEd3c2JDNWxlSEJ2Y25SekxHVXNkQ3h1TEhJcGZYSmxkSFZ5YmlCdVcyOWRMbVY0Y0c5eWRITjlkbUZ5SUdrOWRIbHdaVzltSUhKbGNYVnBjbVU5UFZ3aVpuVnVZM1JwYjI1Y0lpWW1jbVZ4ZFdseVpUdG1iM0lvZG1GeUlHODlNRHR2UEhJdWJHVnVaM1JvTzI4ckt5bHpLSEpiYjEwcE8zSmxkSFZ5YmlCemZTa2lMQ0psZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCVVpYaDBRblYwZEc5dUlHVjRkR1Z1WkhNZ1VHaGhjMlZ5TGtKMWRIUnZiaUI3WEc1Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2loN0lHZGhiV1VzSUhnc0lIa3NJR0Z6YzJWMExDQmpZV3hzWW1GamF5d2dZMkZzYkdKaFkydERiMjUwWlhoMExDQnZkbVZ5Um5KaGJXVXNJRzkxZEVaeVlXMWxMQ0JrYjNkdVJuSmhiV1VzSUhWd1JuSmhiV1VzSUd4aFltVnNMQ0J6ZEhsc1pTQjlLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLR2RoYldVc0lIZ3NJSGtzSUdGemMyVjBMQ0JqWVd4c1ltRmpheXdnWTJGc2JHSmhZMnREYjI1MFpYaDBMQ0J2ZG1WeVJuSmhiV1VzSUc5MWRFWnlZVzFsTENCa2IzZHVSbkpoYldVc0lIVndSbkpoYldVcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c1lXSmxiQ0E5SUd4aFltVnNPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBlV3hsSUQwZ2MzUjViR1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkR1Y0ZENBOUlHNWxkeUJRYUdGelpYSXVWR1Y0ZENoMGFHbHpMbWRoYldVc0lEQXNJREFzSUhSb2FYTXViR0ZpWld3c0lIUm9hWE11YzNSNWJHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUmxlSFF1WVc1amFHOXlMbk5sZEZSdktEQXVOU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWkdSRGFHbHNaQ2gwYUdsekxuUmxlSFFwTzF4dUlDQWdJSDFjYm4xY2JpSXNJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVOaGNtUkNkWFIwYjI0Z1pYaDBaVzVrY3lCUWFHRnpaWEl1UW5WMGRHOXVJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hzZ1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHTmhiR3hpWVdOckxDQmpZV3hzWW1GamEwTnZiblJsZUhRc0lHOTJaWEpHY21GdFpTd2diM1YwUm5KaGJXVXNJR1J2ZDI1R2NtRnRaU3dnZFhCR2NtRnRaU3gyWVd4MVpTd2dhWE5EYkdsbGJuUjlLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLR2RoYldVc0lIZ3NJSGtzSUdGemMyVjBMQ0JqWVd4c1ltRmpheXdnWTJGc2JHSmhZMnREYjI1MFpYaDBMQ0J2ZG1WeVJuSmhiV1VzSUc5MWRFWnlZVzFsTENCa2IzZHVSbkpoYldVc0lIVndSbkpoYldVcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNGdJQ0FnSUNBZ0lDOHZJSFJvYVhNdWMyTmhiR1V1YzJWMFZHOG9NQzQ1S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVd4c1ltRmpheUE5SUdOaGJHeGlZV05yTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVhORGJHbGxiblFnUFNCcGMwTnNhV1Z1ZER0Y2JpQWdJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdLaUJoY3lCemRHRjBaWE1nWm5KdmJTQW5MaTl6ZEdGMFpYTW5PMXh1WTI5dWMzUWdSMEZOUlNBOUlHNWxkeUJRYUdGelpYSXVSMkZ0WlNneE5EUXdMQ0E1TURBc0lGQm9ZWE5sY2k1QlZWUlBLVHRjYmx4dVQySnFaV04wTG10bGVYTW9jM1JoZEdWektTNW1iM0pGWVdOb0tITjBZWFJsSUQwK0lFZEJUVVV1YzNSaGRHVXVZV1JrS0hOMFlYUmxMQ0J6ZEdGMFpYTmJjM1JoZEdWZEtTazdYRzVjYmtkQlRVVXVjM1JoZEdVdWMzUmhjblFvSjBKdmIzUW5LVHRjYmlJc0ltVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRUoxYkd4bGRDQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGNISnBkR1VnZTF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2V5Qm5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dhR1ZoYkhSb0xDQjBhVzUwSUQwZ01IaEdSa1pHTURBZ2ZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaG5ZVzFsTENCNExDQjVMQ0JoYzNObGRDazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elkyRnNaUzV6WlhSVWJ5Z3hMaklwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFDQTlJR2hsWVd4MGFEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGFXNTBJRDBnZEdsdWREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amFHVmphMWR2Y214a1FtOTFibVJ6SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkWFJQWmtKdmRXNWtjMHRwYkd3Z1BTQjBjblZsTzF4dUlDQWdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQkNkV3hzWlhRZ1puSnZiU0FuTGk5aWRXeHNaWFFuTzF4dUx5OGdRM0psWVhSbElHRWdRblZpWW14bFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJGYm1WdGVTQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGNISnBkR1VnZTF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2V5Qm5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dabkpoYldVc0lHaGxZV3gwYUN4emFYcGxMQ0JqYjIxd1lXNTVUbUZ0WlN3Z2JHOW5iMU55WXl3Z2JXOWtZV3hEYjI1MFpXNTBMQ0JwYzBOdmJYQnNaWFJsWkNCOUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtHZGhiV1VzSUhnc0lIa3NJR0Z6YzJWMExDQm1jbUZ0WlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxJRDBnWjJGdFpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1obFlXeDBhQ0E5SUdobFlXeDBhRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRZWGhJWldGc2RHZ2dQU0JvWldGc2RHZzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMybDZaU0E5SUhOcGVtVTdYRzVjYmlBZ0lDQWdJQ0FnTHk5UWFIbHphV056WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1d2FIbHphV056TG1GeVkyRmtaUzVsYm1GaWJHVW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNWpiMnhzYVdSbFYyOXliR1JDYjNWdVpITWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KdlpIa3VaM0poZG1sMGVTNXpaWFFvTUM0MUxDQXhNekF3S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxtSnZkVzVqWlM1elpYUW9NU2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdUbVZqWlhOaGNua2dZWFIwY21saWRYUmxjeUJwYmlCallYTmxJSFJvWlNCaWRXSmliR1VnYVhNZ1lTQkRiR2xsYm5RZ1FuVmlZbXhsWEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMjl0Y0dGdWVVNWhiV1VnUFNCamIyMXdZVzU1VG1GdFpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyZHZVM0pqSUQwZ2JHOW5iMU55WXp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYzBOdmJYQnNaWFJsWkNBOUlHWmhiSE5sTzF4dVhHNWNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1VvS1NCN2ZWeHVYRzVjYmx4dUlDQWdJR1JoYldGblpTaGhiVzkxYm5RcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdVpHRnRZV2RsS0dGdGIzVnVkQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6WlhRb2V5QjRMQ0I1TENCb1pXRnNkR2dzSUdKMWJHeGxkRk53WldWa0xDQnpjR1ZsWkNCOUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuSmxjMlYwS0hnc0lIa3NJR2hsWVd4MGFDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwVTNCbFpXUWdQU0JpZFd4c1pYUlRjR1ZsWkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxuWmxiRzlqYVhSNUxuZ2dQU0J6Y0dWbFpDNTRPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1ZG1Wc2IyTnBkSGt1ZVNBOUlITndaV1ZrTG5rN1hHNGdJQ0FnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJRkJzWVhsbGNpQm1jbTl0SUNjdUxpOXphRzl2ZEdWeUwzQnNZWGxsY2ljN1hHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJJZFdRZ1pYaDBaVzVrY3lCUWFHRnpaWEl1UjNKdmRYQWdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSHNnWjJGdFpTd2djR3hoZVdWeUlIMHBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9aMkZ0WlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTQTlJR2RoYldVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlJRDBnY0d4aGVXVnlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSm5JRDBnYm1WM0lGQm9ZWE5sY2k1SmJXRm5aU2gwYUdsekxtZGhiV1VzSURBc0lEQXNJQ2RvZFdSQ1p5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuZHBaSFJvSUQwZ09EQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUdKaGNpQTlJRzVsZHlCUWFHRnpaWEl1VTNCeWFYUmxLSFJvYVhNdVoyRnRaU3dnTWl3Z01pd2dKMmhsWVd4MGFHSmhjaWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFHSmhjaTV6WTJGc1pTNXpaWFJVYnlnd0xqazVOU3dnTVRFcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnZjbVVnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OamIzSmxUR0ZpWld3Z1BTQW5VMk52Y21VNklDYzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnZjbVZVWlhoMElEMGdibVYzSUZCb1lYTmxjaTVVWlhoMEtIUm9hWE11WjJGdFpTd2dNakFzSURFMExDQjBhR2x6TG5OamIzSmxUR0ZpWld3Z0t5QjBhR2x6TG5OamIzSmxMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1UTndlQ0JXWlhKa1lXNWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ0oyTmxiblJsY2lkY2JseHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUZrWkNoMGFHbHpMbUpuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWkdRb2RHaHBjeTVvWldGc2RHaGlZWElwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZrWkNoMGFHbHpMbk5qYjNKbFZHVjRkQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkWEJrWVhSbFNHVmhiSFJvS0hCc1lYbGxjaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFHSmhjaTVqY205d0tHNWxkeUJRYUdGelpYSXVVbVZqZEdGdVoyeGxLREFzSURBc0lDaDBhR2x6TG5Cc1lYbGxjaTVvWldGc2RHZ2dMeUIwYUdsekxuQnNZWGxsY2k1dFlYaElaV0ZzZEdncElDb2dkR2hwY3k1M2FXUjBhQ3dnTVRBcEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1pXRnNkR2hpWVhJdWRYQmtZWFJsUTNKdmNDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlZOamIzSmxLR0Z0YjNWdWRDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psSUNzOUlHRnRiM1Z1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WTI5eVpWUmxlSFF1ZEdWNGRDQTlJSFJvYVhNdWMyTnZjbVZNWVdKbGJDQXJJQ2gwYUdsekxuTmpiM0psSUNvZ01UQXBPMXh1SUNBZ0lIMWNibHh1ZlR0Y2JpSXNJbWx0Y0c5eWRDQkNkV3hzWlhRZ1puSnZiU0FuTGk5aWRXeHNaWFFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYkdGNVpYSWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVUzQnlhWFJsSUh0Y2JseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIc2daMkZ0WlN3Z2VDd2dlU3dnWVhOelpYUXNJR1p5WVcxbExDQm9aV0ZzZEdnZ2ZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaG5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dabkpoYldVcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaU0E5SUdkaGJXVTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elkyRnNaUzV6WlhSVWJ5Z3dMalVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YUdWaGJIUm9JRDBnYUdWaGJIUm9PMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWhlRWhsWVd4MGFDQTlJR2hsWVd4MGFEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExtVnVZV0pzWlNoMGFHbHpLVHRjYmx4dUlDQWdJQ0FnSUNBdkwyZHlZWFpwZEhsY2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxtZHlZWFpwZEhrdWVTQTlJRFV3TUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxtTnZiR3hwWkdWWGIzSnNaRUp2ZFc1a2N5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDOHZJV2R5WVhacGRIbGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEhNZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMGN5NWxibUZpYkdWQ2IyUjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJUY0dWbFpDQTlJQzAzTURBN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSlRhRzl2ZEVsdWRHVnlkbUZzSUQwZ01DNHhOanRjYmx4dVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emFHOTBVMjkxYm1RZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG5OdmRXNWtLQ2R3YkdGNVpYSlRhRzkwSnlrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtbHRZWFJwYjI1ekxtRmtaQ2duZDJGc2ExSnBaMmgwSnl4YkoyRnNhV1Z1TFhkaGJHc3RNREV1Y0c1bkp5d25ZV3hwWlc0dGQyRnNheTB3TWk1d2JtY25YU3d4TWl4bVlXeHpaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZVzVwYldGMGFXOXVjeTVoWkdRb0ozZGhiR3RNWldaMEp5eGJKMkZzYVdWdUxYZGhiR3N0TVdJdWNHNW5KeXduWVd4cFpXNHRkMkZzYXkweVlpNXdibWNuWFN3eE1peG1ZV3h6WlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVc1cGJXRjBhVzl1Y3k1aFpHUW9KM05vYjI5MEp5eGJKMkZzYVdWdUxYTm9iMjkwTFRBeExuQnVaeWNzSjJGc2FXVnVMWE5vYjI5MExUQXlMbkJ1WnlkZExEZ3NabUZzYzJVcE8xeHVJQ0FnSUgxY2JpQWdJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1MlpXeHZZMmwwZVM1NElEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKVGFHOXZkRlJwYldVZ0t6MGdkR2hwY3k1bllXMWxMblJwYldVdWNHaDVjMmxqYzBWc1lYQnpaV1E3WEc1Y2JseHVJQ0FnSUNBZ0lDQnNaWFFnYkdWbWRFdGxlU0E5SUhSb2FYTXVaMkZ0WlM1cGJuQjFkQzVyWlhsaWIyRnlaQzVwYzBSdmQyNG9VR2hoYzJWeUxrdGxlV0p2WVhKa0xreEZSbFFwTzF4dUlDQWdJQ0FnSUNCc1pYUWdjbWxuYUhSTFpYa2dQU0IwYUdsekxtZGhiV1V1YVc1d2RYUXVhMlY1WW05aGNtUXVhWE5FYjNkdUtGQm9ZWE5sY2k1TFpYbGliMkZ5WkM1U1NVZElWQ2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQnphRzl2ZEV0bGVTQTlJSFJvYVhNdVoyRnRaUzVwYm5CMWRDNXJaWGxpYjJGeVpDNXBjMFJ2ZDI0b1VHaGhjMlZ5TGt0bGVXSnZZWEprTGxOUVFVTkZRa0ZTS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaWhzWldaMFMyVjVLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvYzJodmIzUkxaWGtnSmlZZ2JHVm1kRXRsZVNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoYm1sdFlYUnBiMjV6TG5Cc1lYa29KM05vYjI5MEp5azdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1NElDMDlJREV3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmV1ZzYzJWN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoYm1sdFlYUnBiMjV6TG5Cc1lYa29KM2RoYkd0TVpXWjBKeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTRJQzA5SURFd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElHbG1LSEpwWjJoMFMyVjVLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSE5vYjI5MFMyVjVJQ1ltSUhKcFoyaDBTMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoYm1sdFlYUnBiMjV6TG5Cc1lYa29KM05vYjI5MEp5azdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1NElDczlJREV3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmV1ZzYzJWN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoYm1sdFlYUnBiMjV6TG5Cc1lYa29KM2RoYkd0U2FXZG9kQ2NwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVlQ0FyUFNBeE1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVYRzVjYmx4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQnNZWGxsY2xOb2IyOTBWR2x0WlNBK0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSSmJuUmxjblpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKVGFHOXZkRlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVlXeHBkbVVwSUh0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LSE5vYjI5MFMyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WVc1cGJXRjBhVzl1Y3k1d2JHRjVLQ2R6YUc5dmRDY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5vYjI5MEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyaHZiM1FvS1NCN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUdKMWJHeGxkQ0E5SUhSb2FYTXVZblZzYkdWMGN5NW5aWFJHYVhKemRFVjRhWE4wY3lobVlXeHpaU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZpZFd4c1pYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZENBOUlHNWxkeUJDZFd4c1pYUW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxuZ2dLeUExTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQjBhR2x6TG5SdmNDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMek5jYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWldGc2RHZzZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RpZFd4c1pYUW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJwYm5RNklEQjRSamN3TlRCRVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOb1lXNW5aU0IwYUdseklHNTFiV0psY2lCMGJ5QnphRzl2ZENCc1pYTnpJR0oxYkd4bGRITWdZWFFnWVNCMGFXMWxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaDBhR2x6TG1KMWJHeGxkSE11WTJocGJHUnlaVzR1YkdWdVozUm9JRHc5SURVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJodmRGTnZkVzVrTG5Cc1lYa29YQ0pjSWl3d0xEQXVOU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSekxtRmtaQ2hpZFd4c1pYUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRDNWliMlI1TG5abGJHOWphWFI1TG5rZ1BTQjBhR2x6TG1KMWJHeGxkRk53WldWa08xeHVYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMmh2ZEZOdmRXNWtMbkJzWVhrb1hDSmNJaXd3TERBdU5TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWRXeHNaWFF1Y21WelpYUW9kR2hwY3k1NElDc2dOVEFzSUhSb2FYTXVkRzl3TENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKMWJHeGxkQzVpYjJSNUxuWmxiRzlqYVhSNUxua2dQU0IwYUdsekxtSjFiR3hsZEZOd1pXVmtPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JseHVJQ0FnSUgxY2JseHVJQ0FnSUdSaGJXRm5aU2hoYlc5MWJuUXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVaR0Z0WVdkbEtHRnRiM1Z1ZENrN1hHNGdJQ0FnZlZ4dVhHNTlYRzRpTENJZ0lDQWdhVzF3YjNKMElFSjFiR3hsZENCbWNtOXRJQ2N1TGk5d1lXNW5MMkoxYkd4bGRDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFVnVaVzE1SUdWNGRHVnVaSE1nVUdoaGMyVnlMbE53Y21sMFpTQjdYRzVjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWg3SUdkaGJXVXNJSGdzSUhrc0lHRnpjMlYwTENCbWNtRnRaU3dnYUdWaGJIUm9MQ0JpZFd4c1pYUlRjR1ZsWkNCOUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtHZGhiV1VzSUhnc0lIa3NJR0Z6YzJWMExDQm1jbUZ0WlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxJRDBnWjJGdFpUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtRnVZMmh2Y2k1elpYUlVieWd3TGpVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OallXeGxMbk5sZEZSdktEQXVPQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhR1ZoYkhSb0lEMGdhR1ZoYkhSb08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xaGVFaGxZV3gwYUNBOUlHaGxZV3gwYUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuQm9lWE5wWTNNdVlYSmpZV1JsTG1WdVlXSnNaU2gwYUdsektUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtRnVhVzFoZEdsdmJuTXVZV1JrS0NkemNHbHVibWx1Wnljc0lGc3dMQ0F4TENBeUxDQXpMQ0EwTENBMUxDQTJMQ0EzTENBNExDQTVMQ0F4TUN3Z01URXNJREV5TENBeE15d2dNVFJkTENBek1Dd2dkSEoxWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVTZ25jM0JwYm01cGJtY25LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUoxYkd4bGRITWdQU0IwYUdsekxtZGhiV1V1WVdSa0xtZHliM1Z3S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBjeTVsYm1GaWJHVkNiMlI1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSVGNHVmxaQ0E5SUdKMWJHeGxkRk53WldWa08xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyaHZkRk52ZFc1a0lEMGdkR2hwY3k1bllXMWxMbUZrWkM1emIzVnVaQ2duWlc1bGJYbFRhRzkwSnlrN1hHNWNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1VvS1NCN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjRzl6YVhScGIyNHVlQ0E4SURBdU1EUWdLaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVkMmxrZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjRzl6YVhScGIyNHVlQ0E5SURBdU1EUWdLaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVkMmxrZEdnZ0t5QXlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxuWmxiRzlqYVhSNUxuZ2dLajBnTFRFN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCcFppQW9kR2hwY3k1d2IzTnBkR2x2Ymk1NElENGdNQzQ1TmlBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1M2FXUjBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2IzTnBkR2x2Ymk1NElEMGdNQzQ1TmlBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1M2FXUjBhQ0F0SURJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1ZG1Wc2IyTnBkSGt1ZUNBcVBTQXRNVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQnZjMmwwYVc5dUxua2dMU0IwYUdsekxtaGxhV2RvZENBdklESWdQaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVhR1ZwWjJoMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbXRwYkd3b0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lITm9iMjkwS0NrZ2UxeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyaHZkRk52ZFc1a0xuQnNZWGtvWENKY0lpd3dMREF1TlNrN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUdKMWJHeGxkQ0E5SUhSb2FYTXVZblZzYkdWMGN5NW5aWFJHYVhKemRFVjRhWE4wY3lobVlXeHpaU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZpZFd4c1pYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZENBOUlHNWxkeUJDZFd4c1pYUW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxuZ3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NWliM1IwYjIwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBblluVnNiR1YwSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFXNTBPaUF3ZUdabU1EQXdNRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbUoxYkd4bGRITXVZV1JrS0dKMWJHeGxkQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlkV3hzWlhRdWNtVnpaWFFvZEdocGN5NTRMQ0IwYUdsekxtSnZkSFJ2YlN3Z01pazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCaWRXeHNaWFF1WW05a2VTNTJaV3h2WTJsMGVTNTVJRDBnZEdocGN5NWlkV3hzWlhSVGNHVmxaRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmtZVzFoWjJVb1lXMXZkVzUwS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG1SaGJXRm5aU2hoYlc5MWJuUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxjMlYwS0hzZ2VDd2dlU3dnYUdWaGJIUm9MQ0JpZFd4c1pYUlRjR1ZsWkN3Z2MzQmxaV1FnZlNrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1eVpYTmxkQ2g0TENCNUxDQm9aV0ZzZEdncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMWJHeGxkRk53WldWa0lEMGdZblZzYkdWMFUzQmxaV1E3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1MlpXeHZZMmwwZVM1NElEMGdjM0JsWldRdWVEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWIyUjVMblpsYkc5amFYUjVMbmtnUFNCemNHVmxaQzU1TzF4dUlDQWdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQkNkV3hzWlhRZ1puSnZiU0FuTGk0dmNHRnVaeTlpZFd4c1pYUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiR0Y1WlhJZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNCeWFYUmxJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hzZ1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHWnlZVzFsTENCb1pXRnNkR2dnZlNrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lobllXMWxMQ0I0TENCNUxDQmhjM05sZEN3Z1puSmhiV1VwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTQTlJR2RoYldVN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WTJGc1pTNXpaWFJVYnlnd0xqZ3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhR1ZoYkhSb0lEMGdhR1ZoYkhSb08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xaGVFaGxZV3gwYUNBOUlHaGxZV3gwYUR0Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5Cb2VYTnBZM011WVhKallXUmxMbVZ1WVdKc1pTaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ0x5OW5jbUYyYVhSNVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNW5jbUYyYVhSNUxua2dQU0F4TURBN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW05a2VTNWpiMnhzYVdSbFYyOXliR1JDYjNWdVpITWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQXZMMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMGN5QTlJSFJvYVhNdVoyRnRaUzVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUnpMbVZ1WVdKc1pVSnZaSGtnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEZOd1pXVmtJRDBnTFRVd01EdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTm9iM1JUYjNWdVpDQTlJSFJvYVhNdVoyRnRaUzVoWkdRdWMyOTFibVFvSjNCc1lYbGxjbE5vYjNRbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1VvS1NCN1hHNWNiaUFnSUNCOVhHNWNiaUFnSUNCemFHOXZkQ2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQnNaWFFnWW5Wc2JHVjBJRDBnZEdocGN5NWlkV3hzWlhSekxtZGxkRVpwY25OMFJYaHBjM1J6S0daaGJITmxLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JV0oxYkd4bGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwSUQwZ2JtVjNJRUoxYkd4bGRDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdWVDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUIwYUdsekxuUnZjQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THpOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1pXRnNkR2c2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaWRXeHNaWFFuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhScGJuUTZJREI0TURSak1URXlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklHTm9ZVzVuWlNCMGFHbHpJRzUxYldKbGNpQjBieUJ6YUc5dmRDQnNaWE56SUdKMWJHeGxkSE1nWVhRZ1lTQjBhVzFsWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWgwYUdsekxtSjFiR3hsZEhNdVkyaHBiR1J5Wlc0dWJHVnVaM1JvSUR3OUlEVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyaHZkRk52ZFc1a0xuQnNZWGtvWENKY0lpd3dMREF1TlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUnpMbUZrWkNoaWRXeHNaWFFwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwTG1KdlpIa3VkbVZzYjJOcGRIa3VlU0E5SUhSb2FYTXVZblZzYkdWMFUzQmxaV1E3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5vYjNSVGIzVnVaQzV3YkdGNUtGd2lYQ0lzTUN3d0xqVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwTG5KbGMyVjBLSFJvYVhNdWVDd2dkR2hwY3k1MGIzQXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZblZzYkdWMExtSnZaSGt1ZG1Wc2IyTnBkSGt1ZVNBOUlIUm9hWE11WW5Wc2JHVjBVM0JsWldRN1hHNGdJQ0FnSUNBZ0lIMWNibHh1WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaR0Z0WVdkbEtHRnRiM1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1a1lXMWhaMlVvWVcxdmRXNTBLVHRjYmlBZ0lDQjlYRzVjYm4xY2JpSXNJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVKdmIzUWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVUzUmhkR1VnZTF4dVhHNGdJQ0FnY0hKbGJHOWhaQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZV2RsTG1KaFkydG5jbTkxYm1SRGIyeHZjaUE5SUNjak1EQXdKenRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1sdFlXZGxLQ2RzYjJGa1pYSkNaeWNzSUNkcGJXY3ZiRzloWkdWeUxXSm5MbkJ1WnljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVhVzFoWjJVb0oyeHZZV1JsY2tKaGNpY3NJQ2RwYldjdmJHOWhaR1Z5TFdKaGNpNXdibWNuS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqY21WaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk5oYkdVdWMyTmhiR1ZOYjJSbElEMGdVR2hoYzJWeUxsTmpZV3hsVFdGdVlXZGxjaTVUU0U5WFgwRk1URHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qWVd4bExuQmhaMlZCYkdsbmJraHZjbWw2YjI1MFlXeHNlU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTmhiR1V1Y0dGblpVRnNhV2R1Vm1WeWRHbGpZV3hzZVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1d2FIbHphV056TG5OMFlYSjBVM2x6ZEdWdEtGQm9ZWE5sY2k1UWFIbHphV056TGtGU1EwRkVSU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjFCeVpXeHZZV1FuS1R0Y2JpQWdJQ0I5WEc1Y2JuMWNiaUlzSW1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCQ2IyOTBmU0JtY205dElDY3VMMkp2YjNRbk8xeHVaWGh3YjNKMElIdGtaV1poZFd4MElHRnpJRkJ5Wld4dllXUjlJR1p5YjIwZ0p5NHZjSEpsYkc5aFpDYzdYRzVsZUhCdmNuUWdlMlJsWm1GMWJIUWdZWE1nVFdWdWRYMGdabkp2YlNBbkxpOXRaVzUxSnp0Y2JpOHZaMkZ0WlRGY2JtVjRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QlFiR0Y1ZlNCbWNtOXRJQ2N1TDNOb2IyOTBaWEl2Y0d4aGVTYzdYRzVsZUhCdmNuUWdlMlJsWm1GMWJIUWdZWE1nVDNabGNuMGdabkp2YlNBbkxpOXphRzl2ZEdWeUwyOTJaWEluTzF4dVhHNHZMM0JoYm1kQ2RHNWNibVY0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJRYkdGNVVHRnVaMzBnWm5KdmJTQW5MaTl3WVc1bkwzQnNZWGxRWVc1bkp6dGNibVY0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJRWVc1blQzWmxjbjBnWm5KdmJTQW5MaTl3WVc1bkwzQmhibWRQZG1WeUp6dGNibHh1THk5bllXMWxNMXh1Wlhod2IzSjBJSHRrWldaaGRXeDBJR0Z6SUZCc1lYbFFZV2x5YzMwZ1puSnZiU0FuTGk5d1lXbHljeTl3YkdGNVVHRnBjbk1uTzF4dVpYaHdiM0owSUh0a1pXWmhkV3gwSUdGeklGQmhhWEp6VDNabGNuMGdabkp2YlNBbkxpOXdZV2x5Y3k5d1lXbHljMDkyWlhJbk8xeHVJaXdpYVcxd2IzSjBJRlJsZUhSQ2RYUjBiMjRnWm5KdmJTQW5MaTR2WlhoMFpXNXphVzl1Y3k5dFpXNTFMM1JsZUhSaWRYUjBiMjRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJOWlc1MUlHVjRkR1Z1WkhNZ1VHaGhjMlZ5TGxOMFlYUmxJSHRjYmlBZ0lDQnBibWwwS0dOMWNuSmxiblJEYkdsbGJuUXNZM1Z6ZEc5dFZtRnlNaWw3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29ZM1Z5Y21WdWRFTnNhV1Z1ZENrN1hHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LR04xYzNSdmJWWmhjaklwTzF4dUlDQWdJQ0FnSUNBdkwyTnlaV0YwWlNCc2FYTjBJR2hsY21WY2JpQWdJQ0FnSUNBZ2FXWW9ZM1Z5Y21WdWRFTnNhV1Z1ZENBOVBUMGdkVzVrWldacGJtVmtLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LRndpVlU1RVJVWkpUa1ZFSVZ3aUtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdmVnh1SUNBZ0lHTnlaV0YwWlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amRYSnlaVzUwUTJ4cFpXNTBJRDBnTUR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlXZGxMbUpoWTJ0bmNtOTFibVJEYjJ4dmNpQTlJQ2NqT0dWak1XVTRKenRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlZV05yWjNKdmRXNWtRMnh2ZFdSeklEMGdkR2hwY3k1aFpHUXVkR2xzWlZOd2NtbDBaU2gwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeDBhR2x6TG1kaGJXVXVkMjl5YkdRdWFHVnBaMmgwSUMwZ01UQXdMREUxTXpBc01qVTJMQ2RpWjBOc2IzVmtjeWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpoWTJ0bmNtOTFibVJEYkc5MVpITXVZVzVqYUc5eUxuTmxkRlJ2S0RBdU5TazdYRzVjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMblJwZEd4bElEMGdibVYzSUZCb1lYTmxjaTVVWlhoMEtIUm9hWE11WjJGdFpTd2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaSUMwZ01qQXdMQ0FuUTI5dWJtVmpkR2x1WnlCVGRIVmtaVzUwY3lCM2FYUm9JRTl3Y0c5eWRIVnVhWFI1Snl3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05dWREb2dKek0yY0hnZ1FYSnBZV3duTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzYVdkdU9pQW5ZMlZ1ZEdWeUoxeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBhWFJzWlM1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JpQWdJQ0FnSUNBZ0x5OGdkR2hwY3k1dGRYTnBZeUE5SUhSb2FYTXVaMkZ0WlM1aFpHUXVZWFZrYVc4b0oyMWxiblZOZFhOcFl5Y3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMjlKYm5SeWIweHZaMjhnUFNCMGFHbHpMbUZrWkM1cGJXRm5aU2gwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeDBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V1NBdElEZ3dNQ3duWjI5SmJuUnliMHh2WjI4bktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bmIwbHVkSEp2VEc5bmJ5NWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbUZrWkM1MGQyVmxiaWgwYUdsekxtZHZTVzUwY205TWIyZHZLUzUwYnlnZ2V5QjVPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdTQXRJRE13TUNCOUxDQXlNREF3TENCUWFHRnpaWEl1UldGemFXNW5Ma0p2ZFc1alpTNVBkWFFzSUhSeWRXVXBPMXh1WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3WVdseWMwSjBiaUE5SUc1bGR5QlVaWGgwUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkoxZEhSdmJuTW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzWmxja1p5WVcxbE9pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzVjBSbkpoYldVNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IzZHVSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNFWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2RRWVdseWN5Y3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmJuUTZJQ2N5TUhCNElFaGxiSFpsZEdsallTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVTkyWlhJbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNVBkWFJUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxVDNWMEp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WRWIzZHVKeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3WVdseWMwSjBiaTV6WlhSUGRtVnlVMjkxYm1Rb2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CaGFYSnpRblJ1TG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CaGFYSnpRblJ1TG5ObGRFUnZkMjVUYjNWdVpDaDBhR2x6TG1KMGJrUnZkMjVUYjNWdVpDazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXdZV2x5YzBKMGJpNXZia2x1Y0hWMFZYQXVZV1JrS0NncFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkwzUm9hWE11YlhWemFXTXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlM1emRHRnlkQ2duVUd4aGVWQmhhWEp6SnlrN1hHNWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JseHVYRzRnSUNBZ0lDQWdJQzh2SUZObFkyOXVaQ0JDZEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDQTlJRzVsZHlCVVpYaDBRblYwZEc5dUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGtnS3lBeE1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWRIUnZibk1uTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1psY2taeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1YwUm5KaGJXVTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiM2R1Um5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjFjRVp5WVcxbE9pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHRmlaV3c2SUNkQ2RXSmliR1VnUW5WeWMzUWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkRG9nSnpJd2NIZ2dTR1ZzZG1WMGFXTmhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrOTJaWEpUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxVDNabGNpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBiazkxZEZOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WUGRYUW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVFYjNkdVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVUnZkMjRuS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEU5MlpYSlRiM1Z1WkNoMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXVjMlYwVDNWMFUyOTFibVFvZEdocGN5NWlkRzVQZFhSVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RdWMyVjBSRzkzYmxOdmRXNWtLSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMExtOXVTVzV3ZFhSVmNDNWhaR1FvS0NrOVBudGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dmRHaHBjeTV0ZFhOcFl5NXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5SRGJHbGxiblFnUFNCY0lrTk1TVVZPVkNBd1hDSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbExuTjBZWEowS0NkUWJHRjVVR0Z1Wnljc0lIUnlkV1VzSUdaaGJITmxMQ0IwYUdsekxtTjFjbkpsYm5SRGJHbGxiblFwTzF4dVhHNWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUM4dklIUm9hWEprSUVKMGJseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CaGJtZENkRzRnUFNCdVpYY2dWR1Y0ZEVKMWRIUnZiaWg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm5ZVzFsT2lCMGFHbHpMbWRoYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWklDc2dNakF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI1ekp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MlpYSkdjbUZ0WlRvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRFWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5M2JrWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc09pQW5VWFZwZWlFbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5NakJ3ZUNCSVpXeDJaWFJwWTJFbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVd4cFoyNDZJQ2RqWlc1MFpYSW5YRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1VDNabGNsTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjIxbGJuVlBkbVZ5SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVQzVjBVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVTkxZENjcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrUnZkMjVUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxUkc5M2JpY3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR0Z1WjBKMGJpNXpaWFJQZG1WeVUyOTFibVFvZEdocGN5NWlkRzVQZG1WeVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJoYm1kQ2RHNHVjMlYwVDNWMFUyOTFibVFvZEdocGN5NWlkRzVQZFhSVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR0Z1WjBKMGJpNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0dGdVowSjBiaTV2YmtsdWNIVjBWWEF1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMM1JvYVhNdWJYVnphV011YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTNXpkR0Z5ZENnblVYVnBlaWNwTzF4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0F2THlCb1pXeHdJRUowYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsYkhCQ2RHNGdQU0J1WlhjZ1ZHVjRkRUoxZEhSdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaSUNzZ016UXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaWRYUjBiMjV6Snl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzkyWlhKR2NtRnRaVG9nTXl4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzkxZEVaeVlXMWxPaUF5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaRzkzYmtaeVlXMWxPaUF6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkWEJHY21GdFpUb2dNeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGhZbVZzT2lBblFXSnZkWFFuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1qQndlQ0JJWld4MlpYUnBZMkVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2NqWVdKaFltRmlKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHVnNjRUowYmk1bWNtRnRaU0E5SURNN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZQZG1WeUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVUM1YwVTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFU5MWRDY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBia1J2ZDI1VGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R0Wlc1MVJHOTNiaWNwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YUdWc2NFSjBiaTV6WlhSUGRtVnlVMjkxYm1Rb2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1obGJIQkNkRzR1YzJWMFQzVjBVMjkxYm1Rb2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YUdWc2NFSjBiaTV6WlhSRWIzZHVVMjkxYm1Rb2RHaHBjeTVpZEc1RWIzZHVVMjkxYm1RcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHVnNjRUowYmk1dmJrbHVjSFYwVlhBdVlXUmtLQ2dwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDNSb2FYTXViWFZ6YVdNdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdMeTlVVDBSUE9pQklUMWNnVkU4Z1VFeEJXU0JUUTFKRlJVNWNiaUFnSUNBZ0lDQWdJQ0FnSUdGc1pYSjBLQ2RJVDFjZ1ZFOGdVRXhCV1NjcFhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFZCaGJtVnNJRDBnZEdocGN5NWhaR1F1WjNKdmRYQW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxVUdGdVpXd3VZV1JrS0hSb2FYTXVkR2wwYkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVlFZVzVsYkM1aFpHUW9kR2hwY3k1d1lXbHljMEowYmlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRWQmhibVZzTG1Ga1pDaDBhR2x6TG5OMFlYSjBLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxVUdGdVpXd3VZV1JrS0hSb2FYTXVjR0Z1WjBKMGJpazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkVkJoYm1Wc0xtRmtaQ2gwYUdsekxtaGxiSEJDZEc0cE8xeHVYRzVjYmlBZ0lDQWdJQ0FnTHk5MGFHbHpMbTExYzJsakxteHZiM0JHZFd4c0tDazdYRzVjYmx4dUlDQWdJSDFjYmlBZ0lDQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVltRmphMmR5YjNWdVpFTnNiM1ZrY3k1MGFXeGxVRzl6YVhScGIyNHVlQ0FyUFNBd0xqSTdYRzRnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUZSbGVIUkNkWFIwYjI0Z1puSnZiU0FuTGk0dkxpNHZaWGgwWlc1emFXOXVjeTl0Wlc1MUwzUmxlSFJpZFhSMGIyNG5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFZVzVuVDNabGNpQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGRHRjBaU0I3WEc1Y2JpQWdJQ0JqY21WaGRHVW9LU0I3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbFJwZEd4bElEMGdibVYzSUZCb1lYTmxjaTVVWlhoMEtIUm9hWE11WjJGdFpTd2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaTFRJd01Dd2dKMUJoYVhKeklFZGhiV1VnYjNabGNpY3NJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZiblE2SUNjek5uQjRJRlJoYUc5dFlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUFuZDJocGRHVW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lXeHBaMjQ2SUNkalpXNTBaWEluWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VkdsMGJHVXVZVzVqYUc5eUxuTmxkRlJ2S0RBdU5TazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZENBOUlHNWxkeUJVWlhoMFFuVjBkRzl1S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsa3RNekFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oySjFkSFJ2Ymljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZG1WeVJuSmhiV1U2SURJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZFhSR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1J2ZDI1R2NtRnRaVG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFZ3Um5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnNZV0psYkRvZ0oxUnllU0JoWjJGcGJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmJuUTZJQ2N4Tm5CNElGWmxjbVJoYm1FbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVd4cFoyNDZJQ2RqWlc1MFpYSW5YRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFNBOUlHNWxkeUJVWlhoMFFuVjBkRzl1S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsa3JNekFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oySjFkSFJ2Ymljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZG1WeVJuSmhiV1U2SURJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZFhSR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1J2ZDI1R2NtRnRaVG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFZ3Um5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnNZV0psYkRvZ0owMWxiblVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1UWndlQ0JXWlhKa1lXNWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrOTJaWEpUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxVDNabGNpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBiazkxZEZOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WUGRYUW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVFYjNkdVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVUnZkMjRuS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEU5MlpYSlRiM1Z1WkNoMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXVjMlYwVDNWMFUyOTFibVFvZEdocGN5NWlkRzVQZFhSVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RdWMyVjBSRzkzYmxOdmRXNWtLSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxTG5ObGRFOTJaWEpUYjNWdVpDaDBhR2x6TG1KMGJrOTJaWEpUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkUzV6WlhSUGRYUlRiM1Z1WkNoMGFHbHpMbUowYms5MWRGTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MUxuTmxkRVJ2ZDI1VGIzVnVaQ2gwYUdsekxtSjBia1J2ZDI1VGIzVnVaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDNXZia2x1Y0hWMFJHOTNiaTVoWkdRb0tDazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0oxQnNZWGxRWVc1bkp5azdYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXZia2x1Y0hWMFJHOTNiaTVoWkdRb0tDazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0owMWxiblVuS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzSUQwZ2RHaHBjeTVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxtZGhiV1ZQZG1WeVZHbDBiR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWMzUmhjblFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWJXVnVkU2s3WEc0Z0lDQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElFTmhjbVJDZFhSMGIyNGdabkp2YlNBbkxpNHZMaTR2WlhoMFpXNXphVzl1Y3k5d1lXbHljeTlqWVhKa1luVjBkRzl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUd4aGVWQmhhWEp6SUdWNGRHVnVaSE1nVUdoaGMyVnlMbE4wWVhSbElIdGNibHh1SUNBZ0lHTnlaV0YwWlNncElIdGNibHh1SUNBZ0lDQWdJQ0F2TDNSb2FYTXVZbWNnUFNCMGFHbHpMbUZrWkM1MGFXeGxVM0J5YVhSbEtEQXNJREFzTmpZMkxEWXdNQ3dnSjNCaGJtZENaeWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWMzUmhaMlV1WW1GamEyZHliM1Z1WkVOdmJHOXlJRDBnSnlNMFpXUXdaVEVuTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpuSUQwZ2RHaHBjeTVuWVcxbExtRmtaQzVwYldGblpTZ3dMQ0F3TENBblltY25LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVkVzFTYjNkeklEMGdORHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVkVzFEYjJ4eklEMGdOVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBhV3hsVTJsNlpTQTlJREUxTlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVd4bFUzQmhZMmx1WnlBOUlETTFPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUnBiR1Z6VEdWbWRDQTlJQ2gwYUdsekxtNTFiVkp2ZDNNZ0tpQjBhR2x6TG01MWJVTnZiSE1wTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW1GamEwOW1WR2hsUTJGeVpDQTlJREV3TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdLaUJEYkdsbGJuUnpJSE4wWVhKMGN5QmhkQ0J3YjNOcGRHbHZiaUF4TUNBb1kyOTFiblFnYzNCaFkyVnpJR2x1SUhOd2NtbDBaVk5vWldWMEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnS2lBeE15QTlJRWR2YjJkc1pWeHVJQ0FnSUNBZ0lDQWdJQ0FnS2lBeE5DQTlJRUZ0WVhwdmJseHVJQ0FnSUNBZ0lDQWdJQ0FnS2lBeE5TQTlJRU5oY0dsMFlXeFBibVZjYmlBZ0lDQWdJQ0FnSUNBZ0lDb2dNVFlnUFNCSGIyeGtiV0Z1SUZOaFkyaHpYRzRnSUNBZ0lDQWdJQ0FnSUNBcUlERTNJRDBnUVdOalpXNTBkWEpsWEc0Z0lDQWdJQ0FnSUNBZ0lDQXFJREU0SUQwZ1EyRndaMlZ0YVc1cFhHNGdJQ0FnSUNBZ0lDQWdJQ0FxSURFNUlEMGdVRmREWEc0Z0lDQWdJQ0FnSUNBZ0lDQXFJREUzSUQwZ0xpNHVYRzRnSUNBZ0lDQWdJQ0FnSUNBcUlERTRJRDBnTGk0dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FxSURFNUlEMGdMaTR1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXFJREl3SUQwZ0xpNHVYRzRnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Ob2IzTmxia05zYVdWdWRDQTlJREUxTzF4dVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1allYSmtSM0p2ZFhBZ1BTQjBhR2x6TG1Ga1pDNW5jbTkxY0NncE8xeHVJQ0FnSUNBZ0lDQXZMM05sZENCcGRDQjBieUJ2Ym1VZ2JXbHVkWFJsSUNnMk1DbGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGFXMWxUR1ZtZENBOUlERXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psSUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b2FXZG9VMk52Y21VZ1BTQXdPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMkZ5WkhOQmNuSmhlU0E5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVNBOUlGdGRPMXh1WEc1Y2JpQWdJQ0FnSUNBZ0x5OHRMUzB0TFMwZ1NGVkVJRkpGVEVGVVJVUWdVMVJWUmtaY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMGVXeGxJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ1hDSXpNbkI0SUVobGJIWmxkR2xqWVZ3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm1sc2JEb2dYQ0lqTURCbVpqQXdYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ1hDSmpaVzUwWlhKY0lseHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psVkdWNGRDQTlJSFJvYVhNdVlXUmtMblJsZUhRb05Td2dOU3dnWENKVFkyOXlaVG9nWENJZ0t5QjBhR2x6TG5OamIzSmxMQ0IwYUdsekxuTjBlV3hsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVcxbFZHVjRkQ0E5SUhSb2FYTXVZV1JrTG5SbGVIUW9OU3dnZEdocGN5NW5ZVzFsTG1obGFXZG9kQ0F0SURVc0lGd2lWR2x0WlNCc1pXWjBPaUJjSWlBcklIUm9hWE11ZEdsdFpVeGxablFzSUhSb2FYTXVjM1I1YkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGJXVlVaWGgwTG1GdVkyaHZjaTV6WlhRb01Dd3hLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWRHbHRaUzVsZG1WdWRITXViRzl2Y0NoUWFHRnpaWEl1VkdsdFpYSXVVMFZEVDA1RUxDQjBhR2x6TG1SbFkzSmxZWE5sVkdsdFpTeDBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lXTmxRMkZ5WkhNb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpFMWxiblVvS1R0Y2JseHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFTjFjM1J2YlNCbWRXNWpkR2x2Ym5OY2JpQWdJQ0JzYjJGa1RXVnVkU2dwZTF4dUlDQWdJQ0FnSUNCc1pYUWdaWE5qUzJWNUlEMGdkR2hwY3k1bllXMWxMbWx1Y0hWMExtdGxlV0p2WVhKa0xtbHpSRzkzYmloUWFHRnpaWEl1UzJWNVltOWhjbVF1UlZOREtUdGNiaUFnSUNBZ0lDQWdhV1lvWlhOalMyVjVLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpkR0YwWlM1emRHRnlkQ2duVFdWdWRTY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaR1ZqY21WaGMyVlVhVzFsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGJXVk1aV1owTFMwN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1MGFXMWxWR1Y0ZEM1MFpYaDBJRDBnWENKVWFXMWxJR3hsWm5RNklGd2lJQ3NnZEdocGN5NTBhVzFsVEdWbWREdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NTBhVzFsVEdWbWRDQTlQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDBOb1lXNW5aU0IwYUdseklIUnZJSEJoYVhKelQzWmxjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZWFJsTG5OMFlYSjBLQ2RRWVdseWMwOTJaWEluS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J3YkdGalpVTmhjbVJ6S0NrZ2UxeHVYRzRnSUNBZ0lDQWdJR3hsZENCc1pXWjBVM0JoWTJVZ1BTQW9kR2hwY3k1bllXMWxMbmRwWkhSb0lDMGdLSFJvYVhNdWJuVnRRMjlzY3lBcUlIUm9hWE11ZEdsc1pWTnBlbVVwSUMwZ0tDaDBhR2x6TG01MWJVTnZiSE1nTFNBeEtTQXFJRngwZEdocGN5NTBhV3hsVTNCaFkybHVaeWtwTHpJN1hHNGdJQ0FnSUNBZ0lHeGxkQ0IwYjNCVGNHRmpaU0FnUFNBb2RHaHBjeTVuWVcxbExtaGxhV2RvZENBdElDaDBhR2x6TG01MWJWSnZkM01nS2lCMGFHbHpMblJwYkdWVGFYcGxLU0F0SUNnb2RHaHBjeTV1ZFcxU2IzZHpJQzBnTVNrZ0tpQmNkSFJvYVhNdWRHbHNaVk53WVdOcGJtY3BLUzh5TzF4dVhHNGdJQ0FnSUNBZ0lDOHZMUzBnVUc5d2RXeGhkR1VnWVhKeVlYa2dkMmwwYUNCd1lXbHljeUJ2WmlCdWRXMWlaWEp6SUZzeExERXNNaXd5TERNc015dzBMRFFzTGk0dVhWeHVJQ0FnSUNBZ0lDQm1iM0lvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1MGFXeGxjMHhsWm5RN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1allYSmtjMEZ5Y21GNUxuQjFjMmdvVFdGMGFDNW1iRzl2Y2locElDOGdNaWtwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeTh0TFNCU1lXNWtiMjFwZW1VZ0x5QnRhWGdnZEdobElHRnljbUY1WEc0Z0lDQWdJQ0FnSUdadmNpaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMblJwYkdWelRHVm1kRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdabkp2YlNBOUlDQjBhR2x6TG1kaGJXVXVjbTVrTG1KbGRIZGxaVzRvTUN3Z2RHaHBjeTVqWVhKa2MwRnljbUY1TG14bGJtZDBhQzB4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCMGJ5QWdJRDBnSUhSb2FYTXVaMkZ0WlM1eWJtUXVZbVYwZDJWbGJpZ3dMQ0IwYUdsekxtTmhjbVJ6UVhKeVlYa3ViR1Z1WjNSb0xURXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSFJsYlhBZ1BTQWdkR2hwY3k1allYSmtjMEZ5Y21GNVcyWnliMjFkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTmhjbVJ6UVhKeVlYbGJabkp2YlYwZ1BTQjBhR2x6TG1OaGNtUnpRWEp5WVhsYmRHOWRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqWVhKa2MwRnljbUY1VzNSdlhTQTlJSFJsYlhBN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THkwdElFUmxZV3dnZEdobElHTmhjbVJ6WEc0Z0lDQWdJQ0FnSUdadmNpaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlVOdmJITTdJR2tyS3lrZ2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSW9iR1YwSUdvZ1BTQXdPeUJxSUR3Z2RHaHBjeTV1ZFcxU2IzZHpPeUJxS3lzcElIdGNibHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHTmhjbVFnUFNCdVpYY2dRMkZ5WkVKMWRIUnZiaWg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nYkdWbWRGTndZV05sSUNzZ2FTQXFJQ2gwYUdsekxuUnBiR1ZUYVhwbElDdGNkSFJvYVhNdWRHbHNaVk53WVdOcGJtY3BJQ3NnTnpVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSdmNGTndZV05sSUNzZ2FpQXFJQ2gwYUdsekxuUnBiR1ZUYVhwbElDc2dkR2hwY3k1MGFXeGxVM0JoWTJsdVp5a2dLeUF4TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5kR2xzWlhNbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmphem9nZEdocGN5NXphRzkzUTJGeVpDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGc2JHSmhZMnREYjI1MFpYaDBPaUIwYUdsekxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjNkdVJuSmhiV1U2SURFeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2dkR2hwY3k1allYSmtjMEZ5Y21GNVcyb2dLaUIwYUdsekxtNTFiVU52YkhNZ0t5QnBYU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FYTkRiR2xsYm5RNklHWmhiSE5sWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWR2hwY3lCd1lYSjBJR2x6SUhkb1pYSmxJSGRsSUhSaGEyVWdkR2hsSUd4aGMzUWdZMkZ5WkNCcGJpQnZkWElnYzNCeWFYUmxjMmhsWlhRZ1lXNWtJSEpsY0d4aFkyVWdhWFFnZDJsMGFDQmhJR05zYVdWdWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWx1SUhSb2FYTWdZMkZ6WlNCMllXeDFaU0E1SUdseklIUm9aU0JzWVhOMElIWmhiSFZsSUc5bUlIUm9aU0FuYzNSaGJtUmhjbVFuSUdOaGNtUnpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lvWTJGeVpDNTJZV3gxWlNBOVBTQTVLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnlaQzUyWVd4MVpTQTlJSFJvYVhNdVkyaHZjMlZ1UTJ4cFpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallYSmtMbWx6UTJ4cFpXNTBJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVhKa0xtWnlZVzFsSUQwZ2RHaHBjeTVpWVdOclQyWlVhR1ZEWVhKa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTJGeVpFZHliM1Z3TG1Ga1pDaGpZWEprS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSE5vYjNkRFlYSmtLSFJoY21kbGRFTmhjbVFwSUh0Y2JpQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdLaUFnSUhCMWMyZ2dkR2hsSUhaaGJIVmxjeUJtY205dElIUm9aU0JqWVhKa2N5QjBieUJ2ZFhJZ2MyVnNaV04wWldRZ1lYSnlZWGtnYjJZZ1kyRnlaSE5jYmlBZ0lDQWdJQ0FnS2lBZ0lHbG1JSGx2ZFNCb1lYWmxJR05vYjNObGJpQXlMQ0JzWlhRbmN5QmpiMjF3WVhKbElIUm9aVzBnZFhOcGJtY2dZMmhsWTJ0VWFXeGxjMXh1SUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG5ObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVM1c1pXNW5kR2dnUENBeUlDWW1JSFJvYVhNdWMyVnNaV04wWldSRFlYSmtjMEZ5Y21GNUxtbHVaR1Y0VDJZb2RHRnlaMlYwUTJGeVpDa2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkwxUlBSRThnYzI5MWJtUnpYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QnBaaWh3YkdGNVUyOTFibVFwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnSUNBZ0lIUm9hWE11YzI5MWJtUkJjbkpoZVZzd1hTNXdiR0Y1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwWVhKblpYUkRZWEprTG1aeVlXMWxJRDBnZEdGeVoyVjBRMkZ5WkM1MllXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJWc1pXTjBaV1JEWVhKa2MwRnljbUY1TG5CMWMyZ29kR0Z5WjJWMFEyRnlaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXVjMlZzWldOMFpXUkRZWEprYzBGeWNtRjVMbXhsYm1kMGFDQTlQVDBnTWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTBhVzFsTG1WMlpXNTBjeTVoWkdRb1VHaGhjMlZ5TGxScGJXVnlMbE5GUTA5T1JDd2dkR2hwY3k1amFHVmphMVJwYkdWekxDQjBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTJobFkydFVhV3hsY3lncElIdGNiaUFnSUNBZ0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSUNvZ0lDQkRhR1ZqYXlCMGFHVWdhV1lnZEdobElIWmhiSFZsY3lCbWNtOXRJRzkxY2lCelpXeGxZM1JsWkVOaGNtUnpRWEp5WVhrZ1lYSmxJR1Z4ZFdGc1hHNGdJQ0FnSUNBZ0lDQXFJQ0FnYVdZZ2MyOHNJR0ZrWkNCelkyOXlaU0JoYm1RZ2FHbGtaU0IwYUdWdElHWnliMjBnZEdobElIVnpaWEl1WEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxuTmxiR1ZqZEdWa1EyRnlaSE5CY25KaGVWc3dYUzUyWVd4MVpTQTlQVDBnZEdocGN5NXpaV3hsWTNSbFpFTmhjbVJ6UVhKeVlYbGJNVjB1ZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ0FnSUNBcUlGUlBSRThnYzI5MWJtUnpYRzRnSUNBZ0lDQWdJQ0FnSUNBcUlHbG1LSFJvYVhNdWNHeGhlWE52ZFc1a0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNvZ0lDQjBhR2x6TG5OdmRXNWtRWEp5WVhsYk1WMHVjR3hoZVNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnS2lCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FxSUNvdlhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMk52Y21Vckt6dGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkR2x0WlV4bFpuUWdLejBnTWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRHbHRaVlJsZUhRdWRHVjRkQ0E5SUZ3aVZHbHRaU0JzWldaME9pQmNJaUFySUhSb2FYTXVkR2x0WlV4bFpuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5qYjNKbFZHVjRkQzUwWlhoMElEMGdYQ0pUWTI5eVpUb2dYQ0lnS3lCMGFHbHpMbk5qYjNKbE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlVUMFJQT2lCR2FYSmxJSFZ3SUhSb1pTQmxkbVZ1ZENCcFppQnBkSE1nWVNCamJHbGxiblFnUTJGeVpGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RHaHBjeTV6Wld4bFkzUmxaRU5oY21SelFYSnlZWGxiTUYwdWFYTkRiR2xsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1acGNtVkRiR2xsYm5STlpYTnpZV2RsS0Z3aVEyeHBaVzUwWENJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxiR1ZqZEdWa1EyRnlaSE5CY25KaGVWc3dYUzVrWlhOMGNtOTVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5ObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVZzeFhTNWtaWE4wY205NUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblJwYkdWelRHVm1kQ0F0UFNBeU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlhhVzRnWTI5dVpHbDBhVzl1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWgwYUdsekxuUnBiR1Z6VEdWbWRDQTlQVDBnTUNBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OaGNtUnpRWEp5WVhrdWJHVnVaM1JvSUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5ObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVM1c1pXNW5kR2dnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZkR2hwY3k1d2JHRmpaVU5oY21SektDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbk4wWVhSbExuTjBZWEowS0NkUWJHRjVVR0ZwY25NbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeTlVVDBSUE9pQlRiM1Z1WkhOY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUdsbUtIQnNZWGxUYjNWdVpDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QWdJQ0FnZEdocGN5NXpiM1Z1WkVGeWNtRjVXekpkTG5Cc1lYa29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNWpZVzFsY21FdWMyaGhhMlVvTUM0d01Td2dNVEF3S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIUm9aWGtnWVhKbElHNXZkQ0IwYUdVZ2MyRnRaU3dnWm1GalpTQjBhR1Z0SUc5bVpseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaV3hsWTNSbFpFTmhjbVJ6UVhKeVlYbGJNRjB1Wm5KaGJXVWdQU0IwYUdsekxtSmhZMnRQWmxSb1pVTmhjbVE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5ObGJHVmpkR1ZrUTJGeVpITkJjbkpoZVZzeFhTNW1jbUZ0WlNBOUlIUm9hWE11WW1GamEwOW1WR2hsUTJGeVpEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxiR1ZqZEdWa1EyRnlaSE5CY25KaGVTNXNaVzVuZEdnZ1BTQXdPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWnBjbVZEYkdsbGJuUk5aWE56WVdkbEtHTnNhV1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQmhiR1Z5ZENoY0lsUm9hWE1nYVhNZ1lTQnRaWE56WVdkbElHWnliMjBnWVNCa1pXWmhkV3gwSUVOc2FXVnVkRndpS1R0Y2JpQWdJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdWR1Y0ZEVKMWRIUnZiaUJtY205dElDY3VMaTh1TGk5bGVIUmxibk5wYjI1ekwyMWxiblV2ZEdWNGRHSjFkSFJ2YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCaGJtZFBkbVZ5SUdWNGRHVnVaSE1nVUdoaGMyVnlMbE4wWVhSbElIdGNibHh1SUNBZ0lHTnlaV0YwWlNncElIdGNibHh1WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGblpTNWlZV05yWjNKdmRXNWtRMjlzYjNJZ1BTQW5JemhsWXpGbE9DYzdYRzRnSUNBZ0lDQWdJSFJvYVhNdVltZERhWEpqYkdWeklEMGdkR2hwY3k1aFpHUXVhVzFoWjJVb01Dd3dMQ0FuWjI4dGIzWmxjbXhoZVNjcE8xeHVYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsUnBkR3hsSUQwZ2RHaHBjeTVoWkdRdWFXMWhaMlVvZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsZ2dLeUFnTXpBd0xIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaSUMwZ01qQXdMQ0FuWjI4dFZHVjRkQ2NwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlWR2wwYkdVdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQ0E5SUc1bGR5QlVaWGgwUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllJQ3NnTXpBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGtnS3lBeE1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWRIUnZibk1uTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1psY2taeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1YwUm5KaGJXVTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiM2R1Um5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjFjRVp5WVcxbE9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHRmlaV3c2SUNkVWNua2dZV2RoYVc0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5NakJ3ZUNCSVpXeDJaWFJwWTJFbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVd4cFoyNDZJQ2RqWlc1MFpYSW5YRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFNBOUlHNWxkeUJVWlhoMFFuVjBkRzl1S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZSUNzZ016QXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrZ0t5QWdNakl3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI1ekp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MlpYSkdjbUZ0WlRvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRFWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5M2JrWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCR2NtRnRaVG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc09pQW5UV1Z1ZFNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pUb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RNklDY3lNSEI0SUVobGJIWmxkR2xqWVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVQZG1WeVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTJaWEluS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1YwSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVJHOTNibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZFYjNkdUp5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1elpYUlBkbVZ5VTI5MWJtUW9kR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowTG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEVSdmQyNVRiM1Z1WkNoMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXpaWFJQZG1WeVUyOTFibVFvZEdocGN5NWlkRzVQZG1WeVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWMyVjBUM1YwVTI5MWJtUW9kR2hwY3k1aWRHNVBkWFJUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkUzV6WlhSRWIzZHVVMjkxYm1Rb2RHaHBjeTVpZEc1RWIzZHVVMjkxYm1RcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YjI1SmJuQjFkRVJ2ZDI0dVlXUmtLQ2dwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsTG5OMFlYSjBLQ2RRYkdGNVVHRnVaeWNwTzF4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblV1YjI1SmJuQjFkRVJ2ZDI0dVlXUmtLQ2dwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsTG5OMFlYSjBLQ2ROWlc1MUp5azdYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpRWVc1bGJDQTlJSFJvYVhNdVlXUmtMbWR5YjNWd0tDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKUVlXNWxiQzVoWkdRb2RHaHBjeTVuWVcxbFQzWmxjbFJwZEd4bEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xCaGJtVnNMbUZrWkNoMGFHbHpMbk4wWVhKMEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xCaGJtVnNMbUZrWkNoMGFHbHpMbTFsYm5VcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdVR3hoZVdWeUlHWnliMjBnSnk0dUx5NHVMM0J5WldaaFluTXZjR0Z1Wnk5d2JHRjVaWEluTzF4dWFXMXdiM0owSUVWdVpXMTVJR1p5YjIwZ0p5NHVMeTR1TDNCeVpXWmhZbk12Y0dGdVp5OWxibVZ0ZVZCaGJtY25PMXh1YVcxd2IzSjBJRWhWUkNCbWNtOXRJQ2N1TGk4dUxpOXdjbVZtWVdKekwzQmhibWN2YUhWa0p6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHeGhlVkJoYm1jZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNSaGRHVWdlMXh1WEc0Z0lDQWdhVzVwZENoamRYSnlaVzUwUTJ4cFpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUM4dlkyOXRaWE1nWm5KdmJTQnRaVzUxTG1welhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LR04xY25KbGJuUkRiR2xsYm5RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJEYkdsbGJuUWdQU0JqZFhKeVpXNTBRMnhwWlc1ME8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdOeVpXRjBaU2dwSUh0Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnTHk5VVQwUlBPaUJxYzI5dUlGUmxjM1JwYm1kY2JpQWdJQ0FnSUNBZ2RHaHBjeTVpWnlBOUlIUm9hWE11WVdSa0xtbHRZV2RsS0RBc0lEQXNKM0JoYm1kQ1p5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZEdsdFpTNXpiRzkzVFc5MGFXOXVJRDBnTUR0Y2JseHVYRzRnSUNBZ0lDQWdJQzh2SUMwdExTMHRMUzBnVUV4QldVVlNYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5SUQwZ2JtVjNJRkJzWVhsbGNpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklEQXVPVElnS2lCMGFHbHpMbWRoYldVdWQyOXliR1F1YUdWcFoyaDBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdGemMyVjBPaUFuWVd4cFpXNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ1puSmhiV1U2SUNkaGJHbGxiaTF6ZEdGdVpDNXdibWNuWEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV6ZEdGblpTNWhaR1JEYUdsc1pDaDBhR2x6TG5Cc1lYbGxjaWs3WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJRVZPUlUxWk9seHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMXBaWE1nUFNCMGFHbHpMbUZrWkM1bmNtOTFjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVaVzVoWW14bFFtOWtlU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx6RXVOVnh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1U1c1MFpYSjJZV3dnUFNBeUxqVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVVMmh2YjNSSmJuUmxjblpoYkNBOUlERTdYRzRnSUNBZ0lDQWdJQzh2SUMwdExTMHRMUzBnSVVWT1JVMVpYRzVjYmlBZ0lDQWdJQ0FnTHk4Z0xTMHRMUzB0TFNCemJXRnNiR1Z5UlU1RlRWazZJSFJvYVhNZ2IyNWxjeUJoY21VZ1kzSmxZWFJsWkNCbGRtVnllU0IxY0dSaGRHVWdkR2xqYTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk50WVd4c1pYSkZibVZ0YVdWeklEMGdkR2hwY3k1aFpHUXVaM0p2ZFhBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emJXRnNiR1Z5Ulc1bGJXbGxjeTVsYm1GaWJHVkNiMlI1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnTHk4Z0xTMHRMUzB0TFNBaGMyMWhiR3hsY2tWT1JVMVpYRzVjYmx4dUlDQWdJQ0FnSUNBdkx5QXRMUzB0TFMwdElFVk9SVTFaSUVOTVNVVk9WRG9nY21GdVpHOXRiSGtnWTJodmMyVnVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsYzBOc2FXVnVkQ0E5SUhSb2FYTXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYldsbGMwTnNhV1Z1ZEM1bGJtRmliR1ZDYjJSNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2YVc1cGRHbGhiR2w2WlNCbWFYSnpkQ0JqYkdsbGJuUmNibHh1WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuUnBiV1V1WlhabGJuUnpMbUZrWkNoUWFHRnpaWEl1VkdsdFpYSXVVMFZEVDA1RUlDb2dkR2hwY3k1bllXMWxMbkp1WkM1cGJuUmxaMlZ5U1c1U1lXNW5aU2d4TERFMUtTd2dablZ1WTNScGIyNG9LWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTNKbFlYUmxSVzVsYlhsRGJHbGxiblFvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtEWXNJRGMyS1NBcUlERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzQmxaV1E2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMUxDQXhNQ2tnS2lBeE1DQXFJQ2hOWVhSb0xuSmhibVJ2YlNncElENGdNQzQxSUQ4Z01TQTZJQzB4S1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMUxDQXhNQ2tnS2lBeE1GeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR1ZoYkhSb09pQXhOU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMnh2WjI5Q2RXSmliR1Z6Snl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWNtRnRaVG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnd0xDQTRLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDBzSUhSb2FYTXBPMXh1WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdMUzB0TFMwdExTQWhSVTVGVFZrZ1EweEpSVTVVT2lCeVlXNWtiMjFzZVNCamFHOXpaVzVjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWRHbHRaUzVsZG1WdWRITXViRzl2Y0NoUWFHRnpaWEl1VkdsdFpYSXVVMFZEVDA1RUlDb2dNVEFzSUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJvYVhNdVpXNWxiWGxKYm5SbGNuWmhiQ0ErSURBdU1pQXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxKYm5SbGNuWmhiQ0F0UFNBd0xqRTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVVSnBkRzFoY0NBOUlIUm9hWE11WVdSa0xtSnBkRzFoY0VSaGRHRW9kR2hwY3k1bllXMWxMbmRwWkhSb0xDQjBhR2x6TG1kaGJXVXVhR1ZwWjJoMEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1UW1sMGJXRndMbU4wZUM1bWFXeHNVM1I1YkdVZ1BTQW5JekF3TUNjN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlVUpwZEcxaGNDNWpkSGd1Wm1sc2JGSmxZM1FvTUN3Z01Dd2dkR2hwY3k1bllXMWxMbmRwWkhSb0xDQjBhR2x6TG1kaGJXVXVhR1ZwWjJoMEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhrZ1BTQjBhR2x6TG1Ga1pDNXpjSEpwZEdVb01Dd2dNQ3dnZEdocGN5NXZkbVZ5YkdGNVFtbDBiV0Z3S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVMblpwYzJsaWJHVWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1TG1Gc2NHaGhJRDBnTUM0M05UdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtaDFaQ0E5SUc1bGR5QklWVVFvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnY0d4aGVXVnlPaUIwYUdsekxuQnNZWGxsY2x4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0F2THlBdExTMHRMUzB0SUZOUFZVNUVVMXh1SUNBZ0lDQWdJQzh2SUhSb2FYTXViWFZ6YVdNZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1GMVpHbHZLQ2R3YkdGNVRYVnphV01uS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUklhWFJUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZGlkV3hzWlhSSWFYUW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVVWNGNHeHZjMmx2YmxOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMlZ1WlcxNVJYaHdiRzl6YVc5dUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5Ulhod2JHOXphVzl1VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25jR3hoZVdWeVJYaHdiRzl6YVc5dUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2RuWVcxbFQzWmxjaWNwTzF4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZFhCa1lYUmxLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbFVhVzFsSUNzOUlIUm9hWE11WjJGdFpTNTBhVzFsTG5Cb2VYTnBZM05GYkdGd2MyVmtPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1VTJodmIzUlVhVzFsSUNzOUlIUm9hWE11WjJGdFpTNTBhVzFsTG5Cb2VYTnBZM05GYkdGd2MyVmtPMXh1WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVpXNWxiWGxVYVcxbElENGdkR2hwY3k1bGJtVnRlVWx1ZEdWeWRtRnNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVWR2x0WlNBOUlEQTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTNKbFlYUmxSVzVsYlhrb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVjbTVrTG1sdWRHVm5aWEpKYmxKaGJtZGxLRFlzSURjMktTQXFJREV3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dk1GeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJQzB5TnpBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzQmxaV1E2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNndE5UQXdMQ0ExTURBcElDb2dLRTFoZEdndWNtRnVaRzl0S0NrZ1BpQXdMalVnUHlBeElEb2dMVEVwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0MwMU5UQXNNVEF3S1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hsWVd4MGFEb2dPU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpZFd4c1pYUlRjR1ZsWkRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oySjFZbUpzWlhNbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITnBlbVU2SUZ3aWJXVmthWFZ0WENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1puSmhiV1U2SUhSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb01Dd3lLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtVnVaVzE1VTJodmIzUlVhVzFsSUQ0Z2RHaHBjeTVsYm1WdGVWTm9iMjkwU1c1MFpYSjJZV3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG5Cc1lYbGxjaTVoYkdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWljbWx1WjFSdlZHOXdLSFJvYVhNdWIzWmxjbXhoZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29YQ0pJWVhNZ2JYVmxjblJ2WENJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Y0doNWMybGpjeTVoY21OaFpHVXViM1psY214aGNDaDBhR2x6TG5Cc1lYbGxjaTVpZFd4c1pYUnpMQ0JiZEdocGN5NWxibVZ0YVdWekxIUm9hWE11YzIxaGJHeGxja1Z1WlcxcFpYTXNkR2hwY3k1bGJtVnRhV1Z6UTJ4cFpXNTBYU3dnZEdocGN5NW9hWFJGYm1WdGVTd2diblZzYkN3Z2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1d2FIbHphV056TG1GeVkyRmtaUzV2ZG1WeWJHRndLSFJvYVhNdWNHeGhlV1Z5TENCYmRHaHBjeTVsYm1WdGFXVnpMSFJvYVhNdWMyMWhiR3hsY2tWdVpXMXBaWE5kTENCMGFHbHpMbU55WVhOb1JXNWxiWGtzSUc1MWJHd3NJSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUk5aVzUxS0NrN1hHNWNiaUFnSUNCOVhHNWNiaUFnSUNCamNtVmhkR1ZGYm1WdGVTaGtZWFJoS1NCN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUdWdVpXMTVJRDBnZEdocGN5NWxibVZ0YVdWekxtZGxkRVpwY25OMFJYaHBjM1J6S0daaGJITmxLVHRjYmlBZ0lDQWdJQ0FnYkdWMElIUnZkR0ZzUlc1bGJXbGxjeUE5SUhSb2FYTXVaVzVsYldsbGN5NWphR2xzWkhKbGJpNXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGbGJtVnRlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaVzVsYlhrZ1BTQnVaWGNnUlc1bGJYa29aR0YwWVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGIzUmhiRVZ1WlcxcFpYTWdQRDBnTlNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGFXVnpMbUZrWkNobGJtVnRlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJtVnRlUzV5WlhObGRDaGtZWFJoS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqY21WaGRHVlRiV0ZzYkdWeVJXNWxiWGtvWkdGMFlTa2dlMXh1WEc0Z0lDQWdJQ0FnSUd4bGRDQmxibVZ0ZVNBOUlIUm9hWE11YzIxaGJHeGxja1Z1WlcxcFpYTXVaMlYwUm1seWMzUkZlR2x6ZEhNb1ptRnNjMlVwTzF4dUlDQWdJQ0FnSUNCc1pYUWdkRzkwWVd4RmJtVnRhV1Z6SUQwZ2RHaHBjeTV6YldGc2JHVnlSVzVsYldsbGN5NWphR2xzWkhKbGJpNXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGbGJtVnRlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaVzVsYlhrZ1BTQnVaWGNnUlc1bGJYa29aR0YwWVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGIzUmhiRVZ1WlcxcFpYTWdQRDBnTWpRcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzIxaGJHeGxja1Z1WlcxcFpYTXVZV1JrS0dWdVpXMTVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWdVpXMTVMbkpsYzJWMEtHUmhkR0VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR055WldGMFpVVnVaVzE1UTJ4cFpXNTBLR1JoZEdFcElIdGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ1pXNWxiWGtnUFNCMGFHbHpMbVZ1WlcxcFpYTkRiR2xsYm5RdVoyVjBSbWx5YzNSRmVHbHpkSE1vWm1Gc2MyVXBPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2RHOTBZV3hGYm1WdGFXVnpJRDBnZEdocGN5NWxibVZ0YVdWelEyeHBaVzUwTG1Ob2FXeGtjbVZ1TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVzYjJjb2RHOTBZV3hGYm1WdGFXVnpLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJtVnRlU0E5SUc1bGR5QkZibVZ0ZVNoa1lYUmhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJ2ZEdGc1JXNWxiV2xsY3lBOFBTQXhLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzFwWlhORGJHbGxiblF1WVdSa0tHVnVaVzE1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnVaVzE1TG5KbGMyVjBLR1JoZEdFcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdocGRFVm1abVZqZENodlltb3NJR052Ykc5eUtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCMGQyVmxiaUE5SUhSb2FYTXVaMkZ0WlM1aFpHUXVkSGRsWlc0b2IySnFLVHRjYmlBZ0lDQWdJQ0FnYkdWMElHVnRhWFIwWlhJZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1WdGFYUjBaWElvS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J3WVhKMGFXTnNaVk53WldWa0lEMGdNVEF3TzF4dUlDQWdJQ0FnSUNCc1pYUWdiV0Y0VUdGeWRHbGpiR1Z6SUQwZ01UQTdYRzVjYmlBZ0lDQWdJQ0FnZEhkbFpXNHVkRzhvZTNScGJuUTZJREI0Wm1Zd01EQXdmU3dnTVRBd0tUdGNiaUFnSUNBZ0lDQWdkSGRsWlc0dWIyNURiMjF3YkdWMFpTNWhaR1FvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2IySnFMblJwYm5RZ1BTQXdlR1ptWm1abVpqdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhSM1pXVnVMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTU0SUQwZ2IySnFMbmc3WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1ZVNBOUlHOWlhaTU1TzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG1keVlYWnBkSGtnUFNBd08xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtMWhhMlZRWVhKMGFXTnNaWE1vSjNCaGNuUnBZMnhsSnlrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0c5aWFpNW9aV0ZzZEdnZ1BEMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5ZEdsamJHVlRjR1ZsWkNBOUlESXdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhlRkJoY25ScFkyeGxjeUE5SURRd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSWdQU0F3ZUdabU1EQXdNRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWJXbHVVR0Z5ZEdsamJHVlRjR1ZsWkM1elpYUlVieWd0Y0dGeWRHbGpiR1ZUY0dWbFpDd2dMWEJoY25ScFkyeGxVM0JsWldRcE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtMWhlRkJoY25ScFkyeGxVM0JsWldRdWMyVjBWRzhvY0dGeWRHbGpiR1ZUY0dWbFpDd2djR0Z5ZEdsamJHVlRjR1ZsWkNrN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWMzUmhjblFvZEhKMVpTd2dOVEF3TENCdWRXeHNMQ0J0WVhoUVlYSjBhV05zWlhNcE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxuVndaR0YwWlNBOUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQStQU0F3TGpZcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlcxcGRIUmxjaTVrWlhOMGNtOTVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1bWIzSkZZV05vS0hCaGNuUnBZMnhsSUQwK0lIQmhjblJwWTJ4bExuUnBiblFnUFNCamIyeHZjaWs3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1d2JHRjVaWEl1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1aWNtbHVaMVJ2Vkc5d0tIUm9hWE11YjNabGNteGhlU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JvYVhSRmJtVnRlU2hpZFd4c1pYUXNJR1Z1WlcxNUtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwU0dsMFUyOTFibVF1Y0d4aGVTaGNJbHdpTERBc01DNDFLVHRjYmlBZ0lDQWdJQ0FnWlc1bGJYa3VaR0Z0WVdkbEtHSjFiR3hsZEM1b1pXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhwZEVWbVptVmpkQ2hsYm1WdGVTd2dZblZzYkdWMExuUnBiblFwTzF4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1Ulhod2JHOXphVzl1VTI5MWJtUXVjR3hoZVNoY0lsd2lMQ0F3TENBd0xqVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVvZFdRdWRYQmtZWFJsVTJOdmNtVW9aVzVsYlhrdWJXRjRTR1ZoYkhSb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtDQmxibVZ0ZVM1emFYcGxJRDA5UFNBbmJXVmthWFZ0SnlrZ2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amNtVmhkR1ZUYldGc2JHVnlSVzVsYlhrb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJR1Z1WlcxNUxuZ3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUI0T2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtEQXNJSFJvYVhNdVoyRnRaUzUzYVdSMGFDQXRJRE13TUNrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx6QmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJR1Z1WlcxNUxua3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpjR1ZsWkRvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUMwek1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ0xUTXdNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QjRPaUF6TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnZVRvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZ3hNREFzSUMwMU5UQXBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeTg1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWldGc2RHZzZJRFVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkoxWW1Kc1pYTW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMmw2WlRvZ1hDSnpiV0ZzYkZ3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1puSmhiV1U2SUhSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb015dzFLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkzSmxZWFJsVTIxaGJHeGxja1Z1WlcxNUtGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUJsYm1WdGVTNTRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nWlc1bGJYa3VlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE53WldWa09pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ016QXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklDMHpNREFzWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1pXRnNkR2c2SURVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMVltSnNaWE1uTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJsNlpUb2dYQ0p6YldGc2JGd2lMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabkpoYldVNklIUm9hWE11WjJGdFpTNXlibVF1YVc1MFpXZGxja2x1VW1GdVoyVW9NeXcxS1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlkV3hzWlhRdWEybHNiQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTNKaGMyaEZibVZ0ZVNod2JHRjVaWElzSUdWdVpXMTVLU0I3WEc0Z0lDQWdJQ0FnSUM4dlpXNWxiWGt1WkdGdFlXZGxLR1Z1WlcxNUxtaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lHVnVaVzE1TG1SaGJXRm5aU2d6S1R0Y2JpQWdJQ0FnSUNBZ0x5OXdiR0Y1WlhJdVpHRnRZV2RsS0dWdVpXMTVMbWhsWVd4MGFDazdYRzRnSUNBZ0lDQWdJSEJzWVhsbGNpNWtZVzFoWjJVb01TazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHbDBSV1ptWldOMEtIQnNZWGxsY2lrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YUdsMFJXWm1aV04wS0dWdVpXMTVLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmxibVZ0ZVM1aGJHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVVY0Y0d4dmMybHZibE52ZFc1a0xuQnNZWGtvWENKY0lpd3dMREF1TlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtaDFaQzUxY0dSaGRHVlRZMjl5WlNobGJtVnRlUzV0WVhoSVpXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIUm9hWE11YUhWa0xuVndaR0YwWlVobFlXeDBhQ2dwTzF4dUlDQWdJQ0FnSUNCcFppQW9JWEJzWVhsbGNpNWhiR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKRmVIQnNiM05wYjI1VGIzVnVaQzV3YkdGNUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWVcxbFQzWmxjaWdwZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWRHbHRaUzV6Ykc5M1RXOTBhVzl1SUQwZ016dGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1TG5acGMybGliR1VnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVZbkpwYm1kVWIxUnZjQ2gwYUdsekxtOTJaWEpzWVhrcE8xeHVJQ0FnSUNBZ0lDQnNaWFFnZEdsdFpYSWdQU0IwYUdsekxtZGhiV1V1ZEdsdFpTNWpjbVZoZEdVb2RHaHBjeTVuWVcxbExDQjBjblZsS1R0Y2JpQWdJQ0FnSUNBZ2RHbHRaWEl1WVdSa0tETXdNREFzSUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSFJvYVhNdWJYVnphV011YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbE52ZFc1a0xuQnNZWGtvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV6ZEdGMFpTNXpkR0Z5ZENnblVHRnVaMDkyWlhJbktUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhScGJXVnlMbk4wWVhKMEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHOWhaRTFsYm5Vb0tYdGNiaUFnSUNBZ0lDQWdiR1YwSUdWelkwdGxlU0E5SUhSb2FYTXVaMkZ0WlM1cGJuQjFkQzVyWlhsaWIyRnlaQzVwYzBSdmQyNG9VR2hoYzJWeUxrdGxlV0p2WVhKa0xrVlRReWs3WEc0Z0lDQWdJQ0FnSUdsbUtHVnpZMHRsZVNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5SRGJHbGxiblFyS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkzVnpkRzl0Vm1GeU1pQTlJRndpVDJwbGRHVmNJanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlMbXRwYkd3b0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dmMzUmhjblJ6SUhSb1pTQnpkR0YwWlNCM2FYUm9JR04xYzNSdmJTQjJZWEpwWVdKc1pYTmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1emRHRjBaUzV6ZEdGeWRDZ25UV1Z1ZFNjc0lIUnlkV1VzSUdaaGJITmxMQ0IwYUdsekxtTjFjbkpsYm5SRGJHbGxiblFzZEdocGN5NWpkWE4wYjIxV1lYSXlLVHRjYmx4dVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNTlYRzRpTENKbGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFjbVZzYjJGa0lHVjRkR1Z1WkhNZ1VHaGhjMlZ5TGxOMFlYUmxJSHRjYmx4dUlDQWdJSEJ5Wld4dllXUW9LU0I3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa1pYSkNaeUE5SUhSb2FYTXVZV1JrTG5Od2NtbDBaU2gwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDd2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrc0lDZHNiMkZrWlhKQ1p5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1JsY2tKaGNpQTlJSFJvYVhNdVlXUmtMbk53Y21sMFpTaDBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N3Z2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGtzSUNkc2IyRmtaWEpDWVhJbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtaWEpDWnk1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa1pYSkNZWEl1WVc1amFHOXlMbk5sZEZSdktEQXVOU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xuTmxkRkJ5Wld4dllXUlRjSEpwZEdVb2RHaHBjeTVzYjJGa1pYSkNZWElwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnbloyOUpiblJ5YjB4dloyOG5MQ0FuYVcxbkwyZGxibVZ5YVdNdloyOUpiblJ5Ynkxc2IyZHZMbkJ1WnljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVhVzFoWjJVb0oySm5RMnh2ZFdSekp5d25hVzFuTDJkbGJtVnlhV012WW1kRGJHOTFaSE11Y0c1bkp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzV6Y0hKcGRHVnphR1ZsZENnblluVjBkRzl1Y3ljc0oybHRaeTluWlc1bGNtbGpMM2xsYkd4dmQwSjFkSFJ2Ymk1d2JtY25MRE0yTUN3NU15dzBLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QlRhRzl2ZEdWeVhHNWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YVcxaFoyVW9KMkoxYkd4bGRDY3NJQ2RwYldjdmNHRnVaeTlpZFd4c1pYUXVjRzVuSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnbmNHRnlkR2xqYkdVbkxDQW5hVzFuTDNCaGJtY3ZjR0Z5ZEdsamJHVXVaMmxtSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnbmFHVmhiSFJvWW1GeUp5d2dKMmx0Wnk5d1lXNW5MMmhsWVd4MGFHSmhjaTV3Ym1jbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbWx0WVdkbEtDZG9kV1JDWnljc0lDZHBiV2N2Y0dGdVp5OW9kV1F0WW1jdWNHNW5KeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtRjFaR2x2S0Nkd2JHRjVUWFZ6YVdNbkxDQmJKMkYxWkdsdkwzTm9iMjkwWlhJdmJYVnphV012Y0d4aGVTNXRjRE1uWFNrN1hHNGdJQ0FnSUNBZ0lDOHZJVk5vYjI5MFpYSmNibHh1SUNBZ0lDQWdJQ0F2THlCTmFYTmpJSE52ZFc1a2MxeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVZWFZrYVc4b0oyMWxiblZOZFhOcFl5Y3NJRnNuWVhWa2FXOHZjMmh2YjNSbGNpOXRkWE5wWXk5dFpXNTFMbTF3TXlkZEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KMjFsYm5WUGRtVnlKeXdnV3lkaGRXUnBieTl6YUc5dmRHVnlMM052ZFc1a0wyMWxiblV0YjNabGNpNXRjRE1uWFNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkV1JwYnlnbmJXVnVkVTkxZENjc0lGc25ZWFZrYVc4dmMyaHZiM1JsY2k5emIzVnVaQzl0Wlc1MUxXOTFkQzV0Y0RNblhTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZFdScGJ5Z25iV1Z1ZFVSdmQyNG5MQ0JiSjJGMVpHbHZMM05vYjI5MFpYSXZjMjkxYm1RdmJXVnVkUzFqYkdsamF5NXRjRE1uWFNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYxWkdsdktDZGlkV3hzWlhSSWFYUW5MQ0JiSjJGMVpHbHZMM05vYjI5MFpYSXZjMjkxYm1RdlluVnNiR1YwTFdocGRDNXRjRE1uWFNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkV1JwYnlnblpXNWxiWGxUYUc5MEp5d2dXeWRoZFdScGJ5OXphRzl2ZEdWeUwzTnZkVzVrTDJWdVpXMTVMWE5vYjNRdWJYQXpKMTBwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdVlYVmthVzhvSjJWdVpXMTVSWGh3Ykc5emFXOXVKeXdnV3lkaGRXUnBieTl6YUc5dmRHVnlMM052ZFc1a0wyVnVaVzE1TFdWNGNHeHZjMmx2Ymk1dGNETW5YU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRXUnBieWduY0d4aGVXVnlVMmh2ZENjc0lGc25ZWFZrYVc4dmMyaHZiM1JsY2k5emIzVnVaQzl3YkdGNVpYSXRjMmh2ZEM1dGNETW5YU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRXUnBieWduY0d4aGVXVnlSWGh3Ykc5emFXOXVKeXdnV3lkaGRXUnBieTl6YUc5dmRHVnlMM052ZFc1a0wzQnNZWGxsY2kxbGVIQnNiM05wYjI0dWJYQXpKMTBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkV1JwYnlnbloyRnRaVTkyWlhJbkxDQmJKMkYxWkdsdkwzTm9iMjkwWlhJdmMyOTFibVF2WjJGdFpTMXZkbVZ5TG0xd015ZGRLVHRjYmlBZ0lDQWdJQ0FnTHk4Z1RXbHpZeUJ6YjNWdVpITmNibHh1WEc0Z0lDQWdJQ0FnSUM4dlVHRnVaMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1cGJXRm5aU2duY0dGdVowSm5KeXdnSjJsdFp5OXdZVzVuTDNCaGJtZENaeTV3Ym1jbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbWx0WVdkbEtDZG5ieTF2ZG1WeWJHRjVKeXdnSjJsdFp5OXdZVzVuTDJkaGJXVlBkbVZ5TFdKbkxuQnVaeWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdWFXMWhaMlVvSjJkdkxWUmxlSFFuTENBbmFXMW5MM0JoYm1jdloyRnRaVTkyWlhJdGRHVjRkQzV3Ym1jbktUdGNibHh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRHeGhjMHBUVDA1SVlYTm9LQ2RpZFdKaWJHVnpKeXduYVcxbkwzQmhibWN2YzNCeWFYUmxjMmhsWlhRdlluVmlZbXhsY3k1d2JtY25MQ2RrWVhSaEwzQmhibWN2YzNCeWFYUmxjMmhsWlhRdlluVmlZbXhsY3k1cWMyOXVKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRHeGhjMHBUVDA1SVlYTm9LQ2RzYjJkdlFuVmlZbXhsY3ljc0oybHRaeTl3WVc1bkwzTndjbWwwWlhOb1pXVjBMMnh2WjI5Q2RXSmliR1Z6TG5CdVp5Y3NKMlJoZEdFdmNHRnVaeTl6Y0hKcGRHVnphR1ZsZEM5c2IyZHZRblZpWW14bGN5NXFjMjl1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkR3hoYzBwVFQwNUlZWE5vS0NkaGJHbGxiaWNzSjJsdFp5OXdZVzVuTDNOd2NtbDBaWE5vWldWMEwyRnNhV1Z1TG5CdVp5Y3NKMlJoZEdFdmNHRnVaeTl6Y0hKcGRHVnphR1ZsZEM5aGJHbGxiaTVxYzI5dUp5azdYRzVjYmlBZ0lDQWdJQ0FnTHk4aFVHRnVaMXh1WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdiV0YwWTJocGJtY2djR0ZwY25OY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVjM0J5YVhSbGMyaGxaWFFvSjNScGJHVnpKeXduYVcxbkwzQmhhWEp6TDNScGJHVnpRMnhwWlc1ME15NXdibWNuTENBeE5UQXNJREUzTUN3Z01UVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YVcxaFoyVW9KMkpuSnl3Z0oybHRaeTl3WVdseWN5OWlaeTVxY0djbktUdGNiaUFnSUNBZ0lDQWdMeThnYldGMFkyaHBibWNnY0dGcGNuTmNiaUFnSUNCOVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbExuTjBZWEowS0NkTlpXNTFKeWs3WEc0Z0lDQWdmVnh1WEc1OVhHNGlMQ0pwYlhCdmNuUWdWR1Y0ZEVKMWRIUnZiaUJtY205dElDY3VMaTh1TGk5bGVIUmxibk5wYjI1ekwyMWxiblV2ZEdWNGRHSjFkSFJ2YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUU5MlpYSWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVUzUmhkR1VnZTF4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpVYVhSc1pTQTlJRzVsZHlCUWFHRnpaWEl1VkdWNGRDaDBhR2x6TG1kaGJXVXNJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V1MweU1EQXNJQ2RIWVcxbElHOTJaWEluTENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5Nelp3ZUNCVVlXaHZiV0VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzYVdkdU9pQW5ZMlZ1ZEdWeUoxeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsUnBkR3hsTG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUWdQU0J1WlhjZ1ZHVjRkRUoxZEhSdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaTFRNd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RpZFhSMGIyNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzWmxja1p5WVcxbE9pQXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzVjBSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IzZHVSbkpoYldVNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2RVY25rZ1lXZGhhVzRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1UWndlQ0JXWlhKa1lXNWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVWdQU0J1WlhjZ1ZHVjRkRUoxZEhSdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaS3pNd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RpZFhSMGIyNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzWmxja1p5WVcxbE9pQXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzVjBSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IzZHVSbkpoYldVNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2ROWlc1MUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05dWREb2dKekUyY0hnZ1ZtVnlaR0Z1WVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVQZG1WeVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTJaWEluS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1YwSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVJHOTNibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZFYjNkdUp5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1elpYUlBkbVZ5VTI5MWJtUW9kR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowTG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEVSdmQyNVRiM1Z1WkNoMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXpaWFJQZG1WeVUyOTFibVFvZEdocGN5NWlkRzVQZG1WeVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWMyVjBUM1YwVTI5MWJtUW9kR2hwY3k1aWRHNVBkWFJUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkUzV6WlhSRWIzZHVVMjkxYm1Rb2RHaHBjeTVpZEc1RWIzZHVVMjkxYm1RcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YjI1SmJuQjFkRVJ2ZDI0dVlXUmtLQ2dwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsTG5OMFlYSjBLQ2RRYkdGNUp5azdYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXZia2x1Y0hWMFJHOTNiaTVoWkdRb0tDazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0owMWxiblVuS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzSUQwZ2RHaHBjeTVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxtZGhiV1ZQZG1WeVZHbDBiR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWMzUmhjblFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWJXVnVkU2s3WEc0Z0lDQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElGQnNZWGxsY2lCbWNtOXRJQ2N1TGk4dUxpOXdjbVZtWVdKekwzTm9iMjkwWlhJdmNHeGhlV1Z5Snp0Y2JtbHRjRzl5ZENCRmJtVnRlU0JtY205dElDY3VMaTh1TGk5d2NtVm1ZV0p6TDNOb2IyOTBaWEl2Wlc1bGJYa25PMXh1YVcxd2IzSjBJRWhWUkNCbWNtOXRJQ2N1TGk4dUxpOXdjbVZtWVdKekwzQmhibWN2YUhWa0p6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHeGhlU0JsZUhSbGJtUnpJRkJvWVhObGNpNVRkR0YwWlNCN1hHNWNiaUFnSUNCamNtVmhkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lDOHZabUZ5WW1GamF5QTlJR0poWTJ0bmNtOTFibVJjYmlBZ0lDQWdJQ0FnZEdocGN5NW1ZWEppWVdOcklEMGdkR2hwY3k1aFpHUXVkR2xzWlZOd2NtbDBaU2d3TENBd0xDQTRNREFzSURJek9EQXNJQ2RtWVhKaVlXTnJKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1MGFXMWxMbk5zYjNkTmIzUnBiMjRnUFNBd08xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsY3lBOUlIUm9hWE11WVdSa0xtZHliM1Z3S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjeTVsYm1GaWJHVkNiMlI1SUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNpQTlJRzVsZHlCUWJHRjVaWElvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGdzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUF3TGpreUlDb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtaGxhV2RvZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR2hsWVd4MGFEb2dNVEF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZHpiV0ZzYkdacFoyaDBaWEluTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabkpoYldVNklERmNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1emRHRm5aUzVoWkdSRGFHbHNaQ2gwYUdsekxuQnNZWGxsY2lrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1b2RXUWdQU0J1WlhjZ1NGVkVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJzWVhsbGNqb2dkR2hwY3k1d2JHRjVaWEpjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbWx1Y0hWMExtOXVSRzkzYmk1aFpHUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5ScGJXVXVjMnh2ZDAxdmRHbHZiaUE5SURBN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1cGJuQjFkQzV2YmxWd0xtRmtaQ2dvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWRHbHRaUzV6Ykc5M1RXOTBhVzl1SUQwZ01EdGNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVWUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVTVzUwWlhKMllXd2dQU0F4TGpVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbFRhRzl2ZEZScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JKYm5SbGNuWmhiQ0E5SURFN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSlRhRzl2ZEVsdWRHVnlkbUZzSUQwZ01DNHhOanRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWRHbHRaUzVsZG1WdWRITXViRzl2Y0NoUWFHRnpaWEl1VkdsdFpYSXVVMFZEVDA1RUlDb2dNVEFzSUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJvYVhNdVpXNWxiWGxKYm5SbGNuWmhiQ0ErSURBdU9TQXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxKYm5SbGNuWmhiQ0F0UFNBd0xqRTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVVSnBkRzFoY0NBOUlIUm9hWE11WVdSa0xtSnBkRzFoY0VSaGRHRW9kR2hwY3k1bllXMWxMbmRwWkhSb0xDQjBhR2x6TG1kaGJXVXVhR1ZwWjJoMEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1UW1sMGJXRndMbU4wZUM1bWFXeHNVM1I1YkdVZ1BTQW5JekF3TUNjN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlVUpwZEcxaGNDNWpkSGd1Wm1sc2JGSmxZM1FvTUN3Z01Dd2dkR2hwY3k1bllXMWxMbmRwWkhSb0xDQjBhR2x6TG1kaGJXVXVhR1ZwWjJoMEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhrZ1BTQjBhR2x6TG1Ga1pDNXpjSEpwZEdVb01Dd2dNQ3dnZEdocGN5NXZkbVZ5YkdGNVFtbDBiV0Z3S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVMblpwYzJsaWJHVWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1TG1Gc2NHaGhJRDBnTUM0M05UdGNibHh1SUNBZ0lDQWdJQzh2SUhSb2FYTXViWFZ6YVdNZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1GMVpHbHZLQ2R3YkdGNVRYVnphV01uS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUklhWFJUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZGlkV3hzWlhSSWFYUW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVVWNGNHeHZjMmx2YmxOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMlZ1WlcxNVJYaHdiRzl6YVc5dUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5Ulhod2JHOXphVzl1VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25jR3hoZVdWeVJYaHdiRzl6YVc5dUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2RuWVcxbFQzWmxjaWNwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZkR2hwY3k1dGRYTnBZeTVzYjI5d1JuVnNiQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFZ3WkdGMFpTZ3BJSHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVk5vYjI5MFZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpUYUc5dmRGUnBiV1VnS3owZ2RHaHBjeTVuWVcxbExuUnBiV1V1Y0doNWMybGpjMFZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Wlc1bGJYbFVhVzFsSUQ0Z2RHaHBjeTVsYm1WdGVVbHVkR1Z5ZG1Gc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVZHbHRaU0E5SURBN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZM0psWVhSbFJXNWxiWGtvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtEWXNJRGMyS1NBcUlERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzQmxaV1E2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMUxDQXhNQ2tnS2lBeE1DQXFJQ2hOWVhSb0xuSmhibVJ2YlNncElENGdNQzQxSUQ4Z01TQTZJQzB4S1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMUxDQXhNQ2tnS2lBeE1GeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR1ZoYkhSb09pQTVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRGTndaV1ZrT2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtERXdMQ0F5TUNrZ0tpQXhNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkZzYVdWdUoxeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVsYm1WdGVWTm9iMjkwVkdsdFpTQStJSFJvYVhNdVpXNWxiWGxUYUc5dmRFbHVkR1Z5ZG1Gc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjeTVtYjNKRllXTm9RV3hwZG1Vb1pXNWxiWGtnUFQ0Z1pXNWxiWGt1YzJodmIzUW9LU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXVjR3hoZVdWeUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1KeWFXNW5WRzlVYjNBb2RHaHBjeTV2ZG1WeWJHRjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5Cc1lYbGxjbE5vYjI5MFZHbHRaU0ErSUhSb2FYTXVjR3hoZVdWeVUyaHZiM1JKYm5SbGNuWmhiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEl1YzJodmIzUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1d2FIbHphV056TG1GeVkyRmtaUzV2ZG1WeWJHRndLSFJvYVhNdWNHeGhlV1Z5TG1KMWJHeGxkSE1zSUhSb2FYTXVaVzVsYldsbGN5d2dkR2hwY3k1b2FYUkZibVZ0ZVN3Z2JuVnNiQ3dnZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5Cb2VYTnBZM011WVhKallXUmxMbTkyWlhKc1lYQW9kR2hwY3k1d2JHRjVaWElzSUhSb2FYTXVaVzVsYldsbGN5d2dkR2hwY3k1amNtRnphRVZ1WlcxNUxDQnVkV3hzTENCMGFHbHpLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVabTl5UldGamFDaGxibVZ0ZVNBOVBpQjBhR2x6TG1kaGJXVXVjR2g1YzJsamN5NWhjbU5oWkdVdWIzWmxjbXhoY0NoMGFHbHpMbkJzWVhsbGNpd2daVzVsYlhrdVluVnNiR1YwY3l3Z2RHaHBjeTVvYVhSUWJHRjVaWElzSUc1MWJHd3NJSFJvYVhNcEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtWmhjbUpoWTJzdWRHbHNaVkJ2YzJsMGFXOXVMbmtnS3owZ016dGNiaUFnSUNCOVhHNWNiaUFnSUNCamNtVmhkR1ZGYm1WdGVTaGtZWFJoS1NCN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUdWdVpXMTVJRDBnZEdocGN5NWxibVZ0YVdWekxtZGxkRVpwY25OMFJYaHBjM1J6S0daaGJITmxLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJtVnRlU0E5SUc1bGR5QkZibVZ0ZVNoa1lYUmhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjeTVoWkdRb1pXNWxiWGtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnVaVzE1TG5KbGMyVjBLR1JoZEdFcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdocGRFVm1abVZqZENodlltb3NJR052Ykc5eUtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCMGQyVmxiaUE5SUhSb2FYTXVaMkZ0WlM1aFpHUXVkSGRsWlc0b2IySnFLVHRjYmlBZ0lDQWdJQ0FnYkdWMElHVnRhWFIwWlhJZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG1WdGFYUjBaWElvS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J3WVhKMGFXTnNaVk53WldWa0lEMGdNVEF3TzF4dUlDQWdJQ0FnSUNCc1pYUWdiV0Y0VUdGeWRHbGpiR1Z6SUQwZ01UQTdYRzVjYmlBZ0lDQWdJQ0FnZEhkbFpXNHVkRzhvZTNScGJuUTZJREI0Wm1Zd01EQXdmU3dnTVRBd0tUdGNiaUFnSUNBZ0lDQWdkSGRsWlc0dWIyNURiMjF3YkdWMFpTNWhaR1FvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2IySnFMblJwYm5RZ1BTQXdlR1ptWm1abVpqdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhSM1pXVnVMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTU0SUQwZ2IySnFMbmc3WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1ZVNBOUlHOWlhaTU1TzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG1keVlYWnBkSGtnUFNBd08xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtMWhhMlZRWVhKMGFXTnNaWE1vSjNCaGNuUnBZMnhsSnlrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0c5aWFpNW9aV0ZzZEdnZ1BEMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5ZEdsamJHVlRjR1ZsWkNBOUlESXdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhlRkJoY25ScFkyeGxjeUE5SURRd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSWdQU0F3ZUdabU1EQXdNRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWJXbHVVR0Z5ZEdsamJHVlRjR1ZsWkM1elpYUlVieWd0Y0dGeWRHbGpiR1ZUY0dWbFpDd2dMWEJoY25ScFkyeGxVM0JsWldRcE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtMWhlRkJoY25ScFkyeGxVM0JsWldRdWMyVjBWRzhvY0dGeWRHbGpiR1ZUY0dWbFpDd2djR0Z5ZEdsamJHVlRjR1ZsWkNrN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWMzUmhjblFvZEhKMVpTd2dOVEF3TENCdWRXeHNMQ0J0WVhoUVlYSjBhV05zWlhNcE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxuVndaR0YwWlNBOUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z0YVhSMFpYSlFhSGx6YVdOelZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQStQU0F3TGpZcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlcxcGRIUmxjaTVrWlhOMGNtOTVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1bWIzSkZZV05vS0hCaGNuUnBZMnhsSUQwK0lIQmhjblJwWTJ4bExuUnBiblFnUFNCamIyeHZjaWs3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1d2JHRjVaWEl1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1aWNtbHVaMVJ2Vkc5d0tIUm9hWE11YjNabGNteGhlU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JvYVhSRmJtVnRlU2hpZFd4c1pYUXNJR1Z1WlcxNUtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwU0dsMFUyOTFibVF1Y0d4aGVTaGNJbHdpTERBc01DNDFLVHRjYmlBZ0lDQWdJQ0FnWlc1bGJYa3VaR0Z0WVdkbEtHSjFiR3hsZEM1b1pXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhwZEVWbVptVmpkQ2hsYm1WdGVTd2dZblZzYkdWMExuUnBiblFwTzF4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1Ulhod2JHOXphVzl1VTI5MWJtUXVjR3hoZVNoY0lsd2lMREFzTUM0MUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhSFZrTG5Wd1pHRjBaVk5qYjNKbEtHVnVaVzE1TG0xaGVFaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZblZzYkdWMExtdHBiR3dvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JvYVhSUWJHRjVaWElvY0d4aGVXVnlMQ0JpZFd4c1pYUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSSWFYUlRiM1Z1WkM1d2JHRjVLRndpWENJc01Dd3dMalVwTzF4dUlDQWdJQ0FnSUNCd2JHRjVaWEl1WkdGdFlXZGxLR0oxYkd4bGRDNW9aV0ZzZEdncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oMVpDNTFjR1JoZEdWSVpXRnNkR2dvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvYVhSRlptWmxZM1FvY0d4aGVXVnlMQ0JpZFd4c1pYUXVkR2x1ZENrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doY0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNrVjRjR3h2YzJsdmJsTnZkVzVrTG5Cc1lYa29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWElvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmlkV3hzWlhRdWEybHNiQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR055WVhOb1JXNWxiWGtvY0d4aGVXVnlMQ0JsYm1WdGVTa2dlMXh1SUNBZ0lDQWdJQ0JsYm1WdGVTNWtZVzFoWjJVb1pXNWxiWGt1YUdWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnY0d4aGVXVnlMbVJoYldGblpTaGxibVZ0ZVM1b1pXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhwZEVWbVptVmpkQ2h3YkdGNVpYSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaHBkRVZtWm1WamRDaGxibVZ0ZVNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doWlc1bGJYa3VZV3hwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsRmVIQnNiM05wYjI1VGIzVnVaQzV3YkdGNUtGd2lYQ0lzTUN3d0xqVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVvZFdRdWRYQmtZWFJsVTJOdmNtVW9aVzVsYlhrdWJXRjRTR1ZoYkhSb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxtaDFaQzUxY0dSaGRHVklaV0ZzZEdnb0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0NGd2JHRjVaWEl1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlSWGh3Ykc5emFXOXVVMjkxYm1RdWNHeGhlU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2lncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyRnRaVTkyWlhJb0tYdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMblJwYldVdWMyeHZkMDF2ZEdsdmJpQTlJRE03WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVTNTJhWE5wWW14bElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1KeWFXNW5WRzlVYjNBb2RHaHBjeTV2ZG1WeWJHRjVLVHRjYmlBZ0lDQWdJQ0FnYkdWMElIUnBiV1Z5SUQwZ2RHaHBjeTVuWVcxbExuUnBiV1V1WTNKbFlYUmxLSFJvYVhNdVoyRnRaU3dnZEhKMVpTazdYRzRnSUNBZ0lDQWdJSFJwYldWeUxtRmtaQ2d6TURBd0xDQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtMTFjMmxqTG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpUYjNWdVpDNXdiR0Y1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1YzNSaGRHVXVjM1JoY25Rb0owOTJaWEluS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFJwYldWeUxuTjBZWEowS0NrN1hHNGdJQ0FnZlZ4dVhHNTlYRzRpWFgwPSJ9
