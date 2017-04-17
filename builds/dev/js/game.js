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
'use strict';

var _states = require('./states');

var states = _interopRequireWildcard(_states);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var GAME = new Phaser.Game(800, 1000, Phaser.AUTO);

Object.keys(states).forEach(function (state) {
  return GAME.state.add(state, states[state]);
});

GAME.state.start('Boot');

},{"./states":9}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./bullet":3}],5:[function(require,module,exports){
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

        //scale
        // 2.5 L, 2 M, 0.8 S
        _this.size = size;
        if (size === undefined) {
            size = 2.5;
        }
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

},{"./bullet":3}],6:[function(require,module,exports){
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

},{"../prefabs/player":7}],7:[function(require,module,exports){
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
                    health: 3,
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
                bullet.reset(this.x, this.top, 3);
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

},{"./bullet":3}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./boot":8,"./menu":10,"./over":11,"./pangOver":12,"./play":13,"./playPang":14,"./preload":15}],10:[function(require,module,exports){
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

            // this.music = this.game.add.audio('menuMusic');

            this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Shoot\'Em Up', {
                font: '36px Tahoma',
                fill: 'white',
                align: 'center'
            });
            this.title.anchor.setTo(0.5);

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

            this.game2 = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX + 200,
                y: this.game.world.centerY,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Game 2',
                style: {
                    font: '16px Verdana',
                    fill: 'white',
                    align: 'center'
                }
            });

            this.btnOverSound = this.add.sound('menuOver');
            this.btnOutSound = this.add.sound('menuOut');
            this.btnDownSound = this.add.sound('menuDown');

            this.game2.setOverSound(this.btnOverSound);
            this.game2.setOutSound(this.btnOutSound);
            this.game2.setDownSound(this.btnDownSound);

            this.game2.onInputUp.add(function () {
                //this.music.stop();
                _this2.state.start('PlayPang');
            });

            this.menuPanel = this.add.group();
            this.menuPanel.add(this.title);
            this.menuPanel.add(this.start);
            this.menuPanel.add(this.game2);

            //this.music.loopFull();
        }
    }]);

    return Menu;
}(Phaser.State);

exports.default = Menu;

},{"../extensions/textbutton":1}],11:[function(require,module,exports){
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

},{"../extensions/textbutton":1}],12:[function(require,module,exports){
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

},{"../extensions/textbutton":1}],13:[function(require,module,exports){
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

},{"../prefabs/enemy":4,"../prefabs/hud":6,"../prefabs/player":7}],14:[function(require,module,exports){
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

            // ------- ENEMY: this ones are created every update tick
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
            this.enemyClientInterval = 2.5;
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
                asset: 'aliens'
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

            this.game.physics.arcade.overlap(this.player, this.enemies, this.crashEnemy, null, this);

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
                if (totalEnemies < 3) {
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
                if (totalEnemies < 10) {
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
            //enemy.x = enemy.x+20;
            this.hitEffect(enemy, bullet.tint);
            if (!enemy.alive) {
                this.enemyExplosionSound.play("", 0, 0.5);
                this.hud.updateScore(enemy.maxHealth);
                console.log(enemy);
                console.log('CREA UNO!');

                switch (enemy.size) {
                    //Large -> Medium
                    case 2.5:
                        this.createSmallerEnemy({
                            game: this.game,
                            x: enemy.x,
                            //0
                            y: enemy.y,
                            speed: {
                                x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                                y: this.game.rnd.integerInRange(5, 10) * 10
                            },
                            //9
                            health: 9,
                            bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                            asset: 'alien',
                            size: 1.5
                        });
                        this.createSmallerEnemy({
                            game: this.game,
                            x: enemy.x,
                            //0
                            y: enemy.y,
                            speed: {
                                x: this.game.rnd.integerInRange(-45, 45) * 10 * (Math.random() > 0.5 ? 1 : -1),
                                y: this.game.rnd.integerInRange(-20, -50) * 10
                            },
                            //9
                            health: 9,
                            bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                            asset: 'alien',
                            size: 1.5
                        });
                        break;
                    //Medium -> Small
                    // case 1.5:
                    //     this.createSmallerEnemy({
                    //         game: this.game,
                    //         x: enemy.x,
                    //         //0
                    //         y: enemy.y,
                    //         speed: {
                    //             x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                    //             y: this.game.rnd.integerInRange(5, 10) * 10
                    //         },
                    //         //9
                    //         health: 9,
                    //         bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                    //         asset: 'alien',
                    //         size: 0.5
                    //     });
                    //     break;

                }
            }
            bullet.kill();
        }

        // hitPlayer(player, bullet) {
        //     this.bulletHitSound.play("",0,0.5);
        //     player.damage(bullet.health);
        //     this.hud.updateHealth();
        //     this.hitEffect(player, bullet.tint);
        //     if (!player.alive) {
        //         this.playerExplosionSound.play();
        //         this.gameOver();
        //     }
        //     bullet.kill();
        // }

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
    }]);

    return PlayPang;
}(Phaser.State);

