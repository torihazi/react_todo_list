import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
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
          onChange={onChange}
        />
        <Button colorScheme="teal" onClick={onClick}>
          Todo
        </Button>
      </InputGroup>
    </Box>
  );
};
