import React, {useState, useEffect} from "react";
import styles from "./AddingPostForm.module.css";
import baseStyles from "../../index.module.css";
import {variables} from  "../../Variables";
import axios from "axios";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import IconAttach from "../../img/icon-attach.svg";

type PostType = {
  text: string,
  title: string,
  date: string,
  numbersOfLikes: number,
  numbersOfComments: number
}

export function AddingPostForm() {

  const [post, setPost] = React.useState(null);

  const [titleIn, setTitle] = useState('');
  const [textIn, setText] = useState('');
  const [urlIn, setUrl] = useState('');

  React.useEffect(() => {
    axios.get(variables.POST_URL).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost(){
    axios
      .post(variables.POST_URL, {
        text:"I do it! Force in me!",
        date:"2004-05-23T14:25:10",
        title:"Dart Vader",
        numberOfLikes:0,
        numberOfComments:0,
        postPhotos:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Star_Wars_-_Darth_Vader.jpg/640px-Star_Wars_-_Darth_Vader.jpg"}]})
      .then((response) => {
        setPost(response.data);
      });
  }

  function setNewUrl(str: string){
    setUrl(str);
  } 

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <section className={baseStyles.container}>
      <h2 className={baseStyles.visuallyHidden}>Форма добавления поста</h2>
      <form className={styles.addingPostForm}>
        <div className={baseStyles.formTextInputsWrapper}>
          <div>
            <div className={`${ styles.addingPostInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.addingPostLabel} ${baseStyles.formLabel}`}>
                Заголовок <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.addingPostInput} ${baseStyles.formInput}`} id="heading" type="text" name="heading" placeholder="Введите заголовок" 
                onChange={(event) => setTitle(event.target.value)}/>
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
                <div className={`${styles.addingPostTagDiv} ${baseStyles.formInput}`}>
                  <Chip
                    label="Clickable Deletable"
                    onClick={handleClick}
                    onDelete={handleDelete}
                  />
                  <Chip
                    label="Clickable Deletable"
                    variant="outlined"
                    onClick={handleClick}
                    onDelete={handleDelete}
                  />
                </div>
                {/* <input className={`${styles.addingPostInput} ${baseStyles.formInput}`} id="tags" type="text" name="heading" placeholder="Введите теги" /> */}
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
                <textarea className={`${styles.addingPostTextarea} ${baseStyles.formInput}`} id="content" name="heading" placeholder="Придумайте контент" 
                onChange={(event) => setText(event.target.value)}/>
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
            </ul>
          </div>
        </div>
        <div className={`${ styles.addingPostInputFileContainer } ${ baseStyles.formInputContainer }`}>
          <div className={styles.addingPostInputFileWrapper}>
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
        <button className={`${styles.addingPostSubmit} ${baseStyles.button} ${baseStyles.buttonMain}`}
        onClick={() => createPost()}>
          Опубликовать
        </button>
        <a className={styles.addingPostClose} href="#">Закрыть</a>
      </form>
    </section>
  );
}