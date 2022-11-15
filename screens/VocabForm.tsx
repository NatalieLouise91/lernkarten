import React, { useState, useEffect, FunctionComponent } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { addVocab, selectVocabs } from "../utils/store";
import { sharedComponents } from "../constants/Layout";
import { BrandSystem } from "../constants/BrandSystem";
import { InputTextField } from "../components/InputTextField";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../utils/store";
import { createCard } from "../services/cardServices";

const MainContainer = styled(sharedComponents)`
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.View`
  width: 100%;
`;

type Props = NativeStackScreenProps<RootStackParamList, "VocabForm">;

const VocabForm: FunctionComponent<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  interface InitialFormData {
    word: string;
    definition: string;
    gender: string;
    sentence: string;
    user_id: number;
  }
  const initialFormData: InitialFormData = {
    word: "",
    definition: "",
    gender: "",
    sentence: "",
    user_id: 0,
  };

  interface DispatchData {
    id: number;
    word: string;
    definition: string;
    gender: string;
    sentence: string;
    user_id: number;
  }

  const initialDispatchData = {
    id: 0,
    word: "",
    definition: "",
    gender: "",
    sentence: "",
    user_id: 0,
  }

  interface ErrorsObject {
    word: string;
    definition: string;
    gender: string;
    sentence: string;
  }

  const [formData, setFormData] = useState(initialFormData);
  const [dispatchData, setDispatchData] = useState(initialDispatchData);
  const [id, setId] = useState<number>(0);
  const [word, setWord] = useState<string>("");
  const [definition, setDefinition] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [sentence, setSentence] = useState<string>("");
  const [errors, setErrors] = useState<ErrorsObject | null>(null);
  const [isSubmit, setIsSubmit] = useState<Boolean>(false);

  const currentUser = useSelector(selectCurrentUser);
  const vocabs = useSelector(selectVocabs);

  function handleFormData() {
    setFormData({
      word: word,
      definition: definition,
      gender: gender,
      sentence: sentence,
      user_id: currentUser.user.id,
    });
    setDispatchData({
      id: vocabs.length + 1,
      word: word,
      definition: definition,
      gender: gender,
      sentence: sentence,
      user_id: currentUser.user.id,
    })
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    handleFormData();
    setIsSubmit(true);
  }

  useEffect(() => {
    if (errors === null && isSubmit === true) {
      createCard(formData)
        .then((result) => {
          if (result === 201) {
            dispatch(addVocab(dispatchData));
            navigation.navigate("Home");
          }
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }, [formData, navigation]);

  return (
    <MainContainer>
      <Heading
        text="Create new vocabulary"
        textFont="Ubuntu_700Bold"
        lineHeight={25}
        textTransform="uppercase"
        textSize={20}
        textColor={BrandSystem.charcoal}
      />
      <InputTextField
        label="word"
        border={true}
        textTransform="capitalize"
        onChangeText={setWord}
        value={word}
      />
      <InputTextField
        label="definition"
        border={true}
        textTransform="capitalize"
        onChangeText={setDefinition}
        value={definition}
      />
      <InputTextField
        label="gender"
        border={true}
        textTransform="capitalize"
        onChangeText={setGender}
        value={gender}
      />
      <InputTextField
        label="sentence"
        border={true}
        textTransform="capitalize"
        onChangeText={setSentence}
        value={sentence}
      />
      <ButtonWrapper>
        <Button
          text="submit"
          backgroundColor={BrandSystem.purple}
          border={false}
          textColor={BrandSystem.white}
          textTransform="uppercase"
          onPress={handleSubmit}
        />
      </ButtonWrapper>
    </MainContainer>
  );
};

export default VocabForm;
