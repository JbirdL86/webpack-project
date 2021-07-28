/* eslint-disable no-unused-vars */
import _, { create } from 'lodash';
import './style.css';
//constant array
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

  li.innerHTML = `
    <li class="task-item">
      <label class="task-label">
        <input type="checkbox" value="${task.completed}">
        <p class="task-description">${task.description}</p>
      </label>
    <i class="fas fa-ellipsis-v"></i>
    </li>`;

  return li;
};

const displayTasks = (taskList) => {
  const taskUl = document.querySelector('.list-placeholder');

  taskList.forEach((element) => {
    const li = createTask(element);
    taskUl.appendChild(li);
  });
};

window.onload = displayTasks(tasksList);
