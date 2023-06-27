import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    detailContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        marginBottom: 30,
        paddingBottom: 10,
    },
    inlineText: {
        fontSize: 20,
        color: 'black',
  },
    highlightedText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5f9ea0',     
  },
});