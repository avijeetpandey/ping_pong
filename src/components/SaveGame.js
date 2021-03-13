import React from 'react';
import {Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const SaveGame = () => {
  return (
    <Button style={styles.save}>
      <Text>Save</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  save: {
    alignSelf: 'center',
  },
});

export default SaveGame;
