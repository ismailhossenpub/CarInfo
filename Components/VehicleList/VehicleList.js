/*  
💥 Title : VehicleList
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 03/ June/ 2021 
*/
import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import VehicleItem from "../VehicleItem/VehicleItem";
import vehicle from "./vehicle";

/*  🔥 React Dependencies 🔥 */

const VehicleList = () => {
  const vehiclesList = [...vehicle];
  vehiclesList.sort(() => Math.random() - 0.5);

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={vehiclesList}
        renderItem={({ item, index }) => <VehicleItem item={item} key={index} />}
        showsVerticalScrollIndicator={true}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default VehicleList;
