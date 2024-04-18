import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.guessNumber}>
      <Text style={styles.guessNumberText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessNumber: {
    paddingHorizontal: 20,
    width: '80%',
    marginTop: 50,
    height: 55,
    borderColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'open-sans',
  },

  guessNumberText: {
    fontSize: 20,
    color: '#fff',
  },
});
