import {
  Button,
  ChakraProvider,
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  VStack,
  Checkbox,
  List,
  ButtonGroup,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import "./App.css";
import { useState } from "react";

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
        <Box>
          <Heading textAlign="center" as="h1" size="2xl" mb={4}>
            Todoリスト
          </Heading>
          <InputGroup>
            <InputLeftElement>
              <CheckIcon color="teal.300" />
            </InputLeftElement>
            <Input
              htmlSize={30}
              variant="outline"
              placeholder="本日やるべきこと"
              value={todoText}
              onChange={onChangeText}
            />
            <Button colorScheme="teal" onClick={onClickAddTodo}>
              Todo
            </Button>
          </InputGroup>
        </Box>
        <Box
          minH="200px"
          minW="500px"
          border="1px"
          borderRadius="10"
          borderColor="gray.100"
          p={5}
        >
          <Heading textAlign="center" as="h2" size="lg">
            未完了リスト
          </Heading>
          <List spacing={2}>
            {incompleteTodos.map((todo, index) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={index}
              >
                {todo.isEditable ? (
                  <>
                    <Input
                      htmlSize={30}
                      variant="outline"
                      value={todo.text}
                      onChange={(e) => onChangeUpdateText(e, index)}
                    />
                    <Button onClick={() => onClickUpdate(index)}>更新</Button>
                  </>
                ) : (
                  <>
                    <Checkbox
                      isChecked={todo.isChecked}
                      onChange={() => onChangeComplete(index)}
                    >
                      {todo.text}
                    </Checkbox>
                    <ButtonGroup>
                      <Button onClick={() => onClickToggleUpdate(index)}>
                        編集
                      </Button>
                      <Button
                        onClick={() => onClickDeleteIncompleteTodo(index)}
                      >
                        削除
                      </Button>
                    </ButtonGroup>
                  </>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          minH="200px"
          minW="500px"
          border="1px"
          borderRadius="10"
          borderColor="gray.100"
          p={5}
        >
          <Heading textAlign="center" as="h2" size="lg">
            完了リスト
          </Heading>
          <List spacing={2}>
            {completeTodos.map((todo, index) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={index}
              >
                <Checkbox
                  isChecked={todo.isChecked}
                  onChange={() => onChangeBack(index)}
                >
                  {todo.text}
                </Checkbox>
                <ButtonGroup>
                  <Button onClick={() => onClickDeleteCompleteTodo(index)}>
                    削除
                  </Button>
                </ButtonGroup>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
