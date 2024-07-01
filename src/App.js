import { ChakraProvider, VStack } from "@chakra-ui/react";

import "./App.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { CountBox } from "./components/CountBox";
import { TodoItems } from "./components/TodoItems";

function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };

  const onChangeUpdateText = (e, index) => {
    const newTodos = incompleteTodos.map((todo, i) => {
      if (i === index) {
        return { ...todo, text: e.target.value };
      } else {
        return todo;
      }
    });
    setIncompleteTodos(newTodos);
  };

  const onClickAddTodo = () => {
    if (todoText === "") return;
    const newIncompleteTodos = [
      ...incompleteTodos,
      { text: todoText, isEditable: false, isChecked: false },
    ];
    setIncompleteTodos(newIncompleteTodos);
    setTodoText("");
  };

  const onChangeComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [
      ...completeTodos,
      { ...incompleteTodos[index], isChecked: true },
    ];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onChangeBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [
      ...incompleteTodos,
      { ...completeTodos[index], isChecked: false },
    ];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickDeleteIncompleteTodo = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickDeleteCompleteTodo = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickToggleUpdate = (index) => {
    const newTodos = incompleteTodos.map((obj, i) => {
      if (i === index) {
        return { ...obj, isEditable: true };
      } else {
        return obj;
      }
    });
    setIncompleteTodos(newTodos);
  };

  const onClickUpdate = (index) => {
    const newTodos = incompleteTodos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isEditable: false };
      } else {
        return todo;
      }
    });
    setIncompleteTodos(newTodos);
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
          onClickUpdate={onClickUpdate}
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
