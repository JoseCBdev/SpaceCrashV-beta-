import Firstscene from './scenes/Firstscene.js'

const config = {

    title: 'SpaceCrash - SpaceRunners',
    url: 'https://www.RackGames/Html5Games/',
    version: '0.0.1',

    pixelArt: true,

    type: Phaser.AUTO,
    width: 360,
    height: 640,
    parent: 'container',
    backgroundColor: '#1b2632',

    banner: {
        hidePhaser: true,
        text: '#000000',

        background: [
            'red',
            'yellow',
            'red',
            'trasparent'
        ]
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        } 
    },

    scene: [Firstscene]
};

const game = new Phaser.Game(config);