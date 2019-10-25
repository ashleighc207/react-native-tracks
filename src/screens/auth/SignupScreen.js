import React from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text> Sign up screen </Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to Authenticated Flow"
        onPress={() => navigation.navigate("authenticatedFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
