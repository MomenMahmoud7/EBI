import {CategoryItemType, CategoryType} from '@app/types/Category.type';

const appURL = 'https://swensonhe-dev-challenge.s3.us-west-2.amazonaws.com';

type FetchCategoriesType = () => Promise<CategoryType[]>;
type FetchCategoryByIdType = (
  categoryId: number,
) => Promise<CategoryItemType[]>;

export const fetchCategories: FetchCategoriesType = () =>
  fetch(`${appURL}/categories.json`).then(response => response.json());

export const fetchCategoryById: FetchCategoryByIdType = (categoryId: number) =>
  fetch(`${appURL}/categories/${categoryId}.json`).then(response =>
    response.json(),
  );
