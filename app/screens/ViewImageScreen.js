import React from 'react';
import { Platform, StyleSheet, View, Image, Dimensions } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.backButton}></View>
        <View style={styles.nextButton}></View>
      </View>
      <Image source={require('../assets/chair.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    top: Platform.OS === 'android' ? 25 : null,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
  },
  nextButton: {
    width: 50,
    height: 50,
    backgroundColor: '#4ECDC4',
  },
});

export default WelcomeScreen;
