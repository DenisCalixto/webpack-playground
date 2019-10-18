import React from 'react';
import Character from './components/Character'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webpack App</h1>
        <Character></Character>
        <Character></Character>
        <Character></Character>
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