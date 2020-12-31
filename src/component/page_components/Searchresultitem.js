import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Data from '../data/data.json';

class Searchresultitem extends Component{
    render(){
        const {id, description, name, owner, price, pricebasis, imagesrc} = this.props.searchItem;
        return(
            <Link to={{
                pathname: '/propdetails:id',
                state: id,
            }}>
                <div id={"card-" + id} className="long-card">
                        <div className="card-img-cont">
                            <img src={require('../img/' + imagesrc)} className="card-img" />
                        </div>
                        <div className="card-info-cont">
                            <p className="card-name-title">{name}</p>
                            <p className="card-name-body">Price: <span className="card-body-lower">{price}{pricebasis}</span></p>
                            <p className="card-name-body">Owned By: <span className="card-body-lower">{owner}</span></p>
                            <p className="card-name-body">More about this property:</p>
                            <p>{description}</p>
                        </div>
                </div>
            </Link>
        )
    }
}

export default Searchresultitem;