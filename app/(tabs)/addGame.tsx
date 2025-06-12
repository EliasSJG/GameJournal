import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/buttons/button";
import { theme } from "../theme";
import StatusDropdown from "../../components/dropdown/statusDropdown";
import DatePicker from "../../components/datePicker/datePicker";
import Input from "../../components/input/input";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useGames } from "../../context/gameContext";

export default function addGame() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<
    "playing" | "completed" | "platinum" | "notStarted" | null
  >(null);

  const [date, setDate] = useState(new Date());
  const { addGame } = useGames();

  const getColorStatus = () => {
    switch (status) {
      case "playing":
        return theme.color.symbolPlaying;
      case "completed":
        return theme.color.symbolCompleted;
      case "platinum":
        return theme.color.symbolPlatinum;
      case "notStarted":
        return theme.color.symbolNotStarted;
      default:
        return theme.color.textSecondary;
    }
  };

  const handleAddGame = () => {
    if (!title.trim() || !status) return;

    addGame({
      title,
      date: date.toLocaleDateString(),
      status,
      statusColor: getColorStatus(),
    });

    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Input
        title="Input Game Name"
        height={60}
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.spacer} />
      <StatusDropdown title="Select Status" onChangeStatus={setStatus} />
      <View style={styles.spacer} />
      <DatePicker onChangeDate={setDate} />
      <View style={styles.spacer} />
      <Button title="Lägg till spel" onPress={handleAddGame} />
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
