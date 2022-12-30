import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Password is required"),
});

export const categorySchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  image: Yup.string(),
  is_visible: Yup.boolean(),
  is_active: Yup.boolean(),
});

export const productSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  categoryId: Yup.object().shape({
    value: Yup.string().required("Category is required"),
    label: Yup.string().required("Category is required"),
  }),
  taq: Yup.object().shape({
    value: Yup.string().required("Taq is required"),
    label: Yup.string().required("Taq is required"),
  }),
  generic_name: Yup.string().required("Generic Name is required"),
  manufacturer_name: Yup.string().required("Manufacturer Name is required"),
  gallery: Yup.string().required("Image Url is required"),
  price: Yup.number().required("Price is required"),
  discount_type: Yup.object().when("is_discountable", {
    is: true,
    then: Yup.object().shape({
      value: Yup.string().required("Discount type is required"),
      label: Yup.string().required("Discount type is required"),
    }),
  }),
  discount_value: Yup.number().when("is_discountable", {
    is: true,
    then: Yup.number().required("Discount value is required"),
  }),
});
