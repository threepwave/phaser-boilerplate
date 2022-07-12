// gameui.ts - In-game menu overlays for selecting actions / state and toggling settings/debug.

import { GameObjects } from 'phaser'

export class GameUIScene extends Phaser.Scene {
    public static Name = 'ui-scene'

    // Game objects for our ui elements
    private debugGrid!: GameObjects.Grid // Display the grid of tiles a player can move between

    // State for whether we should show UI and Grid
    //   private showUI: boolean = false; // Toggles the in-game UI on and off (default: off)
    private showDebugGrid = false // Toggles the in-game debug grid on and off (default: off)

    constructor() {
        super(GameUIScene.Name)
    }

    preload(): void {
        // Placeholder if we need to preload anything
    }

    create(): void {
        // const _createGameUI = this.createGameUI.bind(this)
        // Enable the in-game HUD
        this.createGameUI()

        // const _toggleUI = toggleUI.bind(this)
        // _debugGrid(16);

        // Draw a debug grid
        this.createDebugGrid(32)
    }

    createGameUI = () => {
        // Instantiates the in-game UI and menu players use to interact with the world
        const width = 300
        const height = 50
        this.add.rectangle(
            this.sys.game.canvas.width / 2,
            this.sys.game.canvas.height - height / 2,
            width,
            height,
            0x000000
        )

        // 0x1a65ac
    }

    toggleUI = () => {
        // Show or hide the UI menu
    }

    createDebugGrid = (size: integer) => {
        // Draw a grid so we can see the tiles at work
        this.debugGrid = this.add.grid(
            0,
            0,
            this.sys.game.canvas.width * 2,
            this.sys.game.canvas.height * 2,
            size,
            size,
            null,
            0,
            0xfffdfd0f,
            100
        )

        // Hide and disable the grid so it doesn't participate in updates
        this.debugGrid.active = false
        this.debugGrid.visible = false
    }

    toggleDebugGrid = () => {
        // Show or hide the grid
        this.debugGrid.active = !this.debugGrid.active
        this.debugGrid.visible = !this.debugGrid.visible
        console.log('showing grid')
    }
}
