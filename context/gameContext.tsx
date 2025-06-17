import { createContext, ReactNode, useContext, useState } from "react";
import { Game, Review } from "../types/types";

type GameContextType = {
  games: Game[];
  addGame: (game: Game) => void;
  xp: number;
  updateGame: (originalTitle: string, updatedGame: Game) => void;
  reviews: { [gameId: string]: Review };
  updateReview: (gameId: string, review: Review) => void;
};
const GameContext = createContext<GameContextType | undefined>(undefined);
export const useGames = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGames must be used within a GameProvider");
  }
  return context;
};
export const GameProvider = ({ children }: { children: ReactNode }) => {
  //holds the xp and games
  const [xp, setXp] = useState(0);
  const [games, setGames] = useState<Game[]>([]);
  const [reviews, setReviews] = useState<{ [gameId: string]: Review }>({});
  //saves the reviews
  //broken
  const updateReview = (gameId: string, review: Review) => {
    setReviews((prev) => ({
      ...prev,
      [gameId]: review,
    }));
  };
  //To make the title be able to change when editing
  const updateGame = (originalTitle: string, updatedGame: Game) => {
    setGames((prev) =>
      prev.map((game) => (game.title === originalTitle ? updatedGame : game))
    );
  };

  const addGame = (game: Game) => {
    //adds the games to the games to the games list
    setGames((prevGames) => [...prevGames, game]);

    //shows the base xp
    let newXp = 0;
    // depending on the status it gives you a certain amount of xp
    if (game.status === "completed") newXp = 100;
    if (game.status === "platinum") newXp = 500;
    //updates the new previous xp with the new xp
    setXp((prevXp) => prevXp + newXp);
  };

  return (
    <GameContext.Provider
      value={{ games, addGame, xp, reviews, updateReview, updateGame }}
    >
      {children}
    </GameContext.Provider>
  );
};
