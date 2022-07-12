import { GameObjects, Tilemaps } from 'phaser'
import { GameUIScene } from './gameui'

export class MapScene extends Phaser.Scene {
    public static Name = 'map-scene'
    private character!: GameObjects.Sprite
    private map!: Tilemaps.Tilemap
    private tiles!: Tilemaps.Tileset

    constructor() {
        super(MapScene.Name)
    }

    preload(): void {
        this.load.image(
            'palace-floor',
            'assets/sprites/environment/palace-floor-tiles.png'
        )
        // this.canvas = this.sys.game.canvas;
    }

    create(): void {
        // Enable UI Scene
        this.scene.launch(GameUIScene.Name)

        // Initialize tile map
        this.initTilemap('palace-floor')

        // Initialize character
        this.initCharacter('bard')
    }

    initTilemap = (name: string) => {
        // Initialize sprite-based tile map so we have somewhere to walk around
        this.map = this.make.tilemap({
            width: 200,
            height: 200,
            tileWidth: 16,
            tileHeight: 16
        })
        this.tiles = this.map.addTilesetImage(name, null, 16, 16)
        const layer = this.map.createBlankLayer('layer1', this.tiles)
        layer.randomize(0, 0, this.map.width, this.map.height, [0, 1])
    }

    initCharacter = (name: string) => {
        // Initialize sprite-based character so player exists
        this.character = this.add.sprite(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            name
        )
        this.character.setScale(0.1, 0.1) // Make character a reasonalbe size (vs the whole screen)
    }
}
