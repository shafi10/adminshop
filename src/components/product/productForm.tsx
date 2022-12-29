import * as React from "react";
import { useFormik } from "formik";
import { categorySchema } from "../../utils/validation";
import { initialProductValue } from "../../utils/formvalues";
import Input from "../ui/form/input";
import Button from "../ui/form/button";
import "./css/categories.css";
import Checkbox from "../ui/form/checkbox";
import { useParams, useLocation } from "react-router-dom";
import SectionTitle from "../ui/title";
import CustomSelect from "../ui/form/select";
import { SelectType } from "../../utils/typs";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useGetCategoriesQuery } from "../../framework/categories/get-categories";
import { useAddProduct } from "../../framework/products/use-add-product";

export interface Props {
  title?: string;
}

const ProductForm: React.FC<Props> = () => {
  const params = useParams();
  const location = useLocation();
  const id = params?.id;
  const categoryInfo = location?.state;
  useGetCategoriesQuery();
  const { categories } = useSelector((state: RootState) => state.dataSlice);
  const { mutate: addProduct, isLoading, isSuccess } = useAddProduct();
  // const { mutate: editQuery } = useEditCategory();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialProductValue,
    validationSchema: categorySchema,
    onSubmit: (values: any) => {
      if (id) {
        // editQuery(values);
      } else {
        const obj = {
          ...values,
          categoryId: values?.categoryId?.value,
          discount_type: values?.discount_type?.value,
          gallery: [{ original: values?.gallery }],
          taq: values?.taq?.map((data: SelectType) => data.value),
        };
        addProduct(obj);
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

  const selectCategories = categories.map((cInfo) => {
    return {
      label: cInfo.name,
      value: cInfo._id,
    };
  });

  return (
    <>
      <SectionTitle title={params?.id ? "Edit Products" : "Add Products"} />
      <div className={"category_form_content"}>
        <form onSubmit={formik.handleSubmit} className="category_form">
          <Input
            label={"Product Name"}
            name={"name"}
            type={"text"}
            placeholder={"Enter Product Name"}
            value={formik?.values?.name}
            error={formik?.errors?.name}
            onChange={formik.handleChange}
          />
          <CustomSelect
            label={"Enter Product Category"}
            name={"categoryId"}
            selectedOption={formik?.values?.categoryId}
            error={formik?.errors?.categoryId}
            handleChange={(selectedOption: SelectType) => {
              formik.setFieldValue("categoryId", selectedOption);
            }}
            options={selectCategories}
            placeholder={"Enter Product Category"}
          />
          <CustomSelect
            label={"Enter Product Taq"}
            name={"taq"}
            selectedOption={formik?.values?.taq}
            error={formik?.errors?.taq}
            handleChange={(selectedOption: SelectType) => {
              formik.setFieldValue("taq", selectedOption);
            }}
            isMulti={true}
            options={selectCategories}
            placeholder={"Enter Product Taq"}
          />
          <Input
            label={"Enter Manufacturer Name"}
            name={"manufacturer_name"}
            type={"text"}
            placeholder={"Manufacturer Name"}
            value={formik?.values?.manufacturer_name}
            error={formik?.errors?.manufacturer_name}
            onChange={formik.handleChange}
          />
          <Input
            label={"Enter Generic Name"}
            name={"generic_name"}
            type={"text"}
            placeholder={"Generic Name"}
            value={formik?.values?.generic_name}
            error={formik?.errors?.generic_name}
            onChange={formik.handleChange}
          />
          <Input
            label={"Enter Product Image Url"}
            name={"gallery"}
            type={"text"}
            placeholder={"Enter Product Image Url"}
            value={formik?.values?.gallery}
            error={formik?.errors?.gallery}
            onChange={formik.handleChange}
          />
          <Input
            label={"Enter Price"}
            name={"price"}
            type={"number"}
            placeholder={"Enter Price"}
            value={formik?.values?.price}
            error={formik?.errors?.price}
            onChange={formik.handleChange}
          />
          <Checkbox
            label={"Is Available"}
            name={"is_available"}
            value={formik?.values?.is_available}
            error={formik?.errors?.is_available}
            onChange={formik.handleChange}
          />
          <Checkbox
            label={"Is Discountable"}
            name={"is_discountable"}
            value={formik?.values?.is_discountable}
            error={formik?.errors?.is_discountable}
            onChange={formik.handleChange}
          />
          <CustomSelect
            label={"Enter Discount Type"}
            name={"discount_type"}
            selectedOption={formik?.values?.discount_type}
            error={formik?.errors?.discount_type}
            handleChange={(selectedOption: SelectType) => {
              formik.setFieldValue("discount_type", selectedOption);
            }}
            options={[
              { value: "Percentage", label: "Percentage" },
              { value: "Amount", label: "Amount" },
            ]}
            placeholder={"Enter Discount Type"}
          />
          <Input
            label={"Enter Discount Value"}
            name={"discount_value"}
            type={"number"}
            placeholder={"Enter Discount Value"}
            value={formik?.values?.discount_value}
            error={formik?.errors?.discount_value}
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

export default ProductForm;
