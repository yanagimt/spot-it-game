var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    // Load assets here, such as images or sounds
    this.load.image('spot-it-card', 'images/spot-it-card.png');
}

function create() {
    // Add game objects here, such as sprites or text
    // For now, let's just display a Spot-it card
    var spotItCard = this.add.image(400, 300, 'spot-it-card.png');
}
