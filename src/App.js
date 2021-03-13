import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Import all the screens
import InputScreen from './screens/InputScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InputScreen">
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Add Players',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
