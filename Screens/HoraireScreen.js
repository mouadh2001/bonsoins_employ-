import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const weekdaysnames = ['DIM','LUN','MAR','MER','JEU','VEN','SAM'];


function HoraireScreen({ navigation }) {

  const [days, setDays] = useState([]);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  useEffect(() => {
    // Create an array of 7 Date objects, representing the days of the week
    const weekdays = [...Array(7)].map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return d;
    });

    // Format the days as "DD"
    const formattedDays = weekdays.map(d => d.getDate().toString().padStart(2, '0'));

    // Update the state with the formatted days
    setDays(formattedDays);

    // Find the index of the current day
    const today = new Date().getDate();
    setCurrentDayIndex(formattedDays.indexOf(today.toString().padStart(2, '0')));
  }, []);

    return (
<View style={styles.container}>
  <View style={styles.body}>
    <View style={styles.semaine}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        {weekdaysnames.map(item => (
          <View style={styles.plagesholder}>
          <TouchableOpacity style={styles.plagejour}>
            <Text style={styles.jours} key={item}>{item}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plage}>
            <Text style={{color: '#888888', marginLeft: 10}}>
              Pas de plage
            </Text>
          </TouchableOpacity>
          </View>
        ))}
        </ScrollView>
        {/* {days.map((day, index) => (
          <TouchableOpacity key={index} style={[styles.dayContainer, index === currentDayIndex && styles.currentDayContainer]}>
            <Text style={[styles.joursnum, index === currentDayIndex && styles.joursnum]}>{day}</Text>
          </TouchableOpacity>
        ))} */}
    </View>
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
    <Pressable style={styles.thisbutton} onPress={() => navigation.navigate('Horaire')} >
      <FontAwesome name='calendar' size={30} color='#1A938C' /> 
      <Text style={{ color: '#1A938C' }}>Horaire</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Presence')} >
    <MaterialIcons name="access-alarms" size={30} color="#888888" />
      <Text style={{ color: '#888888' }}>Présence</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Demandes')}>
    <MaterialIcons name="domain-verification" size={30} color="#888888" />
      <Text style={{ color: '#888888' }}>Demandes</Text>
    </Pressable>
  </View>
</View>

      
    );
  }

  export default HoraireScreen

  const styles=StyleSheet.create({
    container: {
      height: '100%',
    },
    body:{
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '100%',

    },
    semaine: {  
      flex: 1,
      marginTop: 10,
      width: '100%',
      height: '80%',
    },
    scrollview: {
      flax: 1,
    },
    plagesholder: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      height: '80%',
      marginLeft: 5,
    },
    plagejour: {
      backgroundColor : '#eee',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '30%',
      height: 60,
      borderRadius: 10,
      marginTop: 5,
    },
    plage: {
      backgroundColor : '#eee',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '68%',
      height: 60,
      borderRadius: 10,
      marginTop: 5,
      marginRight: 5,
    },
    jours: {
      color: '#1A938C',
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 10,
    },
    joursnum: {
      color: 'black',
      fontSize: 15,
    },
    semainejours: {
      marginTop: 25,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: 'black'
    },
    dayContainer: {
      alignItems: 'center',
    },
    currentDayContainer: {
      borderRadius: 30,
      width: 30,
      height: 30,
      backgroundColor: '#0D6D83',
      alignItems: 'center',
      justifyContent: 'center',
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