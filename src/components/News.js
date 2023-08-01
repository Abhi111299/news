import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1

    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7f234476b11c4e9daf27348b496445f0";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData .articles})
  }

  handlePrevClick = async ()=> {
    console.log("Hello");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7f234476b11c4e9daf27348b496445f0&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page -1,
      articles: parseData .articles
    })
  }

  handleNextClick = async ()=> { console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7f234476b11c4e9daf27348b496445f0&page=${this.state.page + 1}`;
    console.log(url);
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData .articles
    })
  }

  render() {
    return (
      <div className='container'>
        <h2>News - Top headlines</h2>
        
        <div className="row">
          {this.state.articles.map((element)=> {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
           <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type='button' className='btn btn-dark' onClick={this.handleNextClick}>&rarr; Next</button>
      </div>
        </div>
        
      </div>
    )
  }
}

export default News
