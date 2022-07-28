import todoList from "./todoList/todoList";

const listOfTodoLists = [];

const UI = () => {
  const body = document.body;

  // initial

  const mainTodoList = todoList();

  const initTodoListUI = (todoList) => {
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
              }
            });
            todoItemChecklist.removeChild(todoItemChecklistItem);
          });

          todoItemChecklistItemDesc.addEventListener("input", (element) => {
            const current = todoItemChecklistItem.getAttribute("data-key");
            checklist.forEach((e, i) => {
              if (e.key == current) {
                checklist[i].item = todoItemChecklistItemDesc.value;
              }
            });
          });

          todoItemChecklistItemCheck.addEventListener("input", (e) => {
            const current = todoItemChecklistItem.getAttribute("data-key");
            if (e.target.checked) {
              checklist.forEach((e, i) => {
                if (e.key == current) {
                  checklist[i].completed = true;
                  todoItemChecklistItemDesc.classList.add("line-through");
                }
              });
            } else {
              checklist.forEach((e, i) => {
                if (e.key == current) {
                  checklist[i].completed = false;
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
              }
            });
            todoItemChecklist.removeChild(todoItemChecklistItem);
          });

          todoItemChecklistItemDesc.addEventListener("input", (element) => {
            const current = todoItemChecklistItem.getAttribute("data-key");
            checklist.forEach((e, i) => {
              if (e.key == current) {
                checklist[i].item = todoItemChecklistItemDesc.value;
              }
            });
          });

          todoItemChecklistItemCheck.addEventListener("input", (e) => {
            const current = todoItemChecklistItem.getAttribute("data-key");
            if (e.target.checked) {
              checklist.forEach((e, i) => {
                if (e.key == current) {
                  checklist[i].completed = true;
                  todoItemChecklistItemDesc.classList.add("line-through");
                }
              });
            } else {
              checklist.forEach((e, i) => {
                if (e.key == current) {
                  checklist[i].completed = false;
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
      todoItemRemoveBtn.textContent = "Remove";
      todoItem.setAttribute("data-key", item.key);
      console.log(item.key);

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
          todoListEntry.forEach((e, i) => {
            if (e.key == current) {
              todoListEntry[i].completed = true;
              todoItemTitle.classList.add("line-through");
              todoItemDesc.classList.add("line-through");
            }
          });
        } else {
          todoListEntry.forEach((e, i) => {
            if (e.key == current) {
              todoListEntry[i].completed = false;
              todoItemTitle.classList.remove("line-through");
              todoItemDesc.classList.remove("line-through");
            }
          });
        }
      });

      todoItemRemoveBtn.addEventListener("click", (e) => {
        const current = todoItem.getAttribute("data-key");
        todoListDisplay.removeChild(todoItem);
        todoListEntry.forEach((e, i) => {
          if (e.key == current) {
            todoListEntry.splice(i, 1);
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

    addTodoButton.addEventListener("click", (e) => {
      todoListDisplay.appendChild(addTodoFormUI(todoList));
      addTodoButton.setAttribute("disabled", "");
    });

    return container;
  };

  const sideBar = document.createElement("div");

  sideBar.classList.add("sidebar");

  sideBar.textContent = "That's just the way the cookie crumbles";

  body.appendChild(sideBar);
  body.appendChild(initTodoListUI(mainTodoList));
};

export default UI;
