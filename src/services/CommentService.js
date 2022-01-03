import axios from "axios";
import React from "react";
const Comments_URL = "http://localhost:8081/api/comments";
const Post_Comments_URL = "http://localhost:8081/api/postcomments";

class CommentService  extends React.Component{

    getComments(){
        return axios.get(Comments_URL);
    }

    postComments(comments){
        return axios.post(Post_Comments_URL,comments).then(resp =>{
            console.log(resp.data)
        })
    }

}

export default new CommentService();