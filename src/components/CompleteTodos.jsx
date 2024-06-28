import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Heading,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";

export const CompleteTodos = (props) => {
  const { completeTodos, onChangeBack, onClickDeleteCompleteTodo } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
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
          <ListItem display="flex" justifyContent="space-between" key={index}>
            <Checkbox
              isChecked={todo.isChecked}
              onChange={() => onChangeBack(index)}
            >
              {todo.text}
            </Checkbox>
            <ButtonGroup>
              <Button colorScheme="red" onClick={onOpen}>
                <DeleteIcon />
              </Button>
              <AlertDialog isOpen={isOpen} onClose={onClose}>
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      確認画面
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      本当に削除して良いですか？
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button onClick={onClose}>しない</Button>
                      <Button
                        ml={3}
                        colorScheme="red"
                        onClick={() => {
                          onClickDeleteCompleteTodo(index);
                          onClose();
                        }}
                      >
                        する
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </ButtonGroup>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
