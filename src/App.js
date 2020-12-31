import React, { Component} from 'react';
import Header from './component/page_components/Header';
import Home from './component/pages/Home';
import Mainhero from './component/page_components/Mainhero';
import Searchbar from './component/page_components/Searchbar';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Searchresults from './component/pages/Searchresults';
import Propdetails from './component/pages/Propdetails';
import Propheader from './component/page_components/Propheader';
import Propsearchresults from './component/pages/Propsearchresults';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    // this.myRef = React.createRef()
    this.state = {
      data : '',
      featuredData: [],
      searchedCity: '',
      search: '',
      matchedProps: [],
      availCities: [],
      propDeetsSearchRes: [],
      render: false,
    }
  }
  componentDidMount = () => {
    let data = require('./component/data/data.json');
    this.setState( {data: data} );
    this.getFeaturedProps(data);
    this.availableCities(data);
  }
  componentDidUpdate = () => {
    let data = require('./component/data/data.json');
    this.executeScroll()
  }
  getFeaturedProps = (data) => {
    const properties = data.rows;
    const numCheckAry = [];
    const featuredProps = [];
    for(var i=0; i<properties.length; i++)
    {
      while(featuredProps.length < 4)
      {
        let index = Math.floor(Math.random() * 8);
        let numUsed = numCheckAry.includes(index);
        if(!numUsed)
        {
          numCheckAry.push(index);
          featuredProps.push(properties[index]);
        }else{
          while(numUsed)
          {
            index = Math.floor(Math.random() * 8);
            numUsed = numCheckAry.includes(index);
          }
          numCheckAry.push(index);
          featuredProps.push(properties[index]);
        }
      }
    }
    this.setState( {featuredData: featuredProps} );
  }
  availableCities = (i) => {
    const data = i.rows;
    const cityAry = [];
    let uniqueCityAry;

    for(var i = 0; i < data.length; i++)
    {
      cityAry.push(data[i].city)
    }
    uniqueCityAry = [... new Set(cityAry)];
    this.setState( {availCities: uniqueCityAry} )
  }
  getSearchResults = () => {
    const city = this.state.search;
    const matchItems = [];
    let data = require('./component/data/data.json');
    let dataAry = data.rows;
    for(var i=0; i<dataAry.length; i++)
    {
      if(dataAry[i].city === city)
      {
        matchItems.push(dataAry[i])
      }else{
        continue;
      }
    } 
    this.setState( {matchedProps : matchItems,
                    render: true} );
  }
  onChange = (e) => {
    this.setState( {search: e} );
  }
  executeScroll = () => {
    if(this.state.render === true)
    {
      this.myRef.current.scrollIntoView();
      this.setState( {render: false} )
    }
  }
  setDeetPropSearch = (e) => {
    const propDeetsSearch = e;
    const data = require('./component/data/data.json');
    const properties = data.rows;
    const searchResults = [];

    for(var i = 0; i < properties.length; i++)
    {
      if(properties[i].city === propDeetsSearch)
      {
        searchResults.push(properties[i]);
      }else{
        continue;
      }
    }
    this.setState( {propDeetsSearchRes: searchResults
                    } )  
  }
  checkPropDeetsSet = () => {
    let propDeetsSearch = this.state.propDeetsSearchRes.length;
    if(propDeetsSearch)
    {    
      this.setState( {render: true} )
      this.executeScroll()
    }
  }
  removeMatchProps = () => {
    this.setState( {matchedProps : []} )
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Route path="/" exact>
            <Header />
            <Mainhero />
            <Searchbar setSearch={this.onChange} searchedCity={this.getSearchResults}/>
            <Home featuredData={this.state.featuredData}/>
            {/* <div id="searchResults" className="container-fluid flex">
              <div ref={this.myRef}></div>
              <Searchresults propDeetsSearch={this.state.propDeetsSearchRes} matchSearch={this.state.matchedProps}/>
            </div> */}
          </Route>
          <Route path="/propdetails:id" exact>
            <div className="container-fluid">
              <Propheader getResults={this.getSearchResults} propDeetSearch={this.setDeetPropSearch} availCities={this.state.availCities}/>
              <Propdetails onMount={this.removeMatchProps}/>
            </div>
          </Route>
          <Route path="/propsearchresults:id" exact>
            <div className="container-fluid">
              <Searchresults propDeetsSearch={this.state.propDeetsSearchRes} matchSearch={this.state.matchedProps}/>
              <Propsearchresults />
            </div>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
