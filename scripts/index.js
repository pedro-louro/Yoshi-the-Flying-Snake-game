
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
        player.newY -=1;
        player.newX = player.x
        player.currentDirection = 'up'
        break;
      case 'ArrowDown':
        player.newY += 1;
        player.newX = player.x
        player.currentDirection = 'down'
        break;
      case 'ArrowLeft':
        player.newX -=1;
        player.newY = player.y
        player.currentDirection = 'left'
        break;
      case 'ArrowRight':
        player.newX += 1;
        player.newY = player.y
        player.currentDirection = 'right'
        break;
    }
    requestAnimationFrame(keepMovement);
  }
  if (event.key === 'ArrowUp' && player.currentDirection === 'down') {
    return;
  }
  else if (event.key === 'ArrowDown' && player.currentDirection === 'up') {
    return;
  }
  else if (event.key === 'ArrowLeft' && player.currentDirection === 'right') {
    return;
  }
  else if (event.key === 'ArrowRight' && player.currentDirection === 'left') {
    return;
  }
  else{
    keepMovement()
  }

});

game.start()