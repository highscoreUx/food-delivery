import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React, { ComponentProps } from "react";
import { styled } from "nativewind";
import { cva, VariantProps } from "class-variance-authority";
import { Ionicons } from "@expo/vector-icons";

interface IButtonProps extends VariantProps<typeof button> {
  children: React.ReactNode;
  hasIcon?: boolean;
  iconName?: ComponentProps<typeof Ionicons>["name"];
}

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const button = cva("px-4 py-2 rounded-lg items-center justify-center flex-row", {
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
      ghost: "text-black-900 bg-transparent ",
    },
  },
  defaultVariants: {
    textCol: "primary",
    variant: "primary",
  },
});

const Button = ({
  children,
  variant,
  fullWidth,
  textCol,
  hasIcon = false,
  iconName,
}: IButtonProps) => {
  return (
    <StyledTouchableOpacity className={button({ variant, fullWidth })}>
      {hasIcon && <Ionicons name={iconName} size={16} />}
      <StyledText className={button({ textCol })}>{children}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
