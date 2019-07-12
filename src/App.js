import React,{ Component } from 'react';
import './App.css';
import Image from './components/image';
import Lettre from './components/lettre'

const lettres= 'abcdefghijklmnopqrstuvwxyz'.split('');

class App extends Component {
  state= {
    letterClicked:"",
    phrase:"formule",
    position:0,
    phraseAff:'_______'
  }
  handleClick=(letter)=>{
    console.log('1111111',letter)
    let phrase=this.state.phrase.split('')
    let newphraseAff=this.state.phraseAff.split('')
    if(!phrase.includes(letter)){
      this.setState({
        position:this.state.position-7
      })
      return
    }
    console.log('true',phrase.indexOf(letter));
    newphraseAff[phrase.indexOf(letter)]=letter;
    this.setState({
      phraseAff:newphraseAff.join("")
    })
}
  render(){
    return (
      <div className="App">
        <Image position={this.state.position} className="image"/>
        <div>
        {this.state.phraseAff.split('').map((letter,index)=>(
          <Lettre key={index} lettre={letter}/>
          ))}
        </div>
        <div>
        {lettres.map((letter,index)=>(
          <Lettre key={index} lettre={letter} handleClick={()=>this.handleClick(letter)}/>
        ))}
        </div>
      </div>
    );
  }
  
}

export default App;
