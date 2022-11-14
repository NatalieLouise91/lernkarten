import React, { useState, useEffect, FunctionComponent } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../utils/store";
import { signUp } from "../services/authServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sharedComponents } from "../constants/Layout";
import { BrandSystem } from "../constants/BrandSystem";
import { InputTextField } from "../components/InputTextField";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

const MainContainer = styled(sharedComponents)`
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.View`
  width: 100%;
`;

type Props = NativeStackScreenProps<RootStackParamList, "SignUpForm">;

const SignUpForm: FunctionComponent<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  interface InitialFormData {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
  }
  const initialFormData: InitialFormData = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  interface ErrorsObject {
    word: string;
    definition: string;
    gender: string;
    sentence: string;
  }

  const [formData, setFormData] = useState(initialFormData);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<ErrorsObject | null>(null);
  const [isSubmit, setIsSubmit] = useState<Boolean>(false);

  function handleFormData() {
    setFormData({
      username: username,
      email: email,
      password: password,
      confirm_password: confirmPassword,
    });
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    handleFormData();
    setIsSubmit(true);
  }

  useEffect(() => {
    if (isSubmit === true) {
      dispatch(addCurrentUser({ email: email }));
      signUp(formData).then((result) => {
        if (result.status === 201) {
          AsyncStorage.setItem("token", result.data.token);
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
        text="Create an account to start learning today"
        textFont="Ubuntu_700Bold"
        lineHeight={25}
        textTransform="uppercase"
        textSize={20}
        textColor={BrandSystem.charcoal}
      />
      <InputTextField
        label="Username"
        border={true}
        textTransform="capitalize"
        onChangeText={setUsername}
        value={username}
      />
      <InputTextField
        label="email"
        border={true}
        textTransform="capitalize"
        onChangeText={setEmail}
        value={email}
      />
      <InputTextField
        label="password"
        border={true}
        textTransform="capitalize"
        onChangeText={setPassword}
        value={password}
      />
      <InputTextField
        label="confirm your password"
        border={true}
        textTransform="capitalize"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
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

export default SignUpForm;
