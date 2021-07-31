import { dragDropListeners, taskCompleteListners, addNewListner, editTaskListners, deleteTaskListner, deleteAllListner } from './eventHandler.js';

class Task {
  constructor(description, completed = false, index = taskList.length + 1) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const taskList = []; 

export function addNewTask(event) {
  const input = document.querySelector('#input-task');

  if(event.key === 'Enter' && input.value !== '' && event.target.matches('#input-task')) {
    console.log(event.target);
    taskList.push(new Task(input.value, false, taskList.length + 1)); 
    console.log(taskList);
    displayTasks(taskList);
    setListners();
  }
}

export function editTask(event) {
  console.log(event.target);
  const task = event.target.value;
  const index = event.target.nextElementSibling.value;
  console.log(task.description);
  console.log(taskList)

}

export function deleteTask(event) {
  console.log(event);
}

export function clearSelected(event) {
  console.log(event);
}



export const createTask = (task) => {
  const divContainer = document.createElement('div');
  const li = document.createElement('li');
  const checkValue = (task.completed === true) ? 'checked' : '';
  const checkClass = (task.completed === true) ? 'marked' : '';
  divContainer.classList.add('div-container');
  li.classList.add('task-item');

  li.innerHTML = `
        <label class="task-label">
          <input class="checkbox" ${checkValue} type="checkbox">
          <input class="task-description ${checkClass}" type="text" value="${task.description}">
          <input type="hidden" class="" value="${task.index}">
        </label>
        <i class="fas fa-ellipsis-v"></i>
        <i class="far fa-trash-alt"></i>`;

  divContainer.appendChild(li);
  taskCompleteListners(li);

  return divContainer;
};



export const displayTasks = (taskList) => {
  const taskUl = document.querySelector('.list-placeholder');

  taskList.forEach((element) => {
    const div = createTask(element);
    taskUl.appendChild(div);
  });
};

export function setListners() {

  dragDropListeners();
  editTaskListners();
  addNewListner();
  deleteTaskListner();
  deleteAllListner();

}