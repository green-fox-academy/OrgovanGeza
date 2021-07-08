'use strict';

import { Task } from "./task";
import fs from 'fs';

export class TodoList {
    toDoList: Task[] = []

    constructor(file: string) {
        let fileItems: string[] = fs.readFileSync(file, 'utf-8').split('\n');
        if (fileItems.length > 0 && fileItems[0] !== '') {
            for (let i = 0; i < fileItems.length; i++) {
                let splitted = fileItems[i].split(';');
                let status = splitted[0] === '+';
                let name = splitted[1];
                let task: Task = new Task(name, status);
                this.toDoList.push(task);
            }
        }
    }

    listItems = (): void => {
        if (this.toDoList.length !== 0) {
            for (let i = 0; i < this.toDoList.length; i++) {
                let symbol = this.toDoList[i].isDone ? '[x] ' : '[ ] ';
                console.log(this.toDoList[i].id, ' - ', symbol, this.toDoList[i].name);
            }
        } else {
            console.log('No todos for today! :)');
        }
    }

    addTask = (taskToBeAdded: string, fileName: string): void => {
        let newTask = new Task(taskToBeAdded, false);
        this.toDoList.push(newTask);

        let extendedList = '';
        for (let i = 0; i < this.toDoList.length - 1; i++) {
            let isDone = this.toDoList[i].isDone ? '+;' : '-;';
            extendedList += isDone + this.toDoList[i].name + '\n'
        }
        let isDone2 = this.toDoList[this.toDoList.length - 1].isDone ? '+;' : '-;';
        extendedList += isDone2 + this.toDoList[this.toDoList.length - 1].name;

        fs.writeFileSync(fileName, extendedList);
    }

    removeTask = (taskNo: number, fileName: string): void => {
        if (taskNo <= this.toDoList.length) {
            let shortenedList = '';

            for (let i = 0; i < this.toDoList.length; i++) {
                if (this.toDoList[i].id !== taskNo) {
                    let isDone = this.toDoList[i].isDone ? '+;' : '-;';

                    if (i !== this.toDoList.length - 1) {
                        shortenedList += isDone + this.toDoList[i].name + '\n'
                    } else {
                        shortenedList += isDone + this.toDoList[i].name
                    }
                }
            }

            if (this.toDoList.length === taskNo) {
                shortenedList = shortenedList.slice(0, shortenedList.length - 2);
            }

            fs.writeFileSync(fileName, shortenedList);

        } else {
            console.log('Unable to remove: index is out of bound');
        }
    }

    checkTask = (taskNo: number, fileName: string): void => {
        // this.toDoList[taskNo - 1].check; -->doesn't work :( )
        if (taskNo <= this.toDoList.length) {

            if (this.toDoList[taskNo - 1].isDone) {
                this.toDoList[taskNo - 1].isDone = false;
            } else {
                this.toDoList[taskNo - 1].isDone = true;
            }

            let modifiedList = '';

            for (let i = 0; i < this.toDoList.length; i++) {
                let isDone = this.toDoList[i].isDone ? '+;' : '-;';

                if (i !== this.toDoList.length - 1) {
                    modifiedList += isDone + this.toDoList[i].name + '\n'
                } else {
                    modifiedList += isDone + this.toDoList[i].name
                }
            }
            fs.writeFileSync(fileName, modifiedList);
        } else {
            console.log('Unable to remove: index is out of bound');
        }

    }
}