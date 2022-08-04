const Storage = (() => {
  //if localstorage is empty use empty array
  const _main = JSON.parse(localStorage.getItem("todo-list")) || [];

  // sets todolist in local storage to whatever
  // parameter is entered
  const setTodoList = (item) => {
    localStorage.setItem("todo-list", JSON.stringify(item));
  };

  const getTodoList = () => {
    return _main;
  };

  const updateTodoList = () => {
    setTodoList(_main);
  };

  const updateTodoListItem = (list) => {
    _main.forEach((e, i) => {
      if (e.key == list.key) {
        _main.splice(i, 1, list);
        updateTodoList();
      }
    });
  };

  const removeTodoList = (item) => {
    _main.splice(item, 1);
    setTodoList(_main);
  };

  const addTodoList = (item) => {
    _main.push(item);
    setTodoList(_main);
  };

  return {
    addTodoList,
    setTodoList,
    getTodoList,
    removeTodoList,
    updateTodoList,
    updateTodoListItem,
  };
})();

export default Storage;
