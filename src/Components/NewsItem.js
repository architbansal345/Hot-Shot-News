import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,Author,date,source } = this.props;
    return (
      <div className='my-3'>
          <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%',zIndex:'1'}}>{source}
  </span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor:'rgb(147 143 84 / 45%)'}}>
                <h5 className="card-title" style={{backgroundColor:'#bbb594'}}>{title}...</h5>
                <p className="card-text">{description}...</p>
                <div className="card-footer text-muted">By {Author?Author:'unknown'} on {new Date(date).toGMTString()}</div>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem