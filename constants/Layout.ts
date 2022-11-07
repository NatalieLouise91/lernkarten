import { Dimensions } from 'react-native';
import styled from "styled-components/native";
import { BrandSystem } from './BrandSystem';

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

export const sharedComponents = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: 4%;
    background-color: ${BrandSystem.white}
    color: ${BrandSystem.charcoal};
    font-family: "Ubuntu_400Regular";
`;

