import React from "react";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';

export const ProfilePage = () => {
  return (
    <div className={ baseStyles.page}>
      <Header />
      <Footer />
    </div>
  );
}