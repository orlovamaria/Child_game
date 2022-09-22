let firstLevelSecondTaskWrapper = document.querySelector('.firstLevel-secondTask-wrapper')

function animationOnOpening1(){
    firstLevelSecondTaskWrapper.classList.add('displayStartWindowBlock')
}

animationOnOpening1()



let firstLevelButton = document.querySelector('.first-level-button');
let firstLevelBody = document.querySelector('.first-level-body')
let levelsStartWindow = document.querySelector('.levels-start-window')
let firstLevelBodyInfBlock = document.querySelector('.first-level-body-infBlock')

let jsElem = document.querySelectorAll('.js-elem')
let elemDrags = document.querySelectorAll('.elem-drag')

let brownSquare = document.querySelector('.brown-square')
let firstGreenTriangle = document.querySelector('.firstGreenTriangle')
let secondGreenTriangle = document.querySelector('.secondGreenTriangle')
let popupDoneCorrectly = document.getElementById('popup_done_correctly')
let firstLevelBodyDoneButton = document.querySelector('.first-level-body-done-button')
let popupDoneIncorrectly = document.querySelector('#popup_done_incorrectly')


let firstLevelSecondTaskInfblock = document.querySelector('#firstLevel-secondTask-infblock');
let firstLevelBodySecondTask = document.querySelector('.first-level-body-secondTask')
let firstLevelBodySecondTaskDoneButton = document.querySelector('#first-level-body-secondTask-doneButton')

function dragAndDropFirstTask(){
    let activeElement;
    elemDrags.forEach(function(elemDrag){
        elemDrag.addEventListener('dragstart', function(event){
            activeElement = event.target; 
            setTimeout(function(){
                elemDrag.style.display = 'none'
            }, 0)
        })
        elemDrag.addEventListener('dragend', function(){
            elemDrag.style.display = 'flex'
        })
    })
    
    jsElem.forEach(function(elem){
        elem.addEventListener('dragover', function(event){
            event.preventDefault()
        })
        elem.addEventListener('dragenter', function(event){
            elem.style.background = '#d1d8e2'
            event.preventDefault()
        })
        elem.addEventListener('dragleave', function(){
            elem.style.background = 'transparent'
        })
        elem.addEventListener('drop', function(){
            elem.append(activeElement)
            if(activeElement.classList.contains('orange-trapezoid')){
                activeElement.style.position = 'absolute'
                activeElement.style.right = '-50px'
            }
            else if(activeElement.classList.contains('blue-circle-largest')){
                activeElement.style.position = 'absolute'
                activeElement.style.right = '0px'
                activeElement.style.top = '1px'
            }
            elem.style.background = 'transparent'
        })
    })
}

dragAndDropFirstTask()


let orangeTrapezoid = document.querySelector('.orange-trapezoid')
let blueCircleLargest = document.querySelector('.blue-circle-largest')
let blueCircleSmall = document.querySelector('.blue-circle-small')
let parentElem = document.querySelectorAll('.parentElem')

let buttonRound = document.querySelector('.demo-round')
let buttonFirstLevel = document.querySelector('#button_firstLevel')
let buttonSpan = document.querySelector('#buttonSpan_firstLevel')
let rightAnswer = document.querySelector('.right')
let tryAgain = document.querySelector('.try-again')

let counter = 0;

buttonRound.addEventListener('click', function(){
    if(orangeTrapezoid.offsetParent.classList.contains('offsetParent1')){
        counter++
        if(blueCircleLargest.offsetParent.classList.contains('offsetParent2')){
            counter++
            if(blueCircleSmall.offsetParent.classList.contains('offsetParent3')){
                counter++
                localStorage.setItem('counterFirstLevel', counter)
                buttonFirstLevel.classList.toggle('open')
                buttonSpan.classList.toggle('open')
                rightAnswer.style.display = 'block'
                tryAgain.style.display = 'none'
                resultFirstLevel()
                setTimeout(function(){
                    initConfetti();
                    render(); 
                    setTimeout(function(){
                        window.location.href = '../index/start.html'
                    }, 7000)
                },1000)
            } 
            else{
                buttonFirstLevel.classList.toggle('open')
                buttonSpan.classList.toggle('open')
                rightAnswer.style.display = 'none'
                tryAgain.style.display = 'block'
            }
        }
        else{
            buttonFirstLevel.classList.toggle('open')
            buttonSpan.classList.toggle('open')
            rightAnswer.style.display = 'none'
            tryAgain.style.display = 'block'
        }
    }
    else{
        buttonFirstLevel.classList.toggle('open')
        buttonSpan.classList.toggle('open')
        rightAnswer.style.display = 'none'
        tryAgain.style.display = 'block'
    }
})
