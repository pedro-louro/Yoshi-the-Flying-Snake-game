
const canvas = document.getElementById('snake')
const ctx = canvas.getContext('2d')

const player = new Player(80, 60, '/images/super-mario-player.png', (canvas.clientWidth - 50) / 2, (canvas.clientHeight - 50) / 2)

const game = new Game(player)

document.addEventListener('keydown', (event) => {
  // avoid default behaviours from the browser for the arrows
  event.preventDefault();

  function keepMovement () {
    switch (event.key) {
      case 'ArrowUp':
        player.newY -=6;
        player.newX = player.x
        player.currentDirection = 'up'

        // to test
        player.horizontalVelocity = 0
        player.verticalVelocity = -2

        player.addWidth = 0
        player.addHeigth = -20

        break;
      case 'ArrowDown':
        player.newY += 6;
        player.newX = player.x
        player.currentDirection = 'down'

        
        // to test
        player.horizontalVelocity = 0
        player.verticalVelocity = 2

        player.addWidth = 0
        player.addHeigth = 20
        break;
      case 'ArrowLeft':
        player.newX -=6;
        player.newY = player.y
        player.currentDirection = 'left'

        // to test
        player.horizontalVelocity = -2
        player.verticalVelocity = 0

        player.addWidth = -20
        player.addHeigth = 0

        break;
      case 'ArrowRight':
        player.newX += 6;
        player.newY = player.y
        player.currentDirection = 'right'

        // To Test
        player.horizontalVelocity = 2
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

game.start()
// game.enemy1.start()
