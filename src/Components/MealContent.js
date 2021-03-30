import React , {Component} from 'react';
import {Orderconsumer} from "../context";
import Mealproducer from './Mealproducer';

class Mealcontent extends Component{
        render(){
            return (
                <Orderconsumer >
                    {value => {
                        return (
                            <Mealproducer value={value}/>
                        )
                    }}
                </Orderconsumer>
            )
        }
}

export default Mealcontent;

