import React, {useState, useEffect} from "react";
import styles from "./AnotherProfilePage.module.css";
import baseStyles from "../../index.module.css";
import { NavLink, useParams} from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Profile } from '../../components/Profile/Profile';
import { Post } from '../../components/Post/Post';
import {variables} from  "../../Variables";
import axios from "axios";
import {AnotherProfileConstructor} from "../../components/AnotherProfile/AnotherProfileConstructor";


export const AnotherProfilePage: React.FC = (): JSX.Element => {
  const params = useParams();
  const id = 2;
  let idAnotherUser = String(id);
  console.log(typeof(params.profileId));

  const [users, setusers] = useState([]);
  

    useEffect(() => {
      axios.get(variables.USER_URL).then((response) => {
        setusers((data) => {
          return response.data;
        });
      });
    }, []);

  return (
    <div className={`${baseStyles.page} ${styles.pageAnalitic}`}>
      <Header />
      <AnotherProfileConstructor idUser = {params.profileId}/>

      <div className={styles.mainWrapper}>
          <div className={baseStyles.container}>
            <div className={styles.feedFiltersWrapper}>
              <div className={styles.feedSorting}>
              </div>
            </div>
          </div>
        </div>
          <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
            {/*<Post />*/}
          </div> 

      <Footer />
    </div>
  );
}