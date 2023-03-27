class Game {
  constructor(player) {
    this.player = player;
    this.interval = undefined;
    this.interval1 = undefined;
    this.points = 0;
    this.status = ''
    this.defaultPlayer = player
    this.fallingFlowers = []
    this.level = 1

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

    const restart = new Image();
    this.restart = restart
    restart.src = '/images/restart-3.png'

    const levelUp = new Image();
    this.levelUp = this.level;
    levelUp.src = '/images/level-up.png'


//--------------------------------------------

    const background = new Image();
    background.src = 'https://st3.depositphotos.com/29384342/35129/v/450/depositphotos_351298026-stock-illustration-old-game-background-classic-retro.jpg'
    this.background = background
    this.background.addEventListener('load', () => {
      ctx.drawImage(this.background, 0, 0, canvas.clientWidth, canvas.clientHeight);
    })

    const mushroom = new PlayerHelp (40, 40, '/images/mario-mushroom-2.png', 200, 400, this.player)
    this.mushroom = mushroom;

    const enemy1 = new Enemy (80, 80, '/images/turtle-fly-movement/1-removebg-preview.png', 150, 200, this.player)
    this.enemy1 = enemy1

    const enemy2 = new Enemy (50, 50, '/images/turtle-shell.png', 150, 0, this.player)
    this.enemy2 = enemy2

    const flower = new PlayerHelp (50, 50, '/images/flower.png', 0, 0, this.player)
    this.flower = flower

    const coin = new PlayerHelp (50, 50, '/images/coin.png', 0, 0, this.player)
    this.coin = coin


  }

  firstScreen = () => {
    this.drawBackground()
    
    this.controlsButton.addEventListener('load', () => {
      ctx.drawImage(this.restart, (canvas.clientWidth / 2) - 225, (canvas.clientHeight / 2) - 200, 450, 34)
    })
    this.startButton.addEventListener('load', () => { 
      // ctx.fillText('Press SPACE to Start', (canvas.clientWidth/2) - 100, (canvas.clientHeight/2) - 250)
      ctx.drawImage(this.startButton, canvas.clientWidth/2 - 150, canvas.clientHeight/2 - 85, 300, 170)
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

  // restart = () => {
  //   this.status = ''
  //   this.points = 0
  //   this.player = this.defaultPlayer
  //   this.firstScreen()
  // }
  
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
    this.player.draw();
    this.player.move();
    this.enemy1.moveHorizontal();
    this.enemy1.fly();
    this.enemy2.drop();
    this.flower.drop();
    this.coin.drop();
    // this.dropObstacles();
    this.checkColisionMushroom();
    this.checkFlowerCollision();
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
        ctx.drawImage(this.restart, (canvas.clientWidth / 2) - 225, (canvas.clientHeight / 2) + 50, 450, 34)
        this.status = 'game over';
      }

    // colision with enemy
    else if (this.enemy1.enemyCollision() || this.enemy2.enemyCollision()) 
      {
        this.stop();
        ctx.drawImage(this.gameOver, (canvas.clientWidth / 2) - (this.gameOver.width / 2), (canvas.clientHeight / 2) - (this.gameOver.height / 2))
        ctx.drawImage(this.restart, (canvas.clientWidth / 2) - 225, (canvas.clientHeight / 2) + 50, 450, 34)
        this.status = 'game over'}
  }
  // TESTS
  checkFlowerCollision = () => {
    
   this.fallingFlowers.forEach(flower => {
     if(flower.helpCollision()) {
      this.flower.toDrop.shift()
      this.fallingFlowers.pop()
      this.points += 3
      this.score()
     } 
    })
  }

  // dropObstacles = () => {
  //   if (this.points > 1 && this.points % 5 === 0) {
  //     this.enemy2.randomX()
  //     this.enemy2.y = 0
  //     this.enemy2.toDrop.push([this.enemy2.x, 0])
  //   }
  //   else if (this.points > 1 && this.points % 6 === 0) {
  //     this.flower.randomX()
  //     this.flower.y = 0
  //     this.flower.toDrop.push([this.flower.x, 0])
  //   }
  //   else if (this.points > 1 && this.points % 7 === 0) {
  //     this.coin.randomX()
  //     this.coin.y = 0
  //     this.coin.toDrop.push([this.coin.x, this.coin.y])
  //   }
  // }

  // checkColisionMushroom = () => {

  //   if (
  //     this.mushroom.helpCollision()
  //   )
  //   {
  //     this.mushroom.randomMushroom();
  //     this.points++;
  //     this.score();
  //     this.player.snakeArray.push(
  //       {
  //         x: (player.snakeArray[this.player.snakeArray.length -1].x + player.addWidth),
  //         y: (player.snakeArray[this.player.snakeArray.length -1].y + player.addHeigth)
  //       }
  //     )
  //   }
  //   else {
  //     this.mushroom.draw()
  //     this.score();
  //   }
  // }
    // END TESTS


  
  // V1 Collision
  checkColisionMushroom = () => {

    if (
      this.mushroom.helpCollision()
    )
    {
      this.mushroom.randomMushroom();
      this.points +=1;
      this.score();
      this.player.snakeArray.push(
        {
          x: (player.snakeArray[this.player.snakeArray.length -1].x + player.addWidth),
          y: (player.snakeArray[this.player.snakeArray.length -1].y + player.addHeigth)
        }
      )
      if (this.points % 4 === 0) {
        this.enemy2.randomX()
        this.enemy2.y = 0
        this.enemy2.toDrop.push([this.enemy2.x, 0])
      }
      else if (this.points % 11 === 0) {
        this.fallingFlowers.push(this.flower)
        this.flower.randomX()
        this.flower.y = 0
        this.flower.toDrop.push([this.flower.x, 0])

      }
      else if (this.points % 6 === 0) {
        this.coin.randomX()
        this.coin.y = 0
        this.coin.toDrop.push([this.coin.x, this.coin.y])
      }
      else if (this.points % 25 === 0) {
        this.level ++
      }
    }
    // else if (this.flower.helpCollision()) {
    //   console.log(this.points)
    //   this.flower.toDrop.shift()
    //   this.points += 3
    //   console.log(this.flower.toDrop)

    // }

    else {
      this.mushroom.draw()
      this.score();
    }
  }

  score = () => {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Level ${this.level} Score: ${this.points}`, 730, 50)
  }

}