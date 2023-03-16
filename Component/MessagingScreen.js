import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MESSAGES = [

];

function MessagingScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(MESSAGES);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          message: message.trim(),
          sent: true,
        },
      ]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={item.sent ? styles.sentMessageContainer : styles.receivedMessageContainer}>
            <View style={item.sent ? styles.sentMessage : styles.receivedMessage}>
              <Text style={item.sent ? styles.sentMessageText : styles.receivedMessageText}>{item.message}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <MaterialIcons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddeded',
    padding: 10,
    height: '98%',
    width: '100%',
  },
  sentMessageContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  receivedMessageContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  sentMessage: {
    backgroundColor: '#238582',
    padding: 10,
    borderRadius: 5,
    maxWidth: '70%',
  },
  receivedMessage: {
    backgroundColor: '#f1f0f0',
    padding: 10,
    borderRadius: 5,
    maxWidth: '70%',
  },
  sentMessageText: {
    color: '#fff',
    fontSize: 16,
  },
  receivedMessageText: {
    color: '#000',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f0f0',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#0084ff',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MessagingScreen;
