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

},{"./boot":8,"./menu":10,"./over":11,"./pairsOver":12,"./pangOver":13,"./play":14,"./playPairs":15,"./playPang":16,"./preload":17}],10:[function(require,module,exports){
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

},{"../extensions/textbutton":1}],14:[function(require,module,exports){
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

},{"../prefabs/enemy":4,"../prefabs/hud":6,"../prefabs/player":7}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enemyPang = require('../prefabs/enemyPang');

var _enemyPang2 = _interopRequireDefault(_enemyPang);

var _hud = require('../prefabs/hud');

var _hud2 = _interopRequireDefault(_hud);

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

            this.bg = this.add.tileSprite(0, 0, 666, 600, 'pangBg');
            console.log(this.bg);
        }
    }, {
        key: 'update',
        value: function update() {
            this.loadMenu();
        }
    }, {
        key: 'loadMenu',
        value: function loadMenu() {
            var escKey = this.game.input.keyboard.isDown(Phaser.Keyboard.ESC);
            if (escKey) {
                this.game.state.start('Menu');
            }
        }
    }]);

    return PlayPairs;
}(Phaser.State);

exports.default = PlayPairs;

},{"../prefabs/enemyPang":5,"../prefabs/hud":6}],16:[function(require,module,exports){
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

},{"../prefabs/enemyPang":5,"../prefabs/hud":6,"../prefabs/player":7}],17:[function(require,module,exports){
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZXh0ZW5zaW9ucy90ZXh0YnV0dG9uLmpzIiwic3JjL2pzL2dhbWUuanMiLCJzcmMvanMvcHJlZmFicy9idWxsZXQuanMiLCJzcmMvanMvcHJlZmFicy9lbmVteS5qcyIsInNyYy9qcy9wcmVmYWJzL2VuZW15UGFuZy5qcyIsInNyYy9qcy9wcmVmYWJzL2h1ZC5qcyIsInNyYy9qcy9wcmVmYWJzL3BsYXllci5qcyIsInNyYy9qcy9zdGF0ZXMvYm9vdC5qcyIsInNyYy9qcy9zdGF0ZXMvaW5kZXguanMiLCJzcmMvanMvc3RhdGVzL21lbnUuanMiLCJzcmMvanMvc3RhdGVzL292ZXIuanMiLCJzcmMvanMvc3RhdGVzL3BhaXJzT3Zlci5qcyIsInNyYy9qcy9zdGF0ZXMvcGFuZ092ZXIuanMiLCJzcmMvanMvc3RhdGVzL3BsYXkuanMiLCJzcmMvanMvc3RhdGVzL3BsYXlQYWlycy5qcyIsInNyYy9qcy9zdGF0ZXMvcGxheVBhbmcuanMiLCJzcmMvanMvc3RhdGVzL3ByZWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUNBcUIsVTs7O0FBRWpCLDhCQUFxSDtBQUFBLFlBQXZHLElBQXVHLFFBQXZHLElBQXVHO0FBQUEsWUFBakcsQ0FBaUcsUUFBakcsQ0FBaUc7QUFBQSxZQUE5RixDQUE4RixRQUE5RixDQUE4RjtBQUFBLFlBQTNGLEtBQTJGLFFBQTNGLEtBQTJGO0FBQUEsWUFBcEYsUUFBb0YsUUFBcEYsUUFBb0Y7QUFBQSxZQUExRSxlQUEwRSxRQUExRSxlQUEwRTtBQUFBLFlBQXpELFNBQXlELFFBQXpELFNBQXlEO0FBQUEsWUFBOUMsUUFBOEMsUUFBOUMsUUFBOEM7QUFBQSxZQUFwQyxTQUFvQyxRQUFwQyxTQUFvQztBQUFBLFlBQXpCLE9BQXlCLFFBQXpCLE9BQXlCO0FBQUEsWUFBaEIsS0FBZ0IsUUFBaEIsS0FBZ0I7QUFBQSxZ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LENBQTdCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsZ0JBQWhCLEVBQWtDLENBQUMsaUNBQUQsQ0FBbEM7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixZQUFoQixFQUE4QixDQUFDLDZCQUFELENBQTlCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsaUJBQWhCLEVBQW1DLENBQUMsa0NBQUQsQ0FBbkM7O0FBRUEsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsRUFBNEIsQ0FBQywyQkFBRCxDQUE1QjtBQUNBOzs7QUFHQTtBQUNBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFFBQWhCLEVBQTBCLGdCQUExQjtBQUVIOzs7aUNBRVE7QUFDTCxpQkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFqQjtBQUNIOzs7O0VBNUNnQyxPQUFPLEs7O2tCQUF2QixPIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRCdXR0b24gZXh0ZW5kcyBQaGFzZXIuQnV0dG9uIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSwgbGFiZWwsIHN0eWxlIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgYXNzZXQsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSk7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgMCwgMCwgdGhpcy5sYWJlbCwgdGhpcy5zdHlsZSk7XG4gICAgICAgIHRoaXMudGV4dC5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dCk7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBzdGF0ZXMgZnJvbSAnLi9zdGF0ZXMnO1xuY29uc3QgR0FNRSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDEwMDAsIFBoYXNlci5BVVRPKTtcblxuT2JqZWN0LmtleXMoc3RhdGVzKS5mb3JFYWNoKHN0YXRlID0+IEdBTUUuc3RhdGUuYWRkKHN0YXRlLCBzdGF0ZXNbc3RhdGVdKSk7XG5cbkdBTUUuc3RhdGUuc3RhcnQoJ0Jvb3QnKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgaGVhbHRoLCB0aW50ID0gMHhmZjAwMDAgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCk7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy50aW50ID0gdGludDtcbiAgICAgICAgdGhpcy5jaGVja1dvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vdXRPZkJvdW5kc0tpbGwgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9idWxsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUsIGhlYWx0aCwgYnVsbGV0U3BlZWQgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zLmFkZCgnc3Bpbm5pbmcnLCBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0XSwgMzAsIHRydWUpO1xuICAgICAgICB0aGlzLnBsYXkoJ3NwaW5uaW5nJyk7XG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmJ1bGxldHMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQoJ2VuZW15U2hvdCcpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwLjA0ICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwLjA0ICogdGhpcy5nYW1lLndvcmxkLndpZHRoICsgMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+IDAuOTYgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDAuOTYgKiB0aGlzLmdhbWUud29ybGQud2lkdGggLSAyO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggKj0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyID4gdGhpcy5nYW1lLndvcmxkLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5raWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuXG4gICAgICAgIGlmICghYnVsbGV0KSB7XG4gICAgICAgICAgICBidWxsZXQgPSBuZXcgQnVsbGV0KHtcbiAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuYm90dG9tLFxuICAgICAgICAgICAgICAgIGhlYWx0aDogMixcbiAgICAgICAgICAgICAgICBhc3NldDogJ2J1bGxldCcsXG4gICAgICAgICAgICAgICAgdGludDogMHhmZjAwMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5idWxsZXRzLmFkZChidWxsZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnVsbGV0LnJlc2V0KHRoaXMueCwgdGhpcy5ib3R0b20sIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnVsbGV0LmJvZHkudmVsb2NpdHkueSA9IHRoaXMuYnVsbGV0U3BlZWQ7XG4gICAgfVxuXG4gICAgZGFtYWdlKGFtb3VudCkge1xuICAgICAgICBzdXBlci5kYW1hZ2UoYW1vdW50KTtcbiAgICB9XG5cbiAgICByZXNldCh7IHgsIHksIGhlYWx0aCwgYnVsbGV0U3BlZWQsIHNwZWVkIH0pIHtcbiAgICAgICAgc3VwZXIucmVzZXQoeCwgeSwgaGVhbHRoKTtcbiAgICAgICAgdGhpcy5idWxsZXRTcGVlZCA9IGJ1bGxldFNwZWVkO1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHNwZWVkLng7XG4gICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gc3BlZWQueTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQnVsbGV0IGZyb20gJy4vYnVsbGV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGgsIGJ1bGxldFNwZWVkLHNpemUgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICAvL3NpemUgPSBzY2FsZVxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKHNpemUpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG5cblxuICAgICAgICAvL0dyYXZpdHlcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5LnkgPSA1MDA7XG4gICAgICAgIHRoaXMuYm9keS5ib3VuY2Uuc2V0KDEpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ3NwaW5uaW5nJywgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNF0sIDMwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5KCdzcGlubmluZycpO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gYnVsbGV0U3BlZWQ7XG5cbiAgICAgICAgdGhpcy5zaG90U291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKCdlbmVteVNob3QnKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDI7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCAqPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPiAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwLjk2ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICo9IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMiA+IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG4gICAgcmVzZXQoeyB4LCB5LCBoZWFsdGgsIGJ1bGxldFNwZWVkLCBzcGVlZCB9KSB7XG4gICAgICAgIHN1cGVyLnJlc2V0KHgsIHksIGhlYWx0aCk7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSBzcGVlZC54O1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHNwZWVkLnk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wcmVmYWJzL3BsYXllcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWQgZXh0ZW5kcyBQaGFzZXIuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgcGxheWVyIH0pIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmJnID0gbmV3IFBoYXNlci5JbWFnZSh0aGlzLmdhbWUsIDAsIDAsICdodWRCZycpO1xuICAgICAgICB0aGlzLndpZHRoID0gODAwO1xuICAgICAgICB0aGlzLmhlYWx0aGJhciA9IG5ldyBQaGFzZXIuU3ByaXRlKHRoaXMuZ2FtZSwgMiwgMiwgJ2hlYWx0aGJhcicpO1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5zY2FsZS5zZXRUbygwLjk5NSwgMTEpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwgPSAnU2NvcmU6ICc7XG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgMjAsIDE0LCB0aGlzLnNjb3JlTGFiZWwgKyB0aGlzLnNjb3JlLCB7XG4gICAgICAgICAgICBmb250OiAnMTNweCBWZXJkYW5hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJnKTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhiYXIpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnNjb3JlVGV4dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhbHRoKHBsYXllcikge1xuICAgICAgICB0aGlzLmhlYWx0aGJhci5jcm9wKG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIDAsICh0aGlzLnBsYXllci5oZWFsdGggLyB0aGlzLnBsYXllci5tYXhIZWFsdGgpICogdGhpcy53aWR0aCwgMTApKTtcbiAgICAgICAgdGhpcy5oZWFsdGhiYXIudXBkYXRlQ3JvcCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKGFtb3VudCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IGFtb3VudDtcbiAgICAgICAgdGhpcy5zY29yZVRleHQudGV4dCA9IHRoaXMuc2NvcmVMYWJlbCArICh0aGlzLnNjb3JlICogMTApO1xuICAgIH1cblxufTtcbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9idWxsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgeCwgeSwgYXNzZXQsIGZyYW1lLCBoZWFsdGggfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IGhlYWx0aDtcblxuXG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcbiAgICAgICAgLy9ncmF2aXR5XG4gICAgICAgIHRoaXMuYm9keS5ncmF2aXR5LnkgPSAxMDA7XG4gICAgICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICAvL1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5idWxsZXRzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gLTUwMDtcblxuICAgICAgICB0aGlzLnNob3RTb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQoJ3BsYXllclNob3QnKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgLy8gdGhpcy5nYW1lLmRlYnVnLmJvZHkodGhpcyk7XG5cblxuXG4gICAgICAgIC8vIGlmICh0aGlzLmdhbWUuaW5wdXQuYWN0aXZlUG9pbnRlci5pc0Rvd24pIHtcblxuICAgICAgICAgICAgbGV0IGxlZnRLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5MRUZUKTtcbiAgICAgICAgICAgIGxldCByaWdodEtleSA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlJJR0hUKTtcbiAgICAgICAgICAgIGlmKGxlZnRLZXkpe1xuICAgICAgICAgICAgICAgIHRoaXMueCAtPSA2O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJpZ2h0S2V5KXtcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gNjtcblxuICAgICAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICAgICAgbGV0IGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFidWxsZXQpIHtcbiAgICAgICAgICAgIGJ1bGxldCA9IG5ldyBCdWxsZXQoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy50b3AsXG4gICAgICAgICAgICAgICAgLy8zXG4gICAgICAgICAgICAgICAgaGVhbHRoOiAxLFxuICAgICAgICAgICAgICAgIGFzc2V0OiAnYnVsbGV0JyxcbiAgICAgICAgICAgICAgICB0aW50OiAweDA0YzExMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjaGFuZ2UgdGhpcyBudW1iZXIgdG8gc2hvb3QgbGVzcyBidWxsZXRzIGF0IGEgdGltZVxuICAgICAgICAgICAgaWYodGhpcy5idWxsZXRzLmNoaWxkcmVuLmxlbmd0aCA8PSA1KXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3RTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5hZGQoYnVsbGV0KTtcblxuICAgICAgICAgICAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJ1bGxldFNwZWVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG90U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLngsIHRoaXMudG9wLCAxKTtcbiAgICAgICAgICAgIGJ1bGxldC5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJ1bGxldFNwZWVkO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGRhbWFnZShhbW91bnQpIHtcbiAgICAgICAgc3VwZXIuZGFtYWdlKGFtb3VudCk7XG4gICAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnbG9hZGVyQmcnLCAnaW1nL2xvYWRlci1iZy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdsb2FkZXJCYXInLCAnaW1nL2xvYWRlci1iYXIucG5nJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG5cbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBCb290fSBmcm9tICcuL2Jvb3QnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFByZWxvYWR9IGZyb20gJy4vcHJlbG9hZCc7XG5leHBvcnQge2RlZmF1bHQgYXMgTWVudX0gZnJvbSAnLi9tZW51Jztcbi8vZ2FtZTFcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQbGF5fSBmcm9tICcuL3BsYXknO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE92ZXJ9IGZyb20gJy4vb3Zlcic7XG5cbi8vcGFuZ0J0blxuZXhwb3J0IHtkZWZhdWx0IGFzIFBsYXlQYW5nfSBmcm9tICcuL3BsYXlQYW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYW5nT3Zlcn0gZnJvbSAnLi9wYW5nT3Zlcic7XG5cbi8vZ2FtZTNcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQbGF5UGFpcnN9IGZyb20gJy4vcGxheVBhaXJzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYWlyc092ZXJ9IGZyb20gJy4vcGFpcnNPdmVyJztcbiIsImltcG9ydCBUZXh0QnV0dG9uIGZyb20gJy4uL2V4dGVuc2lvbnMvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTIwMCwgJ0Nob29zZSBhIGdhbWUhJywge1xuICAgICAgICAgICAgZm9udDogJzM2cHggVGFob21hJyxcbiAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGl0bGUuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdtZW51TXVzaWMnKTtcblxuXG4gICAgICAgIHRoaXMubGVmdEJ0biA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYIC0gMjAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ0xlZnRCdG4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLmxlZnRCdG4uc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5sZWZ0QnRuLnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLmxlZnRCdG4uc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLmxlZnRCdG4ub25JbnB1dFVwLmFkZCgoKT0+e1xuICAgICAgICAgICAgLy90aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXlQYWlycycpO1xuXG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICAvLyBTZWNvbmQgQnRuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdTdGFydCcsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5zdGFydC5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dFVwLmFkZCgoKT0+e1xuICAgICAgICAgICAgLy90aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXknKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcmQgQnRuXG4gICAgICAgIHRoaXMucGFuZ0J0biA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYICsgMjAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ1BhbmctbGlrZSEnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLnBhbmdCdG4uc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgdGhpcy5wYW5nQnRuLnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnBhbmdCdG4uc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcblxuICAgICAgICB0aGlzLnBhbmdCdG4ub25JbnB1dFVwLmFkZCgoKT0+e1xuICAgICAgICAgICAgLy90aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXlQYW5nJyk7XG5cblxuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgdGhpcy5tZW51UGFuZWwgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbC5hZGQodGhpcy50aXRsZSk7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLmxlZnRCdG4pO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbC5hZGQodGhpcy5zdGFydCk7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLnBhbmdCdG4pO1xuXG4gICAgICAgIC8vdGhpcy5tdXNpYy5sb29wRnVsbCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUZXh0QnV0dG9uIGZyb20gJy4uL2V4dGVuc2lvbnMvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdHYW1lIG92ZXInLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdUcnkgYWdhaW4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZKzMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICB0aGlzLm1lbnUuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vZXh0ZW5zaW9ucy90ZXh0YnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZ092ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdQYW5nIEdhbWUgb3ZlcicsIHtcbiAgICAgICAgICAgIGZvbnQ6ICczNnB4IFRhaG9tYScsXG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ1RyeSBhZ2FpbicsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkrMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ01lbnUnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLnN0YXJ0LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXlQYW5nJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vZXh0ZW5zaW9ucy90ZXh0YnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZ092ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdQYW5nIEdhbWUgb3ZlcicsIHtcbiAgICAgICAgICAgIGZvbnQ6ICczNnB4IFRhaG9tYScsXG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGl0bGUuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclktMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ1RyeSBhZ2FpbicsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBUZXh0QnV0dG9uKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkrMzAsXG4gICAgICAgICAgICBhc3NldDogJ2J1dHRvbicsXG4gICAgICAgICAgICBvdmVyRnJhbWU6IDIsXG4gICAgICAgICAgICBvdXRGcmFtZTogMSxcbiAgICAgICAgICAgIGRvd25GcmFtZTogMCxcbiAgICAgICAgICAgIHVwRnJhbWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ01lbnUnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bk92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3ZlcicpO1xuICAgICAgICB0aGlzLmJ0bk91dFNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdXQnKTtcbiAgICAgICAgdGhpcy5idG5Eb3duU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudURvd24nKTtcblxuICAgICAgICB0aGlzLnN0YXJ0LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIHRoaXMuc3RhcnQuc2V0RG93blNvdW5kKHRoaXMuYnRuRG93blNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE92ZXJTb3VuZCh0aGlzLmJ0bk92ZXJTb3VuZCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgdGhpcy5tZW51LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG5cbiAgICAgICAgdGhpcy5zdGFydC5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1BsYXlQYW5nJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wcmVmYWJzL3BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vcHJlZmFicy9lbmVteSc7XG5pbXBvcnQgSFVEIGZyb20gJy4uL3ByZWZhYnMvaHVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vZmFyYmFjayA9IGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5mYXJiYWNrID0gdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLCA4MDAsIDIzODAsICdmYXJiYWNrJyk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAwO1xuXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiAwLjkyICogdGhpcy5nYW1lLndvcmxkLmhlaWdodCxcbiAgICAgICAgICAgIGhlYWx0aDogMTAwLFxuICAgICAgICAgICAgYXNzZXQ6ICdzbWFsbGZpZ2h0ZXInLFxuICAgICAgICAgICAgZnJhbWU6IDFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBsYXllcik7XG5cbiAgICAgICAgdGhpcy5odWQgPSBuZXcgSFVEKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHBsYXllcjogdGhpcy5wbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vblVwLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbmVteVRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSAxLjU7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdEludGVydmFsID0gMC4xNjtcblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05EICogMTAsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlJbnRlcnZhbCA+IDAuOSApe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCAtPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcCA9IHRoaXMuYWRkLmJpdG1hcERhdGEodGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwLmN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgdGhpcy5vdmVybGF5Qml0bWFwKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFscGhhID0gMC43NTtcblxuICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdwbGF5TXVzaWMnKTtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdidWxsZXRIaXQnKTtcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2VuZW15RXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgncGxheWVyRXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdnYW1lT3ZlcicpO1xuXG4gICAgICAgIC8vdGhpcy5tdXNpYy5sb29wRnVsbCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLmVuZW15VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5lbmVteVNob290VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lID4gdGhpcy5lbmVteUludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15VGltZSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMCAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhbHRoOiA5LFxuICAgICAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgICAgICBhc3NldDogJ2FsaWVuJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmVteVNob290VGltZSA+IHRoaXMuZW5lbXlTaG9vdEludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoQWxpdmUoZW5lbXkgPT4gZW5lbXkuc2hvb3QoKSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllclNob290VGltZSA+IHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvb3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLmJ1bGxldHMsIHRoaXMuZW5lbWllcywgdGhpcy5oaXRFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIsIHRoaXMuZW5lbWllcywgdGhpcy5jcmFzaEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllciwgZW5lbXkuYnVsbGV0cywgdGhpcy5oaXRQbGF5ZXIsIG51bGwsIHRoaXMpKTtcblxuICAgICAgICB0aGlzLmZhcmJhY2sudGlsZVBvc2l0aW9uLnkgKz0gMztcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcblxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICBlbmVteSA9IG5ldyBFbmVteShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5hZGQoZW5lbXkpO1xuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGhpdEVmZmVjdChvYmosIGNvbG9yKSB7XG4gICAgICAgIGxldCB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4ob2JqKTtcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIoKTtcbiAgICAgICAgbGV0IGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgIGxldCBwYXJ0aWNsZVNwZWVkID0gMTAwO1xuICAgICAgICBsZXQgbWF4UGFydGljbGVzID0gMTA7XG5cbiAgICAgICAgdHdlZW4udG8oe3RpbnQ6IDB4ZmYwMDAwfSwgMTAwKTtcbiAgICAgICAgdHdlZW4ub25Db21wbGV0ZS5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgb2JqLnRpbnQgPSAweGZmZmZmZjtcbiAgICAgICAgfSk7XG4gICAgICAgIHR3ZWVuLnN0YXJ0KCk7XG5cbiAgICAgICAgZW1pdHRlci54ID0gb2JqLng7XG4gICAgICAgIGVtaXR0ZXIueSA9IG9iai55O1xuICAgICAgICBlbWl0dGVyLmdyYXZpdHkgPSAwO1xuICAgICAgICBlbWl0dGVyLm1ha2VQYXJ0aWNsZXMoJ3BhcnRpY2xlJyk7XG5cbiAgICAgICAgaWYgKG9iai5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgcGFydGljbGVTcGVlZCA9IDIwMDtcbiAgICAgICAgICAgIG1heFBhcnRpY2xlcyA9IDQwO1xuICAgICAgICAgICAgY29sb3IgPSAweGZmMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIubWluUGFydGljbGVTcGVlZC5zZXRUbygtcGFydGljbGVTcGVlZCwgLXBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLm1heFBhcnRpY2xlU3BlZWQuc2V0VG8ocGFydGljbGVTcGVlZCwgcGFydGljbGVTcGVlZCk7XG4gICAgICAgIGVtaXR0ZXIuc3RhcnQodHJ1ZSwgNTAwLCBudWxsLCBtYXhQYXJ0aWNsZXMpO1xuICAgICAgICBlbWl0dGVyLnVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgICAgIGlmKGVtaXR0ZXJQaHlzaWNzVGltZSA+PSAwLjYpe1xuICAgICAgICAgICAgICAgIGVtaXR0ZXJQaHlzaWNzVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgZW1pdHRlci5mb3JFYWNoKHBhcnRpY2xlID0+IHBhcnRpY2xlLnRpbnQgPSBjb2xvcik7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5icmluZ1RvVG9wKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXRFbmVteShidWxsZXQsIGVuZW15KSB7XG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgZW5lbXkuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSwgYnVsbGV0LnRpbnQpO1xuICAgICAgICBpZiAoIWVuZW15LmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9zaW9uU291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgICAgIHRoaXMuaHVkLnVwZGF0ZVNjb3JlKGVuZW15Lm1heEhlYWx0aCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVsbGV0LmtpbGwoKTtcbiAgICB9XG5cbiAgICBoaXRQbGF5ZXIocGxheWVyLCBidWxsZXQpIHtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICBwbGF5ZXIuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgdGhpcy5oaXRFZmZlY3QocGxheWVyLCBidWxsZXQudGludCk7XG4gICAgICAgIGlmICghcGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvc2lvblNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBidWxsZXQua2lsbCgpO1xuICAgIH1cblxuICAgIGNyYXNoRW5lbXkocGxheWVyLCBlbmVteSkge1xuICAgICAgICBlbmVteS5kYW1hZ2UoZW5lbXkuaGVhbHRoKTtcbiAgICAgICAgcGxheWVyLmRhbWFnZShlbmVteS5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChwbGF5ZXIpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSk7XG4gICAgICAgIGlmICghZW5lbXkuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgdGhpcy5odWQudXBkYXRlU2NvcmUoZW5lbXkubWF4SGVhbHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDM7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgbGV0IHRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKHRoaXMuZ2FtZSwgdHJ1ZSk7XG4gICAgICAgIHRpbWVyLmFkZCgzMDAwLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ092ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRW5lbXkgZnJvbSAnLi4vcHJlZmFicy9lbmVteVBhbmcnO1xuaW1wb3J0IEhVRCBmcm9tICcuLi9wcmVmYWJzL2h1ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlQYWlycyBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG5cblxuICAgICAgICB0aGlzLmJnID0gdGhpcy5hZGQudGlsZVNwcml0ZSgwLCAwLDY2Niw2MDAsICdwYW5nQmcnKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iZyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmxvYWRNZW51KCk7XG4gICAgfVxuICAgIGxvYWRNZW51KCl7XG4gICAgICAgIGxldCBlc2NLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5FU0MpO1xuICAgICAgICBpZihlc2NLZXkpe1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG5cbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wcmVmYWJzL3BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vcHJlZmFicy9lbmVteVBhbmcnO1xuaW1wb3J0IEhVRCBmcm9tICcuLi9wcmVmYWJzL2h1ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlQYW5nIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5iZyA9IHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCwgMjAwMCwgMjM4MCwgJ3BhbmdCZycpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMDtcblxuXG4gICAgICAgIC8vIC0tLS0tLS0gUExBWUVSXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IDAuOTIgKiB0aGlzLmdhbWUud29ybGQuaGVpZ2h0LFxuICAgICAgICAgICAgaGVhbHRoOiAxMCxcbiAgICAgICAgICAgIGFzc2V0OiAnc21hbGxmaWdodGVyJyxcbiAgICAgICAgICAgIGZyYW1lOiAyXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wbGF5ZXIpO1xuICAgICAgICB0aGlzLnBsYXllclNob290VGltZSA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCA9IDAuMTY7XG5cbiAgICAgICAgLy8gLS0tLS0tLSBFTkVNWTogdGhlc2Ugb25lcyBhcmUgY3JlYXRlZCBldmVyeSB1cGRhdGUgdGlja1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmVuZW1pZXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5lbXlUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzEuNVxuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSAyLjU7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIC8vIC0tLS0tLS0gIUVORU1ZXG5cbiAgICAgICAgLy8gLS0tLS0tLSBzbWFsbGVyRU5FTVk6IHRoaXMgb25lcyBhcmUgY3JlYXRlZCBldmVyeSB1cGRhdGUgdGlja1xuICAgICAgICB0aGlzLnNtYWxsZXJFbmVtaWVzID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5zbWFsbGVyRW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgLy8gLS0tLS0tLSAhc21hbGxlckVORU1ZXG5cblxuICAgICAgICAvLyAtLS0tLS0tIEVORU1ZIENMSUVOVDogcmFuZG9tbHkgY2hvc2VuXG4gICAgICAgIHRoaXMuZW5lbWllc0NsaWVudCA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllc0NsaWVudC5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgLy8xLjVcbiAgICAgICAgdGhpcy5lbmVteUNsaWVudEludGVydmFsID0gMi4wO1xuICAgICAgICB0aGlzLmVuZW15Q2xpZW50U2hvb3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmVteUNsaWVudFNob290SW50ZXJ2YWwgPSAxO1xuICAgICAgICAgICAgLy9pbml0aWFsaXplIGZpcnN0IGNsaWVudFxuICAgICAgICB0aGlzLmNyZWF0ZUVuZW15Q2xpZW50KHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNiwgNzYpICogMTAsXG4gICAgICAgICAgICAvLzBcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogMTAgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vOVxuICAgICAgICAgICAgaGVhbHRoOiA5MCxcbiAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgIGFzc2V0OiAnYWxpZW5zJyxcbiAgICAgICAgICAgIHNpemU6IDAuOFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gLS0tLS0tLSAhRU5FTVkgQ0xJRU5UOiByYW5kb21seSBjaG9zZW5cblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05EICogMTAsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlJbnRlcnZhbCA+IDAuMiApe1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCAtPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcCA9IHRoaXMuYWRkLmJpdG1hcERhdGEodGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwLmN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMub3ZlcmxheUJpdG1hcC5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgdGhpcy5vdmVybGF5Qml0bWFwKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFscGhhID0gMC43NTtcblxuICAgICAgICB0aGlzLmh1ZCA9IG5ldyBIVUQoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgcGxheWVyOiB0aGlzLnBsYXllclxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtLS0tLS0tIFNPVU5EU1xuICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdwbGF5TXVzaWMnKTtcbiAgICAgICAgdGhpcy5idWxsZXRIaXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdidWxsZXRIaXQnKTtcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2VuZW15RXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgncGxheWVyRXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdnYW1lT3ZlcicpO1xuXG4gICAgICAgIC8vdGhpcy5tdXNpYy5sb29wRnVsbCgpO1xuXG5cblxuICAgICAgICAvL0RlZmF1bHRzXG4gICAgICAgIC8vdGhpcy5lbmVteVRpbWUgPSAwO1xuICAgICAgICAvL3RoaXMuZW5lbXlJbnRlcnZhbCA9IDEuNTtcbiAgICAgICAgLy90aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgLy90aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDE7XG4gICAgICAgIC8vdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAvL3RoaXMucGxheWVyU2hvb3RJbnRlcnZhbCA9IDAuMTY7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmVuZW15VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5lbmVteVNob290VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlUaW1lID4gdGhpcy5lbmVteUludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15VGltZSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgICAgIC8vMFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMCAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSg1LCAxMCkgKiAxMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy85XG4gICAgICAgICAgICAgICAgaGVhbHRoOiA5LFxuICAgICAgICAgICAgICAgIGJ1bGxldFNwZWVkOiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDEwLCAyMCkgKiAxMCxcbiAgICAgICAgICAgICAgICBhc3NldDogJ2FsaWVuJyxcbiAgICAgICAgICAgICAgICBzaXplOiAyLjVcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmVteVNob290VGltZSA+IHRoaXMuZW5lbXlTaG9vdEludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lID0gMDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGFzIG11ZXJ0b1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllclNob290VGltZSA+IHRoaXMucGxheWVyU2hvb3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNob290S2V5ID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIpO1xuICAgICAgICAgICAgICAgIGlmKHNob290S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNob290KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIuYnVsbGV0cywgdGhpcy5lbmVtaWVzLCB0aGlzLmhpdEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllci5idWxsZXRzLCB0aGlzLnNtYWxsZXJFbmVtaWVzLCB0aGlzLmhpdEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllciwgW3RoaXMuZW5lbWllcyx0aGlzLnNtYWxsZXJFbmVtaWVzXSwgdGhpcy5jcmFzaEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmxvYWRNZW51KCk7XG4gICAgICAgIC8vIHRoaXMuYmcudGlsZVBvc2l0aW9uLnggKz0gMztcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzLmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgbGV0IHRvdGFsRW5lbWllcyA9IHRoaXMuZW5lbWllcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsRW5lbWllcyk7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICBpZih0b3RhbEVuZW1pZXMgPCA1KXtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuYWRkKGVuZW15KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVuZW15LnJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNtYWxsZXJFbmVteShkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5zbWFsbGVyRW5lbWllcy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG4gICAgICAgIGxldCB0b3RhbEVuZW1pZXMgPSB0aGlzLnNtYWxsZXJFbmVtaWVzLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICBpZiAoIWVuZW15KSB7XG4gICAgICAgICAgICBlbmVteSA9IG5ldyBFbmVteShkYXRhKTtcbiAgICAgICAgICAgIGlmKHRvdGFsRW5lbWllcyA8IDI0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnNtYWxsZXJFbmVtaWVzLmFkZChlbmVteSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteUNsaWVudChkYXRhKSB7XG5cbiAgICAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzQ2xpZW50LmdldEZpcnN0RXhpc3RzKGZhbHNlKTtcbiAgICAgICAgbGV0IHRvdGFsRW5lbWllcyA9IHRoaXMuZW5lbWllc0NsaWVudC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsRW5lbWllcyk7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICBpZih0b3RhbEVuZW1pZXMgPD0gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzQ2xpZW50LmFkZChlbmVteSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBoaXRFZmZlY3Qob2JqLCBjb2xvcikge1xuICAgICAgICBsZXQgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKG9iaik7XG4gICAgICAgIGxldCBlbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKCk7XG4gICAgICAgIGxldCBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICBsZXQgcGFydGljbGVTcGVlZCA9IDEwMDtcbiAgICAgICAgbGV0IG1heFBhcnRpY2xlcyA9IDEwO1xuXG4gICAgICAgIHR3ZWVuLnRvKHt0aW50OiAweGZmMDAwMH0sIDEwMCk7XG4gICAgICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIG9iai50aW50ID0gMHhmZmZmZmY7XG4gICAgICAgIH0pO1xuICAgICAgICB0d2Vlbi5zdGFydCgpO1xuXG4gICAgICAgIGVtaXR0ZXIueCA9IG9iai54O1xuICAgICAgICBlbWl0dGVyLnkgPSBvYmoueTtcbiAgICAgICAgZW1pdHRlci5ncmF2aXR5ID0gMDtcbiAgICAgICAgZW1pdHRlci5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZScpO1xuXG4gICAgICAgIGlmIChvYmouaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHBhcnRpY2xlU3BlZWQgPSAyMDA7XG4gICAgICAgICAgICBtYXhQYXJ0aWNsZXMgPSA0MDtcbiAgICAgICAgICAgIGNvbG9yID0gMHhmZjAwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBlbWl0dGVyLm1pblBhcnRpY2xlU3BlZWQuc2V0VG8oLXBhcnRpY2xlU3BlZWQsIC1wYXJ0aWNsZVNwZWVkKTtcbiAgICAgICAgZW1pdHRlci5tYXhQYXJ0aWNsZVNwZWVkLnNldFRvKHBhcnRpY2xlU3BlZWQsIHBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLnN0YXJ0KHRydWUsIDUwMCwgbnVsbCwgbWF4UGFydGljbGVzKTtcbiAgICAgICAgZW1pdHRlci51cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgICAgICBpZihlbWl0dGVyUGh5c2ljc1RpbWUgPj0gMC42KXtcbiAgICAgICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIGVtaXR0ZXIuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS50aW50ID0gY29sb3IpO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGl0RW5lbXkoYnVsbGV0LCBlbmVteSkge1xuXG4gICAgICAgIHRoaXMuYnVsbGV0SGl0U291bmQucGxheShcIlwiLDAsMC41KTtcbiAgICAgICAgZW5lbXkuZGFtYWdlKGJ1bGxldC5oZWFsdGgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSwgYnVsbGV0LnRpbnQpO1xuXG4gICAgICAgIGlmICghZW5lbXkuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZC5wbGF5KFwiXCIsIDAsIDAuNSk7XG4gICAgICAgICAgICB0aGlzLmh1ZC51cGRhdGVTY29yZShlbmVteS5tYXhIZWFsdGgpO1xuICAgICAgICAgICAgc3dpdGNoKGVuZW15LnNpemUpe1xuICAgICAgICAgICAgICAgIC8vTGFyZ2UgLT4gTWVkaXVtXG4gICAgICAgICAgICAgICAgY2FzZSAyLjU6XG4gICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNtYWxsZXJFbmVteSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlbmVteS54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZW5lbXkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMjUgKiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtMzAgKiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWx0aDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRTcGVlZDogdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgxMCwgMjApICogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogJ2FsaWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEuNVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU21hbGxlckVuZW15KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGVuZW15LngsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IC0yNSAqIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0zMCAqIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsdGg6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6ICdhbGllbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxLjVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVsbGV0LmtpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyYXNoRW5lbXkocGxheWVyLCBlbmVteSkge1xuICAgICAgICAvL2VuZW15LmRhbWFnZShlbmVteS5oZWFsdGgpO1xuICAgICAgICBlbmVteS5kYW1hZ2UoMyk7XG4gICAgICAgIC8vcGxheWVyLmRhbWFnZShlbmVteS5oZWFsdGgpO1xuICAgICAgICBwbGF5ZXIuZGFtYWdlKDEpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChwbGF5ZXIpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChlbmVteSk7XG4gICAgICAgIGlmICghZW5lbXkuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgdGhpcy5odWQudXBkYXRlU2NvcmUoZW5lbXkubWF4SGVhbHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh1ZC51cGRhdGVIZWFsdGgoKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDM7XG4gICAgICAgIHRoaXMub3ZlcmxheS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lLndvcmxkLmJyaW5nVG9Ub3AodGhpcy5vdmVybGF5KTtcbiAgICAgICAgbGV0IHRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKHRoaXMuZ2FtZSwgdHJ1ZSk7XG4gICAgICAgIHRpbWVyLmFkZCgzMDAwLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLm11c2ljLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BhbmdPdmVyJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgIH1cblxuICAgIGxvYWRNZW51KCl7XG4gICAgICAgIGxldCBlc2NLZXkgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5FU0MpO1xuICAgICAgICBpZihlc2NLZXkpe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2lsbCgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcblxuICAgICAgICB0aGlzLmxvYWRlckJnID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ2xvYWRlckJnJyk7XG4gICAgICAgIHRoaXMubG9hZGVyQmFyID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ2xvYWRlckJhcicpO1xuICAgICAgICB0aGlzLmxvYWRlckJnLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLmxvYWRlckJhci5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmxvYWRlckJhcik7XG4gICAgICAgIC8vZ2FtZSAxXG4gICAgICAgIHRoaXMubG9hZC5hdGxhc0pTT05BcnJheSgnc21hbGxmaWdodGVyJywgJ2ltZy9zcHJpdGVzaGVldC9zbWFsbGZpZ2h0ZXIucG5nJywgJ2RhdGEvc3ByaXRlc2hlZXQvc21hbGxmaWdodGVyLmpzb24nKTtcbiAgICAgICAgdGhpcy5sb2FkLmF0bGFzSlNPTkFycmF5KCdhbGllbicsICdpbWcvc3ByaXRlc2hlZXQvYWxpZW4ucG5nJywgJ2RhdGEvc3ByaXRlc2hlZXQvYWxpZW4uanNvbicpO1xuICAgICAgICB0aGlzLmxvYWQuYXRsYXNKU09OQXJyYXkoJ2J1dHRvbicsICdpbWcvc3ByaXRlc2hlZXQvYnV0dG9uLnBuZycsICdkYXRhL3Nwcml0ZXNoZWV0L2J1dHRvbi5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmFyYmFjaycsICdpbWcvZmFyYmFjay5qcGcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnaW1nL2J1bGxldC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwYXJ0aWNsZScsICdpbWcvcGFydGljbGUuZ2lmJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaGVhbHRoYmFyJywgJ2ltZy9oZWFsdGhiYXIucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaHVkQmcnLCAnaW1nL2h1ZC1iZy5wbmcnKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXlNdXNpYycsIFsnYXVkaW8vbXVzaWMvcGxheS5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudU11c2ljJywgWydhdWRpby9tdXNpYy9tZW51Lm1wMyddKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVPdmVyJywgWydhdWRpby9zb3VuZC9tZW51LW92ZXIubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVPdXQnLCBbJ2F1ZGlvL3NvdW5kL21lbnUtb3V0Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtZW51RG93bicsIFsnYXVkaW8vc291bmQvbWVudS1jbGljay5tcDMnXSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdidWxsZXRIaXQnLCBbJ2F1ZGlvL3NvdW5kL2J1bGxldC1oaXQubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2VuZW15U2hvdCcsIFsnYXVkaW8vc291bmQvZW5lbXktc2hvdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZW5lbXlFeHBsb3Npb24nLCBbJ2F1ZGlvL3NvdW5kL2VuZW15LWV4cGxvc2lvbi5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyU2hvdCcsIFsnYXVkaW8vc291bmQvcGxheWVyLXNob3QubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXllckV4cGxvc2lvbicsIFsnYXVkaW8vc291bmQvcGxheWVyLWV4cGxvc2lvbi5tcDMnXSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdnYW1lT3ZlcicsIFsnYXVkaW8vc291bmQvZ2FtZS1vdmVyLm1wMyddKTtcbiAgICAgICAgLy8hZ2FtZSAxXG5cblxuICAgICAgICAvL2dhbWUgMlxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BhbmdCZycsICdpbWcvcGFuZ0JnLnBuZycpO1xuXG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdNZW51Jyk7XG4gICAgfVxuXG59XG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSnpjbU12YW5NdlpYaDBaVzV6YVc5dWN5OTBaWGgwWW5WMGRHOXVMbXB6SWl3aWMzSmpMMnB6TDJkaGJXVXVhbk1pTENKemNtTXZhbk12Y0hKbFptRmljeTlpZFd4c1pYUXVhbk1pTENKemNtTXZhbk12Y0hKbFptRmljeTlsYm1WdGVTNXFjeUlzSW5OeVl5OXFjeTl3Y21WbVlXSnpMMlZ1WlcxNVVHRnVaeTVxY3lJc0luTnlZeTlxY3k5d2NtVm1ZV0p6TDJoMVpDNXFjeUlzSW5OeVl5OXFjeTl3Y21WbVlXSnpMM0JzWVhsbGNpNXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZZbTl2ZEM1cWN5SXNJbk55WXk5cWN5OXpkR0YwWlhNdmFXNWtaWGd1YW5NaUxDSnpjbU12YW5NdmMzUmhkR1Z6TDIxbGJuVXVhbk1pTENKemNtTXZhbk12YzNSaGRHVnpMMjkyWlhJdWFuTWlMQ0p6Y21NdmFuTXZjM1JoZEdWekwzQmhhWEp6VDNabGNpNXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZjR0Z1WjA5MlpYSXVhbk1pTENKemNtTXZhbk12YzNSaGRHVnpMM0JzWVhrdWFuTWlMQ0p6Y21NdmFuTXZjM1JoZEdWekwzQnNZWGxRWVdseWN5NXFjeUlzSW5OeVl5OXFjeTl6ZEdGMFpYTXZjR3hoZVZCaGJtY3Vhbk1pTENKemNtTXZhbk12YzNSaGRHVnpMM0J5Wld4dllXUXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdTVU5CY1VJc1ZUczdPMEZCUldwQ0xEaENRVUZ4U0R0QlFVRkJMRmxCUVhaSExFbEJRWFZITEZGQlFYWkhMRWxCUVhWSE8wRkJRVUVzV1VGQmFrY3NRMEZCYVVjc1VVRkJha2NzUTBGQmFVYzdRVUZCUVN4WlFVRTVSaXhEUVVFNFJpeFJRVUU1Uml4RFFVRTRSanRCUVVGQkxGbEJRVE5HTEV0QlFUSkdMRkZCUVROR0xFdEJRVEpHTzBGQlFVRXNXVUZCY0VZc1VVRkJiMFlzVVVGQmNFWXNVVUZCYjBZN1FVRkJRU3haUVVFeFJTeGxRVUV3UlN4UlFVRXhSU3hsUVVFd1JUdEJRVUZCTEZsQlFYcEVMRk5CUVhsRUxGRkJRWHBFTEZOQlFYbEVPMEZCUVVFc1dVRkJPVU1zVVVGQk9FTXNVVUZCT1VNc1VVRkJPRU03UVVGQlFTeFpRVUZ3UXl4VFFVRnZReXhSUVVGd1F5eFRRVUZ2UXp0QlFVRkJMRmxCUVhwQ0xFOUJRWGxDTEZGQlFYcENMRTlCUVhsQ08wRkJRVUVzV1VGQmFFSXNTMEZCWjBJc1VVRkJhRUlzUzBGQlowSTdRVUZCUVN4WlFVRlVMRXRCUVZNc1VVRkJWQ3hMUVVGVE96dEJRVUZCT3p0QlFVRkJMRFJJUVVNelJ5eEpRVVF5Unl4RlFVTnlSeXhEUVVSeFJ5eEZRVU5zUnl4RFFVUnJSeXhGUVVNdlJpeExRVVFyUml4RlFVTjRSaXhSUVVSM1JpeEZRVU01UlN4bFFVUTRSU3hGUVVNM1JDeFRRVVEyUkN4RlFVTnNSQ3hSUVVSclJDeEZRVU40UXl4VFFVUjNReXhGUVVNM1FpeFBRVVEyUWpzN1FVRkhha2dzWTBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRnJRaXhIUVVGc1FqczdRVUZGUVN4alFVRkxMRXRCUVV3c1IwRkJZU3hMUVVGaU8wRkJRMEVzWTBGQlN5eExRVUZNTEVkQlFXRXNTMEZCWWp0QlFVTkJMR05CUVVzc1NVRkJUQ3hIUVVGWkxFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRTFCUVVzc1NVRkJja0lzUlVGQk1rSXNRMEZCTTBJc1JVRkJPRUlzUTBGQk9VSXNSVUZCYVVNc1RVRkJTeXhMUVVGMFF5eEZRVUUyUXl4TlFVRkxMRXRCUVd4RUxFTkJRVm83UVVGRFFTeGpRVUZMTEVsQlFVd3NRMEZCVlN4TlFVRldMRU5CUVdsQ0xFdEJRV3BDTEVOQlFYVkNMRWRCUVhaQ096dEJRVVZCTEdOQlFVc3NVVUZCVEN4RFFVRmpMRTFCUVVzc1NVRkJia0k3TzBGQlZtbElPMEZCV1hCSU96czdSVUZrYlVNc1QwRkJUeXhOT3p0clFrRkJNVUlzVlRzN096czdRVU5CY2tJN08wbEJRVmtzVFRzN096dEJRVU5hTEVsQlFVMHNUMEZCVHl4SlFVRkpMRTlCUVU4c1NVRkJXQ3hEUVVGblFpeEhRVUZvUWl4RlFVRnhRaXhKUVVGeVFpeEZRVUV5UWl4UFFVRlBMRWxCUVd4RExFTkJRV0k3TzBGQlJVRXNUMEZCVHl4SlFVRlFMRU5CUVZrc1RVRkJXaXhGUVVGdlFpeFBRVUZ3UWl4RFFVRTBRanRCUVVGQkxGTkJRVk1zUzBGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4RFFVRmxMRXRCUVdZc1JVRkJjMElzVDBGQlR5eExRVUZRTEVOQlFYUkNMRU5CUVZRN1FVRkJRU3hEUVVFMVFqczdRVUZGUVN4TFFVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEUxQlFXcENPenM3T3pzN096czdPenM3T3pzN1NVTk1jVUlzVFRzN08wRkJSV3BDTERCQ1FVRTBSRHRCUVVGQkxGbEJRVGxETEVsQlFUaERMRkZCUVRsRExFbEJRVGhETzBGQlFVRXNXVUZCZUVNc1EwRkJkME1zVVVGQmVFTXNRMEZCZDBNN1FVRkJRU3haUVVGeVF5eERRVUZ4UXl4UlFVRnlReXhEUVVGeFF6dEJRVUZCTEZsQlFXeERMRXRCUVd0RExGRkJRV3hETEV0QlFXdERPMEZCUVVFc1dVRkJNMElzVFVGQk1rSXNVVUZCTTBJc1RVRkJNa0k3UVVGQlFTdzJRa0ZCYmtJc1NVRkJiVUk3UVVGQlFTeFpRVUZ1UWl4SlFVRnRRaXcyUWtGQldpeFJRVUZaT3p0QlFVRkJPenRCUVVGQkxHOUlRVU5zUkN4SlFVUnJSQ3hGUVVNMVF5eERRVVEwUXl4RlFVTjZReXhEUVVSNVF5eEZRVU4wUXl4TFFVUnpRenM3UVVGSGVFUXNZMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJXaXhEUVVGclFpeEhRVUZzUWp0QlFVTkJMR05CUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNSMEZCYWtJN1FVRkRRU3hqUVVGTExFMUJRVXdzUjBGQll5eE5RVUZrTzBGQlEwRXNZMEZCU3l4SlFVRk1MRWRCUVZrc1NVRkJXanRCUVVOQkxHTkJRVXNzWjBKQlFVd3NSMEZCZDBJc1NVRkJlRUk3UVVGRFFTeGpRVUZMTEdWQlFVd3NSMEZCZFVJc1NVRkJka0k3UVVGU2QwUTdRVUZUTTBRN096dEZRVmdyUWl4UFFVRlBMRTA3TzJ0Q1FVRjBRaXhOT3pzN096czdPenM3T3pzN08wRkRRWEpDT3pzN096czdPenM3T3pzN1NVRkZjVUlzU3pzN08wRkJSV3BDTEhsQ1FVRXJSRHRCUVVGQkxGbEJRV3BFTEVsQlFXbEVMRkZCUVdwRUxFbEJRV2xFTzBGQlFVRXNXVUZCTTBNc1EwRkJNa01zVVVGQk0wTXNRMEZCTWtNN1FVRkJRU3haUVVGNFF5eERRVUYzUXl4UlFVRjRReXhEUVVGM1F6dEJRVUZCTEZsQlFYSkRMRXRCUVhGRExGRkJRWEpETEV0QlFYRkRPMEZCUVVFc1dVRkJPVUlzUzBGQk9FSXNVVUZCT1VJc1MwRkJPRUk3UVVGQlFTeFpRVUYyUWl4TlFVRjFRaXhSUVVGMlFpeE5RVUYxUWp0QlFVRkJMRmxCUVdZc1YwRkJaU3hSUVVGbUxGZEJRV1U3TzBGQlFVRTdPMEZCUVVFc2EwaEJRM0pFTEVsQlJIRkVMRVZCUXk5RExFTkJSQ3RETEVWQlF6VkRMRU5CUkRSRExFVkJRM3BETEV0QlJIbERMRVZCUTJ4RExFdEJSR3RET3p0QlFVY3pSQ3hqUVVGTExFbEJRVXdzUjBGQldTeEpRVUZhT3p0QlFVVkJMR05CUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUTBGQmEwSXNSMEZCYkVJN1FVRkRRU3hqUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRWRCUVdwQ08wRkJRMEVzWTBGQlN5eE5RVUZNTEVkQlFXTXNUVUZCWkR0QlFVTkJMR05CUVVzc1UwRkJUQ3hIUVVGcFFpeE5RVUZxUWp0QlFVTkJMR05CUVVzc1NVRkJUQ3hEUVVGVkxFOUJRVllzUTBGQmEwSXNUVUZCYkVJc1EwRkJlVUlzVFVGQmVrSTdPMEZCUlVFc1kwRkJTeXhWUVVGTUxFTkJRV2RDTEVkQlFXaENMRU5CUVc5Q0xGVkJRWEJDTEVWQlFXZERMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eERRVUZRTEVWQlFWVXNRMEZCVml4RlFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNSVUZCYlVJc1EwRkJia0lzUlVGQmMwSXNRMEZCZEVJc1JVRkJlVUlzUTBGQmVrSXNSVUZCTkVJc1EwRkJOVUlzUlVGQkswSXNSVUZCTDBJc1JVRkJiVU1zUlVGQmJrTXNSVUZCZFVNc1JVRkJka01zUlVGQk1rTXNSVUZCTTBNc1JVRkJLME1zUlVGQkwwTXNRMEZCYUVNc1JVRkJiMFlzUlVGQmNFWXNSVUZCZDBZc1NVRkJlRVk3UVVGRFFTeGpRVUZMTEVsQlFVd3NRMEZCVlN4VlFVRldPenRCUVVWQkxHTkJRVXNzVDBGQlRDeEhRVUZsTEUxQlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhMUVVGa0xFVkJRV1k3UVVGRFFTeGpRVUZMTEU5QlFVd3NRMEZCWVN4VlFVRmlMRWRCUVRCQ0xFbEJRVEZDTzBGQlEwRXNZMEZCU3l4WFFVRk1MRWRCUVcxQ0xGZEJRVzVDT3p0QlFVVkJMR05CUVVzc1UwRkJUQ3hIUVVGcFFpeE5RVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1MwRkJaQ3hEUVVGdlFpeFhRVUZ3UWl4RFFVRnFRanM3UVVGc1FqSkVPMEZCYjBJNVJEczdPenRwUTBGRlVUczdRVUZGVEN4blFrRkJTU3hMUVVGTExGRkJRVXdzUTBGQll5eERRVUZrTEVkQlFXdENMRTlCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TFFVRTNReXhGUVVGdlJEdEJRVU5vUkN4eFFrRkJTeXhSUVVGTUxFTkJRV01zUTBGQlpDeEhRVUZyUWl4UFFVRlBMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNTMEZCZGtJc1IwRkJLMElzUTBGQmFrUTdRVUZEUVN4eFFrRkJTeXhKUVVGTUxFTkJRVlVzVVVGQlZpeERRVUZ0UWl4RFFVRnVRaXhKUVVGM1FpeERRVUZETEVOQlFYcENPMEZCUTBnc1lVRklSQ3hOUVVsTExFbEJRVWtzUzBGQlN5eFJRVUZNTEVOQlFXTXNRMEZCWkN4SFFVRnJRaXhQUVVGUExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1MwRkJOME1zUlVGQmIwUTdRVUZEY2tRc2NVSkJRVXNzVVVGQlRDeERRVUZqTEVOQlFXUXNSMEZCYTBJc1QwRkJUeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRXRCUVhaQ0xFZEJRU3RDTEVOQlFXcEVPMEZCUTBFc2NVSkJRVXNzU1VGQlRDeERRVUZWTEZGQlFWWXNRMEZCYlVJc1EwRkJia0lzU1VGQmQwSXNRMEZCUXl4RFFVRjZRanRCUVVOSU96dEJRVVZFTEdkQ1FVRkpMRXRCUVVzc1VVRkJUQ3hEUVVGakxFTkJRV1FzUjBGQmEwSXNTMEZCU3l4TlFVRk1MRWRCUVdNc1EwRkJhRU1zUjBGQmIwTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeE5RVUY0UkN4RlFVRm5SVHRCUVVNMVJDeHhRa0ZCU3l4SlFVRk1PMEZCUTBnN1FVRkRTanM3TzJkRFFVVlBPenRCUVVWS0xHbENRVUZMTEZOQlFVd3NRMEZCWlN4SlFVRm1MRU5CUVc5Q0xFVkJRWEJDTEVWQlFYVkNMRU5CUVhaQ0xFVkJRWGxDTEVkQlFYcENPenRCUVVWQkxHZENRVUZKTEZOQlFWTXNTMEZCU3l4UFFVRk1MRU5CUVdFc1kwRkJZaXhEUVVFMFFpeExRVUUxUWl4RFFVRmlPenRCUVVWQkxHZENRVUZKTEVOQlFVTXNUVUZCVEN4RlFVRmhPMEZCUTFRc2VVSkJRVk1zY1VKQlFWYzdRVUZEYUVJc01FSkJRVTBzUzBGQlN5eEpRVVJMTzBGQlJXaENMSFZDUVVGSExFdEJRVXNzUTBGR1VUdEJRVWRvUWl4MVFrRkJSeXhMUVVGTExFMUJTRkU3UVVGSmFFSXNORUpCUVZFc1EwRktVVHRCUVV0b1Fpd3lRa0ZCVHl4UlFVeFRPMEZCVFdoQ0xEQkNRVUZOTzBGQlRsVXNhVUpCUVZnc1EwRkJWRHRCUVZGQkxIRkNRVUZMTEU5QlFVd3NRMEZCWVN4SFFVRmlMRU5CUVdsQ0xFMUJRV3BDTzBGQlEwZ3NZVUZXUkN4TlFWZExPMEZCUTBRc2RVSkJRVThzUzBGQlVDeERRVUZoTEV0QlFVc3NRMEZCYkVJc1JVRkJjVUlzUzBGQlN5eE5RVUV4UWl4RlFVRnJReXhEUVVGc1F6dEJRVU5JT3p0QlFVVkVMRzFDUVVGUExFbEJRVkFzUTBGQldTeFJRVUZhTEVOQlFYRkNMRU5CUVhKQ0xFZEJRWGxDTEV0QlFVc3NWMEZCT1VJN1FVRkRTRHM3T3l0Q1FVVk5MRTBzUlVGQlVUdEJRVU5ZTEdsSVFVRmhMRTFCUVdJN1FVRkRTRHM3TzNGRFFVVXlRenRCUVVGQkxHZENRVUZ3UXl4RFFVRnZReXhUUVVGd1F5eERRVUZ2UXp0QlFVRkJMR2RDUVVGcVF5eERRVUZwUXl4VFFVRnFReXhEUVVGcFF6dEJRVUZCTEdkQ1FVRTVRaXhOUVVFNFFpeFRRVUU1UWl4TlFVRTRRanRCUVVGQkxHZENRVUYwUWl4WFFVRnpRaXhUUVVGMFFpeFhRVUZ6UWp0QlFVRkJMR2RDUVVGVUxFdEJRVk1zVTBGQlZDeExRVUZUT3p0QlFVTjRReXhuU0VGQldTeERRVUZhTEVWQlFXVXNRMEZCWml4RlFVRnJRaXhOUVVGc1FqdEJRVU5CTEdsQ1FVRkxMRmRCUVV3c1IwRkJiVUlzVjBGQmJrSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzVVVGQlZpeERRVUZ0UWl4RFFVRnVRaXhIUVVGMVFpeE5RVUZOTEVOQlFUZENPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEZGQlFWWXNRMEZCYlVJc1EwRkJia0lzUjBGQmRVSXNUVUZCVFN4RFFVRTNRanRCUVVOSU96czdPMFZCZWtVNFFpeFBRVUZQTEUwN08ydENRVUZ5UWl4TE96czdPenM3T3pzN096czdPMEZEUm5KQ096czdPenM3T3pzN096czdTVUZGY1VJc1N6czdPMEZCUldwQ0xIbENRVUZ2UlR0QlFVRkJMRmxCUVhSRUxFbEJRWE5FTEZGQlFYUkVMRWxCUVhORU8wRkJRVUVzV1VGQmFFUXNRMEZCWjBRc1VVRkJhRVFzUTBGQlowUTdRVUZCUVN4WlFVRTNReXhEUVVFMlF5eFJRVUUzUXl4RFFVRTJRenRCUVVGQkxGbEJRVEZETEV0QlFUQkRMRkZCUVRGRExFdEJRVEJETzBGQlFVRXNXVUZCYmtNc1MwRkJiVU1zVVVGQmJrTXNTMEZCYlVNN1FVRkJRU3haUVVFMVFpeE5RVUUwUWl4UlFVRTFRaXhOUVVFMFFqdEJRVUZCTEZsQlFYQkNMRmRCUVc5Q0xGRkJRWEJDTEZkQlFXOUNPMEZCUVVFc1dVRkJVaXhKUVVGUkxGRkJRVklzU1VGQlVUczdRVUZCUVRzN1FVRkJRU3hyU0VGRE1VUXNTVUZFTUVRc1JVRkRjRVFzUTBGRWIwUXNSVUZEYWtRc1EwRkVhVVFzUlVGRE9VTXNTMEZFT0VNc1JVRkRka01zUzBGRWRVTTdPMEZCUjJoRkxHTkJRVXNzU1VGQlRDeEhRVUZaTEVsQlFWbzdPMEZCUlVFc1kwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQldpeERRVUZyUWl4SFFVRnNRanM3UVVGRlFUdEJRVU5CTEdOQlFVc3NTVUZCVEN4SFFVRlpMRWxCUVZvN1FVRkRRU3hqUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRWxCUVdwQ08wRkJRMEVzWTBGQlN5eE5RVUZNTEVkQlFXTXNUVUZCWkR0QlFVTkJMR05CUVVzc1UwRkJUQ3hIUVVGcFFpeE5RVUZxUWpzN1FVRkhRVHRCUVVOQkxHTkJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1RVRkJiRUlzUTBGQmVVSXNUVUZCZWtJN1FVRkRRU3hqUVVGTExFbEJRVXdzUTBGQlZTeHJRa0ZCVml4SFFVRXJRaXhKUVVFdlFqdEJRVU5CTEdOQlFVc3NTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1IwRkJkRUk3UVVGRFFTeGpRVUZMTEVsQlFVd3NRMEZCVlN4TlFVRldMRU5CUVdsQ0xFZEJRV3BDTEVOQlFYRkNMRU5CUVhKQ096dEJRVVZCTEdOQlFVc3NWVUZCVEN4RFFVRm5RaXhIUVVGb1FpeERRVUZ2UWl4VlFVRndRaXhGUVVGblF5eERRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVU4c1EwRkJVQ3hGUVVGVkxFTkJRVllzUlVGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFVkJRVzFDTEVOQlFXNUNMRVZCUVhOQ0xFTkJRWFJDTEVWQlFYbENMRU5CUVhwQ0xFVkJRVFJDTEVOQlFUVkNMRVZCUVN0Q0xFVkJRUzlDTEVWQlFXMURMRVZCUVc1RExFVkJRWFZETEVWQlFYWkRMRVZCUVRKRExFVkJRVE5ETEVWQlFTdERMRVZCUVM5RExFTkJRV2hETEVWQlFXOUdMRVZCUVhCR0xFVkJRWGRHTEVsQlFYaEdPMEZCUTBFc1kwRkJTeXhKUVVGTUxFTkJRVlVzVlVGQlZqczdRVUZGUVN4alFVRkxMRTlCUVV3c1IwRkJaU3hOUVVGTExFbEJRVXdzUTBGQlZTeEhRVUZXTEVOQlFXTXNTMEZCWkN4RlFVRm1PMEZCUTBFc1kwRkJTeXhQUVVGTUxFTkJRV0VzVlVGQllpeEhRVUV3UWl4SlFVRXhRanRCUVVOQkxHTkJRVXNzVjBGQlRDeEhRVUZ0UWl4WFFVRnVRanM3UVVGRlFTeGpRVUZMTEZOQlFVd3NSMEZCYVVJc1RVRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEV0QlFXUXNRMEZCYjBJc1YwRkJjRUlzUTBGQmFrSTdPMEZCTTBKblJUdEJRVFpDYmtVN096czdhVU5CUlZFN08wRkJSVXdzWjBKQlFVa3NTMEZCU3l4UlFVRk1MRU5CUVdNc1EwRkJaQ3hIUVVGclFpeFBRVUZQTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQk4wTXNSVUZCYjBRN1FVRkRhRVFzY1VKQlFVc3NVVUZCVEN4RFFVRmpMRU5CUVdRc1IwRkJhMElzVDBGQlR5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFdEJRWFpDTEVkQlFTdENMRU5CUVdwRU8wRkJRMEVzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRkZCUVZZc1EwRkJiVUlzUTBGQmJrSXNTVUZCZDBJc1EwRkJReXhEUVVGNlFqdEJRVU5JTEdGQlNFUXNUVUZKU3l4SlFVRkpMRXRCUVVzc1VVRkJUQ3hEUVVGakxFTkJRV1FzUjBGQmEwSXNUMEZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEV0QlFUZERMRVZCUVc5RU8wRkJRM0pFTEhGQ1FVRkxMRkZCUVV3c1EwRkJZeXhEUVVGa0xFZEJRV3RDTEU5QlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeExRVUYyUWl4SFFVRXJRaXhEUVVGcVJEdEJRVU5CTEhGQ1FVRkxMRWxCUVV3c1EwRkJWU3hSUVVGV0xFTkJRVzFDTEVOQlFXNUNMRWxCUVhkQ0xFTkJRVU1zUTBGQmVrSTdRVUZEU0RzN1FVRkZSQ3huUWtGQlNTeExRVUZMTEZGQlFVd3NRMEZCWXl4RFFVRmtMRWRCUVd0Q0xFdEJRVXNzVFVGQlRDeEhRVUZqTEVOQlFXaERMRWRCUVc5RExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1RVRkJlRVFzUlVGQlowVTdRVUZETlVRc2NVSkJRVXNzU1VGQlREdEJRVU5JTzBGQlEwbzdPenNyUWtGSlRTeE5MRVZCUVZFN1FVRkRXQ3hwU0VGQllTeE5RVUZpTzBGQlEwZzdPenR4UTBGRk1rTTdRVUZCUVN4blFrRkJjRU1zUTBGQmIwTXNVMEZCY0VNc1EwRkJiME03UVVGQlFTeG5Ra0ZCYWtNc1EwRkJhVU1zVTBGQmFrTXNRMEZCYVVNN1FVRkJRU3huUWtGQk9VSXNUVUZCT0VJc1UwRkJPVUlzVFVGQk9FSTdRVUZCUVN4blFrRkJkRUlzVjBGQmMwSXNVMEZCZEVJc1YwRkJjMEk3UVVGQlFTeG5Ra0ZCVkN4TFFVRlRMRk5CUVZRc1MwRkJVenM3UVVGRGVFTXNaMGhCUVZrc1EwRkJXaXhGUVVGbExFTkJRV1lzUlVGQmEwSXNUVUZCYkVJN1FVRkRRU3hwUWtGQlN5eFhRVUZNTEVkQlFXMUNMRmRCUVc1Q08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRkZCUVZZc1EwRkJiVUlzUTBGQmJrSXNSMEZCZFVJc1RVRkJUU3hEUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hSUVVGV0xFTkJRVzFDTEVOQlFXNUNMRWRCUVhWQ0xFMUJRVTBzUTBGQk4wSTdRVUZEU0RzN096dEZRVFZFT0VJc1QwRkJUeXhOT3p0clFrRkJja0lzU3pzN096czdPenM3T3pzN1FVTkdja0k3T3pzN096czdPenM3T3p0SlFVTnhRaXhIT3pzN1FVRkRha0lzZFVKQlFUaENPMEZCUVVFc1dVRkJhRUlzU1VGQlowSXNVVUZCYUVJc1NVRkJaMEk3UVVGQlFTeFpRVUZXTEUxQlFWVXNVVUZCVml4TlFVRlZPenRCUVVGQk96dEJRVUZCTERoSFFVTndRaXhKUVVSdlFqczdRVUZGTVVJc1kwRkJTeXhKUVVGTUxFZEJRVmtzU1VGQldqdEJRVU5CTEdOQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVdRN1FVRkRRU3hqUVVGTExFVkJRVXdzUjBGQlZTeEpRVUZKTEU5QlFVOHNTMEZCV0N4RFFVRnBRaXhOUVVGTExFbEJRWFJDTEVWQlFUUkNMRU5CUVRWQ0xFVkJRU3RDTEVOQlFTOUNMRVZCUVd0RExFOUJRV3hETEVOQlFWWTdRVUZEUVN4alFVRkxMRXRCUVV3c1IwRkJZU3hIUVVGaU8wRkJRMEVzWTBGQlN5eFRRVUZNTEVkQlFXbENMRWxCUVVrc1QwRkJUeXhOUVVGWUxFTkJRV3RDTEUxQlFVc3NTVUZCZGtJc1JVRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1EwRkJhRU1zUlVGQmJVTXNWMEZCYmtNc1EwRkJha0k3UVVGRFFTeGpRVUZMTEZOQlFVd3NRMEZCWlN4TFFVRm1MRU5CUVhGQ0xFdEJRWEpDTEVOQlFUSkNMRXRCUVROQ0xFVkJRV3RETEVWQlFXeERPenRCUVVWQkxHTkJRVXNzUzBGQlRDeEhRVUZoTEVOQlFXSTdRVUZEUVN4alFVRkxMRlZCUVV3c1IwRkJhMElzVTBGQmJFSTdRVUZEUVN4alFVRkxMRk5CUVV3c1IwRkJhVUlzU1VGQlNTeFBRVUZQTEVsQlFWZ3NRMEZCWjBJc1RVRkJTeXhKUVVGeVFpeEZRVUV5UWl4RlFVRXpRaXhGUVVFclFpeEZRVUV2UWl4RlFVRnRReXhOUVVGTExGVkJRVXdzUjBGQmEwSXNUVUZCU3l4TFFVRXhSQ3hGUVVGcFJUdEJRVU01UlN4clFrRkJUU3hqUVVSM1JUdEJRVVU1UlN4clFrRkJUU3hQUVVaM1JUdEJRVWM1UlN4dFFrRkJUenM3UVVGSWRVVXNVMEZCYWtVc1EwRkJha0k3TzBGQlQwRXNZMEZCU3l4SFFVRk1MRU5CUVZNc1RVRkJTeXhGUVVGa08wRkJRMEVzWTBGQlN5eEhRVUZNTEVOQlFWTXNUVUZCU3l4VFFVRmtPMEZCUTBFc1kwRkJTeXhIUVVGTUxFTkJRVk1zVFVGQlN5eFRRVUZrTzBGQmNFSXdRanRCUVhGQ04wSTdPenM3Y1VOQlJWa3NUU3hGUVVGUk8wRkJRMnBDTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hKUVVGbUxFTkJRVzlDTEVsQlFVa3NUMEZCVHl4VFFVRllMRU5CUVhGQ0xFTkJRWEpDTEVWQlFYZENMRU5CUVhoQ0xFVkJRVFJDTEV0QlFVc3NUVUZCVEN4RFFVRlpMRTFCUVZvc1IwRkJjVUlzUzBGQlN5eE5RVUZNTEVOQlFWa3NVMEZCYkVNc1IwRkJLME1zUzBGQlN5eExRVUV2UlN4RlFVRnpSaXhGUVVGMFJpeERRVUZ3UWp0QlFVTkJMR2xDUVVGTExGTkJRVXdzUTBGQlpTeFZRVUZtTzBGQlEwZzdPenR2UTBGRlZ5eE5MRVZCUVZFN1FVRkRhRUlzYVVKQlFVc3NTMEZCVEN4SlFVRmpMRTFCUVdRN1FVRkRRU3hwUWtGQlN5eFRRVUZNTEVOQlFXVXNTVUZCWml4SFFVRnpRaXhMUVVGTExGVkJRVXdzUjBGQmJVSXNTMEZCU3l4TFFVRk1MRWRCUVdFc1JVRkJkRVE3UVVGRFNEczdPenRGUVdoRE5FSXNUMEZCVHl4TE96dHJRa0ZCYmtJc1J6dEJRV3REY0VJN096czdPenM3T3pzN096czdRVU51UTBRN096czdPenM3T3pzN096dEpRVVZ4UWl4Tk96czdRVUZGYWtJc01FSkJRV3RFTzBGQlFVRXNXVUZCY0VNc1NVRkJiME1zVVVGQmNFTXNTVUZCYjBNN1FVRkJRU3haUVVFNVFpeERRVUU0UWl4UlFVRTVRaXhEUVVFNFFqdEJRVUZCTEZsQlFUTkNMRU5CUVRKQ0xGRkJRVE5DTEVOQlFUSkNPMEZCUVVFc1dVRkJlRUlzUzBGQmQwSXNVVUZCZUVJc1MwRkJkMEk3UVVGQlFTeFpRVUZxUWl4TFFVRnBRaXhSUVVGcVFpeExRVUZwUWp0QlFVRkJMRmxCUVZZc1RVRkJWU3hSUVVGV0xFMUJRVlU3TzBGQlFVRTdPMEZCUVVFc2IwaEJRM2hETEVsQlJIZERMRVZCUTJ4RExFTkJSR3RETEVWQlF5OUNMRU5CUkN0Q0xFVkJRelZDTEV0QlJEUkNMRVZCUTNKQ0xFdEJSSEZDT3p0QlFVYzVReXhqUVVGTExFbEJRVXdzUjBGQldTeEpRVUZhT3p0QlFVVkJMR05CUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUTBGQmEwSXNSMEZCYkVJN1FVRkRRU3hqUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRWRCUVdwQ096dEJRVVZCTEdOQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVdRN1FVRkRRU3hqUVVGTExGTkJRVXdzUjBGQmFVSXNUVUZCYWtJN08wRkJTVUVzWTBGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhOUVVGc1FpeERRVUY1UWl4TlFVRjZRanRCUVVOQk8wRkJRMEVzWTBGQlN5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRnJRaXhEUVVGc1FpeEhRVUZ6UWl4SFFVRjBRanRCUVVOQkxHTkJRVXNzU1VGQlRDeERRVUZWTEd0Q1FVRldMRWRCUVN0Q0xFbEJRUzlDTzBGQlEwRTdPMEZCUlVFc1kwRkJTeXhQUVVGTUxFZEJRV1VzVFVGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1JVRkJaanRCUVVOQkxHTkJRVXNzVDBGQlRDeERRVUZoTEZWQlFXSXNSMEZCTUVJc1NVRkJNVUk3UVVGRFFTeGpRVUZMTEZkQlFVd3NSMEZCYlVJc1EwRkJReXhIUVVGd1FqczdRVUZGUVN4alFVRkxMRk5CUVV3c1IwRkJhVUlzVFVGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMRXRCUVdRc1EwRkJiMElzV1VGQmNFSXNRMEZCYWtJN1FVRjJRamhETzBGQmQwSnFSRHM3T3p0cFEwRkZVVHM3UVVGRlREczdPMEZCU1VFN08wRkJSVWtzWjBKQlFVa3NWVUZCVlN4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZGQlFXaENMRU5CUVhsQ0xFMUJRWHBDTEVOQlFXZERMRTlCUVU4c1VVRkJVQ3hEUVVGblFpeEpRVUZvUkN4RFFVRmtPMEZCUTBFc1owSkJRVWtzVjBGQlZ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGRkJRV2hDTEVOQlFYbENMRTFCUVhwQ0xFTkJRV2RETEU5QlFVOHNVVUZCVUN4RFFVRm5RaXhMUVVGb1JDeERRVUZtTzBGQlEwRXNaMEpCUVVjc1QwRkJTQ3hGUVVGWE8wRkJRMUFzY1VKQlFVc3NRMEZCVEN4SlFVRlZMRU5CUVZZN1FVRkZTQ3hoUVVoRUxFMUJTVXNzU1VGQlJ5eFJRVUZJTEVWQlFWazdRVUZEWWl4eFFrRkJTeXhEUVVGTUxFbEJRVlVzUTBGQlZqdEJRVVZJTzBGQlJWSTdPenRuUTBGRlR6czdRVUZGU2l4blFrRkJTU3hUUVVGVExFdEJRVXNzVDBGQlRDeERRVUZoTEdOQlFXSXNRMEZCTkVJc1MwRkJOVUlzUTBGQllqczdRVUZGUVN4blFrRkJTU3hEUVVGRExFMUJRVXdzUlVGQllUdEJRVU5VTEhsQ1FVRlRMSEZDUVVGWE8wRkJRMmhDTERCQ1FVRk5MRXRCUVVzc1NVRkVTenRCUVVWb1FpeDFRa0ZCUnl4TFFVRkxMRU5CUmxFN1FVRkhhRUlzZFVKQlFVY3NTMEZCU3l4SFFVaFJPMEZCU1doQ08wRkJRMEVzTkVKQlFWRXNRMEZNVVR0QlFVMW9RaXd5UWtGQlR5eFJRVTVUTzBGQlQyaENMREJDUVVGTk8wRkJVRlVzYVVKQlFWZ3NRMEZCVkR0QlFWTkJPMEZCUTBFc2IwSkJRVWNzUzBGQlN5eFBRVUZNTEVOQlFXRXNVVUZCWWl4RFFVRnpRaXhOUVVGMFFpeEpRVUZuUXl4RFFVRnVReXhGUVVGeFF6dEJRVU5xUXl4NVFrRkJTeXhUUVVGTUxFTkJRV1VzU1VGQlppeERRVUZ2UWl4RlFVRndRaXhGUVVGMVFpeERRVUYyUWl4RlFVRjVRaXhIUVVGNlFqdEJRVU5CTEhsQ1FVRkxMRTlCUVV3c1EwRkJZU3hIUVVGaUxFTkJRV2xDTEUxQlFXcENPenRCUVVWQkxESkNRVUZQTEVsQlFWQXNRMEZCV1N4UlFVRmFMRU5CUVhGQ0xFTkJRWEpDTEVkQlFYbENMRXRCUVVzc1YwRkJPVUk3UVVGRFNEdEJRVU5LTEdGQmFrSkVMRTFCYTBKTE8wRkJRMFFzY1VKQlFVc3NVMEZCVEN4RFFVRmxMRWxCUVdZc1EwRkJiMElzUlVGQmNFSXNSVUZCZFVJc1EwRkJka0lzUlVGQmVVSXNSMEZCZWtJN1FVRkRRU3gxUWtGQlR5eExRVUZRTEVOQlFXRXNTMEZCU3l4RFFVRnNRaXhGUVVGeFFpeExRVUZMTEVkQlFURkNMRVZCUVN0Q0xFTkJRUzlDTzBGQlEwRXNkVUpCUVU4c1NVRkJVQ3hEUVVGWkxGRkJRVm9zUTBGQmNVSXNRMEZCY2tJc1IwRkJlVUlzUzBGQlN5eFhRVUU1UWp0QlFVTklPMEZCUjBvN096c3JRa0ZGVFN4TkxFVkJRVkU3UVVGRFdDeHRTRUZCWVN4TlFVRmlPMEZCUTBnN096czdSVUZzUml0Q0xFOUJRVThzVFRzN2EwSkJRWFJDTEUwN096czdPenM3T3pzN096czdPenM3TzBsRFJrRXNTVHM3T3pzN096czdPenM3YTBOQlJWQTdRVUZEVGl4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4bFFVRm9RaXhIUVVGclF5eE5RVUZzUXp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRlZCUVdoQ0xFVkJRVFJDTEcxQ1FVRTFRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGZEJRV2hDTEVWQlFUWkNMRzlDUVVFM1FqdEJRVU5JT3pzN2FVTkJSVkU3UVVGRFRDeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1UwRkJXQ3hIUVVGMVFpeFBRVUZQTEZsQlFWQXNRMEZCYjBJc1VVRkJNME03TzBGQlJVRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExIRkNRVUZZTEVkQlFXMURMRWxCUVc1RE8wRkJRMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRzFDUVVGWUxFZEJRV2xETEVsQlFXcERPenRCUVVWQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xGZEJRV3hDTEVOQlFUaENMRTlCUVU4c1QwRkJVQ3hEUVVGbExFMUJRVGRETzBGQlEwRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNVMEZCYWtJN1FVRkRTRHM3T3p0RlFXaENOa0lzVDBGQlR5eExPenRyUWtGQmNFSXNTVHM3T3pzN096czdPenM3T3pzN2VVTkRRV0lzVHpzN096czdPenM3T3pSRFFVTkJMRTg3T3pzN096czdPenQ1UTBGRFFTeFBPenM3T3pzN096czdlVU5CUlVFc1R6czdPenM3T3pzN08zbERRVU5CTEU4N096czdPenM3T3pzMlEwRkhRU3hQT3pzN096czdPenM3TmtOQlEwRXNUenM3T3pzN096czdPemhEUVVkQkxFODdPenM3T3pzN096czRRMEZEUVN4UE96czdPenM3T3pzN096czdPenM3UVVOaVVqczdPenM3T3pzN096czdPMGxCUlhGQ0xFazdPenM3T3pzN096czdPMmxEUVVWU08wRkJRVUU3TzBGQlEwd3NhVUpCUVVzc1MwRkJUQ3hIUVVGaExFbEJRVWtzVDBGQlR5eEpRVUZZTEVOQlFXZENMRXRCUVVzc1NVRkJja0lzUlVGQk1rSXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUV6UXl4RlFVRnZSQ3hMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUVdoQ0xFZEJRWGRDTEVkQlFUVkZMRVZCUVdsR0xHZENRVUZxUml4RlFVRnRSenRCUVVNMVJ5eHpRa0ZCVFN4aFFVUnpSenRCUVVVMVJ5eHpRa0ZCVFN4UFFVWnpSenRCUVVjMVJ5eDFRa0ZCVHp0QlFVaHhSeXhoUVVGdVJ5eERRVUZpTzBGQlMwRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExFMUJRVmdzUTBGQmEwSXNTMEZCYkVJc1EwRkJkMElzUjBGQmVFSTdRVUZEUVRzN08wRkJSMEVzYVVKQlFVc3NUMEZCVEN4SFFVRmxMSGxDUVVGbE8wRkJRekZDTEhOQ1FVRk5MRXRCUVVzc1NVRkVaVHRCUVVVeFFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFXaENMRWRCUVRCQ0xFZEJSa2c3UVVGSE1VSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVaFBPMEZCU1RGQ0xIVkNRVUZQTEZGQlNtMUNPMEZCU3pGQ0xESkNRVUZYTEVOQlRHVTdRVUZOTVVJc01FSkJRVlVzUTBGT1owSTdRVUZQTVVJc01rSkJRVmNzUTBGUVpUdEJRVkV4UWl4NVFrRkJVeXhEUVZKcFFqdEJRVk14UWl4MVFrRkJUeXhUUVZSdFFqdEJRVlV4UWl4MVFrRkJUenRCUVVOSUxEQkNRVUZOTEdOQlJFZzdRVUZGU0N3d1FrRkJUU3hQUVVaSU8wRkJSMGdzTWtKQlFVODdRVUZJU2p0QlFWWnRRaXhoUVVGbUxFTkJRV1k3TzBGQmFVSkJMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNFSTdRVUZEUVN4cFFrRkJTeXhYUVVGTUxFZEJRVzFDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hUUVVGbUxFTkJRVzVDTzBGQlEwRXNhVUpCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGd1FqczdRVUZGUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWl4TFFVRkxMRmxCUVM5Q08wRkJRMEVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRmRCUVdJc1EwRkJlVUlzUzBGQlN5eFhRVUU1UWp0QlFVTkJMR2xDUVVGTExFOUJRVXdzUTBGQllTeFpRVUZpTEVOQlFUQkNMRXRCUVVzc1dVRkJMMEk3TzBGQlJVRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGTkJRV0lzUTBGQmRVSXNSMEZCZGtJc1EwRkJNa0lzV1VGQlNUdEJRVU16UWp0QlFVTkJMSFZDUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRmRCUVdwQ08wRkJSVWdzWVVGS1JEczdRVUZSUVR0QlFVTkJMR2xDUVVGTExFdEJRVXdzUjBGQllTeDVRa0ZCWlR0QlFVTjRRaXh6UWtGQlRTeExRVUZMTEVsQlJHRTdRVUZGZUVJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaTE8wRkJSM2hDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZJU3p0QlFVbDRRaXgxUWtGQlR5eFJRVXBwUWp0QlFVdDRRaXd5UWtGQlZ5eERRVXhoTzBGQlRYaENMREJDUVVGVkxFTkJUbU03UVVGUGVFSXNNa0pCUVZjc1EwRlFZVHRCUVZGNFFpeDVRa0ZCVXl4RFFWSmxPMEZCVTNoQ0xIVkNRVUZQTEU5QlZHbENPMEZCVlhoQ0xIVkNRVUZQTzBGQlEwZ3NNRUpCUVUwc1kwRkVTRHRCUVVWSUxEQkNRVUZOTEU5QlJrZzdRVUZIU0N3eVFrRkJUenRCUVVoS08wRkJWbWxDTEdGQlFXWXNRMEZCWWpzN1FVRnBRa0VzYVVKQlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNWVUZCWml4RFFVRndRanRCUVVOQkxHbENRVUZMTEZkQlFVd3NSMEZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZOQlFXWXNRMEZCYmtJN1FVRkRRU3hwUWtGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYQkNPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WlFVRllMRU5CUVhkQ0xFdEJRVXNzV1VGQk4wSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzVjBGQldDeERRVUYxUWl4TFFVRkxMRmRCUVRWQ08wRkJRMEVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmxCUVZnc1EwRkJkMElzUzBGQlN5eFpRVUUzUWpzN1FVRkZRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NVMEZCV0N4RFFVRnhRaXhIUVVGeVFpeERRVUY1UWl4WlFVRkpPMEZCUTNwQ08wRkJRMEVzZFVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVFVGQmFrSTdRVUZGU0N4aFFVcEVPMEZCUzBFN1FVRkRRU3hwUWtGQlN5eFBRVUZNTEVkQlFXVXNlVUpCUVdVN1FVRkRNVUlzYzBKQlFVMHNTMEZCU3l4SlFVUmxPMEZCUlRGQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFSXNSMEZCTUVJc1IwRkdTRHRCUVVjeFFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlNFODdRVUZKTVVJc2RVSkJRVThzVVVGS2JVSTdRVUZMTVVJc01rSkJRVmNzUTBGTVpUdEJRVTB4UWl3d1FrRkJWU3hEUVU1blFqdEJRVTh4UWl3eVFrRkJWeXhEUVZCbE8wRkJVVEZDTEhsQ1FVRlRMRU5CVW1sQ08wRkJVekZDTEhWQ1FVRlBMRmxCVkcxQ08wRkJWVEZDTEhWQ1FVRlBPMEZCUTBnc01FSkJRVTBzWTBGRVNEdEJRVVZJTERCQ1FVRk5MRTlCUmtnN1FVRkhTQ3d5UWtGQlR6dEJRVWhLTzBGQlZtMUNMR0ZCUVdZc1EwRkJaanM3UVVGcFFrRXNhVUpCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhEUVVGd1FqdEJRVU5CTEdsQ1FVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRk5CUVdZc1EwRkJia0k3UVVGRFFTeHBRa0ZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4VlFVRm1MRU5CUVhCQ096dEJRVVZCTEdsQ1FVRkxMRTlCUVV3c1EwRkJZU3haUVVGaUxFTkJRVEJDTEV0QlFVc3NXVUZCTDBJN1FVRkRRU3hwUWtGQlN5eFBRVUZNTEVOQlFXRXNWMEZCWWl4RFFVRjVRaXhMUVVGTExGZEJRVGxDTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGbEJRV0lzUTBGQk1FSXNTMEZCU3l4WlFVRXZRanM3UVVGRlFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1UwRkJZaXhEUVVGMVFpeEhRVUYyUWl4RFFVRXlRaXhaUVVGSk8wRkJRek5DTzBGQlEwRXNkVUpCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNWVUZCYWtJN1FVRkhTQ3hoUVV4RU96dEJRVk5CTEdsQ1FVRkxMRk5CUVV3c1IwRkJhVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRnFRanRCUVVOQkxHbENRVUZMTEZOQlFVd3NRMEZCWlN4SFFVRm1MRU5CUVcxQ0xFdEJRVXNzUzBGQmVFSTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzUjBGQlppeERRVUZ0UWl4TFFVRkxMRTlCUVhoQ08wRkJRMEVzYVVKQlFVc3NVMEZCVEN4RFFVRmxMRWRCUVdZc1EwRkJiVUlzUzBGQlN5eExRVUY0UWp0QlFVTkJMR2xDUVVGTExGTkJRVXdzUTBGQlpTeEhRVUZtTEVOQlFXMUNMRXRCUVVzc1QwRkJlRUk3TzBGQlJVRTdRVUZEU0RzN096dEZRWFJJTmtJc1QwRkJUeXhMT3p0clFrRkJjRUlzU1RzN096czdPenM3T3pzN1FVTkdja0k3T3pzN096czdPenM3T3p0SlFVVnhRaXhKT3pzN096czdPenM3T3p0cFEwRkZVanRCUVVGQk96dEJRVVZNTEdsQ1FVRkxMR0ZCUVV3c1IwRkJjVUlzU1VGQlNTeFBRVUZQTEVsQlFWZ3NRMEZCWjBJc1MwRkJTeXhKUVVGeVFpeEZRVUV5UWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFUTkRMRVZCUVc5RUxFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQmQwSXNSMEZCTlVVc1JVRkJhVVlzVjBGQmFrWXNSVUZCT0VZN1FVRkRMMGNzYzBKQlFVMHNZVUZFZVVjN1FVRkZMMGNzYzBKQlFVMHNUMEZHZVVjN1FVRkhMMGNzZFVKQlFVODdRVUZJZDBjc1lVRkJPVVlzUTBGQmNrSTdRVUZMUVN4cFFrRkJTeXhoUVVGTUxFTkJRVzFDTEUxQlFXNUNMRU5CUVRCQ0xFdEJRVEZDTEVOQlFXZERMRWRCUVdoRE96dEJRVVZCTEdsQ1FVRkxMRXRCUVV3c1IwRkJZU3g1UWtGQlpUdEJRVU40UWl4elFrRkJUU3hMUVVGTExFbEJSR0U3UVVGRmVFSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVWkxPMEZCUjNoQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFSXNSMEZCZDBJc1JVRklTRHRCUVVsNFFpeDFRa0ZCVHl4UlFVcHBRanRCUVV0NFFpd3lRa0ZCVnl4RFFVeGhPMEZCVFhoQ0xEQkNRVUZWTEVOQlRtTTdRVUZQZUVJc01rSkJRVmNzUTBGUVlUdEJRVkY0UWl4NVFrRkJVeXhEUVZKbE8wRkJVM2hDTEhWQ1FVRlBMRmRCVkdsQ08wRkJWWGhDTEhWQ1FVRlBPMEZCUTBnc01FSkJRVTBzWTBGRVNEdEJRVVZJTERCQ1FVRk5MRTlCUmtnN1FVRkhTQ3d5UWtGQlR6dEJRVWhLTzBGQlZtbENMR0ZCUVdZc1EwRkJZanM3UVVGcFFrRXNhVUpCUVVzc1NVRkJUQ3hIUVVGWkxIbENRVUZsTzBGQlEzWkNMSE5DUVVGTkxFdEJRVXNzU1VGRVdUdEJRVVYyUWl4dFFrRkJSeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRTlCUmtrN1FVRkhka0lzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4SFFVRjNRaXhGUVVoS08wRkJTWFpDTEhWQ1FVRlBMRkZCU21kQ08wRkJTM1pDTERKQ1FVRlhMRU5CVEZrN1FVRk5ka0lzTUVKQlFWVXNRMEZPWVR0QlFVOTJRaXd5UWtGQlZ5eERRVkJaTzBGQlVYWkNMSGxDUVVGVExFTkJVbU03UVVGVGRrSXNkVUpCUVU4c1RVRlVaMEk3UVVGVmRrSXNkVUpCUVU4N1FVRkRTQ3d3UWtGQlRTeGpRVVJJTzBGQlJVZ3NNRUpCUVUwc1QwRkdTRHRCUVVkSUxESkNRVUZQTzBGQlNFbzdRVUZXWjBJc1lVRkJaaXhEUVVGYU96dEJRV2xDUVN4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3hWUVVGbUxFTkJRWEJDTzBGQlEwRXNhVUpCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1UwRkJaaXhEUVVGdVFqdEJRVU5CTEdsQ1FVRkxMRmxCUVV3c1IwRkJiMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRlZCUVdZc1EwRkJjRUk3TzBGQlJVRXNhVUpCUVVzc1MwRkJUQ3hEUVVGWExGbEJRVmdzUTBGQmQwSXNTMEZCU3l4WlFVRTNRanRCUVVOQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WFFVRllMRU5CUVhWQ0xFdEJRVXNzVjBGQk5VSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzV1VGQldDeERRVUYzUWl4TFFVRkxMRmxCUVRkQ08wRkJRMEVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRmxCUVZZc1EwRkJkVUlzUzBGQlN5eFpRVUUxUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFhRVUZXTEVOQlFYTkNMRXRCUVVzc1YwRkJNMEk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1dVRkJWaXhEUVVGMVFpeExRVUZMTEZsQlFUVkNPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4WFFVRllMRU5CUVhWQ0xFZEJRWFpDTEVOQlFUSkNMRmxCUVVrN1FVRkRNMElzZFVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVFVGQmFrSTdRVUZEU0N4aFFVWkVPenRCUVVsQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4WFFVRldMRU5CUVhOQ0xFZEJRWFJDTEVOQlFUQkNMRmxCUVVrN1FVRkRNVUlzZFVKQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVFVGQmFrSTdRVUZEU0N4aFFVWkVPenRCUVVsQkxHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVUZ5UWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzUzBGQlN5eGhRVUUxUWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzUzBGQlN5eExRVUUxUWp0QlFVTkJMR2xDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzUzBGQlN5eEpRVUUxUWp0QlFVTklPenM3TzBWQmNFVTJRaXhQUVVGUExFczdPMnRDUVVGd1FpeEpPenM3T3pzN096czdPenRCUTBaeVFqczdPenM3T3pzN096czdPMGxCUlhGQ0xGRTdPenM3T3pzN096czdPMmxEUVVWU08wRkJRVUU3TzBGQlJVd3NhVUpCUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZKTEU5QlFVOHNTVUZCV0N4RFFVRm5RaXhMUVVGTExFbEJRWEpDTEVWQlFUSkNMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCTTBNc1JVRkJiMFFzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGb1FpeEhRVUYzUWl4SFFVRTFSU3hGUVVGcFJpeG5Ra0ZCYWtZc1JVRkJiVWM3UVVGRGNFZ3NjMEpCUVUwc1lVRkVPRWM3UVVGRmNFZ3NjMEpCUVUwc1QwRkdPRWM3UVVGSGNFZ3NkVUpCUVU4N1FVRklOa2NzWVVGQmJrY3NRMEZCY2tJN1FVRkxRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRTFCUVc1Q0xFTkJRVEJDTEV0QlFURkNMRU5CUVdkRExFZEJRV2hET3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUjBGQllTeDVRa0ZCWlR0QlFVTjRRaXh6UWtGQlRTeExRVUZMTEVsQlJHRTdRVUZGZUVJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVaTE8wRkJSM2hDTEcxQ1FVRkhMRXRCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNUMEZCYUVJc1IwRkJkMElzUlVGSVNEdEJRVWw0UWl4MVFrRkJUeXhSUVVwcFFqdEJRVXQ0UWl3eVFrRkJWeXhEUVV4aE8wRkJUWGhDTERCQ1FVRlZMRU5CVG1NN1FVRlBlRUlzTWtKQlFWY3NRMEZRWVR0QlFWRjRRaXg1UWtGQlV5eERRVkpsTzBGQlUzaENMSFZDUVVGUExGZEJWR2xDTzBGQlZYaENMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNZMEZFU0R0QlFVVklMREJDUVVGTkxFOUJSa2c3UVVGSFNDd3lRa0ZCVHp0QlFVaEtPMEZCVm1sQ0xHRkJRV1lzUTBGQllqczdRVUZwUWtFc2FVSkJRVXNzU1VGQlRDeEhRVUZaTEhsQ1FVRmxPMEZCUTNaQ0xITkNRVUZOTEV0QlFVc3NTVUZFV1R0QlFVVjJRaXh0UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFOUJSa2s3UVVGSGRrSXNiVUpCUVVjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhIUVVGM1FpeEZRVWhLTzBGQlNYWkNMSFZDUVVGUExGRkJTbWRDTzBGQlMzWkNMREpDUVVGWExFTkJURms3UVVGTmRrSXNNRUpCUVZVc1EwRk9ZVHRCUVU5MlFpd3lRa0ZCVnl4RFFWQlpPMEZCVVhaQ0xIbENRVUZUTEVOQlVtTTdRVUZUZGtJc2RVSkJRVThzVFVGVVowSTdRVUZWZGtJc2RVSkJRVTg3UVVGRFNDd3dRa0ZCVFN4alFVUklPMEZCUlVnc01FSkJRVTBzVDBGR1NEdEJRVWRJTERKQ1FVRlBPMEZCU0VvN1FVRldaMElzWVVGQlppeERRVUZhT3p0QlFXbENRU3hwUWtGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYQkNPMEZCUTBFc2FVSkJRVXNzVjBGQlRDeEhRVUZ0UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzVTBGQlppeERRVUZ1UWp0QlFVTkJMR2xDUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hEUVVGbExGVkJRV1lzUTBGQmNFSTdPMEZCUlVFc2FVSkJRVXNzUzBGQlRDeERRVUZYTEZsQlFWZ3NRMEZCZDBJc1MwRkJTeXhaUVVFM1FqdEJRVU5CTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhYUVVGWUxFTkJRWFZDTEV0QlFVc3NWMEZCTlVJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NXVUZCV0N4RFFVRjNRaXhMUVVGTExGbEJRVGRDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxGbEJRVllzUTBGQmRVSXNTMEZCU3l4WlFVRTFRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4WFFVRldMRU5CUVhOQ0xFdEJRVXNzVjBGQk0wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzV1VGQlZpeERRVUYxUWl4TFFVRkxMRmxCUVRWQ096dEJRVVZCTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhYUVVGWUxFTkJRWFZDTEVkQlFYWkNMRU5CUVRKQ0xGbEJRVWs3UVVGRE0wSXNkVUpCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNWVUZCYWtJN1FVRkRTQ3hoUVVaRU96dEJRVWxCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hYUVVGV0xFTkJRWE5DTEVkQlFYUkNMRU5CUVRCQ0xGbEJRVWs3UVVGRE1VSXNkVUpCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNUVUZCYWtJN1FVRkRTQ3hoUVVaRU96dEJRVWxCTEdsQ1FVRkxMR0ZCUVV3c1IwRkJjVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRnlRanRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNTMEZCU3l4aFFVRTFRanRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNTMEZCU3l4TFFVRTFRanRCUVVOQkxHbENRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUTBGQmRVSXNTMEZCU3l4SlFVRTFRanRCUVVOSU96czdPMFZCY0VWcFF5eFBRVUZQTEVzN08ydENRVUY0UWl4Uk96czdPenM3T3pzN096dEJRMFp5UWpzN096czdPenM3T3pzN08wbEJSWEZDTEZFN096czdPenM3T3pzN08ybERRVVZTTzBGQlFVRTdPMEZCUlV3c2FVSkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRkpMRTlCUVU4c1NVRkJXQ3hEUVVGblFpeExRVUZMTEVsQlFYSkNMRVZCUVRKQ0xFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJNME1zUlVGQmIwUXNTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4SFFVRjNRaXhIUVVFMVJTeEZRVUZwUml4blFrRkJha1lzUlVGQmJVYzdRVUZEY0Vnc2MwSkJRVTBzWVVGRU9FYzdRVUZGY0Vnc2MwSkJRVTBzVDBGR09FYzdRVUZIY0Vnc2RVSkJRVTg3UVVGSU5rY3NZVUZCYmtjc1EwRkJja0k3UVVGTFFTeHBRa0ZCU3l4aFFVRk1MRU5CUVcxQ0xFMUJRVzVDTEVOQlFUQkNMRXRCUVRGQ0xFTkJRV2RETEVkQlFXaERPenRCUVVWQkxHbENRVUZMTEV0QlFVd3NSMEZCWVN4NVFrRkJaVHRCUVVONFFpeHpRa0ZCVFN4TFFVRkxMRWxCUkdFN1FVRkZlRUlzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFBRVVpMTzBGQlIzaENMRzFDUVVGSExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJhRUlzUjBGQmQwSXNSVUZJU0R0QlFVbDRRaXgxUWtGQlR5eFJRVXBwUWp0QlFVdDRRaXd5UWtGQlZ5eERRVXhoTzBGQlRYaENMREJDUVVGVkxFTkJUbU03UVVGUGVFSXNNa0pCUVZjc1EwRlFZVHRCUVZGNFFpeDVRa0ZCVXl4RFFWSmxPMEZCVTNoQ0xIVkNRVUZQTEZkQlZHbENPMEZCVlhoQ0xIVkNRVUZQTzBGQlEwZ3NNRUpCUVUwc1kwRkVTRHRCUVVWSUxEQkNRVUZOTEU5QlJrZzdRVUZIU0N3eVFrRkJUenRCUVVoS08wRkJWbWxDTEdGQlFXWXNRMEZCWWpzN1FVRnBRa0VzYVVKQlFVc3NTVUZCVEN4SFFVRlpMSGxDUVVGbE8wRkJRM1pDTEhOQ1FVRk5MRXRCUVVzc1NVRkVXVHRCUVVWMlFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlJrazdRVUZIZGtJc2JVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhQUVVGb1FpeEhRVUYzUWl4RlFVaEtPMEZCU1haQ0xIVkNRVUZQTEZGQlNtZENPMEZCUzNaQ0xESkNRVUZYTEVOQlRGazdRVUZOZGtJc01FSkJRVlVzUTBGT1lUdEJRVTkyUWl3eVFrRkJWeXhEUVZCWk8wRkJVWFpDTEhsQ1FVRlRMRU5CVW1NN1FVRlRka0lzZFVKQlFVOHNUVUZVWjBJN1FVRlZka0lzZFVKQlFVODdRVUZEU0N3d1FrRkJUU3hqUVVSSU8wRkJSVWdzTUVKQlFVMHNUMEZHU0R0QlFVZElMREpDUVVGUE8wRkJTRW83UVVGV1owSXNZVUZCWml4RFFVRmFPenRCUVdsQ1FTeHBRa0ZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCWlN4VlFVRm1MRU5CUVhCQ08wRkJRMEVzYVVKQlFVc3NWMEZCVEN4SFFVRnRRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFXVXNVMEZCWml4RFFVRnVRanRCUVVOQkxHbENRVUZMTEZsQlFVd3NSMEZCYjBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZWQlFXWXNRMEZCY0VJN08wRkJSVUVzYVVKQlFVc3NTMEZCVEN4RFFVRlhMRmxCUVZnc1EwRkJkMElzUzBGQlN5eFpRVUUzUWp0QlFVTkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFhRVUZZTEVOQlFYVkNMRXRCUVVzc1YwRkJOVUk3UVVGRFFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1dVRkJXQ3hEUVVGM1FpeExRVUZMTEZsQlFUZENPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEZsQlFWWXNRMEZCZFVJc1MwRkJTeXhaUVVFMVFqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hYUVVGV0xFTkJRWE5DTEV0QlFVc3NWMEZCTTBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNXVUZCVml4RFFVRjFRaXhMUVVGTExGbEJRVFZDT3p0QlFVVkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFhRVUZZTEVOQlFYVkNMRWRCUVhaQ0xFTkJRVEpDTEZsQlFVazdRVUZETTBJc2RVSkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCYVVJc1ZVRkJha0k3UVVGRFNDeGhRVVpFT3p0QlFVbEJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeFhRVUZXTEVOQlFYTkNMRWRCUVhSQ0xFTkJRVEJDTEZsQlFVazdRVUZETVVJc2RVSkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCYVVJc1RVRkJha0k3UVVGRFNDeGhRVVpFT3p0QlFVbEJMR2xDUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hGUVVGeVFqdEJRVU5CTEdsQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNRMEZCZFVJc1MwRkJTeXhoUVVFMVFqdEJRVU5CTEdsQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNRMEZCZFVJc1MwRkJTeXhMUVVFMVFqdEJRVU5CTEdsQ1FVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNRMEZCZFVJc1MwRkJTeXhKUVVFMVFqdEJRVU5JT3pzN08wVkJjRVZwUXl4UFFVRlBMRXM3TzJ0Q1FVRjRRaXhST3pzN096czdPenM3T3p0QlEwWnlRanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWeFFpeEpPenM3T3pzN096czdPenRwUTBGRlVqdEJRVUZCT3p0QlFVTk1PMEZCUTBFc2FVSkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NSMEZCVEN4RFFVRlRMRlZCUVZRc1EwRkJiMElzUTBGQmNFSXNSVUZCZFVJc1EwRkJka0lzUlVGQk1FSXNSMEZCTVVJc1JVRkJLMElzU1VGQkwwSXNSVUZCY1VNc1UwRkJja01zUTBGQlpqdEJRVU5CTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVlVGQlppeEhRVUUwUWl4RFFVRTFRanM3UVVGRlFTeHBRa0ZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVUZtTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGVkJRV0lzUjBGQk1FSXNTVUZCTVVJN08wRkJSVUVzYVVKQlFVc3NUVUZCVEN4SFFVRmpMSEZDUVVGWE8wRkJRM0pDTEhOQ1FVRk5MRXRCUVVzc1NVRkVWVHRCUVVWeVFpeHRRa0ZCUnl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlJrVTdRVUZIY2tJc2JVSkJRVWNzVDBGQlR5eExRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFMUJTRXc3UVVGSmNrSXNkMEpCUVZFc1IwRktZVHRCUVV0eVFpeDFRa0ZCVHl4alFVeGpPMEZCVFhKQ0xIVkNRVUZQTzBGQlRtTXNZVUZCV0N4RFFVRmtPMEZCVVVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1VVRkJhRUlzUTBGQmVVSXNTMEZCU3l4TlFVRTVRanM3UVVGRlFTeHBRa0ZCU3l4SFFVRk1MRWRCUVZjc2EwSkJRVkU3UVVGRFppeHpRa0ZCVFN4TFFVRkxMRWxCUkVrN1FVRkZaaXgzUWtGQlVTeExRVUZMTzBGQlJrVXNZVUZCVWl4RFFVRllPenRCUVV0QkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xFMUJRV2hDTEVOQlFYVkNMRWRCUVhaQ0xFTkJRVEpDTEZsQlFVMDdRVUZETjBJc2RVSkJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4VlFVRm1MRWRCUVRSQ0xFTkJRVFZDTzBGQlEwZ3NZVUZHUkRzN1FVRkpRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4SFFVRnlRaXhEUVVGNVFpeFpRVUZOTzBGQlF6TkNMSFZDUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNWVUZCWml4SFFVRTBRaXhEUVVFMVFqdEJRVU5JTEdGQlJrUTdPMEZCU1VFc2FVSkJRVXNzVTBGQlRDeEhRVUZwUWl4RFFVRnFRanRCUVVOQkxHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1IwRkJja0k3UVVGRFFTeHBRa0ZCU3l4alFVRk1MRWRCUVhOQ0xFTkJRWFJDTzBGQlEwRXNhVUpCUVVzc2EwSkJRVXdzUjBGQk1FSXNRMEZCTVVJN1FVRkRRU3hwUWtGQlN5eGxRVUZNTEVkQlFYVkNMRU5CUVhaQ08wRkJRMEVzYVVKQlFVc3NiVUpCUVV3c1IwRkJNa0lzU1VGQk0wSTdPMEZCUlVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4TlFVRm1MRU5CUVhOQ0xFbEJRWFJDTEVOQlFUSkNMRTlCUVU4c1MwRkJVQ3hEUVVGaExFMUJRV0lzUjBGQmMwSXNSVUZCYWtRc1JVRkJjVVFzV1VGQlRUdEJRVU4yUkN4dlFrRkJSeXhQUVVGTExHRkJRVXdzUjBGQmNVSXNSMEZCZUVJc1JVRkJOa0k3UVVGRGVrSXNNa0pCUVVzc1lVRkJUQ3hKUVVGelFpeEhRVUYwUWp0QlFVTklPMEZCUTBvc1lVRktSRHM3UVVGTlFTeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEZWQlFWUXNRMEZCYjBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQk9VSXNSVUZCY1VNc1MwRkJTeXhKUVVGTUxFTkJRVlVzVFVGQkwwTXNRMEZCY2tJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEZOQlFYWkNMRWRCUVcxRExFMUJRVzVETzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRjFRaXhSUVVGMlFpeERRVUZuUXl4RFFVRm9ReXhGUVVGdFF5eERRVUZ1UXl4RlFVRnpReXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZvUkN4RlFVRjFSQ3hMUVVGTExFbEJRVXdzUTBGQlZTeE5RVUZxUlRzN1FVRkZRU3hwUWtGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1RVRkJWQ3hEUVVGblFpeERRVUZvUWl4RlFVRnRRaXhEUVVGdVFpeEZRVUZ6UWl4TFFVRkxMR0ZCUVROQ0xFTkJRV1k3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1QwRkJZaXhIUVVGMVFpeExRVUYyUWp0QlFVTkJMR2xDUVVGTExFOUJRVXdzUTBGQllTeExRVUZpTEVkQlFYRkNMRWxCUVhKQ096dEJRVVZFTzBGQlEwTXNhVUpCUVVzc1kwRkJUQ3hIUVVGelFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1YwRkJaaXhEUVVGMFFqdEJRVU5CTEdsQ1FVRkxMRzFDUVVGTUxFZEJRVEpDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJaU3huUWtGQlppeERRVUV6UWp0QlFVTkJMR2xDUVVGTExHOUNRVUZNTEVkQlFUUkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeHBRa0ZCWml4RFFVRTFRanRCUVVOQkxHbENRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeERRVUZsTEZWQlFXWXNRMEZCY2tJN08wRkJSVUU3UVVGRFNEczdPMmxEUVVWUk8wRkJRVUU3TzBGQlJVd3NhVUpCUVVzc1UwRkJUQ3hKUVVGclFpeExRVUZMTEVsQlFVd3NRMEZCVlN4SlFVRldMRU5CUVdVc1kwRkJha003UVVGRFFTeHBRa0ZCU3l4alFVRk1MRWxCUVhWQ0xFdEJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4alFVRjBRenRCUVVOQkxHbENRVUZMTEdWQlFVd3NTVUZCZDBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEdOQlFYWkRPenRCUVVWQkxHZENRVUZKTEV0QlFVc3NVMEZCVEN4SFFVRnBRaXhMUVVGTExHRkJRVEZDTEVWQlFYbERPMEZCUTNKRExIRkNRVUZMTEZOQlFVd3NSMEZCYVVJc1EwRkJha0k3TzBGQlJVRXNjVUpCUVVzc1YwRkJUQ3hEUVVGcFFqdEJRVU5pTERCQ1FVRk5MRXRCUVVzc1NVRkVSVHRCUVVWaUxIVkNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVOQlFUZENMRVZCUVdkRExFVkJRV2hETEVsQlFYTkRMRVZCUmpWQ08wRkJSMklzZFVKQlFVY3NRMEZJVlR0QlFVbGlMREpDUVVGUE8wRkJRMGdzTWtKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxHTkJRV1FzUTBGQk5rSXNRMEZCTjBJc1JVRkJaME1zUlVGQmFFTXNTVUZCYzBNc1JVRkJkRU1zU1VGQk5FTXNTMEZCU3l4TlFVRk1MRXRCUVdkQ0xFZEJRV2hDTEVkQlFYTkNMRU5CUVhSQ0xFZEJRVEJDTEVOQlFVTXNRMEZCZGtVc1EwRkVRVHRCUVVWSUxESkNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVOQlFUZENMRVZCUVdkRExFVkJRV2hETEVsQlFYTkRPMEZCUm5SRExIRkNRVXBOTzBGQlVXSXNORUpCUVZFc1EwRlNTenRCUVZOaUxHbERRVUZoTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVWQlFUZENMRVZCUVdsRExFVkJRV3BETEVsQlFYVkRMRVZCVkhaRE8wRkJWV0lzTWtKQlFVODdRVUZXVFN4cFFrRkJha0k3UVVGWlNEczdRVUZGUkN4blFrRkJTU3hMUVVGTExHTkJRVXdzUjBGQmMwSXNTMEZCU3l4clFrRkJMMElzUlVGQmJVUTdRVUZETDBNc2NVSkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxIRkNRVUZMTEU5QlFVd3NRMEZCWVN4WlFVRmlMRU5CUVRCQ08wRkJRVUVzTWtKQlFWTXNUVUZCVFN4TFFVRk9MRVZCUVZRN1FVRkJRU3hwUWtGQk1VSTdRVUZEUVN4dlFrRkJTU3hEUVVGRExFdEJRVXNzVFVGQlRDeERRVUZaTEV0QlFXcENMRVZCUVhkQ08wRkJRM0JDTEhsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZWQlFXaENMRU5CUVRKQ0xFdEJRVXNzVDBGQmFFTTdRVUZEU0R0QlFVTktPenRCUVVWRUxHZENRVUZKTEV0QlFVc3NaVUZCVEN4SFFVRjFRaXhMUVVGTExHMUNRVUZvUXl4RlFVRnhSRHRCUVVOcVJDeHhRa0ZCU3l4bFFVRk1MRWRCUVhWQ0xFTkJRWFpDTzBGQlEwRXNiMEpCUVVrc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzZVVKQlFVc3NUVUZCVEN4RFFVRlpMRXRCUVZvN1FVRkRTRHRCUVVOS096dEJRVVZFTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hQUVVGV0xFTkJRV3RDTEUxQlFXeENMRU5CUVhsQ0xFOUJRWHBDTEVOQlFXbERMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFOUJRVGRETEVWQlFYTkVMRXRCUVVzc1QwRkJNMFFzUlVGQmIwVXNTMEZCU3l4UlFVRjZSU3hGUVVGdFJpeEpRVUZ1Uml4RlFVRjVSaXhKUVVGNlJqczdRVUZGUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzVDBGQlZpeERRVUZyUWl4TlFVRnNRaXhEUVVGNVFpeFBRVUY2UWl4RFFVRnBReXhMUVVGTExFMUJRWFJETEVWQlFUaERMRXRCUVVzc1QwRkJia1FzUlVGQk5FUXNTMEZCU3l4VlFVRnFSU3hGUVVFMlJTeEpRVUUzUlN4RlFVRnRSaXhKUVVGdVJqczdRVUZGUVN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzVDBGQllpeERRVUZ4UWp0QlFVRkJMSFZDUVVGVExFOUJRVXNzU1VGQlRDeERRVUZWTEU5QlFWWXNRMEZCYTBJc1RVRkJiRUlzUTBGQmVVSXNUMEZCZWtJc1EwRkJhVU1zVDBGQlN5eE5RVUYwUXl4RlFVRTRReXhOUVVGTkxFOUJRWEJFTEVWQlFUWkVMRTlCUVVzc1UwRkJiRVVzUlVGQk5rVXNTVUZCTjBVc1UwRkJWRHRCUVVGQkxHRkJRWEpDT3p0QlFVVkJMR2xDUVVGTExFOUJRVXdzUTBGQllTeFpRVUZpTEVOQlFUQkNMRU5CUVRGQ0xFbEJRU3RDTEVOQlFTOUNPMEZCUTBnN096dHZRMEZGVnl4SkxFVkJRVTA3TzBGQlJXUXNaMEpCUVVrc1VVRkJVU3hMUVVGTExFOUJRVXdzUTBGQllTeGpRVUZpTEVOQlFUUkNMRXRCUVRWQ0xFTkJRVm83TzBGQlJVRXNaMEpCUVVrc1EwRkJReXhMUVVGTUxFVkJRVms3UVVGRFVpeDNRa0ZCVVN4dlFrRkJWU3hKUVVGV0xFTkJRVkk3UVVGRFFTeHhRa0ZCU3l4UFFVRk1MRU5CUVdFc1IwRkJZaXhEUVVGcFFpeExRVUZxUWp0QlFVTklPMEZCUTBRc2EwSkJRVTBzUzBGQlRpeERRVUZaTEVsQlFWbzdRVUZEU0RzN08ydERRVVZUTEVjc1JVRkJTeXhMTEVWQlFVODdRVUZCUVRzN1FVRkRiRUlzWjBKQlFVa3NVVUZCVVN4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zUzBGQlpDeERRVUZ2UWl4SFFVRndRaXhEUVVGYU8wRkJRMEVzWjBKQlFVa3NWVUZCVlN4TFFVRkxMRWxCUVV3c1EwRkJWU3hIUVVGV0xFTkJRV01zVDBGQlpDeEZRVUZrTzBGQlEwRXNaMEpCUVVrc2NVSkJRWEZDTEVOQlFYcENPMEZCUTBFc1owSkJRVWtzWjBKQlFXZENMRWRCUVhCQ08wRkJRMEVzWjBKQlFVa3NaVUZCWlN4RlFVRnVRanM3UVVGRlFTeHJRa0ZCVFN4RlFVRk9MRU5CUVZNc1JVRkJReXhOUVVGTkxGRkJRVkFzUlVGQlZDeEZRVUV5UWl4SFFVRXpRanRCUVVOQkxHdENRVUZOTEZWQlFVNHNRMEZCYVVJc1IwRkJha0lzUTBGQmNVSXNXVUZCVFR0QlFVTjJRaXh2UWtGQlNTeEpRVUZLTEVkQlFWY3NVVUZCV0R0QlFVTklMR0ZCUmtRN1FVRkhRU3hyUWtGQlRTeExRVUZPT3p0QlFVVkJMRzlDUVVGUkxFTkJRVklzUjBGQldTeEpRVUZKTEVOQlFXaENPMEZCUTBFc2IwSkJRVkVzUTBGQlVpeEhRVUZaTEVsQlFVa3NRMEZCYUVJN1FVRkRRU3h2UWtGQlVTeFBRVUZTTEVkQlFXdENMRU5CUVd4Q08wRkJRMEVzYjBKQlFWRXNZVUZCVWl4RFFVRnpRaXhWUVVGMFFqczdRVUZGUVN4blFrRkJTU3hKUVVGSkxFMUJRVW9zU1VGQll5eERRVUZzUWl4RlFVRnhRanRCUVVOcVFpeG5RMEZCWjBJc1IwRkJhRUk3UVVGRFFTd3JRa0ZCWlN4RlFVRm1PMEZCUTBFc2QwSkJRVkVzVVVGQlVqdEJRVU5JT3p0QlFVVkVMRzlDUVVGUkxHZENRVUZTTEVOQlFYbENMRXRCUVhwQ0xFTkJRU3RDTEVOQlFVTXNZVUZCYUVNc1JVRkJLME1zUTBGQlF5eGhRVUZvUkR0QlFVTkJMRzlDUVVGUkxHZENRVUZTTEVOQlFYbENMRXRCUVhwQ0xFTkJRU3RDTEdGQlFTOUNMRVZCUVRoRExHRkJRVGxETzBGQlEwRXNiMEpCUVZFc1MwRkJVaXhEUVVGakxFbEJRV1FzUlVGQmIwSXNSMEZCY0VJc1JVRkJlVUlzU1VGQmVrSXNSVUZCSzBJc1dVRkJMMEk3UVVGRFFTeHZRa0ZCVVN4TlFVRlNMRWRCUVdsQ0xGbEJRVTA3UVVGRGJrSXNjME5CUVhOQ0xFOUJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4alFVRnlRenRCUVVOQkxHOUNRVUZITEhOQ1FVRnpRaXhIUVVGNlFpeEZRVUUyUWp0QlFVTjZRaXg1UTBGQmNVSXNRMEZCY2tJN1FVRkRRU3cwUWtGQlVTeFBRVUZTTzBGQlEwZzdRVUZGU2l4aFFWQkVPMEZCVVVFc2IwSkJRVkVzVDBGQlVpeERRVUZuUWp0QlFVRkJMSFZDUVVGWkxGTkJRVk1zU1VGQlZDeEhRVUZuUWl4TFFVRTFRanRCUVVGQkxHRkJRV2hDTzBGQlEwRXNaMEpCUVVrc1EwRkJReXhMUVVGTExFMUJRVXdzUTBGQldTeExRVUZxUWl4RlFVRjNRanRCUVVOd1FpeHhRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFZRVUZvUWl4RFFVRXlRaXhMUVVGTExFOUJRV2hETzBGQlEwZzdRVUZEU2pzN08ybERRVVZSTEUwc1JVRkJVU3hMTEVWQlFVODdRVUZEY0VJc2FVSkJRVXNzWTBGQlRDeERRVUZ2UWl4SlFVRndRaXhEUVVGNVFpeEZRVUY2UWl4RlFVRTBRaXhEUVVFMVFpeEZRVUU0UWl4SFFVRTVRanRCUVVOQkxHdENRVUZOTEUxQlFVNHNRMEZCWVN4UFFVRlBMRTFCUVhCQ08wRkJRMEVzYVVKQlFVc3NVMEZCVEN4RFFVRmxMRXRCUVdZc1JVRkJjMElzVDBGQlR5eEpRVUUzUWp0QlFVTkJMR2RDUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZZTEVWQlFXdENPMEZCUTJRc2NVSkJRVXNzYlVKQlFVd3NRMEZCZVVJc1NVRkJla0lzUTBGQk9FSXNSVUZCT1VJc1JVRkJhVU1zUTBGQmFrTXNSVUZCYlVNc1IwRkJia003UVVGRFFTeHhRa0ZCU3l4SFFVRk1MRU5CUVZNc1YwRkJWQ3hEUVVGeFFpeE5RVUZOTEZOQlFUTkNPMEZCUTBnN1FVRkRSQ3h0UWtGQlR5eEpRVUZRTzBGQlEwZzdPenRyUTBGRlV5eE5MRVZCUVZFc1RTeEZRVUZSTzBGQlEzUkNMR2xDUVVGTExHTkJRVXdzUTBGQmIwSXNTVUZCY0VJc1EwRkJlVUlzUlVGQmVrSXNSVUZCTkVJc1EwRkJOVUlzUlVGQk9FSXNSMEZCT1VJN1FVRkRRU3h0UWtGQlR5eE5RVUZRTEVOQlFXTXNUMEZCVHl4TlFVRnlRanRCUVVOQkxHbENRVUZMTEVkQlFVd3NRMEZCVXl4WlFVRlVPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEUxQlFXWXNSVUZCZFVJc1QwRkJUeXhKUVVFNVFqdEJRVU5CTEdkQ1FVRkpMRU5CUVVNc1QwRkJUeXhMUVVGYUxFVkJRVzFDTzBGQlEyWXNjVUpCUVVzc2IwSkJRVXdzUTBGQk1FSXNTVUZCTVVJN1FVRkRRU3h4UWtGQlN5eFJRVUZNTzBGQlEwZzdRVUZEUkN4dFFrRkJUeXhKUVVGUU8wRkJRMGc3T3p0dFEwRkZWU3hOTEVWQlFWRXNTeXhGUVVGUE8wRkJRM1JDTEd0Q1FVRk5MRTFCUVU0c1EwRkJZU3hOUVVGTkxFMUJRVzVDTzBGQlEwRXNiVUpCUVU4c1RVRkJVQ3hEUVVGakxFMUJRVTBzVFVGQmNFSTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzVFVGQlpqdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hMUVVGbU8wRkJRMEVzWjBKQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVZnc1JVRkJhMEk3UVVGRFpDeHhRa0ZCU3l4dFFrRkJUQ3hEUVVGNVFpeEpRVUY2UWl4RFFVRTRRaXhGUVVFNVFpeEZRVUZwUXl4RFFVRnFReXhGUVVGdFF5eEhRVUZ1UXp0QlFVTkJMSEZDUVVGTExFZEJRVXdzUTBGQlV5eFhRVUZVTEVOQlFYRkNMRTFCUVUwc1UwRkJNMEk3UVVGRFNEdEJRVU5FTEdsQ1FVRkxMRWRCUVV3c1EwRkJVeXhaUVVGVU8wRkJRMEVzWjBKQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVZvc1JVRkJiVUk3UVVGRFppeHhRa0ZCU3l4dlFrRkJUQ3hEUVVFd1FpeEpRVUV4UWp0QlFVTkJMSEZDUVVGTExGRkJRVXc3UVVGRFNEdEJRVU5LT3pzN2JVTkJSVk03UVVGQlFUczdRVUZEVGl4cFFrRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEZWQlFXWXNSMEZCTkVJc1EwRkJOVUk3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1QwRkJZaXhIUVVGMVFpeEpRVUYyUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRlZCUVdoQ0xFTkJRVEpDTEV0QlFVc3NUMEZCYUVNN1FVRkRRU3huUWtGQlNTeFJRVUZSTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWxCUVZZc1EwRkJaU3hOUVVGbUxFTkJRWE5DTEV0QlFVc3NTVUZCTTBJc1JVRkJhVU1zU1VGQmFrTXNRMEZCV2p0QlFVTkJMR3RDUVVGTkxFZEJRVTRzUTBGQlZTeEpRVUZXTEVWQlFXZENMRmxCUVUwN1FVRkRiRUlzZFVKQlFVc3NTMEZCVEN4RFFVRlhMRWxCUVZnN1FVRkRRU3gxUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWxCUVc1Q08wRkJRMEVzZFVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzUzBGQmFFSXNRMEZCYzBJc1RVRkJkRUk3UVVGRFNDeGhRVXBFTzBGQlMwRXNhMEpCUVUwc1MwRkJUanRCUVVOSU96czdPMFZCY0U0MlFpeFBRVUZQTEVzN08ydENRVUZ3UWl4Sk96czdPenM3T3pzN096dEJRMHB5UWpzN096dEJRVU5CT3pzN096czdPenM3T3pzN1NVRkZjVUlzVXpzN096czdPenM3T3pzN2FVTkJSVkk3TzBGQlIwd3NhVUpCUVVzc1JVRkJUQ3hIUVVGVkxFdEJRVXNzUjBGQlRDeERRVUZUTEZWQlFWUXNRMEZCYjBJc1EwRkJjRUlzUlVGQmRVSXNRMEZCZGtJc1JVRkJlVUlzUjBGQmVrSXNSVUZCTmtJc1IwRkJOMElzUlVGQmEwTXNVVUZCYkVNc1EwRkJWanRCUVVOQkxHOUNRVUZSTEVkQlFWSXNRMEZCV1N4TFFVRkxMRVZCUVdwQ08wRkJRMGc3T3p0cFEwRkZVVHRCUVVOTUxHbENRVUZMTEZGQlFVdzdRVUZEU0RzN08yMURRVU5UTzBGQlEwNHNaMEpCUVVrc1UwRkJVeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRkZCUVdoQ0xFTkJRWGxDTEUxQlFYcENMRU5CUVdkRExFOUJRVThzVVVGQlVDeERRVUZuUWl4SFFVRm9SQ3hEUVVGaU8wRkJRMEVzWjBKQlFVY3NUVUZCU0N4RlFVRlZPMEZCUTA0c2NVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1MwRkJhRUlzUTBGQmMwSXNUVUZCZEVJN1FVRkZTRHRCUVVOS096czdPMFZCYkVKclF5eFBRVUZQTEVzN08ydENRVUY2UWl4VE96czdPenM3T3pzN096dEJRMGh5UWpzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3p0SlFVVnhRaXhST3pzN096czdPenM3T3p0cFEwRkZVanRCUVVGQk96dEJRVU5NTEdsQ1FVRkxMRVZCUVV3c1IwRkJWU3hMUVVGTExFZEJRVXdzUTBGQlV5eFZRVUZVTEVOQlFXOUNMRU5CUVhCQ0xFVkJRWFZDTEVOQlFYWkNMRVZCUVRCQ0xFbEJRVEZDTEVWQlFXZERMRWxCUVdoRExFVkJRWE5ETEZGQlFYUkRMRU5CUVZZN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMRlZCUVdZc1IwRkJORUlzUTBGQk5VSTdPMEZCUjBFN1FVRkRRU3hwUWtGQlN5eE5RVUZNTEVkQlFXTXNjVUpCUVZjN1FVRkRja0lzYzBKQlFVMHNTMEZCU3l4SlFVUlZPMEZCUlhKQ0xHMUNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGR1JUdEJRVWR5UWl4dFFrRkJSeXhQUVVGUExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1RVRklURHRCUVVseVFpeDNRa0ZCVVN4RlFVcGhPMEZCUzNKQ0xIVkNRVUZQTEdOQlRHTTdRVUZOY2tJc2RVSkJRVTg3UVVGT1l5eGhRVUZZTEVOQlFXUTdRVUZSUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UlFVRm9RaXhEUVVGNVFpeExRVUZMTEUxQlFUbENPMEZCUTBFc2FVSkJRVXNzWlVGQlRDeEhRVUYxUWl4RFFVRjJRanRCUVVOQkxHbENRVUZMTEcxQ1FVRk1MRWRCUVRKQ0xFbEJRVE5DT3p0QlFVVkJPMEZCUTBFc2FVSkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJaanRCUVVOQkxHbENRVUZMTEU5QlFVd3NRMEZCWVN4VlFVRmlMRWRCUVRCQ0xFbEJRVEZDTzBGQlEwRXNhVUpCUVVzc1UwRkJUQ3hIUVVGcFFpeERRVUZxUWp0QlFVTnZRanRCUVVOd1FpeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFZEJRWEpDTzBGQlEwRXNhVUpCUVVzc1kwRkJUQ3hIUVVGelFpeERRVUYwUWp0QlFVTkJMR2xDUVVGTExHdENRVUZNTEVkQlFUQkNMRU5CUVRGQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVN4cFFrRkJTeXhqUVVGTUxFZEJRWE5DTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJkRUk3UVVGRFFTeHBRa0ZCU3l4alFVRk1MRU5CUVc5Q0xGVkJRWEJDTEVkQlFXbERMRWxCUVdwRE8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFc2FVSkJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJRWEpDTzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeFZRVUZ1UWl4SFFVRm5ReXhKUVVGb1F6dEJRVU5CTzBGQlEwRXNhVUpCUVVzc2JVSkJRVXdzUjBGQk1rSXNSMEZCTTBJN1FVRkRRU3hwUWtGQlN5eHZRa0ZCVEN4SFFVRTBRaXhEUVVFMVFqdEJRVU5CTEdsQ1FVRkxMSGRDUVVGTUxFZEJRV2RETEVOQlFXaERPMEZCUTBrN1FVRkRTaXhwUWtGQlN5eHBRa0ZCVEN4RFFVRjFRanRCUVVOdVFpeHpRa0ZCVFN4TFFVRkxMRWxCUkZFN1FVRkZia0lzYlVKQlFVY3NTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxHTkJRV1FzUTBGQk5rSXNRMEZCTjBJc1JVRkJaME1zUlVGQmFFTXNTVUZCYzBNc1JVRkdkRUk3UVVGSGJrSTdRVUZEUVN4dFFrRkJSeXhEUVVwblFqdEJRVXR1UWl4MVFrRkJUenRCUVVOSUxIVkNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVOQlFUZENMRVZCUVdkRExFVkJRV2hETEVsQlFYTkRMRVZCUVhSRExFbEJRVFJETEV0QlFVc3NUVUZCVEN4TFFVRm5RaXhIUVVGb1FpeEhRVUZ6UWl4RFFVRjBRaXhIUVVFd1FpeERRVUZETEVOQlFYWkZMRU5CUkVFN1FVRkZTQ3gxUWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXp0QlFVWjBReXhwUWtGTVdUdEJRVk51UWp0QlFVTkJMSGRDUVVGUkxFVkJWbGM3UVVGWGJrSXNOa0pCUVdFc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTEdOQlFXUXNRMEZCTmtJc1JVRkJOMElzUlVGQmFVTXNSVUZCYWtNc1NVRkJkVU1zUlVGWWFrTTdRVUZaYmtJc2RVSkJRVThzVVVGYVdUdEJRV0Z1UWl4elFrRkJUVHRCUVdKaExHRkJRWFpDTzBGQlpVRTdPMEZCUlVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4TlFVRm1MRU5CUVhOQ0xFbEJRWFJDTEVOQlFUSkNMRTlCUVU4c1MwRkJVQ3hEUVVGaExFMUJRV0lzUjBGQmMwSXNSVUZCYWtRc1JVRkJjVVFzV1VGQlRUdEJRVU4yUkN4dlFrRkJSeXhQUVVGTExHRkJRVXdzUjBGQmNVSXNSMEZCZUVJc1JVRkJOa0k3UVVGRGVrSXNNa0pCUVVzc1lVRkJUQ3hKUVVGelFpeEhRVUYwUWp0QlFVTklPMEZCUTBvc1lVRktSRHM3UVVGTlFTeHBRa0ZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEZWQlFWUXNRMEZCYjBJc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQk9VSXNSVUZCY1VNc1MwRkJTeXhKUVVGTUxFTkJRVlVzVFVGQkwwTXNRMEZCY2tJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRWFZDTEZOQlFYWkNMRWRCUVcxRExFMUJRVzVETzBGQlEwRXNhVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRjFRaXhSUVVGMlFpeERRVUZuUXl4RFFVRm9ReXhGUVVGdFF5eERRVUZ1UXl4RlFVRnpReXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZvUkN4RlFVRjFSQ3hMUVVGTExFbEJRVXdzUTBGQlZTeE5RVUZxUlRzN1FVRkZRU3hwUWtGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1RVRkJWQ3hEUVVGblFpeERRVUZvUWl4RlFVRnRRaXhEUVVGdVFpeEZRVUZ6UWl4TFFVRkxMR0ZCUVROQ0xFTkJRV1k3UVVGRFFTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1QwRkJZaXhIUVVGMVFpeExRVUYyUWp0QlFVTkJMR2xDUVVGTExFOUJRVXdzUTBGQllTeExRVUZpTEVkQlFYRkNMRWxCUVhKQ096dEJRVVZCTEdsQ1FVRkxMRWRCUVV3c1IwRkJWeXhyUWtGQlVUdEJRVU5tTEhOQ1FVRk5MRXRCUVVzc1NVRkVTVHRCUVVWbUxIZENRVUZSTEV0QlFVczdRVUZHUlN4aFFVRlNMRU5CUVZnN08wRkJTMEU3UVVGRFJEdEJRVU5ETEdsQ1FVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RFFVRmxMRmRCUVdZc1EwRkJkRUk3UVVGRFFTeHBRa0ZCU3l4dFFrRkJUQ3hIUVVFeVFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVdVc1owSkJRV1lzUTBGQk0wSTdRVUZEUVN4cFFrRkJTeXh2UWtGQlRDeEhRVUUwUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRV1VzYVVKQlFXWXNRMEZCTlVJN1FVRkRRU3hwUWtGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQlpTeFZRVUZtTEVOQlFYSkNPenRCUVVWQk96czdRVUZKUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5JT3pzN2FVTkJSVkU3UVVGRFRDeHBRa0ZCU3l4VFFVRk1MRWxCUVd0Q0xFdEJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4alFVRnFRenRCUVVOQkxHbENRVUZMTEdOQlFVd3NTVUZCZFVJc1MwRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEdOQlFYUkRPMEZCUTBFc2FVSkJRVXNzWlVGQlRDeEpRVUYzUWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzWTBGQmRrTTdPMEZCUlVFc1owSkJRVWtzUzBGQlN5eFRRVUZNTEVkQlFXbENMRXRCUVVzc1lVRkJNVUlzUlVGQmVVTTdRVUZEY2tNc2NVSkJRVXNzVTBGQlRDeEhRVUZwUWl4RFFVRnFRanM3UVVGRlFTeHhRa0ZCU3l4WFFVRk1MRU5CUVdsQ08wRkJRMklzTUVKQlFVMHNTMEZCU3l4SlFVUkZPMEZCUldJc2RVSkJRVWNzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUTBGQk4wSXNSVUZCWjBNc1JVRkJhRU1zU1VGQmMwTXNSVUZHTlVJN1FVRkhZanRCUVVOQkxIVkNRVUZITEVOQlNsVTdRVUZMWWl3eVFrRkJUenRCUVVOSUxESkNRVUZITEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVOQlFUZENMRVZCUVdkRExFVkJRV2hETEVsQlFYTkRMRVZCUVhSRExFbEJRVFJETEV0QlFVc3NUVUZCVEN4TFFVRm5RaXhIUVVGb1FpeEhRVUZ6UWl4RFFVRjBRaXhIUVVFd1FpeERRVUZETEVOQlFYWkZMRU5CUkVFN1FVRkZTQ3d5UWtGQlJ5eExRVUZMTEVsQlFVd3NRMEZCVlN4SFFVRldMRU5CUVdNc1kwRkJaQ3hEUVVFMlFpeERRVUUzUWl4RlFVRm5ReXhGUVVGb1F5eEpRVUZ6UXp0QlFVWjBReXh4UWtGTVRUdEJRVk5pTzBGQlEwRXNORUpCUVZFc1EwRldTenRCUVZkaUxHbERRVUZoTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVWQlFUZENMRVZCUVdsRExFVkJRV3BETEVsQlFYVkRMRVZCV0haRE8wRkJXV0lzTWtKQlFVOHNUMEZhVFR0QlFXRmlMREJDUVVGTk96dEJRV0pQTEdsQ1FVRnFRanRCUVdkQ1NEczdRVUZGUkN4blFrRkJTU3hMUVVGTExHTkJRVXdzUjBGQmMwSXNTMEZCU3l4clFrRkJMMElzUlVGQmJVUTdRVUZETDBNc2NVSkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxHOUNRVUZKTEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJha0lzUlVGQmQwSTdRVUZEY0VJc2VVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1ZVRkJhRUlzUTBGQk1rSXNTMEZCU3l4UFFVRm9RenRCUVVOQkxEUkNRVUZSTEVkQlFWSXNRMEZCV1N4WlFVRmFPMEZCUTBnN1FVRkRTanM3UVVGRlJDeG5Ra0ZCU1N4TFFVRkxMR1ZCUVV3c1IwRkJkVUlzUzBGQlN5eHRRa0ZCYUVNc1JVRkJjVVE3UVVGRGFrUXNjVUpCUVVzc1pVRkJUQ3hIUVVGMVFpeERRVUYyUWp0QlFVTkJMRzlDUVVGSkxFdEJRVXNzVFVGQlRDeERRVUZaTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEhkQ1FVRkpMRmRCUVZjc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UlFVRm9RaXhEUVVGNVFpeE5RVUY2UWl4RFFVRm5ReXhQUVVGUExGRkJRVkFzUTBGQlowSXNVVUZCYUVRc1EwRkJaanRCUVVOQkxIZENRVUZITEZGQlFVZ3NSVUZCWVR0QlFVTlVMRFpDUVVGTExFMUJRVXdzUTBGQldTeExRVUZhTzBGQlEwZzdRVUZEU2p0QlFVTktPenRCUVVWRUxHbENRVUZMTEVsQlFVd3NRMEZCVlN4UFFVRldMRU5CUVd0Q0xFMUJRV3hDTEVOQlFYbENMRTlCUVhwQ0xFTkJRV2xETEV0QlFVc3NUVUZCVEN4RFFVRlpMRTlCUVRkRExFVkJRWE5FTEV0QlFVc3NUMEZCTTBRc1JVRkJiMFVzUzBGQlN5eFJRVUY2UlN4RlFVRnRSaXhKUVVGdVJpeEZRVUY1Uml4SlFVRjZSanM3UVVGRlFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVGclFpeE5RVUZzUWl4RFFVRjVRaXhQUVVGNlFpeERRVUZwUXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hQUVVFM1F5eEZRVUZ6UkN4TFFVRkxMR05CUVRORUxFVkJRVEpGTEV0QlFVc3NVVUZCYUVZc1JVRkJNRVlzU1VGQk1VWXNSVUZCWjBjc1NVRkJhRWM3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFOUJRVllzUTBGQmEwSXNUVUZCYkVJc1EwRkJlVUlzVDBGQmVrSXNRMEZCYVVNc1MwRkJTeXhOUVVGMFF5eEZRVUU0UXl4RFFVRkRMRXRCUVVzc1QwRkJUaXhGUVVGakxFdEJRVXNzWTBGQmJrSXNRMEZCT1VNc1JVRkJhMFlzUzBGQlN5eFZRVUYyUml4RlFVRnRSeXhKUVVGdVJ5eEZRVUY1Unl4SlFVRjZSenM3UVVGRlFTeHBRa0ZCU3l4UlFVRk1PMEZCUTBFN1FVRkRTRHM3TzI5RFFVVlhMRWtzUlVGQlRUczdRVUZGWkN4blFrRkJTU3hSUVVGUkxFdEJRVXNzVDBGQlRDeERRVUZoTEdOQlFXSXNRMEZCTkVJc1MwRkJOVUlzUTBGQldqdEJRVU5CTEdkQ1FVRkpMR1ZCUVdVc1MwRkJTeXhQUVVGTUxFTkJRV0VzVVVGQllpeERRVUZ6UWl4TlFVRjZRenRCUVVOQkxHOUNRVUZSTEVkQlFWSXNRMEZCV1N4WlFVRmFPenRCUVVWQkxHZENRVUZKTEVOQlFVTXNTMEZCVEN4RlFVRlpPMEZCUTFJc2QwSkJRVkVzZDBKQlFWVXNTVUZCVml4RFFVRlNPMEZCUTBFc2IwSkJRVWNzWlVGQlpTeERRVUZzUWl4RlFVRnZRanRCUVVOb1FpeDVRa0ZCU3l4UFFVRk1MRU5CUVdFc1IwRkJZaXhEUVVGcFFpeExRVUZxUWp0QlFVTklPMEZCUlVvN1FVRkRSQ3hyUWtGQlRTeExRVUZPTEVOQlFWa3NTVUZCV2p0QlFVTklPenM3TWtOQlJXdENMRWtzUlVGQlRUczdRVUZGY2tJc1owSkJRVWtzVVVGQlVTeExRVUZMTEdOQlFVd3NRMEZCYjBJc1kwRkJjRUlzUTBGQmJVTXNTMEZCYmtNc1EwRkJXanRCUVVOQkxHZENRVUZKTEdWQlFXVXNTMEZCU3l4alFVRk1MRU5CUVc5Q0xGRkJRWEJDTEVOQlFUWkNMRTFCUVdoRU96dEJRVVZCTEdkQ1FVRkpMRU5CUVVNc1MwRkJUQ3hGUVVGWk8wRkJRMUlzZDBKQlFWRXNkMEpCUVZVc1NVRkJWaXhEUVVGU08wRkJRMEVzYjBKQlFVY3NaVUZCWlN4RlFVRnNRaXhGUVVGeFFqdEJRVU5xUWl4NVFrRkJTeXhqUVVGTUxFTkJRVzlDTEVkQlFYQkNMRU5CUVhkQ0xFdEJRWGhDTzBGQlEwZzdRVUZGU2p0QlFVTkVMR3RDUVVGTkxFdEJRVTRzUTBGQldTeEpRVUZhTzBGQlEwZzdPenN3UTBGRmFVSXNTU3hGUVVGTk96dEJRVVZ3UWl4blFrRkJTU3hSUVVGUkxFdEJRVXNzWVVGQlRDeERRVUZ0UWl4alFVRnVRaXhEUVVGclF5eExRVUZzUXl4RFFVRmFPMEZCUTBFc1owSkJRVWtzWlVGQlpTeExRVUZMTEdGQlFVd3NRMEZCYlVJc1VVRkJia0lzUTBGQk5FSXNUVUZCTDBNN1FVRkRRU3h2UWtGQlVTeEhRVUZTTEVOQlFWa3NXVUZCV2pzN1FVRkZRU3huUWtGQlNTeERRVUZETEV0QlFVd3NSVUZCV1R0QlFVTlNMSGRDUVVGUkxIZENRVUZWTEVsQlFWWXNRMEZCVWp0QlFVTkJMRzlDUVVGSExHZENRVUZuUWl4RFFVRnVRaXhGUVVGeFFqdEJRVU5xUWl4NVFrRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVhWQ0xFdEJRWFpDTzBGQlEwZzdRVUZGU2p0QlFVTkVMR3RDUVVGTkxFdEJRVTRzUTBGQldTeEpRVUZhTzBGQlEwZzdPenRyUTBGRlV5eEhMRVZCUVVzc1N5eEZRVUZQTzBGQlFVRTdPMEZCUTJ4Q0xHZENRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFdEJRV1FzUTBGQmIwSXNSMEZCY0VJc1EwRkJXanRCUVVOQkxHZENRVUZKTEZWQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGakxFOUJRV1FzUlVGQlpEdEJRVU5CTEdkQ1FVRkpMSEZDUVVGeFFpeERRVUY2UWp0QlFVTkJMR2RDUVVGSkxHZENRVUZuUWl4SFFVRndRanRCUVVOQkxHZENRVUZKTEdWQlFXVXNSVUZCYmtJN08wRkJSVUVzYTBKQlFVMHNSVUZCVGl4RFFVRlRMRVZCUVVNc1RVRkJUU3hSUVVGUUxFVkJRVlFzUlVGQk1rSXNSMEZCTTBJN1FVRkRRU3hyUWtGQlRTeFZRVUZPTEVOQlFXbENMRWRCUVdwQ0xFTkJRWEZDTEZsQlFVMDdRVUZEZGtJc2IwSkJRVWtzU1VGQlNpeEhRVUZYTEZGQlFWZzdRVUZEU0N4aFFVWkVPMEZCUjBFc2EwSkJRVTBzUzBGQlRqczdRVUZGUVN4dlFrRkJVU3hEUVVGU0xFZEJRVmtzU1VGQlNTeERRVUZvUWp0QlFVTkJMRzlDUVVGUkxFTkJRVklzUjBGQldTeEpRVUZKTEVOQlFXaENPMEZCUTBFc2IwSkJRVkVzVDBGQlVpeEhRVUZyUWl4RFFVRnNRanRCUVVOQkxHOUNRVUZSTEdGQlFWSXNRMEZCYzBJc1ZVRkJkRUk3TzBGQlJVRXNaMEpCUVVrc1NVRkJTU3hOUVVGS0xFbEJRV01zUTBGQmJFSXNSVUZCY1VJN1FVRkRha0lzWjBOQlFXZENMRWRCUVdoQ08wRkJRMEVzSzBKQlFXVXNSVUZCWmp0QlFVTkJMSGRDUVVGUkxGRkJRVkk3UVVGRFNEczdRVUZGUkN4dlFrRkJVU3huUWtGQlVpeERRVUY1UWl4TFFVRjZRaXhEUVVFclFpeERRVUZETEdGQlFXaERMRVZCUVN0RExFTkJRVU1zWVVGQmFFUTdRVUZEUVN4dlFrRkJVU3huUWtGQlVpeERRVUY1UWl4TFFVRjZRaXhEUVVFclFpeGhRVUV2UWl4RlFVRTRReXhoUVVFNVF6dEJRVU5CTEc5Q1FVRlJMRXRCUVZJc1EwRkJZeXhKUVVGa0xFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFbEJRWHBDTEVWQlFTdENMRmxCUVM5Q08wRkJRMEVzYjBKQlFWRXNUVUZCVWl4SFFVRnBRaXhaUVVGTk8wRkJRMjVDTEhORFFVRnpRaXhQUVVGTExFbEJRVXdzUTBGQlZTeEpRVUZXTEVOQlFXVXNZMEZCY2tNN1FVRkRRU3h2UWtGQlJ5eHpRa0ZCYzBJc1IwRkJla0lzUlVGQk5rSTdRVUZEZWtJc2VVTkJRWEZDTEVOQlFYSkNPMEZCUTBFc05FSkJRVkVzVDBGQlVqdEJRVU5JTzBGQlJVb3NZVUZRUkR0QlFWRkJMRzlDUVVGUkxFOUJRVklzUTBGQlowSTdRVUZCUVN4MVFrRkJXU3hUUVVGVExFbEJRVlFzUjBGQlowSXNTMEZCTlVJN1FVRkJRU3hoUVVGb1FqdEJRVU5CTEdkQ1FVRkpMRU5CUVVNc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQmFrSXNSVUZCZDBJN1FVRkRjRUlzY1VKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVlVGQmFFSXNRMEZCTWtJc1MwRkJTeXhQUVVGb1F6dEJRVU5JTzBGQlEwbzdPenRwUTBGRlVTeE5MRVZCUVZFc1N5eEZRVUZQT3p0QlFVVndRaXhwUWtGQlN5eGpRVUZNTEVOQlFXOUNMRWxCUVhCQ0xFTkJRWGxDTEVWQlFYcENMRVZCUVRSQ0xFTkJRVFZDTEVWQlFUaENMRWRCUVRsQ08wRkJRMEVzYTBKQlFVMHNUVUZCVGl4RFFVRmhMRTlCUVU4c1RVRkJjRUk3UVVGRFFTeHBRa0ZCU3l4VFFVRk1MRU5CUVdVc1MwRkJaaXhGUVVGelFpeFBRVUZQTEVsQlFUZENPenRCUVVWQkxHZENRVUZKTEVOQlFVTXNUVUZCVFN4TFFVRllMRVZCUVd0Q08wRkJRMlFzY1VKQlFVc3NiVUpCUVV3c1EwRkJlVUlzU1VGQmVrSXNRMEZCT0VJc1JVRkJPVUlzUlVGQmEwTXNRMEZCYkVNc1JVRkJjVU1zUjBGQmNrTTdRVUZEUVN4eFFrRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZDeERRVUZ4UWl4TlFVRk5MRk5CUVROQ08wRkJRMEVzZDBKQlFVOHNUVUZCVFN4SlFVRmlPMEZCUTBrN1FVRkRRU3g1UWtGQlN5eEhRVUZNTzBGQlEwVXNOa0pCUVVzc2EwSkJRVXdzUTBGQmQwSTdRVUZEYkVJc2EwTkJRVTBzUzBGQlN5eEpRVVJQTzBGQlJXeENMQ3RDUVVGSExFMUJRVTBzUTBGR1V6dEJRVWRzUWl3clFrRkJSeXhOUVVGTkxFTkJTRk03UVVGSmJFSXNiVU5CUVU4N1FVRkRTQ3h0UTBGQlJ5eExRVUZMTEVWQlJFdzdRVUZGU0N4dFEwRkJSeXhEUVVGRExFVkJRVVFzUjBGQlRUdEJRVVpPTERaQ1FVcFhPMEZCVVd4Q0xHOURRVUZSTEVWQlVsVTdRVUZUYkVJc2VVTkJRV0VzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpMR05CUVdRc1EwRkJOa0lzUlVGQk4wSXNSVUZCYVVNc1JVRkJha01zU1VGQmRVTXNSVUZVYkVNN1FVRlZiRUlzYlVOQlFVOHNUMEZXVnp0QlFWZHNRaXhyUTBGQlRUdEJRVmhaTEhsQ1FVRjRRanRCUVdGQkxEWkNRVUZMTEd0Q1FVRk1MRU5CUVhkQ08wRkJRMnhDTEd0RFFVRk5MRXRCUVVzc1NVRkVUenRCUVVWc1Fpd3JRa0ZCUnl4TlFVRk5MRU5CUmxNN08wRkJTV3hDTEN0Q1FVRkhMRTFCUVUwc1EwRktVenRCUVV0c1FpeHRRMEZCVHp0QlFVTklMRzFEUVVGSExFTkJRVU1zUlVGQlJDeEhRVUZOTEVWQlJFNDdRVUZGU0N4dFEwRkJSeXhEUVVGRExFVkJRVVFzUjBGQlRUdEJRVVpPTERaQ1FVeFhPenRCUVZWc1FpeHZRMEZCVVN4RlFWWlZPMEZCVjJ4Q0xIbERRVUZoTEV0QlFVc3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJZeXhqUVVGa0xFTkJRVFpDTEVWQlFUZENMRVZCUVdsRExFVkJRV3BETEVsQlFYVkRMRVZCV0d4RE8wRkJXV3hDTEcxRFFVRlBMRTlCV2xjN1FVRmhiRUlzYTBOQlFVMDdRVUZpV1N4NVFrRkJlRUk3UVVGbFFUczdRVUV2UWs0N1FVRnJRMEVzZFVKQlFVOHNTVUZCVUR0QlFVTklPMEZCUTBvN096dHRRMEZGVlN4TkxFVkJRVkVzU3l4RlFVRlBPMEZCUTNSQ08wRkJRMEVzYTBKQlFVMHNUVUZCVGl4RFFVRmhMRU5CUVdJN1FVRkRRVHRCUVVOQkxHMUNRVUZQTEUxQlFWQXNRMEZCWXl4RFFVRmtPMEZCUTBFc2FVSkJRVXNzVTBGQlRDeERRVUZsTEUxQlFXWTdRVUZEUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzUzBGQlpqdEJRVU5CTEdkQ1FVRkpMRU5CUVVNc1RVRkJUU3hMUVVGWUxFVkJRV3RDTzBGQlEyUXNjVUpCUVVzc2JVSkJRVXdzUTBGQmVVSXNTVUZCZWtJc1EwRkJPRUlzUlVGQk9VSXNSVUZCYVVNc1EwRkJha01zUlVGQmJVTXNSMEZCYmtNN1FVRkRRU3h4UWtGQlN5eEhRVUZNTEVOQlFWTXNWMEZCVkN4RFFVRnhRaXhOUVVGTkxGTkJRVE5DTzBGQlEwZzdRVUZEUkN4cFFrRkJTeXhIUVVGTUxFTkJRVk1zV1VGQlZEdEJRVU5CTEdkQ1FVRkpMRU5CUVVNc1QwRkJUeXhMUVVGYUxFVkJRVzFDTzBGQlEyWXNjVUpCUVVzc2IwSkJRVXdzUTBGQk1FSXNTVUZCTVVJN1FVRkRRU3h4UWtGQlN5eFJRVUZNTzBGQlEwZzdRVUZEU2pzN08yMURRVVZUTzBGQlFVRTdPMEZCUTA0c2FVSkJRVXNzU1VGQlRDeERRVUZWTEVsQlFWWXNRMEZCWlN4VlFVRm1MRWRCUVRSQ0xFTkJRVFZDTzBGQlEwRXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExFOUJRV0lzUjBGQmRVSXNTVUZCZGtJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhWUVVGb1FpeERRVUV5UWl4TFFVRkxMRTlCUVdoRE8wRkJRMEVzWjBKQlFVa3NVVUZCVVN4TFFVRkxMRWxCUVV3c1EwRkJWU3hKUVVGV0xFTkJRV1VzVFVGQlppeERRVUZ6UWl4TFFVRkxMRWxCUVROQ0xFVkJRV2xETEVsQlFXcERMRU5CUVZvN1FVRkRRU3hyUWtGQlRTeEhRVUZPTEVOQlFWVXNTVUZCVml4RlFVRm5RaXhaUVVGTk8wRkJRMnhDTzBGQlEwRXNkVUpCUVVzc1lVRkJUQ3hEUVVGdFFpeEpRVUZ1UWp0QlFVTkJMSFZDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRXRCUVdoQ0xFTkJRWE5DTEZWQlFYUkNPMEZCUTBnc1lVRktSRHRCUVV0QkxHdENRVUZOTEV0QlFVNDdRVUZEU0RzN08yMURRVVZUTzBGQlEwNHNaMEpCUVVrc1UwRkJVeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRkZCUVdoQ0xFTkJRWGxDTEUxQlFYcENMRU5CUVdkRExFOUJRVThzVVVGQlVDeERRVUZuUWl4SFFVRm9SQ3hEUVVGaU8wRkJRMEVzWjBKQlFVY3NUVUZCU0N4RlFVRlZPMEZCUTA0c2NVSkJRVXNzVFVGQlRDeERRVUZaTEVsQlFWbzdRVUZEUVN4eFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4TFFVRm9RaXhEUVVGelFpeE5RVUYwUWp0QlFVVklPMEZCUTBvN096czdSVUYyVldsRExFOUJRVThzU3pzN2EwSkJRWGhDTEZFN096czdPenM3T3pzN096czdPenM3TzBsRFNrRXNUenM3T3pzN096czdPenM3YTBOQlJWQTdPMEZCUlU0c2FVSkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGVUxFTkJRV2RDTEV0QlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVDBGQmFFTXNSVUZCZVVNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRjZSQ3hGUVVGclJTeFZRVUZzUlN4RFFVRm9RanRCUVVOQkxHbENRVUZMTEZOQlFVd3NSMEZCYVVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVFVGQlZDeERRVUZuUWl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEU5QlFXaERMRVZCUVhsRExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1QwRkJla1FzUlVGQmEwVXNWMEZCYkVVc1EwRkJha0k3UVVGRFFTeHBRa0ZCU3l4UlFVRk1MRU5CUVdNc1RVRkJaQ3hEUVVGeFFpeExRVUZ5UWl4RFFVRXlRaXhIUVVFelFqdEJRVU5CTEdsQ1FVRkxMRk5CUVV3c1EwRkJaU3hOUVVGbUxFTkJRWE5DTEV0QlFYUkNMRU5CUVRSQ0xFZEJRVFZDT3p0QlFVVkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeG5Ra0ZCVml4RFFVRXlRaXhMUVVGTExGTkJRV2hETzBGQlEwRTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzWTBGQlZpeERRVUY1UWl4alFVRjZRaXhGUVVGNVF5eHJRMEZCZWtNc1JVRkJOa1VzYjBOQlFUZEZPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEdOQlFWWXNRMEZCZVVJc1QwRkJla0lzUlVGQmEwTXNNa0pCUVd4RExFVkJRU3RFTERaQ1FVRXZSRHRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4alFVRldMRU5CUVhsQ0xGRkJRWHBDTEVWQlFXMURMRFJDUVVGdVF5eEZRVUZwUlN3NFFrRkJha1U3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFRRVUZvUWl4RlFVRXlRaXhwUWtGQk0wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UlFVRm9RaXhGUVVFd1FpeG5Ra0ZCTVVJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhWUVVGb1FpeEZRVUUwUWl4clFrRkJOVUk3UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFhRVUZvUWl4RlFVRTJRaXh0UWtGQk4wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4UFFVRm9RaXhGUVVGNVFpeG5Ra0ZCZWtJN08wRkJSVUVzYVVKQlFVc3NTVUZCVEN4RFFVRlZMRXRCUVZZc1EwRkJaMElzVjBGQmFFSXNSVUZCTmtJc1EwRkJReXh6UWtGQlJDeERRVUUzUWp0QlFVTkJMR2xDUVVGTExFbEJRVXdzUTBGQlZTeExRVUZXTEVOQlFXZENMRmRCUVdoQ0xFVkJRVFpDTEVOQlFVTXNjMEpCUVVRc1EwRkJOMEk3TzBGQlJVRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNWVUZCYUVJc1JVRkJORUlzUTBGQlF5d3lRa0ZCUkN4RFFVRTFRanRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGTkJRV2hDTEVWQlFUSkNMRU5CUVVNc01FSkJRVVFzUTBGQk0wSTdRVUZEUVN4cFFrRkJTeXhKUVVGTUxFTkJRVlVzUzBGQlZpeERRVUZuUWl4VlFVRm9RaXhGUVVFMFFpeERRVUZETERSQ1FVRkVMRU5CUVRWQ096dEJRVVZCTEdsQ1FVRkxMRWxCUVV3c1EwRkJWU3hMUVVGV0xFTkJRV2RDTEZkQlFXaENMRVZCUVRaQ0xFTkJRVU1zTkVKQlFVUXNRMEZCTjBJN1FVRkRRU3hwUWtGQlN5eEpRVUZNTEVOQlFWVXNTMEZCVml4RFFVRm5RaXhYUVVGb1FpeEZRVUUyUWl4RFFVRkRMRFJDUVVGRUxFTkJRVGRDTzBGQlEwRXNhVUpCUVVzc1NVRkJUQ3hEUVVGVkxFdEJRVllzUTBGQlowSXNaMEpCUVdoQ0xFVkJRV3RETEVOQlFVTXNhVU5CUVVRc1EwRkJiRU03UVVGRFFTeHBRa0ZCU3l4SlFVRk1MRU5CUVZVc1MwRkJWaXhEUVVGblFpeFpRVUZvUWl4RlFVRTRRaXhEUVVGRExEWkNRVUZFTEVOQlFUbENPMEZCUTBFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc2FVSkJRV2hDTEVWQlFXMURMRU5CUVVNc2EwTkJRVVFzUTBGQmJrTTdPMEZCUlVFc2FVSkJRVXNzU1VGQlRDeERRVUZWTEV0QlFWWXNRMEZCWjBJc1ZVRkJhRUlzUlVGQk5FSXNRMEZCUXl3eVFrRkJSQ3hEUVVFMVFqdEJRVU5CT3pzN1FVRkhRVHRCUVVOQkxHbENRVUZMTEVsQlFVd3NRMEZCVlN4TFFVRldMRU5CUVdkQ0xGRkJRV2hDTEVWQlFUQkNMR2RDUVVFeFFqdEJRVVZJT3pzN2FVTkJSVkU3UVVGRFRDeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVGcFFpeE5RVUZxUWp0QlFVTklPenM3TzBWQk5VTm5ReXhQUVVGUExFczdPMnRDUVVGMlFpeFBJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z1pTaDBMRzRzY2lsN1puVnVZM1JwYjI0Z2N5aHZMSFVwZTJsbUtDRnVXMjlkS1h0cFppZ2hkRnR2WFNsN2RtRnlJR0U5ZEhsd1pXOW1JSEpsY1hWcGNtVTlQVndpWm5WdVkzUnBiMjVjSWlZbWNtVnhkV2x5WlR0cFppZ2hkU1ltWVNseVpYUjFjbTRnWVNodkxDRXdLVHRwWmlocEtYSmxkSFZ5YmlCcEtHOHNJVEFwTzNaaGNpQm1QVzVsZHlCRmNuSnZjaWhjSWtOaGJtNXZkQ0JtYVc1a0lHMXZaSFZzWlNBblhDSXJieXRjSWlkY0lpazdkR2h5YjNjZ1ppNWpiMlJsUFZ3aVRVOUVWVXhGWDA1UFZGOUdUMVZPUkZ3aUxHWjlkbUZ5SUd3OWJsdHZYVDE3Wlhod2IzSjBjenA3ZlgwN2RGdHZYVnN3WFM1allXeHNLR3d1Wlhod2IzSjBjeXhtZFc1amRHbHZiaWhsS1h0MllYSWdiajEwVzI5ZFd6RmRXMlZkTzNKbGRIVnliaUJ6S0c0L2JqcGxLWDBzYkN4c0xtVjRjRzl5ZEhNc1pTeDBMRzRzY2lsOWNtVjBkWEp1SUc1YmIxMHVaWGh3YjNKMGMzMTJZWElnYVQxMGVYQmxiMllnY21WeGRXbHlaVDA5WENKbWRXNWpkR2x2Ymx3aUppWnlaWEYxYVhKbE8yWnZjaWgyWVhJZ2J6MHdPMjg4Y2k1c1pXNW5kR2c3YnlzcktYTW9jbHR2WFNrN2NtVjBkWEp1SUhOOUtTSXNJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZSbGVIUkNkWFIwYjI0Z1pYaDBaVzVrY3lCUWFHRnpaWEl1UW5WMGRHOXVJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hzZ1oyRnRaU3dnZUN3Z2VTd2dZWE56WlhRc0lHTmhiR3hpWVdOckxDQmpZV3hzWW1GamEwTnZiblJsZUhRc0lHOTJaWEpHY21GdFpTd2diM1YwUm5KaGJXVXNJR1J2ZDI1R2NtRnRaU3dnZFhCR2NtRnRaU3dnYkdGaVpXd3NJSE4wZVd4bElIMHBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9aMkZ0WlN3Z2VDd2dlU3dnWVhOelpYUXNJR05oYkd4aVlXTnJMQ0JqWVd4c1ltRmphME52Ym5SbGVIUXNJRzkyWlhKR2NtRnRaU3dnYjNWMFJuSmhiV1VzSUdSdmQyNUdjbUZ0WlN3Z2RYQkdjbUZ0WlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG14aFltVnNJRDBnYkdGaVpXdzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUjViR1VnUFNCemRIbHNaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBaWGgwSUQwZ2JtVjNJRkJvWVhObGNpNVVaWGgwS0hSb2FYTXVaMkZ0WlN3Z01Dd2dNQ3dnZEdocGN5NXNZV0psYkN3Z2RHaHBjeTV6ZEhsc1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRHVjRkQzVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUZrWkVOb2FXeGtLSFJvYVhNdWRHVjRkQ2s3WEc1Y2JpQWdJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdLaUJoY3lCemRHRjBaWE1nWm5KdmJTQW5MaTl6ZEdGMFpYTW5PMXh1WTI5dWMzUWdSMEZOUlNBOUlHNWxkeUJRYUdGelpYSXVSMkZ0WlNnNE1EQXNJREV3TURBc0lGQm9ZWE5sY2k1QlZWUlBLVHRjYmx4dVQySnFaV04wTG10bGVYTW9jM1JoZEdWektTNW1iM0pGWVdOb0tITjBZWFJsSUQwK0lFZEJUVVV1YzNSaGRHVXVZV1JrS0hOMFlYUmxMQ0J6ZEdGMFpYTmJjM1JoZEdWZEtTazdYRzVjYmtkQlRVVXVjM1JoZEdVdWMzUmhjblFvSjBKdmIzUW5LVHRjYmlJc0ltVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRUoxYkd4bGRDQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGNISnBkR1VnZTF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2V5Qm5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dhR1ZoYkhSb0xDQjBhVzUwSUQwZ01IaG1aakF3TURBZ2ZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaG5ZVzFsTENCNExDQjVMQ0JoYzNObGRDazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elkyRnNaUzV6WlhSVWJ5Z3dMamdwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFDQTlJR2hsWVd4MGFEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGFXNTBJRDBnZEdsdWREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amFHVmphMWR2Y214a1FtOTFibVJ6SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkWFJQWmtKdmRXNWtjMHRwYkd3Z1BTQjBjblZsTzF4dUlDQWdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQkNkV3hzWlhRZ1puSnZiU0FuTGk5aWRXeHNaWFFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJGYm1WdGVTQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGNISnBkR1VnZTF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2V5Qm5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dabkpoYldVc0lHaGxZV3gwYUN3Z1luVnNiR1YwVTNCbFpXUWdmU2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWhuWVcxbExDQjRMQ0I1TENCaGMzTmxkQ3dnWm5KaGJXVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlNBOUlHZGhiV1U3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpZMkZzWlM1elpYUlVieWd3TGpncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1obFlXeDBhQ0E5SUdobFlXeDBhRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRZWGhJWldGc2RHZ2dQU0JvWldGc2RHZzdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbUZ5WTJGa1pTNWxibUZpYkdVb2RHaHBjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoYm1sdFlYUnBiMjV6TG1Ga1pDZ25jM0JwYm01cGJtY25MQ0JiTUN3Z01Td2dNaXdnTXl3Z05Dd2dOU3dnTml3Z055d2dPQ3dnT1N3Z01UQXNJREV4TENBeE1pd2dNVE1zSURFMFhTd2dNekFzSUhSeWRXVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnNZWGtvSjNOd2FXNXVhVzVuSnlrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJ6SUQwZ2RHaHBjeTVuWVcxbExtRmtaQzVuY205MWNDZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEhNdVpXNWhZbXhsUW05a2VTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBVM0JsWldRZ1BTQmlkV3hzWlhSVGNHVmxaRHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk5vYjNSVGIzVnVaQ0E5SUhSb2FYTXVaMkZ0WlM1aFpHUXVjMjkxYm1Rb0oyVnVaVzE1VTJodmRDY3BPMXh1WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkWEJrWVhSbEtDa2dlMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5CdmMybDBhVzl1TG5nZ1BDQXdMakEwSUNvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG5kcFpIUm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5CdmMybDBhVzl1TG5nZ1BTQXdMakEwSUNvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG5kcFpIUm9JQ3NnTWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzUyWld4dlkybDBlUzU0SUNvOUlDMHhPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdhV1lnS0hSb2FYTXVjRzl6YVhScGIyNHVlQ0ErSURBdU9UWWdLaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVkMmxrZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjRzl6YVhScGIyNHVlQ0E5SURBdU9UWWdLaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVkMmxrZEdnZ0xTQXlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxuWmxiRzlqYVhSNUxuZ2dLajBnTFRFN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV3YjNOcGRHbHZiaTU1SUMwZ2RHaHBjeTVvWldsbmFIUWdMeUF5SUQ0Z2RHaHBjeTVuWVcxbExuZHZjbXhrTG1obGFXZG9kQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1cmFXeHNLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6YUc5dmRDZ3BJSHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk5vYjNSVGIzVnVaQzV3YkdGNUtGd2lYQ0lzTUN3d0xqVXBPMXh1WEc0Z0lDQWdJQ0FnSUd4bGRDQmlkV3hzWlhRZ1BTQjBhR2x6TG1KMWJHeGxkSE11WjJWMFJtbHljM1JGZUdsemRITW9abUZzYzJVcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaFluVnNiR1YwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpZFd4c1pYUWdQU0J1WlhjZ1FuVnNiR1YwS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTU0TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WW05MGRHOXRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hsWVd4MGFEb2dNaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGREb2dKMkoxYkd4bGRDY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2x1ZERvZ01IaG1aakF3TURCY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJ6TG1Ga1pDaGlkV3hzWlhRcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5Wc2JHVjBMbkpsYzJWMEtIUm9hWE11ZUN3Z2RHaHBjeTVpYjNSMGIyMHNJRElwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdZblZzYkdWMExtSnZaSGt1ZG1Wc2IyTnBkSGt1ZVNBOUlIUm9hWE11WW5Wc2JHVjBVM0JsWldRN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWkdGdFlXZGxLR0Z0YjNWdWRDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNWtZVzFoWjJVb1lXMXZkVzUwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhObGRDaDdJSGdzSUhrc0lHaGxZV3gwYUN3Z1luVnNiR1YwVTNCbFpXUXNJSE53WldWa0lIMHBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjbVZ6WlhRb2VDd2dlU3dnYUdWaGJIUm9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSVGNHVmxaQ0E5SUdKMWJHeGxkRk53WldWa08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KdlpIa3VkbVZzYjJOcGRIa3VlQ0E5SUhOd1pXVmtMbmc3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1MlpXeHZZMmwwZVM1NUlEMGdjM0JsWldRdWVUdGNiaUFnSUNCOVhHNTlYRzRpTENKcGJYQnZjblFnUW5Wc2JHVjBJR1p5YjIwZ0p5NHZZblZzYkdWMEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1JXNWxiWGtnWlhoMFpXNWtjeUJRYUdGelpYSXVVM0J5YVhSbElIdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLSHNnWjJGdFpTd2dlQ3dnZVN3Z1lYTnpaWFFzSUdaeVlXMWxMQ0JvWldGc2RHZ3NJR0oxYkd4bGRGTndaV1ZrTEhOcGVtVWdmU2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWhuWVcxbExDQjRMQ0I1TENCaGMzTmxkQ3dnWm5KaGJXVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlNBOUlHZGhiV1U3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoYm1Ob2IzSXVjMlYwVkc4b01DNDFLVHRjYmx4dUlDQWdJQ0FnSUNBdkwzTnBlbVVnUFNCelkyRnNaVnh1SUNBZ0lDQWdJQ0IwYUdsekxuTnBlbVVnUFNCemFYcGxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpZV3hsTG5ObGRGUnZLSE5wZW1VcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1obFlXeDBhQ0E5SUdobFlXeDBhRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRZWGhJWldGc2RHZ2dQU0JvWldGc2RHZzdYRzVjYmx4dUlDQWdJQ0FnSUNBdkwwZHlZWFpwZEhsY2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuQm9lWE5wWTNNdVlYSmpZV1JsTG1WdVlXSnNaU2gwYUdsektUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWIyUjVMbU52Ykd4cFpHVlhiM0pzWkVKdmRXNWtjeUE5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzVuY21GMmFYUjVMbmtnUFNBMU1EQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzVpYjNWdVkyVXVjMlYwS0RFcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXNXBiV0YwYVc5dWN5NWhaR1FvSjNOd2FXNXVhVzVuSnl3Z1d6QXNJREVzSURJc0lETXNJRFFzSURVc0lEWXNJRGNzSURnc0lEa3NJREV3TENBeE1Td2dNVElzSURFekxDQXhORjBzSURNd0xDQjBjblZsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNUtDZHpjR2x1Ym1sdVp5Y3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMGN5QTlJSFJvYVhNdVoyRnRaUzVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFd4c1pYUnpMbVZ1WVdKc1pVSnZaSGtnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFiR3hsZEZOd1pXVmtJRDBnWW5Wc2JHVjBVM0JsWldRN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emFHOTBVMjkxYm1RZ1BTQjBhR2x6TG1kaGJXVXVZV1JrTG5OdmRXNWtLQ2RsYm1WdGVWTm9iM1FuS1R0Y2JseHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaU2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXdiM05wZEdsdmJpNTRJRHdnTUM0d05DQXFJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNTNhV1IwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdiM05wZEdsdmJpNTRJRDBnTUM0d05DQXFJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNTNhV1IwYUNBcklESTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbUp2WkhrdWRtVnNiMk5wZEhrdWVDQXFQU0F0TVR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sSUdsbUlDaDBhR2x6TG5CdmMybDBhVzl1TG5nZ1BpQXdMamsySUNvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG5kcFpIUm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5CdmMybDBhVzl1TG5nZ1BTQXdMamsySUNvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG5kcFpIUm9JQzBnTWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzUyWld4dlkybDBlUzU0SUNvOUlDMHhPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNHOXphWFJwYjI0dWVTQXRJSFJvYVhNdWFHVnBaMmgwSUM4Z01pQStJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNW9aV2xuYUhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhMmxzYkNncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzVjYmx4dUlDQWdJR1JoYldGblpTaGhiVzkxYm5RcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdVpHRnRZV2RsS0dGdGIzVnVkQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6WlhRb2V5QjRMQ0I1TENCb1pXRnNkR2dzSUdKMWJHeGxkRk53WldWa0xDQnpjR1ZsWkNCOUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuSmxjMlYwS0hnc0lIa3NJR2hsWVd4MGFDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwVTNCbFpXUWdQU0JpZFd4c1pYUlRjR1ZsWkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxuWmxiRzlqYVhSNUxuZ2dQU0J6Y0dWbFpDNTRPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1ZG1Wc2IyTnBkSGt1ZVNBOUlITndaV1ZrTG5rN1hHNGdJQ0FnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJRkJzWVhsbGNpQm1jbTl0SUNjdUxpOXdjbVZtWVdKekwzQnNZWGxsY2ljN1hHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJJZFdRZ1pYaDBaVzVrY3lCUWFHRnpaWEl1UjNKdmRYQWdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSHNnWjJGdFpTd2djR3hoZVdWeUlIMHBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9aMkZ0WlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTQTlJR2RoYldVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlJRDBnY0d4aGVXVnlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSm5JRDBnYm1WM0lGQm9ZWE5sY2k1SmJXRm5aU2gwYUdsekxtZGhiV1VzSURBc0lEQXNJQ2RvZFdSQ1p5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuZHBaSFJvSUQwZ09EQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGxZV3gwYUdKaGNpQTlJRzVsZHlCUWFHRnpaWEl1VTNCeWFYUmxLSFJvYVhNdVoyRnRaU3dnTWl3Z01pd2dKMmhsWVd4MGFHSmhjaWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFHSmhjaTV6WTJGc1pTNXpaWFJVYnlnd0xqazVOU3dnTVRFcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnZjbVVnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OamIzSmxUR0ZpWld3Z1BTQW5VMk52Y21VNklDYzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnZjbVZVWlhoMElEMGdibVYzSUZCb1lYTmxjaTVVWlhoMEtIUm9hWE11WjJGdFpTd2dNakFzSURFMExDQjBhR2x6TG5OamIzSmxUR0ZpWld3Z0t5QjBhR2x6TG5OamIzSmxMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1UTndlQ0JXWlhKa1lXNWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiR2xuYmpvZ0oyTmxiblJsY2lkY2JseHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUZrWkNoMGFHbHpMbUpuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWkdRb2RHaHBjeTVvWldGc2RHaGlZWElwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZrWkNoMGFHbHpMbk5qYjNKbFZHVjRkQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkWEJrWVhSbFNHVmhiSFJvS0hCc1lYbGxjaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVd4MGFHSmhjaTVqY205d0tHNWxkeUJRYUdGelpYSXVVbVZqZEdGdVoyeGxLREFzSURBc0lDaDBhR2x6TG5Cc1lYbGxjaTVvWldGc2RHZ2dMeUIwYUdsekxuQnNZWGxsY2k1dFlYaElaV0ZzZEdncElDb2dkR2hwY3k1M2FXUjBhQ3dnTVRBcEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1pXRnNkR2hpWVhJdWRYQmtZWFJsUTNKdmNDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlZOamIzSmxLR0Z0YjNWdWRDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpiM0psSUNzOUlHRnRiM1Z1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WTI5eVpWUmxlSFF1ZEdWNGRDQTlJSFJvYVhNdWMyTnZjbVZNWVdKbGJDQXJJQ2gwYUdsekxuTmpiM0psSUNvZ01UQXBPMXh1SUNBZ0lIMWNibHh1ZlR0Y2JpSXNJbWx0Y0c5eWRDQkNkV3hzWlhRZ1puSnZiU0FuTGk5aWRXeHNaWFFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYkdGNVpYSWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVUzQnlhWFJsSUh0Y2JseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIc2daMkZ0WlN3Z2VDd2dlU3dnWVhOelpYUXNJR1p5WVcxbExDQm9aV0ZzZEdnZ2ZTa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaG5ZVzFsTENCNExDQjVMQ0JoYzNObGRDd2dabkpoYldVcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaU0E5SUdkaGJXVTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWhibU5vYjNJdWMyVjBWRzhvTUM0MUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elkyRnNaUzV6WlhSVWJ5Z3dMamdwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YUdWaGJIUm9JRDBnYUdWaGJIUm9PMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWhlRWhsWVd4MGFDQTlJR2hsWVd4MGFEdGNibHh1WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuQm9lWE5wWTNNdVlYSmpZV1JsTG1WdVlXSnNaU2gwYUdsektUdGNiaUFnSUNBZ0lDQWdMeTluY21GMmFYUjVYRzRnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzVuY21GMmFYUjVMbmtnUFNBeE1EQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzVqYjJ4c2FXUmxWMjl5YkdSQ2IzVnVaSE1nUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0F2TDF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBjeUE5SUhSb2FYTXVaMkZ0WlM1aFpHUXVaM0p2ZFhBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJ6TG1WdVlXSnNaVUp2WkhrZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUoxYkd4bGRGTndaV1ZrSUQwZ0xUVXdNRHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk5vYjNSVGIzVnVaQ0E5SUhSb2FYTXVaMkZ0WlM1aFpHUXVjMjkxYm1Rb0ozQnNZWGxsY2xOb2IzUW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjFjR1JoZEdVb0tTQjdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z2RHaHBjeTVuWVcxbExtUmxZblZuTG1KdlpIa29kR2hwY3lrN1hHNWNibHh1WEc0Z0lDQWdJQ0FnSUM4dklHbG1JQ2gwYUdsekxtZGhiV1V1YVc1d2RYUXVZV04wYVhabFVHOXBiblJsY2k1cGMwUnZkMjRwSUh0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHeGxablJMWlhrZ1BTQjBhR2x6TG1kaGJXVXVhVzV3ZFhRdWEyVjVZbTloY21RdWFYTkViM2R1S0ZCb1lYTmxjaTVMWlhsaWIyRnlaQzVNUlVaVUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnlhV2RvZEV0bGVTQTlJSFJvYVhNdVoyRnRaUzVwYm5CMWRDNXJaWGxpYjJGeVpDNXBjMFJ2ZDI0b1VHaGhjMlZ5TGt0bGVXSnZZWEprTGxKSlIwaFVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LR3hsWm5STFpYa3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWVDQXRQU0EyTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiSE5sSUdsbUtISnBaMmgwUzJWNUtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5nZ0t6MGdOanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMmh2YjNRb0tTQjdYRzVjYmlBZ0lDQWdJQ0FnYkdWMElHSjFiR3hsZENBOUlIUm9hWE11WW5Wc2JHVjBjeTVuWlhSR2FYSnpkRVY0YVhOMGN5aG1ZV3h6WlNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGaWRXeHNaWFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRDQTlJRzVsZHlCQ2RXeHNaWFFvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbmdzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTUwYjNBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OHpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR1ZoYkhSb09pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZblZzYkdWMEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhVzUwT2lBd2VEQTBZekV4TWx4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJqYUdGdVoyVWdkR2hwY3lCdWRXMWlaWElnZEc4Z2MyaHZiM1FnYkdWemN5QmlkV3hzWlhSeklHRjBJR0VnZEdsdFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVpZFd4c1pYUnpMbU5vYVd4a2NtVnVMbXhsYm1kMGFDQThQU0ExS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5vYjNSVGIzVnVaQzV3YkdGNUtGd2lYQ0lzTUN3d0xqVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVluVnNiR1YwY3k1aFpHUW9ZblZzYkdWMEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRDNWliMlI1TG5abGJHOWphWFI1TG5rZ1BTQjBhR2x6TG1KMWJHeGxkRk53WldWa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emFHOTBVMjkxYm1RdWNHeGhlU2hjSWx3aUxEQXNNQzQxS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0oxYkd4bGRDNXlaWE5sZENoMGFHbHpMbmdzSUhSb2FYTXVkRzl3TENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKMWJHeGxkQzVpYjJSNUxuWmxiRzlqYVhSNUxua2dQU0IwYUdsekxtSjFiR3hsZEZOd1pXVmtPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JseHVJQ0FnSUgxY2JseHVJQ0FnSUdSaGJXRm5aU2hoYlc5MWJuUXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVaR0Z0WVdkbEtHRnRiM1Z1ZENrN1hHNGdJQ0FnZlZ4dVhHNTlYRzRpTENKbGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkNiMjkwSUdWNGRHVnVaSE1nVUdoaGMyVnlMbE4wWVhSbElIdGNibHh1SUNBZ0lIQnlaV3h2WVdRb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV6ZEdGblpTNWlZV05yWjNKdmRXNWtRMjlzYjNJZ1BTQW5JekF3TUNjN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnbmJHOWhaR1Z5UW1jbkxDQW5hVzFuTDJ4dllXUmxjaTFpWnk1d2JtY25LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1sdFlXZGxLQ2RzYjJGa1pYSkNZWEluTENBbmFXMW5MMnh2WVdSbGNpMWlZWEl1Y0c1bkp5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kzSmxZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OallXeGxMbk5qWVd4bFRXOWtaU0E5SUZCb1lYTmxjaTVUWTJGc1pVMWhibUZuWlhJdVUwaFBWMTlCVEV3N1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1elkyRnNaUzV3WVdkbFFXeHBaMjVJYjNKcGVtOXVkR0ZzYkhrZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qWVd4bExuQmhaMlZCYkdsbmJsWmxjblJwWTJGc2JIa2dQU0IwY25WbE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbk4wWVhKMFUzbHpkR1Z0S0ZCb1lYTmxjaTVRYUhsemFXTnpMa0ZTUTBGRVJTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1V1YzNSaGNuUW9KMUJ5Wld4dllXUW5LVHRjYmlBZ0lDQjlYRzVjYm4xY2JpSXNJbVY0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJDYjI5MGZTQm1jbTl0SUNjdUwySnZiM1FuTzF4dVpYaHdiM0owSUh0a1pXWmhkV3gwSUdGeklGQnlaV3h2WVdSOUlHWnliMjBnSnk0dmNISmxiRzloWkNjN1hHNWxlSEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdUV1Z1ZFgwZ1puSnZiU0FuTGk5dFpXNTFKenRjYmk4dloyRnRaVEZjYm1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCUWJHRjVmU0JtY205dElDY3VMM0JzWVhrbk8xeHVaWGh3YjNKMElIdGtaV1poZFd4MElHRnpJRTkyWlhKOUlHWnliMjBnSnk0dmIzWmxjaWM3WEc1Y2JpOHZjR0Z1WjBKMGJseHVaWGh3YjNKMElIdGtaV1poZFd4MElHRnpJRkJzWVhsUVlXNW5mU0JtY205dElDY3VMM0JzWVhsUVlXNW5KenRjYm1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCUVlXNW5UM1psY24wZ1puSnZiU0FuTGk5d1lXNW5UM1psY2ljN1hHNWNiaTh2WjJGdFpUTmNibVY0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJRYkdGNVVHRnBjbk45SUdaeWIyMGdKeTR2Y0d4aGVWQmhhWEp6Snp0Y2JtVjRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QlFZV2x5YzA5MlpYSjlJR1p5YjIwZ0p5NHZjR0ZwY25OUGRtVnlKenRjYmlJc0ltbHRjRzl5ZENCVVpYaDBRblYwZEc5dUlHWnliMjBnSnk0dUwyVjRkR1Z1YzJsdmJuTXZkR1Y0ZEdKMWRIUnZiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRTFsYm5VZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNSaGRHVWdlMXh1WEc0Z0lDQWdZM0psWVhSbEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUnBkR3hsSUQwZ2JtVjNJRkJvWVhObGNpNVVaWGgwS0hSb2FYTXVaMkZ0WlN3Z2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGdzSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSlpMVEl3TUN3Z0owTm9iMjl6WlNCaElHZGhiV1VoSnl3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05dWREb2dKek0yY0hnZ1ZHRm9iMjFoSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1pwYkd3NklDZDNhR2wwWlNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYkdsbmJqb2dKMk5sYm5SbGNpZGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkR2wwYkdVdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNGdJQ0FnSUNBZ0lDOHZJSFJvYVhNdWJYVnphV01nUFNCMGFHbHpMbWRoYldVdVlXUmtMbUYxWkdsdktDZHRaVzUxVFhWemFXTW5LVHRjYmx4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YkdWbWRFSjBiaUE5SUc1bGR5QlVaWGgwUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllJQzBnTWpBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1ObGJuUmxjbGtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oySjFkSFJ2Ymljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZG1WeVJuSmhiV1U2SURJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZFhSR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1J2ZDI1R2NtRnRaVG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFZ3Um5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnNZV0psYkRvZ0oweGxablJDZEc0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5NVFp3ZUNCV1pYSmtZVzVoSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUFuZDJocGRHVW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZzYVdkdU9pQW5ZMlZ1ZEdWeUoxeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBiazkyWlhKVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R0Wlc1MVQzWmxjaWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYms5MWRGTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjIxbGJuVlBkWFFuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1RWIzZHVVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVVJ2ZDI0bktUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteGxablJDZEc0dWMyVjBUM1psY2xOdmRXNWtLSFJvYVhNdVluUnVUM1psY2xOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNaV1owUW5SdUxuTmxkRTkxZEZOdmRXNWtLSFJvYVhNdVluUnVUM1YwVTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteGxablJDZEc0dWMyVjBSRzkzYmxOdmRXNWtLSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbXhsWm5SQ2RHNHViMjVKYm5CMWRGVndMbUZrWkNnb0tUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OTBhR2x6TG0xMWMybGpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjFCc1lYbFFZV2x5Y3ljcE8xeHVYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNWNibHh1SUNBZ0lDQWdJQ0F2THlCVFpXTnZibVFnUW5SdVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUWdQU0J1WlhjZ1ZHVjRkRUoxZEhSdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpaTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlhRNklDZGlkWFIwYjI0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNabGNrWnlZVzFsT2lBeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMFJuSmhiV1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjNkdVJuSmhiV1U2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IxY0VaeVlXMWxPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR0ZpWld3NklDZFRkR0Z5ZENjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pUb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RNklDY3hObkI0SUZabGNtUmhibUVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2QzYUdsMFpTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV3hwWjI0NklDZGpaVzUwWlhJblhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVUM1psY2xOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WUGRtVnlKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblJ1VDNWMFUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVOTFkQ2NwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYmtSdmQyNVRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFSRzkzYmljcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YzJWMFQzWmxjbE52ZFc1a0tIUm9hWE11WW5SdVQzWmxjbE52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQzV6WlhSUGRYUlRiM1Z1WkNoMGFHbHpMbUowYms5MWRGTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDNXpaWFJFYjNkdVUyOTFibVFvZEdocGN5NWlkRzVFYjNkdVUyOTFibVFwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXViMjVKYm5CMWRGVndMbUZrWkNnb0tUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OTBhR2x6TG0xMWMybGpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjFCc1lYa25LVHRjYmx4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdMeThnZEdocGNtUWdRblJ1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR0Z1WjBKMGJpQTlJRzVsZHlCVVpYaDBRblYwZEc5dUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUlDc2dNakF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWRIUnZiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkbVZ5Um5KaGJXVTZJRElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkWFJHY21GdFpUb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnZkMjVHY21GdFpUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVndSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCc1lXSmxiRG9nSjFCaGJtY3RiR2xyWlNFbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5NVFp3ZUNCV1pYSmtZVzVoSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUFuZDJocGRHVW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZzYVdkdU9pQW5ZMlZ1ZEdWeUoxeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBiazkyWlhKVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2R0Wlc1MVQzWmxjaWNwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYms5MWRGTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjIxbGJuVlBkWFFuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1RWIzZHVVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVVJ2ZDI0bktUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuQmhibWRDZEc0dWMyVjBUM1psY2xOdmRXNWtLSFJvYVhNdVluUnVUM1psY2xOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdZVzVuUW5SdUxuTmxkRTkxZEZOdmRXNWtLSFJvYVhNdVluUnVUM1YwVTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQmhibWRDZEc0dWMyVjBSRzkzYmxOdmRXNWtLSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbkJoYm1kQ2RHNHViMjVKYm5CMWRGVndMbUZrWkNnb0tUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OTBhR2x6TG0xMWMybGpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjFCc1lYbFFZVzVuSnlrN1hHNWNibHh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxVUdGdVpXd2dQU0IwYUdsekxtRmtaQzVuY205MWNDZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblZRWVc1bGJDNWhaR1FvZEdocGN5NTBhWFJzWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRWQmhibVZzTG1Ga1pDaDBhR2x6TG14bFpuUkNkRzRwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFsYm5WUVlXNWxiQzVoWkdRb2RHaHBjeTV6ZEdGeWRDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkVkJoYm1Wc0xtRmtaQ2gwYUdsekxuQmhibWRDZEc0cE8xeHVYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NXRkWE5wWXk1c2IyOXdSblZzYkNncE8xeHVJQ0FnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0JVWlhoMFFuVjBkRzl1SUdaeWIyMGdKeTR1TDJWNGRHVnVjMmx2Ym5NdmRHVjRkR0oxZEhSdmJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFOTJaWElnWlhoMFpXNWtjeUJRYUdGelpYSXVVM1JoZEdVZ2UxeHVYRzRnSUNBZ1kzSmxZWFJsS0NrZ2UxeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVWFYUnNaU0E5SUc1bGR5QlFhR0Z6WlhJdVZHVjRkQ2gwYUdsekxtZGhiV1VzSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdTMHlNREFzSUNkSFlXMWxJRzkyWlhJbkxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTXpad2VDQlVZV2h2YldFbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm1sc2JEb2dKM2RvYVhSbEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdGc2FXZHVPaUFuWTJWdWRHVnlKMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbFJwZEd4bExtRnVZMmh2Y2k1elpYUlVieWd3TGpVcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblFnUFNCdVpYY2dWR1Y0ZEVKMWRIUnZiaWg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm5ZVzFsT2lCMGFHbHpMbWRoYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWkxUTXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaWRYUjBiMjRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1psY2taeVlXMWxPaUF5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1YwUm5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiM2R1Um5KaGJXVTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjFjRVp5WVcxbE9pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHRmlaV3c2SUNkVWNua2dZV2RoYVc0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1ME9pQW5NVFp3ZUNCV1pYSmtZVzVoSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUFuZDJocGRHVW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZzYVdkdU9pQW5ZMlZ1ZEdWeUoxeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiblVnUFNCdVpYY2dWR1Y0ZEVKMWRIUnZiaWg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm5ZVzFsT2lCMGFHbHpMbWRoYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWkt6TXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaWRYUjBiMjRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1psY2taeVlXMWxPaUF5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiM1YwUm5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiM2R1Um5KaGJXVTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjFjRVp5WVcxbE9pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHRmlaV3c2SUNkTlpXNTFKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkRG9nSnpFMmNIZ2dWbVZ5WkdGdVlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabWxzYkRvZ0ozZG9hWFJsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGJHbG5iam9nSjJObGJuUmxjaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmJXVnVkVTkyWlhJbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNVBkWFJUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxVDNWMEp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WRWIzZHVKeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDNXpaWFJQZG1WeVUyOTFibVFvZEdocGN5NWlkRzVQZG1WeVUyOTFibVFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMExuTmxkRTkxZEZOdmRXNWtLSFJvYVhNdVluUnVUM1YwVTI5MWJtUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWEowTG5ObGRFUnZkMjVUYjNWdVpDaDBhR2x6TG1KMGJrUnZkMjVUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkUzV6WlhSUGRtVnlVMjkxYm1Rb2RHaHBjeTVpZEc1UGRtVnlVMjkxYm1RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xbGJuVXVjMlYwVDNWMFUyOTFibVFvZEdocGN5NWlkRzVQZFhSVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFM1elpYUkViM2R1VTI5MWJtUW9kR2hwY3k1aWRHNUViM2R1VTI5MWJtUXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RdWIyNUpibkIxZEVSdmQyNHVZV1JrS0NncFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbExuTjBZWEowS0NkUWJHRjVKeWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkUzV2YmtsdWNIVjBSRzkzYmk1aFpHUW9LQ2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1V1YzNSaGNuUW9KMDFsYm5VbktUdGNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0lEMGdkR2hwY3k1aFpHUXVaM0p2ZFhBb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xCaGJtVnNMbUZrWkNoMGFHbHpMbWRoYldWUGRtVnlWR2wwYkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VUdGdVpXd3VZV1JrS0hSb2FYTXVjM1JoY25RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VUdGdVpXd3VZV1JrS0hSb2FYTXViV1Z1ZFNrN1hHNGdJQ0FnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJRlJsZUhSQ2RYUjBiMjRnWm5KdmJTQW5MaTR2WlhoMFpXNXphVzl1Y3k5MFpYaDBZblYwZEc5dUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHRnVaMDkyWlhJZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNSaGRHVWdlMXh1WEc0Z0lDQWdZM0psWVhSbEtDa2dlMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlVhWFJzWlNBOUlHNWxkeUJRYUdGelpYSXVWR1Y0ZENoMGFHbHpMbWRoYldVc0lIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZTENCMGFHbHpMbWRoYldVdWQyOXliR1F1WTJWdWRHVnlXUzB5TURBc0lDZFFZVzVuSUVkaGJXVWdiM1psY2ljc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdadmJuUTZJQ2N6Tm5CNElGUmhhRzl0WVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVd4cFoyNDZJQ2RqWlc1MFpYSW5YRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlWR2wwYkdVdVlXNWphRzl5TG5ObGRGUnZLREF1TlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQ0E5SUc1bGR5QlVaWGgwUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrdE16QXNYRzRnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWRIUnZiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkbVZ5Um5KaGJXVTZJRElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkWFJHY21GdFpUb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnZkMjVHY21GdFpUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVndSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCc1lXSmxiRG9nSjFSeWVTQmhaMkZwYmljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pUb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RNklDY3hObkI0SUZabGNtUmhibUVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ2QzYUdsMFpTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV3hwWjI0NklDZGpaVzUwWlhJblhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkU0E5SUc1bGR5QlVaWGgwUW5WMGRHOXVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGhiV1U2SUhSb2FYTXVaMkZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbmR2Y214a0xtTmxiblJsY2xrck16QXNYRzRnSUNBZ0lDQWdJQ0FnSUNCaGMzTmxkRG9nSjJKMWRIUnZiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkbVZ5Um5KaGJXVTZJRElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkWFJHY21GdFpUb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnZkMjVHY21GdFpUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVndSbkpoYldVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCc1lXSmxiRG9nSjAxbGJuVW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBPaUFuTVRad2VDQldaWEprWVc1aEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1hV3hzT2lBbmQyaHBkR1VuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGc2FXZHVPaUFuWTJWdWRHVnlKMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkdFpXNTFUM1psY2ljcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrOTFkRk52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyMWxiblZQZFhRbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRHNUViM2R1VTI5MWJtUWdQU0IwYUdsekxtRmtaQzV6YjNWdVpDZ25iV1Z1ZFVSdmQyNG5LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMExuTmxkRTkyWlhKVGIzVnVaQ2gwYUdsekxtSjBiazkyWlhKVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RdWMyVjBUM1YwVTI5MWJtUW9kR2hwY3k1aWRHNVBkWFJUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblF1YzJWMFJHOTNibE52ZFc1a0tIUm9hWE11WW5SdVJHOTNibE52ZFc1a0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFpXNTFMbk5sZEU5MlpYSlRiM1Z1WkNoMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXpaWFJQZFhSVGIzVnVaQ2gwYUdsekxtSjBiazkxZEZOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxTG5ObGRFUnZkMjVUYjNWdVpDaDBhR2x6TG1KMGJrUnZkMjVUYjNWdVpDazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEM1dmJrbHVjSFYwUkc5M2JpNWhaR1FvS0NrOVBudGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjFCc1lYbFFZVzVuSnlrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFM1dmJrbHVjSFYwUkc5M2JpNWhaR1FvS0NrOVBudGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjAxbGJuVW5LVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2xCaGJtVnNJRDBnZEdocGN5NWhaR1F1WjNKdmRYQW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzTG1Ga1pDaDBhR2x6TG1kaGJXVlBkbVZ5VkdsMGJHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1ZQZG1WeVVHRnVaV3d1WVdSa0tIUm9hWE11YzNSaGNuUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1ZQZG1WeVVHRnVaV3d1WVdSa0tIUm9hWE11YldWdWRTazdYRzRnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUZSbGVIUkNkWFIwYjI0Z1puSnZiU0FuTGk0dlpYaDBaVzV6YVc5dWN5OTBaWGgwWW5WMGRHOXVKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVR0Z1WjA5MlpYSWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVUzUmhkR1VnZTF4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpVYVhSc1pTQTlJRzVsZHlCUWFHRnpaWEl1VkdWNGRDaDBhR2x6TG1kaGJXVXNJSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V1MweU1EQXNJQ2RRWVc1bklFZGhiV1VnYjNabGNpY3NJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZiblE2SUNjek5uQjRJRlJoYUc5dFlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUFuZDJocGRHVW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lXeHBaMjQ2SUNkalpXNTBaWEluWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVlBkbVZ5VkdsMGJHVXVZVzVqYUc5eUxuTmxkRlJ2S0RBdU5TazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZENBOUlHNWxkeUJVWlhoMFFuVjBkRzl1S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsa3RNekFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oySjFkSFJ2Ymljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZG1WeVJuSmhiV1U2SURJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZFhSR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1J2ZDI1R2NtRnRaVG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFZ3Um5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnNZV0psYkRvZ0oxUnllU0JoWjJGcGJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmJuUTZJQ2N4Tm5CNElGWmxjbVJoYm1FbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnBiR3c2SUNkM2FHbDBaU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVd4cFoyNDZJQ2RqWlc1MFpYSW5YRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z1ZFNBOUlHNWxkeUJVWlhoMFFuVjBkRzl1S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11WjJGdFpTNTNiM0pzWkM1alpXNTBaWEpZTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsa3JNekFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oySjFkSFJ2Ymljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZG1WeVJuSmhiV1U2SURJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZFhSR2NtRnRaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1J2ZDI1R2NtRnRaVG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFZ3Um5KaGJXVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnNZV0psYkRvZ0owMWxiblVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwT2lBbk1UWndlQ0JXWlhKa1lXNWhKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQW5kMmhwZEdVbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNhV2R1T2lBblkyVnVkR1Z5SjF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMGJrOTJaWEpUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZHRaVzUxVDNabGNpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjBiazkxZEZOdmRXNWtJRDBnZEdocGN5NWhaR1F1YzI5MWJtUW9KMjFsYm5WUGRYUW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkRzVFYjNkdVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duYldWdWRVUnZkMjRuS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBMbk5sZEU5MlpYSlRiM1Z1WkNoMGFHbHpMbUowYms5MlpYSlRiM1Z1WkNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUXVjMlYwVDNWMFUyOTFibVFvZEdocGN5NWlkRzVQZFhSVGIzVnVaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25RdWMyVjBSRzkzYmxOdmRXNWtLSFJvYVhNdVluUnVSRzkzYmxOdmRXNWtLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRaVzUxTG5ObGRFOTJaWEpUYjNWdVpDaDBhR2x6TG1KMGJrOTJaWEpUYjNWdVpDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXVnVkUzV6WlhSUGRYUlRiM1Z1WkNoMGFHbHpMbUowYms5MWRGTnZkVzVrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Wlc1MUxuTmxkRVJ2ZDI1VGIzVnVaQ2gwYUdsekxtSjBia1J2ZDI1VGIzVnVaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDNXZia2x1Y0hWMFJHOTNiaTVoWkdRb0tDazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0oxQnNZWGxRWVc1bkp5azdYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdWRTNXZia2x1Y0hWMFJHOTNiaTVoWkdRb0tDazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVXVjM1JoY25Rb0owMWxiblVuS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsVDNabGNsQmhibVZzSUQwZ2RHaHBjeTVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjbEJoYm1Wc0xtRmtaQ2gwYUdsekxtZGhiV1ZQZG1WeVZHbDBiR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWMzUmhjblFwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldWUGRtVnlVR0Z1Wld3dVlXUmtLSFJvYVhNdWJXVnVkU2s3WEc0Z0lDQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElGQnNZWGxsY2lCbWNtOXRJQ2N1TGk5d2NtVm1ZV0p6TDNCc1lYbGxjaWM3WEc1cGJYQnZjblFnUlc1bGJYa2dabkp2YlNBbkxpNHZjSEpsWm1GaWN5OWxibVZ0ZVNjN1hHNXBiWEJ2Y25RZ1NGVkVJR1p5YjIwZ0p5NHVMM0J5WldaaFluTXZhSFZrSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUd4aGVTQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGRHRjBaU0I3WEc1Y2JpQWdJQ0JqY21WaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUM4dlptRnlZbUZqYXlBOUlHSmhZMnRuY205MWJtUmNiaUFnSUNBZ0lDQWdkR2hwY3k1bVlYSmlZV05ySUQwZ2RHaHBjeTVoWkdRdWRHbHNaVk53Y21sMFpTZ3dMQ0F3TENBNE1EQXNJREl6T0RBc0lDZG1ZWEppWVdOckp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzUwYVcxbExuTnNiM2ROYjNScGIyNGdQU0F3TzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjeUE5SUhSb2FYTXVZV1JrTG1keWIzVndLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYldsbGN5NWxibUZpYkdWQ2IyUjVJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuQnNZWGxsY2lBOUlHNWxkeUJRYkdGNVpYSW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ1oyRnRaVG9nZEdocGN5NW5ZVzFsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NW5ZVzFsTG5kdmNteGtMbU5sYm5SbGNsZ3NYRzRnSUNBZ0lDQWdJQ0FnSUNCNU9pQXdMamt5SUNvZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1obGFXZG9kQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHaGxZV3gwYURvZ01UQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkemJXRnNiR1pwWjJoMFpYSW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ1puSmhiV1U2SURGY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV6ZEdGblpTNWhaR1JEYUdsc1pDaDBhR2x6TG5Cc1lYbGxjaWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvZFdRZ1BTQnVaWGNnU0ZWRUtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnNZWGxsY2pvZ2RHaHBjeTV3YkdGNVpYSmNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExtbHVjSFYwTG05dVJHOTNiaTVoWkdRb0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMblJwYldVdWMyeHZkMDF2ZEdsdmJpQTlJREE3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzVwYm5CMWRDNXZibFZ3TG1Ga1pDZ29LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZEdsdFpTNXpiRzkzVFc5MGFXOXVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0ZVZScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVNXNTBaWEoyWVd3Z1BTQXhMalU3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsVGFHOXZkRlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1VTJodmIzUkpiblJsY25aaGJDQTlJREU3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeVUyaHZiM1JVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKVGFHOXZkRWx1ZEdWeWRtRnNJRDBnTUM0eE5qdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZEdsdFpTNWxkbVZ1ZEhNdWJHOXZjQ2hRYUdGelpYSXVWR2x0WlhJdVUwVkRUMDVFSUNvZ01UQXNJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIUm9hWE11Wlc1bGJYbEpiblJsY25aaGJDQStJREF1T1NBcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbEpiblJsY25aaGJDQXRQU0F3TGpFN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzWmxjbXhoZVVKcGRHMWhjQ0E5SUhSb2FYTXVZV1JrTG1KcGRHMWhjRVJoZEdFb2RHaHBjeTVuWVcxbExuZHBaSFJvTENCMGFHbHpMbWRoYldVdWFHVnBaMmgwS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVRbWwwYldGd0xtTjBlQzVtYVd4c1UzUjViR1VnUFNBbkl6QXdNQ2M3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVVSnBkRzFoY0M1amRIZ3VabWxzYkZKbFkzUW9NQ3dnTUN3Z2RHaHBjeTVuWVcxbExuZHBaSFJvTENCMGFHbHpMbWRoYldVdWFHVnBaMmgwS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG05MlpYSnNZWGtnUFNCMGFHbHpMbUZrWkM1emNISnBkR1VvTUN3Z01Dd2dkR2hwY3k1dmRtVnliR0Y1UW1sMGJXRndLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkbVZ5YkdGNUxuWnBjMmxpYkdVZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVMbUZzY0doaElEMGdNQzQzTlR0Y2JseHVJQ0FnSUNBZ0lDOHZJSFJvYVhNdWJYVnphV01nUFNCMGFHbHpMbWRoYldVdVlXUmtMbUYxWkdsdktDZHdiR0Y1VFhWemFXTW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV3hzWlhSSWFYUlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkaWRXeHNaWFJJYVhRbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVVY0Y0d4dmMybHZibE52ZFc1a0lEMGdkR2hwY3k1aFpHUXVjMjkxYm1Rb0oyVnVaVzE1Ulhod2JHOXphVzl1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlSWGh3Ykc5emFXOXVVMjkxYm1RZ1BTQjBhR2x6TG1Ga1pDNXpiM1Z1WkNnbmNHeGhlV1Z5Ulhod2JHOXphVzl1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpVOTJaWEpUYjNWdVpDQTlJSFJvYVhNdVlXUmtMbk52ZFc1a0tDZG5ZVzFsVDNabGNpY3BPMXh1WEc0Z0lDQWdJQ0FnSUM4dmRHaHBjeTV0ZFhOcFl5NXNiMjl3Um5Wc2JDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlNncElIdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1VkdsdFpTQXJQU0IwYUdsekxtZGhiV1V1ZEdsdFpTNXdhSGx6YVdOelJXeGhjSE5sWkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVWTm9iMjkwVkdsdFpTQXJQU0IwYUdsekxtZGhiV1V1ZEdsdFpTNXdhSGx6YVdOelJXeGhjSE5sWkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSlRhRzl2ZEZScGJXVWdLejBnZEdocGN5NW5ZVzFsTG5ScGJXVXVjR2g1YzJsamMwVnNZWEJ6WldRN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaVzVsYlhsVWFXMWxJRDRnZEdocGN5NWxibVZ0ZVVsdWRHVnlkbUZzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1VkdsdFpTQTlJREE3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkzSmxZWFJsUlc1bGJYa29lMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0RZc0lEYzJLU0FxSURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNCbFpXUTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1bllXMWxMbkp1WkM1cGJuUmxaMlZ5U1c1U1lXNW5aU2cxTENBeE1Da2dLaUF4TUNBcUlDaE5ZWFJvTG5KaGJtUnZiU2dwSUQ0Z01DNDFJRDhnTVNBNklDMHhLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbkp1WkM1cGJuUmxaMlZ5U1c1U1lXNW5aU2cxTENBeE1Da2dLaUF4TUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBNUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZEZOd1pXVmtPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0RFd0xDQXlNQ2tnS2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oyRnNhV1Z1SjF4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWxibVZ0ZVZOb2IyOTBWR2x0WlNBK0lIUm9hWE11Wlc1bGJYbFRhRzl2ZEVsdWRHVnlkbUZzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzE1VTJodmIzUlVhVzFsSUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVsYldsbGN5NW1iM0pGWVdOb1FXeHBkbVVvWlc1bGJYa2dQVDRnWlc1bGJYa3VjMmh2YjNRb0tTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdWNHeGhlV1Z5TG1Gc2FYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5kdmNteGtMbUp5YVc1blZHOVViM0FvZEdocGN5NXZkbVZ5YkdGNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkJzWVhsbGNsTm9iMjkwVkdsdFpTQStJSFJvYVhNdWNHeGhlV1Z5VTJodmIzUkpiblJsY25aaGJDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSlRhRzl2ZEZScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjR3hoZVdWeUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSXVjMmh2YjNRb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbUZ5WTJGa1pTNXZkbVZ5YkdGd0tIUm9hWE11Y0d4aGVXVnlMbUoxYkd4bGRITXNJSFJvYVhNdVpXNWxiV2xsY3l3Z2RHaHBjeTVvYVhSRmJtVnRlU3dnYm5Wc2JDd2dkR2hwY3lrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExtOTJaWEpzWVhBb2RHaHBjeTV3YkdGNVpYSXNJSFJvYVhNdVpXNWxiV2xsY3l3Z2RHaHBjeTVqY21GemFFVnVaVzE1TENCdWRXeHNMQ0IwYUdsektUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzFwWlhNdVptOXlSV0ZqYUNobGJtVnRlU0E5UGlCMGFHbHpMbWRoYldVdWNHaDVjMmxqY3k1aGNtTmhaR1V1YjNabGNteGhjQ2gwYUdsekxuQnNZWGxsY2l3Z1pXNWxiWGt1WW5Wc2JHVjBjeXdnZEdocGN5NW9hWFJRYkdGNVpYSXNJRzUxYkd3c0lIUm9hWE1wS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1aaGNtSmhZMnN1ZEdsc1pWQnZjMmwwYVc5dUxua2dLejBnTXp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqY21WaGRHVkZibVZ0ZVNoa1lYUmhLU0I3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1Z1WlcxNUlEMGdkR2hwY3k1bGJtVnRhV1Z6TG1kbGRFWnBjbk4wUlhocGMzUnpLR1poYkhObEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lXVnVaVzE1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYm1WdGVTQTlJRzVsZHlCRmJtVnRlU2hrWVhSaEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVsYldsbGN5NWhaR1FvWlc1bGJYa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWdVpXMTVMbkpsYzJWMEtHUmhkR0VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2hwZEVWbVptVmpkQ2h2WW1vc0lHTnZiRzl5S1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0IwZDJWbGJpQTlJSFJvYVhNdVoyRnRaUzVoWkdRdWRIZGxaVzRvYjJKcUtUdGNiaUFnSUNBZ0lDQWdiR1YwSUdWdGFYUjBaWElnUFNCMGFHbHpMbWRoYldVdVlXUmtMbVZ0YVhSMFpYSW9LVHRjYmlBZ0lDQWdJQ0FnYkdWMElHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUd4bGRDQndZWEowYVdOc1pWTndaV1ZrSUQwZ01UQXdPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JXRjRVR0Z5ZEdsamJHVnpJRDBnTVRBN1hHNWNiaUFnSUNBZ0lDQWdkSGRsWlc0dWRHOG9lM1JwYm5RNklEQjRabVl3TURBd2ZTd2dNVEF3S1R0Y2JpQWdJQ0FnSUNBZ2RIZGxaVzR1YjI1RGIyMXdiR1YwWlM1aFpHUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYjJKcUxuUnBiblFnUFNBd2VHWm1abVptWmp0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSFIzWldWdUxuTjBZWEowS0NrN1hHNWNiaUFnSUNBZ0lDQWdaVzFwZEhSbGNpNTRJRDBnYjJKcUxuZzdYRzRnSUNBZ0lDQWdJR1Z0YVhSMFpYSXVlU0E5SUc5aWFpNTVPMXh1SUNBZ0lDQWdJQ0JsYldsMGRHVnlMbWR5WVhacGRIa2dQU0F3TzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG0xaGEyVlFZWEowYVdOc1pYTW9KM0JoY25ScFkyeGxKeWs3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLRzlpYWk1b1pXRnNkR2dnUEQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NHRnlkR2xqYkdWVGNHVmxaQ0E5SURJd01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGVGQmhjblJwWTJ4bGN5QTlJRFF3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjlzYjNJZ1BTQXdlR1ptTURBd01EdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1YldsdVVHRnlkR2xqYkdWVGNHVmxaQzV6WlhSVWJ5Z3RjR0Z5ZEdsamJHVlRjR1ZsWkN3Z0xYQmhjblJwWTJ4bFUzQmxaV1FwTzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG0xaGVGQmhjblJwWTJ4bFUzQmxaV1F1YzJWMFZHOG9jR0Z5ZEdsamJHVlRjR1ZsWkN3Z2NHRnlkR2xqYkdWVGNHVmxaQ2s3WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1YzNSaGNuUW9kSEoxWlN3Z05UQXdMQ0J1ZFd4c0xDQnRZWGhRWVhKMGFXTnNaWE1wTzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG5Wd1pHRjBaU0E5SUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnRhWFIwWlhKUWFIbHphV056VkdsdFpTQXJQU0IwYUdsekxtZGhiV1V1ZEdsdFpTNXdhSGx6YVdOelJXeGhjSE5sWkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0dWdGFYUjBaWEpRYUhsemFXTnpWR2x0WlNBK1BTQXdMallwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWdGFYUjBaWEpRYUhsemFXTnpWR2x0WlNBOUlEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaVzFwZEhSbGNpNWtaWE4wY205NUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnWlcxcGRIUmxjaTVtYjNKRllXTm9LSEJoY25ScFkyeGxJRDArSUhCaGNuUnBZMnhsTG5ScGJuUWdQU0JqYjJ4dmNpazdYRzRnSUNBZ0lDQWdJR2xtSUNnaGRHaHBjeTV3YkdGNVpYSXVZV3hwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1M2IzSnNaQzVpY21sdVoxUnZWRzl3S0hSb2FYTXViM1psY214aGVTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQm9hWFJGYm1WdGVTaGlkV3hzWlhRc0lHVnVaVzE1S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5Wc2JHVjBTR2wwVTI5MWJtUXVjR3hoZVNoY0lsd2lMREFzTUM0MUtUdGNiaUFnSUNBZ0lDQWdaVzVsYlhrdVpHRnRZV2RsS0dKMWJHeGxkQzVvWldGc2RHZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaHBkRVZtWm1WamRDaGxibVZ0ZVN3Z1luVnNiR1YwTG5ScGJuUXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXVnVaVzE1TG1Gc2FYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVSWGh3Ykc5emFXOXVVMjkxYm1RdWNHeGhlU2hjSWx3aUxEQXNNQzQxS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFIVmtMblZ3WkdGMFpWTmpiM0psS0dWdVpXMTVMbTFoZUVobFlXeDBhQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1luVnNiR1YwTG10cGJHd29LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm9hWFJRYkdGNVpYSW9jR3hoZVdWeUxDQmlkV3hzWlhRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJJYVhSVGIzVnVaQzV3YkdGNUtGd2lYQ0lzTUN3d0xqVXBPMXh1SUNBZ0lDQWdJQ0J3YkdGNVpYSXVaR0Z0WVdkbEtHSjFiR3hsZEM1b1pXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWgxWkM1MWNHUmhkR1ZJWldGc2RHZ29LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9hWFJGWm1abFkzUW9jR3hoZVdWeUxDQmlkV3hzWlhRdWRHbHVkQ2s3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hjR3hoZVdWeUxtRnNhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQnNZWGxsY2tWNGNHeHZjMmx2YmxOdmRXNWtMbkJzWVhrb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCaWRXeHNaWFF1YTJsc2JDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnlZWE5vUlc1bGJYa29jR3hoZVdWeUxDQmxibVZ0ZVNrZ2UxeHVJQ0FnSUNBZ0lDQmxibVZ0ZVM1a1lXMWhaMlVvWlc1bGJYa3VhR1ZoYkhSb0tUdGNiaUFnSUNBZ0lDQWdjR3hoZVdWeUxtUmhiV0ZuWlNobGJtVnRlUzVvWldGc2RHZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaHBkRVZtWm1WamRDaHdiR0Y1WlhJcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ocGRFVm1abVZqZENobGJtVnRlU2s3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2haVzVsYlhrdVlXeHBkbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiWGxGZUhCc2IzTnBiMjVUYjNWdVpDNXdiR0Y1S0Z3aVhDSXNNQ3d3TGpVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW9kV1F1ZFhCa1lYUmxVMk52Y21Vb1pXNWxiWGt1YldGNFNHVmhiSFJvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oMVpDNTFjR1JoZEdWSVpXRnNkR2dvS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z3YkdGNVpYSXVZV3hwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeVJYaHdiRzl6YVc5dVUyOTFibVF1Y0d4aGVTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbFQzWmxjaWdwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJGdFpVOTJaWElvS1h0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuUnBiV1V1YzJ4dmQwMXZkR2x2YmlBOUlETTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzWmxjbXhoZVM1MmFYTnBZbXhsSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5kdmNteGtMbUp5YVc1blZHOVViM0FvZEdocGN5NXZkbVZ5YkdGNUtUdGNiaUFnSUNBZ0lDQWdiR1YwSUhScGJXVnlJRDBnZEdocGN5NW5ZVzFsTG5ScGJXVXVZM0psWVhSbEtIUm9hWE11WjJGdFpTd2dkSEoxWlNrN1hHNGdJQ0FnSUNBZ0lIUnBiV1Z5TG1Ga1pDZ3pNREF3TENBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG0xMWMybGpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlRiM1Z1WkM1d2JHRjVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjM1JoZEdVdWMzUmhjblFvSjA5MlpYSW5LVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIUnBiV1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdmVnh1WEc1OVhHNGlMQ0pwYlhCdmNuUWdSVzVsYlhrZ1puSnZiU0FuTGk0dmNISmxabUZpY3k5bGJtVnRlVkJoYm1jbk8xeHVhVzF3YjNKMElFaFZSQ0JtY205dElDY3VMaTl3Y21WbVlXSnpMMmgxWkNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCc1lYbFFZV2x5Y3lCbGVIUmxibVJ6SUZCb1lYTmxjaTVUZEdGMFpTQjdYRzVjYmlBZ0lDQmpjbVZoZEdVb0tTQjdYRzVjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbUpuSUQwZ2RHaHBjeTVoWkdRdWRHbHNaVk53Y21sMFpTZ3dMQ0F3TERZMk5pdzJNREFzSUNkd1lXNW5RbWNuS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29kR2hwY3k1aVp5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUk5aVzUxS0NrN1hHNGdJQ0FnZlZ4dUlDQWdJR3h2WVdSTlpXNTFLQ2w3WEc0Z0lDQWdJQ0FnSUd4bGRDQmxjMk5MWlhrZ1BTQjBhR2x6TG1kaGJXVXVhVzV3ZFhRdWEyVjVZbTloY21RdWFYTkViM2R1S0ZCb1lYTmxjaTVMWlhsaWIyRnlaQzVGVTBNcE8xeHVJQ0FnSUNBZ0lDQnBaaWhsYzJOTFpYa3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZWFJsTG5OMFlYSjBLQ2ROWlc1MUp5azdYRzVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dWZWeHVJaXdpYVcxd2IzSjBJRkJzWVhsbGNpQm1jbTl0SUNjdUxpOXdjbVZtWVdKekwzQnNZWGxsY2ljN1hHNXBiWEJ2Y25RZ1JXNWxiWGtnWm5KdmJTQW5MaTR2Y0hKbFptRmljeTlsYm1WdGVWQmhibWNuTzF4dWFXMXdiM0owSUVoVlJDQm1jbTl0SUNjdUxpOXdjbVZtWVdKekwyaDFaQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJzWVhsUVlXNW5JR1Y0ZEdWdVpITWdVR2hoYzJWeUxsTjBZWFJsSUh0Y2JseHVJQ0FnSUdOeVpXRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpWnlBOUlIUm9hWE11WVdSa0xuUnBiR1ZUY0hKcGRHVW9NQ3dnTUN3Z01qQXdNQ3dnTWpNNE1Dd2dKM0JoYm1kQ1p5Y3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1ZEdsdFpTNXpiRzkzVFc5MGFXOXVJRDBnTUR0Y2JseHVYRzRnSUNBZ0lDQWdJQzh2SUMwdExTMHRMUzBnVUV4QldVVlNYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5SUQwZ2JtVjNJRkJzWVhsbGNpaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbllXMWxPaUIwYUdsekxtZGhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklEQXVPVElnS2lCMGFHbHpMbWRoYldVdWQyOXliR1F1YUdWcFoyaDBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdGemMyVjBPaUFuYzIxaGJHeG1hV2RvZEdWeUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdaeVlXMWxPaUF5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjM1JoWjJVdVlXUmtRMmhwYkdRb2RHaHBjeTV3YkdGNVpYSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnNZWGxsY2xOb2IyOTBWR2x0WlNBOUlEQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5VTJodmIzUkpiblJsY25aaGJDQTlJREF1TVRZN1hHNWNiaUFnSUNBZ0lDQWdMeThnTFMwdExTMHRMU0JGVGtWTldUb2dkR2hsYzJVZ2IyNWxjeUJoY21VZ1kzSmxZWFJsWkNCbGRtVnllU0IxY0dSaGRHVWdkR2xqYTF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxcFpYTWdQU0IwYUdsekxtRmtaQzVuY205MWNDZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaVzFwWlhNdVpXNWhZbXhsUW05a2VTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbFVhVzFsSUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THpFdU5WeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMTVTVzUwWlhKMllXd2dQU0F5TGpVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbFRhRzl2ZEZScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JKYm5SbGNuWmhiQ0E5SURFN1hHNGdJQ0FnSUNBZ0lDOHZJQzB0TFMwdExTMGdJVVZPUlUxWlhHNWNiaUFnSUNBZ0lDQWdMeThnTFMwdExTMHRMU0J6YldGc2JHVnlSVTVGVFZrNklIUm9hWE1nYjI1bGN5QmhjbVVnWTNKbFlYUmxaQ0JsZG1WeWVTQjFjR1JoZEdVZ2RHbGphMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTnRZV3hzWlhKRmJtVnRhV1Z6SUQwZ2RHaHBjeTVoWkdRdVozSnZkWEFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YldGc2JHVnlSVzVsYldsbGN5NWxibUZpYkdWQ2IyUjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdMeThnTFMwdExTMHRMU0FoYzIxaGJHeGxja1ZPUlUxWlhHNWNibHh1SUNBZ0lDQWdJQ0F2THlBdExTMHRMUzB0SUVWT1JVMVpJRU5NU1VWT1ZEb2djbUZ1Wkc5dGJIa2dZMmh2YzJWdVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJXbGxjME5zYVdWdWRDQTlJSFJvYVhNdVlXUmtMbWR5YjNWd0tDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWxiV2xsYzBOc2FXVnVkQzVsYm1GaWJHVkNiMlI1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnTHk4eExqVmNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVU5zYVdWdWRFbHVkR1Z5ZG1Gc0lEMGdNaTR3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVEyeHBaVzUwVTJodmIzUlVhVzFsSUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVU5zYVdWdWRGTm9iMjkwU1c1MFpYSjJZV3dnUFNBeE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk5cGJtbDBhV0ZzYVhwbElHWnBjbk4wSUdOc2FXVnVkRnh1SUNBZ0lDQWdJQ0IwYUdsekxtTnlaV0YwWlVWdVpXMTVRMnhwWlc1MEtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTml3Z056WXBJQ29nTVRBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THpCY2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6Y0dWbFpEb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVaMkZ0WlM1eWJtUXVhVzUwWldkbGNrbHVVbUZ1WjJVb05Td2dNVEFwSUNvZ01UQWdLaUFvVFdGMGFDNXlZVzVrYjIwb0tTQStJREF1TlNBL0lERWdPaUF0TVNrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dkR2hwY3k1bllXMWxMbkp1WkM1cGJuUmxaMlZ5U1c1U1lXNW5aU2cxTENBeE1Da2dLaUF4TUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZPVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBNU1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdKMWJHeGxkRk53WldWa09pQjBhR2x6TG1kaGJXVXVjbTVrTG1sdWRHVm5aWEpKYmxKaGJtZGxLREV3TENBeU1Da2dLaUF4TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z6YzJWME9pQW5ZV3hwWlc1ekp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhOcGVtVTZJREF1T0Z4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdMeThnTFMwdExTMHRMU0FoUlU1RlRWa2dRMHhKUlU1VU9pQnlZVzVrYjIxc2VTQmphRzl6Wlc1Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVkR2x0WlM1bGRtVnVkSE11Ykc5dmNDaFFhR0Z6WlhJdVZHbHRaWEl1VTBWRFQwNUVJQ29nTVRBc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXVaVzVsYlhsSmJuUmxjblpoYkNBK0lEQXVNaUFwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsSmJuUmxjblpoYkNBdFBTQXdMakU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YjNabGNteGhlVUpwZEcxaGNDQTlJSFJvYVhNdVlXUmtMbUpwZEcxaGNFUmhkR0VvZEdocGN5NW5ZVzFsTG5kcFpIUm9MQ0IwYUdsekxtZGhiV1V1YUdWcFoyaDBLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkbVZ5YkdGNVFtbDBiV0Z3TG1OMGVDNW1hV3hzVTNSNWJHVWdQU0FuSXpBd01DYzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzWmxjbXhoZVVKcGRHMWhjQzVqZEhndVptbHNiRkpsWTNRb01Dd2dNQ3dnZEdocGN5NW5ZVzFsTG5kcFpIUm9MQ0IwYUdsekxtZGhiV1V1YUdWcFoyaDBLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbTkyWlhKc1lYa2dQU0IwYUdsekxtRmtaQzV6Y0hKcGRHVW9NQ3dnTUN3Z2RHaHBjeTV2ZG1WeWJHRjVRbWwwYldGd0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1TG5acGMybGliR1VnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZkbVZ5YkdGNUxtRnNjR2hoSUQwZ01DNDNOVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWgxWkNBOUlHNWxkeUJJVlVRb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWjJGdFpUb2dkR2hwY3k1bllXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NHeGhlV1Z5T2lCMGFHbHpMbkJzWVhsbGNseHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QXRMUzB0TFMwdElGTlBWVTVFVTF4dUlDQWdJQ0FnSUM4dklIUm9hWE11YlhWemFXTWdQU0IwYUdsekxtZGhiV1V1WVdSa0xtRjFaR2x2S0Nkd2JHRjVUWFZ6YVdNbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXeHNaWFJJYVhSVGIzVnVaQ0E5SUhSb2FYTXVZV1JrTG5OdmRXNWtLQ2RpZFd4c1pYUklhWFFuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1WdGVVVjRjR3h2YzJsdmJsTnZkVzVrSUQwZ2RHaHBjeTVoWkdRdWMyOTFibVFvSjJWdVpXMTVSWGh3Ykc5emFXOXVKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeVJYaHdiRzl6YVc5dVUyOTFibVFnUFNCMGFHbHpMbUZrWkM1emIzVnVaQ2duY0d4aGVXVnlSWGh3Ykc5emFXOXVKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlU5MlpYSlRiM1Z1WkNBOUlIUm9hWE11WVdSa0xuTnZkVzVrS0NkbllXMWxUM1psY2ljcE8xeHVYRzRnSUNBZ0lDQWdJQzh2ZEdocGN5NXRkWE5wWXk1c2IyOXdSblZzYkNncE8xeHVYRzVjYmx4dUlDQWdJQ0FnSUNBdkwwUmxabUYxYkhSelhHNGdJQ0FnSUNBZ0lDOHZkR2hwY3k1bGJtVnRlVlJwYldVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0F2TDNSb2FYTXVaVzVsYlhsSmJuUmxjblpoYkNBOUlERXVOVHRjYmlBZ0lDQWdJQ0FnTHk5MGFHbHpMbVZ1WlcxNVUyaHZiM1JVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnTHk5MGFHbHpMbVZ1WlcxNVUyaHZiM1JKYm5SbGNuWmhiQ0E5SURFN1hHNGdJQ0FnSUNBZ0lDOHZkR2hwY3k1d2JHRjVaWEpUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQXZMM1JvYVhNdWNHeGhlV1Z5VTJodmIzUkpiblJsY25aaGJDQTlJREF1TVRZN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZFhCa1lYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtVnRlVk5vYjI5MFZHbHRaU0FyUFNCMGFHbHpMbWRoYldVdWRHbHRaUzV3YUhsemFXTnpSV3hoY0hObFpEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpUYUc5dmRGUnBiV1VnS3owZ2RHaHBjeTVuWVcxbExuUnBiV1V1Y0doNWMybGpjMFZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Wlc1bGJYbFVhVzFsSUQ0Z2RHaHBjeTVsYm1WdGVVbHVkR1Z5ZG1Gc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVZHbHRaU0E5SURBN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZM0psWVhSbFJXNWxiWGtvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkaGJXVTZJSFJvYVhNdVoyRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I0T2lCMGFHbHpMbWRoYldVdWNtNWtMbWx1ZEdWblpYSkpibEpoYm1kbEtEWXNJRGMyS1NBcUlERXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2TUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM0JsWldRNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZzFMQ0F4TUNrZ0tpQXhNQ0FxSUNoTllYUm9MbkpoYm1SdmJTZ3BJRDRnTUM0MUlEOGdNU0E2SUMweEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2RHaHBjeTVuWVcxbExuSnVaQzVwYm5SbFoyVnlTVzVTWVc1blpTZzFMQ0F4TUNrZ0tpQXhNRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4NVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHVmhiSFJvT2lBNUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSjFiR3hsZEZOd1pXVmtPaUIwYUdsekxtZGhiV1V1Y201a0xtbHVkR1ZuWlhKSmJsSmhibWRsS0RFd0xDQXlNQ2tnS2lBeE1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oyRnNhV1Z1Snl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemFYcGxPaUF5TGpWY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVsYm1WdGVWTm9iMjkwVkdsdFpTQStJSFJvYVhNdVpXNWxiWGxUYUc5dmRFbHVkR1Z5ZG1Gc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1WlcxNVUyaHZiM1JVYVcxbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doZEdocGN5NXdiR0Y1WlhJdVlXeHBkbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWQyOXliR1F1WW5KcGJtZFViMVJ2Y0NoMGFHbHpMbTkyWlhKc1lYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0Z3aVNHRnpJRzExWlhKMGIxd2lLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5Cc1lYbGxjbE5vYjI5MFZHbHRaU0ErSUhSb2FYTXVjR3hoZVdWeVUyaHZiM1JKYm5SbGNuWmhiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWEpUYUc5dmRGUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0d4aGVXVnlMbUZzYVhabEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhOb2IyOTBTMlY1SUQwZ2RHaHBjeTVuWVcxbExtbHVjSFYwTG10bGVXSnZZWEprTG1selJHOTNiaWhRYUdGelpYSXVTMlY1WW05aGNtUXVVMUJCUTBWQ1FWSXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hOb2IyOTBTMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5TG5Ob2IyOTBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuQm9lWE5wWTNNdVlYSmpZV1JsTG05MlpYSnNZWEFvZEdocGN5NXdiR0Y1WlhJdVluVnNiR1YwY3l3Z2RHaHBjeTVsYm1WdGFXVnpMQ0IwYUdsekxtaHBkRVZ1WlcxNUxDQnVkV3hzTENCMGFHbHpLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWNHaDVjMmxqY3k1aGNtTmhaR1V1YjNabGNteGhjQ2gwYUdsekxuQnNZWGxsY2k1aWRXeHNaWFJ6TENCMGFHbHpMbk50WVd4c1pYSkZibVZ0YVdWekxDQjBhR2x6TG1ocGRFVnVaVzE1TENCdWRXeHNMQ0IwYUdsektUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Y0doNWMybGpjeTVoY21OaFpHVXViM1psY214aGNDaDBhR2x6TG5Cc1lYbGxjaXdnVzNSb2FYTXVaVzVsYldsbGN5eDBhR2x6TG5OdFlXeHNaWEpGYm1WdGFXVnpYU3dnZEdocGN5NWpjbUZ6YUVWdVpXMTVMQ0J1ZFd4c0xDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUk5aVzUxS0NrN1hHNGdJQ0FnSUNBZ0lDOHZJSFJvYVhNdVltY3VkR2xzWlZCdmMybDBhVzl1TG5nZ0t6MGdNenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpjbVZoZEdWRmJtVnRlU2hrWVhSaEtTQjdYRzVjYmlBZ0lDQWdJQ0FnYkdWMElHVnVaVzE1SUQwZ2RHaHBjeTVsYm1WdGFXVnpMbWRsZEVacGNuTjBSWGhwYzNSektHWmhiSE5sS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJSFJ2ZEdGc1JXNWxiV2xsY3lBOUlIUm9hWE11Wlc1bGJXbGxjeTVqYUdsc1pISmxiaTVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0hSdmRHRnNSVzVsYldsbGN5azdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmxibVZ0ZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlc1bGJYa2dQU0J1WlhjZ1JXNWxiWGtvWkdGMFlTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaDBiM1JoYkVWdVpXMXBaWE1nUENBMUtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpXMXBaWE11WVdSa0tHVnVaVzE1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnVaVzE1TG5KbGMyVjBLR1JoZEdFcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdOeVpXRjBaVk50WVd4c1pYSkZibVZ0ZVNoa1lYUmhLU0I3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1Z1WlcxNUlEMGdkR2hwY3k1emJXRnNiR1Z5Ulc1bGJXbGxjeTVuWlhSR2FYSnpkRVY0YVhOMGN5aG1ZV3h6WlNrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0IwYjNSaGJFVnVaVzFwWlhNZ1BTQjBhR2x6TG5OdFlXeHNaWEpGYm1WdGFXVnpMbU5vYVd4a2NtVnVMbXhsYm1kMGFEdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lXVnVaVzE1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYm1WdGVTQTlJRzVsZHlCRmJtVnRlU2hrWVhSaEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIUnZkR0ZzUlc1bGJXbGxjeUE4SURJMEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OdFlXeHNaWEpGYm1WdGFXVnpMbUZrWkNobGJtVnRlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJtVnRlUzV5WlhObGRDaGtZWFJoS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqY21WaGRHVkZibVZ0ZVVOc2FXVnVkQ2hrWVhSaEtTQjdYRzVjYmlBZ0lDQWdJQ0FnYkdWMElHVnVaVzE1SUQwZ2RHaHBjeTVsYm1WdGFXVnpRMnhwWlc1MExtZGxkRVpwY25OMFJYaHBjM1J6S0daaGJITmxLVHRjYmlBZ0lDQWdJQ0FnYkdWMElIUnZkR0ZzUlc1bGJXbGxjeUE5SUhSb2FYTXVaVzVsYldsbGMwTnNhV1Z1ZEM1amFHbHNaSEpsYmk1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktIUnZkR0ZzUlc1bGJXbGxjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZsYm1WdGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXNWxiWGtnUFNCdVpYY2dSVzVsYlhrb1pHRjBZU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWgwYjNSaGJFVnVaVzFwWlhNZ1BEMGdNU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxibVZ0YVdWelEyeHBaVzUwTG1Ga1pDaGxibVZ0ZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxibVZ0ZVM1eVpYTmxkQ2hrWVhSaEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCb2FYUkZabVpsWTNRb2IySnFMQ0JqYjJ4dmNpa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2RIZGxaVzRnUFNCMGFHbHpMbWRoYldVdVlXUmtMblIzWldWdUtHOWlhaWs3WEc0Z0lDQWdJQ0FnSUd4bGRDQmxiV2wwZEdWeUlEMGdkR2hwY3k1bllXMWxMbUZrWkM1bGJXbDBkR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JsYldsMGRHVnlVR2g1YzJsamMxUnBiV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQnNaWFFnY0dGeWRHbGpiR1ZUY0dWbFpDQTlJREV3TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJRzFoZUZCaGNuUnBZMnhsY3lBOUlERXdPMXh1WEc0Z0lDQWdJQ0FnSUhSM1pXVnVMblJ2S0h0MGFXNTBPaUF3ZUdabU1EQXdNSDBzSURFd01DazdYRzRnSUNBZ0lDQWdJSFIzWldWdUxtOXVRMjl0Y0d4bGRHVXVZV1JrS0NncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHOWlhaTUwYVc1MElEMGdNSGhtWm1abVptWTdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCMGQyVmxiaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUdWdGFYUjBaWEl1ZUNBOUlHOWlhaTU0TzF4dUlDQWdJQ0FnSUNCbGJXbDBkR1Z5TG5rZ1BTQnZZbW91ZVR0Y2JpQWdJQ0FnSUNBZ1pXMXBkSFJsY2k1bmNtRjJhWFI1SUQwZ01EdGNiaUFnSUNBZ0lDQWdaVzFwZEhSbGNpNXRZV3RsVUdGeWRHbGpiR1Z6S0Nkd1lYSjBhV05zWlNjcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNodlltb3VhR1ZoYkhSb0lEdzlJREFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJoY25ScFkyeGxVM0JsWldRZ1BTQXlNREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRZWGhRWVhKMGFXTnNaWE1nUFNBME1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlJRDBnTUhobVpqQXdNREE3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxtMXBibEJoY25ScFkyeGxVM0JsWldRdWMyVjBWRzhvTFhCaGNuUnBZMnhsVTNCbFpXUXNJQzF3WVhKMGFXTnNaVk53WldWa0tUdGNiaUFnSUNBZ0lDQWdaVzFwZEhSbGNpNXRZWGhRWVhKMGFXTnNaVk53WldWa0xuTmxkRlJ2S0hCaGNuUnBZMnhsVTNCbFpXUXNJSEJoY25ScFkyeGxVM0JsWldRcE8xeHVJQ0FnSUNBZ0lDQmxiV2wwZEdWeUxuTjBZWEowS0hSeWRXVXNJRFV3TUN3Z2JuVnNiQ3dnYldGNFVHRnlkR2xqYkdWektUdGNiaUFnSUNBZ0lDQWdaVzFwZEhSbGNpNTFjR1JoZEdVZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYldsMGRHVnlVR2g1YzJsamMxUnBiV1VnS3owZ2RHaHBjeTVuWVcxbExuUnBiV1V1Y0doNWMybGpjMFZzWVhCelpXUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaGxiV2wwZEdWeVVHaDVjMmxqYzFScGJXVWdQajBnTUM0MktYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxiV2wwZEdWeVVHaDVjMmxqYzFScGJXVWdQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWdGFYUjBaWEl1WkdWemRISnZlU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNBZ0lHVnRhWFIwWlhJdVptOXlSV0ZqYUNod1lYSjBhV05zWlNBOVBpQndZWEowYVdOc1pTNTBhVzUwSUQwZ1kyOXNiM0lwTzF4dUlDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdWNHeGhlV1Z5TG1Gc2FYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVluSnBibWRVYjFSdmNDaDBhR2x6TG05MlpYSnNZWGtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYUdsMFJXNWxiWGtvWW5Wc2JHVjBMQ0JsYm1WdGVTa2dlMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZzYkdWMFNHbDBVMjkxYm1RdWNHeGhlU2hjSWx3aUxEQXNNQzQxS1R0Y2JpQWdJQ0FnSUNBZ1pXNWxiWGt1WkdGdFlXZGxLR0oxYkd4bGRDNW9aV0ZzZEdncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ocGRFVm1abVZqZENobGJtVnRlU3dnWW5Wc2JHVjBMblJwYm5RcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaFpXNWxiWGt1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1bGJYbEZlSEJzYjNOcGIyNVRiM1Z1WkM1d2JHRjVLRndpWENJc0lEQXNJREF1TlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtaDFaQzUxY0dSaGRHVlRZMjl5WlNobGJtVnRlUzV0WVhoSVpXRnNkR2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjM2RwZEdOb0tHVnVaVzE1TG5OcGVtVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2VEdGeVoyVWdMVDRnVFdWa2FYVnRYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBeUxqVTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTnlaV0YwWlZOdFlXeHNaWEpGYm1WdGVTaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5ZVzFsT2lCMGFHbHpMbWRoYldVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQmxibVZ0ZVM1NExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2daVzVsYlhrdWVTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITndaV1ZrT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nTWpVZ0tpQXhNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQXRNekFnS2lBeE1GeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGxZV3gwYURvZ01UQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlkV3hzWlhSVGNHVmxaRG9nZEdocGN5NW5ZVzFsTG5KdVpDNXBiblJsWjJWeVNXNVNZVzVuWlNneE1Dd2dNakFwSUNvZ01UQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhjM05sZERvZ0oyRnNhV1Z1Snl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOcGVtVTZJREV1TlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZM0psWVhSbFUyMWhiR3hsY2tWdVpXMTVLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2RoYldVNklIUm9hWE11WjJGdFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJR1Z1WlcxNUxuZ3NYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUdWdVpXMTVMbmtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Y0dWbFpEb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhnNklDMHlOU0FxSURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUMwek1DQXFJREV3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1pXRnNkR2c2SURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luVnNiR1YwVTNCbFpXUTZJSFJvYVhNdVoyRnRaUzV5Ym1RdWFXNTBaV2RsY2tsdVVtRnVaMlVvTVRBc0lESXdLU0FxSURFd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaWFE2SUNkaGJHbGxiaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6YVhwbE9pQXhMalZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5Wc2JHVjBMbXRwYkd3b0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHTnlZWE5vUlc1bGJYa29jR3hoZVdWeUxDQmxibVZ0ZVNrZ2UxeHVJQ0FnSUNBZ0lDQXZMMlZ1WlcxNUxtUmhiV0ZuWlNobGJtVnRlUzVvWldGc2RHZ3BPMXh1SUNBZ0lDQWdJQ0JsYm1WdGVTNWtZVzFoWjJVb015azdYRzRnSUNBZ0lDQWdJQzh2Y0d4aGVXVnlMbVJoYldGblpTaGxibVZ0ZVM1b1pXRnNkR2dwTzF4dUlDQWdJQ0FnSUNCd2JHRjVaWEl1WkdGdFlXZGxLREVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhwZEVWbVptVmpkQ2h3YkdGNVpYSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaHBkRVZtWm1WamRDaGxibVZ0ZVNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doWlc1bGJYa3VZV3hwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVsYlhsRmVIQnNiM05wYjI1VGIzVnVaQzV3YkdGNUtGd2lYQ0lzTUN3d0xqVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVvZFdRdWRYQmtZWFJsVTJOdmNtVW9aVzVsYlhrdWJXRjRTR1ZoYkhSb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxtaDFaQzUxY0dSaGRHVklaV0ZzZEdnb0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0NGd2JHRjVaWEl1WVd4cGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVXVnlSWGh3Ykc5emFXOXVVMjkxYm1RdWNHeGhlU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxUM1psY2lncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyRnRaVTkyWlhJb0tYdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMblJwYldVdWMyeHZkMDF2ZEdsdmJpQTlJRE03WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM1psY214aGVTNTJhWE5wWW14bElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuZHZjbXhrTG1KeWFXNW5WRzlVYjNBb2RHaHBjeTV2ZG1WeWJHRjVLVHRjYmlBZ0lDQWdJQ0FnYkdWMElIUnBiV1Z5SUQwZ2RHaHBjeTVuWVcxbExuUnBiV1V1WTNKbFlYUmxLSFJvYVhNdVoyRnRaU3dnZEhKMVpTazdYRzRnSUNBZ0lDQWdJSFJwYldWeUxtRmtaQ2d6TURBd0xDQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCMGFHbHpMbTExYzJsakxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaVTkyWlhKVGIzVnVaQzV3YkdGNUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWMzUmhkR1V1YzNSaGNuUW9KMUJoYm1kUGRtVnlKeWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjBhVzFsY2k1emRHRnlkQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3h2WVdSTlpXNTFLQ2w3WEc0Z0lDQWdJQ0FnSUd4bGRDQmxjMk5MWlhrZ1BTQjBhR2x6TG1kaGJXVXVhVzV3ZFhRdWEyVjVZbTloY21RdWFYTkViM2R1S0ZCb1lYTmxjaTVMWlhsaWIyRnlaQzVGVTBNcE8xeHVJQ0FnSUNBZ0lDQnBaaWhsYzJOTFpYa3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVpYSXVhMmxzYkNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5OMFlYUmxMbk4wWVhKMEtDZE5aVzUxSnlrN1hHNWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjFjYmlJc0ltVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ5Wld4dllXUWdaWGgwWlc1a2N5QlFhR0Z6WlhJdVUzUmhkR1VnZTF4dVhHNGdJQ0FnY0hKbGJHOWhaQ2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUmxja0puSUQwZ2RHaHBjeTVoWkdRdWMzQnlhWFJsS0hSb2FYTXVaMkZ0WlM1M2IzSnNaQzVqWlc1MFpYSllMQ0IwYUdsekxtZGhiV1V1ZDI5eWJHUXVZMlZ1ZEdWeVdTd2dKMnh2WVdSbGNrSm5KeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkdWeVFtRnlJRDBnZEdocGN5NWhaR1F1YzNCeWFYUmxLSFJvYVhNdVoyRnRaUzUzYjNKc1pDNWpaVzUwWlhKWUxDQjBhR2x6TG1kaGJXVXVkMjl5YkdRdVkyVnVkR1Z5V1N3Z0oyeHZZV1JsY2tKaGNpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1JsY2tKbkxtRnVZMmh2Y2k1elpYUlVieWd3TGpVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUmxja0poY2k1aGJtTm9iM0l1YzJWMFZHOG9NQzQxS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVjMlYwVUhKbGJHOWhaRk53Y21sMFpTaDBhR2x6TG14dllXUmxja0poY2lrN1hHNGdJQ0FnSUNBZ0lDOHZaMkZ0WlNBeFhHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkR3hoYzBwVFQwNUJjbkpoZVNnbmMyMWhiR3htYVdkb2RHVnlKeXdnSjJsdFp5OXpjSEpwZEdWemFHVmxkQzl6YldGc2JHWnBaMmgwWlhJdWNHNW5KeXdnSjJSaGRHRXZjM0J5YVhSbGMyaGxaWFF2YzIxaGJHeG1hV2RvZEdWeUxtcHpiMjRuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtRjBiR0Z6U2xOUFRrRnljbUY1S0NkaGJHbGxiaWNzSUNkcGJXY3ZjM0J5YVhSbGMyaGxaWFF2WVd4cFpXNHVjRzVuSnl3Z0oyUmhkR0V2YzNCeWFYUmxjMmhsWlhRdllXeHBaVzR1YW5OdmJpY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhSc1lYTktVMDlPUVhKeVlYa29KMkoxZEhSdmJpY3NJQ2RwYldjdmMzQnlhWFJsYzJobFpYUXZZblYwZEc5dUxuQnVaeWNzSUNka1lYUmhMM053Y21sMFpYTm9aV1YwTDJKMWRIUnZiaTVxYzI5dUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25abUZ5WW1GamF5Y3NJQ2RwYldjdlptRnlZbUZqYXk1cWNHY25LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1sdFlXZGxLQ2RpZFd4c1pYUW5MQ0FuYVcxbkwySjFiR3hsZEM1d2JtY25LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1sdFlXZGxLQ2R3WVhKMGFXTnNaU2NzSUNkcGJXY3ZjR0Z5ZEdsamJHVXVaMmxtSnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnbmFHVmhiSFJvWW1GeUp5d2dKMmx0Wnk5b1pXRnNkR2hpWVhJdWNHNW5KeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzloWkM1cGJXRm5aU2duYUhWa1FtY25MQ0FuYVcxbkwyaDFaQzFpWnk1d2JtY25LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdVlYVmthVzhvSjNCc1lYbE5kWE5wWXljc0lGc25ZWFZrYVc4dmJYVnphV012Y0d4aGVTNXRjRE1uWFNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNWhkV1JwYnlnbmJXVnVkVTExYzJsakp5d2dXeWRoZFdScGJ5OXRkWE5wWXk5dFpXNTFMbTF3TXlkZEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KMjFsYm5WUGRtVnlKeXdnV3lkaGRXUnBieTl6YjNWdVpDOXRaVzUxTFc5MlpYSXViWEF6SjEwcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVZWFZrYVc4b0oyMWxiblZQZFhRbkxDQmJKMkYxWkdsdkwzTnZkVzVrTDIxbGJuVXRiM1YwTG0xd015ZGRLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1GMVpHbHZLQ2R0Wlc1MVJHOTNiaWNzSUZzbllYVmthVzh2YzI5MWJtUXZiV1Z1ZFMxamJHbGpheTV0Y0RNblhTazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1GMVpHbHZLQ2RpZFd4c1pYUklhWFFuTENCYkoyRjFaR2x2TDNOdmRXNWtMMkoxYkd4bGRDMW9hWFF1YlhBekoxMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KMlZ1WlcxNVUyaHZkQ2NzSUZzbllYVmthVzh2YzI5MWJtUXZaVzVsYlhrdGMyaHZkQzV0Y0RNblhTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZFdScGJ5Z25aVzVsYlhsRmVIQnNiM05wYjI0bkxDQmJKMkYxWkdsdkwzTnZkVzVrTDJWdVpXMTVMV1Y0Y0d4dmMybHZiaTV0Y0RNblhTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVoZFdScGJ5Z25jR3hoZVdWeVUyaHZkQ2NzSUZzbllYVmthVzh2YzI5MWJtUXZjR3hoZVdWeUxYTm9iM1F1YlhBekoxMHBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1WVhWa2FXOG9KM0JzWVhsbGNrVjRjR3h2YzJsdmJpY3NJRnNuWVhWa2FXOHZjMjkxYm1RdmNHeGhlV1Z5TFdWNGNHeHZjMmx2Ymk1dGNETW5YU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtRjFaR2x2S0NkbllXMWxUM1psY2ljc0lGc25ZWFZrYVc4dmMyOTFibVF2WjJGdFpTMXZkbVZ5TG0xd015ZGRLVHRjYmlBZ0lDQWdJQ0FnTHk4aFoyRnRaU0F4WEc1Y2JseHVJQ0FnSUNBZ0lDQXZMMmRoYldVZ01seHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVhVzFoWjJVb0ozQmhibWRDWnljc0lDZHBiV2N2Y0dGdVowSm5MbkJ1WnljcE8xeHVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kzSmxZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbk4wWVhKMEtDZE5aVzUxSnlrN1hHNGdJQ0FnZlZ4dVhHNTlYRzRpWFgwPSJ9
