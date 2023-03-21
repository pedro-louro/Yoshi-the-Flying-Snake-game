
const canvas = document.getElementById('snake')
const ctx = canvas.getContext('2d')

const player = new Player(50, 50, '/images/super-mario-player.png', (canvas.clientWidth - 50) / 2, (canvas.clientHeight - 50) / 2)

const game = new Game(player)

document.addEventListener('keydown', (event) => {
  // avoid default behaviours from the browser for the arrows
  event.preventDefault();

  function keepMovement () {
    switch (event.key) {
      case 'ArrowUp':
        player.newY -=3;
        player.newX = player.x
        
        player.horizontalVelocity = 0
        player.verticalVelocity = -30

        player.currentDirection = 'up'
        break;
      case 'ArrowDown':
        player.newY += 3;
        player.newX = player.x
        
        player.horizontalVelocity = 0
        player.verticalVelocity = 30
        player.currentDirection = 'down'
        break;
      case 'ArrowLeft':
        player.newX -=3;
        player.newY = player.y
        player.horizontalVelocity = -30
        player.verticalVelocity = 0

        player.currentDirection = 'left'
        break;
      case 'ArrowRight':
        player.newX += 3;
        player.newY = player.y
        player.horizontalVelocity = 30
        player.verticalVelocity = 0

        player.currentDirection = 'right'
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
