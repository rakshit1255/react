import React from 'react'
import './Post.css'

const Pagination = ({postParPage,totalPosts,paginate}) => {
    const pageNumber =[];

    for(let i=1; i <= Math.ceil(totalPosts/postParPage);i++){
        pageNumber.push(i)
    }


  return (
    <div className='paginate'>
        
        {pageNumber.map(
            number=>(
                <div className='pagesBlock' key={number}>
                    <p className='pageNo' onClick={()=>{paginate(number)}}>{number}</p>
                </div>
            )
        )}
    </div>
  )
}

export default Pagination