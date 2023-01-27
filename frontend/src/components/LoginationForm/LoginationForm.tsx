import {FormEvent, useState} from "react";
import styles from "./LoginationForm.module.css";
import baseStyles from "../../index.module.css";

export function LoginationForm() {

  const [login, setLogin] = useState("");
  const [pasword, setPassword] = useState("");
 
  const handelSubmit = (e:FormEvent) => {
    e.preventDefault();
  }

  return (
    <section className={baseStyles.container}>
      <h2 className={baseStyles.visuallyHidden}>Форма авторизации</h2>
      <form className={styles.loginForm} onSubmit={handelSubmit}>
        <div className={`${ styles.loginInputWrapper } ${ baseStyles.formInputWrapper }`}>
          <label className={`${styles.loginLabel} ${baseStyles.formLabel}`}>
            Электронная почта
          </label>
          <div className={ baseStyles.formInputSection }>
            <input className={`${styles.loginInput} ${baseStyles.formInput}`} id="login-email" type="email" name="email" placeholder="Укажите эл.почту"
             />
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
        <div className={`${ styles.loginInputWrapper } ${ baseStyles.formInputWrapper }`}>
          <label className={`${styles.loginLabel} ${baseStyles.formLabel}`}>
            Пароль
          </label>
          <div className={ baseStyles.formInputSection }>
            <input className={`${styles.loginInput} ${baseStyles.formInput}`} id="login-password" type="password" name="password" placeholder="Введите пароль" />
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
        <button className={`${styles.loginSubmit} ${baseStyles.button} ${baseStyles.buttonMain}`} type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
}