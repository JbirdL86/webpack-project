/* eslint-disable no-unused-vars */
import _, { create } from 'lodash';
import './style.css';
import setStorage from './storage.js';
import { taskList, displayTasks, setListners } from './crud';

let tasksList = taskList;







if (localStorage.getItem('tasks')) {
  tasksList = JSON.parse(localStorage.getItem('tasks'));
  displayTasks(tasksList);
  setListners();
  console.log(tasksList.length)
  console.log(taskList)


} else {
  setStorage(tasksList);
  displayTasks(tasksList);
  setListners();
  // console.log(tasksList.pop())

}
