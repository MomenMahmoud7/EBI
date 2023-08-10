import {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {selectSelected} from '@app/store/selectors/selected';

const useCalculateSum = () => {
  const selected = useSelector(selectSelected);

  return useMemo(() => {
    let minBudget = 0;
    let maxBudget = 0;
    Object.values(selected).forEach(category =>
      Object.values(category).forEach(item => {
        minBudget = minBudget + item.minBudget;
        maxBudget = maxBudget + item.maxBudget;
      }),
    );
    return {min: minBudget, max: maxBudget};
  }, [selected]);
};

export default useCalculateSum;
