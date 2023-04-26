import React from 'react';
import { Home, Settings } from '@/screens';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigation
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { RootStackParamList, RootTabParamList } from './types';
export * from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

export function Root() {
  return (
    <NavigationContainer
    // fallback={<SplashScreen />}
    >
      <Index />
      {/* <Auth /> */}
      {/* <Toast config={toastConfig} position="bottom" /> */}
    </NavigationContainer>
  );
}

function Auth() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: 'Home'
        }}
      />
    </Stack.Navigator>
  );
}

function Index() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1e293b' : '#ffffff'
        },
        headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#1e293b'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
