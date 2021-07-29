function setStorage(taskList) {
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

export { setStorage as default };