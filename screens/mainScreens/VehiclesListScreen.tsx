import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreen from "./DefaultScreen";
import VehicleScreen from "./VehicleScreen";
import { RootStackParamList } from "../../types";

const NestedScreen = createStackNavigator<RootStackParamList>();

const VehiclesListScreen = () => {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen name="Vehicles" component={DefaultScreen} />
            <NestedScreen.Screen name="Vehicle" component={VehicleScreen}/>
        </NestedScreen.Navigator>
    )
}

export default VehiclesListScreen;