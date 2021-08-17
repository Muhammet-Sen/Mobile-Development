import React from "react";
import {Modal, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";

const ModalComponent = ({
  setModalVisible,
  modalVisible,
  value,
  handleSelect,
  keys,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              height: 200,
              width: 300,
              backgroundColor: "#F5F0F0",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderWidth:1,
              ...styles.shadow,
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width: "100%",marginTop:30 }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  flex:1
                }}
              >
                {value &&
                  value.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={{
                          padding: 15,
                          borderWidth: 1,
                          borderRadius: 10,
                          marginVertical: 10,
                          minWidth: 200,
                          justifyContent: "center",
                          alignItems: "center",
                          ...styles.shadow
                        }}
                        key={index}
                        onPress={() => handleSelect(keys[index], value[index])}
                      >
                        <Text style={{ fontSize: 15}}>{item}</Text>
                      </TouchableOpacity>
                    );
                  })}
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
