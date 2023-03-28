import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




function CustomHeader({ navigation }) {
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.backlogo}>
          <MaterialCommunityIcons name="sort-variant" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.headertitle}>MAR. 2023</Text>
      </View>
      <View style={styles.semaine}>
        <Text style={styles.jours}>DIM</Text>
        <Text style={styles.jours}>LUN</Text>
        <Text style={styles.jours}>MAR</Text>
        <Text style={styles.jours}>MER</Text>
        <Text style={styles.jours}>JEU</Text>
        <Text style={styles.jours}>VEN</Text>
        <Text style={styles.jours}>SAM</Text>
      </View>
      <View style={styles.semainejours}>
        <TouchableOpacity style={{marginLeft: 10}}>
          <AntDesign name="left" size={20} color="white" />
        </TouchableOpacity>
        {days.map((day, index) => (
          <TouchableOpacity key={index} style={[styles.dayContainer, index === currentDayIndex && styles.currentDayContainer]}>
            <Text style={[styles.joursnum, index === currentDayIndex && styles.joursnum]}>{day}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={{marginRight: 10}}>
          <AntDesign name="right" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.pulldown}>

      </View>
    </View>
  );
}
export default CustomHeader;

const styles=StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1A938C',
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backlogo: {
    color: 'white',
    marginLeft: 15,
  },
  headertitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 105,
    marginTop: 5,
  },
  semaine: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 50,
    marginLeft: 50,
  },
  jours: {
    color: 'white',
    fontSize: 18,
  },
  joursnum: {
    color: 'white',
    fontSize: 15,
  },
  semainejours: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  pulldown: {
    backgroundColor: 'white',
    width: '20%',
    height: 10,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: '40%',
    marginRight: '40%',
    marginBottom: 10,
  },
})


