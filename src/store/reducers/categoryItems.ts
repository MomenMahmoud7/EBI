import CATEGORY_ITEMS from '@app/store/constants/categoryItems';
import {ActionType} from '@app/types/Action.type';
import {CategoryItemType} from '@app/types/Category.type';

const initialState = {
  isLoading: true,
  id: 0,
  data: {},
  error: null,
};

type PayloadType = CategoryItemType[] | string | number;

const categoryItemsReducer = (
  state = initialState,
  action: ActionType<PayloadType>,
) => {
  switch (action.type) {
    case CATEGORY_ITEMS.START:
      return {
        ...state,
        isLoading: true,
        id: action.payload,
      };
    case CATEGORY_ITEMS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          [state.id]: action.payload,
        },
      };
    case CATEGORY_ITEMS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryItemsReducer;
