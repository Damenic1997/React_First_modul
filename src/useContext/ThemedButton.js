import React, {useContext} from "react";
import img from "../img/1.png";
import {ThemeContext} from './App';

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <div className='container'>
            <div className='row'>
                <div style={{ border: theme.border}} className='col-4' >
                    <img src={img}  style={{width: theme.img_w}} />
                    <h1 style={{color: theme.title_c}}>Img title</h1>
                </div>
                <div style={{ border: theme.border}} className='col-4' >
                    <img src={img}  style={{width: theme.img_w}} />
                    <h1 style={{color: theme.title_c}}>Img title</h1>

                </div>
                <div style={{ border: theme.border}} className='col-4' >
                    <img src={img}  style={{width:theme.img_w}} />
                    <h1 style={{color: theme.title_c}}>Img title</h1>
                </div>
                <div style={{ border: theme.border}} className='col-4' >
                    <img src={img}  style={{width:theme.img_w}} />
                    <h1 style={{color: theme.title_c}}>Img title</h1>
                </div>
                <div style={{ border: theme.border}} className='col-4' >
                    <img src={img}  style={{width:theme.img_w}} />
                    <h1 style={{color: theme.title_c}}>Img title</h1>
                </div>
                <div style={{ border: theme.border}} className='col-4' >
                    <img src={img}  style={{width:theme.img_w}} />
                    <h1 style={{color: theme.title_c}}>Img title</h1>
                </div>
            </div>
        </div>
    );
}


export default ThemedButton;