/*  
💥 Title : CarList
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 03/ June/ 2021 
*/
import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import CarItem from "../CarItem/CarItem";
import cars from "./cars";

/*  🔥 React Dependencies 🔥 */

const CarList = () => {
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={cars}
        renderItem={({ item, index }) => <CarItem car={item} key={index} />}
        showsVerticalScrollIndicator={true}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarList;
