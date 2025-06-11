import {
  StyleSheet,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../app/theme";

type SearchInputProps = {
  title: string;
  onSearchPress: () => void;
  onMenuPress: () => void;
};

export default function SearchInput({
  title,
  onSearchPress,
  onMenuPress,
}: SearchInputProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSearchPress} style={styles.iconContainer}>
        <Image
          source={require("../../assets/search.png")}
          style={styles.iconImage}
        />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="gray"
      />

      <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
        <Image
          source={require("../../assets/menu.png")}
          style={styles.iconImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.color.secondary,
    borderRadius: 5,
    padding: 10,
    width: "90%",
    height: 60,
  },
  iconContainer: {
    padding: 5,
  },
  iconImage: {
    width: 25,
    height: 25,
    tintColor: theme.color.textPrimary,
  },
  input: {
    flex: 1,
    color: theme.color.textPrimary,
    fontSize: 15,
    marginHorizontal: 10,
  },
});
