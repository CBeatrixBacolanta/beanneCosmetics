import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/welcome.png')}
          style={styles.logoImage}
        />
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Get Started Pressed!')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5EC',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '50%',
  },
  logoImage: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    opacity: 0.8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});