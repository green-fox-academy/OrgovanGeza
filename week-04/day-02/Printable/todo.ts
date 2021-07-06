'use strict';

import { Printable } from "./printabe";

export class Todo implements Printable {
    task: string;
    priority: string;
    isDone: boolean;

    constructor(task: string, priority: string, isDone: boolean) {
        this.task = task;
        this.priority = priority;
        this.isDone = isDone;
    }

    printAllFields(): void {
        console.log(`Task: ${this.task} | Priority: ${this.priority} | Done: ${this.isDone}`);
    }
}