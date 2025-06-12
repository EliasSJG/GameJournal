import { createContext, ReactNode, useContext, useState } from "react";
import { Game } from "../types/types";

type GameContextType = {
  games: Game[];
  addGame: (game: Game) => void;
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
  const [games, setGames] = useState<Game[]>([]);

  const addGame = (game: Game) => {
    setGames((prevGames) => [...prevGames, game]);
  };

  return (
    <GameContext.Provider value={{ games, addGame }}>
      {children}
    </GameContext.Provider>
  );
};
