let bootState = {

    create: () => {

        

        //starts the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE)

        //call load state
        game.state.start('load')

    }
}