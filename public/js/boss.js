let bossState = {
    create: () => {

        
        this.blob = game.add.sprite(150, 50, 'blob')
        this.blob.animations.add('grow', [0, 1, 2, 3, 4])
        this.blob.animations.add('wave', [4, 5])
        //this.blob.animations.play('wave', 8, true)
        this.blob.animations.play('grow', 4)
        //this.blob.animations.play('wave', 4, true)

        // game.add.tween(this.blob).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);
        
        let bossToPlayLabel = game.add.text(0, 0,
            'BOSS BATTLE',
             {font: '50px Arial', fill: '#00FF00'})

        let restartLabel = game.add.text(10, game.world.height-40,
        'press the Enter key to continue',
            {font: '25px Arial', fill: '#00FF00'})

        let bPKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        bPKey.onDown.addOnce(bossPlay, this);
    }
}

let bossPlay = () => {
    return game.state.start('play')
}




 //  Our two animations, walking left and right.
// player.animations.add('left', [0, 1, 2, 3], 10, true);
// player.animations.add('right', [5, 6, 7, 8], 10, true);

