import React, { FormEvent, useState } from "react";
import styles from "./EditingProfileForm.module.css";
import baseStyles from "../../index.module.css";

import IconAttach from "../../img/icon-attach.svg";
import axios from "axios";
import { variables } from "../../Variables";
import { EditingProfileForm } from "./EditingProfileForm";

export function EditingProfileFormConstructor() {

  const [user, setUser] = useState(null);

  React.useEffect(() => {
    axios.get(variables.MY_USER_URL).then((response) => {
      setUser(response.data);
    });
  }, []);

  if (!user) return null;

  return (
    <EditingProfileForm login={user["login"]} password = {user["password"]} photo = {user["userPhotos"]} 
    gender = {user["gender"]} mail = {user["mail"]} idUser = {user["idUser"]}/>
  );
}