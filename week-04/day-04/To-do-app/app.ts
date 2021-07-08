'use strict';

import { Task } from "./task";
import { TodoList } from "./todoList";

const args: string[] = process.argv.slice(2);
const fs = require('fs');
const todoFile = 'todo.txt';
let toDoList = new TodoList(todoFile);

let usageInfos = (): void => {
    console.log('Command Line Todo application');
    console.log('=============================');
    console.log('');
    console.log('Command line arguments:');
    console.log('    -l   Lists all the tasks');
    console.log('    -a   Adds a new task');
    console.log('    -r   Removes an task');
    console.log('    -c   Completes an task');
}

/*
let listItems = (): void => {
    const fileItems = fs.readFileSync(todoFile, 'utf-8').split('\n');

    if (fileItems.length === 1 && fileItems[0] === '') {
        console.log('No todos for today! :)');
    } else {
        for (let i = 0; i < fileItems.length; i++) {
            console.log(i + 1, ' - ', fileItems[i]);
        }
    }
}
*/

/*
let addTask = (taskToBeAdded: string): void => {
    const fileItems = fs.readFileSync(todoFile, 'utf-8');
    if (fileItems === '') {
        fs.writeFileSync(todoFile, taskToBeAdded);
    } else {
        const extendedList = fileItems + '\n' + taskToBeAdded;
        fs.writeFileSync(todoFile, extendedList);
    }
}
*/


if (args.length === 0) {
    usageInfos();
} else if (args[0] === '-l') {
    toDoList.listItems();
} else if (args[0] === '-a' && args.length === 2) {
    toDoList.addTask(args[1], todoFile);
} else if (args[0] === '-a' && args.length !== 2) {
    console.log('Unable to add: no, or not only one task provided');
} else if (args[0] === '-r') {
    let listNo :number = +args[1];
    toDoList.removeTask(listNo,todoFile)
}
