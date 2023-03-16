import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, View, StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Pressable } from 'react-native';



function SettingsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.close}>
          <FontAwesome name='close' size={30} style={{marginLeft: 6, marginBottom: 3,}}> </FontAwesome>
        </Pressable>
        </View>
        <View style={styles.body}>
          <Text>This is Settings Screen</Text>
        </View>
      </View>
    );
  }

  export default SettingsScreen;

  const styles=StyleSheet.create({
    container: {
      flex: 1, 
    },
    header: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 5,
    },
    close: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: 'cyan',
      alignItems: 'center',
      justifyContent: 'center'
    },
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })