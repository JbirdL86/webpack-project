// import Status from './status.js';
let dragElement;

export const dragOver = (e) => {
  e.preventDefault();
};

export const dragStart = (event) => {
  event.currentTarget.style.opacity = '1';
  dragElement = event.currentTarget;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', event.currentTarget.innerHTML);
};

export const dropSort = (event) => {
  event.stopPropagation();
  if (dragElement !== event.currentTarget) {
    dragElement.innerHTML = event.currentTarget.innerHTML;
    event.currentTarget.innerHTML = event.dataTransfer.getData('text/html');
  }
};
