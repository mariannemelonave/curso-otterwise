import { Fragment } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Fragment>
      <Header /> 
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;