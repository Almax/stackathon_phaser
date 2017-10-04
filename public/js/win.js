let winState = {

    

    create: () => {

        this.bg = game.add.tileSprite(0,0,game.world.width,game.world.height,'winscreen')
        let winLabel = game.add.text(10, 20, 'YOU RIGGITY-RIGGITY \n WRECKED, SON!', 
                                        {font: '50px Arial', fill: '#000000'})
        let restartLabel = game.add.text(80, game.world.height-60,
                                        'press the "W" key to restart',
                                         {font: '25px Arial', fill: '#ffffff'})

        let wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wKey.onDown.addOnce(restart, this);
    },
    

}

// let restart = () => {
//     return game.state.start('main')
// }