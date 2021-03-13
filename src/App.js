import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import store from './store';

//Import all the screens
import InputScreen from './screens/InputScreen';
import PlayerScreen from './screens/PlayerScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InputScreen">
          <Stack.Screen
            name="InputScreen"
            component={InputScreen}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'Ping Pong',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}
          />
          <Stack.Screen
            name="PlayerScreen"
            component={PlayerScreen}
            options={{
              headerStyle: {
                backgroundColor: '#0f4c75',
              },
              title: 'Player Screen',
              headerTitleStyle: {
                textAlign: 'center',
                color: '#00b7c2',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
