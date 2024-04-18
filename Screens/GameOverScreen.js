import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { Colors } from '../constants/colors';

const GameOverScreen = ({
  setGuessTimes,
  guessTimes,
  guessNumber,
  handleStartGame,
}) => {
  return (
    <>
      <View style={styles.gameOverContainer}>
        <View style={styles.headerStyles}>
          <Header title='Game Over!' />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/game_over_screen.png')}
            style={styles.overimage}
          />
        </View>
        <View>
          <Text style={styles.textMessage}>
            Your phone needed <Text style={styles.roundsGuessText}>{guessTimes}</Text> rounds to guess the
            number <Text style={styles.roundsGuessText}>{guessNumber}</Text>
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <Button title='Start new game' onPress={handleStartGame} />
        </View>
      </View>
    </>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyles: {
    marginTop: 60,
    // width: '100%'
  },
  imageContainer: {
    marginVertical: 50,
    borderWidth: 2,
    borderRadius: 150,
  },
  overimage: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },

  textMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.primary800,
    marginBottom: 20,
  },

  roundsGuessText: {
    color: Colors.primary500,
    fontWeight: '600',
  },

  btnContainer: {
    width: '50%',
  }
});
