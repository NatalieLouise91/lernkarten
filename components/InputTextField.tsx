import React from "react";
import styled from "styled-components/native";
import { BrandSystem } from "../constants/BrandSystem";

interface InputWrapperProps {
  width: string;
  height: number;
  textTransform: string;
  style: string;
  border: boolean;
  error: boolean;
}

const InputWrapper = styled.View`
  justify-content: flex-start;
  margin-bottom: 10px;
  width: 100%;
  background-color: ${BrandSystem.midGrey};
  ${(props: InputWrapperProps) => props.border === true &&`
    border-bottom-width: 2px;
    border-color: ${BrandSystem.charcoal};
  `}
`;
const Input = styled.TextInput`
  width: 80%;
  padding: 10px;
  font-size: 14pt;
`;

const Label = styled.Text`
  font-size: 14pt;
  background-color: ${BrandSystem.white};
  text-transform: ${(props: InputWrapperProps) => props.textTransform};
`;

interface Label {
  label: string;
  name: string;
  password: Boolean;
  labelSize: number;
  labelFont: string;
  labelTransform: string;
  labelSpacing: number;
  labelColor: string;
  labelBackground: string;
  labelBottomPadding: number;
}


export const InputTextField: React.FC<Label & any> = ({
  name,
  label,
  password,
  width,
  style,
  height,
  textTransform,
  placeholderTextColor,
  border,
  labelSize,
  labelFont,
  labelTransform,
  labelSpacing,
  labelBackground,
  labelBottomPadding,
  error,
  ...props
}) => {
  return (
    <InputWrapper border={border} {...props}
    >
      {label && (
        <Label labelSize={labelSize} textTransform={textTransform} {...props}
        >
          {label}
        </Label>
      )}
      <Input
        secureTextEntry={password ? true : false}
        placeholderTextColor={BrandSystem.grey}
        {...props}
      />
    </InputWrapper>
  );
};
