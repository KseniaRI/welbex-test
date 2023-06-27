import { Alert, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { RouteProp } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useTranslation } from "react-i18next";
import 'intl-pluralrules';

import { RootStackParamList } from "../../types";
import DetailContainer from "../../components/detailContainer/DetailContainer";
import { styles } from './VehicleScreenStyles';

interface VehicleScreenProps {
  route: RouteProp<RootStackParamList, 'Vehicle'>;
}

const VehicleScreen = ({ route }: VehicleScreenProps) => {
    const { t } = useTranslation();

    const { id, category, vehicle: vehicleName, driver, tel, coordinate } = route.params.item;
    const { latitude, longitude } = coordinate;

    const makePhoneCall = (phoneNumber: string) => {
        const url = `tel:${phoneNumber}`;
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              Alert.alert(t('alerts.call'));
            }
          })
          .catch((error) => console.log("Error: ", error));
    };

    const openWhatsAppChat = (phoneNumber: string) => {
        const url = `whatsapp://send?phone=${phoneNumber}`;
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              Alert.alert(t('alerts.whatsapp'));
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
                    />
                </MapView>
            </View>
            <View style={styles.detailsContainer}>
                <DetailContainer detailKey={t('details.category')} detail={category} />
                <DetailContainer detailKey={t('details.driver')} detail={driver} />
                <DetailContainer detailKey={t('details.tel')} detail={tel} />
                <View style={styles.contacts}>
                    <TouchableOpacity
                        style={styles.socialContainer}
                        onPress={() => makePhoneCall(tel)}>
                        <Ionicons name="call" size={34} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.socialContainer}
                        onPress={() => openWhatsAppChat(tel)}>
                        <FontAwesome name="whatsapp" size={34} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default VehicleScreen;