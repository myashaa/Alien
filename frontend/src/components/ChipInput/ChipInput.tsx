import { TextField, Chip } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import baseStyles from "../../index.module.css";
import styles from "./ChipInput.module.css";



export default function ChipInput() {
  const [receivers, setReceivers] = React.useState<string[]>([]);
  console.log(typeof(receivers), receivers);
  //props.tagsString = receivers;
  return (
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
  );
}
