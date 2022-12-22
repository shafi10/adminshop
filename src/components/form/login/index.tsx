import * as React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../../utils/validation";
import { initialLoginValue } from "../../../utils/formvalues";
import Input from "../../ui/form/input";
import Button from "../../ui/form/button";
import Styles from "./login.module.css";
import { useLoginMutation } from "../../../framework/auth/use-login";

const LoginForm: React.FC = () => {
  const { mutate: login, isLoading } = useLoginMutation();
  const formik = useFormik({
    initialValues: initialLoginValue,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      login(values);
    },
  });
  return (
    <div className={Styles.container}>
      <div className={Styles?.loginForm}>
        <div className={Styles?.loginTitle}>Please Login</div>
        <div className={Styles?.loginbox}>
          <form onSubmit={formik.handleSubmit}>
            <Input
              label={"Enter Email"}
              name={"email"}
              type={"text"}
              placeholder={"Enter Your Email"}
              value={formik?.values?.email}
              error={formik?.errors?.email}
              onChange={formik.handleChange}
            />
            <Input
              label={"Enter Password"}
              name={"password"}
              type={"password"}
              placeholder={"Enter Your Password"}
              value={formik?.values?.password}
              error={formik?.errors?.password}
              onChange={formik.handleChange}
            />
            <div className={Styles.buttonPosition}>
              <Button label={"Submit"} isLoading={isLoading} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
