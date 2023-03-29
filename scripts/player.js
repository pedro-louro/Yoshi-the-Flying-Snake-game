
class Player {
  constructor(width, height, imageURL, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imageURL = imageURL;
    this.newX = x;
    this.newY = y;
    this.snakeHead = {x: x, y: y}
    this.snakeArray = [{x: x - width, y: y}];
    this.currentDirection = ''

    // for drawing moving player
    this.imageSource = 1;
    this.imageCounter = 0;

    // for testing
    this.horizontalVelocity = 3;
    this.verticalVelocity = 3;

    this.addWidth = 20
    this.addHeigth = 20

    // Test ends
    const initialImg = new Image()
    initialImg.src = this.imageURL
    this.initialImg = initialImg

    const snakeTail = new Image()
    snakeTail.src = ''
    this.snakeTail = snakeTail
    
    initialImg.addEventListener('load', () => {
      // ctx.drawImage(this.initialImg, this.x, this.y, this.width, this.height);
    })

    snakeTail.addEventListener('load', () => {
      // ctx.drawImage(this.snakeTail, this.x, this.y, this.width, this.height);
    })
    // this.snakeArray.push([this.initialImg, this.x, this.y])
    // console.log(this.snakeArray)

    // const snakeTail = new Image()
    // snakeTail.src = '/images/snake-tail.png'
    // this.snakeTail = snakeTail  

  }
  
  drawHead = () => {
    this.snakeHead.x = this.newX
    this.snakeHead.y = this.newY

    switch (this.currentDirection) {
      case 'up':
        this.initialImg.src = '/images/yoshi-up.png'
        break;
      case 'down':
        this.initialImg.src = '/images/yoshi-down.png'
        break;
      case 'left':
        this.initialImg.src = '/images/yoshi-left.png'
        break;
      case 'right':
        this.initialImg.src = '/images/yoshi-right.png'
        break;    
    }
  
    ctx.drawImage(this.initialImg, this.snakeHead.x, this.snakeHead.y, this.width, this.height)
  }


  draw = () => {    
    switch (this.currentDirection) {
      case 'up':
        this.snakeTail.src = '/images/yoshi-tail-up.png'
        break;
      case 'down':
        this.snakeTail.src = '/images/yoshi-tail-down.png'
        break;
      case 'left':
        this.snakeTail.src = '/images/yoshi-tail-left.png'
        break;
      case 'right':
        this.snakeTail.src = '/images/yoshi-tail-right.png'
        break;    
    }

    this.snakeArray[0].x = this.newX
    this.snakeArray[0].y = this.newY

    let previousX = this.snakeArray[0].x
    let previousY = this.snakeArray[0].y
    
    for (let i = 1; i < this.snakeArray.length; i++) {
      let currentX = this.snakeArray[i].x;
      let currentY = this.snakeArray[i].y;
/*       this.snakeArray[i].x = this.snakeArray[i-1].x + this.horizontalVelocity
      this.snakeArray[i].y = this.snakeArray[i-1].y + this.verticalVelocity */
      
      this.snakeArray[i].x = previousX;
      this.snakeArray[i].y = previousY;
      previousX = currentX;
      previousY = currentY;
    }

    this.snakeArray.forEach(element => {
      ctx.drawImage(this.snakeTail, element.x, element.y, this.width, this.height)
    })
    this.drawHead()
  }

  move = () => {
    
    this.x = this.newX;
    this.y = this.newY;
  }

  headRight = () => {
    return this.newX + this.width;
  }

  headLeft = () => {
    return this.newX;
  }

  headUp = () => {
    return this.newY;
  }

  headDown = () => {
    return this.newY + this.height;
  }

}

