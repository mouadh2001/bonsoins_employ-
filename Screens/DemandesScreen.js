import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';




export default function DemandesScreen({ navigation }) {
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.containerdemande}>
      <TouchableOpacity onPress={() => navigation.navigate('Conjés')}>
      <View style={styles.demande}>
        <Text style={styles.demandeTitle}>Conjé</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Disponibilités')}>
      <View style={styles.demande}>
        <Text style={styles.demandeTitle}>Disponibilité</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Shifts')}>
      <View style={styles.demande}>
        <Text style={styles.demandeTitle}>Proposition des Shiftes</Text>
      </View>
    </TouchableOpacity>
    </View>
    <View style={styles.pointerholder}>
    {showOptions && (
        <View>
          <View style={styles.choices}>
          <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Ajouter Conjé')}><Text style={{ color: 'white', padding: 5}}>Conjé</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ajouter Conjé')} style={styles.buttons}>
            <Text style={{ color: 'white', fontSize: 32, marginBottom: 7 }}>+</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.choices}>
          <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Ajouter Shift')}><Text style={{ color: 'white', padding: 5}}>Shifts</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ajouter Shift')} style={styles.buttons}>
            <Text style={{ color: 'white', fontSize: 32, marginBottom: 7  }}>+</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.choices}>
          <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Ajouter Disponibilities')} ><Text style={{ color: 'white', padding: 5}}>Disponibilité</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ajouter Disponibilities')} style={styles.buttons}>
            <Text style={{ color: 'white', fontSize: 32, marginBottom: 7 }}>+</Text>
          </TouchableOpacity>
          
          </View>
        </View>
      )}
    <TouchableOpacity onPress={toggleOptions} style={styles.pointer}>
        {showOptions ? (
          <AntDesign name="close" size={24} color="white" />
        ) : (
          <Text style={{ color: 'white', fontSize: 32, marginBottom: 7 }}>+</Text>
        )}
      </TouchableOpacity>

    </View>
    <View style={styles.navebar}>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Accueil')} >
      <FontAwesome name='home' size={30} color='#888888' /> 
      <Text style={{ color: '#888888' }}>Accueil</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Horaire')} >
      <FontAwesome name='calendar' size={30} color='#888888' /> 
      <Text style={{ color: '#888888' }}>Horaire</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Presence')} >
      <FontAwesome name='times-circle' size={30} color='#888888' />
      <Text style={{ color: '#888888' }}>Prisence</Text>
    </Pressable>
    <Pressable style={styles.thisbutton} onPress={() => navigation.navigate('Demandes')}>
      <FontAwesome name='stack-exchange' size={30} color='#1A938C' />
      <Text style={{ color: '#1A938C' }}>Demandes</Text>
    </Pressable>
  </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  containerdemande: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  pointer: {
    backgroundColor: '#1A938C',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 30,
    marginRight: 30,
  },
  pointerholder: {
    alignItems: 'flex-end',
  },
  buttons: {
    backgroundColor: '#1A938C',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  list: {
    width: 110,
    height: 20,
    backgroundColor: '#1A938C',
    justifyContent: 'center',
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40,
    marginBottom: 10,
    alignItems: 'flex-start',
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
  },
  navebar: {
    backgroundColor: 'white',
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

  },

});





