import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchInput from "../../components/input/searchInput";
import { theme } from "../theme";
import GameCard from "../../components/gameCard/gameCard";
import { useGames } from "../../context/gameContext";

export default function Index() {
  const { games } = useGames();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <SearchInput
          title="Search"
          onSearchPress={() => {}}
          onMenuPress={() => {}}
        />

        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            date={game.date}
            status={game.status}
            statusColor={game.statusColor ?? "#000"}
          />
        ))}

        {/* symbolPlaying: "#FFE943",
  symbolCompleted: "#36DE5D",
  symbolPlatinum: "#0DCACA",
  symbolNotStarted: "#FF4343", */}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: theme.color.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    alignItems: "center",
    paddingTop: 150,
    paddingHorizontal: 10,
  },
});
