import { StackNavigationProp } from "@react-navigation/stack";

export interface IVehicle {
  id: string;
  vehicle: string;
  driver: string,
  category: string,
  tel: string
};

export type RootStackParamList = {
  Vehicles: undefined;
  Vehicle: { item: IVehicle };
};
