import {Container, H3} from 'native-base';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {set} from 'react-native-reanimated';
import {connect} from 'react-redux';

const CurrentWinner = ({players}) => {
  const [winnerName, setWinerName] = useState('');
  const [winDifference, setWinDifference] = useState(0);

  useEffect(() => {
    let min = Number.POSITIVE_INFINITY,
      max = Number.NEGATIVE_INFINITY;
    for (let index in players) {
      if (players[index].score > max) {
        max = players[index].score;
      }
      if (players[index].score < min) {
        min = players[index].score;
      }
    }
    setWinerName(Object.keys(players).find(key => players[key].score === max));
    setWinDifference(max - min);
  }, [players, winDifference, winnerName]);

  return (
    <>
      <Container style={styles.container}>
        <H3 style={styles.text}>
          Current Winner : {winDifference === 0 ? 'Both Winner' : winnerName}
        </H3>
        <H3 style={styles.text}>
          Win Difference : {winDifference === 0 ? 'Its a tie' : winDifference}
        </H3>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 30,
  },
  text: {
    color: '#B4161B',
    padding: 20,
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  players: state.players,
});

export default connect(mapStateToProps)(CurrentWinner);
