import './App.css';

import remove from 'lodash/remove';
import sample from 'lodash/sample';
import React, { Component } from 'react';

import schema from './schema';

class App extends Component {

  constructor() {
    super();
    this.state = {
      schema: schema,
      item: sample(schema),
      currentCount: 5,
      score: 0,
    }
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount < 1) { 
      const refreshSchema = remove(this.state.schema, (n) => n.logo !== this.state.item.logo);
      this.setState({
        schema: refreshSchema,
        item: sample(refreshSchema),
        currentCount: 5,
      })
      this.intervalId = setInterval(this.timer.bind(this), 1000);
      clearInterval(this.intervalId);
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  renderContent(){
    if (this.state.schema.length === 1 || this.state.item === undefined){
      return (<div>
      <h3>Congratulations</h3>
        <p>You will be informed about your progress via email</p>
        <p>Points: {this.state.score}</p>
      </div>);
    } else {
      return (
        <div>
          <p className="App-intro">
            <img src={`${process.env.PUBLIC_URL}/logos/codeeurope2.png`} className="App-logo" alt="logo" />
          </p> 
          <div>Time left for this question: {this.state.currentCount}</div>
          {this.state.item.answers.map((answer, i) => 
          <a key={i} onClick={this.buttonClicked.bind(this, answer, this.state.item)}>{answer}</a>
          )}
        </div>
      )
    }
  }

buttonClicked(answer, o) {
    const refreshSchema = remove(this.state.schema, (n) => n.logo !== o.logo);
    
    if (answer == o.correct){
      this.setState({
        currentCount: 5,
        schema: refreshSchema,
        item: sample(refreshSchema),
        points: this.state.score++,
      });
    }
    if (refreshSchema.length !== 0) {
       this.setState({
        currentCount: 5,
        schema: refreshSchema,
        item: sample(refreshSchema),
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to OpsTalent Game</h2>
          <p>Are you ready to join us?</p>
          <img src={`${process.env.PUBLIC_URL}/logos/opstalent.png`} className="App-logo" alt="Opstalent" />
        </div>
        {this.renderContent()}
        <img src={`${process.env.PUBLIC_URL}/logos/codeeurope2.png`} className="App-logo" alt="Codeeurope" />
      </div>     
    );
  }
}

export default App;
