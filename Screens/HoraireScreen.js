import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';




function HoraireScreen({ navigation }) {
    return (
<View style={styles.container}>
  <View style={styles.body}>
    <Text>this is Horaire Screen</Text>
  </View>
  <View style={styles.pointerholder}>
      <TouchableOpacity style={styles.pointer} onPress={() => navigation.navigate('Pointage')}>
      <FontAwesome name='clock-o' size={40} color='white'/>
      </TouchableOpacity>
    </View>
  <View style={styles.navebar}>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Accueil')} >
      <FontAwesome name='home' size={30} color='#888888' /> 
      <Text style={{ color: '#888888' }}>Accueil</Text>
    </Pressable>
    <Pressable style={styles.thisbutton} onPress={() => navigation.navigate('Horaire')} >
      <FontAwesome name='calendar' size={30} color='#1A938C' /> 
      <Text style={{ color: '#1A938C' }}>Horaire</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Presence')} >
      <FontAwesome name='times-circle' size={30} color='#888888' />
      <Text style={{ color: '#888888' }}>Prisence</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Demandes')}>
      <FontAwesome name='stack-exchange' size={30} color='#888888' />
      <Text style={{ color: '#888888' }}>Demandes</Text>
    </Pressable>
  </View>
</View>

      
    );
  }

  export default HoraireScreen

  const styles=StyleSheet.create({
    container: {
      flex: 1,
    },
    body:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
      justifyContent: 'flex-end',
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
  })