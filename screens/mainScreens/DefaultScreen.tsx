import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IVehicle, RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
const vehiclesData: IVehicle[] = require('../../vehicles.json');

interface DefaultScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const DefaultScreen = ({navigation}: DefaultScreenProps) => {
    return (
        <View style={styles.container}>
            <FlatList
            data={vehiclesData}
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
  }
});

export default DefaultScreen;