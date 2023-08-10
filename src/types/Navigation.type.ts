import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type ParamsList = {
  Category: {
    id: number;
    title: string;
  };
};

export type NavigationType = StackNavigationProp<ParamsList>;

export type RouteType = RouteProp<ParamsList>;
