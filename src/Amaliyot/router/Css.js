import React, {Component} from 'react';
import './all.css';
import {StyleH1, StyleUl} from './Style';
import CounterOne from "../../usereducer/CounterOne";
import CounterTwo from "../../usereducer/CounterTwo";


class Css extends Component {
    render() {
        return (
            <div className='mt-5 css' >
                <StyleH1>styled-component </StyleH1>
                <StyleUl>
                    <li>
                        <a href="#">Helloo</a>
                    </li>
                    <li>
                        <a href="#">Helloo</a>
                    </li>
                    <li>
                        <a href="#">Helloo</a>
                    </li>
                    <li>
                        <a href="#">Helloo</a>
                    </li>
                </StyleUl>

                <hr/>

                <CounterOne/>
                <CounterTwo/>

            </div>
        );
    }
}

export default Css;