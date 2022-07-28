const todoListItem = (obj) => {
  return {
    title: obj.title,
    key: obj.key,
    type: obj.type,
    dueDate: obj.dueDate,
    priority: obj.priority,
    ...(obj.type == "Note" && { desc: obj.desc }),
    ...(obj.completed == "Note" && { completed: obj.completed || false }),
  };
};

const checklistTodoListItem = (e) => {
  return Object.assign(Object.create({}), todoListItem(e), {
    checklist: e.checklist,
  });
};

export { todoListItem, checklistTodoListItem };
