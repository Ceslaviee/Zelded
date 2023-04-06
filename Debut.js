class Debut extends Phaser.Scene {

    constructor() {
        super("Debut");
    }
    preload() {
        this.load.image("Phaser_tuilesdejeu", "assets/photo.png");
        this.load.tilemapTiledJSON("Jardin", "assets/Ville.json");
        this.load.tilemapTiledJSON("playa", "assets/plage.json");
        this.load.tilemapTiledJSON("Grotte", "assets/Grotte.json");

        this.load.spritesheet('perso', 'assets/personne.png',
            { frameWidth: 120, frameHeight: 150 });
    }
    create() {
        this.carteDuNiveau = this.add.tilemap("Jardin");
        this.tileset = this.carteDuNiveau.addTilesetImage(
            "photo",
            "Phaser_tuilesdejeu"
        );
        const calque_Ville = this.carteDuNiveau.createLayer(
            "Ville",
            this.tileset
        );
        calque_Ville.setCollisionByProperty({ Dur: true })

        const calque_Change = this.carteDuNiveau.createLayer(
            "Change",
            this.tileset
        );
        calque_Change.setCollisionByProperty({ Dur: true })
        calque_Change.setVisible(false)

        this.player = this.physics.add.sprite(100, 1200, 'perso').setScale(1.3);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, calque_Ville);
        this.physics.add.collider(this.player, calque_Change, this.switchPlage, null, this);
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
    switchPlage() 
    {
        this.scene.start("class2");
    }
};
