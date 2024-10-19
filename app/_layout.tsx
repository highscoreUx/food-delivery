import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Rootlayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: styles.content }}>
      <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  );
};

export default Rootlayout;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 16,
    backgroundColor: "#ffffff",
  },
});
