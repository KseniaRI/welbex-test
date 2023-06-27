import { StyleSheet, View } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { RouteProp } from "@react-navigation/native";
import { IVehicle, RootStackParamList } from "../../types";

interface VehiclesScreenProps {
  route: RouteProp<RootStackParamList, 'Vehicles'>;
}

const MapScreen = ({route}: VehiclesScreenProps ) => {
    const vehicles = route.params.filteredVehicles;

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 45.6496,
                    longitude: 9.8295,
                    latitudeDelta: 1.5,
                    longitudeDelta: 1.5,
                }}
            >
                {vehicles.map((vehicle: IVehicle) => {
                    const { id, vehicle: vehicleName, driver, coordinate } = vehicle;
                    const { latitude, longitude } = coordinate;
                
                    return(
                        <Marker
                            key={id}
                            coordinate={{ latitude, longitude}}
                            title={vehicleName}
                            description={driver}
                            pinColor="#000"
                        />
                    )
                })}
            </MapView>  
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    map: {
        flex: 1
    },
})

export default MapScreen;