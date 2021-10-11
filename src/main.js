import Firstscene from './scenes/Firstscene.js'

const config = {

    title: 'Titulo del juego',
    url: 'https://www.RackGames/Html5Games/',
    version: '0.0.1',

    pixelArt: true,

    type: Phaser.AUTO,
    width: 288,
    height: 512,
    parent: 'container',
    backgroundColor: '#34495e',

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

    scene: [Firstscene]
};

const game = new Phaser.Game(config);