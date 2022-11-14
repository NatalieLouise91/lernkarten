import React, { FunctionComponent } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";
import styled from "styled-components/native";
import { BrandSystem } from "../constants/BrandSystem";
import { sharedComponents } from "../constants/Layout";
import { Button } from "../components/Button";

const MainContainer = styled(sharedComponents)`
  height: 100%;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  height: 130px;
  width: 100%;
  justify-content: space-between;
`;

const HeroImage = styled.View`
    width: 100%;
    height: 50%;
    background-color: ${BrandSystem.grey}
`;
type Props = NativeStackScreenProps<RootStackParamList, "Landing">;
const Landing: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <MainContainer>
        <HeroImage />
      <ButtonWrapper>
        <Button
          text="Log in"
          backgroundColor={BrandSystem.purple}
          border={false}
          textColor={BrandSystem.white}
          textTransform="uppercase"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          text="Sign up"
          backgroundColor={BrandSystem.white}
          border={true}
          textColor={BrandSystem.charcoal}
          textTransform="uppercase"
          onPress={() => navigation.navigate("SignUpForm")}
        />
      </ButtonWrapper>
    </MainContainer>
  );
};

export default Landing;
