import { NavigationContainer} from '@react-navigation/native';
import VehiclesListScreen from './screens/VehiclesListScreen';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import 'intl-pluralrules';

export default function App() {

    return (
      <I18nextProvider i18n={i18n}>
          <NavigationContainer>
              <VehiclesListScreen />
          </NavigationContainer>
      </I18nextProvider>
    );
}


