import React from "react";
import styles from "./RegistrationForm.module.css";
import baseStyles from "../../index.module.css";

import IconAttach from "../../img/icon-attach.svg";

export function RegistrationForm() {
  return (
    <section className={baseStyles.container}>
      <h2 className={baseStyles.visuallyHidden}>Форма регистрации</h2>
      <form className={styles.registrationForm} action="#" method="post">
        <div className={baseStyles.formTextInputsWrapper}>
          <div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Электронная почта <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-email" type="email" name="email" placeholder="Укажите эл.почту" />
                <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!<span className={baseStyles.visuallyHidden}>Информация об ошибке</span></button>
                <div className={baseStyles.formErrorText}>
                  <h3 className={baseStyles.formErrorTitle}>
                    Заголовок сообщения
                  </h3>
                  <p className={baseStyles.formErrorDesc}>
                    Текст сообщения об ошибке, подробно объясняющий, что не так.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Логин <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-login" type="text" name="login" placeholder="Укажите логин" />
                <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!<span className={baseStyles.visuallyHidden}>Информация об ошибке</span></button>
                <div className={baseStyles.formErrorText}>
                  <h3 className={baseStyles.formErrorTitle}>
                    Заголовок сообщения
                  </h3>
                  <p className={baseStyles.formErrorDesc}>
                    Текст сообщения об ошибке, подробно объясняющий, что не так.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
              Ваш пол <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <div>
                  <input className={styles.registrationInputRadio} type="radio" id="alienChoice" name="contact" value="alien"/>
                  <label htmlFor = "alienChoice" className={`${styles.registrationLableRadio}`}>Инопланетянин</label>

                  <input className={styles.registrationInputRadio} type="radio" id="mChoice" name="contact" value="men"/>
                  <label htmlFor = "mChoice" className={`${styles.registrationLableRadio}`}>Сэр</label>

                  <input className={styles.registrationInputRadio} type="radio" id="wChoice" name="contact" value="women"/>
                  <label htmlFor = "wChoice" className={`${styles.registrationLableRadio}`}>Мэм</label>
                </div>  
                <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!<span className={baseStyles.visuallyHidden}>Информация об ошибке</span></button>
                <div className={baseStyles.formErrorText}>
                  <h3 className={baseStyles.formErrorTitle}>
                    Заголовок сообщения
                  </h3>
                  <p className={baseStyles.formErrorDesc}>
                    Текст сообщения об ошибке, подробно объясняющий, что не так.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Пароль<span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-password" type="password" name="password" placeholder="Придумайте пароль" />
                <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!<span className={baseStyles.visuallyHidden}>Информация об ошибке</span></button>
                <div className={baseStyles.formErrorText}>
                  <h3 className={baseStyles.formErrorTitle}>
                    Заголовок сообщения
                  </h3>
                  <p className={baseStyles.formErrorDesc}>
                    Текст сообщения об ошибке, подробно объясняющий, что не так.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${ styles.registrationInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.registrationLabel} ${baseStyles.formLabel}`}>
                Повтор пароля<span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.registrationInput} ${baseStyles.formInput}`} id="registration-password-repeat" type="password" name="password-repeat" placeholder="Повторите пароль" />
                <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!<span className={baseStyles.visuallyHidden}>Информация об ошибке</span></button>
                <div className={baseStyles.formErrorText}>
                  <h3 className={baseStyles.formErrorTitle}>
                    Заголовок сообщения
                  </h3>
                  <p className={baseStyles.formErrorDesc}>
                    Текст сообщения об ошибке, подробно объясняющий, что не так.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={baseStyles.formInvalidBlock}>
            <b className={baseStyles.formInvalidSlogan}>
              Пожалуйста, исправьте следующие ошибки:
            </b>
            <ul className={baseStyles.formInvalidList}>
              <li className={baseStyles.formInvalidItem}>
                Электронная почта. Это поле должно быть заполнено.
              </li>
              <li className={baseStyles.formInvalidItem}>
                Логин. Это поле должно быть заполнено.
              </li> 
              <li className={baseStyles.formInvalidItem}>
                Пароль. Это поле должно быть заполнено.
              </li> 
            </ul>
          </div>
        </div>
        <div className={`${ styles.registrationInputFileContainer } ${ baseStyles.formInputContainer }`}>
          <div className={styles.registrationInputFileWrapper}>
            <div className={`${ styles.registrationFileZone } ${ baseStyles.formFileZone }`}>
              <input className={baseStyles.formInputFile} id="userpic-file" type="file" name="userpic-file" title=" " />
              <div className={baseStyles.formFileZoneText}>
                <span>Перетащите фото сюда</span>
              </div>
            </div>
            <button className={`${ baseStyles.formInputFileButton } ${ baseStyles.button }`} type="button">
              <span>Выбрать фото</span>
              <IconAttach className={baseStyles.formAttachIcon}width="10" height="20" />
            </button>
          </div>
        </div>
        <button className={`${styles.registrationSubmit} ${baseStyles.button} ${baseStyles.buttonMain}`} type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
}