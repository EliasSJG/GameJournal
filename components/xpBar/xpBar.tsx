import { StyleSheet, Text, View } from "react-native";

import { useGames } from "../../context/gameContext";
import { theme } from "../../app/theme";

export default function XPBar() {
  //gets the xp fronm the context
  const { xp } = useGames();
  //maximum XP per level
  const maxLevelXP = 1000;
  //when a xp has reached 1000 it increases the text level by 1
  const currentLevel = Math.floor(xp / maxLevelXP) + 1;
  //shows the current xp and the maximum xp
  const currentXp = xp % maxLevelXP;
  //Shos the new progresson of the xp bar with the new xp
  const xpProgress = currentXp / maxLevelXP;

  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>Level {currentLevel}</Text>
      <View style={styles.barBackground}>
        {/* Visually changes the xp bar with the xp */}
        <View style={[styles.barFill, { width: `${xpProgress * 100}%` }]} />
      </View>
      <Text style={styles.xpText}>
        {currentXp} / {maxLevelXP} XP
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
