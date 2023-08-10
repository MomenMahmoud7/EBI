export type CategoryType = {
  id: number;
  title: string;
  image: string;
};

export type CategoryItemType = {
  id: number;
  avgBudget: number;
  image: string;
  maxBudget: number;
  minBudget: number;
  title: string;
};

export type SelectedType = {
  parentId: number;
  item: CategoryItemType;
};
