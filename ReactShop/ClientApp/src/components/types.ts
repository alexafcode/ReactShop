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

export type CheckboxInitialType = {
  name: string;
  checked: boolean;
  value: number;
};

/// Product
export type ProductsType = {
  id: number;
  manufacturer: string;
  name: string;
  cpu_name: string;
  cpu_core: number;
  ram: number;
  sim: number;
  screen_width: number;
  screen_height: number;
  screen_size: number;
  resolution: number;
  rom: number;
  camera: number;
  battery: number;
  os: string;
  rating: number;
  image: string;
  image_preview: string;
  image_large: string;
  price: number;
};
