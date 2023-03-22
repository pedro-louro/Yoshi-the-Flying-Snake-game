
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
    // img.addEventListener('load', () => {
    //   // once the image is loaded, draw it
      
    //   // ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // })
    // this.snakeArray.push([this.initialImg, this.x, this.y])
    // console.log(this.snakeArray)

    // const snakeTail = new Image()
    // snakeTail.src = '/images/snake-tail.png'
    // this.snakeTail = snakeTail  

  }

  // testMovement = () => {
  //   this.snakeArray[0].x = this.newX
  //   this.snakeArray[0].y = this.newY
    
  //   for (let i = 1; i < this.snakeArray.length; i++) {
  //     this.snakeArray[i].x = this.snakeArray[i-1].x + this.horizontalVelocity
  //     this.snakeArray[i].y = this.snakeArray[i-1].y + this.verticalVelocity
  //   }

  //   this.snakeArray.forEach(element => {
  //     // console.log(element)
  //     ctx.drawImage(this.initialImg, element.x, element.y, this.width, this.height)
  //   })
  // }

  drawHead = () => {
    // Initial Idea for drawing Head (static image)
    this.snakeHead.x = this.newX
    this.snakeHead.y = this.newY
    ctx.drawImage(this.initialImg, this.snakeHead.x, this.snakeHead.y, this.width, this.height)

    // USE FOR MOVING IMAGES

    // if (this.imageSource > 8) {
    //     this.imageSource = 1
    //   }
    //   this.initialImg.src = `/images/mario-fly/mario${this.imageSource}.png`
    //   ctx.drawImage(this.initialImg, this.snakeHead.x, this.snakeHead.y, this.width, this.height)
    //   this.imageCounter++
      
    //   if (this.imageCounter > 5) {
    //     this.imageCounter = 0
    //     this.imageSource ++
    //   }
      
  }
  
  draw = () => {    
    // Head to the right Position when moves
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
      // console.log(element)
      // ctx.drawImage(this.initialImg, this.newX, this.newY, this.width, this.height)
      this.drawHead()
      ctx.drawImage(this.initialImg, element.x, element.y, this.width, this.height)
    })
    
    // Initial Version: 

    // if (this.snakeArray.length === 0) {
    //   this.snakeArray.push({x: this.newX, y: this.newY})
    //   ctx.drawImage(this.initialImg, this.newX, this.newY, this.width, this.height)
    // }
    // else {
    //   
    //   

    //   this.snakeArray[0].x = this.newX
    //   this.snakeArray[0].y = this.newY
    //   ctx.drawImage(this.initialImg, this.newX, this.newY, this.width, this.height)


    //   for (let i = 1; i < this.snakeArray.length; i++) {

    //     let currentX = this.snakeArray[i].x;
    //     let currentY = this.snakeArray[i].y;

    //     this.snakeArray[i].x = previousX;
    //     this.snakeArray[i].y = previousY;
    //     ctx.drawImage(this.initialImg,this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
        
    //     previousX = currentX;
    //     previousY = currentY;

    //   }
    // }

    
  }

  


  // FIX MOVE
  //Images are added now, but the snake movement is not correct yet
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

