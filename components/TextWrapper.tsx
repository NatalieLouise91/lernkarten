import React from "react";
import styled from "styled-components/native";

interface TextProps {
  text: string;
  name: string;
  textSize: number;
  textFont: string;
  textTransform: string;
  textSpacing: number;
  textColor: string;
  lineHeight: number;
}

const Wrapper = styled.View`
  width: 100%;
  padding: 2%;
`;
const Text = styled.Text`
  font-size: ${(props: TextProps) => props.textSize}pt;
  font-family: ${(props: TextProps) => props.textFont};
  color: ${(props: TextProps) => props.textColor};
  text-transform: ${(props: TextProps) => props.textTransform};
  line-height: ${(props: TextProps) => props.lineHeight}pt;
  text-align: center;
`;

interface Text {
  text: string;
  textSize: number;
  textFont: string;
  textTransform: string;
  textSpacing: number;
  textColor: string;
  lineHeight: number;
}

export const TextWrapper: React.FC<Text & any> = ({
  text,
  textSize,
  textFont,
  textTransform,
  textSpacing,
  textColor,
  lineHeight,
  ...props
}) => {
  return (
    <Wrapper>
      {text && (
        <Text
          textColor={textColor}
          textSize={textSize}
          textFont={textFont}
          textSpacing={textSpacing}
          textTransform={textTransform}
          lineHeight={lineHeight}
          {...props}
        >
          {text}
        </Text>
      )}
    </Wrapper>
  );
};
