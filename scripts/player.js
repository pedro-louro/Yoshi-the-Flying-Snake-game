
class Player {
  constructor(width, height, imageURL, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imageURL = imageURL;
    this.newX = x;
    this.newY = y;

    const img = new Image()
    img.src = this.imageURL    
    img.addEventListener('load', () => {
      // once the image is loaded, draw it
      this.img = img
      // ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    })
  }

  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

  headArea = () => {
    return (this.newX + this.width)*(this.newY + this.height)
  }
}

