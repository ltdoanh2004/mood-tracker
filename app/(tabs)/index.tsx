import { View ,Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageBox from '@/components/MessageBox';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <MessageBox />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
