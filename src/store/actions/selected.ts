import SELECTED from '@app/store/constants/selected';
import {SelectedType} from '@app/types/Category.type';

export const addSelected = (selected: SelectedType) => ({
  type: SELECTED.ADD,
  payload: selected,
});

export const removeSelected = (selected: SelectedType) => ({
  type: SELECTED.REMOVE,
  payload: selected,
});

export const saveSelected = (save: boolean) => ({
  type: SELECTED.SAVE,
  payload: save,
});
