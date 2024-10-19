import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { cva, VariantProps } from "class-variance-authority";

interface IButtonProps extends VariantProps<typeof button> {
  children: React.ReactNode;
}

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const button = cva("px-4 py-2 rounded-lg items-center justify-center", {
  variants: {
    variant: {
      primary: "bg-primary-500",
      secondary: "bg-primary-100",
      ghost: "bg-black-100 border border-black-200",
    },
    fullWidth: {
      false: "self-center",
    },
    textCol: {
      primary: "text-primary-50",
      secondary: "text-primary-900 bg-transparent",
      ghost: "text-black-900 bg-transparent",
    },
  },
  defaultVariants: {
    textCol: "primary",
    variant: "primary",
  },
});

const Button = ({ children, variant, fullWidth, textCol }: IButtonProps) => {
  return (
    <StyledTouchableOpacity className={button({ variant, fullWidth })}>
      <StyledText className={button({ textCol })}>{children}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
