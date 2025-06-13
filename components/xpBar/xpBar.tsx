import { StyleSheet, Text, View } from "react-native";

import { useGames } from "../../context/gameContext";
import { theme } from "../../app/theme";

export default function XPBar() {
  const { xp } = useGames();
  const XP_PER_LEVEL = 1000;
  const currentLevel = Math.floor(xp / XP_PER_LEVEL) + 1;
  const currentXp = xp % XP_PER_LEVEL;
  const xpProgress = currentXp / XP_PER_LEVEL;

  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>Level {currentLevel}</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${xpProgress * 100}%` }]} />
      </View>
      <Text style={styles.xpText}>
        {currentXp} / {XP_PER_LEVEL} XP
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginVertical: 20,
    alignItems: "center",
  },
  levelText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.color.textPrimary,
    marginBottom: 5,
  },
  barBackground: {
    width: "100%",
    height: 20,
    backgroundColor: theme.color.textPrimary,
    borderRadius: 5,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: theme.color.purpleColor,
  },
  xpText: {
    marginTop: 5,
    color: theme.color.textSecondary,
  },
});
