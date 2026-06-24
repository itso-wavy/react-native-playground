import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Todo } from '../types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoItem = ({
  item,
  onToggle,
  onDelete,
}: {
  item: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) => {
  const remove = (id: number) => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {
          text: '취소',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            onDelete(id);
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => onToggle(item.id)}>
        <View
          style={[styles.checkbox, !item.done ? styles.undone : styles.done]}
        >
          {item.done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
          {/* RN은 @2x, @3x 네이밍 컨벤션을 자동으로 인식함. require에 기본 파일만 넘기면 디바이스 픽셀 밀도에 따라 자동 설정됨 */}
        </View>
      </Pressable>

      <Text style={[styles.text, item.done && styles.strike]}>{item.text}</Text>

      <View style={styles.deleteWrapper}>
        {item.done && (
          <Icon
            name="delete"
            size={32 - 6}
            color="#ff5454"
            onPress={() => remove(item.id)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#a3a3ff',
    marginRight: 8,
  },
  undone: {
    backgroundColor: '#fff',
  },
  done: {
    backgroundColor: '#a3a3ff',
  },
  text: {
    flex: 1,
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 21.75,
    letterSpacing: 0.375,
    color: '#1D1F27',
  },
  strike: {
    color: '#9b9eac',
    textDecorationLine: 'line-through',
  },
  deleteWrapper: {
    width: 32,
    height: 32,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // delete: {
  //   marginLeft: 8,
  // },
  // deletePlaceholder: {
  //   width: 32,
  //   height: 32,
  // },
});

export default TodoItem;
