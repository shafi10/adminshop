import {
  InitialLoginValue,
  InitialCategoryValue,
  Products,
  initialProductTypes,
} from "./typs";

export const initialLoginValue: InitialLoginValue = {
  email: "",
  password: "",
};

export const initialCategoryValue: InitialCategoryValue = {
  name: "",
  image: "",
  is_active: false,
  is_visible: false,
};

export const initialProductValue: initialProductTypes = {
  categoryId: "",
  discount_type: "",
  generic_name: "",
  is_available: false,
  discount_value: "",
  is_discountable: false,
  manufacturer_name: "",
  name: "",
  strength: "",
  price: "",
  gallery: "",
  taq: "",
};
