import React, { Component } from 'react';
import Character from './components/Character'
import './App.css';

const charArray = [
  {name: 'Mark', race: 'Human', status: 'Full-health', comment: ''},
  {name: 'Goerge', race: 'Demon', status: 'Enraged', comment: 'I\'m so angry!'},
  {name: 'Angela', race: 'Fairy', status: 'Full-health', comment: ''}
];

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Webpack App</h1>
          {this.listComponent()}
        </header>
      </div>
    );
  }
  
  listComponent () {
    return charArray.map((item, index) => <Character 
    key={index}
    name={item.name}
    race={item.race}
    status={item.status}
    comment={item.comment}
    />);
  }

}

// function Test(num) {
//   return (
//     <div>
//       <h1>This is just a test</h1>
//     </div>
//   )
// }

export default App;
// export {Test};