import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
