import React, {
    Component
} from 'react';
import request from 'superagent';
import Cards from './components/Cards';
import CardsSaved from './components/CardsSaved';
import _ from 'lodash';

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
            selectedCats: [] 

        }
     this.onSubmit = this.onSubmit.bind(this);
     this.handleClick = this.handleClick.bind(this);
     
   

    }

    componentWillMount = () => {
      localStorage.getItem("selectedCats") && this.setState({
          selectedCats: JSON.parse(localStorage.getItem("selectedCats"))
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
        localStorage.setItem("selectedCats", JSON.stringify(nextState.selectedCats))
        console.log("testing",localStorage.selectedCats)
       
      
    }
    

    handleClick = (cat) => {
        console.log("cat is selected title", cat.data.title)
        console.log("cat is selected URL", cat.data.url)
        const _selectedCats = _.cloneDeep(this.state.selectedCats);
        _selectedCats.push(cat);
        this.setState({ 
            selectedCats: _selectedCats,
            // selectedTitle: cat.data.title,
            // selectedUrl: cat.data.url,
            // selectedPermalink: cat.data.permalink

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
                selectedCats={
                    this.state.selectedCats
                } 
                title={this.state.selectedTitle}
                url={this.state.selectedUrl}
                permalink={this.state.selectedPermalink}
                /> 
                <hr/>
            <Cards handleClick = {
                this.handleClick
            }
            title = {
                this.state.cats && this.state.cats.length + " Total Cats Found"
            }
            cats = {
                this.state.cats
            }
            selectedCats = {
                this.state.selectedCats
            }/>

            </div>
        )
    }
}
export default App;