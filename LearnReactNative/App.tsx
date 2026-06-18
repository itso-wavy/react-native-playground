import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Box, Counter } from './components';
import { useState } from 'react';

function App() {
  const [isBoxVisible, setBoxVisible] = useState(false);
  const onPress = () => {
    setBoxVisible(prev => !prev);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => ({
            backgroundColor: '#ddd',
            padding: 10,
            borderRadius: 10,
            opacity: pressed ? 0.8 : 1,
            marginBottom: 10,
          })}
        >
          <Text>{isBoxVisible ? '박스 숨기기' : '박스 보이기'}</Text>
        </Pressable>
        {isBoxVisible && <Box text="wavy" size="lg" rounded />}
        <Counter />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
