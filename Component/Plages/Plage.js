import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Plage({ navigation }) {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Description du plage")}>
        <View style={styles.plage}>
          <Text>Aucun Tache</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  plage: {
    alignItems: "flex-start",
    paddingLeft: 40,
    justifyContent: "center",
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 5,
    marginBottom: 5,
    width: 333,
  },
});
