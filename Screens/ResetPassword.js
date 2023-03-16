import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';

const ResetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réinitialiser le mot de passe</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nouveau mot de passe"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Confirmer le nouveau mot de passe"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Confirmer</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c2b64',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
  },
  inputContainer: {
    borderWidth: 1,
    backgroundColor: '#ccc',
    opacity: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
    width: 250,
  },
  input: {
    padding: 10,
  },
  button: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    color: '#2196F3',
    fontSize: 16,
  },
});

export default ResetPasswordScreen;
