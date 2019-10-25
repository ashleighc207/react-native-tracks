import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import styles from "../../styles/SignupStyles.js";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}> Sign Up </Text>
      <View>
        <Text style={styles.label}> Email: </Text>
        <TextInput style={styles.textInput} />
      </View>
      <View>
        <Text style={styles.label}> Password: </Text>
        <TextInput style={styles.textInput} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("authenticatedFlow");
        }}
      >
        <Text style={styles.buttonText}> Sign up </Text>
      </TouchableOpacity>

      <Button
        style={styles.textOnlyButton}
        title="Sign in"
        color="rgba(51,165,162,1.0)"
        onPress={() => navigation.navigate("Signin")}
      />
    </View>
  );
};

export default SignupScreen;
