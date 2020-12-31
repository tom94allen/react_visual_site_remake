import React, { Component } from 'react';


class Searchbaritems extends Component{
    render(){
        const city = this.props.dropdown;
        return (
            <option value={city}>{city}</option> 
        )
    }
}

export default Searchbaritems;