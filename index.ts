#! /usr/bin/env node

import inquire from "inquirer";

// let fruitchart = ["Banana", "Mango", "Orange"]

// fruitchart = fruitchart.concat("Melon", "Kiwi")

// console.log(fruitchart);

// let i = 0;

// while(i <= 10){
// console.log(i);
// i++;

//

let todos = [];
let condition = true;

while (condition) {
let adTask = await inquire.prompt([
  {
    name: "todo",
    type: "input",
    message: "What you Want to add in your Todos",
  },
  {
    name : "addMore",
    type: "confirm",
    message: "Do you want to add more ?",
    default : "false"
  }
]);

todos.push(adTask.todo);

condition=adTask.addMore;

console.log(todos);
}