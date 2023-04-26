import { SafeAreaView, View, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import './src/main.css';
import { Root } from './navigation';

export function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="hsl(175, 85%, 30%)" style="auto" />
        <Root />
      </SafeAreaView>
    </>
  );
}
