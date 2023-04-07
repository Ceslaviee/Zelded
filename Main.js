class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }
    preload() {
        this.load.image("bouton", "assets/Bouton.png");
        //this.load.image("Logo", "assets/Logo.png");
        //this.load.image("TitleScreen", "assets/TitleScreen.png")
    }
    create() {
        this.add.image(400, 225, "TitleScreen");
        this.add.image(380, 120, "Logo").setScale(0.2);
        this.gameButton = this.add.image(325
            , 325, "bouton").setInteractive().setScale(0.1);
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