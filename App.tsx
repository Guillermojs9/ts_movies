import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case "Home":
                if (focused) return (<Ionicons name="film" size={size} color={color} />)
                else return (<Ionicons name="film-outline" size={size} color={color} />)
              case "Settings":
                if (focused) return (<Ionicons name="build" size={size} color={color} />)
                else return (<Ionicons name="build-outline" size={size} color={color} />)
            }
            return (<Ionicons name="bulb-outline" size={size} color={color} />)
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



