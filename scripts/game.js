
class Game {
  constructor(player) {
    this.player = player;
    this.interval = undefined;
    this.points = 0;

    const background = new Image();
    background.src = 'https://st3.depositphotos.com/29384342/35129/v/450/depositphotos_351298026-stock-illustration-old-game-background-classic-retro.jpg'
    this.background = background

    const mushroom = new PlayerHelp (40, 40, '/images/mario-mushroom-2.png', 490, 600)
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
    ctx.drawImage(this.background, 0, 0, canvas.clientWidth, canvas.clientHeight);
  }
  
  updateCanvas = () => {
    this.clear();

    this.drawBackground();

    this.player.move();

    this.player.draw();

    this.checkColisionMushroom();

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

    if (
      !(this.player.headRight() < this.mushroom.helpLeft() || 
      this.player.headLeft() > this.mushroom.helpRight() ||
      this.player.headUp() > this.mushroom.helpDown() ||
      this.player.headDown() < this.mushroom.helpUp())

    )
    {
      this.mushroom.randomMushroom();
      this.points++;
      this.score();
      this.player.snakeArray.push({x: player.x, y: player.y})

      
    }
    else {
      this.mushroom.drawMushroom()
      this.score();
    }
  }

  score = () => {
    ctx.font = '10px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${this.points}`, 500, 100)
  }

}