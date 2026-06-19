import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface ViewHeaderProps {
  title: string;
  onPressLeftWing: () => void;
}

const ViewHeader = ({ title, onPressLeftWing }: ViewHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      {/* LeftWing */}

      <Pressable
        onPress={onPressLeftWing}
        style={({ pressed }) => [
          styles.leftWing,
          pressed && { backgroundColor: '#00000010' },
        ]}
      >
        <Image
          source={require('../assets/icons/arrow-left.png')}
          style={styles.icon}
          resizeMode="cover"
        />
      </Pressable>

      {/* CenterView */}
      <View style={styles.centerView}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* RightWing */}
      <View style={styles.rightWing}>RightWing</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    position: 'relative',
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  leftWing: {
    minWidth: 36,
    height: 36,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 'auto',
    borderRadius: 6,
  },
  rightWing: {
    minWidth: 36,
    height: 36,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    left: 'auto',
    borderRadius: 6,
  },
  centerView: {
    flex: 1,
    height: 36,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#1D1F27',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 26,
    letterSpacing: -0.36,
  },
});

export default ViewHeader;
