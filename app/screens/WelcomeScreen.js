import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    backgroundColor: '#fc5c65',
    width: '100%',
    height: 70,
  },
  registerButton: {
    backgroundColor: '#4ECDC4',
    width: '100%',
    height: 70,
  },
});

export default WelcomeScreen;
