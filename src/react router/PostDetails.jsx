import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PostDetails = () => {
    const [postDetails, setPostsDetails] = useState();

    const {id} = useParams();

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => setPostsDetails(response.data))
        .catch(error => console.log(error));
        
    }, []);
    return(
       <div>
        <h5>{postDetails?.title}</h5>
        <h6>{postDetails?.author}</h6>
        <p>{postDetails?.category}</p>
        <p>{postDetails?.price}</p>
       </div>
    ); 
};