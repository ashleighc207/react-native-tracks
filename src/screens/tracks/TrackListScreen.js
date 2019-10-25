import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
  FlatList
} from "react-native";
import styles from "../../styles/TrackListStyles";

const TrackListScreen = ({ navigation }) => {
  const data = [
    {
      name:
        "test wtgw dg sdg sdg sd g sdg d gsd fgs fdg dsfg sd fg sdfg dgf dfs g sdfg sdf g"
    },
    {
      name:
        "test wtgw dg dg sdg sd g sdg d gsd fgs fdg dsfg sd fg sdfg dgf dfs g sdfsg sdf g"
    },
    {
      name:
        "test wtgws dg dg sdg sd g sdg d gsd fgs fdg dsfg sd fg sdfg dgf dfs g sdfg sdf g"
    },
    {
      name:
        "tesst wtgw dg dg sdg sd g sdg d gsd fgs fdg dsfg sd fg sdfg dgf dfs g sdfg sdf g"
    },
    {
      name:
        "test wtgsw dg dg sdg sd g sdg d gsd fgs fdg dsfg sd fg sdfg dgf dfs g sdfg sdf g"
    }
  ];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Your Tracks</Text>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={data => data.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.track}
                onPress={() => navigation.navigate("TrackDetail")}
              >
                <Text style={styles.trackName}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </ScrollView>
    </View>
  );
};

export default TrackListScreen;
