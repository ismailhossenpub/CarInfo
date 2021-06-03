import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import BikeItem from "../BikeItem/BikeItem";
import bikes from "./bikes";


const BikeList = () => {
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={bikes}
        renderItem={({ item, index }) => <BikeItem bikes={item} key={index} />}
        showsVerticalScrollIndicator={true}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default BikeList;
