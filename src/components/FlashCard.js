import React, { Component } from "react";



export default class FlashCard extends Component {
  state = { displayQuestion: true }



  handleClick = () => {
    this.setState({
      displayQuestion: !this.state.displayQuestion
    })
  }

  // clicked = () => {
  //   this.setState({
  //     displayQuestion: true
  //   })
  // }


  render() {
    return (
      <div>
        {/* <h2 onClick={this.handleClick}>{this.state.displayQuestion ? this.props.question : null}</h2>
        <p onClick={this.clicked}>{this.state.displayQuestion ? null : this.props.answer}</p> */}
        <h2>{this.state.displayQuestion ? this.props.question : null}</h2>
        <h3>{this.state.displayQuestion ? null : this.props.answer}</h3>
        <button onClick={this.handleClick}>Answer!</button>
      </div>
    );
  }
}