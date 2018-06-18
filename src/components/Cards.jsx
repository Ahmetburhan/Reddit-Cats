import React from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Tooltip, UncontrolledTooltip, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import CardsSaved from './CardsSaved';



export default class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popoverOpen: false
        };
 

    }
    state = {
        cats: this.props.cats,
        cat: this.props.cat,

    }

    findDetail = id => {
        let catDetail = this.props.cats.find(cat => id === cat.data.created);
        this.props.handleClick(catDetail)
        console.log("catDetail",catDetail)
        console.log("here is the id clicked", id)

    }
    
   

    render() {
        console.log("props coming here", this.props)
        const cats = this.props.cats;
        console.log("aadassss", cats)
        let picture;
        let catDetail;

       
        console.log("asdasd", picture)
        console.log("aaaaaaaaaaaa", catDetail)

        return (

            <div>
                
                <h2>{this.props.title}</h2>
                {cats && cats.map((cat, index) => {

                    // <CardsSaved handleClick={this.handleClick}
                    //     cats={this.state.cats}
                    //     cat={this.state.selectedCat} />
                    console.log(cat)
                    console.log(index)
                    console.log(cat.data.created)
                    console.log(cat.data.permalink)
                    let trimmedTitle = cat.data.title.substr(0, 12);



                    return (


                        <Col className="col" sm="6" md="4" lg="3" mt="4">

                            <Card style={{
                                fontFamily: 'Helvetica Neue',
                                marginBottom: "1em"
                            }}  >
                                <div key={cat.data.created}>
                                    <CardImg onClick={e => {
                                        e.preventDefault()
                                        this.findDetail(cat.data.created)
                                    }}top width="100%" className="photo2" src={cat.data.url} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle><CardLink href={`https://www.reddit.com/${cat.data.permalink}`} target="_blank">{trimmedTitle}... </CardLink></CardTitle>
                                        <CardSubtitle>{cat.data.title}</CardSubtitle>
                                        <CardText>
                                        </CardText>
                                        <Button onClick={e => {
                                            e.preventDefault()
                                            this.findDetail(cat.data.created)
                                        }} outline color="danger">Save Me <i style={{ verticalAlign: "-0.24em" }} className="fab fa-pinterest fa-2x"></i></Button>{' '}

                                    </CardBody>
                                </div>
                            </Card>
                        </Col>
                    )
                })
                }
            </div>
        )
    }
}