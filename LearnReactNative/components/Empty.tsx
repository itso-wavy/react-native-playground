import { StyleSheet, Text, View } from 'react-native';

const Empty = () => {
  return (
    <View style={styles.wrapper}>
      <Text>야호! 할일이 없습니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Empty;
