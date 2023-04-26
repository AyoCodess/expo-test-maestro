import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ButtonNative } from '@ui/buttons';

export function Settings() {
  return (
    <View className="bg-white flex flex-1 justify-center items-center dark:bg-black ">
      <ButtonNative variant="outline" label="Settings" />
    </View>
  );
}
