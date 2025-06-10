import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
    backgroundColor: "#462AB1",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
