let game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv') 

// { preload: preload, create: create, update: update });

game.state.add('boot', bootState)
game.state.add('load', loadState)
game.state.add('main', mainState)
game.state.add('play', playState)
game.state.add('win', winState)
game.state.add('lose', loseState)
game.state.add('boss', bossState)

game.state.start('boot');