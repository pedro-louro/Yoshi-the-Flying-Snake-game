class PlayerHelp {
  constructor(width, height, imageURL, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imageURL = imageURL;

    const img = new Image()
    img.src = this.imageURL    
    img.addEventListener('load', () => {
      // once the image is loaded, draw it
      this.img = img
      ctx.drawImage(this.img, this.x, this.y);
    })
  }
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  } 
}

// increase the snake size by repeating the image: 
// const ptrn = ctx.createPattern(img, "repeat");
