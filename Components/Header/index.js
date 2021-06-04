import React, { useRef } from "react";
import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import LeftSlide from "../LeftSlide/LeftSlide";
import styles from "./styles";

const Header = ({ setVisible, visibile }) => {
  const handleState = () => {
    setVisible(!visibile);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.VehicleInfo}>VehicleInfo</Text>
      <TouchableOpacity onPress={handleState}>
        <Image style={styles.menu} source={require("../../assets/images/menu.png")}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
