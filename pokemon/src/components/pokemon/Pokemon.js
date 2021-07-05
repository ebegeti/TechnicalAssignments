import React, {Component} from 'react';
import axios from 'axios'

export default class Pokemon extends Component{
    state={
        abilities:[],
        name:''
    };

    async componentDidMount(){
       const {pokemonIndex}=this.props.match.params;
       const pokemonUrl=`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
       const res=await axios.get(pokemonUrl).then((response) => {
                 const pokemonstate={name:response.data['name'], abilities:response.data['abilities']}
                 this.setState(pokemonstate);

               }, (error) => {
                 console.log(error);
               });
    }

    render(){

        return(
        <div className="card">
            <div className="card-header">
                <h1 className="mx-auto">{this.state.name}</h1>
            </div>
            <div className="card-body">
                <ul>
                    {this.state.abilities && this.state.abilities.map(ability =>{
                         return <li>{ability.ability.name
                                 .toLowerCase()} </li>
                     })}
                </ul>
            </div>
        </div>
        );
    }
}