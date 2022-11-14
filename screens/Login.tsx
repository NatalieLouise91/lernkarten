import React, { useState, useEffect, FunctionComponent } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { sharedComponents } from "../constants/Layout";
import { BrandSystem } from "../constants/BrandSystem";
import { InputTextField } from "../components/InputTextField";
import { Button } from "../components/Button";
import { addCurrentUser } from "../utils/store";

const MainContainer = styled(sharedComponents)`
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.View`
  width: 100%;
`;

const InputsContainer = styled.View`
    width: 100%;
    margin: 10px 0px;
    height: 20%;
`;

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: FunctionComponent<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  interface InitialFormData {
    email: string;
    password: string;
  }
  const initialFormData: InitialFormData = {
    email: "",
    password: "",
  };

  interface ErrorsObject {
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState(initialFormData);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<ErrorsObject | null>(null);
  const [isSubmit, setIsSubmit] = useState<Boolean>(false)

  function handleFormData() {
    setFormData({
      email: email,
      password: password,
    });
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    handleFormData();
    setIsSubmit(true);

  }

  useEffect(() => {
    if (errors === null && isSubmit === true) {
        dispatch(addCurrentUser({ email: email }));
      navigation.navigate("Home");
    }
  }, [formData, navigation]);

  return (
    <MainContainer>
    <InputsContainer>
      <InputTextField
        label="email"
        border={false}
        textTransform="capitalize"
        onChangeText={setEmail}
        value={email}
      />
      <InputTextField
        label="password"
        border={false}
        textTransform="capitalize"
        onChangeText={setPassword}
        value={password}
      />
      </InputsContainer>
      <ButtonWrapper>
        <Button
          text="Next"
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

export default Login;