import React from "react";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';

export const FeedPage = () => {
  return (
    <div className={ baseStyles.page}>
      <Header />
      <Post />
      <Footer />
    </div>
  );
}