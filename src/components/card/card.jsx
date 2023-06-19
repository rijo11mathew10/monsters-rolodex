import { Component } from "react";

class Card extends Component{
    render(){
        const { name, email, id} =this.props.monster;
       return(
        
        <div className="card-container" key={id}>
        <img height="180px" width="180px" alt={`monster ${name}`} 
        src={`https://robohash.org/${id}?set=set2`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
       )
    }
}

export default Card;