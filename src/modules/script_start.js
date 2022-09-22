
let startWindow = document.querySelector('.start-window')

function animationOnOpeningStart(){
    startWindow.classList.add('displayStartWindowBlock')
}


const transitionToTheFirstLevel = () => {
    window.location.href = './first_level.html'
}

const transitionToTheSecondLevel = () => {
    window.location.href = './second_level.html'
}

const transitionToTheThirdLevel = () => {
    window.location.href = './third_level.html'
}


export {animationOnOpeningStart, transitionToTheFirstLevel, transitionToTheSecondLevel, transitionToTheThirdLevel}
