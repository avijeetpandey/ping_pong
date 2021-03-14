import React from 'react';
import {Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';

// To Save to local storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';

const SaveGame = ({players}) => {
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('@games', JSON.stringify(players));
      alert('Data Saved');
    } catch (error) {
      alert('Unable to save game data');
    }
  };

  return (
    <Button style={styles.save} onPress={saveData}>
      <Text>Save</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  save: {
    alignSelf: 'center',
  },
});

const mapStateToProps = state => ({
  players: state.players,
});

export default connect(mapStateToProps)(SaveGame);
