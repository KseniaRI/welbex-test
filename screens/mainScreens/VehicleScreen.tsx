import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import DetailContainer from "../../components/DetailContainer";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

interface VehicleScreenProps {
  route: RouteProp<RootStackParamList, 'Vehicle'>;
}

const VehicleScreen = ({ route }: VehicleScreenProps) => {
    const { category, driver, tel } = route.params.item;

    return ( 
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <MapView style={styles.map} />
            </View>
            <View style={styles.detailsContainer}>
                <DetailContainer detailKey="Категория ТС" detail={category} />
                <DetailContainer detailKey="Водитель" detail={driver} />
                <DetailContainer detailKey="Телефон" detail={tel} />
                <View style={styles.contacts}>
                    <TouchableOpacity style={styles.socialContainer}>
                        <Ionicons name="call" size={34} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialContainer}>
                        <FontAwesome name="whatsapp" size={34} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
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

export default VehicleScreen;