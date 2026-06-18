import { StyleSheet, Text, View } from 'react-native';

interface BoxProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  backgroundColor?: string;
}

const Box = ({
  text = 'noname',
  size = 'sm',
  rounded = false,
  backgroundColor,
}: BoxProps) => {
  return (
    <View
      style={[
        styles.box,
        styles[size],
        rounded && styles.rounded,
        backgroundColor && { backgroundColor },
      ]}
    >
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 64,
  },
  rounded: {
    borderRadius: 16,
  },
  sm: {
    width: 32,
    height: 32,
  },
  md: {
    width: 64,
    height: 64,
  },
  lg: {
    width: 128,
    height: 128,
  },
});

export default Box;
