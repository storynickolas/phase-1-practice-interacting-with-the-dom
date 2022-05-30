
//Initialize Count and Start Counter
let count = 0
let go = setInterval(counter, 1000);

function counter () {
  count++
  document.getElementById('counter').textContent = count
  return count
}


//Add Functions to Buttons
document.getElementById('minus').addEventListener('click' , minus)
document.getElementById('plus').addEventListener('click' , plus)
document.getElementById('pause').addEventListener('click' , startStop)
document.getElementById('heart').addEventListener('click' , heart)


//Add and Subtract
function plus () {
  count++
  document.getElementById('counter').textContent = count
  return count
}

function minus () {
  count--
  document.getElementById('counter').textContent = count
  return count
}

//Like
let prevCount = 0
let likes
let lnum = 0

function heart () {
  if (count === 0 && lnum === 0) {
    likes = 1;
    prevCount = count
    let newP = document.createElement('li')
    newP.setAttribute('id', 0)
    newP.textContent = `${count} has been liked ${likes} time`
    document.querySelector('ul').append(newP)
  }
  else if (count !== prevCount) {
    likes = 1;
    prevCount = count
    let newP = document.createElement('li')
    newP.setAttribute('id', prevCount)
    newP.textContent = `${count} has been liked ${likes} time`
    document.querySelector('ul').append(newP)
  }
  else {
    likes++
    document.getElementById(count).textContent = `${count} has been liked ${likes} times`
  }
  lnum++
}


//Pause and Resume
let truthy = false

function toggleGo() {
  !truthy ? go = setInterval(counter, 1000) : clearInterval(go)
}

function toggleDisable() {
  truthy = !truthy
  document.getElementById('plus').disabled = truthy
  document.getElementById('minus').disabled = truthy
  document.getElementById('heart').disabled = truthy
  return truthy
}

function startStop () {
  let content = document.getElementById('pause').textContent
  if(content === ' pause ') {
    document.getElementById('pause').textContent = ' resume '
    toggleDisable()
    toggleGo()
  }
  else {
    document.getElementById('pause').textContent = ' pause '
    toggleDisable()
    toggleGo()
  }
  
}

//Add Comment
document.getElementById('submit').addEventListener(
  'click' , submit)

let pNum = 0

function submit(e) {
  pNum++
  let newP = document.createElement('p')
  newP.setAttribute('id', pNum)
  newP.textContent = document.getElementById('comment-input').value
  document.getElementById('list').append(newP)
  document.getElementById('comment-input').value = ''
  e.preventDefault()
}
