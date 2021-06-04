import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },

  titles: {
    marginTop: "25%",
    width: "100%",
    alignItems: "center",
  },

  carName: {
    fontSize: 16,
    fontWeight: "500",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
  },

  subTitle: {
    fontSize: 15,
    color: "#5c5e62",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonWrapper: {
    position: "absolute",
    width: "100%",
    bottom: 60,
  },
});

export default styles;
