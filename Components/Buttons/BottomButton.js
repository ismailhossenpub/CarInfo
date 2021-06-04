/*  
💥 Title : Buttons
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 03/ June/ 2021 
*/
import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

/*  🔥 React Dependencies 🔥 */

const BottomButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#34d997";
  const textColor = type === "primary" ? "#FFFFFF" : "#FFFFFF";
  const contentData = content ? content : "No Content";

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, { backgroundColor: backgroundColor }]} onPress={() => onPress()}>
        <Text style={[styles.text, { color: textColor }]}>{contentData}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    padding: 8,
  },
  button: {
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});

export default BottomButton;
