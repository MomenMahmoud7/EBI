import {useNavigation as useNativeNavigation} from '@react-navigation/native';

import {NavigationType} from '@app/types/Navigation.type';

const useNavigation = () => useNativeNavigation<NavigationType>();

export default useNavigation;
