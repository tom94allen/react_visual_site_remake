import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Featurepropsitems extends Component{
    render(){
        const{imagesrc, id, address, ccy, name, price, pricebasis, owner} = this.props.featured;
        return(
            <Link to={{
                pathname:'/propdetails:id',
                state: id,
            }}>
                <div className="card">
                    <div className="prop-img">
                        <img alt={name} src={require('../img/' + imagesrc)} />
                    </div>
                    <div className="card-body">
                        <p>{name}</p>
                        <p>{ccy + ' ' + price + '' + pricebasis}</p>
                        <p>{"Owner: " + owner}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Featurepropsitems;