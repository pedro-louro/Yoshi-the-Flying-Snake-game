class Game {
  constructor(player) {
    this.player = player;
    this.interval = undefined;
    this.interval1 = undefined;
    this.points = 0;
    this.status = ''
    this.defaultPlayer = player

    // TODO: add the following buttons as HTML? 
//--------------------------------------------
    const startButton = new Image();
    this.startButton = startButton;
    startButton.src = '/images/start.png';
    
    const controlsButton = new Image();
    this.controlsButton = controlsButton;
    controlsButton.src = '/images/controls-button.png';

    const arrowsImage = new Image();
    arrowsImage.src = '/images/arrows.png';
    this.arrowsImage = arrowsImage;

    const gameOver = new Image();
    this.gameOver = gameOver
    gameOver.src = '/images/game-over.png'

//--------------------------------------------

    const background = new Image();
    background.src = 'https://st3.depositphotos.com/29384342/35129/v/450/depositphotos_351298026-stock-illustration-old-game-background-classic-retro.jpg'
    this.background = background
    this.background.addEventListener('load', () => {
      ctx.drawImage(this.background, 0, 0, canvas.clientWidth, canvas.clientHeight);
    })

    const mushroom = new PlayerHelp (40, 40, '/images/mario-mushroom-2.png', 200, 400)
    this.mushroom = mushroom;

    const enemy1 = new Enemy (80, 80, '/images/turtle-fly-movement/1-removebg-preview.png', 150, 200, this.player)
    this.enemy1 = enemy1

    const enemy2 = new Enemy (50, 50, '/images/turtle-shell.png', 150, 0, this.player)
    this.enemy2 = enemy2

    const flower = new PlayerHelp (50, 50, '/images/flower.png', 200, 400)
    this.flower = flower

  }

  firstScreen = () => {
    this.drawBackground()
    this.startButton.addEventListener('load', () => { 
      ctx.font = '30px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText('Press SPACE to Start', (canvas.clientWidth/2) - 100, (canvas.clientHeight/2) - 250)
      ctx.drawImage(this.startButton, canvas.clientWidth/2 - 200, canvas.clientHeight/2 - 250)
    })
    this.arrowsImage.addEventListener('load', () => {
      ctx.drawImage(this.arrowsImage, canvas.clientWidth/2 - 75, canvas.clientHeight/2 +140, 150, 100)
    })
    this.controlsButton.addEventListener('load', () => {
      ctx.drawImage(this.controlsButton, canvas.clientWidth/2 - 75, canvas.clientHeight/2 +50, 175, 125)
    })
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
  
  // Initial updateCanvas

  // updateCanvas = () => {
  //   this.clear();
  //   this.drawBackground();
  //   this.player.move();
  //   this.player.draw();
  //   this.enemy1.moveHorizontal();
  //   this.enemy1.fly();
  //   this.enemy2.drop();
  //   this.enemy2.draw()
  //   this.checkColisionMushroom();
  //   this.checkGameOver();
  // }

  // update canvas with enemy drop:
  updateCanvas = () => {
    this.clear();
    this.drawBackground();
    this.player.move();
    this.player.draw();
    this.enemy1.moveHorizontal();
    this.enemy1.fly();
    this.enemy2.drop();
    this.flower.drop();
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
        ctx.drawImage(this.gameOver, (canvas.clientWidth / 2) - (this.gameOver.width / 2), (canvas.clientHeight / 2) - (this.gameOver.height / 2))
        this.gameOver = 'yes'
      }

    // colision with enemy
    else if (this.enemy1.enemyCollision() || this.enemy2.enemyCollision()) 
      {
        this.stop();
        ctx.drawImage(this.gameOver, (canvas.clientWidth / 2) - (this.gameOver.width / 2), (canvas.clientHeight / 2) - (this.gameOver.height / 2))
        this.gameOver = 'yes'
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
      if (this.points % 5 === 0) {
        this.enemy2.randomX()
        this.enemy2.y = 0
        this.enemy2.toDrop.push([this.enemy2.x, 0])
      }
      if (this.points % 11 === 0) {
        this.flower.randomX()
        this.flower.y = 0
        this.flower.toDrop.push([this.flower.x, 0])
        this.points += 10
      }
    }
    else {
      this.mushroom.draw()
      this.score();
    }
  }

  score = () => {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${this.points}`, 800, 50)
  }

}