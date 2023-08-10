import {CategoryItemType, CategoryType} from '@app/types/Category.type';

type CategoriesStateType = {
  isLoading: boolean;
  data: CategoryType[];
  error: string;
};

type CategoryItemsType = {
  isLoading: boolean;
  id: number;
  data: {[s: number]: CategoryItemType[]};
  error: string;
};

type EventSelectedType = {
  selected: {[s: number]: {[s: number]: CategoryItemType}};
  saved: boolean;
};

type StateType = {
  categories: CategoriesStateType;
  categoryItems: CategoryItemsType;
  event: EventSelectedType;
};

export default StateType;
