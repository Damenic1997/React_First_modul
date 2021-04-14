import styled from 'styled-components';



const StyleH1 = styled.h1`
    font-size: 40px;
    color: blue;
    
`;


const StyleUl = styled.ul`
    list-style: none;
    
    li {
        background-color: red;
        display: block;
        float: left;
        
        a{
            color: white;
            padding: 20px 30px;
        }
        
        a:hover {
             background-color: blue;
                    
        }
    }
`;


export {StyleH1, StyleUl};