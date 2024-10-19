import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href={"/(auth)/signUp"}>Go to Auth Pages</Link>
    </View>
  );
};

export default index;
