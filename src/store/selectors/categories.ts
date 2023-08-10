import StateType from '@app/types/State.type';

export const selectCategories = (state: StateType) => state.categories;

export const selectCategoriesData = (state: StateType) => state.categories.data;
