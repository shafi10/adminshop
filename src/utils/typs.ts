export type Home = {
  message: string;
  status: string;
};

export type InitialLoginValue = {
  email: string;
  password: string;
};

export type InitialCategoryValue = {
  _id?: string;
  name: string;
  image: string;
  is_active: boolean;
  is_visible: boolean;
};

export type AdminInfo = {
  _id: string;
  name: string;
  email: string;
  roles: string[];
};

export type Category = {
  _id: string;
  name: string;
  image: string;
  is_active: boolean;
  is_visible: boolean;
  createdAt: string;
};

export type Products = {
  _id: string;
  categoryId: string;
  discount_type: string;
  generic_name: string;
  is_available: boolean;
  discount_value: number;
  is_discountable: boolean;
  manufacturer_name: string;
  name: string;
  strength: string;
  price: number;
  gallery: Gallery[];
  isActive: boolean;
  taq: string[];
  createdAt: string;
};

export type Gallery = { original: string };

export type TableHead = { label: string; width: string };

export type SelectType = { value: any; label: string };

export type initialProductTypes = {
  categoryId: string | { value: string; label: string };
  discount_type: string | { value: string; label: string };
  generic_name: "";
  is_available: false;
  discount_value: "";
  is_discountable: false;
  manufacturer_name: "";
  name: "";
  strength: "";
  price: "";
  gallery: "";
  taq: string | { value: string; label: string };
};
