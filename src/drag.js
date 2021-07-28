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
    const previousFirstId = dragElement.dataset.id;
    const previousSecondId = event.currentTarget.dataset.id;
    dragElement.innerHTML = event.currentTarget.innerHTML;
    event.currentTarget.innerHTML = event.dataTransfer.getData('text/html');
    dragElement.children[0].dataset.id = previousFirstId;
    dragElement.children[1].dataset.id = previousFirstId;
    event.currentTarget.children[0].dataset.id = previousSecondId;
    event.currentTarget.children[1].dataset.id = previousSecondId;
  } 
};
