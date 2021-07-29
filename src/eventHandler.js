import dropSort from './drag.js';
import checkCompleted from './completed.js';
import setStorage from './storage.js';

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
