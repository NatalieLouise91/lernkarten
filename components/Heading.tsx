import React from "react";
import styled from "styled-components/native";

interface HeadingProps {
  text: string;
  name: string;
  textSize: number;
  textFont: string;
  textTransform: string;
  textSpacing: number;
  textColor: string;
  lineHeight: number;
}

const HeadingWrapper = styled.View`
  width: 100%;
  padding: 2%;
`;
const HeadingText = styled.Text`
  font-size: ${(props: HeadingProps) => props.textSize}pt;
  font-family: ${(props: HeadingProps) => props.textFont};
  color: ${(props: HeadingProps) => props.textColor};
  text-transform: ${(props: HeadingProps) => props.textTransform};
  line-height: ${(props: HeadingProps) => props.lineHeight}pt;
  text-align: center;
`;

interface Heading {
  text: string;
  textSize: number;
  textFont: string;
  textTransform: string;
  textSpacing: number;
  textColor: string;
  lineHeight: number;
}

export const Heading: React.FC<Heading & any> = ({
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
    <HeadingWrapper>
      {text && (
        <HeadingText
          textColor={textColor}
          textSize={textSize}
          textFont={textFont}
          textSpacing={textSpacing}
          textTransform={textTransform}
          lineHeight={lineHeight}
          {...props}
        >
          {text}
        </HeadingText>
      )}
    </HeadingWrapper>
  );
};
