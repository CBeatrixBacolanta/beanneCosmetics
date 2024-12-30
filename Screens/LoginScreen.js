import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../Images/lockscreen2.png')} // Replace with your actual image path
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />

        {/* Main Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>UNVEIL YOUR RADIANCE</Text>
          <Text style={styles.subHeaderText}>Adorable Glamour, Just for You!</Text>
        </View>

        {/* Login Section */}
        <View style={styles.loginContainer}>
          <Text style={styles.login}>Log In</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#999"
            secureTextEntry={true}
          />

          {/* Remember me and Forgot password */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setIsChecked(!isChecked)}
            >
              <View style={styles.checkbox}>
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.rememberMe}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Sign up options */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>
              Don't have an account?{' '}
              <Text style={styles.signUpLink}>Sign up</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  headerContainer: {
    position: 'absolute',
    top: '6%',
    width: '100%',
    paddingLeft: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'left',
  },
  subHeaderText: {
    fontSize: 20,
    color: 'white',
  },
  login: {
    color: 'white',
    fontSize: 27,
    fontWeight: '900',
    textAlign: 'left',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  loginContainer: {
    flex: 1,
    height: 'auto',
    width: '100%',
    backgroundColor: '#EC297B',
    bottom: 0,
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    elevation: 2,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns checkbox and text vertically
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, // Adds spacing between checkbox and text
  },
  checkmark: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rememberMe: {
    color: '#ffffff',
    fontSize: 15, // Ensures consistent font size
  },  
  forgotPassword: {
    color: '#ffffff',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: '#000000',
    borderRadius: 25,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    alignItems: 'center',
  },
  signUpText: {
    color: '#000000',
    fontSize: 14,
  },
  signUpLink: {
    color: '#000000',
    fontWeight: 'bold',
  },
});