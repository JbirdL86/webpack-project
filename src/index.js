/* eslint-disable no-unused-vars */
import _, { create } from 'lodash';
import './style.css';
import setStorage from './storage.js';
import { displayTasks, setListners } from './crud.js';

let tasksList = [];

if (localStorage.getItem('tasks')) {
  tasksList = JSON.parse(localStorage.getItem('tasks'));

  displayTasks(tasksList);
  setListners();
} else {
  setStorage(tasksList);
  displayTasks(tasksList);
  setListners();
}
