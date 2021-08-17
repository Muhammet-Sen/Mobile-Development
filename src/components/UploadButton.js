import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const UploadButton = ({ handleClick }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <TouchableOpacity
        onPress={handleClick}
        style={{
          padding: 20,
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1c5593",
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "white" }}>GÖNDER</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UploadButton;
