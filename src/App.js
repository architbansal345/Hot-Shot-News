import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 10;
  apikey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element  = {<News key = 'general' pageSize={this.pageSize} apikey = {this.apikey} country='us' category='General'/>}/>
          <Route exact path='/sports' element  = {<News key = 'sports' pageSize={this.pageSize} apikey = {this.apikey} country='us' category='Sports'/>}/>
          <Route exact path='/health' element  = {<News key = 'health' pageSize={this.pageSize} apikey = {this.apikey} country='us' category='Health'/>}/>
          <Route exact path='/entertainment' element  = {<News key = 'entertainment' pageSize={this.pageSize} apikey = {this.apikey} country='us' category='Entertainment'/>}/>
          <Route exact path='/technology' element  = {<News key = 'technology' pageSize={this.pageSize} apikey = {this.apikey} country='us' category='Technology'/>}/>
          <Route exact path='/science' element  = {<News key='science' pageSize={this.pageSize} apikey = {this.apikey} country='us' category='Science'/>}/>
          <Route exact path='/business' element  = {<News key='business' pageSize={this.pageSize} apikey = {this.apikey} country='us' category='Business'/>}/>
          <Route exact path='/about' element  = {<About/>}/>
        </Routes>
      </div>
      </Router>
    )
  }
}

