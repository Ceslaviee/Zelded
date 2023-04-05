class class2 extends Phaser.Scene {
    constructor() {
        super("class2");
    }
    preload() { }

    create() {
        this.carteDuNiveau = this.add.tilemap("playa");
        this.tileset = this.carteDuNiveau.addTilesetImage("photo", "Phaser_tuilesdejeu");
        this.calque_Plage = this.carteDuNiveau.createLayer("Plage", this.tileset);
        this.calque_Chien = this.carteDuNiveau.createLayer("Chien", this.tileset);


        this.player = this.physics.add.sprite(800, 200, 'perso').setScale(1.3);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.calque_Plage, null, this);
        this.physics.add.collider(this.player, this.calque_Chien,);
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