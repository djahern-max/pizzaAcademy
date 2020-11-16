import React from 'react'
import { Container } from 'react-bootstrap'
import {Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <main>
      <Header/>
      <Container>
        <h1>Yeah Buddy</h1>
      </Container>
      <Footer/>

    </main>
    </>
  );
}

export default App;
