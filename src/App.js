import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
