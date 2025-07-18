import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusSymbol from "../statusSymbols/statusSymbol";
import { theme } from "../../app/theme";
import { useRouter } from "expo-router";
type GameCardProps = {
  title: string;
  date: string;
  status: "playing" | "completed" | "platinum" | "notStarted";
  statusColor: string;
};

export default function GameCard({
  title,
  date,
  status,
  statusColor,
}: GameCardProps) {
  //uses useRouter to navigate to the gamePage of the game
  const router = useRouter();
  //when card is clicked it goes to the corresponding game page
  const handlePress = () => {
    router.push(`/gamePage/${title}`);
  };

  //Makes a diffrernce it the date field. if the game is playing or not started then it will say "Target Date:" And if the game is anything other than that it will say "Completed Date:"
  const dateLabel =
    status === "playing" || status === "notStarted"
      ? "Target Date: "
      : "Completed Date: ";

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.textContainer}>
        <Text style={styles.GameTitle}>{title}</Text>
        <Text style={styles.GameDate}>{dateLabel + date}</Text>
      </View>
      <View>
        <StatusSymbol color={statusColor} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: theme.color.primary,
    borderRadius: 5,
    width: "90%",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    color: theme.color.textPrimary,
    fontSize: 15,
    height: 100,
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
  },
  GameTitle: {
    color: theme.color.textPrimary,
    fontSize: 20,
    marginBottom: 20,
  },
  GameDate: {
    color: theme.color.textSecondary,
    fontSize: 12,
  },
});
