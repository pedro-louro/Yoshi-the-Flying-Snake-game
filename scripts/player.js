
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
    
    this.addWidth = 20
    this.addHeigth = 20


    // const initialImg = new Image()
    // initialImg.src = this.imageURL
    // this.initialImg = initialImg
    
    const initialImgRight = new Image()
    initialImgRight.src = '/images/yoshi-right.png'
    this.initialImgRight = initialImgRight

    const initialImgLeft = new Image()
    initialImgLeft.src = '/images/yoshi-left.png'
    this.initialImgLeft = initialImgLeft

    const initialImgUp = new Image()
    initialImgUp.src = '/images/yoshi-up.png'
    this.initialImgUp = initialImgUp

    const initialDown = new Image()
    initialDown.src = '/images/yoshi-down.png'
    this.initialDown = initialDown

    // const snakeTail = new Image()
    // snakeTail.src = ''
    // this.snakeTail = snakeTail

    const snakeTailRight = new Image()
    snakeTailRight.src = '/images/yoshi-tail-right.png'
    this.snakeTailRight = snakeTailRight

    const snakeTailLeft = new Image()
    snakeTailLeft.src = '/images/yoshi-tail-left.png'
    this.snakeTailLeft = snakeTailLeft

    const snakeTailUp = new Image()
    snakeTailUp.src = '/images/yoshi-tail-up.png'
    this.snakeTailUp = snakeTailUp

    const snakeTailDown = new Image()
    snakeTailDown.src = '/images/yoshi-tail-down.png'
    this.snakeTailDown = snakeTailDown
    
    snakeTailRight.addEventListener('load', () => {
      ctx.drawImage(this.initialImgRight, this.x, this.y, this.width, this.height);
    })

    snakeTailRight.addEventListener('load', () => {
      ctx.drawImage(this.snakeTailRight, this.x, this.y, this.width, this.height);
    })

  }
  
  drawHead = () => {
    this.snakeHead.x = this.newX
    this.snakeHead.y = this.newY

    switch (this.currentDirection) {
      case 'up':
        // this.initialImg.src = '/images/yoshi-up.png'
        ctx.drawImage(this.initialImgUp, this.snakeHead.x, this.snakeHead.y, this.width, this.height)
        break;
      case 'down':
        // this.initialImg.src = '/images/yoshi-down.png'
        ctx.drawImage(this.initialDown, this.snakeHead.x, this.snakeHead.y, this.width, this.height)
        break;
      case 'left':
        // this.initialImg.src = '/images/yoshi-left.png'
        ctx.drawImage(this.initialImgLeft, this.snakeHead.x, this.snakeHead.y, this.width, this.height)
        break;
      case 'right':
        // this.initialImg.src = '/images/yoshi-right.png'
        ctx.drawImage(this.initialImgRight, this.snakeHead.x, this.snakeHead.y, this.width, this.height)
        break;
      case '':
        ctx.drawImage(this.initialImgRight, this.snakeHead.x, this.snakeHead.y, this.width, this.height)
        break;
    }
  
    // ctx.drawImage(this.initialImg, this.snakeHead.x, this.snakeHead.y, this.width, this.height)
  }


  draw = () => {    
    // switch (this.currentDirection) {
    //   case 'up':
    //     this.snakeTail.src = '/images/yoshi-tail-up.png'
    //     break;
    //   case 'down':
    //     this.snakeTail.src = '/images/yoshi-tail-down.png'
    //     break;
    //   case 'left':
    //     this.snakeTail.src = '/images/yoshi-tail-left.png'
    //     break;
    //   case 'right':
    //     this.snakeTail.src = '/images/yoshi-tail-right.png'
    //     break;    
    // }

    this.snakeArray[0].x = this.newX
    this.snakeArray[0].y = this.newY

    let previousX = this.snakeArray[0].x
    let previousY = this.snakeArray[0].y
    
    for (let i = 1; i < this.snakeArray.length; i++) {
      let currentX = this.snakeArray[i].x;
      let currentY = this.snakeArray[i].y;
      
      this.snakeArray[i].x = previousX;
      this.snakeArray[i].y = previousY;
      previousX = currentX;
      previousY = currentY;
    }

    this.snakeArray.forEach(element => {
      switch (this.currentDirection) {
        case 'up':
          // this.snakeTail.src = '/images/yoshi-tail-up.png'
          ctx.drawImage(this.snakeTailUp, element.x, element.y, this.width, this.height)
          break;
        case 'down':
          // this.snakeTail.src = '/images/yoshi-tail-down.png'
          ctx.drawImage(this.snakeTailDown, element.x, element.y, this.width, this.height)
          break;
        case 'left':
          // this.snakeTail.src = '/images/yoshi-tail-left.png'
          ctx.drawImage(this.snakeTailLeft, element.x, element.y, this.width, this.height)
          break;
        case 'right':
          // this.snakeTail.src = '/images/yoshi-tail-right.png'
          ctx.drawImage(this.snakeTailRight, element.x, element.y, this.width, this.height)
          break;    
      }
      // ctx.drawImage(this.snakeTail, element.x, element.y, this.width, this.height)
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

