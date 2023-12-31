import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export const List = () => {
  const [newItem, setNewItem] = useState();
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (newItem) setItems((prevItems) => [...prevItems, newItem]);
    setNewItem("");
  };

  const deleteItem = (key) => {
    const newArr = items.filter((items, index) => index !== key);
    setItems(newArr);
  };
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}></Text>
      <View style={styles.list}>
        <View style={styles.title}>
          <Text style={styles.text_title}>сегодня</Text>
        </View>
        <Text style={styles.text}>Проснуться вовремя и позавтракать.</Text>
        <Text style={styles.text}>Выполнить зарядку или йогу</Text>
        <Text style={styles.text}>
          Проверить почту и ответить на важные письма
        </Text>
        <Text style={styles.text}>список дел на сегодня</Text>
        <Text style={styles.text}>список дел на сегодня</Text>
        <Text style={styles.text}>список дел на сегодня</Text>
      </View>
      {/* <Text>TODO LIST</Text>
      <TextInput
        title={"Useless Text"}
        style={styles.input}
        onChangeText={setNewItem}
        value={newItem}
      />
      <Button title="Add Task" onPress={() => addItem()} />

      {items.map((item, key) => (
        <Text key={key} onPress={() => deleteItem(key)}>
          {item}
        </Text>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 9,
    backgroundColor: "#66F0C7",
    // alignItems: "center",
    
  },
  title: {
    height: 60,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#265195",
  },
  text_title: {
    padding:10,
    paddingLeft:60,
    fontSize: 30,
    fontWeight:'bold',
    color:"#7fffd4",
  },
  list: {
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    
    width: "95%",
    height: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  text: {
    fontSize: 20,
    padding: 10,
  },
});
