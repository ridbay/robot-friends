import React, { Component } from 'react'
import CardList from '../components/CardList'
// import { robots } from './robots'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
        this.onSearchChange = this.onSearchChange.bind(this)
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
}

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter(robot=>{
            return (robot.name.toLowerCase().includes(searchField.toLowerCase()))
        })
        return !robots.length ? <h1 className='tc'>Loading...</h1> : 
        (
            <div className="tc">
                <h1 className="f1">Ridbay Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
                
            </div> 
            )
        // if(!robots.length){
        //     return <h1 className='tc'>Loading...</h1>
        // } else {
        //     return(
        //         <div className="tc">
        //             <h1 className="f1">Ridbay Robot Friends</h1>
        //             <SearchBox searchChange={this.onSearchChange}/>
        //             <Scroll>
        //                 <CardList robots={filteredRobots} />
        //             </Scroll>
                    
        //         </div> 
        //         )
        // }
        

    }
}

export default App