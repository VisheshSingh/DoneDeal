import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Dimensions,
} from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'));
  const handlePress = () => {
    console.log('Text Pressed!');
  };
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text numberOfLines={1} onPress={handlePress} style={{ padding: 10 }}>
        Hello React native
      </Text>
      <Image source={require('./assets/favicon.png')} style={{ margin: 10 }} />
      <TouchableHighlight onPress={() => console.log('Image pressed!')}>
        <Image
          source={{
            uri: 'https://picsum.photos/id/1/200/300',
            width: 200,
            height: 200,
          }}
          fadeDuration={1000}
          borderRadius={10}
          style={styles.imageStyle}
        />
      </TouchableHighlight>
      <Button
        title='Click me'
        onPress={() =>
          Alert.alert('Title', 'Description', [
            { text: 'Yes', onPress: () => console.log('Yes!') },
            { text: 'No', onPress: () => console.log('No!') },
          ])
        }
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
  imageStyle: {
    margin: 20,
  },
});
