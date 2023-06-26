import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { VehicleCategory } from "../types"

interface Props{
    handleCategorySelect: (category: VehicleCategory) => void,
    selectedCategories: VehicleCategory[]
}

interface ICategory {
    categoryName: VehicleCategory,
    icon: "truck-cargo-container" | "bus" | "tanker-truck"
}

const CategoriesButtons = ({handleCategorySelect, selectedCategories}: Props) => {
    const categories: ICategory[] = [
        {
            categoryName: VehicleCategory.TRUCK,
            icon: "truck-cargo-container"
        },
        {
            categoryName: VehicleCategory.PASSENGER,
            icon: "bus",
        },
        {
            categoryName: VehicleCategory.SPECIAL,
            icon: "tanker-truck"
        }
    ]
    
    return (
        <View style={styles.btnsBar}>
            {categories.map((category: ICategory) => {
                const isSelected = selectedCategories.includes(category.categoryName);
                const backgroundColor = isSelected ? "#fff" : "transparent";
                
                return (
                    <TouchableOpacity
                        style={[styles.categoryBtn, { backgroundColor }]}
                        onPress={() => handleCategorySelect(category.categoryName)}
                        key={category.categoryName}
                    >
                        <MaterialCommunityIcons name={category.icon} size={24} color="black" />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    btnsBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: '#f0e68c',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        alignItems: "center"
    },
    categoryBtn: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoriesButtons