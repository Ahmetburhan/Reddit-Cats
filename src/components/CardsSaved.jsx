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
    // state = {
    //     cats: this.props.cats,
    //     cat: this.props.selectedCat
    // }

  
   

    // handleClick = (cat) => {
    //     console.log("cat is selected titlecards", cat.data.title)
    //     console.log("cat is selected URLcards", cat.data.url)
    //     this.setState({ 
    //         selectedCats: cat
    //      })
    // }

    onSubmit(filteredcats) {
        this.setState({
            filteredcats,
        })
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

    

        // console.log("hereeeeeee", this.props.cat.kind)
        // const object = this.props.cat.data;
        // const newCat= Object.values(object)
        // title = this.props.cat.data

        // console.log("zzzzzz", this.props.cat)
        // console.log("zzzzzz", this.props.selectedTitle)
     

        

    
        // console.log("testttttt", title)
        // let trimmedTitle = this.props.cat.data.title.substr(0, 12);

       
        // console.log("catDetail on cardsaved", this.props.catDetail)
        // const cat = this.props.selectedCats[0];
        return (

            <div>

                <Cards cats={this.props.selectedCats} />
                
        
            </div>
        )
    }
}