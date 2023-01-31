import React, { FormEvent, useState } from "react";
import styles from "./EditingProfileForm.module.css";
import baseStyles from "../../index.module.css";

import IconAttach from "../../img/icon-attach.svg";
import axios from "axios";
import { variables } from "../../Variables";
import { Navigate } from "react-router";

type PhotoType = {
  idPhoto: number,
  url: string
}

interface EditingProfileFormProps {
  idUser: number,
  login: string,
  mail: string,
  password: string,
  photo: Array<PhotoType>,
  gender: number,
}

export function EditingProfileForm(props: EditingProfileFormProps) {

  const [isCreated, setIsCreated] = React.useState(false);

  const [user, setUser] = React.useState(null);  
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [urlIn, setUrl] = useState('');

  function setNewUrl(str: string){
    setUrl(str);
  }

  function editUser(){
    let newLogin = login;
    let newPassword = password;
    let newUrl = urlIn;
    let idPhoto = 0;
    if(props.photo.length != 0)
    {
      idPhoto = props.photo[0].idPhoto;
    }
    if(login == "")
    {
      newLogin = props.login
    }
    if(password == "")
    {
      newPassword = props.password
    }
    if(urlIn == "")
    {
      newUrl = props.photo[0].url
    }
    axios
      .put(variables.CREATE_USER, {
        idUser: props.idUser,
        login: newLogin,
        password: newPassword,
        userPhotos: [
            {
                idPhoto: props.photo[0].idPhoto,
                url: newUrl
            }
        ],
      })
      .then((response) => {
        setUser(response.data);
      });
    ;
  }

  const handelSubmit = (e:FormEvent) => {
    e.preventDefault();

    editUser();
    setIsCreated(true);
  }

  return (
    <>
    {isCreated ? (<Navigate to="/profile" />) : (
    <section className={baseStyles.container}>
      <h2 className={baseStyles.visuallyHidden}>Форма регистрации</h2>
      <form className={styles.registrationForm} action="#" method="post"  onSubmit = {handelSubmit}>
        <div className={baseStyles.formTextInputsWrapper}>
          <div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Электронная почта <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-email" type="email" name="email" 
                defaultValue={props.mail} placeholder={props.mail} disabled />
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Логин <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-login" type="text" name="login" 
                defaultValue={props.login} placeholder={props.login} onChange={(event) => setLogin(event.target.value)} />
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Пароль<span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-password" type="password" name="password" 
                placeholder="Придумайте пароль" defaultValue={props.password} onChange={(event) => setPassword(event.target.value)}/>
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Повтор пароля<span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-password-repeat" type="password"
                 name="password-repeat" placeholder="Повторите пароль"  defaultValue={props.password}/>
              </div>
            </div>
          </div>
        </div>
        <div className={`${ styles.registrationInputFileContainer } ${ baseStyles.formInputContainer }`}>
          <div className={styles.registrationInputFileWrapper}>
          <button className={`${ baseStyles.formInputFileButton } ${ baseStyles.button }`} type="button" 
            onClick={() => {
              const fileInputNode = document.createElement("input");
              fileInputNode.type = "file";
              fileInputNode.click();
              fileInputNode.addEventListener("change", () => {
              const file = fileInputNode.files?.[0] as File;
              const reader = new FileReader();
              
              reader.onloadend = function () {
              let src: string =  "https://via.placeholder.com/150";

              if (file.type.includes("image")) {
                src = String(reader.result);
              };
              setNewUrl(src);
              console.log(urlIn);
              };
              reader.readAsDataURL(file);
              })
              }}>
              <span>Выбрать фото</span>
              <IconAttach className={baseStyles.formAttachIcon}width="10" height="20" />
            </button>
          </div>
        </div>
        <button className={`${styles.registrationSubmit} ${baseStyles.button} ${baseStyles.buttonMain}`} type="submit">
          Сохранить
        </button>
        <a className={styles.addingPostClose} href="/profile">Закрыть</a>
      </form>
    </section>)}
    </>
  );
}