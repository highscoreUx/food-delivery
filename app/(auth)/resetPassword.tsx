import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/button/Button";
import { styled } from "nativewind";
import LabledInput from "@/components/labeledInput/LabledInput";
import { Link } from "expo-router";

const StyledText = styled(Text);
const StyledView = styled(View);

const resetPassword = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <StyledView className="flex-1 mt-6" style={{ gap: 16 }}>
          <StyledView className=" max-w-[269px]" style={{ gap: 8 }}>
            <StyledText className="font-semibold text-3xl ">Get Access To Your Account</StyledText>
            <StyledText className="text-sm text-black-500">
              Enter email to reset your password and gain access to your account
            </StyledText>
          </StyledView>

          <StyledView style={{ gap: 16 }}>
            <LabledInput
              hasLabel
              label="Email"
              placeholder="user@example.com"
              type="email"
              autoFocus
            />
          </StyledView>

          <StyledView style={{ gap: 8 }}>
            <Button>Reset Password</Button>
          </StyledView>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default resetPassword;
