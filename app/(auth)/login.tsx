import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/button/Button";
import { styled } from "nativewind";
import LabledInput from "@/components/labeledInput/LabledInput";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const StyledText = styled(Text);
const StyledView = styled(View);

const login = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <StyledView className="flex-1 mt-6" style={{ gap: 16 }}>
          <StyledView className=" max-w-[269px]" style={{ gap: 8 }}>
            <StyledText className="font-semibold text-3xl ">Login Yo Your Account</StyledText>
            <StyledText className="text-sm text-black-500">
              Don’t have an account with NaijaEats yet?{" "}
              <Link href={"/(auth)/signUp"} className="underline text-black-900 underline-offset-2">
                Create free account
              </Link>
            </StyledText>
          </StyledView>
          <StyledView className="mt-2 flex-col" style={{ gap: 12 }}>
            <Button textCol={"ghost"} variant={"ghost"} hasIcon iconName="logo-google">
              Continue with google
            </Button>
            <Button textCol={"ghost"} variant={"ghost"} hasIcon iconName="mail">
              Continue with SSO
            </Button>
          </StyledView>

          <StyledView className="flex-row items-center" style={{ columnGap: 16 }}>
            <StyledView className="h-[0.5px] bg-black-300 flex-1" />
            <StyledText className="text-sm text-black-500">or</StyledText>
            <StyledView className="h-[0.5px] bg-black-300 flex-1" />
          </StyledView>

          <StyledView style={{ gap: 16 }}>
            <LabledInput hasLabel label="Email" placeholder="user@example.com" type="email" />

            <LabledInput hasLabel label="Password" placeholder="Enter Password" type="password" />
            <Link
              href={"/(auth)/resetPassword"}
              className="underline text-black-900 underline-offset-2"
            >
              Forgot Password?
            </Link>
          </StyledView>

          <StyledView style={{ gap: 8 }}>
            <Button>Login</Button>
            <StyledText className="text-sm text-black-500">
              By Logging in to your account, you agree to all of NaijaEats{" "}
              <Link
                href={"/(auth)/termsOfService"}
                className="underline text-black-900 underline-offset-2"
              >
                Terms of Service
              </Link>
            </StyledText>
          </StyledView>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default login;
