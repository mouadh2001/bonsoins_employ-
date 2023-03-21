import React from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ResetPasswordScreen = () => {
  return (
    <LinearGradient
    colors={['#FFFFFF', '#1A938C']}
    style={styles.container}>
      <View><Text style={styles.title}>Réinitialiser le mot de passe</Text></View>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'white'}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Nouveau mot de passe"
          placeholderTextColor={'white'}
          style={styles.input}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Confirmer le nouveau mot de passe"
          placeholderTextColor={'white'}
          style={styles.input}
          secureTextEntry={true}
        />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Confirmer</Text>
      </Pressable>
    </LinearGradient>
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
    fontSize: 25,
    marginBottom: 50,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    backgroundColor: '#1A938C',
    opacity: 0.5,
    borderColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    width: 150,
    backgroundColor: '#3A9BA4',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderColor: 'white',
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
