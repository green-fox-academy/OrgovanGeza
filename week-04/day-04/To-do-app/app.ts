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



if (args.length === 0) {
    usageInfos();
} else if (args[0] === '-l') {
    toDoList.listItems();
} else if (args[0] === '-a' && args.length === 2) {
    toDoList.addTask(args[1], todoFile);
} else if (args[0] === '-a' && args.length !== 2) {
    console.log('Unable to add: no, or not only one task provided');
} else if (args[0] === '-r' && args.length === 2) {
    let listNo = +args[1];
    if (isNaN(listNo)!==true){
    toDoList.removeTask(listNo,todoFile)
    }else {
        console.log('Unable to remove: index is not a number');
    }
}else if (args[0] === '-r' && args.length !== 2) {
    console.log('Unable to remove: no index provided');
}
