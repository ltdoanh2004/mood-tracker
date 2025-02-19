import { View, Text, Button, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

const index = () => {
  return (
    <View className="p-7 py-20 h-screen">
      <Text className="text-4xl font-bold">Welcome</Text>
      <View className="">
        <Text className="text-2xl mb-4 mt-2 font-semibold">Tracking</Text>
        <View>
          <TouchableOpacity className="border-gray-400 h-12  p-2 border-t-[0.5px]">
            <Link href={"/(tabs)/(home)/MoodTrack"}>
              <View className="flex flex-row gap-2">
                <Text className="text-xl">😎</Text>
                <Text className="text-xl">Mood Track</Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity className="border-gray-400 gap-2 h-12 flex flex-row justify-start items-center p-2 border-y-[0.5px]">
            <Text className="text-xl">❤️</Text>
            <Text className="text-xl">Mental Track</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-4">
        <Text className="text-2xl mb-4 font-semibold">Chat</Text>
        <View>
          <TouchableOpacity className="border-gray-400 h-12  p-2 border-y-[0.5px]">
            <View className="flex flex-row gap-2">
              <Text className="text-xl">🤖</Text>
              <Text className="text-xl">Chat With AI Assitant</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
