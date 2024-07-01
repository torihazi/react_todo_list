import { ChakraProvider, VStack } from "@chakra-ui/react";

import "./App.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { CountBox } from "./components/CountBox";
import { TodoItems } from "./components/TodoItems";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);
  const [deletingId, setDeletingId] = useState();
  const incompleteTodos = todos.filter((item) => !item.isChecked);
  const completeTodos = todos.filter((item) => item.isChecked);

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

  return (
    <ChakraProvider>
      <VStack spacing={10}>
        <InputTodo
          todoText={todoText}
          onClick={onClickAddTodo}
          onChange={onChangeText}
        />
        <CountBox
          incompleteTodos={incompleteTodos}
          completeTodos={completeTodos}
        />
        <TodoItems
          incompleteTodos={incompleteTodos}
          incompleteListName="未完了"
          onChangeUpdateText={onChangeUpdateText}
          onToggleComplete={onToggleComplete}
          onClickToggleUpdate={onClickToggleUpdate}
          onClickDeleteTodo={onClickDeleteTodo}
          onClickMemorizeDeletingId={onClickMemorizeDeletingId}
          completeTodos={completeTodos}
          completeListName="完了"
          // onClickDeleteCompleteTodo={onClickDeleteCompleteTodo}
        />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
