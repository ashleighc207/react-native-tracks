import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/tracks/AccountScreen";
import TrackCreateScreen from "./src/screens/tracks/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/tracks/TrackDetailScreen";
import TrackListScreen from "./src/screens/tracks/TrackListScreen";
import SigninScreen from "./src/screens/auth/SigninScreen";
import SignupScreen from "./src/screens/auth/SignupScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  authenticatedFlow: createBottomTabNavigator({
    TrackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    Account: AccountScreen,
    TrackCreate: TrackCreateScreen
  })
});

export default createAppContainer(switchNavigator);
