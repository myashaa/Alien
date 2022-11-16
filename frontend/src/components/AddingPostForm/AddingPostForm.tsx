import React from "react";
import styles from "./AddingPostForm.module.css";
import baseStyles from "../../index.module.css";

import IconAttach from "../../img/icon-attach.svg";

export function AddingPostForm() {
  return (
    <section className={baseStyles.container}>
      <h2 className={baseStyles.visuallyHidden}>Форма добавления поста</h2>
      <form className={styles.addingPostForm} action="#" method="post">
        <div className={baseStyles.formTextInputsWrapper}>
          <div>
            <div className={`${ styles.addingPostInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.addingPostLabel} ${baseStyles.formLabel}`}>
                Заголовок <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.addingPostInput} ${baseStyles.formInput}`} id="heading" type="text" name="heading" placeholder="Введите заголовок" />
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
            <div className={`${ styles.addingPostInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.addingPostLabel} ${baseStyles.formLabel}`}>Теги</label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.addingPostInput} ${baseStyles.formInput}`} id="tags" type="text" name="heading" placeholder="Введите теги" />
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
            <div className={`${ styles.addingPostInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.addingPostLabel} ${baseStyles.formLabel}`}>Контент</label>
              <div className={baseStyles.formInputSection}>
                <textarea className={`${styles.addingPostTextarea} ${baseStyles.formInput}`} id="content" name="heading" placeholder="Придумайте контент" />
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
                Заголовок. Это поле должно быть заполнено.
              </li>
              {/* <li className={baseStyles.formInvalidItem}>
                Цитата. Она не должна превышать 70 знаков.
              </li> */}
            </ul>
          </div>
        </div>
        <div className={`${ styles.addingPostInputFileContainer } ${ baseStyles.formInputContainer }`}>
          <div className={styles.addingPostInputFileWrapper}>
            <div className={`${ styles.addingPostFileZone } ${ baseStyles.formFileZone }`}>
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
        <button className={`${styles.addingPostSubmit} ${baseStyles.button} ${baseStyles.buttonMain}`} type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
}