/* eslint-disable import/no-cycle */
import {
  dragDropListeners,
  taskCompleteListners,
  addNewListner,
  editTaskListners,
  deleteTaskListner,
  deleteAllListner,
} from './eventHandler.js';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const createTask = (task) => {
  const divContainer = document.createElement('div');
  const li = document.createElement('li');
  const checkValue = (task.completed === true) ? 'checked' : '';
  const checkClass = (task.completed === true) ? 'marked' : '';
  divContainer.classList.add('div-container');
  li.classList.add('task-item');

  li.innerHTML = `
        <label class="task-label">
          <input class="checkbox" ${checkValue} type="checkbox">
          <input class="task-description ${checkClass}" type="text" value="${task.description}">
          <input type="hidden" class="" value="${task.index}">
        </label>
        <i class="fas fa-ellipsis-v"></i>
        <i class="far fa-trash-alt"></i>`;

  divContainer.appendChild(li);

  return divContainer;
};

export const displayTasks = (taskList) => {
  const taskUl = document.querySelector('.list-placeholder');

  taskList.forEach((element) => {
    const div = createTask(element);
    taskUl.appendChild(div);
  });
};

export function setListners() {
  dragDropListeners();
  editTaskListners();
  taskCompleteListners();
  addNewListner();
  deleteTaskListner();
  deleteAllListner();
}

export function addNewTask() {
  const input = document.querySelector('#input-task');
  const taskUl = document.querySelector('.list-placeholder');
  let taskArr = [];

  if (localStorage.getItem('tasks')) {
    taskArr = JSON.parse(localStorage.getItem('tasks'));
  }

  taskArr.push(new Task(input.value, false, taskArr.length + 1));
  input.value = '';
  taskUl.innerHTML = '';
  displayTasks(taskArr);
  setListners();
}

export function deleteTask(event) {
  const taskUl = document.querySelector('.list-placeholder');
  const remDiv = event.target.parentNode.parentNode;

  taskUl.removeChild(remDiv);
}

export function clearSelected() {
  const taskUl = document.querySelector('.list-placeholder');
  const remTasks = document.querySelectorAll('.marked');

  remTasks.forEach((element) => {
    const remDiv = element.parentElement.parentElement.parentElement;
    taskUl.removeChild(remDiv);
  });
}
