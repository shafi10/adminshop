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
