import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onDecrease = () => {
    setCount(count => --count);
  };
  const onIncrease = () => {
    setCount(count => ++count);
  };

  return (
    <View style={styles.container}>
      <Button title="-" onPress={onDecrease} />
      <Text style={styles.counter}>{count}</Text>
      <Button title="+" onPress={onIncrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  counter: {
    fontSize: 64,
    fontWeight: 'bold',
  },
});

export default Counter;
