import _cloneDeep from 'lodash/cloneDeep';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _set from 'lodash/set';
import _unset from 'lodash/unset';

import SELECTED from '@app/store/constants/selected';
import {ActionType} from '@app/types/Action.type';
import {SelectedType} from '@app/types/Category.type';

const initialState = {
  selected: {},
  saved: false,
};

type PayloadType = SelectedType & boolean;

const selectedReducer = (
  state = initialState,
  action: ActionType<PayloadType>,
) => {
  const clonedState = _cloneDeep(state);
  switch (action.type) {
    case SELECTED.ADD:
      _set(
        clonedState,
        ['selected', action.payload.parentId, `-${action.payload.item.id}`],
        action.payload.item,
      );
      return clonedState;
    case SELECTED.REMOVE:
      _unset(clonedState, [
        'selected',
        action.payload.parentId,
        `-${action.payload.item.id}`,
      ]);

      const selectedParent = _get(clonedState, [
        'selected',
        action.payload.parentId,
      ]);
      const isEmpty = _isEmpty(selectedParent);

      if (isEmpty) {
        _unset(clonedState, ['selected', action.payload.parentId]);
      }
      return clonedState;
    case SELECTED.SAVE:
      _set(clonedState, ['saved'], action.payload);
      return clonedState;
    default:
      return state;
  }
};

export default selectedReducer;
