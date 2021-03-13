import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, H3, Left, List, ListItem, Right, Text} from 'native-base';
import {connect} from 'react-redux';

import {addWin} from '../action';

const PlayerDetails = ({name, _addWin, score}) => {
  const handlePress = () => {
    _addWin(name);
  };

  return (
    <>
      <List>
        <ListItem key={name}>
          <Left>
            <H3 style={styles.player}>{name}</H3>
          </Left>
          <Right>
            <Button style={styles.button} onPress={handlePress}>
              <Text>Add Win</Text>
            </Button>
          </Right>
        </ListItem>
        <H3 style={styles.player}>Wins : {score}</H3>
      </List>
    </>
  );
};

const styles = StyleSheet.create({
  player: {
    color: '#00b7c2',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  button: {
    width: 100,
  },
});

export default connect(null, {
  _addWin: addWin,
})(PlayerDetails);
