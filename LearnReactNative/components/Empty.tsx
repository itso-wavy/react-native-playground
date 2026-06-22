import { Image, StyleSheet, Text, View } from 'react-native';

const Empty = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.emptyImage}
        resizeMode="contain"
      />
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
  emptyImage: {
    width: 240,
    height: 179,
    marginBottom: 8,
  },
});

export default Empty;
