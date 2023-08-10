import {takeEvery} from 'redux-saga/effects';

import CATEGORIES from '@app/store/constants/categories';
import CATEGORY_ITEMS from '@app/store/constants/categoryItems';
import handleCategories from '@app/store/sagas/categories';
import handleCategoryItems from '@app/store/sagas/categoryItems';

export default function* categoriesSaga() {
  yield takeEvery(CATEGORIES.START, handleCategories);
  yield takeEvery(CATEGORY_ITEMS.START, handleCategoryItems);
}
