import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Button from '../components/Button';
import GuessBoard from '../components/GuessBoard';
import Header from '../components/Header';
import InputContainer from '../components/InputContainer';

const StartGameScreen = ({}) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [guessNumber, setGuessNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  function onChangeText(text) {
    setEnteredNumber(text);
  }

  const checkNumber = () => {
    if (enteredNumber) {
      const rn = randomNumber(1, 100);
      setGuessNumber(rn);
      setModalVisible(true);
    } else {
      Alert.alert('Invalid Number!', 'Number has to be between 1 to 99.', [
        { text: 'Okay', style: 'destructive' },
      ]);
    }
  };

  function higherPress() {
    const rn = randomNumber(guessNumber, enteredNumber);
    setGuessNumber(rn);
    console.log('inside', enteredNumber == guessNumber);
    if (enteredNumber == guessNumber) {
      alert('You win!!');
    } else {
      alert('Better luck');
    }
  }

  const lowerPress = () => {
    // randomNumber(1, 50);
    const rn = randomNumber(enteredNumber, guessNumber);
    setGuessNumber(rn);
    console.log('inside', enteredNumber == guessNumber);
    if (enteredNumber == guessNumber) {
      alert('You win!!');
    } else {
      alert('Better luck');
    }
  };

  const reset = () => {
    setEnteredNumber('');
  };

  console.log('entered number', enteredNumber, 'guess number', guessNumber);
  console.log('outside', enteredNumber == guessNumber);
  return (
    <View style={styles.firstScreenContainer}>
      <Header title='Guess My Number' />
      <InputContainer
        title={`Enter a Number`}
        leftBtnTitle='Reset'
        rightBtnTitle='Confirm'
        leftBtnPress={reset}
        rightBtnPress={checkNumber}
        onChangeText={onChangeText}
        enterNumber={enteredNumber}
        textInput={true}
      />

      {modalVisible && (
        <GuessBoard
          visible={modalVisible}
          leftBtnPress={lowerPress}
          rightBtnPress={higherPress}
          onChangeText={onChangeText}
          enterNumber={enteredNumber}
          guessNumber={guessNumber}
        />
      )}
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  firstScreenContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
