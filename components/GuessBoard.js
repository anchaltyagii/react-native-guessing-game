import { StyleSheet, Text, View, Modal } from 'react-native';
import Header from './Header';
import InputContainer from './InputContainer';

export default function GuessBoard({
  visible,
  leftBtnPress,
  rightBtnPress,
  onChangeText,
  enterNumber,
  guessNumber,
}) {
  return (
    <>
      <Modal animationType='slide' visible={visible}>
        <View style={styles.modalContainer}>
          <Header title={`Opponent's Guess`} />
          <View style={styles.numberBox}>
            <Text style={styles.numberBoxText}>{guessNumber}</Text>
          </View>
          <InputContainer
            title={`Higher or Lower?`}
            leftBtnTitle='-'
            rightBtnTitle='+'
            leftBtnPress={leftBtnPress}
            rightBtnPress={rightBtnPress}
            onChangeText={onChangeText}
            enterNumber={enterNumber}
            textInput={false}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'rgb(181,195,34)',
  },

  numberBox: {
    width: '80%',
    marginTop: 50,
    height: 55,
    borderColor: '#000',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberBoxText: {
    fontSize: 20,
    color: '#000',
  },
});
