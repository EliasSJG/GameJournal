import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchInput from "../../components/input/searchInput";
import { theme } from "../theme";

export default function Index() {
  return (
    <View style={styles.container}>
      <SearchInput
        title="Search"
        onSearchPress={() => {}}
        onMenuPress={() => {}}
      />
      <Text>StartPage</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
