import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import VehicleList from "./Components/VehicleList/VehicleList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <VehicleList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
