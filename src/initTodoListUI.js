import Storage from "./storage";

const initTodoListUI = (todoList) => {
  console.log({ todoList });
  const addTodoButton = document.createElement("button");
  const container = document.createElement("div");
  const todoListDisplay = document.createElement("div");

  addTodoButton.classList.add("add-todo-btn");
  todoListDisplay.classList.add("todo-list");
  container.classList.add("container");

  addTodoButton.textContent = "Add Todo";

  container.appendChild(todoListDisplay);
  container.appendChild(addTodoButton);

  const populateTodoListUI = (item) => {
    if (!item.title && !item.desc) return;
    console.log(item);

    const todoItemChecklist = (checklist) => {
      const todoItemChecklistContainer = document.createElement("div");
      const todoItemChecklistAddBtn = document.createElement("button");
      const todoItemChecklist = document.createElement("ol");

      todoItemChecklistContainer.classList.add(
        "todo-item__checklist-container"
      );
      todoItemChecklist.classList.add("todo-item__checklist");
      todoItemChecklistAddBtn.classList.add("todo-item__checklist-add-btn");

      todoItemChecklistAddBtn.textContent = "+ Add";

      checklist.forEach((e, i) => {
        if (e.item == "") return;

        const todoItemChecklistItem = document.createElement("li");
        const todoItemChecklistItemCheck = document.createElement("input");
        const todoItemChecklistItemDesc = document.createElement("input");
        const todoItemChecklistItemDelete = document.createElement("button");

        todoItemChecklistItem.classList.add("todo-item__checklist-item");
        todoItemChecklistItemCheck.classList.add(
          "todo-item__checklist-item-check"
        );
        todoItemChecklistItemDesc.classList.add(
          "todo-item__checklist-item-desc"
        );
        todoItemChecklistItemDelete.classList.add(
          "todo-item__checklist-item-delete"
        );

        todoItemChecklistItemCheck.type = "checkbox";
        todoItemChecklistItemDesc.value = e.item;
        todoItemChecklistItemDelete.textContent = "Delete";
        todoItemChecklistItem.setAttribute("data-key", e.key);

        if (e.completed) {
          todoItemChecklistItemCheck.setAttribute("checked", "");
          todoItemChecklistItemDesc.classList.add("line-through");
        }

        todoItemChecklistItem.appendChild(todoItemChecklistItemCheck);
        todoItemChecklistItem.appendChild(todoItemChecklistItemDesc);
        todoItemChecklistItem.appendChild(todoItemChecklistItemDelete);
        todoItemChecklist.appendChild(todoItemChecklistItem);

        todoItemChecklistItemDelete.addEventListener("click", (element) => {
          const current = todoItemChecklistItem.getAttribute("data-key");
          checklist.forEach((e, i) => {
            if (e.key == current) {
              checklist.splice(i, 1);
              Storage.updateTodoListItem(todoList);
            }
          });
          todoItemChecklist.removeChild(todoItemChecklistItem);
        });

        todoItemChecklistItemDesc.addEventListener("input", (element) => {
          const current = todoItemChecklistItem.getAttribute("data-key");
          checklist.forEach((e, i) => {
            if (e.key == current) {
              checklist[i].item = todoItemChecklistItemDesc.value;
              Storage.updateTodoListItem(todoList);
            }
          });
        });

        todoItemChecklistItemCheck.addEventListener("input", (e) => {
          const current = todoItemChecklistItem.getAttribute("data-key");
          if (e.target.checked) {
            checklist.forEach((e, i) => {
              if (e.key == current) {
                checklist[i].completed = true;
                Storage.updateTodoListItem(todoList);
                todoItemChecklistItemDesc.classList.add("line-through");
              }
            });
          } else {
            checklist.forEach((e, i) => {
              if (e.key == current) {
                checklist[i].completed = false;
                Storage.updateTodoListItem(todoList);
                todoItemChecklistItemDesc.classList.remove("line-through");
              }
            });
          }
        });
      });

      todoItemChecklistAddBtn.addEventListener("click", (e) => {
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const charactersLength = characters.length;

        for (var i = 0; i < 5; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }

        checklist.push({
          item: "",
          completed: false,
          key: result,
        });
        Storage.updateTodoListItem(todoList);

        const todoItemChecklistItem = document.createElement("li");
        const todoItemChecklistItemCheck = document.createElement("input");
        const todoItemChecklistItemDesc = document.createElement("input");
        const todoItemChecklistItemDelete = document.createElement("button");

        todoItemChecklistItem.classList.add("todo-item__checklist-item");
        todoItemChecklistItemCheck.classList.add(
          "todo-item__checklist-item-check"
        );
        todoItemChecklistItemDesc.classList.add(
          "todo-item__checklist-item-desc"
        );
        todoItemChecklistItemDelete.classList.add(
          "todo-item__checklist-item-delete"
        );

        todoItemChecklistItemCheck.type = "checkbox";
        todoItemChecklistItemDelete.textContent = "Delete";
        todoItemChecklistItem.setAttribute("data-key", result);

        todoItemChecklistItemCheck.addEventListener("input", (e) => {
          todoItemChecklistItemDesc.classList.toggle("line-through");
        });

        todoItemChecklistItem.appendChild(todoItemChecklistItemCheck);
        todoItemChecklistItem.appendChild(todoItemChecklistItemDesc);
        todoItemChecklistItem.appendChild(todoItemChecklistItemDelete);
        todoItemChecklist.appendChild(todoItemChecklistItem);

        todoItemChecklistItemDelete.addEventListener("click", (element) => {
          const current = todoItemChecklistItem.getAttribute("data-key");
          checklist.forEach((e, i) => {
            if (e.key == current) {
              checklist.splice(i, 1);
              Storage.updateTodoListItem(todoList);
            }
          });
          todoItemChecklist.removeChild(todoItemChecklistItem);
        });

        todoItemChecklistItemDesc.addEventListener("input", (element) => {
          const current = todoItemChecklistItem.getAttribute("data-key");
          checklist.forEach((e, i) => {
            if (e.key == current) {
              checklist[i].item = todoItemChecklistItemDesc.value;
              Storage.updateTodoListItem(todoList);
            }
          });
        });

        todoItemChecklistItemCheck.addEventListener("input", (e) => {
          const current = todoItemChecklistItem.getAttribute("data-key");
          if (e.target.checked) {
            checklist.forEach((e, i) => {
              if (e.key == current) {
                checklist[i].completed = true;
                Storage.updateTodoListItem(todoList);
                todoItemChecklistItemDesc.classList.add("line-through");
              }
            });
          } else {
            checklist.forEach((e, i) => {
              if (e.key == current) {
                checklist[i].completed = false;
                Storage.updateTodoListItem(todoList);
                todoItemChecklistItemDesc.classList.remove("line-through");
              }
            });
          }
        });
      });

      todoItemChecklistContainer.appendChild(todoItemChecklist);
      todoItemChecklistContainer.appendChild(todoItemChecklistAddBtn);

      return todoItemChecklistContainer;
    };

    const todoItem = document.createElement("div");
    const todoItemTitle = document.createElement("h3");
    const todoItemDesc = document.createElement("p");
    const todoItemCompleteBtn = document.createElement("input");
    const todoItemRemoveBtn = document.createElement("button");

    todoItem.classList.add("todo-item");
    todoItemTitle.classList.add("todo-item__title");
    todoItemDesc.classList.add("todo-item__desc");
    todoItemCompleteBtn.classList.add("todo-item__complete-btn");
    todoItemRemoveBtn.classList.add("todo-item__remove-btn");

    todoItemCompleteBtn.type = "checkbox";
    todoItemTitle.textContent = item.title;
    todoItemDesc.textContent = item.desc;
    todoItemRemoveBtn.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 354.319 354.319" style="enable-background:new 0 0 354.319 354.319;" xml:space="preserve">
    <path id="XMLID_2_" d="M293.765,125.461l-41.574-17.221l17.221-41.574c3.17-7.654-0.464-16.428-8.118-19.599L150.428,1.146
      C142.775-2.024,134,1.61,130.83,9.264l-17.221,41.574L72.035,33.617c-7.654-3.17-16.428,0.464-19.599,8.118
      c-3.17,7.654,0.464,16.428,8.118,19.599l55.433,22.961l96.628,40.024H87.16c-8.284,0-15,6.716-15,15v200c0,8.284,6.716,15,15,15h180
      c8.284,0,15-6.716,15-15V153.126l0.125,0.052c1.877,0.777,3.821,1.146,5.734,1.146c5.886,0,11.472-3.487,13.864-9.264
      C305.053,137.406,301.419,128.631,293.765,125.461z M141.326,62.318l11.48-27.716l83.148,34.441l-11.48,27.716L182.9,79.539
      L141.326,62.318z"/>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;
    todoItem.setAttribute("data-key", item.key);

    if (item.type === "Checklist") {
      todoItem.classList.add("check");
      todoItemTitle.className = "check-title";
      todoItemRemoveBtn.className = "check-remove";
      todoItem.appendChild(todoItemTitle);
      todoItem.appendChild(todoItemChecklist(item.checklist));
      todoItem.appendChild(todoItemRemoveBtn);
    } else {
      todoItem.appendChild(todoItemCompleteBtn);
      todoItem.appendChild(todoItemTitle);
      todoItem.appendChild(todoItemDesc);
      todoItem.appendChild(todoItemRemoveBtn);
    }

    todoListDisplay.appendChild(todoItem);

    todoItemCompleteBtn.addEventListener("input", (e) => {
      const current = todoItem.getAttribute("data-key");

      if (e.target.checked) {
        todoList.forEach((e, i) => {
          if (e.key == current) {
            todoList[i].completed = true;
            Storage.updateTodoListItem(todoList);
            todoItemTitle.classList.add("line-through");
            todoItemDesc.classList.add("line-through");
          }
        });
      } else {
        todoList.forEach((e, i) => {
          if (e.key == current) {
            todoList[i].completed = false;
            Storage.updateTodoListItem(todoList);
            todoItemTitle.classList.remove("line-through");
            todoItemDesc.classList.remove("line-through");
          }
        });
      }
    });

    todoItemRemoveBtn.addEventListener("click", (e) => {
      const current = todoItem.getAttribute("data-key");
      todoListDisplay.removeChild(todoItem);
      todoList.forEach((e, i) => {
        if (e.key == current) {
          todoList.splice(i, 1);
          Storage.updateTodoListItem(todoList);
        }
      });
    });
  };

  const addTodoFormUI = (todoListEntry) => {
    const addTodoForm = document.createElement("div");
    const addTodoFormCancel = document.createElement("button");
    const addTodoFormSubmit = document.createElement("button");
    const addTodoFormTitle = document.createElement("input");
    const addTodoFormDesc = document.createElement("input");
    const addTodoFormType = document.createElement("select");
    const addTodoFormDueDate = document.createElement("input");
    const addTodoFormPriority = document.createElement("select");
    const optionNote = document.createElement("option");
    const optionChecklist = document.createElement("option");
    const optionLow = document.createElement("option");
    const optionMed = document.createElement("option");
    const optionHigh = document.createElement("option");

    const addTodoFormChecklistContainer = document.createElement("div");
    const addTodoFormChecklist = document.createElement("div");
    addTodoFormChecklist.classList.add("add-todo-form__checklist");
    addTodoFormChecklistContainer.style.display = "none";

    const addTodoFormChecklistAdd = document.createElement("button");
    addTodoFormChecklistAdd.classList.add("add-todo-form__checklist-add");
    addTodoFormChecklistAdd.textContent = "+ Add";

    const checkListItem = () => {
      const checklistItem = document.createElement("div");
      const checklistItemCheck = document.createElement("input");
      const checklistItemDesc = document.createElement("input");
      const checklistItemDelete = document.createElement("button");

      checklistItem.classList.add("checklist-item");
      checklistItemCheck.classList.add("checklist-item__check");
      checklistItemDesc.classList.add("checklist-item__desc");
      checklistItemDelete.classList.add("checklist-item__delete");

      checklistItemCheck.type = "checkbox";
      checklistItemDelete.textContent = "Delete";

      checklistItem.appendChild(checklistItemCheck);
      checklistItem.appendChild(checklistItemDesc);

      if (addTodoFormChecklist.firstChild) {
        checklistItem.appendChild(checklistItemDelete);
      }

      addTodoFormChecklist.appendChild(checklistItem);

      checklistItemCheck.addEventListener("input", (e) => {
        checklistItemDesc.classList.add("line-through");
      });

      //Delete button
      checklistItemDelete.addEventListener("click", (e) => {
        if (addTodoFormChecklist.firstChild === e.target.parentNode) return;
        e.target.parentNode.remove();
      });

      return checklistItem;
    };

    addTodoFormChecklist.appendChild(checkListItem());
    addTodoFormChecklistContainer.appendChild(addTodoFormChecklist);
    addTodoFormChecklistContainer.appendChild(addTodoFormChecklistAdd);

    addTodoFormDueDate.type = "date";

    optionNote.value = "Note";
    optionChecklist.value = "Checklist";
    optionNote.textContent = "Note";
    optionChecklist.textContent = "Checklist";

    optionLow.value = "Low";
    optionMed.value = "Med";
    optionHigh.value = "High";
    optionLow.textContent = "Low";
    optionMed.textContent = "Med";
    optionHigh.textContent = "High";

    addTodoFormType.appendChild(optionNote);
    addTodoFormType.appendChild(optionChecklist);

    addTodoFormPriority.appendChild(optionLow);
    addTodoFormPriority.appendChild(optionMed);
    addTodoFormPriority.appendChild(optionHigh);

    addTodoForm.classList.add("add-todo-form");
    addTodoFormTitle.classList.add("add-todo-form__title");
    addTodoFormDesc.classList.add("add-todo-form__desc");
    addTodoFormType.classList.add("add-todo-form__type");
    addTodoFormDueDate.classList.add("add-todo-form__due-date");
    addTodoFormPriority.classList.add("add-todo-form__priority");
    addTodoFormCancel.classList.add("add-todo-form__cancel");
    addTodoFormSubmit.classList.add("add-todo-form__submit");

    addTodoFormTitle.placeholder = "Title";
    addTodoFormDesc.placeholder = "Desc";

    addTodoFormCancel.textContent = "Cancel";
    addTodoFormSubmit.textContent = "Add Todo";

    addTodoForm.appendChild(addTodoFormTitle);
    addTodoForm.appendChild(addTodoFormDesc);
    addTodoForm.appendChild(addTodoFormChecklistContainer);
    addTodoForm.appendChild(addTodoFormType);
    addTodoForm.appendChild(addTodoFormDueDate);
    addTodoForm.appendChild(addTodoFormPriority);
    addTodoForm.appendChild(addTodoFormCancel);
    addTodoForm.appendChild(addTodoFormSubmit);

    addTodoFormChecklistAdd.addEventListener("click", (e) => {
      addTodoFormChecklist.appendChild(checkListItem());
    });

    addTodoFormType.addEventListener("input", (e) => {
      if (addTodoFormType.value === "Checklist") {
        addTodoFormDesc.style.display = "none";
        addTodoFormChecklistContainer.style.display = "block";
      } else {
        addTodoFormDesc.style.display = "block";
        addTodoFormChecklistContainer.style.display = "none";
      }
    });

    addTodoFormSubmit.addEventListener("click", (e) => {
      if (!addTodoFormTitle.value) return;

      const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;

      for (var i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }

      const checklist = [];

      addTodoFormChecklist.childNodes.forEach((e, i) => {
        if (e.childNodes[1].value == "") return;
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const charactersLength = characters.length;

        for (var i = 0; i < 5; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }

        checklist.push({
          item: e.childNodes[1].value,
          completed: e.childNodes[0].checked ? true : false,
          key: result,
        });
        Storage.updateTodoListItem(todoList);
      });

      todoListEntry.add({
        title: addTodoFormTitle.value,
        type: addTodoFormType.value,
        desc: addTodoFormDesc.value,
        dueDate: addTodoFormDueDate.value,
        priority: addTodoFormPriority.value,
        checklist: checklist,
        key: result,
      });
      Storage.updateTodoList();
      addTodoButton.removeAttribute("disabled");
      addTodoForm.remove();

      populateTodoListUI({
        title: addTodoFormTitle.value,
        type: addTodoFormType.value,
        desc: addTodoFormDesc.value,
        dueDate: addTodoFormDueDate.value,
        priority: addTodoFormPriority.value,
        checklist: checklist,
        key: result,
      });
    });

    addTodoFormCancel.addEventListener("click", (e) => {
      addTodoButton.removeAttribute("disabled");
      addTodoForm.remove();
    });

    return addTodoForm;
  };

  if (!todoList) {
    console.log("Nah nothing here");
  } else {
    todoList.forEach((e) => {
      populateTodoListUI(e);
    });
  }

  addTodoButton.addEventListener("click", (e) => {
    todoListDisplay.appendChild(addTodoFormUI(todoList));
    addTodoButton.setAttribute("disabled", "");
  });

  return container;
};

export default initTodoListUI;
