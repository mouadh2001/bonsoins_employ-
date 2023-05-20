import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config/firebase";

export default function DemandForm() {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");
  const [adresse, setAdresse] = useState("");

  const handleTitleChange = (value) => {
    setTitle(value);
  };

  const handleStartTimeChange = (value) => {
    setStartTime(value);
  };

  const handleEndTimeChange = (value) => {
    setEndTime(value);
  };

  const handleDayChange = (value) => {
    setDay(value);
  };

  const handleAdresseChange = (value) => {
    setAdresse(value);
  };

  const handleLocationChange = (value) => {
    setLocation(value);
  };

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "shifts"), {
        title: title,
        startTime: startTime,
        endTime: endTime,
        day: day,
        location: location,
        adresse: adresse,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleTitleChange}
        value={title}
      />
      <Text style={styles.label}>Start Time:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleStartTimeChange}
        value={startTime}
      />
      <Text style={styles.label}>End Time:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleEndTimeChange}
        value={endTime}
      />
      <Text style={styles.label}>Day:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleDayChange}
        value={day}
      />
      <Text style={styles.label}>Adresse:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleAdresseChange}
        value={adresse}
      />
      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleLocationChange}
        value={location}
      />
      <Button title="Submit" onPress={handleSubmit} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5FCFF",
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginTop: 20,
    width: "90%",
    paddingLeft: 10,
    borderRadius: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1A938C",
    marginTop: 20,
    borderRadius: 40,
    width: "80%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
