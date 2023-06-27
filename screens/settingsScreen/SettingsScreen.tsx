import { useTranslation } from "react-i18next";
import 'intl-pluralrules';
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from './SettingsScreenStyles';

const SettingsScreen = () => {
    const [activeLang, setActiveLang] = useState('en');

    const { i18n, t } = useTranslation();

    const changeLang = (lang: string) => {
        setActiveLang(lang);
        i18n.changeLanguage(lang);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('title.language')}</Text>
            <View style={styles.lngBtnsWrap}>
                <TouchableOpacity
                    style={[styles.lngBtn, {
                    backgroundColor: activeLang === 'ru' ? "#d3d3d3" : "#f0e68c"}]}
                    onPress={() => changeLang('ru')} disabled={activeLang === 'ru'}
                >
                    <Text>{t('buttons.ru')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.lngBtn, { backgroundColor: activeLang === 'en' ? "#d3d3d3" : "#f0e68c" }]}
                    onPress={() => changeLang('en')} disabled={activeLang === 'en'}
                >
                    <Text>{t('buttons.en')}</Text>
                </TouchableOpacity>
            </View>
         </View>
    )
}
  
export default SettingsScreen;