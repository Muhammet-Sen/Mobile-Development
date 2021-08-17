import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SelectedItems = ({setSelectedMulti,selectedMulti,item}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#1c5593",
        paddingVertical: 12,
        paddingHorizontal: 17,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
      }}
      onPress={() => {
        setSelectedMulti(selectedMulti.filter((x) => x !== item));
      }}
    >
      <Text style={{fontSize:15,color:"white"}}>{item}</Text>
      <View
        style={{
          position: "absolute",
          right: 2,
          top: 1,
        }}
      >
      </View>
    </TouchableOpacity>
  );
};
export default SelectedItems;
