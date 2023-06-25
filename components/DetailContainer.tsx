import { StyleSheet, Text, View } from "react-native";

interface Props {
   detailKey: string,
   detail: string
}

const DetailContainer = ({detailKey, detail}: Props) => {
    return (
        <View style={styles.detailContainer}>
            <Text style={styles.inlineText}>{`${detailKey}:`}</Text>
            <Text style={styles.highlightedText}>{detail}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default DetailContainer;