import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Contact";
import Singlepost from "./components/Singlepost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import index from './content/Content';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/Contact' />
        <Route component={Singlepost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
        <index.js />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
