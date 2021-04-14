import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Amaliyot from './Amaliyot/amaliyot';
import Menu from './Amaliyot/Menu';

//router
import Html from './Amaliyot/router/Html';
import Css from './Amaliyot/router/Css'
import Js from './Amaliyot/router/Javascript'
import Errors from './Amaliyot/router/Errors'






const App = () => {


    const [text, setText ] = useState('');
    const [ list, setList ] = useState([]);

    const handleInputText = val => {
        setText(val.target.value);
    }


    const handleClick = () => {
       setList([...list, text]);
    }

    return (
        <div>

            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={Amaliyot}/>
                    <Route exact path='/html' component={Html}/>
                    <Route exact path='/css' component={Css}/>
                    <Route exact path='/javascript' component={Js}/>
                    <Route  component={Errors}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
};




export default App;

