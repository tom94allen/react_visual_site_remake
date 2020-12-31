import React, {Component} from 'react';
import Searchresultitem from '../page_components/Searchresultitem';

class Searchresults extends Component {
    render(){
        if(this.props.matchSearch.length){
            return this.props.matchSearch.map((item) => (
                <Searchresultitem key={item.id} searchItem={item}/>
            ));
        }else if(this.props.propDeetsSearch.length)
        {
            return this.props.propDeetsSearch.map((item) => (
                <Searchresultitem key={item.id} searchItem={item}/>
            ));
        }
        else{
            return this.props.propDeetsSearch.map((item) => (
                <Searchresultitem key={item.id} searchItem={item}/>
            ));
        }
        
    }
}

export default Searchresults;