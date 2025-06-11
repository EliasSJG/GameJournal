import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/buttons/button";
import { theme } from "../theme";
import StatusDropdown from "../../components/dropdown/statusDropdown";
import DatePicker from "../../components/datePicker/datePicker";
import Input from "../../components/input/input";
export default function addGame() {
  return (
    <View style={styles.container}>
      <Input title="Input Game Name" height={60} />
      <View style={styles.spacer} />
      <StatusDropdown title="Select Status" onPress={() => {}} />
      <View style={styles.spacer} />
      <DatePicker />
      <View style={styles.spacer} />
      <Button title="Add Game" onPress={() => {}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    alignItems: "center",
    justifyContent: "center",
  },
  spacer: {
    height: 20,
  },
});
