'use strict';

// Create Student and Teacher classes
// Student
    // learn() -> prints: the student is actually learning
    // question(teacher) -> calls the teacher's giveAnswer() method
// Teacher
    // teach(student) -> calls the student's learn() method
    // giveAnswer() -> prints: the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student {

    learn() {
        console.log('the student is actually learning');
    }

    question(teacher:Teacher) {
        teacher.giveAnswer();
    }
}

class Teacher {

    teach(teachee:Student){
        teachee.learn();
    }

    giveAnswer() {
        console.log('the teacher is answering a question');
    }
}

let tanci = new Teacher()
let pistike = new Student()

tanci.teach(pistike);
pistike.question(tanci);