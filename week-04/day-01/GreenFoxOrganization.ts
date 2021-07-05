'use strict';

// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/inheritance/green-fox/ts.md

class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name?: string, age?: number, gender?: string) {
        this.name = name || 'Jane Done';
        this.age = age || 30;
        this.gender = gender || 'female';
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
    }

    getGoal() {
        console.log("My goal is: Live for the moment!")
    }

}

class Student extends Person {
    previousOrganization: string;
    skippeedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization || 'The School of Life';
        this.skippeedDays = 0;
    }

    getGoal() {
        console.log('My goal is: Be a junior software developer.')
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippeedDays} days from the course already.`);
    }

    skipDays(numberOfDays: number): void {
        this.skippeedDays += numberOfDays;
    }

}

class Mentor extends Person {
    level: string;

    constructor(name?: string, age?: number, gender?: string, level?: string) {
        super(name, age, gender);
        this.level = level || 'intermediate';
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
    }

    getGoal() {
        console.log('My goal is: Educate brilliant junior software developers.')
    }

}


class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(name?: string, age?: number, gender?: string, company?: string) {
        super(name, age, gender);
        this.company = company || 'Google';
        this.hiredStudents = 0;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    hire() {
        this.hiredStudents++;
    }

    getGoal() {
        console.log('My goal is: Hire brilliant junior software developers.')
    }

}

class Cohort {
    name: string;
    student: Student[];
    mentors: Mentor[];

    constructor(name: string) {
        this.name = name;
        this.student = [];
        this.mentors = [];
    }

    addStudent(student: Student) {
        this.student.push(student);
    }

    addMentor(mentor: Mentor) {
        this.mentors.push(mentor);
    }

    info() {
        console.log(`The ${this.name} cohort has ${this.student.length} students and ${this.mentors.length} mentors.`);

    }
}



let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

for (let person of people) {
    person.introduce();
    person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();



//TESTED OUTPUIT:

/*
Hi, I'm Mark, a 46 year old male.
My goal is: Live for the moment!
Hi, I'm Jane Done, a 30 year old female.
My goal is: Live for the moment!
Hi, I'm John Doe, a 20 year old male from BME who skipped 0 days from the course already.
My goal is: Be a junior software developer.
Hi, I'm Jane Done, a 30 year old female from The School of Life who skipped 3 days from the course already.
My goal is: Be a junior software developer.
Hi, I'm Gandhi, a 148 year old male senior mentor.
My goal is: Educate brilliant junior software developers.
Hi, I'm Jane Done, a 30 year old female intermediate mentor.
My goal is: Educate brilliant junior software developers.
Hi, I'm Elon Musk, a 46 year old male who represents SpaceX and hired 6 students so far.
My goal is: Hire brilliant junior software developers.
Hi, I'm Jane Done, a 30 year old female who represents Google and hired 4 students so far.
My goal is: Hire brilliant junior software developers.
The AWESOME cohort has 2 students and 2 mentors.
*/