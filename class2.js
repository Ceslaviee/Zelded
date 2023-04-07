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
        this.calque_Volcan = this.carteDuNiveau.createLayer("Volcan", this.tileset);
        this.calque_Vert = this.carteDuNiveau.createLayer("Vert", this.tileset);
        this.calque_Plage.setCollisionByProperty({ Dur: true })


        this.player = this.physics.add.sprite(30, 20, 'perso').setScale(1.3);
        this.player.setCollideWorldBounds(true);
        this.calque_Volcan.setCollisionByProperty({ Dur: true })
        this.calque_Vert.setCollisionByProperty({ Dur: true })

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.calque_Plage);
        this.physics.add.collider(this.player, this.calque_Chien);
        this.physics.add.collider(this.player, this.calque_Volcan, this.switchGrotte, null, this);
        this.physics.add.collider(this.player, this.calque_Vert, this.switchHerbe, null, this);
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
            this.player.anims.play('de_dos', true);
            
        }
        else if (this.cursors.down.isDown) { //sinon si la touche droite est appuyée
            this.player.setVelocityY(260); //alors vitesse positive en X
            this.player.setVelocityX(0);
            this.player.anims.play('de_face', true);
        }
        else { // sinon
            this.player.setVelocityY(0);
            this.player.setVelocityX(0); //vitesse nulle
            
        }
    }
    switchVillage() 
    {
        this.scene.start("Debut");
    }
    switchGrotte() 
    {
        this.scene.start("class3", { entree: 1 });
    }
    switchHerbe() 
    {
        this.scene.start("class4");
    }
};