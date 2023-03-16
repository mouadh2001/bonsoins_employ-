import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FB from '../faceboock.png'
import { Pressable } from 'react-native';

export default function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Accueil')
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
<View style={styles.container}>
  <Text style={styles.title}>Se connecter</Text>
  <TextInput
    style={styles.input}
    placeholder="Email"
    value={email}
    onChangeText={setEmail}
  />
  <TextInput
    style={styles.input}
    placeholder="Mot de passe"
    secureTextEntry={true}
    value={password}
    onChangeText={setPassword}
  />
  <Pressable style={styles.button} onPress={handleLogin}>
    <Text style={styles.buttonText}>Commencer</Text>
  </Pressable>
  <View style={styles.buttons}>
    <Pressable>
      <Image source={require("../google.png")} style={styles.googleButton} />
    </Pressable>
    <Pressable style={styles.facebookButton}>
      <Image source={require("../faceboock.png")} style={styles.facebookButton} />
    </Pressable>
  </View>
  <Pressable style={styles.forgotButton}>
    <Text style={styles.forgotButtonText} onPress={() => navigation.navigate('Mot de passe oublié')}>Mot de passe oublié ?</Text>
  </Pressable>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c2b64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    backgroundColor: '#ccc',
    opacity: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    width: 150,
    backgroundColor: '#4caf50',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginBottom: 20,
    marginRight: 10,
    marginTop: 10,
  },
  facebookButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
  },
  buttons: {
    flexDirection: 'row'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotButton: {
    marginTop: 20,
  },
  forgotButtonText: {
    color: '#0080ff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});


