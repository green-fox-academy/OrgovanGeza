'use strict';

export class Task {
    static taskNo: number = 0;

    name: string = '';
    isDone: boolean = false;
    id: number = 0;

    constructor(name: string, isDone: boolean) {
        this.name = name;
        this.isDone = isDone;
        this.id = ++Task.taskNo;
    }

    check(): void {
        this.isDone = this.isDone ? false : true;
    }

}