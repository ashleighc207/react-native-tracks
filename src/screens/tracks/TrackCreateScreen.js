import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import styles from "../../styles/TrackCreateStyles";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.heading}>Create Track</Text>
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
