// // set
// window.localStorage.setItem("color", "red");
// window.localStorage.fontWeight = "bold";

// // Get

// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);

// // remove´ve Color in Page One
// window.localStorage.removeItem("color");

// // remove All Color in Page On//window.localStorage.clear();

// // key
// console.log(window.localStorage.key(0));

// // Set Color in Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// --------------------------------------------------------->

// window.localStorage.setItem("color","red");
// window.sessionStorage.setItem("color","blur");

// --------------------------------------------------------->

let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let myTaskDiv = document.querySelector(".tasks");

// Empty Array To Store the tsaks
let arrayOftasks = [];
// Add Task
submit.onclcik = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); //Add Task To Array of tasks
    input.value = ""; // Empty myinput fiald
  }
};

function addTaskToArray(tasksText) {}
