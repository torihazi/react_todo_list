import { ChakraProvider, VStack } from "@chakra-ui/react";

import { InputTodo } from "./components/InputTodo";
import { CountBox } from "./components/CountBox";
import { TodoItems } from "./components/TodoItems";
import { useTodoManager } from "./hooks/useTodoManager";

function App() {
  const {
    todos,
    todoText,
    onChangeText,
    onClickAddTodo,
    onToggleComplete,
    onChangeUpdateText,
    onClickMemorizeDeletingId,
    onClickDeleteTodo,
    onClickToggleUpdate,
  } = useTodoManager();

  const incompleteTodos = todos.filter((item) => !item.isChecked);
  const completeTodos = todos.filter((item) => item.isChecked);

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
        />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
