'use strict';

import { Task } from "./task";
import fs from 'fs';

export class TodoList {
    toDoList: Task[] = []

    constructor(file: string) {
        let fileItems: string[] = fs.readFileSync(file, 'utf-8').split('\n');
        if (fileItems.length !== 1) {
            for (let i = 0; i < fileItems.length; i++) {
                let splitted = fileItems[i].split('+' || '-', 2)
                let status = splitted[0] === '+';
                let name = splitted[1];

                let task: Task = new Task(name, status);
                this.toDoList.push(task);
            }
        } else if (fileItems.length === 1 && fileItems[0] !== '') {
            let splitted = fileItems[0].split('+' || '-', 2)
            let status = splitted[0] === '+';
            let name = splitted[1];

            let task: Task = new Task(name, status);
            this.toDoList.push(task);
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

    addTask = (taskToBeAdded: string): void => {
        let newTask = new Task('-'+taskToBeAdded, false);
        this.toDoList.push(newTask);
    }

}