import Phaser from './phaser';
import './style.css';



const config = {
  type: Phaser.WEBGL,
  width: 600,
  height: 550,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    StartScreen,
    MainScene,
    GameOver,
    Score,
  ],
  pixelArt: true,
  roundPixels: true,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);