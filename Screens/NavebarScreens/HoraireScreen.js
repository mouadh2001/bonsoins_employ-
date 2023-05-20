import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";
import { Card } from "react-native-paper";
import { collection, getDocs } from "firebase/firestore";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { db } from "../../Config/firebase";

function App({ navigation }) {
  const [items, setItems] = useState({});

  // Render item for each event on the calendar
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate("Description du plage", { item: item })
        }
      >
        <Card>
          <Card.Content>
            <View>
              <Text>{item.title}</Text>
              <Text>
                <Ionicons name="ios-time" size={15} color="#1A938C" />
                {"    "}
                {item.startTime} - {item.endTime}
              </Text>
              <Text>
                <Ionicons name="location-sharp" size={15} color="#1A938C" />
                {"    "}
                {item.adresse}
              </Text>
              <Text>{item.type ? item.type : "PAB"}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  // Load data from Firestore and format it for the calendar
  const loadItems = async (day) => {
    const shiftsQuerySnapshot = await getDocs(collection(db, "shifts"));
    const shiftsACQuerySnapshot = await getDocs(collection(db, "shiftsAC"));

    const newItems = {};

    await Promise.all([
      shiftsQuerySnapshot.forEach((doc) => {
        const data = doc.data();
        const date = data.day;
        const event = {
          title: data.title,
          day: date,
          startTime: data.startTime,
          endTime: data.endTime,
          location: data.location,
          adresse: data.adresse,
        };
        if (newItems[date]) {
          newItems[date].push(event);
        } else {
          newItems[date] = [event];
        }
      }),

      shiftsACQuerySnapshot.forEach((doc) => {
        const data = doc.data();
        const date = data.day;
        const event = {
          title: data.title,
          day: date,
          startTime: data.startTime,
          endTime: data.endTime,
          location: data.location,
          adresse: data.adresse,
          type: data.type, // assuming the type field exists in the shiftsAC collection
        };
        if (newItems[date]) {
          newItems[date].push(event);
        } else {
          newItems[date] = [event];
        }
      }),
    ]);

    setItems(newItems);
  };

  useEffect(() => {
    // Load events from Firestore for the current month
    const today = new Date();
    const month = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;
    loadItems(month);
  }, []);

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        selected={new Date().toISOString().slice(0, 10)}
        renderItem={renderItem}
        style={{ marginBottom: 80 }}
      />

      <View style={styles.navebar}>
        <Pressable
          style={styles.touche}
          onPress={() => navigation.navigate("Accueil")}
        >
          <Octicons name="home" size={30} color="#888888" />
          <Text style={{ color: "#888888" }}>Accueil</Text>
        </Pressable>
        <Pressable
          style={styles.touche}
          onPress={() => navigation.navigate("Horaire")}
        >
          <FontAwesome name="calendar" size={30} color="#1A938C" />
          <Text style={{ color: "#1A938C" }}>Horaire</Text>
        </Pressable>
        <Pressable
          style={styles.thisbutton}
          onPress={() => navigation.navigate("Presence")}
        >
          <MaterialIcons name="access-alarms" size={30} color="#888888" />
          <Text style={{ color: "#888888" }}>Présence</Text>
        </Pressable>
        <Pressable
          style={styles.touche}
          onPress={() => navigation.navigate("Demandes")}
        >
          <MaterialIcons name="domain-verification" size={30} color="#888888" />
          <Text style={{ color: "#888888" }}>Demandes</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  navebar: {
    bottom: 0,
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 77,
    width: "100%",
  },

  touche: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  thisbutton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default App;
