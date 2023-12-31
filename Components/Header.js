import React from "react";
import { setUser } from "../future/redux/userSlice";
import { useDispatch } from "react-redux";

import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export const Header = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({ name: "John" }));
  };
  const handleOutLogin = () => {
    dispatch(setUser());
  };
  return (
    <View style={styles.container}>
      <Image source={require("../unit/logo.png")} style={styles.logo} />

      <Pressable onPress={() => console.log("22")}>
        <Image source={require("../unit/menu.png")} style={styles.menu} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexWrap: "wrap",
    alignContent: "space-between",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 92,
    height: 94,
    margin: 10,
  },
  menu: {
    width: 50,
    height: 26,
    margin: 10,
  },
});
