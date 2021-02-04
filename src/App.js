import React from "react";
// import ReactDOm from 'react-dom'
import "./App.css"
import Gridrow from './components/gridRow/Gridrow'
import Header from "./components/header/Header"
import Footer from './components/footer/Footer'

class App extends React.Component{

  constructor(){
    super();
    this.state={
      gameState:[
      ['','',''],
      ['','',''],
      ['','','']],
      playerTurn : 'X'
    }
  }


  handlePlayerClick = (rowIndex,colIndex)=>{
    let copiedGameState = [...this.state.gameState];
    copiedGameState[rowIndex][colIndex] = this.state.playerTurn;
    this.setState({
      gameState : copiedGameState,
      playerTurn:this.state.playerTurn==='X'?'0':'X'
    })
  }

  render(){
    return (
      <div className="container">
          <Header  />
        <div id="board">
          {/* <Gridrow/>
          <Gridrow/>
          <Gridrow/> */}
          {this.state.gameState.map((row,rowIndex)=>(
            <Gridrow row={row} rowIndex={rowIndex} handlePlayerClick={this.handlePlayerClick} />
          ))}
        </div>
        <Footer turn={this.state.playerTurn}/>
        
      </div>
    )
  }
}

export default App;