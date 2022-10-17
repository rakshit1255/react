import React, { useEffect, useState } from "react";
import Post from "../../component/post/Post";
import Pagination from "../../component/post/Pagination";
import './PostPaginating.css'


const PostPaginating = () => {
  const [post, setPost] = useState([])
  const [loading, setloading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postParPage, setpostParPage] = useState(10)


  useEffect(()=>{
    setloading(true)
    const fatchApi = () => {
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(json => setPost(json.posts))
      // console.log(post)
    }
    fatchApi()
    setloading(false)
  },[])
  // console.log(post)

  const IndexOfLastPost = currentPage*postParPage;
  const IndexOfFirstPost = IndexOfLastPost-postParPage;
  const currentPost = post.slice(IndexOfFirstPost,IndexOfLastPost);
  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return(<>
    <div>
      <Post posts={currentPost} loading={loading}/>
      <Pagination postParPage={postParPage} totalPosts={post.length} paginate={paginate}/>
    </div>
  </>);
};

export default PostPaginating;
