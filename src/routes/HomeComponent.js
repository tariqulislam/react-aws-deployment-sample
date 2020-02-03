// ./routes/Home.js
import React, {Component} from 'react'

export class Home extends Component {
    /* Add the contructor to initialize the local state of the component */
   
   constructor(props) {
       super(props)
       /* initial the state for component */       
       
        this.state = {
             articles: [
                  {title: "React Redux tutorial 1", id:1},
                  {title: "Typescript Tutorial for beginners", id:2}
        ]}
    }
    render () {
       /* distracting the articles array from state */
       const {articles} = this.state
       return (<ul>{
               /* show the item in list using map function javascript */
                articles.map(el => <li key={el.id}>{el.title}</li>)
              }</ul>)
    }
}
