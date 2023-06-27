import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    mapContainer: {
        height: 250,
        width: "100%",
    },
    map: {
        width: '100%',
        height: '100%',
    },
    detailsContainer: {
        marginHorizontal: 20,
        marginTop: 50
    },
    detailContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inlineText: {
        fontSize: 24,
        color: 'black',
        marginBottom: 30,
  },
    highlightedText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5f9ea0', 
    },
    contacts: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    socialContainer: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});