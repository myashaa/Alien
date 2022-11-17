import React from "react";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Profile } from '../../components/Profile/Profile';

export const ProfilePage = () => {
  return (
    <div className={ baseStyles.page}>
      <Header />
      <Profile/>
      <Footer />
    </div>
  );
}