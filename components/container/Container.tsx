import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styled } from "nativewind";

const StyledView = styled(View);

const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledView className="flex-1 mx-4">{children}</StyledView>;
};

export default Container;
