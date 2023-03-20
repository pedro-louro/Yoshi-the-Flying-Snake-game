
class Player {
  constructor(width, height, imageURL, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imageURL = imageURL;
    this.newX = x;
    this.newY = y;
    this.snakeArray = [];
    this.currentDirection = ''


    const initialImg = new Image()
    initialImg.src = this.imageURL
    this.initialImg = initialImg    
    // img.addEventListener('load', () => {
    //   // once the image is loaded, draw it
      
    //   // ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // })
    // this.snakeArray.push([this.initialImg, this.x, this.y])
    // console.log(this.snakeArray)

  }


  
  draw = () => {    
    this.snakeArray.forEach(element => {
      ctx.drawImage(this.initialImg, element.x, element.y, this.width, this.height);
    })

  }


  // FIX MOVE
  //Images are added now, but the snake movement is not correct yet
  move = () => {

    if (this.snakeArray.length === 0) {
      this.snakeArray.push({x: this.newX, y: this.newY})
    }

    else {
      let previousX = this.snakeArray[0].x
      let previousY = this.snakeArray[0].y

      this.snakeArray[0].x = this.newX
      this.snakeArray[0].y = this.newY
      
      for (let i = 1; i < this.snakeArray.length; i++) {
        let currentX = this.snakeArray[i].x ;
        let currentY = this.snakeArray[i].y;
        switch (this.currentDirection) {
          case 'up':   
            this.snakeArray[i].x = previousX;
            this.snakeArray[i].y = previousY + 30;
          
            previousX = currentX;
            previousY = currentY +30;
            break;
          case 'down':
            this.snakeArray[i].x = previousX;
            this.snakeArray[i].y = previousY - 30;
          
            previousX = currentX;
            previousY = currentY -30;
            break;
          case 'left':
            this.snakeArray[i].x = previousX + 30;
            this.snakeArray[i].y = previousY;
          
            previousX = currentX + 30;
            previousY = currentY;
            break;
          case 'right':
            this.snakeArray[i].x = previousX -30;
            this.snakeArray[i].y = previousY;
          
            previousX = currentX -30;
            previousY = currentY;
            break;
        }
      }
      this.x = this.newX;
      this.y = this.newY;
    }
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

