/* eslint-disable no-unused-vars */
import _, { create } from 'lodash';
import './style.css';
import storage from './storage';
import { dragDropListeners }from './eventHandler.js';

const tasksList = [
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
  const li = document.createElement('li');
  li.classList.add('task-item');
  dragDropListeners(li);


  li.innerHTML = `
        <label class="task-label">
          <input class="checkbox" type="checkbox" value="${task.completed}">
          <p class="task-description">${task.description}</p>
        </label>
        <i class="fas fa-ellipsis-v"></i>`;

  li.addEventListener('change', (e,li) => {
    checkCompleted(e,li);
  })

  return li;
};

const displayTasks = (taskList) => {
  const taskUl = document.querySelector('.list-placeholder');

  storage.setStorage(taskList);
  taskList.forEach((element) => {
    const li = createTask(element);
    taskUl.appendChild(li);
  });
};

if(storage.hasStorage()){
  window.onload = displayTasks(storage.getStorage());
} else {
  window.onload = displayTasks(tasksList);
}
