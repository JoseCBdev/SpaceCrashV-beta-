class Firstscene extends Phaser.Scene{

    constructor(){
        super('Firstscene');
    }

    init(){
        this.registry.set('bg-infinite', 'active');
        this.registry.set('speed', 3);
    }

    preload(){
        this.load.path = './assets/sprites/';
        this.load.image('Background','background-night.png');
    }

    create(){
        this.doggy50 = this.add.image(144, -288, 'Background').setInteractive();
        this.doggy52 = this.add.image(144, -800, 'Background').setInteractive();
    }
    update(time, delta){

        var Infinity = this.registry.get('bg-infinite');
        var Speed = this.registry.get('speed');

        if(Infinity == 'active'){

            this.doggy50.y += Speed;
            this.doggy52.y += Speed;

            /*if(this.doggy50.x < -144){
                this.doggy50.x += 576;
            }

            if(this.doggy52.x < -144){
                this.doggy52.x += 576;
            }*/
        }
        
    }
}

export default Firstscene;