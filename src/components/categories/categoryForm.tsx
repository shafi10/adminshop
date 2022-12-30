import * as React from "react";
import { useFormik } from "formik";
import { categorySchema } from "../../utils/validation";
import { initialCategoryValue } from "../../utils/formvalues";
import Input from "../ui/form/input";
import Button from "../ui/form/button";
import "./css/categories.css";
import Checkbox from "../ui/form/checkbox";
import { useAddCategory } from "../../framework/categories/use-add-category";
import { useParams, useLocation } from "react-router-dom";
import SectionTitle from "../ui/title";
import { useEditCategory } from "../../framework/categories/use-edit-category";

export interface Props {
  title?: string;
}

const CategoryForm: React.FC<Props> = () => {
  const params = useParams();
  const location = useLocation();
  const id = params?.id;
  const categoryInfo = location?.state;
  const { mutate: addCategory, isLoading, isSuccess } = useAddCategory();
  const { mutate: editQuery } = useEditCategory();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialCategoryValue,
    validationSchema: categorySchema,
    onSubmit: (values) => {
      if (id) {
        editQuery(values);
      } else {
        addCategory(values);
      }
    },
  });

  React.useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
    }
  }, [isSuccess]);

  React.useEffect(() => {
    if (id) {
      formik.setValues({
        ...categoryInfo,
      });
    } else {
      formik.resetForm();
    }
  }, [id]);

  return (
    <>
      <SectionTitle title={params?.id ? "Edit Categories" : "Add Categories"} />
      <div className={"category_form_content"}>
        <form onSubmit={formik.handleSubmit} className="category_form">
          <Input
            label={"Category Name"}
            name={"name"}
            type={"text"}
            placeholder={"Enter Category Name"}
            value={formik?.values?.name}
            error={formik?.errors?.name}
            onChange={formik.handleChange}
            touched={formik?.touched?.name}
          />
          <Input
            label={"Icon Url"}
            name={"image"}
            type={"text"}
            placeholder={"Enter Icon Url"}
            value={formik?.values?.image}
            error={formik?.errors?.image}
            onChange={formik.handleChange}
            touched={formik?.touched?.image}
          />
          <Checkbox
            label={"Is Active"}
            name={"is_active"}
            value={formik?.values?.is_active}
            error={formik?.errors?.is_active}
            onChange={formik.handleChange}
          />
          <Checkbox
            label={"Is Visible"}
            name={"is_visible"}
            value={formik?.values?.is_visible}
            error={formik?.errors?.is_visible}
            onChange={formik.handleChange}
          />
          <div className={"category_btn_layout"}>
            <Button label={"Submit"} type="submit" isLoading={isLoading} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryForm;
