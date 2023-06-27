import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreen from "./defaultScreen/DefaultScreen";
import VehicleScreen from "./vehicleScreen/VehicleScreen";
import { RootStackParamList } from "../types";
import MapScreen from "./mapScreen/MapScreen";
import SettingsScreen from "./settingsScreen/SettingsScreen";

const NestedScreen = createStackNavigator<RootStackParamList>();

const VehiclesListScreen = () => {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen name="Vehicles" component={DefaultScreen} options={{ headerShown: false }}/>
            <NestedScreen.Screen name="Vehicle" component={VehicleScreen} />
            <NestedScreen.Screen name="Map" component={MapScreen} />
            <NestedScreen.Screen name="Settings" component={SettingsScreen} />
        </NestedScreen.Navigator>
    )
}

export default VehiclesListScreen;