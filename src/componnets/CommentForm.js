import React, { useState } from "react";

const CommentForm = ({handleSubmit ,submitLable }) => {

    const [text ,setText] = useState("");
    const isTextareaDisabled = text.length === 0;

    const onFormSubmit =(e) =>{
        e.preventDefault();
        handleSubmit(text);
        setText("");//clear text area
    }

    return(
        <div>
            <form onSubmit={onFormSubmit}>
            <textarea
            placeholder="Add comment"
            className="comment-form-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button className="fas fa-comment" disabled={isTextareaDisabled}/>
            </form>
        </div>
    )
}

export default CommentForm