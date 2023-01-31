import React, { FormEvent, useState } from "react";
import styles from "./RegistrationForm.module.css";
import baseStyles from "../../index.module.css";

import IconAttach from "../../img/icon-attach.svg";
import axios from "axios";
import { variables } from "../../Variables";
import { Navigate } from "react-router";


export function RegistrationForm() {

  const [isCreated, setIsCreated] = React.useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [urlIn, setUrl] = useState('');
  const [gender, setGender] = useState(0);


  function setNewUrl(str: string){
    setUrl(str);
  } 

  function createUser(){
    axios
      .post(variables.CREATE_USER, {
        login: login,
        mail: mail,
        password: password,
        userPhotos: [
            {
              url: urlIn
            }
        ],
        gender: gender,
        numberOfSubscribers: 0,
        numberOfPosts: 0
    });
  }

  const handelSubmit = (e:FormEvent) => {
    e.preventDefault();

    createUser();
    setIsCreated(true);
  }


  return (
    <>
    {isCreated ? (<Navigate to="/login" />) : (
    <section className={baseStyles.container}>
      <h2 className={baseStyles.visuallyHidden}>Форма регистрации</h2>
      <form className={styles.registrationForm} action="#" method="post" onSubmit = {handelSubmit}>
        <div className={baseStyles.formTextInputsWrapper}>
          <div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Электронная почта <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-email" type="email" name="email" placeholder="Укажите эл.почту" 
                onChange={(event) => setMail(event.target.value)}/>
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Логин <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-login" type="text" name="login" placeholder="Укажите логин" 
                onChange={(event) => setLogin(event.target.value)}/>
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
              Ваш пол <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <div>
                  <input className={styles.registrationInputRadio} type="radio" id="alienChoice" name="contact" value="alien" onClick={() => setGender(0)}/>
                  <label htmlFor = "alienChoice" className={`${styles.registrationLableRadio}`}>Инопланетянин</label>

                  <input className={styles.registrationInputRadio} type="radio" id="mChoice" name="contact" value="men" onClick={() => setGender(1)}/>
                  <label htmlFor = "mChoice" className={`${styles.registrationLableRadio}`}>Сэр</label>

                  <input className={styles.registrationInputRadio} type="radio" id="wChoice" name="contact" value="women" onClick={() => setGender(2)}/>
                  <label htmlFor = "wChoice" className={`${styles.registrationLableRadio}`}>Мэм</label>
                </div>  
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Пароль<span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-password" type="password" name="password" 
                placeholder="Придумайте пароль" onChange={(event) => setPassword(event.target.value)}/>
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Повтор пароля<span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-password-repeat" type="password" name="password-repeat" placeholder="Повторите пароль" />
                <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!<span className={baseStyles.visuallyHidden}>Информация об ошибке</span></button>
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
          Отправить
        </button>
      </form>
    </section>)}
    </>
  );
}