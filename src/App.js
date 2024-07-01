import { ChakraProvider, VStack } from "@chakra-ui/react";

import "./App.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { CountBox } from "./components/CountBox";
import { TodoItems } from "./components/TodoItems";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const incompleteTodos = todos.filter((item) => !item.isChecked);
  const completeTodos = todos.filter((item) => item.isChecked);

  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAddTodo = () => {
    if (todoText === "") return;
    setTodos([
      ...todos,
      { text: todoText, isEditable: false, isChecked: false },
    ]);
    setTodoText("");
  };

  const onChangeComplete = (index) => {
    const newCompleteTodos = [
      ...completeTodos,
      { ...incompleteTodos[index], isChecked: true },
    ];
    incompleteTodos.splice(index, 1);
    setTodos([...newCompleteTodos, ...incompleteTodos]);
  };

  const onChangeBack = (index) => {
    const newIncompleteTodos = [
      ...incompleteTodos,
      { ...completeTodos[index], isChecked: false },
    ];
    completeTodos.splice(index, 1);
    setTodos([...completeTodos, ...newIncompleteTodos]);
  };

  const onChangeUpdateText = (e, index) => {
    const newTodos = incompleteTodos.map((todo, i) => {
      if (i === index) {
        return { ...todo, text: e.target.value };
      } else {
        return todo;
      }
    });
    setTodos([...completeTodos, ...newTodos]);
  };

  const onClickDeleteIncompleteTodo = (index) => {
    incompleteTodos.splice(index, 1);
    setTodos([...completeTodos, ...incompleteTodos]);
  };

  const onClickDeleteCompleteTodo = (index) => {
    completeTodos.splice(index, 1);
    setTodos([...completeTodos, ...incompleteTodos]);
  };

  const onClickToggleUpdate = (index) => {
    const newTodos = incompleteTodos.map((obj, i) => {
      if (i === index) {
        return { ...obj, isEditable: !obj.isEditable };
      } else {
        return obj;
      }
    });
    setTodos([...completeTodos, ...newTodos]);
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
          onChangeComplete={onChangeComplete}
          onClickToggleUpdate={onClickToggleUpdate}
          onClickDeleteIncompleteTodo={onClickDeleteIncompleteTodo}
          completeTodos={completeTodos}
          completeListName="完了"
          onChangeBack={onChangeBack}
          onClickDeleteCompleteTodo={onClickDeleteCompleteTodo}
        />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
