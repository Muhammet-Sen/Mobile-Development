import React from "react";
import { TextInput, View } from "react-native";

const TextField = ({ setIsValid, isValid, item, setEmail, email }) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleChange = (text) => {
    if (emailRegex.test(text)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEmail(text);
  };
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <TextInput
        placeholder={`Enter Your ${item.caption}`}
        onChangeText={(text) => handleChange(text)}
        value={email}
        style={{
          marginVertical: 10,
          borderWidth: 1,
          borderColor: isValid ? "black" : "red",
          height: 40,
          width: "80%",
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};
export default TextField;

