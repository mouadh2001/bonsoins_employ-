import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';
import { Modal } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




export default function DemandesScreen ({ navigation }) {

  

  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
     setShowButtons(!showButtons);
   };


   function navigateToScreen(screenName) {
    toggleButtons(); 
    navigation.navigate(screenName); 
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.containerdemande}>
        <View style={styles.listholder}>
        <FontAwesome name='list-ul' size={30} color='#888888'/>
        </View>
        <View style={styles.textholder}>
          <Text style={styles.titledmandes}>Conjé plages horaires à combler</Text>
          <Text style={styles.demandestext}>Les demandes vous permetent d'obtenir des congé et postuler aux crénaux à pouvoir</Text>
        </View>

        <View style={styles.adddemandesholder}>
          <Pressable style={styles.adddemandes} onPress={toggleButtons}>
            <Text style={styles.adddemandestext}>
              Créer une demande
            </Text>
          </Pressable>
        </View>
      </View>
    
      <View style={styles.ajouterholder}>
      <TouchableOpacity style={styles.pointer} onPress={toggleButtons}>
        <Text style={styles.addButtonText}>{showButtons ? 'x' : '+'}</Text>
      </TouchableOpacity>
      <Modal visible={showButtons} transparent={true} >
        <TouchableOpacity style={styles.modal} onPress={toggleButtons}>
        <View style={{position: 'absolute' ,bottom: 100}}>
        <View style={styles.choices}>
          <TouchableOpacity style={styles.list} onPress={() => navigateToScreen('Ajouter Conjé')}><Text style={{ color: 'white', padding: 10}}>Conjé</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Ajouter Conjé')} style={styles.buttons}>
            <Text style={{ color: 'white', fontSize: 32, marginBottom: 5 }}>+</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.choices}>
          <TouchableOpacity style={styles.list} onPress={() => navigateToScreen('Ajouter Disponibilities')}><Text style={{ color: 'white', padding: 10}}>Disponibilité</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Ajouter Disponibilities')} style={styles.buttons}>
            <Text style={{ color: 'white', fontSize: 32, marginBottom: 5 }}>+</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.choices}>
          <TouchableOpacity style={styles.list} onPress={() => navigateToScreen('Ajouter Plage à Combler')}><Text style={{ color: 'white', padding: 10}}>Plage à combler</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Ajouter Plage à Combler')} style={styles.buttons}>
            <Text style={{ color: 'white', fontSize: 32, marginBottom: 5 }}>+</Text>
          </TouchableOpacity>
          </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>

    <View style={styles.navebar}>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Accueil')} >
    <Octicons name="home" size={30} color="#888888" /> 
      <Text style={{ color: '#888888' }}>Accueil</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Horaire')} >
      <FontAwesome name='calendar' size={30} color='#888888' /> 
      <Text style={{ color: '#888888' }}>Horaire</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Presence')} >
    <MaterialIcons name="access-alarms" size={30} color="#888888" />
      <Text style={{ color: '#888888' }}>Présence</Text>
    </Pressable>
    <Pressable style={styles.thisbutton} onPress={() => navigation.navigate('Demandes')}>
    <MaterialIcons name="domain-verification" size={30} color="#1A938C" />
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


    // The List Icon    


  listholder: {
    marginTop: 40,
    borderColor: '#888888',
    borderWidth: 2,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },


      // The Texts


  textholder: {
    width: 320,
  },
  titledmandes: {
    textAlign: 'center',
    color: '#040F34',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  demandestext: {
    color: '#040F34',
    textAlign: 'center',
  },
  
  
      // The Add Buttons



  adddemandesholder: {
    marginTop: 30,
    alignItems: 'center',
  },
  adddemandes: {
    backgroundColor: '#1A938C',
    alignItems: 'center',
    justifyContent: 'center',
    width: '180%',
    height: 50,
    borderRadius: 50,
  },
  adddemandestext: {
    color: 'white',
    fontSize: 17,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'flex-end',
    marginTop: 63,
    marginBottom: 75,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  pointer: {
    position: 'absolute',
    backgroundColor: '#1A938C',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 30,
    bottom: 110,
  },
  ajouterholder: {
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
    marginTop: 5,
    width: 140,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#1A938C',
    justifyContent: 'center',
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40,
    alignItems: 'flex-start',
    marginVertical: 5,
  },




    //  The Nave Bar



  container: {
    flex: 1,  
  },
  navebar: {
    bottom:0,
    position: 'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 77,
    width: '100%',
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
