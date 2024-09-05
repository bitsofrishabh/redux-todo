export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i.todo === todo);

  if (!hasTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: [{ id: todo, todo }, ...todos],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    todo: { todos },
  } = getState();

   const updatedTodos = todos.filter((t) => t.id !== todo.id);
  
   dispatch({
    type: "REMOVE_TODO",
    payload: updatedTodos,
  });
};
