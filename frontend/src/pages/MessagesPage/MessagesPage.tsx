import React from "react";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Dialog } from '../../components/Dialog/Dialog';
import { Chat } from '../../components/Chat/Chat';

export const MessagesPage = () => {
  return (
    <div className={ baseStyles.page}>
      <Header />
      <Dialog />
      <Chat />
      <Footer />
    </div>
  );
}