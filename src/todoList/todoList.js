import {
  todoListItem,
  checklistTodoListItem,
} from "./todoListItem/todoListItem";

const todoList = (input) => {
  const array = input || [];
  const proto = {
    add(element) {
      const type = (e) => {
        if (e.type === "Checklist") {
          return checklistTodoListItem(e);
        } else {
          return todoListItem(e);
        }
      };
      this.push(type(element));
    },
    tick(element) {
      //pass in some time of identifier?
    },

    delete() {},
  };

  Object.setPrototypeOf(proto, Array.prototype);
  Object.setPrototypeOf(array, proto);

  return array;
};

export default todoList;
