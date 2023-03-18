console.log('json loaded')

class Game {
  constructor(player,) {
    this.player = player;
    this.interval = undefined;

    const background = new Image();
    background.src = 'https://st3.depositphotos.com/29384342/35129/v/450/depositphotos_351298026-stock-illustration-old-game-background-classic-retro.jpg'
    this.background = background

    const mushroom = new PlayerHelp (50, 50, '/images/mario-mushroom.png', 490, 600)
    this.mushroom = mushroom;
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

    this.checkColisionMushroom()

    this.checkGameOver();
    
  }

  checkGameOver = () => {
    // colision with the borders
    if (
      this.player.headRight() > canvas.clientWidth || 
      this.player.headLeft() < 0 ||
      this.player.headUp() < 0 ||
      this.player.headDown() > canvas.clientHeight
      ) 
      {
        this.stop();
        ctx.font = '30px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText('GAME OVER', 150, 150)
    }
  }

  checkColisionMushroom = () => {
    /* addEventListenera
     this.bottom() < component.top() || 
      this.top() > component.bottom() || 
      this.right() < component.left() ||
      this.left() > component.right()
    a§ */

    if (
      !(this.player.headRight() < this.mushroom.helpLeft() || 
      this.player.headLeft() > this.mushroom.helpRight() ||
      this.player.headUp() > this.mushroom.helpDown() ||
      this.player.headDown() < this.mushroom.helpUp())

      // this.player.headArea() === this.mushroom.helpArea()
    )
    {
      this.mushroom.randomMushroom();
    }
    else {
      this.mushroom.drawMushroom()
    }
  }

}