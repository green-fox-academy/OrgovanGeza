window.onload = getQuestions()

const questionManager = document.getElementById('question-manager');
const questionCreater = document.getElementById('create');

function getQuestions() {
    fetch('http://localhost:3000/api/questions')
        .then(responseJSON => responseJSON.json())
        .then(response => {
            console.log(response);
        })
}