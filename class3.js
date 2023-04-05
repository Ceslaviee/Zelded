class class3 extends Phaser.Scene {
    constructor() {
        super("class3");
    }
    preload() {

     }
    create() {
        console.log("monde 2")
        this.carteDuNiveau = this.add.tilemap("carte");
        this.tileset = this.carteDuNiveau.addTilesetImage(
            "photo",
            "Phaser_tuilesdejeu"
        );
        const calque_Sol = this.carteDuNiveau.createLayer(
            "Sol",
            this.tileset
        );

        const calque_S = this.carteDuNiveau.createLayer(
            "S",
            this.tileset
        );



        this.player = this.physics.add.sprite(100, 200, 'perso').setScale(1.3);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, calque_S);
        this.physics.world.setBounds(0, 0, 1600, 1600);
        this.cameras.main.setBounds(0, 0, 1600, 1600);
        this.cameras.main.startFollow(this.player);


    }
    update() {
        if (this.cursors.left.isDown) { //si la touche gauche est appuyée
            this.player.setVelocityX(-160); //alors vitesse négative en X
            this.player.setVelocityY(0);
            this.player.anims.play('left', true); //et animation => gauche
        }
        else if (this.cursors.right.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityX(160); //alors vitesse positive en X
            this.player.setVelocityY(0);
            this.player.anims.play('right', true); //et animation => droite
        }
        else if (this.cursors.up.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityY(-160); //alors vitesse positive en X
            this.player.setVelocityX(0);
            this.player.anims.play('right', true); //et animation => droite
        }
        else if (this.cursors.down.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityY(160); //alors vitesse positive en X
            this.player.setVelocityX(0);
            this.player.anims.play('right', true); //et animation => droite
        }
        else { // sinon
            this.player.setVelocityY(0);
            this.player.setVelocityX(0); //vitesse nulle
            this.player.anims.play('turn'); //animation fait face caméra
        }


    }
};
