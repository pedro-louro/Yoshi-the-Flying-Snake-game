console.log('json loaded')

// Reminder: Add Background as a method

class Game {
  constructor(player) {
    this.player = player;
    this.interval = undefined;

    const background = new Image();
    background.src = 'https://st3.depositphotos.com/29384342/35129/v/450/depositphotos_351298026-stock-illustration-old-game-background-classic-retro.jpg'
    this.background = background

  }

  start = () => {
    this.interval = setInterval(this.updateCanvas, 20)
  };

  stop = () => {
      clearInterval(this.interval);
  };

  clear = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  }

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0);
  }
  
  updateCanvas = () => {
    this.clear();

    this.drawBackground();

    this.player.move();

    this.player.draw();
  }
}