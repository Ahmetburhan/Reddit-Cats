import React from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Tooltip, UncontrolledTooltip, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';


export default class CardsSaved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverOpen: false
        };
        

    }
    state = {
        cats: this.props.cats,
        cat: this.props.selectedCat
    }

  
   

    handleClick = (cat) => {
        console.log("cat is selected titlecards", cat.data.title)
        console.log("cat is selected URLcards", cat.data.url)
        this.setState({ selectedCat: cat })


    }

    onSubmit(filteredcats) {
        this.setState({
            filteredcats,

        })
    }

    render() {
        console.log("props coming here cardssaved", this.props)
        const cats = this.props.cats;
        console.log("cardssavedstuff", this.props.selectedCat)
        let picture;
        let selectedCat;
        let cat;
        let title;

    

        console.log("hereeeeeee", this.props.cat.data)

        // if (this.props.cat.data) {
        //     title = this.props.cat.data.map(
        //         (obj) => (<h2>{obj.title}</h2>)
        //     )

        // }

        


    
        console.log("testttttt", title)
        // let trimmedTitle = this.props.cat.data.title.substr(0, 12);

       
        console.log("catDetail on cardsaved", this.props.catDetail)
        return (

            <div>
                



                        <Col className="col" sm="6" md="4" lg="3" mt="4">

                            <Card style={{
                                fontFamily: 'Helvetica Neue',
                                marginBottom: "1em"
                    }} onClick={this.handleClick} >
                                <div >
                                    <CardImg top width="100%" className="photo2" src={this.props.cat.data.url} alt="Card image cap" />
                                    <CardBody>
                                <CardTitle><CardLink href={`https://www.reddit.com/${this.props.cat.data.permalink}`} target="_blank">{this.props.cat.data.title}... </CardLink></CardTitle>
                                        <CardSubtitle>{this.props.cat.data.title}</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                        <Button outline color="danger">Save Me <i style={{ verticalAlign: "-0.24em" }} className="fab fa-pinterest fa-2x"></i></Button>{' '}

                                    </CardBody>
                                </div>
                            </Card>
                        </Col>
                    )
                )
                } 
            </div>
        )
    }
}