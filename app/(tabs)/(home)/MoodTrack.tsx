// import React, { useState } from "react";
// import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
// import { format } from "date-fns";
import index from "./index";
// import MoodSelector from "@/components/MoodSelector";
// import MoodHistory from "@/components/MoodHistory";
// import DatePicker from "@/components/DatePicker";

// export default function MoodTrack() {
//   const [moodHistory, setMoodHistory] = useState({});
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleMoodSelect = (mood: any) => {
//     const dateKey = format(selectedDate, "yyyy-MM-dd");
//     setMoodHistory((prevHistory) => ({
//       ...prevHistory,
//       [dateKey]: mood,
//     }));
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.content}>
//         <DatePicker
//           selectedDate={selectedDate}
//           onDateChange={setSelectedDate}
//         />
//         <MoodSelector onMoodSelect={handleMoodSelect} />
//         <MoodHistory moodHistory={moodHistory} />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: 30,
//   },
//   content: {
//     padding: 20,
//   },
// });

import { useState, useMemo, useRef, useCallback } from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { format } from "date-fns";

import DateTimePicker, {
  DateType,
  getDefaultStyles,
} from "react-native-ui-datepicker";

export default function MoodTracker({}) {
  const defaultStyles = getDefaultStyles();
  const bottomSheetRef = useRef<BottomSheet>(null);
  let today = new Date();
  const [selected, setSelected] = useState<DateType>(today);

  const snapPoints = useMemo(() => ["25%", "50%", "75%", "100%"], []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(3);
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );

  const [emoji, setEmoji] = useState<number>(4);
  const emojiArr = ["😢", "🙁", "😐", "😊", "🤩"];
  const bgColor = ["#ADD8E6", "#FFC4C4", "#F5F5DC", "#FFFFE0", "#FFFACD"]; //
  const moodName = ["Sad", "Unhappy", "Neutral", "Happy", "Excitment"];

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: bgColor[emoji] }}
      className="p-10 flex  gap-2 py-20 items-center h-full"
    >
      <Text className="text-3xl font-bold">How are you feeling?</Text>
      <TouchableOpacity
        onPress={openBottomSheet}
        className="p-3 rounded-lg  flex items-center bg-gray-200 w-3/4"
      >
        <Text className="text-2xl">
          {selected ? format(selected.toString(), "dd-MM-yyyy") : ""}
        </Text>
      </TouchableOpacity>
      <View className="mt-10 h-1/2 w-full flex gap-4 justify-center items-center">
        <View className=" flex flex-col items-center ">
          <Text className=" text-[150px] ">{emojiArr[emoji]}</Text>
          <Text className=" text-2xl font-bold">{moodName[emoji]}</Text>
        </View>
        <Slider
          step={1}
          style={{ width: "75%", zIndex: 0 }}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#444"
          minimumValue={0}
          maximumValue={bgColor.length - 1}
          onValueChange={(val) => setEmoji(val)}
        />
      </View>
      <View className="flex flex-col items-center gap-2 w-full">
        <TouchableOpacity className="bg-blue-400 rounded-md flex items-center justify-center w-full h-12">
          <Text className="text-white font-semibold text-xl">Save</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white rounded-md flex items-center justify-center w-full h-12">
          <Text className="font-semibold text-xl">View History</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={-1}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text className="text-2xl font-semibold">Pick a Date</Text>
          <View className="h-1/2">
            <DateTimePicker
              mode="single"
              date={selected}
              onChange={({ date }) => setSelected(date)}
              containerHeight={300}
              styles={{ ...defaultStyles }}
              classNames={{
                today: "border-amber-500", // Add a border to today's date
                selected: "bg-amber-500 border-amber-500", // Highlight the selected day
                selected_label: "text-white", // Highlight the selected day label

                disabled: "opacity-50", // Make disabled dates appear more faded
              }}
            />
            <TouchableOpacity
              onPress={closeBottomSheet}
              className="bg-black h-12 rounded-md flex items-center justify-center"
            >
              <Text className=" text-white text-xl font-semibold">Close</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
