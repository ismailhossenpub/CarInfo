import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./bikeStyles";
import BottomButton from "../Buttons/BottomButton";

const BikeItem = (props) => {
  const { name, model, image } = props.bikes;
  return (
    <View style={styles.bikeContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.bikeName}>{name}</Text>
        <Text style={styles.title}>Model {model}</Text>
        <Text style={styles.subTitle}>Starting at $14,000</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <BottomButton
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
        />
      </View>
    </View>
  );
};

export default BikeItem;
