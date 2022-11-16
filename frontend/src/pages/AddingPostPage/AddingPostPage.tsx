import React from "react";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { AddingPostForm } from '../../components/AddingPostForm/AddingPostForm';

export const AddingPostPage = () => {
  return (
    <div className={ baseStyles.page}>
      <Header />
      <AddingPostForm />
      <Footer />
    </div>
  );
}