import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Month from './src/screen/Month';
import MonthName from './src/screen/MonthName';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              height: 100,
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: 'blue', // Set the content background color
            },
            tabBarStyle: {
              backgroundColor: 'blue',
            },
          }}>
          <Stack.Screen name="Month" component={Month} />
          <Stack.Screen
            name="MonthName"
            component={MonthName}
            options={({route}) => ({
              title: route.params.month,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
