import React, { Component} from 'react';
import { createBrowserHistory } from 'history';
import Data from '../data/data.json';


class Propdetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            propertyDetails : [],
        }
    }
    componentDidMount = () => {
        this.props.onMount()
    }
    componentWillMount = () => {
        let history = createBrowserHistory();
        let propId = history.location.state;
        const data = Data.rows;
        const propertyDetailsAry = [];
        for(var i=0; i < data.length; i++)
        {
            if(data[i].id == propId){
                propertyDetailsAry.push(data[i])   
            }
        }
        this.setState( {propertyDetails: propertyDetailsAry} )
    }
    render(){
        const propId = this.state.propertyDetails[0]
        return(
            <div className="main">
                <div className="grid-container">
                    <div id="grid-item-1" className="grid-item flex-title">
                        <div className="prop-title">
                            <p id="title">{propId.name}</p>
                        </div>
                        <div className="prop-loc">
                            <p id="loc">{propId.city}</p>
                        </div>
                        <div className="img-cont">
                            <img id="prop-img" alt="property-img" src={require('../img/' + propId.imagesrc)} />
                        </div>
                    </div>
                    <div id="grid-item-3" className="grid-item">
                        <div className="prop-info">
                            <p>{propId.description}</p>
                        </div>
                    </div>
                    <div id="grid-item-2" className="grid-item">
                        <div className="prop-price">
                            <p>{propId.price} {propId.ccy} {propId.pricebasis}</p>
                        </div>
                        <form id="booking-form">
                            <div className="inline-fields">
                                <input className="book-form-field date" type="date" placeholder="Check in date" />
                                <input className="book-form-field date" type="date" placeholder="Check out date" />
                            </div>
                            <div className="inline-fields full-width">
                                <input className="book-form-field" type="number" placeholder="Number of guests" />
                            </div>
                            <div className="inline-fields full-width">
                                <input className="book-form-field form-btn" type="submit" value="Reserve" />
                            </div>
                            <div className="inline-fields full-width">
                                <p>You won't be charged yet</p>
                            </div>
                            <div className="inline-fields full-width">
                                <p>Service Fee: £0</p>
                            </div>
                            <hr/>
                            <div className="inline-fields full-width">
                                <p>Total: £1,500</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Propdetails