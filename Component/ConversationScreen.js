import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import HomeScreen from '../Screens/HomeScreen';

const conversations = [
  { id: '1', name: 'John Doe', time: '12:30 PM' },
  { id: '2', name: 'Jane Lee',  time: '11:20 AM' },
  { id: '3', name: 'Bob Will',  time: '10:45 AM' },
  { id: '4', name: 'Alice Son',  time: '9:15 AM' },
  { id: '5', name: 'John Kevin', time: '12:30 PM' },
  { id: '6', name: 'Jane Marc',  time: '11:20 AM' },
  { id: '7', name: 'Bob Jill',  time: '10:45 AM' },
  { id: '8', name: 'Alice Broke',  time: '9:15 AM' },
];

const ConversationList = ({ data, onPress, activeItem }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      horizontal={true}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={[
            styles.conversationItem,
            activeItem && activeItem.id === item.id && styles.activeConversationItem
          ]} 
          onPress={() => onPress(item)}
        >
          <FontAwesome name="user-circle-o" size={40} color="#333645" />
          <View style={styles.conversationText}>
            <Text style={[
              styles.conversationName,
              activeItem && activeItem.id === item.id && styles.activeConversationName
            ]}>{item.name}</Text>
          </View>
          <View style={styles.conversationTime}>
            <Text style={styles.conversationTimeText}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const ConversationScreen = ({ navigation }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleConversationPress = (item) => {
    setActiveItem(item);
    navigation.navigate('Chat', { conversation: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ConversationList data={conversations} onPress={handleConversationPress} activeItem={activeItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    width: '100%',
    lignContent: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE',
    paddingHorizontal: 20,
    paddingTop: 5,
    backgroundColor: '#6ac4c8',
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    height: 50,
    marginHorizontal: 5,
  },
  activeConversationItem: {
    backgroundColor: '#1a938c' ,
  },
  conversationText: {
    flex: 1,
    marginLeft: 10,
  },
  activeConversationName: {
    color: 'white',
  },
  conversationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  conversationTime: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
  conversationTimeText: {
    fontSize: 12,
    color: '#6ac4c8',
  },
});

export default ConversationScreen;

