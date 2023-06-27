export enum VehicleCategory{
  TRUCK = 'TRUCK',
  PASSENGER = 'PASSENGER',
  SPECIAL = 'SPECIAL',
}
interface ICoordinate{
  longitude: number,
  latitude: number
}

export interface IVehicle {
  id: string;
  vehicle: string;
  driver: string,
  category: VehicleCategory,
  tel: string,
  coordinate: ICoordinate
};

export type RootStackParamList = {
  Vehicles: {filteredVehicles: IVehicle[]};
  Vehicle: { item: IVehicle };
  Settings: undefined;
  Map: {filteredVehicles: IVehicle[]}
};


