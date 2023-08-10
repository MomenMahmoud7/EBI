import {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {selectSelected} from '@app/store/selectors/selected';

const useCalculateCategorySum = (categoryId: number) => {
  const selected = useSelector(selectSelected);

  return useMemo(() => {
    const selectedItems = selected[categoryId] || {};
    return Object.values(selectedItems).reduce(
      (acc, curr) => ({
        min: acc.min + curr.minBudget,
        max: acc.max + curr.maxBudget,
      }),
      {min: 0, max: 0},
    );
  }, [categoryId, selected]);
};

export default useCalculateCategorySum;
