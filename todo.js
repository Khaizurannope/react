// File utils.js
export const addTask = (tasks, task) => [...tasks, task];
export const removeTask = (tasks, index) => tasks.filter((_, i) => i !== index);

// File main.js
import { addTask, removeTask } from './utils.js';

class Task {
  constructor(name) {
    this.name = name;
  }
}

class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(name) {
    const task = new Task(name);
    this.tasks = addTask(this.tasks, task);
  }

  removeTask(index) {
    this.tasks = removeTask(this.tasks, index);
  }

  displayTasks() {
    this.tasks.forEach((task, index) => console.log(`${index + 1}. ${task.name}`));
  }
}

const myTodoList = new TodoList();
myTodoList.addTask('Belajar JavaScript');
myTodoList.addTask('Mengerjakan proyek React');
myTodoList.displayTasks();

myTodoList.removeTask(0);
myTodoList.displayTasks();
