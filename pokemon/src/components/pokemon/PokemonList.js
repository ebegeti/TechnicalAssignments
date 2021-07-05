import React, {Component} from 'react';
import PokemonItem from './PokemonItem'
import axios from 'axios'

export default class PokemonList extends Component{
    state={
            url:'https://pokeapi.co/api/v2/pokemon',
            pokemons:null,
            next:null,
            previous:null
        };

    async componentDidMount(){
        const res=await axios.get(this.state.url,{
        params: {
              limit: 15,
             }
       });
        this.setState({pokemons: res.data['results'],next:res.data['next'],previous:res.data['previous']});
    }

    clickNext=() => {
          console.log('clicked Next!');
          const res=axios.get(this.state.next)
          .then((response) => {
            const newstate={pokemons: response.data['results'],next:response.data['next'],previous:response.data['previous']}
            this.setState(newstate);
          }, (error) => {
            console.log(error);
          });
        };

    clickPrevious =() => {
          console.log('clicked Previous!');
          const res=axios.get(this.state.previous)
          .then((response) => {
            const previousstate={pokemons: response.data['results'],next:response.data['next'],previous:response.data['previous']}
            this.setState(previousstate);
          }, (error) => {
            console.log(error);
          });
        };

    render(){
        return (
        <div>
            {this.state.pokemons ? (
                <div className="row">
                    {this.state.pokemons.map(pokemon=>(
                    <PokemonItem
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                    ))}
                </div>
                ) : (<h1> Loading Pokemon </h1>)
                }
            {this.state.next && <button className='btn btn-primary' onClick={this.clickNext}>Next</button>}
            {this.state.previous && <button className='btn btn-primary' onClick={this.clickPrevious}>Previous</button>}
        </div>
        )
    }
}
