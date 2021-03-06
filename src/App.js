import {Container, Grid} from '@material-ui/core';
import React from 'react'

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import Footer from './components/Footer/Footer'
import Contract from './components/Contract/Contract';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={5}>
        <Grid item xs={12}lg={3} md={4} sm={12} className={`leftBar`}>
          <Profile />
        </Grid>
        <Grid item xs >
          
          <Router>
            <Header />
            <div className='main-content'>
              <Switch>

                <Route path='/contract'>
                  <Contract />
                </Route>

                <Route path='/portfolio'>
                  <Portfolio />
                </Route>

                <Route path='/'>
                  <Resume />
                </Route>
                
              </Switch>

            </div>


          </Router>
          
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
