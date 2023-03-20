console.log('js loaded')

const canvas = document.getElementById('snake')
const ctx = canvas.getContext('2d')

const superMarioImage = '/images/3a9c1a03077868798ec40a61c911a28c-removebg-preview.png'

const player = new Player(50, 50, superMarioImage, (canvas.clientWidth - 50) / 2, (canvas.clientHeight - 50) / 2)

const game = new Game(player)

let currentMoveDirection = ''
document.addEventListener('keydown', (event) => {
  // avoid default behaviours from the browser for the arrows
  event.preventDefault();

  function keepMovement () {
    switch (event.key) {
      case 'ArrowUp':
        player.newY -=1;
        player.newX = player.x
        currentMoveDirection = 'up'
        break;
      case 'ArrowDown':
        player.newY += 1;
        player.newX = player.x
        currentMoveDirection = 'down'
        break;
      case 'ArrowLeft':
        player.newX -=1;
        player.newY = player.y
        currentMoveDirection = 'left'
        break;
      case 'ArrowRight':
        player.newX += 1;
        player.newY = player.y
        currentMoveDirection = 'right'
        break;
    }
    requestAnimationFrame(keepMovement);
  }
  if (event.key === 'ArrowUp' && currentMoveDirection === 'down') {
    return;
  }
  else if (event.key === 'ArrowDown' && currentMoveDirection === 'up') {
    return;
  }
  else if (event.key === 'ArrowLeft' && currentMoveDirection === 'right') {
    return;
  }
  else if (event.key === 'ArrowRight' && currentMoveDirection === 'left') {
    return;
  }
  else{
    keepMovement()
  }

});

game.start()
