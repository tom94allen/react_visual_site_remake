import React, { Component } from 'react';
import Featuredpropsitems from './Featurepropsitems';

class Featuredprops extends React.Component{
    render(){
        return this.props.featured.map((item) => (
                    <Featuredpropsitems key={item.id} featured={item}/>
                ))
        
        
        
    }
}

export default Featuredprops;