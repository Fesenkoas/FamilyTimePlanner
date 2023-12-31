 import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Layout } from "./Components/Layout";
import { Provider } from "react-redux";
import store from "./future/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Layout />
        {/* <StatusBar style="dark" /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
