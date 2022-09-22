import {openForm} from './modules/script_form'
import { checkDataInput } from './modules/script_form';
import { bodyOpen } from './modules/script'

import './scss/style.css'

    bodyOpen() 
    let circleWraper = document.querySelector('.circle_wraper');
    circleWraper.addEventListener('animationend', openForm)
    
    let userDataFormButton = document.getElementById('userDataFormButton')
    userDataFormButton.addEventListener('click', checkDataInput)


