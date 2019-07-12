import React,{ Component } from 'react';
import './App.css';
import Image from './components/image';
import Lettre from './components/lettre'

const lettres= 'abcdefghijklmnopqrstuvwxyz'.split('');

class App extends Component {
  state= {
    letterClicked:"",
    phrase:"formule",
    position:0
  }
  handleClick=(lettre)=>{
    console.log()
    let phrase=this.state.phrase.split('')
    if(!phrase.includes(lettre)){
      this.setState({
        position: this.state.position-7
      })
    }
  }
  render(){
    return (
      <div className="App">
        <Image position={this.state.position} />
        <div>
        {lettres.map((l,index)=>(
          <Lettre key={index} lettre={l} onClick={this.handleClick}/>
        ))}
        </div>
        
      </div>
    );
  }
  
}

export default App;
