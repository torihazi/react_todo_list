import {
  Button,
  ChakraProvider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);

  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAddTodo = () => {
    if (todoText === "") return;
    const newImcompleteTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newImcompleteTodos);
    setTodoText("");
  };

  return (
    <ChakraProvider>
      <Flex justify="center" mt={5}>
        <InputGroup width="auto">
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
        </InputGroup>
        <Button colorScheme="teal" onClick={onClickAddTodo}>
          Todo
        </Button>
      </Flex>
      <Flex justify="center">
        <UnorderedList>
          {imcompleteTodos.map((value, index) => (
            <ListItem key={index}>{value}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
