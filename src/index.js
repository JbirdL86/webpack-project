/* eslint-disable no-unused-vars */
import _, { create } from 'lodash';
import './style.css';
import setStorage from './storage.js';
import { dragDropListeners, taskCompleteListners } from './eventHandler.js';

let tasksList = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Make dinner',
    completed: false,
    index: 1,
  },
  {
    description: 'Wipe the floor',
    completed: false,
    index: 2,
  },
];

const createTask = (task) => {
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
        <i class="fas fa-ellipsis-v"></i>`;

  divContainer.appendChild(li);
  taskCompleteListners(li);

  return divContainer;
};

const displayTasks = (taskList) => {
  const taskUl = document.querySelector('.list-placeholder');

  taskList.forEach((element) => {
    const div = createTask(element);
    taskUl.appendChild(div);
  });
};

if (localStorage.getItem('tasks')) {
  tasksList = JSON.parse(localStorage.getItem('tasks'));
  displayTasks(tasksList);
  dragDropListeners();
} else {
  setStorage(tasksList);
  displayTasks(tasksList);
  dragDropListeners();
}
