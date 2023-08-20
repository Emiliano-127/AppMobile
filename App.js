import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent, Button } from 'react-native';
import { LinearGradient } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import First from './First';
import Second from './Second';
import Blood from './Blood';
import City from './City';
//import MultipleCheckBox from './MultipleCheckBox';
import { ReactComponentElement } from 'react';

//<Stack.Screen name = "MultipleCheckBox" component={MultipleCheckBox} />

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "First" component={First} />
        <Stack.Screen name = "Second" component={Second} />

        <Stack.Screen name = "Blood" component={Blood} />
        <Stack.Screen name = "City" component={City} />
        

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

