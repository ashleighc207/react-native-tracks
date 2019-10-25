import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 40,
    flex: 1
  },
  heading: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "300",
    color: "rgba(51,165,162,1.0)",
    marginTop: 40,
    marginBottom: 40
  },
  track: {
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(51,165,162,1.0)",
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  trackNoBorder: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  trackName: {
    flexShrink: 1,
    flex: 1,
    fontSize: 18,
    fontWeight: "300",
    letterSpacing: 1.1,
    color: "#424242"
  }
});

export default styles;
