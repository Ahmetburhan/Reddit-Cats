import React from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Tooltip, UncontrolledTooltip, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';


export default class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
        

    }
    state = {
        cats: this.props.cats,
    }

    findDetail = id => {
        let catDetail = this.props.cats.find(cat => id === cat.data.created);
        this.props.handleClick(catDetail)
        console.log("bbbbbbbbb",catDetail)
        console.log("bbbbbbbbb", id)

    }
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        console.log("props coming here", this.props)
        const cats = this.props.cats;
        console.log("aadassss", cats)
        let picture;
        // let trimmedTitle = this.props.cat.data.title.substr(0, 12);

       
        console.log("asdasd", picture)
        return (

            <div>
                


{/* 
                        <Col className="col" sm="6" md="4" lg="3" mt="4">

                            <Card style={{
                                fontFamily: 'Helvetica Neue',
                                marginBottom: "1em"
                            }} onClick={e => {
                                e.preventDefault()
                                this.findDetail(this.props.cat.data.created)
                            }} >
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
                } */}
            </div>
        )
    }
}