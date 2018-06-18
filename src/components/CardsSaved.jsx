import React from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Tooltip, UncontrolledTooltip, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';

import Cards from './Cards';


export default class CardsSaved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: this.props.cats
        };
        

    }
  
  
   

    handleClick = (cat) => {
        console.log("cat is selected titlecards", cat.data.title)
        console.log("cat is selected URLcards", cat.data.url)
        this.setState({ 
            selectedCats: cat
         })
    }

   

    resetForm = () => {
        //this will clear local storage
        window.localStorage.clear();
        //this will rerender the page
        window.location.reload();
        // localStorage.clear();

        this.setState({
            selectedCats:[]
            
        });
    }

    render() {
        console.log("@a", this.props.cats)
        console.log("props coming here cardssaved", this.props)
        const cats = this.props.cats;
        console.log("cardssavedstuff", this.props.selectedCats)
        let picture;
        let selectedCats;
        let title;
        let url;
        let selectedTitle;

    
        return (

            <div>

                <Cards cats={this.props.selectedCats} title={
                    this.props.selectedCats && this.props.selectedCats.length + " Total Cats Selected"
                } />
                <Button className="btn btn-default" type="submit" name="resetForm" value="cancel" onClick={this.resetForm}>Reset</Button>
                
        
            </div>
        )
    }
}