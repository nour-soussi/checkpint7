import './App.css'
import React from 'react'

class App extends React.Component {
  state =  {
        fullName : "flen",
        bio:"brabbi 10 ye mr ",
        img:'image.png' ,
        profession :"developpeur ",
        show:false , 
        count:0,
        interId:0

    
}
componentDidMount() {
const interId=setInterval(()=>{
  this.setState({count:this.state.count+1})
},
    1000
  );
  console.log(this.state.count)
}

/* componentWillUnmount() {
  clearInterval(this.state.interId);
} */

handleShow = () => {
  if( this.state.show){
    this.setState({ show: false });
    }
    
    else{ this.setState({ show: true });
}
};


  render() {
    return (
    <div>
          <h2>the time interval since the last component was mounted {this.state.count}</h2>
          <h2>{this.state.bio}</h2>
          <button onClick={this.handleShow}>change</button>
          <br/>
          {this.state.show ?  <img src={this.state.img} alt='profil' /> : "loading.."}
          
        </div>
    );
  }
};


export default App;
