import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ButtonNative } from '@ui/buttons';

export function Home() {
  return (
    <View className="bg-white flex flex-1 justify-center items-center dark:bg-black ">
      <ButtonNative
        variant="default"
        label="Welcome to the template app"
        onPress={() => alert('Quick Start')}
      />
    </View>
  );
}