exports.default = PlayPang;

},{"../prefabs/enemyPang":5,"../prefabs/hud":6,"../prefabs/player":7}],15:[function(require,module,exports){
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
            this.load.image('pangBg', 'img/pangBg.png');
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

},{}]},{},[2])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZXh0ZW5zaW9ucy90ZXh0YnV0dG9uLmpzIiwic3JjL2pzL2dhbWUuanMiLCJzcmMvanMvcHJlZmFicy9idWxsZXQuanMiLCJzcmMvanMvcHJlZmFicy9lbmVteS5qcyIsInNyYy9qcy9wcmVmYWJzL2VuZW15UGFuZy5qcyIsInNyYy9qcy9wcmVmYWJzL2h1ZC5qcyIsInNyYy9qcy9wcmVmYWJzL3BsYXllci5qcyIsInNyYy9qcy9zdGF0ZXMvYm9vdC5qcyIsInNyYy9qcy9zdGF0ZXMvaW5kZXguanMiLCJzcmMvanMvc3RhdGVzL21lbnUuanMiLCJzcmMvanMvc3RhdGVzL292ZXIuanMiLCJzcmMvanMvc3RhdGVzL3BhbmdPdmVyLmpzIiwic3JjL2pzL3N0YXRlcy9wbGF5LmpzIiwic3JjL2pzL3N0YXRlcy9wbGF5UGFuZy5qcyIsInNyYy9qcy9zdGF0ZXMvcHJlbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQ0FxQixVOzs7QUFFakIsOEJBQXFIO0FBQUEsWUFBdkcsSUFBdUcsUUFBdkcsSUFBdUc7QUFBQSxZQUFqRyxDQUFpRyxRQUFqRyxDQUFpRztBQUFBLFlBQTlGLENBQThGLFFBQTlGLENBQThGO0FBQUEsWUFBM0YsS0FBMkYsUUFBM0YsS0FBMkY7QUFBQSxZQUFwRixRQUFvRixRQUFwRixRQUFvRjtBQUFBLFlBQTFFLGVBQTBFLFFBQTFFLGVBQTBFO0FBQUEsWUFBekQsU0FBeUQsUUFBekQsU0FBeUQ7QUFBQSxZQUE5QyxRQUE4QyxRQUE5QyxRQUE4QztBQUFBLFlBQXBDLFNBQW9DLFFBQXBDLFNBQW9DO0FBQUEsWUFBekIsT0FBeUIsUUFBekIsT0FBeUI7QUFBQSxZQUFoQixLQUFnQixRQUFoQixLQUFnQjtBQUFBLFlBQVQsS0FBUyxRQUFULEtBQVM7O0FBQUE7O0FBQUEsNEhBQzNHLElBRDJHLEVBQ3JHLENBRHFHLEVBQ2xHLENBRGtHLEVBQy9GLEtBRCtGLEVBQ3hGLFFBRHdGLEVBQzlFLGVBRDhFLEVBQzdELFNBRDZELEVBQ2xELFFBRGtELEVBQ3hDLFNBRHdDLEVBQzdCLE9BRDZCOztBQUdqSCxjQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLEdBQWxCOztBQUVBLGNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBSSxPQUFPLElBQVgsQ0FBZ0IsTUFBSyxJQUFyQixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxNQUFLLEtBQXRDLEVBQTZDLE1BQUssS0FBbEQsQ0FBWjtBQUNBLGNBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsS0FBakIsQ0FBdUIsR0FBdkI7O0FBRUEsY0FBSyxRQUFMLENBQWMsTUFBSyxJQUFuQjs7QUFWaUg7QUFZcEg7OztFQWRtQyxPQUFPLE07O2tCQUExQixVOzs7OztBQ0FyQjs7SUFBWSxNOzs7O0FBQ1osSUFBTSxPQUFPLElBQUksT0FBTyxJQUFYLENBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCLE9BQU8sSUFBbEMsQ0FBYjs7QUFFQSxPQUFPLElBQVAsQ0FBWSxNQUFaLEVBQW9CLE9BQXBCLENBQTRCO0FBQUEsU0FBUyxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsS0FBZixFQUFzQixPQUFPLEtBQVAsQ0FBdEIsQ0FBVDtBQUFBLENBQTVCOztBQUVBLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakI7Ozs7Ozs7Ozs7Ozs7OztJQ0xxQixNOzs7QUFFakIsMEJBQTREO0FBQUEsWUFBOUMsSUFBOEMsUUFBOUMsSUFBOEM7QUFBQSxZQUF4QyxDQUF3QyxRQUF4QyxDQUF3QztBQUFBLFlBQXJDLENBQXFDLFFBQXJDLENBQXFDO0FBQUEsWUFBbEMsS0FBa0MsUUFBbEMsS0FBa0M7QUFBQSxZQUEzQixNQUEyQixRQUEzQixNQUEyQjtBQUFBLDZCQUFuQixJQUFtQjtBQUFBLFlBQW5CLElBQW1CLDZCQUFaLFFBQVk7O0FBQUE7O0FBQUEsb0hBQ2xELElBRGtELEVBQzVDLENBRDRDLEVBQ3pDLENBRHlDLEVBQ3RDLEtBRHNDOztBQUd4RCxjQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLEdBQWxCO0FBQ0EsY0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxjQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsY0FBSyxnQkFBTCxHQUF3QixJQUF4QjtBQUNBLGNBQUssZUFBTCxHQUF1QixJQUF2QjtBQVJ3RDtBQVMzRDs7O0VBWCtCLE9BQU8sTTs7a0JBQXRCLE07Ozs7Ozs7Ozs7Ozs7QUNBckI7Ozs7Ozs7Ozs7OztJQUVxQixLOzs7QUFFakIseUJBQStEO0FBQUEsWUFBakQsSUFBaUQsUUFBakQsSUFBaUQ7QUFBQSxZQUEzQyxDQUEyQyxRQUEzQyxDQUEyQztBQUFBLFlBQXhDLENBQXdDLFFBQXhDLENBQXdDO0FBQUEsWUFBckMsS0FBcUMsUUFBckMsS0FBcUM7QUFBQSxZQUE5QixLQUE4QixRQUE5QixLQUE4QjtBQUFBLFlBQXZCLE1BQXVCLFFBQXZCLE1BQXVCO0FBQUEsWUFBZixXQUFlLFFBQWYsV0FBZTs7QUFBQTs7QUFBQSxrSEFDckQsSUFEcUQsRUFDL0MsQ0FEK0MsRUFDNUMsQ0FENEMsRUFDekMsS0FEeUMsRUFDbEMsS0FEa0M7O0FBRzNELGNBQUssSUFBTCxHQUFZLElBQVo7O0FBRUEsY0FBSyxNQUFMLENBQVksS0FBWixDQUFrQixHQUFsQjtBQUNBLGNBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakI7QUFDQSxjQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsY0FBSyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsY0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixNQUFsQixDQUF5QixNQUF6Qjs7QUFFQSxjQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBb0IsVUFBcEIsRUFBZ0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixFQUEvQixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQyxFQUErQyxFQUEvQyxDQUFoQyxFQUFvRixFQUFwRixFQUF3RixJQUF4RjtBQUNBLGNBQUssSUFBTCxDQUFVLFVBQVY7O0FBRUEsY0FBSyxPQUFMLEdBQWUsTUFBSyxJQUFMLENBQVUsR0FBVixDQUFjLEtBQWQsRUFBZjtBQUNBLGNBQUssT0FBTCxDQUFhLFVBQWIsR0FBMEIsSUFBMUI7QUFDQSxjQUFLLFdBQUwsR0FBbUIsV0FBbkI7O0FBRUEsY0FBSyxTQUFMLEdBQWlCLE1BQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLENBQWpCOztBQWxCMkQ7QUFvQjlEOzs7O2lDQUVROztBQUVMLGdCQUFJLEtBQUssUUFBTCxDQUFjLENBQWQsR0FBa0IsT0FBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQTdDLEVBQW9EO0FBQ2hELHFCQUFLLFFBQUwsQ0FBYyxDQUFkLEdBQWtCLE9BQU8sS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUF2QixHQUErQixDQUFqRDtBQUNBLHFCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLENBQW5CLElBQXdCLENBQUMsQ0FBekI7QUFDSCxhQUhELE1BSUssSUFBSSxLQUFLLFFBQUwsQ0FBYyxDQUFkLEdBQWtCLE9BQU8sS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUE3QyxFQUFvRDtBQUNyRCxxQkFBSyxRQUFMLENBQWMsQ0FBZCxHQUFrQixPQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBdkIsR0FBK0IsQ0FBakQ7QUFDQSxxQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixDQUFuQixJQUF3QixDQUFDLENBQXpCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBSyxRQUFMLENBQWMsQ0FBZCxHQUFrQixLQUFLLE1BQUwsR0FBYyxDQUFoQyxHQUFvQyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE1BQXhELEVBQWdFO0FBQzVELHFCQUFLLElBQUw7QUFDSDtBQUNKOzs7Z0NBRU87O0FBRUosaUJBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsRUFBcEIsRUFBdUIsQ0FBdkIsRUFBeUIsR0FBekI7O0FBRUEsZ0JBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxjQUFiLENBQTRCLEtBQTVCLENBQWI7O0FBRUEsZ0JBQUksQ0FBQyxNQUFMLEVBQWE7QUFDVCx5QkFBUyxxQkFBVztBQUNoQiwwQkFBTSxLQUFLLElBREs7QUFFaEIsdUJBQUcsS0FBSyxDQUZRO0FBR2hCLHVCQUFHLEtBQUssTUFIUTtBQUloQiw0QkFBUSxDQUpRO0FBS2hCLDJCQUFPLFFBTFM7QUFNaEIsMEJBQU07QUFOVSxpQkFBWCxDQUFUO0FBUUEscUJBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsTUFBakI7QUFDSCxhQVZELE1BV0s7QUFDRCx1QkFBTyxLQUFQLENBQWEsS0FBSyxDQUFsQixFQUFxQixLQUFLLE1BQTFCLEVBQWtDLENBQWxDO0FBQ0g7O0FBRUQsbUJBQU8sSUFBUCxDQUFZLFFBQVosQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxXQUE5QjtBQUNIOzs7K0JBRU0sTSxFQUFRO0FBQ1gsaUhBQWEsTUFBYjtBQUNIOzs7cUNBRTJDO0FBQUEsZ0JBQXBDLENBQW9DLFNBQXBDLENBQW9DO0FBQUEsZ0JBQWpDLENBQWlDLFNBQWpDLENBQWlDO0FBQUEsZ0JBQTlCLE1BQThCLFNBQTlCLE1BQThCO0FBQUEsZ0JBQXRCLFdBQXNCLFNBQXRCLFdBQXNCO0FBQUEsZ0JBQVQsS0FBUyxTQUFULEtBQVM7O0FBQ3hDLGdIQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLE1BQWxCO0FBQ0EsaUJBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLENBQW5CLEdBQXVCLE1BQU0sQ0FBN0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixDQUFuQixHQUF1QixNQUFNLENBQTdCO0FBQ0g7Ozs7RUF6RThCLE9BQU8sTTs7a0JBQXJCLEs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7OztJQUVxQixLOzs7QUFFakIseUJBQW9FO0FBQUEsWUFBdEQsSUFBc0QsUUFBdEQsSUFBc0Q7QUFBQSxZQUFoRCxDQUFnRCxRQUFoRCxDQUFnRDtBQUFBLFlBQTdDLENBQTZDLFFBQTdDLENBQTZDO0FBQUEsWUFBMUMsS0FBMEMsUUFBMUMsS0FBMEM7QUFBQSxZQUFuQyxLQUFtQyxRQUFuQyxLQUFtQztBQUFBLFlBQTVCLE1BQTRCLFFBQTVCLE1BQTRCO0FBQUEsWUFBcEIsV0FBb0IsUUFBcEIsV0FBb0I7QUFBQSxZQUFSLElBQVEsUUFBUixJQUFROztBQUFBOztBQUFBLGtIQUMxRCxJQUQwRCxFQUNwRCxDQURvRCxFQUNqRCxDQURpRCxFQUM5QyxLQUQ4QyxFQUN2QyxLQUR1Qzs7QUFHaEUsY0FBSyxJQUFMLEdBQVksSUFBWjs7QUFFQSxjQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLEdBQWxCOztBQUVBO0FBQ0k7QUFDSixjQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsWUFBSSxTQUFTLFNBQWIsRUFBd0I7QUFDcEIsbUJBQU8sR0FBUDtBQUNIO0FBQ0QsY0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixJQUFqQjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxjQUFLLFNBQUwsR0FBaUIsTUFBakI7O0FBR0E7QUFDQSxjQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLENBQXlCLE1BQXpCO0FBQ0EsY0FBSyxJQUFMLENBQVUsa0JBQVYsR0FBK0IsSUFBL0I7QUFDQSxjQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLENBQWxCLEdBQXNCLEdBQXRCO0FBQ0EsY0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixHQUFqQixDQUFxQixDQUFyQjs7QUFFQSxjQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBb0IsVUFBcEIsRUFBZ0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixFQUEvQixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQyxFQUErQyxFQUEvQyxDQUFoQyxFQUFvRixFQUFwRixFQUF3RixJQUF4RjtBQUNBLGNBQUssSUFBTCxDQUFVLFVBQVY7O0FBRUEsY0FBSyxPQUFMLEdBQWUsTUFBSyxJQUFMLENBQVUsR0FBVixDQUFjLEtBQWQsRUFBZjtBQUNBLGNBQUssT0FBTCxDQUFhLFVBQWIsR0FBMEIsSUFBMUI7QUFDQSxjQUFLLFdBQUwsR0FBbUIsV0FBbkI7O0FBRUEsY0FBSyxTQUFMLEdBQWlCLE1BQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLENBQWpCOztBQS9CZ0U7QUFpQ25FOzs7O2lDQUVROztBQUVMLGdCQUFJLEtBQUssUUFBTCxDQUFjLENBQWQsR0FBa0IsT0FBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQTdDLEVBQW9EO0FBQ2hELHFCQUFLLFFBQUwsQ0FBYyxDQUFkLEdBQWtCLE9BQU8sS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUF2QixHQUErQixDQUFqRDtBQUNBLHFCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLENBQW5CLElBQXdCLENBQUMsQ0FBekI7QUFDSCxhQUhELE1BSUssSUFBSSxLQUFLLFFBQUwsQ0FBYyxDQUFkLEdBQWtCLE9BQU8sS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUE3QyxFQUFvRDtBQUNyRCxxQkFBSyxRQUFMLENBQWMsQ0FBZCxHQUFrQixPQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBdkIsR0FBK0IsQ0FBakQ7QUFDQSxxQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixDQUFuQixJQUF3QixDQUFDLENBQXpCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBSyxRQUFMLENBQWMsQ0FBZCxHQUFrQixLQUFLLE1BQUwsR0FBYyxDQUFoQyxHQUFvQyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE1BQXhELEVBQWdFO0FBQzVELHFCQUFLLElBQUw7QUFDSDtBQUNKOzs7K0JBSU0sTSxFQUFRO0FBQ1gsaUhBQWEsTUFBYjtBQUNIOzs7cUNBRTJDO0FBQUEsZ0JBQXBDLENBQW9DLFNBQXBDLENBQW9DO0FBQUEsZ0JBQWpDLENBQWlDLFNBQWpDLENBQWlDO0FBQUEsZ0JBQTlCLE1BQThCLFNBQTlCLE1BQThCO0FBQUEsZ0JBQXRCLFdBQXNCLFNBQXRCLFdBQXNCO0FBQUEsZ0JBQVQsS0FBUyxTQUFULEtBQVM7O0FBQ3hDLGdIQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLE1BQWxCO0FBQ0EsaUJBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLENBQW5CLEdBQXVCLE1BQU0sQ0FBN0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixDQUFuQixHQUF1QixNQUFNLENBQTdCO0FBQ0g7Ozs7RUFoRThCLE9BQU8sTTs7a0JBQXJCLEs7Ozs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFDcUIsRzs7O0FBQ2pCLHVCQUE4QjtBQUFBLFlBQWhCLElBQWdCLFFBQWhCLElBQWdCO0FBQUEsWUFBVixNQUFVLFFBQVYsTUFBVTs7QUFBQTs7QUFBQSw4R0FDcEIsSUFEb0I7O0FBRTFCLGNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxjQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsY0FBSyxFQUFMLEdBQVUsSUFBSSxPQUFPLEtBQVgsQ0FBaUIsTUFBSyxJQUF0QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxPQUFsQyxDQUFWO0FBQ0EsY0FBSyxLQUFMLEdBQWEsR0FBYjtBQUNBLGNBQUssU0FBTCxHQUFpQixJQUFJLE9BQU8sTUFBWCxDQUFrQixNQUFLLElBQXZCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DLFdBQW5DLENBQWpCO0FBQ0EsY0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixLQUFyQixDQUEyQixLQUEzQixFQUFrQyxFQUFsQzs7QUFFQSxjQUFLLEtBQUwsR0FBYSxDQUFiO0FBQ0EsY0FBSyxVQUFMLEdBQWtCLFNBQWxCO0FBQ0EsY0FBSyxTQUFMLEdBQWlCLElBQUksT0FBTyxJQUFYLENBQWdCLE1BQUssSUFBckIsRUFBMkIsRUFBM0IsRUFBK0IsRUFBL0IsRUFBbUMsTUFBSyxVQUFMLEdBQWtCLE1BQUssS0FBMUQsRUFBaUU7QUFDOUUsa0JBQU0sY0FEd0U7QUFFOUUsa0JBQU0sT0FGd0U7QUFHOUUsbUJBQU87O0FBSHVFLFNBQWpFLENBQWpCOztBQU9BLGNBQUssR0FBTCxDQUFTLE1BQUssRUFBZDtBQUNBLGNBQUssR0FBTCxDQUFTLE1BQUssU0FBZDtBQUNBLGNBQUssR0FBTCxDQUFTLE1BQUssU0FBZDtBQXBCMEI7QUFxQjdCOzs7O3FDQUVZLE0sRUFBUTtBQUNqQixpQkFBSyxTQUFMLENBQWUsSUFBZixDQUFvQixJQUFJLE9BQU8sU0FBWCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUE0QixLQUFLLE1BQUwsQ0FBWSxNQUFaLEdBQXFCLEtBQUssTUFBTCxDQUFZLFNBQWxDLEdBQStDLEtBQUssS0FBL0UsRUFBc0YsRUFBdEYsQ0FBcEI7QUFDQSxpQkFBSyxTQUFMLENBQWUsVUFBZjtBQUNIOzs7b0NBRVcsTSxFQUFRO0FBQ2hCLGlCQUFLLEtBQUwsSUFBYyxNQUFkO0FBQ0EsaUJBQUssU0FBTCxDQUFlLElBQWYsR0FBc0IsS0FBSyxVQUFMLEdBQW1CLEtBQUssS0FBTCxHQUFhLEVBQXREO0FBQ0g7Ozs7RUFoQzRCLE9BQU8sSzs7a0JBQW5CLEc7QUFrQ3BCOzs7Ozs7Ozs7Ozs7O0FDbkNEOzs7Ozs7Ozs7Ozs7SUFFcUIsTTs7O0FBRWpCLDBCQUFrRDtBQUFBLFlBQXBDLElBQW9DLFFBQXBDLElBQW9DO0FBQUEsWUFBOUIsQ0FBOEIsUUFBOUIsQ0FBOEI7QUFBQSxZQUEzQixDQUEyQixRQUEzQixDQUEyQjtBQUFBLFlBQXhCLEtBQXdCLFFBQXhCLEtBQXdCO0FBQUEsWUFBakIsS0FBaUIsUUFBakIsS0FBaUI7QUFBQSxZQUFWLE1BQVUsUUFBVixNQUFVOztBQUFBOztBQUFBLG9IQUN4QyxJQUR3QyxFQUNsQyxDQURrQyxFQUMvQixDQUQrQixFQUM1QixLQUQ0QixFQUNyQixLQURxQjs7QUFHOUMsY0FBSyxJQUFMLEdBQVksSUFBWjs7QUFFQSxjQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLEdBQWxCO0FBQ0EsY0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQjs7QUFFQSxjQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsY0FBSyxTQUFMLEdBQWlCLE1BQWpCOztBQUlBLGNBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsTUFBbEIsQ0FBeUIsTUFBekI7QUFDQTtBQUNBLGNBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsQ0FBbEIsR0FBc0IsR0FBdEI7QUFDQSxjQUFLLElBQUwsQ0FBVSxrQkFBVixHQUErQixJQUEvQjtBQUNBOztBQUVBLGNBQUssT0FBTCxHQUFlLE1BQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLEVBQWY7QUFDQSxjQUFLLE9BQUwsQ0FBYSxVQUFiLEdBQTBCLElBQTFCO0FBQ0EsY0FBSyxXQUFMLEdBQW1CLENBQUMsR0FBcEI7O0FBRUEsY0FBSyxTQUFMLEdBQWlCLE1BQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLFlBQXBCLENBQWpCO0FBdkI4QztBQXdCakQ7Ozs7aUNBRVE7O0FBRUw7OztBQUlBOztBQUVJLGdCQUFJLFVBQVUsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixRQUFoQixDQUF5QixNQUF6QixDQUFnQyxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEQsQ0FBZDtBQUNBLGdCQUFJLFdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixRQUFoQixDQUF5QixNQUF6QixDQUFnQyxPQUFPLFFBQVAsQ0FBZ0IsS0FBaEQsQ0FBZjtBQUNBLGdCQUFHLE9BQUgsRUFBVztBQUNQLHFCQUFLLENBQUwsSUFBVSxDQUFWO0FBRUgsYUFIRCxNQUlLLElBQUcsUUFBSCxFQUFZO0FBQ2IscUJBQUssQ0FBTCxJQUFVLENBQVY7QUFFSDtBQUVSOzs7Z0NBRU87O0FBRUosZ0JBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxjQUFiLENBQTRCLEtBQTVCLENBQWI7O0FBRUEsZ0JBQUksQ0FBQyxNQUFMLEVBQWE7QUFDVCx5QkFBUyxxQkFBVztBQUNoQiwwQkFBTSxLQUFLLElBREs7QUFFaEIsdUJBQUcsS0FBSyxDQUZRO0FBR2hCLHVCQUFHLEtBQUssR0FIUTtBQUloQiw0QkFBUSxDQUpRO0FBS2hCLDJCQUFPLFFBTFM7QUFNaEIsMEJBQU07QUFOVSxpQkFBWCxDQUFUO0FBUUE7QUFDQSxvQkFBRyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLE1BQXRCLElBQWdDLENBQW5DLEVBQXFDO0FBQ2pDLHlCQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLEVBQXBCLEVBQXVCLENBQXZCLEVBQXlCLEdBQXpCO0FBQ0EseUJBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsTUFBakI7QUFDQSwyQkFBTyxJQUFQLENBQVksUUFBWixDQUFxQixDQUFyQixHQUF5QixLQUFLLFdBQTlCO0FBQ0g7QUFDSixhQWZELE1BZ0JLO0FBQ0QscUJBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsRUFBcEIsRUFBdUIsQ0FBdkIsRUFBeUIsR0FBekI7QUFDQSx1QkFBTyxLQUFQLENBQWEsS0FBSyxDQUFsQixFQUFxQixLQUFLLEdBQTFCLEVBQStCLENBQS9CO0FBQ0EsdUJBQU8sSUFBUCxDQUFZLFFBQVosQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxXQUE5QjtBQUNIO0FBR0o7OzsrQkFFTSxNLEVBQVE7QUFDWCxtSEFBYSxNQUFiO0FBQ0g7Ozs7RUFoRitCLE9BQU8sTTs7a0JBQXRCLE07Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRkEsSTs7Ozs7Ozs7Ozs7a0NBRVA7QUFDTixpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixlQUFoQixHQUFrQyxNQUFsQztBQUNBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFVBQWhCLEVBQTRCLG1CQUE1QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLEVBQTZCLG9CQUE3QjtBQUNIOzs7aUNBRVE7QUFDTCxpQkFBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixPQUFPLFlBQVAsQ0FBb0IsUUFBM0M7O0FBRUEsaUJBQUssS0FBTCxDQUFXLHFCQUFYLEdBQW1DLElBQW5DO0FBQ0EsaUJBQUssS0FBTCxDQUFXLG1CQUFYLEdBQWlDLElBQWpDOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLFdBQWxCLENBQThCLE9BQU8sT0FBUCxDQUFlLE1BQTdDO0FBQ0EsaUJBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsU0FBakI7QUFDSDs7OztFQWhCNkIsT0FBTyxLOztrQkFBcEIsSTs7Ozs7Ozs7Ozs7Ozs7eUNDQWIsTzs7Ozs7Ozs7OzRDQUNBLE87Ozs7Ozs7Ozt5Q0FDQSxPOzs7Ozs7Ozs7eUNBRUEsTzs7Ozs7Ozs7O3lDQUNBLE87Ozs7Ozs7Ozs2Q0FHQSxPOzs7Ozs7Ozs7NkNBQ0EsTzs7Ozs7Ozs7Ozs7Ozs7O0FDVFI7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7Ozs7Ozs7OztpQ0FFUjtBQUFBOztBQUVOOztBQUVDLGlCQUFLLEtBQUwsR0FBYSxJQUFJLE9BQU8sSUFBWCxDQUFnQixLQUFLLElBQXJCLEVBQTJCLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBM0MsRUFBb0QsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUFoQixHQUF3QixHQUE1RSxFQUFpRixjQUFqRixFQUFpRztBQUMxRyxzQkFBTSxhQURvRztBQUUxRyxzQkFBTSxPQUZvRztBQUcxRyx1QkFBTztBQUhtRyxhQUFqRyxDQUFiO0FBS0EsaUJBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBbEIsQ0FBd0IsR0FBeEI7O0FBRUEsaUJBQUssS0FBTCxHQUFhLHlCQUFlO0FBQ3hCLHNCQUFNLEtBQUssSUFEYTtBQUV4QixtQkFBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BRks7QUFHeEIsbUJBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUhLO0FBSXhCLHVCQUFPLFFBSmlCO0FBS3hCLDJCQUFXLENBTGE7QUFNeEIsMEJBQVUsQ0FOYztBQU94QiwyQkFBVyxDQVBhO0FBUXhCLHlCQUFTLENBUmU7QUFTeEIsdUJBQU8sT0FUaUI7QUFVeEIsdUJBQU87QUFDSCwwQkFBTSxjQURIO0FBRUgsMEJBQU0sT0FGSDtBQUdILDJCQUFPO0FBSEo7QUFWaUIsYUFBZixDQUFiOztBQWlCQSxpQkFBSyxZQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxVQUFmLENBQXBCO0FBQ0EsaUJBQUssV0FBTCxHQUFtQixLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsU0FBZixDQUFuQjtBQUNBLGlCQUFLLFlBQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLFVBQWYsQ0FBcEI7O0FBRUEsaUJBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsS0FBSyxZQUE3QjtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEtBQUssV0FBNUI7QUFDQSxpQkFBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixLQUFLLFlBQTdCOztBQUVBLGlCQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFlBQUk7QUFDekI7QUFDQSx1QkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFqQjtBQUVILGFBSkQ7O0FBTUEsaUJBQUssS0FBTCxHQUFhLHlCQUFlO0FBQ3hCLHNCQUFNLEtBQUssSUFEYTtBQUV4QixtQkFBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLEdBRkw7QUFHeEIsbUJBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUhLO0FBSXhCLHVCQUFPLFFBSmlCO0FBS3hCLDJCQUFXLENBTGE7QUFNeEIsMEJBQVUsQ0FOYztBQU94QiwyQkFBVyxDQVBhO0FBUXhCLHlCQUFTLENBUmU7QUFTeEIsdUJBQU8sUUFUaUI7QUFVeEIsdUJBQU87QUFDSCwwQkFBTSxjQURIO0FBRUgsMEJBQU0sT0FGSDtBQUdILDJCQUFPO0FBSEo7QUFWaUIsYUFBZixDQUFiOztBQWlCQSxpQkFBSyxZQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxVQUFmLENBQXBCO0FBQ0EsaUJBQUssV0FBTCxHQUFtQixLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsU0FBZixDQUFuQjtBQUNBLGlCQUFLLFlBQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLFVBQWYsQ0FBcEI7O0FBRUEsaUJBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsS0FBSyxZQUE3QjtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEtBQUssV0FBNUI7QUFDQSxpQkFBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixLQUFLLFlBQTdCOztBQUVBLGlCQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFlBQUk7QUFDekI7QUFDQSx1QkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixVQUFqQjtBQUdILGFBTEQ7O0FBU0EsaUJBQUssU0FBTCxHQUFpQixLQUFLLEdBQUwsQ0FBUyxLQUFULEVBQWpCO0FBQ0EsaUJBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUIsS0FBSyxLQUF4QjtBQUNBLGlCQUFLLFNBQUwsQ0FBZSxHQUFmLENBQW1CLEtBQUssS0FBeEI7QUFDQSxpQkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixLQUFLLEtBQXhCOztBQUVBO0FBQ0g7Ozs7RUFwRjZCLE9BQU8sSzs7a0JBQXBCLEk7Ozs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFFcUIsSTs7Ozs7Ozs7Ozs7aUNBRVI7QUFBQTs7QUFFTCxpQkFBSyxhQUFMLEdBQXFCLElBQUksT0FBTyxJQUFYLENBQWdCLEtBQUssSUFBckIsRUFBMkIsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUEzQyxFQUFvRCxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQWhCLEdBQXdCLEdBQTVFLEVBQWlGLFdBQWpGLEVBQThGO0FBQy9HLHNCQUFNLGFBRHlHO0FBRS9HLHNCQUFNLE9BRnlHO0FBRy9HLHVCQUFPO0FBSHdHLGFBQTlGLENBQXJCO0FBS0EsaUJBQUssYUFBTCxDQUFtQixNQUFuQixDQUEwQixLQUExQixDQUFnQyxHQUFoQzs7QUFFQSxpQkFBSyxLQUFMLEdBQWEseUJBQWU7QUFDeEIsc0JBQU0sS0FBSyxJQURhO0FBRXhCLG1CQUFHLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FGSztBQUd4QixtQkFBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQWhCLEdBQXdCLEVBSEg7QUFJeEIsdUJBQU8sUUFKaUI7QUFLeEIsMkJBQVcsQ0FMYTtBQU14QiwwQkFBVSxDQU5jO0FBT3hCLDJCQUFXLENBUGE7QUFReEIseUJBQVMsQ0FSZTtBQVN4Qix1QkFBTyxXQVRpQjtBQVV4Qix1QkFBTztBQUNILDBCQUFNLGNBREg7QUFFSCwwQkFBTSxPQUZIO0FBR0gsMkJBQU87QUFISjtBQVZpQixhQUFmLENBQWI7O0FBaUJBLGlCQUFLLElBQUwsR0FBWSx5QkFBZTtBQUN2QixzQkFBTSxLQUFLLElBRFk7QUFFdkIsbUJBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUZJO0FBR3ZCLG1CQUFHLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBd0IsRUFISjtBQUl2Qix1QkFBTyxRQUpnQjtBQUt2QiwyQkFBVyxDQUxZO0FBTXZCLDBCQUFVLENBTmE7QUFPdkIsMkJBQVcsQ0FQWTtBQVF2Qix5QkFBUyxDQVJjO0FBU3ZCLHVCQUFPLE1BVGdCO0FBVXZCLHVCQUFPO0FBQ0gsMEJBQU0sY0FESDtBQUVILDBCQUFNLE9BRkg7QUFHSCwyQkFBTztBQUhKO0FBVmdCLGFBQWYsQ0FBWjs7QUFpQkEsaUJBQUssWUFBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsVUFBZixDQUFwQjtBQUNBLGlCQUFLLFdBQUwsR0FBbUIsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLFNBQWYsQ0FBbkI7QUFDQSxpQkFBSyxZQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxVQUFmLENBQXBCOztBQUVBLGlCQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEtBQUssWUFBN0I7QUFDQSxpQkFBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixLQUFLLFdBQTVCO0FBQ0EsaUJBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsS0FBSyxZQUE3QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLEtBQUssWUFBNUI7QUFDQSxpQkFBSyxJQUFMLENBQVUsV0FBVixDQUFzQixLQUFLLFdBQTNCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBSyxZQUE1Qjs7QUFFQSxpQkFBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixHQUF2QixDQUEyQixZQUFJO0FBQzNCLHVCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCO0FBQ0gsYUFGRDs7QUFJQSxpQkFBSyxJQUFMLENBQVUsV0FBVixDQUFzQixHQUF0QixDQUEwQixZQUFJO0FBQzFCLHVCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCO0FBQ0gsYUFGRDs7QUFJQSxpQkFBSyxhQUFMLEdBQXFCLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBckI7QUFDQSxpQkFBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLEtBQUssYUFBNUI7QUFDQSxpQkFBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLEtBQUssS0FBNUI7QUFDQSxpQkFBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLEtBQUssSUFBNUI7QUFDSDs7OztFQXBFNkIsT0FBTyxLOztrQkFBcEIsSTs7Ozs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7OztJQUVxQixROzs7Ozs7Ozs7OztpQ0FFUjtBQUFBOztBQUVMLGlCQUFLLGFBQUwsR0FBcUIsSUFBSSxPQUFPLElBQVgsQ0FBZ0IsS0FBSyxJQUFyQixFQUEyQixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQTNDLEVBQW9ELEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBd0IsR0FBNUUsRUFBaUYsZ0JBQWpGLEVBQW1HO0FBQ3BILHNCQUFNLGFBRDhHO0FBRXBILHNCQUFNLE9BRjhHO0FBR3BILHVCQUFPO0FBSDZHLGFBQW5HLENBQXJCO0FBS0EsaUJBQUssYUFBTCxDQUFtQixNQUFuQixDQUEwQixLQUExQixDQUFnQyxHQUFoQzs7QUFFQSxpQkFBSyxLQUFMLEdBQWEseUJBQWU7QUFDeEIsc0JBQU0sS0FBSyxJQURhO0FBRXhCLG1CQUFHLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FGSztBQUd4QixtQkFBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQWhCLEdBQXdCLEVBSEg7QUFJeEIsdUJBQU8sUUFKaUI7QUFLeEIsMkJBQVcsQ0FMYTtBQU14QiwwQkFBVSxDQU5jO0FBT3hCLDJCQUFXLENBUGE7QUFReEIseUJBQVMsQ0FSZTtBQVN4Qix1QkFBTyxXQVRpQjtBQVV4Qix1QkFBTztBQUNILDBCQUFNLGNBREg7QUFFSCwwQkFBTSxPQUZIO0FBR0gsMkJBQU87QUFISjtBQVZpQixhQUFmLENBQWI7O0FBaUJBLGlCQUFLLElBQUwsR0FBWSx5QkFBZTtBQUN2QixzQkFBTSxLQUFLLElBRFk7QUFFdkIsbUJBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUZJO0FBR3ZCLG1CQUFHLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBd0IsRUFISjtBQUl2Qix1QkFBTyxRQUpnQjtBQUt2QiwyQkFBVyxDQUxZO0FBTXZCLDBCQUFVLENBTmE7QUFPdkIsMkJBQVcsQ0FQWTtBQVF2Qix5QkFBUyxDQVJjO0FBU3ZCLHVCQUFPLE1BVGdCO0FBVXZCLHVCQUFPO0FBQ0gsMEJBQU0sY0FESDtBQUVILDBCQUFNLE9BRkg7QUFHSCwyQkFBTztBQUhKO0FBVmdCLGFBQWYsQ0FBWjs7QUFpQkEsaUJBQUssWUFBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsVUFBZixDQUFwQjtBQUNBLGlCQUFLLFdBQUwsR0FBbUIsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLFNBQWYsQ0FBbkI7QUFDQSxpQkFBSyxZQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxVQUFmLENBQXBCOztBQUVBLGlCQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEtBQUssWUFBN0I7QUFDQSxpQkFBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixLQUFLLFdBQTVCO0FBQ0EsaUJBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsS0FBSyxZQUE3QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLEtBQUssWUFBNUI7QUFDQSxpQkFBSyxJQUFMLENBQVUsV0FBVixDQUFzQixLQUFLLFdBQTNCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBSyxZQUE1Qjs7QUFFQSxpQkFBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixHQUF2QixDQUEyQixZQUFJO0FBQzNCLHVCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFVBQWpCO0FBQ0gsYUFGRDs7QUFJQSxpQkFBSyxJQUFMLENBQVUsV0FBVixDQUFzQixHQUF0QixDQUEwQixZQUFJO0FBQzFCLHVCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCO0FBQ0gsYUFGRDs7QUFJQSxpQkFBSyxhQUFMLEdBQXFCLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBckI7QUFDQSxpQkFBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLEtBQUssYUFBNUI7QUFDQSxpQkFBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLEtBQUssS0FBNUI7QUFDQSxpQkFBSyxhQUFMLENBQW1CLEdBQW5CLENBQXVCLEtBQUssSUFBNUI7QUFDSDs7OztFQXBFaUMsT0FBTyxLOztrQkFBeEIsUTs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsSTs7Ozs7Ozs7Ozs7aUNBRVI7QUFBQTs7QUFDTDtBQUNBLGlCQUFLLE9BQUwsR0FBZSxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLEdBQTFCLEVBQStCLElBQS9CLEVBQXFDLFNBQXJDLENBQWY7QUFDQSxpQkFBSyxJQUFMLENBQVUsSUFBVixDQUFlLFVBQWYsR0FBNEIsQ0FBNUI7O0FBRUEsaUJBQUssT0FBTCxHQUFlLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBZjtBQUNBLGlCQUFLLE9BQUwsQ0FBYSxVQUFiLEdBQTBCLElBQTFCOztBQUVBLGlCQUFLLE1BQUwsR0FBYyxxQkFBVztBQUNyQixzQkFBTSxLQUFLLElBRFU7QUFFckIsbUJBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUZFO0FBR3JCLG1CQUFHLE9BQU8sS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixNQUhMO0FBSXJCLHdCQUFRLEdBSmE7QUFLckIsdUJBQU8sY0FMYztBQU1yQix1QkFBTztBQU5jLGFBQVgsQ0FBZDtBQVFBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFFBQWhCLENBQXlCLEtBQUssTUFBOUI7O0FBRUEsaUJBQUssR0FBTCxHQUFXLGtCQUFRO0FBQ2Ysc0JBQU0sS0FBSyxJQURJO0FBRWYsd0JBQVEsS0FBSztBQUZFLGFBQVIsQ0FBWDs7QUFLQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixNQUFoQixDQUF1QixHQUF2QixDQUEyQixZQUFNO0FBQzdCLHVCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsVUFBZixHQUE0QixDQUE1QjtBQUNILGFBRkQ7O0FBSUEsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBeUIsWUFBTTtBQUMzQix1QkFBSyxJQUFMLENBQVUsSUFBVixDQUFlLFVBQWYsR0FBNEIsQ0FBNUI7QUFDSCxhQUZEOztBQUlBLGlCQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxpQkFBSyxhQUFMLEdBQXFCLEdBQXJCO0FBQ0EsaUJBQUssY0FBTCxHQUFzQixDQUF0QjtBQUNBLGlCQUFLLGtCQUFMLEdBQTBCLENBQTFCO0FBQ0EsaUJBQUssZUFBTCxHQUF1QixDQUF2QjtBQUNBLGlCQUFLLG1CQUFMLEdBQTJCLElBQTNCOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZixDQUFzQixJQUF0QixDQUEyQixPQUFPLEtBQVAsQ0FBYSxNQUFiLEdBQXNCLEVBQWpELEVBQXFELFlBQU07QUFDdkQsb0JBQUcsT0FBSyxhQUFMLEdBQXFCLEdBQXhCLEVBQTZCO0FBQ3pCLDJCQUFLLGFBQUwsSUFBc0IsR0FBdEI7QUFDSDtBQUNKLGFBSkQ7O0FBTUEsaUJBQUssYUFBTCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLEtBQUssSUFBTCxDQUFVLEtBQTlCLEVBQXFDLEtBQUssSUFBTCxDQUFVLE1BQS9DLENBQXJCO0FBQ0EsaUJBQUssYUFBTCxDQUFtQixHQUFuQixDQUF1QixTQUF2QixHQUFtQyxNQUFuQztBQUNBLGlCQUFLLGFBQUwsQ0FBbUIsR0FBbkIsQ0FBdUIsUUFBdkIsQ0FBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsRUFBc0MsS0FBSyxJQUFMLENBQVUsS0FBaEQsRUFBdUQsS0FBSyxJQUFMLENBQVUsTUFBakU7O0FBRUEsaUJBQUssT0FBTCxHQUFlLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsS0FBSyxhQUEzQixDQUFmO0FBQ0EsaUJBQUssT0FBTCxDQUFhLE9BQWIsR0FBdUIsS0FBdkI7QUFDQSxpQkFBSyxPQUFMLENBQWEsS0FBYixHQUFxQixJQUFyQjs7QUFFRDtBQUNDLGlCQUFLLGNBQUwsR0FBc0IsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLFdBQWYsQ0FBdEI7QUFDQSxpQkFBSyxtQkFBTCxHQUEyQixLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsZ0JBQWYsQ0FBM0I7QUFDQSxpQkFBSyxvQkFBTCxHQUE0QixLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsaUJBQWYsQ0FBNUI7QUFDQSxpQkFBSyxhQUFMLEdBQXFCLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxVQUFmLENBQXJCOztBQUVBO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUVMLGlCQUFLLFNBQUwsSUFBa0IsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLGNBQWpDO0FBQ0EsaUJBQUssY0FBTCxJQUF1QixLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsY0FBdEM7QUFDQSxpQkFBSyxlQUFMLElBQXdCLEtBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxjQUF2Qzs7QUFFQSxnQkFBSSxLQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUExQixFQUF5QztBQUNyQyxxQkFBSyxTQUFMLEdBQWlCLENBQWpCOztBQUVBLHFCQUFLLFdBQUwsQ0FBaUI7QUFDYiwwQkFBTSxLQUFLLElBREU7QUFFYix1QkFBRyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsY0FBZCxDQUE2QixDQUE3QixFQUFnQyxFQUFoQyxJQUFzQyxFQUY1QjtBQUdiLHVCQUFHLENBSFU7QUFJYiwyQkFBTztBQUNILDJCQUFHLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxjQUFkLENBQTZCLENBQTdCLEVBQWdDLEVBQWhDLElBQXNDLEVBQXRDLElBQTRDLEtBQUssTUFBTCxLQUFnQixHQUFoQixHQUFzQixDQUF0QixHQUEwQixDQUFDLENBQXZFLENBREE7QUFFSCwyQkFBRyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsY0FBZCxDQUE2QixDQUE3QixFQUFnQyxFQUFoQyxJQUFzQztBQUZ0QyxxQkFKTTtBQVFiLDRCQUFRLENBUks7QUFTYixpQ0FBYSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsY0FBZCxDQUE2QixFQUE3QixFQUFpQyxFQUFqQyxJQUF1QyxFQVR2QztBQVViLDJCQUFPO0FBVk0saUJBQWpCO0FBWUg7O0FBRUQsZ0JBQUksS0FBSyxjQUFMLEdBQXNCLEtBQUssa0JBQS9CLEVBQW1EO0FBQy9DLHFCQUFLLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxxQkFBSyxPQUFMLENBQWEsWUFBYixDQUEwQjtBQUFBLDJCQUFTLE1BQU0sS0FBTixFQUFUO0FBQUEsaUJBQTFCO0FBQ0Esb0JBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxLQUFqQixFQUF3QjtBQUNwQix5QkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixVQUFoQixDQUEyQixLQUFLLE9BQWhDO0FBQ0g7QUFDSjs7QUFFRCxnQkFBSSxLQUFLLGVBQUwsR0FBdUIsS0FBSyxtQkFBaEMsRUFBcUQ7QUFDakQscUJBQUssZUFBTCxHQUF1QixDQUF2QjtBQUNBLG9CQUFJLEtBQUssTUFBTCxDQUFZLEtBQWhCLEVBQXVCO0FBQ25CLHlCQUFLLE1BQUwsQ0FBWSxLQUFaO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixNQUFsQixDQUF5QixPQUF6QixDQUFpQyxLQUFLLE1BQUwsQ0FBWSxPQUE3QyxFQUFzRCxLQUFLLE9BQTNELEVBQW9FLEtBQUssUUFBekUsRUFBbUYsSUFBbkYsRUFBeUYsSUFBekY7O0FBRUEsaUJBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsTUFBbEIsQ0FBeUIsT0FBekIsQ0FBaUMsS0FBSyxNQUF0QyxFQUE4QyxLQUFLLE9BQW5ELEVBQTRELEtBQUssVUFBakUsRUFBNkUsSUFBN0UsRUFBbUYsSUFBbkY7O0FBRUEsaUJBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUI7QUFBQSx1QkFBUyxPQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLENBQXlCLE9BQXpCLENBQWlDLE9BQUssTUFBdEMsRUFBOEMsTUFBTSxPQUFwRCxFQUE2RCxPQUFLLFNBQWxFLEVBQTZFLElBQTdFLFNBQVQ7QUFBQSxhQUFyQjs7QUFFQSxpQkFBSyxPQUFMLENBQWEsWUFBYixDQUEwQixDQUExQixJQUErQixDQUEvQjtBQUNIOzs7b0NBRVcsSSxFQUFNOztBQUVkLGdCQUFJLFFBQVEsS0FBSyxPQUFMLENBQWEsY0FBYixDQUE0QixLQUE1QixDQUFaOztBQUVBLGdCQUFJLENBQUMsS0FBTCxFQUFZO0FBQ1Isd0JBQVEsb0JBQVUsSUFBVixDQUFSO0FBQ0EscUJBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsS0FBakI7QUFDSDtBQUNELGtCQUFNLEtBQU4sQ0FBWSxJQUFaO0FBQ0g7OztrQ0FFUyxHLEVBQUssSyxFQUFPO0FBQUE7O0FBQ2xCLGdCQUFJLFFBQVEsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBWjtBQUNBLGdCQUFJLFVBQVUsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLE9BQWQsRUFBZDtBQUNBLGdCQUFJLHFCQUFxQixDQUF6QjtBQUNBLGdCQUFJLGdCQUFnQixHQUFwQjtBQUNBLGdCQUFJLGVBQWUsRUFBbkI7O0FBRUEsa0JBQU0sRUFBTixDQUFTLEVBQUMsTUFBTSxRQUFQLEVBQVQsRUFBMkIsR0FBM0I7QUFDQSxrQkFBTSxVQUFOLENBQWlCLEdBQWpCLENBQXFCLFlBQU07QUFDdkIsb0JBQUksSUFBSixHQUFXLFFBQVg7QUFDSCxhQUZEO0FBR0Esa0JBQU0sS0FBTjs7QUFFQSxvQkFBUSxDQUFSLEdBQVksSUFBSSxDQUFoQjtBQUNBLG9CQUFRLENBQVIsR0FBWSxJQUFJLENBQWhCO0FBQ0Esb0JBQVEsT0FBUixHQUFrQixDQUFsQjtBQUNBLG9CQUFRLGFBQVIsQ0FBc0IsVUFBdEI7O0FBRUEsZ0JBQUksSUFBSSxNQUFKLElBQWMsQ0FBbEIsRUFBcUI7QUFDakIsZ0NBQWdCLEdBQWhCO0FBQ0EsK0JBQWUsRUFBZjtBQUNBLHdCQUFRLFFBQVI7QUFDSDs7QUFFRCxvQkFBUSxnQkFBUixDQUF5QixLQUF6QixDQUErQixDQUFDLGFBQWhDLEVBQStDLENBQUMsYUFBaEQ7QUFDQSxvQkFBUSxnQkFBUixDQUF5QixLQUF6QixDQUErQixhQUEvQixFQUE4QyxhQUE5QztBQUNBLG9CQUFRLEtBQVIsQ0FBYyxJQUFkLEVBQW9CLEdBQXBCLEVBQXlCLElBQXpCLEVBQStCLFlBQS9CO0FBQ0Esb0JBQVEsTUFBUixHQUFpQixZQUFNO0FBQ25CLHNDQUFzQixPQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsY0FBckM7QUFDQSxvQkFBRyxzQkFBc0IsR0FBekIsRUFBNkI7QUFDekIseUNBQXFCLENBQXJCO0FBQ0EsNEJBQVEsT0FBUjtBQUNIO0FBRUosYUFQRDtBQVFBLG9CQUFRLE9BQVIsQ0FBZ0I7QUFBQSx1QkFBWSxTQUFTLElBQVQsR0FBZ0IsS0FBNUI7QUFBQSxhQUFoQjtBQUNBLGdCQUFJLENBQUMsS0FBSyxNQUFMLENBQVksS0FBakIsRUFBd0I7QUFDcEIscUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FBMkIsS0FBSyxPQUFoQztBQUNIO0FBQ0o7OztpQ0FFUSxNLEVBQVEsSyxFQUFPO0FBQ3BCLGlCQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsRUFBekIsRUFBNEIsQ0FBNUIsRUFBOEIsR0FBOUI7QUFDQSxrQkFBTSxNQUFOLENBQWEsT0FBTyxNQUFwQjtBQUNBLGlCQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLE9BQU8sSUFBN0I7QUFDQSxnQkFBSSxDQUFDLE1BQU0sS0FBWCxFQUFrQjtBQUNkLHFCQUFLLG1CQUFMLENBQXlCLElBQXpCLENBQThCLEVBQTlCLEVBQWlDLENBQWpDLEVBQW1DLEdBQW5DO0FBQ0EscUJBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsTUFBTSxTQUEzQjtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7a0NBRVMsTSxFQUFRLE0sRUFBUTtBQUN0QixpQkFBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLEVBQXpCLEVBQTRCLENBQTVCLEVBQThCLEdBQTlCO0FBQ0EsbUJBQU8sTUFBUCxDQUFjLE9BQU8sTUFBckI7QUFDQSxpQkFBSyxHQUFMLENBQVMsWUFBVDtBQUNBLGlCQUFLLFNBQUwsQ0FBZSxNQUFmLEVBQXVCLE9BQU8sSUFBOUI7QUFDQSxnQkFBSSxDQUFDLE9BQU8sS0FBWixFQUFtQjtBQUNmLHFCQUFLLG9CQUFMLENBQTBCLElBQTFCO0FBQ0EscUJBQUssUUFBTDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7bUNBRVUsTSxFQUFRLEssRUFBTztBQUN0QixrQkFBTSxNQUFOLENBQWEsTUFBTSxNQUFuQjtBQUNBLG1CQUFPLE1BQVAsQ0FBYyxNQUFNLE1BQXBCO0FBQ0EsaUJBQUssU0FBTCxDQUFlLE1BQWY7QUFDQSxpQkFBSyxTQUFMLENBQWUsS0FBZjtBQUNBLGdCQUFJLENBQUMsTUFBTSxLQUFYLEVBQWtCO0FBQ2QscUJBQUssbUJBQUwsQ0FBeUIsSUFBekIsQ0FBOEIsRUFBOUIsRUFBaUMsQ0FBakMsRUFBbUMsR0FBbkM7QUFDQSxxQkFBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixNQUFNLFNBQTNCO0FBQ0g7QUFDRCxpQkFBSyxHQUFMLENBQVMsWUFBVDtBQUNBLGdCQUFJLENBQUMsT0FBTyxLQUFaLEVBQW1CO0FBQ2YscUJBQUssb0JBQUwsQ0FBMEIsSUFBMUI7QUFDQSxxQkFBSyxRQUFMO0FBQ0g7QUFDSjs7O21DQUVTO0FBQUE7O0FBQ04saUJBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxVQUFmLEdBQTRCLENBQTVCO0FBQ0EsaUJBQUssT0FBTCxDQUFhLE9BQWIsR0FBdUIsSUFBdkI7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixVQUFoQixDQUEyQixLQUFLLE9BQWhDO0FBQ0EsZ0JBQUksUUFBUSxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZixDQUFzQixLQUFLLElBQTNCLEVBQWlDLElBQWpDLENBQVo7QUFDQSxrQkFBTSxHQUFOLENBQVUsSUFBVixFQUFnQixZQUFNO0FBQ2xCLHVCQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ0EsdUJBQUssYUFBTCxDQUFtQixJQUFuQjtBQUNBLHVCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0gsYUFKRDtBQUtBLGtCQUFNLEtBQU47QUFDSDs7OztFQXBONkIsT0FBTyxLOztrQkFBcEIsSTs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsUTs7Ozs7Ozs7Ozs7aUNBRVI7QUFBQTs7QUFDTCxpQkFBSyxFQUFMLEdBQVUsS0FBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQyxRQUF0QyxDQUFWO0FBQ0EsaUJBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxVQUFmLEdBQTRCLENBQTVCOztBQUdBO0FBQ0EsaUJBQUssTUFBTCxHQUFjLHFCQUFXO0FBQ3JCLHNCQUFNLEtBQUssSUFEVTtBQUVyQixtQkFBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BRkU7QUFHckIsbUJBQUcsT0FBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE1BSEw7QUFJckIsd0JBQVEsRUFKYTtBQUtyQix1QkFBTyxjQUxjO0FBTXJCLHVCQUFPO0FBTmMsYUFBWCxDQUFkO0FBUUEsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsQ0FBeUIsS0FBSyxNQUE5QjtBQUNBLGlCQUFLLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxpQkFBSyxtQkFBTCxHQUEyQixJQUEzQjs7QUFFQTtBQUNBLGlCQUFLLE9BQUwsR0FBZSxLQUFLLEdBQUwsQ0FBUyxLQUFULEVBQWY7QUFDQSxpQkFBSyxPQUFMLENBQWEsVUFBYixHQUEwQixJQUExQjtBQUNBLGlCQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDb0I7QUFDcEIsaUJBQUssYUFBTCxHQUFxQixHQUFyQjtBQUNBLGlCQUFLLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxpQkFBSyxrQkFBTCxHQUEwQixDQUExQjtBQUNBOztBQUVBO0FBQ0EsaUJBQUssY0FBTCxHQUFzQixLQUFLLEdBQUwsQ0FBUyxLQUFULEVBQXRCO0FBQ0EsaUJBQUssY0FBTCxDQUFvQixVQUFwQixHQUFpQyxJQUFqQztBQUNBOztBQUVBO0FBQ0EsaUJBQUssYUFBTCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxLQUFULEVBQXJCO0FBQ0EsaUJBQUssYUFBTCxDQUFtQixVQUFuQixHQUFnQyxJQUFoQztBQUNBO0FBQ0EsaUJBQUssbUJBQUwsR0FBMkIsR0FBM0I7QUFDQSxpQkFBSyxvQkFBTCxHQUE0QixDQUE1QjtBQUNBLGlCQUFLLHdCQUFMLEdBQWdDLENBQWhDO0FBQ0k7QUFDSixpQkFBSyxpQkFBTCxDQUF1QjtBQUNuQixzQkFBTSxLQUFLLElBRFE7QUFFbkIsbUJBQUcsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLGNBQWQsQ0FBNkIsQ0FBN0IsRUFBZ0MsRUFBaEMsSUFBc0MsRUFGdEI7QUFHbkI7QUFDQSxtQkFBRyxDQUpnQjtBQUtuQix1QkFBTztBQUNILHVCQUFHLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxjQUFkLENBQTZCLENBQTdCLEVBQWdDLEVBQWhDLElBQXNDLEVBQXRDLElBQTRDLEtBQUssTUFBTCxLQUFnQixHQUFoQixHQUFzQixDQUF0QixHQUEwQixDQUFDLENBQXZFLENBREE7QUFFSCx1QkFBRyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsY0FBZCxDQUE2QixDQUE3QixFQUFnQyxFQUFoQyxJQUFzQztBQUZ0QyxpQkFMWTtBQVNuQjtBQUNBLHdCQUFRLEVBVlc7QUFXbkIsNkJBQWEsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLGNBQWQsQ0FBNkIsRUFBN0IsRUFBaUMsRUFBakMsSUFBdUMsRUFYakM7QUFZbkIsdUJBQU87QUFaWSxhQUF2QjtBQWNBOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZixDQUFzQixJQUF0QixDQUEyQixPQUFPLEtBQVAsQ0FBYSxNQUFiLEdBQXNCLEVBQWpELEVBQXFELFlBQU07QUFDdkQsb0JBQUcsT0FBSyxhQUFMLEdBQXFCLEdBQXhCLEVBQTZCO0FBQ3pCLDJCQUFLLGFBQUwsSUFBc0IsR0FBdEI7QUFDSDtBQUNKLGFBSkQ7O0FBTUEsaUJBQUssYUFBTCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLEtBQUssSUFBTCxDQUFVLEtBQTlCLEVBQXFDLEtBQUssSUFBTCxDQUFVLE1BQS9DLENBQXJCO0FBQ0EsaUJBQUssYUFBTCxDQUFtQixHQUFuQixDQUF1QixTQUF2QixHQUFtQyxNQUFuQztBQUNBLGlCQUFLLGFBQUwsQ0FBbUIsR0FBbkIsQ0FBdUIsUUFBdkIsQ0FBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsRUFBc0MsS0FBSyxJQUFMLENBQVUsS0FBaEQsRUFBdUQsS0FBSyxJQUFMLENBQVUsTUFBakU7O0FBRUEsaUJBQUssT0FBTCxHQUFlLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsS0FBSyxhQUEzQixDQUFmO0FBQ0EsaUJBQUssT0FBTCxDQUFhLE9BQWIsR0FBdUIsS0FBdkI7QUFDQSxpQkFBSyxPQUFMLENBQWEsS0FBYixHQUFxQixJQUFyQjs7QUFFQSxpQkFBSyxHQUFMLEdBQVcsa0JBQVE7QUFDZixzQkFBTSxLQUFLLElBREk7QUFFZix3QkFBUSxLQUFLO0FBRkUsYUFBUixDQUFYOztBQU1BO0FBQ0Q7QUFDQyxpQkFBSyxjQUFMLEdBQXNCLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxXQUFmLENBQXRCO0FBQ0EsaUJBQUssbUJBQUwsR0FBMkIsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLGdCQUFmLENBQTNCO0FBQ0EsaUJBQUssb0JBQUwsR0FBNEIsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLGlCQUFmLENBQTVCO0FBQ0EsaUJBQUssYUFBTCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsVUFBZixDQUFyQjs7QUFFQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7O2lDQUVROztBQUVMLGlCQUFLLFNBQUwsSUFBa0IsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLGNBQWpDO0FBQ0EsaUJBQUssY0FBTCxJQUF1QixLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsY0FBdEM7QUFDQSxpQkFBSyxlQUFMLElBQXdCLEtBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxjQUF2Qzs7QUFFQSxnQkFBSSxLQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUExQixFQUF5QztBQUNyQyxxQkFBSyxTQUFMLEdBQWlCLENBQWpCOztBQUVBLHFCQUFLLFdBQUwsQ0FBaUI7QUFDYiwwQkFBTSxLQUFLLElBREU7QUFFYix1QkFBRyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsY0FBZCxDQUE2QixDQUE3QixFQUFnQyxFQUFoQyxJQUFzQyxFQUY1QjtBQUdiO0FBQ0EsdUJBQUcsQ0FKVTtBQUtiLDJCQUFPO0FBQ0gsMkJBQUcsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLGNBQWQsQ0FBNkIsQ0FBN0IsRUFBZ0MsRUFBaEMsSUFBc0MsRUFBdEMsSUFBNEMsS0FBSyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLENBQXRCLEdBQTBCLENBQUMsQ0FBdkUsQ0FEQTtBQUVILDJCQUFHLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxjQUFkLENBQTZCLENBQTdCLEVBQWdDLEVBQWhDLElBQXNDO0FBRnRDLHFCQUxNO0FBU2I7QUFDQSw0QkFBUSxDQVZLO0FBV2IsaUNBQWEsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLGNBQWQsQ0FBNkIsRUFBN0IsRUFBaUMsRUFBakMsSUFBdUMsRUFYdkM7QUFZYiwyQkFBTyxPQVpNO0FBYWIsMEJBQU07O0FBYk8saUJBQWpCO0FBZ0JIOztBQUVELGdCQUFJLEtBQUssY0FBTCxHQUFzQixLQUFLLGtCQUEvQixFQUFtRDtBQUMvQyxxQkFBSyxjQUFMLEdBQXNCLENBQXRCO0FBQ0Esb0JBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxLQUFqQixFQUF3QjtBQUNwQix5QkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixVQUFoQixDQUEyQixLQUFLLE9BQWhDO0FBQ0EsNEJBQVEsR0FBUixDQUFZLFlBQVo7QUFDSDtBQUNKOztBQUVELGdCQUFJLEtBQUssZUFBTCxHQUF1QixLQUFLLG1CQUFoQyxFQUFxRDtBQUNqRCxxQkFBSyxlQUFMLEdBQXVCLENBQXZCO0FBQ0Esb0JBQUksS0FBSyxNQUFMLENBQVksS0FBaEIsRUFBdUI7QUFDbkIsd0JBQUksV0FBVyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFFBQWhCLENBQXlCLE1BQXpCLENBQWdDLE9BQU8sUUFBUCxDQUFnQixRQUFoRCxDQUFmO0FBQ0Esd0JBQUcsUUFBSCxFQUFhO0FBQ1QsNkJBQUssTUFBTCxDQUFZLEtBQVo7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsaUJBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsTUFBbEIsQ0FBeUIsT0FBekIsQ0FBaUMsS0FBSyxNQUFMLENBQVksT0FBN0MsRUFBc0QsS0FBSyxPQUEzRCxFQUFvRSxLQUFLLFFBQXpFLEVBQW1GLElBQW5GLEVBQXlGLElBQXpGOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLENBQXlCLE9BQXpCLENBQWlDLEtBQUssTUFBdEMsRUFBOEMsS0FBSyxPQUFuRCxFQUE0RCxLQUFLLFVBQWpFLEVBQTZFLElBQTdFLEVBQW1GLElBQW5GOztBQUdBO0FBQ0g7OztvQ0FFVyxJLEVBQU07O0FBRWQsZ0JBQUksUUFBUSxLQUFLLE9BQUwsQ0FBYSxjQUFiLENBQTRCLEtBQTVCLENBQVo7QUFDQSxnQkFBSSxlQUFlLEtBQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsTUFBekM7QUFDQSxvQkFBUSxHQUFSLENBQVksWUFBWjs7QUFFQSxnQkFBSSxDQUFDLEtBQUwsRUFBWTtBQUNSLHdCQUFRLHdCQUFVLElBQVYsQ0FBUjtBQUNBLG9CQUFHLGVBQWUsQ0FBbEIsRUFBb0I7QUFDaEIseUJBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsS0FBakI7QUFDSDtBQUVKO0FBQ0Qsa0JBQU0sS0FBTixDQUFZLElBQVo7QUFDSDs7OzJDQUVrQixJLEVBQU07O0FBRXJCLGdCQUFJLFFBQVEsS0FBSyxjQUFMLENBQW9CLGNBQXBCLENBQW1DLEtBQW5DLENBQVo7QUFDQSxnQkFBSSxlQUFlLEtBQUssY0FBTCxDQUFvQixRQUFwQixDQUE2QixNQUFoRDs7QUFFQSxnQkFBSSxDQUFDLEtBQUwsRUFBWTtBQUNSLHdCQUFRLHdCQUFVLElBQVYsQ0FBUjtBQUNBLG9CQUFHLGVBQWUsRUFBbEIsRUFBcUI7QUFDakIseUJBQUssY0FBTCxDQUFvQixHQUFwQixDQUF3QixLQUF4QjtBQUNIO0FBRUo7QUFDRCxrQkFBTSxLQUFOLENBQVksSUFBWjtBQUNIOzs7MENBRWlCLEksRUFBTTs7QUFFcEIsZ0JBQUksUUFBUSxLQUFLLGFBQUwsQ0FBbUIsY0FBbkIsQ0FBa0MsS0FBbEMsQ0FBWjtBQUNBLGdCQUFJLGVBQWUsS0FBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLE1BQS9DO0FBQ0Esb0JBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsZ0JBQUksQ0FBQyxLQUFMLEVBQVk7QUFDUix3QkFBUSx3QkFBVSxJQUFWLENBQVI7QUFDQSxvQkFBRyxnQkFBZ0IsQ0FBbkIsRUFBcUI7QUFDakIseUJBQUssYUFBTCxDQUFtQixHQUFuQixDQUF1QixLQUF2QjtBQUNIO0FBRUo7QUFDRCxrQkFBTSxLQUFOLENBQVksSUFBWjtBQUNIOzs7a0NBRVMsRyxFQUFLLEssRUFBTztBQUFBOztBQUNsQixnQkFBSSxRQUFRLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLEdBQXBCLENBQVo7QUFDQSxnQkFBSSxVQUFVLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxPQUFkLEVBQWQ7QUFDQSxnQkFBSSxxQkFBcUIsQ0FBekI7QUFDQSxnQkFBSSxnQkFBZ0IsR0FBcEI7QUFDQSxnQkFBSSxlQUFlLEVBQW5COztBQUVBLGtCQUFNLEVBQU4sQ0FBUyxFQUFDLE1BQU0sUUFBUCxFQUFULEVBQTJCLEdBQTNCO0FBQ0Esa0JBQU0sVUFBTixDQUFpQixHQUFqQixDQUFxQixZQUFNO0FBQ3ZCLG9CQUFJLElBQUosR0FBVyxRQUFYO0FBQ0gsYUFGRDtBQUdBLGtCQUFNLEtBQU47O0FBRUEsb0JBQVEsQ0FBUixHQUFZLElBQUksQ0FBaEI7QUFDQSxvQkFBUSxDQUFSLEdBQVksSUFBSSxDQUFoQjtBQUNBLG9CQUFRLE9BQVIsR0FBa0IsQ0FBbEI7QUFDQSxvQkFBUSxhQUFSLENBQXNCLFVBQXRCOztBQUVBLGdCQUFJLElBQUksTUFBSixJQUFjLENBQWxCLEVBQXFCO0FBQ2pCLGdDQUFnQixHQUFoQjtBQUNBLCtCQUFlLEVBQWY7QUFDQSx3QkFBUSxRQUFSO0FBQ0g7O0FBRUQsb0JBQVEsZ0JBQVIsQ0FBeUIsS0FBekIsQ0FBK0IsQ0FBQyxhQUFoQyxFQUErQyxDQUFDLGFBQWhEO0FBQ0Esb0JBQVEsZ0JBQVIsQ0FBeUIsS0FBekIsQ0FBK0IsYUFBL0IsRUFBOEMsYUFBOUM7QUFDQSxvQkFBUSxLQUFSLENBQWMsSUFBZCxFQUFvQixHQUFwQixFQUF5QixJQUF6QixFQUErQixZQUEvQjtBQUNBLG9CQUFRLE1BQVIsR0FBaUIsWUFBTTtBQUNuQixzQ0FBc0IsT0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLGNBQXJDO0FBQ0Esb0JBQUcsc0JBQXNCLEdBQXpCLEVBQTZCO0FBQ3pCLHlDQUFxQixDQUFyQjtBQUNBLDRCQUFRLE9BQVI7QUFDSDtBQUVKLGFBUEQ7QUFRQSxvQkFBUSxPQUFSLENBQWdCO0FBQUEsdUJBQVksU0FBUyxJQUFULEdBQWdCLEtBQTVCO0FBQUEsYUFBaEI7QUFDQSxnQkFBSSxDQUFDLEtBQUssTUFBTCxDQUFZLEtBQWpCLEVBQXdCO0FBQ3BCLHFCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFVBQWhCLENBQTJCLEtBQUssT0FBaEM7QUFDSDtBQUNKOzs7aUNBRVEsTSxFQUFRLEssRUFBTzs7QUFFcEIsaUJBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixFQUF6QixFQUE0QixDQUE1QixFQUE4QixHQUE5QjtBQUNBLGtCQUFNLE1BQU4sQ0FBYSxPQUFPLE1BQXBCO0FBQ0E7QUFDQSxpQkFBSyxTQUFMLENBQWUsS0FBZixFQUFzQixPQUFPLElBQTdCO0FBQ0EsZ0JBQUksQ0FBQyxNQUFNLEtBQVgsRUFBa0I7QUFDZCxxQkFBSyxtQkFBTCxDQUF5QixJQUF6QixDQUE4QixFQUE5QixFQUFpQyxDQUFqQyxFQUFtQyxHQUFuQztBQUNBLHFCQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLE1BQU0sU0FBM0I7QUFDQSx3QkFBUSxHQUFSLENBQVksS0FBWjtBQUNBLHdCQUFRLEdBQVIsQ0FBWSxXQUFaOztBQUVBLHdCQUFPLE1BQU0sSUFBYjtBQUNJO0FBQ0EseUJBQUssR0FBTDtBQUNFLDZCQUFLLGtCQUFMLENBQXdCO0FBQ2xCLGtDQUFNLEtBQUssSUFETztBQUVsQiwrQkFBRyxNQUFNLENBRlM7QUFHbEI7QUFDQSwrQkFBRyxNQUFNLENBSlM7QUFLbEIsbUNBQU87QUFDSCxtQ0FBRyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsY0FBZCxDQUE2QixDQUE3QixFQUFnQyxFQUFoQyxJQUFzQyxFQUF0QyxJQUE0QyxLQUFLLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsQ0FBdEIsR0FBMEIsQ0FBQyxDQUF2RSxDQURBO0FBRUgsbUNBQUcsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLGNBQWQsQ0FBNkIsQ0FBN0IsRUFBZ0MsRUFBaEMsSUFBc0M7QUFGdEMsNkJBTFc7QUFTbEI7QUFDQSxvQ0FBUSxDQVZVO0FBV2xCLHlDQUFhLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxjQUFkLENBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLElBQXVDLEVBWGxDO0FBWWxCLG1DQUFPLE9BWlc7QUFhbEIsa0NBQU07QUFiWSx5QkFBeEI7QUFlQSw2QkFBSyxrQkFBTCxDQUF3QjtBQUNsQixrQ0FBTSxLQUFLLElBRE87QUFFbEIsK0JBQUcsTUFBTSxDQUZTO0FBR2xCO0FBQ0EsK0JBQUcsTUFBTSxDQUpTO0FBS2xCLG1DQUFPO0FBQ0gsbUNBQUcsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLGNBQWQsQ0FBNkIsQ0FBQyxFQUE5QixFQUFrQyxFQUFsQyxJQUF3QyxFQUF4QyxJQUE4QyxLQUFLLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsQ0FBdEIsR0FBMEIsQ0FBQyxDQUF6RSxDQURBO0FBRUgsbUNBQUksS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLGNBQWQsQ0FBNkIsQ0FBQyxFQUE5QixFQUFrQyxDQUFDLEVBQW5DLElBQXlDO0FBRjFDLDZCQUxXO0FBU2xCO0FBQ0Esb0NBQVEsQ0FWVTtBQVdsQix5Q0FBYSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsY0FBZCxDQUE2QixFQUE3QixFQUFpQyxFQUFqQyxJQUF1QyxFQVhsQztBQVlsQixtQ0FBTyxPQVpXO0FBYWxCLGtDQUFNO0FBYlkseUJBQXhCO0FBZUU7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbkRKO0FBd0RIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7bUNBRVcsTSxFQUFRLEssRUFBTztBQUN0QjtBQUNBLGtCQUFNLE1BQU4sQ0FBYSxDQUFiO0FBQ0E7QUFDQSxtQkFBTyxNQUFQLENBQWMsQ0FBZDtBQUNBLGlCQUFLLFNBQUwsQ0FBZSxNQUFmO0FBQ0EsaUJBQUssU0FBTCxDQUFlLEtBQWY7QUFDQSxnQkFBSSxDQUFDLE1BQU0sS0FBWCxFQUFrQjtBQUNkLHFCQUFLLG1CQUFMLENBQXlCLElBQXpCLENBQThCLEVBQTlCLEVBQWlDLENBQWpDLEVBQW1DLEdBQW5DO0FBQ0EscUJBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsTUFBTSxTQUEzQjtBQUNIO0FBQ0QsaUJBQUssR0FBTCxDQUFTLFlBQVQ7QUFDQSxnQkFBSSxDQUFDLE9BQU8sS0FBWixFQUFtQjtBQUNmLHFCQUFLLG9CQUFMLENBQTBCLElBQTFCO0FBQ0EscUJBQUssUUFBTDtBQUNIO0FBQ0o7OzttQ0FFUztBQUFBOztBQUNOLGlCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsVUFBZixHQUE0QixDQUE1QjtBQUNBLGlCQUFLLE9BQUwsQ0FBYSxPQUFiLEdBQXVCLElBQXZCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FBMkIsS0FBSyxPQUFoQztBQUNBLGdCQUFJLFFBQVEsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLE1BQWYsQ0FBc0IsS0FBSyxJQUEzQixFQUFpQyxJQUFqQyxDQUFaO0FBQ0Esa0JBQU0sR0FBTixDQUFVLElBQVYsRUFBZ0IsWUFBTTtBQUNsQjtBQUNBLHVCQUFLLGFBQUwsQ0FBbUIsSUFBbkI7QUFDQSx1QkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUFoQixDQUFzQixVQUF0QjtBQUNILGFBSkQ7QUFLQSxrQkFBTSxLQUFOO0FBQ0g7Ozs7RUFqV2lDLE9BQU8sSzs7a0JBQXhCLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSkEsTzs7Ozs7Ozs7Ozs7a0NBRVA7O0FBRU4saUJBQUssUUFBTCxHQUFnQixLQUFLLEdBQUwsQ0FBUyxNQUFULENBQWdCLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBaEMsRUFBeUMsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUF6RCxFQUFrRSxVQUFsRSxDQUFoQjtBQUNBLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQWhDLEVBQXlDLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBekQsRUFBa0UsV0FBbEUsQ0FBakI7QUFDQSxpQkFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixDQUEyQixHQUEzQjtBQUNBLGlCQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLEtBQXRCLENBQTRCLEdBQTVCOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxnQkFBVixDQUEyQixLQUFLLFNBQWhDO0FBQ0E7QUFDQSxpQkFBSyxJQUFMLENBQVUsY0FBVixDQUF5QixjQUF6QixFQUF5QyxrQ0FBekMsRUFBNkUsb0NBQTdFO0FBQ0EsaUJBQUssSUFBTCxDQUFVLGNBQVYsQ0FBeUIsT0FBekIsRUFBa0MsMkJBQWxDLEVBQStELDZCQUEvRDtBQUNBLGlCQUFLLElBQUwsQ0FBVSxjQUFWLENBQXlCLFFBQXpCLEVBQW1DLDRCQUFuQyxFQUFpRSw4QkFBakU7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixTQUFoQixFQUEyQixpQkFBM0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixRQUFoQixFQUEwQixnQkFBMUI7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixVQUFoQixFQUE0QixrQkFBNUI7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixFQUE2QixtQkFBN0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUFoQixFQUF5QixnQkFBekI7O0FBRUEsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsRUFBNkIsQ0FBQyxzQkFBRCxDQUE3QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLEVBQTZCLENBQUMsc0JBQUQsQ0FBN0I7O0FBRUEsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsRUFBNEIsQ0FBQywyQkFBRCxDQUE1QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFNBQWhCLEVBQTJCLENBQUMsMEJBQUQsQ0FBM0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixVQUFoQixFQUE0QixDQUFDLDRCQUFELENBQTVCOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLEVBQTZCLENBQUMsNEJBQUQsQ0FBN0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixFQUE2QixDQUFDLDRCQUFELENBQTdCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsZ0JBQWhCLEVBQWtDLENBQUMsaUNBQUQsQ0FBbEM7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixZQUFoQixFQUE4QixDQUFDLDZCQUFELENBQTlCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsaUJBQWhCLEVBQW1DLENBQUMsa0NBQUQsQ0FBbkM7O0FBRUEsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsRUFBNEIsQ0FBQywyQkFBRCxDQUE1QjtBQUNBO0FBQ0E7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixRQUFoQixFQUEwQixnQkFBMUI7QUFFSDs7O2lDQUVRO0FBQ0wsaUJBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakI7QUFDSDs7OztFQTFDZ0MsT0FBTyxLOztrQkFBdkIsTyIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkJ1dHRvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUsIGxhYmVsLCBzdHlsZSB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUpO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIDAsIDAsIHRoaXMubGFiZWwsIHRoaXMuc3R5bGUpO1xuICAgICAgICB0aGlzLnRleHQuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQpO1xuXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgc3RhdGVzIGZyb20gJy4vc3RhdGVzJztcbmNvbnN0IEdBTUUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLCAxMDAwLCBQaGFzZXIuQVVUTyk7XG5cbk9iamVjdC5rZXlzKHN0YXRlcykuZm9yRWFjaChzdGF0ZSA9PiBHQU1FLnN0YXRlLmFkZChzdGF0ZSwgc3RhdGVzW3N0YXRlXSkpO1xuXG5HQU1FLnN0YXRlLnN0YXJ0KCdCb290Jyk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGhlYWx0aCwgdGludCA9IDB4ZmYwMDAwIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQpO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIHRoaXMuc2NhbGUuc2V0VG8oMC44KTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMudGludCA9IHRpbnQ7XG4gICAgICAgIHRoaXMuY2hlY2tXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMub3V0T2ZCb3VuZHNLaWxsID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQnVsbGV0IGZyb20gJy4vYnVsbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGgsIGJ1bGxldFNwZWVkIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lKTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIHRoaXMuc2NhbGUuc2V0VG8oMC44KTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3NwaW5uaW5nJywgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNF0sIDMwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5KCdzcGlubmluZycpO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gYnVsbGV0U3BlZWQ7XG5cbiAgICAgICAgdGhpcy5zaG90U291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKCdlbmVteVNob3QnKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDI7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCAqPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPiAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMiA+IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICAgICAgdGhpcy5zaG90U291bmQucGxheShcIlwiLDAsMC41KTtcblxuICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcblxuICAgICAgICBpZiAoIWJ1bGxldCkge1xuICAgICAgICAgICAgYnVsbGV0ID0gbmV3IEJ1bGxldCh7XG4gICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmJvdHRvbSxcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDIsXG4gICAgICAgICAgICAgICAgYXNzZXQ6ICdidWxsZXQnLFxuICAgICAgICAgICAgICAgIHRpbnQ6IDB4ZmYwMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5hZGQoYnVsbGV0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLngsIHRoaXMuYm90dG9tLCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJ1bGxldFNwZWVkO1xuICAgIH1cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG4gICAgcmVzZXQoeyB4LCB5LCBoZWFsdGgsIGJ1bGxldFNwZWVkLCBzcGVlZCB9KSB7XG4gICAgICAgIHN1cGVyLnJlc2V0KHgsIHksIGhlYWx0aCk7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSBzcGVlZC54O1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHNwZWVkLnk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJ1bGxldCBmcm9tICcuL2J1bGxldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBmcmFtZSwgaGVhbHRoLCBidWxsZXRTcGVlZCxzaXplIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lKTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgLy9zY2FsZVxuICAgICAgICAgICAgLy8gMi41IEwsIDIgTSwgMC44IFNcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgaWYgKHNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2l6ZSA9IDIuNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKHNpemUpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG5cblxuICAgICAgICAvL0dyYXZpdHlcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5LnkgPSA1MDA7XG4gICAgICAgIHRoaXMuYm9keS5ib3VuY2Uuc2V0KDEpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3NwaW5uaW5nJywgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNF0sIDMwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5KCdzcGlubmluZycpO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gYnVsbGV0U3BlZWQ7XG5cbiAgICAgICAgdGhpcy5zaG90U291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKCdlbmVteVNob3QnKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDI7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCAqPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPiAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMiA+IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG4gICAgcmVzZXQoeyB4LCB5LCBoZWFsdGgsIGJ1bGxldFNwZWVkLCBzcGVlZCB9KSB7XG4gICAgICAgIHN1cGVyLnJlc2V0KHgsIHksIGhlYWx0aCk7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSBzcGVlZC54O1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHNwZWVkLnk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wcmVmYWJzL3BsYXllcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWQgZXh0ZW5kcyBQaGFzZXIuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgcGxheWVyIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmJnID0gbmV3IFBoYXNlci5JbWFnZSh0aGlzLmdhbWUsIDAsIDAsICdodWRCZycpO1xuICAgICAgICB0aGlzLndpZHRoID0gODAwO1xuICAgICAgICB0aGlzLmhlYWx0aGJhciA9IG5ldyBQaGFzZXIuU3ByaXRlKHRoaXMuZ2FtZSwgMiwgMiwgJ2hlYWx0aGJhcicpO1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5zY2FsZS5zZXRUbygwLjk5NSwgMTEpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwgPSAnU2NvcmU6ICc7XG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgMjAsIDE0LCB0aGlzLnNjb3JlTGFiZWwgKyB0aGlzLnNjb3JlLCB7XG4gICAgICAgICAgICBmb250OiAnMTNweCBWZXJkYW5hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJnKTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhiYXIpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnNjb3JlVGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhbHRoKHBsYXllcikge1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5jcm9wKG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIDAsICh0aGlzLnBsYXllci5oZWFsdGggLyB0aGlzLnBsYXllci5tYXhIZWFsdGgpICogdGhpcy53aWR0aCwgMTApKTtcbiAgICAgICAgdGhpcy5oZWFsdGhiYXIudXBkYXRlQ3JvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKGFtb3VudCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IGFtb3VudDtcbiAgICAgICAgdGhpcy5zY29yZVRleHQudGV4dCA9IHRoaXMuc2NvcmVMYWJlbCArICh0aGlzLnNjb3JlICogMTApO1xuICAgIH1cblxufTtcbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9idWxsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGggfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IGhlYWx0aDtcblxuXG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgLy9ncmF2aXR5XG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5LnkgPSAxMDA7XG4gICAgICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICAvL1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gLTUwMDtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQoJ3BsYXllclNob3QnKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgLy8gdGhpcy5nYW1lLmRlYnVnLmJvZHkodGhpcyk7XG5cblxuXG4gICAgICAgIC8vIGlmICh0aGlzLmdhbWUuaW5wdXQuYWN0aXZlUG9pbnRlci5pc0Rvd24pIHtcblxuICAgICAgICAgICAgbGV0IGxlZnRLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5MRUZUKTtcbiAgICAgICAgICAgIGxldCByaWdodEtleSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlJJR0hUKTtcbiAgICAgICAgICAgIGlmKGxlZnRLZXkpe1xuICAgICAgICAgICAgICAgIHRoaXMueCAtPSA2O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJpZ2h0S2V5KXtcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gNjtcblxuICAgICAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICAgICAgbGV0IGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFidWxsZXQpIHtcbiAgICAgICAgICAgIGJ1bGxldCA9IG5ldyBCdWxsZXQoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy50b3AsXG4gICAgICAgICAgICAgICAgaGVhbHRoOiAzLFxuICAgICAgICAgICAgICAgIGFzc2V0OiAnYnVsbGV0JyxcbiAgICAgICAgICAgICAgICB0aW50OiAweDA0YzExMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjaGFuZ2UgdGhpcyBudW1iZXIgdG8gc2hvb3QgbGVzcyBidWxsZXRzIGF0IGEgdGltZVxuICAgICAgICAgICAgaWYodGhpcy5idWxsZXRzLmNoaWxkcmVuLmxlbmd0aCA8PSA1KXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3RTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5hZGQoYnVsbGV0KTtcbiAgICAgICAgICAgICAgICBidWxsZXQuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5idWxsZXRTcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICBidWxsZXQucmVzZXQodGhpcy54LCB0aGlzLnRvcCwgMyk7XG4gICAgICAgICAgICBidWxsZXQuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5idWxsZXRTcGVlZDtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBkYW1hZ2UoYW1vdW50KSB7XG4gICAgICAgIHN1cGVyLmRhbWFnZShhbW91bnQpO1xuICAgIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvYWRlckJnJywgJ2ltZy9sb2FkZXItYmcucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnbG9hZGVyQmFyJywgJ2ltZy9sb2FkZXItYmFyLnBuZycpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xuXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQcmVsb2FkJyk7XG4gICAgfVxuXG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgQm9vdH0gZnJvbSAnLi9ib290JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQcmVsb2FkfSBmcm9tICcuL3ByZWxvYWQnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1lbnV9IGZyb20gJy4vbWVudSc7XG4vL2dhbWUxXG5leHBvcnQge2RlZmF1bHQgYXMgUGxheX0gZnJvbSAnLi9wbGF5JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBPdmVyfSBmcm9tICcuL292ZXInO1xuXG4vL2dhbWUyXG5leHBvcnQge2RlZmF1bHQgYXMgUGxheVBhbmd9IGZyb20gJy4vcGxheVBhbmcnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFBhbmdPdmVyfSBmcm9tICcuL3BhbmdPdmVyJztcblxuLy9nYW1lM1xuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vZXh0ZW5zaW9ucy90ZXh0YnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG5cbiAgICAgICAvLyB0aGlzLm11c2ljID0gdGhpcy5nYW1lLmFkZC5hdWRpbygnbWVudU11c2ljJyk7XG5cbiAgICAgICAgdGhpcy50aXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdTaG9vdFxcJ0VtIFVwJywge1xuICAgICAgICAgICAgZm9udDogJzM2cHggVGFob21hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGl0bGUuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ1N0YXJ0JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5vbklucHV0VXAuYWRkKCgpPT57XG4gICAgICAgICAgICAvL3RoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheScpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZTIgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCArIDIwMCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdHYW1lIDInLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLmdhbWUyLnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMuZ2FtZTIuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMuZ2FtZTIuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLmdhbWUyLm9uSW5wdXRVcC5hZGQoKCk9PntcbiAgICAgICAgICAgIC8vdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5UGFuZycpO1xuXG5cbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIHRoaXMubWVudVBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMudGl0bGUpO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbC5hZGQodGhpcy5zdGFydCk7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLmdhbWUyKTtcblxuICAgICAgICAvL3RoaXMubXVzaWMubG9vcEZ1bGwoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVGV4dEJ1dHRvbiBmcm9tICcuLi9leHRlbnNpb25zL3RleHRidXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUgPSBuZXcgUGhhc2VyLlRleHQodGhpcy5nYW1lLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMjAwLCAnR2FtZSBvdmVyJywge1xuICAgICAgICAgICAgZm9udDogJzM2cHggVGFob21hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZS5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0zMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnVHJ5IGFnYWluJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IFRleHRCdXR0b24oe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSszMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIG92ZXJGcmFtZTogMixcbiAgICAgICAgICAgIG91dEZyYW1lOiAxLFxuICAgICAgICAgICAgZG93bkZyYW1lOiAwLFxuICAgICAgICAgICAgdXBGcmFtZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnTWVudScsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLnN0YXJ0Lm9uSW5wdXREb3duLmFkZCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUGxheScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5nYW1lT3ZlclRpdGxlKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLm1lbnUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUZXh0QnV0dG9uIGZyb20gJy4uL2V4dGVuc2lvbnMvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmdPdmVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUgPSBuZXcgUGhhc2VyLlRleHQodGhpcy5nYW1lLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMjAwLCAnUGFuZyBHYW1lIG92ZXInLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdUcnkgYWdhaW4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZKzMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5UGFuZycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5hZGQodGhpcy5nYW1lT3ZlclRpdGxlKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLm1lbnUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vcHJlZmFicy9wbGF5ZXInO1xuaW1wb3J0IEVuZW15IGZyb20gJy4uL3ByZWZhYnMvZW5lbXknO1xuaW1wb3J0IEhVRCBmcm9tICcuLi9wcmVmYWJzL2h1ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXkgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICAvL2ZhcmJhY2sgPSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuZmFyYmFjayA9IHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCwgODAwLCAyMzgwLCAnZmFyYmFjaycpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcblxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmVuZW1pZXMuZW5hYmxlQm9keSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogMC45MiAqIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQsXG4gICAgICAgICAgICBoZWFsdGg6IDEwMCxcbiAgICAgICAgICAgIGFzc2V0OiAnc21hbGxmaWdodGVyJyxcbiAgICAgICAgICAgIGZyYW1lOiAxXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wbGF5ZXIpO1xuXG4gICAgICAgIHRoaXMuaHVkID0gbmV3IEhVRCh7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICBwbGF5ZXI6IHRoaXMucGxheWVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAwO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25VcC5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZW5lbXlUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gMS41O1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmVteVNob290SW50ZXJ2YWwgPSAxO1xuICAgICAgICB0aGlzLnBsYXllclNob290VGltZSA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCA9IDAuMTY7XG5cbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmxvb3AoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDEwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmVuZW15SW50ZXJ2YWwgPiAwLjkgKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgLT0gMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAgPSB0aGlzLmFkZC5iaXRtYXBEYXRhKHRoaXMuZ2FtZS53aWR0aCwgdGhpcy5nYW1lLmhlaWdodCk7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZ2FtZS53aWR0aCwgdGhpcy5nYW1lLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5ID0gdGhpcy5hZGQuc3ByaXRlKDAsIDAsIHRoaXMub3ZlcmxheUJpdG1hcCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hbHBoYSA9IDAuNzU7XG5cbiAgICAgICAvLyB0aGlzLm11c2ljID0gdGhpcy5nYW1lLmFkZC5hdWRpbygncGxheU11c2ljJyk7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnYnVsbGV0SGl0Jyk7XG4gICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdlbmVteUV4cGxvc2lvbicpO1xuICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ3BsYXllckV4cGxvc2lvbicpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnZ2FtZU92ZXInKTtcblxuICAgICAgICAvL3RoaXMubXVzaWMubG9vcEZ1bGwoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5lbmVteVRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuXG4gICAgICAgIGlmICh0aGlzLmVuZW15VGltZSA+IHRoaXMuZW5lbXlJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5lbmVteVRpbWUgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVuZW15KHtcbiAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg2LCA3NikgKiAxMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTAgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWx0aDogOSxcbiAgICAgICAgICAgICAgICBidWxsZXRTcGVlZDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgxMCwgMjApICogMTAsXG4gICAgICAgICAgICAgICAgYXNzZXQ6ICdhbGllbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlTaG9vdFRpbWUgPiB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5lbmVteVNob290VGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaEFsaXZlKGVuZW15ID0+IGVuZW15LnNob290KCkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJTaG9vdFRpbWUgPiB0aGlzLnBsYXllclNob290SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNob290KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllci5idWxsZXRzLCB0aGlzLmVuZW1pZXMsIHRoaXMuaGl0RW5lbXksIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLCB0aGlzLmVuZW1pZXMsIHRoaXMuY3Jhc2hFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goZW5lbXkgPT4gdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIsIGVuZW15LmJ1bGxldHMsIHRoaXMuaGl0UGxheWVyLCBudWxsLCB0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5mYXJiYWNrLnRpbGVQb3NpdGlvbi55ICs9IDM7XG4gICAgfVxuXG4gICAgY3JlYXRlRW5lbXkoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllcy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMuYWRkKGVuZW15KTtcbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBoaXRFZmZlY3Qob2JqLCBjb2xvcikge1xuICAgICAgICBsZXQgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKG9iaik7XG4gICAgICAgIGxldCBlbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKCk7XG4gICAgICAgIGxldCBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICBsZXQgcGFydGljbGVTcGVlZCA9IDEwMDtcbiAgICAgICAgbGV0IG1heFBhcnRpY2xlcyA9IDEwO1xuXG4gICAgICAgIHR3ZWVuLnRvKHt0aW50OiAweGZmMDAwMH0sIDEwMCk7XG4gICAgICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIG9iai50aW50ID0gMHhmZmZmZmY7XG4gICAgICAgIH0pO1xuICAgICAgICB0d2Vlbi5zdGFydCgpO1xuXG4gICAgICAgIGVtaXR0ZXIueCA9IG9iai54O1xuICAgICAgICBlbWl0dGVyLnkgPSBvYmoueTtcbiAgICAgICAgZW1pdHRlci5ncmF2aXR5ID0gMDtcbiAgICAgICAgZW1pdHRlci5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZScpO1xuXG4gICAgICAgIGlmIChvYmouaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHBhcnRpY2xlU3BlZWQgPSAyMDA7XG4gICAgICAgICAgICBtYXhQYXJ0aWNsZXMgPSA0MDtcbiAgICAgICAgICAgIGNvbG9yID0gMHhmZjAwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBlbWl0dGVyLm1pblBhcnRpY2xlU3BlZWQuc2V0VG8oLXBhcnRpY2xlU3BlZWQsIC1wYXJ0aWNsZVNwZWVkKTtcbiAgICAgICAgZW1pdHRlci5tYXhQYXJ0aWNsZVNwZWVkLnNldFRvKHBhcnRpY2xlU3BlZWQsIHBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLnN0YXJ0KHRydWUsIDUwMCwgbnVsbCwgbWF4UGFydGljbGVzKTtcbiAgICAgICAgZW1pdHRlci51cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgICAgICBpZihlbWl0dGVyUGh5c2ljc1RpbWUgPj0gMC42KXtcbiAgICAgICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIGVtaXR0ZXIuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS50aW50ID0gY29sb3IpO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGl0RW5lbXkoYnVsbGV0LCBlbmVteSkge1xuICAgICAgICB0aGlzLmJ1bGxldEhpdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgIGVuZW15LmRhbWFnZShidWxsZXQuaGVhbHRoKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QoZW5lbXksIGJ1bGxldC50aW50KTtcbiAgICAgICAgaWYgKCFlbmVteS5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICB0aGlzLmh1ZC51cGRhdGVTY29yZShlbmVteS5tYXhIZWFsdGgpO1xuICAgICAgICB9XG4gICAgICAgIGJ1bGxldC5raWxsKCk7XG4gICAgfVxuXG4gICAgaGl0UGxheWVyKHBsYXllciwgYnVsbGV0KSB7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgcGxheWVyLmRhbWFnZShidWxsZXQuaGVhbHRoKTtcbiAgICAgICAgdGhpcy5odWQudXBkYXRlSGVhbHRoKCk7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KHBsYXllciwgYnVsbGV0LnRpbnQpO1xuICAgICAgICBpZiAoIXBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVsbGV0LmtpbGwoKTtcbiAgICB9XG5cbiAgICBjcmFzaEVuZW15KHBsYXllciwgZW5lbXkpIHtcbiAgICAgICAgZW5lbXkuZGFtYWdlKGVuZW15LmhlYWx0aCk7XG4gICAgICAgIHBsYXllci5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QocGxheWVyKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QoZW5lbXkpO1xuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIHRoaXMuaHVkLnVwZGF0ZVNjb3JlKGVuZW15Lm1heEhlYWx0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5odWQudXBkYXRlSGVhbHRoKCk7XG4gICAgICAgIGlmICghcGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAzO1xuICAgICAgICB0aGlzLm92ZXJsYXkudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIGxldCB0aW1lciA9IHRoaXMuZ2FtZS50aW1lLmNyZWF0ZSh0aGlzLmdhbWUsIHRydWUpO1xuICAgICAgICB0aW1lci5hZGQoMzAwMCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdPdmVyJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wcmVmYWJzL3BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vcHJlZmFicy9lbmVteVBhbmcnO1xuaW1wb3J0IEhVRCBmcm9tICcuLi9wcmVmYWJzL2h1ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlQYW5nIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5iZyA9IHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCwgMjAwMCwgMjM4MCwgJ3BhbmdCZycpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcblxuXG4gICAgICAgIC8vIC0tLS0tLS0gUExBWUVSXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IDAuOTIgKiB0aGlzLmdhbWUud29ybGQuaGVpZ2h0LFxuICAgICAgICAgICAgaGVhbHRoOiAxMCxcbiAgICAgICAgICAgIGFzc2V0OiAnc21hbGxmaWdodGVyJyxcbiAgICAgICAgICAgIGZyYW1lOiAyXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wbGF5ZXIpO1xuICAgICAgICB0aGlzLnBsYXllclNob290VGltZSA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCA9IDAuMTY7XG5cbiAgICAgICAgLy8gLS0tLS0tLSBFTkVNWTogdGhpcyBvbmVzIGFyZSBjcmVhdGVkIGV2ZXJ5IHVwZGF0ZSB0aWNrXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbmVteVRpbWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vMS41XG4gICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCA9IDIuNTtcbiAgICAgICAgdGhpcy5lbmVteVNob290VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdEludGVydmFsID0gMTtcbiAgICAgICAgLy8gLS0tLS0tLSAhRU5FTVlcblxuICAgICAgICAvLyAtLS0tLS0tIHNtYWxsZXJFTkVNWTogdGhpcyBvbmVzIGFyZSBjcmVhdGVkIGV2ZXJ5IHVwZGF0ZSB0aWNrXG4gICAgICAgIHRoaXMuc21hbGxlckVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLnNtYWxsZXJFbmVtaWVzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICAvLyAtLS0tLS0tICFzbWFsbGVyRU5FTVlcblxuICAgICAgICAvLyAtLS0tLS0tIEVORU1ZIENMSUVOVDogcmFuZG9tbHkgY2hvc2VuXG4gICAgICAgIHRoaXMuZW5lbWllc0NsaWVudCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllc0NsaWVudC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgLy8xLjVcbiAgICAgICAgdGhpcy5lbmVteUNsaWVudEludGVydmFsID0gMi41O1xuICAgICAgICB0aGlzLmVuZW15Q2xpZW50U2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmVteUNsaWVudFNob290SW50ZXJ2YWwgPSAxO1xuICAgICAgICAgICAgLy9pbml0aWFsaXplIGZpcnN0IGNsaWVudFxuICAgICAgICB0aGlzLmNyZWF0ZUVuZW15Q2xpZW50KHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNiwgNzYpICogMTAsXG4gICAgICAgICAgICAvLzBcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTAgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vOVxuICAgICAgICAgICAgaGVhbHRoOiA5MCxcbiAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYWxpZW5zJyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIC0tLS0tLS0gIUVORU1ZIENMSUVOVDogcmFuZG9tbHkgY2hvc2VuXG5cbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmxvb3AoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDEwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmVuZW15SW50ZXJ2YWwgPiAwLjIgKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgLT0gMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAgPSB0aGlzLmFkZC5iaXRtYXBEYXRhKHRoaXMuZ2FtZS53aWR0aCwgdGhpcy5nYW1lLmhlaWdodCk7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZ2FtZS53aWR0aCwgdGhpcy5nYW1lLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5ID0gdGhpcy5hZGQuc3ByaXRlKDAsIDAsIHRoaXMub3ZlcmxheUJpdG1hcCk7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hbHBoYSA9IDAuNzU7XG5cbiAgICAgICAgdGhpcy5odWQgPSBuZXcgSFVEKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHBsYXllcjogdGhpcy5wbGF5ZXJcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyAtLS0tLS0tIFNPVU5EU1xuICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdwbGF5TXVzaWMnKTtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdidWxsZXRIaXQnKTtcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2VuZW15RXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgncGxheWVyRXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdnYW1lT3ZlcicpO1xuXG4gICAgICAgIC8vdGhpcy5tdXNpYy5sb29wRnVsbCgpO1xuXG5cblxuICAgICAgICAvL0RlZmF1bHRzXG4gICAgICAgIC8vdGhpcy5lbmVteVRpbWUgPSAwO1xuICAgICAgICAvL3RoaXMuZW5lbXlJbnRlcnZhbCA9IDEuNTtcbiAgICAgICAgLy90aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgLy90aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIC8vdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAvL3RoaXMucGxheWVyU2hvb3RJbnRlcnZhbCA9IDAuMTY7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZW5lbXlUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuICAgICAgICB0aGlzLnBsYXllclNob290VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy5lbmVteVRpbWUgPiB0aGlzLmVuZW15SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUaW1lID0gMDtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteSh7XG4gICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNiwgNzYpICogMTAsXG4gICAgICAgICAgICAgICAgLy8wXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDUsIDEwKSAqIDEwICogKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDUsIDEwKSAqIDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLzlcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDksXG4gICAgICAgICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgICAgIGFzc2V0OiAnYWxpZW4nLFxuICAgICAgICAgICAgICAgIHNpemU6IDIuNVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuZW15U2hvb3RUaW1lID4gdGhpcy5lbmVteVNob290SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIYXMgbXVlcnRvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyU2hvb3RUaW1lID4gdGhpcy5wbGF5ZXJTaG9vdEludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNob290VGltZSA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvb3RLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5TUEFDRUJBUik7XG4gICAgICAgICAgICAgICAgaWYoc2hvb3RLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvb3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllci5idWxsZXRzLCB0aGlzLmVuZW1pZXMsIHRoaXMuaGl0RW5lbXksIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLCB0aGlzLmVuZW1pZXMsIHRoaXMuY3Jhc2hFbmVteSwgbnVsbCwgdGhpcyk7XG5cblxuICAgICAgICAvLyB0aGlzLmJnLnRpbGVQb3NpdGlvbi54ICs9IDM7XG4gICAgfVxuXG4gICAgY3JlYXRlRW5lbXkoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllcy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGxldCB0b3RhbEVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbEVuZW1pZXMpO1xuXG4gICAgICAgIGlmICghZW5lbXkpIHtcbiAgICAgICAgICAgIGVuZW15ID0gbmV3IEVuZW15KGRhdGEpO1xuICAgICAgICAgICAgaWYodG90YWxFbmVtaWVzIDwgMyl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLmFkZChlbmVteSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTbWFsbGVyRW5lbXkoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuc21hbGxlckVuZW1pZXMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuICAgICAgICBsZXQgdG90YWxFbmVtaWVzID0gdGhpcy5zbWFsbGVyRW5lbWllcy5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICBpZih0b3RhbEVuZW1pZXMgPCAxMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zbWFsbGVyRW5lbWllcy5hZGQoZW5lbXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZW5lbXkucmVzZXQoZGF0YSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRW5lbXlDbGllbnQoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllc0NsaWVudC5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGxldCB0b3RhbEVuZW1pZXMgPSB0aGlzLmVuZW1pZXNDbGllbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbEVuZW1pZXMpO1xuXG4gICAgICAgIGlmICghZW5lbXkpIHtcbiAgICAgICAgICAgIGVuZW15ID0gbmV3IEVuZW15KGRhdGEpO1xuICAgICAgICAgICAgaWYodG90YWxFbmVtaWVzIDw9IDEpe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllc0NsaWVudC5hZGQoZW5lbXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZW5lbXkucmVzZXQoZGF0YSk7XG4gICAgfVxuXG4gICAgaGl0RWZmZWN0KG9iaiwgY29sb3IpIHtcbiAgICAgICAgbGV0IHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2VlbihvYmopO1xuICAgICAgICBsZXQgZW1pdHRlciA9IHRoaXMuZ2FtZS5hZGQuZW1pdHRlcigpO1xuICAgICAgICBsZXQgZW1pdHRlclBoeXNpY3NUaW1lID0gMDtcbiAgICAgICAgbGV0IHBhcnRpY2xlU3BlZWQgPSAxMDA7XG4gICAgICAgIGxldCBtYXhQYXJ0aWNsZXMgPSAxMDtcblxuICAgICAgICB0d2Vlbi50byh7dGludDogMHhmZjAwMDB9LCAxMDApO1xuICAgICAgICB0d2Vlbi5vbkNvbXBsZXRlLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICBvYmoudGludCA9IDB4ZmZmZmZmO1xuICAgICAgICB9KTtcbiAgICAgICAgdHdlZW4uc3RhcnQoKTtcblxuICAgICAgICBlbWl0dGVyLnggPSBvYmoueDtcbiAgICAgICAgZW1pdHRlci55ID0gb2JqLnk7XG4gICAgICAgIGVtaXR0ZXIuZ3Jhdml0eSA9IDA7XG4gICAgICAgIGVtaXR0ZXIubWFrZVBhcnRpY2xlcygncGFydGljbGUnKTtcblxuICAgICAgICBpZiAob2JqLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICBwYXJ0aWNsZVNwZWVkID0gMjAwO1xuICAgICAgICAgICAgbWF4UGFydGljbGVzID0gNDA7XG4gICAgICAgICAgICBjb2xvciA9IDB4ZmYwMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZW1pdHRlci5taW5QYXJ0aWNsZVNwZWVkLnNldFRvKC1wYXJ0aWNsZVNwZWVkLCAtcGFydGljbGVTcGVlZCk7XG4gICAgICAgIGVtaXR0ZXIubWF4UGFydGljbGVTcGVlZC5zZXRUbyhwYXJ0aWNsZVNwZWVkLCBwYXJ0aWNsZVNwZWVkKTtcbiAgICAgICAgZW1pdHRlci5zdGFydCh0cnVlLCA1MDAsIG51bGwsIG1heFBhcnRpY2xlcyk7XG4gICAgICAgIGVtaXR0ZXIudXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgZW1pdHRlclBoeXNpY3NUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuICAgICAgICAgICAgaWYoZW1pdHRlclBoeXNpY3NUaW1lID49IDAuNil7XG4gICAgICAgICAgICAgICAgZW1pdHRlclBoeXNpY3NUaW1lID0gMDtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuICAgICAgICBlbWl0dGVyLmZvckVhY2gocGFydGljbGUgPT4gcGFydGljbGUudGludCA9IGNvbG9yKTtcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpdEVuZW15KGJ1bGxldCwgZW5lbXkpIHtcblxuICAgICAgICB0aGlzLmJ1bGxldEhpdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgIGVuZW15LmRhbWFnZShidWxsZXQuaGVhbHRoKTtcbiAgICAgICAgLy9lbmVteS54ID0gZW5lbXkueCsyMDtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QoZW5lbXksIGJ1bGxldC50aW50KTtcbiAgICAgICAgaWYgKCFlbmVteS5hbGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICB0aGlzLmh1ZC51cGRhdGVTY29yZShlbmVteS5tYXhIZWFsdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZW5lbXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NSRUEgVU5PIScpO1xuXG4gICAgICAgICAgICBzd2l0Y2goZW5lbXkuc2l6ZSl7XG4gICAgICAgICAgICAgICAgLy9MYXJnZSAtPiBNZWRpdW1cbiAgICAgICAgICAgICAgICBjYXNlIDIuNTpcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU21hbGxlckVuZW15KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGVuZW15LngsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzBcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTAgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vOVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhbHRoOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6ICdhbGllbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxLjVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNtYWxsZXJFbmVteSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlbmVteS54LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8wXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlbmVteS55LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKC00NSwgNDUpICogMTAgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogKHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoLTIwLCAtNTApICogMTAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vOVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhbHRoOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6ICdhbGllbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxLjVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vTWVkaXVtIC0+IFNtYWxsXG4gICAgICAgICAgICAgICAgLy8gY2FzZSAxLjU6XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY3JlYXRlU21hbGxlckVuZW15KHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHg6IGVuZW15LngsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLzBcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHk6IGVuZW15LnksXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTAgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vOVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaGVhbHRoOiA5LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXNzZXQ6ICdhbGllbicsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzaXplOiAwLjVcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICAgIGJ1bGxldC5raWxsKCk7XG4gICAgfVxuXG4gICAgLy8gaGl0UGxheWVyKHBsYXllciwgYnVsbGV0KSB7XG4gICAgLy8gICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAvLyAgICAgcGxheWVyLmRhbWFnZShidWxsZXQuaGVhbHRoKTtcbiAgICAvLyAgICAgdGhpcy5odWQudXBkYXRlSGVhbHRoKCk7XG4gICAgLy8gICAgIHRoaXMuaGl0RWZmZWN0KHBsYXllciwgYnVsbGV0LnRpbnQpO1xuICAgIC8vICAgICBpZiAoIXBsYXllci5hbGl2ZSkge1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZC5wbGF5KCk7XG4gICAgLy8gICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgYnVsbGV0LmtpbGwoKTtcbiAgICAvLyB9XG5cbiAgICBjcmFzaEVuZW15KHBsYXllciwgZW5lbXkpIHtcbiAgICAgICAgLy9lbmVteS5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgZW5lbXkuZGFtYWdlKDMpO1xuICAgICAgICAvL3BsYXllci5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgcGxheWVyLmRhbWFnZSgxKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QocGxheWVyKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QoZW5lbXkpO1xuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIHRoaXMuaHVkLnVwZGF0ZVNjb3JlKGVuZW15Lm1heEhlYWx0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5odWQudXBkYXRlSGVhbHRoKCk7XG4gICAgICAgIGlmICghcGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAzO1xuICAgICAgICB0aGlzLm92ZXJsYXkudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIGxldCB0aW1lciA9IHRoaXMuZ2FtZS50aW1lLmNyZWF0ZSh0aGlzLmdhbWUsIHRydWUpO1xuICAgICAgICB0aW1lci5hZGQoMzAwMCwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQYW5nT3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcblxuICAgICAgICB0aGlzLmxvYWRlckJnID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ2xvYWRlckJnJyk7XG4gICAgICAgIHRoaXMubG9hZGVyQmFyID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ2xvYWRlckJhcicpO1xuICAgICAgICB0aGlzLmxvYWRlckJnLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLmxvYWRlckJhci5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmxvYWRlckJhcik7XG4gICAgICAgIC8vZ2FtZSAxXG4gICAgICAgIHRoaXMubG9hZC5hdGxhc0pTT05BcnJheSgnc21hbGxmaWdodGVyJywgJ2ltZy9zcHJpdGVzaGVldC9zbWFsbGZpZ2h0ZXIucG5nJywgJ2RhdGEvc3ByaXRlc2hlZXQvc21hbGxmaWdodGVyLmpzb24nKTtcbiAgICAgICAgdGhpcy5sb2FkLmF0bGFzSlNPTkFycmF5KCdhbGllbicsICdpbWcvc3ByaXRlc2hlZXQvYWxpZW4ucG5nJywgJ2RhdGEvc3ByaXRlc2hlZXQvYWxpZW4uanNvbicpO1xuICAgICAgICB0aGlzLmxvYWQuYXRsYXNKU09OQXJyYXkoJ2J1dHRvbicsICdpbWcvc3ByaXRlc2hlZXQvYnV0dG9uLnBuZycsICdkYXRhL3Nwcml0ZXNoZWV0L2J1dHRvbi5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmFyYmFjaycsICdpbWcvZmFyYmFjay5qcGcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnaW1nL2J1bGxldC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwYXJ0aWNsZScsICdpbWcvcGFydGljbGUuZ2lmJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaGVhbHRoYmFyJywgJ2ltZy9oZWFsdGhiYXIucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaHVkQmcnLCAnaW1nL2h1ZC1iZy5wbmcnKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXlNdXNpYycsIFsnYXVkaW8vbXVzaWMvcGxheS5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudU11c2ljJywgWydhdWRpby9tdXNpYy9tZW51Lm1wMyddKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVPdmVyJywgWydhdWRpby9zb3VuZC9tZW51LW92ZXIubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVPdXQnLCBbJ2F1ZGlvL3NvdW5kL21lbnUtb3V0Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtZW51RG93bicsIFsnYXVkaW8vc291bmQvbWVudS1jbGljay5tcDMnXSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdidWxsZXRIaXQnLCBbJ2F1ZGlvL3NvdW5kL2J1bGxldC1oaXQubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2VuZW15U2hvdCcsIFsnYXVkaW8vc291bmQvZW5lbXktc2hvdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZW5lbXlFeHBsb3Npb24nLCBbJ2F1ZGlvL3NvdW5kL2VuZW15LWV4cGxvc2lvbi5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyU2hvdCcsIFsnYXVkaW8vc291bmQvcGxheWVyLXNob3QubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXllckV4cGxvc2lvbicsIFsnYXVkaW8vc291bmQvcGxheWVyLWV4cGxvc2lvbi5tcDMnXSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdnYW1lT3ZlcicsIFsnYXVkaW8vc291bmQvZ2FtZS1vdmVyLm1wMyddKTtcbiAgICAgICAgLy8hZ2FtZSAxXG4gICAgICAgIC8vZ2FtZSAyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFuZ0JnJywgJ2ltZy9wYW5nQmcucG5nJyk7XG5cbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICB9XG5cbn1cbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKemNtTXZhbk12WlhoMFpXNXphVzl1Y3k5MFpYaDBZblYwZEc5dUxtcHpJaXdpYzNKakwycHpMMmRoYldVdWFuTWlMQ0p6Y21NdmFuTXZjSEpsWm1GaWN5OWlkV3hzWlhRdWFuTWlMQ0p6Y21NdmFuTXZjSEpsWm1GaWN5OWxibVZ0ZVM1cWN5SXNJbk55WXk5cWN5OXdjbVZtWVdKekwyVnVaVzE1VUdGdVp5NXFjeUlzSW5OeVl5OXFjeTl3Y21WbVlXSnpMMmgxWkM1cWN5SXNJbk55WXk5cWN5OXdjbVZtWVdKekwzQnNZWGxsY2k1cWN5SXNJbk55WXk5cWN5OXpkR0YwWlhNdlltOXZkQzVxY3lJc0luTnlZeTlxY3k5emRHRjBaWE12YVc1a1pYZ3Vhbk1pTENKemNtTXZhbk12YzNSaGRHVnpMMjFsYm5VdWFuTWlMQ0p6Y21NdmFuTXZjM1JoZEdWekwyOTJaWEl1YW5NaUxDSnpjbU12YW5NdmMzUmhkR1Z6TDNCaGJtZFBkbVZ5TG1weklpd2ljM0pqTDJwekwzTjBZWFJsY3k5d2JHRjVMbXB6SWl3aWMzSmpMMnB6TDNOMFlYUmxjeTl3YkdGNVVHRnVaeTVxY3lJc0luTnlZeTlxY3k5emRHRjBaWE12Y0hKbGJHOWhaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096czdPenRKUTBGeFFpeFZPenM3UVVGRmFrSXNPRUpCUVhGSU8wRkJRVUVzV1VGQmRrY3NTVUZCZFVjc1VVRkJka2NzU1VGQmRVYzdRVUZCUVN4WlFVRnFSeXhEUVVGcFJ5eFJRVUZxUnl4RFFVRnBSenRCUVVGQkxGbEJRVGxHTEVOQlFUaEdMRkZCUVRsR0xFTkJRVGhHTzBGQlFVRXNXVUZCTTBZc1MwRkJNa1lzVVVGQk0wWXNTMEZCTWtZN1FVRkJRU3haUVVGd1JpeFJRVUZ2Uml4UlFVRndSaXhSUVVGdlJqdEJRVUZCTEZsQlFURkZMR1ZCUVRCRkxGRkJRVEZGTEdWQlFUQkZPMEZCUVVFc1dVRkJla1FzVTBGQmVVUXNVVUZCZWtRc1UwRkJlVVE3UVVGQlFTeFpRVUU1UXl4UlFVRTRReXhSUVVFNVF5eFJRVUU0UXp0QlFVRkJMRmxCUVhCRExGTkJRVzlETEZGQlFYQkRMRk5CUVc5RE8wRkJRVUVzV1VGQmVrSXNUMEZCZVVJc1VVRkJla0lzVDBGQmVVSTdRVUZCUVN4WlFVRm9RaXhMUVVGblFpeFJRVUZvUWl4TFFVRm5RanRCUVVGQkxGbEJRVlFzUzBGQlV5eFJRVUZVTEV0QlFWTTdPMEZCUVVFN08wRkJRVUVzTkVoQlF6TkhMRWxCUkRKSExFVkJRM0pITEVOQlJIRkhMRVZCUTJ4SExFTkJSR3RITEVWQlF5OUdMRXRCUkN0R0xFVkJRM2hHTEZGQlJIZEdMRVZCUXpsRkxHVkJSRGhGTEVWQlF6ZEVMRk5CUkRaRUxFVkJRMnhFTEZGQlJHdEVMRVZCUTNoRExGTkJSSGRETEVWQlF6ZENMRTlCUkRaQ096dEJRVWRxU0N4alFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGYUxFTkJRV3RDTEVkQlFXeENPenRCUVVWQkxHTkJRVXNzUzBGQlRDeEhRVUZoTEV0QlFXSTdRVUZEUVN4alFVRkxMRXRCUVV3c1IwRkJZU3hMUVVGaU8wRkJRMEVzWTBGQlN5eEpRVUZNTEVkQlFWa3NTVUZCU1N4UFFVRlBMRWxCUVZnc1EwRkJaMElzVFVGQlN5eEpRVUZ5UWl4RlFVRXlRaXhEUVVFelFpeEZRVUU0UWl4RFFVRTVRaXhGUVVGcFF5eE5RVUZMTEV0QlFYUkRMRVZCUVRaRExFMUJRVXNzUzBGQmJFUXNRMEZCV2p0QlFVTkJMR05CUVVzc1NVRkJUQ3hEUVVGVkxFMUJRVllzUTBGQmFVSXNTMEZCYWtJc1EwRkJkVUlzUjBGQmRrSTdPMEZCUlVFc1kwRkJTeXhSUVVGTUxFTkJRV01zVFVGQlN5eEpRVUZ1UWpzN1FVRldhVWc3UVVGWmNFZzdPenRGUVdSdFF5eFBRVUZQTEUwN08ydENRVUV4UWl4Vk96czdPenRCUTBGeVFqczdTVUZCV1N4Tk96czdPMEZCUTFvc1NVRkJUU3hQUVVGUExFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRWRCUVdoQ0xFVkJRWEZDTEVsQlFYSkNMRVZCUVRKQ0xFOUJRVThzU1VGQmJFTXNRMEZCWWpzN1FVRkZRU3hQUVVGUExFbEJRVkFzUTBGQldTeE5RVUZhTEVWQlFXOUNMRTlCUVhCQ0xFTkJRVFJDTzBGQlFVRXNVMEZCVXl4TFFVRkxMRXRCUVV3c1EwRkJWeXhIUVVGWUxFTkJRV1VzUzBGQlppeEZRVUZ6UWl4UFFVRlBMRXRCUVZBc1EwRkJkRUlzUTBGQlZEdEJRVUZCTEVOQlFUVkNPenRCUVVWQkxFdEJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCYVVJc1RVRkJha0k3T3pzN096czdPenM3T3pzN096dEpRMHh4UWl4Tk96czdRVUZGYWtJc01FSkJRVFJFTzBGQlFVRXNXVUZCT1VNc1NVRkJPRU1zVVVGQk9VTXNTVUZCT0VNN1FVRkJRU3haUVVGNFF5eERRVUYzUXl4UlFVRjRReXhEUVVGM1F6dEJRVUZCTEZsQlFYSkRMRU5CUVhGRExGRkJRWEpETEVOQlFYRkRPMEZCUVVFc1dVRkJiRU1zUzBGQmEwTXNVVUZCYkVNc1MwRkJhME03UVVGQlFTeFpRVUV6UWl4TlFVRXlRaXhSUVVFelFpeE5RVUV5UWp0QlFVRkJMRFpDUVVGdVFpeEpRVUZ0UWp0QlFVRkJMRmxCUVc1Q0xFbEJRVzFDTERaQ1FVRmFMRkZCUVZrN08wRkJRVUU3TzBGQlFVRXNiMGhCUTJ4RUxFbEJSR3RFTEVWQlF6VkRMRU5CUkRSRExFVkJRM3BETEVOQlJIbERMRVZCUTNSRExFdEJSSE5ET3p0QlFVZDRSQ3hqUVVGTExFMUJRVXdzUTBGQldTeExRVUZhTEVOQlFXdENMRWRCUVd4Q08wRkJRMEVzWTBGQlN5eExRVUZNTEVOQlFWY3NTMEZCV0N4RFFVRnBRaXhIUVVGcVFqdEJRVU5CTEdOQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVdRN1FVRkRRU3hqUVVGTExFbEJRVXdzUjBGQldTeEpRVUZhTzBGQlEwRXNZMEZCU3l4blFrRkJUQ3hIUVVGM1FpeEpRVUY0UWp0QlFVTkJMR05CUVVzc1pVRkJUQ3hIUVVGMVFpeEpRVUYyUWp0QlFWSjNSRHRCUVZNelJEczdPMFZCV0N0Q0xFOUJRVThzVFRzN2EwSkJRWFJDTEUwN096czdPenM3T3pzN096czdRVU5CY2tJN096czdPenM3T3pzN096dEpRVVZ4UWl4TE96czdRVUZGYWtJc2VVSkJRU3RFTzBGQlFVRXNXVUZCYWtRc1NVRkJhVVFzVVVGQmFrUXNTVUZCYVVRN1FVRkJRU3haUVVFelF5eERRVUV5UXl4UlFVRXpReXhEUVVFeVF6dEJRVUZCTEZsQlFYaERMRU5CUVhkRExGRkJRWGhETEVOQlFYZERPMEZCUVVFc1dVRkJja01zUzBGQmNVTXNVVUZCY2tNc1MwRkJjVU03UVVGQlFTeFpRVUU1UWl4TFFVRTRRaXhSUVVFNVFpeExRVUU0UWp0QlFVRkJMRmxCUVhaQ0xFMUJRWFZDTEZGQlFYWkNMRTFCUVhWQ08wRkJRVUVzV1VGQlppeFhRVUZsTEZGQlFXWXNWMEZCWlRzN1FVRkJRVHM3UVVGQlFTeHJTRUZEY2tRc1NVRkVjVVFzUlVGREwwTXNRMEZFSzBNc1JVRkROVU1zUTBGRU5FTXNSVUZEZWtNc1MwRkVlVU1zUlVGRGJFTXNTMEZFYTBNN08wRkJSek5FTEdOQlFVc3NTVUZCVEN4SFFVRlpMRWxCUVZvN08wRkJSVUVzWTBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRnJRaXhIUVVGc1FqdEJRVU5CTEdOQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzUjBGQmFrSTdRVUZEUVN4alFVRkxMRTFCUVV3c1IwRkJZeXhOUVVGa08wRkJRMEVzWTBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVdwQ08wRkJRMEVzWTBGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhOUVVGc1FpeERRVUY1UWl4TlFVRjZRanM3UVVGRlFTeGpRVUZMTEZWQlFVd3NRMEZCWjBJc1IwRkJhRUlzUTBGQmIwSXNWVUZCY0VJc1JVRkJaME1zUTBGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2l4RlFVRlBMRU5CUVZBc1JVRkJWU3hEUVVGV0xFVkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhGUVVGdFFpeERRVUZ1UWl4RlFVRnpRaXhEUVVGMFFpeEZRVUY1UWl4RFFVRjZRaXhGUVVFMFFpeERRVUUxUWl4RlFVRXJRaXhGUVVFdlFpeEZRVUZ0UXl4RlFVRnVReXhGUVVGMVF5eEZRVUYyUXl4RlFVRXlReXhGUVVFelF5eEZRVUVyUXl4RlFVRXZReXhEUVVGb1F5eEZRVUZ2Uml4RlFVRndSaXhGUVVGM1JpeEpRVUY0Ump0QlFVTkJMR05CUVVzc1NVRkJUQ3hEUVVGVkxGVkJRVlk3TzBGQlJVRXNZMEZCU3l4UFFVRk1MRWRCUVdVc1RVRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEV0QlFXUXNSVUZCWmp0QlFVTkJMR05CUVVzc1QwRkJUQ3hEUVVGaExGVkJRV0lzUjBGQk1FSXNTVUZCTVVJN1FVRkRRU3hqUVVGTExGZEJRVXdzUjBGQmJVSXNWMEZCYmtJN08wRkJSVUVzWTBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eExRVUZrTEVOQlFXOUNMRmRCUVhCQ0xFTkJRV3BDT3p0QlFXeENNa1E3UVVGdlFqbEVPenM3TzJsRFFVVlJPenRCUVVWTUxHZENRVUZKTEV0QlFVc3NVVUZCVEN4RFFVRmpMRU5CUVdRc1IwRkJhMElzVDBGQlR5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRVGRETEVWQlFXOUVPMEZCUTJoRUxIRkNRVUZMTEZGQlFVd3NRMEZCWXl4RFFVRmtMRWRCUVd0Q0xFOUJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhMUVVGMlFpeEhRVUVyUWl4RFFVRnFSRHRCUVVOQkxIRkNRVUZMTEVsQlFVd3NRMEZCVlN4UlFVRldMRU5CUVcxQ0xFTkJRVzVDTEVsQlFYZENMRU5CUVVNc1EwRkJla0k3UVVGRFNDeGhRVWhFTEUxQlNVc3NTVUZCU1N4TFFVRkxMRkZCUVV3c1EwRkJZeXhEUVVGa0xFZEJRV3RDTEU5QlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUUzUXl4RlFVRnZSRHRCUVVOeVJDeHhRa0ZCU3l4UlFVRk1MRU5CUVdNc1EwRkJaQ3hIUVVGclFpeFBRVUZQTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQmRrSXNSMEZCSzBJc1EwRkJha1E3UVVGRFFTeHhRa0ZCU3l4SlFVRk1MRU5CUVZVc1VVRkJWaXhEUVVGdFFpeERRVUZ1UWl4SlFVRjNRaXhEUVVGRExFTkJRWHBDTzBGQlEwZzdPMEZCUlVRc1owSkJRVWtzUzBGQlN5eFJRVUZNTEVOQlFXTXNRMEZCWkN4SFFVRnJRaXhMUVVGTExFMUJRVXdzUjBGQll5eERRVUZvUXl4SFFVRnZReXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTFCUVhoRUxFVkJRV2RGTzBGQlF6VkVMSEZDUVVGTExFbEJRVXc3UVVGRFNEdEJRVU5LT3pzN1owTkJSVTg3TzBGQlJVb3NhVUpCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUTBGQmIwSXNSVUZCY0VJc1JVRkJkVUlzUTBGQmRrSXNSVUZCZVVJc1IwRkJla0k3TzBGQlJVRXNaMEpCUVVrc1UwRkJVeXhMUVVGTExFOUJRVXdzUTBGQllTeGpRVUZpTEVOQlFUUkNMRXRCUVRWQ0xFTkJRV0k3TzBGQlJVRXNaMEpCUVVrc1EwRkJReXhOUVVGTUxFVkJRV0U3UVVGRFZDeDVRa0ZCVXl4eFFrRkJWenRCUVVOb1Fpd3dRa0ZCVFN4TFFVRkxMRWxCUkVzN1FVRkZhRUlzZFVKQlFVY3NTMEZCU3l4RFFVWlJPMEZCUjJoQ0xIVkNRVUZITEV0QlFVc3NUVUZJVVR0QlFVbG9RaXcwUWtGQlVTeERRVXBSTzBGQlMyaENMREpDUVVGUExGRkJURk03UVVGTmFFSXNNRUpCUVUwN1FVRk9WU3hwUWtGQldDeERRVUZVTzBGQlVVRXNjVUpCUVVzc1QwRkJUQ3hEUVVGaExFZEJRV0lzUTBGQmFVSXNUVUZCYWtJN1FVRkRTQ3hoUVZaRUxFMUJWMHM3UVVGRFJDeDFRa0ZCVHl4TFFVRlFMRU5CUVdFc1MwRkJTeXhEUVVGc1FpeEZRVUZ4UWl4TFFVRkxMRTFCUVRGQ0xFVkJRV3RETEVOQlFXeERPMEZCUTBnN08wRkJSVVFzYlVKQlFVOHNTVUZCVUN4RFFVRlpMRkZCUVZvc1EwRkJjVUlzUTBGQmNrSXNSMEZCZVVJc1MwRkJTeXhYUVVFNVFqdEJRVU5JT3pzN0swSkJSVTBzVFN4RlFVRlJPMEZCUTFnc2FVaEJRV0VzVFVGQllqdEJRVU5JT3pzN2NVTkJSVEpETzBGQlFVRXNaMEpCUVhCRExFTkJRVzlETEZOQlFYQkRMRU5CUVc5RE8wRkJRVUVzWjBKQlFXcERMRU5CUVdsRExGTkJRV3BETEVOQlFXbERPMEZCUVVFc1owSkJRVGxDTEUxQlFUaENMRk5CUVRsQ0xFMUJRVGhDTzBGQlFVRXNaMEpCUVhSQ0xGZEJRWE5DTEZOQlFYUkNMRmRCUVhOQ08wRkJRVUVzWjBKQlFWUXNTMEZCVXl4VFFVRlVMRXRCUVZNN08wRkJRM2hETEdkSVFVRlpMRU5CUVZvc1JVRkJaU3hEUVVGbUxFVkJRV3RDTEUxQlFXeENPMEZCUTBFc2FVSkJRVXNzVjBGQlRDeEhRVUZ0UWl4WFFVRnVRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UlFVRldMRU5CUVcxQ0xFTkJRVzVDTEVkQlFYVkNMRTFCUVUwc1EwRkJOMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1VVRkJWaXhEUVVGdFFpeERRVUZ1UWl4SFFVRjFRaXhOUVVGTkxFTkJRVGRDTzBGQlEwZzdPenM3UlVGNlJUaENMRTlCUVU4c1RUczdhMEpCUVhKQ0xFczdPenM3T3pzN096czdPenM3UVVOR2NrSTdPenM3T3pzN096czdPenRKUVVWeFFpeExPenM3UVVGRmFrSXNlVUpCUVc5Rk8wRkJRVUVzV1VGQmRFUXNTVUZCYzBRc1VVRkJkRVFzU1VGQmMwUTdRVUZCUVN4WlFVRm9SQ3hEUVVGblJDeFJRVUZvUkN4RFFVRm5SRHRCUVVGQkxGbEJRVGRETEVOQlFUWkRMRkZCUVRkRExFTkJRVFpETzBGQlFVRXNXVUZCTVVNc1MwRkJNRU1zVVVGQk1VTXNTMEZCTUVNN1FVRkJRU3haUVVGdVF5eExRVUZ0UXl4UlFVRnVReXhMUVVGdFF6dEJRVUZCTEZsQlFUVkNMRTFCUVRSQ0xGRkJRVFZDTEUxQlFUUkNPMEZCUVVFc1dVRkJjRUlzVjBGQmIwSXNVVUZCY0VJc1YwRkJiMEk3UVVGQlFTeFpRVUZTTEVsQlFWRXNVVUZCVWl4SlFVRlJPenRCUVVGQk96dEJRVUZCTEd0SVFVTXhSQ3hKUVVRd1JDeEZRVU53UkN4RFFVUnZSQ3hGUVVOcVJDeERRVVJwUkN4RlFVTTVReXhMUVVRNFF5eEZRVU4yUXl4TFFVUjFRenM3UVVGSGFFVXNZMEZCU3l4SlFVRk1MRWRCUVZrc1NVRkJXanM3UVVGRlFTeGpRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRmFMRU5CUVd0Q0xFZEJRV3hDT3p0QlFVVkJPMEZCUTBrN1FVRkRTaXhqUVVGTExFbEJRVXdzUjBGQldTeEpRVUZhTzBGQlEwRXNXVUZCU1N4VFFVRlRMRk5CUVdJc1JVRkJkMEk3UVVGRGNFSXNiVUpCUVU4c1IwRkJVRHRCUVVOSU8wRkJRMFFzWTBGQlN5eExRVUZNTEVOQlFWY3NTMEZCV0N4RFFVRnBRaXhKUVVGcVFqdEJRVU5CTEdOQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVdRN1FVRkRRU3hqUVVGTExGTkJRVXdzUjBGQmFVSXNUVUZCYWtJN08wRkJSMEU3UVVGRFFTeGpRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFMUJRV3hDTEVOQlFYbENMRTFCUVhwQ08wRkJRMEVzWTBGQlN5eEpRVUZNTEVOQlFWVXNhMEpCUVZZc1IwRkJLMElzU1VGQkwwSTdRVUZEUVN4alFVRkxMRWxCUVV3c1EwRkJWU3hQUVVGV0xFTkJRV3RDTEVOQlFXeENMRWRCUVhOQ0xFZEJRWFJDTzBGQlEwRXNZMEZCU3l4SlFVRk1MRU5CUVZVc1RVRkJWaXhEUVVGcFFpeEhRVUZxUWl4RFFVRnhRaXhEUVVGeVFqczdRVUZGUVN4alFVRkxMRlZCUVV3c1EwRkJaMElzUjBGQmFFSXNRMEZCYjBJc1ZVRkJjRUlzUlVGQlowTXNRMEZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTaXhGUVVGUExFTkJRVkFzUlVGQlZTeERRVUZXTEVWQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeEZRVUZ0UWl4RFFVRnVRaXhGUVVGelFpeERRVUYwUWl4RlFVRjVRaXhEUVVGNlFpeEZRVUUwUWl4RFFVRTFRaXhGUVVFclFpeEZRVUV2UWl4RlFVRnRReXhGUVVGdVF5eEZRVUYxUXl4RlFVRjJReXhGUVVFeVF5eEZRVUV6UXl4RlFVRXJReXhGUVVFdlF5eERRVUZvUXl4RlFVRnZSaXhGUVVGd1JpeEZRVUYzUml4SlFVRjRSanRCUVVOQkxHTkJRVXNzU1VGQlRDeERRVUZWTEZWQlFWWTdPMEZCUlVFc1kwRkJTeXhQUVVGTUxFZEJRV1VzVFVGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1JVRkJaanRCUVVOQkxHTkJRVXNzVDBGQlRDeERRVUZoTEZWQlFXSXNSMEZCTUVJc1NVRkJNVUk3UVVGRFFTeGpRVUZMTEZkQlFVd3NSMEZCYlVJc1YwRkJia0k3TzBGQlJVRXNZMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4TFFVRmtMRU5CUVc5Q0xGZEJRWEJDTEVOQlFXcENPenRCUVM5Q1owVTdRVUZwUTI1Rk96czdPMmxEUVVWUk96dEJRVVZNTEdkQ1FVRkpMRXRCUVVzc1VVRkJUQ3hEUVVGakxFTkJRV1FzUjBGQmEwSXNUMEZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFUZERMRVZCUVc5RU8wRkJRMmhFTEhGQ1FVRkxMRkZCUVV3c1EwRkJZeXhEUVVGa0xFZEJRV3RDTEU5QlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUYyUWl4SFFVRXJRaXhEUVVGcVJEdEJRVU5CTEhGQ1FVRkxMRWxCUVV3c1EwRkJWU3hSUVVGV0xFTkJRVzFDTEVOQlFXNUNMRWxCUVhkQ0xFTkJRVU1zUTBGQmVrSTdRVUZEU0N4aFFVaEVMRTFCU1Vzc1NVRkJTU3hMUVVGTExGRkJRVXdzUTBGQll5eERRVUZrTEVkQlFXdENMRTlCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TFFVRTNReXhGUVVGdlJEdEJRVU55UkN4eFFrRkJTeXhSUVVGTUxFTkJRV01zUTBGQlpDeEhRVUZyUWl4UFFVRlBMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCZGtJc1IwRkJLMElzUTBGQmFrUTdRVUZEUVN4eFFrRkJTeXhKUVVGTUxFTkJRVlVzVVVGQlZpeERRVUZ0UWl4RFFVRnVRaXhKUVVGM1FpeERRVUZETEVOQlFYcENPMEZCUTBnN08wRkJSVVFzWjBKQlFVa3NTMEZCU3l4UlFVRk1MRU5CUVdNc1EwRkJaQ3hIUVVGclFpeExRVUZMTEUxQlFVd3NSMEZCWXl4RFFVRm9ReXhIUVVGdlF5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFMUJRWGhFTEVWQlFXZEZPMEZCUXpWRUxIRkNRVUZMTEVsQlFVdzdRVUZEU0R0QlFVTktPenM3SzBKQlNVMHNUU3hGUVVGUk8wRkJRMWdzYVVoQlFXRXNUVUZCWWp0QlFVTklPenM3Y1VOQlJUSkRPMEZCUVVFc1owSkJRWEJETEVOQlFXOURMRk5CUVhCRExFTkJRVzlETzBGQlFVRXNaMEpCUVdwRExFTkJRV2xETEZOQlFXcERMRU5CUVdsRE8wRkJRVUVzWjBKQlFUbENMRTFCUVRoQ0xGTkJRVGxDTEUxQlFUaENPMEZCUVVFc1owSkJRWFJDTEZkQlFYTkNMRk5CUVhSQ0xGZEJRWE5DTzBGQlFVRXNaMEpCUVZRc1MwRkJVeXhUUVVGVUxFdEJRVk03TzBGQlEzaERMR2RJUVVGWkxFTkJRVm9zUlVGQlpTeERRVUZtTEVWQlFXdENMRTFCUVd4Q08wRkJRMEVzYVVKQlFVc3NWMEZCVEN4SFFVRnRRaXhYUVVGdVFqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hSUVVGV0xFTkJRVzFDTEVOQlFXNUNMRWRCUVhWQ0xFMUJRVTBzUTBGQk4wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzVVVGQlZpeERRVUZ0UWl4RFFVRnVRaXhIUVVGMVFpeE5RVUZOTEVOQlFUZENPMEZCUTBnN096czdSVUZvUlRoQ0xFOUJRVThzVFRzN2EwSkJRWEpDTEVzN096czdPenM3T3pzN08wRkRSbkpDT3pzN096czdPenM3T3pzN1NVRkRjVUlzUnpzN08wRkJRMnBDTEhWQ1FVRTRRanRCUVVGQkxGbEJRV2hDTEVsQlFXZENMRkZCUVdoQ0xFbEJRV2RDTzBGQlFVRXNXVUZCVml4TlFVRlZMRkZCUVZZc1RVRkJWVHM3UVVGQlFUczdRVUZCUVN3NFIwRkRjRUlzU1VGRWIwSTdPMEZCUlRGQ0xHTkJRVXNzU1VGQlRDeEhRVUZaTEVsQlFWbzdRVUZEUVN4alFVRkxMRTFCUVV3c1IwRkJZeXhOUVVGa08wRkJRMEVzWTBGQlN5eEZRVUZNTEVkQlFWVXNTVUZCU1N4UFFVRlBMRXRCUVZnc1EwRkJhVUlzVFVGQlN5eEpRVUYwUWl4RlFVRTBRaXhEUVVFMVFpeEZRVUVyUWl4RFFVRXZRaXhGUVVGclF5eFBRVUZzUXl4RFFVRldPMEZCUTBFc1kwRkJTeXhMUVVGTUxFZEJRV0VzUjBGQllqdEJRVU5CTEdOQlFVc3NVMEZCVEN4SFFVRnBRaXhKUVVGSkxFOUJRVThzVFVGQldDeERRVUZyUWl4TlFVRkxMRWxCUVhaQ0xFVkJRVFpDTEVOQlFUZENMRVZCUVdkRExFTkJRV2hETEVWQlFXMURMRmRCUVc1RExFTkJRV3BDTzBGQlEwRXNZMEZCU3l4VFFVRk1MRU5CUVdVc1MwRkJaaXhEUVVGeFFpeExRVUZ5UWl4RFFVRXlRaXhMUVVFelFpeEZRVUZyUXl4RlFVRnNRenM3UVVGRlFTeGpRVUZMTEV0QlFVd3NSMEZCWVN4RFFVRmlPMEZCUTBFc1kwRkJTeXhWUVVGTUxFZEJRV3RDTEZOQlFXeENPMEZCUTBFc1kwRkJTeXhUUVVGTUxFZEJRV2xDTEVsQlFVa3NUMEZCVHl4SlFVRllMRU5CUVdkQ0xFMUJRVXNzU1VGQmNrSXNSVUZCTWtJc1JVRkJNMElzUlVGQkswSXNSVUZCTDBJc1JVRkJiVU1zVFVGQlN5eFZRVUZNTEVkQlFXdENMRTFCUVVzc1MwRkJNVVFzUlVGQmFVVTdRVUZET1VVc2EwSkJRVTBzWTBGRWQwVTdRVUZGT1VVc2EwSkJRVTBzVDBGR2QwVTdRVUZIT1VVc2JVSkJRVTg3TzBGQlNIVkZMRk5CUVdwRkxFTkJRV3BDT3p0QlFVOUJMR05CUVVzc1IwRkJUQ3hEUVVGVExFMUJRVXNzUlVGQlpEdEJRVU5CTEdOQlFVc3NSMEZCVEN4RFFVRlRMRTFCUVVzc1UwRkJaRHRCUVVOQkxHTkJRVXNzUjBGQlRDeERRVUZUTEUxQlFVc3NVMEZCWkR0QlFYQkNNRUk3UVVGeFFqZENPenM3TzNGRFFVVlpMRTBzUlVGQlVUdEJRVU5xUWl4cFFrRkJTeXhUUVVGTUxFTkJRV1VzU1VGQlppeERRVUZ2UWl4SlFVRkpMRTlCUVU4c1UwRkJXQ3hEUVVGeFFpeERRVUZ5UWl4RlFVRjNRaXhEUVVGNFFpeEZRVUUwUWl4TFFVRkxMRTFCUVV3c1EwRkJXU3hOUVVGYUxFZEJRWEZDTEV0QlFVc3NUVUZCVEN4RFFVRlpMRk5CUVd4RExFZEJRU3RETEV0QlFVc3NTMEZCTDBVc1JVRkJjMFlzUlVGQmRFWXNRMEZCY0VJN1FVRkRRU3hwUWtGQlN5eFRRVUZNTEVOQlFXVXNWVUZCWmp0QlFVTklPenM3YjBOQlJWY3NUU3hGUVVGUk8wRkJRMmhDTEdsQ1FVRkxMRXRCUVV3c1NVRkJZeXhOUVVGa08wRkJRMEVzYVVKQlFVc3NVMEZCVEN4RFFVRmxMRWxCUVdZc1IwRkJjMElzUzBGQlN5eFZRVUZNTEVkQlFXMUNMRXRCUVVzc1MwRkJUQ3hIUVVGaExFVkJRWFJFTzBGQlEwZzdPenM3UlVGb1F6UkNMRTlCUVU4c1N6czdhMEpCUVc1Q0xFYzdRVUZyUTNCQ096czdPenM3T3pzN096czdPMEZEYmtORU96czdPenM3T3pzN096czdTVUZGY1VJc1RUczdPMEZCUldwQ0xEQkNRVUZyUkR0QlFVRkJMRmxCUVhCRExFbEJRVzlETEZGQlFYQkRMRWxCUVc5RE8wRkJRVUVzV1VGQk9VSXNRMEZCT0VJc1VVRkJPVUlzUTBGQk9FSTdRVUZCUVN4WlFVRXpRaXhEUVVFeVFpeFJRVUV6UWl4RFFVRXlRanRCUVVGQkxGbEJRWGhDTEV0QlFYZENMRkZCUVhoQ0xFdEJRWGRDTzBGQlFVRXNXVUZCYWtJc1MwRkJhVUlzVVVGQmFrSXNTMEZCYVVJN1FVRkJRU3haUVVGV0xFMUJRVlVzVVVGQlZpeE5RVUZWT3p0QlFVRkJPenRCUVVGQkxHOUlRVU40UXl4SlFVUjNReXhGUVVOc1F5eERRVVJyUXl4RlFVTXZRaXhEUVVRclFpeEZRVU0xUWl4TFFVUTBRaXhGUVVOeVFpeExRVVJ4UWpzN1FVRkhPVU1zWTBGQlN5eEpRVUZNTEVkQlFWa3NTVUZCV2pzN1FVRkZRU3hqUVVGTExFMUJRVXdzUTBGQldTeExRVUZhTEVOQlFXdENMRWRCUVd4Q08wRkJRMEVzWTBGQlN5eExRVUZNTEVOQlFWY3NTMEZCV0N4RFFVRnBRaXhIUVVGcVFqczdRVUZGUVN4alFVRkxMRTFCUVV3c1IwRkJZeXhOUVVGa08wRkJRMEVzWTBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVdwQ096dEJRVWxCTEdOQlFVc3NTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkJhMElzVFVGQmJFSXNRMEZCZVVJc1RVRkJla0k3UVVGRFFUdEJRVU5CTEdOQlFVc3NTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1IwRkJkRUk3UVVGRFFTeGpRVUZMTEVsQlFVd3NRMEZCVlN4clFrRkJWaXhIUVVFclFpeEpRVUV2UWp0QlFVTkJPenRCUVVWQkxHTkJRVXNzVDBGQlRDeEhRVUZsTEUxQlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhMUVVGa0xFVkJRV1k3UVVGRFFTeGpRVUZMTEU5QlFVd3NRMEZCWVN4VlFVRmlMRWRCUVRCQ0xFbEJRVEZDTzBGQlEwRXNZMEZCU3l4WFFVRk1MRWRCUVcxQ0xFTkJRVU1zUjBGQmNFSTdPMEZCUlVFc1kwRkJTeXhUUVVGTUxFZEJRV2xDTEUxQlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhMUVVGa0xFTkJRVzlDTEZsQlFYQkNMRU5CUVdwQ08wRkJka0k0UXp0QlFYZENha1E3T3pzN2FVTkJSVkU3TzBGQlJVdzdPenRCUVVsQk96dEJRVVZKTEdkQ1FVRkpMRlZCUVZVc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UlFVRm9RaXhEUVVGNVFpeE5RVUY2UWl4RFFVRm5ReXhQUVVGUExGRkJRVkFzUTBGQlowSXNTVUZCYUVRc1EwRkJaRHRCUVVOQkxHZENRVUZKTEZkQlFWY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RFFVRjVRaXhOUVVGNlFpeERRVUZuUXl4UFFVRlBMRkZCUVZBc1EwRkJaMElzUzBGQmFFUXNRMEZCWmp0QlFVTkJMR2RDUVVGSExFOUJRVWdzUlVGQlZ6dEJRVU5RTEhGQ1FVRkxMRU5CUVV3c1NVRkJWU3hEUVVGV08wRkJSVWdzWVVGSVJDeE5RVWxMTEVsQlFVY3NVVUZCU0N4RlFVRlpPMEZCUTJJc2NVSkJRVXNzUTBGQlRDeEpRVUZWTEVOQlFWWTdRVUZGU0R0QlFVVlNPenM3WjBOQlJVODdPMEZCUlVvc1owSkJRVWtzVTBGQlV5eExRVUZMTEU5QlFVd3NRMEZCWVN4alFVRmlMRU5CUVRSQ0xFdEJRVFZDTEVOQlFXSTdPMEZCUlVFc1owSkJRVWtzUTBGQlF5eE5RVUZNTEVWQlFXRTdRVUZEVkN4NVFrRkJVeXh4UWtGQlZ6dEJRVU5vUWl3d1FrRkJUU3hMUVVGTExFbEJSRXM3UVVGRmFFSXNkVUpCUVVjc1MwRkJTeXhEUVVaUk8wRkJSMmhDTEhWQ1FVRkhMRXRCUVVzc1IwRklVVHRCUVVsb1FpdzBRa0ZCVVN4RFFVcFJPMEZCUzJoQ0xESkNRVUZQTEZGQlRGTTdRVUZOYUVJc01FSkJRVTA3UVVGT1ZTeHBRa0ZCV0N4RFFVRlVPMEZCVVVFN1FVRkRRU3h2UWtGQlJ5eExRVUZMTEU5QlFVd3NRMEZCWVN4UlFVRmlMRU5CUVhOQ0xFMUJRWFJDTEVsQlFXZERMRU5CUVc1RExFVkJRWEZETzBGQlEycERMSGxDUVVGTExGTkJRVXdzUTBGQlpTeEpRVUZtTEVOQlFXOUNMRVZCUVhCQ0xFVkJRWFZDTEVOQlFYWkNMRVZCUVhsQ0xFZEJRWHBDTzBGQlEwRXNlVUpCUVVzc1QwRkJUQ3hEUVVGaExFZEJRV0lzUTBGQmFVSXNUVUZCYWtJN1FVRkRRU3d5UWtGQlR5eEpRVUZRTEVOQlFWa3NVVUZCV2l4RFFVRnhRaXhEUVVGeVFpeEhRVUY1UWl4TFFVRkxMRmRCUVRsQ08wRkJRMGc3UVVGRFNpeGhRV1pFTEUxQlowSkxPMEZCUTBRc2NVSkJRVXNzVTBGQlRDeERRVUZsTEVsQlFXWXNRMEZCYjBJc1JVRkJjRUlzUlVGQmRVSXNRMEZCZGtJc1JVRkJlVUlzUjBGQmVrSTdRVUZEUVN4MVFrRkJUeXhMUVVGUUxFTkJRV0VzUzBGQlN5eERRVUZzUWl4RlFVRnhRaXhMUVVGTExFZEJRVEZDTEVWQlFTdENMRU5CUVM5Q08wRkJRMEVzZFVKQlFVOHNTVUZCVUN4RFFVRlpMRkZCUVZvc1EwRkJjVUlzUTBGQmNrSXNSMEZCZVVJc1MwRkJTeXhYUVVFNVFqdEJRVU5JTzBGQlIwbzdPenNyUWtGRlRTeE5MRVZCUVZFN1FVRkRXQ3h0U0VGQllTeE5RVUZpTzBGQlEwZzdPenM3UlVGb1JpdENMRTlCUVU4c1RUczdhMEpCUVhSQ0xFMDdPenM3T3pzN096czdPenM3T3pzN08wbERSa0VzU1RzN096czdPenM3T3pzN2EwTkJSVkE3UVVGRFRpeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeGxRVUZvUWl4SFFVRnJReXhOUVVGc1F6dEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZWQlFXaENMRVZCUVRSQ0xHMUNRVUUxUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRmRCUVdoQ0xFVkJRVFpDTEc5Q1FVRTNRanRCUVVOSU96czdhVU5CUlZFN1FVRkRUQ3hwUWtGQlN5eExRVUZNTEVOQlFWY3NVMEZCV0N4SFFVRjFRaXhQUVVGUExGbEJRVkFzUTBGQmIwSXNVVUZCTTBNN08wRkJSVUVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMSEZDUVVGWUxFZEJRVzFETEVsQlFXNURPMEZCUTBFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEcxQ1FVRllMRWRCUVdsRExFbEJRV3BET3p0QlFVVkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFBRVUZXTEVOQlFXdENMRmRCUVd4Q0xFTkJRVGhDTEU5QlFVOHNUMEZCVUN4RFFVRmxMRTFCUVRkRE8wRkJRMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVTBGQmFrSTdRVUZEU0RzN096dEZRV2hDTmtJc1QwRkJUeXhMT3p0clFrRkJjRUlzU1RzN096czdPenM3T3pzN096czdlVU5EUVdJc1R6czdPenM3T3pzN096UkRRVU5CTEU4N096czdPenM3T3p0NVEwRkRRU3hQT3pzN096czdPenM3ZVVOQlJVRXNUenM3T3pzN096czdPM2xEUVVOQkxFODdPenM3T3pzN096czJRMEZIUVN4UE96czdPenM3T3pzN05rTkJRMEVzVHpzN096czdPenM3T3pzN096czdPMEZEVkZJN096czdPenM3T3pzN096dEpRVVZ4UWl4Sk96czdPenM3T3pzN096dHBRMEZGVWp0QlFVRkJPenRCUVVWT096dEJRVVZETEdsQ1FVRkxMRXRCUVV3c1IwRkJZU3hKUVVGSkxFOUJRVThzU1VGQldDeERRVUZuUWl4TFFVRkxMRWxCUVhKQ0xFVkJRVEpDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQk0wTXNSVUZCYjBRc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhIUVVGM1FpeEhRVUUxUlN4RlFVRnBSaXhqUVVGcVJpeEZRVUZwUnp0QlFVTXhSeXh6UWtGQlRTeGhRVVJ2Unp0QlFVVXhSeXh6UWtGQlRTeFBRVVp2Unp0QlFVY3hSeXgxUWtGQlR6dEJRVWh0Unl4aFFVRnFSeXhEUVVGaU8wRkJTMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRTFCUVZnc1EwRkJhMElzUzBGQmJFSXNRMEZCZDBJc1IwRkJlRUk3TzBGQlJVRXNhVUpCUVVzc1MwRkJUQ3hIUVVGaExIbENRVUZsTzBGQlEzaENMSE5DUVVGTkxFdEJRVXNzU1VGRVlUdEJRVVY0UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUmtzN1FVRkhlRUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVWhMTzBGQlNYaENMSFZDUVVGUExGRkJTbWxDTzBGQlMzaENMREpDUVVGWExFTkJUR0U3UVVGTmVFSXNNRUpCUVZVc1EwRk9ZenRCUVU5NFFpd3lRa0ZCVnl4RFFWQmhPMEZCVVhoQ0xIbENRVUZUTEVOQlVtVTdRVUZUZUVJc2RVSkJRVThzVDBGVWFVSTdRVUZWZUVJc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4alFVUklPMEZCUlVnc01FSkJRVTBzVDBGR1NEdEJRVWRJTERKQ1FVRlBPMEZCU0VvN1FVRldhVUlzWVVGQlppeERRVUZpT3p0QlFXbENRU3hwUWtGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYQkNPMEZCUTBFc2FVSkJRVXNzVjBGQlRDeEhRVUZ0UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVTBGQlppeERRVUZ1UWp0QlFVTkJMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNFSTdPMEZCUlVFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZsQlFWZ3NRMEZCZDBJc1MwRkJTeXhaUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhYUVVGWUxFTkJRWFZDTEV0QlFVc3NWMEZCTlVJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NXVUZCV0N4RFFVRjNRaXhMUVVGTExGbEJRVGRDT3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFRRVUZZTEVOQlFYRkNMRWRCUVhKQ0xFTkJRWGxDTEZsQlFVazdRVUZEZWtJN1FVRkRRU3gxUWtGQlN5eExRVUZNTEVOQlFWY3NTMEZCV0N4RFFVRnBRaXhOUVVGcVFqdEJRVVZJTEdGQlNrUTdPMEZCVFVFc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEhsQ1FVRmxPMEZCUTNoQ0xITkNRVUZOTEV0QlFVc3NTVUZFWVR0QlFVVjRRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFUQkNMRWRCUmt3N1FVRkhlRUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVWhMTzBGQlNYaENMSFZDUVVGUExGRkJTbWxDTzBGQlMzaENMREpDUVVGWExFTkJUR0U3UVVGTmVFSXNNRUpCUVZVc1EwRk9ZenRCUVU5NFFpd3lRa0ZCVnl4RFFWQmhPMEZCVVhoQ0xIbENRVUZUTEVOQlVtVTdRVUZUZUVJc2RVSkJRVThzVVVGVWFVSTdRVUZWZUVJc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4alFVUklPMEZCUlVnc01FSkJRVTBzVDBGR1NEdEJRVWRJTERKQ1FVRlBPMEZCU0VvN1FVRldhVUlzWVVGQlppeERRVUZpT3p0QlFXbENRU3hwUWtGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYQkNPMEZCUTBFc2FVSkJRVXNzVjBGQlRDeEhRVUZ0UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVTBGQlppeERRVUZ1UWp0QlFVTkJMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNFSTdPMEZCUlVFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZsQlFWZ3NRMEZCZDBJc1MwRkJTeXhaUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhYUVVGWUxFTkJRWFZDTEV0QlFVc3NWMEZCTlVJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NXVUZCV0N4RFFVRjNRaXhMUVVGTExGbEJRVGRDT3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFRRVUZZTEVOQlFYRkNMRWRCUVhKQ0xFTkJRWGxDTEZsQlFVazdRVUZEZWtJN1FVRkRRU3gxUWtGQlN5eExRVUZNTEVOQlFWY3NTMEZCV0N4RFFVRnBRaXhWUVVGcVFqdEJRVWRJTEdGQlRFUTdPMEZCVTBFc2FVSkJRVXNzVTBGQlRDeEhRVUZwUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJRV3BDTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFZEJRV1lzUTBGQmJVSXNTMEZCU3l4TFFVRjRRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4SFFVRm1MRU5CUVcxQ0xFdEJRVXNzUzBGQmVFSTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzUjBGQlppeERRVUZ0UWl4TFFVRkxMRXRCUVhoQ096dEJRVVZCTzBGQlEwZzdPenM3UlVGd1JqWkNMRTlCUVU4c1N6czdhMEpCUVhCQ0xFazdPenM3T3pzN096czdPMEZEUm5KQ096czdPenM3T3pzN096czdTVUZGY1VJc1NUczdPenM3T3pzN096czdhVU5CUlZJN1FVRkJRVHM3UVVGRlRDeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRXRCUVVzc1NVRkJja0lzUlVGQk1rSXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUV6UXl4RlFVRnZSQ3hMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoQ0xFZEJRWGRDTEVkQlFUVkZMRVZCUVdsR0xGZEJRV3BHTEVWQlFUaEdPMEZCUXk5SExITkNRVUZOTEdGQlJIbEhPMEZCUlM5SExITkNRVUZOTEU5QlJubEhPMEZCUnk5SExIVkNRVUZQTzBGQlNIZEhMR0ZCUVRsR0xFTkJRWEpDTzBGQlMwRXNhVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeE5RVUZ1UWl4RFFVRXdRaXhMUVVFeFFpeERRVUZuUXl4SFFVRm9RenM3UVVGRlFTeHBRa0ZCU3l4TFFVRk1MRWRCUVdFc2VVSkJRV1U3UVVGRGVFSXNjMEpCUVUwc1MwRkJTeXhKUVVSaE8wRkJSWGhDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZHU3p0QlFVZDRRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJRV2hDTEVkQlFYZENMRVZCU0VnN1FVRkplRUlzZFVKQlFVOHNVVUZLYVVJN1FVRkxlRUlzTWtKQlFWY3NRMEZNWVR0QlFVMTRRaXd3UWtGQlZTeERRVTVqTzBGQlQzaENMREpDUVVGWExFTkJVR0U3UVVGUmVFSXNlVUpCUVZNc1EwRlNaVHRCUVZONFFpeDFRa0ZCVHl4WFFWUnBRanRCUVZWNFFpeDFRa0ZCVHp0QlFVTklMREJDUVVGTkxHTkJSRWc3UVVGRlNDd3dRa0ZCVFN4UFFVWklPMEZCUjBnc01rSkJRVTg3UVVGSVNqdEJRVlpwUWl4aFFVRm1MRU5CUVdJN08wRkJhVUpCTEdsQ1FVRkxMRWxCUVV3c1IwRkJXU3g1UWtGQlpUdEJRVU4yUWl4elFrRkJUU3hMUVVGTExFbEJSRms3UVVGRmRrSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVWkpPMEZCUjNaQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFSXNSMEZCZDBJc1JVRklTanRCUVVsMlFpeDFRa0ZCVHl4UlFVcG5RanRCUVV0MlFpd3lRa0ZCVnl4RFFVeFpPMEZCVFhaQ0xEQkNRVUZWTEVOQlRtRTdRVUZQZGtJc01rSkJRVmNzUTBGUVdUdEJRVkYyUWl4NVFrRkJVeXhEUVZKak8wRkJVM1pDTEhWQ1FVRlBMRTFCVkdkQ08wRkJWWFpDTEhWQ1FVRlBPMEZCUTBnc01FSkJRVTBzWTBGRVNEdEJRVVZJTERCQ1FVRk5MRTlCUmtnN1FVRkhTQ3d5UWtGQlR6dEJRVWhLTzBGQlZtZENMR0ZCUVdZc1EwRkJXanM3UVVGcFFrRXNhVUpCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGd1FqdEJRVU5CTEdsQ1FVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRk5CUVdZc1EwRkJia0k3UVVGRFFTeHBRa0ZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4VlFVRm1MRU5CUVhCQ096dEJRVVZCTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhaUVVGWUxFTkJRWGRDTEV0QlFVc3NXVUZCTjBJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NWMEZCV0N4RFFVRjFRaXhMUVVGTExGZEJRVFZDTzBGQlEwRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExGbEJRVmdzUTBGQmQwSXNTMEZCU3l4WlFVRTNRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4WlFVRldMRU5CUVhWQ0xFdEJRVXNzV1VGQk5VSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzVjBGQlZpeERRVUZ6UWl4TFFVRkxMRmRCUVROQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRmxCUVZZc1EwRkJkVUlzUzBGQlN5eFpRVUUxUWpzN1FVRkZRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NWMEZCV0N4RFFVRjFRaXhIUVVGMlFpeERRVUV5UWl4WlFVRkpPMEZCUXpOQ0xIVkNRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFMUJRV3BDTzBGQlEwZ3NZVUZHUkRzN1FVRkpRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNWMEZCVml4RFFVRnpRaXhIUVVGMFFpeERRVUV3UWl4WlFVRkpPMEZCUXpGQ0xIVkNRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVdsQ0xFMUJRV3BDTzBGQlEwZ3NZVUZHUkRzN1FVRkpRU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUlVGQmNrSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVhWQ0xFdEJRVXNzWVVGQk5VSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVhWQ0xFdEJRVXNzUzBGQk5VSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVhWQ0xFdEJRVXNzU1VGQk5VSTdRVUZEU0RzN096dEZRWEJGTmtJc1QwRkJUeXhMT3p0clFrRkJjRUlzU1RzN096czdPenM3T3pzN1FVTkdja0k3T3pzN096czdPenM3T3p0SlFVVnhRaXhST3pzN096czdPenM3T3p0cFEwRkZVanRCUVVGQk96dEJRVVZNTEdsQ1FVRkxMR0ZCUVV3c1IwRkJjVUlzU1VGQlNTeFBRVUZQTEVsQlFWZ3NRMEZCWjBJc1MwRkJTeXhKUVVGeVFpeEZRVUV5UWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFUTkRMRVZCUVc5RUxFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQmQwSXNSMEZCTlVVc1JVRkJhVVlzWjBKQlFXcEdMRVZCUVcxSE8wRkJRM0JJTEhOQ1FVRk5MR0ZCUkRoSE8wRkJSWEJJTEhOQ1FVRk5MRTlCUmpoSE8wRkJSM0JJTEhWQ1FVRlBPMEZCU0RaSExHRkJRVzVITEVOQlFYSkNPMEZCUzBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4TlFVRnVRaXhEUVVFd1FpeExRVUV4UWl4RFFVRm5ReXhIUVVGb1F6czdRVUZGUVN4cFFrRkJTeXhMUVVGTUxFZEJRV0VzZVVKQlFXVTdRVUZEZUVJc2MwSkJRVTBzUzBGQlN5eEpRVVJoTzBGQlJYaENMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkdTenRCUVVkNFFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFXaENMRWRCUVhkQ0xFVkJTRWc3UVVGSmVFSXNkVUpCUVU4c1VVRkthVUk3UVVGTGVFSXNNa0pCUVZjc1EwRk1ZVHRCUVUxNFFpd3dRa0ZCVlN4RFFVNWpPMEZCVDNoQ0xESkNRVUZYTEVOQlVHRTdRVUZSZUVJc2VVSkJRVk1zUTBGU1pUdEJRVk40UWl4MVFrRkJUeXhYUVZScFFqdEJRVlY0UWl4MVFrRkJUenRCUVVOSUxEQkNRVUZOTEdOQlJFZzdRVUZGU0N3d1FrRkJUU3hQUVVaSU8wRkJSMGdzTWtKQlFVODdRVUZJU2p0QlFWWnBRaXhoUVVGbUxFTkJRV0k3TzBGQmFVSkJMR2xDUVVGTExFbEJRVXdzUjBGQldTeDVRa0ZCWlR0QlFVTjJRaXh6UWtGQlRTeExRVUZMTEVsQlJGazdRVUZGZGtJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaSk8wRkJSM1pDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCYUVJc1IwRkJkMElzUlVGSVNqdEJRVWwyUWl4MVFrRkJUeXhSUVVwblFqdEJRVXQyUWl3eVFrRkJWeXhEUVV4Wk8wRkJUWFpDTERCQ1FVRlZMRU5CVG1FN1FVRlBka0lzTWtKQlFWY3NRMEZRV1R0QlFWRjJRaXg1UWtGQlV5eERRVkpqTzBGQlUzWkNMSFZDUVVGUExFMUJWR2RDTzBGQlZYWkNMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNZMEZFU0R0QlFVVklMREJDUVVGTkxFOUJSa2c3UVVGSFNDd3lRa0ZCVHp0QlFVaEtPMEZCVm1kQ0xHRkJRV1lzUTBGQldqczdRVUZwUWtFc2FVSkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeERRVUZ3UWp0QlFVTkJMR2xDUVVGTExGZEJRVXdzUjBGQmJVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGTkJRV1lzUTBGQmJrSTdRVUZEUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDT3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFpRVUZZTEVOQlFYZENMRXRCUVVzc1dVRkJOMEk3UVVGRFFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1YwRkJXQ3hEUVVGMVFpeExRVUZMTEZkQlFUVkNPMEZCUTBFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZsQlFWZ3NRMEZCZDBJc1MwRkJTeXhaUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3haUVVGV0xFTkJRWFZDTEV0QlFVc3NXVUZCTlVJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNWMEZCVml4RFFVRnpRaXhMUVVGTExGZEJRVE5DTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxGbEJRVllzUTBGQmRVSXNTMEZCU3l4WlFVRTFRanM3UVVGRlFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1YwRkJXQ3hEUVVGMVFpeEhRVUYyUWl4RFFVRXlRaXhaUVVGSk8wRkJRek5DTEhWQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEZWQlFXcENPMEZCUTBnc1lVRkdSRHM3UVVGSlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1YwRkJWaXhEUVVGelFpeEhRVUYwUWl4RFFVRXdRaXhaUVVGSk8wRkJRekZDTEhWQ1FVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEUxQlFXcENPMEZCUTBnc1lVRkdSRHM3UVVGSlFTeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZCY2tJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEV0QlFVc3NZVUZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEV0QlFVc3NTMEZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEV0QlFVc3NTVUZCTlVJN1FVRkRTRHM3T3p0RlFYQkZhVU1zVDBGQlR5eExPenRyUWtGQmVFSXNVVHM3T3pzN096czdPenM3UVVOR2NrSTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN096czdTVUZGY1VJc1NUczdPenM3T3pzN096czdhVU5CUlZJN1FVRkJRVHM3UVVGRFREdEJRVU5CTEdsQ1FVRkxMRTlCUVV3c1IwRkJaU3hMUVVGTExFZEJRVXdzUTBGQlV5eFZRVUZVTEVOQlFXOUNMRU5CUVhCQ0xFVkJRWFZDTEVOQlFYWkNMRVZCUVRCQ0xFZEJRVEZDTEVWQlFTdENMRWxCUVM5Q0xFVkJRWEZETEZOQlFYSkRMRU5CUVdZN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMRlZCUVdZc1IwRkJORUlzUTBGQk5VSTdPMEZCUlVFc2FVSkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJaanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4VlFVRmlMRWRCUVRCQ0xFbEJRVEZDT3p0QlFVVkJMR2xDUVVGTExFMUJRVXdzUjBGQll5eHhRa0ZCVnp0QlFVTnlRaXh6UWtGQlRTeExRVUZMTEVsQlJGVTdRVUZGY2tJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaRk8wRkJSM0pDTEcxQ1FVRkhMRTlCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVaE1PMEZCU1hKQ0xIZENRVUZSTEVkQlNtRTdRVUZMY2tJc2RVSkJRVThzWTBGTVl6dEJRVTF5UWl4MVFrRkJUenRCUVU1akxHRkJRVmdzUTBGQlpEdEJRVkZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFdEJRVXNzVFVGQk9VSTdPMEZCUlVFc2FVSkJRVXNzUjBGQlRDeEhRVUZYTEd0Q1FVRlJPMEZCUTJZc2MwSkJRVTBzUzBGQlN5eEpRVVJKTzBGQlJXWXNkMEpCUVZFc1MwRkJTenRCUVVaRkxHRkJRVklzUTBGQldEczdRVUZMUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TlFVRm9RaXhEUVVGMVFpeEhRVUYyUWl4RFFVRXlRaXhaUVVGTk8wRkJRemRDTEhWQ1FVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVlVGQlppeEhRVUUwUWl4RFFVRTFRanRCUVVOSUxHRkJSa1E3TzBGQlNVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTVUZCYUVJc1EwRkJjVUlzUjBGQmNrSXNRMEZCZVVJc1dVRkJUVHRCUVVNelFpeDFRa0ZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExGVkJRV1lzUjBGQk5FSXNRMEZCTlVJN1FVRkRTQ3hoUVVaRU96dEJRVWxCTEdsQ1FVRkxMRk5CUVV3c1IwRkJhVUlzUTBGQmFrSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEVkQlFYSkNPMEZCUTBFc2FVSkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxHbENRVUZMTEd0Q1FVRk1MRWRCUVRCQ0xFTkJRVEZDTzBGQlEwRXNhVUpCUVVzc1pVRkJUQ3hIUVVGMVFpeERRVUYyUWp0QlFVTkJMR2xDUVVGTExHMUNRVUZNTEVkQlFUSkNMRWxCUVROQ096dEJRVVZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVFVGQlppeERRVUZ6UWl4SlFVRjBRaXhEUVVFeVFpeFBRVUZQTEV0QlFWQXNRMEZCWVN4TlFVRmlMRWRCUVhOQ0xFVkJRV3BFTEVWQlFYRkVMRmxCUVUwN1FVRkRka1FzYjBKQlFVY3NUMEZCU3l4aFFVRk1MRWRCUVhGQ0xFZEJRWGhDTEVWQlFUWkNPMEZCUTNwQ0xESkNRVUZMTEdGQlFVd3NTVUZCYzBJc1IwRkJkRUk3UVVGRFNEdEJRVU5LTEdGQlNrUTdPMEZCVFVFc2FVSkJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhWUVVGVUxFTkJRVzlDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVRsQ0xFVkJRWEZETEV0QlFVc3NTVUZCVEN4RFFVRlZMRTFCUVM5RExFTkJRWEpDTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRjFRaXhUUVVGMlFpeEhRVUZ0UXl4TlFVRnVRenRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNVVUZCZGtJc1EwRkJaME1zUTBGQmFFTXNSVUZCYlVNc1EwRkJia01zUlVGQmMwTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJhRVFzUlVGQmRVUXNTMEZCU3l4SlFVRk1MRU5CUVZVc1RVRkJha1U3TzBGQlJVRXNhVUpCUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzUjBGQlRDeERRVUZUTEUxQlFWUXNRMEZCWjBJc1EwRkJhRUlzUlVGQmJVSXNRMEZCYmtJc1JVRkJjMElzUzBGQlN5eGhRVUV6UWl4RFFVRm1PMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEU5QlFXSXNSMEZCZFVJc1MwRkJka0k3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1MwRkJZaXhIUVVGeFFpeEpRVUZ5UWpzN1FVRkZSRHRCUVVORExHbENRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZkQlFXWXNRMEZCZEVJN1FVRkRRU3hwUWtGQlN5eHRRa0ZCVEN4SFFVRXlRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNaMEpCUVdZc1EwRkJNMEk3UVVGRFFTeHBRa0ZCU3l4dlFrRkJUQ3hIUVVFMFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc2FVSkJRV1lzUTBGQk5VSTdRVUZEUVN4cFFrRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEpDT3p0QlFVVkJPMEZCUTBnN096dHBRMEZGVVR0QlFVRkJPenRCUVVWTUxHbENRVUZMTEZOQlFVd3NTVUZCYTBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEdOQlFXcERPMEZCUTBFc2FVSkJRVXNzWTBGQlRDeEpRVUYxUWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzWTBGQmRFTTdRVUZEUVN4cFFrRkJTeXhsUVVGTUxFbEJRWGRDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hqUVVGMlF6czdRVUZGUVN4blFrRkJTU3hMUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4aFFVRXhRaXhGUVVGNVF6dEJRVU55UXl4eFFrRkJTeXhUUVVGTUxFZEJRV2xDTEVOQlFXcENPenRCUVVWQkxIRkNRVUZMTEZkQlFVd3NRMEZCYVVJN1FVRkRZaXd3UWtGQlRTeExRVUZMTEVsQlJFVTdRVUZGWWl4MVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF5eEZRVVkxUWp0QlFVZGlMSFZDUVVGSExFTkJTRlU3UVVGSllpd3lRa0ZCVHp0QlFVTklMREpDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFTkJRVGRDTEVWQlFXZERMRVZCUVdoRExFbEJRWE5ETEVWQlFYUkRMRWxCUVRSRExFdEJRVXNzVFVGQlRDeExRVUZuUWl4SFFVRm9RaXhIUVVGelFpeERRVUYwUWl4SFFVRXdRaXhEUVVGRExFTkJRWFpGTEVOQlJFRTdRVUZGU0N3eVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF6dEJRVVowUXl4eFFrRktUVHRCUVZGaUxEUkNRVUZSTEVOQlVrczdRVUZUWWl4cFEwRkJZU3hMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhGUVVFM1FpeEZRVUZwUXl4RlFVRnFReXhKUVVGMVF5eEZRVlIyUXp0QlFWVmlMREpDUVVGUE8wRkJWazBzYVVKQlFXcENPMEZCV1VnN08wRkJSVVFzWjBKQlFVa3NTMEZCU3l4alFVRk1MRWRCUVhOQ0xFdEJRVXNzYTBKQlFTOUNMRVZCUVcxRU8wRkJReTlETEhGQ1FVRkxMR05CUVV3c1IwRkJjMElzUTBGQmRFSTdRVUZEUVN4eFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWp0QlFVRkJMREpDUVVGVExFMUJRVTBzUzBGQlRpeEZRVUZVTzBGQlFVRXNhVUpCUVRGQ08wRkJRMEVzYjBKQlFVa3NRMEZCUXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGcVFpeEZRVUYzUWp0QlFVTndRaXg1UWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhWUVVGb1FpeERRVUV5UWl4TFFVRkxMRTlCUVdoRE8wRkJRMGc3UVVGRFNqczdRVUZGUkN4blFrRkJTU3hMUVVGTExHVkJRVXdzUjBGQmRVSXNTMEZCU3l4dFFrRkJhRU1zUlVGQmNVUTdRVUZEYWtRc2NVSkJRVXNzWlVGQlRDeEhRVUYxUWl4RFFVRjJRanRCUVVOQkxHOUNRVUZKTEV0QlFVc3NUVUZCVEN4RFFVRlpMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMSGxDUVVGTExFMUJRVXdzUTBGQldTeExRVUZhTzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhOUVVGc1FpeERRVUY1UWl4UFFVRjZRaXhEUVVGcFF5eExRVUZMTEUxQlFVd3NRMEZCV1N4UFFVRTNReXhGUVVGelJDeExRVUZMTEU5QlFUTkVMRVZCUVc5RkxFdEJRVXNzVVVGQmVrVXNSVUZCYlVZc1NVRkJia1lzUlVGQmVVWXNTVUZCZWtZN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkJhMElzVFVGQmJFSXNRMEZCZVVJc1QwRkJla0lzUTBGQmFVTXNTMEZCU3l4TlFVRjBReXhGUVVFNFF5eExRVUZMTEU5QlFXNUVMRVZCUVRSRUxFdEJRVXNzVlVGQmFrVXNSVUZCTmtVc1NVRkJOMFVzUlVGQmJVWXNTVUZCYmtZN08wRkJSVUVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRTlCUVdJc1EwRkJjVUk3UVVGQlFTeDFRa0ZCVXl4UFFVRkxMRWxCUVV3c1EwRkJWU3hQUVVGV0xFTkJRV3RDTEUxQlFXeENMRU5CUVhsQ0xFOUJRWHBDTEVOQlFXbERMRTlCUVVzc1RVRkJkRU1zUlVGQk9FTXNUVUZCVFN4UFFVRndSQ3hGUVVFMlJDeFBRVUZMTEZOQlFXeEZMRVZCUVRaRkxFbEJRVGRGTEZOQlFWUTdRVUZCUVN4aFFVRnlRanM3UVVGRlFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1dVRkJZaXhEUVVFd1FpeERRVUV4UWl4SlFVRXJRaXhEUVVFdlFqdEJRVU5JT3pzN2IwTkJSVmNzU1N4RlFVRk5PenRCUVVWa0xHZENRVUZKTEZGQlFWRXNTMEZCU3l4UFFVRk1MRU5CUVdFc1kwRkJZaXhEUVVFMFFpeExRVUUxUWl4RFFVRmFPenRCUVVWQkxHZENRVUZKTEVOQlFVTXNTMEZCVEN4RlFVRlpPMEZCUTFJc2QwSkJRVkVzYjBKQlFWVXNTVUZCVml4RFFVRlNPMEZCUTBFc2NVSkJRVXNzVDBGQlRDeERRVUZoTEVkQlFXSXNRMEZCYVVJc1MwRkJha0k3UVVGRFNEdEJRVU5FTEd0Q1FVRk5MRXRCUVU0c1EwRkJXU3hKUVVGYU8wRkJRMGc3T3p0clEwRkZVeXhITEVWQlFVc3NTeXhGUVVGUE8wRkJRVUU3TzBGQlEyeENMR2RDUVVGSkxGRkJRVkVzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1EwRkJiMElzUjBGQmNFSXNRMEZCV2p0QlFVTkJMR2RDUVVGSkxGVkJRVlVzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRTlCUVdRc1JVRkJaRHRCUVVOQkxHZENRVUZKTEhGQ1FVRnhRaXhEUVVGNlFqdEJRVU5CTEdkQ1FVRkpMR2RDUVVGblFpeEhRVUZ3UWp0QlFVTkJMR2RDUVVGSkxHVkJRV1VzUlVGQmJrSTdPMEZCUlVFc2EwSkJRVTBzUlVGQlRpeERRVUZUTEVWQlFVTXNUVUZCVFN4UlFVRlFMRVZCUVZRc1JVRkJNa0lzUjBGQk0wSTdRVUZEUVN4clFrRkJUU3hWUVVGT0xFTkJRV2xDTEVkQlFXcENMRU5CUVhGQ0xGbEJRVTA3UVVGRGRrSXNiMEpCUVVrc1NVRkJTaXhIUVVGWExGRkJRVmc3UVVGRFNDeGhRVVpFTzBGQlIwRXNhMEpCUVUwc1MwRkJUanM3UVVGRlFTeHZRa0ZCVVN4RFFVRlNMRWRCUVZrc1NVRkJTU3hEUVVGb1FqdEJRVU5CTEc5Q1FVRlJMRU5CUVZJc1IwRkJXU3hKUVVGSkxFTkJRV2hDTzBGQlEwRXNiMEpCUVZFc1QwRkJVaXhIUVVGclFpeERRVUZzUWp0QlFVTkJMRzlDUVVGUkxHRkJRVklzUTBGQmMwSXNWVUZCZEVJN08wRkJSVUVzWjBKQlFVa3NTVUZCU1N4TlFVRktMRWxCUVdNc1EwRkJiRUlzUlVGQmNVSTdRVUZEYWtJc1owTkJRV2RDTEVkQlFXaENPMEZCUTBFc0swSkJRV1VzUlVGQlpqdEJRVU5CTEhkQ1FVRlJMRkZCUVZJN1FVRkRTRHM3UVVGRlJDeHZRa0ZCVVN4blFrRkJVaXhEUVVGNVFpeExRVUY2UWl4RFFVRXJRaXhEUVVGRExHRkJRV2hETEVWQlFTdERMRU5CUVVNc1lVRkJhRVE3UVVGRFFTeHZRa0ZCVVN4blFrRkJVaXhEUVVGNVFpeExRVUY2UWl4RFFVRXJRaXhoUVVFdlFpeEZRVUU0UXl4aFFVRTVRenRCUVVOQkxHOUNRVUZSTEV0QlFWSXNRMEZCWXl4SlFVRmtMRVZCUVc5Q0xFZEJRWEJDTEVWQlFYbENMRWxCUVhwQ0xFVkJRU3RDTEZsQlFTOUNPMEZCUTBFc2IwSkJRVkVzVFVGQlVpeEhRVUZwUWl4WlFVRk5PMEZCUTI1Q0xITkRRVUZ6UWl4UFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzWTBGQmNrTTdRVUZEUVN4dlFrRkJSeXh6UWtGQmMwSXNSMEZCZWtJc1JVRkJOa0k3UVVGRGVrSXNlVU5CUVhGQ0xFTkJRWEpDTzBGQlEwRXNORUpCUVZFc1QwRkJVanRCUVVOSU8wRkJSVW9zWVVGUVJEdEJRVkZCTEc5Q1FVRlJMRTlCUVZJc1EwRkJaMEk3UVVGQlFTeDFRa0ZCV1N4VFFVRlRMRWxCUVZRc1IwRkJaMElzUzBGQk5VSTdRVUZCUVN4aFFVRm9RanRCUVVOQkxHZENRVUZKTEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJha0lzUlVGQmQwSTdRVUZEY0VJc2NVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1ZVRkJhRUlzUTBGQk1rSXNTMEZCU3l4UFFVRm9RenRCUVVOSU8wRkJRMG83T3p0cFEwRkZVU3hOTEVWQlFWRXNTeXhGUVVGUE8wRkJRM0JDTEdsQ1FVRkxMR05CUVV3c1EwRkJiMElzU1VGQmNFSXNRMEZCZVVJc1JVRkJla0lzUlVGQk5FSXNRMEZCTlVJc1JVRkJPRUlzUjBGQk9VSTdRVUZEUVN4clFrRkJUU3hOUVVGT0xFTkJRV0VzVDBGQlR5eE5RVUZ3UWp0QlFVTkJMR2xDUVVGTExGTkJRVXdzUTBGQlpTeExRVUZtTEVWQlFYTkNMRTlCUVU4c1NVRkJOMEk3UVVGRFFTeG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1MwRkJXQ3hGUVVGclFqdEJRVU5rTEhGQ1FVRkxMRzFDUVVGTUxFTkJRWGxDTEVsQlFYcENMRU5CUVRoQ0xFVkJRVGxDTEVWQlFXbERMRU5CUVdwRExFVkJRVzFETEVkQlFXNURPMEZCUTBFc2NVSkJRVXNzUjBGQlRDeERRVUZUTEZkQlFWUXNRMEZCY1VJc1RVRkJUU3hUUVVFelFqdEJRVU5JTzBGQlEwUXNiVUpCUVU4c1NVRkJVRHRCUVVOSU96czdhME5CUlZNc1RTeEZRVUZSTEUwc1JVRkJVVHRCUVVOMFFpeHBRa0ZCU3l4alFVRk1MRU5CUVc5Q0xFbEJRWEJDTEVOQlFYbENMRVZCUVhwQ0xFVkJRVFJDTEVOQlFUVkNMRVZCUVRoQ0xFZEJRVGxDTzBGQlEwRXNiVUpCUVU4c1RVRkJVQ3hEUVVGakxFOUJRVThzVFVGQmNrSTdRVUZEUVN4cFFrRkJTeXhIUVVGTUxFTkJRVk1zV1VGQlZEdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hOUVVGbUxFVkJRWFZDTEU5QlFVOHNTVUZCT1VJN1FVRkRRU3huUWtGQlNTeERRVUZETEU5QlFVOHNTMEZCV2l4RlFVRnRRanRCUVVObUxIRkNRVUZMTEc5Q1FVRk1MRU5CUVRCQ0xFbEJRVEZDTzBGQlEwRXNjVUpCUVVzc1VVRkJURHRCUVVOSU8wRkJRMFFzYlVKQlFVOHNTVUZCVUR0QlFVTklPenM3YlVOQlJWVXNUU3hGUVVGUkxFc3NSVUZCVHp0QlFVTjBRaXhyUWtGQlRTeE5RVUZPTEVOQlFXRXNUVUZCVFN4TlFVRnVRanRCUVVOQkxHMUNRVUZQTEUxQlFWQXNRMEZCWXl4TlFVRk5MRTFCUVhCQ08wRkJRMEVzYVVKQlFVc3NVMEZCVEN4RFFVRmxMRTFCUVdZN1FVRkRRU3hwUWtGQlN5eFRRVUZNTEVOQlFXVXNTMEZCWmp0QlFVTkJMR2RDUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZZTEVWQlFXdENPMEZCUTJRc2NVSkJRVXNzYlVKQlFVd3NRMEZCZVVJc1NVRkJla0lzUTBGQk9FSXNSVUZCT1VJc1JVRkJhVU1zUTBGQmFrTXNSVUZCYlVNc1IwRkJia003UVVGRFFTeHhRa0ZCU3l4SFFVRk1MRU5CUVZNc1YwRkJWQ3hEUVVGeFFpeE5RVUZOTEZOQlFUTkNPMEZCUTBnN1FVRkRSQ3hwUWtGQlN5eEhRVUZNTEVOQlFWTXNXVUZCVkR0QlFVTkJMR2RDUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZhTEVWQlFXMUNPMEZCUTJZc2NVSkJRVXNzYjBKQlFVd3NRMEZCTUVJc1NVRkJNVUk3UVVGRFFTeHhRa0ZCU3l4UlFVRk1PMEZCUTBnN1FVRkRTanM3TzIxRFFVVlRPMEZCUVVFN08wRkJRMDRzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hWUVVGbUxFZEJRVFJDTEVOQlFUVkNPMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEU5QlFXSXNSMEZCZFVJc1NVRkJka0k3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RFFVRXlRaXhMUVVGTExFOUJRV2hETzBGQlEwRXNaMEpCUVVrc1VVRkJVU3hMUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNUVUZCWml4RFFVRnpRaXhMUVVGTExFbEJRVE5DTEVWQlFXbERMRWxCUVdwRExFTkJRVm83UVVGRFFTeHJRa0ZCVFN4SFFVRk9MRU5CUVZVc1NVRkJWaXhGUVVGblFpeFpRVUZOTzBGQlEyeENMSFZDUVVGTExFdEJRVXdzUTBGQlZ5eEpRVUZZTzBGQlEwRXNkVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEpRVUZ1UWp0QlFVTkJMSFZDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRXRCUVdoQ0xFTkJRWE5DTEUxQlFYUkNPMEZCUTBnc1lVRktSRHRCUVV0QkxHdENRVUZOTEV0QlFVNDdRVUZEU0RzN096dEZRWEJPTmtJc1QwRkJUeXhMT3p0clFrRkJjRUlzU1RzN096czdPenM3T3pzN1FVTktja0k3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRmNVSXNVVHM3T3pzN096czdPenM3YVVOQlJWSTdRVUZCUVRzN1FVRkRUQ3hwUWtGQlN5eEZRVUZNTEVkQlFWVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1ZVRkJWQ3hEUVVGdlFpeERRVUZ3UWl4RlFVRjFRaXhEUVVGMlFpeEZRVUV3UWl4SlFVRXhRaXhGUVVGblF5eEpRVUZvUXl4RlFVRnpReXhSUVVGMFF5eERRVUZXTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFbEJRVllzUTBGQlpTeFZRVUZtTEVkQlFUUkNMRU5CUVRWQ096dEJRVWRCTzBGQlEwRXNhVUpCUVVzc1RVRkJUQ3hIUVVGakxIRkNRVUZYTzBGQlEzSkNMSE5DUVVGTkxFdEJRVXNzU1VGRVZUdEJRVVZ5UWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUmtVN1FVRkhja0lzYlVKQlFVY3NUMEZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEUxQlNFdzdRVUZKY2tJc2QwSkJRVkVzUlVGS1lUdEJRVXR5UWl4MVFrRkJUeXhqUVV4ak8wRkJUWEpDTEhWQ1FVRlBPMEZCVG1Nc1lVRkJXQ3hEUVVGa08wRkJVVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVVVGQmFFSXNRMEZCZVVJc1MwRkJTeXhOUVVFNVFqdEJRVU5CTEdsQ1FVRkxMR1ZCUVV3c1IwRkJkVUlzUTBGQmRrSTdRVUZEUVN4cFFrRkJTeXh0UWtGQlRDeEhRVUV5UWl4SlFVRXpRanM3UVVGRlFUdEJRVU5CTEdsQ1FVRkxMRTlCUVV3c1IwRkJaU3hMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFXWTdRVUZEUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzVlVGQllpeEhRVUV3UWl4SlFVRXhRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NSMEZCYVVJc1EwRkJha0k3UVVGRGIwSTdRVUZEY0VJc2FVSkJRVXNzWVVGQlRDeEhRVUZ4UWl4SFFVRnlRanRCUVVOQkxHbENRVUZMTEdOQlFVd3NSMEZCYzBJc1EwRkJkRUk3UVVGRFFTeHBRa0ZCU3l4clFrRkJUQ3hIUVVFd1FpeERRVUV4UWp0QlFVTkJPenRCUVVWQk8wRkJRMEVzYVVKQlFVc3NZMEZCVEN4SFFVRnpRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFYUkNPMEZCUTBFc2FVSkJRVXNzWTBGQlRDeERRVUZ2UWl4VlFVRndRaXhIUVVGcFF5eEpRVUZxUXp0QlFVTkJPenRCUVVWQk8wRkJRMEVzYVVKQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFYSkNPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeERRVUZ0UWl4VlFVRnVRaXhIUVVGblF5eEpRVUZvUXp0QlFVTkJPMEZCUTBFc2FVSkJRVXNzYlVKQlFVd3NSMEZCTWtJc1IwRkJNMEk3UVVGRFFTeHBRa0ZCU3l4dlFrRkJUQ3hIUVVFMFFpeERRVUUxUWp0QlFVTkJMR2xDUVVGTExIZENRVUZNTEVkQlFXZERMRU5CUVdoRE8wRkJRMGs3UVVGRFNpeHBRa0ZCU3l4cFFrRkJUQ3hEUVVGMVFqdEJRVU51UWl4elFrRkJUU3hMUVVGTExFbEJSRkU3UVVGRmJrSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEdOQlFXUXNRMEZCTmtJc1EwRkJOMElzUlVGQlowTXNSVUZCYUVNc1NVRkJjME1zUlVGR2RFSTdRVUZIYmtJN1FVRkRRU3h0UWtGQlJ5eERRVXBuUWp0QlFVdHVRaXgxUWtGQlR6dEJRVU5JTEhWQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eGpRVUZrTEVOQlFUWkNMRU5CUVRkQ0xFVkJRV2RETEVWQlFXaERMRWxCUVhORExFVkJRWFJETEVsQlFUUkRMRXRCUVVzc1RVRkJUQ3hMUVVGblFpeEhRVUZvUWl4SFFVRnpRaXhEUVVGMFFpeEhRVUV3UWl4RFFVRkRMRU5CUVhaRkxFTkJSRUU3UVVGRlNDeDFRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zWTBGQlpDeERRVUUyUWl4RFFVRTNRaXhGUVVGblF5eEZRVUZvUXl4SlFVRnpRenRCUVVaMFF5eHBRa0ZNV1R0QlFWTnVRanRCUVVOQkxIZENRVUZSTEVWQlZsYzdRVUZYYmtJc05rSkJRV0VzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUlVGQk4wSXNSVUZCYVVNc1JVRkJha01zU1VGQmRVTXNSVUZZYWtNN1FVRlpia0lzZFVKQlFVODdRVUZhV1N4aFFVRjJRanRCUVdOQk96dEJRVVZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVFVGQlppeERRVUZ6UWl4SlFVRjBRaXhEUVVFeVFpeFBRVUZQTEV0QlFWQXNRMEZCWVN4TlFVRmlMRWRCUVhOQ0xFVkJRV3BFTEVWQlFYRkVMRmxCUVUwN1FVRkRka1FzYjBKQlFVY3NUMEZCU3l4aFFVRk1MRWRCUVhGQ0xFZEJRWGhDTEVWQlFUWkNPMEZCUTNwQ0xESkNRVUZMTEdGQlFVd3NTVUZCYzBJc1IwRkJkRUk3UVVGRFNEdEJRVU5LTEdGQlNrUTdPMEZCVFVFc2FVSkJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhWUVVGVUxFTkJRVzlDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVRsQ0xFVkJRWEZETEV0QlFVc3NTVUZCVEN4RFFVRlZMRTFCUVM5RExFTkJRWEpDTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRjFRaXhUUVVGMlFpeEhRVUZ0UXl4TlFVRnVRenRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNVVUZCZGtJc1EwRkJaME1zUTBGQmFFTXNSVUZCYlVNc1EwRkJia01zUlVGQmMwTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJhRVFzUlVGQmRVUXNTMEZCU3l4SlFVRk1MRU5CUVZVc1RVRkJha1U3TzBGQlJVRXNhVUpCUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzUjBGQlRDeERRVUZUTEUxQlFWUXNRMEZCWjBJc1EwRkJhRUlzUlVGQmJVSXNRMEZCYmtJc1JVRkJjMElzUzBGQlN5eGhRVUV6UWl4RFFVRm1PMEZCUTBFc2FVSkJRVXNzVDBGQlRDeERRVUZoTEU5QlFXSXNSMEZCZFVJc1MwRkJka0k3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1MwRkJZaXhIUVVGeFFpeEpRVUZ5UWpzN1FVRkZRU3hwUWtGQlN5eEhRVUZNTEVkQlFWY3NhMEpCUVZFN1FVRkRaaXh6UWtGQlRTeExRVUZMTEVsQlJFazdRVUZGWml4M1FrRkJVU3hMUVVGTE8wRkJSa1VzWVVGQlVpeERRVUZZT3p0QlFVMUJPMEZCUTBRN1FVRkRReXhwUWtGQlN5eGpRVUZNTEVkQlFYTkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFhRVUZtTEVOQlFYUkNPMEZCUTBFc2FVSkJRVXNzYlVKQlFVd3NSMEZCTWtJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEdkQ1FVRm1MRU5CUVROQ08wRkJRMEVzYVVKQlFVc3NiMEpCUVV3c1IwRkJORUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMR2xDUVVGbUxFTkJRVFZDTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGeVFqczdRVUZGUVRzN08wRkJTVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRTRHM3TzJsRFFVVlJPenRCUVVWTUxHbENRVUZMTEZOQlFVd3NTVUZCYTBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEdOQlFXcERPMEZCUTBFc2FVSkJRVXNzWTBGQlRDeEpRVUYxUWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzWTBGQmRFTTdRVUZEUVN4cFFrRkJTeXhsUVVGTUxFbEJRWGRDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hqUVVGMlF6czdRVUZGUVN4blFrRkJTU3hMUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4aFFVRXhRaXhGUVVGNVF6dEJRVU55UXl4eFFrRkJTeXhUUVVGTUxFZEJRV2xDTEVOQlFXcENPenRCUVVWQkxIRkNRVUZMTEZkQlFVd3NRMEZCYVVJN1FVRkRZaXd3UWtGQlRTeExRVUZMTEVsQlJFVTdRVUZGWWl4MVFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNZMEZCWkN4RFFVRTJRaXhEUVVFM1FpeEZRVUZuUXl4RlFVRm9ReXhKUVVGelF5eEZRVVkxUWp0QlFVZGlPMEZCUTBFc2RVSkJRVWNzUTBGS1ZUdEJRVXRpTERKQ1FVRlBPMEZCUTBnc01rSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1JVRkJhRU1zU1VGQmMwTXNSVUZCZEVNc1NVRkJORU1zUzBGQlN5eE5RVUZNTEV0QlFXZENMRWRCUVdoQ0xFZEJRWE5DTEVOQlFYUkNMRWRCUVRCQ0xFTkJRVU1zUTBGQmRrVXNRMEZFUVR0QlFVVklMREpDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFTkJRVGRDTEVWQlFXZERMRVZCUVdoRExFbEJRWE5ETzBGQlJuUkRMSEZDUVV4Tk8wRkJVMkk3UVVGRFFTdzBRa0ZCVVN4RFFWWkxPMEZCVjJJc2FVTkJRV0VzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUlVGQk4wSXNSVUZCYVVNc1JVRkJha01zU1VGQmRVTXNSVUZZZGtNN1FVRlpZaXd5UWtGQlR5eFBRVnBOTzBGQllXSXNNRUpCUVUwN08wRkJZazhzYVVKQlFXcENPMEZCWjBKSU96dEJRVVZFTEdkQ1FVRkpMRXRCUVVzc1kwRkJUQ3hIUVVGelFpeExRVUZMTEd0Q1FVRXZRaXhGUVVGdFJEdEJRVU12UXl4eFFrRkJTeXhqUVVGTUxFZEJRWE5DTEVOQlFYUkNPMEZCUTBFc2IwSkJRVWtzUTBGQlF5eExRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRnFRaXhGUVVGM1FqdEJRVU53UWl4NVFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhEUVVFeVFpeExRVUZMTEU5QlFXaERPMEZCUTBFc05FSkJRVkVzUjBGQlVpeERRVUZaTEZsQlFWbzdRVUZEU0R0QlFVTktPenRCUVVWRUxHZENRVUZKTEV0QlFVc3NaVUZCVEN4SFFVRjFRaXhMUVVGTExHMUNRVUZvUXl4RlFVRnhSRHRCUVVOcVJDeHhRa0ZCU3l4bFFVRk1MRWRCUVhWQ0xFTkJRWFpDTzBGQlEwRXNiMEpCUVVrc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzZDBKQlFVa3NWMEZCVnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFMUJRWHBDTEVOQlFXZERMRTlCUVU4c1VVRkJVQ3hEUVVGblFpeFJRVUZvUkN4RFFVRm1PMEZCUTBFc2QwSkJRVWNzVVVGQlNDeEZRVUZoTzBGQlExUXNOa0pCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm83UVVGRFNEdEJRVU5LTzBGQlEwbzdPMEZCUlVRc2FVSkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1RVRkJiRUlzUTBGQmVVSXNUMEZCZWtJc1EwRkJhVU1zUzBGQlN5eE5RVUZNTEVOQlFWa3NUMEZCTjBNc1JVRkJjMFFzUzBGQlN5eFBRVUV6UkN4RlFVRnZSU3hMUVVGTExGRkJRWHBGTEVWQlFXMUdMRWxCUVc1R0xFVkJRWGxHTEVsQlFYcEdPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFMUJRV3hDTEVOQlFYbENMRTlCUVhwQ0xFTkJRV2xETEV0QlFVc3NUVUZCZEVNc1JVRkJPRU1zUzBGQlN5eFBRVUZ1UkN4RlFVRTBSQ3hMUVVGTExGVkJRV3BGTEVWQlFUWkZMRWxCUVRkRkxFVkJRVzFHTEVsQlFXNUdPenRCUVVkQk8wRkJRMGc3T3p0dlEwRkZWeXhKTEVWQlFVMDdPMEZCUldRc1owSkJRVWtzVVVGQlVTeExRVUZMTEU5QlFVd3NRMEZCWVN4alFVRmlMRU5CUVRSQ0xFdEJRVFZDTEVOQlFWbzdRVUZEUVN4blFrRkJTU3hsUVVGbExFdEJRVXNzVDBGQlRDeERRVUZoTEZGQlFXSXNRMEZCYzBJc1RVRkJla003UVVGRFFTeHZRa0ZCVVN4SFFVRlNMRU5CUVZrc1dVRkJXanM3UVVGRlFTeG5Ra0ZCU1N4RFFVRkRMRXRCUVV3c1JVRkJXVHRCUVVOU0xIZENRVUZSTEhkQ1FVRlZMRWxCUVZZc1EwRkJVanRCUVVOQkxHOUNRVUZITEdWQlFXVXNRMEZCYkVJc1JVRkJiMEk3UVVGRGFFSXNlVUpCUVVzc1QwRkJUQ3hEUVVGaExFZEJRV0lzUTBGQmFVSXNTMEZCYWtJN1FVRkRTRHRCUVVWS08wRkJRMFFzYTBKQlFVMHNTMEZCVGl4RFFVRlpMRWxCUVZvN1FVRkRTRHM3T3pKRFFVVnJRaXhKTEVWQlFVMDdPMEZCUlhKQ0xHZENRVUZKTEZGQlFWRXNTMEZCU3l4alFVRk1MRU5CUVc5Q0xHTkJRWEJDTEVOQlFXMURMRXRCUVc1RExFTkJRVm83UVVGRFFTeG5Ra0ZCU1N4bFFVRmxMRXRCUVVzc1kwRkJUQ3hEUVVGdlFpeFJRVUZ3UWl4RFFVRTJRaXhOUVVGb1JEczdRVUZGUVN4blFrRkJTU3hEUVVGRExFdEJRVXdzUlVGQldUdEJRVU5TTEhkQ1FVRlJMSGRDUVVGVkxFbEJRVllzUTBGQlVqdEJRVU5CTEc5Q1FVRkhMR1ZCUVdVc1JVRkJiRUlzUlVGQmNVSTdRVUZEYWtJc2VVSkJRVXNzWTBGQlRDeERRVUZ2UWl4SFFVRndRaXhEUVVGM1FpeExRVUY0UWp0QlFVTklPMEZCUlVvN1FVRkRSQ3hyUWtGQlRTeExRVUZPTEVOQlFWa3NTVUZCV2p0QlFVTklPenM3TUVOQlJXbENMRWtzUlVGQlRUczdRVUZGY0VJc1owSkJRVWtzVVVGQlVTeExRVUZMTEdGQlFVd3NRMEZCYlVJc1kwRkJia0lzUTBGQmEwTXNTMEZCYkVNc1EwRkJXanRCUVVOQkxHZENRVUZKTEdWQlFXVXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xGRkJRVzVDTEVOQlFUUkNMRTFCUVM5RE8wRkJRMEVzYjBKQlFWRXNSMEZCVWl4RFFVRlpMRmxCUVZvN08wRkJSVUVzWjBKQlFVa3NRMEZCUXl4TFFVRk1MRVZCUVZrN1FVRkRVaXgzUWtGQlVTeDNRa0ZCVlN4SlFVRldMRU5CUVZJN1FVRkRRU3h2UWtGQlJ5eG5Ra0ZCWjBJc1EwRkJia0lzUlVGQmNVSTdRVUZEYWtJc2VVSkJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGMVFpeExRVUYyUWp0QlFVTklPMEZCUlVvN1FVRkRSQ3hyUWtGQlRTeExRVUZPTEVOQlFWa3NTVUZCV2p0QlFVTklPenM3YTBOQlJWTXNSeXhGUVVGTExFc3NSVUZCVHp0QlFVRkJPenRCUVVOc1FpeG5Ra0ZCU1N4UlFVRlJMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eExRVUZrTEVOQlFXOUNMRWRCUVhCQ0xFTkJRVm83UVVGRFFTeG5Ra0ZCU1N4VlFVRlZMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eFBRVUZrTEVWQlFXUTdRVUZEUVN4blFrRkJTU3h4UWtGQmNVSXNRMEZCZWtJN1FVRkRRU3huUWtGQlNTeG5Ra0ZCWjBJc1IwRkJjRUk3UVVGRFFTeG5Ra0ZCU1N4bFFVRmxMRVZCUVc1Q096dEJRVVZCTEd0Q1FVRk5MRVZCUVU0c1EwRkJVeXhGUVVGRExFMUJRVTBzVVVGQlVDeEZRVUZVTEVWQlFUSkNMRWRCUVROQ08wRkJRMEVzYTBKQlFVMHNWVUZCVGl4RFFVRnBRaXhIUVVGcVFpeERRVUZ4UWl4WlFVRk5PMEZCUTNaQ0xHOUNRVUZKTEVsQlFVb3NSMEZCVnl4UlFVRllPMEZCUTBnc1lVRkdSRHRCUVVkQkxHdENRVUZOTEV0QlFVNDdPMEZCUlVFc2IwSkJRVkVzUTBGQlVpeEhRVUZaTEVsQlFVa3NRMEZCYUVJN1FVRkRRU3h2UWtGQlVTeERRVUZTTEVkQlFWa3NTVUZCU1N4RFFVRm9RanRCUVVOQkxHOUNRVUZSTEU5QlFWSXNSMEZCYTBJc1EwRkJiRUk3UVVGRFFTeHZRa0ZCVVN4aFFVRlNMRU5CUVhOQ0xGVkJRWFJDT3p0QlFVVkJMR2RDUVVGSkxFbEJRVWtzVFVGQlNpeEpRVUZqTEVOQlFXeENMRVZCUVhGQ08wRkJRMnBDTEdkRFFVRm5RaXhIUVVGb1FqdEJRVU5CTEN0Q1FVRmxMRVZCUVdZN1FVRkRRU3gzUWtGQlVTeFJRVUZTTzBGQlEwZzdPMEZCUlVRc2IwSkJRVkVzWjBKQlFWSXNRMEZCZVVJc1MwRkJla0lzUTBGQkswSXNRMEZCUXl4aFFVRm9ReXhGUVVFclF5eERRVUZETEdGQlFXaEVPMEZCUTBFc2IwSkJRVkVzWjBKQlFWSXNRMEZCZVVJc1MwRkJla0lzUTBGQkswSXNZVUZCTDBJc1JVRkJPRU1zWVVGQk9VTTdRVUZEUVN4dlFrRkJVU3hMUVVGU0xFTkJRV01zU1VGQlpDeEZRVUZ2UWl4SFFVRndRaXhGUVVGNVFpeEpRVUY2UWl4RlFVRXJRaXhaUVVFdlFqdEJRVU5CTEc5Q1FVRlJMRTFCUVZJc1IwRkJhVUlzV1VGQlRUdEJRVU51UWl4elEwRkJjMElzVDBGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMR05CUVhKRE8wRkJRMEVzYjBKQlFVY3NjMEpCUVhOQ0xFZEJRWHBDTEVWQlFUWkNPMEZCUTNwQ0xIbERRVUZ4UWl4RFFVRnlRanRCUVVOQkxEUkNRVUZSTEU5QlFWSTdRVUZEU0R0QlFVVktMR0ZCVUVRN1FVRlJRU3h2UWtGQlVTeFBRVUZTTEVOQlFXZENPMEZCUVVFc2RVSkJRVmtzVTBGQlV5eEpRVUZVTEVkQlFXZENMRXRCUVRWQ08wRkJRVUVzWVVGQmFFSTdRVUZEUVN4blFrRkJTU3hEUVVGRExFdEJRVXNzVFVGQlRDeERRVUZaTEV0QlFXcENMRVZCUVhkQ08wRkJRM0JDTEhGQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZWQlFXaENMRU5CUVRKQ0xFdEJRVXNzVDBGQmFFTTdRVUZEU0R0QlFVTktPenM3YVVOQlJWRXNUU3hGUVVGUkxFc3NSVUZCVHpzN1FVRkZjRUlzYVVKQlFVc3NZMEZCVEN4RFFVRnZRaXhKUVVGd1FpeERRVUY1UWl4RlFVRjZRaXhGUVVFMFFpeERRVUUxUWl4RlFVRTRRaXhIUVVFNVFqdEJRVU5CTEd0Q1FVRk5MRTFCUVU0c1EwRkJZU3hQUVVGUExFMUJRWEJDTzBGQlEwRTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzUzBGQlppeEZRVUZ6UWl4UFFVRlBMRWxCUVRkQ08wRkJRMEVzWjBKQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVZnc1JVRkJhMEk3UVVGRFpDeHhRa0ZCU3l4dFFrRkJUQ3hEUVVGNVFpeEpRVUY2UWl4RFFVRTRRaXhGUVVFNVFpeEZRVUZwUXl4RFFVRnFReXhGUVVGdFF5eEhRVUZ1UXp0QlFVTkJMSEZDUVVGTExFZEJRVXdzUTBGQlV5eFhRVUZVTEVOQlFYRkNMRTFCUVUwc1UwRkJNMEk3UVVGRFFTeDNRa0ZCVVN4SFFVRlNMRU5CUVZrc1MwRkJXanRCUVVOQkxIZENRVUZSTEVkQlFWSXNRMEZCV1N4WFFVRmFPenRCUVVWQkxIZENRVUZQTEUxQlFVMHNTVUZCWWp0QlFVTkpPMEZCUTBFc2VVSkJRVXNzUjBGQlREdEJRVU5GTERaQ1FVRkxMR3RDUVVGTUxFTkJRWGRDTzBGQlEyeENMR3REUVVGTkxFdEJRVXNzU1VGRVR6dEJRVVZzUWl3clFrRkJSeXhOUVVGTkxFTkJSbE03UVVGSGJFSTdRVUZEUVN3clFrRkJSeXhOUVVGTkxFTkJTbE03UVVGTGJFSXNiVU5CUVU4N1FVRkRTQ3h0UTBGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXl4RlFVRjBReXhKUVVFMFF5eExRVUZMTEUxQlFVd3NTMEZCWjBJc1IwRkJhRUlzUjBGQmMwSXNRMEZCZEVJc1IwRkJNRUlzUTBGQlF5eERRVUYyUlN4RFFVUkJPMEZCUlVnc2JVTkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1JVRkJhRU1zU1VGQmMwTTdRVUZHZEVNc05rSkJURmM3UVVGVGJFSTdRVUZEUVN4dlEwRkJVU3hEUVZaVk8wRkJWMnhDTEhsRFFVRmhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFZEJRVllzUTBGQll5eGpRVUZrTEVOQlFUWkNMRVZCUVRkQ0xFVkJRV2xETEVWQlFXcERMRWxCUVhWRExFVkJXR3hETzBGQldXeENMRzFEUVVGUExFOUJXbGM3UVVGaGJFSXNhME5CUVUwN1FVRmlXU3g1UWtGQmVFSTdRVUZsUVN3MlFrRkJTeXhyUWtGQlRDeERRVUYzUWp0QlFVTnNRaXhyUTBGQlRTeExRVUZMTEVsQlJFODdRVUZGYkVJc0swSkJRVWNzVFVGQlRTeERRVVpUTzBGQlIyeENPMEZCUTBFc0swSkJRVWNzVFVGQlRTeERRVXBUTzBGQlMyeENMRzFEUVVGUE8wRkJRMGdzYlVOQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxHTkJRV1FzUTBGQk5rSXNRMEZCUXl4RlFVRTVRaXhGUVVGclF5eEZRVUZzUXl4SlFVRjNReXhGUVVGNFF5eEpRVUU0UXl4TFFVRkxMRTFCUVV3c1MwRkJaMElzUjBGQmFFSXNSMEZCYzBJc1EwRkJkRUlzUjBGQk1FSXNRMEZCUXl4RFFVRjZSU3hEUVVSQk8wRkJSVWdzYlVOQlFVa3NTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxHTkJRV1FzUTBGQk5rSXNRMEZCUXl4RlFVRTVRaXhGUVVGclF5eERRVUZETEVWQlFXNURMRWxCUVhsRE8wRkJSakZETERaQ1FVeFhPMEZCVTJ4Q08wRkJRMEVzYjBOQlFWRXNRMEZXVlR0QlFWZHNRaXg1UTBGQllTeExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeEZRVUUzUWl4RlFVRnBReXhGUVVGcVF5eEpRVUYxUXl4RlFWaHNRenRCUVZsc1FpeHRRMEZCVHl4UFFWcFhPMEZCWVd4Q0xHdERRVUZOTzBGQllsa3NlVUpCUVhoQ08wRkJaVVU3UVVGRFNqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQmJrUktPMEZCZDBSSU8wRkJRMFFzYlVKQlFVOHNTVUZCVUR0QlFVTklPenRCUVVWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN2JVTkJSVmNzVFN4RlFVRlJMRXNzUlVGQlR6dEJRVU4wUWp0QlFVTkJMR3RDUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTzBGQlEwRTdRVUZEUVN4dFFrRkJUeXhOUVVGUUxFTkJRV01zUTBGQlpEdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hOUVVGbU8wRkJRMEVzYVVKQlFVc3NVMEZCVEN4RFFVRmxMRXRCUVdZN1FVRkRRU3huUWtGQlNTeERRVUZETEUxQlFVMHNTMEZCV0N4RlFVRnJRanRCUVVOa0xIRkNRVUZMTEcxQ1FVRk1MRU5CUVhsQ0xFbEJRWHBDTEVOQlFUaENMRVZCUVRsQ0xFVkJRV2xETEVOQlFXcERMRVZCUVcxRExFZEJRVzVETzBGQlEwRXNjVUpCUVVzc1IwRkJUQ3hEUVVGVExGZEJRVlFzUTBGQmNVSXNUVUZCVFN4VFFVRXpRanRCUVVOSU8wRkJRMFFzYVVKQlFVc3NSMEZCVEN4RFFVRlRMRmxCUVZRN1FVRkRRU3huUWtGQlNTeERRVUZETEU5QlFVOHNTMEZCV2l4RlFVRnRRanRCUVVObUxIRkNRVUZMTEc5Q1FVRk1MRU5CUVRCQ0xFbEJRVEZDTzBGQlEwRXNjVUpCUVVzc1VVRkJURHRCUVVOSU8wRkJRMG83T3p0dFEwRkZVenRCUVVGQk96dEJRVU5PTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVlVGQlppeEhRVUUwUWl4RFFVRTFRanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4UFFVRmlMRWRCUVhWQ0xFbEJRWFpDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWVUZCYUVJc1EwRkJNa0lzUzBGQlN5eFBRVUZvUXp0QlFVTkJMR2RDUVVGSkxGRkJRVkVzUzBGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMRTFCUVdZc1EwRkJjMElzUzBGQlN5eEpRVUV6UWl4RlFVRnBReXhKUVVGcVF5eERRVUZhTzBGQlEwRXNhMEpCUVUwc1IwRkJUaXhEUVVGVkxFbEJRVllzUlVGQlowSXNXVUZCVFR0QlFVTnNRanRCUVVOQkxIVkNRVUZMTEdGQlFVd3NRMEZCYlVJc1NVRkJia0k3UVVGRFFTeDFRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUZvUWl4RFFVRnpRaXhWUVVGMFFqdEJRVU5JTEdGQlNrUTdRVUZMUVN4clFrRkJUU3hMUVVGT08wRkJRMGc3T3pzN1JVRnFWMmxETEU5QlFVOHNTenM3YTBKQlFYaENMRkU3T3pzN096czdPenM3T3pzN096czdPMGxEU2tFc1R6czdPenM3T3pzN096czdhME5CUlZBN08wRkJSVTRzYVVKQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGTExFZEJRVXdzUTBGQlV5eE5RVUZVTEVOQlFXZENMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCYUVNc1JVRkJlVU1zUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGNlJDeEZRVUZyUlN4VlFVRnNSU3hEUVVGb1FqdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1IwRkJhVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNUVUZCVkN4RFFVRm5RaXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoRExFVkJRWGxETEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmVrUXNSVUZCYTBVc1YwRkJiRVVzUTBGQmFrSTdRVUZEUVN4cFFrRkJTeXhSUVVGTUxFTkJRV01zVFVGQlpDeERRVUZ4UWl4TFFVRnlRaXhEUVVFeVFpeEhRVUV6UWp0QlFVTkJMR2xDUVVGTExGTkJRVXdzUTBGQlpTeE5RVUZtTEVOQlFYTkNMRXRCUVhSQ0xFTkJRVFJDTEVkQlFUVkNPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4blFrRkJWaXhEUVVFeVFpeExRVUZMTEZOQlFXaERPMEZCUTBFN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNZMEZCVml4RFFVRjVRaXhqUVVGNlFpeEZRVUY1UXl4clEwRkJla01zUlVGQk5rVXNiME5CUVRkRk8wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMR05CUVZZc1EwRkJlVUlzVDBGQmVrSXNSVUZCYTBNc01rSkJRV3hETEVWQlFTdEVMRFpDUVVFdlJEdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hqUVVGV0xFTkJRWGxDTEZGQlFYcENMRVZCUVcxRExEUkNRVUZ1UXl4RlFVRnBSU3c0UWtGQmFrVTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VFFVRm9RaXhGUVVFeVFpeHBRa0ZCTTBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhSUVVGb1FpeEZRVUV3UWl4blFrRkJNVUk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RlFVRTBRaXhyUWtGQk5VSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4WFFVRm9RaXhGUVVFMlFpeHRRa0ZCTjBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGb1FpeEZRVUY1UWl4blFrRkJla0k3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWMEZCYUVJc1JVRkJOa0lzUTBGQlF5eHpRa0ZCUkN4RFFVRTNRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGZEJRV2hDTEVWQlFUWkNMRU5CUVVNc2MwSkJRVVFzUTBGQk4wSTdPMEZCUlVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1ZVRkJhRUlzUlVGQk5FSXNRMEZCUXl3eVFrRkJSQ3hEUVVFMVFqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZOQlFXaENMRVZCUVRKQ0xFTkJRVU1zTUVKQlFVUXNRMEZCTTBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhWUVVGb1FpeEZRVUUwUWl4RFFVRkRMRFJDUVVGRUxFTkJRVFZDT3p0QlFVVkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRmRCUVdoQ0xFVkJRVFpDTEVOQlFVTXNORUpCUVVRc1EwRkJOMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFhRVUZvUWl4RlFVRTJRaXhEUVVGRExEUkNRVUZFTEVOQlFUZENPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1owSkJRV2hDTEVWQlFXdERMRU5CUVVNc2FVTkJRVVFzUTBGQmJFTTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4WlFVRm9RaXhGUVVFNFFpeERRVUZETERaQ1FVRkVMRU5CUVRsQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzYVVKQlFXaENMRVZCUVcxRExFTkJRVU1zYTBOQlFVUXNRMEZCYmtNN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVlVGQmFFSXNSVUZCTkVJc1EwRkJReXd5UWtGQlJDeERRVUUxUWp0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhSUVVGb1FpeEZRVUV3UWl4blFrRkJNVUk3UVVGRlNEczdPMmxEUVVWUk8wRkJRMHdzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVFVGQmFrSTdRVUZEU0RzN096dEZRVEZEWjBNc1QwRkJUeXhMT3p0clFrRkJka0lzVHlJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJR1VvZEN4dUxISXBlMloxYm1OMGFXOXVJSE1vYnl4MUtYdHBaaWdoYmx0dlhTbDdhV1lvSVhSYmIxMHBlM1poY2lCaFBYUjVjR1Z2WmlCeVpYRjFhWEpsUFQxY0ltWjFibU4wYVc5dVhDSW1KbkpsY1hWcGNtVTdhV1lvSVhVbUptRXBjbVYwZFhKdUlHRW9ieXdoTUNrN2FXWW9hU2x5WlhSMWNtNGdhU2h2TENFd0tUdDJZWElnWmoxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzI4clhDSW5YQ0lwTzNSb2NtOTNJR1l1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhtZlhaaGNpQnNQVzViYjEwOWUyVjRjRzl5ZEhNNmUzMTlPM1JiYjExYk1GMHVZMkZzYkNoc0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b1pTbDdkbUZ5SUc0OWRGdHZYVnN4WFZ0bFhUdHlaWFIxY200Z2N5aHVQMjQ2WlNsOUxHd3NiQzVsZUhCdmNuUnpMR1VzZEN4dUxISXBmWEpsZEhWeWJpQnVXMjlkTG1WNGNHOXlkSE45ZG1GeUlHazlkSGx3Wlc5bUlISmxjWFZwY21VOVBWd2lablZ1WTNScGIyNWNJaVltY21WeGRXbHlaVHRtYjNJb2RtRnlJRzg5TUR0dlBISXViR1Z1WjNSb08yOHJLeWx6S0hKYmIxMHBPM0psZEhWeWJpQnpmU2tpTENKbGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlVaWGgwUW5WMGRHOXVJR1Y0ZEdWdVpITWdVR2hoYzJWeUxrSjFkSFJ2YmlCN1hHNWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaDdJR2RoYldVc0lIZ3NJSGtzSUdGemMyVjBMQ0JqWVd4c1ltRmpheXdnWTJGc2JHSmhZMnREYjI1MFpYaDBMQ0J2ZG1WeVJuSmhiV1VzSUc5MWRFWnlZVzFsTENCa2IzZHVSbkpoYldVc0lIVndSbkpoYldVc0lHeGhZbVZzTENCemRIbHNaU0I5S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0dkaGJXVXNJSGdzSUhrc0lHRnpjMlYwTENCallXeHNZbUZqYXl3Z1kyRnNiR0poWTJ0RGIyNTBaWGgwTENCdmRtVnlSbkpoYldVc0lHOTFkRVp5WVcxbExDQmtiM2R1Um5KaGJXVXNJSFZ3Um5KaGJXVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZVzVqYUc5eUxuTmxkRlJ2S0RBdU5TazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXNZV0psYkNBOUlHeGhZbVZzTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wZVd4bElEMGdjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEdWNGRDQTlJRzVsZHlCUWFHRnpaWEl1VkdWNGRDaDBhR2x6TG1kaGJXVXNJREFzSURBc0lIUm9hWE11YkdGaVpXd3NJSFJvYVhNdWMzUjViR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblJsZUhRdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aFpHUkRhR2xzWkNoMGFHbHpMblJsZUhRcE8xeHVYRzRnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUNvZ1lYTWdjM1JoZEdWeklHWnliMjBnSnk0dmMzUmhkR1Z6Snp0Y2JtTnZibk4wSUVkQlRVVWdQU0J1WlhjZ1VHaGhjMlZ5TGtkaGJXVW9PREF3TENBeE1EQXdMQ0JRYUdGelpYSXVRVlZVVHlrN1hHNWNiazlpYW1WamRDNXJaWGx6S0hOMFlYUmxjeWt1Wm05eVJXRmphQ2h6ZEdGMFpTQTlQaUJIUVUxRkxuTjBZWFJsTG1Ga1pDaHpkR0YwWlN3Z2MzUmhkR1Z6VzNOMFlYUmxYU2twTzF4dVhHNUhRVTFGTG5OMFlYUmxMbk4wWVhKMEtDZENiMjkwSnlrN1hHNGlMQ0psZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCQ2RXeHNaWFFnWlhoMFpXNWtjeUJRYUdGelpYSXVVM0J5YVhSbElIdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLSHNnWjJGdFpTd2dlQ3dnZVN3Z1lYTnpaWFFzSUdobFlXeDBhQ3dnZEdsdWRDQTlJREI0Wm1Zd01EQXdJSDBwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvWjJGdFpTd2dlQ3dnZVN3Z1lYTnpaWFFwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WVc1amFHOXlMbk5sZEZSdktEQXVOU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk5oYkdVdWMyVjBWRzhvTUM0NEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1pXRnNkR2dnUFNCb1pXRnNkR2c3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkR2x1ZENBOUlIUnBiblE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMmhsWTJ0WGIzSnNaRUp2ZFc1a2N5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNWMFQyWkNiM1Z1WkhOTGFXeHNJRDBnZEhKMVpUdGNiaUFnSUNCOVhHNTlYRzRpTENKcGJYQnZjblFnUW5Wc2JHVjBJR1p5YjIwZ0p5NHZZblZzYkdWMEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1JXNWxiWGtnWlhoMFpXNWtjeUJRYUdGelpYSXVVM0J5YVhSbElIdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLSHNnWjJGdFpTd2dlQ3dnZVN3Z1lYTnpaWFFzSUdaeVlXMWxMQ0JvWldGc2RHZ3NJR0oxYkd4bGRGTndaV1ZrSUgwcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHWnlZVzFsS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVWdQU0JuWVcxbE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOaGJHVXVjMlYwVkc4b01DNDRLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9aV0ZzZEdnZ1BTQm9aV0ZzZEdnN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldGNFNHVmhiSFJvSUQwZ2FHVmhiSFJvTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWNHaDVjMmxqY3k1aGNtTmhaR1V1Wlc1aFlteGxLSFJvYVhNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXNXBiV0YwYVc5dWN5NWhaR1FvSjNOd2FXNXVhVzVuSnl3Z1d6QXNJREVzSURJc0lETXNJRFFzSURVc0lEWXNJRGNzSURnc0lEa3NJREV3TENBeE1Td2dNVElzSURFekxDQXhORjBzSURNd0xDQjBjblZsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNUtDZHpjR2x1Ym1sdVp5Y3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMGN5QTlJSFJvYVhNdVoyRnRaUzVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUnpMbVZ1WVdKc1pVSnZaSGtnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEZOd1pXVmtJRDBnWW5Wc2JHVjBVM0JsWldRN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emFHOTBVMjkxYm1RZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG5OdmRXNWtLQ2RsYm1WdGVWTm9iM1FuS1R0Y2JseHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaU2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXdiM05wZEdsdmJpNTRJRHdnTUM0d05DQXFJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNTNhV1IwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiM05wZEdsdmJpNTRJRDBnTUM0d05DQXFJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNTNhV1IwYUNBcklESTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbUp2WkhrdWRtVnNiMk5wZEhrdWVDQXFQU0F0TVR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sSUdsbUlDaDBhR2x6TG5CdmMybDBhVzl1TG5nZ1BpQXdMamsySUNvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG5kcFpIUm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5CdmMybDBhVzl1TG5nZ1BTQXdMamsySUNvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG5kcFpIUm9JQzBnTWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzUyWld4dlkybDBlUzU0SUNvOUlDMHhPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNHOXphWFJwYjI0dWVTQXRJSFJvYVhNdWFHVnBaMmgwSUM4Z01pQStJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNW9aV2xuYUhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhMmxzYkNncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyaHZiM1FvS1NCN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emFHOTBVMjkxYm1RdWNHeGhlU2hjSWx3aUxEQXNNQzQxS1R0Y2JseHVJQ0FnSUNBZ0lDQnNaWFFnWW5Wc2JHVjBJRDBnZEdocGN5NWlkV3hzWlhSekxtZGxkRVpwY25OMFJYaHBjM1J6S0daaGJITmxLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JV0oxYkd4bGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwSUQwZ2JtVjNJRUoxYkd4bGRDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdWVDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUIwYUdsekxtSnZkSFJ2YlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1pXRnNkR2c2SURJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaWRXeHNaWFFuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhScGJuUTZJREI0Wm1Zd01EQXdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMGN5NWhaR1FvWW5Wc2JHVjBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZEM1eVpYTmxkQ2gwYUdsekxuZ3NJSFJvYVhNdVltOTBkRzl0TENBeUtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdKMWJHeGxkQzVpYjJSNUxuWmxiRzlqYVhSNUxua2dQU0IwYUdsekxtSjFiR3hsZEZOd1pXVmtPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHUmhiV0ZuWlNoaGJXOTFiblFwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1WkdGdFlXZGxLR0Z0YjNWdWRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnpaWFFvZXlCNExDQjVMQ0JvWldGc2RHZ3NJR0oxYkd4bGRGTndaV1ZrTENCemNHVmxaQ0I5S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5KbGMyVjBLSGdzSUhrc0lHaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBVM0JsWldRZ1BTQmlkV3hzWlhSVGNHVmxaRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG5abGJHOWphWFI1TG5nZ1BTQnpjR1ZsWkM1NE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KdlpIa3VkbVZzYjJOcGRIa3VlU0E5SUhOd1pXVmtMbms3WEc0Z0lDQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElFSjFiR3hsZENCbWNtOXRJQ2N1TDJKMWJHeGxkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRVZ1WlcxNUlHVjRkR1Z1WkhNZ1VHaGhjMlZ5TGxOd2NtbDBaU0I3WEc1Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2loN0lHZGhiV1VzSUhnc0lIa3NJR0Z6YzJWMExDQm1jbUZ0WlN3Z2FHVmhiSFJvTENCaWRXeHNaWFJUY0dWbFpDeHphWHBsSUgwcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHWnlZVzFsS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVWdQU0JuWVcxbE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNWNiaUFnSUNBZ0lDQWdMeTl6WTJGc1pWeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z01pNDFJRXdzSURJZ1RTd2dNQzQ0SUZOY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YVhwbElEMGdjMmw2WlR0Y2JpQWdJQ0FnSUNBZ2FXWWdLSE5wZW1VZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjMmw2WlNBOUlESXVOVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qWVd4bExuTmxkRlJ2S0hOcGVtVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUNBOUlHaGxZV3gwYUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0WVhoSVpXRnNkR2dnUFNCb1pXRnNkR2c3WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMMGR5WVhacGRIbGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExtVnVZV0pzWlNoMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG1OdmJHeHBaR1ZYYjNKc1pFSnZkVzVrY3lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1bmNtRjJhWFI1TG5rZ1BTQTFNREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1aWIzVnVZMlV1YzJWMEtERXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZVzVwYldGMGFXOXVjeTVoWkdRb0ozTndhVzV1YVc1bkp5d2dXekFzSURFc0lESXNJRE1zSURRc0lEVXNJRFlzSURjc0lEZ3NJRGtzSURFd0xDQXhNU3dnTVRJc0lERXpMQ0F4TkYwc0lETXdMQ0IwY25WbEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVLQ2R6Y0dsdWJtbHVaeWNwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBjeUE5SUhSb2FYTXVaMkZ0WlM1aFpHUXVaM0p2ZFhBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJ6TG1WdVlXSnNaVUp2WkhrZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUoxYkd4bGRGTndaV1ZrSUQwZ1luVnNiR1YwVTNCbFpXUTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXphRzkwVTI5MWJtUWdQU0IwYUdsekxtZGhiV1V1WVdSa0xuTnZkVzVrS0NkbGJtVnRlVk5vYjNRbktUdGNibHh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlNncElIdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV3YjNOcGRHbHZiaTU0SUR3Z01DNHdOQ0FxSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzUzYVdSMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3YjNOcGRHbHZiaTU0SUQwZ01DNHdOQ0FxSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzUzYVdSMGFDQXJJREk3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1KdlpIa3VkbVZzYjJOcGRIa3VlQ0FxUFNBdE1UdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElHbG1JQ2gwYUdsekxuQnZjMmwwYVc5dUxuZ2dQaUF3TGprMklDb2dkR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQnZjMmwwYVc5dUxuZ2dQU0F3TGprMklDb2dkR2hwY3k1bllXMWxMbmR2Y214a0xuZHBaSFJvSUMwZ01qdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1MlpXeHZZMmwwZVM1NElDbzlJQzB4TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjRzl6YVhScGIyNHVlU0F0SUhSb2FYTXVhR1ZwWjJoMElDOGdNaUErSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVvWldsbmFIUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YTJsc2JDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc1Y2JseHVJQ0FnSUdSaGJXRm5aU2hoYlc5MWJuUXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVaR0Z0WVdkbEtHRnRiM1Z1ZENrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WelpYUW9leUI0TENCNUxDQm9aV0ZzZEdnc0lHSjFiR3hsZEZOd1pXVmtMQ0J6Y0dWbFpDQjlLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbkpsYzJWMEtIZ3NJSGtzSUdobFlXeDBhQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMFUzQmxaV1FnUFNCaWRXeHNaWFJUY0dWbFpEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWIyUjVMblpsYkc5amFYUjVMbmdnUFNCemNHVmxaQzU0TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUp2WkhrdWRtVnNiMk5wZEhrdWVTQTlJSE53WldWa0xuazdYRzRnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUZCc1lYbGxjaUJtY205dElDY3VMaTl3Y21WbVlXSnpMM0JzWVhsbGNpYzdYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCSWRXUWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVIzSnZkWEFnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hzZ1oyRnRaU3dnY0d4aGVXVnlJSDBwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvWjJGdFpTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaU0E5SUdkaGJXVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5SUQwZ2NHeGhlV1Z5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpuSUQwZ2JtVjNJRkJvWVhObGNpNUpiV0ZuWlNoMGFHbHpMbWRoYldVc0lEQXNJREFzSUNkb2RXUkNaeWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbmRwWkhSb0lEMGdPREF3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFHSmhjaUE5SUc1bGR5QlFhR0Z6WlhJdVUzQnlhWFJsS0hSb2FYTXVaMkZ0WlN3Z01pd2dNaXdnSjJobFlXeDBhR0poY2ljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1obFlXeDBhR0poY2k1elkyRnNaUzV6WlhSVWJ5Z3dMams1TlN3Z01URXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk52Y21VZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psVEdGaVpXd2dQU0FuVTJOdmNtVTZJQ2M3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk52Y21WVVpYaDBJRDBnYm1WM0lGQm9ZWE5sY2k1VVpYaDBLSFJvYVhNdVoyRnRaU3dnTWpBc0lERTBMQ0IwYUdsekxuTmpiM0psVEdGaVpXd2dLeUIwYUdsekxuTmpiM0psTENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5NVE53ZUNCV1pYSmtZVzVoSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1pwYkd3NklDZDNhR2wwWlNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNibHh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1Ga1pDaDBhR2x6TG1KbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aFpHUW9kR2hwY3k1b1pXRnNkR2hpWVhJcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Ga1pDaDBhR2x6TG5OamIzSmxWR1Y0ZENrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZFhCa1lYUmxTR1ZoYkhSb0tIQnNZWGxsY2lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1obFlXeDBhR0poY2k1amNtOXdLRzVsZHlCUWFHRnpaWEl1VW1WamRHRnVaMnhsS0RBc0lEQXNJQ2gwYUdsekxuQnNZWGxsY2k1b1pXRnNkR2dnTHlCMGFHbHpMbkJzWVhsbGNpNXRZWGhJWldGc2RHZ3BJQ29nZEdocGN5NTNhV1IwYUN3Z01UQXBLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9aV0ZzZEdoaVlYSXVkWEJrWVhSbFEzSnZjQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFZ3WkdGMFpWTmpiM0psS0dGdGIzVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qYjNKbElDczlJR0Z0YjNWdWREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elkyOXlaVlJsZUhRdWRHVjRkQ0E5SUhSb2FYTXVjMk52Y21WTVlXSmxiQ0FySUNoMGFHbHpMbk5qYjNKbElDb2dNVEFwTzF4dUlDQWdJSDFjYmx4dWZUdGNiaUlzSW1sdGNHOXlkQ0JDZFd4c1pYUWdabkp2YlNBbkxpOWlkV3hzWlhRbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWJHRjVaWElnWlhoMFpXNWtjeUJRYUdGelpYSXVVM0J5YVhSbElIdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLSHNnWjJGdFpTd2dlQ3dnZVN3Z1lYTnpaWFFzSUdaeVlXMWxMQ0JvWldGc2RHZ2dmU2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWhuWVcxbExDQjRMQ0I1TENCaGMzTmxkQ3dnWm5KaGJXVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlNBOUlHZGhiV1U3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpZMkZzWlM1elpYUlVieWd3TGpncE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHVmhiSFJvSUQwZ2FHVmhiSFJvTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFoZUVobFlXeDBhQ0E5SUdobFlXeDBhRHRjYmx4dVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExtVnVZV0pzWlNoMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnTHk5bmNtRjJhWFI1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1bmNtRjJhWFI1TG5rZ1BTQXhNREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1amIyeHNhV1JsVjI5eWJHUkNiM1Z1WkhNZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBdkwxeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwY3lBOUlIUm9hWE11WjJGdFpTNWhaR1F1WjNKdmRYQW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSekxtVnVZV0pzWlVKdlpIa2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMWJHeGxkRk53WldWa0lEMGdMVFV3TUR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5Ob2IzUlRiM1Z1WkNBOUlIUm9hWE11WjJGdFpTNWhaR1F1YzI5MWJtUW9KM0JzWVhsbGNsTm9iM1FuS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IxY0dSaGRHVW9LU0I3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdkR2hwY3k1bllXMWxMbVJsWW5WbkxtSnZaSGtvZEdocGN5azdYRzVjYmx4dVhHNGdJQ0FnSUNBZ0lDOHZJR2xtSUNoMGFHbHpMbWRoYldVdWFXNXdkWFF1WVdOMGFYWmxVRzlwYm5SbGNpNXBjMFJ2ZDI0cElIdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR3hsWm5STFpYa2dQU0IwYUdsekxtZGhiV1V1YVc1d2RYUXVhMlY1WW05aGNtUXVhWE5FYjNkdUtGQm9ZWE5sY2k1TFpYbGliMkZ5WkM1TVJVWlVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J5YVdkb2RFdGxlU0E5SUhSb2FYTXVaMkZ0WlM1cGJuQjFkQzVyWlhsaWIyRnlaQzVwYzBSdmQyNG9VR2hoYzJWeUxrdGxlV0p2WVhKa0xsSkpSMGhVS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0d4bFpuUkxaWGtwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVlQ0F0UFNBMk8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkhObElHbG1LSEpwWjJoMFMyVjVLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuZ2dLejBnTmp0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJodmIzUW9LU0I3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR0oxYkd4bGRDQTlJSFJvYVhNdVluVnNiR1YwY3k1blpYUkdhWEp6ZEVWNGFYTjBjeWhtWVd4elpTazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmlkV3hzWlhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKMWJHeGxkQ0E5SUc1bGR5QkNkV3hzWlhRb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG5nc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1MGIzQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR1ZoYkhSb09pQXpMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZblZzYkdWMEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhVzUwT2lBd2VEQTBZekV4TWx4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJqYUdGdVoyVWdkR2hwY3lCdWRXMWlaWElnZEc4Z2MyaHZiM1FnYkdWemN5QmlkV3hzWlhSeklHRjBJR0VnZEdsdFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVpZFd4c1pYUnpMbU5vYVd4a2NtVnVMbXhsYm1kMGFDQThQU0ExS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5vYjNSVGIzVnVaQzV3YkdGNUtGd2lYQ0lzTUN3d0xqVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwY3k1aFpHUW9ZblZzYkdWMEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlkV3hzWlhRdVltOWtlUzUyWld4dlkybDBlUzU1SUQwZ2RHaHBjeTVpZFd4c1pYUlRjR1ZsWkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJodmRGTnZkVzVrTG5Cc1lYa29YQ0pjSWl3d0xEQXVOU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlkV3hzWlhRdWNtVnpaWFFvZEdocGN5NTRMQ0IwYUdsekxuUnZjQ3dnTXlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpZFd4c1pYUXVZbTlrZVM1MlpXeHZZMmwwZVM1NUlEMGdkR2hwY3k1aWRXeHNaWFJUY0dWbFpEdGNiaUFnSUNBZ0lDQWdmVnh1WEc1Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JrWVcxaFoyVW9ZVzF2ZFc1MEtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxtUmhiV0ZuWlNoaGJXOTFiblFwTzF4dUlDQWdJSDFjYmx4dWZWeHVJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FtOXZkQ0JsZUhSbGJtUnpJRkJvWVhObGNpNVRkR0YwWlNCN1hHNWNiaUFnSUNCd2NtVnNiMkZrS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjM1JoWjJVdVltRmphMmR5YjNWdVpFTnZiRzl5SUQwZ0p5TXdNREFuTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdWFXMWhaMlVvSjJ4dllXUmxja0puSnl3Z0oybHRaeTlzYjJGa1pYSXRZbWN1Y0c1bkp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25iRzloWkdWeVFtRnlKeXdnSjJsdFp5OXNiMkZrWlhJdFltRnlMbkJ1WnljcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdOeVpXRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WTJGc1pTNXpZMkZzWlUxdlpHVWdQU0JRYUdGelpYSXVVMk5oYkdWTllXNWhaMlZ5TGxOSVQxZGZRVXhNTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOaGJHVXVjR0ZuWlVGc2FXZHVTRzl5YVhwdmJuUmhiR3g1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpZMkZzWlM1d1lXZGxRV3hwWjI1V1pYSjBhV05oYkd4NUlEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjR2g1YzJsamN5NXpkR0Z5ZEZONWMzUmxiU2hRYUdGelpYSXVVR2g1YzJsamN5NUJVa05CUkVVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZFFjbVZzYjJGa0p5azdYRzRnSUNBZ2ZWeHVYRzU5WEc0aUxDSmxlSEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdRbTl2ZEgwZ1puSnZiU0FuTGk5aWIyOTBKenRjYm1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCUWNtVnNiMkZrZlNCbWNtOXRJQ2N1TDNCeVpXeHZZV1FuTzF4dVpYaHdiM0owSUh0a1pXWmhkV3gwSUdGeklFMWxiblY5SUdaeWIyMGdKeTR2YldWdWRTYzdYRzR2TDJkaGJXVXhYRzVsZUhCdmNuUWdlMlJsWm1GMWJIUWdZWE1nVUd4aGVYMGdabkp2YlNBbkxpOXdiR0Y1Snp0Y2JtVjRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QlBkbVZ5ZlNCbWNtOXRJQ2N1TDI5MlpYSW5PMXh1WEc0dkwyZGhiV1V5WEc1bGVIQnZjblFnZTJSbFptRjFiSFFnWVhNZ1VHeGhlVkJoYm1kOUlHWnliMjBnSnk0dmNHeGhlVkJoYm1jbk8xeHVaWGh3YjNKMElIdGtaV1poZFd4MElHRnpJRkJoYm1kUGRtVnlmU0JtY205dElDY3VMM0JoYm1kUGRtVnlKenRjYmx4dUx5OW5ZVzFsTTF4dUlpd2lhVzF3YjNKMElGUmxlSFJDZFhSMGIyNGdabkp2YlNBbkxpNHZaWGgwWlc1emFXOXVjeTkwWlhoMFluVjBkRzl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVFdWdWRTQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGRHRjBaU0I3WEc1Y2JpQWdJQ0JqY21WaGRHVW9LU0I3WEc1Y2JpQWdJQ0FnSUNBdkx5QjBhR2x6TG0xMWMybGpJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNWhkV1JwYnlnbmJXVnVkVTExYzJsakp5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NTBhWFJzWlNBOUlHNWxkeUJRYUdGelpYSXVWR1Y0ZENoMGFHbHpMbWRoYldVc0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZTENCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXUzB5TURBc0lDZFRhRzl2ZEZ4Y0owVnRJRlZ3Snl3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05dWREb2dKek0yY0hnZ1ZHRm9iMjFoSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1pwYkd3NklDZDNhR2wwWlNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkR2wwYkdVdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQ0E5SUc1bGR5QlVaWGgwUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkoxZEhSdmJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRtVnlSbkpoYldVNklESXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdmRYUkdjbUZ0WlRvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSdmQyNUdjbUZ0WlRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWd1JuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWVdKbGJEb2dKMU4wWVhKMEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05dWREb2dKekUyY0hnZ1ZtVnlaR0Z1WVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVQZG1WeVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTJaWEluS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1YwSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5SdVJHOTNibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZFYjNkdUp5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1elpYUlBkbVZ5VTI5MWJtUW9kR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowTG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEVSdmQyNVRiM1Z1WkNoMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV2YmtsdWNIVjBWWEF1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMM1JvYVhNdWJYVnphV011YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTNXpkR0Z5ZENnblVHeGhlU2NwTzF4dVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlRJZ1BTQnVaWGNnVkdWNGRFSjFkSFJ2YmloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0NBcklESXdNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RpZFhSMGIyNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzWmxja1p5WVcxbE9pQXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IzVjBSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IzZHVSbkpoYldVNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2RIWVcxbElESW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTVRad2VDQldaWEprWVc1aEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hzT2lBbmQyaHBkR1VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGc2FXZHVPaUFuWTJWdWRHVnlKMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1psY2ljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrOTFkRk52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZQZFhRbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNUViM2R1VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFVSdmQyNG5LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVeUxuTmxkRTkyWlhKVGIzVnVaQ2gwYUdsekxtSjBiazkyWlhKVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlRJdWMyVjBUM1YwVTI5MWJtUW9kR2hwY3k1aWRHNVBkWFJUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVEl1YzJWMFJHOTNibE52ZFc1a0tIUm9hWE11WW5SdVJHOTNibE52ZFc1a0tUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V5TG05dVNXNXdkWFJWY0M1aFpHUW9LQ2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2ZEdocGN5NXRkWE5wWXk1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZFFiR0Y1VUdGdVp5Y3BPMXh1WEc1Y2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmx4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRWQmhibVZzSUQwZ2RHaHBjeTVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MVVHRnVaV3d1WVdSa0tIUm9hWE11ZEdsMGJHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblZRWVc1bGJDNWhaR1FvZEdocGN5NXpkR0Z5ZENrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRWQmhibVZzTG1Ga1pDaDBhR2x6TG1kaGJXVXlLVHRjYmx4dUlDQWdJQ0FnSUNBdkwzUm9hWE11YlhWemFXTXViRzl2Y0VaMWJHd29LVHRjYmlBZ0lDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ1ZHVjRkRUoxZEhSdmJpQm1jbTl0SUNjdUxpOWxlSFJsYm5OcGIyNXpMM1JsZUhSaWRYUjBiMjRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJQZG1WeUlHVjRkR1Z1WkhNZ1VHaGhjMlZ5TGxOMFlYUmxJSHRjYmx4dUlDQWdJR055WldGMFpTZ3BJSHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlWR2wwYkdVZ1BTQnVaWGNnVUdoaGMyVnlMbFJsZUhRb2RHaHBjeTVuWVcxbExDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N3Z2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGt0TWpBd0xDQW5SMkZ0WlNCdmRtVnlKeXdnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ0p6TTJjSGdnVkdGb2IyMWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ0oyTmxiblJsY2lkY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVWFYUnNaUzVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMElEMGdibVYzSUZSbGVIUkNkWFIwYjI0b2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXUzB6TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZblYwZEc5dUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MlpYSkdjbUZ0WlRvZ01peGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5M2JrWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc09pQW5WSEo1SUdGbllXbHVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkRG9nSnpFMmNIZ2dWbVZ5WkdGdVlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MUlEMGdibVYzSUZSbGVIUkNkWFIwYjI0b2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXU3N6TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZblYwZEc5dUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MlpYSkdjbUZ0WlRvZ01peGNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRFWnlZVzFsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5M2JrWnlZVzFsT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZFhCR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hoWW1Wc09pQW5UV1Z1ZFNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pUb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RNklDY3hObkI0SUZabGNtUmhibUVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2QzYUdsMFpTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV3hwWjI0NklDZGpaVzUwWlhJblhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVUM1psY2xOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WUGRtVnlKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1VDNWMFUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTFkQ2NwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFSRzkzYmljcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YzJWMFQzWmxjbE52ZFc1a0tIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV6WlhSUGRYUlRiM1Z1WkNoMGFHbHpMbUowYms5MWRGTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWMyVjBUM1psY2xOdmRXNWtLSFJvYVhNdVluUnVUM1psY2xOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxTG5ObGRFOTFkRk52ZFc1a0tIUm9hWE11WW5SdVQzVjBVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVXVjMlYwUkc5M2JsTnZkVzVrS0hSb2FYTXVZblJ1Ukc5M2JsTnZkVzVrS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbTl1U1c1d2RYUkViM2R1TG1Ga1pDZ29LVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaUzV6ZEdGeWRDZ25VR3hoZVNjcE8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VdWIyNUpibkIxZEVSdmQyNHVZV1JrS0NncFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbExuTjBZWEowS0NkTlpXNTFKeWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKUVlXNWxiQ0E5SUhSb2FYTXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlFZVzVsYkM1aFpHUW9kR2hwY3k1bllXMWxUM1psY2xScGRHeGxLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzTG1Ga1pDaDBhR2x6TG5OMFlYSjBLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzTG1Ga1pDaDBhR2x6TG0xbGJuVXBPMXh1SUNBZ0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCVVpYaDBRblYwZEc5dUlHWnliMjBnSnk0dUwyVjRkR1Z1YzJsdmJuTXZkR1Y0ZEdKMWRIUnZiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJoYm1kUGRtVnlJR1Y0ZEdWdVpITWdVR2hoYzJWeUxsTjBZWFJsSUh0Y2JseHVJQ0FnSUdOeVpXRjBaU2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VkdsMGJHVWdQU0J1WlhjZ1VHaGhjMlZ5TGxSbGVIUW9kR2hwY3k1bllXMWxMQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDd2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrdE1qQXdMQ0FuVUdGdVp5QkhZVzFsSUc5MlpYSW5MQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk16WndlQ0JVWVdodmJXRW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ptbHNiRG9nSjNkb2FYUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xScGRHeGxMbUZ1WTJodmNpNXpaWFJVYnlnd0xqVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RZ1BTQnVaWGNnVkdWNGRFSjFkSFJ2YmloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSlpMVE13TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNabGNrWnlZVzFsT2lBeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMFJuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjNkdVJuSmhiV1U2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0VaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR0ZpWld3NklDZFVjbmtnWVdkaGFXNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTVRad2VDQldaWEprWVc1aEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hzT2lBbmQyaHBkR1VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGc2FXZHVPaUFuWTJWdWRHVnlKMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5VZ1BTQnVaWGNnVkdWNGRFSjFkSFJ2YmloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSlpLek13TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNabGNrWnlZVzFsT2lBeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMFJuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjNkdVJuSmhiV1U2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0VaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR0ZpWld3NklDZE5aVzUxSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl1ZERvZ0p6RTJjSGdnVm1WeVpHRnVZU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1sc2JEb2dKM2RvYVhSbEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ0oyTmxiblJsY2lkY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFU5MlpYSW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVQZFhSVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R0Wlc1MVQzVjBKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1Ukc5M2JsTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjIxbGJuVkViM2R1SnlrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV6WlhSUGRtVnlVMjkxYm1Rb2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEU5MWRGTnZkVzVrS0hSb2FYTXVZblJ1VDNWMFUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMExuTmxkRVJ2ZDI1VGIzVnVaQ2gwYUdsekxtSjBia1J2ZDI1VGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFM1elpYUlBkbVZ5VTI5MWJtUW9kR2hwY3k1aWRHNVBkbVZ5VTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblV1YzJWMFQzVjBVMjkxYm1Rb2RHaHBjeTVpZEc1UGRYUlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXViMjVKYm5CMWRFUnZkMjR1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZFFiR0Y1VUdGdVp5Y3BPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVXViMjVKYm5CMWRFUnZkMjR1WVdSa0tDZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZE5aVzUxSnlrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlFZVzVsYkNBOUlIUm9hWE11WVdSa0xtZHliM1Z3S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpRWVc1bGJDNWhaR1FvZEdocGN5NW5ZVzFsVDNabGNsUnBkR3hsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxuTjBZWEowS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxtMWxiblVwTzF4dUlDQWdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQlFiR0Y1WlhJZ1puSnZiU0FuTGk0dmNISmxabUZpY3k5d2JHRjVaWEluTzF4dWFXMXdiM0owSUVWdVpXMTVJR1p5YjIwZ0p5NHVMM0J5WldaaFluTXZaVzVsYlhrbk8xeHVhVzF3YjNKMElFaFZSQ0JtY205dElDY3VMaTl3Y21WbVlXSnpMMmgxWkNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCc1lYa2daWGgwWlc1a2N5QlFhR0Z6WlhJdVUzUmhkR1VnZTF4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNBdkwyWmhjbUpoWTJzZ1BTQmlZV05yWjNKdmRXNWtYRzRnSUNBZ0lDQWdJSFJvYVhNdVptRnlZbUZqYXlBOUlIUm9hWE11WVdSa0xuUnBiR1ZUY0hKcGRHVW9NQ3dnTUN3Z09EQXdMQ0F5TXpnd0xDQW5abUZ5WW1GamF5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZEdsdFpTNXpiRzkzVFc5MGFXOXVJRDBnTUR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMXBaWE1nUFNCMGFHbHpMbUZrWkM1bmNtOTFjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVaVzVoWW14bFFtOWtlU0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhJZ1BTQnVaWGNnVUd4aGVXVnlLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dNQzQ1TWlBcUlIUm9hWE11WjJGdFpTNTNiM0pzWkM1b1pXbG5hSFFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9aV0ZzZEdnNklERXdNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBbmMyMWhiR3htYVdkb2RHVnlKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnlZVzFsT2lBeFhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1YzNSaFoyVXVZV1JrUTJocGJHUW9kR2hwY3k1d2JHRjVaWElwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YUhWa0lEMGdibVYzSUVoVlJDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQndiR0Y1WlhJNklIUm9hWE11Y0d4aGVXVnlYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXBibkIxZEM1dmJrUnZkMjR1WVdSa0tDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzUwYVcxbExuTnNiM2ROYjNScGIyNGdQU0F3TzF4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1YVc1d2RYUXViMjVWY0M1aFpHUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5ScGJXVXVjMnh2ZDAxdmRHbHZiaUE5SURBN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVVbHVkR1Z5ZG1Gc0lEMGdNUzQxTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZOb2IyOTBTVzUwWlhKMllXd2dQU0F4TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNsTm9iMjkwVkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeVUyaHZiM1JKYm5SbGNuWmhiQ0E5SURBdU1UWTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5ScGJXVXVaWFpsYm5SekxteHZiM0FvVUdoaGMyVnlMbFJwYldWeUxsTkZRMDlPUkNBcUlERXdMQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaDBhR2x6TG1WdVpXMTVTVzUwWlhKMllXd2dQaUF3TGprZ0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVTVzUwWlhKMllXd2dMVDBnTUM0eE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhsQ2FYUnRZWEFnUFNCMGFHbHpMbUZrWkM1aWFYUnRZWEJFWVhSaEtIUm9hWE11WjJGdFpTNTNhV1IwYUN3Z2RHaHBjeTVuWVcxbExtaGxhV2RvZENrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlVUpwZEcxaGNDNWpkSGd1Wm1sc2JGTjBlV3hsSUQwZ0p5TXdNREFuTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTkyWlhKc1lYbENhWFJ0WVhBdVkzUjRMbVpwYkd4U1pXTjBLREFzSURBc0lIUm9hWE11WjJGdFpTNTNhV1IwYUN3Z2RHaHBjeTVuWVcxbExtaGxhV2RvZENrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1SUQwZ2RHaHBjeTVoWkdRdWMzQnlhWFJsS0RBc0lEQXNJSFJvYVhNdWIzWmxjbXhoZVVKcGRHMWhjQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVTNTJhWE5wWW14bElEMGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlUzVoYkhCb1lTQTlJREF1TnpVN1hHNWNiaUFnSUNBZ0lDQXZMeUIwYUdsekxtMTFjMmxqSUQwZ2RHaHBjeTVuWVcxbExtRmtaQzVoZFdScGJ5Z25jR3hoZVUxMWMybGpKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMFNHbDBVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnblluVnNiR1YwU0dsMEp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxGZUhCc2IzTnBiMjVUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZGxibVZ0ZVVWNGNHeHZjMmx2YmljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxja1Y0Y0d4dmMybHZibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0ozQnNZWGxsY2tWNGNHeHZjMmx2YmljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25aMkZ0WlU5MlpYSW5LVHRjYmx4dUlDQWdJQ0FnSUNBdkwzUm9hWE11YlhWemFXTXViRzl2Y0VaMWJHd29LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjFjR1JoZEdVb0tTQjdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZScGJXVWdLejBnZEdocGN5NW5ZVzFsTG5ScGJXVXVjR2g1YzJsamMwVnNZWEJ6WldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbFRhRzl2ZEZScGJXVWdLejBnZEdocGN5NW5ZVzFsTG5ScGJXVXVjR2g1YzJsamMwVnNZWEJ6WldRN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJQ3M5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbkJvZVhOcFkzTkZiR0Z3YzJWa08xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVZ1WlcxNVZHbHRaU0ErSUhSb2FYTXVaVzVsYlhsSmJuUmxjblpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZScGJXVWdQU0F3TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTnlaV0YwWlVWdVpXMTVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuWVcxbE9pQjBhR2x6TG1kaGJXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNnMkxDQTNOaWtnS2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOd1pXVmtPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTlN3Z01UQXBJQ29nTVRBZ0tpQW9UV0YwYUM1eVlXNWtiMjBvS1NBK0lEQXVOU0EvSURFZ09pQXRNU2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTlN3Z01UQXBJQ29nTVRCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGxZV3gwYURvZ09TeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlkV3hzWlhSVGNHVmxaRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNneE1Dd2dNakFwSUNvZ01UQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGhiR2xsYmlkY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaVzVsYlhsVGFHOXZkRlJwYldVZ1BpQjBhR2x6TG1WdVpXMTVVMmh2YjNSSmJuUmxjblpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZOb2IyOTBWR2x0WlNBOUlEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVabTl5UldGamFFRnNhWFpsS0dWdVpXMTVJRDArSUdWdVpXMTVMbk5vYjI5MEtDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxuQnNZWGxsY2k1aGJHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVpY21sdVoxUnZWRzl3S0hSb2FYTXViM1psY214aGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV3YkdGNVpYSlRhRzl2ZEZScGJXVWdQaUIwYUdsekxuQnNZWGxsY2xOb2IyOTBTVzUwWlhKMllXd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkJzWVhsbGNpNWhiR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlMbk5vYjI5MEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Y0doNWMybGpjeTVoY21OaFpHVXViM1psY214aGNDaDBhR2x6TG5Cc1lYbGxjaTVpZFd4c1pYUnpMQ0IwYUdsekxtVnVaVzFwWlhNc0lIUm9hWE11YUdsMFJXNWxiWGtzSUc1MWJHd3NJSFJvYVhNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbUZ5WTJGa1pTNXZkbVZ5YkdGd0tIUm9hWE11Y0d4aGVXVnlMQ0IwYUdsekxtVnVaVzFwWlhNc0lIUm9hWE11WTNKaGMyaEZibVZ0ZVN3Z2JuVnNiQ3dnZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0YVdWekxtWnZja1ZoWTJnb1pXNWxiWGtnUFQ0Z2RHaHBjeTVuWVcxbExuQm9lWE5wWTNNdVlYSmpZV1JsTG05MlpYSnNZWEFvZEdocGN5NXdiR0Y1WlhJc0lHVnVaVzE1TG1KMWJHeGxkSE1zSUhSb2FYTXVhR2wwVUd4aGVXVnlMQ0J1ZFd4c0xDQjBhR2x6S1NrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bVlYSmlZV05yTG5ScGJHVlFiM05wZEdsdmJpNTVJQ3M5SURNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTNKbFlYUmxSVzVsYlhrb1pHRjBZU2tnZTF4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0JsYm1WdGVTQTlJSFJvYVhNdVpXNWxiV2xsY3k1blpYUkdhWEp6ZEVWNGFYTjBjeWhtWVd4elpTazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmxibVZ0ZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlc1bGJYa2dQU0J1WlhjZ1JXNWxiWGtvWkdGMFlTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTXVZV1JrS0dWdVpXMTVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJtVnRlUzV5WlhObGRDaGtZWFJoS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JvYVhSRlptWmxZM1FvYjJKcUxDQmpiMnh2Y2lrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnZEhkbFpXNGdQU0IwYUdsekxtZGhiV1V1WVdSa0xuUjNaV1Z1S0c5aWFpazdYRzRnSUNBZ0lDQWdJR3hsZENCbGJXbDBkR1Z5SUQwZ2RHaHBjeTVuWVcxbExtRmtaQzVsYldsMGRHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQmxiV2wwZEdWeVVHaDVjMmxqYzFScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNCc1pYUWdjR0Z5ZEdsamJHVlRjR1ZsWkNBOUlERXdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHMWhlRkJoY25ScFkyeGxjeUE5SURFd08xeHVYRzRnSUNBZ0lDQWdJSFIzWldWdUxuUnZLSHQwYVc1ME9pQXdlR1ptTURBd01IMHNJREV3TUNrN1hHNGdJQ0FnSUNBZ0lIUjNaV1Z1TG05dVEyOXRjR3hsZEdVdVlXUmtLQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5aWFpNTBhVzUwSUQwZ01IaG1abVptWm1ZN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0IwZDJWbGJpNXpkR0Z5ZENncE8xeHVYRzRnSUNBZ0lDQWdJR1Z0YVhSMFpYSXVlQ0E5SUc5aWFpNTRPMXh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMbmtnUFNCdlltb3VlVHRjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTVuY21GMmFYUjVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1dFlXdGxVR0Z5ZEdsamJHVnpLQ2R3WVhKMGFXTnNaU2NwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h2WW1vdWFHVmhiSFJvSUR3OUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmhjblJwWTJ4bFUzQmxaV1FnUFNBeU1EQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYaFFZWEowYVdOc1pYTWdQU0EwTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eUlEMGdNSGhtWmpBd01EQTdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG0xcGJsQmhjblJwWTJ4bFUzQmxaV1F1YzJWMFZHOG9MWEJoY25ScFkyeGxVM0JsWldRc0lDMXdZWEowYVdOc1pWTndaV1ZrS1R0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1dFlYaFFZWEowYVdOc1pWTndaV1ZrTG5ObGRGUnZLSEJoY25ScFkyeGxVM0JsWldRc0lIQmhjblJwWTJ4bFUzQmxaV1FwTzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG5OMFlYSjBLSFJ5ZFdVc0lEVXdNQ3dnYm5Wc2JDd2diV0Y0VUdGeWRHbGpiR1Z6S1R0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1MWNHUmhkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiV2wwZEdWeVVHaDVjMmxqYzFScGJXVWdLejBnZEdocGN5NW5ZVzFsTG5ScGJXVXVjR2g1YzJsamMwVnNZWEJ6WldRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlobGJXbDBkR1Z5VUdoNWMybGpjMVJwYldVZ1BqMGdNQzQyS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJXbDBkR1Z5VUdoNWMybGpjMVJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1Z0YVhSMFpYSXVaR1Z6ZEhKdmVTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1Wm05eVJXRmphQ2h3WVhKMGFXTnNaU0E5UGlCd1lYSjBhV05zWlM1MGFXNTBJRDBnWTI5c2IzSXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11Y0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWQyOXliR1F1WW5KcGJtZFViMVJ2Y0NoMGFHbHpMbTkyWlhKc1lYa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhR2wwUlc1bGJYa29ZblZzYkdWMExDQmxibVZ0ZVNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMWJHeGxkRWhwZEZOdmRXNWtMbkJzWVhrb1hDSmNJaXd3TERBdU5TazdYRzRnSUNBZ0lDQWdJR1Z1WlcxNUxtUmhiV0ZuWlNoaWRXeHNaWFF1YUdWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9hWFJGWm1abFkzUW9aVzVsYlhrc0lHSjFiR3hsZEM1MGFXNTBLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmxibVZ0ZVM1aGJHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVVY0Y0d4dmMybHZibE52ZFc1a0xuQnNZWGtvWENKY0lpd3dMREF1TlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtaDFaQzUxY0dSaGRHVlRZMjl5WlNobGJtVnRlUzV0WVhoSVpXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHSjFiR3hsZEM1cmFXeHNLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhR2wwVUd4aGVXVnlLSEJzWVhsbGNpd2dZblZzYkdWMEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwU0dsMFUyOTFibVF1Y0d4aGVTaGNJbHdpTERBc01DNDFLVHRjYmlBZ0lDQWdJQ0FnY0d4aGVXVnlMbVJoYldGblpTaGlkV3hzWlhRdWFHVmhiSFJvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvZFdRdWRYQmtZWFJsU0dWaGJIUm9LQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhR2wwUldabVpXTjBLSEJzWVhsbGNpd2dZblZzYkdWMExuUnBiblFwTzF4dUlDQWdJQ0FnSUNCcFppQW9JWEJzWVhsbGNpNWhiR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKRmVIQnNiM05wYjI1VGIzVnVaQzV3YkdGNUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1luVnNiR1YwTG10cGJHd29LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpjbUZ6YUVWdVpXMTVLSEJzWVhsbGNpd2daVzVsYlhrcElIdGNiaUFnSUNBZ0lDQWdaVzVsYlhrdVpHRnRZV2RsS0dWdVpXMTVMbWhsWVd4MGFDazdYRzRnSUNBZ0lDQWdJSEJzWVhsbGNpNWtZVzFoWjJVb1pXNWxiWGt1YUdWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9hWFJGWm1abFkzUW9jR3hoZVdWeUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b2FYUkZabVpsWTNRb1pXNWxiWGtwTzF4dUlDQWdJQ0FnSUNCcFppQW9JV1Z1WlcxNUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1Ulhod2JHOXphVzl1VTI5MWJtUXVjR3hoZVNoY0lsd2lMREFzTUM0MUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhSFZrTG5Wd1pHRjBaVk5qYjNKbEtHVnVaVzE1TG0xaGVFaGxZV3gwYUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1b2RXUXVkWEJrWVhSbFNHVmhiSFJvS0NrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doY0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNrVjRjR3h2YzJsdmJsTnZkVzVrTG5Cc1lYa29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWElvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdkaGJXVlBkbVZ5S0NsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTBhVzFsTG5Oc2IzZE5iM1JwYjI0Z1BTQXpPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhrdWRtbHphV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVpY21sdVoxUnZWRzl3S0hSb2FYTXViM1psY214aGVTazdYRzRnSUNBZ0lDQWdJR3hsZENCMGFXMWxjaUE5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbU55WldGMFpTaDBhR2x6TG1kaGJXVXNJSFJ5ZFdVcE8xeHVJQ0FnSUNBZ0lDQjBhVzFsY2k1aFpHUW9NekF3TUN3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dGRYTnBZeTV6ZEc5d0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVMjkxYm1RdWNHeGhlU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbk4wWVhSbExuTjBZWEowS0NkUGRtVnlKeWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjBhVzFsY2k1emRHRnlkQ2dwTzF4dUlDQWdJSDFjYmx4dWZWeHVJaXdpYVcxd2IzSjBJRkJzWVhsbGNpQm1jbTl0SUNjdUxpOXdjbVZtWVdKekwzQnNZWGxsY2ljN1hHNXBiWEJ2Y25RZ1JXNWxiWGtnWm5KdmJTQW5MaTR2Y0hKbFptRmljeTlsYm1WdGVWQmhibWNuTzF4dWFXMXdiM0owSUVoVlJDQm1jbTl0SUNjdUxpOXdjbVZtWVdKekwyaDFaQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJzWVhsUVlXNW5JR1Y0ZEdWdVpITWdVR2hoYzJWeUxsTjBZWFJsSUh0Y2JseHVJQ0FnSUdOeVpXRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpWnlBOUlIUm9hWE11WVdSa0xuUnBiR1ZUY0hKcGRHVW9NQ3dnTUN3Z01qQXdNQ3dnTWpNNE1Dd2dKM0JoYm1kQ1p5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZEdsdFpTNXpiRzkzVFc5MGFXOXVJRDBnTUR0Y2JseHVYRzRnSUNBZ0lDQWdJQzh2SUMwdExTMHRMUzBnVUV4QldVVlNYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5SUQwZ2JtVjNJRkJzWVhsbGNpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklEQXVPVElnS2lCMGFHbHpMbWRoYldVdWQyOXliR1F1YUdWcFoyaDBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdGemMyVjBPaUFuYzIxaGJHeG1hV2RvZEdWeUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdaeVlXMWxPaUF5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjM1JoWjJVdVlXUmtRMmhwYkdRb2RHaHBjeTV3YkdGNVpYSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnNZWGxsY2xOb2IyOTBWR2x0WlNBOUlEQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5VTJodmIzUkpiblJsY25aaGJDQTlJREF1TVRZN1hHNWNiaUFnSUNBZ0lDQWdMeThnTFMwdExTMHRMU0JGVGtWTldUb2dkR2hwY3lCdmJtVnpJR0Z5WlNCamNtVmhkR1ZrSUdWMlpYSjVJSFZ3WkdGMFpTQjBhV05yWEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYldsbGN5QTlJSFJvYVhNdVlXUmtMbWR5YjNWd0tDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsY3k1bGJtRmliR1ZDYjJSNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVWUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2TVM0MVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbEpiblJsY25aaGJDQTlJREl1TlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVWTm9iMjkwVkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsVGFHOXZkRWx1ZEdWeWRtRnNJRDBnTVR0Y2JpQWdJQ0FnSUNBZ0x5OGdMUzB0TFMwdExTQWhSVTVGVFZsY2JseHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJSE50WVd4c1pYSkZUa1ZOV1RvZ2RHaHBjeUJ2Ym1WeklHRnlaU0JqY21WaGRHVmtJR1YyWlhKNUlIVndaR0YwWlNCMGFXTnJYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyMWhiR3hsY2tWdVpXMXBaWE1nUFNCMGFHbHpMbUZrWkM1bmNtOTFjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk50WVd4c1pYSkZibVZ0YVdWekxtVnVZV0pzWlVKdlpIa2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJQ0Z6YldGc2JHVnlSVTVGVFZsY2JseHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJRVZPUlUxWklFTk1TVVZPVkRvZ2NtRnVaRzl0YkhrZ1kyaHZjMlZ1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYldsbGMwTnNhV1Z1ZENBOUlIUm9hWE11WVdSa0xtZHliM1Z3S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjME5zYVdWdWRDNWxibUZpYkdWQ2IyUjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdMeTh4TGpWY2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVVTnNhV1Z1ZEVsdWRHVnlkbUZzSUQwZ01pNDFPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1UTJ4cFpXNTBVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVVTnNhV1Z1ZEZOb2IyOTBTVzUwWlhKMllXd2dQU0F4TzF4dUlDQWdJQ0FnSUNBZ0lDQWdMeTlwYm1sMGFXRnNhWHBsSUdacGNuTjBJR05zYVdWdWRGeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OeVpXRjBaVVZ1WlcxNVEyeHBaVzUwS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11WjJGdFpTNXlibVF1YVc1MFpXZGxja2x1VW1GdVoyVW9OaXdnTnpZcElDb2dNVEFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMekJjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpjR1ZsWkRvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTlN3Z01UQXBJQ29nTVRBZ0tpQW9UV0YwYUM1eVlXNWtiMjBvS1NBK0lEQXVOU0EvSURFZ09pQXRNU2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZzFMQ0F4TUNrZ0tpQXhNRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dk9WeHVJQ0FnSUNBZ0lDQWdJQ0FnYUdWaGJIUm9PaUE1TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRGTndaV1ZrT2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtERXdMQ0F5TUNrZ0tpQXhNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlYwT2lBbllXeHBaVzV6Snl4Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQzh2SUMwdExTMHRMUzBnSVVWT1JVMVpJRU5NU1VWT1ZEb2djbUZ1Wkc5dGJIa2dZMmh2YzJWdVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMblJwYldVdVpYWmxiblJ6TG14dmIzQW9VR2hoYzJWeUxsUnBiV1Z5TGxORlEwOU9SQ0FxSURFd0xDQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGFHbHpMbVZ1WlcxNVNXNTBaWEoyWVd3Z1BpQXdMaklnS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVNXNTBaWEoyWVd3Z0xUMGdNQzR4TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG05MlpYSnNZWGxDYVhSdFlYQWdQU0IwYUdsekxtRmtaQzVpYVhSdFlYQkVZWFJoS0hSb2FYTXVaMkZ0WlM1M2FXUjBhQ3dnZEdocGN5NW5ZVzFsTG1obGFXZG9kQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVVSnBkRzFoY0M1amRIZ3VabWxzYkZOMGVXeGxJRDBnSnlNd01EQW5PMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOTJaWEpzWVhsQ2FYUnRZWEF1WTNSNExtWnBiR3hTWldOMEtEQXNJREFzSUhSb2FYTXVaMkZ0WlM1M2FXUjBhQ3dnZEdocGN5NW5ZVzFsTG1obGFXZG9kQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVJRDBnZEdocGN5NWhaR1F1YzNCeWFYUmxLREFzSURBc0lIUm9hWE11YjNabGNteGhlVUpwZEcxaGNDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzWmxjbXhoZVM1MmFYTnBZbXhsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVTNWhiSEJvWVNBOUlEQXVOelU3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvZFdRZ1BTQnVaWGNnU0ZWRUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnNZWGxsY2pvZ2RHaHBjeTV3YkdGNVpYSmNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMeUF0TFMwdExTMHRJRk5QVlU1RVUxeHVJQ0FnSUNBZ0lDOHZJSFJvYVhNdWJYVnphV01nUFNCMGFHbHpMbWRoYldVdVlXUmtMbUYxWkdsdktDZHdiR0Y1VFhWemFXTW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSSWFYUlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkaWRXeHNaWFJJYVhRbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVVY0Y0d4dmMybHZibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyVnVaVzE1Ulhod2JHOXphVzl1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlSWGh3Ykc5emFXOXVVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmNHeGhlV1Z5Ulhod2JHOXphVzl1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZG5ZVzFsVDNabGNpY3BPMXh1WEc0Z0lDQWdJQ0FnSUM4dmRHaHBjeTV0ZFhOcFl5NXNiMjl3Um5Wc2JDZ3BPMXh1WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMMFJsWm1GMWJIUnpYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NWxibVZ0ZVZScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNBdkwzUm9hWE11Wlc1bGJYbEpiblJsY25aaGJDQTlJREV1TlR0Y2JpQWdJQ0FnSUNBZ0x5OTBhR2x6TG1WdVpXMTVVMmh2YjNSVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0x5OTBhR2x6TG1WdVpXMTVVMmh2YjNSSmJuUmxjblpoYkNBOUlERTdYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NXdiR0Y1WlhKVGFHOXZkRlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0F2TDNSb2FYTXVjR3hoZVdWeVUyaHZiM1JKYm5SbGNuWmhiQ0E5SURBdU1UWTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RYQmtZWFJsS0NrZ2UxeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxVYVcxbElDczlJSFJvYVhNdVoyRnRaUzUwYVcxbExuQm9lWE5wWTNORmJHRndjMlZrTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JVYVcxbElDczlJSFJvYVhNdVoyRnRaUzUwYVcxbExuQm9lWE5wWTNORmJHRndjMlZrTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNsTm9iMjkwVkdsdFpTQXJQU0IwYUdsekxtZGhiV1V1ZEdsdFpTNXdhSGx6YVdOelJXeGhjSE5sWkR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWxibVZ0ZVZScGJXVWdQaUIwYUdsekxtVnVaVzE1U1c1MFpYSjJZV3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxVYVcxbElEMGdNRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amNtVmhkR1ZGYm1WdGVTaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaMkZ0WlRvZ2RHaHBjeTVuWVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTml3Z056WXBJQ29nTVRBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OHdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemNHVmxaRG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0RVc0lERXdLU0FxSURFd0lDb2dLRTFoZEdndWNtRnVaRzl0S0NrZ1BpQXdMalVnUHlBeElEb2dMVEVwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0RVc0lERXdLU0FxSURFd1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMemxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWldGc2RHZzZJRGtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5Wc2JHVjBVM0JsWldRNklIUm9hWE11WjJGdFpTNXlibVF1YVc1MFpXZGxja2x1VW1GdVoyVW9NVEFzSURJd0tTQXFJREV3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGemMyVjBPaUFuWVd4cFpXNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5wZW1VNklESXVOVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtVnVaVzE1VTJodmIzUlVhVzFsSUQ0Z2RHaHBjeTVsYm1WdGVWTm9iMjkwU1c1MFpYSjJZV3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG5Cc1lYbGxjaTVoYkdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWljbWx1WjFSdlZHOXdLSFJvYVhNdWIzWmxjbXhoZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29YQ0pJWVhNZ2JYVmxjblJ2WENJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjR3hoZVdWeVUyaHZiM1JVYVcxbElENGdkR2hwY3k1d2JHRjVaWEpUYUc5dmRFbHVkR1Z5ZG1Gc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNsTm9iMjkwVkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXdiR0Y1WlhJdVlXeHBkbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjMmh2YjNSTFpYa2dQU0IwYUdsekxtZGhiV1V1YVc1d2RYUXVhMlY1WW05aGNtUXVhWE5FYjNkdUtGQm9ZWE5sY2k1TFpYbGliMkZ5WkM1VFVFRkRSVUpCVWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9jMmh2YjNSTFpYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSXVjMmh2YjNRb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Y0doNWMybGpjeTVoY21OaFpHVXViM1psY214aGNDaDBhR2x6TG5Cc1lYbGxjaTVpZFd4c1pYUnpMQ0IwYUdsekxtVnVaVzFwWlhNc0lIUm9hWE11YUdsMFJXNWxiWGtzSUc1MWJHd3NJSFJvYVhNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbUZ5WTJGa1pTNXZkbVZ5YkdGd0tIUm9hWE11Y0d4aGVXVnlMQ0IwYUdsekxtVnVaVzFwWlhNc0lIUm9hWE11WTNKaGMyaEZibVZ0ZVN3Z2JuVnNiQ3dnZEdocGN5azdYRzVjYmx4dUlDQWdJQ0FnSUNBdkx5QjBhR2x6TG1KbkxuUnBiR1ZRYjNOcGRHbHZiaTU0SUNzOUlETTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kzSmxZWFJsUlc1bGJYa29aR0YwWVNrZ2UxeHVYRzRnSUNBZ0lDQWdJR3hsZENCbGJtVnRlU0E5SUhSb2FYTXVaVzVsYldsbGN5NW5aWFJHYVhKemRFVjRhWE4wY3lobVlXeHpaU2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQjBiM1JoYkVWdVpXMXBaWE1nUFNCMGFHbHpMbVZ1WlcxcFpYTXVZMmhwYkdSeVpXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWgwYjNSaGJFVnVaVzFwWlhNcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaFpXNWxiWGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z1WlcxNUlEMGdibVYzSUVWdVpXMTVLR1JoZEdFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RHOTBZV3hGYm1WdGFXVnpJRHdnTXlsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGFXVnpMbUZrWkNobGJtVnRlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJtVnRlUzV5WlhObGRDaGtZWFJoS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqY21WaGRHVlRiV0ZzYkdWeVJXNWxiWGtvWkdGMFlTa2dlMXh1WEc0Z0lDQWdJQ0FnSUd4bGRDQmxibVZ0ZVNBOUlIUm9hWE11YzIxaGJHeGxja1Z1WlcxcFpYTXVaMlYwUm1seWMzUkZlR2x6ZEhNb1ptRnNjMlVwTzF4dUlDQWdJQ0FnSUNCc1pYUWdkRzkwWVd4RmJtVnRhV1Z6SUQwZ2RHaHBjeTV6YldGc2JHVnlSVzVsYldsbGN5NWphR2xzWkhKbGJpNXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGbGJtVnRlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaVzVsYlhrZ1BTQnVaWGNnUlc1bGJYa29aR0YwWVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGIzUmhiRVZ1WlcxcFpYTWdQQ0F4TUNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6YldGc2JHVnlSVzVsYldsbGN5NWhaR1FvWlc1bGJYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWlc1bGJYa3VjbVZ6WlhRb1pHRjBZU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZM0psWVhSbFJXNWxiWGxEYkdsbGJuUW9aR0YwWVNrZ2UxeHVYRzRnSUNBZ0lDQWdJR3hsZENCbGJtVnRlU0E5SUhSb2FYTXVaVzVsYldsbGMwTnNhV1Z1ZEM1blpYUkdhWEp6ZEVWNGFYTjBjeWhtWVd4elpTazdYRzRnSUNBZ0lDQWdJR3hsZENCMGIzUmhiRVZ1WlcxcFpYTWdQU0IwYUdsekxtVnVaVzFwWlhORGJHbGxiblF1WTJocGJHUnlaVzR1YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnloMGIzUmhiRVZ1WlcxcFpYTXBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDZ2haVzVsYlhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdVpXMTVJRDBnYm1WM0lFVnVaVzE1S0dSaGRHRXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9kRzkwWVd4RmJtVnRhV1Z6SUR3OUlERXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsYzBOc2FXVnVkQzVoWkdRb1pXNWxiWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXNWxiWGt1Y21WelpYUW9aR0YwWVNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYUdsMFJXWm1aV04wS0c5aWFpd2dZMjlzYjNJcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhSM1pXVnVJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNTBkMlZsYmlodlltb3BPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1pXMXBkSFJsY2lBOUlIUm9hWE11WjJGdFpTNWhaR1F1WlcxcGRIUmxjaWdwTzF4dUlDQWdJQ0FnSUNCc1pYUWdaVzFwZEhSbGNsQm9lWE5wWTNOVWFXMWxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEJoY25ScFkyeGxVM0JsWldRZ1BTQXhNREE3WEc0Z0lDQWdJQ0FnSUd4bGRDQnRZWGhRWVhKMGFXTnNaWE1nUFNBeE1EdGNibHh1SUNBZ0lDQWdJQ0IwZDJWbGJpNTBieWg3ZEdsdWREb2dNSGhtWmpBd01EQjlMQ0F4TURBcE8xeHVJQ0FnSUNBZ0lDQjBkMlZsYmk1dmJrTnZiWEJzWlhSbExtRmtaQ2dvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdlltb3VkR2x1ZENBOUlEQjRabVptWm1abU8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZEhkbFpXNHVjM1JoY25Rb0tUdGNibHh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMbmdnUFNCdlltb3VlRHRjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTU1SUQwZ2IySnFMbms3WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1WjNKaGRtbDBlU0E5SURBN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWJXRnJaVkJoY25ScFkyeGxjeWduY0dGeWRHbGpiR1VuS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYjJKcUxtaGxZV3gwYUNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndZWEowYVdOc1pWTndaV1ZrSUQwZ01qQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRjRVR0Z5ZEdsamJHVnpJRDBnTkRBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjJ4dmNpQTlJREI0Wm1Zd01EQXdPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1dGFXNVFZWEowYVdOc1pWTndaV1ZrTG5ObGRGUnZLQzF3WVhKMGFXTnNaVk53WldWa0xDQXRjR0Z5ZEdsamJHVlRjR1ZsWkNrN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWJXRjRVR0Z5ZEdsamJHVlRjR1ZsWkM1elpYUlVieWh3WVhKMGFXTnNaVk53WldWa0xDQndZWEowYVdOc1pWTndaV1ZrS1R0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1emRHRnlkQ2gwY25WbExDQTFNREFzSUc1MWJHd3NJRzFoZUZCaGNuUnBZMnhsY3lrN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdWRYQmtZWFJsSUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaVzFwZEhSbGNsQm9lWE5wWTNOVWFXMWxJQ3M5SUhSb2FYTXVaMkZ0WlM1MGFXMWxMbkJvZVhOcFkzTkZiR0Z3YzJWa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb1pXMXBkSFJsY2xCb2VYTnBZM05VYVcxbElENDlJREF1TmlsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXMXBkSFJsY2xCb2VYTnBZM05VYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYldsMGRHVnlMbVJsYzNSeWIza29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG1admNrVmhZMmdvY0dGeWRHbGpiR1VnUFQ0Z2NHRnlkR2xqYkdVdWRHbHVkQ0E5SUdOdmJHOXlLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG5Cc1lYbGxjaTVoYkdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1KeWFXNW5WRzlVYjNBb2RHaHBjeTV2ZG1WeWJHRjVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2hwZEVWdVpXMTVLR0oxYkd4bGRDd2daVzVsYlhrcElIdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEVocGRGTnZkVzVrTG5Cc1lYa29YQ0pjSWl3d0xEQXVOU2s3WEc0Z0lDQWdJQ0FnSUdWdVpXMTVMbVJoYldGblpTaGlkV3hzWlhRdWFHVmhiSFJvS1R0Y2JpQWdJQ0FnSUNBZ0x5OWxibVZ0ZVM1NElEMGdaVzVsYlhrdWVDc3lNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9hWFJGWm1abFkzUW9aVzVsYlhrc0lHSjFiR3hsZEM1MGFXNTBLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmxibVZ0ZVM1aGJHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVVY0Y0d4dmMybHZibE52ZFc1a0xuQnNZWGtvWENKY0lpd3dMREF1TlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtaDFaQzUxY0dSaGRHVlRZMjl5WlNobGJtVnRlUzV0WVhoSVpXRnNkR2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvWlc1bGJYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29KME5TUlVFZ1ZVNVBJU2NwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ29aVzVsYlhrdWMybDZaU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk5TVlYSm5aU0F0UGlCTlpXUnBkVzFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElESXVOVHBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZM0psWVhSbFUyMWhiR3hsY2tWdVpXMTVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJR1Z1WlcxNUxuZ3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMekJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUdWdVpXMTVMbmtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Y0dWbFpEb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11WjJGdFpTNXlibVF1YVc1MFpXZGxja2x1VW1GdVoyVW9OU3dnTVRBcElDb2dNVEFnS2lBb1RXRjBhQzV5WVc1a2IyMG9LU0ErSURBdU5TQS9JREVnT2lBdE1Ta3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZzFMQ0F4TUNrZ0tpQXhNRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2T1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdWaGJIUm9PaUE1TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5Wc2JHVjBVM0JsWldRNklIUm9hWE11WjJGdFpTNXlibVF1YVc1MFpXZGxja2x1VW1GdVoyVW9NVEFzSURJd0tTQXFJREV3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpYUTZJQ2RoYkdsbGJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnphWHBsT2lBeExqVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OeVpXRjBaVk50WVd4c1pYSkZibVZ0ZVNoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I0T2lCbGJtVnRlUzU0TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4d1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQmxibVZ0ZVM1NUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzQmxaV1E2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0MwME5Td2dORFVwSUNvZ01UQWdLaUFvVFdGMGFDNXlZVzVrYjIwb0tTQStJREF1TlNBL0lERWdPaUF0TVNrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nS0hSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb0xUSXdMQ0F0TlRBcElDb2dNVEFnS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dk9WeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBNUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwVTNCbFpXUTZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTVRBc0lESXdLU0FxSURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaGJHbGxiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6YVhwbE9pQXhMalZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2VFdWa2FYVnRJQzArSUZOdFlXeHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnWTJGelpTQXhMalU2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z0lDQWdJSFJvYVhNdVkzSmxZWFJsVTIxaGJHeGxja1Z1WlcxNUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUFnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUFnSUNBZ0lDQWdJSGc2SUdWdVpXMTVMbmdzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z0lDQWdJQ0FnSUNBdkx6QmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUFnSUNBZ0lDQWdJSGs2SUdWdVpXMTVMbmtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z0lDQWdJQ0FnSUNCemNHVmxaRG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklDQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb05Td2dNVEFwSUNvZ01UQWdLaUFvVFdGMGFDNXlZVzVrYjIwb0tTQStJREF1TlNBL0lERWdPaUF0TVNrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZzFMQ0F4TUNrZ0tpQXhNRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QWdJQ0FnSUNBZ0lDOHZPVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUNBZ0lDQWdJQ0FnYUdWaGJIUm9PaUE1TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklDQWdJQ0FnSUNBZ1luVnNiR1YwVTNCbFpXUTZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTVRBc0lESXdLU0FxSURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGhiR2xsYmljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdJQ0FnSUNBZ0lDQnphWHBsT2lBd0xqVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUFnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnSUNBZ0lHSnlaV0ZyTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JseHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR0oxYkd4bGRDNXJhV3hzS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z2FHbDBVR3hoZVdWeUtIQnNZWGxsY2l3Z1luVnNiR1YwS1NCN1hHNGdJQ0FnTHk4Z0lDQWdJSFJvYVhNdVluVnNiR1YwU0dsMFUyOTFibVF1Y0d4aGVTaGNJbHdpTERBc01DNDFLVHRjYmlBZ0lDQXZMeUFnSUNBZ2NHeGhlV1Z5TG1SaGJXRm5aU2hpZFd4c1pYUXVhR1ZoYkhSb0tUdGNiaUFnSUNBdkx5QWdJQ0FnZEdocGN5NW9kV1F1ZFhCa1lYUmxTR1ZoYkhSb0tDazdYRzRnSUNBZ0x5OGdJQ0FnSUhSb2FYTXVhR2wwUldabVpXTjBLSEJzWVhsbGNpd2dZblZzYkdWMExuUnBiblFwTzF4dUlDQWdJQzh2SUNBZ0lDQnBaaUFvSVhCc1lYbGxjaTVoYkdsMlpTa2dlMXh1SUNBZ0lDOHZJQ0FnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpGZUhCc2IzTnBiMjVUYjNWdVpDNXdiR0Y1S0NrN1hHNGdJQ0FnTHk4Z0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlLQ2s3WEc0Z0lDQWdMeThnSUNBZ0lIMWNiaUFnSUNBdkx5QWdJQ0FnWW5Wc2JHVjBMbXRwYkd3b0tUdGNiaUFnSUNBdkx5QjlYRzVjYmlBZ0lDQmpjbUZ6YUVWdVpXMTVLSEJzWVhsbGNpd2daVzVsYlhrcElIdGNiaUFnSUNBZ0lDQWdMeTlsYm1WdGVTNWtZVzFoWjJVb1pXNWxiWGt1YUdWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnWlc1bGJYa3VaR0Z0WVdkbEtETXBPMXh1SUNBZ0lDQWdJQ0F2TDNCc1lYbGxjaTVrWVcxaFoyVW9aVzVsYlhrdWFHVmhiSFJvS1R0Y2JpQWdJQ0FnSUNBZ2NHeGhlV1Z5TG1SaGJXRm5aU2d4S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvYVhSRlptWmxZM1FvY0d4aGVXVnlLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9hWFJGWm1abFkzUW9aVzVsYlhrcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVdWdVpXMTVMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVJYaHdiRzl6YVc5dVUyOTFibVF1Y0d4aGVTaGNJbHdpTERBc01DNDFLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUhWa0xuVndaR0YwWlZOamIzSmxLR1Z1WlcxNUxtMWhlRWhsWVd4MGFDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZEdocGN5NW9kV1F1ZFhCa1lYUmxTR1ZoYkhSb0tDazdYRzRnSUNBZ0lDQWdJR2xtSUNnaGNHeGhlV1Z5TG1Gc2FYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxja1Y0Y0d4dmMybHZibE52ZFc1a0xuQnNZWGtvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhJb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHZGhiV1ZQZG1WeUtDbDdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzUwYVcxbExuTnNiM2ROYjNScGIyNGdQU0F6TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTkyWlhKc1lYa3VkbWx6YVdKc1pTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1aWNtbHVaMVJ2Vkc5d0tIUm9hWE11YjNabGNteGhlU2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQjBhVzFsY2lBOUlIUm9hWE11WjJGdFpTNTBhVzFsTG1OeVpXRjBaU2gwYUdsekxtZGhiV1VzSUhSeWRXVXBPMXh1SUNBZ0lDQWdJQ0IwYVcxbGNpNWhaR1FvTXpBd01Dd2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2RHaHBjeTV0ZFhOcFl5NXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1ZQZG1WeVUyOTFibVF1Y0d4aGVTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZWFJsTG5OMFlYSjBLQ2RRWVc1blQzWmxjaWNwTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdkR2x0WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0I5WEc1Y2JuMWNiaUlzSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnlaV3h2WVdRZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNSaGRHVWdlMXh1WEc0Z0lDQWdjSEpsYkc5aFpDZ3BJSHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdSbGNrSm5JRDBnZEdocGN5NWhaR1F1YzNCeWFYUmxLSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V1N3Z0oyeHZZV1JsY2tKbkp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaR1Z5UW1GeUlEMGdkR2hwY3k1aFpHUXVjM0J5YVhSbEtIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZTENCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXU3dnSjJ4dllXUmxja0poY2ljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUmxja0puTG1GdVkyaHZjaTV6WlhSVWJ5Z3dMalVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdSbGNrSmhjaTVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdWMyVjBVSEpsYkc5aFpGTndjbWwwWlNoMGFHbHpMbXh2WVdSbGNrSmhjaWs3WEc0Z0lDQWdJQ0FnSUM4dloyRnRaU0F4WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRHeGhjMHBUVDA1QmNuSmhlU2duYzIxaGJHeG1hV2RvZEdWeUp5d2dKMmx0Wnk5emNISnBkR1Z6YUdWbGRDOXpiV0ZzYkdacFoyaDBaWEl1Y0c1bkp5d2dKMlJoZEdFdmMzQnlhWFJsYzJobFpYUXZjMjFoYkd4bWFXZG9kR1Z5TG1wemIyNG5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1GMGJHRnpTbE5QVGtGeWNtRjVLQ2RoYkdsbGJpY3NJQ2RwYldjdmMzQnlhWFJsYzJobFpYUXZZV3hwWlc0dWNHNW5KeXdnSjJSaGRHRXZjM0J5YVhSbGMyaGxaWFF2WVd4cFpXNHVhbk52YmljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVZWFJzWVhOS1UwOU9RWEp5WVhrb0oySjFkSFJ2Ymljc0lDZHBiV2N2YzNCeWFYUmxjMmhsWlhRdlluVjBkRzl1TG5CdVp5Y3NJQ2RrWVhSaEwzTndjbWwwWlhOb1pXVjBMMkoxZEhSdmJpNXFjMjl1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnblptRnlZbUZqYXljc0lDZHBiV2N2Wm1GeVltRmpheTVxY0djbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbWx0WVdkbEtDZGlkV3hzWlhRbkxDQW5hVzFuTDJKMWJHeGxkQzV3Ym1jbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbWx0WVdkbEtDZHdZWEowYVdOc1pTY3NJQ2RwYldjdmNHRnlkR2xqYkdVdVoybG1KeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1cGJXRm5aU2duYUdWaGJIUm9ZbUZ5Snl3Z0oybHRaeTlvWldGc2RHaGlZWEl1Y0c1bkp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25hSFZrUW1jbkxDQW5hVzFuTDJoMVpDMWlaeTV3Ym1jbktUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KM0JzWVhsTmRYTnBZeWNzSUZzbllYVmthVzh2YlhWemFXTXZjR3hoZVM1dGNETW5YU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1aGRXUnBieWduYldWdWRVMTFjMmxqSnl3Z1d5ZGhkV1JwYnk5dGRYTnBZeTl0Wlc1MUxtMXdNeWRkS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVZWFZrYVc4b0oyMWxiblZQZG1WeUp5d2dXeWRoZFdScGJ5OXpiM1Z1WkM5dFpXNTFMVzkyWlhJdWJYQXpKMTBwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdVlYVmthVzhvSjIxbGJuVlBkWFFuTENCYkoyRjFaR2x2TDNOdmRXNWtMMjFsYm5VdGIzVjBMbTF3TXlkZEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYxWkdsdktDZHRaVzUxUkc5M2JpY3NJRnNuWVhWa2FXOHZjMjkxYm1RdmJXVnVkUzFqYkdsamF5NXRjRE1uWFNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbUYxWkdsdktDZGlkV3hzWlhSSWFYUW5MQ0JiSjJGMVpHbHZMM052ZFc1a0wySjFiR3hsZEMxb2FYUXViWEF6SjEwcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVZWFZrYVc4b0oyVnVaVzE1VTJodmRDY3NJRnNuWVhWa2FXOHZjMjkxYm1RdlpXNWxiWGt0YzJodmRDNXRjRE1uWFNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkV1JwYnlnblpXNWxiWGxGZUhCc2IzTnBiMjRuTENCYkoyRjFaR2x2TDNOdmRXNWtMMlZ1WlcxNUxXVjRjR3h2YzJsdmJpNXRjRE1uWFNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkV1JwYnlnbmNHeGhlV1Z5VTJodmRDY3NJRnNuWVhWa2FXOHZjMjkxYm1RdmNHeGhlV1Z5TFhOb2IzUXViWEF6SjEwcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVZWFZrYVc4b0ozQnNZWGxsY2tWNGNHeHZjMmx2Ymljc0lGc25ZWFZrYVc4dmMyOTFibVF2Y0d4aGVXVnlMV1Y0Y0d4dmMybHZiaTV0Y0RNblhTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1GMVpHbHZLQ2RuWVcxbFQzWmxjaWNzSUZzbllYVmthVzh2YzI5MWJtUXZaMkZ0WlMxdmRtVnlMbTF3TXlkZEtUdGNiaUFnSUNBZ0lDQWdMeThoWjJGdFpTQXhYRzRnSUNBZ0lDQWdJQzh2WjJGdFpTQXlYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25jR0Z1WjBKbkp5d2dKMmx0Wnk5d1lXNW5RbWN1Y0c1bkp5azdYRzVjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpjbVZoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1V1YzNSaGNuUW9KMDFsYm5VbktUdGNiaUFnSUNCOVhHNWNibjFjYmlKZGZRPT0ifQ==
