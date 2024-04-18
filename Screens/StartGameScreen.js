import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import GuessBoard from '../components/GuessBoard';
import Header from '../components/Header';
import InputContainer from '../components/InputContainer';
import GameOverScreen from './GameOverScreen';

const StartGameScreen = ({}) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [guessNumber, setGuessNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [guessTimes, setGuessTimes] = useState(0);
  const [guessListArray, setGuestListArray] = useState([]);
  const [gameOverScreen, setGameOverScreen] = useState(false);

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
    setGuessTimes((prev) => prev + 1);
    const rn = randomNumber(guessNumber, enteredNumber);
    setGuestListArray((prev) => [...prev, { id: prev.length + 1, number: rn }]);
    setGuessNumber(rn);
    if (enteredNumber == guessNumber) {
      alert('You win!!');
      setGameOverScreen(true);
    } else {
      alert('Better luck');
    }
  }

  const lowerPress = () => {
    // randomNumber(1, 50);
    setGuessTimes((prev) => prev + 1);
    const rn = randomNumber(enteredNumber, guessNumber);
    setGuestListArray((prev) => [...prev, { id: prev.length + 1, number: rn }]);
    setGuessNumber(rn);
    if (enteredNumber == guessNumber) {
      alert('You win!!');
      setGameOverScreen(true);
    } else {
      alert('Better luck');
    }
  };

  const reset = () => setEnteredNumber('');

  const handleStartGame = () => {
    setGuessTimes(0);
    setModalVisible(false);
    reset();
    setGuessNumber('');
    setGameOverScreen(false);
    setGuestListArray([]);
  };

  return (
    <>
      {!modalVisible && !gameOverScreen && (
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
        </View>
      )}

      {modalVisible && !gameOverScreen && (
        <GuessBoard
          leftBtnPress={lowerPress}
          rightBtnPress={higherPress}
          onChangeText={onChangeText}
          enterNumber={enteredNumber}
          guessNumber={guessNumber}
          guessTimes={guessTimes}
          setGuessTimes={setGuessTimes}
          guessListArray={guessListArray}
        />
      )}

      {gameOverScreen && (
        <GameOverScreen
          guessTimes={guessTimes}
          setGuessTimes={setGuessTimes}
          guessNumber={enteredNumber}
          handleStartGame={handleStartGame}
        />
      )}
    </>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  firstScreenContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
