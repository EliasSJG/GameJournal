import { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import StatusSymbol from "../statusSymbols/statusSymbol";
import { theme } from "../../app/theme";

type Status = "playing" | "completed" | "platinum" | "notStarted";

type StatusDropdownProps = {
  title: string;
  onChangeStatus?: (status: Status) => void;
};

export default function StatusDropdown({
  title,
  onChangeStatus,
}: StatusDropdownProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Status | null>(null);

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
        setValue={setValue}
        setItems={setItems}
        placeholder={title}
        onChangeValue={(val) => {
          if (
            val &&
            (val === "playing" ||
              val === "completed" ||
              val === "platinum" ||
              val === "notStarted")
          ) {
            onChangeStatus?.(val);
          }
        }}
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
