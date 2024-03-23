import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress} android_ripple={{ color: '#640233' }}>
        <Text style={styles.textButton}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
    padding: 3,
    backgroundColor: '#ae506b',
    borderRadius: 20,
    color: '#fff',
  },

  textButton: {
    color: '#fff',
    fontSize: 15,
  },
});
