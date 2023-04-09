class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }
    preload() {
        this.load.image("bouton", "assets/Bouton.png");
        this.load.image("TitleScreen", "assets/Titre Menu.png")
    }
    create() {
        this.add.image(400, 225, "TitleScreen").setScale(0.25);
        this.gameButton = this.add.image(385,325,"bouton").setInteractive().setScale(0.1);
        this.gameButton.on("pointerdown", this.launchGame, this);
    }
    update() {}
    launchGame(){
        console.log("Launch Game");
        this.scene.start('Debut', {
            porteMonnaie : 0,
        });
    }
}