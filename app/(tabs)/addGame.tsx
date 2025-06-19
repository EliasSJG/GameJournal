import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/buttons/button";
import { theme } from "../theme";
import StatusDropdown from "../../components/dropdown/statusDropdown";
import DatePicker from "../../components/datePicker/datePicker";
import Input from "../../components/input/input";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGames } from "../../context/gameContext";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function addGame() {
  const {
    title: paramTitle,
    status: paramStatus,
    date: paramDate,
  } = useLocalSearchParams<{
    title?: string;
    status?: string;
    date?: string;
  }>();
  //uses usenavigation to be able to navigate back to the home page
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState<string | number>("");
  const [reviewText, setReviewText] = useState("");
  const [platRating, setPlatRating] = useState<string | number>("");
  const [platReviewText, setPlatReviewText] = useState("");
  const router = useRouter();
  // Certain status to the game
  const [status, setStatus] = useState<
    "playing" | "completed" | "platinum" | "notStarted" | null
  >(
    //initial value based on the url from the game and if it matches it sets the value to that status
    paramStatus === "playing" ||
      paramStatus === "completed" ||
      paramStatus === "platinum" ||
      paramStatus === "notStarted"
      ? paramStatus
      : null
  );

  const [date, setDate] = useState(new Date());
  //gets the addGame function from the context among with other things
  const { games, addGame, updateGame, reviews } = useGames();

  //checks if user is editing a game or adding one
  const isEditing = paramTitle !== undefined;

  useEffect(() => {
    setTitle(paramTitle ?? "");
    setStatus(
      paramStatus === "playing" ||
        paramStatus === "completed" ||
        paramStatus === "platinum" ||
        paramStatus === "notStarted"
        ? paramStatus
        : null
    );
    setDate(paramDate ? new Date(paramDate) : new Date());
  }, [paramTitle, paramStatus, paramDate]);

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
    //adds the game with the title, date, status and statusColor with a uniqe id
    const generateId = () => {
      return (
        Date.now().toString() + Math.floor(Math.random() * 1000).toString()
      );
    };
    const gameData = {
      id: generateId(),
      title,
      date: date.toLocaleDateString(),
      status,
      statusColor: getColorStatus(),
    };

    //Controlls that if a game already exists then dont add the game and checks if its editing
    if (isEditing) {
      updateGame(paramTitle!, gameData);
    } else {
      if (games.some((game) => game.title === title)) {
        alert("This game already exists");
        return;
      }
      addGame(gameData);
    }

    setTitle("");
    setStatus(null);
    setDate(new Date());

    navigation.goBack();
  }; //after added it goes back to the home page
  return (
    <View style={styles.container}>
      <Input
        title="Input Game Name"
        height={60}
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.spacer} />
      <StatusDropdown
        title="Select Status"
        onChangeStatus={setStatus}
        value={status}
      />
      <View style={styles.spacer} />
      <DatePicker onChangeDate={setDate} value={date} />
      <View style={styles.spacer} />
      <Button
        title={isEditing ? "Save Changes" : "Add Game"}
        onPress={handleAddGame}
      />
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
