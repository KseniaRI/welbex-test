import { View } from "react-native";
import { IVehicle } from "../../types";
import { useTranslation } from "react-i18next";
import 'intl-pluralrules';  

import DetailContainer from "../detailContainer/DetailContainer";
import { styles } from './VehicleCardStyles';

interface Props {
  item: IVehicle
}

const VehicleCard = ({ item }: Props) => {
    const { t } = useTranslation();

    const { vehicle, id, driver, category } = item;

    return (
        <View style={styles.card}>
            <DetailContainer detailKey={t('details.vehicle')} detail={`${vehicle}#${id}`} />
            <DetailContainer detailKey={t('details.driver')} detail={driver} />
            <DetailContainer detailKey={t('details.category')} detail={category} />
        </View>
    )
}

export default VehicleCard;