import React from 'react';

 class GetDerived extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            favColor: 'red',
            word: 0
        };

    }


    componentDidMount() {
       console.log('componentDidMount');
     setInterval(() => {
         this.setState({word: this.state.word + 1})
     }, 5000)
    }





     shouldComponentUpdate() {
         console.log('should');
         return false;
     }



     changeBTN = () => {
        console.log('btn');
         this.setState({favColor:'grey'});
     }







     render() {
        console.log('rendre');
            return (
                <div>
                    <h1>
                        My favourety color  {this.state.favColor} {this.state.word}
                    </h1>

                    <button onClick={this.changeBTN}>click me</button>
                </div>
            )
        }

}


export default  GetDerived;




