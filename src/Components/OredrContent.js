import React, { Component } from 'react';
import Order from "./Order"
import Tabel from './Tabel';
import {Orderconsumer} from "../context"

class OredrContent extends Component {
    render() {
        return (
            <Orderconsumer >
                {(value )=> {
                    return (
                    <div>
                        <Order value={value}/>
                        <Tabel value={value}/>
                    </div>
                    )
                }}
            </Orderconsumer>

        );
    }
}

export default OredrContent;