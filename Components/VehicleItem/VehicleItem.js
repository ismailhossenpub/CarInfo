import React, { useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import BottomButton from "../Buttons/BottomButton";
import OrderPaymentDialog from "../OrderPaymentDialog/OrderPaymentDialog";

const VehicleItem = (props) => {
  const { name, model, image, price } = props.item;
  const [visibility, setVisibility] = useState(false);
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      {visibility && <OrderPaymentDialog setVisibility={setVisibility} />}

      <View style={styles.titles}>
        <Text style={styles.carName}>{name}</Text>
        <Text style={styles.title}>Model {model}</Text>
        <Text style={styles.subTitle}>Starting at {price}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <BottomButton
          type="primary"
          content={"Details"}
          onPress={() => {
            console.log("Custom Order was pressed");
          }}
        />

        <BottomButton type="secondary" content={"Order Now"} onPress={() => setVisibility(!visibility)} />
      </View>
    </View>
  );
};

export default VehicleItem;
