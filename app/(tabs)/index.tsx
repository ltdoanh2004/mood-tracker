import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { format } from "date-fns";
import MoodSelector from "@/components/MoodSelector";
import MoodHistory from "@/components/MoodHistory";
import DatePicker from "@/components/DatePicker";

export default function Home() {
  const [moodHistory, setMoodHistory] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleMoodSelect = (mood:any) => {
    const dateKey = format(selectedDate, "yyyy-MM-dd");
    setMoodHistory((prevHistory) => ({
      ...prevHistory,
      [dateKey]: mood,
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <DatePicker
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <MoodSelector onMoodSelect={handleMoodSelect} />
        <MoodHistory moodHistory={moodHistory} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
  },
});
