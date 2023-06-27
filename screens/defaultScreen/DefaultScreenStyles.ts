import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 10
  },
  settings: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 36,
    textAlign: 'center'
  },
  filterBtn: {
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  mapBtn: {
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0e68c",
    marginTop: 10,
  },
  btnTxt: {
    fontSize: 18,
  }
});