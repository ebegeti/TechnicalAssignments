import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Item=styled.div`
    box-shadow:#FF0000 !important
    -moz-user-select:none;
    -website-user-select:none;
    -o-user-select:none;
    user-select:none;
`;

const StyledLink=styled(Link)`
    text-decoration:none;
    color:black;
`;

export default class PokemonItem extends Component{

    render(){
        const {name,url}=this.props;
        const pokemonIndex=url.split('/')[url.split('/').length-2];

        return (
        <div className='col-md-3 col-sm-6 mb-5'>

                <Item className="card">
                    <h5 className="card-header">
                        {pokemonIndex}
                    </h5>
                    <div className="card-body mx-auto">
                    <Link to={`/pokemon/${pokemonIndex}`}>
                        <h6 className="card-title ">
                         {name
                         }
                        </h6>
                    </Link>
                    </div>
                </Item>

        </div>
        )
    }
}