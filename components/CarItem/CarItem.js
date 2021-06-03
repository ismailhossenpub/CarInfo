import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import BottomButton from "../Buttons/BottomButton";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.carName}>{name}</Text>
        <Text style={styles.title}>{tagline}</Text>
        <Text style={styles.subTitle}>{taglineCTA}</Text>
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

export default CarItem;
