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
  button: {
    backgroundColor: "rgba(51,165,162,1.0)",
    width: 180,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 58,
    borderRadius: 29,
    marginTop: 50,
    marginBottom: 30
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 22,
    textTransform: "uppercase"
  },
  buttonTextOnly: {
    alignSelf: "center",
    marginTop: 30,
    flex: 3
  },
  buttonTextOnlyText: {
    color: "rgba(51,165,162,1.0)",
    fontSize: 30,
    fontWeight: "300"
  },
  flexBottom: {
    flex: 1
  }
});

export default styles;
