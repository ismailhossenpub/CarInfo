import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import BikeList from "./Components/BikeList/BikeList";
import CarList from "./Components/CarList/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
      <BikeList />
      <Text style={styles.copyRight}> Copyright &copy; 2021 VehicleInfo.com</Text>
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
    // position:"relative"
  },
  copyRight: {
    padding: 10,
    fontSize: 15,
    color: 'gray',
  }
});
