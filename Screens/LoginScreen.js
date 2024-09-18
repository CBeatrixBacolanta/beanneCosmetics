import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const LoginScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./assets/image 1.png')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />

        {/* Main Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>UNVEIL YOUR{'\n'}RADIANCE</Text>
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
            {/* Custom Checkbox */}
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setIsChecked(!isChecked)}
            >
              <View style={isChecked ? styles.checkedBox : styles.uncheckedBox} />
              <Text style={styles.rememberMe}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
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
    fontSize: 30,
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
    alignItems: 'center',
  },
  uncheckedBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#999',
    marginRight: 10,
  },
  checkedBox: {
    width: 20,
    height: 20,
    backgroundColor: '#000',
    marginRight: 10,
  },
  rememberMe: {
    color: '#555',
  },
  forgotPassword: {
    color: '#555',
    textDecorationLine: 'underline',
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
