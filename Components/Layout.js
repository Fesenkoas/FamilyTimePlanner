import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./Header";
import { List } from "./List";
import { AddTask } from "./AddTask";

export const Layout = () => {
  return (
    <View style={styles.container}>
      <Header />
      <AddTask/>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#01C8FB",
  },
});
