import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomButton from "./Components/Buttons/BottomButton";
import Header from "./Components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarItem />
      <CarItem />
      <CarItem />
      <CarItem />
      <CarItem />

      {/* <BottomButton
        type="primary"
        content={"Button One"}
        onPress={() => {
          console.log("Custom Order was pressed");
        }}
      />

      <BottomButton
        type="secondary"
        content={"Button Two"}
        onPress={() => {
          console.log("Existing Inventory was pressed");
        }}
      /> */}
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
