
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Contacts from './screens/Contacts';
import Add from './screens/Add';
import Details from './screens/Details';

const Stack = createStackNavigator();
  
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
    
      <Stack.Screen options={{headerShown: false}} name="Contacts" component={Contacts} />
      <Stack.Screen options={{headerShown: false}} name="Add" component={Add} />
      <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}