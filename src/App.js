import React from "react";


export default function App() {
 class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne =this.handleAddOne.bind(this);
    this.handleRemoveOne =this.handleRemoveOne.bind(this);
    this.handleReset =this.handleReset.bind(this);
    this.state={
      count:0
    }
  }
  handleAddOne(){
this.setState((prev)=>{
  return{
    count: prev.count + 1
  }
})
  }

  handleRemoveOne(){
this.setState((prev)=>{
  return{
    count: prev.count - 1
  }
})
  }

  handleReset(){
this.setState(()=>{
  return{
    count: this.count = 0
  }
})
  }
  render(){
    return(
      <div>
      <h1>Counter: {this.state.count}</h1>
      <button onClick={this.handleAddOne}>+1</button>
       <button onClick={this.handleRemoveOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
 }

}
