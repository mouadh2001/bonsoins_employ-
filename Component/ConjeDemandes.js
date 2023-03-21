
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';




export default function ConjéScreen({ navigation }) {


  const [demandes, setDemandes] = useState([
    { id: '1', title: 'Demande 1', description: 'This is the first demande.' },
    { id: '2', title: 'Demande 2', description: 'This is the second demande.' },
    { id: '3', title: 'Demande 3', description: 'This is the third demande.' },
  ]);
  const [selectedDemande, setSelectedDemande] = useState(null);
  const handlePress = (id) => {
    const demande = demandes.find((d) => d.id === id);
    setSelectedDemande(demande);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={styles.demande}>
        <Text style={styles.demandeTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.containerdemande}>
      <FlatList
        data={demandes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      {selectedDemande && (
        <View style={styles.details}>
          <Text style={styles.detailsTitle}>{selectedDemande.title}</Text>
          <Text style={styles.detailsDescription}>{selectedDemande.description}</Text>
        </View>
      )}
    </View>
    <View style={styles.navebar}>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Accueil')} >
      <FontAwesome name='home' size={30} color='white' /> 
      <Text style={{ color: 'white' }}>Accueil</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Horaire')} >
      <FontAwesome name='calendar' size={30} color='white' /> 
      <Text style={{ color: 'white' }}>Horaire</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Presence')} >
      <FontAwesome name='times-circle' size={30} color='white' />
      <Text style={{ color: 'white' }}>Prisence</Text>
    </Pressable>
    <Pressable style={styles.thisbutton} onPress={() => navigation.navigate('Demandes')}>
      <FontAwesome name='stack-exchange' size={30} color='white' />
      <Text style={{ color: 'white' }}>Demandes</Text>
    </Pressable>
  </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  containerdemande: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  demande: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  demandeTitle: {
    fontSize: 18,
  },
  details: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsDescription: {
    fontSize: 18,
  },
  container: {
    flex: 1,    
  },
  navebar: {
    backgroundColor: '#238582',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: '12%',

  },

  touche: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  thisbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#335b61',
  },

});