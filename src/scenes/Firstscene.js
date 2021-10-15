var scoreBoard;
var count = 0;
class Firstscene extends Phaser.Scene{

    constructor(){
        super('Firstscene');
    }

    init(){
        this.registry.set('bg-infinite', 'active');
        this.registry.set('speed', 2);
    }

    preload(){
        this.load.path = './assets/sprites/';
        this.load.image('Background','background.png');
        this.load.image('Nave','Ship.png');
    }

    create(){
        this.doggy50 = this.add.image(144, -256, 'Background').setInteractive();
        this.doggy52 = this.add.image(144, -768, 'Background').setInteractive();

        // Creamos el personaje en la posicíon X:Ancho/2 Y:Altura y le añadimos físicas.
        this.Nave = this.physics.add.sprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height-100, 'Nave');
        
        // El personaje colisionará con los bordes del juego
        this.Nave.setCollideWorldBounds(true);

        var cursors = this.input.keyboard.createCursorKeys();
       
        scoreBoard = this.add.text(10, 10, "Km/h: 0", {fontSize: '14px', fill: '#fff'});
            

    }
    
    update(time, delta){
        var cursors = this.input.keyboard.createCursorKeys();
        
        scoreBoard.setText('Kilometros: ' + count);

        if(count >= 0 && count < 1){
            //var Speed = this.registry.get('speed');
            var Speed = 5;
            console.log(Speed);
        }else{
            if(count >= 1 && count < 2){
                
                for(var i = 0; i < 30; i++){
                    Speed = i - 1;
                    console.log(Speed);
                }
                
            }else{
                Speed = 15;
                console.log(Speed);
            }
        }

        if (cursors.left.isDown){
            this.Nave.x -= 5;
        }
        if (cursors.right.isDown){
            this.Nave.x += 5;
        }

        var Infinity = this.registry.get('bg-infinite');
        



        if(Infinity == 'active'){

            if(this.doggy50.y > 767){
                this.doggy50.y -= 511;
                this.doggy52.y -= 511;
                count += 1;
            }else{
                this.doggy50.y += Speed;
                this.doggy52.y += Speed;
            }

        }
        
    }
}

export default Firstscene;