
let loadState= {

    preload: () => {

        //mainState
        game.load.image('space1', 'assets/space1.png');
        game.load.image('space2', 'assets/space2.png');
        game.load.image('space3', 'assets/space3.png');
        game.load.image('title', 'assets/rmlogo.png');
        game.load.image('audioB', 'assets/audio-button.png')
        game.load.spritesheet('start', 'assets/start.png', 150, 54 );
        
        //chrome having issues with audio; commented for now
        //game.load.audio('rmIntro', ['assets/rmintro.mp3'])

    
        game.load.image('ground', 'assets/platform.png');

        //boss
        game.load.spritesheet('blob', 'assets/meeseeks-blob-spritesheet-512-final.png', 512, 512);
        
        //play.js
        game.load.image('mirrorbg', 'assets/mirrorbggame.png')
        game.load.image('sky', 'assets/burning_background.png');
        game.load.image('star', 'assets/star.png');
        game.load.image('ship', 'assets/rick_ship.png');
        game.load.image('meeseeks-fight', 'assets/meeseeks-fighting.png');
        game.load.image('rick-angry', 'assets/rick_angry_ship.png');
        game.load.spritesheet('monster', 'assets/meeseeks-monster-spritesheet-380.png', 380, 380);
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);


        //winscreen and losescreen
        game.load.image('winscreen', 'assets/jerry-win.jpg')
        game.load.image('losescreen', 'assets/winscreen.png');
    },

    create: () => {
        game.state.start('main')

    }
}