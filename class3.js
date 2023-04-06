class class3 extends Phaser.Scene {
    constructor() {
        super("class3");
    }
    preload() {

     }
    create() {
        this.carteDuNiveau = this.add.tilemap("Grotte");
        this.tileset = this.carteDuNiveau.addTilesetImage("photo","Phaser_tuilesdejeu");
        this.calque_Sol = this.carteDuNiveau.createLayer("Sol",this.tileset);
        this.calque_Murs = this.carteDuNiveau.createLayer("Murs",this.tileset);
        this.calque_EntreeJaune = this.carteDuNiveau.createLayer("EntreeJaune",this.tileset);
        this.calque_EntreeVerte = this.carteDuNiveau.createLayer("EntreeVerte",this.tileset);
        this.calque_Murs.setCollisionByProperty({ Dur: true })


        this.player = this.physics.add.sprite(100, 200, 'perso').setScale(1.3);
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.calque_Sol);
        this.physics.world.setBounds(0, 0, 1600, 1600);
        this.cameras.main.setBounds(0, 0, 1600, 1600);
        this.cameras.main.startFollow(this.player);


    }
    update() {
        if (this.cursors.left.isDown && this.cursors.down.isDown) {
            this.player.setVelocityX(-260); //alors vitesse négative en X
            this.player.setVelocityY(260);
        }
        else if (this.cursors.right.isDown && this.cursors.down.isDown) {
            this.player.setVelocityX(260); //alors vitesse négative en X
            this.player.setVelocityY(260);
        }
        else if (this.cursors.left.isDown && this.cursors.up.isDown) {
            this.player.setVelocityX(-260); //alors vitesse négative en X
            this.player.setVelocityY(-260);
        }
        else if (this.cursors.right.isDown && this.cursors.up.isDown) {
            this.player.setVelocityX(260); //alors vitesse négative en X
            this.player.setVelocityY(-260);
        }

        else if (this.cursors.left.isDown) { //si la touche gauche est appuyée
            this.player.setVelocityX(-260); //alors vitesse négative en X
            this.player.setVelocityY(0);
            this.player.anims.play('left', true); //et animation => gauche
        }
        else if (this.cursors.right.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityX(260); //alors vitesse positive en X
            this.player.setVelocityY(0);
            this.player.anims.play('right', true); //et animation => droite
        }
        else if (this.cursors.up.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityY(-260); //alors vitesse positive en X
            this.player.setVelocityX(0);
            this.player.anims.play('right', true); //et animation => droite
        }
        else if (this.cursors.down.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityY(260); //alors vitesse positive en X
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
