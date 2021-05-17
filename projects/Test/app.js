const url = "https://opentdb.com/api.php?amount=10";
const container = document.getElementById('answers');
const box = document.getElementById('box');
const category = document.getElementById('category');
const difficulty = document.getElementById('difficulty');
let task = 0;
let score = 0;
let answers = [];
let dataArray = [];


const userName = document.getElementById('userName');
const submit = document.getElementById('user-btn');
const input = document.getElementsByClassName('user-input');

submit.addEventListener('click', function(event) {
    event.preventDefault();
    difficulty.classList.add('display-none');
    category.classList.add('display-none');
    box.classList.add('display-flex');

    let greet = document.getElementById('greet-container');

    if(userName.value.length === 0){

        greet.innerHTML = "Greetings User!";

    }else{

        greet.innerHTML = "Greetings " + userName.value + "!";
    }

    for(let i = 0; i < input.length; i++){

        input[i].classList.add('display-none');
    }

    getData();
})


function getData(){
    fetch(url + `&category=${category.value}` + `&difficulty=${difficulty.value}` + `&type=multiple`)
        .then(res => res.json())
        .then(data => {
            result = data.results;
            document.getElementById('questions-answers').style.display = "block";
            document.getElementById('finished-result').style.display = "none";

            getQuestion();
        })

    eventListener();
}
function getQuestion(){
    const btns = document.getElementsByClassName('answer');

    for(let i = 0; i < btns.length; i++){
            btns[i].disabled = false;
    }

    const questionNumber = document.getElementById('title');
    questionNumber.innerHTML = "Question " + `${task+1}`;

    for(let i = 0; i < container.children.length; i++){

        container.children[i].style.backgroundColor = "white";
    }

    result.forEach(element => dataArray.push(element));
    const question = document.getElementById('question');
    question.innerHTML = result[task].question;

    getAnswers();
}
function getAnswers(){
    for (let i = 0; i < 3; i++) {

        answers.push(result[task].incorrect_answers[i]);
    }

    answers.push(result[task].correct_answer);

    shuffleArray(answers);

    renderAnswers();
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function renderAnswers(){
    const answerOne = document.getElementById('answer1');
    const answerTwo = document.getElementById('answer2');
    const answerThree = document.getElementById('answer3');
    const answerFour = document.getElementById('answer4');

    answers.forEach(element => {
        answerOne.innerHTML = answers[0];
        answerOne.value = answers[0];
        answerTwo.innerHTML = answers[1];
        answerTwo.value = answers[1];
        answerThree.innerHTML = answers[2];
        answerThree.value = answers[2];
        answerFour.innerHTML = answers[3];
        answerFour.value = answers[3];
    })

}
function eventListener(){
    for(let i = 0; i < container.children.length; i++){

        container.children[i].addEventListener('click', (e) => {
            const btns = document.getElementsByClassName('answer');

            for(let i = 0; i < btns.length; i++){

                if(e.target !== btns[i].target){

                    btns[i].disabled = true;
                }
            }
            if(e.target.value === result[task].correct_answer){

                container.children[i].style.backgroundColor = "green";
                score++;

            }else{

                container.children[i].style.backgroundColor = "red";
            }

            checkAnswer();

        })
    }

}

function checkAnswer(){
    task++;

    if(task === result.length){
        document.getElementById('title').innerHTML = "Your score is: " + score + " /10";
        document.getElementById('questions-answers').style.display = "none";
        document.getElementById('finished-result').style.display = "flex";

        document.getElementById('retry').addEventListener('click', () => {
            location.reload();
        });

    }else{
        setTimeout(getQuestion, 1000);

    }
}