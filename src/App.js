import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Culture from './components/Culture/Culture';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/friends/Friends';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/friend/:friendId'>
            <FriendDetail></FriendDetail>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/about/culture'>
            <Culture></Culture>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
