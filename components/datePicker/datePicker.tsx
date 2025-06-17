import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { theme } from "../../app/theme";

type DatePickerProps = {
  value: Date;
  onChangeDate?: (date: Date) => void;
};
//The date picker component that comes from the library react-native-modal-datetime-picker
export default function DatePicker({ value, onChangeDate }: DatePickerProps) {
  //opens the modal
  const [isPickerVisible, setPickerVisible] = useState(false);

  //selecs the date and closes the modal
  const handleConfirm = (selectedDate: Date) => {
    setPickerVisible(false);
    if (onChangeDate) {
      onChangeDate(selectedDate);
    }
  };
  //Makes sures that it always starts on the current date in real life
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setPickerVisible(true)}
      >
        <Text style={styles.inputText}>
          {value ? value.toLocaleDateString() : "Target Date"}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="date"
        display={Platform.OS === "ios" ? "spinner" : "calendar"}
        date={value}
        onConfirm={handleConfirm}
        onCancel={() => setPickerVisible(false)}
        maximumDate={new Date(2027, 11, 31)}
        minimumDate={todayDate}
        themeVariant={Platform.OS === "ios" ? "light" : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginBottom: 20,
  },
  input: {
    height: 60,
    borderRadius: 5,
    backgroundColor: theme.color.secondary,
    justifyContent: "center",
    paddingHorizontal: 15,
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  },
  inputText: {
    color: theme.color.textPrimary,
    fontSize: 16,
  },
});
