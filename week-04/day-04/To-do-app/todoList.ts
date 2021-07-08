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
        //  let taskToAdd = '-;' + taskToBeAdded;
        let newTask = new Task(taskToBeAdded, false);
        this.toDoList.push(newTask);

        let extendedList = '';
        for (let i = 0; i < this.toDoList.length - 1; i++) {
            let isDone = this.toDoList[i].isDone ? '+;' : '-;';
            extendedList += isDone + this.toDoList[i].name + '\n'
        }
        let isDone2 = this.toDoList[this.toDoList.length-1].isDone ? '+;' : '-;';
        extendedList += isDone2 + this.toDoList[this.toDoList.length-1].name;
        fs.writeFileSync(fileName, extendedList);
    }


}