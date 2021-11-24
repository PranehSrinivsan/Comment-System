import React, { useEffect, useState } from "react";
import { 
    getComments as getCommentsApi, 
    createComment as createCommentApi,
    deleteComment as deleteCommentApi

} from "../api";
import Comment from "./Comment"
import CommentForm from "./CommentForm";

const Comments = (currentUserId) =>{
    const [backendComments,setBackendComments] = useState([])
    const rootComments = backendComments.filter(
        backendComments => backendComments.parentId === null
    );
    
    const addComment = (text,parentId) =>{
        createCommentApi(text ,parentId).then(comment => {
            setBackendComments([comment,...backendComments]);
        })
    }

    const deleteComment = (commentId) => {
        if(window.confirm('Are you sure that you want to delet the comment ')){
            deleteCommentApi(commentId).then(()=>{
                const updatedBackendComments = backendComments.filter(
                    (backendComments)=> backendComments.id !== commentId
                )
                setBackendComments(updatedBackendComments)
            })
        }
    }

    useEffect(()=>{
        getCommentsApi().then((data) => {
            setBackendComments(data);
        })
    },[])
    return(
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <div className="comments-container">{
                rootComments.map(rootComment=>(
                    <Comment 
                    key = {rootComment.id} 
                    comment = {rootComment} 
                    currentUserId = {currentUserId}
                    deleteComment = {deleteComment}
                    ></Comment>
                ))}
            </div>
        </div>
    )
}

export default Comments 