import {call, put, select} from 'redux-saga/effects';

import {fetchCategoryById} from '@app/apis/categoriesAPI';
import {
  setCategoryItems,
  setCategoryItemsError,
} from '@app/store/actions/categoryItems';
import {
  selectCategoryId,
  selectCategoryItemsData,
} from '@app/store/selectors/categoryItems';
import {CategoryItemType} from '@app/types/Category.type';

function* handleCategoryItems() {
  try {
    const id: number = yield select(selectCategoryId);

    const categoryItemsData: CategoryItemType[] = yield select(
      selectCategoryItemsData,
    );

    const cachedCategoryItems: CategoryItemType[] = yield categoryItemsData[id];

    const categoryItems: CategoryItemType[] = cachedCategoryItems?.length
      ? yield cachedCategoryItems
      : yield call(fetchCategoryById, id);

    yield put(setCategoryItems(categoryItems));
  } catch (error: any) {
    yield put(setCategoryItemsError(error?.message));
  }
}

export default handleCategoryItems;
