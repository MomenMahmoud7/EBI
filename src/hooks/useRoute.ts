import {useRoute as useNativeRoute} from '@react-navigation/native';

import {RouteType} from '@app/types/Navigation.type';

const useRoute = () => useNativeRoute<RouteType>();

export default useRoute;
