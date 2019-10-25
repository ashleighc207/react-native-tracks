import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "../../styles/TrackDetailStyles";

const TrackDetailScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Your 'name' Track</Text>
    </View>
  );
};

export default TrackDetailScreen;
