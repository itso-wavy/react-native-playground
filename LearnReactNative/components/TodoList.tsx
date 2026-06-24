import { FlatList, StyleSheet, View } from 'react-native';
import { Todo } from '../types';
import TodoItem from './TodoItem';

const TodoListSeparator = () => <View style={styles.separator} />;

const TodoList = ({
  todos,
  onToggle,
  onDelete,
}: {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem item={item} onToggle={onToggle} onDelete={onDelete} />
      )}
      style={styles.wrapper}
      ItemSeparatorComponent={TodoListSeparator}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#e4e4e4',
  },
});

export default TodoList;
