import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const AddTask = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => {
    console.log("11");
  };
  return (
    <View style={styles.container}>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "95%",
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#01FFFF",
  },
  text: {
    fontSize: 67,
    fontWeight: "normal",
    color: "#265195",
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 22,
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: "center",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
  // buttonClose: {
  //   backgroundColor: "#2196F3",
  // },
});
