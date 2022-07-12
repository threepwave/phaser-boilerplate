/* LoadingScene - Shown between scenes when the game needs to load assets. */

import { GameObjects, Scene } from 'phaser'
import { MapScene } from './map'
// import logo from ''
export class LoadingScene extends Scene {
    public static Name = 'loading-scene'
    private logo!: GameObjects.Sprite

    constructor() {
        super(LoadingScene.Name)
    }

    preload(): void {
        // Once loading is complete, call the next scene
        this.load.on(
            'complete',
            function () {
                console.log('load complete')
                this.scene.start(MapScene.Name)
            },
            this
        ) // Pass in this as context so we can call the next scene

        this.load.baseURL = 'assets/'
        this.load.image('logo', 'sprites/logo.png')

        // Load Characters
        this.load.image('bard', 'sprites/characters/bard.png')
    }

    create(): void {
        this.logo = this.add.sprite(
            this.cameras.main.worldView.centerX,
            this.cameras.main.worldView.centerY,
            'logo'
        )
        this.logo.setOrigin(0.5)
    }
}
