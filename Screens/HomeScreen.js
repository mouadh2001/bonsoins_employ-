import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Button, View, StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';





function HomeScreen({ navigation }) {
    return (
<View style={styles.container}>
  <View style={styles.body}>
    <ScrollView  contentContainerStyle={styles.scrollview}>
      <View style={{width: '100%', alignItems: 'flex-start'}}>
      <Text style={{marginLeft: 15}}>
        A l'horaire
      </Text>
      </View>
      <TouchableOpacity style={styles.horaireplage}>
        <View style={styles.headerhoraireplage}>

        </View>
        <View style={styles.horaireplagebody}>
          <Text style={{fontSize: 15, marginLeft: 15}}>
            Mercredi 1. FEV
          </Text>
          <Text style={{fontWeight: 'bold', marginLeft: 15}}>
            08:30 - 05:00
          </Text>
          <Text style={{marginLeft: 15}}>
            position
          </Text>
        </View>
        <View style={styles.plagedetails}>
          <TouchableOpacity>
            <Text style={{ color: '#1A938C', fontSize: 15, fontWeight: '600' }}>
              Afficher les details
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.element}>
        <View style={styles.elementleft}>
          <Text style={{fontSize: 15, color: 'white'}}>
            1
          </Text>
        </View>
        <View style={styles.elementright}>
          <Text style={{marginLeft: 15, fontSize: 15}}>
            Voir les pmages à venirs
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.element}>
        <View style={styles.elementvideleft}>
          <Text style={{fontSize: 15, color: 'white'}}>
            0
          </Text>
        </View>
        <View style={styles.elementright}>
          <Text style={{marginLeft: 15, fontSize: 15}}>
            Plages à combler disponibles
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.titles}>
        <Text>
          Nouveautés
        </Text>
      </View>

      <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('Actualités')}>
        <View style={styles.elementvideleft}>
          <Text style={{fontSize: 15, color: 'white'}}>
            0
          </Text>
        </View>
        <View style={styles.elementright}>
          <Text style={{marginLeft: 15, fontSize: 15}}>
            Publications non lues
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.titles}>
        <Text>
          Demandes
        </Text>
      </View>

      <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('Demandes')}>
        <View style={styles.elementvideleft}>
          <Text style={{fontSize: 15, color: 'white'}}>
            0
          </Text>
        </View>
        <View style={styles.elementright}>
          <Text style={{marginLeft: 15, fontSize: 15}}>
            Demandes mise à jour
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.titles}>
        <Text>
          Disponibilités
        </Text>
      </View>
      
      <TouchableOpacity style={styles.elementdown}>
        <View style={styles.upside}>
          <View style={styles.upleft}>
            <View style={styles.circle}>

            </View>
          </View>
          <View style={styles.upright}>
            <Text style={{fontSize: 15, fontWeight: '600'}}>
              Toujours disponible
            </Text>
          </View>
        </View>

        <View style={styles.downside}>
          <View>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#1A938C'}} >
              Ajouter mes disponibilités
            </Text>
          </View>
        </View>

      </TouchableOpacity>
    </ScrollView>
  </View>
  <View style={styles.pointerholder}>
      <TouchableOpacity style={styles.pointer} onPress={() => navigation.navigate('Pointage')}>
      <MaterialIcons name="timer" size={40} color="white" />
      </TouchableOpacity>
    </View>
  <View style={styles.navebar}>
    <Pressable style={styles.thisbutton} onPress={() => navigation.navigate('Accueil')}>
    <Octicons name="home" size={30} color="#1A938C" /> 
      <Text style={{ color: '#1A938C' }}>Accueil</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Horaire')}>
      <FontAwesome name='calendar' size={30} color='#888888' />
      <Text style={{ color: '#888888' }}>Horaire</Text>
    </Pressable>
    <Pressable style={styles.touche} onPress={() => navigation.navigate('Presence')}>
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

  export default HomeScreen

  const styles=StyleSheet.create({
    container: {
      flex: 1,
    },
    body:{
      flex: 1,
      width: '100%',
    },
    scrollview: {
      flex: 1,
      alignItems: 'center',
      marginBottom: 77,
      width: '100%',
    },
    horaireplage: {
      backgroundColor: 'white',
      width: '95%',
      height: 100,
      borderRadius: 5,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginBottom: 20,
    },
    headerhoraireplage: {
      backgroundColor: '#FFD600',
      height: '15%',
      width: '100%',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    horaireplagebody: {
      width: '100%',
      height: '60%',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    plagedetails: {
      width: '100%',
      height: '25%',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderTopWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    element: {
      width: '95%',
      height: 30,
      backgroundColor: 'white',
      flexDirection: 'row',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5,
      marginTop: 5,
    },
    elementleft: {
      backgroundColor: '#1A938C',
      alignItems: 'center',
      justifyContent: 'center',
      width: '15%',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    elementvideleft: {
      backgroundColor: '#6AC4C8',
      alignItems: 'center',
      justifyContent: 'center',
      width: '15%',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    elementright: {
      justifyContent: 'center',
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5,
    },
    titles: {
      width: '95%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: 15,
    },
    elementdown: {
      width: '95%',
      height: 50,
      backgroundColor: 'white',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5,
      marginTop: 5,
    },
    upside: {
      flexDirection: 'row',
      height: '50%',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    upleft: {
      width: '15%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    circle: {
      backgroundColor: '#00F127',
      width: 12,
      height: 12,
      borderRadius: 12,
      marginLeft: 20,
    },
    upright: {
      width: '85%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      height: '100%',
    },
    downside: {
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 1,
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
      marginBottom: 90,
    },
    pointerholder: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      bottom: 20
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