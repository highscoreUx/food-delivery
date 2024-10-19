import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ contentStyle: styles.content }}>
      <Stack.Screen name="signUp" options={{ headerShown: false, title: "Create Free Account" }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#ffffff",
  },
});
