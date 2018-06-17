import React, {
    Component
} from 'react';
import request from 'superagent';
import Cards from './components/Cards';
import SubmitForm from './components/SubmitForm';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: [],
            filteredcats: [],
            selectedCat: []
            

        }
     this.onSubmit = this.onSubmit.bind(this);
     this.handleClick = this.handleClick.bind(this);

    }



    //  this.componentDidMount = this.componentDidMount.bind(this);

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

    handleClick = (cat) => {
        console.log("cat is selected", cat)
        this.setState({ selectedCat: cat })

    }

    onSubmit (filteredcats) {
     this.setState ({
         filteredcats,

     })
    }


    render() {

        return ( <div className = "App" >
             <SubmitForm onSubmit = {this.onSubmit} cats = {
                this.state.cats
            }
            />

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