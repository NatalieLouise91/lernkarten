import React, { FunctionComponent } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/index";
import styled from "styled-components/native";
import { BrandSystem } from "../constants/BrandSystem";
import { sharedComponents } from "../constants/Layout";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../utils/store";

const MainContainer = styled(sharedComponents)`
  height: 100%;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  height: 130px;
  width: 100%;
  justify-content: space-between;
`;
type Props = NativeStackScreenProps<RootStackParamList, "Home">;
const Home: FunctionComponent<Props> = ({ navigation }) => {
  const currentUser = useSelector(selectCurrentUser);
  let displayUser = currentUser.user.username;
  return (
    <MainContainer>
      {displayUser && (
        <Heading
          text={`welcome ${displayUser}!`}
          textFont="Ubuntu_700Bold"
          textSize={10}
          lineHeight={15}
          textTransform="lowercase"
          textColor={BrandSystem.charcoal}
        />
      )}
      <Heading
        text="Test your knowledge or create a new card"
        textFont="Ubuntu_700Bold"
        lineHeight={25}
        textTransform="uppercase"
        textSize={20}
        textColor={BrandSystem.charcoal}
      />
      <ButtonWrapper>
        <Button
          text="Create Card"
          backgroundColor={BrandSystem.purple}
          border={false}
          textColor={BrandSystem.white}
          textTransform="uppercase"
          onPress={() => navigation.navigate("VocabForm")}
        />
        <Button
          text="Test Knowledge"
          backgroundColor={BrandSystem.white}
          border={true}
          textColor={BrandSystem.charcoal}
          textTransform="uppercase"
          onPress={() => navigation.navigate("Test")}
        />
      </ButtonWrapper>
    </MainContainer>
  );
};

export default Home;
