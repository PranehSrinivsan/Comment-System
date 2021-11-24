import React, { useState } from 'react';

const Comment = ({comment,currentUserId,editComment ,deleteComment}) =>{
    const isAdmin = currentUserId.currentUserId === comment.userId
    const [isliked , setisLiked] = useState(false)
    const [isdisliked , setisDisiked] = useState(false)
    const handelLike = () =>{
        comment.likecount++
        setisLiked(true)
        setisDisiked(true)
    }

    const handelDisike = () => {
        comment.dislikecount++
        setisDisiked(true)
        setisLiked(true)
    }


    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="/user-icon.jpg"/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div className="created-at">{comment.createdAt}</div>
                </div>
                <div className="comment-text"> {comment.body} </div>
                <div className="comment-actions">
                    <div className="Likecount">{comment.likecount}</div>
                        <div className="comment-action">
                            <button className="fas fa-thumbs-up" onClick={handelLike} disabled={isliked}/>
                        </div>
                    <div className="Dislikecount">{comment.dislikecount}</div>
                        <div className="comment-action">
                            <button className="fas fa-thumbs-down" onClick={handelDisike} disabled={isdisliked}/>
                        </div>
                        <div className="comment-action">
                            {isAdmin && (<button className="fas fa-trash" onClick={() => deleteComment(comment.id)}/>)}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Comment