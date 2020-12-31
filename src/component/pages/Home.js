import React, {Component} from 'react';
import Featuredprops from '../page_components/Featuredprops';
import Experiences from '../page_components/Experiences';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: "",
        }
    }
    onSubmit = (e) => {
        this.props.searchCity(this.state.search);
    }
    render(){
        return(
            <div className="container-fluid">
                <div id="featured-props">
                    <h1 className="center-heading light-text" style={{color:"black"}}>Check Out Some Of Our Featured Properties.. </h1>
                    <div className="featured-flex">    
                        <Featuredprops featured={this.props.featuredData}/>
                    </div>
                </div>
                    <Experiences /> 
            </div>
        )
    }   
}

export default Home;