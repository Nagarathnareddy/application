import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
            response:this.props.user
             
        }
    }
    
    render() {
        
       
        return (
            <div>
<p>EmailID:{this.state.response.registeredEmail}</p>   
<p>Name:{this.state.response.firstName}</p>
<p>Batch:{this.state.response.batchID}</p>         
</div>
        )
    }
}
