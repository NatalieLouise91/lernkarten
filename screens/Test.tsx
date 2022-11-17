import React, { FunctionComponent, useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";
import styled from "styled-components/native";
import { BrandSystem } from "../constants/BrandSystem";
import { sharedComponents } from "../constants/Layout";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextWrapper } from "../components/TextWrapper";
import { useSelector } from "react-redux";
import { selectVocabs, setVocabs } from "../utils/store";
import { getCardsByUser } from "../services/cardServices";
import { selectCurrentUser } from "../utils/store";
import { FlatList, View, Dimensions } from "react-native";

const MainContainer = styled(sharedComponents)`
  height: 100%;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  height: 130px;
  width: 100%;
  justify-content: space-between;
`;

interface CardObject {
  created_at: string;
  definition: string;
  gender: string;
  id: number;
  sentence: string;
  updated_at: string;
  user_id: number;
  word: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Test">;
const Test: FunctionComponent<Props> = ({ navigation }) => {
  const [flip, setFlip] = useState<Boolean>(false);
  const vocabs = useSelector(selectVocabs);
  const currentUser = useSelector(selectCurrentUser);
  const [cards, setCards] = useState<CardObject[]>([]);
  const screen = Dimensions.get('screen');
console.warn(vocabs);
  useEffect(() => {
    getCardsByUser(currentUser.user.id)
      .then((result) => {
        if (result.status === 200) {
          const returnedData = result.data;
          const userCard = returnedData.filter(
            (data: CardObject) => data.user_id === currentUser.user.id
          );
          setCards(userCard);
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [currentUser]);

  const FlatListCard = ({ data }: { data: CardObject }) => (
    <View
      style={{
        backgroundColor: "#eeeeee",
        borderRadius: 20,
        padding: 20,
        marginVertical: 20,
        marginHorizontal: 16,
        width: screen.width - 32,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextWrapper
        text={data.word}
        textFont="Ubuntu_500Medium"
        lineHeight={35}
        textTransform="capitalize"
        textSize={30}
        textColor={BrandSystem.charcoal}
      />

      {flip === true && (
        <>
          <TextWrapper
            text={data.definition}
            textFont="Ubuntu_500Medium"
            lineHeight={30}
            textTransform="capitalize"
            textSize={25}
            textColor={BrandSystem.charcoal}
          />
          <TextWrapper
            text={data.sentence}
            textFont="Ubuntu_500Medium"
            lineHeight={30}
            textTransform="none"
            textSize={25}
            textColor={BrandSystem.charcoal}
          />
        </>
      )}
    </View>
  );
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
      <FlatList
        data={cards}
        renderItem={({ item }) => <FlatListCard data={item} />}
        keyExtractor={(item: CardObject) => item.id.toString()}
        horizontal={true}
      />
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
