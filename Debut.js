class Debut extends Phaser.Scene {

    constructor() {
        super("Debut");
    }
    preload() {
        this.load.image("Phaser_tuilesdejeu", "assets/photo.png");
        this.load.tilemapTiledJSON("Jardin", "assets/Ville.json");
        this.load.tilemapTiledJSON("playa", "assets/plage.json");
        this.load.tilemapTiledJSON("Grotte", "assets/Grotte.json");
        this.load.tilemapTiledJSON("Herbage", "assets/Herbage.json")

        this.load.spritesheet('perso', 'assets/sprite.png',
        { frameWidth: 32, frameHeight: 65 });
    }
    create() {
        this.carteDuNiveau = this.add.tilemap("Jardin");
        this.tileset = this.carteDuNiveau.addTilesetImage("photo","Phaser_tuilesdejeu");
        const calque_Village = this.carteDuNiveau.createLayer("Village",this.tileset);
        calque_Village.setCollisionByProperty({ Dur: true })

        const calque_Change = this.carteDuNiveau.createLayer("Change",this.tileset);
        calque_Change.setCollisionByProperty({ Dur: true })
        calque_Change.setVisible(false)

        this.player = this.physics.add.sprite(100, 1200, 'perso').setScale(1.3);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, calque_Village);
        this.physics.add.collider(this.player, calque_Change, this.switchPlage, null, this);
        this.physics.world.setBounds(0, 0, 1600, 1600);
        this.cameras.main.setBounds(0, 0, 1600, 1600);
        this.cameras.main.startFollow(this.player);

        this.anims.create({
            key: 'de_dos',
            frames: [ { key: 'perso', frame: 0 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'de_face',
            frames: [ { key: 'perso', frame: 1 } ],
            frameRate: 20
        });


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
    switchPlage() 
    {
        this.scene.start("class2");
    }
};
