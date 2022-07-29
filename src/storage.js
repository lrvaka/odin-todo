const Storage = (() => {
  const _main = JSON.parse(localStorage.getItem("todo-list")) || [];

  const setTodoList = (item) => {
    localStorage.setItem("todo-list", JSON.stringify(item));
  };

  const getTodoList = () => {
    return _main;
  };

  const updateTodoList = () => {
    setTodoList(_main);
  };

  const removeTodoList = (item) => {
    _main.splice(item, 1);
    setTodoList(_main);
  };

  const addTodoList = (item) => {
    _main.push(item);
    setTodoList(_main);
  };

  const addTodoItem = (item) => {
    _main.push(item);
    setTodoList(_main);
  };

  return {
    addTodoList,
    setTodoList,
    getTodoList,
    removeTodoList,
    updateTodoList,
  };
})();

export default Storage;
