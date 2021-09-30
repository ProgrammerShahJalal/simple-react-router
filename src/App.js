import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Friends from './components/friends/Friends';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
