import React, { Component } from 'react'

const NewsItem = (props)=> {
    let {title, description, imageUrl, newsUrl} = props;
    return (
    <div className="container">
      <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://static.foxnews.com/foxnews.com/content/uploads/2023/06/Hunter-Biden-Laptop-Lawsuit-Deposition-1.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description }</p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>
     
      </div>
    )
}
 
export default NewsItem
