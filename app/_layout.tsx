import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6200ee",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "Mood Tracker",
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
