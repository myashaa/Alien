import React from "react";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Message } from '../../components/Message/Message';
import { Dialog } from '../../components/Dialog/Dialog';

export const MessagesPage = () => {
  return (
    <div className={ baseStyles.page}>
      <Header />
      <Message />
      <Dialog />
      <Footer />
    </div>
  );
}