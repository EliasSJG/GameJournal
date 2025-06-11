import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../app/theme";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <View>
        <Text style={styles.text} onPress={onPress}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 13,
    backgroundColor: theme.color.purpleColor,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  },
  text: {
    color: theme.color.textPrimary,
    fontSize: 20,
  },
});
