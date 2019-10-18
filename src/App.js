import React from 'react';
import Character from './components/Character'
import './App.css';

const charArray = [
  {name: 'Mark', race: 'Human', status: 'Full-health', comment: ''},
  {name: 'Goerge', race: 'Demon', status: 'Enraged', comment: 'I\'m so angry!'},
  {name: 'Angela', race: 'Fairy', status: 'Full-health', comment: ''}
];

let listComponent = () => {
  return charArray.map((item) => <Character 
  name={item.name}
  race={item.race}
  status={item.status}
  comment={item.comment}
  />);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webpack App</h1>
        {listComponent()}
        {/* <Character></Character>
        <Character></Character>
        <Character></Character> */}
      </header>
    </div>
  );
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