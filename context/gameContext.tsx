import { createContext, ReactNode, useContext, useState } from "react";
import { Game } from "../types/types";

type GameContextType = {
  games: Game[];
  addGame: (game: Game) => void;
  xp: number;
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
  const [xp, setXp] = useState(0);
  const [games, setGames] = useState<Game[]>([]);

  const addGame = (game: Game) => {
    setGames((prevGames) => [...prevGames, game]);

    let newXp = 0;
    if (game.status === "completed") newXp = 100;
    if (game.status === "platinum") newXp = 500;
    setXp((prevXp) => prevXp + newXp);
  };

  return (
    <GameContext.Provider value={{ games, addGame, xp }}>
      {children}
    </GameContext.Provider>
  );
};
