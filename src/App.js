import React, {
    Component
} from 'react';
import request from 'superagent';
import Cards from './components/Cards';
import CardsSaved from './components/CardsSaved';

import SubmitForm from './components/SubmitForm';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardLink, CardSubtitle, Button, Tooltip, UncontrolledTooltip, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat:[],
            cats:[],
            filteredcats: [],
            selectedCat: [] 

        }
     this.onSubmit = this.onSubmit.bind(this);
     this.handleClick = this.handleClick.bind(this);
     
   

    }

    componentWillMount = () => {
      localStorage.getItem("selectedCat") && this.setState({
          selectedCat: JSON.parse(localStorage.getItem("selectedCat"))
      })
    }
    

    componentDidMount() {
        
        request
            .get('https://www.reddit.com/r/cats/top/.json?count=20').then(res => {
                if (res.ok) {
                    console.log(res.body.data.children)
                    console.log(res.body.data.children[0].data.url)
                    console.log(res.body.data.children[0].data.title)

                    this.setState({
                        cats: res.body.data.children,
                    })
                } else {

                    console.log('We found nothing')

                }
            })
    };
    componentWillUpdate = (nextProps, nextState) => {
        localStorage.setItem("selectedCat", JSON.stringify(nextState.selectedCat))

      
    }
    

    handleClick = (cat) => {
        console.log("cat is selected title", cat.data.title)
        console.log("cat is selected URL", cat.data.url)
        this.setState({ 
            selectedCat: cat,
            selectedTitle: cat.data.title,
            selectedUrl: cat.data.url,
            selectedPermalink: cat.data.permalink

        })


    }

    onSubmit (filteredcats) {
     this.setState ({
         filteredcats,

     })
    }

    

    render() {
        console.log("checking", this.state.selectedCat);
        console.log("cat is selected title", this.state.selectedTitle)
        console.log("cat is selected title", this.state.selectedUrl)
        console.log("cat is selected title", this.state.selectedPermalink)




        return ( <div className = "App" >
            

              <CardsSaved handleClick={
                this.handleClick
            }
                cats={
                    this.state.cats
                }
                cat={
                    this.state.selectedCat
                } 
                title={this.state.selectedTitle}
                url={this.state.selectedUrl}
                permalink={this.state.selectedPermalink}
                /> 
                <hr/>
            <Cards handleClick = {
                this.handleClick
            }
            cats = {
                this.state.cats
            }
            cat = {
                this.state.selectedCat
            }/>

            </div>
        )
    }
}
export default App;