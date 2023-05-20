import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { db } from "../../Config/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import moment from "moment";

const ShiftProposalForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [shiftTitles, setShiftTitles] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    const fetchShiftTitles = async () => {
      try {
        const today = moment().format("YYYY-MM-DD");
        const querySnapshot = await getDocs(
          query(collection(db, "shiftsAC"), where("day", ">=", today))
        );
        const titles = querySnapshot.docs.map((doc) => doc.data().title);
        setShiftTitles(titles);
      } catch (error) {
        console.error("Error fetching shift titles:", error);
      }
    };

    fetchShiftTitles();
  }, []);

  const sendFormDetails = async () => {
    try {
      await addDoc(collection(db, "demandeAC"), {
        nom: name,
        title: title,
        description: description,
      });
      console.log("Form details submitted successfully!");
    } catch (error) {
      console.error("Error submitting form details:", error);
    }
  };

  const handleFormSubmit = () => {
    setButtonDisabled(true);



    // Send form details to Firebase
    sendFormDetails();

    setTimeout(() => {
      // Reset form values
      setName("");
      setTitle("");
      setDescription("");
      setButtonDisabled(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Entrer votre nom"
      />

      <Text style={styles.label}>Titre:</Text>
      <Picker
        style={styles.picker}
        selectedValue={title}
        onValueChange={(itemValue) => setTitle(itemValue)}
      >
        <Picker.Item label="Selectionner un shift" value="" />
        {shiftTitles.map((title) => (
          <Picker.Item key={title} label={title} value={title} />
        ))}
      </Picker>

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Entrer votre description"
        multiline
      />

      <Pressable
        onPress={handleFormSubmit}
        style={[styles.button, isButtonDisabled && styles.disabledButton]}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  picker: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1A938C",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default ShiftProposalForm