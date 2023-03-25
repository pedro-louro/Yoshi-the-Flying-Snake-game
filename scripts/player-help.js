class PlayerHelp {
  constructor(width, height, imageURL, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imageURL = imageURL;
    this.newX = x;
    this.newY = y;
    this.toDrop = []

    const imgHelp = new Image()
    imgHelp.src = this.imageURL
    this.imgHelp = imgHelp
    // imgHelp.addEventListener('load', () => {
  //     ctx.drawImage(this.imgHelp, this.x, this.y, this.width, this.height);
    //  })
   }

  draw = () => {
    // this.imgHelp.addEventListener('load', () => {
      ctx.drawImage(this.imgHelp, this.x, this.y, this.width, this.height)
    // })
  }

  randomMushroom = () => {
    this.x = Math.floor(Math.random() * (canvas.clientWidth - this.width))
    this.y = Math.floor(Math.random() * (canvas.clientHeight - this.height))
    this.draw()
  }

  randomX = () => {
    this.x = Math.floor(Math.random() * (canvas.clientWidth - this.width))
  }
  randomY = () => {
    this.x = Math.floor(Math.random() * (canvas.clientWidth - this.width))
  }

  drop = () => {
    console.log(this.toDrop)
    this.toDrop.forEach(drop => {
    drop[1] += 3
    this.y = drop[1]
    this.draw()
      if (drop[1] > canvas.clientHeight) {
        this.toDrop.shift()
        console.log(this.toDrop)
      }
    })
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