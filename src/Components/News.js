import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:8,
        category:'General',
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title = `${this.props.category} - HotShot News-Free!`;
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let  data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles:parseddata.articles,
            totalResults : parseddata.totalResults,
            loading:false
        })
    }
    handleNextClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let  data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            page: this.state.page+1,
            articles:parseddata.articles,
            loading:false
            
        })
}
    handlePrevClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let  data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            page: this.state.page-1,
            articles:parseddata.articles,
            loading:false,
        })
    }
  render() {
    return (
    <div className='container my-3'>
        <h2 className='text-center' style={{margin: '35px' , marginTop : '90px'}}>Top {this.props.category} Headlines!</h2>
        {this.state.loading && <Spinner/>}  
        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-3' key={element.url}>
                <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage} newsUrl = {element.url} Author = {element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            })}
        </div>
        <div className='container  className= d-flex justify-content-between' >
            <button disabled ={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr;Previous</button>
            <button disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News