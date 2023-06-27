import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 36,
        textAlign: 'center'
    },
    lngBtnsWrap: {
        marginHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        marginTop: 30,
        justifyContent: 'center'
    },
    lngBtn: {
        width: 40,
        height: 40,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: 'transparent'
    }
})