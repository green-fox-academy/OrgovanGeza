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
                if (this.toDoList[i].id < 10) {
                    console.log(this.toDoList[i].id, '  - ', symbol, this.toDoList[i].name);
                } else {
                    console.log(this.toDoList[i].id, ' - ', symbol, this.toDoList[i].name);
                }
            }
        } else {
            console.log('No todos for today! :)');
        }
    }

    _rebuildTxt = (fileName: string): void => {
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
        //return modifiedList;
    }

    addTask = (taskToBeAdded: string, fileName: string): void => {
        let newTask = new Task(taskToBeAdded, false);
        this.toDoList.push(newTask);

        this._rebuildTxt(fileName);
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
                shortenedList = shortenedList.slice(0, shortenedList.length - 1);
            }

            fs.writeFileSync(fileName, shortenedList);

        } else {
            console.log('Unable to remove: index is out of bound');
        }
    }

    checkTask = (taskNo: number, fileName: string): void => {
        if (taskNo <= this.toDoList.length) {
            // this.toDoList[taskNo - 1].check; -->doesn't work :( )
            this.toDoList[taskNo - 1].isDone = !this.toDoList[taskNo - 1].isDone;
            this._rebuildTxt(fileName);
        } else {
            console.log('Unable to remove: index is out of bound');
        }

    }


}