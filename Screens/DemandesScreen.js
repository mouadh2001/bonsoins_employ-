import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';



export default function ProfileScreen({ navigation }) {


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
      <Pressable onPress={() => navigation.goBack()} style={styles.closeButton}>
        <FontAwesome name='close' size={30} style={styles.closeIcon} />
      </Pressable>
      <View style={styles.containerdemande}>
      <Text style={styles.title}>Liste des demandes</Text>
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
    backgroundColor: '#eee',
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

});
