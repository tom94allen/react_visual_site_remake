import React, {Component} from 'react';
import Propdetails from '../pages/Propdetails';
import Propheadercityitem from './Propheadercityitem';
import Data from '../data/data.json';
import {Link} from'react-router-dom'; 

class Propheader extends Component{
    constructor(props){
        super(props);
        this.state = {
            propDeetSearch: '',
            propDeetSearchRes: [],
        }
    }
    setSearch = (e) => {
        this.setState( {propDeetSearch: e.target.value} )
        const data = Data.rows;
        const city = e.target.value;
        const searchRes = [];
        for(var i = 0; i < data.length; i++)
        {
            if(data[i].city === city)
            {
                searchRes.push(data[i]);
            }else{
                continue;
            }
        }
        this.setState( {propDeetSearchRes: searchRes} );
        this.props.propDeetSearch(e.target.value);
    }
    render(){
        return(
            <div className="header-prop-details">
                <div className="logo">
                    <h1>Cloud Bed + Breakfast</h1>
                </div>
                <form id="header-search-form">
                    <select onChange={this.setSearch} id="header-search-select" className="dropdown-field">
                        <option value="" placeholder="Destination">Destination</option>
                        {this.props.availCities.map((item) => (
                            <Propheadercityitem key={item} city={item}/>
                        ))}
                    </select>
                    <Link to={{
                        pathname:"/propsearchresults:id",
                        state: this.state.propDeetSearchRes,
                    }}>
                        <button id="prop-search-btn" type="submit">Search</button>
                    </Link>
                </form>
                <nav className="subNavBar">
                        <ul className="subNav">
                            <Link to={{
                                pathname:"/",
                            }}>
                                <li>Home</li>
                            </Link>
                            <li>Become a Host</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ul>
                </nav>
            </div>
        )   
    }
}

export default Propheader;