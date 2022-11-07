import React, { FunctionComponent, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";
import styled from "styled-components/native";
import { BrandSystem } from "../constants/BrandSystem";
import { sharedComponents } from "../constants/Layout";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextWrapper } from "../components/TextWrapper";
import { useSelector } from "react-redux";
import { selectVocabs } from "../utils/store";

const MainContainer = styled(sharedComponents)`
  height: 100%;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  height: 130px;
  width: 100%;
  justify-content: space-between;
`;

const CardContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Card = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  border-radius: 25% 25%;
  margin: 1%;
  border: 2px;
  border-color: ${BrandSystem.charcoal};
  background: ${BrandSystem.lightGrey};
`;

type Props = NativeStackScreenProps<RootStackParamList, "Test">;
const Test: FunctionComponent<Props> = ({ navigation }) => {
  const [flip, setFlip] = useState<Boolean>(false);
  const vocabs = useSelector(selectVocabs);
  return (
    <MainContainer>
      <Heading
        text="Time to test your knowledge"
        textFont="Ubuntu_700Bold"
        lineHeight={25}
        textTransform="uppercase"
        textSize={20}
        textColor={BrandSystem.charcoal}
      />
      <CardContainer>
        {vocabs &&
          vocabs.map((vocab, index) => {
            return (
              <>
                {vocab.word && flip === false && (
                  <Card key={index}>
                    <TextWrapper
                      text={vocab.word}
                      textFont="Ubuntu_500Medium"
                      lineHeight={35}
                      textTransform="capitalize"
                      textSize={30}
                      textColor={BrandSystem.charcoal}
                    />
                  </Card>
                )}
                {vocab.word && flip === true && (
                  <Card key={index}>
                    <TextWrapper
                      text={vocab.definition}
                      textFont="Ubuntu_500Medium"
                      lineHeight={30}
                      textTransform="capitalize"
                      textSize={25}
                      textColor={BrandSystem.charcoal}
                    />
                    <TextWrapper
                      text={vocab.sentence}
                      textFont="Ubuntu_500Medium"
                      lineHeight={30}
                      textTransform="capitalize"
                      textSize={25}
                      textColor={BrandSystem.charcoal}
                    />
                  </Card>
                )}
              </>
            );
          })}
      </CardContainer>
      <ButtonWrapper>
        <Button
          text="Show"
          backgroundColor={BrandSystem.purple}
          border={false}
          textColor={BrandSystem.white}
          textTransform="uppercase"
          onPress={() => {
            setFlip(true);
          }}
        />
      </ButtonWrapper>
    </MainContainer>
  );
};

export default Test;
