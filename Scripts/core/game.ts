/// <reference path="_reference.ts" />

(function () {

    let stage: createjs.Stage;

    function init() {
        setupStage();
        main();
    }

    function main(): void {
        let circle = new createjs.Shape()
        circle.graphics.beginFill('#00f')
            .drawCircle(0, 0, 50)
    }

    function setupStage() {
        stage = new createjs.Stage(document.getElementById('canvas'));
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', (e) => {
            stage.update();
        });
    }

    window.onload = init;

})();