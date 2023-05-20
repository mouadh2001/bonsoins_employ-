import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const DemandCheckedItem = ({ demand }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <View style={styles.demandItem}>
      <Pressable onPress={toggleDetails}>
        <View style={styles.demandItemHeader}>
          <Text style={styles.demandItemTitle}>{demand.title}</Text>
          <TouchableOpacity onPress={toggleDetails}>
            <Text style={styles.demandItemButton}>
              {showDetails ? <View></View> : <View></View>}
            </Text>
          </TouchableOpacity>
          <Entypo name="folder" size={24} color="black" />
        </View>
        {showDetails && (
          <View style={styles.demandItemDetails}>
            <Text style={styles.demandItemText}>{demand.description}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  demandItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
    marginTop: 5,
    borderBottomWidth: 5,
    borderBottomColor: "#1A938C",
    marginHorizontal: 16,
  },
  demandItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  demandItemTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  demandItemButton: {
    color: "#1A938C",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  demandItemDetails: {
    marginTop: 8,
  },
  demandItemText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
});
export default DemandCheckedItem;
