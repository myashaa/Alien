import React, {useState, useEffect, FormEvent} from "react";
import styles from "./AddingPostForm.module.css";
import baseStyles from "../../index.module.css";
import {variables} from  "../../Variables";
import axios from "axios";
//import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ChipInput from "../ChipInput/ChipInput";
import { TextField, Chip } from "@material-ui/core";
import { Autocomplete } from "@mui/material";

import IconAttach from "../../img/icon-attach.svg";
import { Navigate } from "react-router";

type PostType = {
  text: string,
  title: string,
  date: string,
  numbersOfLikes: number,
  numbersOfComments: number
}

type TagType =
{
  name: string,
}

export function AddingPostForm() {

  const [post, setPost] = React.useState(null);
  const [isCreated, setIsCreated] = React.useState(false);

  const [titleIn, setTitle] = useState('');
  const [textIn, setText] = useState('');
  const [urlIn, setUrl] = useState('');
  const [receivers, setReceivers] = React.useState<string[]>([]);

  let tag: Array<TagType> = [];

  const handelSubmit = (e:FormEvent) => {
    e.preventDefault();

    createPost();
    setIsCreated(true);
  }

  function createPost(){
    for(let i: number = 0; i < receivers.length; i++)
    {
      let str: string = receivers[i]; 
      let newTag: TagType = {name: str};
      tag.push(newTag);
    };
    console.log(tag);
    axios
      .post(variables.CREATE_POST_URL, {
        idUser: 4,
        text: textIn,
        date: new Date(),
        title: titleIn,
        numberOfLikes: 0,
        numberOfComments: 0,
        postPhotos: [{url: urlIn}],
        postTags: tag,
    });
  }

  function setNewUrl(str: string){
    setUrl(str);
  } 

  return (
    <>
    {isCreated ? (<Navigate to="/profile" />) : (
    <section className={baseStyles.container}>
      <h2 className={baseStyles.visuallyHidden}>Форма добавления поста</h2>
      <form className={styles.addingPostForm} onSubmit = {handelSubmit}>
        <div className={baseStyles.formTextInputsWrapper}>
          <div>
            <div className={`${ styles.addingPostInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.addingPostLabel} ${baseStyles.formLabel}`}>
                Заголовок <span className={baseStyles.formInputRequired}>*</span>
              </label>
              <div className={baseStyles.formInputSection}>
                <input className={`${styles.addingPostInput} ${baseStyles.formInput}`} id="heading" type="text" name="heading" placeholder="Введите заголовок" 
                onChange={(event) => setTitle(event.target.value)}/>
              </div>
            </div>
            <div className={`${ styles.addingPostInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.addingPostLabel} ${baseStyles.formLabel}`}>Теги</label>
              <div className={baseStyles.formInputSection}>
                <div className={`${styles.addingPostTagDiv} ${baseStyles.formInput}`}>
                <Autocomplete 
                  multiple
                  id="tags-filled"
                  options={[]}
                  defaultValue={[]}
                  freeSolo
                  onChange={(e, value: any[]) => setReceivers((state) => value)}
                  renderTags={(
                  value: any[],
                  getTagProps: (arg0: { index: any }) => JSX.IntrinsicAttributes
                  ) =>
                  value.map((option: any, index: any) => {
                    return (
                      <Chip
                      key={index}
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                      />
                    );
                  })
                  }
                  renderInput={(params: any) => (
                    <TextField className={`${styles.addingPostInput} ${baseStyles.formInput}`}
                    {...params}
                    placeholder="Введите слово и нажмите enter"
                    />
                  )}
                  />
                </div>
                {/* <input className={`${styles.addingPostInput} ${baseStyles.formInput}`} id="tags" type="text" name="heading" placeholder="Введите теги" /> */}
                
              </div>
            </div>
            <div className={`${ styles.addingPostInputWrapper } ${ baseStyles.formInputWrapper }`}>
              <label className={`${styles.addingPostLabel} ${baseStyles.formLabel}`}>Контент</label>
              <div className={baseStyles.formInputSection}>
                <textarea className={`${styles.addingPostTextarea} ${baseStyles.formInput}`} id="content" name="heading" placeholder="Придумайте контент" 
                onChange={(event) => setText(event.target.value)}/>
              </div>
            </div>
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
        <button className={`${styles.addingPostSubmit} ${baseStyles.button} ${baseStyles.buttonMain}`} type = "submit">
          Опубликовать
        </button>
        <a className={styles.addingPostClose} href="#">Закрыть</a>
      </form>
    </section>)}
    </>
  );
}