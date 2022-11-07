import React from "react";
import styled from "styled-components/native";
import { BrandSystem } from "../constants/BrandSystem";

interface ButtonProps {
  text: string;
  name: string;
  textSize: number;
  textFont: string;
  textTransform: string;
  textSpacing: number;
  textColor: string;
  backgroundColor: string;
  border: Boolean;
}

const ButtonWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 4%;
  height: 60px;
  background-color: ${(props: ButtonProps) => props.backgroundColor};
  ${(props: ButtonProps) =>
    props.border === true &&
    `
    border-width: 2px;
    border-color: ${BrandSystem.charcoal};
  `};
`;
const ButtonText = styled.Text`
  font-size: 14pt;
  color: ${(props: ButtonProps) => props.textColor};
  text-transform: ${(props: ButtonProps) => props.textTransform};
`;

interface Button {
  text: string;
  name: string;
  textSize: number;
  textFont: string;
  textTransform: string;
  textSpacing: number;
  textColor: string;
  backgroundColor: string;
  border: Boolean;
}

export const Button: React.FC<Button & any> = ({
  text,
  name,
  textSize,
  textFont,
  textTransform,
  textSpacing,
  textColor,
  backgroundColor,
  border,
  ...props
}) => {
  return (
    <ButtonWrapper backgroundColor={backgroundColor} border={border} {...props}>
      {text && (
        <ButtonText textColor={textColor} textSize={textSize} textTransform={textTransform} {...props}>
          {text}
        </ButtonText>
      )}
    </ButtonWrapper>
  );
};
