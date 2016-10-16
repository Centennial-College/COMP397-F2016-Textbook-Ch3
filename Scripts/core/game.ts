/// <reference path="_reference.ts" />

(function () {
    const ARROW_KEY_LEFT = 37;
    const ARROW_KEY_RIGHT = 39;

    let stage, padel: createjs.Shape;
    let leftKeyDown, rightKeyDown = false;

    let init = () => {
        stage = new createjs.Stage(document.getElementById('canvas'))
        createjs.Ticker.on('tick', tick)
        createjs.Ticker.framerate = 60
        startGame()
    }

    let startGame = () => {
        padel = new createjs.Shape()
        padel.width = 100
        padel.graphics.beginFill('#00f')
            .drawRect(0, 0, padel.width, 20)
        padel.x = padel.nextX = 0
        padel.y = stage.canvas.height - 20
        stage.addChild(padel)

        //handle keys
        window.onkeydown = movePadel
        window.onkeyup = stopPadel
    }

    let movePadel = (e) => {
        e = !e ? window.event : e

        console.log(e.keyCode);
        
        switch (e.keyCode) {
            case ARROW_KEY_LEFT:
                leftKeyDown = true
                break
            case ARROW_KEY_RIGHT:
                rightKeyDown = true
                break
        }
    }

    function stopPadel(e) {
        e = !e ? window.event : e
        switch (e.keyCode) {
            case 37:
                leftKeyDown = false
                break
            case 39:
                rightKeyDown = false
                break
        }
    }

    function update() {
        let nextX = padel.x
        if (leftKeyDown) {
            nextX = padel.x - 10
            if (nextX < 0)
                nextX = 0
        }
        else if (rightKeyDown) {
            nextX = padel.x + 10
            if (nextX > stage.canvas.width - padel.width)
                nextX = stage.canvas.width - padel.width
        }
        padel.nextX = nextX
    }

    function render() {
        padel.x = padel.nextX
    }

    function tick(e) {
        update()
        render()
        stage.update()
    }

    window.onload = init;

})();