import React from 'react';
import {StyleSheet} from 'react-native';
import {Container} from 'native-base';
import PlayerDetails from '../components/PlayerDetails';
import {connect} from 'react-redux';
import CurrentWinner from '../components/CurrentWinner';
import SaveGame from '../components/SaveGame';

const PlayerScreen = ({navigation, route, players}) => {
  return (
    <>
      <Container style={styles.container}>
        {Object.keys(players).map(key => {
          return <PlayerDetails name={key} score={players[key].score} />;
        })}
        <CurrentWinner />
        <SaveGame />
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  players: state.players,
});

export default connect(mapStateToProps)(PlayerScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 30,
  },
  heading: {
    color: '#eee',
  },
});
