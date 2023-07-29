import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent, Button } from 'react-native';
import { LinearGradient } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import First from './First';
import Second from './Second';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "First" component={First} />
        <Stack.Screen name = "Second" component={Second} />

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

