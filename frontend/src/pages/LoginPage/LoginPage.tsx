import React from "react";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { LoginationForm } from '../../components/LoginationForm/LoginationForm';

export const LoginPage = () => {
  return (
    <div className={ baseStyles.page}>
      <Header />
      <LoginationForm />
      <Footer />
    </div>
  );
}