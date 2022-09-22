// Открытие формы после анимации welcom

let circleWraper = document.querySelector('.circle_wraper');
let userDataForm = document.querySelector('.userDataForm')
let userNameInput = document.getElementById('userNameForm')

circleWraper.addEventListener('animationend', function(){
        circleWraper.classList.add('circle_opasity')
        userDataForm.classList.add('displayFormBlock')
})

// Переход на стартовую страницу
let userDataFormButton = document.getElementById('userDataFormButton')

function goToStartScreen(){
    if(userNameInput.value === ''){
        window.location.href = '../index/form.html'
    }
    else{
        window.location.href = '../index/start.html'
        localStorage.removeItem('lineArr')
        localStorage.removeItem('counterFirstLevel')
        localStorage.removeItem('counterSecondLevel')
        counterAllLevels = 0;
    }
}


userDataFormButton.addEventListener('click', function(event){
    event.preventDefault()
    postUserName()

    setTimeout(function(){
        goToStartScreen()
    }, 200)
})


