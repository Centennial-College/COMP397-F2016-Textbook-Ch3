/// <reference path="_reference.ts" />
(function () {
    var stage;
    function init() {
        setupStage();
        main();
    }
    function main() {
        var circle = new createjs.Shape();
        circle.graphics.beginFill('#00f')
            .drawCircle(0, 0, 50);
        circle.x = stage.canvas.width / 2;
        circle.y = stage.canvas.height / 2;
        circle.name = 'Blue Circle';
        stage.addChild(circle);
        circle.on('dblclick', function (e) { alert(e.target + ' was double clicked!'); });
    }
    function setupStage() {
        stage = new createjs.Stage(document.getElementById('canvas'));
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', function (e) {
            stage.update();
        });
    }
    window.onload = init;
})();
//# sourceMappingURL=game.js.map