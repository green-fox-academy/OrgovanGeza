'use strict';

import { Domino } from "./domino";
import { Todo } from "./todo";

let dominoes: Domino[] = [];

let domino1: Domino = new Domino(4, 5);
dominoes.push(domino1);
let domino2: Domino = new Domino(1, 3);
dominoes.push(domino2);


let todos: Todo[] = [];

let todo1: Todo = new Todo('Bux milk', 'high', true);
todos.push(todo1);
let todo2: Todo = new Todo('eat cereal', 'medium', false);
todos.push(todo2);


for (let domino of dominoes) {
    domino.printAllFields();
}

for (let todo of todos) {
    todo.printAllFields();
  }