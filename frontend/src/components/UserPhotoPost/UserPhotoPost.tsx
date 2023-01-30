import React, { useState } from "react";
import styles from "./UserPhotoPost.module.css";
import baseStyles from "../../index.module.css";

interface UserPhotoPostProps {
  url: string,
}

export function UserPhotoPost(props: UserPhotoPostProps) {
  return (
    <div className={styles.postAvatarWrapper}>
      <img className={styles.postAuthorAvatar} src={props.url}
      alt="Аватар пользователя" />
    </div>
  );
}