import { StyleSheet, TextInput, View } from "react-native";

type StatusSymbolProps = {
  color: string;
};
export default function StatusSymbol({ color }: StatusSymbolProps) {
  return (
    <View
      style={[
        styles.symbol,
        {
          backgroundColor: color,
        },
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({
  symbol: { width: 25, height: 25, borderRadius: 20 },
});
