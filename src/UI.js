import todoList from "./todoList/todoList";
import initTodoListUI from "./initTodoListUI";
import genKey from "./utils/generate-key";

const listOfTodoLists = [
  { name: "main", list: initTodoListUI(todoList()), key: genKey() },
  { name: "secondary", list: initTodoListUI(todoList()), key: genKey() },
];

const UI = () => {
  const body = document.body;

  const sideBar = document.createElement("div");
  const sideBarList = document.createElement("div");
  const sideBarListAddBtn = document.createElement("button");

  sideBar.classList.add("sidebar");
  sideBarList.classList.add("sidebar__list");
  sideBarListAddBtn.classList.add("sidebar__list-add-btn");

  sideBar.textContent = "That's just the way the cookie crumbles";
  sideBarListAddBtn.textContent = "+ Add List";

  listOfTodoLists.forEach((e) => {
    const list = document.createElement("button");
    list.classList.add("sidebar__list-item");
    list.textContent = e.name;
    list.setAttribute("key", e.key);

    list.addEventListener("click", () => {
      const current = document.querySelector(".container");
      console.log(current);
      body.removeChild(current);
      body.appendChild(e.list);
    });

    sideBarList.appendChild(list);
  });

  sideBar.appendChild(sideBarList);
  sideBar.appendChild(sideBarListAddBtn);

  body.appendChild(sideBar);
  body.appendChild(listOfTodoLists[0].list);
};

export default UI;
