import React, { Component } from "react";
import ReactDOM from 'react-dom'
import QuestionForm from './Form.jsx'
import ApiClient from './APIClient';
import useSWR from '@zeit/swr';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    axios.get(`https://poll-asgard.herokuapp.com/v1/status`) 
    .then(({data}) => {
      console.log(data)
    })
  }
  

  render() {
    return (
      <div className='app'>
        <QuestionForm/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('recommendations'))