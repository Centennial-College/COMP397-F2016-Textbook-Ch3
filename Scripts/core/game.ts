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
        circle.x = stage.canvas.width / 2
        circle.y = stage.canvas.height / 2
        circle.name = 'Blue Circle'
        stage.addChild(circle)

        // change the cursor when hovering over circle
        circle.cursor = 'pointer'

        circle.on('dblclick', (e) => { alert(e.target + ' was double clicked!') })
        circle.on('mouseover', function (e) {
            this.alpha = 1
        })
        circle.on('mouseout', function (e) {
            this.alpha = .5
        })

        circle.on('mousedown', (e) => {
            stage.on('stagemousemove', (e) => {
                circle.x = stage.mouseX
                circle.y = stage.mouseY
            })
            stage.on('stagemouseup', (e) => {
                e.target.removeAllEventListeners()
            })
        })
    }

    function setupStage() {
        stage = new createjs.Stage(document.getElementById('canvas'));
        createjs.Ticker.framerate = 60;
        stage.enableMouseOver()
        createjs.Ticker.on('tick', (e) => {
            stage.update();
        });
    }

    window.onload = init;

})();