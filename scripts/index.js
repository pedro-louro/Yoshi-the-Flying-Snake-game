console.log('js loaded')

const canvas = document.getElementById('snake')
const ctx = canvas.getContext('2d')

const superMarioImage = 'https://i.pinimg.com/originals/3a/9c/1a/3a9c1a03077868798ec40a61c911a28c.png'

const player = new Player(550, 350, superMarioImage, 50, 50)
const game = new Game(player)

document.addEventListener('keydown', (event) => {
  // avoid default behaviours from the browser for the arrows
  event.preventDefault();

  switch (event.key) {
    case 'ArrowUp':
      player.newY -=1;
      break;
    case 'ArrowDown':
      player.newY += 1;
      break;
    case 'ArrowLeft':
      player.newX -=1;
      break;
    case 'ArrowRight':
      player.newX += 1;
      break;
  }

});

game.start()

