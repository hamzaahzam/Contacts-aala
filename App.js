
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from './screens/LogIn';
import Add from './screens/Add';

const Stack = createStackNavigator();
  
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
    
      <Stack.Screen options={{headerShown: false}} name="login" component={LogIn} />
      <Stack.Screen options={{headerShown: false}} name="Add" component={Add} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}