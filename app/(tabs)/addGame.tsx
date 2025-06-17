import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/buttons/button";
import { theme } from "../theme";
import StatusDropdown from "../../components/dropdown/statusDropdown";
import DatePicker from "../../components/datePicker/datePicker";
import Input from "../../components/input/input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGames } from "../../context/gameContext";

export default function addGame() {
  //uses usenavigation to be able to navigate back to the home page
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const { games } = useGames();
  // Certain status to the game
  const [status, setStatus] = useState<
    "playing" | "completed" | "platinum" | "notStarted" | null
  >(null);

  const [date, setDate] = useState(new Date());
  //gets the addgGame function from the context
  const { addGame } = useGames();

  //depending on which status the game is the color will change
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

  //trims down unnecessary spaces and checks if the title and status are not empty
  const handleAddGame = () => {
    if (!title.trim() || !status) return;
    //Controlls that if a game already exists then dont add the game
    if (games.some((game) => game.title === title)) {
      alert("this game already exists");
      return;
    }
    //adds the game with the title, date, status and statusColor
    addGame({
      title,
      date: date.toLocaleDateString(),
      status,
      statusColor: getColorStatus(),
    });
    //after added it goes back to the home page
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

//Needs to add editing functionality
