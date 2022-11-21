const board = document.querySelector('#board')
const colors = ['#d46ad0', '#cc54de', '#a954de', '#8954de', '#7054de', '#5459de', '#5459de', '#6da2de','#6dbcde', '#6dd1de']
const SQUARES_NUMBER = 462

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}

function setColor (element) {
  const color = getRandomColor()
  console.log(color)
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
  element.style.backgroundColor = 'rgb(31, 29, 29)'
  element.style.boxShadow = `0 0 2px rgb(13, 13, 13)`
}

function getRandomColor () {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}