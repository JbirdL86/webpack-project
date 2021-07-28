import { dragStart, dragOver, dropSort } from './drag.js';

//const checkBox = li.querySelector('.checkbox');

export const dragDropListeners = (li) => {
  li.setAttribute('draggable', 'true');
  li.addEventListener('dragstart', dragStart);
  li.addEventListener('dragend', () => {
    li.classList.remove('dragging');
  });
  li.addEventListener('dragover', dragOver);
  li.addEventListener('drop', (e) => {
    dropSort(e);
  });
};

export const taskComplete = (li) => {

};