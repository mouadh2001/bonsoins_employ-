import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from 'react-native';


export default function ProfileScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const [imageUri, setImageUri] = useState(null);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };


  const handleSubmit = () => {
    // Handle form submission logic here
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style='auto'/>
      <Pressable onPress={() => navigation.goBack()} style={styles.closeButton}>
        <FontAwesome name='close' size={30} style={styles.closeIcon} />
      </Pressable>
      <View style={styles.profileInfoContainer}>
        <Pressable onPress={handlePickImage}>
                  {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Pick an Image</Text>
          </View>
        )}
        </Pressable>
        </View>
        <TextInput
          placeholder="Prénom"
          onChangeText={setFirstName}
          value={firstName}
          style={styles.input}
        />
        <TextInput
          placeholder="Nom"
          onChangeText={setLastName}
          value={lastName}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          style={styles.input}
        /><View style={{ height: 50 }} />

        <TextInput
          placeholder="Mot de passe"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirmer le mot de passe"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
          style={styles.input}
        />
        <Pressable onPress={() => {}} style={styles.changePasswordButton}>
         <Text style={styles.changePasswordButtonText}> Changer mot de passe </Text>
        </Pressable>
        <View style={{ height: 50 }} />
        <TextInput
          placeholder="Address"
          onChangeText={setAddress}
          value={address}
          style={styles.input}
        />
        <TextInput
          placeholder="Numéro du téléphone"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          keyboardType="phone-pad"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.saveButton}>
          <Text style={styles.saveButtonText}> Sauvegarder </Text>
        </TouchableOpacity>
        <View style={{ height: 50 }} />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
  closeIcon: {
    marginLeft: 6,
    marginBottom: 3,
  },
  profileInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    margin: 15,
    marginLeft: 40,
  },
  changeProfilePicText: {
    color: "#007AFF",
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    width: 250,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  changePasswordButton: {
    backgroundColor: '#007AFF',
    marginTop: 20,
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changePasswordButtonText: {
    color: 'white',
  },
  saveButton: {
    backgroundColor: '#4caf50',
    marginTop: 20,
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
image: {
  width: 200,
  height: 200,
  borderRadius: 100,
  borderWidth: 1,
},
placeholder: {
  borderWidth: 1,
  borderColor: 'black',
  backgroundColor: '#eee',
  width: 200,
  height: 200,
  alignItems: 'center',
  justifyContent: 'center',
},
placeholderText: {
  fontSize: 20,
  color: 'gray',
},
  
});
