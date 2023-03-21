import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    navigation.navigate('Accueil')
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <LinearGradient
    colors={['#FFFFFF', '#1A938C']}
    style={styles.container}>
<View style={styles.logov}>
      <Image
        style={styles.logo}
        source={require('../logo.jpeg')}
        resizeMode='contain'
      />
    </View>
    <Text style={styles.title2}>Bienvenue !</Text>
  <Text style={styles.title}>Se connecter</Text>
  <TextInput
    style={styles.input}
    placeholder="Email"
    placeholderTextColor="#FFF"
    value={email}
    onChangeText={setEmail}
  />
  <TextInput
    style={styles.input}
    placeholder="Mot de passe"
    placeholderTextColor="#FFF"
    secureTextEntry={true}
    value={password}
    onChangeText={setPassword}
  />
  <Pressable style={styles.button} onPress={handleLogin}>
    <Text style={styles.buttonText}>Commencer</Text>
  </Pressable>
  <View>
    <Text>Ou se connecter avec</Text>
  </View>
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
</LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A938C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white',
  },
  title2: {
    fontSize: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  logov: {
    backgroundColor: 'white',
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});


