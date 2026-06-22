import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ViewHeader, Empty, AddTodo } from '.';
import { useState } from 'react';

/* 
1. StatusBar 색상 바꾸기
2. iOS/Android 운영 체제에 따라 다른 결과 보여주기
3. 이미지 불러오기
4. 사용자 입력받기
5. 커스텀 버튼 만들기
 */
const TodoApp = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dateFormatted = `${year}년 ${month}월 ${day}일`;

  // console.log(dateFormatted); // 에뮬레이터 개발자 도구에는 찍히지만, Metro 터미널엔 안 찍힘

  const { top, bottom } = useSafeAreaInsets();

  const todos = [];
  const [text, setText] = useState('');

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
            {todos.length > 0 ? (
              <View>
                <Text>todolist 영역</Text>
              </View>
            ) : (
              <Empty />
            )}
          </View>
        </View>

        <AddTodo text={text} setText={setText} />
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
