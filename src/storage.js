class Storage {
  setStorage(taskList) {
    window.localStorage.setItem('tasks', JSON.stringify(taskList));
  }

  getStorage() {
    const listStorage = JSON.parse(window.localStorage.getItem('tasks'));
    const taskList = listStorage.map((task) => {
      const newTask = {
        description: task.description,
        completed: task.completed,
        index: task.index,
      }
    });
    return taskList;
  }

  hasStorage() {
    if (window.localStorage.getItem('tasks') !== null && window.localStorage.getItem('tasks') > 0 ) {
      return true;
    }
    return false;
  }
}

const storage = new Storage();

export {storage as default};