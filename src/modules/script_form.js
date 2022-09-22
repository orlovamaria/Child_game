import {postUserName} from "./script_getUsersList"

// Открытие формы после анимации welcom

let circleWraper = document.querySelector('.circle_wraper');
let userDataForm = document.querySelector('.userDataForm')
let userNameInput = document.getElementById('userNameForm')

const openForm = () => {
    circleWraper.classList.add('circle_opasity')
    userDataForm.classList.add('displayFormBlock')
}

// Переход на стартовую страницу
let userDataFormButton = document.getElementById('userDataFormButton')
const buttonGetPrize = document.querySelector('.getPrize')

function goToStartScreen(){
    if(userNameInput.value === ''){
        window.location.href = './form.html'
    }
    else{
        window.location.href = './start.html'
        localStorage.removeItem('lineArr')
        localStorage.removeItem('counterFirstLevel')
        localStorage.removeItem('counterSecondLevel')
        localStorage.removeItem('display')
    }
}

const checkDataInput = (event) => {
    event.preventDefault()
    postUserName()

    setTimeout(function(){
        goToStartScreen()
    }, 200)
}




export { openForm, goToStartScreen, checkDataInput }