class Game {
  constructor(player) {
    this.player = player;
    this.interval = undefined;
    this.interval1 = undefined;
    this.points = 0;

    const background = new Image();
    background.src = 'https://st3.depositphotos.com/29384342/35129/v/450/depositphotos_351298026-stock-illustration-old-game-background-classic-retro.jpg'
    this.background = background

    const mushroom = new PlayerHelp (40, 40, '/images/mario-mushroom-2.png', 490, 600)
    this.mushroom = mushroom;

    const enemy1 = new Enemy (80, 80, '/images/turtle-fly-movement/1-removebg-preview.png', 350, 200)
    this.enemy1 = enemy1

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

    // this.player.drawHead();

    this.player.draw();

    this.enemy1.moveHorizontal();

    this.enemy1.fly();

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
    // colision with enemy
    else if (
      !(this.player.headRight() < this.enemy1.enemyLeft() || 
      this.player.headLeft() > this.enemy1.enemyRight() ||
      this.player.headUp() > this.enemy1.enemyDown() ||
      this.player.headDown() < this.enemy1.enemyUp())
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
      this.player.snakeArray.push(
        {
          x: (player.snakeArray[this.player.snakeArray.length -1].x + player.addWidth),
          y: (player.snakeArray[this.player.snakeArray.length -1].y + player.addHeigth)
        }
      )
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