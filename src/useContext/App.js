import React from 'react';
import ThemedButton from "./ThemedButton";


const themes = {

    div: {
        width: '25%',
        border: '1px solid blue',
        img_w: '100%',
        height: 'auto',
        title_c: 'blue'
    },
    div2: {

        border: '1px solid blue',
        img_w: '100%',
        height: 'auto',
        title_c: 'red'
    }
};

export const ThemeContext = React.createContext();

function App() {
    return (
        <ThemeContext.Provider value={themes.div2}>
            <ThemedButton />
        </ThemeContext.Provider>
    );
}



export default App;