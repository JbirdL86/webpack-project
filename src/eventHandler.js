import dropSort from './drag.js';
import checkCompleted from './completed.js';
import setStorage from './storage.js';
import { addNewTask, editTask, deleteTask, clearSelected } from './crud.js';

function update() {
  const checkBoxItems = document.querySelectorAll('.checkbox');
  const descriptionItems = document.querySelectorAll('.task-description');
  const newObj = [];
  for (let i = 0; i < checkBoxItems.length; i += 1) {
    newObj.push({
      description: descriptionItems[i].value,
      completed: checkBoxItems[i].checked,
      index: i,
    });
  }
  setStorage(newObj);
}

function refresh() {
  
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

export const taskCompleteListners = (element) => {
  element.children[0].children[0].addEventListener('change', (e) => {
    checkCompleted(e);
    update();
  });
};

export const addNewListner = () => {
  const newTask = document.querySelector('#input-task');

  newTask.addEventListener('keyup', (e) => {
    addNewTask(e);
    update();
  });
}

export const editTaskListners = () => {
  const tasksInput = document.querySelectorAll('.task-description');
  const arrInput = Array.from(tasksInput);

  arrInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      editTask(e);
      update();
    });
  })
  
}

export const deleteTaskListner = () => {
  const tasks = document.querySelectorAll('.fa-trash-alt');
  const tasksArr = Array.from(tasks);

  tasksArr.forEach((task) => {
    task.addEventListener('click', (e) => {
      deleteTask(e);
      update();
    });
  })
}

export const deleteAllListner = () => {
  const clearTasks = document.querySelector('#clear-tasks');

  clearTasks.addEventListener('click', (e) => {
    clearSelected(e);
    update();
  })
}
