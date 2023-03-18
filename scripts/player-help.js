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
    
    const randomX = Math.floor(Math.random() * canvas.clientWidth)
    const randomY = Math.floor(Math.random() * canvas.clientHeight)
    ctx.clearRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(this.imgHelp, randomX, randomY, this.width, this.height)
  }

  helpArea = () => {
    return (this.x + this.width)*(this.y + this.height)
  }

  // Idea: define each helper border to then compare with the player border for colision
  helpRight = () => {
    return this.newX + this.width;
  }
  helpLeft = () => {
    return this.newX;
  }

  helpUp = () => {
    return this.newY;
  }

  helpDown = () => {
    return this.newY + this.height;
  }

}