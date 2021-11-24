import React, { useState } from "react";
import Comments from './Comments';
const Post = () =>{
    var i=0;
    const [loadcomment,setLoadcomment]=useState(i)

    const loadComment =() => setLoadcomment(++i)
    // pre increment loads on singel tap and post increment loads on double tap
    
    return(
        <div className="Post">
            <img src="/jarvis.jfif"></img>
            <div>
                <button onClick={loadComment} className="fas fa-list"></button>         
                <div>
                {(loadcomment === 1) && (<Comments currentUserId="5"/>)}
                </div>
            </div>
        </div>
    )
}

export default Post