import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from './Button';

export default function InputContainer({
  onChangeText,
  title,
  leftBtnTitle,
  rightBtnTitle,
  leftBtnPress,
  rightBtnPress,
  enterNumber,
  textInput,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.enterNumber}>{title}</Text>
      {textInput && (
        <TextInput
          style={styles.input}
          value={enterNumber}
          keyboardType='number-pad'
          onChangeText={onChangeText}
        />
      )}
      <View style={styles.buttonWrapper}>
        <View style={{ width: '50%' }}>
          <Button title={leftBtnTitle} onPress={leftBtnPress} />
        </View>
        <View style={{ width: '50%' }}>
          <Button title={rightBtnTitle} onPress={rightBtnPress} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#72063c',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginTop: 40,
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    fontFamily: 'open-sans',
  },

  enterNumber: {
    fontSize: 20,
    color: '#dcac19',
  },

  input: {
    width: '20%',
    borderBottomWidth: 2,
    borderBottomColor: '#dcac19',
    height: 55,
    fontSize: 20,
    color: '#dcac19',
    fontWeight: '600',
    textAlign: 'center',
  },

  buttonWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
  },
});
