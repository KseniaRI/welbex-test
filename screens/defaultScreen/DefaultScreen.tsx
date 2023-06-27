import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import 'intl-pluralrules';

import CategoriesButtons from '../../components/categoriesButton/CategoriesButtons';
import VehicleCard from '../../components/vehicleCard/VehicleCard';
import { IVehicle, RootStackParamList, VehicleCategory } from '../../types';
import { styles } from './DefaultScreenStyles';


const vehiclesData: IVehicle[] = require('../../vehicles.json');

interface DefaultScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

const DefaultScreen = ({ navigation }: DefaultScreenProps) => {
    const { t } = useTranslation();

    const [selectedCategories, setSelectedCategories] = useState<VehicleCategory[]>([]);
    const [filteredVehicles, setFilteredVehicles] = useState<IVehicle[]>(vehiclesData);

    // effect that tracks changes to selected categories

    useEffect(() => {
        selectedCategories.length === 0 && setFilteredVehicles(vehiclesData);
    }, [selectedCategories])

    // Category selection function. Activates/deactivates selection when clicked again

    const handleCategorySelect = (selectedCategory: VehicleCategory) => {
        if (selectedCategories.includes(selectedCategory)) {
          setSelectedCategories(selectedCategories.filter((category) => category !== selectedCategory));
        } else {
            setSelectedCategories([...selectedCategories, selectedCategory]);
        }
    };

    // Function that applies the selection

    const handleApplyFilter = () => {
        const filteredVehiclesData: IVehicle[] = vehiclesData.filter(vehicleData => selectedCategories.includes(vehicleData.category));
        setFilteredVehicles(filteredVehiclesData);
    }

      const backgroundColor = selectedCategories.length > 0 ? "#f0e68c" : "#d3d3d3"; 
      const actionButtonText = selectedCategories.length > 0 ? t('buttons.applicate') : t('buttons.choose');

      return (
          <View style={styles.container}>
              <TouchableOpacity
                style={styles.settings}
                onPress={() => navigation.navigate('Settings')}
              >
                  <Feather name="settings" size={24} color="black" />
              </TouchableOpacity>

              <Text style={styles.title}>{t("title.vehicles")}</Text>

              <CategoriesButtons
                  handleCategorySelect={handleCategorySelect}
                  selectedCategories={selectedCategories}
              />

              <TouchableOpacity
                  onPress={handleApplyFilter}
                  disabled={selectedCategories.length === 0}
                  style={[styles.filterBtn, {backgroundColor}]}
              >
                  <Text style={styles.btnTxt}>{actionButtonText}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.mapBtn}
                  onPress={() => navigation.navigate('Map', {filteredVehicles})}
              > 
                    <MaterialCommunityIcons name="map-search-outline" size={24} color="black" />
              </TouchableOpacity>

              <FlatList
                  data={filteredVehicles}
                  renderItem={({item}: {item: IVehicle}) => (
                      <TouchableOpacity
                          onPress={() => navigation.navigate("Vehicle", { item })}
                      > 
                          <VehicleCard item={item} />
                      </TouchableOpacity>
                  ) }
                  keyExtractor={(item) => item.id}
              />
          </View>
      );
}   

export default DefaultScreen;