import React from 'react'
import './Post.css'

const Post = ({posts,loading}) => {
    if(loading){
        return <h2>loading...</h2>
    }

  return (
      <>
      
    <div>
        <h1>Posts</h1>
    </div>
    
    <div>
        {posts.map(
            (val)=>{return(
                <div key={val.id}>
                    <p>{val.id}. {val.title}</p>
                </div>
            )}
        )}
    </div>
    </>
  )
}

export default Post