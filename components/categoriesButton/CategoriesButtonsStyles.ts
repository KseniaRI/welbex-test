import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btnsBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: '#f0e68c',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 30,
        alignItems: "center"
    },
    categoryBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#fff",
    }
})