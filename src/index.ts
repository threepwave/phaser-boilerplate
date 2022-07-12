/* index.js - Entry point to the game. Coordinates loading phaser/libraries, passing in configs, and instantiating the game. */

// Load phaser base classes
import { Types } from 'phaser'

// Load our scenes (each scene defines a mode of gameplay)
import { GameUIScene, LoadingScene } from './scenes'
import { MapScene } from './scenes'

// Configure phaser w/ default settings
const gameConfig: Types.Core.GameConfig = {
    // Load up our loading scene then figure out what to do next
    scene: [LoadingScene],
    title: 'crushbone ☠️',
    type: Phaser.WEBGL,
    parent: 'game',
    backgroundColor: '#351f1b',
    scale: {
        mode: Phaser.Scale.ScaleModes.NONE,
        width: window.innerWidth,
        height: window.innerHeight
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    render: {
        antialiasGL: false,
        pixelArt: true
    },
    callbacks: {
        postBoot: () => {
            window.sizeChanged()
        }
    },
    canvasStyle: `display: block; width: 100%; height: 100%;`,
    autoFocus: true,
    audio: {
        disableWebAudio: false
    }
}

export default class Game extends Phaser.Game {
    constructor(config) {
        super(config)

        // Start loading scenes in background (but we kick off LoadingScreen)
        this.scene.add(MapScene.Name, MapScene)
        this.scene.add(GameUIScene.Name, GameUIScene)
    }
}

// sizeChanged - Adjust window size when the user resizes the browser
window.sizeChanged = () => {
    if (window.game.isBooted) {
        setTimeout(() => {
            window.game.scale.resize(window.innerWidth, window.innerHeight)
            window.game.canvas.setAttribute(
                'style',
                `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
            )
        }, 100)
    }
}
window.onresize = () => window.sizeChanged()

window.onload = () => {
    const game = new Game(gameConfig)
}
