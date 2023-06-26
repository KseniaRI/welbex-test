import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IVehicle, RootStackParamList, VehicleCategory } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import CategoriesButtons from '../../components/CategoriesButtons';
import { useEffect, useState } from 'react';

const vehiclesData: IVehicle[] = require('../../vehicles.json');

interface DefaultScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const DefaultScreen = ({ navigation }: DefaultScreenProps) => {
  const [selectedCategories, setSelectedCategories] = useState<VehicleCategory[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<IVehicle[]>(vehiclesData);

  useEffect(() => {
    selectedCategories.length === 0 && setFilteredVehicles(vehiclesData);
  }, [selectedCategories])

  const handleCategorySelect = (category: VehicleCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
        setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleApplyFilter = () => {
    const filteredVehiclesData = vehiclesData.filter(vehicleData => selectedCategories.includes(vehicleData.category));
    setFilteredVehicles(filteredVehiclesData);
  }

  const backgroundColor = selectedCategories.length > 0 ? "#f0e68c" : "#d3d3d3"; 

  return (
      <View style={styles.container}>
        <CategoriesButtons
          handleCategorySelect={handleCategorySelect}
          selectedCategories={selectedCategories}
        />
        <TouchableOpacity onPress={handleApplyFilter}
          disabled={selectedCategories.length === 0}
          style={[styles.filterBtn, {backgroundColor}]}
        >
          <Text>
            {selectedCategories.length > 0 ? 'Применить' : 'Выберите категорию'}
          </Text>
        </TouchableOpacity>
            <FlatList
            data={filteredVehicles}
            renderItem={({item}: {item: IVehicle}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Vehicle", { item })}
                style={styles.card}
              >
                    <Text style={styles.cardDetails}>{`${item.vehicle}#${item.id}`}</Text>
                    <Text style={styles.cardDetails}>{item.driver}</Text>
                    <Text style={styles.cardDetails}>{item.category}</Text>
                </TouchableOpacity>
            ) }
                keyExtractor={(item) => item.id}
            />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    },
  card: {
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    marginTop: 20,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 15
  },
  cardDetails: {
    fontSize: 18,
  },
  filterBtn: {
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 10
    }
});

export default DefaultScreen;