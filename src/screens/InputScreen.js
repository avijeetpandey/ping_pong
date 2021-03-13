import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Container, Form, Item, Input, Button, H1} from 'native-base';

const InputScreen = ({navigation}) => {
  const [playerOneName, setPlayerOneName] = useState('');
  const [playerTwoName, setPlayerTwoName] = useState('');

  return (
    <>
      <Container style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <H1 style={styles.heading}>Enter Player Details</H1>
          <Form>
            <Item rounded style={styles.formItem}>
              <Input
                placeholder="Player 1 name"
                style={styles.input}
                value={playerOneName}
                onChangeText={text => setPlayerOneName(text)}
                placeholderTextColor="#00b7c2"
              />
            </Item>
            <Item rounded style={styles.formItem}>
              <Input
                placeholder="Player 2 name"
                style={styles.input}
                value={playerTwoName}
                onChangeText={text => setPlayerTwoName(text)}
                placeholderTextColor="#00b7c2"
              />
            </Item>
            <Button rounded block onPress={() => {}}>
              <Text style={styles.button}>Contiue</Text>
            </Button>
          </Form>
        </ScrollView>
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
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
  input: {
    marginLeft: 20,
    color: '#eee',
  },
  button: {
    color: '#eee',
  },
});

export default InputScreen;
