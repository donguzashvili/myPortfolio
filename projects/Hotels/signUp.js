const btn = document.getElementById('btn');
const API_BASE_URL = "http://localhost:3000/users";
const mail = document.querySelector('#mail');
const pswrd = document.querySelector('#password');
const repPassword = document.querySelector('#rep-password');

btn.addEventListener('click', postInfo);

mail.addEventListener('blur', validateMail);
mail.addEventListener('focus', ()=> {
    document.getElementById('mail-err').classList.remove('mail-error');
})
repPassword.addEventListener('blur', validatePassword);
if(postInfo() === true){
    location.href = "main.html";
}

async function postInfo(){
    const name = document.querySelector('#firstName').value;
    const surName = document.querySelector('#lastName').value;
    const company = document.querySelector('#company').value;
    const address = document.querySelector('#address').value;
    let password = pswrd.value;
    let dbMail = mail.value;
    const data = {
        name,
        surName,
        dbMail,
        company,
        address,
        password,
    }

    const res = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const resJson = await res.json()
    console.log(resJson);
    location.href = "main.html";

}
function validateMail(){
    if(!mail.value.includes('@')){
        document.getElementById('mail-err').classList.add('mail-error');
    }
}
function validatePassword(){
    if(pswrd.value !== repPassword.value) {
    alert("password doesn't match!")
    }
}
