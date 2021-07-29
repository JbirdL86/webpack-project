/* eslint-disable no-unused-vars */
import _, { create } from 'lodash';
import './style.css';
// constant array
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
          <input class="task-description" type="text" value="${task.description}">
          <input type="hidden" class="" value="${task.index}">
        </label>
        <i class="fas fa-ellipsis-v"></i>`;

  taskComplete(li);

  return li;
};

const displayTasks = (taskList) => {
  const taskUl = document.querySelector('.list-placeholder');

  taskList.forEach((element) => {
    const li = createTask(element);
    taskUl.appendChild(li);
  });
};

if (localStorage.getItem('tasks')) {
  tasksList = JSON.parse(localStorage.getItem('tasks'));
  displayTasks(tasksList);
} else {
  setStorage(tasksList);
  displayTasks(tasksList);
}
