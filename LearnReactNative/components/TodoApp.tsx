import { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ViewHeader, Empty, TodoList, AddTodo } from '.';
import { useState } from 'react';
import { Todo } from '../types';
import todosStorage from '../storages/todos-stroage';

// 유틸 함수는 컴포넌트에서 분리함(컴포넌트 내부 상태에 의존성이 없음)
const getDateString = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

/* 
1. StatusBar 색상 바꾸기
2. iOS/Android 운영 체제에 따라 다른 결과 보여주기
3. 이미지 불러오기
4. 사용자 입력받기
5. 커스텀 버튼 만들기
6. 투두 완료 상태 토글하기
 */
const TodoApp = () => {
  const { top, bottom } = useSafeAreaInsets();

  const today = new Date();
  const dateFormatted = getDateString(today);
  // console.log(dateFormatted); // 에뮬레이터 개발자 도구에는 찍히지만, Metro 터미널엔 안 찍힘

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const onInsert = (text: Todo['text']) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const newTodo = {
      id: nextId,
      text: text,
      done: false,
    };

    setTodos(prev => [...prev, newTodo]);
  };

  const onToggle = (todoId: Todo['id']) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) return { ...todo, done: !todo.done };
      else return todo;
    });

    setTodos(newTodos);
  };

  const onDelete = (todoId: Todo['id']) => {
    const targetIndex = todos.findIndex(todo => todo.id === todoId);
    const newTodos = [...todos];
    newTodos.splice(targetIndex, 1);

    setTodos(newTodos);
  };

  // storage로부터 todos를 불러오기 -> setTodos -> todos 변동시 storage에 저장하는 순서
  useEffect(() => {
    setLoading(true);
    todosStorage.get().then(savedTodo => {
      setTodos(savedTodo ?? []);
      setLoading(false); // 로드 완료
    });
  }, []);

  useEffect(() => {
    const todosJson = JSON.stringify(todos);
    todosStorage.set(todosJson);
  }, [todos]);

  return (
    <>
      <>
        <View style={[{ height: top }, styles.statusBar]} />
        <StatusBar barStyle="dark-content" />
      </>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: 'padding' })}
        style={styles.avoid}
      >
        <View style={styles.wrapper}>
          <ViewHeader
            title={dateFormatted}
            onPressLeftWing={() => console.log('123')}
          />
          <View style={{ flex: 1 }}>
            {loading ? (
              <ActivityIndicator size="large" />
            ) : todos.length > 0 ? (
              <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
            ) : (
              <Empty />
            )}
          </View>
        </View>

        <AddTodo onInsert={onInsert} />
      </KeyboardAvoidingView>

      <View style={[{ height: bottom }, styles.statusBar]} />
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#F7F7F7',
  },
  avoid: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  wrapper: {
    flex: 1,
  },
});

export default TodoApp;
