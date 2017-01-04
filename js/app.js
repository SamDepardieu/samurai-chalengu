/// <reference path="../lib/phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('logo', './phaser.png');
    };
    SimpleGame.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.1, 0.1);
    };
    SimpleGame.prototype.update = function () {
    };
    return SimpleGame;
})();
;
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map