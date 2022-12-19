import React from "react";
import { CustomInput, OptionsInterface, SelectDropdown } from "../inputs";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { accountTypeOptions } from "./data";
import { Button } from "../buttons";
import { globalStyles } from "../constants";
import { themes } from "../../themes";

const initialValues = {
  accountType: "",
  email: "",
  password: "",
};

const loginValidationSchema = Yup.object().shape({
  accountType: Yup.string().required("please select your account type"),

  email: Yup.string()
    .required("email is required")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please enter a valid email"
    ),

  password: Yup.string().required("password is required"),
});

export const LoginForm = () => {
  return (
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <HeaderText>Log into your account</HeaderText>
      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ errors, values, handleChange, handleSubmit, touched }) => (
          <>
            <SelectDropdown
              label="Account Type"
              options={accountTypeOptions}
              placeholderText="Select account type"
              error={touched.accountType ? errors.accountType : undefined}
              handleChange={handleChange("accountType")}
            />
            <CustomInput
              value={values.email}
              handleChange={handleChange("email")}
              label="Email"
              placeholderText="Enter your registered email"
              type="email"
              error={touched.email ? errors.email : undefined}
            />
            <CustomInput
              value={values.password}
              handleChange={handleChange("password")}
              label="Password"
              placeholderText="Enter your password"
              secured={true}
              error={touched.password ? errors.password : undefined}
            />
            <PasswordResetBox>
              <PasswordResetHint>Forgot your password?</PasswordResetHint>
              <ResetPassordLink>Reset it here</ResetPassordLink>
            </PasswordResetBox>
            <Button
              title="Log in"
              bgColor={globalStyles.colors.gray1}
              titleColor="#F2F2F2"
              width="90%"
              height="48px"
              onClickHandler={handleSubmit}
              type="submit"
            />
            <CustomerServiceBox>
              <CustomerServiceHint>
                Having problems logging in?
              </CustomerServiceHint>
              <CustomerServiceLink>Chat with us</CustomerServiceLink>
            </CustomerServiceBox>
          </>
        )}
      </Formik>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  max-width: 75vw;
  width: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const HeaderText = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 38.73px;
  margin-bottom: 48px;

  @media ${themes.breakpoints.md} {
    & {
      font-size: 28px;
    }
  }

  @media ${themes.breakpoints.sm} {
    & {
      font-size: 20px;
      text-align: center;
    }
  }
`;

const PasswordResetBox = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 56px;
  display: flex;
  align-items: center;
  justify-content: end;
  transition: font-size 0.3s ease-in-out;

  @media ${themes.breakpoints.sm} {
    & {
      width: 100%;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 30px;
    }

    & > p {
      font-size: 80%;
    }
  }
`;

const PasswordResetHint = styled.p`
  opacity: 0.3;
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
`;

const ResetPassordLink = styled.p`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
`;
const CustomerServiceBox = styled(PasswordResetBox)`
  margin-top: 24px;
  justify-content: center;
  transition: font-size 0.3s ease-in-out;

  @media ${themes.breakpoints.sm} {
    & {
      flex-direction: column;
    }
    & > p {
      font-size: 80%;
    }
  }
`;
const CustomerServiceHint = styled(PasswordResetHint)``;
const CustomerServiceLink = styled(ResetPassordLink)``;

