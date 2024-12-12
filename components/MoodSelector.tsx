import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😊", label: "Good" },
  { emoji: "😐", label: "Okay" },
  { emoji: "😕", label: "Sad" },
  { emoji: "😢", label: "Awful" },
];

const MoodSelector = ({
  onMoodSelect,
}: {
  onMoodSelect: (mood: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <View style={styles.moodContainer}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood.emoji}
            style={styles.moodButton}
            onPress={() => onMoodSelect(mood.emoji)}
          >
            <Text style={styles.moodEmoji}>{mood.emoji}</Text>
            <Text style={styles.moodLabel}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  moodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  moodButton: {
    alignItems: "center",
  },
  moodEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  moodLabel: {
    fontSize: 12,
    color: "#757575",
  },
});

export default MoodSelector;
