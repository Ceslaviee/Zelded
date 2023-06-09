class class4 extends Phaser.Scene {
    constructor() {
        super("class4");
    }
    preload() { }

    create() {
        this.carteDuNiveau = this.add.tilemap("Herbage");
        this.tileset = this.carteDuNiveau.addTilesetImage("photo", "Phaser_tuilesdejeu");
        this.calque_herbes = this.carteDuNiveau.createLayer("herbes", this.tileset);
        this.calque_Ensemble = this.carteDuNiveau.createLayer("Ensemble", this.tileset);
        this.calque_Ensemble.setCollisionByProperty({ Dur: true })


        this.player = this.physics.add.sprite(1344, 1458, 'perso').setScale(1.3);
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.calque_herbes);
        this.physics.add.collider(this.player, this.calque_Ensemble);
        this.physics.world.setBounds(0, 0, 1600, 1600);
        this.cameras.main.setBounds(0, 0, 1600, 1600);
        this.cameras.main.startFollow(this.player);


    }
    update() {
        if (this.cursors.left.isDown && this.cursors.down.isDown) {
            this.player.setVelocityX(-260); //alors vitesse négative en X
            this.player.setVelocityY(260);
            this.player.anims.play('de_face', true);
        }
        else if (this.cursors.right.isDown && this.cursors.down.isDown) {
            this.player.setVelocityX(260); //alors vitesse négative en X
            this.player.setVelocityY(260);
            this.player.anims.play('de_face', true);
        }
        else if (this.cursors.left.isDown && this.cursors.up.isDown) {
            this.player.setVelocityX(-260); //alors vitesse négative en X
            this.player.setVelocityY(-260);
            this.player.anims.play('de_dos', true);
        }
        else if (this.cursors.right.isDown && this.cursors.up.isDown) {
            this.player.setVelocityX(260); //alors vitesse négative en X
            this.player.setVelocityY(-260);
            this.player.anims.play('de_dos', true);
        }

        else if (this.cursors.left.isDown) { //si la touche gauche est appuyée
            this.player.setVelocityX(-260); //alors vitesse négative en X
            this.player.setVelocityY(0);
        }
        else if (this.cursors.right.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityX(260); //alors vitesse positive en X
            this.player.setVelocityY(0);
        }
        else if (this.cursors.up.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityY(-260); //alors vitesse positive en X
            this.player.setVelocityX(0);
            this.player.anims.play('de_dos', true); //et animation => droite
        }
        else if (this.cursors.down.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityY(260); //alors vitesse positive en X
            this.player.setVelocityX(0);
            this.player.anims.play('de_face', true); //et animation => droite
        }
        else { // sinon
            this.player.setVelocityY(0);
            this.player.setVelocityX(0);
        }

    }
};