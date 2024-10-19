import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/button/Button";
import { styled } from "nativewind";
import LabledInput from "@/components/labeledInput/LabledInput";

const StyledText = styled(Text);
const StyledView = styled(View);

const signUp = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledView className="flex-1 mt-6" style={{ gap: 16 }}>
        <StyledView className=" max-w-[269px]" style={{ gap: 8 }}>
          <StyledText className="font-semibold text-3xl ">Create Free Account</StyledText>
          <StyledText className="text-sm text-black-500">
            Sign up to explore diverse culinary options. or Login to your account
          </StyledText>
        </StyledView>
        <StyledView className="mt-2 flex-col" style={{ gap: 12 }}>
          <Button textCol={"ghost"} variant={"ghost"}>
            Continue with google
          </Button>
          <Button textCol={"ghost"} variant={"ghost"}>
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
          <LabledInput hasLabel label="Phone Number" placeholder="+234" />
          <LabledInput hasLabel label="Password" placeholder="Enter Password" type="password" />
        </StyledView>

        <StyledView style={{ gap: 8 }}>
          <Button>Create account</Button>
          <StyledText className="text-sm text-black-500">
            By creating an account, you agree to all of NaijaEats Terms of Service
          </StyledText>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default signUp;
