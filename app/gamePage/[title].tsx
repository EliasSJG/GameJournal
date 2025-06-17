import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import Input from "../../components/input/input";
import { useState } from "react";
import { theme } from "../theme";
import { useGames } from "../../context/gameContext";
import StatusSymbol from "../../components/statusSymbols/statusSymbol";
import { Game } from "../../types/types";

export default function GamePage() {
  const { title } = useLocalSearchParams<{ title: string }>();
  const { games } = useGames();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [platinumReview, setPlatinumReview] = useState("");
  const [platinumRating, setPlatinumRating] = useState("");

  const game = games?.find((g: Game) => g.title === title);
  const [gameReviews, setGameReviews] = useState<{
    [key: string]: {
      rating: string;
      review: string;
      platinumRating: string;
      platinumReview: string;
    };
  }>({});

  const currentReview = gameReviews[title]?.review ?? "";
  const currentRating = gameReviews[title]?.rating ?? "";
  const currentPlatReview = gameReviews[title]?.platinumReview ?? "";
  const currentPlatRating = gameReviews[title]?.platinumRating ?? "";

  const newGameReview = (
    key: keyof (typeof gameReviews)[string],
    value: string
  ) => {
    setGameReviews((prev) => ({
      ...prev,
      [title]: {
        ...prev[title],
        [key]: value,
      },
    }));
  };
  //Controlls so you cant write over 10 in rating
  const handleRatingChange = (
    text: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const numeric = text.replace(/[^0-9]/g, "");
    const number = numeric ? parseInt(numeric, 10) : 0;
    setter(number > 10 ? "10" : numeric);
  };

  const handleRating = (text: string) => handleRatingChange(text, setRating);
  const handlePlatRating = (text: string) =>
    handleRatingChange(text, setPlatinumRating);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.gameContainer}>
            <Text style={styles.text}>{title}</Text>
            {game && (
              <View style={styles.statusContainer}>
                <StatusSymbol
                  color={game.statusColor ?? theme.color.textPrimary}
                />
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
                    onChangeText={(text) =>
                      newGameReview("platinumReview", text)
                    }
                  />
                </View>
              </View>
            )}
          </View>
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
});
