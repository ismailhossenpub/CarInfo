/*  
💥 Title : OrderPaymentDialog
📃 Description : Order Payment Dialog
✍ Author : Saad Hasan
⌚ Date : 04/ June/ 2021 
*/

import React, { useState } from "react";
import { Button, Text, View, StyleSheet, ActivityIndicator } from "react-native";
/*  🔥 React Dependencies 🔥 */

const OrderPaymentDialog = ({ setVisibility }) => {
  const [message, setMessage] = useState(false);
  return (
    <>
      <View style={styles.dialogWrapper}>
        <Text style={styles.invoice}>Invoice</Text>

        {!message && (
          <View style={styles.basicInfo}>
            <Text style={styles.model}>Model</Text>
            <Text style={styles.price}>Price : $2000</Text>
          </View>
        )}

        {message && <Text style={styles.successfull}> Order Placed Successfully</Text>}

        <View style={styles.buttons}>
          <ActivityIndicator size="large" />
          <Text> </Text>
          <Button title="Order Now" onPress={() => setMessage(true)} />
          <Text> </Text>
          <Button color="#f54040" title="Cancel" onPress={() => setVisibility(false)} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dialogWrapper: {
    width: 350,
    height: 200,
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 100,
    backgroundColor: "#fff",
    transform: [{ translateX: -175 }, { translateY: -100 }],
    padding: 20,
    borderRadius: 5,
  },

  invoice: {
    fontSize: 25,
    fontWeight: "700",
    color: "#1c1e21",
  },

  basicInfo: {
    marginTop: 10,
  },

  model: {
    fontSize: 18,
    fontWeight: "600",
  },

  price: {
    fontSize: 16,
    fontWeight: "600",
  },

  buttons: {
    position: "absolute",
    bottom: 15,
    right: 20,
    display: "flex",
    flexDirection: "row",
  },

  cancel: {
    marginRight: 100,
    backgroundColor: "red",
  },

  successfull: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
    color: "#07ba67",
  },
});

export default OrderPaymentDialog;
