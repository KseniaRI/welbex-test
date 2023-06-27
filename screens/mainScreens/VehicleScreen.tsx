import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { RouteProp } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import { RootStackParamList } from "../../types";
import DetailContainer from "../../components/DetailContainer";

interface VehicleScreenProps {
  route: RouteProp<RootStackParamList, 'Vehicle'>;
}

const VehicleScreen = ({ route }: VehicleScreenProps) => {
    const { id, category, vehicle: vehicleName, driver, tel, coordinate } = route.params.item;
    const { latitude, longitude } = coordinate;

    const makePhoneCall = (phoneNumber: string) => {
        const url = `tel:${phoneNumber}`;
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              Alert.alert("Не удалось осуществить звонок");
            }
          })
          .catch((error) => console.log("Ошибка: ", error));
    };

    const openWhatsAppChat = (phoneNumber: string) => {
        const url = `whatsapp://send?phone=${phoneNumber}`;
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              Alert.alert("WhatsApp не установлен на устройстве");
            }
          })
          .catch((error) => console.log("Ошибка: ", error));
    };

    return ( 
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: 45.6496,
                        longitude: 9.8295,
                        latitudeDelta: 1.5,
                        longitudeDelta: 1.5,
                    }}
                >
                    <Marker
                        key={id}
                        coordinate={{ latitude, longitude}}
                        title={vehicleName}
                        description={driver}
                        pinColor="#000"
                    />
                </MapView>
            </View>
            <View style={styles.detailsContainer}>
                <DetailContainer detailKey="Категория ТС" detail={category} />
                <DetailContainer detailKey="Водитель" detail={driver} />
                <DetailContainer detailKey="Телефон" detail={tel} />
                <View style={styles.contacts}>
                    <TouchableOpacity style={styles.socialContainer} onPress={() => makePhoneCall(tel)}>
                        <Ionicons name="call" size={34} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialContainer} onPress={()=>openWhatsAppChat(tel)}>
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