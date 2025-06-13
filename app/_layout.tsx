import React from "react";

import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GameProvider } from "../context/gameContext";
import { theme } from "./theme";
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GameProvider>
        <Tabs
          screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: theme.color.background,
            headerTitle: "GameJournal",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: theme.color.background,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "bold",
            },
          }}
        >
          <Tabs.Screen name="(tabs)/index" options={{ title: "Home" }} />
          <Tabs.Screen name="(tabs)/addGame" options={{ title: "Add" }} />
          <Tabs.Screen name="(tabs)/statistics" options={{ title: "Stats" }} />
        </Tabs>
      </GameProvider>
    </SafeAreaProvider>
  );
}
