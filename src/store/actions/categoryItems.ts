import CATEGORY_ITEMS from '@app/store/constants/categoryItems';
import {CategoryItemType} from '@app/types/Category.type';

export const startFetchingCategoryItems = (id: number) => ({
  type: CATEGORY_ITEMS.START,
  payload: id,
});

export const setCategoryItems = (categoryItems: CategoryItemType[]) => ({
  type: CATEGORY_ITEMS.SUCCESS,
  payload: categoryItems,
});

export const setCategoryItemsError = (error: string) => ({
  type: CATEGORY_ITEMS.ERROR,
  payload: error,
});
