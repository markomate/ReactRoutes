import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'

import WelcomePage from './components/welcompage'
import CharacterClassMain from './components/CharacterClassMain'
import DiceRollMain from './components/DiceRollMain'
import DungeonMasterMain from './components/DungeonMasterMain'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <h1>Dungeons & Dragons</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characterclasses">Class Info</Link>
          </li>
          <li>
            <Link to="/dicerolls">Dice Rolls</Link>
          </li>
          <li>
            <Link to="/gameplanning">DM Secret Area</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/characterclasses">
          <CharacterClassMain />
        </Route>
        <Route path="/dicerolls">
          <DiceRollMain />
        </Route>
        {/* <Route path="/gameplanning">
          <DungeonMasterMain />
        </Route> */}
        <ProtectedRoute component={DungeonMasterMain} path="/gameplanning" />
      </Switch>
    </div>
  );
}

export default App;
