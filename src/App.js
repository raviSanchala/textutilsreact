import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
            <Navbar title="MyApp Title" />
            
            <Switch>
              <Route exact path="/">
                <div className='container my-3'>
                  <TextForms heading="This is my form" />
                </div>
              </Route>
              <Route path='/about'>
                <div className='container my-3'>
                  <About />
                </div>
              </Route>
            </Switch>
        </Router>
      </>
  );
}

export default App;
