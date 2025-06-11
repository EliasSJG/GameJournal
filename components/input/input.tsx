import { StyleSheet, TextInput } from "react-native";
import { theme } from "../../app/theme";

type InputProps = {
  title: string;
  height?: number;
};

export default function Input({ title, height }: InputProps) {
  const isMultiline = !!height && height > 100;
  return (
    <TextInput
      style={[styles.input, height ? { height } : null]}
      placeholder="input..."
      placeholderTextColor="gray"
      multiline={isMultiline}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: theme.color.secondary,
    borderRadius: 5,
    width: "90%",

    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    color: theme.color.textPrimary,
    fontSize: 15,
    height: 60,
  },
});
