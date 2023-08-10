import CATEGORIES from '@app/store/constants/categories';
import {ActionType} from '@app/types/Action.type';
import {CategoryType} from '@app/types/Category.type';

const initialState = {
  isLoading: true,
  data: [],
  error: null,
};

const categories = (state = initialState, action: ActionType<CategoryType>) => {
  switch (action.type) {
    case CATEGORIES.START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case CATEGORIES.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categories;
