let userName = document.getElementById('username');
let password = document.getElementById('password');
const userInfo = document.getElementsByClassName('user');
const btn = document.getElementById('button');
const API_BASE_URL = "http://localhost:3000/users";
let users = [];

btn.addEventListener('click', checkBase)
async function checkBase(){
    const response = await fetch(`${API_BASE_URL}`)
    const userRes = await response.json()
    users = userRes;
    if(checkStatus(users) === true){
        location.href = "./main.html";
    }
}
function checkStatus(users) {
    users.forEach(user => {
        if(userName.value === user.name && password.value === user.password) {
            location.href = "./main.html";
            for (let i = 0; i < userInfo.length; i++) {
                alert(2);
                document.querySelector('login').style.display = "none";
                userInfo.style.display = "flex";
            }


        return true;
        }else{
           return false;
        }
    })
}

