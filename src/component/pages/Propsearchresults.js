import React, {Component} from 'react';
import Propsearchresultsitem from '../page_components/Propsearchresultsitem';
import  {createBrowserHistory} from 'history';

class Propsearchresults extends Component{
    constructor(props){
        super(props);
        this.state ={
            propResults : [],
        }
    }
    componentDidMount = () => {
        let history = createBrowserHistory();
        let results = history.location.state;
        this.setState( {propResults: results} );
    }
    render(){
        return this.state.propResults.map((item) => (
            <Propsearchresultsitem key={item} details={item} />
        ))
    }
}

export default Propsearchresults;