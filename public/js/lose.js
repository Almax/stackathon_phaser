let loseState = {
    
        
    
        create: () => {
    
            this.bg = game.add.tileSprite(0,0,game.world.width,game.world.height,'losescreen')
            let winLabel = game.add.text(10, 20, 'HAHA YOU LOSE', 
                                            {font: '50px Arial', fill: '#00FF00'})
            let restartLabel = game.add.text(80, game.world.height-60,
                                            'press the "W" key to restart',
                                             {font: '25px Arial', fill: '#ffffff'})
    
            let lKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    
            lKey.onDown.addOnce(restart, this);
        },
        
    
    }
    
    let restart = () => {
        return game.state.start('main')
    }