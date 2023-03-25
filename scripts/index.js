
const canvas = document.getElementById('snake')
const ctx = canvas.getContext('2d')

const player = new Player(60, 50, '/images/yoshi-right.png', (canvas.clientWidth - 50) / 2, (canvas.clientHeight - 50) / 2)

const game = new Game(player)

document.addEventListener('keydown', (event) => {
  // avoid default behaviours from the browser for the arrows
  event.preventDefault();

  if (event.key === ' ') {
    game.start()
  }

  function keepMovement () {
    switch (event.key) {
      case 'ArrowUp':
        player.newY -=6;
        player.newX = player.x
        player.currentDirection = 'up'
        player.initialImg.src = '/images/yoshi-up.png'

        // to test
        player.horizontalVelocity = 0
        player.verticalVelocity = -6

        player.addWidth = 0
        player.addHeigth = -20

        break;
      case 'ArrowDown':
        player.newY += 6;
        player.newX = player.x
        player.currentDirection = 'down'
        player.initialImg.src = '/images/yoshi-down.png'

        
        // to test
        player.horizontalVelocity = 0
        player.verticalVelocity = 6

        player.addWidth = 0
        player.addHeigth = 20
        break;
      case 'ArrowLeft':
        player.newX -=6;
        player.newY = player.y
        player.currentDirection = 'left'
        player.initialImg.src = '/images/yoshi-left.png'

        // to test
        player.horizontalVelocity = -6
        player.verticalVelocity = 0

        player.addWidth = -20
        player.addHeigth = 0

        break;
      case 'ArrowRight':
        player.newX += 6;
        player.newY = player.y
        player.currentDirection = 'right'
        player.initialImg.src = '/images/yoshi-right.png'

        // To Test
        player.horizontalVelocity = 6
        player.verticalVelocity = 0

        player.addWidth = 20
        player.addHeigth = 0
        break;
        
    }
    requestAnimationFrame(keepMovement);
  }
  if (
    event.key === 'ArrowUp' && player.currentDirection === 'down' || 
    event.key === 'ArrowUp' && player.currentDirection === 'up'
  ) {
    return;
  }
  else if (
    event.key === 'ArrowDown' && player.currentDirection === 'up' || 
    event.key === 'ArrowDown' && player.currentDirection === 'down'
  ) {
    return;
  }
  else if (
    event.key === 'ArrowLeft' && player.currentDirection === 'right' || 
    event.key === 'ArrowLeft' && player.currentDirection === 'left'
  ) {
    return;
  }
  else if (
    event.key === 'ArrowRight' && player.currentDirection === 'left' || 
    event.key === 'ArrowRight' && player.currentDirection === 'right'
    ) {
    return;
  }
  else{
    keepMovement()
  }

});
game.firstScreen()
// game.start()



