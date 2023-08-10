import StateType from '@app/types/State.type';

export const selectCategoryId = (state: StateType) => state.categoryItems.id;

export const selectCategoryItems = (state: StateType) => state.categoryItems;

export const selectCategoryItemsData = (state: StateType) =>
  state.categoryItems.data;
