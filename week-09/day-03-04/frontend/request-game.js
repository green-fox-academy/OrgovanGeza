window.onload=getQuestions();
const content = document.getElementById('content');



function getQuestions() {
    fetch('http://localhost:3000/api/game')
        .then(responseJSON => responseJSON.json())
        .then(response => {
            console.log(response);
        })
}