import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { format, parseISO } from "date-fns";

interface MoodHistoryProps {
  moodHistory: Record<string, string>;
}

const MoodHistory: React.FC<MoodHistoryProps> = ({ moodHistory }) => {
  const sortedEntries = Object.entries(moodHistory)
    .sort(
      ([dateA], [dateB]) =>
        new Date(dateB).getTime() - new Date(dateA).getTime()
    )
    .map(([date, mood]) => ({ date, mood }));

  const renderItem = ({ item }: { item: { date: string; mood: string } }) => (
    <View style={styles.historyItem}>
      <Text style={styles.date}>
        {format(parseISO(item.date), "MMM d, yyyy")}
      </Text>
      <Text style={styles.mood}>{item.mood}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood History</Text>
      <FlatList
        data={sortedEntries}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  date: {
    fontSize: 16,
    color: "#424242",
  },
  mood: {
    fontSize: 24,
  },
});

export default MoodHistory;
