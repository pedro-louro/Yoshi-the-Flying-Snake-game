class Enemy {
  constructor(width, height, imageURL, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imageURL = imageURL;
    this.newX = x;
    this.newY = y;
    this.speed = 1
    this.imageSource = 1;
    this.imageCounter = 0;

    const imgEnemy = new Image()
    imgEnemy.src = this.imageURL
    imgEnemy.addEventListener('load', () => {
      // once the image is loaded, draw it
      ctx.drawImage(this.imgEnemy, this.x, this.y, this.width, this.height);
    })
    this.imgEnemy = imgEnemy
  }


  draw = () => {
    ctx.drawImage(this.imgEnemy, this.x, this.y, this.width, this.height)
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

  moveHorizontal = () => {
    if (this.enemyRight() > canvas.clientWidth) {
      this.x += this.speed
      this.speed = -1;
    }
    else if (this.enemyLeft() < 0) {
      this.x += this.speed
      this.speed = 1
    }
    this.x += this.speed
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