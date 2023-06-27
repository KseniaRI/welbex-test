import { Text, View } from "react-native";

import { styles } from './DetailContainerStyles';

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

export default DetailContainer;