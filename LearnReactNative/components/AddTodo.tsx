import { useState } from 'react';
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

const AddTodo = ({ onInsert }: { onInsert: (text: string) => void }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    console.log(trimmedText);
    onInsert(trimmedText); // TextInput 사용시 trim 처리 할 것!
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputRow}>
        <TextInput
          showSoftInputOnFocus={true} // 소프트 키보드 강제
          placeholder="할일을 입력하세요."
          style={styles.inputArea}
          placeholderTextColor="#858588"
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
          returnKeyType="send"
        />
        {Platform.select({
          ios: (
            <TouchableOpacity onPress={handleSubmit} activeOpacity={0.7}>
              <SubmitButton />
            </TouchableOpacity>
          ),
          android: (
            <View style={styles.submitButtonWrapper}>
              <TouchableNativeFeedback onPress={handleSubmit}>
                <SubmitButton />
              </TouchableNativeFeedback>
            </View>
          ),
        })}
      </View>
    </View>
  );
};

const SubmitButton = () => (
  <View style={styles.submitButton}>
    <Image
      source={require('../assets/icons/add_white/add_white.png')}
      style={styles.addIcon}
    />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
    height: 58,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#e8e8f0',
    borderRadius: 24,
    paddingHorizontal: 12,
  },
  inputArea: {
    flex: 1,
    fontSize: 14,
    color: '#1D1F27',
    fontWeight: 500,
    lineHeight: 19.6,
    letterSpacing: -0.028,
  },
  submitButtonWrapper: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  submitButton: {
    width: 24,
    height: 24,
    backgroundColor: '#48484b',
    borderRadius: 12,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: 12,
    height: 12,
  },
});

export default AddTodo;
