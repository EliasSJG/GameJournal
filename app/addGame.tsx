import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/buttons/button";

export default function addGame() {
  return (
    <View style={styles.container}>
      <Text>Add Game</Text>
      <Button
        title="Add Game"
        onPress={() => {
          /* TODO: handle press */
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
