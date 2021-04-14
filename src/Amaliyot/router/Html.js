import React, {Component} from 'react';
import App from "../../useContext/App";

import Memo from '../../useMemo/useMemo';
import Ref from '../../useRef/FocusInput';

//document.title
import DocTitleOne from "../../useDocumentTitle/DocTitleOne";

//usecounter
import CounterOne from "../../useCounter/CounterOne";
import CounterTwo from "../../useCounter/CounterTwo";

//useInput

import UserForm from "../../useInput/useForm";




class Html extends Component {
    render() {
        return (
            <div className='mx-5 pt-5'>
                <h1 align='center'>HTML </h1>
                <App/>
                <hr/>
                <Memo/>
                <hr/>
                <Ref/>
                <DocTitleOne/>
                <CounterOne/>
                <CounterTwo/>

                <UserForm/>


            </div>
        );
    }
}

export default Html;