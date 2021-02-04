import React from 'react';
import './griditem.css'
class Griditem extends React.Component{
   
    constructor(props){
        super(props);
    }
   
    render(){
        
        return(
            <div className="grid-item" onClick={()=>{
                this.props.handlePlayerClick(this.props.rowIndex,this.props.colIndex)
            }}>{this.props.col}</div>
        )
    }
}

export default Griditem;