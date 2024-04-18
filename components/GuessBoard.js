import { StyleSheet, Text, View, Modal, FlatList } from 'react-native';
import Header from './Header';
import InputContainer from './InputContainer';
import { Colors } from '../constants/colors';
import { Icons } from '@expo/vector-icons';
import GuessList from './GuessList';
import { useState } from 'react';

export default function GuessBoard({
  visible,
  leftBtnPress,
  rightBtnPress,
  onChangeText,
  enterNumber,
  guessNumber,
  guessTimes,
  guessListArray,
}) {
  // console.log('guess list', guessListArray);
  return (
    <>
      <View style={styles.modalContainer}>
        <Header title={`Opponent's Guess`} />
        <View style={styles.numberBox}>
          <Text style={styles.numberBoxText}>{guessNumber}</Text>
        </View>
        <InputContainer
          title={`Higher or Lower?`}
          leftBtnTitle={`Lower`}
          rightBtnTitle='Higher'
          leftBtnPress={leftBtnPress}
          rightBtnPress={rightBtnPress}
          onChangeText={onChangeText}
          enterNumber={enterNumber}
          textInput={false}
        />

        <FlatList
          data={guessListArray}
          renderItem={(itemData) => <GuessList item={itemData.item.number} guessTimes={guessTimes}/>}
          style={styles.guessList}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },

  numberBox: {
    width: '80%',
    marginTop: 50,
    height: 55,
    borderColor: Colors.accent500,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberBoxText: {
    fontSize: 20,
    color: Colors.accent500,
  },

  guessList: {
    marginTop: 40,
  },
});
