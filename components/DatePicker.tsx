import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { format, addDays, subDays } from "date-fns";

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const handlePrevDay = () => {
    onDateChange(subDays(selectedDate, 1));
  };

  const handleNextDay = () => {
    onDateChange(addDays(selectedDate, 1));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrevDay} style={styles.arrowButton}>
        <Text style={styles.arrow}>←</Text>
      </TouchableOpacity>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{format(selectedDate, "MMMM d, yyyy")}</Text>
      </View>
      <TouchableOpacity onPress={handleNextDay} style={styles.arrowButton}>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  arrowButton: {
    padding: 8,
  },
  arrow: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ee",
  },
  dateContainer: {
    flex: 1,
    alignItems: "center",
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#424242",
  },
});

export default DatePicker;
