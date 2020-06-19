// Filters Type
export type FilterValueType = {
  label: string;
  val: number; //string | number;
};

export type FilterType = {
  type: string;
  name: string;
  value: FilterValueType[];
};

export type ExpansionsProps = {
  filter: FilterType;
};

export type FilterTypeProps = {
  value: FilterValueType[];
};
