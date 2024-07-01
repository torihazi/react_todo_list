import { DeleteIcon, EditIcon, RepeatIcon } from "@chakra-ui/icons";
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
  Input,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";

export const TodoItems = (props) => {
  const {
    incompleteTodos,
    completeTodos,
    incompleteListName,
    completeListName,
    onChangeUpdateText,
    onClickUpdate,
    onChangeComplete,
    onClickToggleUpdate,
    onClickDeleteIncompleteTodo,
    onClickDeleteCompleteTodo,
    onChangeBack,
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        minH="200px"
        minW="500px"
        border="1px"
        borderRadius="10"
        borderColor="gray.100"
        p={5}
      >
        <Heading textAlign="center" as="h2" size="lg">
          {incompleteListName}
        </Heading>
        <List spacing={2}>
          {incompleteTodos.map((todo, index) => (
            <ListItem display="flex" justifyContent="space-between" key={index}>
              {todo.isEditable ? (
                <>
                  <Input
                    htmlSize={30}
                    variant="outline"
                    value={todo.text}
                    onChange={(e) => onChangeUpdateText(e, index)}
                  />
                  <Button
                    colorScheme="teal"
                    onClick={() => onClickUpdate(index)}
                  >
                    <RepeatIcon />
                  </Button>
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
                    <Button
                      colorScheme="teal"
                      onClick={() => onClickToggleUpdate(index)}
                    >
                      <EditIcon />
                    </Button>
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
                                onClickDeleteIncompleteTodo(index);
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
          {completeListName}
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
    </>
  );
};
