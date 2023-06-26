export enum VehicleCategory{
  TRUCK = 'TRUCK',
  PASSENGER = 'PASSENGER',
  SPECIAL = 'SPECIAL',
}

export interface IVehicle {
  id: string;
  vehicle: string;
  driver: string,
  category: VehicleCategory,
  tel: string
};

export type RootStackParamList = {
  Vehicles: undefined;
  Vehicle: { item: IVehicle };
  Settings: undefined;
  Map: undefined;
};


