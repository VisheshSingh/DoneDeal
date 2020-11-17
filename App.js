import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
} from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Text Pressed!');
  };
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React native
      </Text>
      <Image source={require('./assets/favicon.png')} />
      <TouchableHighlight onPress={() => console.log('Image pressed!')}>
        <Image
          source={{
            uri: 'https://picsum.photos/id/1/200/300',
            width: 200,
            height: 200,
          }}
          fadeDuration={1000}
        />
      </TouchableHighlight>
      <Button
        title='Click me'
        onPress={() => console.log('button pressed')}
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
