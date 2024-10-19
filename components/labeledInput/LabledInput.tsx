import { Text, TextInput, View } from "react-native";
import React from "react";
import { styled } from "nativewind";

interface ILabeledInput {
  hasLabel: boolean;
  label: string;
  placeholder?: string;
  type?: "email" | "text" | "number" | "password";
  handleOnChange?: () => void;
  value?: any;
  autoFocus?: boolean;
}

const LabledInput = ({
  hasLabel = false,
  label,
  placeholder,
  type = "text",
  value,
  autoFocus = false,
  handleOnChange,
}: ILabeledInput) => {
  const StyledText = styled(Text);
  const StyledView = styled(View);
  const StyledVTextInput = styled(TextInput);
  const getKeyboardType = () => {
    switch (type) {
      case "email":
        return "email-address";

      case "number":
        return "phone-pad";

      default:
        return "default";
    }
  };
  return (
    <StyledView style={{ rowGap: 8 }}>
      {hasLabel && <StyledText>{label}</StyledText>}
      <StyledVTextInput
        placeholder={placeholder}
        className="p-4 bg-black-100 rounded-lg border border-black-200"
        keyboardType={getKeyboardType()}
        secureTextEntry={type === "password"}
        value={value}
        onChangeText={handleOnChange}
        autoFocus={autoFocus}
      />
    </StyledView>
  );
};

export default LabledInput;
