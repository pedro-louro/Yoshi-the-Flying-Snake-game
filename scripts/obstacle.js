class Enemy {
  constructor(width, height, imageURL, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imageURL = imageURL;
    this.newX = x;
    this.newY = y;
    this.horizontalSpeed = 1
    this.verticalSpeed = 1
    this.imageSource = 1;
    this.imageCounter = 0;
    this.points = 0
    this.toDrop = []

    const imgEnemy = new Image()
    imgEnemy.src = this.imageURL
    // imgEnemy.addEventListener('load', () => {
    //   ctx.drawImage(this.imgEnemy, this.x, this.y, this.width, this.height);
    // })
    this.imgEnemy = imgEnemy
  }

  draw = () => {
    this.imgEnemy.addEventListener('load', () => {
      ctx.drawImage(this.imgEnemy, this.x, this.y, this.width, this.height);
    })
  }

  start = () => {
    this.interval = setInterval(this.fly, 50)
  };

  fly = () => {  
    if (this.imageSource > 8) {
      this.imageSource = 1
    }
    this.imgEnemy.src = `/images/turtle-fly-movement/${this.imageSource}-removebg-preview.png`
    ctx.drawImage(this.imgEnemy, this.x, this.y, this.width, this.height)
    this.imageCounter++
    
    if (this.imageCounter > 3) {
      this.imageCounter = 0
      this.imageSource ++
    }
    
  }
  
  random = () => {
    this.x = Math.floor(Math.random() * (canvas.clientWidth - this.width))
    this.y = Math.floor(Math.random() * (canvas.clientHeight - this.height))
  }

  randomX = () => {
    this.x = Math.floor(Math.random() * (canvas.clientWidth - this.width))
  }
  randomY = () => {
    this.x = Math.floor(Math.random() * (canvas.clientWidth - this.width))
  }

  moveHorizontal = () => {
    if (this.enemyRight() > canvas.clientWidth) {
      this.x += this.horizontalSpeed
      this.horizontalSpeed = -1;
    }
    else if (this.enemyLeft() < 0) {
      this.x += this.horizontalSpeed
      this.horizontalSpeed = 1
    }
    this.x += this.horizontalSpeed
  }

  moveVertical = () => {
    if (this.enemyDown() < canvas.clientHeight) {
      this.y += this.verticalSpeed
      this.verticalSpeed = 1;
    }
    else if (this.enemyUp() < 0) {
      this.y += this.verticalSpeed
      this.verticalSpeed = -1
    }
    this.y += this.verticalSpeed
  }

  drop = () => {
    // this.y += 3
    // this.draw()
    this.toDrop.forEach(drop => {
    drop[1] += 3
    this.y = drop[1]
    this.draw()
    console.log(this.toDrop)
    
      if (drop[1] > canvas.clientHeight) {
        this.toDrop.shift()
        console.log(this.toDrop)
      }
    })
  }
  
  enemyRight = () => {
    return this.x + this.width;
  }
  enemyLeft = () => {
    return this.x;
  }

  enemyUp = () => {
    return this.y;
  }

  enemyDown = () => {
    return this.y + this.height;
  }
}