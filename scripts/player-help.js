class PlayerHelp {
  constructor(width, height, imageURL, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imageURL = imageURL;
    this.newX = x;
    this.newY = y;

    const imgHelp = new Image()
    imgHelp.src = this.imageURL
    imgHelp.addEventListener('load', () => {
      // once the image is loaded, draw it
      this.imgHelp = imgHelp
      ctx.drawImage(this.imgHelp, this.x, this.y, this.width, this.height);
    })
  }

  drawMushroom = () => {
    ctx.drawImage(this.imgHelp, this.x, this.y, this.width, this.height)
  }
  randomMushroom = () => {
    
    this.x = Math.floor(Math.random() * (canvas.clientWidth - this.width))
    this.y = Math.floor(Math.random() * (canvas.clientHeight - this.height))
    this.drawMushroom()
  }


  helpRight = () => {
    return this.x + this.width;
  }
  helpLeft = () => {
    return this.x;
  }

  helpUp = () => {
    return this.y;
  }

  helpDown = () => {
    return this.y + this.height;
  }

}