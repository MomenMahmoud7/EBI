import CATEGORIES from '@app/store/constants/categories';
import {CategoryType} from '@app/types/Category.type';

export const startFetchingCategories = () => ({
  type: CATEGORIES.START,
});

export const setCategories = (categories: CategoryType[]) => ({
  type: CATEGORIES.SUCCESS,
  payload: categories,
});

export const setCategoriesError = (error: string) => ({
  type: CATEGORIES.ERROR,
  payload: error,
});
