import React, { Component } from 'react';
import Searchbaritems from './Searchbaritems';
import search from '../img/search.png';
import {Link} from 'react-router-dom';

class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            citys: [],
            search: '',
        }
    }
    componentDidMount = () => {
        const data = require('../data/data.json');
        const citys = data.rows;
        const cityAry = [];
        let uniqueCityAry;
        for(var i=0; i < citys.length; i++)
        {
            cityAry.push(citys[i].city);
        }
        uniqueCityAry = [... new Set(cityAry)];
        this.setState( {citys: uniqueCityAry} );
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchedCity(this.state.search);
        this.setState( {search: ''} );
    }
    handleChange = (e) => {
        this.props.setSearch(e.target.value);
    }
    render(){
        const search = this.state.search;
        return(
           
                <div className="searchBarCont">
                    <div className="searchBarCont-flex">
                        <form onSubmit={this.onSubmit} id="search_props">
                            <select id="first-form" className="dropdown-field" onChange={this.handleChange}>
                                <option value="">Please Select</option>
                                {this.state.citys.map((item) => (
                                    <Searchbaritems key={item} dropdown={item}/>
                                ))}
                            </select>
                            <input type="date" name="checkin" id="checkin" placeholder="Check in date" className="inputField"/>
                            <input type="date" name="checkout" id="checkout" placeholder="Check out date" className="inputField"/>
                            <input type="number" name="guests" id="guests" placeholder="Number of guests" className="inputField"/>
                            <Link to={{
                                pathname: "/propsearchresults:id",
                                state: this.props.matchSearch,
                            }}>
                                <button id="last-form" type="submit">Search</button>
                            </Link>
                        </form>
                    </div>
                </div>
          
        )
    }
}

export default Searchbar;