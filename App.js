import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import LeftSlide from "./Components/LeftSlide/LeftSlide";
import VehicleList from "./Components/VehicleList/VehicleList";

export default function App() {
  const [visibile, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Header visibile={visibile} setVisible={setVisible} />
      <LeftSlide visibile={visibile} setVisible={setVisible} />
      {/* {visibile && <LeftSlide visibile={visibile} setVisible={setVisible} />} */}
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
  },
});
