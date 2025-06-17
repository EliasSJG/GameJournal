import { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import StatusSymbol from "../statusSymbols/statusSymbol";
import { theme } from "../../app/theme";

type Status = "playing" | "completed" | "platinum" | "notStarted";

type StatusDropdownProps = {
  title: string;
  value: Status | null;
  onChangeStatus?: (status: Status) => void;
};

//A status dropdown component coming from the library react-native-dropdown-picker
export default function StatusDropdown({
  title,
  value,
  onChangeStatus,
}: StatusDropdownProps) {
  const [open, setOpen] = useState(false);

  //shows each of the status with their own color and text
  const [items, setItems] = useState([
    {
      label: "Playing",
      value: "playing",
      icon: () => <StatusSymbol color={theme.color.symbolPlaying} />,
    },
    {
      label: "Completed",
      value: "completed",
      icon: () => <StatusSymbol color={theme.color.symbolCompleted} />,
    },
    {
      label: "Platinum",
      value: "platinum",
      icon: () => <StatusSymbol color={theme.color.symbolPlatinum} />,
    },
    {
      label: "Not Started",
      value: "notStarted",
      icon: () => <StatusSymbol color={theme.color.symbolNotStarted} />,
    },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        //changes the new selected value of the dropdown when a status is selected
        setValue={(callback) => {
          const newValue = callback(value);
          if (
            newValue &&
            (newValue === "playing" ||
              newValue === "completed" ||
              newValue === "platinum" ||
              newValue === "notStarted")
          ) {
            onChangeStatus?.(newValue);
          }
        }}
        setItems={setItems}
        placeholder={title}
        style={styles.dropdown}
        textStyle={styles.dropDownText}
        dropDownContainerStyle={styles.dropdownContainer}
      ></DropDownPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: theme.color.secondary,
    borderRadius: 5,
    width: "90%",
    height: 60,
    padding: 10,
  },
  dropDownText: {
    color: theme.color.textPrimary,
  },
  dropdownContainer: {
    backgroundColor: theme.color.secondary,
    borderRadius: 5,
    width: "90%",
  },
});
