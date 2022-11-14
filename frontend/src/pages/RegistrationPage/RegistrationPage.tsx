import React from "react";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

export const RegistrationPage = () => {
  return (
    <div className={ baseStyles.page}>
      <Header />
      <RegistrationForm />
      <Footer />
    </div>
  );
}