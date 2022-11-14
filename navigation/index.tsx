import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import VocabForm from "../screens/VocabForm";
import Test from "../screens/Test";
import Landing from "../screens/Landing";
import SignUpForm from "../screens/SignUpForm";
import Login from "../screens/Login";

export type RootStackParamList = {
  Home: undefined;
  VocabForm: undefined;
  SignUpForm: undefined;
  Login: undefined;
  Test: undefined;
  Landing: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VocabForm" component={VocabForm} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
