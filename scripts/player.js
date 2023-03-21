
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

    this.horizontalVelocity = 5;
    this.verticalVelocity = 5;


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


  
  draw = () => {    
    if (this.snakeArray.length === 0) {
      this.snakeArray.push({x: this.newX, y: this.newY})
      ctx.drawImage(this.initialImg, this.newX, this.newY, this.width, this.height)
    }
    else {
      let previousX = this.snakeArray[0].x
      let previousY = this.snakeArray[0].y

      this.snakeArray[0].x = this.newX
      this.snakeArray[0].y = this.newY
      ctx.drawImage(this.initialImg, this.newX, this.newY, this.width, this.height)


      for (let i = 1; i < this.snakeArray.length; i++) {
        
        let currentX = this.snakeArray[i].x;
        let currentY = this.snakeArray[i].y;

        this.snakeArray[i].x = previousX;
        this.snakeArray[i].y = previousY;
        ctx.drawImage(this.initialImg,this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
        
        previousX = currentX;
        previousY = currentY;

        // if (currentX === previousX && currentY < previousY){
        //   this.snakeArray[i].x = previousX;
        //   this.snakeArray[i].y = previousY - 30;
        //   ctx.drawImage(this.initialImg, this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
  
        //   previousX = this.snakeArray[i].x;
        //   previousY = this.snakeArray[i].y;
        // }
        // else if (currentX === previousX && currentY > previousY){
        //   this.snakeArray[i].x = previousX;
        //   this.snakeArray[i].y = previousY + 30;
        //   ctx.drawImage(this.initialImg, this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
  
        //   previousX = this.snakeArray[i].x;
        //   previousY = this.snakeArray[i].y;
        // }
        // else if (currentX > previousX && currentY === previousY){
        //   this.snakeArray[i].x = previousX + 30;
        //   this.snakeArray[i].y = previousY;
        //   ctx.drawImage(this.initialImg,this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
  
        //   previousX = this.snakeArray[i].x;
        //   previousY = this.snakeArray[i].y;
        // }
        // else if (currentX < previousX && currentY === previousY){
        //   this.snakeArray[i].x = previousX - 30;
        //   this.snakeArray[i].y = previousY;
        //   ctx.drawImage(this.initialImg, this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
      }
    }
  }
    
    
    // ctx.drawImage(this.initialImg, this.newX, this.newY, this.width, this.height)
    // for (let i = 1; i < this.snakeArray.length; i++) {

    //   switch (this.currentDirection) {
    //     case 'up':   
    //       ctx.drawImage(this.snakeTail, this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
    //       break;
    //     case 'down':
    //       ctx.drawImage(this.snakeTail, this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
    //       break;
    //     case 'left':
    //       ctx.drawImage(this.snakeTail, this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
    //       break;
    //     case 'right':
    //       ctx.drawImage(this.snakeTail, this.snakeArray[i].x, this.snakeArray[i].y, this.width, this.height)
    //       break;
    //   }
    // }
    
    // this.snakeArray.forEach(element => {
    //   ctx.drawImage(this.initialImg, element.x, element.y, this.width, this.height);
    // })

  


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

