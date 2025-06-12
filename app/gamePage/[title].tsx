import { View, StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function GamePage() {
  const { title } = useLocalSearchParams<{ title: string }>();
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
