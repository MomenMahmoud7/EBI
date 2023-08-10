import {call, put, select} from 'redux-saga/effects';

import {fetchCategories} from '@app/apis/categoriesAPI';
import {setCategories, setCategoriesError} from '@app/store/actions/categories';
import {selectCategoriesData} from '@app/store/selectors/categories';
import {CategoryType} from '@app/types/Category.type';

function* handleCategories() {
  try {
    const categoriesData: CategoryType[] = yield select(selectCategoriesData);

    const categories: CategoryType[] = categoriesData.length
      ? yield categoriesData
      : yield call(fetchCategories);

    yield put(setCategories(categories));
  } catch (error: any) {
    yield put(setCategoriesError(error?.message));
  }
}

export default handleCategories;
