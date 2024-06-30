import { Flex, Text } from "@chakra-ui/react";

export const CountBox = (props) => {
  const { incompleteTodos, completeTodos } = props;

  return (
    <Flex>
      <Text mr={2}>
        完了済み: {incompleteTodos.length + completeTodos.length}
      </Text>
      <Text mr={2}>未完了: {incompleteTodos.length} </Text>
      <Text>完了: {completeTodos.length}</Text>
    </Flex>
  );
};
