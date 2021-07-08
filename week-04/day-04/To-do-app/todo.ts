'use strict';

//import .....

const args: string[] = process.argv.slice(2);
const fs = require('fs');
const todoFile = 'todo.txt';

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


let addTask = (taskToBeAdded: string): void => {
    const fileItems = fs.readFileSync(todoFile, 'utf-8');
    if (fileItems === '') {
        fs.writeFileSync(todoFile, taskToBeAdded);
    } else {
        const extendedList = fileItems + '\n' + taskToBeAdded;
        fs.writeFileSync(todoFile, extendedList);
    }
}




if (args.length === 0) {
    usageInfos();
} else if (args[0] === '-l') {
    listItems();
} else if (args[0] === '-a' && args.length === 2) {
    addTask(args[1]);
} else if (args[0] === '-a' && args.length !== 2) {
    console.log('Unable to add: no, or not only one task provided');
}
