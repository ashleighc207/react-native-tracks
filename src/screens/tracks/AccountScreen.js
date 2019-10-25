import React from "react";
import {
  TouchableOpacity,
  Button,
  SafeAreaView,
  View,
  StyleSheet,
  Text
} from "react-native";
import styles from "../../styles/AccountStyles";

const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.heading}> Your Account </Text>
      <TouchableOpacity
        style={styles.buttonTextOnly}
        onPress={() => navigation.navigate("TrackCreate")}
      >
        <Text style={styles.buttonTextOnlyText}>Create New Track </Text>
      </TouchableOpacity>
      <View style={styles.flexBottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={styles.buttonText}> Sign Out </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
