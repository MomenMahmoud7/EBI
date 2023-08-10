import StateType from '@app/types/State.type';

export const selectSelected = (state: StateType) => state.event.selected;
export const selectSaved = (state: StateType) => state.event.saved;
