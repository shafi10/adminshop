import * as React from "react";
import { Formik, Form } from "formik";
import { loginSchema } from "../../../utils/validation";
import { initialLoginValue } from "../../../utils/formvalues";
import Input from "../../ui/form/input";
import Button from "../../ui/form/button";
import Styles from "./login.module.css";
import { useLoginMutation } from "../../../framework/auth/use-login";

const LoginForm: React.FC = () => {
  const { mutate: login, isLoading } = useLoginMutation();
  return (
    <div className={Styles.container}>
      <div className={Styles?.loginForm}>
        <div className={Styles?.loginTitle}>Please Login</div>
        <div className={Styles?.loginbox}>
          <Formik
            initialValues={initialLoginValue}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              // same shape as initial values
              login(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Input
                  label={"Enter Email"}
                  name={"email"}
                  type={"text"}
                  placeholder={"Enter Your Email"}
                  error={errors.email}
                  touched={touched?.email}
                />
                <Input
                  label={"Enter Password"}
                  name={"password"}
                  type={"password"}
                  placeholder={"Enter Your Password"}
                  error={errors.password}
                  touched={touched?.password}
                />
                <div className={Styles.buttonPosition}>
                  <Button label={"Submit"} isLoading={isLoading} />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
