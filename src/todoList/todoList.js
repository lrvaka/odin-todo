import {
  todoListItem,
  checklistTodoListItem,
} from "./todoListItem/todoListItem";
import Storage from "../storage";

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
  };

  Object.setPrototypeOf(proto, Array.prototype);
  Object.setPrototypeOf(array, proto);

  return array;
};

export default todoList;
