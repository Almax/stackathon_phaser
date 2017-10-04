

let playState = {
    create: () => {

        //bg
        this.bg = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'mirrorbg')
        this.keyboard = game.input.keyboard;

        //ship
        this.player = game.add.sprite(game.world.width - 120, 100, 'ship')
        game.physics.enable(this.player, Phaser.Physics.ARCADE)

        //win
        this.win = game.add.sprite(game.world.width - 50, 20, 'star')
        game.physics.enable(this.win, Phaser.Physics.ARCADE)

        //monster
        this.monster = game.add.sprite(0, 30, 'monster')
        game.physics.enable(this.monster, Phaser.Physics.ARCADE)
        this.monster.animations.add('swipe')
        this.monster.animations.play('swipe', 15, true)
        
        //game borders
        this.borders = game.add.group()
        this.borders.enableBody = true;

        this.borderBottom = borders.create(0, game.world.height - 200);
        this.borderBottom.scale.setTo(game.world.width, .01);
        this.borderBottom.body.immovable = true;

        this.borderUp = borders.create(0, 0);
        this.borderUp.scale.setTo(game.world.width, .01);
        this.borderUp.body.immovable = true;

        this.borderLeft = borders.create(0, 0);
        this.borderLeft.scale.setTo(.01, game.world.height);
        this.borderLeft.body.immovable = true;

        this.borderRight = borders.create(game.world.width, 0);
        this.borderRight.scale.setTo(.01, game.world.height);
        this.borderRight.body.immovable = true;

        
        
    },

    update: () => {

        let Lose =  () => {
            game.state.start('lose')
        }

        let Win = () => {
            game.state.start('win')
        }

        
        
        //sprites and interaction with borders
        let hitBorder = game.physics.arcade.collide(this.player, this.borders)
        let monsterBorder = game.physics.arcade.collide(this.monster, this.borders)
        game.physics.arcade.overlap(this.player, this.win, Win, null, this);
        game.physics.arcade.collide(this.player, this.monster, Lose, null, this);

        this.keyboard.isDown(Phaser.Keyboard.A) ?
        this.player.body.velocity.x = -175 :
        this.keyboard.isDown(Phaser.Keyboard.D) ?
        this.player.body.velocity.x = 175 :
        this.player.body.velocity.x = 0;

        this.keyboard.isDown(Phaser.Keyboard.W) ?
        this.player.body.velocity.y = -175 :
        this.keyboard.isDown(Phaser.Keyboard.S) ?
        this.player.body.velocity.y = 175 :
        this.player.body.velocity.y = 0

        //arrow keys - monster

        this.keyboard.isDown(Phaser.Keyboard.LEFT) ?
        this.monster.body.velocity.x = -175 :
        this.keyboard.isDown(Phaser.Keyboard.RIGHT) ?
        this.monster.body.velocity.x = 175 :
        this.monster.body.velocity.x = 0;

        this.bg.tilePosition.x -= 2
        
        }
    }

