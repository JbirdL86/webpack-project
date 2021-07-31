/* eslint-disable import/no-cycle */
import dropSort from './drag.js';
import checkCompleted from './completed.js';
import setStorage from './storage.js';
import { addNewTask, deleteTask, clearSelected } from './crud.js';

function update() {
  const checkBoxItems = document.querySelectorAll('.checkbox');
  const descriptionItems = document.querySelectorAll('.task-description');
  const newObj = [];
  for (let i = 0; i < checkBoxItems.length; i += 1) {
    newObj.push({
      description: descriptionItems[i].value,
      completed: checkBoxItems[i].checked,
      index: i + 1,
    });
  }
  setStorage(newObj);
}

export const dragDropListeners = () => {
  const elements = document.querySelectorAll('.task-item');
  const containers = document.querySelectorAll('.div-container');
  const arrElements = Array.from(elements);
  const arrContainer = Array.from(containers);

  let dragItem = null;

  arrElements.forEach((element) => {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', () => {
      dragItem = element;
    });
    element.addEventListener('dragend', () => {
      dragItem = null;
    });
  });

  arrContainer.forEach((container) => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
    });
    container.addEventListener('drop', () => {
      dropSort(dragItem, container.firstElementChild);
      update();
    });
  });
};

export const taskCompleteListners = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  const checkboxArr = Array.from(checkboxes);

  checkboxArr.forEach((inputBox) => {
    inputBox.addEventListener('change', (e) => {
      checkCompleted(e);
      update();
    });
  });
};

export const addNewListner = () => {
  const input = document.querySelector('#input-task');

  input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && input.value !== '' && e.target.matches('#input-task')) {
      addNewTask();
      update();
    }
  });
};

export const editTaskListners = () => {
  const tasksInput = document.querySelectorAll('.task-description');
  const arrInput = Array.from(tasksInput);

  arrInput.forEach((input) => {
    input.addEventListener('input', () => {
      update();
    });
  });
};

export const deleteTaskListner = () => {
  const tasks = document.querySelectorAll('.fa-trash-alt');
  const tasksArr = Array.from(tasks);

  tasksArr.forEach((task) => {
    task.addEventListener('click', (e) => {
      deleteTask(e);
      update();
    });
  });
};

export const deleteAllListner = () => {
  const clearTasks = document.querySelector('#clear-tasks');

  clearTasks.addEventListener('click', () => {
    clearSelected();
    update();
  });
};
