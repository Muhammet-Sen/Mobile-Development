import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Choice = ({item,handleModalClick}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderWidth: 1,
        width: "80%",
        marginVertical: 10,
      }}
      onPress={() => handleModalClick(item)}
    >
      <Text style={{fontSize:16}}>{item.caption}</Text>
    </TouchableOpacity>
  );
}

export default Choice


