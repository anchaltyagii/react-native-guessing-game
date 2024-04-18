import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

const GuessList = ({ item }) => {
  return (
    <View style={styles.guessListContainer}>
      <View>
        <Text>#{item.id}</Text>
      </View>
      <View>
        <Text>Opponent's Guess: {item}</Text>
      </View>
    </View>
  );
};

export default GuessList;

const styles = StyleSheet.create({
  guessListContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: Colors.accent500,
    borderColor: Colors.primary800,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
});
