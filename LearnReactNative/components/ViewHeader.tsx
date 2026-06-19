import { Image, StyleSheet, Text, View } from 'react-native';

interface ViewHeaderProps {
  title: string;
}

const ViewHeader = ({ title }: ViewHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      {/* LeftWing */}
      <View style={styles.leftWing}>
        <Image
          source={require('../assets/icons/arrow-left.png')}
          style={styles.icon}
        />
      </View>

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
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    position: 'relative',
    gap: 8,
    borderWidth: 1,
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
    backgroundColor: 'lightblue',
    left: 0,
    right: 'auto',
  },
  rightWing: {
    minWidth: 36,
    height: 36,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    right: 0,
    left: 'auto',
  },
  centerView: {
    flex: 1,
    height: 36,
    justifyContent: 'center',
    backgroundColor: 'lightyellow',
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
