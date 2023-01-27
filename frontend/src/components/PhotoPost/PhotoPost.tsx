import React from "react";
import styles from "./PhotoPost.module.css";
import baseStyles from "../../index.module.css";

interface PhotoPostProps {
  url: string,
}

export function PhotoPost(props: PhotoPostProps) {
  return (
        <div className={styles.postPhotoImageWrapper}>
          <img src={props.url} alt="Фото от пользователя" width="360" height="240" />
        </div> 
  );
}