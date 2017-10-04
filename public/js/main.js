

let score = 0;
let scoreText;
let counter = 0;
let timer;
let logoSprite;

//buttons
let startButton;
// let audioButton;


//audio
// let intro;
// let bool = true;

let mainState = {

    create: () => {

        game.bk = game.add.tileSprite(0,0,game.world.width,game.world.height,'space1');
        
        //glowing space background
        
        let spaceGlow = () => {
            counter ++;
            
         if(counter % 2 === 0) game.bk.loadTexture('space2')
         else if(counter % 3 === 0) game.bk.loadTexture('space3')
         else if(counter % 4 === 0) game.bk.loadTexture('space1')
        }
    
        timer = game.time.create(false);
        
            //  Set a TimerEvent to occur after .7 seconds
            timer.loop(700, spaceGlow, this);
            //game.time.events.loop(Phaser.Timer.SECOND, spaceGlow, this )
    
            //  Start the timer running
            timer.start();

            
        
        startButton = game.add.button(game.add.button(60, 350, 'start', onClickBoss, this, 2, 1, 0))
        // audioButton = game.add.button(game.add.button(700, 530, 'audioB', onClickSound, this))
    
        logoSprite = game.add.sprite(500, 280, 'title')
        
        logoSprite.anchor.setTo(0.5, 0.5);
        logoSprite.alpha = 0;
    
        //game.time.events.add(Phaser.Timer.SECOND * 10, enterPicture, this)
        game.add.tween(logoSprite).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);

        
        // intro = game.add.audio('rmIntro')
        // intro.play();
        
    },

}

//helper functions

function onClick () {
    game.state.start('play')
}

function onClickSound () {
    bool = !bool
    
}

function onClickBoss () {
    game.state.start('boss')
}







// ***CODE FROM EXAMPLE***

//  A simple background for our game
        
        //  The platforms group contains the ground and the 2 ledges we can jump on
        // platforms = game.add.group();
    
        // //  We will enable physics for any object that is created in this group
        // platforms.enableBody = true;
    
        // // Here we create the ground.
        // var ground = platforms.create(0, game.world.height - 64, 'ground');
    
        // //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        // ground.scale.setTo(2, 2);
    
        // //  This stops it from falling away when you jump on it
        // ground.body.immovable = true;
    
        // //  Now let's create two ledges
        // var ledge = platforms.create(400, 400, 'ground');
    
        // ledge.body.immovable = true;
    
        // ledge = platforms.create(-150, 250, 'ground');
    
        // ledge.body.immovable = true;

        // // The player and its settings
        // player = game.add.sprite(32, game.world.height - 150, 'dude');
    
        // //  We need to enable physics on the player
        // game.physics.arcade.enable(player);
    
        // //  Player physics properties. Give the little guy a slight bounce.
        // player.body.bounce.y = 0.2;
        // player.body.gravity.y = 300;
        // player.body.collideWorldBounds = true;
    
        // //  Our two animations, walking left and right.
        // player.animations.add('left', [0, 1, 2, 3], 10, true);
        // player.animations.add('right', [5, 6, 7, 8], 10, true);

        // cursors = game.input.keyboard.createCursorKeys();

        // stars = game.add.group();
        
        //     stars.enableBody = true;
        
        //     //  Here we'll create 12 of them evenly spaced apart
        //     for (var i = 0; i < 12; i++)
        //     {
        //         //  Create a star inside of the 'stars' group
        //         var star = stars.create(i * 70, 0, 'star');
        
        //         //  Let gravity do its thing
        //         star.body.gravity.y = 50;
        
        //         //  This just gives each star a slightly random bounce value
        //         star.body.bounce.y = 0.7 + Math.random() * 0.2;
        //     }


            // scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
// }

// function update() {

    // //  Collide the player and the stars with the platforms
    // var hitPlatform = game.physics.arcade.collide(player, platforms);
    // game.physics.arcade.collide(stars, platforms);
    
    // game.physics.arcade.overlap(player, stars, collectStar, null, this);

    // player.body.velocity.x = 0;

    // if (cursors.left.isDown)
    // {
    //     //  Move to the left
    //     player.body.velocity.x = -150;

    //     player.animations.play('left');
    // }
    // else if (cursors.right.isDown)
    // {
    //     //  Move to the right
    //     player.body.velocity.x = 150;

    //     player.animations.play('right');
    // }
    // else
    // {
    //     //  Stand still
    //     player.animations.stop();

    //     player.frame = 4;
    // }

    // //  Allow the player to jump if they are touching the ground.
    // if (cursors.up.isDown && player.body.touching.down && hitPlatform)
    // {
    //     player.body.velocity.y = -350;
    // }

    
// }

// function collectStar (player, star) {
    
//         // Removes the star from the screen
//         star.kill();
    
//         //  Add and update the score
//         score += 10;
//         scoreText.text = 'Score: ' + score;
    
//     }





