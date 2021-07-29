import { dragStart, dragOver, dropSort } from './drag.js';
import checkCompleted from './completed.js';

export const dragDropListeners = (li) => {
  li.setAttribute('draggable', 'true');
  li.addEventListener('dragstart', dragStart);
  li.addEventListener('dragend', () => {
    li.classList.remove('dragging');
  });
  li.addEventListener('dragover', dragOver);
  li.addEventListener('drop', (e) => {
    dropSort(e);
    const checkBoxItems = document.querySelectorAll('.checkbox');
    const descriptionItems = document.querySelectorAll('.task-description');
    const newObj = [];
    for (let i = 0; i < checkBoxItems.length; i += 1) {
      newObj.push({
        description: descriptionItems[i].value,
        completed: checkBoxItems[i].value,
        index: i,
      });
    }
    localStorage.setItem('tasks', JSON.stringify(newObj));
  });
};

export const taskComplete = (li) => {
  li.children[0].children[0].addEventListener('change', (e) => { checkCompleted(e); });
};
