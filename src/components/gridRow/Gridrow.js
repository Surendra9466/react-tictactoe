import React from "react";
import Griditem from "../griditem/Griditem"
import  './gridrow.css'

class Gridrow extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        // let gridRow = [<Griditem/>,<Griditem/>,<Griditem/>]
        return(
            <div className="grid-row">
                {this.props.row.map((col,colIndex)=>(
                    <Griditem handlePlayerClick={this.props.handlePlayerClick} rowIndex={this.props.rowIndex} col={col} colIndex={colIndex} />
                ))}
            </div>
        )
    }
}

export default Gridrow;