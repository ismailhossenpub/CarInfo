import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import CarItem from "./Components/CarItem/CarItem";
import CarList from "./Components/CarList/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarItem />
      <CarList />
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
  },
});
