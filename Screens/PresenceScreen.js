import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



function PresenceScreen({ navigation }) {
    return (
<View style={styles.container}>
  <View style={styles.body}>
    <Text>this is Présence Screen</Text>
  </View>
  <View style={styles.pointerholder}>
      <TouchableOpacity style={styles.pointer} onPress={() => navigation.navigate('Pointage')}>
      <MaterialIcons name="timer" size={40} color="white" />
      </TouchableOpacity>
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
    <Pressable style={styles.thisbutton} onPress={() => navigation.navigate('Presence')} >
    <MaterialIcons name="access-alarms" size={30} color="#1A938C" />
      <Text style={{ color: '#1A938C' }}>Présence</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Demandes')}>
    <MaterialIcons name="domain-verification" size={30} color="#888888" />
      <Text style={{ color: '#888888' }}>Demandes</Text>
    </Pressable>
  </View>
</View>

      
    );
  }

  export default PresenceScreen

  const styles=StyleSheet.create({
    container: {
      flex: 1,
    },
    body:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
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
    pointerholder: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
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
  })