import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SettingsScreen } from './src/screens/SettingsScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case "Now Playing":
                if (focused) return (<Ionicons name="film" size={size} color={color} />)
                else return (<Ionicons name="film-outline" size={size} color={color} />)
              case "Upcoming":
                if (focused) return (<Ionicons name="build" size={size} color={color} />)
                else return (<Ionicons name="build-outline" size={size} color={color} />)
            }
            return (<Ionicons name="bulb-outline" size={size} color={color} />)
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Now Playing" component={HomeScreen} />
        <Tab.Screen name="Upcoming" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



