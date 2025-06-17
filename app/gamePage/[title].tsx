import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Input from "../../components/input/input";
import { theme } from "../theme";
import { useGames } from "../../context/gameContext";
import StatusSymbol from "../../components/statusSymbols/statusSymbol";
import { Game, Review } from "../../types/types";

export default function GamePage() {
  //grabs the title from the url
  const { title } = useLocalSearchParams<{ title: string }>();
  const router = useRouter();
  const { games, reviews, updateReview } = useGames();

  //finds the game based on the title
  const game = games?.find((g: Game) => g.title === title);

  //gives each game a id
  const gameId = game?.id ?? "";

  //Gets the review from the context
  //broken
  const currentReview = reviews[gameId]?.review ?? "";
  const currentRating = reviews[gameId]?.rating ?? "";
  const currentPlatReview = reviews[gameId]?.platinumReview ?? "";
  const currentPlatRating = reviews[gameId]?.platinumRating ?? "";

  //Pushes the new review to the game and so each review is special to each game with its new review
  const newGameReview = (key: keyof Review, value: string) => {
    updateReview(gameId, {
      ...reviews[gameId],
      [key]: value,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={styles.container}>
        <View style={styles.gameContainer}>
          <Text style={styles.text}>{title}</Text>
          {game && (
            <View style={styles.statusContainer}>
              <StatusSymbol
                color={game.statusColor ?? theme.color.textPrimary}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() =>
                  router.push({
                    pathname: "/addGame",
                    params: {
                      title: game.title,
                      status: game.status,
                      date: game.date,
                    },
                  })
                }
              >
                <Image
                  source={require("../../assets/edit.png")}
                  style={styles.iconImage}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Input
              title="Write a Rating"
              height={60}
              value={currentRating}
              onChangeText={(text) => {
                const numeric = text.replace(/[^0-9]/g, "");
                const number = numeric ? parseInt(numeric, 10) : 0;
                newGameReview("rating", number > 10 ? "10" : numeric);
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.input}>
            <Input
              title="Write a Review"
              height={120}
              value={currentReview}
              onChangeText={(text) => newGameReview("review", text)}
            />
          </View>

          {game?.status === "platinum" && (
            <View style={styles.platinumContainer}>
              <View style={styles.input}>
                <Input
                  title="Write a Platinum Rating"
                  height={60}
                  value={currentPlatRating}
                  onChangeText={(text) => {
                    const numeric = text.replace(/[^0-9]/g, "");
                    const number = numeric ? parseInt(numeric, 10) : 0;
                    newGameReview(
                      "platinumRating",
                      number > 10 ? "10" : numeric
                    );
                  }}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.input}>
                <Input
                  title="Write a Platinum Review"
                  height={120}
                  value={currentPlatReview}
                  onChangeText={(text) => newGameReview("platinumReview", text)}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    paddingBottom: 250,
  },
  text: {
    fontSize: 30,
    margin: 20,

    color: theme.color.textPrimary,
  },
  gameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginTop: 20,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusLabel: {
    marginLeft: 8,
    fontSize: 18,
    color: theme.color.textPrimary,
  },
  inputContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  input: {
    alignItems: "center",
    margin: 10,
    width: "100%",
  },
  platinumContainer: {
    alignItems: "center",
    marginTop: 50,
    width: "100%",
  },
  iconContainer: { marginLeft: 40 },
  iconImage: {
    width: 40,
    height: 40,
  },
});
