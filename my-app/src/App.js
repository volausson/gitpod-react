import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPrevState
 from './components/StatefulGreetingWIthPrevState';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting='nice to meet you!!' name='Mike' age='32' />
      <StatefulGreeting/>
      <StatefulGreetingWithPrevState/>
    </div>
  );
}

export default App;
