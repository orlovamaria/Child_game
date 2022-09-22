import { getUserName } from './script';

const USERS_LIST = 'http://localhost:3000/data';

const getUsersList = () => {
    fetch(`${USERS_LIST}`)
    .then(
        (res) => {
            return res.json()
        } 
    )
    .then(
        (data) => {
            getUserName(data[data.length - 1].userName)
        }
    )
}


let userNameInput = document.getElementById('userNameForm')

const postUserName = (() => {
    fetch(`${USERS_LIST}`,{
        method: 'POST',
        body: JSON.stringify({
            "userName": userNameInput.value
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then(
        (res) => {
            console.log(res)
            return res.json();
        }
    )
    .then(
        (res) => {
            console.log(res)
            return res
        }
    )
})

export {postUserName, getUsersList}