import React, { Component } from 'react'
import NewsItem from './NewsItem'
import propTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 5,
    category: 'science'
  }

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1

    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf8b54a18fed4d82891a61e04949a065&pageSize=${this.props.pageSize}`;
    console.log(url);
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles})
  }

  handlePrevClick = async ()=> {
    console.log("Hello");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalresults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf8b54a18fed4d82891a61e04949a065&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page -1,
      articles: parseData .articles
    })
  }
  }

  handleNextClick = async ()=> { console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf8b54a18fed4d82891a61e04949a065&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    console.log(url);
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    })
  }
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
