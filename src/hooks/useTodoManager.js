import { useState } from "react";

export const useTodoManager = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);
  const [deletingId, setDeletingId] = useState();

  const onChangeText = (e) => setTodoText(e.target.value);

  const onClickAddTodo = () => {
    if (todoText === "") return;
    setTodos([
      ...todos,
      { id: id, text: todoText, isEditable: false, isChecked: false },
    ]);
    setTodoText("");
    setId(id + 1);
  };

  const onToggleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isChecked: !todo.isChecked };
      } else {
        return todo;
      }
    });
    setTodos([...newTodos]);
  };

  const onChangeUpdateText = (e, id) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, text: e.target.value };
      } else {
        return todo;
      }
    });
    setTodos([...newTodos]);
  };

  const onClickMemorizeDeletingId = (id) => setDeletingId(id);

  const onClickDeleteTodo = () => {
    const newTodos = todos.filter((todo) => deletingId !== todo.id);
    setTodos(newTodos);
  };

  const onClickToggleUpdate = (id) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isEditable: !todo.isEditable };
      } else {
        return todo;
      }
    });
    setTodos([...newTodos]);
  };

  return {
    todos,
    todoText,
    onChangeText,
    onClickAddTodo,
    onToggleComplete,
    onChangeUpdateText,
    onClickMemorizeDeletingId,
    onClickDeleteTodo,
    onClickToggleUpdate,
  };
};
