import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

const UserProfile = ({ navigation }) => {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Anita Max Wynn</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput style={styles.input} value="Anita Max Wynn" editable={false} />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Birthday</Text>
          <TextInput style={styles.input} value="December 25, 2000" editable={false} />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Phone</Text>
          <TextInput style={styles.input} value="818 123 4567" editable={false} />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Instagram</Text>
          <TextInput style={styles.input} value="@anii.Max" editable={false}/>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.input} value="anitaMX@gmail.com" editable={false} />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            value="********"
            secureTextEntry={true}
            editable={false}
          />
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputRow: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  logoutButton: {
    width: '100%',
    backgroundColor: '#EC297B',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;
