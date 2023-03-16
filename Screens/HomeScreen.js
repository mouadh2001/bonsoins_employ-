import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, View, StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';




function HomeScreen({ navigation }) {
    return (
<View style={styles.container}>
  <View style={styles.body}>
    <Text>
      This is the Home Screen
    </Text>
  </View>
  <View style={styles.navebar}>
    <Pressable style={styles.thisbutton} onPress={() => navigation.navigate('Accueil')}>
      <FontAwesome name='home' size={30} color='white' />
      <Text style={{ color: 'white' }}>Accueil</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Horaire')}>
      <FontAwesome name='calendar' size={30} color='white' />
      <Text style={{ color: 'white' }}>Horaire</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Presence')}>
      <FontAwesome name='times-circle' size={30} color='white' />
      <Text style={{ color: 'white' }}>Prisence</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Messanger')}>
      <FontAwesome name='send-o' size={30} color='white' />
      <Text style={{ color: 'white' }}>Messanger</Text>
    </Pressable>
  </View>
</View>

      
    );
  }

  export default HomeScreen

  const styles=StyleSheet.create({
    container: {
      flex: 1,
    },
    body:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
  })