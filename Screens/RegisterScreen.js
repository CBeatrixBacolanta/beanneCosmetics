import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground source={require('beanneCosmetics\assets\registration.jpg')} style={styles.ImageBackground} />

      <View style={styles.textContainer}>
        <Text style={styles.header1}>UNVEIL YOUR{"\n"}RADIANCE</Text>
        <Text style={styles.quoteTxt}>Adorable Glamour, Just for You!</Text>
      </View>

      <View style={styles.regBox}>
        <Text style={styles.signUp}>Sign Up</Text>

        <View style={styles.inputRow}>
          <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="gray" />
          <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="gray" />
        </View>

        <View style={styles.inputRow}>
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="gray" />
          <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="gray" />
        </View>

        <View>
          <TextInput style={styles.input2} placeholder="Username" placeholderTextColor="gray" />
          <TextInput style={styles.input2} placeholder="Password" placeholderTextColor="gray" />
          <TextInput style={styles.input2} placeholder="Confirm Password" placeholderTextColor="gray" />
        </View>

        <View>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setIsChecked(!isChecked)}
          >
            <View style={isChecked ? styles.checkedBox : styles.uncheckedBox} />
            <Text style={styles.label}>I agree to all the Terms and Privacy Policies</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, !isChecked && styles.disabledButton]} disabled={!isChecked}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: '6%',
    width: '100%',
    paddingLeft: 30,
  },
  header1: {
    color: 'white',
    fontSize: 33,
    fontWeight: '900',
    textAlign: 'left',
    top: 0,
  },
  quoteTxt: {
    color: 'white',
    fontSize: 20,
  },
  signUp: {
    color: 'white',
    fontSize: 27,
    fontWeight: '800',
    textAlign: 'left',
    paddingBottom: 5,
  },
  regBox: {
    flex: 1,
    height: 'auto',
    width: '100%',
    backgroundColor: '#EC297B',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 5,
    marginLeft: 3,
    marginRight: 3,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 19,
    backgroundColor: 'white',
    color: 'black',
    width: '50%',
  },
  input2: {
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 19,
    color: 'white',
    width: '100%',
    backgroundColor: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  uncheckedBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    marginRight: 10,
  },
  checkedBox: {
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#606060',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
