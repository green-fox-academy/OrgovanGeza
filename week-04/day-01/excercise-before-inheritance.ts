'use strict';

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
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`);
    }

    getGoal() {
        console.log("My goal is: Live for the moment!")
    }

}

class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
        this.name = name || 'Jane Done';
        this.age = age || 30;
        this.gender = gender || 'female';
        this.previousOrganization = previousOrganization || 'The School of Life';
        this.skippedDays = 0;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    getGoal() {
        console.log("My goal is: Be a junior software developer.")
    }

    skipDays(numberOfDays: number) {
        this.skippedDays += numberOfDays;
    }
}

class Mentor {
    name: string;
    age: number;
    gender: string;
    level: string;

    constructor(name?: string, age?: number, gender?: string, level?: string) {
        this.name = name || 'Jane Done';
        this.age = age || 30;
        this.gender = gender || 'female';
        this.level = level || 'intermediate';
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor`);
    }

    getGoal() {
        console.log("My goal is: Educate brilliant junior software developers.")
    }

}

class Sponsor {
    name: string;
    age: number;
    gender: string;
    company: string;
    hiredStudents: number;

    constructor(name?: string, age?: number, gender?: string, company?:string) {
        this.name = name || 'Jane Done';
        this.age = age || 30;
        this.gender = gender || 'female';
        this.company = company || 'Google';
        this.hiredStudents = 0;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    getGoal() {
        console.log("My goal is: Hire brilliant junior software developers.")
    }

    hire() {
        this.hiredStudents++;
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
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
});