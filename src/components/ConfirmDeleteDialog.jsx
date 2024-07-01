import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

export const ConfirmDeleteDialog = (props) => {
  const { isOpen, onClose, onClickDeleteTodo } = props;
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            確認画面
          </AlertDialogHeader>

          <AlertDialogBody>本当に削除して良いですか？</AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>しない</Button>
            <Button
              ml={3}
              colorScheme="red"
              onClick={() => {
                onClickDeleteTodo();
                onClose();
              }}
            >
              する
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
