const buttonOne = document.getElementById('logo-2');
const buttonTwo = document.getElementById('responsive-menu');
const navigation = document.getElementById('responsive-nav');
//event listeners
buttonOne.addEventListener('click', openMenu);

//functions
function openMenu(){
    navigation.classList.toggle('responsive-menu');
    buttonOne.classList.toggle('responsive-logo');
}