import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { variables } from "../../Variables";

import { PostPageConstructor } from "./PostPageConstructor";

export const PostPage : React.FC = (): JSX.Element => {
  const params = useParams();

  const [post, setPost] = useState(null);
  
    useEffect(() => {
      axios.get(variables.CURRENT_POST + params.postId).then((response) => {
        setPost((data) => {
          return response.data;
        });
      });
    }, []);
  if(post == null)
  {
    return (<></>);
  }
  return (
    <PostPageConstructor post={post}/>
    );
}