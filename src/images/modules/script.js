const thirdPassedLevel = document.querySelector('.third-passed-level')
const firstPassedLevel = document.querySelector('.first-passed-level')
const secondPassedLevel = document.querySelector('.second-passed-level')
const cakeTwo = document.querySelector('#cake-two')

const userName = document.querySelector('.userName')

function getUserName(name){
    setTimeout(function(){
        userName.innerHTML = name;
    }, 100)
}
let counterAllLevels = 0

const resultFirstLevel = () => {
    if(localStorage.getItem('counterFirstLevel') === "3"){
        const cakeOne = document.querySelector('#cake-one')
        cakeOne.style.color = localStorage.getItem("color")
        if(firstPassedLevel !== null)
        {
            firstPassedLevel.style.display = 'flex'
            counterAllLevels++
        }
    }
}

resultFirstLevel()

const resultSecondLevel = () => {
    if(localStorage.getItem('counterSecondLevel') === "1"){
        const cakeTwo = document.querySelector('#cake-two')
        cakeTwo.style.color = localStorage.getItem("color")
        if(secondPassedLevel !== null)
        {
            secondPassedLevel.style.display = 'flex'
            counterAllLevels++
        }
    }
}

resultSecondLevel()

const colorCake1 = () => {
    if(JSON.parse(localStorage.getItem("lineArr")) !== null){
        if(JSON.parse(localStorage.getItem("lineArr")).length === 9){
            const cakeThree = document.querySelector('#cake-three')
            cakeThree.style.color = localStorage.getItem("color")
            if(thirdPassedLevel !== null)
            {
                thirdPassedLevel.style.display = 'flex'
                counterAllLevels++
            }
        }
    }
}
colorCake1()

const buttonGetPrize = document.querySelector('.getPrize')
const getPrize = () => {
    if(counterAllLevels === 3){
        buttonGetPrize.classList.add('getPrize_open')
    }
}

getPrize()