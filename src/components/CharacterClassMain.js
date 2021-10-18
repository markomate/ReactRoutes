import {Link, Route, useRouteMatch, Switch} from 'react-router-dom'
import BarbarianPage from './CharacterClassComponents/BarbarianPage';
import WizardPage from './CharacterClassComponents/WizardPage';
import ClassNotFoundPage from './CharacterClassComponents/ClassNotFoundPage';

function CharacterClassMain() {
  const {url, path} = useRouteMatch();

  return (
    <div className="CharacterClassMain">
      <h2>Character class hub!</h2>
      <ul>
        <li>
          <Link to={`${url}/wizards`}>About Wizards</Link>
        </li>
        <li>
          <Link to={`${url}/barbarians`}>About Barbarians</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/wizards`}>
          <WizardPage />
        </Route>
        <Route path={`${path}/barbarians`}>
          <BarbarianPage />
        </Route>
        <Route path={`${path}/:nonexistentClass`}>
          <ClassNotFoundPage />
        </Route>
      </Switch>
    </div>
  )
}

export default CharacterClassMain;