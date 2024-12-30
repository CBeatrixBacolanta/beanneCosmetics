import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Install via 'expo install @expo/vector-icons'

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For the confirm password visibility
  const [notification, setNotification] = useState(''); // Notification message

  // Update form data
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Validate input fields
  const validateFields = () => {
    if (step === 1) {
      const { firstName, lastName, email, phone } = formData;
      if (!firstName || !lastName || !email || !phone) {
        setNotification('Please fill in all fields.');
        return false;
      }
    }
    if (step === 2) {
      const { username, password, confirmPassword } = formData;
      if (!username || !password || !confirmPassword) {
        setNotification('Please fill in all fields.');
        return false;
      }
      if (password !== confirmPassword) {
        setNotification('Passwords do not match.');
        return false;
      }
    }
    setNotification('');
    return true;
  };

  // Handle next step
  const handleNext = () => {
    if (validateFields()) {
      setStep(step + 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('../assets/Images/Registration.jpg')} // Check the path
        style={styles.imageBackground}
      />
      <View style={styles.textContainer}>
        <Text style={styles.header1}>UNVEIL YOUR{"\n"}RADIANCE</Text>
        <Text style={styles.quoteTxt}>Adorable Glamour, Just for You!</Text>
      </View>

      <View style={styles.regBox}>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, step >= 1 && styles.activeStep]} />
          <View style={[styles.progressBar, step >= 2 && styles.activeStep]} />
          <View style={[styles.progressBar, step >= 3 && styles.activeStep]} />
        </View>

        <Text style={styles.signUp}>Sign Up</Text>

        {step === 1 && (
          <View style={styles.inputClmn}>
            <TextInput
              style={styles.inputC}
              placeholder="First Name"
              placeholderTextColor="gray"
              value={formData.firstName}
              onChangeText={(value) => handleChange('firstName', value)}
            />
            <TextInput
              style={styles.inputC}
              placeholder="Last Name"
              placeholderTextColor="gray"
              value={formData.lastName}
              onChangeText={(value) => handleChange('lastName', value)}
            />
            <TextInput
              style={styles.inputC}
              placeholder="Email"
              placeholderTextColor="gray"
              value={formData.email}
              onChangeText={(value) => handleChange('email', value)}
            />
            <TextInput
              style={styles.inputC}
              placeholder="Phone Number"
              placeholderTextColor="gray"
              keyboardType="number-pad"
              value={formData.phone}
              onChangeText={(value) => handleChange('phone', value)}
            />
          </View>
        )}

        {step === 2 && (
          <View>
            <TextInput
              style={styles.input2}
              placeholder="Username"
              placeholderTextColor="gray"
              value={formData.username}
              onChangeText={(value) => handleChange('username', value)}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPass}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry={!showPassword}
                value={formData.password}
                onChangeText={(value) => handleChange('password', value)}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPass}
                placeholder="Confirm Password"
                placeholderTextColor="gray"
                paddingRight={1}
                secureTextEntry={!showConfirmPassword}
                value={formData.confirmPassword}
                onChangeText={(value) => handleChange('confirmPassword', value)}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.iconContainer}>
                <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="black" />
              </TouchableOpacity>
            </View>


          </View>
        )}

        {step === 3 && (
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setIsChecked(!isChecked)}
          >
            <View style={styles.uncheckedBox}>
              {isChecked && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.label}>I agree to all the Terms and Privacy Policies</Text>
          </TouchableOpacity>
        )}

        {notification ? <Text style={styles.notification}>{notification}</Text> : null}

        <View style={styles.buttonContainer}>
          {step > 1 && (
            <TouchableOpacity style={styles.navButton} onPress={() => setStep(step - 1)}>
              <Text style={styles.navButtonText}>Back</Text>
            </TouchableOpacity>
          )}
          {step < 3 && (
            <TouchableOpacity style={styles.navButton} onPress={handleNext}>
              <Text style={styles.navButtonText}>Next</Text>
            </TouchableOpacity>
          )}
          {step === 3 && (
            <TouchableOpacity
              style={[styles.button, !isChecked && styles.disabledButton]}
              disabled={!isChecked}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          )}
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
  regBox: {
    flex: 1,
    height: '40%',
    width: '100%',
    backgroundColor: '#EC297B',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  label: {
    color: 'white',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 90,
    marginRight: 90,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#FF69B4',
    marginHorizontal: 4,
    marginTop: 8,
    borderRadius: 3,
  },
  activeStep: {
    backgroundColor: 'white',
  },
  signUp: {
    color: 'white',
    fontSize: 27,
    fontWeight: '800',
    textAlign: 'left',
    paddingBottom: 15,
  },
  inputClmn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputC: {
    marginBottom: 10,
    padding: 9,
    borderRadius: 19,
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
  },
  input2: {
    marginBottom: 10,
    padding: 9,
    borderRadius: 29,
    color: 'black',
    width: '100%',
    backgroundColor: 'white',
  },
  inputPass: {
    padding: 9,
    width:'100%',
    flexDirection: 'row',
    backgroundColor: 'white', // Keep the background clean
    borderRadius: 29, // Optional for rounded edges
    paddingRight: '74%',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 10,
  },
  checkmark: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4D0039',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 19,
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#FF69B4',
    borderRadius: 19,
    marginLeft: 20,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    backgroundColor: '#FF69B4',
    borderRadius: 19,
    marginLeft: 20,
    opacity: 0.5, // Indicate disabled state
  },
  notification: {
    color: 'yellow',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white', // Keep the background clean
    borderRadius: 29, // Optional for rounded edges
    marginBottom: 10,
  },
  iconContainer: {
    position: 'absolute', // Position the icon inside the input field
    right: 10, // Adjust the position to be on the right side
    top: '50%', // Center the icon vertically
    transform: [{ translateY: -12 }], // Fine-tune the vertical alignment if needed
  },
});