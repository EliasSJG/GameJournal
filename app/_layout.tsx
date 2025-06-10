import React from "react";

import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#6200EE",
        }}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="addGame" options={{ title: "Add" }} />
        <Tabs.Screen name="statistics" options={{ title: "Stats" }} />
      </Tabs>
    </SafeAreaProvider>
  );
}
