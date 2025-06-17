import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";
import { useGames } from "../../context/gameContext";
import XPBar from "../../components/xpBar/xpBar";

export default function Statistics() {
  const { games } = useGames();
  //A counter to seeing how many geames there are in each status
  const countStatus = (status: string) =>
    games.filter((game) => game.status === status).length;
  const playingCount = countStatus("playing");
  const completedCount = countStatus("completed");
  const platinumCount = countStatus("platinum");
  const notStartedCount = countStatus("notStarted");

  return (
    <View style={styles.container}>
      <View style={styles.containerModal}>
        <XPBar />
        <View style={styles.textContainer}>
          <Text style={styles.typeText}>Platinums</Text>
          <Text style={styles.numberText}>{platinumCount}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.typeText}>Completed</Text>
          <Text style={styles.numberText}>{completedCount}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.typeText}>Playing</Text>
          <Text style={styles.numberText}>{playingCount}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.typeText}>Not Started</Text>
          <Text style={styles.numberText}>{notStartedCount}</Text>
        </View>
      </View>
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
  containerModal: {
    backgroundColor: theme.color.primary,
    marginTop: 50,
    width: "90%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  },
  textContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,

    borderBottomColor: theme.color.textSecondary,
  },
  typeText: {
    fontSize: 30,
    color: theme.color.textPrimary,
    fontWeight: "bold",
    marginBottom: 10,
  },
  numberText: {
    fontSize: 60,
    color: theme.color.purpleColor,
    fontWeight: "bold",
  },
});
