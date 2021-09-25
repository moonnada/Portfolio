import {Container, Grid} from '@material-ui/core';
import React from 'react'

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import Footer from './components/Footer/Footer'
<<<<<<< HEAD
import Contact from './components/Contact/Contact';
=======
import Contract from './components/Contract/Contract';
>>>>>>> divided_contract

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
<<<<<<< HEAD
                <Route path='/contact'>
                  <Contact />
=======

                <Route path='/contract'>
                  <Contract />
>>>>>>> divided_contract
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
